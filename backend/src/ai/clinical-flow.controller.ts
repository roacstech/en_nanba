import { Controller, Post, Body } from '@nestjs/common';
import { ClinicalFlowService } from './clinical-flow.service';
import { ClinicalFlowExecutePayload } from '../common/interfaces/clinical.interface';

@Controller(['api/clinical-flow', 'clinical-flow'])
export class ClinicalFlowController {
  constructor(private readonly clinicalFlowService: ClinicalFlowService) {}

  @Post('execute')
  async executeFlow(@Body() payload: ClinicalFlowExecutePayload) {
    return this.clinicalFlowService.executeFlow(payload);
  }

  @Post('decision')
  async recordDecision(
    @Body()
    body: {
      patientId: string;
      decision: 'ACCEPT' | 'MODIFY' | 'REJECT';
      doctorName: string;
      notes?: string;
      signature?: string;
    },
  ) {
    return this.clinicalFlowService.recordDecision(body);
  }
}
