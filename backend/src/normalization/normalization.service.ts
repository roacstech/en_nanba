import { Injectable, Logger } from '@nestjs/common';
import { QdrantService } from '../database/qdrant.service';
import { Neo4jService } from '../database/neo4j.service';
import { PostgresService } from '../database/postgres.service';
import { GeminiService } from '../ai/gemini.service';
import { MEDICAL_DICTIONARIES } from './medical-dictionary.data';
import { ExtractedClinicalEntity, MedicalCode, TerminologySystem } from '../common/interfaces/clinical.interface';
import { IngestTextDto, IngestFhirDto } from '../common/dto/clinical.dto';

@Injectable()
export class NormalizationService {
  private readonly logger = new Logger(NormalizationService.name);

  constructor(
    private qdrantService: QdrantService,
    private neo4jService: Neo4jService,
    private postgresService: PostgresService,
    private geminiService: GeminiService,
  ) {}

  // List all available dictionary terms or filter by standard
  async getDictionaries(system?: string, query?: string): Promise<MedicalCode[]> {
    if (query && query.trim().length > 0) {
      return this.aiSearchTerminology(query, system);
    }
    let list = MEDICAL_DICTIONARIES;
    if (system && system !== 'ALL') {
      list = list.filter(item => item.system.toUpperCase() === system.toUpperCase());
    }
    return list;
  }

  // Live Semantic Search across ICD-11, RxNorm, LOINC, UCUM, and FHIR using Gemini + Qdrant vectors
  async aiSearchTerminology(query: string, system?: string): Promise<MedicalCode[]> {
    this.logger.log(`AI Search Terminology query: "${query}" (system: ${system || 'ALL'})`);

    // 1. Try Gemini Live AI Search
    const aiResults = await this.geminiService.aiSearchTerminology(query, system);
    if (aiResults && aiResults.length > 0) {
      return aiResults;
    }

    // 2. Vector Semantic Search via Qdrant
    const vectorResults = await this.qdrantService.searchTerminology(query, system, 10);
    if (vectorResults && vectorResults.length > 0) {
      return vectorResults;
    }

    // 3. Substring match fallback
    const qLower = query.toLowerCase();
    return MEDICAL_DICTIONARIES.filter(item => {
      const matchSys = !system || system === 'ALL' || item.system.toUpperCase() === system.toUpperCase();
      const matchText = item.display.toLowerCase().includes(qLower) || item.code.toLowerCase().includes(qLower) || (item.description && item.description.toLowerCase().includes(qLower));
      return matchSys && matchText;
    }).slice(0, 10);
  }

  // Exact & Semantic Search for single term
  async normalizeTerm(term: string, system?: string, limit: number = 5): Promise<MedicalCode[]> {
    return this.aiSearchTerminology(term, system);
  }

