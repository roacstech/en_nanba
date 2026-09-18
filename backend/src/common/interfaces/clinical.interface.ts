export type TerminologySystem = 'ICD-11' | 'LOINC' | 'RxNorm' | 'UCUM' | 'FHIR';

export interface MedicalCode {
  code: string;
  display: string;
  system: TerminologySystem;
  description?: string;
  category?: string;
  score?: number; // similarity confidence (0.0 to 1.0)
}

export interface ExtractedClinicalEntity {
  id: string;
  rawText: string;
  type: 'symptom' | 'diagnosis' | 'medication' | 'investigation' | 'vital' | 'allergy';
  matchedCode?: MedicalCode;
  confidence: number;
  value?: string | number;
  unit?: string;
  provenance: {
    source: string;
    extractedAt: string;
    status: 'verified' | 'conflict' | 'outdated' | 'ai-derived';
  };
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
  type: 'EXPERIENCES' | 'DIAGNOSED_WITH' | 'PRESCRIBED' | 'HAS_ALLERGY' | 'INVESTIGATED_WITH' | 'CONTRAINDICATED_WITH' | 'CONFLICTS_WITH';
  properties?: Record<string, any>;
}

export interface PatientGraphData {
  patientId: string;
  nodes: GraphNode[];
  relationships: GraphRelationship[];
}

export type AlertSeverity = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';

export interface RadarAlert {
  id: string;
  patientId: string;
  severity: AlertSeverity;
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

export interface ClinicalDecisionPayload {
  patientId: string;
  decision: 'ACCEPT' | 'MODIFY' | 'REJECT';
  reasoningNotes?: string;
  modifiedPrescription?: string;
  doctorName: string;
  timestamp: string;
}

export interface UserAccount {
  id: string;
  email: string;
  passwordHash: string;
  role: 'doctor' | 'patient';
  fullName: string;
  phone?: string;
  patientId?: string;
  isIntakeCompleted: boolean;
  specialization?: string;
  hospitalId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserSession {
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

// =========================================================================
// 7-Step Clinical AI Workflow Interfaces (Flowchart Pipeline)
// =========================================================================

export interface ClinicalEntityBucket {
  disease?: string;
  medication?: string;
  allergy?: string;
  labTest?: string;
  symptom?: string;
  rawTextMap?: Record<string, string>;
}

export interface LiveApiCodeMatch {
  standard: 'ICD-11' | 'RxNorm' | 'LOINC' | 'UCUM';
  source: string;
  queryTerm: string;
  officialCode: string;
  officialDisplay: string;
  category?: string;
  apiUrl?: string;
  latencyMs?: number;
  verified: boolean;
  score?: number;
  details?: any;
}

export interface ClinicalFlowExecutePayload {
  patientId?: string;
  patientName?: string;
  rawText: string;
  proposedMedication?: string;
  doctorName?: string;
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
    allEntities: Array<{ bucket: string; term: string; value?: string; unit?: string }>;
  };
  step3LiveApis: {
    icd11: LiveApiCodeMatch;
    rxNormMedication: LiveApiCodeMatch;
    rxNormAllergy: LiveApiCodeMatch;
    loincLabTest: LiveApiCodeMatch;
    ucumUnits: Array<{ unit: string; isValid: boolean; description: string }>;
    allMatches: LiveApiCodeMatch[];
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
    severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
    blockedDrugs: string[];
    conflictSummary: string;
    clinicalHazard: string;
    geminiRecommendation: {
      safeAlternative: string;
      clinicalRationale: string;
      suggestedPrescription: Array<{ drug: string; dose: string; rxNormCode: string }>;
    };
  };
  step6DoctorWorkspace: {
    pastHistorySummary: string;
    presentEncounterSummary: string;
    differentialDiagnoses: Array<{ condition: string; code: string; probability: string }>;
    safetyRiskAlert: string;
  };
  step7HumanSignature: {
    status: 'PENDING_DOCTOR_DECISION' | 'ACCEPTED' | 'MODIFIED' | 'REJECTED';
    decision?: 'ACCEPT' | 'MODIFY' | 'REJECT';
    signedBy?: string;
    timestamp?: string;
  };
}


