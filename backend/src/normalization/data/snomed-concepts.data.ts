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
];