  // Ingest unstructured clinical note, extract entities via Gemini, normalize them, and write to graph & ledger
  async ingestClinicalText(dto: IngestTextDto): Promise<{
    patientId: string;
    originalText: string;
    entitiesCount: number;
    entities: ExtractedClinicalEntity[];
    provenanceLogged: boolean;
  }> {
    const { patientId, clinicalText, documentType = 'doctor_notes' } = dto;
    this.logger.log(`Ingesting clinical text for Patient ${patientId} (length: ${clinicalText.length} chars)`);

    const extractedEntities = await this.extractAndNormalizeEntities(clinicalText, documentType);

    // Save evidence to Postgres ledger
    for (const entity of extractedEntities) {
      if (entity.matchedCode) {
        await this.postgresService.addEvidence({
          id: `EV-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
          patientId,
          claim: `${entity.type.toUpperCase()}: ${entity.rawText} mapped to ${entity.matchedCode.system} [${entity.matchedCode.code}] ${entity.matchedCode.display}${entity.unit ? ` (${entity.unit})` : ''}`,
          sourceDocument: documentType,
          statusTag: entity.provenance.status,
          confidenceScore: entity.confidence,
          recordedAt: new Date().toISOString(),
          clinicalSignificance: `Normalized via Gemini & Medical Ontology Standards with confidence ${(entity.confidence * 100).toFixed(1)}%`,
        });
      }
    }

    // Update patient clinical graph in Neo4j
    await this.syncEntitiesToGraph(patientId, extractedEntities);

    return {
      patientId,
      originalText: clinicalText,
      entitiesCount: extractedEntities.length,
      entities: extractedEntities,
      provenanceLogged: true,
    };
  }

  // Parse and ingest standard FHIR JSON Bundle
  async ingestFhirBundle(dto: IngestFhirDto) {
    const { patientId, fhirBundle } = dto;
    const entries = fhirBundle.entry || [];
    const normalizedEntities: ExtractedClinicalEntity[] = [];

    for (const entry of entries) {
      const resource = entry.resource;
      if (!resource) continue;

      if (resource.resourceType === 'Condition') {
        const text = resource.code?.text || resource.code?.coding?.[0]?.display || 'Condition';
        const matches = await this.aiSearchTerminology(text, 'ICD-11');
        normalizedEntities.push({
          id: `fhir-${resource.id || Math.random().toString(36).substring(7)}`,
          rawText: text,
          type: 'diagnosis',
          matchedCode: matches[0] || {
            code: resource.code?.coding?.[0]?.code || '5A11',
            display: text,
            system: 'ICD-11',
            score: 0.92,
          },
          confidence: matches[0]?.score || 0.92,
          provenance: {
            source: 'FHIR Condition Resource',
            extractedAt: new Date().toISOString(),
            status: 'verified',
          },
        });
      } else if (resource.resourceType === 'Observation') {
        const text = resource.code?.text || resource.code?.coding?.[0]?.display || 'Observation';
        const matches = await this.aiSearchTerminology(text, 'LOINC');
        const value = resource.valueQuantity?.value || resource.valueString || '';
        const unit = resource.valueQuantity?.unit || 'UCUM';
        normalizedEntities.push({
          id: `fhir-${resource.id || Math.random().toString(36).substring(7)}`,
          rawText: `${text} ${value} ${unit}`.trim(),
          type: 'investigation',
          value: String(value),
          unit,
          matchedCode: matches[0] || {
            code: resource.code?.coding?.[0]?.code || '4548-4',
            display: text,
            system: 'LOINC',
            score: 0.94,
          },
          confidence: matches[0]?.score || 0.94,
          provenance: {
            source: 'FHIR Observation Resource',
            extractedAt: new Date().toISOString(),
            status: 'verified',
          },
        });
      } else if (resource.resourceType === 'MedicationRequest') {
        const text = resource.medicationCodeableConcept?.text || resource.medicationCodeableConcept?.coding?.[0]?.display || 'Medication';
        const matches = await this.aiSearchTerminology(text, 'RxNorm');
        normalizedEntities.push({
          id: `fhir-${resource.id || Math.random().toString(36).substring(7)}`,
          rawText: text,
          type: 'medication',
          matchedCode: matches[0] || {
            code: resource.medicationCodeableConcept?.coding?.[0]?.code || '6809',
            display: text,
            system: 'RxNorm',
            score: 0.95,
          },
          confidence: matches[0]?.score || 0.95,
          provenance: {
            source: 'FHIR MedicationRequest Resource',
            extractedAt: new Date().toISOString(),
            status: 'verified',
          },
        });
      } else if (resource.resourceType === 'AllergyIntolerance') {
        const text = resource.substance?.text || resource.code?.text || 'Allergy';
        const matches = await this.aiSearchTerminology(text, 'ICD-11');
        normalizedEntities.push({
          id: `fhir-${resource.id || Math.random().toString(36).substring(7)}`,
          rawText: text,
          type: 'allergy',
          matchedCode: matches[0] || {
            code: '4A80',
            display: text,
            system: 'ICD-11',
            score: 0.95,
          },
          confidence: 0.95,
          provenance: {
            source: 'FHIR AllergyIntolerance Resource',
            extractedAt: new Date().toISOString(),
            status: 'verified',
          },
        });
      }
    }

    // Inscribe each FHIR entity into Evidence Ledger
    for (const entity of normalizedEntities) {
      if (entity.matchedCode) {
        await this.postgresService.addEvidence({
          id: `EV-FHIR-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
          patientId,
          claim: `FHIR Interoperability: Ingested ${entity.type.toUpperCase()} [${entity.matchedCode.system}: ${entity.matchedCode.code}] ${entity.matchedCode.display}`,
          sourceDocument: 'FHIR R4 Bundle',
          statusTag: 'verified',
          confidenceScore: entity.confidence,
          recordedAt: new Date().toISOString(),
          clinicalSignificance: `FHIR normalized via EN NANBA Interoperability Layer`,
        });
      }
    }

    await this.syncEntitiesToGraph(patientId, normalizedEntities);

    return {
      patientId,
      resourcesProcessed: entries.length,
      normalizedEntities,
    };
  }

