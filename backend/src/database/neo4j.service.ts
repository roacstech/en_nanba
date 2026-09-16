import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import neo4j, { Driver, Session } from 'neo4j-driver';
import { GraphNode, GraphRelationship, PatientGraphData } from '../common/interfaces/clinical.interface';

@Injectable()
export class Neo4jService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(Neo4jService.name);
  private driver: Driver | null = null;
  private isConnected = false;

  // In-Memory Graph Fallback Store
  private inMemoryNodes: Map<string, GraphNode> = new Map();
  private inMemoryRelationships: GraphRelationship[] = [];

  constructor(private configService: ConfigService) {}

  async onModuleInit() {
    const uri = this.configService.get<string>('NEO4J_URI', 'bolt://localhost:7687');
    const user = this.configService.get<string>('NEO4J_USER', 'neo4j');
    const password = this.configService.get<string>('NEO4J_PASSWORD', 'nanba_graph_pass123');

    try {
      this.driver = neo4j.driver(uri, neo4j.auth.basic(user, password), {
        connectionTimeout: 3000,
        maxConnectionLifetime: 30000,
      });
      await this.driver.verifyConnectivity();
      this.isConnected = true;
      this.logger.log(`Successfully connected to Neo4j at ${uri}`);
    } catch (err: any) {
      this.isConnected = false;
      this.logger.warn(`Neo4j connection failed (${err.message}). Activating In-Memory Clinical Graph Engine.`);
    }
  }

  async onModuleDestroy() {
    if (this.driver) {
      await this.driver.close();
    }
  }

  getConnectivityStatus(): { isConnected: boolean; mode: 'NEO4J_LIVE' | 'IN_MEMORY_GRAPH' } {
    return {
      isConnected: this.isConnected,
      mode: this.isConnected ? 'NEO4J_LIVE' : 'IN_MEMORY_GRAPH',
    };
  }

  // Add or update a Node
  async createNode(node: GraphNode): Promise<GraphNode> {
    if (this.isConnected && this.driver) {
      const session: Session = this.driver.session();
      try {
        await session.run(
          `MERGE (n:${node.label} {id: $id})
           SET n += $props
           RETURN n`,
          { id: node.id, props: node.properties },
        );
      } catch (e: any) {
        this.logger.error(`Error writing node to Neo4j: ${e.message}`);
      } finally {
        await session.close();
      }
    }

    // Always keep in-memory synchronized
    this.inMemoryNodes.set(node.id, node);
    return node;
  }

  // Create a Relationship
  async createRelationship(rel: GraphRelationship): Promise<GraphRelationship> {
    if (this.isConnected && this.driver) {
      const session: Session = this.driver.session();
      try {
        await session.run(
          `MATCH (source {id: $sourceId}), (target {id: $targetId})
           MERGE (source)-[r:${rel.type}]->(target)
           SET r += $props
           RETURN r`,
          { sourceId: rel.sourceId, targetId: rel.targetId, props: rel.properties || {} },
        );
      } catch (e: any) {
        this.logger.error(`Error writing relationship to Neo4j: ${e.message}`);
      } finally {
        await session.close();
      }
    }

    // In-memory fallback
    const exists = this.inMemoryRelationships.some(
      r => r.sourceId === rel.sourceId && r.targetId === rel.targetId && r.type === rel.type
    );
    if (!exists) {
      this.inMemoryRelationships.push(rel);
    }
    return rel;
  }

  // Retrieve Graph for Patient
  async getPatientGraph(patientId: string): Promise<PatientGraphData> {
    if (this.isConnected && this.driver) {
      const session: Session = this.driver.session();
      try {
        const result = await session.run(
          `MATCH (p:Patient {id: $patientId})-[r]-(target)
           RETURN p, r, target`,
          { patientId },
        );

        const nodesMap = new Map<string, GraphNode>();
        const relationships: GraphRelationship[] = [];

        result.records.forEach(rec => {
          const p = rec.get('p');
          const r = rec.get('r');
          const target = rec.get('target');

          nodesMap.set(p.properties.id, {
            id: p.properties.id,
            label: p.labels[0] as any,
            properties: p.properties,
          });

          nodesMap.set(target.properties.id, {
            id: target.properties.id,
            label: target.labels[0] as any,
            properties: target.properties,
          });

          relationships.push({
            id: String(r.identity),
            sourceId: r.startNodeElementId ? target.properties.id : p.properties.id,
            targetId: r.endNodeElementId ? target.properties.id : p.properties.id,
            type: r.type,
            properties: r.properties,
          });
        });

        if (nodesMap.size > 0) {
          return {
            patientId,
            nodes: Array.from(nodesMap.values()),
            relationships,
          };
        }
      } catch (e: any) {
        this.logger.warn(`Neo4j query failed: ${e.message}. Using in-memory graph.`);
      } finally {
        await session.close();
      }
    }

    // In-memory fallback query
    const relatedRels = this.inMemoryRelationships.filter(
      r => r.sourceId === patientId || r.targetId === patientId,
    );

    // Also get secondary links (e.g. Medication contraindicated with Medication)
    const connectedNodeIds = new Set<string>([patientId]);
    relatedRels.forEach(r => {
      connectedNodeIds.add(r.sourceId);
      connectedNodeIds.add(r.targetId);
    });

    const secondaryRels = this.inMemoryRelationships.filter(
      r => connectedNodeIds.has(r.sourceId) && connectedNodeIds.has(r.targetId) && r.sourceId !== patientId && r.targetId !== patientId
    );

    const allRels = [...relatedRels, ...secondaryRels];
    const nodes: GraphNode[] = [];
    connectedNodeIds.forEach(id => {
      const node = this.inMemoryNodes.get(id);
      if (node) nodes.push(node);
    });

    return {
      patientId,
      nodes,
      relationships: allRels,
    };
  }

  // Get all in-memory relationships for radar inspection
  getAllRelationships(): GraphRelationship[] {
    return this.inMemoryRelationships;
  }

  getAllNodes(): GraphNode[] {
    return Array.from(this.inMemoryNodes.values());
  }

  clearInMemory() {
    this.inMemoryNodes.clear();
    this.inMemoryRelationships = [];
  }
}
