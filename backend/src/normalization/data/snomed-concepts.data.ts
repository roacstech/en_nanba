export interface SnomedRelationship {
  type: 'Is a' | 'Finding site' | 'Associated morphology' | 'Method' | 'Procedure site' | 'Direct substance' | 'Has direct etiology';
  targetId: string;
  targetDisplay: string;
}

export interface SnomedIcd11Map {
  code: string;
  display: string;
  mapType: 'Exact Match' | 'Equivalent' | 'Narrower' | 'Broader' | 'Associated';
  chapter: string;
}

export interface SnomedConceptEntry {
  conceptId: string;
  fsn: string;
  preferredTerm: string;
  semanticTag: 'disorder' | 'finding' | 'procedure' | 'body structure' | 'observable entity' | 'substance';
  hierarchy: 'Clinical Finding' | 'Procedure' | 'Body Structure' | 'Observable Entity' | 'Substance';
  status: 'Active';
  effectiveTime: string;
  synonyms: string[];
  definition: string;
  relationships: SnomedRelationship[];
  icd11Mapping: SnomedIcd11Map;
}

export interface SnomedLicensingInfo {
  standard: string;
  owner: string;
  releaseEdition: string;
  effectiveDate: string;
  nationalReleaseCenter: string;
  ministryAuthority: string;
  territory: string;
  licenseSummary: string;
  complianceNotes: string[];
  officialLinks: {
    snomedInternational: string;
    browser: string;
    licensing: string;
    nrcIndia: string;
  };
}

export const SNOMED_LICENSING_METADATA: SnomedLicensingInfo = {
  standard: 'SNOMED CT International Edition',
  owner: 'SNOMED International',
  releaseEdition: 'Global Clinical Release (2024-09 Edition)',
  effectiveDate: '2024-09-01',
  nationalReleaseCenter: 'SNOMED CT National Release Centre for India (NRC India)',
  ministryAuthority: 'Ministry of Health and Family Welfare (MoHFW) / National Health Authority (NHA) ABDM',
  territory: 'India (Royalty-free national affiliate usage under NRC India charter)',
  licenseSummary: 'SNOMED CT is utilized in compliance with the National Affiliate License administered by NRC India under the MoHFW, enabling clinical coding across Ayushman Bharat Digital Mission (ABDM) digital health applications.',
  complianceNotes: [
    'Clinical terminology complement to ICD-11 (not replacing internal diagnostic classifications).',
    'Permitted for point-of-care clinical documentation, EHR interoperability, and semantic validation.',
    'Distribution outside licensed territories requires standard SNOMED International affiliate agreements.'
  ],
  officialLinks: {
    snomedInternational: 'https://www.snomed.org',
    browser: 'https://browser.ihtsdotools.org/',
    licensing: 'https://www.snomed.org/snomed-ct/get-snomed',
    nrcIndia: 'https://www.nrces.in'
  }
};