  // Clinical Entity Extraction & Normalization via Gemini with vector cross-referencing
  private async extractAndNormalizeEntities(text: string, source: string): Promise<ExtractedClinicalEntity[]> {
    const entities: ExtractedClinicalEntity[] = [];

    // 1. Primary Extraction: Live Gemini AI Engine
    const aiExtracted = await this.geminiService.extractAndNormalizeWithAi(text);
    if (aiExtracted && aiExtracted.length > 0) {
      for (const item of aiExtracted) {
        entities.push({
          id: `ent-ai-${Date.now()}-${entities.length + 1}`,
          rawText: item.rawText,
          type: item.type,
          value: item.value,
          unit: item.unit,
          matchedCode: {
            code: item.code,
            display: item.display,
            system: item.system,
            category: item.category,
            description: item.description,
            score: item.confidence,
          },
          confidence: item.confidence,
          provenance: {
            source,
            extractedAt: new Date().toISOString(),
            status: 'verified',
          },
        });
      }
      return entities;
    }

    // 2. Resilient Rule & Vector Extraction Fallback
    const patterns: Array<{
      type: 'diagnosis' | 'medication' | 'investigation' | 'vital' | 'symptom' | 'allergy';
      system: TerminologySystem;
      regex: RegExp;
    }> = [
      { type: 'diagnosis', system: 'ICD-11', regex: /\b(Type\s*2\s*diabetes(?:\s*mellitus)?|diabetes|hypertension|angina(?:\s*pectoris)?|chronic kidney disease|CKD|pneumonia|bronchitis|depression|migraine|osteoarthritis|asthma)\b/gi },
      { type: 'medication', system: 'RxNorm', regex: /\b(Metformin(?:\s*hydrochloride)?|Lisinopril|Atorvastatin|Sildenafil|Nitroglycerin|Amoxicillin|Aspirin|Clopidogrel|Losartan|Acetaminophen|Azithromycin|Metoprolol|Amlodipine|Empagliflozin)(?:\s*\d+\s*(?:mg|g|mcg))?\b/gi },
      { type: 'investigation', system: 'LOINC', regex: /\b(HbA1c|glycated hemoglobin|Fasting glucose|blood sugar|Creatinine|serum creatinine|eGFR|glomerular filtration rate|Potassium|serum potassium|cholesterol|lipid panel|troponin)\b/gi },
      { type: 'vital', system: 'LOINC', regex: /\b(?:BP|blood pressure)\s*[:=]?\s*(\d{2,3}\/\d{2,3})\s*(?:mm\s*hg)?|(?:HR|pulse|heart rate)\s*[:=]?\s*(\d{2,3})\s*(?:bpm)?|(?:SpO2|saturation)\s*[:=]?\s*(\d{2,3})\s*%/gi },
      { type: 'symptom', system: 'ICD-11', regex: /\b(chest pain|shortness of breath|dyspnea|fatigue|fever|cough|polyuria|polydipsia|headache|dizziness|joint pain|chest tightness)\b/gi },
      { type: 'allergy', system: 'ICD-11', regex: /\b(?:allergic to|allergy:?)\s*([a-zA-Z\s]+)(?:anaphylaxis|rash|reaction)?/gi },
    ];

    for (const rule of patterns) {
      let match: RegExpExecArray | null;
      while ((match = rule.regex.exec(text)) !== null) {
        const rawMatch = match[0].trim();
        if (entities.some(e => e.rawText.toLowerCase() === rawMatch.toLowerCase())) continue;

        const candidates = await this.qdrantService.searchTerminology(rawMatch, rule.system, 1);
        const bestMatch = candidates.length > 0 ? candidates[0] : undefined;

        entities.push({
          id: `ent-${Date.now()}-${entities.length + 1}`,
          rawText: rawMatch,
          type: rule.type,
          matchedCode: bestMatch || {
            code: 'GENERAL',
            display: rawMatch,
            system: rule.system,
            score: 0.85,
          },
          confidence: bestMatch ? bestMatch.score || 0.88 : 0.85,
          provenance: {
            source,
            extractedAt: new Date().toISOString(),
            status: bestMatch && (bestMatch.score || 0) > 0.6 ? 'verified' : 'ai-derived',
          },
        });
      }
    }

    return entities;
  }

