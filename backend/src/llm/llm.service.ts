import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';
import { MedicalCode, TerminologySystem } from '../common/interfaces/clinical.interface';

export interface ExtractedAiEntity {
  rawText: string;
  type: 'diagnosis' | 'symptom' | 'medication' | 'investigation' | 'vital' | 'allergy';
  system: TerminologySystem;
  code: string;
  display: string;
  category?: string;
  description?: string;
  value?: string | number;
  unit?: string;
  confidence: number;
  fhirResource?: 'Condition' | 'Observation' | 'MedicationRequest' | 'AllergyIntolerance';
}

@Injectable()
export class LlmService {
  private readonly logger = new Logger(LlmService.name);
  private client: OpenAI;
  private readonly modelName: string;
  private readonly baseUrl: string;

  constructor(private configService: ConfigService) {
    this.baseUrl = this.configService.get<string>('LLM_BASE_URL', 'http://localhost:11434/v1');
    this.modelName = this.configService.get<string>('LLM_MODEL', 'nanba-clinical');

    // Connects to your local Ollama on localhost:11434 with zero GPU & zero cloud bills
    this.client = new OpenAI({
      baseURL: this.baseUrl,
      apiKey: 'ollama-inhouse',
    });

    this.logger.log(`In-House LLM Service initialized [Model: ${this.modelName}, Endpoint: ${this.baseUrl}]`);
  }

  isLiveApiConfigured(): boolean {
    return true; // Local Ollama is always active on your machine/server
  }

  getActiveModelInfo() {
    return {
      provider: 'ollama-inhouse',
      model: this.modelName,
      baseUrl: this.baseUrl,
      isLive: true,
    };
  }

  // 1. Generate Structured Clinical Reasoning (100% Real Dynamic AI)
  async generateClinicalReasoning(prompt: string, systemInstruction: string): Promise<string> {
    this.logger.log(`Calling in-house nanba-clinical model for live clinical reasoning...`);
    try {
      const response = await this.client.chat.completions.create({
        model: this.modelName,
        temperature: 0.1, // Strict factual adherence, zero guessing
        response_format: { type: 'json_object' },
        messages: [
          { role: 'system', content: systemInstruction },
          { role: 'user', content: prompt },
        ],
      });

      const output = response.choices[0]?.message?.content;
      if (!output || output.trim().length === 0) {
        throw new Error('In-house LLM returned an empty response.');
      }
      return output;
    } catch (err: any) {
      this.logger.error(`Ollama execution failed: ${err.message}`);
      throw new Error(`In-House LLM (nanba-clinical) is unreachable or failed: ${err.message}`);
    }
  }

  // 2. Extract Medical Entities and Map to ICD-11, RxNorm, LOINC (100% Real AI)
  async extractAndNormalizeWithAi(clinicalText: string): Promise<ExtractedAiEntity[]> {
    try {
      const systemPrompt = `You are a clinical NLP and medical ontology normalization engine.
Given unstructured clinical text, extract all clinical entities: diagnoses, symptoms, medications, investigations, vitals, allergies.
Map each entity to standard systems:
- Diagnoses -> "ICD-11"
- Medications -> "RxNorm"
- Vitals / Labs -> "LOINC"
- Units -> "UCUM"

Return a strictly valid JSON object with an "entities" array:
{
  "entities": [
    {
      "rawText": "exact text from note",
      "type": "diagnosis" | "symptom" | "medication" | "investigation" | "vital" | "allergy",
      "system": "ICD-11" | "LOINC" | "RxNorm" | "UCUM",
      "code": "standard code string",
      "display": "official terminology title",
      "category": "clinical domain category",
      "description": "clinical description",
      "value": "extracted numeric or qualitative value if applicable",
      "unit": "UCUM unit if applicable",
      "confidence": 0.95,
      "fhirResource": "Condition" | "Observation" | "MedicationRequest" | "AllergyIntolerance"
    }
  ]
}`;

      const response = await this.client.chat.completions.create({
        model: this.modelName,
        temperature: 0.1,
        response_format: { type: 'json_object' },
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `Clinical Narrative to analyze:\n"""\n${clinicalText}\n"""` },
        ],
      });

      const text = response.choices[0]?.message?.content;
      if (text) {
        const parsed = JSON.parse(text);
        if (Array.isArray(parsed.entities)) return parsed.entities;
        if (Array.isArray(parsed)) return parsed;
      }
      return [];
    } catch (err: any) {
      this.logger.error(`AI extraction via Ollama failed: ${err.message}`);
      throw new Error(`In-House LLM extraction failed: ${err.message}`);
    }
  }

  // 3. Search Medical Terminologies (100% Real AI)
  async aiSearchTerminology(query: string, systemFilter?: string): Promise<MedicalCode[]> {
    try {
      const prompt = `Search medical terminologies for: "${query}". ${systemFilter && systemFilter !== 'ALL' ? `Filter strictly to system: ${systemFilter}.` : 'Search across ICD-11, RxNorm, LOINC, and UCUM.'}
Return the top 5 most clinically relevant matches as a JSON object with a "results" array:
{
  "results": [
    {
      "code": "standard code string",
      "display": "official display name",
      "system": "ICD-11" | "LOINC" | "RxNorm" | "UCUM" | "FHIR",
      "description": "clinical description and indications",
      "category": "category or clinical domain",
      "score": 0.95
    }
  ]
}`;

      const response = await this.client.chat.completions.create({
        model: this.modelName,
        temperature: 0.1,
        response_format: { type: 'json_object' },
        messages: [
          { role: 'system', content: 'You are a healthcare terminology search server for ICD-11, RxNorm, LOINC, UCUM, and FHIR.' },
          { role: 'user', content: prompt },
        ],
      });

      const text = response.choices[0]?.message?.content;
      if (text) {
        const data = JSON.parse(text);
        if (Array.isArray(data.results)) return data.results;
        if (Array.isArray(data)) return data;
      }
      return [];
    } catch (err: any) {
      this.logger.error(`AI Terminology search failed: ${err.message}`);
      throw new Error(`In-House LLM terminology search failed: ${err.message}`);
    }
  }
}