export const OFFICIAL_SNOMED_CONCEPTS: SnomedConceptEntry[] = [
  // =========================================================================
  // 1. ENDOCRINE & METABOLIC DISORDERS
  // =========================================================================
  {
    conceptId: '73211009',
    fsn: 'Diabetes mellitus (disorder)',
    preferredTerm: 'Diabetes mellitus',
    semanticTag: 'disorder',
    hierarchy: 'Clinical Finding',
    status: 'Active',
    effectiveTime: '20240901',
    synonyms: ['Diabetes', 'DM', 'Disorder of glucose regulation'],
    definition: 'A chronic metabolic disorder of multiple etiology characterized by chronic hyperglycemia with disturbances of carbohydrate, fat and protein metabolism resulting from defects in insulin secretion, insulin action, or both.',
    relationships: [
      { type: 'Is a', targetId: '362969004', targetDisplay: 'Disorder of endocrine system (disorder)' },
      { type: 'Finding site', targetId: '113331007', targetDisplay: 'Structure of endocrine pancreas (body structure)' }
    ],
    icd11Mapping: {
      code: '5A10',
      display: 'Diabetes mellitus',
      mapType: 'Exact Match',
      chapter: '05 Endocrine, nutritional or metabolic diseases'
    }
  },
  {
    conceptId: '46635009',
    fsn: 'Type 1 diabetes mellitus (disorder)',
    preferredTerm: 'Type 1 diabetes mellitus',
    semanticTag: 'disorder',
    hierarchy: 'Clinical Finding',
    status: 'Active',
    effectiveTime: '20240901',
    synonyms: ['T1D', 'Insulin-dependent diabetes mellitus', 'IDDM', 'Juvenile-onset diabetes'],
    definition: 'An autoimmune condition characterized by immune-mediated pancreatic beta cell destruction leading to absolute insulin deficiency.',
    relationships: [
      { type: 'Is a', targetId: '73211009', targetDisplay: 'Diabetes mellitus (disorder)' },
      { type: 'Finding site', targetId: '113331007', targetDisplay: 'Structure of endocrine pancreas (body structure)' },
      { type: 'Associated morphology', targetId: '708507008', targetDisplay: 'Autoimmune process (qualifier value)' }
    ],
    icd11Mapping: {
      code: '5A10',
      display: 'Type 1 diabetes mellitus',
      mapType: 'Exact Match',
      chapter: '05 Endocrine, nutritional or metabolic diseases'
    }
  },
  {
    conceptId: '44054006',
    fsn: 'Type 2 diabetes mellitus (disorder)',
    preferredTerm: 'Type 2 diabetes mellitus',
    semanticTag: 'disorder',
    hierarchy: 'Clinical Finding',
    status: 'Active',
    effectiveTime: '20240901',
    synonyms: ['T2D', 'Non-insulin-dependent diabetes mellitus', 'NIDDM', 'Adult-onset diabetes'],
    definition: 'A progressive metabolic condition characterized by peripheral insulin resistance combined with insufficient compensatory insulin secretion by pancreatic beta cells.',
    relationships: [
      { type: 'Is a', targetId: '73211009', targetDisplay: 'Diabetes mellitus (disorder)' },
      { type: 'Finding site', targetId: '113331007', targetDisplay: 'Structure of endocrine pancreas (body structure)' }
    ],
    icd11Mapping: {
      code: '5A11',
      display: 'Type 2 diabetes mellitus',
      mapType: 'Exact Match',
      chapter: '05 Endocrine, nutritional or metabolic diseases'
    }
  },
  {
    conceptId: '190268003',
    fsn: 'Diabetic ketoacidosis (disorder)',
    preferredTerm: 'Diabetic ketoacidosis',
    semanticTag: 'disorder',
    hierarchy: 'Clinical Finding',
    status: 'Active',
    effectiveTime: '20240901',
    synonyms: ['DKA', 'Diabetic acidosis with ketosis'],
    definition: 'An acute, life-threatening metabolic emergency caused by severe insulin deficiency, resulting in marked hyperglycemia, metabolic acidosis, and accumulation of ketone bodies.',
    relationships: [
      { type: 'Is a', targetId: '73211009', targetDisplay: 'Diabetes mellitus (disorder)' },
      { type: 'Associated morphology', targetId: '125586001', targetDisplay: 'Acidosis (finding)' }
    ],
    icd11Mapping: {
      code: '5A20',
      display: 'Diabetic ketoacidosis',
      mapType: 'Equivalent',
      chapter: '05 Endocrine, nutritional or metabolic diseases'
    }
  },
  {
    conceptId: '48130008',
    fsn: 'Hypothyroidism (disorder)',
    preferredTerm: 'Hypothyroidism',
    semanticTag: 'disorder',
    hierarchy: 'Clinical Finding',
    status: 'Active',
    effectiveTime: '20240901',
    synonyms: ['Underactive thyroid', 'Thyroid hormone deficiency'],
    definition: 'A clinical state resulting from underproduction of thyroid hormones (T3 and T4) by the thyroid gland.',
    relationships: [
      { type: 'Is a', targetId: '362969004', targetDisplay: 'Disorder of endocrine system (disorder)' },
      { type: 'Finding site', targetId: '69748006', targetDisplay: 'Thyroid gland structure (body structure)' }
    ],
    icd11Mapping: {
      code: '5A00',
      display: 'Hypothyroidism',
      mapType: 'Exact Match',
      chapter: '05 Endocrine, nutritional or metabolic diseases'
    }
  },

  // =========================================================================
  // 2. CARDIOVASCULAR & CIRCULATORY DISORDERS
  // =========================================================================
  {
    conceptId: '22298006',
    fsn: 'Myocardial infarction (disorder)',
    preferredTerm: 'Myocardial infarction',
    semanticTag: 'disorder',
    hierarchy: 'Clinical Finding',
    status: 'Active',
    effectiveTime: '20240901',
    synonyms: ['Heart attack', 'MI', 'Acute myocardial infarction'],
    definition: 'Gross necrosis of the myocardium, as a result of interruption of the blood supply to the area (ischemia), most commonly due to acute thrombotic occlusion of a coronary artery.',
    relationships: [
      { type: 'Is a', targetId: '414545008', targetDisplay: 'Ischemic heart disease (disorder)' },
      { type: 'Finding site', targetId: '74281007', targetDisplay: 'Myocardium structure (body structure)' },
      { type: 'Associated morphology', targetId: '55641003', targetDisplay: 'Infarction (morphologic abnormality)' }
    ],
    icd11Mapping: {
      code: 'BA41',
      display: 'Acute myocardial infarction',
      mapType: 'Exact Match',
      chapter: '11 Diseases of the circulatory system'
    }
  },
  {
    conceptId: '38341003',
    fsn: 'Hypertensive disorder (disorder)',
    preferredTerm: 'Hypertensive disorder',
    semanticTag: 'disorder',
    hierarchy: 'Clinical Finding',
    status: 'Active',
    effectiveTime: '20240901',
    synonyms: ['High blood pressure', 'Hypertension', 'HTN'],
    definition: 'A persistent elevation of systemic arterial pressure characterized by systolic pressure >= 140 mmHg and/or diastolic pressure >= 90 mmHg on clinic measurements.',
    relationships: [
      { type: 'Is a', targetId: '49601007', targetDisplay: 'Disorder of cardiovascular system (disorder)' },
      { type: 'Finding site', targetId: '113257007', targetDisplay: 'Structure of cardiovascular system (body structure)' }
    ],
    icd11Mapping: {
      code: 'BA00',
      display: 'Essential hypertension',
      mapType: 'Equivalent',
      chapter: '11 Diseases of the circulatory system'
    }
  },
  {
    conceptId: '84114007',
    fsn: 'Heart failure (disorder)',
    preferredTerm: 'Heart failure',
    semanticTag: 'disorder',
    hierarchy: 'Clinical Finding',
    status: 'Active',
    effectiveTime: '20240901',
    synonyms: ['Cardiac failure', 'Congestive heart failure', 'CHF'],
    definition: 'A complex clinical syndrome that results from any structural or functional impairment of ventricular filling or ejection of blood.',
    relationships: [
      { type: 'Is a', targetId: '49601007', targetDisplay: 'Disorder of cardiovascular system (disorder)' },
      { type: 'Finding site', targetId: '80891009', targetDisplay: 'Heart structure (body structure)' }
    ],
    icd11Mapping: {
      code: 'BD10',
      display: 'Congestive heart failure',
      mapType: 'Exact Match',
      chapter: '11 Diseases of the circulatory system'
    }
  },
  {
    conceptId: '49436004',
    fsn: 'Atrial fibrillation (disorder)',
    preferredTerm: 'Atrial fibrillation',
    semanticTag: 'disorder',
    hierarchy: 'Clinical Finding',
    status: 'Active',
    effectiveTime: '20240901',
    synonyms: ['AFib', 'A-fib', 'Auricular fibrillation'],
    definition: 'A supraventricular tachyarrhythmia characterized by uncoordinated atrial activation with consequent deterioration of atrial mechanical function.',
    relationships: [
      { type: 'Is a', targetId: '17366009', targetDisplay: 'Cardiac arrhythmia (disorder)' },
      { type: 'Finding site', targetId: '82471004', targetDisplay: 'Atrial structure (body structure)' }
    ],
    icd11Mapping: {
      code: 'BC81.3',
      display: 'Atrial fibrillation',
      mapType: 'Exact Match',
      chapter: '11 Diseases of the circulatory system'
    }
  },

  // =========================================================================
  // 3. RESPIRATORY DISORDERS
  // =========================================================================
  {
    conceptId: '195967001',
    fsn: 'Asthma (disorder)',
    preferredTerm: 'Asthma',
    semanticTag: 'disorder',
    hierarchy: 'Clinical Finding',
    status: 'Active',
    effectiveTime: '20240901',
    synonyms: ['Bronchial asthma', 'Hyperreactive airway disease'],
    definition: 'A chronic inflammatory disorder of the airways characterized by recurrent episodes of wheezing, breathlessness, chest tightness and coughing, associated with variable airflow limitation.',
    relationships: [
      { type: 'Is a', targetId: '19829001', targetDisplay: 'Disorder of lung (disorder)' },
      { type: 'Finding site', targetId: '955009', targetDisplay: 'Bronchial structure (body structure)' }
    ],
    icd11Mapping: {
      code: 'CA23',
      display: 'Asthma',
      mapType: 'Exact Match',
      chapter: '12 Diseases of the respiratory system'
    }
  },
  {
    conceptId: '13645005',
    fsn: 'Chronic obstructive lung disease (disorder)',
    preferredTerm: 'Chronic obstructive lung disease',
    semanticTag: 'disorder',
    hierarchy: 'Clinical Finding',
    status: 'Active',
    effectiveTime: '20240901',
    synonyms: ['COPD', 'Chronic obstructive pulmonary disease', 'COLD'],
    definition: 'A common, preventable and treatable disease characterized by persistent respiratory symptoms and airflow limitation due to airway and/or alveolar abnormalities usually caused by significant exposure to noxious particles or gases.',
    relationships: [
      { type: 'Is a', targetId: '19829001', targetDisplay: 'Disorder of lung (disorder)' },
      { type: 'Finding site', targetId: '181277001', targetDisplay: 'Entire lung (body structure)' }
    ],
    icd11Mapping: {
      code: 'CA22',
      display: 'Chronic obstructive pulmonary disease',
      mapType: 'Exact Match',
      chapter: '12 Diseases of the respiratory system'
    }
  },
  {
    conceptId: '233604007',
    fsn: 'Pneumonia (disorder)',
    preferredTerm: 'Pneumonia',
    semanticTag: 'disorder',
    hierarchy: 'Clinical Finding',
    status: 'Active',
    effectiveTime: '20240901',
    synonyms: ['Pulmonitis', 'Acute lung infection'],
    definition: 'An acute infection of the pulmonary parenchyma caused by bacteria, viruses, fungi, or parasites, resulting in consolidation of alveolar spaces.',
    relationships: [
      { type: 'Is a', targetId: '128601007', targetDisplay: 'Lower respiratory tract infection (disorder)' },
      { type: 'Finding site', targetId: '181277001', targetDisplay: 'Entire lung (body structure)' }
    ],
    icd11Mapping: {
      code: 'CA40',
      display: 'Pneumonia',
      mapType: 'Exact Match',
      chapter: '12 Diseases of the respiratory system'
    }
  },

  // =========================================================================
  // 4. INFECTIOUS & COMMUNICABLE DISEASES
  // =========================================================================
  {
    conceptId: '63650001',
    fsn: 'Cholera (disorder)',
    preferredTerm: 'Cholera',
    semanticTag: 'disorder',
    hierarchy: 'Clinical Finding',
    status: 'Active',
    effectiveTime: '20240901',
    synonyms: ['Asiatic cholera', 'Epidemic cholera', 'Vibrio cholerae infection'],
    definition: 'An acute, diarrheal illness caused by infection of the intestine with the bacterium Vibrio cholerae. People can get sick when they swallow food or water contaminated with cholera bacteria.',
    relationships: [
      { type: 'Is a', targetId: '87628006', targetDisplay: 'Bacterial infectious disease (disorder)' },
      { type: 'Finding site', targetId: '113276009', targetDisplay: 'Intestinal structure (body structure)' },
      { type: 'Direct substance', targetId: '46387002', targetDisplay: 'Vibrio cholerae (organism)' }
    ],
    icd11Mapping: {
      code: '1A00',
      display: 'Cholera',
      mapType: 'Exact Match',
      chapter: '01 Certain infectious or parasitic diseases'
    }
  },
  {
    conceptId: '38907003',
    fsn: 'Dengue fever (disorder)',
    preferredTerm: 'Dengue fever',
    semanticTag: 'disorder',
    hierarchy: 'Clinical Finding',
    status: 'Active',
    effectiveTime: '20240901',
    synonyms: ['Breakbone fever', 'Dengue virus infection'],
    definition: 'A mosquito-borne tropical disease caused by the dengue virus, transmitted primarily by Aedes aegypti mosquitoes, presenting with sudden-onset fever, severe headache, and myalgias.',
    relationships: [
      { type: 'Is a', targetId: '40468003', targetDisplay: 'Viral disease (disorder)' },
      { type: 'Direct substance', targetId: '38907003', targetDisplay: 'Dengue virus (organism)' }
    ],
    icd11Mapping: {
      code: '1D20',
      display: 'Dengue',
      mapType: 'Exact Match',
      chapter: '01 Certain infectious or parasitic diseases'
    }
  },
  {
    conceptId: '56717001',
    fsn: 'Tuberculosis (disorder)',
    preferredTerm: 'Tuberculosis',
    semanticTag: 'disorder',
    hierarchy: 'Clinical Finding',
    status: 'Active',
    effectiveTime: '20240901',
    synonyms: ['TB', 'Mycobacterial tuberculosis infection'],
    definition: 'A chronic infectious disease caused by Mycobacterium tuberculosis, most commonly affecting the lungs (pulmonary TB) but capable of affecting any organ.',
    relationships: [
      { type: 'Is a', targetId: '87628006', targetDisplay: 'Bacterial infectious disease (disorder)' },
      { type: 'Direct substance', targetId: '113861009', targetDisplay: 'Mycobacterium tuberculosis complex (organism)' }
    ],
    icd11Mapping: {
      code: '1B10',
      display: 'Tuberculosis of respiratory system',
      mapType: 'Exact Match',
      chapter: '01 Certain infectious or parasitic diseases'
    }
  },
  {
    conceptId: '840539006',
    fsn: 'Disease caused by severe acute respiratory syndrome coronavirus 2 (disorder)',
    preferredTerm: 'COVID-19',
    semanticTag: 'disorder',
    hierarchy: 'Clinical Finding',
    status: 'Active',
    effectiveTime: '20240901',
    synonyms: ['Coronavirus disease 2019', 'SARS-CoV-2 infection', '2019-nCoV acute respiratory disease'],
    definition: 'An acute respiratory infection caused by the novel coronavirus SARS-CoV-2, capable of progressing to bilateral pneumonia, acute respiratory distress syndrome, and multisystem organ failure.',
    relationships: [
      { type: 'Is a', targetId: '40468003', targetDisplay: 'Viral disease (disorder)' },
      { type: 'Direct substance', targetId: '840533007', targetDisplay: 'Severe acute respiratory syndrome coronavirus 2 (organism)' }
    ],
    icd11Mapping: {
      code: 'RA01',
      display: 'COVID-19',
      mapType: 'Exact Match',
      chapter: '25 Codes for special purposes'
    }
  },

  // =========================================================================
  // 5. NEUROLOGICAL DISORDERS
  // =========================================================================
  {
    conceptId: '230690007',
    fsn: 'Cerebrovascular accident (disorder)',
    preferredTerm: 'Stroke',
    semanticTag: 'disorder',
    hierarchy: 'Clinical Finding',
    status: 'Active',
    effectiveTime: '20240901',
    synonyms: ['CVA', 'Cerebrovascular apoplexy', 'Brain attack'],
    definition: 'Acute focal neurological deficit of vascular origin lasting more than 24 hours, secondary to cerebral infarction or intracerebral hemorrhage.',
    relationships: [
      { type: 'Is a', targetId: '62914000', targetDisplay: 'Cerebrovascular disease (disorder)' },
      { type: 'Finding site', targetId: '12738006', targetDisplay: 'Brain structure (body structure)' }
    ],
    icd11Mapping: {
      code: '8B20',
      display: 'Stroke',
      mapType: 'Exact Match',
      chapter: '08 Diseases of the nervous system'
    }
  },
  {
    conceptId: '762952008',
    fsn: 'Parkinson disease (disorder)',
    preferredTerm: 'Parkinson disease',
    semanticTag: 'disorder',
    hierarchy: 'Clinical Finding',
    status: 'Active',
    effectiveTime: '20240901',
    synonyms: ['Parkinsonism', 'Idiopathic Parkinson disease', 'Paralysis agitans'],
    definition: 'A progressive neurodegenerative disorder marked by loss of dopaminergic neurons in the substantia nigra, resulting in resting tremor, bradykinesia, rigidity, and postural instability.',
    relationships: [
      { type: 'Is a', targetId: '128188000', targetDisplay: 'Neurodegenerative disease (disorder)' },
      { type: 'Finding site', targetId: '72696002', targetDisplay: 'Substantia nigra structure (body structure)' }
    ],
    icd11Mapping: {
      code: '8A00',
      display: 'Parkinson disease',
      mapType: 'Exact Match',
      chapter: '08 Diseases of the nervous system'
    }
  },

  // =========================================================================
  // 6. CLINICAL PROCEDURES & SURGICAL INTERVENTIONS
  // =========================================================================
  {
    conceptId: '80146002',
    fsn: 'Excision of appendix (procedure)',
    preferredTerm: 'Appendectomy',
    semanticTag: 'procedure',
    hierarchy: 'Procedure',
    status: 'Active',
    effectiveTime: '20240901',
    synonyms: ['Removal of appendix', 'Appendicectomy'],
    definition: 'Surgical excision of the vermiform appendix, performed open or laparoscopically, primarily as definitive treatment for acute appendicitis.',
    relationships: [
      { type: 'Is a', targetId: '65801008', targetDisplay: 'Excision (procedure)' },
      { type: 'Procedure site', targetId: '66754008', targetDisplay: 'Appendix structure (body structure)' }
    ],
    icd11Mapping: {
      code: 'PE40',
      display: 'Appendectomy',
      mapType: 'Equivalent',
      chapter: 'ICHI Interventions / Digestive Surgery'
    }
  },
  {
    conceptId: '265764009',
    fsn: 'Renal dialysis (procedure)',
    preferredTerm: 'Renal dialysis',
    semanticTag: 'procedure',
    hierarchy: 'Procedure',
    status: 'Active',
    effectiveTime: '20240901',
    synonyms: ['Hemodialysis', 'Kidney dialysis', 'Extracorporeal dialysis'],
    definition: 'The clinical process of removing waste products and excess fluid from the blood when the kidneys have lost their functional clearance capacity.',
    relationships: [
      { type: 'Is a', targetId: '387713003', targetDisplay: 'Surgical procedure (procedure)' },
      { type: 'Procedure site', targetId: '64033007', targetDisplay: 'Kidney structure (body structure)' }
    ],
    icd11Mapping: {
      code: 'PE60',
      display: 'Dialysis',
      mapType: 'Equivalent',
      chapter: 'ICHI Interventions / Nephrology'
    }
  },
  {
    conceptId: '232717009',
    fsn: 'Coronary artery bypass graft (procedure)',
    preferredTerm: 'Coronary artery bypass graft',
    semanticTag: 'procedure',
    hierarchy: 'Procedure',
    status: 'Active',
    effectiveTime: '20240901',
    synonyms: ['CABG', 'Aortocoronary bypass graft'],
    definition: 'Surgical revascularization procedure in which vascular conduits (saphenous vein, internal mammary artery) are grafted to bypass occluded coronary arteries.',
    relationships: [
      { type: 'Is a', targetId: '387713003', targetDisplay: 'Surgical procedure (procedure)' },
      { type: 'Procedure site', targetId: '41801008', targetDisplay: 'Coronary artery structure (body structure)' }
    ],
    icd11Mapping: {
      code: 'PE21',
      display: 'Bypass of coronary artery',
      mapType: 'Equivalent',
      chapter: 'ICHI Interventions / Cardiovascular Surgery'
    }
  },
  {
    conceptId: '116859006',
    fsn: 'Electrocardiography (procedure)',
    preferredTerm: 'Electrocardiogram',
    semanticTag: 'procedure',
    hierarchy: 'Procedure',
    status: 'Active',
    effectiveTime: '20240901',
    synonyms: ['ECG', 'EKG', '12-lead electrocardiography'],
    definition: 'Non-invasive diagnostic recording of the electrical activity of the heart over a period of time using electrodes placed on the skin.',
    relationships: [
      { type: 'Is a', targetId: '103693007', targetDisplay: 'Diagnostic procedure (procedure)' },
      { type: 'Procedure site', targetId: '80891009', targetDisplay: 'Heart structure (body structure)' }
    ],
    icd11Mapping: {
      code: 'QC01',
      display: 'Cardiovascular diagnostic testing',
      mapType: 'Associated',
      chapter: 'ICHI / Diagnostic Procedures'
    }
  },
  {
    conceptId: '180325003',
    fsn: 'Computed tomography of chest (procedure)',
    preferredTerm: 'Computed tomography of chest',
    semanticTag: 'procedure',
    hierarchy: 'Procedure',
    status: 'Active',
    effectiveTime: '20240901',
    synonyms: ['CT scan of chest', 'Thoracic CT'],
    definition: 'Cross-sectional radiographic diagnostic imaging examination of the thoracic cavity utilizing computer-processed combinations of multiple X-ray measurements.',
    relationships: [
      { type: 'Is a', targetId: '77477000', targetDisplay: 'Computed tomography (procedure)' },
      { type: 'Procedure site', targetId: '51185008', targetDisplay: 'Thoracic structure (body structure)' }
    ],
    icd11Mapping: {
      code: 'QC10',
      display: 'Diagnostic imaging of chest',
      mapType: 'Associated',
      chapter: 'ICHI / Diagnostic Radiology'
    }
  },

  // =========================================================================
  // 7. BODY STRUCTURES & ANATOMICAL CONCEPTS
  // =========================================================================
  {
    conceptId: '80891009',
    fsn: 'Heart structure (body structure)',
    preferredTerm: 'Heart structure',
    semanticTag: 'body structure',
    hierarchy: 'Body Structure',
    status: 'Active',
    effectiveTime: '20240901',
    synonyms: ['Cardiac structure', 'Heart'],
    definition: 'The hollow muscular organ that pumps blood through the circulatory system by rhythmic contraction and dilation.',
    relationships: [
      { type: 'Is a', targetId: '113257007', targetDisplay: 'Structure of cardiovascular system (body structure)' }
    ],
    icd11Mapping: {
      code: 'XA00',
      display: 'Heart anatomy',
      mapType: 'Associated',
      chapter: 'ICD-11 Extension Codes: Anatomy'
    }
  },
  {
    conceptId: '181277001',
    fsn: 'Entire lung (body structure)',
    preferredTerm: 'Entire lung',
    semanticTag: 'body structure',
    hierarchy: 'Body Structure',
    status: 'Active',
    effectiveTime: '20240901',
    synonyms: ['Pulmonary structure', 'Lung'],
    definition: 'The primary organ of the respiratory system in humans responsible for extracting oxygen from the atmosphere and transferring it into the bloodstream.',
    relationships: [
      { type: 'Is a', targetId: '20139000', targetDisplay: 'Structure of respiratory system (body structure)' }
    ],
    icd11Mapping: {
      code: 'XA10',
      display: 'Lung anatomy',
      mapType: 'Associated',
      chapter: 'ICD-11 Extension Codes: Anatomy'
    }
  },
  {
    conceptId: '64033007',
    fsn: 'Kidney structure (body structure)',
    preferredTerm: 'Kidney structure',
    semanticTag: 'body structure',
    hierarchy: 'Body Structure',
    status: 'Active',
    effectiveTime: '20240901',
    synonyms: ['Renal structure', 'Kidney'],
    definition: 'The paired retroperitoneal organ responsible for blood filtration, fluid and electrolyte balance, and production of renin and erythropoietin.',
    relationships: [
      { type: 'Is a', targetId: '10200004', targetDisplay: 'Structure of urinary system (body structure)' }
    ],
    icd11Mapping: {
      code: 'XA20',
      display: 'Kidney anatomy',
      mapType: 'Associated',
      chapter: 'ICD-11 Extension Codes: Anatomy'
    }
  },
  {
    conceptId: '12738006',
    fsn: 'Brain structure (body structure)',
    preferredTerm: 'Brain structure',
    semanticTag: 'body structure',
    hierarchy: 'Body Structure',
    status: 'Active',
    effectiveTime: '20240901',
    synonyms: ['Encephalon', 'Brain'],
    definition: 'The anterior part of the central nervous system contained within the cranium, comprising the cerebrum, cerebellum, and brainstem.',
    relationships: [
      { type: 'Is a', targetId: '21483005', targetDisplay: 'Central nervous system structure (body structure)' }
    ],
    icd11Mapping: {
      code: 'XA30',
      display: 'Brain anatomy',
      mapType: 'Associated',
      chapter: 'ICD-11 Extension Codes: Anatomy'
    }
  }
,
  {
    "conceptId": "43029008",
    "fsn": "Hyperthyroidism (disorder)",
    "preferredTerm": "Hyperthyroidism",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Thyrotoxicosis",
      "Overactive thyroid",
      "Hyperthyroid condition"
    ],
    "definition": "An endocrine disorder characterized by excessive secretion and circulation of thyroid hormones from the thyroid gland, leading to hypermetabolic symptoms including palpitations, weight loss, and tremors.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "362969004",
        "targetDisplay": "Disorder of endocrine system (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "69748006",
        "targetDisplay": "Structure of thyroid gland (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "5A00",
      "display": "Thyrotoxicosis",
      "mapType": "Exact Match",
      "chapter": "05 Endocrine, nutritional or metabolic diseases"
    }
  },
  {
    "conceptId": "237785004",
    "fsn": "Cushing syndrome (disorder)",
    "preferredTerm": "Cushing syndrome",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Hypercortisolism",
      "Cushing disease",
      "Adrenocortical hyperfunction"
    ],
    "definition": "A metabolic condition caused by prolonged exposure to inappropriately high levels of cortisol, resulting in central adiposity, moon facies, buffalo hump, and hypertension.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "362969004",
        "targetDisplay": "Disorder of endocrine system (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "23451007",
        "targetDisplay": "Structure of adrenal gland (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "5A70",
      "display": "Cushing syndrome",
      "mapType": "Exact Match",
      "chapter": "05 Endocrine, nutritional or metabolic diseases"
    }
  },
  {
    "conceptId": "363732003",
    "fsn": "Addison disease (disorder)",
    "preferredTerm": "Addison disease",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Primary adrenocortical insufficiency",
      "Hypoadrenalism",
      "Adrenal insufficiency"
    ],
    "definition": "An autoimmune or destructive disorder of the adrenal cortex resulting in deficient production of glucocorticoid and mineralocorticoid hormones.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "362969004",
        "targetDisplay": "Disorder of endocrine system (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "23451007",
        "targetDisplay": "Structure of adrenal gland (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "5A74",
      "display": "Primary adrenocortical insufficiency",
      "mapType": "Exact Match",
      "chapter": "05 Endocrine, nutritional or metabolic diseases"
    }
  },
  {
    "conceptId": "55822004",
    "fsn": "Hyperlipidemia (disorder)",
    "preferredTerm": "Hyperlipidemia",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Dyslipidemia",
      "High cholesterol",
      "Hyperlipemia",
      "Elevated blood lipids"
    ],
    "definition": "An elevation of lipids (cholesterol, cholesterol esters, phospholipids, or triglycerides) in the circulating bloodstream.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "362969004",
        "targetDisplay": "Disorder of endocrine system (disorder)"
      }
    ],
    "icd11Mapping": {
      "code": "5C80",
      "display": "Hyperlipidaemia",
      "mapType": "Exact Match",
      "chapter": "05 Endocrine, nutritional or metabolic diseases"
    }
  },
  {
    "conceptId": "90560007",
    "fsn": "Gout (disorder)",
    "preferredTerm": "Gout",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Gouty arthritis",
      "Podagra",
      "Uric acid crystal arthropathy"
    ],
    "definition": "A recurrent acute inflammatory arthritis triggered by the crystallization of monosodium urate in synovial fluid and surrounding tissues due to hyperuricemia.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "396275006",
        "targetDisplay": "Arthropathy (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "39352004",
        "targetDisplay": "Joint structure (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "FA25",
      "display": "Gout",
      "mapType": "Exact Match",
      "chapter": "15 Diseases of the musculoskeletal system or connective tissue"
    }
  },
  {
    "conceptId": "194828000",
    "fsn": "Angina pectoris (disorder)",
    "preferredTerm": "Angina pectoris",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Angina",
      "Ischemic chest pain",
      "Cardiac angina",
      "Stable angina"
    ],
    "definition": "Chest pain or discomfort resulting from myocardial ischemia, typically provoked by physical exertion or emotional stress.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "414545008",
        "targetDisplay": "Ischemic heart disease (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "80891000",
        "targetDisplay": "Heart structure (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "BA80",
      "display": "Angina pectoris",
      "mapType": "Exact Match",
      "chapter": "11 Diseases of the circulatory system"
    }
  },
  {
    "conceptId": "128053003",
    "fsn": "Deep vein thrombosis (disorder)",
    "preferredTerm": "Deep vein thrombosis",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "DVT",
      "Deep venous thrombosis",
      "Venous thromboembolism of deep vein"
    ],
    "definition": "The formation of a blood clot (thrombus) within a deep vein, predominantly in the lower limbs, carrying risk of pulmonary embolism.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "441457006",
        "targetDisplay": "Venous thrombosis (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "29058003",
        "targetDisplay": "Structure of vein (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "BD71",
      "display": "Deep vein thrombosis",
      "mapType": "Exact Match",
      "chapter": "11 Diseases of the circulatory system"
    }
  },
  {
    "conceptId": "59282003",
    "fsn": "Pulmonary embolism (disorder)",
    "preferredTerm": "Pulmonary embolism",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "PE",
      "Pulmonary thromboembolism",
      "Blood clot in lungs"
    ],
    "definition": "Occlusion of one or more pulmonary arteries by thrombi that originate elsewhere, typically in the deep venous system of the lower extremities.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "19829001",
        "targetDisplay": "Disorder of lung (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "67734004",
        "targetDisplay": "Structure of pulmonary artery (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "BB00",
      "display": "Pulmonary thromboembolism",
      "mapType": "Exact Match",
      "chapter": "11 Diseases of the circulatory system"
    }
  },
  {
    "conceptId": "60573004",
    "fsn": "Aortic valve stenosis (disorder)",
    "preferredTerm": "Aortic valve stenosis",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Aortic stenosis",
      "AS",
      "Narrowing of aortic valve"
    ],
    "definition": "Narrowing of the aortic valve orifice obstructing blood flow from the left ventricle into the aorta during systole.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "80891000",
        "targetDisplay": "Heart valve disease (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "34202007",
        "targetDisplay": "Structure of aortic valve (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "BB20",
      "display": "Nonrheumatic aortic valve stenosis",
      "mapType": "Exact Match",
      "chapter": "11 Diseases of the circulatory system"
    }
  },
  {
    "conceptId": "399957001",
    "fsn": "Peripheral arterial occlusive disease (disorder)",
    "preferredTerm": "Peripheral arterial disease",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "PAD",
      "Peripheral vascular disease",
      "PVD",
      "Arteriosclerosis obliterans"
    ],
    "definition": "Atherosclerotic narrowing of the lumen of peripheral arteries, commonly leading to intermittent claudication and ischemic limb complications.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "27550009",
        "targetDisplay": "Disorder of cardiovascular system (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "51114001",
        "targetDisplay": "Structure of artery (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "BD40",
      "display": "Peripheral arterial occlusive disease",
      "mapType": "Exact Match",
      "chapter": "11 Diseases of the circulatory system"
    }
  },
  {
    "conceptId": "12295008",
    "fsn": "Bronchiectasis (disorder)",
    "preferredTerm": "Bronchiectasis",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Chronic bronchial dilatation",
      "Bronchiectatic lung disease"
    ],
    "definition": "A permanent abnormal widening of bronchi resulting in pooling of secretions, recurrent infections, and productive cough.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "19829001",
        "targetDisplay": "Disorder of lung (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "955009",
        "targetDisplay": "Structure of bronchus (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "CA23",
      "display": "Bronchiectasis",
      "mapType": "Exact Match",
      "chapter": "12 Diseases of the respiratory system"
    }
  },
  {
    "conceptId": "51615001",
    "fsn": "Idiopathic pulmonary fibrosis (disorder)",
    "preferredTerm": "Pulmonary fibrosis",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "IPF",
      "Cryptogenic fibrosing alveolitis",
      "Interstitial pulmonary fibrosis"
    ],
    "definition": "A specific form of chronic, progressive, fibrosing interstitial pneumonia characterized by progressive worsening of dyspnea and lung function.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "19829001",
        "targetDisplay": "Disorder of lung (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "181277001",
        "targetDisplay": "Entire lung (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "CB00",
      "display": "Idiopathic pulmonary fibrosis",
      "mapType": "Exact Match",
      "chapter": "12 Diseases of the respiratory system"
    }
  },
  {
    "conceptId": "60046008",
    "fsn": "Pleural effusion (disorder)",
    "preferredTerm": "Pleural effusion",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Fluid around the lungs",
      "Hydrothorax",
      "Pleural fluid accumulation"
    ],
    "definition": "An abnormal accumulation of fluid in the pleural space between the parietal and visceral pleura.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "19829001",
        "targetDisplay": "Disorder of lung (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "3120008",
        "targetDisplay": "Structure of pleura (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "CB25",
      "display": "Pleural effusion",
      "mapType": "Exact Match",
      "chapter": "12 Diseases of the respiratory system"
    }
  },
  {
    "conceptId": "10509002",
    "fsn": "Acute bronchitis (disorder)",
    "preferredTerm": "Acute bronchitis",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Chest cold",
      "Acute tracheobronchitis"
    ],
    "definition": "An acute inflammation of the tracheobronchial tree, usually self-limiting and commonly following an upper respiratory viral infection.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "19829001",
        "targetDisplay": "Disorder of lung (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "955009",
        "targetDisplay": "Structure of bronchus (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "CA42",
      "display": "Acute bronchitis",
      "mapType": "Exact Match",
      "chapter": "12 Diseases of the respiratory system"
    }
  },
  {
    "conceptId": "91302008",
    "fsn": "Sepsis (disorder)",
    "preferredTerm": "Sepsis",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Septicemia",
      "Blood poisoning",
      "Severe systemic inflammatory response to infection"
    ],
    "definition": "A life-threatening organ dysfunction caused by a dysregulated host response to infection.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "40733004",
        "targetDisplay": "Infectious disease (disorder)"
      }
    ],
    "icd11Mapping": {
      "code": "1G40",
      "display": "Sepsis",
      "mapType": "Exact Match",
      "chapter": "01 Certain infectious or parasitic diseases"
    }
  },
  {
    "conceptId": "7180009",
    "fsn": "Meningitis (disorder)",
    "preferredTerm": "Meningitis",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Infection of meninges",
      "Bacterial or viral meningitis"
    ],
    "definition": "Inflammation of the protective membranes covering the brain and spinal cord, typically caused by bacterial or viral infection.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "40733004",
        "targetDisplay": "Infectious disease (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "70567001",
        "targetDisplay": "Structure of meninges (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "1D01",
      "display": "Meningitis",
      "mapType": "Exact Match",
      "chapter": "01 Certain infectious or parasitic diseases"
    }
  },
  {
    "conceptId": "66071002",
    "fsn": "Viral hepatitis type B (disorder)",
    "preferredTerm": "Hepatitis B",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Hep B",
      "HBV infection",
      "Serum hepatitis"
    ],
    "definition": "An infectious liver disease caused by Hepatitis B virus (HBV) transmitted through infected blood or bodily fluids.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "40733004",
        "targetDisplay": "Infectious disease (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "10200004",
        "targetDisplay": "Structure of liver (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "1E50",
      "display": "Acute hepatitis B",
      "mapType": "Exact Match",
      "chapter": "01 Certain infectious or parasitic diseases"
    }
  },
  {
    "conceptId": "68566005",
    "fsn": "Urinary tract infection (disorder)",
    "preferredTerm": "Urinary tract infection",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "UTI",
      "Infection of urinary system",
      "Cystitis / Pyelonephritis"
    ],
    "definition": "An infection in any part of the urinary system, including kidneys, ureters, bladder, and urethra, commonly caused by Escherichia coli.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "40733004",
        "targetDisplay": "Infectious disease (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "122489005",
        "targetDisplay": "Structure of urinary system (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "GC08",
      "display": "Urinary tract infection, site not specified",
      "mapType": "Exact Match",
      "chapter": "16 Diseases of the genitourinary system"
    }
  },
  {
    "conceptId": "254837009",
    "fsn": "Malignant neoplasm of breast (disorder)",
    "preferredTerm": "Breast cancer",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Mammary carcinoma",
      "Breast malignancy",
      "Carcinoma of breast"
    ],
    "definition": "A malignant neoplastic proliferation of epithelial cells lining the ducts or lobules of the breast.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "363346000",
        "targetDisplay": "Malignant neoplastic disease (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "76752008",
        "targetDisplay": "Structure of breast (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "2C60",
      "display": "Malignant neoplasms of breast",
      "mapType": "Exact Match",
      "chapter": "02 Neoplasms"
    }
  },
  {
    "conceptId": "363358000",
    "fsn": "Malignant neoplasm of lung (disorder)",
    "preferredTerm": "Lung cancer",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Bronchogenic carcinoma",
      "Pulmonary malignancy",
      "Cancer of lung"
    ],
    "definition": "A primary malignant tumor originating in the bronchial epithelium or pulmonary parenchyma, strongly linked to tobacco smoke exposure.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "363346000",
        "targetDisplay": "Malignant neoplastic disease (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "181277001",
        "targetDisplay": "Entire lung (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "2C25",
      "display": "Malignant neoplasms of bronchus or lung",
      "mapType": "Exact Match",
      "chapter": "02 Neoplasms"
    }
  },
  {
    "conceptId": "363406005",
    "fsn": "Malignant neoplasm of colon (disorder)",
    "preferredTerm": "Colorectal cancer",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Colon cancer",
      "Bowel cancer",
      "Carcinoma of colon"
    ],
    "definition": "Malignant epithelial adenocarcinoma arising from the inner wall of the large intestine or rectum.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "363346000",
        "targetDisplay": "Malignant neoplastic disease (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "71854001",
        "targetDisplay": "Structure of colon (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "2B90",
      "display": "Malignant neoplasms of colon",
      "mapType": "Exact Match",
      "chapter": "02 Neoplasms"
    }
  },
  {
    "conceptId": "399068003",
    "fsn": "Malignant neoplasm of prostate (disorder)",
    "preferredTerm": "Prostate cancer",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Prostatic carcinoma",
      "Carcinoma of prostate",
      "Prostate adenocarcinoma"
    ],
    "definition": "A malignant adenocarcinoma developing in the prostate gland, common in older men and frequently monitored with PSA levels.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "363346000",
        "targetDisplay": "Malignant neoplastic disease (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "41216001",
        "targetDisplay": "Structure of prostate (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "2C82",
      "display": "Malignant neoplasms of prostate",
      "mapType": "Exact Match",
      "chapter": "02 Neoplasms"
    }
  },
  {
    "conceptId": "91857003",
    "fsn": "Acute lymphoblastic leukemia (disorder)",
    "preferredTerm": "Acute lymphoblastic leukemia",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "ALL",
      "Acute lymphocytic leukemia",
      "Lymphoblastic leukemia"
    ],
    "definition": "A rapidly progressing malignancy of immature lymphoid precursor cells (lymphoblasts) in the bone marrow and peripheral blood.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "363346000",
        "targetDisplay": "Malignant neoplastic disease (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "14016003",
        "targetDisplay": "Bone marrow structure (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "2A60",
      "display": "Precursor lymphoblastic leukaemia",
      "mapType": "Exact Match",
      "chapter": "02 Neoplasms"
    }
  },
  {
    "conceptId": "372244006",
    "fsn": "Malignant melanoma (disorder)",
    "preferredTerm": "Malignant melanoma",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Melanoma of skin",
      "Cutaneous melanoma"
    ],
    "definition": "A highly invasive skin cancer arising from melanin-producing epidermal melanocytes, frequently related to ultraviolet radiation exposure.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "363346000",
        "targetDisplay": "Malignant neoplastic disease (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "39937001",
        "targetDisplay": "Structure of skin (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "2C30",
      "display": "Melanoma of skin",
      "mapType": "Exact Match",
      "chapter": "02 Neoplasms"
    }
  },
  {
    "conceptId": "235595009",
    "fsn": "Gastroesophageal reflux disease (disorder)",
    "preferredTerm": "Gastroesophageal reflux disease",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "GERD",
      "Acid reflux disease",
      "Heartburn syndrome"
    ],
    "definition": "A digestive disorder occurring when acidic stomach contents flow backward into the esophagus, causing heartburn, regurgitation, and mucosal injury.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "53619000",
        "targetDisplay": "Disorder of digestive system (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "32849002",
        "targetDisplay": "Structure of esophagus (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "DA22",
      "display": "Gastro-oesophageal reflux disease",
      "mapType": "Exact Match",
      "chapter": "13 Diseases of the digestive system"
    }
  },
  {
    "conceptId": "13645005",
    "fsn": "Peptic ulcer disease (disorder)",
    "preferredTerm": "Peptic ulcer disease",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "PUD",
      "Stomach ulcer",
      "Gastric or duodenal ulceration"
    ],
    "definition": "A discrete mucosal break in the stomach or proximal duodenum extending through the muscularis mucosae, commonly caused by H. pylori or NSAIDs.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "53619000",
        "targetDisplay": "Disorder of digestive system (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "69695003",
        "targetDisplay": "Structure of stomach (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "DA60",
      "display": "Gastric ulcer",
      "mapType": "Exact Match",
      "chapter": "13 Diseases of the digestive system"
    }
  },
  {
    "conceptId": "19943007",
    "fsn": "Cirrhosis of liver (disorder)",
    "preferredTerm": "Cirrhosis of liver",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Hepatic cirrhosis",
      "End-stage liver disease",
      "Liver cirrhosis"
    ],
    "definition": "End-stage diffuse hepatic fibrosis with the replacement of normal liver parenchyma by regenerative nodules, causing portal hypertension and liver failure.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "235856003",
        "targetDisplay": "Disorder of liver (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "10200004",
        "targetDisplay": "Structure of liver (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "DB93",
      "display": "Cirrhosis of liver",
      "mapType": "Exact Match",
      "chapter": "13 Diseases of the digestive system"
    }
  },
  {
    "conceptId": "34000006",
    "fsn": "Crohn disease (disorder)",
    "preferredTerm": "Crohn disease",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Regional enteritis",
      "Crohn's disease",
      "IBD - Crohn type"
    ],
    "definition": "A chronic transmural inflammatory disease that can affect any part of the gastrointestinal tract from the mouth to the anus, with skip lesions.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "53619000",
        "targetDisplay": "Disorder of digestive system (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "113276009",
        "targetDisplay": "Structure of intestine (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "DD70",
      "display": "Crohn disease",
      "mapType": "Exact Match",
      "chapter": "13 Diseases of the digestive system"
    }
  },
  {
    "conceptId": "64766004",
    "fsn": "Ulcerative colitis (disorder)",
    "preferredTerm": "Ulcerative colitis",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "UC",
      "Idiopathic ulcerative proctocolitis"
    ],
    "definition": "A chronic non-specific inflammatory disease limited to the mucosa and submucosa of the colon and rectum, marked by bloody diarrhea and cramping.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "53619000",
        "targetDisplay": "Disorder of digestive system (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "71854001",
        "targetDisplay": "Structure of colon (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "DD71",
      "display": "Ulcerative colitis",
      "mapType": "Exact Match",
      "chapter": "13 Diseases of the digestive system"
    }
  },
  {
    "conceptId": "197456007",
    "fsn": "Acute pancreatitis (disorder)",
    "preferredTerm": "Acute pancreatitis",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Acute inflammation of pancreas",
      "Pancreatic necrosis"
    ],
    "definition": "An acute, potentially life-threatening inflammatory condition of the pancreas characterized by severe epigastric pain radiating to the back and elevated lipase.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "53619000",
        "targetDisplay": "Disorder of digestive system (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "15776009",
        "targetDisplay": "Structure of pancreas (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "DC31",
      "display": "Acute pancreatitis",
      "mapType": "Exact Match",
      "chapter": "13 Diseases of the digestive system"
    }
  },
  {
    "conceptId": "709044004",
    "fsn": "Chronic kidney disease (disorder)",
    "preferredTerm": "Chronic kidney disease",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "CKD",
      "Chronic renal disease",
      "Chronic renal failure"
    ],
    "definition": "A long-standing progressive loss of renal function characterized by reduced GFR (<60 mL/min/1.73m2) or presence of kidney damage markers for >3 months.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "90708001",
        "targetDisplay": "Kidney disease (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "64033007",
        "targetDisplay": "Kidney structure (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "GB61",
      "display": "Chronic kidney disease",
      "mapType": "Exact Match",
      "chapter": "16 Diseases of the genitourinary system"
    }
  },
  {
    "conceptId": "14669001",
    "fsn": "Acute kidney injury (disorder)",
    "preferredTerm": "Acute kidney injury",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "AKI",
      "Acute renal failure",
      "ARF"
    ],
    "definition": "An abrupt reduction in kidney function occurring over hours to days, resulting in retention of creatinine and urea and dysregulation of volume and electrolytes.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "90708001",
        "targetDisplay": "Kidney disease (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "64033007",
        "targetDisplay": "Kidney structure (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "GB60",
      "display": "Acute kidney injury",
      "mapType": "Exact Match",
      "chapter": "16 Diseases of the genitourinary system"
    }
  },
  {
    "conceptId": "95570007",
    "fsn": "Calculus of kidney (disorder)",
    "preferredTerm": "Nephrolithiasis",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Kidney stones",
      "Renal calculi",
      "Renal lithiasis"
    ],
    "definition": "Formation of hard mineral deposits (calculi) composed of calcium oxalate, uric acid, or struvite within the renal pelvis and calyces.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "90708001",
        "targetDisplay": "Kidney disease (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "64033007",
        "targetDisplay": "Kidney structure (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "GB70",
      "display": "Calculus of kidney",
      "mapType": "Exact Match",
      "chapter": "16 Diseases of the genitourinary system"
    }
  },
  {
    "conceptId": "266569009",
    "fsn": "Benign prostatic hyperplasia (disorder)",
    "preferredTerm": "Benign prostatic hyperplasia",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "BPH",
      "Enlarged prostate",
      "Benign hypertrophy of prostate"
    ],
    "definition": "A nonmalignant enlargement of the prostate gland resulting from cellular proliferation of glandular and stromal elements, causing lower urinary tract symptoms.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "709044004",
        "targetDisplay": "Genitourinary disease (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "41216001",
        "targetDisplay": "Structure of prostate (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "GA90",
      "display": "Benign prostatic hyperplasia",
      "mapType": "Exact Match",
      "chapter": "16 Diseases of the genitourinary system"
    }
  },
  {
    "conceptId": "396275006",
    "fsn": "Osteoarthritis (disorder)",
    "preferredTerm": "Osteoarthritis",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Degenerative joint disease",
      "DJD",
      "Osteoarthrosis"
    ],
    "definition": "A noninflammatory degenerative joint disease characterized by breakdown of articular cartilage, subchondral bone sclerosis, and osteophyte formation.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "39352004",
        "targetDisplay": "Joint disease (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "39352004",
        "targetDisplay": "Joint structure (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "FA00",
      "display": "Osteoarthritis of knee or hip",
      "mapType": "Exact Match",
      "chapter": "15 Diseases of the musculoskeletal system or connective tissue"
    }
  },
  {
    "conceptId": "69896004",
    "fsn": "Rheumatoid arthritis (disorder)",
    "preferredTerm": "Rheumatoid arthritis",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "RA",
      "Chronic inflammatory polyarthritis"
    ],
    "definition": "A chronic, systemic autoimmune disease characterized by persistent symmetric synovitis of peripheral joints leading to cartilage destruction and joint deformity.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "39352004",
        "targetDisplay": "Joint disease (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "39352004",
        "targetDisplay": "Joint structure (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "FA20",
      "display": "Rheumatoid arthritis",
      "mapType": "Exact Match",
      "chapter": "15 Diseases of the musculoskeletal system or connective tissue"
    }
  },
  {
    "conceptId": "64859006",
    "fsn": "Osteoporosis (disorder)",
    "preferredTerm": "Osteoporosis",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Low bone density",
      "Brittle bone disease"
    ],
    "definition": "A systemic skeletal disease characterized by low bone mass and microarchitectural deterioration of bone tissue, with a consequent increase in fragility and fracture susceptibility.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "928000",
        "targetDisplay": "Disorder of musculoskeletal system (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "272673000",
        "targetDisplay": "Bone structure (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "FB83",
      "display": "Osteoporosis",
      "mapType": "Exact Match",
      "chapter": "15 Diseases of the musculoskeletal system or connective tissue"
    }
  },
  {
    "conceptId": "267942004",
    "fsn": "Herniation of intervertebral disc (disorder)",
    "preferredTerm": "Lumbar disc herniation",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Slipped disc",
      "Sciatica",
      "Herniated nucleus pulposus",
      "IVDP"
    ],
    "definition": "Displacement of disc material (nucleus pulposus) beyond the intervertebral disc space, commonly compressing adjacent spinal nerve roots and causing radicular leg pain.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "928000",
        "targetDisplay": "Disorder of musculoskeletal system (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "421060004",
        "targetDisplay": "Spine structure (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "FA80",
      "display": "Intervertebral disc displacement",
      "mapType": "Exact Match",
      "chapter": "15 Diseases of the musculoskeletal system or connective tissue"
    }
  },
  {
    "conceptId": "84757009",
    "fsn": "Epilepsy (disorder)",
    "preferredTerm": "Epilepsy",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Seizure disorder",
      "Epileptic condition",
      "Recurrent seizures"
    ],
    "definition": "A neurological condition characterized by an enduring predisposition to generate epileptic seizures and by the neurobiological, cognitive, and psychosocial consequences.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "12738006",
        "targetDisplay": "Brain disease (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "12738006",
        "targetDisplay": "Brain structure (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "8A60",
      "display": "Epilepsy",
      "mapType": "Exact Match",
      "chapter": "08 Diseases of the nervous system"
    }
  },
  {
    "conceptId": "26929004",
    "fsn": "Alzheimer disease (disorder)",
    "preferredTerm": "Alzheimer disease",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "AD",
      "Alzheimer dementia",
      "Dementia of the Alzheimer type"
    ],
    "definition": "A progressive neurodegenerative disorder of the brain characterized by memory loss, cognitive decline, neurofibrillary tangles, and beta-amyloid plaques.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "12738006",
        "targetDisplay": "Brain disease (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "12738006",
        "targetDisplay": "Brain structure (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "8A20",
      "display": "Alzheimer disease",
      "mapType": "Exact Match",
      "chapter": "08 Diseases of the nervous system"
    }
  },
  {
    "conceptId": "37796009",
    "fsn": "Migraine (disorder)",
    "preferredTerm": "Migraine",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Migraine headache",
      "Hemicrania",
      "Vascular headache"
    ],
    "definition": "A recurrent neurological headache disorder characterized by moderate-to-severe throbbing unilateral head pain often accompanied by nausea, photophobia, and phonophobia.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "25064002",
        "targetDisplay": "Headache (finding)"
      },
      {
        "type": "Finding site",
        "targetId": "12738006",
        "targetDisplay": "Brain structure (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "8A80",
      "display": "Migraine",
      "mapType": "Exact Match",
      "chapter": "08 Diseases of the nervous system"
    }
  },
  {
    "conceptId": "370143000",
    "fsn": "Major depressive disorder (disorder)",
    "preferredTerm": "Major depressive disorder",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "MDD",
      "Clinical depression",
      "Unipolar depression"
    ],
    "definition": "A mood disorder characterized by persistent sadness, loss of interest or pleasure (anhedonia), fatigue, feelings of worthlessness, and suicidal ideation lasting at least 2 weeks.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "74732009",
        "targetDisplay": "Mental disorder (disorder)"
      }
    ],
    "icd11Mapping": {
      "code": "6A70",
      "display": "Single episode depressive disorder",
      "mapType": "Exact Match",
      "chapter": "06 Mental, behavioural or neurodevelopmental disorders"
    }
  },
  {
    "conceptId": "21897009",
    "fsn": "Generalized anxiety disorder (disorder)",
    "preferredTerm": "Generalized anxiety disorder",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "GAD",
      "Chronic anxiety neurosis"
    ],
    "definition": "Excessive anxiety and worry occurring more days than not for at least 6 months about a number of events, accompanied by restlessness, fatigue, and muscle tension.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "74732009",
        "targetDisplay": "Mental disorder (disorder)"
      }
    ],
    "icd11Mapping": {
      "code": "6B00",
      "display": "Generalised anxiety disorder",
      "mapType": "Exact Match",
      "chapter": "06 Mental, behavioural or neurodevelopmental disorders"
    }
  },
  {
    "conceptId": "24079001",
    "fsn": "Atopic dermatitis (disorder)",
    "preferredTerm": "Atopic dermatitis",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Eczema",
      "Atopic eczema",
      "Allergic dermatitis"
    ],
    "definition": "A chronic, pruritic inflammatory skin disease occurring frequently in families with an atopic background (asthma, allergic rhinitis).",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "128045006",
        "targetDisplay": "Skin disease (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "39937001",
        "targetDisplay": "Structure of skin (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "EA80",
      "display": "Atopic eczema",
      "mapType": "Exact Match",
      "chapter": "14 Diseases of the skin"
    }
  },
  {
    "conceptId": "9014002",
    "fsn": "Psoriasis vulgaris (disorder)",
    "preferredTerm": "Psoriasis",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Plaque psoriasis",
      "Psoriasis of skin"
    ],
    "definition": "A chronic immune-mediated skin disorder characterized by erythematous plaques with well-defined borders and silvery micaceous scales, often on extensor surfaces.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "128045006",
        "targetDisplay": "Skin disease (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "39937001",
        "targetDisplay": "Structure of skin (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "EA90",
      "display": "Psoriasis",
      "mapType": "Exact Match",
      "chapter": "14 Diseases of the skin"
    }
  },
  {
    "conceptId": "128045006",
    "fsn": "Cellulitis (disorder)",
    "preferredTerm": "Cellulitis",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Bacterial infection of subcutaneous tissue",
      "Erysipelas-like infection"
    ],
    "definition": "An acute bacterial infection of the deep dermis and subcutaneous tissue characterized by localized warmth, erythema, edema, and tenderness.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "40733004",
        "targetDisplay": "Infectious disease (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "39937001",
        "targetDisplay": "Structure of skin (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "1B70",
      "display": "Cellulitis",
      "mapType": "Exact Match",
      "chapter": "01 Certain infectious or parasitic diseases"
    }
  },
  {
    "conceptId": "45595009",
    "fsn": "Laparoscopic cholecystectomy (procedure)",
    "preferredTerm": "Laparoscopic cholecystectomy",
    "semanticTag": "procedure",
    "hierarchy": "Procedure",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Lap chole",
      "Keyhole gallbladder removal",
      "Minimally invasive cholecystectomy"
    ],
    "definition": "Surgical excision of the gallbladder using laparoscopic instrumentation inserted through small abdominal ports.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "387713003",
        "targetDisplay": "Surgical procedure (procedure)"
      },
      {
        "type": "Procedure site",
        "targetId": "28231008",
        "targetDisplay": "Structure of gallbladder (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "PE40",
      "display": "Cholecystectomy",
      "mapType": "Equivalent",
      "chapter": "ICD-11 Interventions / MMS Procedures"
    }
  },
  {
    "conceptId": "609588005",
    "fsn": "Total knee arthroplasty (procedure)",
    "preferredTerm": "Total knee replacement",
    "semanticTag": "procedure",
    "hierarchy": "Procedure",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "TKR",
      "TKA",
      "Knee joint replacement surgery"
    ],
    "definition": "An orthopedic surgical procedure where diseased surfaces of the knee joint are resurfaced with metal and polyethylene prosthetic components.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "387713003",
        "targetDisplay": "Surgical procedure (procedure)"
      },
      {
        "type": "Procedure site",
        "targetId": "49076000",
        "targetDisplay": "Knee joint structure (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "PE60",
      "display": "Total knee replacement",
      "mapType": "Equivalent",
      "chapter": "ICD-11 Interventions / MMS Procedures"
    }
  },
  {
    "conceptId": "11466000",
    "fsn": "Cesarean section (procedure)",
    "preferredTerm": "Cesarean section",
    "semanticTag": "procedure",
    "hierarchy": "Procedure",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "C-section",
      "Caesarean delivery",
      "Abdominal delivery"
    ],
    "definition": "Surgical delivery of a baby through an incision in the mother's abdomen and uterus.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "387713003",
        "targetDisplay": "Surgical procedure (procedure)"
      },
      {
        "type": "Procedure site",
        "targetId": "35039007",
        "targetDisplay": "Uterus structure (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "PE80",
      "display": "Cesarean delivery",
      "mapType": "Equivalent",
      "chapter": "ICD-11 Interventions / MMS Procedures"
    }
  },
  {
    "conceptId": "73761001",
    "fsn": "Colonoscopy (procedure)",
    "preferredTerm": "Colonoscopy",
    "semanticTag": "procedure",
    "hierarchy": "Procedure",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Endoscopic examination of colon",
      "Lower GI endoscopy"
    ],
    "definition": "Endoscopic visualization of the entire large intestine from the rectum to the cecum, enabling polyp detection and tissue biopsy.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "423827005",
        "targetDisplay": "Endoscopy (procedure)"
      },
      {
        "type": "Procedure site",
        "targetId": "71854001",
        "targetDisplay": "Structure of colon (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "PE21",
      "display": "Diagnostic colonoscopy",
      "mapType": "Associated",
      "chapter": "ICD-11 Interventions / MMS Procedures"
    }
  },
  {
    "conceptId": "415070008",
    "fsn": "Percutaneous coronary intervention (procedure)",
    "preferredTerm": "Percutaneous coronary intervention",
    "semanticTag": "procedure",
    "hierarchy": "Procedure",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "PCI",
      "Coronary angioplasty with stenting",
      "PTCA"
    ],
    "definition": "A catheter-based minimally invasive procedure used to open clogged coronary arteries and restore arterial blood flow to heart muscle.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "387713003",
        "targetDisplay": "Cardiovascular intervention (procedure)"
      },
      {
        "type": "Procedure site",
        "targetId": "80891000",
        "targetDisplay": "Coronary artery structure (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "PE21",
      "display": "Coronary angioplasty and stenting",
      "mapType": "Equivalent",
      "chapter": "ICD-11 Interventions / MMS Procedures"
    }
  },
  {
    "conceptId": "112790001",
    "fsn": "Extraction of cataract (procedure)",
    "preferredTerm": "Cataract surgery",
    "semanticTag": "procedure",
    "hierarchy": "Procedure",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Phacoemulsification",
      "Cataract removal with IOL implant"
    ],
    "definition": "Surgical extraction of a cloudy crystalline lens from the eye followed by intraocular lens (IOL) implantation.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "387713003",
        "targetDisplay": "Surgical procedure (procedure)"
      },
      {
        "type": "Procedure site",
        "targetId": "81745001",
        "targetDisplay": "Eye structure (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "PE50",
      "display": "Cataract extraction",
      "mapType": "Equivalent",
      "chapter": "ICD-11 Interventions / MMS Procedures"
    }
  },
  {
    "conceptId": "10200004",
    "fsn": "Liver structure (body structure)",
    "preferredTerm": "Liver structure",
    "semanticTag": "body structure",
    "hierarchy": "Body Structure",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Hepatic tissue",
      "Liver organ"
    ],
    "definition": "The largest internal metabolic gland located in the right upper quadrant of the abdomen, responsible for bile production and detoxification.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "113276009",
        "targetDisplay": "Digestive organ structure (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "XA11",
      "display": "Liver anatomy",
      "mapType": "Associated",
      "chapter": "ICD-11 Extension Codes: Anatomy"
    }
  },
  {
    "conceptId": "15776009",
    "fsn": "Pancreas structure (body structure)",
    "preferredTerm": "Pancreas structure",
    "semanticTag": "body structure",
    "hierarchy": "Body Structure",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Pancreatic tissue",
      "Pancreas organ"
    ],
    "definition": "A retroperitoneal gland that performs exocrine digestion and endocrine secretion of insulin and glucagon from islets of Langerhans.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "113276009",
        "targetDisplay": "Digestive organ structure (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "XA12",
      "display": "Pancreas anatomy",
      "mapType": "Associated",
      "chapter": "ICD-11 Extension Codes: Anatomy"
    }
  },
  {
    "conceptId": "69695003",
    "fsn": "Stomach structure (body structure)",
    "preferredTerm": "Stomach structure",
    "semanticTag": "body structure",
    "hierarchy": "Body Structure",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Gastric structure",
      "Venter"
    ],
    "definition": "A J-shaped muscular organ located between the esophagus and small intestine that churns food and secretes hydrochloric acid and pepsinogen.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "113276009",
        "targetDisplay": "Gastrointestinal tract structure (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "XA13",
      "display": "Stomach anatomy",
      "mapType": "Associated",
      "chapter": "ICD-11 Extension Codes: Anatomy"
    }
  },
  {
    "conceptId": "28231008",
    "fsn": "Gallbladder structure (body structure)",
    "preferredTerm": "Gallbladder structure",
    "semanticTag": "body structure",
    "hierarchy": "Body Structure",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Cholecyst",
      "Bile vesicle"
    ],
    "definition": "A small pear-shaped organ located beneath the liver that stores and concentrates bile produced by hepatic cells until digestion.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "113276009",
        "targetDisplay": "Biliary tract structure (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "XA14",
      "display": "Gallbladder anatomy",
      "mapType": "Associated",
      "chapter": "ICD-11 Extension Codes: Anatomy"
    }
  },
  {
    "conceptId": "69748006",
    "fsn": "Thyroid gland structure (body structure)",
    "preferredTerm": "Thyroid gland structure",
    "semanticTag": "body structure",
    "hierarchy": "Body Structure",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Thyroid organ",
      "Glandula thyroidea"
    ],
    "definition": "A butterfly-shaped endocrine gland situated at the anterior base of the neck, producing thyroxine (T4) and triiodothyronine (T3).",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "362969004",
        "targetDisplay": "Endocrine gland structure (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "XA17",
      "display": "Thyroid gland anatomy",
      "mapType": "Associated",
      "chapter": "ICD-11 Extension Codes: Anatomy"
    }
  },
  {
    "conceptId": "41216001",
    "fsn": "Prostate structure (body structure)",
    "preferredTerm": "Prostate structure",
    "semanticTag": "body structure",
    "hierarchy": "Body Structure",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Prostate gland",
      "Glandula prostatica"
    ],
    "definition": "A walnut-sized male exocrine gland surrounding the neck of the bladder and beginning of the urethra, producing seminal fluid.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "122489005",
        "targetDisplay": "Male reproductive structure (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "XA18",
      "display": "Prostate anatomy",
      "mapType": "Associated",
      "chapter": "ICD-11 Extension Codes: Anatomy"
    }
  },
  {
    "conceptId": "81745001",
    "fsn": "Eye structure (body structure)",
    "preferredTerm": "Eye structure",
    "semanticTag": "body structure",
    "hierarchy": "Body Structure",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Ocular structure",
      "Eyeball",
      "Oculus"
    ],
    "definition": "The sensory organ of vision that detects light and converts it into electro-chemical impulses in neurons transferred via the optic nerve.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "21483005",
        "targetDisplay": "Sensory organ structure (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "XA20",
      "display": "Eye and vision anatomy",
      "mapType": "Associated",
      "chapter": "ICD-11 Extension Codes: Anatomy"
    }
  },
  {
    "conceptId": "421060004",
    "fsn": "Spine structure (body structure)",
    "preferredTerm": "Spine structure",
    "semanticTag": "body structure",
    "hierarchy": "Body Structure",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Vertebral column",
      "Spinal column",
      "Backbone"
    ],
    "definition": "The flexible osseous column extending from the base of the skull to the pelvis, consisting of cervical, thoracic, lumbar, and sacral vertebrae protecting the spinal cord.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "272673000",
        "targetDisplay": "Bone structure (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "XA22",
      "display": "Vertebral column anatomy",
      "mapType": "Associated",
      "chapter": "ICD-11 Extension Codes: Anatomy"
    }
  }
