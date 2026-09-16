import { Injectable, Logger } from '@nestjs/common';
import { PatientProfile } from '../common/interfaces/clinical.interface';

export interface MaskResult {
  sanitizedText: string;
  maskedFieldsCount: number;
  tokensMap: Record<string, string>;
}

@Injectable()
export class PhiMaskerService {
  private readonly logger = new Logger(PhiMaskerService.name);

  // Masks Protected Health Information (PHI) & PII to satisfy healthcare compliance
  maskPatientData(text: string, patient?: PatientProfile | null): MaskResult {
    let sanitized = text;
    const tokensMap: Record<string, string> = {};
    let count = 0;

    // 1. Mask patient specific demographics if provided
    if (patient) {
      if (patient.fullName && sanitized.includes(patient.fullName)) {
        sanitized = sanitized.replaceAll(patient.fullName, '[PATIENT_NAME_REDACTED]');
        tokensMap['[PATIENT_NAME_REDACTED]'] = patient.fullName;
        count++;
      }
      if (patient.phone && sanitized.includes(patient.phone)) {
        sanitized = sanitized.replaceAll(patient.phone, '[PHONE_REDACTED]');
        tokensMap['[PHONE_REDACTED]'] = patient.phone;
        count++;
      }
      if (patient.enNanbaId && sanitized.includes(patient.enNanbaId)) {
        sanitized = sanitized.replaceAll(patient.enNanbaId, '[EN_NANBA_ID_REDACTED]');
        tokensMap['[EN_NANBA_ID_REDACTED]'] = patient.enNanbaId;
        count++;
      }
      if (patient.dob && sanitized.includes(patient.dob)) {
        sanitized = sanitized.replaceAll(patient.dob, '[DOB_REDACTED]');
        tokensMap['[DOB_REDACTED]'] = patient.dob;
        count++;
      }
    }

    // 2. Generic Phone Number Masking (e.g. +91 98401 23456 or 9840123456)
    const phoneRegex = /(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;
    sanitized = sanitized.replace(phoneRegex, match => {
      count++;
      return '[PHONE_REDACTED]';
    });

    // 3. Generic Email Masking
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    sanitized = sanitized.replace(emailRegex, match => {
      count++;
      return '[EMAIL_REDACTED]';
    });

    // 4. MRN / Aadhaar / National ID pattern masking
    const idRegex = /\b(?:MRN|UHID|AADHAAR|SSN)\s*[:#-]?\s*([0-9A-Z-]+)\b/gi;
    sanitized = sanitized.replace(idRegex, (match, val) => {
      count++;
      return `[ID_REDACTED]`;
    });

    return {
      sanitizedText: sanitized,
      maskedFieldsCount: count,
      tokensMap,
    };
  }
}
