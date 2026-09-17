import { IsString, IsNotEmpty, IsOptional, IsEnum, IsArray, IsEmail } from 'class-validator';

export class DoctorLoginDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class PatientLoginDto {
  @IsString()
  @IsNotEmpty()
  identifier: string; // email or phone

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class PatientSignupDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class IngestTextDto {
  @IsString()
  @IsNotEmpty()
  patientId: string;

  @IsString()
  @IsNotEmpty()
  clinicalText: string;

  @IsString()
  @IsOptional()
  documentType?: string; // 'doctor_notes', 'discharge_summary', 'lab_report', 'prescription'

  @IsString()
  @IsOptional()
  encounterDate?: string;
}

export class IngestFhirDto {
  @IsString()
  @IsNotEmpty()
  patientId: string;

  @IsNotEmpty()
  fhirBundle: Record<string, any>;
}

export class NormalizeQueryDto {
  @IsString()
  @IsNotEmpty()
  term: string;

  @IsOptional()
  @IsEnum(['ICD-11', 'LOINC', 'RxNorm', 'UCUM', 'ALL'])
  system?: 'ICD-11' | 'LOINC' | 'RxNorm' | 'UCUM' | 'ALL';

  @IsOptional()
  limit?: number;
}

export class ClinicalDecisionDto {
  @IsString()
  @IsNotEmpty()
  patientId: string;

  @IsEnum(['ACCEPT', 'MODIFY', 'REJECT'])
  decision: 'ACCEPT' | 'MODIFY' | 'REJECT';

  @IsString()
  @IsOptional()
  reasoningNotes?: string;

  @IsString()
  @IsOptional()
  modifiedPrescription?: string;

  @IsString()
  @IsNotEmpty()
  doctorName: string;
}

export class RunReasoningDto {
  @IsString()
  @IsNotEmpty()
  patientId: string;

  @IsString()
  @IsOptional()
  clinicalNote?: string;
}

export class CreatePatientDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  enNanbaId: string;

  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsNotEmpty()
  age: number;

  @IsString()
  @IsNotEmpty()
  gender: 'M' | 'F' | 'Other';

  @IsString()
  @IsNotEmpty()
  dob: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsOptional()
  bloodType?: string;

  @IsArray()
  @IsOptional()
  chronicConditions?: string[];

  @IsArray()
  @IsOptional()
  allergies?: string[];

  @IsOptional()
  vitals?: Record<string, any>;
}
