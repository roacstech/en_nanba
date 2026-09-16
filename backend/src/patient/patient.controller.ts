import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { PatientService } from './patient.service';
import { ClinicalDecisionDto, CreatePatientDto } from '../common/dto/clinical.dto';

@Controller('api')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Get('system/status')
  getSystemStatus() {
    return this.patientService.getSystemStatus();
  }

  @Get('patients')
  getAllPatients() {
    return this.patientService.getAllPatients();
  }

  @Post('patients')
  createPatient(@Body() dto: CreatePatientDto) {
    return this.patientService.createPatient(dto);
  }

  @Get('patients/:id')
  getPatientById(@Param('id') id: string) {
    return this.patientService.getPatientById(id);
  }

  @Get('patients/:id/ledger')
  getPatientEvidenceLedger(@Param('id') id: string) {
    return this.patientService.getPatientEvidenceLedger(id);
  }

  @Get('patients/:id/decisions')
  getPatientDecisions(@Param('id') id: string) {
    return this.patientService.getDecisions(id);
  }

  @Post('patients/:id/decision')
  recordDecision(
    @Param('id') id: string,
    @Body() dto: ClinicalDecisionDto,
  ) {
    dto.patientId = id;
    return this.patientService.recordDecision(dto);
  }
}
