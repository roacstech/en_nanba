import { Injectable, Logger } from '@nestjs/common';
import { PhiMaskerService } from './phi-masker.service';
import { LlmService } from '../llm/llm.service';
import { QdrantService } from '../database/qdrant.service';
import { Neo4jService } from '../database/neo4j.service';
import { PostgresService } from '../database/postgres.service';
import { RadarService } from '../graph/radar.service';
import { ClinicalReasoningResponseSchema, ClinicalReasoningResponse } from './schemas/clinical-reasoning.schema';

@Injectable()
export class LangChainOrchestratorService {
  private readonly logger = new Logger(LangChainOrchestratorService.name);

  constructor(
    private phiMasker: PhiMaskerService,
     private llmService: LlmService,
    private qdrantService: QdrantService,
    private neo4jService: Neo4jService,
    private postgresService: PostgresService,
    private radarService: RadarService,
  ) {}

  // Full Clinical Reasoning Pipeline: Context Fetch -> Graph Radar -> PHI Mask -> RAG -> Gemini -> Zod Validation
  async executeClinicalReasoning(patientId: string, additionalClinicalNote?: string): Promise<{
    validatedResponse: ClinicalReasoningResponse;
    phiScrubbedTokensCount: number;
    ragContextItemsCount: number;
    graphNodesAnalyzed: number;
    deterministicRadarAlertsCount: number;
  }> {
    this.logger.log(`Starting AI Orchestration pipeline for patient: ${patientId}`);

    // 1. Fetch patient profile & graph
    const patient = await this.postgresService.getPatientById(patientId);
    const graphData = await this.neo4jService.getPatientGraph(patientId);
    const radarAlerts = await this.radarService.evaluatePatientRadar(patientId);

    // Format past medical history and remissions (e.g. Cancer, Blood Cancer)
    const pastHistory = (patient?.pastDiseases && patient.pastDiseases.length > 0)
      ? patient.pastDiseases.map((p: any) => {
          if (typeof p === 'string') return p;
          return `${p.condition} (${p.year}: ${p.status || 'Past history'}${p.notes ? ` - ${p.notes}` : ''})`;
        }).join('; ')
      : 'None documented';
        // Clean and sanitize allergies (filters out dirty entries like null, None, or blanks)
    const cleanedAllergies = (patient?.allergies || [])
      .map((a: string) => a?.trim())
      .filter((a: string) => {
        if (!a) return false;
        const lower = a.toLowerCase();
        return !lower.startsWith('null') && !lower.startsWith('none') && lower !== '[]';
      });
    const allergiesStr = cleanedAllergies.length > 0 ? cleanedAllergies.join(', ') : 'None documented';

    // 2. PHI / PII Masking: De-identify all patient identifiers
    const rawNote = additionalClinicalNote || 
      `Patient presenting for clinical evaluation. Active chronic conditions: ${patient?.chronicConditions?.join(', ') || 'None'}. Past Medical History / Remissions: ${pastHistory}. Known allergies: ${allergiesStr}. Vitals: BP ${patient?.vitals?.bloodPressure || 'N/A'}, HR ${patient?.vitals?.heartRate || 'N/A'} bpm.`;

    const maskResult = this.phiMasker.maskPatientData(rawNote, patient);


    // 3. RAG Retrieval via Qdrant: Retrieve clinical guidelines and drug contraindication facts
    const queryTerms = [
      ...graphData.nodes.filter(n => n.label === 'Medication').map(n => n.properties.name),
      ...graphData.nodes.filter(n => n.label === 'Diagnosis').map(n => n.properties.name),
    ].join(' ');

    const ragGuidelineChunks = await this.qdrantService.searchTerminology(queryTerms, undefined, 4);

    // 4. Construct LangChain Prompt Context
    const systemInstruction = `You are the EN NANBA Clinical Intelligence Core, an expert clinical decision support AI operating under strict medical evidence and safety guidelines.
Your role is to analyze de-identified clinical graph data, detect contraindications, gaps in care, and synthesize a differential diagnosis.

STRICT CLINICAL EVIDENCE & VITAL FIDELITY RULES:
1. NEVER invent, fabricate, or alter the patient's vitals. 
   - A blood pressure of 120/80 mmHg is strictly NORMAL. Do NOT state the patient has "High Blood Pressure" or "BP > 140/90" unless their provided BP reading is actually elevated above 135/85.
   - Do NOT diagnose Essential Hypertension unless explicitly documented under active chronic conditions or supported by elevated BP readings.
2. LAB INTEGRITY: Do NOT invent lab values (such as eGFR) not provided in the case narrative.
3. ALLERGY ACCURACY: Only identify verified allergens (e.g. Penicillin) as contraindications. Never invent imaginary drug names.

CRITICAL INSTRUCTION: You MUST return a single, valid, strictly formatted JSON object adhering to this schema:
{
  "patientSummary": string,
  "keyFindings": string[],
  "differentialDiagnoses": [
    { "conditionName": string, "icdCode": string, "probability": "HIGH"|"MODERATE"|"LOW", "supportingEvidence": string[], "refutingEvidence": string }
  ],
  "contradictionsIdentified": [
    { "severity": "CRITICAL"|"HIGH"|"MEDIUM"|"LOW", "hazard": string, "entitiesInvolved": string[], "recommendation": string }
  ],
  "evidenceCitations": [
    { "source": string, "excerpt": string }
  ],
  "recommendedPlan": {
    "immediateActions": string[],
    "suggestedInvestigations": string[],
    "alternativeTherapies": string[]
  },
  "safetyRiskLevel": "CRITICAL"|"HIGH"|"MODERATE"|"LOW",
  "validationTimestamp": string
}
Do NOT include any markdown backticks or commentary outside the JSON.`;

    const promptPayload = `
DE-IDENTIFIED CLINICAL CASE:
Patient Token: ${maskResult.tokensMap['[EN_NANBA_ID_REDACTED]'] ? '[EN_NANBA_ID_REDACTED]' : patientId}
Age: ${patient?.age || 50}, Gender: ${patient?.gender || 'Unknown'}
Sanitized Encounter Notes: ${maskResult.sanitizedText}

ACTIVE CLINICAL GRAPH NODES:
${graphData.nodes.map(n => `- [${n.label}] ${n.properties.name || n.properties.id} (Code: ${n.properties.icdCode || n.properties.rxNormCode || n.properties.loincCode || 'N/A'})`).join('\n')}

GRAPH RELATIONSHIPS:
${graphData.relationships.map(r => `- (${r.sourceId}) -[${r.type}]-> (${r.targetId})`).join('\n')}

DETERMINISTIC GRAPH RADAR ALERTS TRIGGERED:
${radarAlerts.map(a => `* [${a.severity}] ${a.ruleName}: ${a.summary} Hazard: ${a.clinicalHazard}`).join('\n')}

RAG CLINICAL KNOWLEDGE / DICTIONARY CONTEXT:
${ragGuidelineChunks.map(g => `* [${g.system} - ${g.code}] ${g.display}: ${g.description}`).join('\n')}

Synthesize the patient case, validate the deterministic alerts, identify all critical contraindications, and provide evidence-backed recommendations.
`;

    // 5. Call LLM Model
    const rawAiOutput = await this.llmService.generateClinicalReasoning(promptPayload, systemInstruction);


    // 6. Strict Zod Validation Layer
    let parsedJson: any;
    try {
      // Strip potential markdown ```json blocks if present
      const cleaned = rawAiOutput.replace(/^```json\s*/i, '').replace(/\s*```$/i, '').trim();
      parsedJson = JSON.parse(cleaned);
    } catch (parseError: any) {
      this.logger.error(`JSON parse failed from AI output: ${parseError.message}`);
      throw new Error(`AI generated non-JSON content: ${parseError.message}`);
    }

    const validationResult = ClinicalReasoningResponseSchema.safeParse(parsedJson);

    if (!validationResult.success) {
      this.logger.error(`Zod Schema Validation Failed: ${JSON.stringify(validationResult.error.format())}`);
      throw new Error(`AI Output failed clinical safety validation schema.`);
    }

    const validatedResponse = validationResult.data;

    // 7. Log AI generated insights into PostgreSQL Evidence Ledger
    for (const contra of validatedResponse.contradictionsIdentified) {
      await this.postgresService.addEvidence({
        id: `EV-AI-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        patientId,
        claim: `[${contra.severity} HAZARD] ${contra.hazard}`,
        sourceDocument: 'AI Orchestrator (In-House Meta Llama 3.2 3B nanba-clinical + LangChain)',
        statusTag: 'ai-derived',
        confidenceScore: 0.96,
        recordedAt: new Date().toISOString(),
        clinicalSignificance: contra.recommendation,
      });
    }

    return {
      validatedResponse,
      phiScrubbedTokensCount: maskResult.maskedFieldsCount,
      ragContextItemsCount: ragGuidelineChunks.length,
      graphNodesAnalyzed: graphData.nodes.length,
      deterministicRadarAlertsCount: radarAlerts.length,
    };
  }
}