,
  {
    "conceptId": "387712008",
    "fsn": "Neonatal jaundice (disorder)",
    "preferredTerm": "Neonatal jaundice",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Icterus neonatorum",
      "Newborn hyperbilirubinemia",
      "Physiologic jaundice of newborn"
    ],
    "definition": "Yellowish pigmentation of the skin and sclera in a newborn infant caused by elevated levels of circulating unconjugated bilirubin.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "18165001",
        "targetDisplay": "Disorder of newborn (disorder)"
      }
    ],
    "icd11Mapping": {
      "code": "KA60",
      "display": "Neonatal jaundice",
      "mapType": "Exact Match",
      "chapter": "19 Certain conditions originating in the perinatal period"
    }
  },
  {
    "conceptId": "13213009",
    "fsn": "Congenital anomaly of heart (disorder)",
    "preferredTerm": "Congenital heart disease",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "CHD",
      "Congenital cardiac malformation",
      "Congenital heart defect"
    ],
    "definition": "A structural abnormality of the heart or intrathoracic great vessels that is present at birth, impacting normal cardiovascular hemodynamics.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "27550009",
        "targetDisplay": "Disorder of cardiovascular system (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "80891000",
        "targetDisplay": "Heart structure (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "LA80",
      "display": "Congenital anomalies of the heart or great vessels",
      "mapType": "Exact Match",
      "chapter": "20 Developmental anomalies"
    }
  },
  {
    "conceptId": "190905008",
    "fsn": "Cystic fibrosis (disorder)",
    "preferredTerm": "Cystic fibrosis",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "CF",
      "Mucoviscidosis"
    ],
    "definition": "An autosomal recessive multi-system disorder caused by CFTR gene mutations, leading to viscous mucus obstruction in the lungs and pancreas.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "19829001",
        "targetDisplay": "Disorder of lung (disorder)"
      }
    ],
    "icd11Mapping": {
      "code": "CA25",
      "display": "Cystic fibrosis",
      "mapType": "Exact Match",
      "chapter": "12 Diseases of the respiratory system"
    }
  },
  {
    "conceptId": "398254007",
    "fsn": "Preeclampsia (disorder)",
    "preferredTerm": "Preeclampsia",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Pre-eclampsia",
      "Gestational proteinuric hypertension",
      "Toxemia of pregnancy"
    ],
    "definition": "A pregnancy-specific multi-system disorder defined by new-onset hypertension occurring after 20 weeks of gestation with proteinuria or other organ dysfunction.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "198609003",
        "targetDisplay": "Complication of pregnancy (disorder)"
      }
    ],
    "icd11Mapping": {
      "code": "JA24",
      "display": "Pre-eclampsia",
      "mapType": "Exact Match",
      "chapter": "18 Pregnancy, childbirth or the puerperium"
    }
  },
  {
    "conceptId": "129103003",
    "fsn": "Endometriosis (disorder)",
    "preferredTerm": "Endometriosis",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Endometrial tissue outside uterus",
      "Pelvic endometriosis"
    ],
    "definition": "A gynecologic condition characterized by the presence of viable endometrial-like stroma and glands outside the uterine cavity.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "709044004",
        "targetDisplay": "Genitourinary disease (disorder)"
      }
    ],
    "icd11Mapping": {
      "code": "GA10",
      "display": "Endometriosis",
      "mapType": "Exact Match",
      "chapter": "16 Diseases of the genitourinary system"
    }
  },
  {
    "conceptId": "237055002",
    "fsn": "Polycystic ovary syndrome (disorder)",
    "preferredTerm": "Polycystic ovary syndrome",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "PCOS",
      "Stein-Leventhal syndrome",
      "Hyperandrogenic anovulation"
    ],
    "definition": "A common heterogeneous endocrine disorder characterized by hyperandrogenism, ovulatory dysfunction, and polycystic ovarian morphology.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "362969004",
        "targetDisplay": "Disorder of endocrine system (disorder)"
      }
    ],
    "icd11Mapping": {
      "code": "5A80",
      "display": "Polycystic ovary syndrome",
      "mapType": "Exact Match",
      "chapter": "05 Endocrine, nutritional or metabolic diseases"
    }
  },
  {
    "conceptId": "23986001",
    "fsn": "Glaucoma (disorder)",
    "preferredTerm": "Glaucoma",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Ocular hypertension neuropathy",
      "Open angle glaucoma",
      "Angle closure glaucoma"
    ],
    "definition": "A group of progressive optic neuropathies characterized by optic nerve head cupping and visual field loss, frequently associated with elevated intraocular pressure.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "371405004",
        "targetDisplay": "Disorder of eye (disorder)"
      },
      {
        "type": "Finding site",
        "targetId": "81745001",
        "targetDisplay": "Eye structure (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "9C61",
      "display": "Glaucoma",
      "mapType": "Exact Match",
      "chapter": "09 Diseases of the visual system"
    }
  },
  {
    "conceptId": "65363002",
    "fsn": "Otitis media (disorder)",
    "preferredTerm": "Otitis media",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Middle ear infection",
      "Acute otitis media",
      "AOM"
    ],
    "definition": "Inflammation of the middle ear space behind the tympanic membrane, typically presenting with otalgia, fever, and hearing impairment.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "40733004",
        "targetDisplay": "Infectious disease (disorder)"
      }
    ],
    "icd11Mapping": {
      "code": "AA80",
      "display": "Otitis media",
      "mapType": "Exact Match",
      "chapter": "10 Diseases of the ear or mastoid process"
    }
  },
  {
    "conceptId": "61582004",
    "fsn": "Allergic rhinitis (disorder)",
    "preferredTerm": "Allergic rhinitis",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Hay fever",
      "Allergic rhinoconjunctivitis",
      "Nasal allergy"
    ],
    "definition": "An IgE-mediated inflammatory disorder of the nasal mucosa triggered by allergen exposure, marked by rhinorrhea, sneezing, and nasal pruritus.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "19829001",
        "targetDisplay": "Disorder of respiratory system (disorder)"
      }
    ],
    "icd11Mapping": {
      "code": "CA08",
      "display": "Allergic rhinitis",
      "mapType": "Exact Match",
      "chapter": "12 Diseases of the respiratory system"
    }
  },
  {
    "conceptId": "87522002",
    "fsn": "Iron deficiency anemia (disorder)",
    "preferredTerm": "Iron deficiency anemia",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "IDA",
      "Microcytic hypochromic anemia",
      "Low iron anemia"
    ],
    "definition": "A microcytic, hypochromic anemia caused by insufficient total body iron reserves for adequate hemoglobin synthesis.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "271737000",
        "targetDisplay": "Anemia (disorder)"
      }
    ],
    "icd11Mapping": {
      "code": "3A00",
      "display": "Iron deficiency anaemia",
      "mapType": "Exact Match",
      "chapter": "03 Diseases of the blood or blood-forming organs"
    }
  },
  {
    "conceptId": "127040003",
    "fsn": "Sickle cell anemia (disorder)",
    "preferredTerm": "Sickle cell anemia",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "HbSS disease",
      "Hemoglobin S disease",
      "Sickle cell disorder"
    ],
    "definition": "An inherited hemoglobinopathy caused by a point mutation in the beta-globin gene, resulting in abnormal sickle-shaped red blood cells and vaso-occlusive crises.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "271737000",
        "targetDisplay": "Anemia (disorder)"
      }
    ],
    "icd11Mapping": {
      "code": "3A51",
      "display": "Sickle cell disorders",
      "mapType": "Exact Match",
      "chapter": "03 Diseases of the blood or blood-forming organs"
    }
  },
  {
    "conceptId": "55464009",
    "fsn": "Systemic lupus erythematosus (disorder)",
    "preferredTerm": "Systemic lupus erythematosus",
    "semanticTag": "disorder",
    "hierarchy": "Clinical Finding",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "SLE",
      "Lupus erythematosus",
      "Lupus"
    ],
    "definition": "A multisystem autoimmune disorder characterized by production of antinuclear antibodies (ANA) and immune complex deposition in skin, joints, kidneys, and nervous system.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "39352004",
        "targetDisplay": "Connective tissue disease (disorder)"
      }
    ],
    "icd11Mapping": {
      "code": "4A40",
      "display": "Systemic lupus erythematosus",
      "mapType": "Exact Match",
      "chapter": "04 Diseases of the immune system"
    }
  },
  {
    "conceptId": "52589006",
    "fsn": "Repair of inguinal hernia (procedure)",
    "preferredTerm": "Inguinal hernia repair",
    "semanticTag": "procedure",
    "hierarchy": "Procedure",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Herniorrhaphy",
      "Hernioplasty with mesh",
      "Laparoscopic TEP/TAPP hernia repair"
    ],
    "definition": "Surgical restoration of the integrity of the abdominal wall in the groin region to reduce herniated abdominal contents.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "387713003",
        "targetDisplay": "Surgical procedure (procedure)"
      }
    ],
    "icd11Mapping": {
      "code": "PE20",
      "display": "Repair of inguinal hernia",
      "mapType": "Equivalent",
      "chapter": "ICD-11 Interventions / MMS Procedures"
    }
  },
  {
    "conceptId": "172960003",
    "fsn": "Tonsillectomy (procedure)",
    "preferredTerm": "Tonsillectomy",
    "semanticTag": "procedure",
    "hierarchy": "Procedure",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Excision of palatine tonsils",
      "Surgical removal of tonsils"
    ],
    "definition": "Complete surgical removal of the palatine tonsils indicated for recurrent tonsillitis or obstructive sleep apnea.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "387713003",
        "targetDisplay": "Surgical procedure (procedure)"
      }
    ],
    "icd11Mapping": {
      "code": "PE10",
      "display": "Tonsillectomy",
      "mapType": "Equivalent",
      "chapter": "ICD-11 Interventions / MMS Procedures"
    }
  },
  {
    "conceptId": "5447007",
    "fsn": "Transfusion of blood (procedure)",
    "preferredTerm": "Blood transfusion",
    "semanticTag": "procedure",
    "hierarchy": "Procedure",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "PRBC transfusion",
      "Packed red blood cell administration",
      "Allogeneic transfusion"
    ],
    "definition": "Intravenous administration of whole blood or specific blood components (red cells, platelets, fresh frozen plasma) from a donor to a recipient.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "387713003",
        "targetDisplay": "Therapeutic procedure (procedure)"
      }
    ],
    "icd11Mapping": {
      "code": "PE90",
      "display": "Blood transfusion procedure",
      "mapType": "Equivalent",
      "chapter": "ICD-11 Interventions / MMS Procedures"
    }
  },
  {
    "conceptId": "277762005",
    "fsn": "Lumbar puncture (procedure)",
    "preferredTerm": "Lumbar puncture",
    "semanticTag": "procedure",
    "hierarchy": "Procedure",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "LP",
      "Spinal tap",
      "Diagnostic cerebrospinal fluid collection"
    ],
    "definition": "Insertion of a needle into the subarachnoid space of the lumbar spine (typically L3-L4 or L4-L5) to sample cerebrospinal fluid or administer medications.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "387713003",
        "targetDisplay": "Diagnostic procedure (procedure)"
      }
    ],
    "icd11Mapping": {
      "code": "PE91",
      "display": "Lumbar puncture",
      "mapType": "Equivalent",
      "chapter": "ICD-11 Interventions / MMS Procedures"
    }
  },
  {
    "conceptId": "240977001",
    "fsn": "Biopsy of skin (procedure)",
    "preferredTerm": "Skin biopsy",
    "semanticTag": "procedure",
    "hierarchy": "Procedure",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Punch biopsy of skin",
      "Shave biopsy",
      "Excisional skin biopsy"
    ],
    "definition": "Removal of a representative sample of cutaneous tissue for microscopic diagnostic histopathological evaluation.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "387713003",
        "targetDisplay": "Diagnostic procedure (procedure)"
      },
      {
        "type": "Procedure site",
        "targetId": "39937001",
        "targetDisplay": "Structure of skin (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "PE92",
      "display": "Skin biopsy",
      "mapType": "Equivalent",
      "chapter": "ICD-11 Interventions / MMS Procedures"
    }
  },
  {
    "conceptId": "78961009",
    "fsn": "Spleen structure (body structure)",
    "preferredTerm": "Spleen structure",
    "semanticTag": "body structure",
    "hierarchy": "Body Structure",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Splenic tissue",
      "Lien"
    ],
    "definition": "An intraperitoneal lymphoid organ in the left upper quadrant that filters blood, destroys senescent red blood cells, and mounts immune responses.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "21483005",
        "targetDisplay": "Lymphoid organ structure (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "XA15",
      "display": "Spleen anatomy",
      "mapType": "Associated",
      "chapter": "ICD-11 Extension Codes: Anatomy"
    }
  },
  {
    "conceptId": "89837001",
    "fsn": "Urinary bladder structure (body structure)",
    "preferredTerm": "Urinary bladder structure",
    "semanticTag": "body structure",
    "hierarchy": "Body Structure",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Bladder",
      "Vesica urinaria"
    ],
    "definition": "A distensible muscular reservoir situated in the pelvis that stores urine excreted by the kidneys prior to disposal by micturition.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "122489005",
        "targetDisplay": "Structure of urinary system (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "XA23",
      "display": "Urinary bladder anatomy",
      "mapType": "Associated",
      "chapter": "ICD-11 Extension Codes: Anatomy"
    }
  },
  {
    "conceptId": "35039007",
    "fsn": "Uterus structure (body structure)",
    "preferredTerm": "Uterus structure",
    "semanticTag": "body structure",
    "hierarchy": "Body Structure",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Womb",
      "Uterine cavity",
      "Metra"
    ],
    "definition": "A hollow muscular reproductive organ located in the female pelvis between the bladder and rectum, in which an embryo implants and a fetus develops.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "122489005",
        "targetDisplay": "Female reproductive structure (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "XA24",
      "display": "Uterus anatomy",
      "mapType": "Associated",
      "chapter": "ICD-11 Extension Codes: Anatomy"
    }
  },
  {
    "conceptId": "71341001",
    "fsn": "Femur structure (body structure)",
    "preferredTerm": "Femur structure",
    "semanticTag": "body structure",
    "hierarchy": "Body Structure",
    "status": "Active",
    "effectiveTime": "20240901",
    "synonyms": [
      "Thigh bone",
      "Femoral bone"
    ],
    "definition": "The longest, heaviest, and strongest tubular bone in the human body, articulating proximally with the acetabulum of the pelvis and distally with the tibia and patella.",
    "relationships": [
      {
        "type": "Is a",
        "targetId": "272673000",
        "targetDisplay": "Bone structure (body structure)"
      }
    ],
    "icd11Mapping": {
      "code": "XA21",
      "display": "Femur bone anatomy",
      "mapType": "Associated",
      "chapter": "ICD-11 Extension Codes: Anatomy"
    }
  }
];
