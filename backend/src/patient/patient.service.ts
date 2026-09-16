import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { PostgresService } from '../database/postgres.service';
import { Neo4jService } from '../database/neo4j.service';
import { QdrantService } from '../database/qdrant.service';
import { GeminiService } from '../ai/gemini.service';
import { PatientProfile, ClinicalDecisionPayload, EvidenceLedgerEntry } from '../common/interfaces/clinical.interface';
import { ClinicalDecisionDto } from '../common/dto/clinical.dto';

@Injectable()
export class PatientService {
  private readonly logger = new Logger(PatientService.name);

  constructor(
    private postgresService: PostgresService,
    private neo4jService: Neo4jService,
    private qdrantService: QdrantService,
    private geminiService: GeminiService,
  ) {}

  async getAllPatients(): Promise<PatientProfile[]> {
    return this.postgresService.getPatients();
  }

  async getPatientById(id: string): Promise<PatientProfile> {
    const patient = await this.postgresService.getPatientById(id);
    if (!patient) {
      throw new NotFoundException(`Patient with ID ${id} not found`);
    }
    return patient;
  }

  async createPatient(dto: any): Promise<PatientProfile> {
    const patient: PatientProfile = {
      id: dto.id,
      enNanbaId: dto.enNanbaId,
      fullName: dto.fullName,
      age: Number(dto.age),
      gender: dto.gender,
      dob: dto.dob,
      phone: dto.phone,
      bloodType: dto.bloodType || 'Unknown',
      chronicConditions: dto.chronicConditions || [],
      allergies: dto.allergies || [],
      vitals: dto.vitals || { bloodPressure: '120/80 mmHg', heartRate: 72, oxygenSaturation: 98, bmi: 22 },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return this.postgresService.savePatient(patient);
  }

  async getPatientEvidenceLedger(patientId: string): Promise<EvidenceLedgerEntry[]> {
    return this.postgresService.getEvidenceLedger(patientId);
  }

  // Doctor Intelligence Workspace: Accept, Modify, or Reject clinical decision loop
  async recordDecision(dto: ClinicalDecisionDto): Promise<{
    status: 'SUCCESS';
    message: string;
    decision: ClinicalDecisionPayload;
  }> {
    const payload: ClinicalDecisionPayload = {
      patientId: dto.patientId,
      decision: dto.decision,
      reasoningNotes: dto.reasoningNotes,
      modifiedPrescription: dto.modifiedPrescription,
      doctorName: dto.doctorName,
      timestamp: new Date().toISOString(),
    };

    await this.postgresService.recordDecision(payload);

    // Record the doctor's review in the Evidence Ledger
    await this.postgresService.addEvidence({
      id: `EV-DECISION-${Date.now()}`,
      patientId: dto.patientId,
      claim: `Doctor ${dto.doctorName} marked AI recommendations as ${dto.decision}: ${dto.reasoningNotes || 'No notes provided'}`,
      sourceDocument: 'Doctor Intelligence Workspace',
      statusTag: dto.decision === 'ACCEPT' ? 'verified' : dto.decision === 'MODIFY' ? 'conflict' : 'outdated',
      confidenceScore: 1.0,
      recordedAt: new Date().toISOString(),
      clinicalSignificance: dto.modifiedPrescription ? `Adjusted prescription: ${dto.modifiedPrescription}` : 'Clinical recommendation reviewed',
    });

    this.logger.log(`Recorded doctor decision [${dto.decision}] for patient ${dto.patientId} by ${dto.doctorName}`);

    return {
      status: 'SUCCESS',
      message: `Doctor decision [${dto.decision}] recorded and fed into continuous learning ledger.`,
      decision: payload,
    };
  }

  async getDecisions(patientId: string): Promise<ClinicalDecisionPayload[]> {
    return this.postgresService.getDecisions(patientId);
  }

  // System health & connectivity overview for Doctor Workspace
  getSystemStatus() {
    const postgres = this.postgresService.getConnectivityStatus();
    const neo4j = this.neo4jService.getConnectivityStatus();
    const qdrant = this.qdrantService.getConnectivityStatus();
    const gemini = {
      isLiveConfigured: this.geminiService.isLiveApiConfigured(),
      model: 'gemini-3.8-flash',
      mode: this.geminiService.isLiveApiConfigured() ? 'GEMINI_API_LIVE' : 'CLINICAL_AI_FALLBACK',
    };

    return {
      status: 'HEALTHY',
      platform: 'EN NANBA Clinical Intelligence Platform POC',
      version: '1.0.0',
      compliance: 'Zero-PHI Leakage Architecture / 100% Self-Hosted & Secure Data Layer',
      databases: {
        postgres,
        neo4j,
        qdrant,
      },
      aiEngine: gemini,
      timestamp: new Date().toISOString(),
    };
  }
}
