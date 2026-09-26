/**
 * OFFICIAL LOINC (Logical Observation Identifiers Names and Codes)
 * Standard for Laboratory Tests and Clinical Observations
 * Maintained by Regenstrief Institute, Inc. (https://loinc.org)
 *
 * Each LOINC term is distinguished by its 6 axes:
 * 1. Component (Analyte): Substance or entity measured
 * 2. Property: Characteristic of the analyte (e.g. Mass concentration, Substance concentration, Pressure)
 * 3. Timing: Point in time (Pt) vs timed duration (e.g. 24H)
 * 4. System: Specimen or body system (e.g. Ser/Plas, Bld, Urine, Patient)
 * 5. Scale: Scale of measurement (Qn = Quantitative, Ord = Ordinal, Nom = Nominal, Nar = Narrative)
 * 6. Method: Analytical technique or procedure (e.g. Spectrophotometry, Automated count, or unspecified)
 */

export interface LoincAxisParts {
  component: string;
  property: string;
  timing: string;
  system: string;
  scale: string;
  method: string;
}

export interface LoincObservationEntry {
  loincNumber: string;
  longCommonName: string;
  shortName: string;
  displayName: string;
  classType: 'Laboratory' | 'Clinical';
  category:
    | 'Chemistry'
    | 'Hematology'
    | 'Lipid Panel'
    | 'Cardiac Markers'
    | 'Vital Signs'
    | 'Urinalysis'
    | 'Endocrine & Metabolic'
    | 'Serology & Infectious';
  axes: LoincAxisParts;
  exampleUnits: string;
  ucumCode: string;
  referenceRange?: string;
  clinicalObservationUse: string;
  fhirObservationCode: string;
  status: 'ACTIVE';
  officialUrl: string;
}

export interface LoincMetadata {
  publisher: string;
  portalUrl: string;
  releaseVersion: string;
  copyright: string;
  clinicalRole: string;
  sixAxesDescription: {
    component: string;
    property: string;
    timing: string;
    system: string;
    scale: string;
    method: string;
  };
}

export const OFFICIAL_LOINC_METADATA: LoincMetadata = {
  publisher: 'Regenstrief Institute, Inc.',
  portalUrl: 'https://loinc.org',
  releaseVersion: 'LOINC Version 2.78 (International Edition)',
  copyright:
    'This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2026, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee.',
  clinicalRole:
    'Dedicated investigation and clinical observation layer identifying laboratory tests, clinical measurements, observations, and documents. Not a disease classification database (which is handled by ICD-11).',
  sixAxesDescription: {
    component: '1. Component (Analyte): The substance, entity or object measured or observed.',
    property: '2. Property: The kind of property or quantity (e.g. MCnc = Mass concentration, MCNC = Substance concentration, Pressure, Rate).',
    timing: '3. Timing: The time aspect over which the measurement was taken (e.g. Pt = Point in time, 24H = 24-hour collection).',
    system: '4. System: The context or specimen on which the observation is performed (e.g. Ser/Plas = Serum/Plasma, Bld = Whole blood, Urine, Patient).',
    scale: '5. Scale: The precision or scale type of measurement (Qn = Quantitative, Ord = Ordinal, Nom = Nominal, Nar = Narrative).',
    method: '6. Method: The analytical procedure or instrument technique used (e.g. Spectrophotometry, Automated count, Cuff, or Test).',
  },
};

