import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { Neo4jService } from '../database/neo4j.service';
import { PatientGraphData, GraphNode, GraphRelationship } from '../common/interfaces/clinical.interface';

@Injectable()
export class ClinicalGraphService implements OnModuleInit {
  private readonly logger = new Logger(ClinicalGraphService.name);

  constructor(private neo4jService: Neo4jService) {}

  async onModuleInit() {
    await this.seedDefaultPatientGraphs();
  }

  async getPatientGraph(patientId: string): Promise<PatientGraphData> {
    return this.neo4jService.getPatientGraph(patientId);
  }

  async addNode(node: GraphNode): Promise<GraphNode> {
    return this.neo4jService.createNode(node);
  }

  async addRelationship(rel: GraphRelationship): Promise<GraphRelationship> {
    return this.neo4jService.createRelationship(rel);
  }

  // Seed sample patient scenarios (P-1001: Rajesh Kumar, P-1002: Priya Sharma)
  async seedDefaultPatientGraphs() {
    this.logger.log('Seeding Patient Clinical Graph models into Neo4j...');

    // ==========================================
    // Patient P-1001: Rajesh Kumar (Cardiometabolic Risk)
    // Has Type 2 Diabetes, Hypertension, Angina symptoms, Sildenafil, Impending Nitrate, Missing eGFR
    // ==========================================
    const p1: GraphNode = {
      id: 'P-1001',
      label: 'Patient',
      properties: { id: 'P-1001', name: 'Rajesh Kumar', age: 58, gender: 'M' },
    };

    const s1_1: GraphNode = {
      id: 'sym-chest-pain',
      label: 'Symptom',
      properties: { id: 'sym-chest-pain', name: 'Exertional Chest Tightness', icdCode: 'BA40', onset: '2026-09-01' },
    };

    const s1_2: GraphNode = {
      id: 'sym-fatigue',
      label: 'Symptom',
      properties: { id: 'sym-fatigue', name: 'Postprandial Fatigue', onset: '2026-08-15' },
    };

    const d1_1: GraphNode = {
      id: 'diag-t2d',
      label: 'Diagnosis',
      properties: { id: 'diag-t2d', name: 'Type 2 Diabetes Mellitus', icdCode: '5A11', system: 'ICD-11', diagnosedDate: '2024-01-10' },
    };

    const d1_2: GraphNode = {
      id: 'diag-htn',
      label: 'Diagnosis',
      properties: { id: 'diag-htn', name: 'Essential Hypertension', icdCode: 'BA00', system: 'ICD-11', diagnosedDate: '2024-01-10' },
    };

    const m1_1: GraphNode = {
      id: 'med-metformin',
      label: 'Medication',
      properties: { id: 'med-metformin', name: 'Metformin HCl 500mg', rxNormCode: '6809', dosage: '500mg BID', startDate: '2024-01-15' },
    };

    const m1_2: GraphNode = {
      id: 'med-lisinopril',
      label: 'Medication',
      properties: { id: 'med-lisinopril', name: 'Lisinopril 10mg', rxNormCode: '29046', dosage: '10mg OD', startDate: '2024-02-01' },
    };

    const m1_3: GraphNode = {
      id: 'med-sildenafil',
      label: 'Medication',
      properties: { id: 'med-sildenafil', name: 'Sildenafil 50mg', rxNormCode: '136443', dosage: '50mg PRN', startDate: '2026-08-10' },
    };

    const m1_4: GraphNode = {
      id: 'med-nitroglycerin',
      label: 'Medication',
      properties: { id: 'med-nitroglycerin', name: 'Nitroglycerin 0.4mg SL', rxNormCode: '7052', dosage: '0.4mg PRN', startDate: '2026-09-14' },
    };

    const inv1_1: GraphNode = {
      id: 'inv-hba1c',
      label: 'Investigation',
      properties: { id: 'inv-hba1c', name: 'Hemoglobin A1c', loincCode: '4548-4', value: '8.4', unit: '%', date: '2026-08-20' },
    };

    // Store nodes
    await this.neo4jService.createNode(p1);
    await this.neo4jService.createNode(s1_1);
    await this.neo4jService.createNode(s1_2);
    await this.neo4jService.createNode(d1_1);
    await this.neo4jService.createNode(d1_2);
    await this.neo4jService.createNode(m1_1);
    await this.neo4jService.createNode(m1_2);
    await this.neo4jService.createNode(m1_3);
    await this.neo4jService.createNode(m1_4);
    await this.neo4jService.createNode(inv1_1);

    // Patient relationships
    await this.neo4jService.createRelationship({ id: 'r1', sourceId: 'P-1001', targetId: 'sym-chest-pain', type: 'EXPERIENCES' });
    await this.neo4jService.createRelationship({ id: 'r2', sourceId: 'P-1001', targetId: 'sym-fatigue', type: 'EXPERIENCES' });
    await this.neo4jService.createRelationship({ id: 'r3', sourceId: 'P-1001', targetId: 'diag-t2d', type: 'DIAGNOSED_WITH' });
    await this.neo4jService.createRelationship({ id: 'r4', sourceId: 'P-1001', targetId: 'diag-htn', type: 'DIAGNOSED_WITH' });
    await this.neo4jService.createRelationship({ id: 'r5', sourceId: 'P-1001', targetId: 'med-metformin', type: 'PRESCRIBED' });
    await this.neo4jService.createRelationship({ id: 'r6', sourceId: 'P-1001', targetId: 'med-lisinopril', type: 'PRESCRIBED' });
    await this.neo4jService.createRelationship({ id: 'r7', sourceId: 'P-1001', targetId: 'med-sildenafil', type: 'PRESCRIBED' });
    await this.neo4jService.createRelationship({ id: 'r8', sourceId: 'P-1001', targetId: 'med-nitroglycerin', type: 'PRESCRIBED' });
    await this.neo4jService.createRelationship({ id: 'r9', sourceId: 'P-1001', targetId: 'inv-hba1c', type: 'INVESTIGATED_WITH' });

    // Contraindication relationship directly in graph
    await this.neo4jService.createRelationship({
      id: 'rel-contra-sil-nitro',
      sourceId: 'med-sildenafil',
      targetId: 'med-nitroglycerin',
      type: 'CONTRAINDICATED_WITH',
      properties: { severity: 'CRITICAL', mechanism: 'Severe Vasodilation / Fatal Hypotension Risk' },
    });

    // ==========================================
    // Patient P-1002: Priya Sharma (Penicillin Allergy + Amoxicillin)
    // ==========================================
    const p2: GraphNode = {
      id: 'P-1002',
      label: 'Patient',
      properties: { id: 'P-1002', name: 'Priya Sharma', age: 34, gender: 'F' },
    };

    const all2_1: GraphNode = {
      id: 'all-penicillin',
      label: 'Allergy',
      properties: { id: 'all-penicillin', name: 'Penicillin', severity: 'ANAPHYLAXIS', icdCode: '4A80' },
    };

    const s2_1: GraphNode = {
      id: 'sym-productive-cough',
      label: 'Symptom',
      properties: { id: 'sym-productive-cough', name: 'Purulent Cough & Fever', onset: '2026-09-13' },
    };

    const d2_1: GraphNode = {
      id: 'diag-bronchitis',
      label: 'Diagnosis',
      properties: { id: 'diag-bronchitis', name: 'Acute Bronchitis', icdCode: 'CA20', system: 'ICD-11' },
    };

    const m2_1: GraphNode = {
      id: 'med-amoxicillin',
      label: 'Medication',
      properties: { id: 'med-amoxicillin', name: 'Amoxicillin 500mg', rxNormCode: '723', dosage: '500mg TID' },
    };

    await this.neo4jService.createNode(p2);
    await this.neo4jService.createNode(all2_1);
    await this.neo4jService.createNode(s2_1);
    await this.neo4jService.createNode(d2_1);
    await this.neo4jService.createNode(m2_1);

    await this.neo4jService.createRelationship({ id: 'r20', sourceId: 'P-1002', targetId: 'all-penicillin', type: 'HAS_ALLERGY' });
    await this.neo4jService.createRelationship({ id: 'r21', sourceId: 'P-1002', targetId: 'sym-productive-cough', type: 'EXPERIENCES' });
    await this.neo4jService.createRelationship({ id: 'r22', sourceId: 'P-1002', targetId: 'diag-bronchitis', type: 'DIAGNOSED_WITH' });
    await this.neo4jService.createRelationship({ id: 'r23', sourceId: 'P-1002', targetId: 'med-amoxicillin', type: 'PRESCRIBED' });
    await this.neo4jService.createRelationship({
      id: 'rel-contra-pen-amox',
      sourceId: 'med-amoxicillin',
      targetId: 'all-penicillin',
      type: 'CONFLICTS_WITH',
      properties: { severity: 'CRITICAL', mechanism: 'Cross-reactive beta-lactam anaphylaxis' },
    });

    this.logger.log('Sample Patient Clinical Graphs seeded successfully.');
  }
}
