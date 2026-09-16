const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

export interface AuthUser {
  id: string;
  email: string;
  role: 'doctor' | 'patient';
  fullName: string;
  phone?: string;
  patientId?: string;
  isIntakeCompleted: boolean;
  specialization?: string;
  hospitalId?: string;
  token?: string;
}

export interface PatientProfile {
  id: string;
  enNanbaId: string;
  fullName: string;
  age: number;
  gender: 'M' | 'F' | 'Other';
  dob: string;
  phone: string;
  bloodType: string;
  chronicConditions: string[];
  allergies: string[];
  vitals: {
    bloodPressure: string;
    heartRate: number;
    bloodGlucose?: string;
    oxygenSaturation: number;
    bmi: number;
  };
  createdAt: string;
  updatedAt: string;
}

export interface GraphNode {
  id: string;
  label: 'Patient' | 'Symptom' | 'Diagnosis' | 'Medication' | 'Investigation' | 'Allergy' | 'Outcome';
  properties: Record<string, any>;
}

export interface GraphRelationship {
  id: string;
  sourceId: string;
  targetId: string;
  type: string;
  properties?: Record<string, any>;
}

export interface PatientGraphData {
  patientId: string;
  nodes: GraphNode[];
  relationships: GraphRelationship[];
}

export interface RadarAlert {
  id: string;
  patientId: string;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  ruleId: string;
  ruleName: string;
  summary: string;
  clinicalHazard: string;
  affectedEntities: {
    source: string;
    target: string;
    relationshipType: string;
  };
  deterministicCypherRule: string;
  recommendedAction: string;
  status: 'ACTIVE' | 'RESOLVED' | 'OVERRIDDEN';
  createdAt: string;
}

export interface MedicalCode {
  code: string;
  display: string;
  system: string;
  description?: string;
  category?: string;
  score?: number;
}

export interface ExtractedClinicalEntity {
  id: string;
  rawText: string;
  type: 'symptom' | 'diagnosis' | 'medication' | 'investigation' | 'vital' | 'allergy';
  matchedCode?: {
    code: string;
    display: string;
    system: string;
    description?: string;
    score?: number;
  };
  confidence: number;
  value?: string | number;
  unit?: string;
  provenance: {
    source: string;
    extractedAt: string;
    status: 'verified' | 'conflict' | 'outdated' | 'ai-derived';
  };
}

export interface EvidenceLedgerEntry {
  id: string;
  patientId: string;
  claim: string;
  sourceDocument: string;
  statusTag: 'verified' | 'conflict' | 'outdated' | 'ai-derived';
  confidenceScore: number;
  recordedAt: string;
  clinicalSignificance: string;
}

export interface ClinicalReasoningResponse {
  patientSummary: string;
  keyFindings: string[];
  differentialDiagnoses: Array<{
    conditionName: string;
    icdCode: string;
    probability: 'HIGH' | 'MODERATE' | 'LOW';
    supportingEvidence: string[];
    refutingEvidence?: string;
  }>;
  contradictionsIdentified: Array<{
    severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
    hazard: string;
    entitiesInvolved: string[];
    recommendation: string;
  }>;
  evidenceCitations: Array<{
    source: string;
    excerpt: string;
  }>;
  recommendedPlan: {
    immediateActions: string[];
    suggestedInvestigations: string[];
    alternativeTherapies: string[];
  };
  safetyRiskLevel: 'CRITICAL' | 'HIGH' | 'MODERATE' | 'LOW';
  validationTimestamp: string;
}

export interface SystemStatus {
  status: string;
  platform: string;
  version: string;
  compliance: string;
  databases: {
    postgres: { isConnected: boolean; mode: string; patientCount: number };
    neo4j: { isConnected: boolean; mode: string };
    qdrant: { isConnected: boolean; mode: string; totalTerms: number };
  };
  aiEngine: {
    isLiveConfigured: boolean;
    model: string;
    mode: string;
  };
}

export interface PatientReportData {
  patient: PatientProfile;
  vitalsAnalysis: {
    bloodPressure: { value: string; category: string; isAlert: boolean };
    heartRate: { value: string; category: string; isAlert: boolean };
    bloodGlucose: { value: string; category: string; isAlert: boolean };
    oxygenSaturation: { value: string; category: string; isAlert: boolean };
    bmi: { value: number; category: string; isAlert: boolean };
  };
  medications: Array<{ name: string; rxNormCode: string; dosage: string }>;
  investigations: Array<{ name: string; loincCode: string; result: string; status: string }>;
  doctorReviews: Array<{
    patientId: string;
    decision: 'ACCEPT' | 'MODIFY' | 'REJECT';
    reasoningNotes?: string;
    modifiedPrescription?: string;
    doctorName: string;
    timestamp: string;
  }>;
  safetyRadarAlerts: RadarAlert[];
  evidenceRecords: EvidenceLedgerEntry[];
  generatedAt: string;
}

export interface PatientIntakePayload {
  patientId?: string;
  fullName: string;
  age: number;
  gender: 'M' | 'F' | 'Other';
  dob: string;
  phone: string;
  bloodType: string;
  vitals: {
    bloodPressure: string;
    heartRate: number;
    bloodGlucose?: string;
    oxygenSaturation: number;
    bmi: number;
  };
  chronicConditions?: string[];
  allergies?: string[];
  currentMedications?: string[];
  symptomsNotes?: string;
}