export const OFFICIAL_LOINC_OBSERVATIONS: LoincObservationEntry[] = [
  // =========================================================================
  // 1. CHEMISTRY
  // =========================================================================
  {
    loincNumber: '4548-4',
    longCommonName: 'Hemoglobin A1c/Hemoglobin.total in Blood',
    shortName: 'HbA1c Bld %',
    displayName: 'Hemoglobin A1c (Glycated Hemoglobin)',
    classType: 'Laboratory',
    category: 'Chemistry',
    axes: {
      component: 'Hemoglobin A1c/Hemoglobin.total',
      property: 'MFr (Mass fraction)',
      timing: 'Pt (Point in time)',
      system: 'Bld (Whole blood)',
      scale: 'Qn (Quantitative)',
      method: 'HPLC / Immunoassay / Boronate affinity',
    },
    exampleUnits: '%',
    ucumCode: '%',
    referenceRange: 'Normal: < 5.7% | Prediabetes: 5.7–6.4% | Diabetes: ≥ 6.5%',
    clinicalObservationUse:
      'Standard marker of chronic glycemic exposure reflecting average blood glucose over the preceding 8–12 weeks.',
    fhirObservationCode: 'http://loinc.org|4548-4',
    status: 'ACTIVE',
    officialUrl: 'https://loinc.org/4548-4/',
  },
  {
    loincNumber: '1558-6',
    longCommonName: 'Fasting glucose [Mass/volume] in Serum or Plasma',
    shortName: 'Glucose Fst SerPl-mCnc',
    displayName: 'Fasting Blood Glucose (FBG)',
    classType: 'Laboratory',
    category: 'Chemistry',
    axes: {
      component: 'Glucose^fasting',
      property: 'MCnc (Mass concentration)',
      timing: 'Pt (Point in time)',
      system: 'Ser/Plas (Serum or Plasma)',
      scale: 'Qn (Quantitative)',
      method: 'Hexokinase / Glucose oxidase',
    },
    exampleUnits: 'mg/dL',
    ucumCode: 'mg/dL',
    referenceRange: 'Normal: 70–99 mg/dL | Impaired (Prediabetes): 100–125 mg/dL | Provisional Diabetes: ≥ 126 mg/dL',
    clinicalObservationUse:
      'Baseline evaluation of carbohydrate metabolism following at least 8 hours of overnight fasting.',
    fhirObservationCode: 'http://loinc.org|1558-6',
    status: 'ACTIVE',
    officialUrl: 'https://loinc.org/1558-6/',
  },
  {
    loincNumber: '2345-7',
    longCommonName: 'Glucose [Mass/volume] in Serum or Plasma',
    shortName: 'Glucose SerPl-mCnc',
    displayName: 'Random Blood Glucose (RBG)',
    classType: 'Laboratory',
    category: 'Chemistry',
    axes: {
      component: 'Glucose',
      property: 'MCnc (Mass concentration)',
      timing: 'Pt (Point in time)',
      system: 'Ser/Plas (Serum or Plasma)',
      scale: 'Qn (Quantitative)',
      method: 'Photometry / Enzymatic',
    },
    exampleUnits: 'mg/dL',
    ucumCode: 'mg/dL',
    referenceRange: 'Normal: 70–140 mg/dL | Hyperglycemia threshold: ≥ 200 mg/dL with symptoms',
    clinicalObservationUse:
      'Immediate snapshot of circulating blood sugar without regard to timing of prior caloric ingestion.',
    fhirObservationCode: 'http://loinc.org|2345-7',
    status: 'ACTIVE',
    officialUrl: 'https://loinc.org/2345-7/',
  },
  {
    loincNumber: '2160-0',
    longCommonName: 'Creatinine [Mass/volume] in Serum or Plasma',
    shortName: 'Creat SerPl-mCnc',
    displayName: 'Serum Creatinine',
    classType: 'Laboratory',
    category: 'Chemistry',
    axes: {
      component: 'Creatinine',
      property: 'MCnc (Mass concentration)',
      timing: 'Pt (Point in time)',
      system: 'Ser/Plas (Serum or Plasma)',
      scale: 'Qn (Quantitative)',
      method: 'Jaffé reaction / Enzymatic IDMS-traceable',
    },
    exampleUnits: 'mg/dL',
    ucumCode: 'mg/dL',
    referenceRange: 'Adult Males: 0.7–1.3 mg/dL | Adult Females: 0.5–1.1 mg/dL',
    clinicalObservationUse:
      'Primary endogenous biochemical marker used for assessing renal clearance and calculating estimated glomerular filtration rate (eGFR).',
    fhirObservationCode: 'http://loinc.org|2160-0',
    status: 'ACTIVE',
    officialUrl: 'https://loinc.org/2160-0/',
  },
  {
    loincNumber: '48642-3',
    longCommonName: 'Glomerular filtration rate/1.73 sq M.predicted among blacks [Volume Rate/Area] in Serum, Plasma or Blood by Creatinine-based formula (CKD-EPI)',
    shortName: 'eGFR CKD-EPI',
    displayName: 'Estimated Glomerular Filtration Rate (eGFR)',
    classType: 'Laboratory',
    category: 'Chemistry',
    axes: {
      component: 'Glomerular filtration rate/1.73 sq M.predicted',
      property: 'ArVolRat (Area volume rate)',
      timing: 'Pt (Point in time)',
      system: 'Ser/Plas/Bld (Serum/Plasma/Blood)',
      scale: 'Qn (Quantitative)',
      method: 'CKD-EPI Creatinine equation (2021 refit)',
    },
    exampleUnits: 'mL/min/1.73m2',
    ucumCode: 'mL/min/{1.73_m2}',
    referenceRange: 'Stage 1 (Normal): ≥ 90 | Stage 2 (Mild drop): 60–89 | Stage 3a: 45–59 | Stage 3b: 30–44 | Stage 4: 15–29 | Stage 5 (Kidney Failure): < 15',
    clinicalObservationUse:
      'Standardized algorithmic estimate of renal functioning used for chronic kidney disease (CKD) staging and drug dosage adjustments.',
    fhirObservationCode: 'http://loinc.org|48642-3',
    status: 'ACTIVE',
    officialUrl: 'https://loinc.org/48642-3/',
  },
  {
    loincNumber: '3094-0',
    longCommonName: 'Urea nitrogen [Mass/volume] in Serum or Plasma',
    shortName: 'BUN SerPl-mCnc',
    displayName: 'Blood Urea Nitrogen (BUN)',
    classType: 'Laboratory',
    category: 'Chemistry',
    axes: {
      component: 'Urea nitrogen',
      property: 'MCnc (Mass concentration)',
      timing: 'Pt (Point in time)',
      system: 'Ser/Plas (Serum or Plasma)',
      scale: 'Qn (Quantitative)',
      method: 'Urease / Glutamate dehydrogenase',
    },
    exampleUnits: 'mg/dL',
    ucumCode: 'mg/dL',
    referenceRange: 'Normal: 7–20 mg/dL',
    clinicalObservationUse:
      'Evaluates renal excretion, nitrogen retention, dehydration status, and upper gastrointestinal bleeding when evaluated alongside serum creatinine.',
    fhirObservationCode: 'http://loinc.org|3094-0',
    status: 'ACTIVE',
    officialUrl: 'https://loinc.org/3094-0/',
  },
  {
    loincNumber: '2823-3',
    longCommonName: 'Potassium [Moles/volume] in Serum or Plasma',
    shortName: 'Potassium SerPl-sCnc',
    displayName: 'Serum Potassium (K+)',
    classType: 'Laboratory',
    category: 'Chemistry',
    axes: {
      component: 'Potassium',
      property: 'SCnc (Substance concentration)',
      timing: 'Pt (Point in time)',
      system: 'Ser/Plas (Serum or Plasma)',
      scale: 'Qn (Quantitative)',
      method: 'Ion-selective electrode (ISE)',
    },
    exampleUnits: 'mmol/L',
    ucumCode: 'mmol/L',
    referenceRange: 'Normal: 3.5–5.0 mmol/L | Critical low: < 2.8 mmol/L | Critical high: > 6.0 mmol/L',
    clinicalObservationUse:
      'Major intracellular cation critical for neuromuscular excitability, cardiac conduction, and maintaining myocardial stability.',
    fhirObservationCode: 'http://loinc.org|2823-3',
    status: 'ACTIVE',
    officialUrl: 'https://loinc.org/2823-3/',
  },
  {
    loincNumber: '2951-2',
    longCommonName: 'Sodium [Moles/volume] in Serum or Plasma',
    shortName: 'Sodium SerPl-sCnc',
    displayName: 'Serum Sodium (Na+)',
    classType: 'Laboratory',
    category: 'Chemistry',
    axes: {
      component: 'Sodium',
      property: 'SCnc (Substance concentration)',
      timing: 'Pt (Point in time)',
      system: 'Ser/Plas (Serum or Plasma)',
      scale: 'Qn (Quantitative)',
      method: 'Ion-selective electrode (ISE)',
    },
    exampleUnits: 'mmol/L',
    ucumCode: 'mmol/L',
    referenceRange: 'Normal: 135–145 mmol/L | Critical low: < 120 mmol/L | Critical high: > 160 mmol/L',
    clinicalObservationUse:
      'Dominant extracellular cation responsible for maintaining osmotic pressure, extracellular volume, and acid-base balance.',
    fhirObservationCode: 'http://loinc.org|2951-2',
    status: 'ACTIVE',
    officialUrl: 'https://loinc.org/2951-2/',
  },
  {
    loincNumber: '1975-2',
    longCommonName: 'Bilirubin.total [Mass/volume] in Serum or Plasma',
    shortName: 'Bilirub Tot SerPl-mCnc',
    displayName: 'Total Bilirubin',
    classType: 'Laboratory',
    category: 'Chemistry',
    axes: {
      component: 'Bilirubin.total',
      property: 'MCnc (Mass concentration)',
      timing: 'Pt (Point in time)',
      system: 'Ser/Plas (Serum or Plasma)',
      scale: 'Qn (Quantitative)',
      method: 'Diazo / Spectrophotometric',
    },
    exampleUnits: 'mg/dL',
    ucumCode: 'mg/dL',
    referenceRange: 'Normal: 0.2–1.2 mg/dL',
    clinicalObservationUse:
      'Assesses hepatic excretory function, hepatocellular injury, hemolysis, and biliary obstruction.',
    fhirObservationCode: 'http://loinc.org|1975-2',
    status: 'ACTIVE',
    officialUrl: 'https://loinc.org/1975-2/',
  },
  {
    loincNumber: '1742-6',
    longCommonName: 'Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma',
    shortName: 'ALT SerPl-aCnc',
    displayName: 'Alanine Aminotransferase (ALT / SGPT)',
    classType: 'Laboratory',
    category: 'Chemistry',
    axes: {
      component: 'Alanine aminotransferase',
      property: 'CCnc (Catalytic concentration)',
      timing: 'Pt (Point in time)',
      system: 'Ser/Plas (Serum or Plasma)',
      scale: 'Qn (Quantitative)',
      method: 'IFCC reference method with pyridoxal phosphate',
    },
    exampleUnits: 'U/L',
    ucumCode: 'U/L',
    referenceRange: 'Adult Males: 10–40 U/L | Adult Females: 7–35 U/L',
    clinicalObservationUse:
      'Key enzyme localized primarily in hepatocytes; sensitive indicator of acute hepatocellular injury and hepatitis.',
    fhirObservationCode: 'http://loinc.org|1742-6',
    status: 'ACTIVE',
    officialUrl: 'https://loinc.org/1742-6/',
  },
  {
    loincNumber: '1920-8',
    longCommonName: 'Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma',
    shortName: 'AST SerPl-aCnc',
    displayName: 'Aspartate Aminotransferase (AST / SGOT)',
    classType: 'Laboratory',
    category: 'Chemistry',
    axes: {
      component: 'Aspartate aminotransferase',
      property: 'CCnc (Catalytic concentration)',
      timing: 'Pt (Point in time)',
      system: 'Ser/Plas (Serum or Plasma)',
      scale: 'Qn (Quantitative)',
      method: 'IFCC reference method',
    },
    exampleUnits: 'U/L',
    ucumCode: 'U/L',
    referenceRange: 'Normal: 10–35 U/L',
    clinicalObservationUse:
      'Assesses hepatic, cardiac, and skeletal muscle parenchymal necrosis; De Ritis ratio (AST/ALT) aids diagnostic etiology.',
    fhirObservationCode: 'http://loinc.org|1920-8',
    status: 'ACTIVE',
    officialUrl: 'https://loinc.org/1920-8/',
  },
  {
    loincNumber: '1751-7',
    longCommonName: 'Albumin [Mass/volume] in Serum or Plasma',
    shortName: 'Albumin SerPl-mCnc',
    displayName: 'Serum Albumin',
    classType: 'Laboratory',
    category: 'Chemistry',
    axes: {
      component: 'Albumin',
      property: 'MCnc (Mass concentration)',
      timing: 'Pt (Point in time)',
      system: 'Ser/Plas (Serum or Plasma)',
      scale: 'Qn (Quantitative)',
      method: 'Bromocresol green (BCG) / Bromocresol purple',
    },
    exampleUnits: 'g/dL',
    ucumCode: 'g/dL',
    referenceRange: 'Normal: 3.5–5.0 g/dL',
    clinicalObservationUse:
      'Quantifies major circulating oncotic protein; monitors hepatic synthetic capacity and chronic systemic malnutrition.',
    fhirObservationCode: 'http://loinc.org|1751-7',
    status: 'ACTIVE',
    officialUrl: 'https://loinc.org/1751-7/',
  },

  // =========================================================================
  // 2. HEMATOLOGY
  // =========================================================================
  {
    loincNumber: '58410-2',
    longCommonName: 'CBC panel - Blood by Automated count',
    shortName: 'CBC Auto Bld',
    displayName: 'Complete Blood Count (CBC) Panel',
    classType: 'Laboratory',
    category: 'Hematology',
    axes: {
      component: 'CBC panel',
      property: '-',
      timing: 'Pt (Point in time)',
      system: 'Bld (Whole blood)',
      scale: 'Qn (Quantitative panel)',
      method: 'Automated flow cytometry / impedance',
    },
    exampleUnits: 'Panel',
    ucumCode: '{panel}',
    referenceRange: 'Panel includes WBC, RBC, Hemoglobin, Hematocrit, Platelets, and RBC Indices',
    clinicalObservationUse:
      'Core diagnostic battery investigating hematopoietic status, anemia, infectious response, and thrombocytopenia.',
    fhirObservationCode: 'http://loinc.org|58410-2',
    status: 'ACTIVE',
    officialUrl: 'https://loinc.org/58410-2/',
  },
  {
    loincNumber: '718-7',
    longCommonName: 'Hemoglobin [Mass/volume] in Blood',
    shortName: 'Hgb Bld-mCnc',
    displayName: 'Hemoglobin (Hb)',
    classType: 'Laboratory',
    category: 'Hematology',
    axes: {
      component: 'Hemoglobin',
      property: 'MCnc (Mass concentration)',
      timing: 'Pt (Point in time)',
      system: 'Bld (Whole blood)',
      scale: 'Qn (Quantitative)',
      method: 'Sodium lauryl sulfate (SLS) / Cyanmethemoglobin',
    },
    exampleUnits: 'g/dL',
    ucumCode: 'g/dL',
    referenceRange: 'Adult Males: 13.5–17.5 g/dL | Adult Females: 12.0–15.5 g/dL',
    clinicalObservationUse:
      'Quantifies oxygen-carrying metalloprotein within erythrocytes; essential for anemia diagnosis and transfusion triggers.',
    fhirObservationCode: 'http://loinc.org|718-7',
    status: 'ACTIVE',
    officialUrl: 'https://loinc.org/718-7/',
  },
  {
    loincNumber: '6690-2',
    longCommonName: 'Leukocytes [#/volume] in Blood by Automated count',
    shortName: 'WBC Auto Bld-Nnc',
    displayName: 'Total White Blood Cell Count (WBC)',
    classType: 'Laboratory',
    category: 'Hematology',
    axes: {
      component: 'Leukocytes',
      property: 'NCnc (Number concentration)',
      timing: 'Pt (Point in time)',
      system: 'Bld (Whole blood)',
      scale: 'Qn (Quantitative)',
      method: 'Automated cell count',
    },
    exampleUnits: '10*3/uL',
    ucumCode: '10*3/uL',
    referenceRange: 'Normal: 4.5–11.0 × 10^3/µL',
    clinicalObservationUse:
      'Monitors cellular immune activation, acute bacterial infections, leukemoid reactions, and bone marrow suppression.',
    fhirObservationCode: 'http://loinc.org|6690-2',
    status: 'ACTIVE',
    officialUrl: 'https://loinc.org/6690-2/',
  },
  {
    loincNumber: '777-3',
    longCommonName: 'Platelets [#/volume] in Blood by Automated count',
    shortName: 'Plt Auto Bld-Nnc',
    displayName: 'Platelet Count',
    classType: 'Laboratory',
    category: 'Hematology',
    axes: {
      component: 'Platelets',
      property: 'NCnc (Number concentration)',
      timing: 'Pt (Point in time)',
      system: 'Bld (Whole blood)',
      scale: 'Qn (Quantitative)',
      method: 'Automated optical / impedance',
    },
    exampleUnits: '10*3/uL',
    ucumCode: '10*3/uL',
    referenceRange: 'Normal: 150–450 × 10^3/µL | Critical bleeding threshold: < 20 × 10^3/µL',
    clinicalObservationUse:
      'Evaluates primary hemostatic reserve; investigates thrombocytopenia, thrombocytosis, and bleeding diatheses.',
    fhirObservationCode: 'http://loinc.org|777-3',
    status: 'ACTIVE',
    officialUrl: 'https://loinc.org/777-3/',
  },
  {
    loincNumber: '4544-3',
    longCommonName: 'Hematocrit [Volume Fraction] of Blood by Automated count',
    shortName: 'Hct Auto Bld-vFr',
    displayName: 'Hematocrit (PCV)',
    classType: 'Laboratory',
    category: 'Hematology',
    axes: {
      component: 'Hematocrit',
      property: 'VFr (Volume fraction)',
      timing: 'Pt (Point in time)',
      system: 'Bld (Whole blood)',
      scale: 'Qn (Quantitative)',
      method: 'Automated calculation (RBC × MCV)',
    },
    exampleUnits: '%',
    ucumCode: '%',
    referenceRange: 'Adult Males: 41–50% | Adult Females: 36–48%',
    clinicalObservationUse:
      'Measures the volumetric proportion of whole blood occupied by erythrocytes; detects hemoconcentration and blood loss.',
    fhirObservationCode: 'http://loinc.org|4544-3',
    status: 'ACTIVE',
    officialUrl: 'https://loinc.org/4544-3/',
  },

  // =========================================================================
  // 3. LIPID PANEL
  // =========================================================================
  {
    loincNumber: '24331-1',
    longCommonName: 'Lipid panel - Serum or Plasma',
    shortName: 'Lipid SerPl',
    displayName: 'Lipid Profile Panel',
    classType: 'Laboratory',
    category: 'Lipid Panel',
    axes: {
      component: 'Lipid panel',
      property: '-',
      timing: 'Pt (Point in time)',
      system: 'Ser/Plas (Serum or Plasma)',
      scale: 'Qn (Quantitative panel)',
      method: 'Automated multi-analyte enzymatic',
    },
    exampleUnits: 'Panel',
    ucumCode: '{panel}',
    referenceRange: 'Panel includes Total Cholesterol, HDL-C, LDL-C, and Triglycerides',
    clinicalObservationUse:
      'Stratifies atherosclerotic cardiovascular disease (ASCVD) risk and guides lipid-lowering statin therapy.',
    fhirObservationCode: 'http://loinc.org|24331-1',
    status: 'ACTIVE',
    officialUrl: 'https://loinc.org/24331-1/',
  },
  {
    loincNumber: '2093-3',
    longCommonName: 'Cholesterol [Mass/volume] in Serum or Plasma',
    shortName: 'Cholest SerPl-mCnc',
    displayName: 'Total Cholesterol',
    classType: 'Laboratory',
    category: 'Lipid Panel',
    axes: {
      component: 'Cholesterol',
      property: 'MCnc (Mass concentration)',
      timing: 'Pt (Point in time)',
      system: 'Ser/Plas (Serum or Plasma)',
      scale: 'Qn (Quantitative)',
      method: 'Cholesterol esterase / oxidase enzymatic',
    },
    exampleUnits: 'mg/dL',
    ucumCode: 'mg/dL',
    referenceRange: 'Desirable: < 200 mg/dL | Borderline high: 200–239 mg/dL | High: ≥ 240 mg/dL',
    clinicalObservationUse:
      'Sum total of circulating sterol lipoproteins reflecting basal vascular atherogenic burden.',
    fhirObservationCode: 'http://loinc.org|2093-3',
    status: 'ACTIVE',
    officialUrl: 'https://loinc.org/2093-3/',
  },
  {
    loincNumber: '13457-7',
    longCommonName: 'Cholesterol in LDL [Mass/volume] in Serum or Plasma by calculation',
    shortName: 'LDLc Calc SerPl-mCnc',
    displayName: 'Low-Density Lipoprotein Cholesterol (LDL-C)',
    classType: 'Laboratory',
    category: 'Lipid Panel',
    axes: {
      component: 'Cholesterol.in LDL',
      property: 'MCnc (Mass concentration)',
      timing: 'Pt (Point in time)',
      system: 'Ser/Plas (Serum or Plasma)',
      scale: 'Qn (Quantitative)',
      method: 'Calculated (Friedewald equation / Martin-Hopkins)',
    },
    exampleUnits: 'mg/dL',
    ucumCode: 'mg/dL',
    referenceRange: 'Optimal: < 100 mg/dL | High risk patient target: < 70 mg/dL | Very high: ≥ 190 mg/dL',
    clinicalObservationUse:
      'Direct atherogenic causal driver; benchmark target for primary and secondary cardiovascular risk reduction.',
    fhirObservationCode: 'http://loinc.org|13457-7',
    status: 'ACTIVE',
    officialUrl: 'https://loinc.org/13457-7/',
  },
  {
    loincNumber: '2085-9',
    longCommonName: 'Cholesterol in HDL [Mass/volume] in Serum or Plasma',
    shortName: 'HDLc SerPl-mCnc',
    displayName: 'High-Density Lipoprotein Cholesterol (HDL-C)',
    classType: 'Laboratory',
    category: 'Lipid Panel',
    axes: {
      component: 'Cholesterol.in HDL',
      property: 'MCnc (Mass concentration)',
      timing: 'Pt (Point in time)',
      system: 'Ser/Plas (Serum or Plasma)',
      scale: 'Qn (Quantitative)',
      method: 'Direct homogeneous enzymatic',
    },
    exampleUnits: 'mg/dL',
    ucumCode: 'mg/dL',
    referenceRange: 'Protective / High: ≥ 60 mg/dL | Low (Risk factor): < 40 mg/dL (men), < 50 mg/dL (women)',
    clinicalObservationUse:
      'Inverse epidemiological risk predictor for coronary artery disease representing reverse cholesterol transport.',
    fhirObservationCode: 'http://loinc.org|2085-9',
    status: 'ACTIVE',
    officialUrl: 'https://loinc.org/2085-9/',
  },
  {
    loincNumber: '2571-8',
    longCommonName: 'Triglyceride [Mass/volume] in Serum or Plasma',
    shortName: 'Triglyceride SerPl-mCnc',
    displayName: 'Serum Triglycerides',
    classType: 'Laboratory',
    category: 'Lipid Panel',
    axes: {
      component: 'Triglyceride',
      property: 'MCnc (Mass concentration)',
      timing: 'Pt (Point in time)',
      system: 'Ser/Plas (Serum or Plasma)',
      scale: 'Qn (Quantitative)',
      method: 'Glycerol kinase enzymatic',
    },
    exampleUnits: 'mg/dL',
    ucumCode: 'mg/dL',
    referenceRange: 'Normal: < 150 mg/dL | Borderline: 150–199 mg/dL | High: 200–499 mg/dL | Severe (Pancreatitis risk): ≥ 500 mg/dL',
    clinicalObservationUse:
      'Evaluates circulating esterified neutral fats; extreme elevations indicate imminent risk of acute necrotizing pancreatitis.',
    fhirObservationCode: 'http://loinc.org|2571-8',
    status: 'ACTIVE',
    officialUrl: 'https://loinc.org/2571-8/',
  },

  // =========================================================================
  // 4. CARDIAC MARKERS
  // =========================================================================
  {
    loincNumber: '10839-9',
    longCommonName: 'Troponin I.cardiac [Mass/volume] in Serum or Plasma',
    shortName: 'cTnI SerPl-mCnc',
    displayName: 'Cardiac Troponin I (cTnI)',
    classType: 'Laboratory',
    category: 'Cardiac Markers',
    axes: {
      component: 'Troponin I.cardiac',
      property: 'MCnc (Mass concentration)',
      timing: 'Pt (Point in time)',
      system: 'Ser/Plas (Serum or Plasma)',
      scale: 'Qn (Quantitative)',
      method: 'High-sensitivity chemiluminescent immunoassay (hs-cTnI)',
    },
    exampleUnits: 'ng/mL',
    ucumCode: 'ng/mL',
    referenceRange: 'Normal 99th percentile: < 0.04 ng/mL (hs-cTnI < 14 ng/L)',
    clinicalObservationUse:
      'Gold standard specific biochemical biomarker for diagnosing acute myocardial infarction (AMI) and myocardial injury.',
    fhirObservationCode: 'http://loinc.org|10839-9',
    status: 'ACTIVE',
    officialUrl: 'https://loinc.org/10839-9/',
  },
  {
    loincNumber: '33762-6',
    longCommonName: 'Natriuretic peptide B prohormone N-Terminal [Mass/volume] in Serum or Plasma',
    shortName: 'NT-proBNP SerPl-mCnc',
    displayName: 'NT-proBNP (N-Terminal Pro-B-type Natriuretic Peptide)',
    classType: 'Laboratory',
    category: 'Cardiac Markers',
    axes: {
      component: 'Natriuretic peptide B prohormone N-Terminal',
      property: 'MCnc (Mass concentration)',
      timing: 'Pt (Point in time)',
      system: 'Ser/Plas (Serum or Plasma)',
      scale: 'Qn (Quantitative)',
      method: 'ECLIA immunoassay',
    },
    exampleUnits: 'pg/mL',
    ucumCode: 'pg/mL',
    referenceRange: 'Heart failure rule-out: < 125 pg/mL (< 75 years) | < 450 pg/mL (≥ 75 years)',
    clinicalObservationUse:
      'Released by ventricular myocytes under hemodynamic stretch; rule-out biomarker for congestive heart failure.',
    fhirObservationCode: 'http://loinc.org|33762-6',
    status: 'ACTIVE',
    officialUrl: 'https://loinc.org/33762-6/',
  },

  // =========================================================================
  // 5. VITAL SIGNS (CLINICAL OBSERVATION LAYER)
  // =========================================================================
  {
    loincNumber: '8480-6',
    longCommonName: 'Systolic blood pressure',
    shortName: 'BP sys',
    displayName: 'Systolic Blood Pressure',
    classType: 'Clinical',
    category: 'Vital Signs',
    axes: {
      component: 'Intravascular systolic',
      property: 'Pres (Pressure)',
      timing: 'Pt (Point in time)',
      system: 'Arterial system (Arterial blood)',
      scale: 'Qn (Quantitative)',
      method: 'Auscultation / Automated non-invasive cuff',
    },
    exampleUnits: 'mm[Hg]',
    ucumCode: 'mm[Hg]',
    referenceRange: 'Normal: < 120 mm Hg | Elevated: 120–129 mm Hg | Stage 1 HTN: 130–139 mm Hg | Stage 2 HTN: ≥ 140 mm Hg',
    clinicalObservationUse:
      'Peak arterial wall pressure reached during ventricular systole; primary screening tool for systemic hypertension.',
    fhirObservationCode: 'http://loinc.org|8480-6',
    status: 'ACTIVE',
    officialUrl: 'https://loinc.org/8480-6/',
  },
  {
    loincNumber: '8462-4',
    longCommonName: 'Diastolic blood pressure',
    shortName: 'BP dias',
    displayName: 'Diastolic Blood Pressure',
    classType: 'Clinical',
    category: 'Vital Signs',
    axes: {
      component: 'Intravascular diastolic',
      property: 'Pres (Pressure)',
      timing: 'Pt (Point in time)',
      system: 'Arterial system (Arterial blood)',
      scale: 'Qn (Quantitative)',
      method: 'Auscultation / Automated non-invasive cuff',
    },
    exampleUnits: 'mm[Hg]',
    ucumCode: 'mm[Hg]',
    referenceRange: 'Normal: < 80 mm Hg | Stage 1 HTN: 80–89 mm Hg | Stage 2 HTN: ≥ 90 mm Hg | Hypertensive Crisis: > 120 mm Hg',
    clinicalObservationUse:
      'Baseline systemic vascular resistance when the heart relaxes between beats during ventricular diastole.',
    fhirObservationCode: 'http://loinc.org|8462-4',
    status: 'ACTIVE',
    officialUrl: 'https://loinc.org/8462-4/',
  },
  {
    loincNumber: '8867-4',
    longCommonName: 'Heart rate',
    shortName: 'Heart rate',
    displayName: 'Heart Rate (Pulse)',
    classType: 'Clinical',
    category: 'Vital Signs',
    axes: {
      component: 'Heart rate',
      property: 'NRat (Number rate)',
      timing: 'Pt (Point in time)',
      system: 'Heart / Peripheral artery',
      scale: 'Qn (Quantitative)',
      method: 'Palpation / Auscultation / Pulse oximetry',
    },
    exampleUnits: '/min',
    ucumCode: '/min',
    referenceRange: 'Normal resting: 60–100 beats/min | Bradycardia: < 60 | Tachycardia: > 100',
    clinicalObservationUse:
      'Frequency of cardiac cycles per minute indicating autonomic tone, cardiovascular strain, and shock status.',
    fhirObservationCode: 'http://loinc.org|8867-4',
    status: 'ACTIVE',
    officialUrl: 'https://loinc.org/8867-4/',
  },
  {
    loincNumber: '8310-5',
    longCommonName: 'Body temperature',
    shortName: 'Body temp',
    displayName: 'Body Temperature',
    classType: 'Clinical',
    category: 'Vital Signs',
    axes: {
      component: 'Body temperature',
      property: 'Temp (Temperature)',
      timing: 'Pt (Point in time)',
      system: 'Patient',
      scale: 'Qn (Quantitative)',
      method: 'Tympanic / Oral / Axillary electronic probe',
    },
    exampleUnits: 'degC',
    ucumCode: 'Cel',
    referenceRange: 'Normal: 36.5–37.5 °C (97.7–99.5 °F) | Pyrexia / Fever: ≥ 38.0 °C (100.4 °F)',
    clinicalObservationUse:
      'Core thermal homeostasis measurement identifying systemic inflammatory response syndrome (SIRS), sepsis, or hypothermia.',
    fhirObservationCode: 'http://loinc.org|8310-5',
    status: 'ACTIVE',
    officialUrl: 'https://loinc.org/8310-5/',
  },
  {
    loincNumber: '59408-5',
    longCommonName: 'Oxygen saturation in Arterial blood by Pulse oximetry',
    shortName: 'SpO2 Pre-ductal',
    displayName: 'Pulse Oximetry Oxygen Saturation (SpO2)',
    classType: 'Clinical',
    category: 'Vital Signs',
    axes: {
      component: 'Oxygen saturation',
      property: 'MFr (Mass fraction)',
      timing: 'Pt (Point in time)',
      system: 'Arterial blood',
      scale: 'Qn (Quantitative)',
      method: 'Dual wavelength optical pulse oximetry',
    },
    exampleUnits: '%',
    ucumCode: '%',
    referenceRange: 'Normal: 95–100% | Hypoxemia threshold: < 92% | Emergency trigger: < 88% (or target 88–92% in COPD)',
    clinicalObservationUse:
      'Non-invasive estimation of arterial oxygenation vital for respiratory insufficiency, acute asthma, and pneumonia triage.',
    fhirObservationCode: 'http://loinc.org|59408-5',
    status: 'ACTIVE',
    officialUrl: 'https://loinc.org/59408-5/',
  },
  {
    loincNumber: '29463-7',
    longCommonName: 'Body weight',
    shortName: 'Body weight',
    displayName: 'Body Weight',
    classType: 'Clinical',
    category: 'Vital Signs',
    axes: {
      component: 'Body weight',
      property: 'Mass',
      timing: 'Pt (Point in time)',
      system: 'Patient',
      scale: 'Qn (Quantitative)',
      method: 'Calibrated electronic scale',
    },
    exampleUnits: 'kg',
    ucumCode: 'kg',
    referenceRange: 'Used to calculate BMI, monitor fluid overload in heart failure/dialysis, and dose chemotherapy.',
    clinicalObservationUse:
      'Fundamental metric for metabolic assessment, pharmacological dosing, and acute fluid retention surveillance.',
    fhirObservationCode: 'http://loinc.org|29463-7',
    status: 'ACTIVE',
    officialUrl: 'https://loinc.org/29463-7/',
  },

  // =========================================================================
  // 6. URINALYSIS & RENAL OBSERVATIONS
  // =========================================================================
  {
    loincNumber: '14959-1',
    longCommonName: 'Microalbumin/Creatinine [Mass Ratio] in Urine',
    shortName: 'Albumin/Creat Ur-mRto',
    displayName: 'Urine Albumin-to-Creatinine Ratio (uACR)',
    classType: 'Laboratory',
    category: 'Urinalysis',
    axes: {
      component: 'Microalbumin/Creatinine',
      property: 'MassRto (Mass ratio)',
      timing: 'Pt (Point in time - spot urine)',
      system: 'Urine',
      scale: 'Qn (Quantitative)',
      method: 'Immunoturbidimetric / Jaffé ratio',
    },
    exampleUnits: 'mg/g',
    ucumCode: 'mg/g',
    referenceRange: 'Normal: < 30 mg/g | Microalbuminuria: 30–300 mg/g | Macroalbuminuria / Severely elevated: > 300 mg/g',
    clinicalObservationUse:
      'Preferred frontline screening test for early diabetic nephropathy and hypertensive renal microvascular injury.',
    fhirObservationCode: 'http://loinc.org|14959-1',
    status: 'ACTIVE',
    officialUrl: 'https://loinc.org/14959-1/',
  },
  {
    loincNumber: '2888-6',
    longCommonName: 'Protein [Mass/volume] in Urine',
    shortName: 'Protein Ur-mCnc',
    displayName: 'Urine Total Protein',
    classType: 'Laboratory',
    category: 'Urinalysis',
    axes: {
      component: 'Protein',
      property: 'MCnc (Mass concentration)',
      timing: 'Pt (Point in time)',
      system: 'Urine',
      scale: 'Qn (Quantitative)',
      method: 'Pyrogallol red / Colorimetric',
    },
    exampleUnits: 'mg/dL',
    ucumCode: 'mg/dL',
    referenceRange: 'Normal spot urine: < 10 mg/dL | Trace: 10–20 mg/dL | Proteinuria: > 30 mg/dL',
    clinicalObservationUse:
      'Identifies breakdown in glomerular capillary permeability or tubular reabsorption failure.',
    fhirObservationCode: 'http://loinc.org|2888-6',
    status: 'ACTIVE',
    officialUrl: 'https://loinc.org/2888-6/',
  },

  // =========================================================================
  // 7. ENDOCRINE & METABOLIC
  // =========================================================================
  {
    loincNumber: '3016-3',
    longCommonName: 'Thyrotropin [Units/volume] in Serum or Plasma',
    shortName: 'TSH SerPl-aCnc',
    displayName: 'Thyroid Stimulating Hormone (TSH)',
    classType: 'Laboratory',
    category: 'Endocrine & Metabolic',
    axes: {
      component: 'Thyrotropin',
      property: 'ACnc (Arbitrary concentration)',
      timing: 'Pt (Point in time)',
      system: 'Ser/Plas (Serum or Plasma)',
      scale: 'Qn (Quantitative)',
      method: '3rd generation chemiluminescent immunoassay',
    },
    exampleUnits: 'uIU/mL',
    ucumCode: 'uIU/mL',
    referenceRange: 'Normal: 0.4–4.0 µIU/mL | Hypothyroidism: > 4.5 µIU/mL | Hyperthyroidism: < 0.1 µIU/mL',
    clinicalObservationUse:
      'First-line investigation evaluating anterior pituitary-thyroid gland feedback loop for hypothyroidism and hyperthyroidism.',
    fhirObservationCode: 'http://loinc.org|3016-3',
    status: 'ACTIVE',
    officialUrl: 'https://loinc.org/3016-3/',
  },
  {
    loincNumber: '3024-7',
    longCommonName: 'Thyroxine (T4) free [Mass/volume] in Serum or Plasma',
    shortName: 'FT4 SerPl-mCnc',
    displayName: 'Free Thyroxine (FT4)',
    classType: 'Laboratory',
    category: 'Endocrine & Metabolic',
    axes: {
      component: 'Thyroxine.free',
      property: 'MCnc (Mass concentration)',
      timing: 'Pt (Point in time)',
      system: 'Ser/Plas (Serum or Plasma)',
      scale: 'Qn (Quantitative)',
      method: 'Competitive electrochemiluminescence',
    },
    exampleUnits: 'ng/dL',
    ucumCode: 'ng/dL',
    referenceRange: 'Normal: 0.8–1.8 ng/dL',
    clinicalObservationUse:
      'Measures active unbound circulating thyroxine, avoiding interference from thyroxine-binding globulin (TBG) fluctuations.',
    fhirObservationCode: 'http://loinc.org|3024-7',
    status: 'ACTIVE',
    officialUrl: 'https://loinc.org/3024-7/',
  },
  {
    loincNumber: '1989-3',
    longCommonName: 'C reactive protein [Mass/volume] in Serum or Plasma by High sensitivity method',
    shortName: 'CRP hs SerPl-mCnc',
    displayName: 'High-Sensitivity C-Reactive Protein (hs-CRP)',
    classType: 'Laboratory',
    category: 'Endocrine & Metabolic',
    axes: {
      component: 'C reactive protein',
      property: 'MCnc (Mass concentration)',
      timing: 'Pt (Point in time)',
      system: 'Ser/Plas (Serum or Plasma)',
      scale: 'Qn (Quantitative)',
      method: 'Particle-enhanced turbidimetric immunoassay (PETIA)',
    },
    exampleUnits: 'mg/L',
    ucumCode: 'mg/L',
    referenceRange: 'Low cardiovascular risk: < 1.0 mg/L | Moderate risk: 1.0–3.0 mg/L | High risk: > 3.0 mg/L | Acute infection: > 10.0 mg/L',
    clinicalObservationUse:
      'Acute-phase reactant synthesized by the liver; sensitive detector of low-grade systemic vascular inflammation.',
    fhirObservationCode: 'http://loinc.org|1989-3',
    status: 'ACTIVE',
    officialUrl: 'https://loinc.org/1989-3/',
  },
  {
    loincNumber: '2472-9',
    longCommonName: 'Ferritin [Mass/volume] in Serum or Plasma',
    shortName: 'Ferritin SerPl-mCnc',
    displayName: 'Serum Ferritin',
    classType: 'Laboratory',
    category: 'Endocrine & Metabolic',
    axes: {
      component: 'Ferritin',
      property: 'MCnc (Mass concentration)',
      timing: 'Pt (Point in time)',
      system: 'Ser/Plas (Serum or Plasma)',
      scale: 'Qn (Quantitative)',
      method: 'Chemiluminescent microparticle immunoassay',
    },
    exampleUnits: 'ng/mL',
    ucumCode: 'ng/mL',
    referenceRange: 'Adult Males: 30–400 ng/mL | Adult Females: 15–150 ng/mL | Iron deficiency: < 15 ng/mL',
    clinicalObservationUse:
      'Reflects total body reticuloendothelial iron stores; key discriminator between iron deficiency anemia and anemia of chronic disease.',
    fhirObservationCode: 'http://loinc.org|2472-9',
    status: 'ACTIVE',
    officialUrl: 'https://loinc.org/2472-9/',
  },
];
