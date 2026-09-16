import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MEDICAL_DICTIONARIES } from './medical-dictionary.data';

export interface RxNormVerificationResult {
  term: string;
  matched: boolean;
  rxcui?: string;
  name?: string;
  source?: string;
  score?: number;
  totalFound?: number;
  allMatchingDrugs?: Array<{ rxcui: string; name: string }>;
}

export interface LoincVerificationResult {
  term: string;
  matched: boolean;
  loincCode?: string;
  display?: string;
  category?: string;
  source?: string;
  totalFound?: number;
  allMatchingTests?: Array<{ code: string; display: string }>;
}

export interface UcumVerificationResult {
  unit: string;
  isValid: boolean;
  description?: string;
}

export interface Icd11VerificationResult {
  term: string;
  matched: boolean;
  code?: string;
  display?: string;
  category?: string;
  source: 'WHO_API' | 'LOCAL_INDEX';
  totalFoundInWHO?: number;
  allMatchingDiseases?: Array<{ code: string; display: string }>;
}

@Injectable()
export class ExternalTerminologiesService {
  private readonly logger = new Logger(ExternalTerminologiesService.name);

  constructor(private configService: ConfigService) {}

  // =========================================================================
  // 1. RxNorm: Live NIH NLM RxNav REST API (100% Free, Public, No Auth needed)
  // =========================================================================
  async verifyRxNorm(term: string): Promise<RxNormVerificationResult> {
    const cleanTerm = encodeURIComponent(term.trim());
    try {
      const url = `https://rxnav.nlm.nih.gov/REST/approximateTerm.json?term=${cleanTerm}&maxEntries=10`;
      const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
      if (res.ok) {
        const data = await res.json();
        const candidates: any[] = data.approximateGroup?.candidate || [];
        if (candidates.length > 0) {
          const topCandidate = candidates[0];
          let topName = term;

          try {
            const propRes = await fetch(`https://rxnav.nlm.nih.gov/REST/rxcui/${topCandidate.rxcui}/properties.json`, {
              signal: AbortSignal.timeout(3000),
            });
            if (propRes.ok) {
              const propData = await propRes.json();
              topName = propData.properties?.name || term;
            }
          } catch {}

          const allMatches = candidates.map((c: any) => ({
            rxcui: c.rxcui,
            name: c.name || term,
          }));

          return {
            term,
            matched: true,
            source: 'NIH_NLM_RxNav_Live',
            totalFound: candidates.length,
            rxcui: topCandidate.rxcui,
            name: topName,
            score: parseFloat(topCandidate.score || '1.0'),
            allMatchingDrugs: allMatches,
          };
        }
      }
    } catch (err: any) {
      this.logger.warn(`NIH RxNav API call failed: ${err.message}. Falling back to local dictionary.`);
    }

    const local = MEDICAL_DICTIONARIES.find(
      d => d.system === 'RxNorm' && (d.display.toLowerCase().includes(term.toLowerCase()) || d.code === term)
    );

    return {
      term,
      matched: !!local,
      rxcui: local?.code,
      name: local?.display || term,
      source: 'LOCAL_INDEX',
      score: local ? 0.95 : 0,
    };
  }

  // Live NIH RxNav Drug-Drug Interaction (DDI) Check
  async checkDrugInteractions(rxcuis: string[]): Promise<Array<{ drug1: string; drug2: string; description: string; severity: string }>> {
    if (rxcuis.length < 2) return [];

    try {
      const listParam = rxcuis.join('+');
      const url = `https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=${listParam}`;
      const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
      if (res.ok) {
        const data = await res.json();
        const interactions: Array<{ drug1: string; drug2: string; description: string; severity: string }> = [];
        const fullType = data.fullInteractionTypeGroup?.[0]?.fullInteractionType || [];

        for (const item of fullType) {
          for (const pair of item.interactionPair || []) {
            interactions.push({
              drug1: pair.interactionConcept?.[0]?.minConceptItem?.name || rxcuis[0],
              drug2: pair.interactionConcept?.[1]?.minConceptItem?.name || rxcuis[1],
              description: pair.description || 'Known pharmacologic interaction.',
              severity: pair.severity || 'HIGH',
            });
          }
        }
        return interactions;
      }
    } catch (e: any) {
      this.logger.warn(`RxNav interaction check failed: ${e.message}`);
    }
    return [];
  }

