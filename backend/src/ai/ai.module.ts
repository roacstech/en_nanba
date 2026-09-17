import { Module, forwardRef } from '@nestjs/common';
import { GeminiService } from './gemini.service';
import { PhiMaskerService } from './phi-masker.service';
import { LangChainOrchestratorService } from './langchain-orchestrator.service';
import { ClinicalFlowService } from './clinical-flow.service';
import { AiController } from './ai.controller';
import { ClinicalFlowController } from './clinical-flow.controller';
import { GraphModule } from '../graph/graph.module';
import { NormalizationModule } from '../normalization/normalization.module';

@Module({
  imports: [GraphModule, forwardRef(() => NormalizationModule)],
  controllers: [AiController, ClinicalFlowController],
  providers: [
    GeminiService,
    PhiMaskerService,
    LangChainOrchestratorService,
    ClinicalFlowService,
  ],
  exports: [
    GeminiService,
    PhiMaskerService,
    LangChainOrchestratorService,
    ClinicalFlowService,
  ],
})
export class AiModule {}

