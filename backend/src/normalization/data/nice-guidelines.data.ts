/**
 * NICE and Other Recognised Guideline Publishers
 * Sourced from the National Institute for Health and Care Excellence (NICE - UK)
 * Official portal: https://www.nice.org.uk/guidance
 *
 * Focus: Reviewed assessment pathways, evidence-based recommendations,
 * guideline version, publication date, population, and jurisdiction metadata.
 */

export interface NicePathwayStep {
  stepNumber: number;
  stage: string;
  recommendation: string;
  evidenceGrade?: 'High' | 'Moderate' | 'Conditional';
}

export interface NiceGuidelineEntry {
  guidelineId: string; // e.g. "NG28", "NG136"
  title: string;
  clinicalDomain: 'Diabetes & Metabolism' | 'Cardiovascular' | 'Renal & Urology' | 'Respiratory' | 'Gastroenterology';
  version: string;
  publishedDate: string;
  lastUpdated: string;
  targetPopulation: string;
  jurisdiction: string;
  jurisdictionNotice: string;
  pathwaySummary: string;
  pathwaySteps: NicePathwayStep[];
  decisionSupportRules: string[];
  officialUrl: string;
  relatedIcd11Code?: string;
  relatedSnomedId?: string;
}

export const NICE_GUIDELINES_DATA: NiceGuidelineEntry[] = [
  // =========================================================================
  // 1. DIABETES & METABOLISM
  // =========================================================================
  {
    guidelineId: 'NG28',
    title: 'Type 2 Diabetes in Adults: Management',
    clinicalDomain: 'Diabetes & Metabolism',
    version: '2024 Update (v2.6)',
    publishedDate: '2015-12-02',
    lastUpdated: '2024-06-28',
    targetPopulation: 'Adults aged 18 and over with type 2 diabetes',
    jurisdiction: 'United Kingdom (NHS / National Reference)',
    jurisdictionNotice: 'NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.',
    pathwaySummary: 'Comprehensive assessment and treatment pathway starting from individualized HbA1c targets, lifestyle optimization, initial metformin monotherapy, early addition of SGLT2 inhibitors for cardiovascular/renal risk, and insulin intensification.',
    pathwaySteps: [
      {
        stepNumber: 1,
        stage: 'Initial Diagnosis & Target Setting',
        recommendation: 'Agree on individualized HbA1c target (typically 48 mmol/mol [6.5%] for lifestyle/single drug; 53 mmol/mol [7.0%] if on drugs associated with hypoglycemia). Provide structured patient education.',
        evidenceGrade: 'High'
      },
      {
        stepNumber: 2,
        stage: 'First-Line Pharmacological Therapy',
        recommendation: 'Offer standard-release metformin as first-line monotherapy. If patient has confirmed atherosclerotic cardiovascular disease (CVD) or chronic kidney disease, introduce an SGLT2 inhibitor early in dual therapy.',
        evidenceGrade: 'High'
      },
      {
        stepNumber: 3,
        stage: 'Treatment Escalation (Dual / Triple Therapy)',
        recommendation: 'If HbA1c rises above individualized target, intensify with DPP-4 inhibitor, sulfonylurea, pioglitazone, or SGLT2 inhibitor based on cardiovascular risk, weight, and hypoglycemia risk.',
        evidenceGrade: 'High'
      },
      {
        stepNumber: 4,
        stage: 'Injectable Therapy Intensification',
        recommendation: 'Consider GLP-1 receptor agonist if BMI ≥ 35 kg/m² or insulin therapy when oral triple therapy fails to maintain target glycemic control.',
        evidenceGrade: 'Moderate'
      }
    ],
    decisionSupportRules: [
      'Monitor HbA1c every 3 to 6 months until stable, then every 6 months.',
      'Annual review must include urine albumin-to-creatinine ratio (ACR), eGFR, diabetic foot examination, and digital retinal screening.',
      'Withhold SGLT2 inhibitors during acute illness, dehydration, or prior to major surgery to avoid euglycemic DKA.'
    ],
    officialUrl: 'https://www.nice.org.uk/guidance/ng28',
    relatedIcd11Code: '5A11',
    relatedSnomedId: '44054006'
  },
  {
    guidelineId: 'NG17',
    title: 'Type 1 Diabetes in Adults: Diagnosis and Management',
    clinicalDomain: 'Diabetes & Metabolism',
    version: '2023 Update (v2.1)',
    publishedDate: '2015-08-26',
    lastUpdated: '2023-08-16',
    targetPopulation: 'Adults aged 18 and over with newly diagnosed or existing type 1 diabetes',
    jurisdiction: 'United Kingdom (NHS / National Reference)',
    jurisdictionNotice: 'NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.',
    pathwaySummary: 'Standard of care pathway recommending multiple daily basal-bolus insulin injection regimens or continuous subcutaneous insulin infusion (insulin pump), continuous glucose monitoring (CGM), and ketone monitoring.',
    pathwaySteps: [
      {
        stepNumber: 1,
        stage: 'Diagnostic Confirmation',
        recommendation: 'Confirm diagnosis by assessing ketosis, rapid weight loss, age < 50, BMI < 25 kg/m², or measuring C-peptide and autoantibodies (anti-GAD, IA-2, ZnT8) if uncertain.',
        evidenceGrade: 'High'
      },
      {
        stepNumber: 2,
        stage: 'Insulin Regimen Selection',
        recommendation: 'Offer a multiple daily injection basal-bolus insulin regimen (twice-daily insulin detemir or once-daily insulin glargine plus rapid-acting insulin before meals).',
        evidenceGrade: 'High'
      },
      {
        stepNumber: 3,
        stage: 'Continuous Glucose Monitoring (CGM)',
        recommendation: 'Offer real-time continuous glucose monitoring (rtCGM) or intermittently scanned CGM (isCGM / Flash) to all adults with type 1 diabetes.',
        evidenceGrade: 'High'
      },
      {
        stepNumber: 4,
        stage: 'Ketoacidosis Prevention & Rescue',
        recommendation: 'Provide blood ketone testing meters and clear sick-day guidance to detect and manage impending diabetic ketoacidosis (DKA) promptly.',
        evidenceGrade: 'High'
      }
    ],
    decisionSupportRules: [
      'Target general HbA1c of 48 mmol/mol (6.5%) or lower without causing disabling hypoglycemia.',
      'Check blood ketones if capillary glucose exceeds 13 mmol/L (234 mg/dL) or during intercurrent illness.',
      'Screen annually for nephropathy, retinopathy, and autoimmune thyroid disease.'
    ],
    officialUrl: 'https://www.nice.org.uk/guidance/ng17',
    relatedIcd11Code: '5A10',
    relatedSnomedId: '46635009'
  },

  // =========================================================================
  // 2. CARDIOVASCULAR
  // =========================================================================
  {
    guidelineId: 'NG136',
    title: 'Hypertension in Adults: Diagnosis and Management',
    clinicalDomain: 'Cardiovascular',
    version: '2023 Update (v1.4)',
    publishedDate: '2019-08-28',
    lastUpdated: '2023-11-20',
    targetPopulation: 'Adults aged 18 and over with suspected or diagnosed essential hypertension',
    jurisdiction: 'United Kingdom (NHS / National Reference)',
    jurisdictionNotice: 'NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.',
    pathwaySummary: 'Evidence-based step-wise pathway covering ambulatory blood pressure monitoring (ABPM) confirmation, cardiovascular risk calculation (QRISK), and stepped pharmacological management (A, C, D algorithm).',
    pathwaySteps: [
      {
        stepNumber: 1,
        stage: 'Confirmation of Hypertension',
        recommendation: 'If clinic blood pressure is 140/90 mmHg or higher, confirm diagnosis using 24-hour ambulatory blood pressure monitoring (ABPM) or home BP monitoring (HBPM).',
        evidenceGrade: 'High'
      },
      {
        stepNumber: 2,
        stage: 'Step 1 Antihypertensive Therapy',
        recommendation: 'If aged < 55 or with type 2 diabetes: offer an ACE inhibitor (A) or ARB. If aged ≥ 55 or of Black African/African-Caribbean origin: offer a calcium channel blocker (CCB, C).',
        evidenceGrade: 'High'
      },
      {
        stepNumber: 3,
        stage: 'Step 2 Dual Combination Therapy',
        recommendation: 'If clinic BP remains ≥ 140/90 mmHg on monotherapy, combine an ACE inhibitor/ARB with a CCB (A + C) or thiazide-like diuretic (A + D).',
        evidenceGrade: 'High'
      },
      {
        stepNumber: 4,
        stage: 'Step 3 Triple Therapy & Resistant Hypertension',
        recommendation: 'Combine ACE inhibitor/ARB + CCB + thiazide-like diuretic (A + C + D). If BP remains uncontrolled, evaluate for resistant hypertension and consider spironolactone.',
        evidenceGrade: 'Moderate'
      }
    ],
    decisionSupportRules: [
      'Treatment target for adults under 80: clinic BP < 140/90 mmHg (ABPM average < 135/85 mmHg).',
      'Treatment target for adults aged 80 and over: clinic BP < 150/90 mmHg (ABPM average < 145/85 mmHg).',
      'Assess end-organ damage: urine ACR, 12-lead ECG, serum creatinine, and fundoscopy at initial diagnosis.'
    ],
    officialUrl: 'https://www.nice.org.uk/guidance/ng136',
    relatedIcd11Code: 'BA00',
    relatedSnomedId: '38341003'
  },
  {
    guidelineId: 'NG106',
    title: 'Chronic Heart Failure in Adults: Diagnosis and Management',
    clinicalDomain: 'Cardiovascular',
    version: '2024 Update (v2.0)',
    publishedDate: '2018-09-12',
    lastUpdated: '2024-04-10',
    targetPopulation: 'Adults aged 18 and over with symptoms or clinical signs of heart failure',
    jurisdiction: 'United Kingdom (NHS / National Reference)',
    jurisdictionNotice: 'NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.',
    pathwaySummary: 'Clinical care pathway detailing initial NT-proBNP measurement, rapid specialist transthoracic echocardiography, and the 4 guideline-directed pillars of pharmacological therapy for Heart Failure with Reduced Ejection Fraction (HFrEF).',
    pathwaySteps: [
      {
        stepNumber: 1,
        stage: 'Initial Triage & Biomarker Testing',
        recommendation: 'Measure serum N-terminal pro-B-type natriuretic peptide (NT-proBNP). If NT-proBNP > 2000 pg/mL, refer urgently for specialist assessment and echocardiogram within 2 weeks.',
        evidenceGrade: 'High'
      },
      {
        stepNumber: 2,
        stage: 'First-Line Pillar Therapy (HFrEF)',
        recommendation: 'Offer an ACE inhibitor (or ARB) and a beta-blocker licensed for heart failure (bisoprolol, carvedilol, or nebivolol). Titrate to maximum tolerated doses.',
        evidenceGrade: 'High'
      },
      {
        stepNumber: 3,
        stage: 'Second-Line & Quadruple Therapy Addition',
        recommendation: 'Add a mineralocorticoid receptor antagonist (MRA, e.g. spironolactone) and an SGLT2 inhibitor (dapagliflozin or empagliflozin) for all patients with symptomatic HFrEF.',
        evidenceGrade: 'High'
      },
      {
        stepNumber: 4,
        stage: 'Advanced Device & Specialized Interventions',
        recommendation: 'Assess eligibility for sacubitril-valsartan (ARNI) switch or cardiac resynchronization therapy (CRT-D / CRT-P) if QRS duration ≥ 130 ms with LBBB.',
        evidenceGrade: 'High'
      }
    ],
    decisionSupportRules: [
      'Monitor serum potassium and renal function (eGFR) 1 to 2 weeks after starting or titrating ACEi/ARB or MRA.',
      'Advise daily weight monitoring to detect early fluid retention and adjust loop diuretics accordingly.',
      'Offer annual influenza and pneumococcal vaccination.'
    ],
    officialUrl: 'https://www.nice.org.uk/guidance/ng106',
    relatedIcd11Code: 'BD11',
    relatedSnomedId: '84114007'
  },

  // =========================================================================
  // 3. RENAL & UROLOGY
  // =========================================================================
  {
    guidelineId: 'NG203',
    title: 'Chronic Kidney Disease: Assessment and Management',
    clinicalDomain: 'Renal & Urology',
    version: '2024 Update (v1.5)',
    publishedDate: '2021-08-25',
    lastUpdated: '2024-05-15',
    targetPopulation: 'Adults aged 18 and over with or at risk of developing chronic kidney disease',
    jurisdiction: 'United Kingdom (NHS / National Reference)',
    jurisdictionNotice: 'NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.',
    pathwaySummary: 'Systematic pathway for staging CKD based on eGFR (G1–G5) and urine ACR (A1–A3), KDIGO risk stratification, blood pressure optimization, and nephroprotective SGLT2 inhibitor prescribing.',
    pathwaySteps: [
      {
        stepNumber: 1,
        stage: 'Dual-Marker Staging & Diagnosis',
        recommendation: 'Stage CKD using both creatinine-based eGFR (G stages 1-5) and urine albumin-to-creatinine ratio (uACR categories A1-A3). Recheck within 3 months to confirm chronicity.',
        evidenceGrade: 'High'
      },
      {
        stepNumber: 2,
        stage: 'Blood Pressure & Renin-Angiotensin Blockade',
        recommendation: 'Target BP < 140/90 mmHg (or < 130/80 mmHg if uACR ≥ 70 mg/mmol). Prescribe an ACE inhibitor or ARB if uACR ≥ 30 mg/mmol or if CKD is paired with diabetes.',
        evidenceGrade: 'High'
      },
      {
        stepNumber: 3,
        stage: 'SGLT2 Inhibitor Renoprotection',
        recommendation: 'Offer an SGLT2 inhibitor (dapagliflozin or empagliflozin) for adults with CKD and uACR ≥ 22.6 mg/mmol (with or without type 2 diabetes).',
        evidenceGrade: 'High'
      },
      {
        stepNumber: 4,
        stage: 'Specialist Nephrology Referral Criteria',
        recommendation: 'Refer to specialist nephrology if 5-year risk of kidney failure > 5% (using 4-variable KFRE), sustained eGFR decline ≥ 25%, or uACR ≥ 70 mg/mmol.',
        evidenceGrade: 'High'
      }
    ],
    decisionSupportRules: [
      'Accept up to a 30% drop in eGFR or 30% rise in serum creatinine within 4 weeks of starting ACEi/ARB before considering drug cessation.',
      'Check serum potassium regularly; avoid combining ACE inhibitor and ARB together.',
      'Screen for metabolic complications: anemia of CKD, acidosis (bicarbonate), and mineral bone disorder.'
    ],
    officialUrl: 'https://www.nice.org.uk/guidance/ng203',
    relatedIcd11Code: 'GB61',
    relatedSnomedId: '709044004'
  },

  // =========================================================================
  // 4. RESPIRATORY & GASTROENTEROLOGY
  // =========================================================================
  {
    guidelineId: 'NG80',
    title: 'Asthma: Diagnosis, Monitoring and Chronic Asthma Management',
    clinicalDomain: 'Respiratory',
    version: '2023 Update (v1.3)',
    publishedDate: '2017-11-29',
    lastUpdated: '2023-03-22',
    targetPopulation: 'Adults, young people, and children aged 5 and over with suspected or confirmed asthma',
    jurisdiction: 'United Kingdom (NHS / National Reference)',
    jurisdictionNotice: 'NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.',
    pathwaySummary: 'Objective diagnostic testing pathway incorporating Fractional Exhaled Nitric Oxide (FeNO) and spirometry with bronchodilator reversibility, followed by step-wise inhaled corticosteroid (ICS) therapy.',
    pathwaySteps: [
      {
        stepNumber: 1,
        stage: 'Objective Diagnostic Testing',
        recommendation: 'Perform spirometry with bronchodilator reversibility (BDR) and measure fractional exhaled nitric oxide (FeNO). A FeNO level ≥ 40 ppb in adults indicates eosinophilic airway inflammation.',
        evidenceGrade: 'High'
      },
      {
        stepNumber: 2,
        stage: 'Step 1 Initial Maintenance Therapy',
        recommendation: 'Offer low-dose inhaled corticosteroid (ICS) plus short-acting beta-2 agonist (SABA) as required, or pediatric equivalent based on age.',
        evidenceGrade: 'High'
      },
      {
        stepNumber: 3,
        stage: 'Step 2 Maintenance and Reliever (MART)',
        recommendation: 'If symptoms persist on low-dose ICS, offer a leukotriene receptor antagonist (LTRA) or switch to combined low-dose ICS/LABA (or MART regimen).',
        evidenceGrade: 'High'
      },
      {
        stepNumber: 4,
        stage: 'Step 3 Specialist Referral for Severe Asthma',
        recommendation: 'Refer patients with persistent symptoms or frequent exacerbations despite high-dose ICS/LABA for biologic therapy evaluation (e.g. anti-IgE, anti-IL5).',
        evidenceGrade: 'High'
      }
    ],
    decisionSupportRules: [
      'Assess inhaler technique at every clinical review before escalating pharmacotherapy.',
      'Provide a written Personalized Asthma Action Plan (PAAP) to every patient.',
      'Arrange an urgent face-to-face review within 48 hours following any hospital discharge or acute exacerbation.'
    ],
    officialUrl: 'https://www.nice.org.uk/guidance/ng80',
    relatedIcd11Code: 'CA23',
    relatedSnomedId: '195967001'
  }
];

export const NICE_METADATA = {
  publisher: 'National Institute for Health and Care Excellence (NICE)',
  country: 'United Kingdom',
  legalStatus: 'Executive non-departmental public body of the Department of Health and Social Care (England)',
  jurisdictionDisclaimer: 'NICE guidance is not automatically the applicable standard for every country. Clinicians must apply local national statutory requirements (e.g. ICMR in India) for legal and clinical practice.',
  officialPortal: 'https://www.nice.org.uk/guidance',
  standardTypes: ['NICE Guidelines (NG)', 'Clinical Guidelines (CG)', 'Technology Appraisal Guidance (TA)']
};
