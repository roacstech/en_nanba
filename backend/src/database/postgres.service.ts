import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pool, PoolConfig } from 'pg';
import * as crypto from 'crypto';
import {
  PatientProfile,
  EvidenceLedgerEntry,
  ClinicalDecisionPayload,
  UserAccount,
} from '../common/interfaces/clinical.interface';

@Injectable()
export class PostgresService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PostgresService.name);
  private pool: Pool | null = null;
  private isConnected = false;
  private connectionDetails = { host: 'localhost', database: 'en_nanban_clinical' };

  // In-Memory Relational Fallback Store
  private inMemoryUsers: Map<string, UserAccount> = new Map();
  private inMemoryPatients: Map<string, PatientProfile> = new Map();
  private inMemoryEvidenceLedger: EvidenceLedgerEntry[] = [];
  private inMemoryDecisions: ClinicalDecisionPayload[] = [];
  private inMemoryFhirBundles: Map<string, any> = new Map();
  private inMemoryAuditLogs: Array<{ id: string; action: string; details: any; timestamp: string }> = [];

  hashPassword(password: string): string {
    return crypto.createHash('sha256').update(password).digest('hex');
  }

  getDefaultDoctor(): UserAccount {
    return {
      id: 'USR-DOC-001',
      email: 'doctor@ennanba.ai',
      passwordHash: this.hashPassword('doctor123'),
      role: 'doctor',
      fullName: 'Dr. Aravind Swamy, MD (Cardiology)',
      phone: '+91 98400 11223',
      specialization: 'Chief Cardiologist & Critical Care',
      hospitalId: 'CMC-CARD-001',
      isIntakeCompleted: true,
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2026-09-17T10:00:00Z',
    };
  }

  getDefaultPatient1(): UserAccount {
    return {
      id: 'USR-PAT-1001',
      email: 'rajesh.kumar@example.com',
      passwordHash: this.hashPassword('patient123'),
      role: 'patient',
      fullName: 'Rajesh Kumar',
      phone: '+91 98401 23456',
      patientId: 'P-1001',
      isIntakeCompleted: true,
      createdAt: '2024-01-10T08:00:00Z',
      updatedAt: '2026-09-14T10:30:00Z',
    };
  }

  getDefaultPatient2(): UserAccount {
    return {
      id: 'USR-PAT-1002',
      email: 'priya.sharma@example.com',
      passwordHash: this.hashPassword('patient123'),
      role: 'patient',
      fullName: 'Priya Sharma',
      phone: '+91 98402 78901',
      patientId: 'P-1002',
      isIntakeCompleted: true,
      createdAt: '2024-06-15T09:00:00Z',
      updatedAt: '2026-09-15T08:15:00Z',
    };
  }

  getDefaultPatient5(): UserAccount {
    return {
      id: 'USR-PAT-1005',
      email: 'ramesh.patel@example.com',
      passwordHash: this.hashPassword('patient123'),
      role: 'patient',
      fullName: 'Ramesh Patel',
      phone: '+91 98405 67890',
      patientId: 'P-1005',
      isIntakeCompleted: true,
      createdAt: '2024-03-10T10:00:00Z',
      updatedAt: '2026-09-17T11:00:00Z',
    };
  }

  constructor(private configService: ConfigService) {
    const doc = this.getDefaultDoctor();
    const p1 = this.getDefaultPatient1();
    const p2 = this.getDefaultPatient2();
    const p5 = this.getDefaultPatient5();
    this.inMemoryUsers.set(doc.id, doc);
    this.inMemoryUsers.set(p1.id, p1);
    this.inMemoryUsers.set(p2.id, p2);
    this.inMemoryUsers.set(p5.id, p5);
  }

  async onModuleInit() {
    const databaseUrl =
      process.env.DATABASE_URL ||
      process.env.POSTGRES_URL ||
      this.configService.get<string>('DATABASE_URL') ||
      this.configService.get<string>('POSTGRES_URL');

    let poolConfig: PoolConfig;

    if (databaseUrl && databaseUrl.trim().length > 0) {
      const isSslNeeded =
        databaseUrl.includes('sslmode=require') ||
        (!databaseUrl.includes('localhost') && !databaseUrl.includes('127.0.0.1'));

      poolConfig = {
        connectionString: databaseUrl,
        connectionTimeoutMillis: 3500,
        ...(isSslNeeded ? { ssl: { rejectUnauthorized: false } } : {}),
      };
      this.connectionDetails = { host: 'Remote/Cloud PostgreSQL', database: 'Configured via URL' };
    } else {
      const host = this.configService.get<string>('POSTGRES_HOST', 'localhost');
      const port = this.configService.get<number>('POSTGRES_PORT', 5432);
      const user = this.configService.get<string>('POSTGRES_USER', 'nanba_admin');
      const password = this.configService.get<string>('POSTGRES_PASSWORD', 'nanba_secure_pass123');
      const database = this.configService.get<string>('POSTGRES_DB', 'en_nanban_clinical');
      const isRemote = host !== 'localhost' && host !== '127.0.0.1';
      const sslEnv = this.configService.get<string>('POSTGRES_SSL');
      const sslConfig = sslEnv === 'true' ? true : sslEnv === 'false' ? false : isRemote;

      poolConfig = {
        host,
        port: Number(port),
        user,
        password,
        database,
        connectionTimeoutMillis: 5000,
        ...(sslConfig ? { ssl: { rejectUnauthorized: false } } : {}),
      };
      this.connectionDetails = { host: `${host}:${port}`, database };
    }

    try {
      this.pool = new Pool(poolConfig);
      const client = await this.pool.connect();
      client.release();
      this.isConnected = true;
      this.logger.log(`Successfully connected to PostgreSQL at ${this.connectionDetails.host}/${this.connectionDetails.database}`);
      await this.initTables();
      await this.syncPatientsFromDb();
    } catch (err: any) {
      this.isConnected = false;
      this.logger.warn(`PostgreSQL connection failed (${err.message}). Activating In-Memory Transactional Store.`);
      await this.seedDefaultPatients();
    }
  }

  async onModuleDestroy() {
    if (this.pool) {
      await this.pool.end();
    }
  }

  getConnectivityStatus(): {
    isConnected: boolean;
    mode: 'POSTGRES_LIVE' | 'IN_MEMORY_STORE';
    patientCount: number;
    userCount: number;
    host: string;
    database: string;
  } {
    return {
      isConnected: this.isConnected,
      mode: this.isConnected ? 'POSTGRES_LIVE' : 'IN_MEMORY_STORE',
      patientCount: this.inMemoryPatients.size,
      userCount: this.inMemoryUsers.size,
      host: this.connectionDetails.host,
      database: this.connectionDetails.database,
    };
  }


  private async initTables() {
    if (!this.pool || !this.isConnected) return;
    try {
      await this.pool.query(`
        CREATE TABLE IF NOT EXISTS users (
          id VARCHAR(64) PRIMARY KEY,
          email VARCHAR(255) UNIQUE NOT NULL,
          password_hash VARCHAR(255) NOT NULL,
          role VARCHAR(20) NOT NULL,
          full_name VARCHAR(255) NOT NULL,
          phone VARCHAR(50),
          patient_id VARCHAR(64),
          is_intake_completed BOOLEAN DEFAULT false,
          specialization VARCHAR(100),
          hospital_id VARCHAR(50),
          created_at TIMESTAMPTZ DEFAULT NOW(),
          updated_at TIMESTAMPTZ DEFAULT NOW()
        );

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

        CREATE TABLE IF NOT EXISTS fhir_bundles (
          id VARCHAR(64) PRIMARY KEY,
          patient_id VARCHAR(64) NOT NULL,
          resource_type VARCHAR(50) NOT NULL,
          bundle_data JSONB NOT NULL,
          created_at TIMESTAMPTZ DEFAULT NOW()
        );

        CREATE TABLE IF NOT EXISTS audit_logs (
          id VARCHAR(64) PRIMARY KEY,
          action VARCHAR(100) NOT NULL,
          details JSONB,
          timestamp TIMESTAMPTZ DEFAULT NOW()
        );
      `);
      this.logger.log('PostgreSQL schema (users, patients, evidence_ledger, clinical_decisions, fhir_bundles, audit_logs) verified.');
    } catch (e: any) {
      this.logger.error(`Error initializing PostgreSQL schema: ${e.message}`);
    }
  }

  async seedDefaultPatients() {
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

    const p5: PatientProfile = {
      id: 'P-1005',
      enNanbaId: 'EN-IND-2026-09815',
      fullName: 'Ramesh Patel',
      age: 52,
      gender: 'M',
      dob: '1974-05-18',
      phone: '+91 98405 67890',
      bloodType: 'O+',
      chronicConditions: ['Type 2 diabetes mellitus'],
      allergies: ['Penicillin (Severe anaphylactic shock risk)'],
      vitals: {
        bloodPressure: '130/85 mmHg',
        heartRate: 88,
        bloodGlucose: '180 mg/dL',
        oxygenSaturation: 97,
        bmi: 26.2,
      },
      createdAt: '2024-03-10T10:00:00Z',
      updatedAt: '2026-09-17T11:00:00Z',
    };

    this.inMemoryPatients.set(p1.id, p1);
    this.inMemoryPatients.set(p2.id, p2);
    this.inMemoryPatients.set(p3.id, p3);
    this.inMemoryPatients.set(p5.id, p5);

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
      },
      {
        id: 'EV-04',
        patientId: 'P-1005',
        claim: 'Diagnosed with Type 2 Diabetes Mellitus [ICD-11: 5A11]',
        sourceDocument: 'Endocrinology Consultation Note',
        statusTag: 'verified',
        confidenceScore: 1.0,
        recordedAt: '2024-03-10T10:30:00Z',
        clinicalSignificance: 'Active Metformin 500mg daily prescription.',
      },
      {
        id: 'EV-05',
        patientId: 'P-1005',
        claim: 'Documented life-threatening Penicillin allergy [RxNorm: 70618] with past anaphylaxis',
        sourceDocument: 'Allergy Testing Clinic Record',
        statusTag: 'verified',
        confidenceScore: 1.0,
        recordedAt: '2024-03-10T11:00:00Z',
        clinicalSignificance: 'Fatal contraindication for beta-lactam antibiotics (Amoxicillin, Ampicillin).',
      }
    );

    // Seed default users
    const defaultDoctor = this.getDefaultDoctor();
    const defaultPatient1 = this.getDefaultPatient1();
    const defaultPatient2 = this.getDefaultPatient2();
    const defaultPatient5 = this.getDefaultPatient5();

    for (const u of [defaultDoctor, defaultPatient1, defaultPatient2, defaultPatient5]) {
      this.inMemoryUsers.set(u.id, u);
    }

    // If connected to live PostgreSQL, seed tables
    if (this.isConnected && this.pool) {
      try {
        for (const p of [p1, p2, p3, p5]) {
          await this.pool.query(
            `INSERT INTO patients (id, en_nanba_id, full_name, age, gender, dob, phone, blood_type, chronic_conditions, allergies, vitals)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
             ON CONFLICT (id) DO NOTHING`,
            [p.id, p.enNanbaId, p.fullName, p.age, p.gender, p.dob, p.phone, p.bloodType, JSON.stringify(p.chronicConditions), JSON.stringify(p.allergies), JSON.stringify(p.vitals)],
          );
        }
        for (const ev of this.inMemoryEvidenceLedger) {
          await this.pool.query(
            `INSERT INTO evidence_ledger (id, patient_id, claim, source_document, status_tag, confidence_score, clinical_significance)
             VALUES ($1, $2, $3, $4, $5, $6, $7)
             ON CONFLICT (id) DO NOTHING`,
            [ev.id, ev.patientId, ev.claim, ev.sourceDocument, ev.statusTag, ev.confidenceScore, ev.clinicalSignificance],
          );
        }
        for (const u of [defaultDoctor, defaultPatient1, defaultPatient2, defaultPatient5]) {
          await this.pool.query(
            `INSERT INTO users (id, email, password_hash, role, full_name, phone, patient_id, is_intake_completed, specialization, hospital_id)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
             ON CONFLICT (id) DO NOTHING`,
            [u.id, u.email, u.passwordHash, u.role, u.fullName, u.phone, u.patientId, u.isIntakeCompleted, u.specialization, u.hospitalId],
          );
        }
        this.logger.log('Live PostgreSQL populated with default patients, evidence ledger entries, and users.');
      } catch (err: any) {
        this.logger.warn(`Failed to seed PostgreSQL tables: ${err.message}`);
      }
    }
  }

  // Synchronize in-memory cache with database
  async syncPatientsFromDb() {
    if (!this.isConnected || !this.pool) return;
    try {
      const res = await this.pool.query('SELECT * FROM patients ORDER BY id ASC');
      if (res.rows.length === 0) {
        this.logger.log('Database empty, seeding default clinical test patients...');
        await this.seedDefaultPatients();
      } else {
        this.inMemoryPatients.clear();
        for (const r of res.rows) {
          this.inMemoryPatients.set(r.id, {
            id: r.id,
            enNanbaId: r.en_nanba_id,
            fullName: r.full_name,
            age: r.age,
            gender: r.gender,
            dob: r.dob,
            phone: r.phone,
            bloodType: r.blood_type,
            chronicConditions: r.chronic_conditions || [],
            allergies: r.allergies || [],
            vitals: r.vitals || {},
            createdAt: r.created_at?.toISOString?.() || r.created_at,
            updatedAt: r.updated_at?.toISOString?.() || r.updated_at,
          });
        }
        this.logger.log(`Loaded ${this.inMemoryPatients.size} patient profiles from PostgreSQL.`);
      }

      // Sync users from DB
      const userRes = await this.pool.query('SELECT * FROM users');
      if (userRes.rows.length > 0) {
        for (const r of userRes.rows) {
          this.inMemoryUsers.set(r.id, this.mapUserRow(r));
        }
        this.logger.log(`Loaded ${this.inMemoryUsers.size} user accounts from PostgreSQL.`);
      } else {
        // Table was empty - seed default users into PostgreSQL
        for (const u of [this.getDefaultDoctor(), this.getDefaultPatient1(), this.getDefaultPatient2()]) {
          await this.pool.query(
            `INSERT INTO users (id, email, password_hash, role, full_name, phone, patient_id, is_intake_completed, specialization, hospital_id)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
             ON CONFLICT (id) DO NOTHING`,
            [u.id, u.email, u.passwordHash, u.role, u.fullName, u.phone, u.patientId, u.isIntakeCompleted, u.specialization, u.hospitalId],
          );
        }
        this.logger.log('Seeded default doctor and patient users into PostgreSQL.');
      }
    } catch (err: any) {
      this.logger.error(`Failed to sync patients/users from DB: ${err.message}`);
    }
  }

  // User Management
  private mapUserRow(r: any): UserAccount {
    return {
      id: r.id,
      email: r.email,
      passwordHash: r.password_hash,
      role: r.role,
      fullName: r.full_name,
      phone: r.phone || undefined,
      patientId: r.patient_id || undefined,
      isIntakeCompleted: Boolean(r.is_intake_completed),
      specialization: r.specialization || undefined,
      hospitalId: r.hospital_id || undefined,
      createdAt: r.created_at?.toISOString?.() || r.created_at,
      updatedAt: r.updated_at?.toISOString?.() || r.updated_at,
    };
  }

  async getUserByEmail(email: string): Promise<UserAccount | null> {
    const normalizedEmail = (email || '').trim().toLowerCase();
    if (!normalizedEmail) return null;

    if (this.isConnected && this.pool) {
      try {
        const res = await this.pool.query(
          'SELECT * FROM users WHERE LOWER(email) = $1 OR LOWER(hospital_id) = $1 LIMIT 1',
          [normalizedEmail],
        );
        if (res.rows.length > 0) {
          return this.mapUserRow(res.rows[0]);
        }
      } catch (e: any) {
        this.logger.error(`Error querying user by email: ${e.message}`);
      }
    }

    for (const user of this.inMemoryUsers.values()) {
      if (
        user.email.toLowerCase() === normalizedEmail ||
        user.hospitalId?.toLowerCase() === normalizedEmail
      ) {
        return user;
      }
    }

    // Fail-safe default doctor fallback
    if (normalizedEmail === 'doctor@ennanba.ai' || normalizedEmail === 'cmc-card-001') {
      const doc = this.getDefaultDoctor();
      this.inMemoryUsers.set(doc.id, doc);
      return doc;
    }

    return null;
  }

  async getUserByIdentifier(identifier: string): Promise<UserAccount | null> {
    const cleanId = (identifier || '').trim();
    if (!cleanId) return null;
    const lowerId = cleanId.toLowerCase();

    if (this.isConnected && this.pool) {
      try {
        const res = await this.pool.query(
          'SELECT * FROM users WHERE LOWER(email) = $1 OR phone = $2 OR id = $3 OR patient_id = $3 LIMIT 1',
          [lowerId, cleanId, cleanId],
        );
        if (res.rows.length > 0) {
          return this.mapUserRow(res.rows[0]);
        }
      } catch (e: any) {
        this.logger.error(`Error querying user by identifier: ${e.message}`);
      }
    }

    for (const user of this.inMemoryUsers.values()) {
      if (
        user.email.toLowerCase() === lowerId ||
        user.phone?.trim() === cleanId ||
        user.id === cleanId ||
        user.patientId === cleanId
      ) {
        return user;
      }
    }

    // Fail-safe default patient fallback
    if (lowerId === 'rajesh.kumar@example.com' || cleanId === '+91 98401 23456' || cleanId === 'P-1001') {
      const p = this.getDefaultPatient1();
      this.inMemoryUsers.set(p.id, p);
      return p;
    }
    if (lowerId === 'priya.sharma@example.com' || cleanId === '+91 98402 78901' || cleanId === 'P-1002') {
      const p = this.getDefaultPatient2();
      this.inMemoryUsers.set(p.id, p);
      return p;
    }
    if (lowerId === 'ramesh.patel@example.com' || cleanId === '+91 98405 67890' || cleanId === 'P-1005') {
      const p = this.getDefaultPatient5();
      this.inMemoryUsers.set(p.id, p);
      return p;
    }

    return null;
  }

  async saveFhirBundle(bundle: any, patientId: string): Promise<any> {
    const id = `FHIR-BUNDLE-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    this.inMemoryFhirBundles.set(id, { id, patientId, bundle, createdAt: new Date().toISOString() });
    if (this.isConnected && this.pool) {
      try {
        await this.pool.query(
          `INSERT INTO fhir_bundles (id, patient_id, resource_type, bundle_data, created_at)
           VALUES ($1, $2, $3, $4, NOW())
           ON CONFLICT (id) DO NOTHING`,
          [id, patientId, bundle.resourceType || 'Bundle', JSON.stringify(bundle)],
        );
      } catch (e: any) {
        this.logger.error(`Error saving FHIR bundle to PostgreSQL: ${e.message}`);
      }
    }
    this.logAudit('FHIR_BUNDLE_STORED', { id, patientId, entryCount: bundle.entry?.length || 0 });
    return { id, patientId, stored: true };
  }

  async getFhirBundles(patientId: string): Promise<any[]> {
    if (this.isConnected && this.pool) {
      try {
        const res = await this.pool.query('SELECT * FROM fhir_bundles WHERE patient_id = $1 ORDER BY created_at DESC', [patientId]);
        if (res.rows.length > 0) {
          return res.rows.map(r => ({
            id: r.id,
            patientId: r.patient_id,
            resourceType: r.resource_type,
            bundle: r.bundle_data,
            createdAt: r.created_at,
          }));
        }
      } catch (e: any) {
        this.logger.error(`Error fetching FHIR bundles from PostgreSQL: ${e.message}`);
      }
    }
    return Array.from(this.inMemoryFhirBundles.values()).filter(b => b.patientId === patientId);
  }

  async getUserById(id: string): Promise<UserAccount | null> {
    if (!id) return null;
    if (this.isConnected && this.pool) {
      try {
        const res = await this.pool.query('SELECT * FROM users WHERE id = $1 LIMIT 1', [id]);
        if (res.rows.length > 0) {
          return this.mapUserRow(res.rows[0]);
        }
      } catch (e: any) {
        this.logger.error(`Error querying user by id: ${e.message}`);
      }
    }
    return this.inMemoryUsers.get(id) || null;
  }

  async saveUser(user: UserAccount): Promise<UserAccount> {
    this.inMemoryUsers.set(user.id, user);
    if (this.isConnected && this.pool) {
      try {
        await this.pool.query(
          `INSERT INTO users (id, email, password_hash, role, full_name, phone, patient_id, is_intake_completed, specialization, hospital_id, created_at, updated_at)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
           ON CONFLICT (id) DO UPDATE SET
             email = EXCLUDED.email,
             password_hash = EXCLUDED.password_hash,
             role = EXCLUDED.role,
             full_name = EXCLUDED.full_name,
             phone = EXCLUDED.phone,
             patient_id = EXCLUDED.patient_id,
             is_intake_completed = EXCLUDED.is_intake_completed,
             specialization = EXCLUDED.specialization,
             hospital_id = EXCLUDED.hospital_id,
             updated_at = NOW()`,
          [
            user.id,
            user.email.toLowerCase(),
            user.passwordHash,
            user.role,
            user.fullName,
            user.phone || null,
            user.patientId || null,
            user.isIntakeCompleted ?? false,
            user.specialization || null,
            user.hospitalId || null,
            user.createdAt || new Date().toISOString(),
            user.updatedAt || new Date().toISOString(),
          ],
        );
      } catch (e: any) {
        this.logger.error(`Error saving user to PostgreSQL: ${e.message}`);
      }
    }
    this.logAudit('USER_SAVED', { userId: user.id, email: user.email, role: user.role });
    return user;
  }

  // Patients CRUD
  async getPatients(): Promise<PatientProfile[]> {
    if (this.isConnected && this.pool) {
      try {
        const res = await this.pool.query('SELECT * FROM patients ORDER BY id ASC');
        if (res.rows.length > 0) {
          return res.rows.map(r => ({
            id: r.id,
            enNanbaId: r.en_nanba_id,
            fullName: r.full_name,
            age: r.age,
            gender: r.gender,
            dob: r.dob,
            phone: r.phone,
            bloodType: r.blood_type,
            chronicConditions: r.chronic_conditions || [],
            allergies: r.allergies || [],
            vitals: r.vitals || {},
            createdAt: r.created_at?.toISOString?.() || r.created_at,
            updatedAt: r.updated_at?.toISOString?.() || r.updated_at,
          }));
        }
      } catch (e: any) {
        this.logger.error(`Error querying PostgreSQL patients: ${e.message}`);
      }
    }
    return Array.from(this.inMemoryPatients.values());
  }

  async getPatientById(id: string): Promise<PatientProfile | null> {
    if (this.isConnected && this.pool) {
      try {
        const res = await this.pool.query('SELECT * FROM patients WHERE id = $1', [id]);
        if (res.rows.length > 0) {
          const r = res.rows[0];
          return {
            id: r.id,
            enNanbaId: r.en_nanba_id,
            fullName: r.full_name,
            age: r.age,
            gender: r.gender,
            dob: r.dob,
            phone: r.phone,
            bloodType: r.blood_type,
            chronicConditions: r.chronic_conditions || [],
            allergies: r.allergies || [],
            vitals: r.vitals || {},
            createdAt: r.created_at?.toISOString?.() || r.created_at,
            updatedAt: r.updated_at?.toISOString?.() || r.updated_at,
          };
        }
      } catch (e: any) {
        this.logger.error(`Error querying PostgreSQL patient by id: ${e.message}`);
      }
    }
    return this.inMemoryPatients.get(id) || null;
  }

  async savePatient(patient: PatientProfile): Promise<PatientProfile> {
    this.inMemoryPatients.set(patient.id, patient);
    if (this.isConnected && this.pool) {
      try {
        await this.pool.query(
          `INSERT INTO patients (id, en_nanba_id, full_name, age, gender, dob, phone, blood_type, chronic_conditions, allergies, vitals, updated_at)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, NOW())
           ON CONFLICT (id) DO UPDATE SET
             full_name = EXCLUDED.full_name,
             chronic_conditions = EXCLUDED.chronic_conditions,
             allergies = EXCLUDED.allergies,
             vitals = EXCLUDED.vitals,
             updated_at = NOW()`,
          [patient.id, patient.enNanbaId, patient.fullName, patient.age, patient.gender, patient.dob, patient.phone, patient.bloodType, JSON.stringify(patient.chronicConditions), JSON.stringify(patient.allergies), JSON.stringify(patient.vitals)],
        );
      } catch (e: any) {
        this.logger.error(`Error saving patient to PostgreSQL: ${e.message}`);
      }
    }
    this.logAudit('PATIENT_UPDATED', { patientId: patient.id, name: patient.fullName });
    return patient;
  }

  async createPatient(patient: PatientProfile): Promise<PatientProfile> {
    return this.savePatient(patient);
  }

  async updatePatient(id: string, updates: Partial<PatientProfile>): Promise<PatientProfile | null> {
    const existing = await this.getPatientById(id);
    if (!existing) return null;

    const merged: PatientProfile = {
      ...existing,
      ...updates,
      vitals: {
        ...existing.vitals,
        ...(updates.vitals || {}),
      },
      updatedAt: new Date().toISOString(),
    };

    return this.savePatient(merged);
  }


  // Evidence Ledger
  async getEvidenceLedger(patientId: string): Promise<EvidenceLedgerEntry[]> {
    if (this.isConnected && this.pool) {
      try {
        const res = await this.pool.query('SELECT * FROM evidence_ledger WHERE patient_id = $1 ORDER BY recorded_at DESC', [patientId]);
        if (res.rows.length > 0) {
          return res.rows.map(r => ({
            id: r.id,
            patientId: r.patient_id,
            claim: r.claim,
            sourceDocument: r.source_document,
            statusTag: r.status_tag,
            confidenceScore: r.confidence_score,
            recordedAt: r.recorded_at?.toISOString?.() || r.recorded_at,
            clinicalSignificance: r.clinical_significance,
          }));
        }
      } catch (e: any) {
        this.logger.error(`Error querying PostgreSQL evidence ledger: ${e.message}`);
      }
    }
    return this.inMemoryEvidenceLedger.filter(e => e.patientId === patientId);
  }

  async addEvidence(entry: EvidenceLedgerEntry): Promise<EvidenceLedgerEntry> {
    this.inMemoryEvidenceLedger.push(entry);
    if (this.isConnected && this.pool) {
      try {
        await this.pool.query(
          `INSERT INTO evidence_ledger (id, patient_id, claim, source_document, status_tag, confidence_score, clinical_significance)
           VALUES ($1, $2, $3, $4, $5, $6, $7)
           ON CONFLICT (id) DO NOTHING`,
          [entry.id, entry.patientId, entry.claim, entry.sourceDocument, entry.statusTag, entry.confidenceScore, entry.clinicalSignificance],
        );
      } catch (e: any) {
        this.logger.error(`Error adding evidence to PostgreSQL: ${e.message}`);
      }
    }
    this.logAudit('EVIDENCE_RECORDED', { id: entry.id, claim: entry.claim });
    return entry;
  }

  // Decisions
  async recordDecision(payload: ClinicalDecisionPayload): Promise<void> {
    this.inMemoryDecisions.push(payload);
    if (this.isConnected && this.pool) {
      try {
        await this.pool.query(
          `INSERT INTO clinical_decisions (patient_id, decision, doctor_name, reasoning_notes, modified_prescription)
           VALUES ($1, $2, $3, $4, $5)`,
          [payload.patientId, payload.decision, payload.doctorName, payload.reasoningNotes || null, payload.modifiedPrescription || null],
        );
      } catch (e: any) {
        this.logger.error(`Error recording clinical decision to PostgreSQL: ${e.message}`);
      }
    }
    this.logAudit('CLINICAL_DECISION_RECORDED', payload);
  }

  async getDecisions(patientId: string): Promise<ClinicalDecisionPayload[]> {
    if (this.isConnected && this.pool) {
      try {
        const res = await this.pool.query('SELECT * FROM clinical_decisions WHERE patient_id = $1 ORDER BY created_at DESC', [patientId]);
        if (res.rows.length > 0) {
          return res.rows.map(r => ({
            patientId: r.patient_id,
            decision: r.decision,
            doctorName: r.doctor_name,
            reasoningNotes: r.reasoning_notes,
            modifiedPrescription: r.modified_prescription,
            timestamp: r.created_at?.toISOString?.() || r.created_at,
          }));
        }
      } catch (e: any) {
        this.logger.error(`Error querying PostgreSQL clinical decisions: ${e.message}`);
      }
    }
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