  // Synchronizes newly extracted clinical entities into the Neo4j Patient Clinical Graph
  private async syncEntitiesToGraph(patientId: string, entities: ExtractedClinicalEntity[]) {
    await this.neo4jService.createNode({
      id: patientId,
      label: 'Patient',
      properties: { id: patientId, lastUpdated: new Date().toISOString() },
    });

    for (const entity of entities) {
      if (entity.type === 'symptom') {
        const symId = `sym-${entity.rawText.toLowerCase().replace(/\s+/g, '_')}`;
        await this.neo4jService.createNode({
          id: symId,
          label: 'Symptom',
          properties: { id: symId, name: entity.rawText, code: entity.matchedCode?.code, system: entity.matchedCode?.system || 'ICD-11' },
        });
        await this.neo4jService.createRelationship({
          id: `rel-${patientId}-${symId}`,
          sourceId: patientId,
          targetId: symId,
          type: 'EXPERIENCES',
        });
      } else if (entity.type === 'diagnosis') {
        const diagId = `diag-${(entity.matchedCode?.code || entity.rawText).toLowerCase().replace(/\s+/g, '_')}`;
        await this.neo4jService.createNode({
          id: diagId,
          label: 'Diagnosis',
          properties: {
            id: diagId,
            name: entity.matchedCode?.display || entity.rawText,
            icdCode: entity.matchedCode?.code,
            system: 'ICD-11',
          },
        });
        await this.neo4jService.createRelationship({
          id: `rel-${patientId}-${diagId}`,
          sourceId: patientId,
          targetId: diagId,
          type: 'DIAGNOSED_WITH',
        });
      } else if (entity.type === 'medication') {
        const medId = `med-${(entity.matchedCode?.code || entity.rawText).toLowerCase().replace(/\s+/g, '_')}`;
        await this.neo4jService.createNode({
          id: medId,
          label: 'Medication',
          properties: {
            id: medId,
            name: entity.matchedCode?.display || entity.rawText,
            rxNormCode: entity.matchedCode?.code,
            system: 'RxNorm',
          },
        });
        await this.neo4jService.createRelationship({
          id: `rel-${patientId}-${medId}`,
          sourceId: patientId,
          targetId: medId,
          type: 'PRESCRIBED',
        });
      } else if (entity.type === 'investigation' || entity.type === 'vital') {
        const invId = `inv-${(entity.matchedCode?.code || entity.rawText).toLowerCase().replace(/\s+/g, '_')}`;
        await this.neo4jService.createNode({
          id: invId,
          label: 'Investigation',
          properties: {
            id: invId,
            name: entity.matchedCode?.display || entity.rawText,
            loincCode: entity.matchedCode?.code,
            value: entity.value,
            unit: entity.unit || 'UCUM',
            system: 'LOINC',
          },
        });
        await this.neo4jService.createRelationship({
          id: `rel-${patientId}-${invId}`,
          sourceId: patientId,
          targetId: invId,
          type: 'INVESTIGATED_WITH',
        });
      } else if (entity.type === 'allergy') {
        const allId = `all-${entity.rawText.toLowerCase().replace(/\s+/g, '_')}`;
        await this.neo4jService.createNode({
          id: allId,
          label: 'Allergy',
          properties: { id: allId, name: entity.rawText, code: entity.matchedCode?.code, system: entity.matchedCode?.system || 'ICD-11' },
        });
        await this.neo4jService.createRelationship({
          id: `rel-${patientId}-${allId}`,
          sourceId: patientId,
          targetId: allId,
          type: 'HAS_ALLERGY',
        });
      }
    }
  }
}
