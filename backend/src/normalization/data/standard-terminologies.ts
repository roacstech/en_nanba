export interface TerminologyEntry {
  code: string;
  display: string;
  system: string;
  category?: string;
  description?: string;
  quantity?: string;
  measurementUnit?: string;
  doseAmount?: string;
  dosageForm?: string;
  route?: string;
  rxNormCui?: string;
  sideEffects?: string;
}

import { OFFICIAL_SNOMED_CONCEPTS } from './snomed-concepts.data';
import { OFFICIAL_LOINC_OBSERVATIONS } from './loinc-observations.data';
import {
  CLINICAL_ATC_DATA,
  CLINICAL_UCUM_DATA,
  CLINICAL_DICOM_DATA,
  CLINICAL_FHIR_DATA,
  CLINICAL_PROCEDURES_DATA,
} from './clinical-terminologies.data';

export const CLINICAL_SNOMED: TerminologyEntry[] = OFFICIAL_SNOMED_CONCEPTS.map(c => ({
  code: c.conceptId,
  display: `${c.preferredTerm} (${c.semanticTag})`,
  system: 'SNOMED CT',
  category: c.hierarchy,
  description: `${c.definition} [Complementary ICD-11: ${c.icd11Mapping.code} ${c.icd11Mapping.display}]`,
}));

export const CLINICAL_LOINC: TerminologyEntry[] = OFFICIAL_LOINC_OBSERVATIONS.map(l => ({
  code: l.loincNumber,
  display: l.displayName || l.shortName,
  system: 'LOINC',
  category: `${l.classType} - ${l.category}`,
  description: `${l.clinicalObservationUse || l.longCommonName} Example units: ${l.exampleUnits || 'N/A'}. Reference range: ${l.referenceRange || 'Clinical evaluation'}.`,
}));

export const CLINICAL_UCUM: TerminologyEntry[] = CLINICAL_UCUM_DATA.map(u => ({
  code: u.code,
  display: u.display,
  system: u.system,
  category: u.category,
  description: u.description,
}));

export const CLINICAL_ATC: TerminologyEntry[] = CLINICAL_ATC_DATA.map(a => ({
  code: a.code,
  display: a.display,
  system: a.system,
  category: a.category,
  description: a.description,
  quantity: a.quantity,
  measurementUnit: a.measurementUnit,
  doseAmount: a.doseAmount,
  dosageForm: a.dosageForm,
  route: a.route,
  rxNormCui: a.rxNormCui,
  sideEffects: a.sideEffects,
}));

export const CLINICAL_DICOM: TerminologyEntry[] = CLINICAL_DICOM_DATA.map(d => ({
  code: d.code,
  display: d.display,
  system: d.system,
  category: d.category,
  description: d.description,
}));

export const CLINICAL_FHIR: TerminologyEntry[] = CLINICAL_FHIR_DATA.map(f => ({
  code: f.code,
  display: f.display,
  system: f.system,
  category: f.category,
  description: f.description,
}));

export const CLINICAL_PROCEDURES: TerminologyEntry[] = CLINICAL_PROCEDURES_DATA.map(p => ({
  code: p.code,
  display: p.display,
  system: p.system,
  category: p.category,
  description: p.description,
}));

export const TERMINOLOGY_DATASETS: Record<string, TerminologyEntry[]> = {
  snomed: CLINICAL_SNOMED,
  loinc: CLINICAL_LOINC,
  ucum: CLINICAL_UCUM,
  atc: CLINICAL_ATC,
  medicines: CLINICAL_ATC,
  dicom: CLINICAL_DICOM,
  fhir: CLINICAL_FHIR,
  procedures: CLINICAL_PROCEDURES,
};

