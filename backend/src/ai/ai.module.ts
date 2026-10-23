import { Module, forwardRef } from '@nestjs/common';
import { LlmModule } from '../llm/llm.module';
import { PhiMaskerService } from './phi-masker.service';
import { LangChainOrchestratorService } from './langchain-orchestrator.service';
import { ClinicalFlowService } from './clinical-flow.service';
import { AiController } from './ai.controller';
import { ClinicalFlowController } from './clinical-flow.controller';
import { GraphModule } from '../graph/graph.module';
import { NormalizationModule } from '../normalization/normalization.module';

@Module({
  imports: [GraphModule,LlmModule, forwardRef(() => NormalizationModule)],
  controllers: [AiController, ClinicalFlowController],
  providers: [
    PhiMaskerService,
    LangChainOrchestratorService,
    ClinicalFlowService,
  ],
  exports: [
    LlmModule,
    PhiMaskerService,
    LangChainOrchestratorService,
    ClinicalFlowService,
  ],
})
export class AiModule {}

