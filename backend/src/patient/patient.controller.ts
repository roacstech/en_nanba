import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { PatientService } from './patient.service';
import {
  ClinicalDecisionDto,
  CreatePatientDto,
  UpdatePatientDto,
  PatientIntakeDto,
  DoctorLoginDto,
  PatientLoginDto,
  PatientSignupDto,
} from '../common/dto/clinical.dto';

@Controller(['api', ''])
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  // ==========================================
  // Authentication & Onboarding Endpoints
  // ==========================================

  @Post('auth/doctor-login')
  doctorLogin(@Body() dto: DoctorLoginDto) {
    return this.patientService.loginDoctor(dto);
  }

  @Post('auth/patient-login')
  patientLogin(@Body() dto: PatientLoginDto) {
    return this.patientService.loginPatient(dto);
  }

  @Post('auth/patient-signup')
  patientSignup(@Body() dto: PatientSignupDto) {
    return this.patientService.signupPatient(dto);
  }

  @Post('auth/complete-onboarding/:userId')
  completeOnboarding(
    @Param('userId') userId: string,
    @Body() dto: PatientIntakeDto,
  ) {
    return this.patientService.completePatientOnboarding(userId, dto);
  }


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

  @Put('patients/:id')
  updatePatient(@Param('id') id: string, @Body() dto: UpdatePatientDto) {
    return this.patientService.updatePatient(id, dto);
  }

  @Post('patients/intake')
  submitPatientIntake(@Body() dto: PatientIntakeDto) {
    return this.patientService.registerOrUpdatePatientIntake(dto);
  }

  @Get('patients/:id/report')
  getPatientReport(@Param('id') id: string) {
    return this.patientService.getPatientConsolidatedReport(id);
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