export const api = {
  async getSystemStatus(): Promise<SystemStatus> {
    const res = await fetch(`${API_BASE}/system/status`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch system status');
    return res.json();
  },

  async getPatients(): Promise<PatientProfile[]> {
    const res = await fetch(`${API_BASE}/patients`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch patients');
    return res.json();
  },

  async getPatient(id: string): Promise<PatientProfile> {
    const res = await fetch(`${API_BASE}/patients/${id}`, { cache: 'no-store' });
    if (!res.ok) throw new Error(`Failed to fetch patient ${id}`);
    return res.json();
  },

  async getPatientReport(id: string): Promise<PatientReportData> {
    const res = await fetch(`${API_BASE}/patients/${id}/report`, { cache: 'no-store' });
    if (!res.ok) throw new Error(`Failed to fetch report for patient ${id}`);
    return res.json();
  },

  async submitPatientIntake(payload: PatientIntakePayload): Promise<{
    patient: PatientProfile;
    isNew: boolean;
    message: string;
  }> {
    const res = await fetch(`${API_BASE}/patients/intake`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error('Failed to submit patient intake data');
    return res.json();
  },

  async createPatient(payload: PatientIntakePayload): Promise<PatientProfile> {
    const res = await fetch(`${API_BASE}/patients`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error('Failed to create patient');
    return res.json();
  },

  async updatePatient(id: string, updates: Partial<PatientIntakePayload>): Promise<PatientProfile> {
    const res = await fetch(`${API_BASE}/patients/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    });
    if (!res.ok) throw new Error(`Failed to update patient ${id}`);
    return res.json();
  },

  async getPatientGraph(id: string): Promise<PatientGraphData> {
    const res = await fetch(`${API_BASE}/graph/${id}`, { cache: 'no-store' });
    if (!res.ok) throw new Error(`Failed to fetch graph for ${id}`);
    return res.json();
  },

  async getRadarAlerts(id: string): Promise<RadarAlert[]> {
    const res = await fetch(`${API_BASE}/graph/${id}/radar`, { cache: 'no-store' });
    if (!res.ok) throw new Error(`Failed to fetch radar alerts for ${id}`);
    return res.json();
  },

  async getEvidenceLedger(id: string): Promise<EvidenceLedgerEntry[]> {
    const res = await fetch(`${API_BASE}/patients/${id}/ledger`, { cache: 'no-store' });
    if (!res.ok) throw new Error(`Failed to fetch evidence ledger for ${id}`);
    return res.json();
  },

  async ingestText(patientId: string, clinicalText: string, documentType = 'doctor_notes') {
    const res = await fetch(`${API_BASE}/ingest/text`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ patientId, clinicalText, documentType }),
    });
    if (!res.ok) throw new Error('Failed to ingest clinical text');
    return res.json();
  },

  async ingestFhir(patientId: string, fhirBundle: any) {
    const res = await fetch(`${API_BASE}/ingest/fhir`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ patientId, fhirBundle }),
    });
    if (!res.ok) throw new Error('Failed to ingest FHIR bundle');
    return res.json();
  },

  async aiSearchTerminology(query: string, system?: string) {
    const params = new URLSearchParams({ q: query });
    if (system && system !== 'ALL') params.append('system', system);
    const res = await fetch(`${API_BASE}/normalization/ai-search?${params.toString()}`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to search terminologies with AI');
    return res.json();
  },

  async runReasoning(patientId: string, clinicalNote?: string): Promise<{
    validatedResponse: ClinicalReasoningResponse;
    phiScrubbedTokensCount: number;
    ragContextItemsCount: number;
    graphNodesAnalyzed: number;
    deterministicRadarAlertsCount: number;
  }> {
    const res = await fetch(`${API_BASE}/ai/reasoning`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ patientId, clinicalNote }),
    });
    if (!res.ok) throw new Error('Failed to run clinical reasoning');
    return res.json();
  },

  async recordDecision(
    patientId: string,
    decision: 'ACCEPT' | 'MODIFY' | 'REJECT',
    doctorName: string,
    reasoningNotes?: string,
    modifiedPrescription?: string,
  ) {
    const res = await fetch(`${API_BASE}/patients/${patientId}/decision`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        patientId,
        decision,
        doctorName,
        reasoningNotes,
        modifiedPrescription,
      }),
    });
    if (!res.ok) throw new Error('Failed to record doctor decision');
    return res.json();
  },

  async doctorLogin(email: string, password: string): Promise<{ user: AuthUser; message: string }> {
    const res = await fetch(`${API_BASE}/auth/doctor-login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ message: 'Login failed' }));
      throw new Error(err.message || 'Doctor login failed');
    }
    return res.json();
  },

  async patientLogin(identifier: string, password: string): Promise<{
    user: AuthUser;
    patient: PatientProfile | null;
    message: string;
  }> {
    const res = await fetch(`${API_BASE}/auth/patient-login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ identifier, password }),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ message: 'Login failed' }));
      throw new Error(err.message || 'Patient login failed');
    }
    return res.json();
  },

  async patientSignup(payload: {
    fullName: string;
    email: string;
    phone: string;
    password: string;
  }): Promise<{ user: AuthUser; message: string }> {
    const res = await fetch(`${API_BASE}/auth/patient-signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ message: 'Registration failed' }));
      throw new Error(err.message || 'Patient registration failed');
    }
    return res.json();
  },

  async completePatientOnboarding(
    userId: string,
    payload: PatientIntakePayload,
  ): Promise<{ user: AuthUser; patient: PatientProfile; message: string }> {
    const res = await fetch(`${API_BASE}/auth/complete-onboarding/${userId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ message: 'Onboarding submission failed' }));
      throw new Error(err.message || 'Failed to submit onboarding health data');
    }
    return res.json();
  },
};


