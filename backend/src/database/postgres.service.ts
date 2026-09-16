import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';
import { PatientProfile, EvidenceLedgerEntry, ClinicalDecisionPayload } from '../common/interfaces/clinical.interface';

@Injectable()
export class PostgresService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PostgresService.name);
  private pool: Pool | null = null;
  private isConnected = false;

  // In-Memory Relational Fallback Store
  private inMemoryPatients: Map<string, PatientProfile> = new Map();
  private inMemoryEvidenceLedger: EvidenceLedgerEntry[] = [];
  private inMemoryDecisions: ClinicalDecisionPayload[] = [];
  private inMemoryAuditLogs: Array<{ id: string; action: string; details: any; timestamp: string }> = [];

  constructor(private configService: ConfigService) {}

  async onModuleInit() {
    const host = this.configService.get<string>('POSTGRES_HOST', 'localhost');
    const port = this.configService.get<number>('POSTGRES_PORT', 5432);
    const user = this.configService.get<string>('POSTGRES_USER', 'nanba_admin');
    const password = this.configService.get<string>('POSTGRES_PASSWORD', 'nanba_secure_pass123');
    const database = this.configService.get<string>('POSTGRES_DB', 'en_nanban_clinical');

    try {
      this.pool = new Pool({
        host,
        port,
        user,
        password,
        database,
        connectionTimeoutMillis: 2500,
      });

      const client = await this.pool.connect();
      client.release();
      this.isConnected = true;
      this.logger.log(`Successfully connected to PostgreSQL at ${host}:${port}/${database}`);
      await this.initTables();
    } catch (err: any) {
      this.isConnected = false;
      this.logger.warn(`PostgreSQL connection failed (${err.message}). Activating In-Memory Transactional Store.`);
    }

    this.seedDefaultPatients();
  }

  async onModuleDestroy() {
    if (this.pool) {
      await this.pool.end();
    }
  }

  getConnectivityStatus(): { isConnected: boolean; mode: 'POSTGRES_LIVE' | 'IN_MEMORY_STORE'; patientCount: number } {
    return {
      isConnected: this.isConnected,
      mode: this.isConnected ? 'POSTGRES_LIVE' : 'IN_MEMORY_STORE',
      patientCount: this.inMemoryPatients.size,
    };
  }

  private async initTables() {
    if (!this.pool || !this.isConnected) return;
    try {
      await this.pool.query(`
        CREATE TABLE IF NOT EXISTS patients (
          id VARCHAR(64) PRIMARY KEY,
          en_nanba_id VARCHAR(64) UNIQUE NOT NULL,
          full_name VARCHAR(255) NOT NULL,
          age INT NOT NULL,
          gender VARCHAR(10) NOT NULL,
          dob VARCHAR(20) NOT NULL,
          phone VARCHAR(30) NOT NULL,
          blood_type VARCHAR(10),
          chronic_conditions JSONB,
          allergies JSONB,
          vitals JSONB,
          created_at TIMESTAMPTZ DEFAULT NOW(),
          updated_at TIMESTAMPTZ DEFAULT NOW()
        );

        CREATE TABLE IF NOT EXISTS evidence_ledger (
          id VARCHAR(64) PRIMARY KEY,
          patient_id VARCHAR(64) NOT NULL,
          claim TEXT NOT NULL,
          source_document VARCHAR(255) NOT NULL,
          status_tag VARCHAR(50) NOT NULL,
          confidence_score FLOAT NOT NULL,
          clinical_significance TEXT,
          recorded_at TIMESTAMPTZ DEFAULT NOW()
        );

        CREATE TABLE IF NOT EXISTS clinical_decisions (
          id SERIAL PRIMARY KEY,
          patient_id VARCHAR(64) NOT NULL,
          decision VARCHAR(50) NOT NULL,
          doctor_name VARCHAR(255) NOT NULL,
          reasoning_notes TEXT,
          modified_prescription TEXT,
          created_at TIMESTAMPTZ DEFAULT NOW()
        );

        CREATE TABLE IF NOT EXISTS audit_logs (
          id VARCHAR(64) PRIMARY KEY,
          action VARCHAR(100) NOT NULL,
          details JSONB,
          timestamp TIMESTAMPTZ DEFAULT NOW()
        );
      `);
      this.logger.log('PostgreSQL schema verified.');
    } catch (e: any) {
      this.logger.error(`Error initializing PostgreSQL schema: ${e.message}`);
    }
  }

  seedDefaultPatients() {
    const p1: PatientProfile = {
      id: 'P-1001',
      enNanbaId: 'EN-IND-2026-09812',
      fullName: 'Rajesh Kumar',
      age: 58,
      gender: 'M',
      dob: '1968-04-12',
      phone: '+91 98401 23456',
      bloodType: 'B+',
      chronicConditions: ['Type 2 diabetes mellitus', 'Essential hypertension', 'Angina pectoris'],
      allergies: ['Dust mites', 'Sulfa drugs (mild rash)'],
      vitals: {
        bloodPressure: '152/94 mmHg',
        heartRate: 82,
        bloodGlucose: '184 mg/dL',
        oxygenSaturation: 97,
        bmi: 28.4,
      },
      createdAt: '2024-01-10T08:00:00Z',
      updatedAt: '2026-09-14T10:30:00Z',
    };

    const p2: PatientProfile = {
      id: 'P-1002',
      enNanbaId: 'EN-IND-2026-09813',
      fullName: 'Priya Sharma',
      age: 34,
      gender: 'F',
      dob: '1992-11-03',
      phone: '+91 98402 78901',
      bloodType: 'O+',
      chronicConditions: ['Migraine without aura'],
      allergies: ['Penicillin (Anaphylaxis risk)'],
      vitals: {
        bloodPressure: '118/76 mmHg',
        heartRate: 74,
        bloodGlucose: '92 mg/dL',
        oxygenSaturation: 99,
        bmi: 22.1,
      },
      createdAt: '2024-06-15T09:00:00Z',
      updatedAt: '2026-09-15T08:15:00Z',
    };

    const p3: PatientProfile = {
      id: 'P-1003',
      enNanbaId: 'EN-IND-2026-09814',
      fullName: 'Dr. Anita Desai',
      age: 67,
      gender: 'F',
      dob: '1959-07-22',
      phone: '+91 98403 45678',
      bloodType: 'A+',
      chronicConditions: ['Chronic kidney disease, stage 3', 'Osteoarthritis of knee'],
      allergies: ['NSAIDs (Gastric bleeding)'],
      vitals: {
        bloodPressure: '138/86 mmHg',
        heartRate: 78,
        bloodGlucose: '128 mg/dL',
        oxygenSaturation: 96,
        bmi: 25.8,
      },
      createdAt: '2023-11-20T11:00:00Z',
      updatedAt: '2026-09-12T14:45:00Z',
    };

    this.inMemoryPatients.set(p1.id, p1);
    this.inMemoryPatients.set(p2.id, p2);
    this.inMemoryPatients.set(p3.id, p3);

    // Seed sample evidence ledger
    this.inMemoryEvidenceLedger.push(
      {
        id: 'EV-01',
        patientId: 'P-1001',
        claim: 'Diagnosed with Type 2 Diabetes Mellitus with HbA1c 8.4%',
        sourceDocument: 'Apollo Clinic Lab Report - HbA1c #1092',
        statusTag: 'verified',
        confidenceScore: 0.98,
        recordedAt: '2025-02-14T09:30:00Z',
        clinicalSignificance: 'Requires glucose monitoring and potential titration of Metformin.',
      },
      {
        id: 'EV-02',
        patientId: 'P-1001',
        claim: 'Prescribed Sildenafil 50mg for erectile dysfunction',
        sourceDocument: 'Cardiology OPD Note #8472',
        statusTag: 'verified',
        confidenceScore: 0.95,
        recordedAt: '2026-08-10T14:00:00Z',
        clinicalSignificance: 'Crucial contraindication risk if organic nitrates are co-prescribed.',
      },
      {
        id: 'EV-03',
        patientId: 'P-1002',
        claim: 'Documented life-threatening Penicillin allergy (anaphylaxis at age 12)',
        sourceDocument: 'Hospital Admission Chart 2018',
        statusTag: 'verified',
        confidenceScore: 1.0,
        recordedAt: '2024-06-15T09:10:00Z',
        clinicalSignificance: 'Absolute contraindication for Amoxicillin, Ampicillin, and related beta-lactams.',
      }
    );
  }

  // Patients CRUD
  async getPatients(): Promise<PatientProfile[]> {
    return Array.from(this.inMemoryPatients.values());
  }

  async getPatientById(id: string): Promise<PatientProfile | null> {
    return this.inMemoryPatients.get(id) || null;
  }

  async savePatient(patient: PatientProfile): Promise<PatientProfile> {
    this.inMemoryPatients.set(patient.id, patient);
    this.logAudit('PATIENT_UPDATED', { patientId: patient.id, name: patient.fullName });
    return patient;
  }

  // Evidence Ledger
  async getEvidenceLedger(patientId: string): Promise<EvidenceLedgerEntry[]> {
    return this.inMemoryEvidenceLedger.filter(e => e.patientId === patientId);
  }

  async addEvidence(entry: EvidenceLedgerEntry): Promise<EvidenceLedgerEntry> {
    this.inMemoryEvidenceLedger.push(entry);
    this.logAudit('EVIDENCE_RECORDED', { id: entry.id, claim: entry.claim });
    return entry;
  }

  // Decisions
  async recordDecision(payload: ClinicalDecisionPayload): Promise<void> {
    this.inMemoryDecisions.push(payload);
    this.logAudit('CLINICAL_DECISION_RECORDED', payload);
  }

  async getDecisions(patientId: string): Promise<ClinicalDecisionPayload[]> {
    return this.inMemoryDecisions.filter(d => d.patientId === patientId);
  }

  // Audit Logs
  logAudit(action: string, details: any) {
    this.inMemoryAuditLogs.push({
      id: `AUDIT-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      action,
      details,
      timestamp: new Date().toISOString(),
    });
  }

  getAuditLogs() {
    return this.inMemoryAuditLogs;
  }
}
