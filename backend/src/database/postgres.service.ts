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
  private inMemoryAuditLogs: Array<{ id: string; action: string; details: any; timestamp: string }> = [];

  constructor(private configService: ConfigService) {}

  hashPassword(password: string): string {
    return crypto.createHash('sha256').update(password).digest('hex');
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
    } catch (err: any) {
      this.isConnected = false;
      this.logger.warn(`PostgreSQL connection failed (${err.message}). Operating in resilient In-Memory Store mode.`);
    }

    await this.seedInitialDoctorAccount();
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

        CREATE TABLE IF NOT EXISTS audit_logs (
          id VARCHAR(64) PRIMARY KEY,
          action VARCHAR(100) NOT NULL,
          details JSONB,
          timestamp TIMESTAMPTZ DEFAULT NOW()
        );
      `);
      this.logger.log('PostgreSQL schema (users, patients, evidence_ledger, clinical_decisions, audit_logs) verified.');
    } catch (e: any) {
      this.logger.error(`Error initializing PostgreSQL schema: ${e.message}`);
    }
  }

  async seedInitialDoctorAccount() {
    // Only seed the initial Doctor Account, NO hardcoded fake patients!
    const docUser: UserAccount = {
      id: 'USR-DOC-01',
      email: 'dr.raman@ennanba.ai',
      passwordHash: this.hashPassword('doctor123'),
      role: 'doctor',
      fullName: 'Dr. S. K. Raman',
      phone: '+91 98400 11223',
      specialization: 'Chief Cardiologist',
      hospitalId: 'CMC-CARD-001',
      isIntakeCompleted: true,
      createdAt: '2024-01-01T08:00:00Z',
      updatedAt: '2026-09-14T10:00:00Z',
    };
    this.inMemoryUsers.set(docUser.id, docUser);

    if (this.isConnected && this.pool) {
      try {
        await this.pool.query(
          `INSERT INTO users (id, email, password_hash, role, full_name, phone, patient_id, is_intake_completed, specialization, hospital_id, created_at, updated_at)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, NOW(), NOW())
           ON CONFLICT (id) DO NOTHING`,
          [
            docUser.id,
            docUser.email,
            docUser.passwordHash,
            docUser.role,
            docUser.fullName,
            docUser.phone || null,
            docUser.patientId || null,
            docUser.isIntakeCompleted,
            docUser.specialization || null,
            docUser.hospitalId || null,
          ],
        );
      } catch (e: any) {
        this.logger.warn(`Failed synchronizing initial doctor account to PostgreSQL: ${e.message}`);
      }
    }
  }

  // ==========================================
  // Users CRUD
  // ==========================================
  async getUserByEmail(email: string): Promise<UserAccount | null> {
    const cleanEmail = email.trim().toLowerCase();
    if (this.isConnected && this.pool) {
      try {
        const res = await this.pool.query('SELECT * FROM users WHERE LOWER(email) = $1', [cleanEmail]);
        if (res.rows.length > 0) {
          const r = res.rows[0];
          return {
            id: r.id,
            email: r.email,
            passwordHash: r.password_hash,
            role: r.role,
            fullName: r.full_name,
            phone: r.phone,
            patientId: r.patient_id,
            isIntakeCompleted: r.is_intake_completed,
            specialization: r.specialization,
            hospitalId: r.hospital_id,
            createdAt: r.created_at,
            updatedAt: r.updated_at,
          };
        }
      } catch (e: any) {
        this.logger.warn(`Failed reading user by email from DB: ${e.message}`);
      }
    }
    for (const u of this.inMemoryUsers.values()) {
      if (u.email.toLowerCase() === cleanEmail) {
        return u;
      }
    }
    return null;
  }

  async getUserByIdentifier(identifier: string): Promise<UserAccount | null> {
    const clean = identifier.trim().toLowerCase();
    if (this.isConnected && this.pool) {
      try {
        const res = await this.pool.query(
          'SELECT * FROM users WHERE LOWER(email) = $1 OR phone = $2',
          [clean, identifier.trim()],
        );
        if (res.rows.length > 0) {
          const r = res.rows[0];
          return {
            id: r.id,
            email: r.email,
            passwordHash: r.password_hash,
            role: r.role,
            fullName: r.full_name,
            phone: r.phone,
            patientId: r.patient_id,
            isIntakeCompleted: r.is_intake_completed,
            specialization: r.specialization,
            hospitalId: r.hospital_id,
            createdAt: r.created_at,
            updatedAt: r.updated_at,
          };
        }
      } catch (e: any) {
        this.logger.warn(`Failed reading user by identifier from DB: ${e.message}`);
      }
    }
    for (const u of this.inMemoryUsers.values()) {
      if (u.email.toLowerCase() === clean || (u.phone && u.phone.trim() === identifier.trim())) {
        return u;
      }
    }
    return null;
  }

  async getUserById(id: string): Promise<UserAccount | null> {
    if (this.isConnected && this.pool) {
      try {
        const res = await this.pool.query('SELECT * FROM users WHERE id = $1', [id]);
        if (res.rows.length > 0) {
          const r = res.rows[0];
          return {
            id: r.id,
            email: r.email,
            passwordHash: r.password_hash,
            role: r.role,
            fullName: r.full_name,
            phone: r.phone,
            patientId: r.patient_id,
            isIntakeCompleted: r.is_intake_completed,
            specialization: r.specialization,
            hospitalId: r.hospital_id,
            createdAt: r.created_at,
            updatedAt: r.updated_at,
          };
        }
      } catch (e: any) {
        this.logger.warn(`Failed reading user ${id} from DB: ${e.message}`);
      }
    }
    return this.inMemoryUsers.get(id) || null;
  }

  async saveUser(user: UserAccount): Promise<UserAccount> {
    this.inMemoryUsers.set(user.id, user);

    if (this.isConnected && this.pool) {
      try {
        await this.pool.query(
          `INSERT INTO users (id, email, password_hash, role, full_name, phone, patient_id, is_intake_completed, specialization, hospital_id, updated_at)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, NOW())
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
            user.email,
            user.passwordHash,
            user.role,
            user.fullName,
            user.phone || null,
            user.patientId || null,
            user.isIntakeCompleted,
            user.specialization || null,
            user.hospitalId || null,
          ],
        );
      } catch (e: any) {
        this.logger.warn(`Failed persisting user ${user.id} to PostgreSQL: ${e.message}`);
      }
    }

    this.logAudit('USER_SAVED', { id: user.id, email: user.email, role: user.role });
    return user;
  }

  async updateUser(id: string, updates: Partial<UserAccount>): Promise<UserAccount | null> {
    const existing = await this.getUserById(id);
    if (!existing) return null;

    const merged: UserAccount = {
      ...existing,
      ...updates,
      updatedAt: new Date().toISOString(),
    };

    return this.saveUser(merged);
  }

  async getAllUsers(): Promise<UserAccount[]> {
    if (this.isConnected && this.pool) {
      try {
        const res = await this.pool.query('SELECT * FROM users ORDER BY created_at ASC');
        return res.rows.map(r => ({
          id: r.id,
          email: r.email,
          passwordHash: r.password_hash,
          role: r.role,
          fullName: r.full_name,
          phone: r.phone,
          patientId: r.patient_id,
          isIntakeCompleted: r.is_intake_completed,
          specialization: r.specialization,
          hospitalId: r.hospital_id,
          createdAt: r.created_at,
          updatedAt: r.updated_at,
        }));
      } catch (e: any) {
        this.logger.warn(`Failed reading users from DB: ${e.message}`);
      }
    }
    return Array.from(this.inMemoryUsers.values());
  }

  // Patients CRUD
  async getPatients(): Promise<PatientProfile[]> {
    if (this.isConnected && this.pool) {
      try {
        const res = await this.pool.query('SELECT * FROM patients ORDER BY created_at DESC');
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
          createdAt: r.created_at,
          updatedAt: r.updated_at,
        }));
      } catch (e: any) {
        this.logger.warn(`Failed reading patients from DB: ${e.message}.`);
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
            createdAt: r.created_at,
            updatedAt: r.updated_at,
          };
        }
      } catch (e: any) {
        this.logger.warn(`Failed reading patient ${id} from DB: ${e.message}`);
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
             age = EXCLUDED.age,
             gender = EXCLUDED.gender,
             dob = EXCLUDED.dob,
             phone = EXCLUDED.phone,
             blood_type = EXCLUDED.blood_type,
             chronic_conditions = EXCLUDED.chronic_conditions,
             allergies = EXCLUDED.allergies,
             vitals = EXCLUDED.vitals,
             updated_at = NOW()`,
          [
            patient.id,
            patient.enNanbaId,
            patient.fullName,
            patient.age,
            patient.gender,
            patient.dob,
            patient.phone,
            patient.bloodType,
            JSON.stringify(patient.chronicConditions),
            JSON.stringify(patient.allergies),
            JSON.stringify(patient.vitals),
          ],
        );
      } catch (e: any) {
        this.logger.warn(`Failed persisting patient ${patient.id} to PostgreSQL: ${e.message}`);
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
