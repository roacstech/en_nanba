import { Module } from '@nestjs/common';
import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';
import { AiModule } from '../ai/ai.module';
import { GraphModule } from '../graph/graph.module';

@Module({
  imports: [AiModule, GraphModule],
  controllers: [PatientController],
  providers: [PatientService],
  exports: [PatientService],
})
export class PatientModule {}

