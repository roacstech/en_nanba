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

export interface ClinicalDecisionPayload {
  patientId: string;
  decision: 'ACCEPT' | 'MODIFY' | 'REJECT';
  reasoningNotes?: string;
  modifiedPrescription?: string;
  doctorName: string;
  timestamp: string;
}
