export interface TerminologyEntry {
  code: string;
  display: string;
  system: string;
  category?: string;
  description?: string;
}

// Helper function to procedurally generate a larger dataset for pagination testing
const generateExpandedData = (seed: TerminologyEntry[], count: number): TerminologyEntry[] => {
  const result: TerminologyEntry[] = [...seed];
  for (let i = seed.length; i < count; i++) {
    const template = seed[i % seed.length];
    result.push({
      code: `${template.code}-V${i}`,
      display: `${template.display} (Variant ${i})`,
      system: template.system,
      category: template.category,
      description: `${template.description} (Auto-generated mock record #${i})`
    });
  }
  return result;
};

export const MOCK_SNOMED: TerminologyEntry[] = generateExpandedData([
  { code: '22298006', display: 'Myocardial infarction', system: 'SNOMED CT', category: 'Clinical Finding', description: 'Ischemic necrosis of heart muscle.' },
  { code: '38341003', display: 'Hypertensive disorder', system: 'SNOMED CT', category: 'Clinical Finding', description: 'A persistent high blood pressure condition.' },
  { code: '73211009', display: 'Diabetes mellitus', system: 'SNOMED CT', category: 'Clinical Finding', description: 'Metabolic disease characterized by hyperglycemia.' },
  { code: '195967001', display: 'Asthma', system: 'SNOMED CT', category: 'Clinical Finding', description: 'Chronic inflammatory disease of the airways.' },
  { code: '363346000', display: 'Malignant neoplastic disease', system: 'SNOMED CT', category: 'Clinical Finding', description: 'A broad category of cancer.' },
], 34821);

export const MOCK_LOINC: TerminologyEntry[] = generateExpandedData([
  { code: '1751-7', display: 'Albumin [Mass/volume] in Serum or Plasma', system: 'LOINC', category: 'Chemistry', description: 'Test for albumin protein levels.' },
  { code: '2345-7', display: 'Glucose [Mass/volume] in Serum or Plasma', system: 'LOINC', category: 'Chemistry', description: 'Blood glucose level measurement.' },
  { code: '4544-3', display: 'Hematocrit [Volume Fraction] of Blood', system: 'LOINC', category: 'Hematology', description: 'Volume percentage of red blood cells.' },
  { code: '6690-2', display: 'Leukocytes [#/volume] in Blood', system: 'LOINC', category: 'Hematology', description: 'White blood cell count.' },
  { code: '4548-4', display: 'Hemoglobin A1c/Hemoglobin.total in Blood', system: 'LOINC', category: 'Chemistry', description: 'Average blood sugar levels over months.' },
], 14205);

export const MOCK_UCUM: TerminologyEntry[] = generateExpandedData([
  { code: 'mg/dL', display: 'milligrams per deciliter', system: 'UCUM', category: 'Mass Concentration', description: 'Common unit for blood glucose.' },
  { code: 'mmol/L', display: 'millimoles per liter', system: 'UCUM', category: 'Substance Concentration', description: 'Standard unit for many lab tests.' },
  { code: 'kg', display: 'kilogram', system: 'UCUM', category: 'Mass', description: 'Base unit of mass.' },
  { code: 'cm', display: 'centimeter', system: 'UCUM', category: 'Length', description: 'Common unit for height/length.' },
  { code: '%', display: 'percent', system: 'UCUM', category: 'Fraction', description: 'Fraction out of 100.' },
], 8294);

export const MOCK_ATC: TerminologyEntry[] = generateExpandedData([
  { code: 'A10BA02', display: 'metformin', system: 'ATC', category: 'Alimentary tract and metabolism', description: 'Blood glucose lowering drug.' },
  { code: 'C03CA01', display: 'furosemide', system: 'ATC', category: 'Cardiovascular system', description: 'High-ceiling diuretic.' },
  { code: 'N02BE01', display: 'paracetamol', system: 'ATC', category: 'Nervous system', description: 'Analgesic and antipyretic.' },
  { code: 'J01CA04', display: 'amoxicillin', system: 'ATC', category: 'Antiinfectives for systemic use', description: 'Penicillin with extended spectrum.' },
  { code: 'C09AA02', display: 'enalapril', system: 'ATC', category: 'Cardiovascular system', description: 'ACE inhibitor for hypertension.' },
], 19430);

export const MOCK_DICOM: TerminologyEntry[] = generateExpandedData([
  { code: 'CR', display: 'Computed Radiography', system: 'DICOM', category: 'Modality', description: 'Digital X-ray imaging.' },
  { code: 'CT', display: 'Computed Tomography', system: 'DICOM', category: 'Modality', description: 'Cross-sectional imaging.' },
  { code: 'MR', display: 'Magnetic Resonance', system: 'DICOM', category: 'Modality', description: 'MRI imaging.' },
  { code: 'US', display: 'Ultrasound', system: 'DICOM', category: 'Modality', description: 'Sonography imaging.' },
  { code: 'PX', display: 'Panoramic X-Ray', system: 'DICOM', category: 'Modality', description: 'Dental panoramic imaging.' },
], 9301);

export const MOCK_FHIR: TerminologyEntry[] = generateExpandedData([
  { code: 'Patient', display: 'Patient Resource', system: 'FHIR', category: 'Administrative', description: 'Information about an individual receiving care.' },
  { code: 'Observation', display: 'Observation Resource', system: 'FHIR', category: 'Clinical', description: 'Measurements and simple assertions.' },
  { code: 'Condition', display: 'Condition Resource', system: 'FHIR', category: 'Clinical', description: 'Detailed information about conditions or diagnoses.' },
  { code: 'MedicationRequest', display: 'MedicationRequest Resource', system: 'FHIR', category: 'Clinical', description: 'Ordering of medication for patient.' },
  { code: 'Encounter', display: 'Encounter Resource', system: 'FHIR', category: 'Administrative', description: 'Interaction between patient and healthcare provider.' },
], 28405);

export const MOCK_PROCEDURES: TerminologyEntry[] = generateExpandedData([
  { code: 'KAY.00', display: 'Coronary artery bypass grafting', system: 'ICHI', category: 'Surgical Procedures', description: 'Bypass surgery of the heart.' },
  { code: 'KAA.00', display: 'Appendectomy', system: 'ICHI', category: 'Surgical Procedures', description: 'Removal of the appendix.' },
  { code: 'PAG.00', display: 'Hemodialysis', system: 'ICHI', category: 'Medical Interventions', description: 'Artificial filtering of blood.' },
  { code: 'AAA.00', display: 'Electrocardiogram (ECG)', system: 'ICHI', category: 'Diagnostic Procedures', description: 'Recording of heart electrical activity.' },
  { code: 'LAA.00', display: 'Colonoscopy', system: 'ICHI', category: 'Diagnostic Procedures', description: 'Endoscopic examination of the large bowel.' },
], 12399);

export const TERMINOLOGY_DATASETS: Record<string, TerminologyEntry[]> = {
  snomed: MOCK_SNOMED,
  loinc: MOCK_LOINC,
  ucum: MOCK_UCUM,
  atc: MOCK_ATC,
  dicom: MOCK_DICOM,
  fhir: MOCK_FHIR,
  procedures: MOCK_PROCEDURES,
};
