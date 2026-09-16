import { z } from 'zod';

export const ContradictionSchema = z.object({
  severity: z.enum(['CRITICAL', 'HIGH', 'MEDIUM', 'LOW']),
  hazard: z.string().describe('Clinical rationale and physiological hazard explanation'),
  entitiesInvolved: z.array(z.string()).describe('Medications, conditions, or allergies involved'),
  recommendation: z.string().describe('Actionable clinical guidance to mitigate risk'),
});

export const DifferentialDiagnosisSchema = z.object({
  conditionName: z.string().describe('Name of the suspect clinical condition'),
  icdCode: z.string().describe('Likely ICD-11 code'),
  probability: z.enum(['HIGH', 'MODERATE', 'LOW']),
  supportingEvidence: z.array(z.string()).describe('Symptoms or findings supporting this diagnosis'),
  refutingEvidence: z.union([z.string(), z.array(z.string())]).optional().describe('Findings contradicting this diagnosis'),
});

export const ClinicalReasoningResponseSchema = z.object({
  patientSummary: z.string().describe('Concise de-identified clinical synthesis of the patient case'),
  keyFindings: z.array(z.string()).describe('Salient clinical symptoms, vitals, and findings'),
  differentialDiagnoses: z.array(DifferentialDiagnosisSchema).describe('Ranked differential diagnoses'),
  contradictionsIdentified: z.array(ContradictionSchema).describe('Safety hazards, drug interactions, or diagnostic gaps detected'),
  evidenceCitations: z.array(z.object({
    source: z.string().describe('Clinical guideline or medical dictionary reference'),
    excerpt: z.string().describe('Specific supporting evidence or guideline standard'),
  })),
  recommendedPlan: z.object({
    immediateActions: z.array(z.string()).describe('Critical immediate interventions or medication halts'),
    suggestedInvestigations: z.array(z.string()).describe('LOINC standard tests that must be ordered'),
    alternativeTherapies: z.array(z.string()).describe('Safe alternative medications with RxNorm codes'),
  }),
  safetyRiskLevel: z.enum(['CRITICAL', 'HIGH', 'MODERATE', 'LOW']),
  validationTimestamp: z.string(),
});

export type ClinicalReasoningResponse = z.infer<typeof ClinicalReasoningResponseSchema>;
