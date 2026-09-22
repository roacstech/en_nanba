const rawBase = (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api').trim().replace(/\/+$/, '');
const API_BASE = rawBase.endsWith('/api') ? rawBase : `${rawBase}/api`;

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

export interface PastDisease {
  year: string;
  condition: string;
  status?: string;
  notes?: string;
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
  pastDiseases?: (PastDisease | string)[];
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

export interface Icd11DiseaseEntry {
  code: string;
  display: string;
  chapter: string;
  chapterNumber: string;
  category: string;
  description: string;
  system?: string;
}

export interface TerminologyEntry {
  code: string;
  display: string;
  system: string;
  category?: string;
  description?: string;
}

export interface TerminologyCatalogResponse {
  success: boolean;
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  query?: string;
  count: number;
  data: TerminologyEntry[];
}

export interface Icd11CatalogResponse {
  success: boolean;
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  query?: string;
  chapter?: string;
  count: number;
  data: Icd11DiseaseEntry[];
}

export interface DiseaseClinicalCause {
  title: string;
  description: string;
  type: 'etiology' | 'risk_factor' | 'pathophysiology';
}

export interface DiseaseClinicalSymptom {
  name: string;
  clinicalSignificance: string;
  severity?: 'common' | 'characteristic' | 'critical';
}

export interface DiseaseVerifiedMedication {
  rxcui: string;
  name: string;
  dosageForm?: string;
  source: string;
  score?: number;
  rxnavUrl: string;
}

export interface DiseaseVerifiedLabReport {
  loincCode: string;
  testName: string;
  category?: string;
  ucumUnit: string;
  ucumDescription?: string;
  isUcumValid: boolean;
  source: string;
}

export interface DiseaseVerifiedAllergy {
  rxcui: string;
  allergen: string;
  clinicalCategory: string;
  criticality: 'HIGH' | 'MODERATE' | 'LOW';
  reaction?: string;
  source: string;
}

export interface DiseaseClinicalProfileResponse {
  code: string;
  display: string;
  chapter?: string;
  category?: string;
  description?: string;
  overview?: string;
  causes: DiseaseClinicalCause[];
  symptoms: DiseaseClinicalSymptom[];
  medications: DiseaseVerifiedMedication[];
  labReports: DiseaseVerifiedLabReport[];
  allergies: DiseaseVerifiedAllergy[];
  fhirBundle: {
    resourceType: 'Bundle';
    type: 'collection';
    id: string;
    timestamp: string;
    total: number;
    entry: Array<{ fullUrl?: string; resource: any }>;
  };
  fhirValidation: {
    isValid: boolean;
    resourceTypesFound: string[];
    entryCount: number;
    errors: string[];
  };
  apiMetadata: {
    rxNormStatus: string;
    loincStatus: string;
    ucumStatus: string;
    fhirStatus: string;
    whoIcd11Status: string;
    executionTimeMs: number;
    timestamp: string;
  };
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
  pastDiseases?: (PastDisease | string)[];
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

  async getAllIcd11Diseases(params?: {
    page?: number;
    limit?: number;
    q?: string;
    chapter?: string;
  }): Promise<Icd11CatalogResponse> {
    const qp = new URLSearchParams();
    if (params?.page) qp.append('page', String(params.page));
    if (params?.limit) qp.append('limit', String(params.limit));
    if (params?.q) qp.append('q', params.q);
    if (params?.chapter && params.chapter !== 'ALL') qp.append('chapter', params.chapter);

    const res = await fetch(`${API_BASE}/normalize/icd11/all-diseases?${qp.toString()}`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch ICD-11 diseases catalog');
    return res.json();
  },

  async getTerminologyCatalog(
    terminology: string,
    params?: {
      page?: number;
      limit?: number;
      q?: string;
    }
  ): Promise<TerminologyCatalogResponse> {
    const qp = new URLSearchParams();
    if (params?.page) qp.append('page', String(params.page));
    if (params?.limit) qp.append('limit', String(params.limit));
    if (params?.q) qp.append('q', params.q);

    const res = await fetch(`${API_BASE}/normalize/terminologies/${encodeURIComponent(terminology.toLowerCase())}?${qp.toString()}`, { cache: 'no-store' });
    if (!res.ok) throw new Error(`Failed to fetch ${terminology} catalog`);
    return res.json();
  },

  async getDiseaseClinicalProfile(params: {
    code: string;
    disease: string;
    category?: string;
    description?: string;
  }): Promise<DiseaseClinicalProfileResponse> {
    const qp = new URLSearchParams();
    if (params.code) qp.append('code', params.code);
    if (params.disease) qp.append('disease', params.disease);
    if (params.category) qp.append('category', params.category);
    if (params.description) qp.append('description', params.description);

    const res = await fetch(`${API_BASE}/normalize/disease-clinical-profile?${qp.toString()}`, {
      cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch disease clinical profile');
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

  // 7-Step Clinical AI Workflow (Flowchart)
  async executeClinicalFlow(payload: {
    patientId: string;
    rawText: string;
    doctorId?: string;
    doctorName?: string;
  }): Promise<ClinicalFlowExecutionResult> {
    const res = await fetch(`${API_BASE}/clinical-flow/execute`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ message: 'Clinical workflow execution failed' }));
      throw new Error(err.message || 'Failed to execute clinical workflow');
    }
    return res.json();
  },

  async recordClinicalFlowDecision(payload: {
    patientId: string;
    doctorId: string;
    doctorName: string;
    decision: 'ACCEPT' | 'MODIFY' | 'REJECT';
    approvedDrugs?: string[];
    rejectedDrugs?: string[];
    notes?: string;
  }): Promise<{
    success: boolean;
    decision: string;
    doctorName: string;
    timestamp: string;
    signature: string;
    auditLogged: boolean;
    message: string;
  }> {
    const res = await fetch(`${API_BASE}/clinical-flow/decision`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ message: 'Failed to record decision' }));
      throw new Error(err.message || 'Doctor decision recording failed');
    }
    return res.json();
  },
};

