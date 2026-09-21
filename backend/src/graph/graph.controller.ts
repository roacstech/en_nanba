import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ClinicalGraphService } from './clinical-graph.service';
import { RadarService } from './radar.service';
import { GraphNode, GraphRelationship } from '../common/interfaces/clinical.interface';

@Controller(['api/graph', 'graph'])
export class GraphController {
  constructor(
    private readonly clinicalGraphService: ClinicalGraphService,
    private readonly radarService: RadarService,
  ) {}

  @Get(':patientId')
  async getPatientGraph(@Param('patientId') patientId: string) {
    return this.clinicalGraphService.getPatientGraph(patientId);
  }

  @Get(':patientId/radar')
  async getRadarAlerts(@Param('patientId') patientId: string) {
    return this.radarService.evaluatePatientRadar(patientId);
  }

  @Post('node')
  async addNode(@Body() node: GraphNode) {
    return this.clinicalGraphService.addNode(node);
  }

  @Post('relationship')
  async addRelationship(@Body() rel: GraphRelationship) {
    return this.clinicalGraphService.addRelationship(rel);
  }

  @Post('seed')
  async reseed() {
    await this.clinicalGraphService.seedDefaultPatientGraphs();
    return { status: 'OK', message: 'Sample clinical graphs reseeded' };
  }
}
