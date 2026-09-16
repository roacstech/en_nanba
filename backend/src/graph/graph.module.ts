import { Module } from '@nestjs/common';
import { ClinicalGraphService } from './clinical-graph.service';
import { RadarService } from './radar.service';
import { GraphController } from './graph.controller';

@Module({
  controllers: [GraphController],
  providers: [ClinicalGraphService, RadarService],
  exports: [ClinicalGraphService, RadarService],
})
export class GraphModule {}