  // =========================================================================
  // 2. LOINC: Live NIH NLM Clinical Table Search API (Free, Public)
  // =========================================================================
  async verifyLoinc(term: string): Promise<LoincVerificationResult> {
    const cleanTerm = encodeURIComponent(term.trim());
    try {
      const url = `https://clinicaltables.nlm.nih.gov/api/loinc_items/v3/search?terms=${cleanTerm}&maxList=20`;
      const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
      if (res.ok) {
        const data = await res.json();
        const totalCount = data[0] || 0;
        const codes = data[1] || [];
        const descriptions = data[3] || [];

        if (totalCount > 0 && codes.length > 0) {
          const allMatches = codes.map((code: string, idx: number) => ({
            code,
            display: descriptions[idx]?.[0] || descriptions[idx] || term,
          }));

          return {
            term,
            matched: true,
            source: 'NIH_NLM_ClinicalTables_Live',
            totalFound: totalCount,
            loincCode: codes[0],
            display: descriptions[0]?.[0] || term,
            category: 'Laboratory / Clinical Observation',
            allMatchingTests: allMatches,
          };
        }
      }
    } catch (err: any) {
      this.logger.warn(`NIH LOINC search failed: ${err.message}. Using local dictionary fallback.`);
    }

    const local = MEDICAL_DICTIONARIES.find(
      d => d.system === 'LOINC' && (d.display.toLowerCase().includes(term.toLowerCase()) || d.code === term)
    );

    return {
      term,
      matched: !!local,
      loincCode: local?.code,
      display: local?.display || term,
      category: local?.category || 'Clinical Observation',
    };
  }

  // =========================================================================
  // 3. UCUM: Live NIH NLM UCUM Web Service (Free, Public)
  // =========================================================================
  async verifyUcum(unit: string): Promise<UcumVerificationResult> {
    const cleanUnit = encodeURIComponent(unit.trim());
    try {
      const url = `https://ucum.nlm.nih.gov/ucum-service/v1/isValidUCUM/${cleanUnit}`;
      const res = await fetch(url, { signal: AbortSignal.timeout(3000) });
      if (res.ok) {
        const text = (await res.text()).trim();
        const isValid = text.toLowerCase() === 'true';
        return {
          unit,
          isValid,
          description: isValid ? 'Valid standardized UCUM clinical unit' : 'Invalid or non-standard UCUM unit',
        };
      }
    } catch (err: any) {
      this.logger.warn(`NIH UCUM check failed: ${err.message}. Using local dictionary.`);
    }

    const local = MEDICAL_DICTIONARIES.find(d => d.system === 'UCUM' && d.code.toLowerCase() === unit.toLowerCase());
    return {
      unit,
      isValid: !!local,
      description: local?.description || (local ? 'Valid UCUM unit' : 'Unrecognized unit'),
    };
  }