export interface ClinicalLiveApiMatch {
  standard: 'ICD-11' | 'RxNorm' | 'LOINC' | 'UCUM' | 'SNOMED-CT';
  source: string;
  queryTerm: string;
  officialCode: string;
  officialDisplay: string;
  category?: string;
  apiUrl?: string;
  latencyMs: number;
  verified: boolean;
  score?: number;
  details?: Record<string, any>;
}

export interface ClinicalFlowExecutionResult {
  step1RawText: {
    text: string;
    patientId: string;
    patientName: string;
    enteredBy: string;
    timestamp: string;
  };
  step2NlpBuckets: {
    disease: string;
    medication: string;
    allergy: string;
    labTest: string;
    symptom: string;
    allEntities: Array<{
      text: string;
      category: string;
      confidence: number;
    }>;
  };
  step3LiveApis: {
    icd11: ClinicalLiveApiMatch;
    rxNormMedication: ClinicalLiveApiMatch;
    rxNormAllergy: ClinicalLiveApiMatch;
    loincLabTest: ClinicalLiveApiMatch;
    ucumUnits: Array<{ unit: string; valid: boolean; standard: string }>;
    allMatches: ClinicalLiveApiMatch[];
  };
  step4FhirPackage: {
    resourceCount: number;
    fhirBundle: any;
    storedInPostgres: boolean;
    postgresTable: string;
    syncedToNeo4j: boolean;
    evidenceLedgerRecordedCount: number;
  };
  step5ContradictionRadar: {
    hasConflict: boolean;
    severity: string;
    blockedDrugs: string[];
    conflictSummary: string;
    clinicalHazard: string;
    geminiRecommendation: {
      safeAlternative: string;
      clinicalRationale: string;
      suggestedPrescription: Array<{
        drugName: string;
        dosage: string;
        frequency: string;
        duration: string;
        rxNormCode: string;
      }>;
    };
  };
  step6DoctorWorkspace: {
    pastHistorySummary: string;
    presentEncounterSummary: string;
    differentialDiagnoses: Array<{
      condition: string;
      icd11Code: string;
      confidenceScore: number;
    }>;
    safetyRiskAlert: string;
  };
  step7HumanSignature: {
    status: 'PENDING_DOCTOR_DECISION' | 'APPROVED' | 'MODIFIED' | 'REJECTED';
    decisionId?: string;
    doctorName?: string;
    timestamp?: string;
    digitalSignature?: string;
  };
}


