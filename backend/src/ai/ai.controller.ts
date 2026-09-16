import { Controller, Post, Body } from '@nestjs/common';
import { LangChainOrchestratorService } from './langchain-orchestrator.service';
import { PhiMaskerService } from './phi-masker.service';
import { RunReasoningDto } from '../common/dto/clinical.dto';

@Controller('api/ai')
export class AiController {
  constructor(
    private readonly orchestrator: LangChainOrchestratorService,
    private readonly phiMasker: PhiMaskerService,
  ) {}

  @Post('reasoning')
  async runReasoning(@Body() dto: RunReasoningDto) {
    return this.orchestrator.executeClinicalReasoning(dto.patientId, dto.clinicalNote);
  }

  @Post('mask-phi')
  async maskPhi(@Body() body: { text: string }) {
    return this.phiMasker.maskPatientData(body.text);
  }
}