  // =========================================================================
  // 4. ICD-11: WHO ICD-11 API / High-Precision Curated Index
  // =========================================================================
  async verifyIcd11(term: string): Promise<Icd11VerificationResult> {
    const clientId = this.configService.get<string>('ICD11_CLIENT_ID');
    const clientSecret = this.configService.get<string>('ICD11_CLIENT_SECRET');

    if (clientId && clientSecret) {
      try {
        const params = new URLSearchParams();
        params.append('grant_type', 'client_credentials');
        params.append('client_id', clientId);
        params.append('client_secret', clientSecret);
        params.append('scope', 'icdapi_access');

        const tokenRes = await fetch('https://icdaccessmanagement.who.int/connect/token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: params.toString(),
          signal: AbortSignal.timeout(5000),
        });

        if (tokenRes.ok) {
          const tokenData = await tokenRes.json();
          const token = tokenData.access_token;
          const searchRes = await fetch(
            `https://id.who.int/icd/entity/search?q=${encodeURIComponent(term)}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json',
                'Accept-Language': 'en',
                'API-Version': 'v2',
              },
              signal: AbortSignal.timeout(5000),
            }
          );
          if (searchRes.ok) {
            const searchData = await searchRes.json();
            const entities: any[] = searchData.destinationEntities || [];
            if (entities.length > 0) {
              const topMatch = entities[0];
              const cleanTitle = (topMatch.title || term).replace(/<[^>]*>?/gm, '');
              const cleanCode = topMatch.theCode || topMatch.id?.split('/').pop() || 'WHO-MATCH';

              const allMatches = entities.slice(0, 25).map((e: any) => ({
                code: e.theCode || e.id?.split('/').pop() || 'WHO-MATCH',
                display: (e.title || '').replace(/<[^>]*>?/gm, ''),
              }));

              return {
                term,
                matched: true,
                code: cleanCode,
                display: cleanTitle,
                category: 'ICD-11 Official WHO Classification',
                source: 'WHO_API',
                totalFoundInWHO: entities.length,
                allMatchingDiseases: allMatches,
              };
            }
          }
        }
      } catch (err: any) {
        this.logger.warn(`WHO ICD-11 API call failed: ${err.message}. Falling back to curated dictionary.`);
      }
    }

    const q = term.toLowerCase();
    const local = MEDICAL_DICTIONARIES.find(
      d => d.system === 'ICD-11' && (d.display.toLowerCase().includes(q) || d.code.toLowerCase() === q || d.description?.toLowerCase().includes(q))
    );

    return {
      term,
      matched: !!local,
      code: local?.code || 'UNMAPPED',
      display: local?.display || term,
      category: local?.category || 'Diseases & Clinical Diagnoses',
      source: 'LOCAL_INDEX',
    };
  }

  // =========================================================================
  // 5. FHIR: HL7 FHIR v4 Resource Validation
  // =========================================================================
  validateFhirBundle(bundle: any): {
    isValid: boolean;
    resourceTypesFound: string[];
    entryCount: number;
    errors: string[];
  } {
    const errors: string[] = [];
    if (!bundle || typeof bundle !== 'object') {
      return { isValid: false, resourceTypesFound: [], entryCount: 0, errors: ['FHIR payload must be a JSON object'] };
    }

    if (bundle.resourceType !== 'Bundle') {
      errors.push(`Expected resourceType 'Bundle', received '${bundle.resourceType}'`);
    }

    const entries = bundle.entry || [];
    const resourceTypes = new Set<string>();

    for (let i = 0; i < entries.length; i++) {
      const res = entries[i]?.resource;
      if (!res) {
        errors.push(`Entry index ${i} missing 'resource' object`);
        continue;
      }
      if (!res.resourceType) {
        errors.push(`Entry index ${i} missing 'resourceType'`);
      } else {
        resourceTypes.add(res.resourceType);
      }
    }

    return {
      isValid: errors.length === 0,
      resourceTypesFound: Array.from(resourceTypes),
      entryCount: entries.length,
      errors,
    };
  }

  // Official WHO ICD-11 Complete 26-Chapter Classification
  getIcd11Chapters() {
    return {
      title: 'World Health Organization (WHO) ICD-11 Full 26 Disease Chapters',
      version: 'ICD-11 MMS 2026',
      totalChapters: 26,
      chapters: [
        { chapter: '01', title: 'Certain infectious or parasitic diseases', codeRange: '1A00-1H0Z' },
        { chapter: '02', title: 'Neoplasms (All Cancers, Tumours & Malignancies)', codeRange: '2A00-2F9Z' },
        { chapter: '03', title: 'Diseases of the blood or blood-forming organs (Anemias, Hemophilia)', codeRange: '3A00-3C0Z' },
        { chapter: '04', title: 'Diseases of the immune system (Immunodeficiencies, Allergies)', codeRange: '4A00-4B4Z' },
        { chapter: '05', title: 'Endocrine, nutritional or metabolic diseases (Diabetes, Thyroid)', codeRange: '5A00-5D46' },
        { chapter: '06', title: 'Mental, behavioural or neurodevelopmental disorders (Depression, Anxiety)', codeRange: '6A00-6E8Z' },
        { chapter: '07', title: 'Sleep-wake disorders (Insomnia, Apnea)', codeRange: '7A00-7B2Z' },
        { chapter: '08', title: 'Diseases of the nervous system (Migraine, Stroke, Epilepsy, Parkinson)', codeRange: '8A00-8E7Z' },
        { chapter: '09', title: 'Diseases of the visual system (Glaucoma, Cataract, Retinopathy)', codeRange: '9A00-9E1Z' },
        { chapter: '10', title: 'Diseases of the ear or mastoid process (Hearing loss, Vertigo)', codeRange: 'AA00-AC0Z' },
        { chapter: '11', title: 'Diseases of the circulatory system (Hypertension, CAD, Heart Failure)', codeRange: 'BA00-BE2Z' },
        { chapter: '12', title: 'Diseases of the respiratory system (Asthma, COPD, Pneumonia, Bronchitis)', codeRange: 'CA00-CB7Z' },
        { chapter: '13', title: 'Diseases of the digestive system (Ulcers, Liver, Cirrhosis, GERD)', codeRange: 'DA00-DE2Z' },
        { chapter: '14', title: 'Diseases of the skin (Dermatitis, Psoriasis, Eczema)', codeRange: 'EA00-EM0Z' },
        { chapter: '15', title: 'Diseases of the musculoskeletal system (Osteoarthritis, Arthritis)', codeRange: 'FA00-FC0Z' },
        { chapter: '16', title: 'Diseases of the genitourinary system (Chronic Kidney Disease, Nephritis)', codeRange: 'GA00-GC8Z' },
        { chapter: '17', title: 'Conditions related to sexual health', codeRange: 'HA00-HA8Z' },
        { chapter: '18', title: 'Pregnancy, childbirth or the puerperium', codeRange: 'JA00-JB6Z' },
        { chapter: '19', title: 'Certain conditions originating in the perinatal period', codeRange: 'KA00-KD5Z' },
        { chapter: '20', title: 'Developmental anomalies (Congenital malformations)', codeRange: 'LA00-LD9Z' },
        { chapter: '21', title: 'Symptoms, signs or clinical findings, not elsewhere classified (Fever, Pain)', codeRange: 'MA00-MH2Y' },
        { chapter: '22', title: 'Injury, poisoning or consequences of external causes (Fractures, Burns)', codeRange: 'NA00-NF2Z' },
        { chapter: '23', title: 'External causes of morbidity or mortality', codeRange: 'PA00-PL2Z' },
        { chapter: '24', title: 'Factors influencing health status or contact with health services', codeRange: 'QA00-QC4Z' },
        { chapter: '25', title: 'Codes for special purposes (COVID-19, Novel pathogens)', codeRange: 'RA00-RA26' },
        { chapter: '26', title: 'Supplementary Chapter Traditional Medicine Conditions', codeRange: 'SA00-SJ3Z' },
      ],
    };
  }
}
