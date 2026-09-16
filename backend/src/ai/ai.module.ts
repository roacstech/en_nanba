import { Module } from '@nestjs/common';
import { GeminiService } from './gemini.service';
import { PhiMaskerService } from './phi-masker.service';
import { LangChainOrchestratorService } from './langchain-orchestrator.service';
import { AiController } from './ai.controller';
import { GraphModule } from '../graph/graph.module';

@Module({
  imports: [GraphModule],
  controllers: [AiController],
  providers: [GeminiService, PhiMaskerService, LangChainOrchestratorService],
  exports: [GeminiService, PhiMaskerService, LangChainOrchestratorService],
})
export class AiModule {}
