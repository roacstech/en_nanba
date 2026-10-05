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
  clinicalDomain:
    | 'Diabetes & Metabolism'
    | 'Cardiovascular'
    | 'Renal & Urology'
    | 'Respiratory'
    | 'Gastroenterology'
    | 'Neurology & CNS'
    | 'Infections & Antimicrobial'
    | 'Musculoskeletal'
    | 'Oncology & Cancer'
    | 'Mental Health';
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
  ncbiUrl?: string;
  relatedIcd11Code?: string;
  relatedSnomedId?: string;
}

export const NICE_GUIDELINES_DATA: NiceGuidelineEntry[] = [
  {
    "guidelineId": "NG28",
    "title": "Type 2 Diabetes in Adults: Management",
    "clinicalDomain": "Diabetes & Metabolism",
    "version": "2024 Update (v2.6)",
    "publishedDate": "2015-12-02",
    "lastUpdated": "2024-06-28",
    "targetPopulation": "Adults aged 18 and over with type 2 diabetes",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Comprehensive assessment and treatment pathway starting from individualized HbA1c targets, lifestyle optimization, initial metformin monotherapy, early addition of SGLT2 inhibitors for cardiovascular/renal risk, and insulin intensification.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Initial Diagnosis & Target Setting",
        "recommendation": "Agree on individualized HbA1c target (typically 48 mmol/mol [6.5%] for lifestyle/single drug; 53 mmol/mol [7.0%] if on drugs associated with hypoglycemia). Provide structured patient education.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "First-Line Pharmacological Therapy",
        "recommendation": "Offer standard-release metformin as first-line monotherapy. If patient has confirmed atherosclerotic cardiovascular disease (CVD) or chronic kidney disease, introduce an SGLT2 inhibitor early in dual therapy.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Treatment Escalation (Dual / Triple Therapy)",
        "recommendation": "If HbA1c rises above individualized target, intensify with DPP-4 inhibitor, sulfonylurea, pioglitazone, or SGLT2 inhibitor based on cardiovascular risk, weight, and hypoglycemia risk.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Injectable Therapy Intensification",
        "recommendation": "Consider GLP-1 receptor agonist if BMI ≥ 35 kg/m² or insulin therapy when oral triple therapy fails to maintain target glycemic control.",
        "evidenceGrade": "Moderate"
      }
    ],
    "decisionSupportRules": [
      "Monitor HbA1c every 3 to 6 months until stable, then every 6 months.",
      "Annual review must include urine albumin-to-creatinine ratio (ACR), eGFR, diabetic foot examination, and digital retinal screening.",
      "Withhold SGLT2 inhibitors during acute illness, dehydration, or prior to major surgery to avoid euglycemic DKA."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng28",
    "relatedIcd11Code": "5A11",
    "relatedSnomedId": "44054006",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG28"
  },
  {
    "guidelineId": "NG17",
    "title": "Type 1 Diabetes in Adults: Diagnosis and Management",
    "clinicalDomain": "Diabetes & Metabolism",
    "version": "2023 Update (v2.1)",
    "publishedDate": "2015-08-26",
    "lastUpdated": "2023-08-16",
    "targetPopulation": "Adults aged 18 and over with newly diagnosed or existing type 1 diabetes",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Standard of care pathway recommending multiple daily basal-bolus insulin injection regimens or continuous subcutaneous insulin infusion (insulin pump), continuous glucose monitoring (CGM), and ketone monitoring.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Diagnostic Confirmation",
        "recommendation": "Confirm diagnosis by assessing ketosis, rapid weight loss, age < 50, BMI < 25 kg/m², or measuring C-peptide and autoantibodies (anti-GAD, IA-2, ZnT8) if uncertain.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Insulin Regimen Selection",
        "recommendation": "Offer a multiple daily injection basal-bolus insulin regimen (twice-daily insulin detemir or once-daily insulin glargine plus rapid-acting insulin before meals).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Continuous Glucose Monitoring (CGM)",
        "recommendation": "Offer real-time continuous glucose monitoring (rtCGM) or intermittently scanned CGM (isCGM / Flash) to all adults with type 1 diabetes.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Ketoacidosis Prevention & Rescue",
        "recommendation": "Provide blood ketone testing meters and clear sick-day guidance to detect and manage impending diabetic ketoacidosis (DKA) promptly.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Target general HbA1c of 48 mmol/mol (6.5%) or lower without causing disabling hypoglycemia.",
      "Check blood ketones if capillary glucose exceeds 13 mmol/L (234 mg/dL) or during intercurrent illness.",
      "Screen annually for nephropathy, retinopathy, and autoimmune thyroid disease."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng17",
    "relatedIcd11Code": "5A10",
    "relatedSnomedId": "46635009",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG17"
  },
  {
    "guidelineId": "NG18",
    "title": "Diabetes in Children and Young People: Diagnosis and Management",
    "clinicalDomain": "Diabetes & Metabolism",
    "version": "2023 Update (v1.8)",
    "publishedDate": "2015-08-01",
    "lastUpdated": "2023-05-10",
    "targetPopulation": "Children and young people under 18 with suspected or diagnosed diabetes",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks apply.",
    "pathwaySummary": "Pediatric diabetes pathway emphasizing immediate same-day hospital referral on suspicion of type 1 diabetes to prevent DKA, real-time CGM from diagnosis, and multidisciplinary pediatric clinic care.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Immediate Suspicion & Referral",
        "recommendation": "Refer children and young people with suspected type 1 diabetes immediately (same day) to a dedicated multidisciplinary pediatric diabetes team.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Insulin Therapy Initiation",
        "recommendation": "Offer multiple daily basal-bolus injections or continuous subcutaneous insulin infusion (insulin pump) from diagnosis.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Continuous Glucose Monitoring",
        "recommendation": "Offer real-time CGM (rtCGM) to all children and young people with type 1 diabetes to minimize finger-prick testing and overnight hypoglycemia.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Annual Complications Screening",
        "recommendation": "Screen for microvascular complications (urine ACR, retinopathy) and celiac/thyroid autoantibodies starting from age 12.",
        "evidenceGrade": "Moderate"
      }
    ],
    "decisionSupportRules": [
      "Target HbA1c of 48 mmol/mol (6.5%) or lower to minimize the long-term risk of vascular complications.",
      "Check blood ketones in any unwell child or when glucose is above 14 mmol/L."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng18",
    "relatedIcd11Code": "5A10",
    "relatedSnomedId": "46635009",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG18"
  },
  {
    "guidelineId": "NG3",
    "title": "Diabetes in Pregnancy: Management from Preconception to the Postnatal Period",
    "clinicalDomain": "Diabetes & Metabolism",
    "version": "2020 Update (v1.4)",
    "publishedDate": "2015-02-25",
    "lastUpdated": "2020-12-16",
    "targetPopulation": "Women with pre-existing diabetes planning pregnancy, and women who develop gestational diabetes",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Care pathway covering 5 mg preconception folic acid, 2-hour 75g OGTT screening at 24-28 weeks, tight capillary glucose targets, and postpartum fasting glucose testing.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Preconception Planning",
        "recommendation": "Advise women with pre-existing diabetes to aim for HbA1c < 48 mmol/mol (6.5%) before conceiving and prescribe high-dose folic acid (5 mg/day).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Gestational Diabetes Screening",
        "recommendation": "Offer a 2-hour 75g oral glucose tolerance test (OGTT) at 24 to 28 weeks. Diagnose GDM if fasting plasma glucose ≥ 5.6 mmol/L or 2-hour ≥ 7.8 mmol/L.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Glycemic Management in Pregnancy",
        "recommendation": "Target fasting glucose 5.3 mmol/L and 1-hour postprandial 7.8 mmol/L. Start insulin if fasting glucose ≥ 7.0 mmol/L at diagnosis.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Postnatal Follow-Up",
        "recommendation": "Offer fasting plasma glucose test at 6 to 13 weeks postpartum to exclude persistent type 2 diabetes mellitus.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Discontinue ACE inhibitors, ARBs, and statins before pregnancy or as soon as pregnancy is confirmed.",
      "Provide continuous glucose monitoring for all pregnant women with type 1 diabetes."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng3",
    "relatedIcd11Code": "JA60",
    "relatedSnomedId": "11687002",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG3"
  },
  {
    "guidelineId": "CG189",
    "title": "Obesity: Identification, Assessment and Management",
    "clinicalDomain": "Diabetes & Metabolism",
    "version": "2023 Update (v1.6)",
    "publishedDate": "2014-11-26",
    "lastUpdated": "2023-09-08",
    "targetPopulation": "Children and adults with overweight or obesity (BMI ≥ 25 or ethnicity-adjusted cutoffs)",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Tiered management pathway from waist-to-height ratio measurement, multi-component lifestyle interventions, GLP-1 receptor agonist pharmacotherapy, and bariatric surgical referral.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Measurement & Risk Classification",
        "recommendation": "Measure BMI and waist-to-height ratio (keep waist circumference to less than half your height). Use lower thresholds for South Asian and Chinese populations (BMI ≥ 23 overweight, ≥ 27.5 obesity).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Multicomponent Lifestyle Intervention",
        "recommendation": "Provide dietary consultation (600 kcal/day deficit) paired with at least 150 minutes of moderate-intensity physical activity weekly and behavioral support.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Pharmacological Therapy (Tier 3)",
        "recommendation": "Consider orlistat or GLP-1 receptor agonists (liraglutide, semaglutide) alongside lifestyle modification if BMI ≥ 35 kg/m² with weight-related comorbidities.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Bariatric Surgery Referral (Tier 4)",
        "recommendation": "Offer expedited surgical referral for adults with BMI ≥ 40 kg/m² or BMI 35–39.9 kg/m² with significant comorbidities (e.g. type 2 diabetes, severe sleep apnea).",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Only continue pharmacological therapy past 12 weeks if the patient has lost at least 5% of their initial body weight.",
      "Provide lifelong annual nutritional and metabolic follow-up after bariatric surgery."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg189",
    "relatedIcd11Code": "5B81",
    "relatedSnomedId": "414915002",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG189"
  },
  {
    "guidelineId": "NG238",
    "title": "Cardiovascular Disease: Risk Assessment and Reduction, Including Lipid Modification",
    "clinicalDomain": "Diabetes & Metabolism",
    "version": "2023 Update (v1.2)",
    "publishedDate": "2023-12-14",
    "lastUpdated": "2023-12-14",
    "targetPopulation": "Adults aged 18 and over without pre-existing CVD or with established atherosclerotic cardiovascular disease",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Primary and secondary CVD prevention algorithm utilizing the QRISK3 tool, atorvastatin 20 mg for primary prevention (QRISK ≥ 10%), and high-intensity atorvastatin 80 mg for secondary prevention.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "CVD Risk Calculation",
        "recommendation": "Use the QRISK3 10-year risk assessment tool for adults aged 25 to 84 without pre-existing CVD. Do not use risk calculators for adults with established CVD or familial hypercholesterolemia.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Primary Prevention Pharmacotherapy",
        "recommendation": "Offer atorvastatin 20 mg once daily for primary prevention of CVD to people who have a 10-year QRISK3 score of 10% or higher, or type 1 diabetes for over 10 years.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Secondary Prevention High-Intensity Statin",
        "recommendation": "Start atorvastatin 80 mg daily for secondary prevention in adults with established CVD (angina, MI, stroke, TIA, or peripheral arterial disease).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Lipid Target Verification & Escalation",
        "recommendation": "Measure non-HDL cholesterol at 3 months. Aim for a greater than 40% reduction in non-HDL cholesterol; add ezetimibe 10 mg if target is not achieved.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Check baseline liver transaminases (ALT/AST), renal function, and HbA1c before starting statin therapy.",
      "Re-check ALT/AST at 3 months and 12 months; discontinue if transaminases rise to 3 times the upper limit of normal."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng238",
    "relatedIcd11Code": "5C80",
    "relatedSnomedId": "398036000",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG238"
  },
  {
    "guidelineId": "NG145",
    "title": "Thyroid Disease: Assessment and Management",
    "clinicalDomain": "Diabetes & Metabolism",
    "version": "2023 Update (v1.3)",
    "publishedDate": "2019-11-20",
    "lastUpdated": "2023-10-18",
    "targetPopulation": "Adults, children, and young people with suspected or confirmed primary thyroid dysfunction",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Systematic approach to testing TSH and free T4/T3, levothyroxine replacement titration for primary hypothyroidism, and antithyroid drug therapy (carbimazole) or radioiodine for hyperthyroidism.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Diagnostic TSH Cascading",
        "recommendation": "Test TSH alone initially. If TSH is abnormal, automatically cascade to free T4 (FT4) and free T3 (FT3) to distinguish overt from subclinical thyroid disease.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Hypothyroidism Management",
        "recommendation": "Offer levothyroxine as first-line treatment for overt primary hypothyroidism (starting dose 1.6 mcg/kg/day in younger adults; 25–50 mcg in elderly or with ischemic heart disease).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Hyperthyroidism Management",
        "recommendation": "Offer carbimazole as first-line antithyroid medical therapy for Graves disease or toxic multinodular goiter, or radioiodine therapy if medical therapy fails.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Subclinical Thyroid Disease Monitoring",
        "recommendation": "Repeat thyroid function tests every 6 to 12 months for asymptomatic subclinical thyroid disease; treat subclinical hypothyroidism if TSH ≥ 10 mIU/L on 2 separate occasions.",
        "evidenceGrade": "Moderate"
      }
    ],
    "decisionSupportRules": [
      "Target TSH within the reference range (typically 0.4–4.0 mIU/L); adjust levothyroxine in 12.5–25 mcg increments.",
      "Warn patients on carbimazole to report sudden sore throat, fever, or mouth ulcers immediately to rule out agranulocytosis."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng145",
    "relatedIcd11Code": "5A00",
    "relatedSnomedId": "14304000",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG145"
  },
  {
    "guidelineId": "NG133",
    "title": "Hypertension in Pregnancy: Diagnosis and Management",
    "clinicalDomain": "Diabetes & Metabolism",
    "version": "2023 Update (v1.5)",
    "publishedDate": "2019-06-25",
    "lastUpdated": "2023-07-12",
    "targetPopulation": "Pregnant women with chronic hypertension, gestational hypertension, or pre-eclampsia",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Pathway for early pre-eclampsia risk assessment, 75–150 mg aspirin prophylaxis from 12 weeks, labetalol first-line BP therapy, and placental growth factor (PlGF) biomarker testing.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Pre-eclampsia Risk Stratification & Aspirin",
        "recommendation": "Prescribe 75–150 mg aspirin daily from 12 weeks until birth for women with 1 high risk factor (chronic hypertension, CKD, diabetes, autoimmune disease) or 2 moderate risk factors.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Antihypertensive Drug Selection",
        "recommendation": "Offer oral labetalol as first-line antihypertensive therapy to treat gestational hypertension or pre-eclampsia. Consider nifedipine or methyldopa if labetalol is unsuitable.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Target Blood Pressure Control",
        "recommendation": "Target a blood pressure of 135/85 mmHg for women with chronic hypertension, gestational hypertension, or pre-eclampsia during pregnancy.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "PlGF Biomarker Testing",
        "recommendation": "Use placental growth factor (PlGF)-based testing between 20 and 35 weeks to rule out pre-eclampsia in women with suspected disease.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Stop ACE inhibitors, ARBs, and thiazide diuretics immediately upon confirmation of pregnancy.",
      "Administer intravenous magnesium sulfate for eclampsia prophylaxis during delivery in severe pre-eclampsia."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng133",
    "relatedIcd11Code": "JA20",
    "relatedSnomedId": "38341003",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG133"
  },
  {
    "guidelineId": "NG136",
    "title": "Hypertension in Adults: Diagnosis and Management",
    "clinicalDomain": "Cardiovascular",
    "version": "2023 Update (v1.4)",
    "publishedDate": "2019-08-28",
    "lastUpdated": "2023-11-20",
    "targetPopulation": "Adults aged 18 and over with suspected or diagnosed essential hypertension",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Evidence-based step-wise pathway covering ambulatory blood pressure monitoring (ABPM) confirmation, cardiovascular risk calculation (QRISK), and stepped pharmacological management (A, C, D algorithm).",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Confirmation of Hypertension",
        "recommendation": "If clinic blood pressure is 140/90 mmHg or higher, confirm diagnosis using 24-hour ambulatory blood pressure monitoring (ABPM) or home BP monitoring (HBPM).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Step 1 Antihypertensive Therapy",
        "recommendation": "If aged < 55 or with type 2 diabetes: offer an ACE inhibitor (A) or ARB. If aged ≥ 55 or of Black African/African-Caribbean origin: offer a calcium channel blocker (CCB, C).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Step 2 Dual Combination Therapy",
        "recommendation": "If clinic BP remains ≥ 140/90 mmHg on monotherapy, combine an ACE inhibitor/ARB with a CCB (A + C) or thiazide-like diuretic (A + D).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Step 3 Triple Therapy & Resistant Hypertension",
        "recommendation": "Combine ACE inhibitor/ARB + CCB + thiazide-like diuretic (A + C + D). If BP remains uncontrolled, evaluate for resistant hypertension and consider spironolactone.",
        "evidenceGrade": "Moderate"
      }
    ],
    "decisionSupportRules": [
      "Treatment target for adults under 80: clinic BP < 140/90 mmHg (ABPM average < 135/85 mmHg).",
      "Treatment target for adults aged 80 and over: clinic BP < 150/90 mmHg (ABPM average < 145/85 mmHg).",
      "Assess end-organ damage: urine ACR, 12-lead ECG, serum creatinine, and fundoscopy at initial diagnosis."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng136",
    "relatedIcd11Code": "BA00",
    "relatedSnomedId": "38341003",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG136"
  },
  {
    "guidelineId": "NG106",
    "title": "Chronic Heart Failure in Adults: Diagnosis and Management",
    "clinicalDomain": "Cardiovascular",
    "version": "2024 Update (v2.0)",
    "publishedDate": "2018-09-12",
    "lastUpdated": "2024-04-10",
    "targetPopulation": "Adults aged 18 and over with symptoms or clinical signs of heart failure",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Clinical care pathway detailing initial NT-proBNP measurement, rapid specialist transthoracic echocardiography, and the 4 guideline-directed pillars of pharmacological therapy for Heart Failure with Reduced Ejection Fraction (HFrEF).",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Initial Triage & Biomarker Testing",
        "recommendation": "Measure serum N-terminal pro-B-type natriuretic peptide (NT-proBNP). If NT-proBNP > 2000 pg/mL, refer urgently for specialist assessment and echocardiogram within 2 weeks.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "First-Line Pillar Therapy (HFrEF)",
        "recommendation": "Offer an ACE inhibitor (or ARB) and a beta-blocker licensed for heart failure (bisoprolol, carvedilol, or nebivolol). Titrate to maximum tolerated doses.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Second-Line & Quadruple Therapy Addition",
        "recommendation": "Add a mineralocorticoid receptor antagonist (MRA, e.g. spironolactone) and an SGLT2 inhibitor (dapagliflozin or empagliflozin) for all patients with symptomatic HFrEF.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Advanced Device & Specialized Interventions",
        "recommendation": "Assess eligibility for sacubitril-valsartan (ARNI) switch or cardiac resynchronization therapy (CRT-D / CRT-P) if QRS duration ≥ 130 ms with LBBB.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Monitor serum potassium and renal function (eGFR) 1 to 2 weeks after starting or titrating ACEi/ARB or MRA.",
      "Advise daily weight monitoring to detect early fluid retention and adjust loop diuretics accordingly.",
      "Offer annual influenza and pneumococcal vaccination."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng106",
    "relatedIcd11Code": "BD11",
    "relatedSnomedId": "84114007",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG106"
  },
  {
    "guidelineId": "NG196",
    "title": "Atrial Fibrillation: Diagnosis and Management",
    "clinicalDomain": "Cardiovascular",
    "version": "2021 Update (v1.2)",
    "publishedDate": "2021-04-27",
    "lastUpdated": "2021-04-27",
    "targetPopulation": "Adults aged 18 and over with non-valvular or valvular atrial fibrillation",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Clinical pathway covering 12-lead ECG diagnosis, stroke risk stratification using CHA2DS2-VASc, direct-acting oral anticoagulation (DOAC), and rate vs rhythm control strategies.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "ECG Confirmation & Triage",
        "recommendation": "Perform a manual pulse palpation followed by a 12-lead ECG to confirm irregular pulse as atrial fibrillation or atrial flutter.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Stroke Risk & Anticoagulation (DOACs)",
        "recommendation": "Calculate CHA2DS2-VASc score. Offer a DOAC (apixaban, dabigatran, edoxaban, or rivaroxaban) to men with score ≥ 1 and women with score ≥ 2.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Rate Control First-Line",
        "recommendation": "Offer a standard beta-blocker (e.g. bisoprolol, atenolol) or a rate-limiting calcium channel blocker (diltiazem, verapamil) as initial monotherapy for rate control.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Rhythm Control & Catheter Ablation",
        "recommendation": "Consider rhythm control (cardioversion, antiarrhythmic drugs like flecainide/amiodarone) or pulmonary vein catheter ablation if symptomatic or rate control fails.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not offer aspirin monotherapy solely for stroke prevention in atrial fibrillation.",
      "Assess bleeding risk using the ORBIT score (or HAS-BLED); modifiable bleeding risks should be addressed without withholding indicated anticoagulation."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng196",
    "relatedIcd11Code": "BC81",
    "relatedSnomedId": "49436004",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG196"
  },
  {
    "guidelineId": "NG185",
    "title": "Acute Coronary Syndromes (ACS): Management",
    "clinicalDomain": "Cardiovascular",
    "version": "2020 Update (v1.1)",
    "publishedDate": "2020-11-18",
    "lastUpdated": "2020-11-18",
    "targetPopulation": "Adults with acute STEMI, NSTEMI, or unstable angina",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Immediate emergency management pathway including high-sensitivity cardiac troponin testing, emergency coronary angiography / primary PCI for STEMI, and GRACE risk score triage for NSTEMI.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Initial Emergency Medical Therapy",
        "recommendation": "Administer 300 mg aspirin immediately and evaluate for immediate reperfusion. For STEMI, offer primary percutaneous coronary intervention (PCI) within 120 minutes of first medical contact.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Dual Antiplatelet Therapy (DAPT)",
        "recommendation": "Add prasugrel or ticagrelor to aspirin for patients undergoing PCI for acute coronary syndrome, continued for 12 months unless high bleeding risk.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "NSTEMI Risk Stratification",
        "recommendation": "Use the GRACE 6-month mortality risk score. Offer coronary angiography within 72 hours for intermediate or high-risk NSTEMI (predicted mortality > 3%).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Secondary Prevention Medication Pillars",
        "recommendation": "Discharge on ACE inhibitor, beta-blocker, dual antiplatelets, and high-intensity statin (atorvastatin 80 mg daily).",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Perform high-sensitivity cardiac troponin testing at presentation and repeat at 1 to 3 hours using validated rapid rule-out protocols.",
      "Offer cardiac rehabilitation to all post-ACS patients before discharge."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng185",
    "relatedIcd11Code": "BA40",
    "relatedSnomedId": "401303003",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG185"
  },
  {
    "guidelineId": "CG95",
    "title": "Chest Pain of Recent Onset: Assessment and Diagnosis",
    "clinicalDomain": "Cardiovascular",
    "version": "2016 Update (v1.2)",
    "publishedDate": "2010-03-24",
    "lastUpdated": "2016-11-30",
    "targetPopulation": "Adults aged 18 and over presenting with recent onset chest pain of suspected cardiac origin",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Diagnostic pathway recommending 64-slice CT coronary angiography as first-line investigation for stable chest pain with suspected coronary artery disease.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Initial Clinical Assessment & ECG",
        "recommendation": "Take a focused clinical history (typicality of angina symptoms) and perform resting 12-lead ECG. Exclude acute coronary syndrome before outpatient pathway.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "First-Line Diagnostic Imaging (CTCA)",
        "recommendation": "Offer 64-slice (or above) CT coronary angiography (CTCA) as the first-line investigation for adults with suspected angina without confirmed CAD.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Functional Myocardial Perfusion Imaging",
        "recommendation": "Offer non-invasive functional imaging (stress echocardiography, myocardial perfusion scintigraphy [MPS], or stress cardiac MRI) if CTCA is non-diagnostic or shows CAD of uncertain functional significance.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Invasive Coronary Angiography",
        "recommendation": "Reserve invasive coronary angiography for patients with high-risk features on non-invasive imaging or refractory angina symptoms.",
        "evidenceGrade": "Moderate"
      }
    ],
    "decisionSupportRules": [
      "Do not use exercise ECG (treadmill test) to diagnose or rule out angina.",
      "Distinguish typical angina (constricting retrosternal discomfort provoked by exertion and relieved by rest or GTN within 5 minutes)."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg95",
    "relatedIcd11Code": "BA40",
    "relatedSnomedId": "225566008",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG95"
  },
  {
    "guidelineId": "NG158",
    "title": "Venous Thromboembolic Diseases: Diagnosis, Management and Thrombophilia Testing",
    "clinicalDomain": "Cardiovascular",
    "version": "2023 Update (v1.3)",
    "publishedDate": "2020-03-26",
    "lastUpdated": "2023-08-02",
    "targetPopulation": "Adults aged 18 and over with suspected or confirmed deep vein thrombosis (DVT) or pulmonary embolism (PE)",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Standardized two-level Wells score triage, D-dimer testing, diagnostic imaging (proximal leg ultrasound or CT pulmonary angiography), and DOAC anticoagulation for at least 3 months.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Clinical Probability Assessment (Wells Score)",
        "recommendation": "Assess clinical probability using the two-level DVT or PE Wells score to categorize as likely or unlikely.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Diagnostic Imaging & Interim Anticoagulation",
        "recommendation": "For DVT likely: perform proximal leg compression ultrasound within 4 hours; if delayed, give interim therapeutic dose DOAC. For PE likely: perform CTPA.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "First-Line Anticoagulation Therapy",
        "recommendation": "Offer apixaban or rivaroxaban as first-line treatment for confirmed DVT or PE. Continue anticoagulation for at least 3 months for provoked VTE.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Unprovoked VTE & Cancer Screening",
        "recommendation": "Investigate adults with unprovoked VTE for underlying occult cancer with physical examination, chest X-ray, and routine blood tests.",
        "evidenceGrade": "Moderate"
      }
    ],
    "decisionSupportRules": [
      "Do not use D-dimer testing alone to rule out VTE if the clinical probability score is \"likely\".",
      "Offer extended anticoagulation beyond 3 months for unprovoked VTE if bleeding risk is low."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng158",
    "relatedIcd11Code": "BD71",
    "relatedSnomedId": "59282003",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG158"
  },
  {
    "guidelineId": "NG89",
    "title": "Venous Thromboembolism in Over 16s: Reducing the Risk of Hospital-Acquired DVT",
    "clinicalDomain": "Cardiovascular",
    "version": "2020 Update (v1.2)",
    "publishedDate": "2018-03-21",
    "lastUpdated": "2020-08-13",
    "targetPopulation": "People aged 16 and over admitted to hospital for surgery or acute medical illness",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Systematic VTE risk and bleeding risk assessment on hospital admission, mechanical prophylaxis (anti-embolism stockings, intermittent pneumatic compression), and pharmacological thromboprophylaxis with LMWH.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Mandatory Admission Risk Assessment",
        "recommendation": "Assess all patients on admission to identify their risk of VTE and risk of bleeding using an approved national VTE risk assessment tool.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Mechanical Thromboprophylaxis",
        "recommendation": "Offer mechanical prophylaxis (intermittent pneumatic compression devices or anti-embolism stockings) to surgical and high-risk medical inpatients from admission.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Pharmacological Prophylaxis (LMWH / Fondaparinux)",
        "recommendation": "Start low-molecular-weight heparin (LMWH) for acute medical inpatients expected to have ongoing significantly reduced mobility, continuing for a minimum of 7 days.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Extended Prophylaxis After Major Orthopedic Surgery",
        "recommendation": "Provide extended thromboprophylaxis (28–35 days for elective total hip replacement; 14 days for knee replacement) with DOACs or LMWH.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Re-assess VTE and bleeding risk within 24 hours of admission and whenever the clinical situation changes.",
      "Withhold pharmacological thromboprophylaxis if active bleeding, severe thrombocytopenia (platelets < 50), or acute stroke."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng89",
    "relatedIcd11Code": "BD71",
    "relatedSnomedId": "59282003",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG89"
  },
  {
    "guidelineId": "NG208",
    "title": "Heart Valve Disease Presenting in Adults: Investigation and Management",
    "clinicalDomain": "Cardiovascular",
    "version": "2021 Update (v1.0)",
    "publishedDate": "2021-11-17",
    "lastUpdated": "2021-11-17",
    "targetPopulation": "Adults aged 18 and over with suspected or confirmed aortic stenosis, aortic regurgitation, mitral regurgitation, or tricuspid regurgitation",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Auscultation and murmur evaluation, rapid transthoracic echocardiography (TTE), surgical aortic valve replacement (SAVR) versus transcatheter aortic valve implantation (TAVI), and transcatheter edge-to-edge repair (TEER).",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Clinical Auscultation & Echocardiography",
        "recommendation": "Perform transthoracic echocardiography (TTE) for adults with an unexplained heart murmur and symptoms (dyspnea, syncope, angina) or signs of heart failure.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Aortic Stenosis Intervention Evaluation",
        "recommendation": "Offer surgical aortic valve replacement (SAVR) for adults with severe symptomatic aortic stenosis who are at low or intermediate surgical risk. Offer TAVI if aged ≥ 75 or high surgical risk.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Mitral Regurgitation Management",
        "recommendation": "Offer surgical mitral valve repair (preferable to replacement) for symptomatic severe primary mitral regurgitation.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Surveillance & Monitoring",
        "recommendation": "Perform annual clinical review and surveillance echocardiogram every 1 to 2 years for asymptomatic severe valve disease.",
        "evidenceGrade": "Moderate"
      }
    ],
    "decisionSupportRules": [
      "Do not prescribe medical therapy as a substitute for surgical or transcatheter intervention in symptomatic severe aortic stenosis.",
      "Maintain antimicrobial prophylaxis advice against infective endocarditis according to NICE CG64."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng208",
    "relatedIcd11Code": "BB20",
    "relatedSnomedId": "48724000",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG208"
  },
  {
    "guidelineId": "NG203",
    "title": "Chronic Kidney Disease: Assessment and Management",
    "clinicalDomain": "Renal & Urology",
    "version": "2024 Update (v1.5)",
    "publishedDate": "2021-08-25",
    "lastUpdated": "2024-05-15",
    "targetPopulation": "Adults aged 18 and over with or at risk of developing chronic kidney disease",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Systematic pathway for staging CKD based on eGFR (G1–G5) and urine ACR (A1–A3), KDIGO risk stratification, blood pressure optimization, and nephroprotective SGLT2 inhibitor prescribing.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Dual-Marker Staging & Diagnosis",
        "recommendation": "Stage CKD using both creatinine-based eGFR (G stages 1-5) and urine albumin-to-creatinine ratio (uACR categories A1-A3). Recheck within 3 months to confirm chronicity.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Blood Pressure & Renin-Angiotensin Blockade",
        "recommendation": "Target BP < 140/90 mmHg (or < 130/80 mmHg if uACR ≥ 70 mg/mmol). Prescribe an ACE inhibitor or ARB if uACR ≥ 30 mg/mmol or if CKD is paired with diabetes.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "SGLT2 Inhibitor Renoprotection",
        "recommendation": "Offer an SGLT2 inhibitor (dapagliflozin or empagliflozin) for adults with CKD and uACR ≥ 22.6 mg/mmol (with or without type 2 diabetes).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Specialist Nephrology Referral Criteria",
        "recommendation": "Refer to specialist nephrology if 5-year risk of kidney failure > 5% (using 4-variable KFRE), sustained eGFR decline ≥ 25%, or uACR ≥ 70 mg/mmol.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Accept up to a 30% drop in eGFR or 30% rise in serum creatinine within 4 weeks of starting ACEi/ARB before considering drug cessation.",
      "Check serum potassium regularly; avoid combining ACE inhibitor and ARB together.",
      "Screen for metabolic complications: anemia of CKD, acidosis (bicarbonate), and mineral bone disorder."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng203",
    "relatedIcd11Code": "GB61",
    "relatedSnomedId": "709044004",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG203"
  },
  {
    "guidelineId": "NG148",
    "title": "Acute Kidney Injury: Prevention, Detection and Management",
    "clinicalDomain": "Renal & Urology",
    "version": "2023 Update (v1.2)",
    "publishedDate": "2019-12-18",
    "lastUpdated": "2023-08-30",
    "targetPopulation": "Adults, children, and young people in hospital or primary care with or at risk of acute kidney injury",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Standardized AKI detection algorithm (KDIGO rise in creatinine ≥ 26 mcmol/L within 48h or 50% rise over baseline), emergency urinary tract ultrasound within 24h, and medication suspension (STOP ACEi/ARBs/NSAIDs).",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Automated Biochemical Detection",
        "recommendation": "Detect AKI using automated electronic alert algorithms tracking serum creatinine against historical baseline (KDIGO stage 1, 2, or 3).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Volume Optimization & Medication Review",
        "recommendation": "Assess fluid status clinically and give intravenous crystalloids if hypovolemic. Temporarily suspend nephrotoxic and renally cleared drugs (ACEi, ARB, NSAIDs, metformin).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Renal Tract Ultrasound",
        "recommendation": "Perform urgent ultrasound of the urinary tract within 24 hours if the cause of AKI is not identified or if urinary obstruction is suspected.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Nephrology Referral Criteria",
        "recommendation": "Refer immediately to nephrology for stage 3 AKI, refractory hyperkalemia, pulmonary edema, systemic vasculitis, or lack of response to fluid resuscitation.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not routinely use loop diuretics to treat AKI unless there is overt fluid overload.",
      "Re-check serum creatinine 24 to 48 hours after starting treatment and prior to hospital discharge."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng148",
    "relatedIcd11Code": "GB60",
    "relatedSnomedId": "14669001",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG148"
  },
  {
    "guidelineId": "NG112",
    "title": "Lower Urinary Tract Symptoms in Men: Management (BPH)",
    "clinicalDomain": "Renal & Urology",
    "version": "2021 Update (v1.3)",
    "publishedDate": "2010-05-19",
    "lastUpdated": "2021-06-23",
    "targetPopulation": "Men aged 18 and over with voiding and storage lower urinary tract symptoms",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "IPSS symptom scoring, urinary flow and post-void residual volume testing, alpha-blocker therapy (tamsulosin), 5-alpha reductase inhibitors (finasteride), and minimally invasive surgical referral (TURP, HoLEP, UroLift).",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Baseline Evaluation & PSA Counseling",
        "recommendation": "Perform digital rectal examination (DRE), urine dipstick, and International Prostate Symptom Score (IPSS). Counsel on PSA testing to rule out prostate cancer.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Alpha-Blocker First-Line Therapy",
        "recommendation": "Offer an alpha-blocker (tamsulosin, alfuzosin) for moderate-to-severe lower urinary tract voiding symptoms.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "5-Alpha Reductase Inhibitor Addition",
        "recommendation": "Offer a 5-alpha reductase inhibitor (finasteride, dutasteride) to men with prostate enlargement (> 30g or PSA > 1.4 ng/mL) to reduce risk of acute urinary retention.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Surgical Interventions",
        "recommendation": "Offer transurethral resection of the prostate (TURP), holmium laser enucleation (HoLEP), or minimally invasive implants (UroLift) if medical therapy fails.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "5-alpha reductase inhibitors require 3 to 6 months of continuous therapy before symptom improvement occurs.",
      "Review prostate symptoms at 4 to 6 weeks after starting an alpha-blocker."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng112",
    "relatedIcd11Code": "GA90",
    "relatedSnomedId": "266569009",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG112"
  },
  {
    "guidelineId": "NG123",
    "title": "Urinary Incontinence and Pelvic Organ Prolapse in Women: Management",
    "clinicalDomain": "Renal & Urology",
    "version": "2021 Update (v1.2)",
    "publishedDate": "2019-04-02",
    "lastUpdated": "2021-06-24",
    "targetPopulation": "Women aged 18 and over with stress urinary incontinence, urgency incontinence, or pelvic organ prolapse",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Bladder diary analysis, supervised pelvic floor muscle training (PFMT) for at least 3 months, bladder retraining, antimuscarinics or mirabegron for urgency incontinence, and colposuspension or autologous sling surgery.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Classification & Bladder Diary",
        "recommendation": "Categorize incontinence as stress, urgency, or mixed using a 3-day frequency-volume bladder diary and physical examination.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Supervised Pelvic Floor Training",
        "recommendation": "Offer a trial of supervised pelvic floor muscle training (PFMT) of at least 3 months duration as first-line treatment for women with stress or mixed UI.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Pharmacotherapy for Overactive Bladder",
        "recommendation": "Offer bladder retraining for at least 6 weeks; if symptoms persist, offer an anticholinergic drug or beta-3 agonist (mirabegron).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Surgical Referral Criteria",
        "recommendation": "Consider non-mesh surgical procedures (colposuspension, autologous rectus fascial sling) or botulinum toxin A bladder injections if conservative measures fail.",
        "evidenceGrade": "Moderate"
      }
    ],
    "decisionSupportRules": [
      "Do not routinely use synthetic mesh tape for stress urinary incontinence in women.",
      "Review anticholinergic medication efficacy and cognitive side effects at 4 weeks and every 6 to 12 months."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng123",
    "relatedIcd11Code": "MF50",
    "relatedSnomedId": "165232002",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG123"
  },
  {
    "guidelineId": "NG109",
    "title": "Urinary Tract Infection (Lower): Antimicrobial Prescribing",
    "clinicalDomain": "Renal & Urology",
    "version": "2023 Update (v1.3)",
    "publishedDate": "2018-10-31",
    "lastUpdated": "2023-03-24",
    "targetPopulation": "Adults and children with suspected acute uncomplicated lower urinary tract infection (cystitis)",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Antimicrobial prescribing stewardship algorithm: first-line nitrofurantoin 100 mg MR twice daily for 3 days in women (7 days in men), second-line trimethoprim or pivmecillinam, and midstream urine culture.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Diagnostic Triage & Dipstick",
        "recommendation": "Diagnose uncomplicated UTI in non-pregnant women under 65 with 2 or more key symptoms (dysuria, urgency, frequency) without needing routine urine dipstick.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "First-Line Antibiotic Choice",
        "recommendation": "Prescribe nitrofurantoin 100 mg modified-release twice daily for 3 days in non-pregnant women (7 days in men or if pregnant).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Second-Line Alternative Selection",
        "recommendation": "Offer trimethoprim (200 mg twice daily) or pivmecillinam (400 mg initial then 200 mg three times daily) if nitrofurantoin is contraindicated or eGFR < 45 mL/min.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Urine Culture & Safety Netting",
        "recommendation": "Send a midstream urine (MSU) culture for men, pregnant women, children, people with recurrent UTI, or treatment failure.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Avoid nitrofurantoin if eGFR is less than 45 mL/min due to lack of efficacy and risk of peripheral neuropathy.",
      "Advise patients to seek urgent medical attention if systemic symptoms develop (fever, rigors, flank pain)."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng109",
    "relatedIcd11Code": "GC00",
    "relatedSnomedId": "68566005",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG109"
  },
  {
    "guidelineId": "NG111",
    "title": "Pyelonephritis (Acute): Antimicrobial Prescribing",
    "clinicalDomain": "Renal & Urology",
    "version": "2022 Update (v1.2)",
    "publishedDate": "2018-10-31",
    "lastUpdated": "2022-09-15",
    "targetPopulation": "Adults, children, and young people with suspected acute upper urinary tract infection (pyelonephritis)",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Emergency assessment for sepsis, mandatory urine culture, oral ciprofloxacin or co-amoxiclav for outpatient management, and intravenous ceftriaxone or gentamicin for hospitalized patients.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Severity Triage & Hospitalization Decision",
        "recommendation": "Assess immediately for signs of sepsis, hemodynamic instability, pregnancy, or dehydration. Admit to hospital if severely unwell or unable to take oral fluids.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "First-Line Oral Antibiotics (Outpatients)",
        "recommendation": "Offer oral cefalexin (500 mg 3 times daily for 7 to 10 days) or ciprofloxacin (500 mg twice daily for 7 days) as first-line outpatient therapy.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "First-Line Intravenous Antibiotics (Inpatients)",
        "recommendation": "Administer intravenous ceftriaxone (1g to 2g daily) or co-amoxiclav with gentamicin for hospitalized acute pyelonephritis.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Microbiological Review & Step-Down",
        "recommendation": "Review antimicrobial therapy within 48 hours in light of MSU sensitivities and switch from IV to oral therapy as soon as clinical improvement occurs.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Always send a midstream urine sample for culture and sensitivity before starting antibiotics.",
      "Order renal ultrasound or CT scan if fever persists beyond 72 hours to exclude perinephric abscess or obstruction."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng111",
    "relatedIcd11Code": "GB50",
    "relatedSnomedId": "45816000",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG111"
  },
  {
    "guidelineId": "NG118",
    "title": "Renal and Pancreatic Transplantation: Management",
    "clinicalDomain": "Renal & Urology",
    "version": "2021 Update (v1.1)",
    "publishedDate": "2019-02-14",
    "lastUpdated": "2021-03-10",
    "targetPopulation": "Adults and children who are candidates for or recipients of kidney or pancreas transplants",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Transplant assessment, immunosuppression induction with basiliximab and methylprednisolone, triple maintenance immunosuppression (tacrolimus, MMF, steroid), and therapeutic drug monitoring.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Pre-transplant Evaluation",
        "recommendation": "Assess cardiovascular fitness, immunological HLA sensitization, and virology (CMV, EBV, BK virus) prior to placing on transplant waiting list.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Induction Immunosuppression",
        "recommendation": "Administer IL-2 receptor antagonist (basiliximab) and corticosteroids as induction therapy at the time of renal transplantation.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Maintenance Immunosuppression",
        "recommendation": "Maintain on calcineurin inhibitor (tacrolimus) and an antiproliferative agent (mycophenolate mofetil) with therapeutic drug trough level monitoring.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Allograft Surveillance",
        "recommendation": "Monitor serum creatinine and urine protein regularly; perform urgent percutaneous allograft biopsy for unexplained graft dysfunction to rule out rejection.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Monitor whole blood tacrolimus trough levels closely to balance rejection prevention against nephrotoxicity.",
      "Provide CMV prophylaxis (valganciclovir) for high-risk donor positive / recipient negative transplants."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng118",
    "relatedIcd11Code": "QA01",
    "relatedSnomedId": "70536003",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG118"
  },
  {
    "guidelineId": "NG80",
    "title": "Asthma: Diagnosis, Monitoring and Chronic Asthma Management",
    "clinicalDomain": "Respiratory",
    "version": "2023 Update (v1.3)",
    "publishedDate": "2017-11-29",
    "lastUpdated": "2023-03-22",
    "targetPopulation": "Adults, young people, and children aged 5 and over with suspected or confirmed asthma",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Objective diagnostic testing pathway incorporating Fractional Exhaled Nitric Oxide (FeNO) and spirometry with bronchodilator reversibility, followed by step-wise inhaled corticosteroid (ICS) therapy.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Objective Diagnostic Testing",
        "recommendation": "Perform spirometry with bronchodilator reversibility (BDR) and measure fractional exhaled nitric oxide (FeNO). A FeNO level ≥ 40 ppb in adults indicates eosinophilic airway inflammation.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Step 1 Initial Maintenance Therapy",
        "recommendation": "Offer low-dose inhaled corticosteroid (ICS) plus short-acting beta-2 agonist (SABA) as required, or pediatric equivalent based on age.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Step 2 Maintenance and Reliever (MART)",
        "recommendation": "If symptoms persist on low-dose ICS, offer a leukotriene receptor antagonist (LTRA) or switch to combined low-dose ICS/LABA (or MART regimen).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Step 3 Specialist Referral for Severe Asthma",
        "recommendation": "Refer patients with persistent symptoms or frequent exacerbations despite high-dose ICS/LABA for biologic therapy evaluation (e.g. anti-IgE, anti-IL5).",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Assess inhaler technique at every clinical review before escalating pharmacotherapy.",
      "Provide a written Personalized Asthma Action Plan (PAAP) to every patient.",
      "Arrange an urgent face-to-face review within 48 hours following any hospital discharge or acute exacerbation."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng80",
    "relatedIcd11Code": "CA23",
    "relatedSnomedId": "195967001",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG80"
  },
  {
    "guidelineId": "NG115",
    "title": "Chronic Obstructive Pulmonary Disease in Over 16s: Diagnosis and Management",
    "clinicalDomain": "Respiratory",
    "version": "2023 Update (v1.5)",
    "publishedDate": "2018-12-05",
    "lastUpdated": "2023-06-14",
    "targetPopulation": "People aged 16 and over with COPD",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Post-bronchodilator spirometry (FEV1/FVC < 0.70), smoking cessation support, dual bronchodilator therapy (LAMA + LABA), pulmonary rehabilitation, and inhaled triple therapy.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Diagnostic Post-Bronchodilator Spirometry",
        "recommendation": "Confirm diagnosis with post-bronchodilator spirometry showing FEV1/FVC < 0.70 in an individual over 35 with risk factors (smoking history) and breathlessness.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "First-Line Inhaled Bronchodilators",
        "recommendation": "Offer a short-acting bronchodilator (SABA or SAMA) as needed. If daily symptoms persist, prescribe combined long-acting muscarinic antagonist + long-acting beta-2 agonist (LAMA + LABA).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Inhaled Triple Therapy Escalation",
        "recommendation": "Add an inhaled corticosteroid (LAMA + LABA + ICS triple therapy) if the patient has persistent exacerbations and blood eosinophil count ≥ 300 cells/mcL.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Pulmonary Rehabilitation & Long-Term Oxygen",
        "recommendation": "Offer pulmonary rehabilitation to all people with COPD who are functionally limited by breathlessness (MRC dyspnea scale ≥ 3).",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Offer smoking cessation pharmacotherapy (varenicline, bupropion, NRT) at every clinical encounter.",
      "Prescribe oral prednisolone 30 mg daily for 5 days and antibiotics for acute exacerbations with purulent sputum."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng115",
    "relatedIcd11Code": "CA22",
    "relatedSnomedId": "13645005",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG115"
  },
  {
    "guidelineId": "NG138",
    "title": "Pneumonia in Adults: Diagnosis and Management",
    "clinicalDomain": "Respiratory",
    "version": "2023 Update (v1.4)",
    "publishedDate": "2014-12-03",
    "lastUpdated": "2023-04-12",
    "targetPopulation": "Adults aged 18 and over with community-acquired pneumonia (CAP) or hospital-acquired pneumonia (HAP)",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Point-of-care C-reactive protein (CRP) testing, CURB-65 severity scoring, 5-day antibiotic courses (amoxicillin for low severity, co-amoxiclav + clarithromycin for high severity), and 6-week follow-up chest X-ray.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Point-of-Care CRP & Diagnostic Triage",
        "recommendation": "Consider point-of-care CRP testing in primary care if clinical diagnosis of pneumonia is uncertain (do not offer antibiotics if CRP < 20 mg/L; offer if CRP > 100 mg/L).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Severity Stratification (CURB-65)",
        "recommendation": "Calculate CURB-65 score in hospital (CRB-65 in primary care). Score 0: treat at home; Score 1–2: consider hospital admission; Score ≥ 3: urgent inpatient treatment.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Targeted Antibiotic Regimen",
        "recommendation": "Low severity: amoxicillin 500 mg 3 times daily for 5 days. Moderate/high severity: dual therapy with IV co-amoxiclav and oral clarithromycin.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Convalescence & Repeat Chest X-Ray",
        "recommendation": "Arrange a follow-up chest X-ray at 6 weeks for smokers or patients aged over 50 to confirm radiographic resolution and rule out underlying malignancy.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Stop antibiotics after 5 days if the patient has been afebrile for 48 hours and clinically stable.",
      "Perform blood cultures and sputum microbiological tests for all moderate-to-high severity CAP."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng138",
    "relatedIcd11Code": "CA40",
    "relatedSnomedId": "233604007",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG138"
  },
  {
    "guidelineId": "NG191",
    "title": "COVID-19 Rapid Guideline: Managing COVID-19",
    "clinicalDomain": "Respiratory",
    "version": "2024 Update (v2.8)",
    "publishedDate": "2021-03-23",
    "lastUpdated": "2024-03-15",
    "targetPopulation": "Adults and children with suspected or confirmed acute COVID-19",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Pulse oximetry stratification, antiviral therapies (nirmatrelvir/ritonavir [Paxlovid], remdesivir), dexamethasone for oxygen-dependent inpatients, and IL-6 inhibitors (tocilizumab).",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Severity Stratification by Pulse Oximetry",
        "recommendation": "Assess resting oxygen saturation (SpO2). Provide remote home pulse oximetry monitoring (virtual ward) for high-risk patients; admit if SpO2 falls below 93% on room air.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Targeted Outpatient Antiviral Therapy",
        "recommendation": "Offer nirmatrelvir plus ritonavir (Paxlovid) or remdesivir within 5 to 7 days of symptom onset for non-hospitalized individuals at highest risk of severe disease.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Corticosteroids for Oxygen-Dependent Inpatients",
        "recommendation": "Administer oral or intravenous dexamethasone 6 mg once daily for up to 10 days for patients requiring supplemental oxygen or mechanical ventilation.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Immunomodulator Escalation (IL-6 Inhibitors)",
        "recommendation": "Add tocilizumab or sarilumab intravenously within 24 to 48 hours of starting dexamethasone for patients with systemic inflammation (CRP ≥ 75 mg/L) requiring escalating oxygen.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not routinely use antibiotics unless there is clear microbiological or radiological evidence of secondary bacterial pneumonia.",
      "Offer prophylactic dose low-molecular-weight heparin (LMWH) for all hospitalized adult COVID-19 patients."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng191",
    "relatedIcd11Code": "RA01",
    "relatedSnomedId": "840539006",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG191"
  },
  {
    "guidelineId": "NG202",
    "title": "Obstructive Sleep Apnoea / Hypopnoea Syndrome and Obesity Hypoventilation in Over 16s",
    "clinicalDomain": "Respiratory",
    "version": "2021 Update (v1.0)",
    "publishedDate": "2021-08-20",
    "lastUpdated": "2021-08-20",
    "targetPopulation": "People aged 16 and over with suspected OSAHS, OHS, or COPD-OSAHS overlap syndrome",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Epworth Sleepiness Scale assessment, home sleep apnea testing / polygraphy, continuous positive airway pressure (CPAP) first-line therapy, and lifestyle/weight management.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Clinical Symptom Evaluation",
        "recommendation": "Evaluate witnessed apneas, loud snoring, morning headaches, and daytime sleepiness using the Epworth Sleepiness Scale (ESS).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Home Respiratory Polygraphy",
        "recommendation": "Offer home sleep testing (respiratory polygraphy measuring oxygen saturation, airflow, and respiratory effort) to determine the apnea-hypopnea index (AHI).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "CPAP Therapy First-Line",
        "recommendation": "Offer continuous positive airway pressure (CPAP) as first-line treatment for adults with moderate or severe symptomatic OSAHS (AHI ≥ 15 events/hour).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Mandibular Advancement Splints",
        "recommendation": "Consider customized mandibular advancement splints (MAS) for patients with mild-to-moderate OSAHS who cannot tolerate CPAP.",
        "evidenceGrade": "Moderate"
      }
    ],
    "decisionSupportRules": [
      "Advise patients of their legal duty to notify driver licensing authorities (e.g. DVLA) if they have excessive sleepiness impacting driving.",
      "Check daytime arterial blood gas (ABG) or venous bicarbonate to screen for obesity hypoventilation syndrome if BMI ≥ 35."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng202",
    "relatedIcd11Code": "CB41",
    "relatedSnomedId": "78275009",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG202"
  },
  {
    "guidelineId": "CG163",
    "title": "Idiopathic Pulmonary Fibrosis in Adults: Diagnosis and Management",
    "clinicalDomain": "Respiratory",
    "version": "2017 Update (v1.2)",
    "publishedDate": "2013-06-12",
    "lastUpdated": "2017-05-18",
    "targetPopulation": "Adults aged 18 and over with suspected or confirmed idiopathic pulmonary fibrosis (IPF)",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "High-resolution CT (HRCT) demonstrating usual interstitial pneumonia (UIP) pattern, multidisciplinary team (MDT) consensus diagnosis, antifibrotic pharmacotherapy (pirfenidone / nintedanib), and pulmonary rehab.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Clinical Suspicion & Auscultation",
        "recommendation": "Suspect IPF in adults aged over 50 with insidious progressive breathlessness on exertion and persistent bilateral dry inspiratory crackles (\"Velcro crackles\").",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "High-Resolution Computed Tomography (HRCT)",
        "recommendation": "Perform high-resolution CT of the chest. A definite usual interstitial pneumonia (UIP) pattern with subpleural basal reticulation and honeycombing confirms diagnosis without lung biopsy.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Antifibrotic Medical Therapy",
        "recommendation": "Offer pirfenidone or nintedanib for adults with confirmed IPF and forced vital capacity (FVC) between 50% and 80% predicted to slow lung function decline.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Supportive Care & Transplant Assessment",
        "recommendation": "Provide pulmonary rehabilitation, ambulatory oxygen therapy for exertion, and refer eligible patients early for lung transplantation assessment.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not offer combination therapy with prednisolone, azathioprine, and N-acetylcysteine (proven harmful in PANTHER trial).",
      "Monitor full blood count and liver transaminases monthly for the first 6 months of antifibrotic therapy."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg163",
    "relatedIcd11Code": "CB03",
    "relatedSnomedId": "51615001",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG163"
  },
  {
    "guidelineId": "NG139",
    "title": "Bronchiolitis in Children: Diagnosis and Management",
    "clinicalDomain": "Respiratory",
    "version": "2021 Update (v1.2)",
    "publishedDate": "2015-06-01",
    "lastUpdated": "2021-08-11",
    "targetPopulation": "Infants and children under 2 years with acute bronchiolitis (most commonly RSV)",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Clinical diagnostic criteria (coryzal prodrome followed by cough, tachypnea, and fine inspiratory crackles), oxygen supplementation (SpO2 < 92%), enteral feeding support, and avoidance of unnecessary medications.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Clinical Diagnosis",
        "recommendation": "Diagnose bronchiolitis based on 1- to 3-day history of viral coryza followed by persistent cough, tachypnea, chest recession, and bilateral crackles on auscultation.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Hospital Admission Red Flags",
        "recommendation": "Admit if SpO2 < 92% on air, respiratory rate > 60 breaths/min, persistent feeding difficulty (< 50% normal fluid intake), or presence of apnea.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Supportive Oxygen & Fluid Therapy",
        "recommendation": "Provide humidified supplemental oxygen via nasal cannula if SpO2 < 92%. Give fluids by nasogastric tube if the infant cannot maintain oral hydration.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "De-implementation of Ineffective Treatments",
        "recommendation": "Do not administer antibiotics, inhaled bronchodilators, nebulized adrenaline, or systemic corticosteroids, as extensive evidence shows no clinical benefit.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not routinely perform chest X-rays; clinical findings guide diagnosis and management.",
      "Palivizumab immunoprophylaxis is recommended for high-risk preterm infants with chronic lung disease."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng139",
    "relatedIcd11Code": "CA41",
    "relatedSnomedId": "26456008",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG139"
  },
  {
    "guidelineId": "NG130",
    "title": "Ulcerative Colitis: Management",
    "clinicalDomain": "Gastroenterology",
    "version": "2019 Update (v1.1)",
    "publishedDate": "2019-05-03",
    "lastUpdated": "2019-05-03",
    "targetPopulation": "Adults, children, and young people with ulcerative colitis",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Fecal calprotectin monitoring, topical/oral aminosalicylates (mesalazine) for mild-to-moderate proctitis and colitis, oral corticosteroids for acute relapses, and biologic therapies (anti-TNF, vedolizumab, tofacitinib) for refractory disease.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Induction of Remission (Mild-to-Moderate)",
        "recommendation": "Offer topical aminosalicylate (suppository or enema) as first-line therapy for proctitis. Add oral mesalazine for extensive disease.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Acute Flares & Corticosteroids",
        "recommendation": "Add oral prednisolone if aminosalicylates fail to induce remission within 4 weeks. Admit for IV hydrocortisone if acute severe colitis (Truelove & Witts criteria).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Maintenance of Remission",
        "recommendation": "Maintain lifelong oral and/or topical aminosalicylates. Consider azathioprine or mercaptopurine if patient has frequent relapses.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Biologic & Targeted Small Molecules",
        "recommendation": "Offer infliximab, adalimumab, vedolizumab, or tofacitinib for moderate-to-severe disease refractory to conventional immunosuppression.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Perform emergency flexible sigmoidoscopy and plain abdominal X-ray in acute severe colitis to rule out toxic megacolon.",
      "Provide regular surveillance colonoscopy starting 8 to 10 years after symptom onset to detect colorectal dysplasia."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng130",
    "relatedIcd11Code": "DD71",
    "relatedSnomedId": "64766004",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG130"
  },
  {
    "guidelineId": "NG129",
    "title": "Crohn's Disease: Management",
    "clinicalDomain": "Gastroenterology",
    "version": "2019 Update (v1.1)",
    "publishedDate": "2019-05-03",
    "lastUpdated": "2019-05-03",
    "targetPopulation": "Adults, children, and young people with Crohn's disease",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Oral prednisolone or budesonide for acute induction, exclusive enteral nutrition in children, azathioprine or methotrexate for maintenance, and anti-TNF biologics (infliximab/adalimumab) or ustekinumab for moderate-to-severe disease.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Induction of Remission",
        "recommendation": "Offer oral prednisolone (or oral budesonide for ileocecal disease) to induce remission. Offer exclusive enteral nutrition (EEN) as alternative first-line in children.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Maintenance Immunosuppression",
        "recommendation": "Offer azathioprine or mercaptopurine as monotherapy to maintain remission in patients with 2 or more flares in 12 months. Test TPMT before starting.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Biologic Therapy Escalation",
        "recommendation": "Offer infliximab or adalimumab for severe active Crohn's disease unresponsive to conventional therapy or for active fistulizing disease.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Surgical Referral",
        "recommendation": "Consider limited ileocecal resection early for stricturing terminal ileal disease as an alternative to prolonged immunosuppression.",
        "evidenceGrade": "Moderate"
      }
    ],
    "decisionSupportRules": [
      "Strongly emphasize smoking cessation; smoking doubles relapse rates and surgical recurrence in Crohn disease.",
      "Check thiopurine methyltransferase (TPMT) activity prior to starting azathioprine or 6-mercaptopurine."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng129",
    "relatedIcd11Code": "DD70",
    "relatedSnomedId": "34000006",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG129"
  },
  {
    "guidelineId": "NG20",
    "title": "Coeliac Disease: Recognition, Assessment and Management",
    "clinicalDomain": "Gastroenterology",
    "version": "2020 Update (v1.2)",
    "publishedDate": "2015-09-02",
    "lastUpdated": "2020-10-14",
    "targetPopulation": "People with suspected or confirmed coeliac disease",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "High-risk group serological screening (anti-tTG IgA with total IgA), mandatory continuous gluten intake prior to testing, duodenal biopsy confirmation, and strict lifelong gluten-free diet.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Serological Screening Test",
        "recommendation": "Test for total immunoglobulin A (IgA) and IgA tissue transglutaminase (tTG). If IgA-deficient, test for IgG endomysial or IgG deamidated gliadin antibodies.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Pre-Test Gluten Consumption Advice",
        "recommendation": "Instruct patients to consume gluten in more than one meal a day for at least 6 weeks before undergoing blood testing or endoscopic biopsy.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Endoscopic Duodenal Biopsy",
        "recommendation": "Refer adults with positive serology for upper GI endoscopy and multiple duodenal biopsies (Marsh criteria: villous atrophy, crypt hyperplasia).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Lifelong Gluten-Free Diet & Monitoring",
        "recommendation": "Provide expert dietitian consultation to establish a strict lifelong gluten-free diet. Check annual adherence and screen for osteoporosis.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Offer coeliac screening to all individuals with type 1 diabetes or autoimmune thyroid disease.",
      "Offer DEXA scan to assess bone mineral density in adults at diagnosis."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng20",
    "relatedIcd11Code": "DA96.0",
    "relatedSnomedId": "396331005",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG20"
  },
  {
    "guidelineId": "CG61",
    "title": "Irritable Bowel Syndrome in Adults: Diagnosis and Management",
    "clinicalDomain": "Gastroenterology",
    "version": "2017 Update (v1.3)",
    "publishedDate": "2008-02-23",
    "lastUpdated": "2017-04-04",
    "targetPopulation": "Adults aged 18 and over presenting with symptoms suggestive of irritable bowel syndrome",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Positive diagnostic criteria (abdominal pain relieved by defecation or altered stool form), exclusion of red flags (calprotectin, celiac serology, FBC, ESR/CRP), dietary advice (low-FODMAP), and targeted pharmacotherapy (antispasmodics, linaclotide).",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Positive Diagnostic Criteria",
        "recommendation": "Diagnose IBS if the person has abdominal pain or discomfort that is either relieved by defecation or associated with altered bowel frequency/form for at least 6 months.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Exclude Organic Pathology",
        "recommendation": "Perform full blood count, ESR/CRP, coeliac serology, and fecal calprotectin to exclude anemia, inflammatory bowel disease, and celiac disease.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "First-Line Symptomatic Therapy",
        "recommendation": "Offer antispasmodics for cramps, loperamide for diarrhea, and ispaghula husk (soluble fiber) for constipation. Avoid insoluble fiber (wheat bran).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Second-Line Neuromodulators & Linaclotide",
        "recommendation": "Consider low-dose tricyclic antidepressants (amitriptyline 10 mg at night) as a second-line gut-brain neuromodulator for chronic pain.",
        "evidenceGrade": "Moderate"
      }
    ],
    "decisionSupportRules": [
      "Investigate urgently if \"red flags\" are present: unintentional weight loss, rectal bleeding, age > 50 with sudden bowel change, or family history of bowel cancer.",
      "Refer to registered dietitian for supervised low-FODMAP diet if first-line dietary advice fails."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg61",
    "relatedIcd11Code": "DD91.0",
    "relatedSnomedId": "10743008",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG61"
  },
  {
    "guidelineId": "CG184",
    "title": "Gastro-oesophageal Reflux Disease and Dyspepsia in Adults",
    "clinicalDomain": "Gastroenterology",
    "version": "2019 Update (v1.2)",
    "publishedDate": "2014-09-03",
    "lastUpdated": "2019-10-18",
    "targetPopulation": "Adults aged 18 and over with symptoms of heartburn, acid regurgitation, or dyspepsia",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Urgent endoscopy referral for red flags (dysphagia, upper GI bleeding, persistent vomiting), test-and-treat for Helicobacter pylori, full-dose proton pump inhibitor (PPI) for 4–8 weeks, and step-down to lowest effective dose.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Red Flag Alarm Features Screen",
        "recommendation": "Refer immediately (within 2 weeks) for upper GI endoscopy if the patient has dysphagia (difficulty swallowing) or is aged ≥ 55 with unexplained weight loss and dyspepsia.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Helicobacter Pylori \"Test and Treat\"",
        "recommendation": "Test for H. pylori using a stool antigen test or 13C-urea breath test. If positive, provide 7-day eradication triple therapy (PPI + amoxicillin + clarithromycin).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Empirical Proton Pump Inhibitor (PPI)",
        "recommendation": "Offer full-dose PPI (omeprazole 20 mg or lansoprazole 30 mg) for 4 to 8 weeks for severe heartburn or uninvestigated dyspepsia.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Maintenance & Step-Down Strategy",
        "recommendation": "Step down to on-demand low-dose PPI therapy once symptoms resolve to minimize long-term risks (hypomagnesemia, fractures, C. difficile).",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Stop PPI therapy for at least 2 weeks and antibiotics for 4 weeks before testing for H. pylori to avoid false negatives.",
      "Review long-term PPI therapy at least annually."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg184",
    "relatedIcd11Code": "DA22",
    "relatedSnomedId": "235595009",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG184"
  },
  {
    "guidelineId": "NG50",
    "title": "Cirrhosis in Over 16s: Assessment and Management",
    "clinicalDomain": "Gastroenterology",
    "version": "2023 Update (v1.2)",
    "publishedDate": "2016-07-06",
    "lastUpdated": "2023-09-20",
    "targetPopulation": "People aged 16 and over with suspected or confirmed cirrhosis",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Transient elastography (FibroScan) non-invasive staging, surveillance for hepatocellular carcinoma (ultrasound + AFP every 6 months), endoscopy for esophageal varices, and primary prophylaxis with non-selective beta-blockers.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Non-Invasive Fibrosis Assessment",
        "recommendation": "Offer transient elastography (FibroScan) or acoustic radiation force impulse (ARFI) imaging to diagnose cirrhosis in people with risk factors (excessive alcohol, chronic viral hepatitis, NAFLD).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Variceal Bleeding Screening & Prophylaxis",
        "recommendation": "Offer upper endoscopy to screen for gastroesophageal varices at diagnosis. Start carvedilol or propranolol, or endoscopic band ligation, if medium/large varices are present.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Liver Cancer Surveillance (HCC)",
        "recommendation": "Perform abdominal ultrasound (with or without serum alpha-fetoprotein [AFP]) every 6 months for surveillance of hepatocellular carcinoma in all patients with confirmed cirrhosis.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Ascites & Encephalopathy Management",
        "recommendation": "Manage ascites with spironolactone (adding furosemide if needed) and dietary sodium restriction. Prescribe lactulose and rifaximin for recurrent hepatic encephalopathy.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Calculate Child-Pugh and MELD scores to evaluate prognosis and prompt timely liver transplant referral.",
      "Perform diagnostic paracentesis on any cirrhotic patient admitted with ascites to rule out spontaneous bacterial peritonitis (SBP)."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng50",
    "relatedIcd11Code": "DB93",
    "relatedSnomedId": "19943007",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG50"
  },
  {
    "guidelineId": "NG49",
    "title": "Non-Alcoholic Fatty Liver Disease (NAFLD): Assessment and Management",
    "clinicalDomain": "Gastroenterology",
    "version": "2023 Update (v1.3)",
    "publishedDate": "2016-07-06",
    "lastUpdated": "2023-11-15",
    "targetPopulation": "People aged 18 and over with or at risk of non-alcoholic fatty liver disease (MASLD / MASH)",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "FIB-4 score and Enhanced Liver Fibrosis (ELF) blood testing to detect advanced liver fibrosis, lifestyle weight loss targets (7–10%), and consideration of vitamin E or pioglitazone for biopsy-proven MASH.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Detection & High-Risk Case Finding",
        "recommendation": "Screen for hepatic steatosis using abdominal ultrasound in adults with type 2 diabetes or metabolic syndrome.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Fibrosis Risk Stratification (ELF / FIB-4)",
        "recommendation": "Assess advanced fibrosis risk using the FIB-4 score or Enhanced Liver Fibrosis (ELF) blood test. Refer to hepatology if ELF score ≥ 10.51 or FIB-4 > 2.67.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Lifestyle & Weight Reduction Pillar",
        "recommendation": "Advise that a 7% to 10% weight loss improves steatohepatitis and reverses liver fibrosis. Encourage Mediterranean diet and avoidance of sugar-sweetened beverages.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Specialist Pharmacotherapy",
        "recommendation": "Consider pioglitazone or vitamin E in secondary care for adults with biopsy-confirmed non-alcoholic steatohepatitis (MASH / NASH).",
        "evidenceGrade": "Moderate"
      }
    ],
    "decisionSupportRules": [
      "Normal ALT/AST does not rule out advanced liver fibrosis in NAFLD.",
      "Re-assess fibrosis risk with ELF or FIB-4 every 3 years for low-risk patients."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng49",
    "relatedIcd11Code": "DB92",
    "relatedSnomedId": "235856003",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG49"
  },
  {
    "guidelineId": "CG165",
    "title": "Hepatitis B (Chronic): Diagnosis and Management",
    "clinicalDomain": "Gastroenterology",
    "version": "2017 Update (v1.2)",
    "publishedDate": "2013-06-26",
    "lastUpdated": "2017-02-28",
    "targetPopulation": "Adults, children, and young people with chronic hepatitis B infection",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "HBV DNA quantification and transient elastography assessment, peginterferon alfa-2a 48-week course, or oral nucleos(t)ide analogues (entecavir or tenofovir disoproxil) for viral suppression.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Initial Viral Load & Liver Staging",
        "recommendation": "Measure serum HBV DNA, HBeAg status, ALT, and perform transient elastography (FibroScan) to stage liver disease.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "First-Line Antiviral Selection",
        "recommendation": "Offer a 48-week course of peginterferon alfa-2a as initial treatment for adults with HBeAg-positive chronic hepatitis B and compensated liver disease.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Oral Nucleos(t)ide Analogue Therapy",
        "recommendation": "Offer entecavir or tenofovir disoproxil as first-line oral antivirals for patients who cannot tolerate peginterferon or who have cirrhosis.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "HCC Surveillance in Chronic HBV",
        "recommendation": "Offer 6-monthly liver ultrasound surveillance for hepatocellular carcinoma in adults with cirrhosis or high risk (e.g. African descent aged > 20, Asian men aged > 40).",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Never discontinue oral antivirals abruptly due to high risk of severe acute hepatitis flares.",
      "Check renal function (eGFR) and serum phosphate regularly in patients on tenofovir disoproxil."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg165",
    "relatedIcd11Code": "1E51.0",
    "relatedSnomedId": "61977001",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG165"
  },
  {
    "guidelineId": "NG71",
    "title": "Parkinson's Disease in Adults",
    "clinicalDomain": "Neurology & CNS",
    "version": "2017 Update (v1.1)",
    "publishedDate": "2017-07-19",
    "lastUpdated": "2017-07-19",
    "targetPopulation": "Adults with suspected or diagnosed Parkinson's disease",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Rapid referral to specialist movement disorder clinic (within 6 weeks), levodopa first-line for motor symptoms impacting quality of life, non-ergot dopamine agonists for early stages, and deep brain stimulation (DBS) for refractory motor fluctuations.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Specialist Clinical Referral",
        "recommendation": "Refer untreated suspected Parkinson's disease quickly (within 6 weeks) to a movement disorders specialist before starting antiparkinsonian medication.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "First-Line Motor Symptom Medication",
        "recommendation": "Offer levodopa as first-line therapy if motor symptoms affect daily quality of life. Consider non-ergot dopamine agonists or MAO-B inhibitors if symptoms do not impair life quality.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Management of Motor Fluctuations",
        "recommendation": "Add a dopamine agonist, MAO-B inhibitor (rasagiline), or COMT inhibitor (entacapone) as adjuvant therapy when motor fluctuations (on-off phenomena) develop.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Advanced Device Therapies (DBS / Apomorphine)",
        "recommendation": "Consider deep brain stimulation (DBS) of the subthalamic nucleus or continuous subcutaneous apomorphine infusion for refractory advanced motor complications.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not abruptly withdraw levodopa; sudden cessation risks acute akinesia and neuroleptic malignant-like syndrome.",
      "Warn patients and caregivers about impulse control disorders (gambling, hypersexuality, binge eating) associated with dopamine agonists."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng71",
    "relatedIcd11Code": "8A00.0",
    "relatedSnomedId": "49049000",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG71"
  },
  {
    "guidelineId": "NG217",
    "title": "Epilepsies in Children, Young People and Adults",
    "clinicalDomain": "Neurology & CNS",
    "version": "2022 Update (v1.1)",
    "publishedDate": "2022-04-27",
    "lastUpdated": "2022-04-27",
    "targetPopulation": "Children, young people, and adults with suspected or confirmed epilepsy",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Comprehensive assessment pathway: detailed eyewitness history, 12-lead ECG, electroencephalogram (EEG) and brain MRI, seizure-type specific antiseizure medications (ASMs), and emergency rescue buccal midazolam.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Specialist Evaluation & Diagnostic Workup",
        "recommendation": "Refer individuals after a first unprovoked seizure to an epilepsy specialist within 2 weeks. Order 12-lead ECG, standard EEG, and 3T brain MRI (epilepsy protocol).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Focal Seizures First-Line Pharmacotherapy",
        "recommendation": "Offer lamotrigine or levetiracetam as first-line monotherapy for adults and children with focal onset seizures.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Generalized Tonic-Clonic Seizures",
        "recommendation": "Offer sodium valproate (for males or females outside childbearing potential) or levetiracetam/lamotrigine as first-line treatment for generalized tonic-clonic seizures.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Refractory Epilepsy & Surgical Evaluation",
        "recommendation": "Refer patients whose seizures fail to respond to 2 tolerated and appropriate antiseizure medications to a comprehensive epilepsy center for surgical evaluation.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Sodium valproate is strictly contraindicated in female patients of childbearing potential unless enrolled in a Pregnancy Prevention Programme (valproate safety measures).",
      "Provide individualized written Sudden Unexpected Death in Epilepsy (SUDEP) counseling."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng217",
    "relatedIcd11Code": "8A60",
    "relatedSnomedId": "84757009",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG217"
  },
  {
    "guidelineId": "CG150",
    "title": "Headaches in Over 12s: Diagnosis and Management",
    "clinicalDomain": "Neurology & CNS",
    "version": "2021 Update (v1.3)",
    "publishedDate": "2012-09-19",
    "lastUpdated": "2021-12-17",
    "targetPopulation": "People aged 12 and over presenting with headache symptoms",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Clinical classification of tension-type headache, migraine, cluster headache, and medication overuse headache; triptan plus NSAID acute migraine therapy; propranolol or topiramate for migraine prophylaxis; and oxygen for cluster headache.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Primary Headache Classification",
        "recommendation": "Classify headache based on clinical history and headache diary into tension-type, migraine (with or without aura), or cluster headache after excluding red flags.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Acute Migraine Treatment",
        "recommendation": "Offer combination therapy with an oral triptan (e.g. sumatriptan 50–100 mg) and an NSAID (ibuprofen 400–600 mg or naproxen) or paracetamol at headache onset.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Migraine Prophylaxis",
        "recommendation": "Offer topiramate or propranolol for migraine prevention if migraines cause significant disability (≥ 2 attacks per month). Consider amitriptyline if comorbidities exist.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Medication Overuse Headache Management",
        "recommendation": "Instruct patients taking triptans/opioids ≥ 10 days/month or paracetamol/NSAIDs ≥ 15 days/month to abruptly stop the overused medication.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Topiramate is associated with fetal malformations; do not prescribe to women of childbearing potential without effective contraception.",
      "Treat acute cluster headache with 100% oxygen via non-rebreather mask (at least 12 L/min) and subcutaneous sumatriptan 6 mg."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg150",
    "relatedIcd11Code": "8A80",
    "relatedSnomedId": "37796009",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG150"
  },
  {
    "guidelineId": "NG97",
    "title": "Dementia: Assessment, Management and Support for People Living with Dementia",
    "clinicalDomain": "Neurology & CNS",
    "version": "2023 Update (v1.2)",
    "publishedDate": "2018-06-20",
    "lastUpdated": "2023-04-18",
    "targetPopulation": "People living with suspected or confirmed Alzheimer's, vascular dementia, DLB, or FTD",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Validated cognitive testing (e.g. MoCA, ACE-III), structural brain imaging (CT or MRI), acetylcholinesterase inhibitors (donepezil, rivastigmine, galantamine) for mild-to-moderate Alzheimer's disease, and memantine for moderate-to-severe disease.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Cognitive Assessment & Reversible Causes",
        "recommendation": "Perform validated cognitive testing (ACE-III or MoCA) and screen for reversible causes: FBC, ESR/CRP, biochemistry, calcium, thyroid function, and vitamin B12.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Structural Neuroimaging",
        "recommendation": "Offer structural neuroimaging (brain MRI preferred to assess medial temporal lobe atrophy) to exclude other cerebral pathologies and identify subtype.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Acetylcholinesterase Inhibitor Therapy",
        "recommendation": "Offer donepezil, rivastigmine, or galantamine as monotherapy for mild to moderate Alzheimer's disease and dementia with Lewy bodies (DLB).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Memantine Addition for Moderate-to-Severe",
        "recommendation": "Offer memantine as monotherapy for severe Alzheimer's disease or as an add-on to acetylcholinesterase inhibitors in moderate disease.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not prescribe antipsychotics for non-cognitive symptoms of dementia unless the person is severely distressed or at immediate risk of harm to themselves or others.",
      "Check baseline ECG before starting donepezil due to risk of bradycardia and heart block."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng97",
    "relatedIcd11Code": "6D80",
    "relatedSnomedId": "52448006",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG97"
  },
  {
    "guidelineId": "NG220",
    "title": "Multiple Sclerosis in Adults: Management",
    "clinicalDomain": "Neurology & CNS",
    "version": "2022 Update (v1.1)",
    "publishedDate": "2022-06-22",
    "lastUpdated": "2022-06-22",
    "targetPopulation": "Adults aged 18 and over with suspected or confirmed multiple sclerosis",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "McDonald criteria MRI imaging (dissemination in time and space), high-dose oral methylprednisolone for acute relapses, disease-modifying therapies (DMTs) for relapsing-remitting MS, and multidisciplinary symptom management.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Specialist Neurological Diagnosis (McDonald Criteria)",
        "recommendation": "Diagnose MS using brain and spinal cord MRI demonstrating dissemination in space and time; perform lumbar puncture for CSF oligoclonal bands if MRI is inconclusive.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Acute Relapse Treatment",
        "recommendation": "Offer oral methylprednisolone 0.5g daily for 5 days (or IV methylprednisolone 1g daily for 3 to 5 days) for acute relapses causing distressing disability.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Early Disease-Modifying Therapy (DMT)",
        "recommendation": "Refer to an MS specialist neurologist to initiate early disease-modifying therapies (e.g. ocrelizumab, natalizumab, fingolimod) to reduce relapse frequency and disability progression.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Symptom Management (Spasticity & Fatigue)",
        "recommendation": "Offer baclofen or gabapentin as first-line therapy for spasticity; offer supervised exercise programs and amantadine for MS-related fatigue.",
        "evidenceGrade": "Moderate"
      }
    ],
    "decisionSupportRules": [
      "Rule out concurrent infection (especially urinary tract infection) before treating a presumed acute MS relapse with steroids.",
      "Test for JC virus antibodies prior to starting natalizumab to stratify PML risk."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng220",
    "relatedIcd11Code": "8A40",
    "relatedSnomedId": "24700007",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG220"
  },
  {
    "guidelineId": "NG128",
    "title": "Stroke and Transient Ischaemic Attack in Over 16s: Diagnosis and Initial Management",
    "clinicalDomain": "Neurology & CNS",
    "version": "2022 Update (v1.3)",
    "publishedDate": "2019-05-01",
    "lastUpdated": "2022-04-14",
    "targetPopulation": "People aged 16 and over with suspected or confirmed acute stroke or TIA",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "FAST screening, urgent non-contrast brain CT within 1 hour, intravenous thrombolysis with alteplase within 4.5 hours, mechanical thrombectomy within 6 to 24 hours for large vessel occlusion, and immediate aspirin 300 mg.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Emergency Pre-Hospital Triage (FAST)",
        "recommendation": "Screen suspected stroke using Face-Arm-Speech-Time (FAST). Transfer immediately to a hyperacute stroke unit (HASU) with pre-alert notification.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Immediate Brain Imaging (Within 1 Hour)",
        "recommendation": "Perform non-contrast head CT immediately (and within 1 hour of arrival) to exclude intracranial hemorrhage prior to reperfusion therapy.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Thrombolysis & Mechanical Thrombectomy",
        "recommendation": "Administer IV alteplase within 4.5 hours of symptom onset for acute ischemic stroke. Offer mechanical thrombectomy within 6 hours (up to 24 hours with salvageable tissue).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Early Secondary Prevention & TIA Pathway",
        "recommendation": "Administer aspirin 300 mg daily for 2 weeks after excluding hemorrhage. Refer suspected TIA for urgent specialist evaluation within 24 hours.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not lower blood pressure acutely in ischemic stroke unless systolic BP > 220 mmHg or diastolic > 120 mmHg (or > 185/110 mmHg if candidate for thrombolysis).",
      "Maintain nil-by-mouth and perform formal swallow screening within 4 hours of admission before giving oral medications or fluids."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng128",
    "relatedIcd11Code": "8B11",
    "relatedSnomedId": "230690007",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG128"
  },
  {
    "guidelineId": "NG51",
    "title": "Sepsis: Recognition, Diagnosis and Early Management",
    "clinicalDomain": "Infections & Antimicrobial",
    "version": "2024 Update (v1.3)",
    "publishedDate": "2016-07-13",
    "lastUpdated": "2024-01-31",
    "targetPopulation": "Adults, children, and infants with suspected severe infection or sepsis",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "National Early Warning Score (NEWS2) risk stratification, rapid high-risk red flag identification, the \"Sepsis Six\" bundle delivered within 1 hour (blood cultures, broad-spectrum IV antibiotics, lactate, IV fluid bolus, oxygen, urine output monitoring).",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Stratification by NEWS2 / Red Flags",
        "recommendation": "Identify high-risk criteria: NEWS2 score ≥ 5 (or 3 in a single parameter), systolic BP ≤ 90 mmHg, heart rate > 130 bpm, respiratory rate ≥ 25, new altered mental state, or purpuric rash.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "The Sepsis Six Bundle (Within 1 Hour)",
        "recommendation": "Deliver the Sepsis Six within 60 minutes: take blood cultures, measure serum lactate, administer IV broad-spectrum antibiotics, give IV fluid bolus (30 mL/kg), give supplemental oxygen, and monitor urine output.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Fluid Resuscitation & Vasopressors",
        "recommendation": "Administer balanced crystalloids (500 mL over 15 minutes). If hypotension persists or lactate remains > 2 mmol/L, consult critical care for vasopressor initiation (noradrenaline).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Source Control & De-escalation",
        "recommendation": "Identify and control the source of infection promptly (drain abscesses, remove infected lines). Review antimicrobial spectrum within 48 hours to de-escalate.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not delay antibiotic administration for longer than 1 hour in patients with high-risk sepsis criteria.",
      "Serum lactate > 4 mmol/L indicates severe tissue hypoperfusion requiring immediate intensive care review."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng51",
    "relatedIcd11Code": "1G40",
    "relatedSnomedId": "91302008",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG51"
  },
  {
    "guidelineId": "NG15",
    "title": "Antimicrobial Stewardship: Systems and Processes for Effective Antimicrobial Medicine Use",
    "clinicalDomain": "Infections & Antimicrobial",
    "version": "2023 Update (v1.2)",
    "publishedDate": "2015-08-18",
    "lastUpdated": "2023-05-18",
    "targetPopulation": "Healthcare professionals, commissioners, and organizations prescribing antimicrobial medicines",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Antimicrobial stewardship governance, \"Start Smart - Then Focus\" audit, delayed prescribing strategies for self-limiting infections, avoiding broad-spectrum fluoroquinolones, and 48–72 hour clinical review.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Start Smart: Evidence-Based Prescribing",
        "recommendation": "Do not prescribe antimicrobials for viral or self-limiting infections. Adhere to local evidence-based formularies and document clinical indication, route, and planned duration in medical notes.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Delayed / Back-Up Prescribing Strategy",
        "recommendation": "Offer delayed (back-up) antibiotic prescriptions for acute uncomplicated respiratory tract infections (sore throat, otitis media, cough) with explicit safety-netting advice.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Then Focus: 48–72 Hour Review",
        "recommendation": "Review all intravenous and broad-spectrum antimicrobial prescriptions at 48 to 72 hours to decide: stop, switch IV to oral, change antibiotic based on microbiology, or continue.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Restricting High-Risk Antimicrobials",
        "recommendation": "Restrict the use of fluoroquinolones, cephalosporins, and co-amoxiclav to avoid driving Clostridioides difficile infection and multidrug resistance.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Every antibiotic prescription must specify an explicit stop date or review date.",
      "Avoid prescribing fluoroquinolones for mild or moderate infections due to risks of disabling tendon and neurological toxicity."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng15",
    "relatedIcd11Code": "QB50",
    "relatedSnomedId": "704323004",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG15"
  },
  {
    "guidelineId": "NG143",
    "title": "Fever in Under 5s: Assessment and Initial Management",
    "clinicalDomain": "Infections & Antimicrobial",
    "version": "2021 Update (v1.3)",
    "publishedDate": "2019-11-26",
    "lastUpdated": "2021-03-30",
    "targetPopulation": "Children under 5 years presenting with feverish illness",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "NICE traffic light system (green, amber, red) for serious illness risk stratification, core vital sign assessment, clean-catch urine sampling to rule out UTI, and emergency hospitalization criteria.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Traffic Light Risk Stratification",
        "recommendation": "Stratify child into Green (low risk), Amber (intermediate risk), or Red (high risk) based on color, activity, respiratory effort, circulation/hydration, and other signs.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Young Infant High-Risk Rule",
        "recommendation": "Regard any infant aged under 3 months with a temperature of 38.0°C or higher as Red (high risk of serious bacterial infection) requiring emergency pediatric admission.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Mandatory Urine Testing",
        "recommendation": "Perform clean-catch urine testing and culture on all children presenting with unexplained feverish illness to detect occult urinary tract infection.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Antipyretic Use & Hydration",
        "recommendation": "Use paracetamol or ibuprofen only if the child appears distressed; do not give antipyretic agents solely to reduce body temperature or prevent febrile convulsions.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not under-dress or over-wrap a feverish child, and do not sponge with cold water.",
      "Non-blanching rash, grunting, bulging fontanelle, and neck stiffness are immediate Red indicators requiring emergency IV antibiotics."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng143",
    "relatedIcd11Code": "MG22",
    "relatedSnomedId": "386661006",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG143"
  },
  {
    "guidelineId": "NG91",
    "title": "Otitis Media (Acute): Antimicrobial Prescribing",
    "clinicalDomain": "Infections & Antimicrobial",
    "version": "2022 Update (v1.2)",
    "publishedDate": "2018-03-28",
    "lastUpdated": "2022-09-08",
    "targetPopulation": "Children, young people, and adults presenting with acute otitis media (AOM)",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Otoscopic inspection (erythema, bulging tympanic membrane), pain relief with paracetamol/ibuprofen, withholding immediate antibiotics in most children (delayed back-up prescription), and amoxicillin for high-risk cases.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Diagnostic Otoscopy & Analgesia",
        "recommendation": "Confirm diagnosis by otoscopic examination showing a bulging, cloudy, or perforated tympanic membrane. Offer regular paracetamol or ibuprofen for ear pain.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "No Antibiotic / Delayed Prescribing",
        "recommendation": "Do not offer immediate antibiotics for most children with mild AOM. Provide a back-up antibiotic prescription to use if symptoms do not improve after 3 days.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Immediate Antibiotic Indications",
        "recommendation": "Offer immediate oral amoxicillin for children under 2 with bilateral AOM, children with otorrhea (perforation), or patients systemically unwell.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "First-Line Antibiotic Dosing",
        "recommendation": "Prescribe oral amoxicillin for 5 to 7 days. Offer clarithromycin or erythromycin for patients with penicillin allergy.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Decongestants and antihistamines have no proven efficacy in acute otitis media.",
      "Refer urgently if signs of mastoiditis (swelling behind ear) or facial nerve palsy develop."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng91",
    "relatedIcd11Code": "AA80",
    "relatedSnomedId": "65363002",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG91"
  },
  {
    "guidelineId": "NG84",
    "title": "Sore Throat (Acute): Antimicrobial Prescribing",
    "clinicalDomain": "Infections & Antimicrobial",
    "version": "2023 Update (v1.3)",
    "publishedDate": "2018-01-26",
    "lastUpdated": "2023-01-19",
    "targetPopulation": "Children, young people, and adults with acute sore throat (pharyngitis / tonsillitis)",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Clinical scoring using FeverPAIN or Centor criteria, self-care and pain management without antibiotics for scores 0–2, delayed prescribing for score 3, and phenoxymethylpenicillin (penicillin V) 10-day course for score 4–5.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Clinical Prediction Scoring (FeverPAIN / Centor)",
        "recommendation": "Calculate FeverPAIN score (Fever in past 24h, Absence of cough, Purulence on tonsils, Attend rapidly within 3 days, Severely inflamed tonsils). Score 0–1: viral; 2–3: intermediate; 4–5: high probability of Group A Strep.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Self-Care & Non-Prescribing Strategy",
        "recommendation": "Do not offer antibiotics for FeverPAIN score 0 to 2. Advise paracetamol or ibuprofen for pain, adequate fluids, and medicated lozenges.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Back-Up Prescription Strategy",
        "recommendation": "Consider a delayed back-up prescription for FeverPAIN score 3 to fill only if symptoms worsen or do not begin to improve within 3 to 5 days.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "First-Line Antibiotic Choice",
        "recommendation": "Offer oral phenoxymethylpenicillin (penicillin V) 500 mg 4 times daily for 5 to 10 days for FeverPAIN score 4 or 5. Use clarithromycin for penicillin allergy.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not prescribe amoxicillin or ampicillin if glandular fever (infectious mononucleosis) is suspected due to risk of severe maculopapular rash.",
      "Refer immediately for peritonsillar abscess (quinsy), stridor, or inability to swallow saliva."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng84",
    "relatedIcd11Code": "CA02",
    "relatedSnomedId": "26456008",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG84"
  },
  {
    "guidelineId": "NG120",
    "title": "Cough (Acute): Antimicrobial Prescribing",
    "clinicalDomain": "Infections & Antimicrobial",
    "version": "2022 Update (v1.2)",
    "publishedDate": "2019-02-06",
    "lastUpdated": "2022-04-12",
    "targetPopulation": "Adults and children presenting with acute cough associated with an upper respiratory tract infection or acute bronchitis",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Identification of viral acute bronchitis, patient education on natural history (acute cough typically lasts 3 to 4 weeks), honey and pelargonium for symptom relief, and avoiding routine antibiotics.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Clinical Examination & Exclusion of Pneumonia",
        "recommendation": "Examine chest and vital signs to rule out community-acquired pneumonia (focal chest crackles, tachypnea, hypotension, fever > 38°C).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Natural History Counseling & No-Antibiotic Policy",
        "recommendation": "Explain that acute cough is usually viral and lasts around 3 weeks. Do not offer routine antibiotics for acute bronchitis in previously healthy individuals.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Evidence-Based Symptom Remedies",
        "recommendation": "Recommend honey for people aged 1 year and over (or pelargonium herbal extract for ages 12 and over) to soothe acute cough.",
        "evidenceGrade": "Moderate"
      },
      {
        "stepNumber": 4,
        "stage": "Targeted High-Risk Antibiotic Indications",
        "recommendation": "Offer immediate or delayed doxycycline (200 mg on day 1, then 100 mg daily for 5 days) only if aged ≥ 65 with comorbidities or patients with severe underlying lung disease.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not give honey to infants under 1 year due to the risk of infant botulism.",
      "Codeine cough syrups are contraindicated in children under 12 and not recommended for older children."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng120",
    "relatedIcd11Code": "MD30",
    "relatedSnomedId": "49727002",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG120"
  },
  {
    "guidelineId": "NG100",
    "title": "Rheumatoid Arthritis in Adults: Diagnosis and Management",
    "clinicalDomain": "Musculoskeletal",
    "version": "2020 Update (v1.2)",
    "publishedDate": "2018-07-11",
    "lastUpdated": "2020-10-12",
    "targetPopulation": "Adults aged 18 and over with suspected or confirmed rheumatoid arthritis",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Early referral to rheumatology (within 3 working days), treat-to-target strategy aiming for remission or low disease activity (DAS28), conventional synthetic DMARDs (methotrexate monotherapy) plus short-term bridging steroids, and biologic escalation.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Urgent Rheumatology Referral",
        "recommendation": "Refer urgently (within 3 working days) any adult with persistent synovitis in multiple small joints (hands/feet) or positive anti-CCP antibodies.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "First-Line csDMARD Monotherapy",
        "recommendation": "Offer oral methotrexate (with folic acid) as first-line conventional synthetic disease-modifying antirheumatic drug (csDMARD) alongside short-term bridging corticosteroid.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Treat-to-Target Disease Monitoring",
        "recommendation": "Assess Disease Activity Score (DAS28) monthly until target remission or low disease activity is achieved, escalating with combination csDMARDs if needed.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Biologic & Targeted Synthetic DMARDs",
        "recommendation": "Offer TNF inhibitors (adalimumab, etanercept), abatacept, or JAK inhibitors (tofacitinib, baricitinib) if DAS28 remains > 5.1 despite 2 conventional DMARDs.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Prescribe oral folic acid (5 mg weekly on a different day from methotrexate) to minimize methotrexate toxicity.",
      "Screen for latent tuberculosis, hepatitis B, and hepatitis C prior to initiating biologic DMARDs."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng100",
    "relatedIcd11Code": "FA20",
    "relatedSnomedId": "69896004",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG100"
  },
  {
    "guidelineId": "NG226",
    "title": "Osteoarthritis in Over 16s: Diagnosis and Management",
    "clinicalDomain": "Musculoskeletal",
    "version": "2022 Update (v1.0)",
    "publishedDate": "2022-10-19",
    "lastUpdated": "2022-10-19",
    "targetPopulation": "People aged 16 and over with osteoarthritis of the knee, hip, hand, or other joints",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Clinical diagnosis without routine imaging (age ≥ 45 with activity-related joint pain and morning stiffness < 30 min), tailored therapeutic exercise and weight loss as core treatments, topical NSAIDs, and joint arthroplasty referral.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Clinical Diagnosis Without Routine X-Ray",
        "recommendation": "Diagnose osteoarthritis clinically without routine X-rays in people aged 45 and over who have activity-related joint pain and no morning joint stiffness or morning stiffness lasting less than 30 minutes.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Core Therapeutic Exercise & Weight Loss",
        "recommendation": "Prescribe regular therapeutic exercise tailored to joint-strengthening and aerobic fitness. Advise weight loss if overweight or obese as primary disease-modifying interventions.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Pharmacological Symptom Relief",
        "recommendation": "Offer topical NSAIDs as first-line pharmacological treatment for knee and hand osteoarthritis before considering oral NSAIDs (with a PPI).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Joint Replacement Referral",
        "recommendation": "Refer for joint replacement surgery (arthroplasty) if joint symptoms cause significant functional impairment and refractory pain despite core conservative treatments.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not routinely offer paracetamol or weak opioids for osteoarthritis; evidence shows minimal clinical benefit and significant adverse effects.",
      "Do not offer glucosamine or chondroitin products for osteoarthritis."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng226",
    "relatedIcd11Code": "FA00",
    "relatedSnomedId": "396275006",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG226"
  },
  {
    "guidelineId": "NG219",
    "title": "Gout: Diagnosis and Management",
    "clinicalDomain": "Musculoskeletal",
    "version": "2022 Update (v1.0)",
    "publishedDate": "2022-06-09",
    "lastUpdated": "2022-06-09",
    "targetPopulation": "People aged 16 and over with gout",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Acute flare management with colchicine or NSAIDs, treat-to-target urate-lowering therapy (ULT) with allopurinol started during or after acute flare, targeting serum urate < 360 mcmol/L (or < 300 mcmol/L for tophi).",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Acute Gout Flare Management",
        "recommendation": "Offer an NSAID (with PPI), colchicine (500 mcg 2 to 4 times daily), or a short course of oral prednisolone (30 mg daily for 3 to 5 days) as first-line treatment for an acute gout flare.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Urate-Lowering Therapy Initiation (Allopurinol)",
        "recommendation": "Offer allopurinol as first-line urate-lowering therapy using a treat-to-target strategy to any patient with a confirmed diagnosis of gout (can be started during an acute flare).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Treat-to-Target Urate Titration",
        "recommendation": "Start allopurinol at 100 mg daily (lower in renal impairment) and titrate in 100 mg increments every month until serum urate is below 360 mcmol/L (6 mg/dL).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Flare Prophylaxis During ULT Initiation",
        "recommendation": "Offer low-dose colchicine (500 mcg once or twice daily) or low-dose NSAID for up to 6 months to prevent flares when starting or titrating ULT.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not stop allopurinol during an acute gout flare if the patient is already taking it.",
      "Target a lower serum urate of < 300 mcmol/L (5 mg/dL) for people with tophi or frequent chronic attacks."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng219",
    "relatedIcd11Code": "FA25",
    "relatedSnomedId": "90560007",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG219"
  },
  {
    "guidelineId": "CG146",
    "title": "Osteoporosis: Assessing the Risk of Fragility Fracture",
    "clinicalDomain": "Musculoskeletal",
    "version": "2017 Update (v1.2)",
    "publishedDate": "2012-08-08",
    "lastUpdated": "2017-02-14",
    "targetPopulation": "Adults aged 18 and over at risk of fragility fractures",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "FRAX or QFracture 10-year fracture risk calculation, dual-energy X-ray absorptiometry (DEXA) bone mineral density measurement (T-score ≤ -2.5), and bisphosphonate bone protection (oral alendronate or IV zoledronic acid).",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Fracture Risk Stratification (FRAX / QFracture)",
        "recommendation": "Calculate 10-year absolute fracture risk using FRAX or QFracture in women aged ≥ 65, men aged ≥ 75, or younger individuals with major risk factors (prior fracture, oral steroids).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Bone Mineral Density Testing (DEXA)",
        "recommendation": "Measure bone mineral density (BMD) using central dual-energy X-ray absorptiometry (DEXA) scan if FRAX indicates intermediate or high fracture risk.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "First-Line Antiresorptive Bisphosphonates",
        "recommendation": "Offer oral bisphosphonates (alendronic acid 70 mg weekly or risedronate 35 mg weekly) to individuals with osteoporosis (T-score ≤ -2.5) or prior fragility fracture.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Alternative Parenteral Therapy",
        "recommendation": "Consider intravenous zoledronic acid or subcutaneous denosumab 60 mg every 6 months if oral bisphosphonates are contraindicated or poorly tolerated.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Ensure adequate calcium and vitamin D intake (or prescribe supplements) before and during antiresorptive therapy.",
      "Counsel on oral bisphosphonate administration: swallow whole with a full glass of tap water on an empty stomach and stay upright for 30 minutes."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg146",
    "relatedIcd11Code": "FB83.1",
    "relatedSnomedId": "64859006",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG146"
  },
  {
    "guidelineId": "NG59",
    "title": "Low Back Pain and Sciatica in Over 16s: Assessment and Management",
    "clinicalDomain": "Musculoskeletal",
    "version": "2020 Update (v1.2)",
    "publishedDate": "2016-11-30",
    "lastUpdated": "2020-12-11",
    "targetPopulation": "People aged 16 and over with non-specific low back pain or sciatica",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "STarT Back risk stratification, avoidance of routine imaging for non-specific back pain, self-management advice and supervised group exercise, oral NSAIDs, and epidural injections for acute severe radicular pain.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Red Flag Screening & Stratification",
        "recommendation": "Screen for red flags (cauda equina syndrome, spinal fracture, malignancy, infection). Stratify non-specific back pain risk using the STarT Back tool.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "De-implementation of Routine Imaging",
        "recommendation": "Do not routinely offer spinal imaging (X-ray or MRI) for people with non-specific low back pain in the absence of red flags.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Conservative Exercise & Self-Management",
        "recommendation": "Provide advice to stay active and resume normal activities. Offer a supervised group exercise program tailored to patient preferences.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Pharmacological & Interventional Management",
        "recommendation": "Offer an oral NSAID (with PPI) at the lowest effective dose for short periods. Consider epidural corticosteroid injections for acute, severe sciatica.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not offer paracetamol, opioids, anticonvulsants (gabapentin/pregabalin), or antidepressants for non-specific low back pain.",
      "Emergency referral is mandatory if saddle anesthesia, bilateral sciatica, or new bowel/bladder incontinence develop (suspected cauda equina syndrome)."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng59",
    "relatedIcd11Code": "ME84.2",
    "relatedSnomedId": "279039007",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG59"
  },
  {
    "guidelineId": "NG12",
    "title": "Suspected Cancer: Recognition and Referral (Two-Week Wait Pathway)",
    "clinicalDomain": "Oncology & Cancer",
    "version": "2023 Update (v1.6)",
    "publishedDate": "2015-06-23",
    "lastUpdated": "2023-12-18",
    "targetPopulation": "Children, young people, and adults presenting in primary care with symptoms that could be caused by cancer",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "National 2-week wait referral criteria for suspected cancer: urgent chest X-ray for unexplained hemoptysis, FIT testing for colorectal cancer, CA125 ultrasound for ovarian cancer, and urgent endoscopy for dysphagia.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Colorectal Cancer: Quantitative FIT Testing",
        "recommendation": "Offer fecal immunochemical testing (FIT) for adults with unexplained change in bowel habit, iron-deficiency anemia, or abdominal pain without rectal bleeding.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Lung Cancer: Urgent Chest X-Ray",
        "recommendation": "Offer an urgent chest X-ray (within 2 weeks) to adults aged 40 and over who have unexplained hemoptysis or cough/fatigue/weight loss with smoking history.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Breast Cancer: Urgent 2-Week Referral",
        "recommendation": "Refer people using a suspected cancer pathway (for an appointment within 2 weeks) if aged 30 and over with an unexplained breast lump.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Prostate & Ovarian Cancer Diagnostic Triage",
        "recommendation": "Check PSA and perform DRE for men with unexplained lower urinary tract symptoms. Measure serum CA125 and perform pelvic ultrasound in women with persistent abdominal bloating.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Suspected cancer pathway referrals must be seen by a specialist within 14 days of referral under the NHS 2-week wait standard.",
      "Explain to patients why they are being referred and reassure them that most referred patients do not have cancer."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng12",
    "relatedIcd11Code": "2B60",
    "relatedSnomedId": "363346000",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG12"
  },
  {
    "guidelineId": "NG122",
    "title": "Lung Cancer: Diagnosis and Management",
    "clinicalDomain": "Oncology & Cancer",
    "version": "2023 Update (v1.3)",
    "publishedDate": "2019-03-28",
    "lastUpdated": "2023-04-12",
    "targetPopulation": "Adults with suspected or diagnosed non-small cell lung cancer (NSCLC) or small cell lung cancer (SCLC)",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Contrast-enhanced chest/upper abdominal CT, PET-CT staging, EBUS-TBNA mediastinal staging, surgical lobectomy for stage I–II, and molecular profiling (EGFR, ALK, PD-L1) for targeted systemic immunotherapy.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Diagnostic CT & PET-CT Staging",
        "recommendation": "Perform contrast-enhanced chest CT followed by whole-body 18F-FDG PET-CT for all patients being considered for radical curative treatment.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Minimally Invasive Pathological Sampling (EBUS)",
        "recommendation": "Perform endobronchial ultrasound-guided transbronchial needle aspiration (EBUS-TBNA) to sample mediastinal lymph nodes and provide tissue for molecular biomarker testing.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Curative Resection (Stage I–IIA)",
        "recommendation": "Offer anatomic surgical resection (video-assisted thoracoscopic surgery [VATS] lobectomy) for medically fit patients with early-stage NSCLC.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Molecular Testing & Targeted Immunotherapy",
        "recommendation": "Test all advanced NSCLC tumors for actionable mutations (EGFR, ALK, ROS1, BRAF) and PD-L1 expression to guide tyrosine kinase inhibitor or immunotherapy selection.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Offer stereotactic ablative radiotherapy (SABR) for medically inoperable stage I NSCLC.",
      "Smoking cessation intervention should be offered even after a lung cancer diagnosis to improve survival and treatment tolerance."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng122",
    "relatedIcd11Code": "2C25",
    "relatedSnomedId": "254637007",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG122"
  },
  {
    "guidelineId": "NG101",
    "title": "Early and Locally Advanced Breast Cancer: Diagnosis and Management",
    "clinicalDomain": "Oncology & Cancer",
    "version": "2023 Update (v1.4)",
    "publishedDate": "2018-07-18",
    "lastUpdated": "2023-06-20",
    "targetPopulation": "People with early or locally advanced invasive breast cancer or ductal carcinoma in situ (DCIS)",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Triple assessment (examination, mammography/ultrasound, core biopsy), breast-conserving surgery versus mastectomy with sentinel lymph node biopsy, genomic profiling (Oncotype DX), and adjuvant endocrine therapy.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Triple Assessment & Core Needle Biopsy",
        "recommendation": "Diagnose breast cancer through rapid triple assessment: clinical examination, bilateral imaging (mammogram + ultrasound), and ultrasound-guided core needle biopsy.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Surgical Resection & Axillary Staging",
        "recommendation": "Offer breast-conserving surgery with negative margins or mastectomy with immediate reconstruction, paired with sentinel lymph node biopsy (SLNB).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Tumor Profiling & Genomic Risk Scores",
        "recommendation": "Test for ER, PR, and HER2 receptor status. Use genomic profiling (e.g. Oncotype DX) for ER-positive, HER2-negative, node-negative tumors to guide adjuvant chemotherapy.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Adjuvant Endocrine & Bisphosphonate Therapy",
        "recommendation": "Offer 5 to 10 years of adjuvant endocrine therapy (tamoxifen for premenopausal; aromatase inhibitors [anastrozole, letrozole] for postmenopausal women). Offer adjuvant zoledronic acid to reduce bone recurrence.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Administer trastuzumab (with chemotherapy) for 12 months in patients with HER2-positive early breast cancer.",
      "Check bone mineral density with DEXA before starting aromatase inhibitors."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng101",
    "relatedIcd11Code": "2C60",
    "relatedSnomedId": "254837009",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG101"
  },
  {
    "guidelineId": "NG131",
    "title": "Prostate Cancer: Diagnosis and Management",
    "clinicalDomain": "Oncology & Cancer",
    "version": "2021 Update (v1.2)",
    "publishedDate": "2019-05-09",
    "lastUpdated": "2021-12-16",
    "targetPopulation": "Men with suspected or confirmed prostate cancer",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Pre-biopsy multiparametric MRI (mpMRI) using Likert/PI-RADS scoring, targeted transperineal prostate biopsy, active surveillance for low-risk disease, radical prostatectomy or radiotherapy for localized disease, and androgen deprivation therapy (ADT).",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Pre-Biopsy Multiparametric MRI (mpMRI)",
        "recommendation": "Offer multiparametric MRI (mpMRI) to all men with suspected localized prostate cancer before biopsy. Do not offer routine biopsy if mpMRI Likert/PI-RADS score is 1 or 2.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Targeted Transperineal Biopsy",
        "recommendation": "Perform targeted transperineal prostate biopsy directed at lesions identified on mpMRI (Likert/PI-RADS score 3 to 5) to minimize sepsis risk compared to transrectal biopsy.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Active Surveillance for Low-Risk Disease",
        "recommendation": "Offer active surveillance (regular PSA, DRE, and surveillance MRI) as the preferred management strategy for men with low-risk localized prostate cancer (Gleason 3+3).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Radical Treatment & Androgen Deprivation",
        "recommendation": "Offer radical prostatectomy or radical external beam radiotherapy combined with androgen deprivation therapy (LHRH agonists) for intermediate and high-risk localized disease.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Explain that radical prostatectomy and radical radiotherapy carry distinct side-effect profiles (urinary incontinence vs bowel radiation toxicity; erectile dysfunction).",
      "For metastatic prostate cancer, offer docetaxel chemotherapy or novel anti-androgens (enzalutamide, apalutamide) alongside ADT."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng131",
    "relatedIcd11Code": "2C82",
    "relatedSnomedId": "399068003",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG131"
  },
  {
    "guidelineId": "NG151",
    "title": "Colorectal Cancer: Diagnosis and Management",
    "clinicalDomain": "Oncology & Cancer",
    "version": "2021 Update (v1.2)",
    "publishedDate": "2020-01-29",
    "lastUpdated": "2021-12-14",
    "targetPopulation": "Adults with suspected or diagnosed colorectal cancer",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Colonoscopy with tissue biopsy, contrast-enhanced staging CT and pelvic MRI for rectal cancer, laparoscopic total mesorectal excision (TME) or colectomy, mismatch repair / MSI testing, and adjuvant FOLFOX chemotherapy.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Endoscopic Biopsy & Complete Staging",
        "recommendation": "Perform diagnostic colonoscopy with biopsy. Once cancer is confirmed, perform contrast CT of chest, abdomen, and pelvis. Add high-resolution pelvic MRI for rectal cancer.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Lynch Syndrome Universal Screening (MMR / MSI)",
        "recommendation": "Test all newly diagnosed colorectal cancers for mismatch repair (MMR) proteins using immunohistochemistry or microsatellite instability (MSI) to screen for Lynch syndrome.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Surgical Resection (Laparoscopic)",
        "recommendation": "Offer laparoscopic anatomical surgical resection with complete mesocolic excision (or total mesorectal excision [TME] for rectal cancer) by accredited colorectal surgeons.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Adjuvant Chemotherapy & Targeted Biologics",
        "recommendation": "Offer adjuvant fluoropyrimidine plus oxaliplatin (FOLFOX / CAPOX) for stage III (node-positive) colon cancer. Test for RAS and BRAF mutations in metastatic disease.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Discuss pre-operative neoadjuvant chemoradiotherapy for locally advanced rectal cancer with threatened circumferential resection margin on MRI.",
      "Provide stoma specialist consultation and marking before elective surgery whenever a stoma is possible."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng151",
    "relatedIcd11Code": "2B90",
    "relatedSnomedId": "363406005",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG151"
  },
  {
    "guidelineId": "NG222",
    "title": "Depression in Adults: Treatment and Management",
    "clinicalDomain": "Mental Health",
    "version": "2022 Update (v1.0)",
    "publishedDate": "2022-06-29",
    "lastUpdated": "2022-06-29",
    "targetPopulation": "Adults aged 18 and over with depression or persistent depressive disorder",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Menu of evidence-based psychological therapies (CBT, behavioural activation) alongside SSRI antidepressants (sertraline, citalopram), stepped-care model based on severity, and safe discontinuation tapering.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Diagnostic Assessment & Menu of Treatment Choices",
        "recommendation": "Discuss options from a menu of evidence-based treatments: for less severe depression, offer guided self-help, group CBT, or behavioral activation before medication.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "First-Line Antidepressant Selection",
        "recommendation": "If medication is chosen or depression is moderate-to-severe, prescribe a selective serotonin reuptake inhibitor (SSRI, e.g. sertraline or citalopram) paired with individual CBT.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Monitoring & Treatment Escalation",
        "recommendation": "Review efficacy and suicidal ideation at 1 to 2 weeks. If no response at 4 to 6 weeks, increase dose, switch SSRI, or switch to an SNRI (venlafaxine) or mirtazapine.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Continuation Therapy & Safe Tapering",
        "recommendation": "Continue antidepressant medication for at least 6 months after full remission of symptoms. When stopping, reduce dose slowly over months in proportional steps to avoid withdrawal.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not use antidepressants as the sole first-line treatment for mild depression unless the patient explicitly prefers it or symptoms have persisted for over 2 years.",
      "Monitor closely for emergent agitation or suicidal thoughts during the first 4 weeks, especially in adults aged under 25."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng222",
    "relatedIcd11Code": "6A70",
    "relatedSnomedId": "35489007",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG222"
  },
  {
    "guidelineId": "CG113",
    "title": "Generalised Anxiety Disorder and Panic Disorder in Adults",
    "clinicalDomain": "Mental Health",
    "version": "2020 Update (v1.3)",
    "publishedDate": "2011-01-26",
    "lastUpdated": "2020-07-28",
    "targetPopulation": "Adults aged 18 and over with generalised anxiety disorder (GAD) or panic disorder (with or without agoraphobia)",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Stepped care pathway: Step 1 identification and education, Step 2 low-intensity psychological interventions, Step 3 high-intensity CBT or SSRI pharmacotherapy (sertraline), and Step 4 specialized multi-agency care.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Stepped Care Assessment (GAD-7)",
        "recommendation": "Identify anxiety using the GAD-7 screening tool. Provide active monitoring and psychoeducation on anxiety physiology and sleep hygiene.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Low-Intensity Psychological Intervention",
        "recommendation": "Offer individual non-facilitated or guided self-help based on CBT principles for mild-to-moderate generalized anxiety disorder.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "High-Intensity CBT & SSRI Pharmacotherapy",
        "recommendation": "Offer individual CBT (12 to 15 weekly sessions) or an SSRI (sertraline is first-line cost-effective choice) for moderate-to-severe GAD.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Panic Attack Intervention",
        "recommendation": "For panic disorder: offer individual CBT (7 to 14 hours) or an SSRI. Provide clear instructions on controlled breathing and coping during panic attacks.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not routinely offer benzodiazepines for GAD or panic disorder except for short-term crisis management (< 2 weeks) due to rapid tolerance and dependence.",
      "Do not offer antipsychotics for general anxiety disorder in primary care."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg113",
    "relatedIcd11Code": "6B00",
    "relatedSnomedId": "21897009",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG113"
  },
  {
    "guidelineId": "NG181",
    "title": "Rehabilitation for People with Complex Psychosis",
    "clinicalDomain": "Mental Health",
    "version": "2020 Update (v1.0)",
    "publishedDate": "2020-08-19",
    "lastUpdated": "2020-08-19",
    "targetPopulation": "Adults aged 18 and over with treatment-resistant psychosis, severe negative symptoms, or cognitive impairment",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Community recovery model, clozapine optimization for treatment-resistant schizophrenia, cognitive remediation therapy, supported employment, and cardiometabolic monitoring.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Multidisciplinary Needs Assessment",
        "recommendation": "Assess activities of daily living, social networks, physical health, and occupational goals using standardized recovery frameworks.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Clozapine Optimization & Blood Monitoring",
        "recommendation": "Offer clozapine for schizophrenia that has not responded adequately to sequential trials of 2 different antipsychotic medicines, at least 1 of which should be a non-clozapine second-generation antipsychotic.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Cognitive Remediation & Psychological Therapy",
        "recommendation": "Offer cognitive remediation therapy and CBT for psychosis (CBTp) alongside family interventions for at least 10 sessions.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Cardiometabolic Risk Reduction",
        "recommendation": "Monitor BMI, blood pressure, fasting blood glucose/HbA1c, and lipid profile every 3 months for people taking antipsychotic medications.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Mandatory full blood count monitoring for clozapine (weekly for 18 weeks, fortnightly to 1 year, then monthly) to detect agranulocytosis.",
      "Provide structured smoking cessation support with dose adjustments when smoking patterns change."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng181",
    "relatedIcd11Code": "6A20",
    "relatedSnomedId": "58214004",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG181"
  },
  {
    "guidelineId": "NG10",
    "title": "Violence and Aggression: Short-Term Management in Mental Health",
    "clinicalDomain": "Mental Health",
    "version": "2020 Update (v1.1)",
    "publishedDate": "2015-05-28",
    "lastUpdated": "2020-09-02",
    "targetPopulation": "Children, young people, and adults in mental health, health, and social care settings who are experiencing acute agitation or violence",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "De-escalation verbal techniques, environmental adaptations, oral rapid tranquilization (lorazepam or promethazine), intramuscular rescue medications as last resort, and physiological monitoring.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "De-Escalation & Environmental Strategies",
        "recommendation": "Use verbal and non-verbal de-escalation techniques, reduce environmental noise, offer sensory rooms, and engage designated staff members to calm agitation.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Oral Medication First-Line",
        "recommendation": "Offer oral medication (lorazepam 1–2 mg, haloperidol, or promethazine) before considering parenteral intervention, respecting patient advance directives.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Intramuscular Rapid Tranquilisation",
        "recommendation": "If de-escalation and oral medication fail and risk of harm is imminent: give intramuscular lorazepam alone or intramuscular haloperidol combined with promethazine.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Post-Tranquilisation Vital Sign Monitoring",
        "recommendation": "Monitor pulse, blood pressure, respiratory rate, and oxygen saturation every 15 minutes for 1 hour, then every 30 minutes until the person is ambulatory.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Always have flumazenil readily available if administering parenteral benzodiazepines to reverse respiratory depression.",
      "Check baseline ECG before administering haloperidol to rule out prolonged QT interval."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng10",
    "relatedIcd11Code": "MB23",
    "relatedSnomedId": "75038005",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG10"
  },
  {
    "guidelineId": "NG197",
    "title": "Shared Decision Making",
    "clinicalDomain": "Mental Health",
    "version": "2021 Update (v1.0)",
    "publishedDate": "2021-06-17",
    "lastUpdated": "2021-06-17",
    "targetPopulation": "All healthcare professionals and patients making treatment and care choices across healthcare settings",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country.",
    "pathwaySummary": "Evidence-based framework for clinical decision-making: discussing benefits, risks, and trade-offs of all treatment options (including doing nothing), utilizing patient decision aids, and documenting patient values.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Framing Choice & Person-Centred Dialogue",
        "recommendation": "Make clear that a choice exists and that the patient's personal priorities, lifestyle, and values are central to deciding the best course of action.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Transparent Discussion of Benefits & Harms",
        "recommendation": "Present the benefits, potential side effects, and risks of all available options (including the option of no treatment or watchful waiting) using natural frequencies (e.g. 1 in 100).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Use of Validated Patient Decision Aids",
        "recommendation": "Provide accredited patient decision aids (digital tools, booklets, diagrams) to support deliberation before, during, or after consultations.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Documenting Informed Mutual Agreement",
        "recommendation": "Record the agreed care plan in the patient's health record, explicitly noting the rationale, alternative options considered, and follow-up review timeframe.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Avoid relative risk metrics (e.g. \"50% risk reduction\") which mislead; always explain absolute risk reduction and numbers needed to treat (NNT).",
      "Ensure the patient knows they can change their mind and request review of the treatment plan at any time."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng197",
    "relatedIcd11Code": "QA00",
    "relatedSnomedId": "408443003",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG197"
  },
  {
    "guidelineId": "NG19",
    "title": "Diabetic Foot Problems: Prevention and Management",
    "clinicalDomain": "Diabetes & Metabolism",
    "version": "2023 Update (v2.2)",
    "publishedDate": "2015-08-26",
    "lastUpdated": "2023-10-11",
    "targetPopulation": "Children, young people, and adults with diabetes",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Risk assessment, prompt ulcer triage, specialized multidisciplinary foot care service (MDFS) referral within 24 hours for active ulceration, offloading, wound debridement, and infection control.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Annual Foot Risk Stratification",
        "recommendation": "Screen annually using 10g monofilament and foot pulse palpation. Stratify risk into low, moderate, high, or active foot problem.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Urgent MDFS Referral for Active Ulceration",
        "recommendation": "Refer patients with new diabetic foot ulcers, suspected Charcot arthropathy, or severe gangrene to MDFS within 1 working day.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Offloading & Debridement",
        "recommendation": "Offer non-removable knee-high offloading devices for non-infected plantar neuropathic ulcers. Perform sharp debridement and moist wound healing.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Targeted Antimicrobial & Vascular Review",
        "recommendation": "Obtain deep tissue or bone cultures for infected ulcers; initiate targeted antibiotics; evaluate urgent revascularization if ischemia is present.",
        "evidenceGrade": "Moderate"
      }
    ],
    "decisionSupportRules": [
      "Do not rely on standard superficial wound swabs; take deep tissue biopsy or curettage after debridement.",
      "Suspect acute Charcot arthropathy in any diabetic patient presenting with an acutely swollen, red, and warm foot."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng19",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG19",
    "relatedIcd11Code": "5A11 & BD54",
    "relatedSnomedId": "280137006"
  },
  {
    "guidelineId": "NG224",
    "title": "Familial Hypercholesterolaemia: Identification and Management",
    "clinicalDomain": "Diabetes & Metabolism",
    "version": "2022 Update (v1.9)",
    "publishedDate": "2008-08-27",
    "lastUpdated": "2022-11-04",
    "targetPopulation": "Children, young people, and adults with confirmed or suspected familial hypercholesterolaemia",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Systematic identification using Simon Broome or Dutch Lipid Clinic criteria, cascade testing of first-degree biological relatives, intensive high-intensity statin therapy, and PCSK9 inhibitor escalation.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Clinical Diagnostic Triage",
        "recommendation": "Screen adults with total cholesterol > 7.5 mmol/L or personal/family history of premature coronary heart disease (<60 years).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Genetic Cascade Testing",
        "recommendation": "Offer DNA testing for LDLR, APOB, and PCSK9 gene mutations. Initiate cascade genetic and lipid testing across biological first-degree relatives.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "High-Intensity Statin & Ezetimibe Monotherapy",
        "recommendation": "Initiate atorvastatin 80 mg daily (or highest tolerated dose). Add ezetimibe 10 mg if LDL-C reduction < 50% from baseline.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "PCSK9 Inhibitor & Lipoprotein Apheresis",
        "recommendation": "Escalate to alirocumab, evolocumab, or LDL apheresis for severe refractory FH or persistent high LDL-C despite dual therapy.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not use standard CVD risk estimation tools (e.g. QRISK) for FH patients; their lifetime risk is already markedly elevated.",
      "Childhood cascade testing should commence before age 10 for heterozygous FH."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng224",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG224",
    "relatedIcd11Code": "5C80.0",
    "relatedSnomedId": "398036000"
  },
  {
    "guidelineId": "NG132",
    "title": "Vitamin D: Supplement Use in Specific Population Groups",
    "clinicalDomain": "Diabetes & Metabolism",
    "version": "2021 Update (v1.4)",
    "publishedDate": "2014-11-26",
    "lastUpdated": "2021-08-18",
    "targetPopulation": "All age groups at risk of vitamin D deficiency (infants, pregnant women, older adults, ethnic minority groups)",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Public health and clinical recommendation for daily 400 IU (10 mcg) vitamin D supplementation during autumn/winter for all, year-round for high-risk demographics, and clinical treatment regimens for symptomatic deficiency.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Population Risk Identification",
        "recommendation": "Identify high-risk groups: limited sun exposure, darker skin pigmentation, veiled clothing, institutionalized care, and pregnant/breastfeeding mothers.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Routine Universal Prophylaxis",
        "recommendation": "Advise 10 micrograms (400 IU) vitamin D daily for all individuals over 1 year of age during autumn and winter, and year-round for high-risk groups.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Biochemical Assessment for Symptomatic Deficiency",
        "recommendation": "Measure serum 25(OH)D only in symptomatic bone pain, muscle weakness, elevated alkaline phosphatase, or hypocalcemia (<25 nmol/L indicates deficiency).",
        "evidenceGrade": "Moderate"
      },
      {
        "stepNumber": 4,
        "stage": "Therapeutic Loading & Maintenance",
        "recommendation": "For 25(OH)D < 25 nmol/L, offer oral cholecalciferol loading (e.g. 300,000 IU over 6-10 weeks) followed by daily maintenance 800-2,000 IU.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not routinely check serum 25(OH)D in asymptomatic individuals.",
      "Check serum adjusted calcium prior to initiating high-dose vitamin D loading to rule out primary hyperparathyroidism."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng132",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG132",
    "relatedIcd11Code": "5B57.1",
    "relatedSnomedId": "34713006"
  },
  {
    "guidelineId": "CG100",
    "title": "Alcohol-Use Disorders: Diagnosis and Management of Physical Complications",
    "clinicalDomain": "Diabetes & Metabolism",
    "version": "2020 Update (v1.6)",
    "publishedDate": "2010-06-02",
    "lastUpdated": "2020-04-15",
    "targetPopulation": "Adults with alcohol-related liver disease, acute pancreatitis, or physical complications of chronic alcohol misuse",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Early recognition of alcohol-related cirrhosis, urgent prophylactic parenteral thiamine (Pabrinex) to prevent Wernicke encephalopathy, nutritional support, and targeted acute withdrawal protocols.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Thiamine Prophylaxis & Acute Triage",
        "recommendation": "Administer parenteral thiamine immediately to all patients with decompensated liver disease, acute alcohol withdrawal, or poor nutritional intake.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Alcohol-Related Liver Disease Staging",
        "recommendation": "Assess liver stiffness via transient elastography (FibroScan) or acoustic radiation force impulse in patients drinking harmful amounts (>35 units/week women, >50 men).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Corticosteroids in Severe Alcoholic Hepatitis",
        "recommendation": "Calculate Maddrey discriminant function (DF ≥ 32); offer oral prednisolone 40 mg daily for 28 days unless active sepsis or gastrointestinal bleeding.",
        "evidenceGrade": "Moderate"
      },
      {
        "stepNumber": 4,
        "stage": "Nutritional & Abstinence Support",
        "recommendation": "Provide high-calorie, high-protein diet (35-40 kcal/kg/day) and refer to integrated addiction services for structured abstinence support.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Always give parenteral thiamine BEFORE glucose infusions in alcohol-dependent patients to prevent precipitating acute Wernicke encephalopathy.",
      "Monitor Glasgow Alcoholic Hepatitis Score or Lille Model at day 7 to discontinue futile corticosteroids if no response."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg100",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG100",
    "relatedIcd11Code": "6C40",
    "relatedSnomedId": "66590003"
  },
  {
    "guidelineId": "CG115",
    "title": "Alcohol-Use Disorders: Diagnosis, Assessment and Management of Harmful Drinking",
    "clinicalDomain": "Diabetes & Metabolism",
    "version": "2021 Update (v1.5)",
    "publishedDate": "2011-02-23",
    "lastUpdated": "2021-03-24",
    "targetPopulation": "Adults and young people aged 10-17 with harmful drinking or alcohol dependence",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Structured screening with AUDIT, community or inpatient assisted withdrawal with fixed-dose chlordiazepoxide, and relapse prevention pharmacotherapy (acamprosate, oral naltrexone, disulfiram).",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Screening & Severity Assessment",
        "recommendation": "Use AUDIT questionnaire to stratify drinking severity. Offer brief advice for hazardous drinking; comprehensive clinical assessment for dependence.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Medically Assisted Withdrawal",
        "recommendation": "Offer fixed-dose chlordiazepoxide or diazepam regimen for mild-to-moderate dependence. Use CIWA-Ar monitoring in inpatient settings.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Post-Withdrawal Relapse Prevention",
        "recommendation": "Initiate acamprosate or oral naltrexone alongside psychological therapies (CBT/motivational interviewing) once alcohol withdrawal is complete.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Second-Line Relapse Prevention",
        "recommendation": "Consider disulfiram if acamprosate/naltrexone are ineffective or contraindicated and patient expresses clear preference with supervised administration.",
        "evidenceGrade": "Moderate"
      }
    ],
    "decisionSupportRules": [
      "Do not prescribe disulfiram without baseline liver function tests and ECG.",
      "Provide emergency protocols and thiamine alongside all community detoxifications."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg115",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG115",
    "relatedIcd11Code": "6C40.1",
    "relatedSnomedId": "191811002"
  },
  {
    "guidelineId": "NG103",
    "title": "Food Allergy in Under 19s: Assessment and Diagnosis",
    "clinicalDomain": "Diabetes & Metabolism",
    "version": "2022 Update (v1.3)",
    "publishedDate": "2011-02-23",
    "lastUpdated": "2022-09-15",
    "targetPopulation": "Children and young people under 19 with suspected food allergy",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Allergy-focused clinical history, differentiation of IgE-mediated versus non-IgE-mediated reactions, skin prick testing, specific IgE measurements, and supervised oral food challenge.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Allergy-Focused Clinical History",
        "recommendation": "Take detailed dietary history: age at onset, symptoms, speed of reaction (<2 hours for IgE, up to 72 hours for non-IgE), quantity of food ingested.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Diagnostic Testing for IgE-Mediated Allergy",
        "recommendation": "Offer skin prick testing or serum specific IgE testing to suspected foods. Do not use unvalidated commercial tests (hair analysis, IgG testing).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Trial Elimination for Non-IgE-Mediated Allergy",
        "recommendation": "Trial 2-6 week elimination of suspected culprit allergen (e.g. cow's milk protein) with structured reintroduction to confirm diagnosis.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Management Plan & Epinephrine Prescription",
        "recommendation": "Provide written emergency allergy action plan, dietary exclusion advice with dietitian input, and prescribe two adrenaline autoinjectors if anaphylaxis risk.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Prescribe 2 adrenaline autoinjectors to all patients at risk of anaphylaxis and confirm device training at every contact.",
      "Ensure children on elimination diets receive appropriate micronutrient and calcium supplementation."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng103",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG103",
    "relatedIcd11Code": "4A85.2",
    "relatedSnomedId": "414285001"
  },
  {
    "guidelineId": "NG155",
    "title": "Tinnitus: Assessment and Management",
    "clinicalDomain": "Diabetes & Metabolism",
    "version": "2020 Validated",
    "publishedDate": "2020-03-11",
    "lastUpdated": "2020-03-11",
    "targetPopulation": "People presenting with tinnitus of any etiology",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Otological examination, audiometry, red-flag screening for pulsatile or unilateral tinnitus, cognitive behavioral therapy for tinnitus distress, and sound therapy/amplification.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Initial Clinical Examination & Triage",
        "recommendation": "Perform otoscopy and cranial nerve exam. Check for pulsatile tinnitus, unilateral presentation, hearing loss, or vertigo.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Audiological Assessment",
        "recommendation": "Perform pure tone audiometry and tympanometry. Screen for associated hearing loss across high and speech frequencies.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Targeted Imaging for Unilateral/Pulsatile Tinnitus",
        "recommendation": "Arrange urgent MRI of internal auditory meatus for unilateral tinnitus to exclude vestibular schwannoma, or vascular imaging for pulsatile tinnitus.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Tinnitus-Related Cognitive Behavioral Therapy",
        "recommendation": "Offer digital or face-to-face tinnitus-related CBT to reduce tinnitus-related distress. Offer hearing aids if coexisting hearing loss.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not offer betahistine, ginkgo biloba, or anticonvulsants for primary tinnitus management.",
      "Immediate referral for tinnitus associated with sudden sensorineural hearing loss within 24 hours."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng155",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG155",
    "relatedIcd11Code": "AB32",
    "relatedSnomedId": "60862001"
  },
  {
    "guidelineId": "NG146",
    "title": "Workplace Health: Long-Term Sickness Absence and Capability to Work",
    "clinicalDomain": "Diabetes & Metabolism",
    "version": "2019 Validated",
    "publishedDate": "2019-11-20",
    "lastUpdated": "2019-11-20",
    "targetPopulation": "Working-age adults experiencing prolonged sickness absence or recurring health conditions",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Early workplace intervention, multidisciplinary occupational health assessment, graduated return-to-work plans, and ergonomic/psychosocial accommodations.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Early Identification of Sickness Absence",
        "recommendation": "Initiate supportive workplace contact at 2-4 weeks of absence. Identify physical, psychological, and organizational barriers to return.",
        "evidenceGrade": "Moderate"
      },
      {
        "stepNumber": 2,
        "stage": "Occupational Health Referral",
        "recommendation": "Arrange multidisciplinary assessment involving occupational health physicians, ergonomists, and physiotherapists/psychologists.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Phased Return-to-Work Agreement",
        "recommendation": "Develop individualized return-to-work plan featuring modified hours, adjusted duties, ergonomic equipment, and pacing strategies.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Monitoring & Relapse Prevention",
        "recommendation": "Review progress weekly during initial return period; adjust duties proactively if fatigue or pain exacerbation occurs.",
        "evidenceGrade": "Moderate"
      }
    ],
    "decisionSupportRules": [
      "Fit notes should detail functional capability rather than simply certifying total incapacity.",
      "Promote early active return over prolonged passive bed rest for musculoskeletal complaints."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng146",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG146",
    "relatedIcd11Code": "QC40",
    "relatedSnomedId": "422843007"
  },
  {
    "guidelineId": "NG13",
    "title": "Suspected Neurological Conditions: Recognition and Referral",
    "clinicalDomain": "Diabetes & Metabolism",
    "version": "2021 Update (v1.2)",
    "publishedDate": "2019-07-03",
    "lastUpdated": "2021-02-17",
    "targetPopulation": "Adults presenting in non-specialist settings with neurological symptoms",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Recognition of common neurological presentations (tremor, sensory loss, weakness, dizziness, cognitive decline), emergency red flag triage, and referral pathway stratification.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Presentation-Based Symptom Categorization",
        "recommendation": "Categorize presentations: movement disorders, cranial nerve deficits, sensory/motor loss, dizziness/vertigo, and blackouts.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Red Flag Emergency Identification",
        "recommendation": "Immediately refer sudden onset focal deficit, new seizure with acute headache, or papilledema for emergency imaging within 24 hours.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Urgent Suspected CNS Malignancy/MS Triage",
        "recommendation": "Refer progressive subacute motor deficit or suspected multiple sclerosis relapse to neurology within 2 weeks.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Routine Non-Specialist Management",
        "recommendation": "Initiate non-specialist investigation for benign paroxysmal positional vertigo (Epley maneuver) or essential tremor prior to referral.",
        "evidenceGrade": "Moderate"
      }
    ],
    "decisionSupportRules": [
      "Do not order routine skull or spine X-rays for suspected neurological deficits.",
      "Differentiate orthostatic dizziness from true vestibular vertigo using Dix-Hallpike testing."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng13",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG13",
    "relatedIcd11Code": "8E40",
    "relatedSnomedId": "128477000"
  },
  {
    "guidelineId": "CG140",
    "title": "Autism Spectrum Disorder in Adults: Diagnosis and Management",
    "clinicalDomain": "Diabetes & Metabolism",
    "version": "2021 Update (v1.3)",
    "publishedDate": "2012-06-27",
    "lastUpdated": "2021-06-24",
    "targetPopulation": "Adults aged 18 and over with suspected or confirmed autism spectrum disorder",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Specialist comprehensive diagnostic assessment across developmental history, communication, and sensory profiles; psychosocial interventions; and personalized reasonable adjustments.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Identification & Specialist Referral",
        "recommendation": "Consider autism assessment if patient has persistent difficulties in reciprocal social interaction, repetitive patterns, or sensory hyper-/hypo-reactivity.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Comprehensive Multidisciplinary Assessment",
        "recommendation": "Conduct structured autism diagnostic assessment (e.g. ADOS, DISCO) reviewing childhood history, adaptive function, and comorbidities.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Psychosocial Interventions for Daily Living",
        "recommendation": "Offer structured group or individual social learning programmes, sensory environmental adjustments, and employment coaching.",
        "evidenceGrade": "Moderate"
      },
      {
        "stepNumber": 4,
        "stage": "Targeted Management of Mental Health Comorbidities",
        "recommendation": "Treat coexisting anxiety or depression with adapted CBT (explicit visual aids, concrete language). Do not use antipsychotics for core autism traits.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not prescribe antipsychotics to treat core features of autism in adults.",
      "Always offer written information in concrete, unambiguous language."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg140",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG140",
    "relatedIcd11Code": "6A02",
    "relatedSnomedId": "408856003"
  },
  {
    "guidelineId": "NG110",
    "title": "Tourette Syndrome and Chronic Tic Disorders: Recognition and Management",
    "clinicalDomain": "Diabetes & Metabolism",
    "version": "2021 Validated",
    "publishedDate": "2018-09-20",
    "lastUpdated": "2021-04-12",
    "targetPopulation": "Children, young people, and adults with motor and vocal tics",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Clinical diagnostic evaluation, psychoeducation, behavioral therapy (Comprehensive Behavioral Intervention for Tics - CBIT), and alpha-2 agonists or aripiprazole for debilitating tics.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Diagnostic Evaluation & Psychoeducation",
        "recommendation": "Confirm presence of multiple motor and at least one vocal tic lasting >1 year. Provide psychoeducation to schools and families.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Behavioral Intervention as First-Line",
        "recommendation": "Offer habit reversal training (HRT) or Comprehensive Behavioral Intervention for Tics (CBIT) as primary first-line therapy.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Pharmacotherapy with Alpha-2 Adrenergic Agonists",
        "recommendation": "Initiate clonidine or guanfacine when tics cause physical pain, significant distress, or impair academic/occupational performance.",
        "evidenceGrade": "Moderate"
      },
      {
        "stepNumber": 4,
        "stage": "Second-Line Dopamine Receptor Antagonists",
        "recommendation": "Consider low-dose aripiprazole or risperidone if behavioral therapy and alpha-2 agonists provide inadequate relief.",
        "evidenceGrade": "Moderate"
      }
    ],
    "decisionSupportRules": [
      "Screen actively for coexisting ADHD, OCD, anxiety, and depression before commencing medication.",
      "Monitor metabolic parameters, weight, and ECG when prescribing antipsychotic medications."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng110",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG110",
    "relatedIcd11Code": "8A05.00",
    "relatedSnomedId": "72535009"
  },
  {
    "guidelineId": "CG181",
    "title": "Cardiovascular Disease: Lipid Modification for Primary and Secondary Prevention",
    "clinicalDomain": "Diabetes & Metabolism",
    "version": "2023 Update (v3.1)",
    "publishedDate": "2014-07-18",
    "lastUpdated": "2023-12-14",
    "targetPopulation": "Adults with or at risk of atherosclerotic cardiovascular disease",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "QRISK3 10-year CVD risk threshold (≥10%), atorvastatin 20 mg for primary prevention, atorvastatin 80 mg for secondary prevention, ezetimibe add-on, and target non-HDL cholesterol reduction ≥40%.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Risk Assessment with QRISK3",
        "recommendation": "Calculate 10-year CVD risk using QRISK3 in adults aged 25-84. Offer lifestyle optimization and atorvastatin 20 mg if risk ≥ 10%.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Secondary Prevention High-Intensity Statin",
        "recommendation": "Initiate atorvastatin 80 mg daily immediately in all patients with confirmed coronary heart disease, TIA/stroke, or PAD.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Lipid Target Verification at 3 Months",
        "recommendation": "Measure non-HDL cholesterol at 3 months; aim for ≥40% reduction from baseline. If not achieved, check adherence and dietary factors.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Escalation with Ezetimibe or Bempedoic Acid",
        "recommendation": "Add ezetimibe 10 mg if non-HDL target not met or statin dose limited by adverse effects; consider bempedoic acid or PCSK9i.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Check baseline alanine aminotransferase (ALT) and renal function before starting statins.",
      "Do not routinely check serum creatine kinase (CK) unless the patient has unexplained generalized muscle pain."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg181",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG181",
    "relatedIcd11Code": "5C80",
    "relatedSnomedId": "13644009"
  },
  {
    "guidelineId": "NG200",
    "title": "COVID-19 Rapid Guideline: Managing Symptoms and Systemic Complications",
    "clinicalDomain": "Diabetes & Metabolism",
    "version": "2024 Update (v3.2)",
    "publishedDate": "2021-03-23",
    "lastUpdated": "2024-02-15",
    "targetPopulation": "Adults and children with acute symptoms or metabolic instability during COVID-19 infection",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Symptom management, continuous SpO2 pulse oximetry monitoring, dexamethasone and remdesivir/tocilizumab in hypoxemia, venous thromboprophylaxis, and tight glycaemic control during steroid therapy.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Oximetry & Severity Stratification",
        "recommendation": "Monitor room air oxygen saturation; SpO2 ≤ 92% (or ≤ 88% in chronic hypercapnia) warrants urgent emergency hospital admission.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Systemic Corticosteroids for Hypoxia",
        "recommendation": "Offer oral or IV dexamethasone 6 mg daily for up to 10 days to all patients requiring supplemental oxygen.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "IL-6 Inhibitor Escalation",
        "recommendation": "Add tocilizumab or sarilumab within 24-48 hours of ICU/HDU admission for progressive respiratory deterioration and elevated CRP.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Metabolic & Glycemic Surveillance",
        "recommendation": "Monitor blood glucose every 4-6 hours in diabetic and non-diabetic patients receiving high-dose dexamethasone; treat hyperglycemia promptly.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not give dexamethasone to non-hospitalized patients who do not require supplemental oxygen.",
      "Ensure standard prophylactic-dose low-molecular-weight heparin is prescribed unless contraindicated."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng200",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG200",
    "relatedIcd11Code": "RA01",
    "relatedSnomedId": "840539006"
  },
  {
    "guidelineId": "CG187",
    "title": "Acute Heart Failure: Diagnosis and Management",
    "clinicalDomain": "Cardiovascular",
    "version": "2021 Update (v1.5)",
    "publishedDate": "2014-10-08",
    "lastUpdated": "2021-11-18",
    "targetPopulation": "Adults presenting with new-onset or acutely decompensated heart failure",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Rapid biomarker triage with NT-proBNP, early intravenous loop diuretics with fluid monitoring, transthoracic echocardiography within 48h, and non-invasive positive pressure ventilation (CPAP).",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Urgent NT-proBNP Measurement",
        "recommendation": "Measure serum NT-proBNP in all patients with acute dyspnea; NT-proBNP < 300 ng/L effectively excludes acute heart failure.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Intravenous Diuretic Therapy",
        "recommendation": "Administer IV bolus furosemide promptly (matching or doubling previous oral dose); monitor urine output and renal function.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Echocardiography & Etiological Triage",
        "recommendation": "Perform transthoracic echocardiogram within 48 hours of admission to assess ejection fraction and valvular dysfunction.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Transition to GDMT Quadruple Therapy",
        "recommendation": "Initiate or uptitrate ACEi/ARNI, beta-blocker, MRA, and SGLT2 inhibitor prior to hospital discharge once hemodynamically stable.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not routinely offer intravenous nitrates unless the patient has concomitant acute myocardial ischemia or severe hypertensive pulmonary edema.",
      "Do not use inotropes routinely unless patient is in cardiogenic shock with end-organ hypoperfusion."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg187",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG187",
    "relatedIcd11Code": "BD11",
    "relatedSnomedId": "84114007"
  },
  {
    "guidelineId": "CG126",
    "title": "Stable Angina: Management",
    "clinicalDomain": "Cardiovascular",
    "version": "2020 Update (v1.4)",
    "publishedDate": "2011-07-27",
    "lastUpdated": "2020-08-12",
    "targetPopulation": "Adults with diagnosed stable angina pectoris",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Sublingual GTN for acute symptom relief, first-line monotherapy with beta-blocker or calcium channel blocker, escalation to dual antianginal therapy, and invasive coronary angiography for refractory symptoms.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Immediate Acute Relief & Education",
        "recommendation": "Prescribe sublingual GTN tablet or spray for rapid relief; advise taking a second dose after 5 minutes, call 999 if pain persists after 10 minutes.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "First-Line Antianginal Monotherapy",
        "recommendation": "Offer standard-release beta-blocker (e.g. bisoprolol) or rate-limiting CCB (e.g. diltiazem/verapamil) as first-line maintenance therapy.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Dual Antianginal Combination",
        "recommendation": "If symptoms persist on monotherapy, combine a beta-blocker with a dihydropyridine CCB (e.g. amlodipine) titrated to maximum tolerated dose.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Third-Line Add-on or Revascularization",
        "recommendation": "Add ivabradine, nicorandil, or ranolazine; offer diagnostic coronary angiography and PCI/CABG for uncontrolled Canadian Class III-IV angina.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not combine verapamil or diltiazem with a beta-blocker due to severe risk of bradycardia and complete heart block.",
      "All patients with stable angina must receive lifelong aspirin 75 mg and atorvastatin 80 mg for secondary prevention."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg126",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG126",
    "relatedIcd11Code": "BA40",
    "relatedSnomedId": "233821000"
  },
  {
    "guidelineId": "CG147",
    "title": "Peripheral Arterial Disease: Diagnosis and Management",
    "clinicalDomain": "Cardiovascular",
    "version": "2020 Update (v1.3)",
    "publishedDate": "2012-08-08",
    "lastUpdated": "2020-12-09",
    "targetPopulation": "Adults with intermittent claudication or critical limb-threatening ischemia",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Ankle-brachial pressure index (ABPI) diagnostic measurement, supervised exercise programme (SEP), clopidogrel 75 mg secondary prevention, endovascular angioplasty, and bypass surgery.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "ABPI Diagnostic Assessment",
        "recommendation": "Measure resting ankle-brachial pressure index (ABPI) using Doppler probe; ABPI ≤ 0.90 confirms peripheral arterial disease.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Secondary Prevention Pharmacotherapy",
        "recommendation": "Prescribe clopidogrel 75 mg daily and atorvastatin 80 mg daily to all patients with confirmed peripheral arterial disease.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Supervised Exercise Programme (SEP)",
        "recommendation": "Offer a supervised exercise programme of 2 hours per week for 3 months as first-line conservative therapy for intermittent claudication.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Angioplasty & Vascular Revascularization",
        "recommendation": "Offer endovascular angioplasty or surgical bypass for patients with critical limb ischemia or debilitating claudication unresponsive to SEP.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not offer naftidrofuryl oxalate or cilostazol unless supervised exercise is unavailable or unsuccessful.",
      "Patients with non-healing foot ulcers and unrecordable Doppler signals require same-day vascular surgery review."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg147",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG147",
    "relatedIcd11Code": "BD40",
    "relatedSnomedId": "399957001"
  },
  {
    "guidelineId": "CG172",
    "title": "Myocardial Infarction: Cardiac Rehabilitation and Prevention of Cardiovascular Disease",
    "clinicalDomain": "Cardiovascular",
    "version": "2021 Update (v1.5)",
    "publishedDate": "2013-11-13",
    "lastUpdated": "2021-08-11",
    "targetPopulation": "Adults recovering from acute myocardial infarction (STEMI or NSTEMI)",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Multicomponent cardiac rehabilitation, guideline-directed medical therapy (aspirin, P2Y12 inhibitor, beta-blocker, ACEi, high-intensity statin), lifestyle coaching, and mental health support.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Pre-Discharge Rehabilitation Referral",
        "recommendation": "Offer comprehensive cardiac rehabilitation before hospital discharge; aim to commence within 10 working days of discharge.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Dual Antiplatelet Therapy (DAPT)",
        "recommendation": "Prescribe aspirin 75 mg plus ticagrelor 90 mg bd (or prasugrel 10 mg od) for 12 months post-MI, transitioning to aspirin monotherapy.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Neurohormonal Blockade Titration",
        "recommendation": "Initiate and uptitrate ACE inhibitor (or ARB) and beta-blocker to target doses; add eplerenone if LVEF ≤ 40% and clinical heart failure.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Intensive Lipid Lowering",
        "recommendation": "Prescribe atorvastatin 80 mg daily regardless of baseline lipid levels; monitor non-HDL cholesterol reduction target ≥ 40%.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not routinely offer fish oil (omega-3 fatty acid) supplements or vitamins C/E for post-MI prevention.",
      "Continue beta-blocker therapy for at least 1 year in patients without reduced left ventricular ejection fraction."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg172",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG172",
    "relatedIcd11Code": "BA41",
    "relatedSnomedId": "22298006"
  },
  {
    "guidelineId": "CG167",
    "title": "Myocardial Infarction with ST-Segment Elevation: Acute Management",
    "clinicalDomain": "Cardiovascular",
    "version": "2020 Update (v1.4)",
    "publishedDate": "2013-07-10",
    "lastUpdated": "2020-11-18",
    "targetPopulation": "Adults with acute ST-segment elevation myocardial infarction (STEMI)",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Immediate primary percutaneous coronary intervention (pPCI) within 120 minutes of diagnosis, pre-hospital dual antiplatelet loading, radial arterial access, and mechanical complication surveillance.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Emergency ECG & Immediate Reperfusion Decision",
        "recommendation": "Perform 12-lead ECG immediately. Offer primary PCI if presentation within 12 hours of symptom onset and transfer time < 120 minutes.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Fibrinolysis when PCI Delayed",
        "recommendation": "Offer immediate intravenous fibrinolysis (e.g. tenecteplase) if anticipated transfer time to primary PCI exceeds 120 minutes.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Pre-Procedural Antiplatelet Loading",
        "recommendation": "Administer loading doses of aspirin 300 mg plus prasugrel 60 mg (or ticagrelor 180 mg) and unfractionated heparin/bivalirudin.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Radial Access & Drug-Eluting Stents",
        "recommendation": "Perform primary PCI via the radial artery approach and deploy second-generation drug-eluting stents (DES).",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not routinely administer supplemental oxygen unless SpO2 < 90% or the patient is in respiratory distress.",
      "Transfer immediately for rescue PCI if ST-segment resolution is < 50% at 90 minutes post-fibrinolysis."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg167",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG167",
    "relatedIcd11Code": "BA41.0",
    "relatedSnomedId": "401303003"
  },
  {
    "guidelineId": "CG130",
    "title": "Hyperglycaemia in Acute Coronary Syndromes: Management",
    "clinicalDomain": "Cardiovascular",
    "version": "2021 Update (v1.2)",
    "publishedDate": "2011-10-26",
    "lastUpdated": "2021-04-14",
    "targetPopulation": "Adults admitted with acute myocardial infarction or unstable angina and elevated blood glucose",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Routine blood glucose testing upon admission for all ACS patients, dose-adjusted intravenous insulin infusion for blood glucose > 11.0 mmol/L, and routine HbA1c testing prior to discharge.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Admission Glycemic Screening",
        "recommendation": "Measure blood glucose in all patients admitted with suspected acute coronary syndrome regardless of known diabetic history.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Dose-Adjusted Insulin for Severe Hyperglycaemia",
        "recommendation": "Offer variable-rate intravenous insulin infusion to patients with ACS and blood glucose > 11.0 mmol/L while avoiding hypoglycemia.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "HbA1c & Fasting Glucose Screening",
        "recommendation": "Measure HbA1c in all patients without known diabetes who have hyperglycemia during ACS to detect undiagnosed diabetes.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Post-Discharge Diabetes Care Integration",
        "recommendation": "Refer patients with newly identified elevated HbA1c (≥48 mmol/mol) to structured diabetes management and primary care.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Avoid intensive insulin regimens that cause hypoglycemia (blood glucose < 4.0 mmol/L), which increases cardiovascular mortality.",
      "Do not use routine glucose-insulin-potassium (GIK) infusions in ACS."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg130",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG130",
    "relatedIcd11Code": "5A14 & BA41",
    "relatedSnomedId": "80394007"
  },
  {
    "guidelineId": "CG108",
    "title": "Chronic Heart Failure: Management in Primary and Secondary Care",
    "clinicalDomain": "Cardiovascular",
    "version": "2018 Validated Foundation",
    "publishedDate": "2010-08-25",
    "lastUpdated": "2018-09-12",
    "targetPopulation": "Adults with chronic heart failure due to left ventricular systolic dysfunction",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Foundational framework for multidisciplinary heart failure team follow-up, sodium and fluid moderation, device therapy evaluation (ICD/CRT), and functional rehabilitation.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Specialist MDT Heart Failure Care",
        "recommendation": "Ensure all patients with chronic heart failure are under the coordinated care of a multidisciplinary heart failure team.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "First-Line Combination Therapy",
        "recommendation": "Prescribe ACE inhibitor (or ARB) and evidence-based beta-blocker (bisoprolol, carvedilol, or nebivolol) titrated to maximum tolerated doses.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Mineralocorticoid Receptor Antagonists",
        "recommendation": "Add spironolactone or eplerenone for persistent symptoms (NYHA II-IV) and LVEF ≤ 35%; monitor serum potassium and creatinine closely.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Device Evaluation for CRT and ICD",
        "recommendation": "Refer for cardiac resynchronization therapy (CRT-P/CRT-D) if QRS duration ≥ 130 ms with LBBB morphology and LVEF ≤ 35%.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not initiate verapamil, diltiazem, or short-acting dihydropyridines in heart failure with reduced ejection fraction.",
      "Stop MRA therapy if serum potassium rises above 5.5 mmol/L or creatinine doubles."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg108",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG108",
    "relatedIcd11Code": "BD10",
    "relatedSnomedId": "88805009"
  },
  {
    "guidelineId": "CG68",
    "title": "Stroke and Transient Ischaemic Attack: Diagnosis and Initial Management",
    "clinicalDomain": "Cardiovascular",
    "version": "2019 Update (v1.3)",
    "publishedDate": "2008-07-23",
    "lastUpdated": "2019-05-01",
    "targetPopulation": "People over 16 with suspected acute stroke or TIA",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Immediate brain imaging with non-contrast CT within 1 hour of hospital arrival, IV thrombolysis with alteplase within 4.5 hours, mechanical thrombectomy within 6 hours, and urgent TIA specialist clinic within 24 hours.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Hyperacute Brain CT Imaging",
        "recommendation": "Perform non-contrast head CT immediately (and within 1 hour of arrival) for any candidate for reperfusion or anticoagulated patient.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Intravenous Thrombolysis (Alteplase)",
        "recommendation": "Administer IV alteplase 0.9 mg/kg within 4.5 hours of symptom onset once intracranial hemorrhage is ruled out.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Mechanical Thrombectomy for Large Vessel Occlusion",
        "recommendation": "Offer emergency mechanical thrombectomy within 6 hours of symptom onset for confirmed anterior circulation large vessel occlusion.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Acute Aspirin & Hyperacute Stroke Unit Care",
        "recommendation": "Offer aspirin 300 mg daily immediately (or 24 hours post-thrombolysis) and admit directly to a dedicated hyperacute stroke unit.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not lower blood pressure in acute ischemic stroke unless systolic BP > 220 mmHg or diastolic > 120 mmHg, or if receiving thrombolysis (>185/110 mmHg).",
      "All patients with suspected TIA must receive immediate aspirin 300 mg and be assessed by a stroke specialist within 24 hours."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg68",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG68",
    "relatedIcd11Code": "8B20",
    "relatedSnomedId": "230690007"
  },
  {
    "guidelineId": "CG92",
    "title": "Venous Thromboembolism in Inpatients: Risk Assessment and Prophylaxis",
    "clinicalDomain": "Cardiovascular",
    "version": "2018 Validated Foundation",
    "publishedDate": "2010-01-27",
    "lastUpdated": "2018-03-21",
    "targetPopulation": "All adult patients admitted to hospital for surgery or acute medical illness",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Universal mandatory VTE risk assessment upon hospital admission, mechanical prophylaxis with anti-embolism stockings, and pharmacological prophylaxis with low-molecular-weight heparin (LMWH).",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Mandatory Admission VTE Risk Assessment",
        "recommendation": "Assess all patients admitted to hospital for VTE risk and bleeding risk using a validated national risk assessment tool.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Mechanical Thromboprophylaxis",
        "recommendation": "Offer graduated compression stockings or intermittent pneumatic compression devices unless peripheral arterial disease is present.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Pharmacological Thromboprophylaxis",
        "recommendation": "Offer prophylactic LMWH or fondaparinux to medical patients with reduced mobility and surgical patients with moderate-to-high risk.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Extended Post-Discharge Prophylaxis",
        "recommendation": "Provide extended thromboprophylaxis (28-35 days) for major orthopedic surgery (hip/knee arthroplasty) or major pelvic/abdominal cancer resection.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not prescribe graduated compression stockings if ankle-brachial pressure index < 0.8 or severe peripheral neuropathy.",
      "Reassess VTE and bleeding risk within 24 hours of admission and whenever clinical status changes."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg92",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG92",
    "relatedIcd11Code": "BD71",
    "relatedSnomedId": "233935004"
  },
  {
    "guidelineId": "CG109",
    "title": "Transient Loss of Consciousness in Over 16s: Assessment and Referral",
    "clinicalDomain": "Cardiovascular",
    "version": "2020 Update (v1.2)",
    "publishedDate": "2010-08-25",
    "lastUpdated": "2020-09-02",
    "targetPopulation": "People aged 16 and over presenting with blackouts or syncope",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Detailed clinical history from patient and eyewitnesses, 12-lead ECG, orthostatic blood pressure measurement, and stratification into vasovagal syncope, orthostatic hypotension, or cardiac syncope.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Clinical History & Eyewitness Account",
        "recommendation": "Record exact posture before blackout, prodromal symptoms (sweating, pallor), tongue biting, post-ictal confusion, and duration of event.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Routine 12-Lead ECG for All Cases",
        "recommendation": "Perform 12-lead ECG; examine specifically for conduction abnormalities, prolonged QTc, Brugada pattern, or ventricular pre-excitation.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Orthostatic Blood Pressure Measurement",
        "recommendation": "Measure lying and standing blood pressure (at 1 and 3 minutes); a drop of ≥20 mmHg systolic or ≥10 mmHg diastolic confirms orthostatic hypotension.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Urgent Cardiology Referral for Red Flags",
        "recommendation": "Refer urgently to cardiology if blackout during exertion, family history of unexplained sudden cardiac death <40 years, or abnormal ECG.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not routinely order EEG or brain imaging for uncomplicated syncope without focal neurological signs.",
      "Patients with red-flag cardiac syncope must be advised to stop driving immediately until investigated."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg109",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG109",
    "relatedIcd11Code": "MG45",
    "relatedSnomedId": "271594007"
  },
  {
    "guidelineId": "NG144",
    "title": "Blood Transfusion: Clinical Indications, Alternatives and Monitoring",
    "clinicalDomain": "Cardiovascular",
    "version": "2020 Update (v1.3)",
    "publishedDate": "2015-11-18",
    "lastUpdated": "2020-04-29",
    "targetPopulation": "Patients who may need blood transfusion in hospital settings",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Restrictive red blood cell transfusion threshold (Hb < 70 g/L, target 70-90 g/L for non-ACS; Hb < 80 g/L for ACS), single-unit transfusion strategy, tranexamic acid in major surgery, and iron deficiency optimization.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Preoperative Anemia Assessment & Iron Therapy",
        "recommendation": "Screen for iron deficiency anemia ≥2 weeks before elective surgery; treat with oral or IV iron rather than pre-op blood transfusion.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Restrictive RBC Transfusion Triggers",
        "recommendation": "Use restrictive threshold of Hb < 70 g/L (target 70-90 g/L) for patients without acute coronary syndrome; Hb < 80 g/L for ACS.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Single-Unit Transfusion Strategy",
        "recommendation": "Transfuse single units of red blood cells in clinically stable non-bleeding patients; reassess clinically and check Hb before second unit.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Tranexamic Acid for Surgical Bleeding",
        "recommendation": "Offer intravenous tranexamic acid to adults undergoing surgery expected to have blood loss > 500 mL.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not use fresh frozen plasma (FFP) to correct minor non-bleeding coagulopathy or abnormal INR without bleeding.",
      "Platelet transfusion trigger is < 10 x 10^9/L in non-bleeding patients, or < 50 x 10^9/L in active major bleeding."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng144",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG144",
    "relatedIcd11Code": "QA00",
    "relatedSnomedId": "116859006"
  },
  {
    "guidelineId": "CG174",
    "title": "Intravenous Fluid Therapy in Adults in Hospital",
    "clinicalDomain": "Cardiovascular",
    "version": "2020 Update (v1.4)",
    "publishedDate": "2013-12-10",
    "lastUpdated": "2020-05-13",
    "targetPopulation": "Adults in hospital receiving intravenous fluid therapy",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Assessment across the 5 Rs: Resuscitation, Routine maintenance, Replacement, Redistribution, and Reassessment; balanced crystalloid preference; and standard 25-30 mL/kg/day maintenance.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Fluid Resuscitation with Fluid Bolus",
        "recommendation": "Identify shock/hypovolemia; administer 500 mL balanced crystalloid bolus (e.g. Hartmann's) over <15 minutes; reassess ABCDE response.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Routine Maintenance Fluid Calculation",
        "recommendation": "Prescribe 25-30 mL/kg/day water, ~1 mmol/kg/day sodium/potassium/chloride, and 50-100 g/day glucose for patients with no oral intake.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Replacement of Ongoing Losses",
        "recommendation": "Adjust fluids for abnormal gastrointestinal, drain, or third-space losses; match electrolyte composition of lost body fluids.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Daily Monitoring & Discontinuation",
        "recommendation": "Check daily weight, fluid balance chart, serum urea, electrolytes, and creatinine; discontinue IV fluids as soon as oral intake is established.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not use 0.9% sodium chloride as routine sole maintenance fluid due to risk of hyperchloremic metabolic acidosis.",
      "Do not administer > 2,000 mL resuscitation fluid without senior clinical / ICU review."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg174",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG174",
    "relatedIcd11Code": "QA00",
    "relatedSnomedId": "429699002"
  },
  {
    "guidelineId": "CG134",
    "title": "Anaphylaxis: Assessment and Emergency Referral",
    "clinicalDomain": "Cardiovascular",
    "version": "2020 Update (v1.2)",
    "publishedDate": "2011-12-14",
    "lastUpdated": "2020-08-26",
    "targetPopulation": "Children, young people, and adults presenting with suspected anaphylactic reaction",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Immediate intramuscular adrenaline (epinephrine) into anterolateral mid-thigh, serial mast cell tryptase timing, observation for biphasic reactions, and auto-injector prescription.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Immediate Intramuscular Adrenaline",
        "recommendation": "Administer IM adrenaline (1:1000) 500 mcg in adults (300 mcg in child 6-12y, 150 mcg in under 6y) into mid-thigh immediately.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Serial Mast Cell Tryptase Blood Sampling",
        "recommendation": "Take timed blood samples for mast cell tryptase: initial sample as soon as possible, second sample at 1-2 hours, baseline sample at >24 hours.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Post-Anaphylaxis Inpatient Observation",
        "recommendation": "Observe patients in hospital for 6 to 12 hours from symptom onset to monitor for late-phase or biphasic anaphylactic reactions.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Discharge Action Plan & Auto-Injector Training",
        "recommendation": "Prescribe two adrenaline auto-injectors, provide hands-on device training, and refer to a specialist allergy clinic.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not delay intramuscular adrenaline to administer antihistamines or corticosteroids.",
      "Never inject adrenaline intravenously in a non-cardiac arrest patient without specialist critical care titration."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg134",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG134",
    "relatedIcd11Code": "4A84",
    "relatedSnomedId": "39579001"
  },
  {
    "guidelineId": "CG94",
    "title": "Unstable Angina and NSTEMI: Early Management",
    "clinicalDomain": "Cardiovascular",
    "version": "2020 Update (v1.3)",
    "publishedDate": "2010-03-24",
    "lastUpdated": "2020-11-18",
    "targetPopulation": "Adults with acute non-ST segment elevation acute coronary syndromes",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "High-sensitivity troponin testing, GRACE score risk estimation (predicted 6-month mortality), fondaparinux anticoagulation, and early invasive angiography within 72h for intermediate/high risk.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Serial High-Sensitivity Cardiac Troponin",
        "recommendation": "Measure hs-cTn on arrival and repeat according to validated 0/1h or 0/2h rapid rule-out/rule-in diagnostic algorithm.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "GRACE Risk Score Stratification",
        "recommendation": "Calculate GRACE score upon admission. Intermediate (>3.0%) or high risk (>6.0%) indicates need for early invasive angiography.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Parenteral Anticoagulation with Fondaparinux",
        "recommendation": "Offer fondaparinux 2.5 mg SC daily to all patients without high bleeding risk or creatinine clearance < 20 mL/min.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Invasive Coronary Angiography within 72 Hours",
        "recommendation": "Perform coronary angiography within 72 hours of admission for patients with GRACE score > 3.0% or recurrent chest pain.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Fondaparinux is preferred over enoxaparin or unfractionated heparin due to lower bleeding complications.",
      "Switch to unfractionated heparin bolus during percutaneous coronary intervention to prevent catheter thrombosis."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg94",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG94",
    "relatedIcd11Code": "BA41.1",
    "relatedSnomedId": "401314000"
  },
  {
    "guidelineId": "CG182",
    "title": "Chronic Kidney Disease in Adults: Assessment and Management",
    "clinicalDomain": "Renal & Urology",
    "version": "2021 Validated Foundation",
    "publishedDate": "2014-07-23",
    "lastUpdated": "2021-08-25",
    "targetPopulation": "Adults with or at risk of chronic kidney disease",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Foundational framework for eGFR and ACR staging (G1-G5, A1-A3), blood pressure targets (<140/90 mmHg, or <130/80 mmHg if ACR ≥ 70 mg/mmol), and ACEi/ARB renal protection.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "eGFR and Urine ACR Dual Classification",
        "recommendation": "Classify CKD using both eGFR category (G1-G5) and albuminuria category (A1: <3 mg/mmol, A2: 3-30, A3: >30 mg/mmol).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Renin-Angiotensin System Blockade",
        "recommendation": "Offer ACE inhibitor or ARB titrated to highest tolerated dose for all patients with CKD and ACR ≥ 30 mg/mmol or diabetes with ACR ≥ 3 mg/mmol.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Strict Blood Pressure Management",
        "recommendation": "Maintain clinic BP < 140/90 mmHg; target < 130/80 mmHg if ACR ≥ 70 mg/mmol to decelerate renal functional decline.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Nephrology Referral Thresholds",
        "recommendation": "Refer to specialist nephrology if 4-variable Kidney Failure Risk Equation (KFRE) 5-year risk > 5%, or eGFR drops > 25% within 12 months.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Accept an eGFR reduction of up to 30% from baseline upon commencing ACEi/ARB provided serum potassium remains stable.",
      "Repeat serum potassium and creatinine within 1 to 2 weeks of initiating or increasing ACEi/ARB."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg182",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG182",
    "relatedIcd11Code": "GB61",
    "relatedSnomedId": "709044004"
  },
  {
    "guidelineId": "CG169",
    "title": "Acute Kidney Injury: Prevention, Detection and Management",
    "clinicalDomain": "Renal & Urology",
    "version": "2019 Validated Foundation",
    "publishedDate": "2013-08-28",
    "lastUpdated": "2019-12-18",
    "targetPopulation": "Adults, young people, and children in acute hospital or community care",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Early recognition using automated e-alerts, KDIGO serum creatinine and urine output staging (Stage 1-3), medication review (STOP NSAIDs/ACEi in shock), and renal ultrasound within 24h for obstruction.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "KDIGO AKI Diagnostic Staging",
        "recommendation": "Identify AKI using KDIGO criteria: rise in serum creatinine ≥ 26 umol/L within 48h, ≥ 50% rise within 7 days, or urine output < 0.5 mL/kg/h for 6h.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Urgent Medication Review & Sick Day Rules",
        "recommendation": "Temporarily withhold nephrotoxic drugs (NSAIDs, aminoglycosides) and drugs that reduce renal perfusion (ACEi, ARBs, diuretics) during acute hypovolemia.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Urgent Renal Tract Ultrasound for Obstruction",
        "recommendation": "Perform urgent renal ultrasound within 24 hours in all patients with AKI of unexplained cause or suspected urinary tract obstruction.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Emergency Indications for Dialysis",
        "recommendation": "Refer urgently to nephrology or critical care for refractory hyperkalemia (>6.5 mmol/L), severe metabolic acidosis, or pulmonary edema.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not routinely offer loop diuretics to treat AKI unless there is concurrent volume overload / pulmonary edema.",
      "Do not use low-dose dopamine for renal protection."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg169",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG169",
    "relatedIcd11Code": "GB60",
    "relatedSnomedId": "14669001"
  },
  {
    "guidelineId": "CG171",
    "title": "Urinary Incontinence in Neurological Disease: Assessment and Management",
    "clinicalDomain": "Renal & Urology",
    "version": "2021 Update (v1.3)",
    "publishedDate": "2012-08-08",
    "lastUpdated": "2021-06-16",
    "targetPopulation": "Children, young people, and adults with neurological conditions causing lower urinary tract dysfunction",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Protection of upper renal tract function, urodynamic investigations, clean intermittent self-catheterisation (CISC), antimuscarinics/mirabegron, and intravesical botulinum toxin.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Upper Renal Tract Safety Assessment",
        "recommendation": "Screen all neurological bladder patients with renal tract ultrasound and serum creatinine to detect silent hydronephrosis.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Clean Intermittent Self-Catheterisation (CISC)",
        "recommendation": "Teach CISC as the preferred method of bladder emptying for incomplete bladder emptying or detrusor underactivity.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Pharmacotherapy for Neurogenic Detrusor Overactivity",
        "recommendation": "Offer antimuscarinics (or mirabegron) to reduce high intravesical pressures and prevent upper urinary tract damage.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Intravesical Botulinum Toxin Injections",
        "recommendation": "Offer intravesical botulinum toxin type A for persistent neurogenic detrusor overactivity in patients performing CISC.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Avoid indwelling urethral catheters where intermittent catheterisation or suprapubic catheterisation is feasible.",
      "Monitor annually with renal ultrasound and creatinine in high-pressure neurological bladder."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg171",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG171",
    "relatedIcd11Code": "GC00 & 8A00",
    "relatedSnomedId": "397829000"
  },
  {
    "guidelineId": "CG148",
    "title": "Urinary Incontinence in Women: Management",
    "clinicalDomain": "Renal & Urology",
    "version": "2019 Validated Foundation",
    "publishedDate": "2013-09-10",
    "lastUpdated": "2019-04-02",
    "targetPopulation": "Women aged 18 and over with stress, urgency, or mixed urinary incontinence",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Bladder diary assessment, pelvic floor muscle training (PFMT) for ≥3 months for stress incontinence, bladder training and antimuscarinics/mirabegron for urgency incontinence, and colposuspension/bulking.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "History, Examination & Bladder Diary",
        "recommendation": "Categorize into stress, urgency, or mixed incontinence; review frequency-volume bladder chart for at least 3 days.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Supervised Pelvic Floor Muscle Training",
        "recommendation": "Offer at least 3 months of supervised PFMT (at least 8 contractions 3 times daily) as first-line for stress or mixed incontinence.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Bladder Retraining & Antimuscarinics",
        "recommendation": "Offer 6 weeks of bladder training for urgency incontinence; add oxybutynin, tolterodine, or mirabegron if urgency persists.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Surgical Options for Stress Incontinence",
        "recommendation": "Consider colposuspension, autologous fascial sling, or intramural urethral bulking agents for persistent stress incontinence.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not offer systemic hormone replacement therapy for the treatment of urinary incontinence.",
      "Check post-void residual urine volume before initiating antimuscarinics in women with mixed voiding symptoms."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg148",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG148",
    "relatedIcd11Code": "MF50",
    "relatedSnomedId": "165232002"
  },
  {
    "guidelineId": "CG97",
    "title": "Lower Urinary Tract Symptoms in Men: Management",
    "clinicalDomain": "Renal & Urology",
    "version": "2021 Update (v1.3)",
    "publishedDate": "2010-05-19",
    "lastUpdated": "2021-06-09",
    "targetPopulation": "Men aged 18 and over with bothersome lower urinary tract symptoms (LUTS)",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "IPSS symptom score calculation, digital rectal examination and PSA counseling, alpha-blocker (tamsulosin) for voiding symptoms, 5-alpha reductase inhibitor (finasteride) for prostate volume > 30g, and TURP.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Clinical Evaluation & IPSS Score",
        "recommendation": "Assess LUTS with urinary flow chart and International Prostate Symptom Score (IPSS); perform DRE and offer PSA testing with counseling.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Alpha-Blocker for Moderate-to-Severe Voiding Symptoms",
        "recommendation": "Offer an alpha-blocker (e.g. tamsulosin 400 mcg daily) to men with moderate-to-severe voiding symptoms.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "5-ARI Monotherapy or Combination Therapy",
        "recommendation": "Add a 5-alpha reductase inhibitor (finasteride or dutasteride) if prostate is enlarged (>30 g or PSA > 1.4 ng/mL) and high risk of progression.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Surgical Resection (TURP / HoLEP)",
        "recommendation": "Offer transurethral resection of prostate (TURP) or holmium laser enucleation (HoLEP) for severe voiding symptoms refractory to medical therapy.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "5-alpha reductase inhibitors require 6 months of continuous therapy before symptom relief and reduce PSA levels by approximately 50%.",
      "Do not routinely offer catheterisation for male LUTS without acute urinary retention or upper tract dilatation."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg97",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG97",
    "relatedIcd11Code": "GA80",
    "relatedSnomedId": "445504000"
  },
  {
    "guidelineId": "CG54",
    "title": "Urinary Tract Infection in Under 16s: Diagnosis and Management",
    "clinicalDomain": "Renal & Urology",
    "version": "2022 Update (v1.5)",
    "publishedDate": "2007-08-22",
    "lastUpdated": "2022-07-20",
    "targetPopulation": "Infants and children under 16 years presenting with suspected UTI",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Clean catch urine sampling, dipstick leukocyte/nitrite triage, prompt oral antibiotics (trimethoprim/nitrofurantoin) for cystitis, IV cefotaxime for pyelonephritis, and selective ultrasound/DMSA scanning.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Urine Collection & Dipstick Triage",
        "recommendation": "Obtain clean catch urine sample; in under 3 months, refer immediately to pediatric services. For older children, test with dipstick (leukocytes + nitrites).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Treatment of Lower UTI (Cystitis)",
        "recommendation": "Offer 3-day course of oral trimethoprim, nitrofurantoin, or cefalexin based on local antimicrobial resistance patterns.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Treatment of Acute Pyelonephritis / Upper UTI",
        "recommendation": "Treat upper UTI / systemic illness with 7-10 days of oral cefalexin or co-amoxiclav, or intravenous antibiotics if vomiting or systemically unwell.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Imaging Strategy (Ultrasound & DMSA)",
        "recommendation": "Perform renal tract ultrasound within 6 weeks for recurrent UTI or atypical UTI (poor urine flow, rising creatinine, non-E. coli).",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not use bag collection for urine culture if clean catch is possible due to high false-positive contamination rates.",
      "Nitrofurantoin should not be used for suspected pyelonephritis due to poor renal tissue penetration."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg54",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG54",
    "relatedIcd11Code": "GC08",
    "relatedSnomedId": "68566005"
  },
  {
    "guidelineId": "CG156",
    "title": "Fertility Problems: Assessment and Treatment",
    "clinicalDomain": "Renal & Urology",
    "version": "2021 Update (v1.3)",
    "publishedDate": "2013-02-20",
    "lastUpdated": "2021-08-04",
    "targetPopulation": "People experiencing difficulty conceiving after 1 year of regular unprotected intercourse",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Semen analysis, mid-luteal progesterone ovulation testing, tubal patency evaluation (hysterosalpingography), lifestyle counseling, ovulation induction, and in vitro fertilisation (IVF) criteria.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Initial Investigation at 12 Months",
        "recommendation": "Offer semen analysis to the male partner and mid-luteal serum progesterone to female partner after 1 year of unprotected intercourse.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Assessment of Tubal Patency",
        "recommendation": "Offer hysterosalpingography (HSG) or laparoscopy and dye test to evaluate tubal patency in women without known pelvic comorbidities.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Medical Ovulation Induction",
        "recommendation": "Offer clomifene citrate or letrozole (or gonadotrophins) with ultrasound monitoring for women with WHO Group II anovulatory infertility.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "In Vitro Fertilisation (IVF) Criteria",
        "recommendation": "Offer up to 3 full cycles of IVF to women aged under 40 who have unexplained infertility or severe male factor infertility for ≥2 years.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Single embryo transfer should be practiced to reduce the medical risks associated with multiple pregnancies.",
      "Semen analysis abnormalities require repeat testing 3 months later to confirm persistent deficit."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg156",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG156",
    "relatedIcd11Code": "GA30 & GA31",
    "relatedSnomedId": "278844005"
  },
  {
    "guidelineId": "NG114",
    "title": "Chronic Obstructive Pulmonary Disease (Acute Exacerbation): Antimicrobial Prescribing",
    "clinicalDomain": "Respiratory",
    "version": "2020 Update (v1.2)",
    "publishedDate": "2018-12-05",
    "lastUpdated": "2020-04-22",
    "targetPopulation": "Adults aged 16 and over with an acute exacerbation of COPD",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Symptom triage using Anthonisen criteria (increased dyspnea, sputum purulence, sputum volume), short 5-day antibiotic course (amoxicillin/doxycycline), and oral prednisolone 30 mg for 5 days.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Anthonisen Criteria Clinical Assessment",
        "recommendation": "Assess for cardinal features: increased breathlessness, increased sputum volume, and purulence. Prescribe antibiotics if purulent sputum present.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Short-Course Oral Antibiotics",
        "recommendation": "Offer a 5-day course of first-line oral amoxicillin 500 mg tds, doxycycline 200 mg day 1 then 100 mg od, or clarithromycin 500 mg bd.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Oral Corticosteroids for Exacerbation",
        "recommendation": "Offer oral prednisolone 30 mg daily for 5 days to reduce treatment failure and shorten recovery time.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Safety-Netting & Inhaler Review",
        "recommendation": "Review inhaler technique and optimize bronchodilators; advise seeking urgent medical care if breathlessness worsens or cyanosis develops.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not prescribe prolonged antibiotic courses (>5 days) for uncomplicated COPD exacerbations.",
      "Send sputum sample for microscopy and culture only if frequent exacerbations or antibiotic resistance suspected."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng114",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG114",
    "relatedIcd11Code": "CA22.0",
    "relatedSnomedId": "195951007"
  },
  {
    "guidelineId": "NG96",
    "title": "Bronchiolitis in Children: Diagnosis and Management",
    "clinicalDomain": "Respiratory",
    "version": "2021 Update (v1.3)",
    "publishedDate": "2015-06-01",
    "lastUpdated": "2021-08-11",
    "targetPopulation": "Children under 2 years presenting with acute bronchiolitis",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Clinical diagnosis based on coryza, persistent cough, tachypnoea, chest retractions, and bilateral fine inspiratory crackles; supportive oxygen and hydration; avoiding unnecessary pharmacological therapies.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Clinical Diagnosis & Red Flag Assessment",
        "recommendation": "Diagnose clinically in children under 2 years with 1-3 days of coryza followed by cough, tachypnea, and chest crackles/wheeze.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Hydration & Nutritional Support",
        "recommendation": "Assess oral fluid intake; offer small frequent feeds or nasogastric tube fluids if taking < 50% of normal volume.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Supplemental Oxygen Therapy",
        "recommendation": "Administer humidified oxygen if persistent oxygen saturation is < 92% (or < 90% in infants under 6 weeks or congenital heart disease).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "High-Flow Nasal Cannula / CPAP Escalation",
        "recommendation": "Consider high-flow heated humidified oxygen or CPAP for progressive respiratory exhaustion or recurrent apnea.",
        "evidenceGrade": "Moderate"
      }
    ],
    "decisionSupportRules": [
      "Do NOT administer bronchodilators, nebulized adrenaline, systemic corticosteroids, or antibiotics for acute bronchiolitis.",
      "Do NOT perform routine chest radiography for bronchiolitis without suspicion of pneumothorax or intensive care admission."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng96",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG96",
    "relatedIcd11Code": "CA41",
    "relatedSnomedId": "26636000"
  },
  {
    "guidelineId": "NG117",
    "title": "Bronchiectasis (Non-Cystic Fibrosis): Acute Exacerbation Antimicrobial Prescribing",
    "clinicalDomain": "Respiratory",
    "version": "2020 Update (v1.2)",
    "publishedDate": "2018-12-18",
    "lastUpdated": "2020-04-22",
    "targetPopulation": "Children, young people, and adults with acute exacerbation of non-CF bronchiectasis",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Sputum culture guided antimicrobial therapy, 7-14 day antibiotic treatment duration, airway clearance optimization, and long-term prophylactic macrolides for frequent exacerbations.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Exacerbation Identification & Sputum Sampling",
        "recommendation": "Identify acute worsening of cough, increased sputum volume, purulence, or wheeze. Always obtain a sputum culture before starting antibiotics.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Empirical Antibiotic Selection",
        "recommendation": "Offer 7-14 days of oral amoxicillin 500 mg tds, doxycycline 100 mg od, or ciprofloxacin 500-750 mg bd if known Pseudomonas aeruginosa.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Chest Physiotherapy & Airway Clearance",
        "recommendation": "Intensify active cycle of breathing techniques (ACBT) or positive expiratory pressure (PEP) devices to clear retained secretions.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Long-Term Prophylaxis for Frequent Exacerbators",
        "recommendation": "Consider long-term oral azithromycin 250-500 mg three times weekly for patients with ≥3 exacerbations per year.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Screen for non-tuberculous mycobacteria (NTM) before initiating long-term azithromycin to prevent macrolide resistance.",
      "Ciprofloxacin is first-line oral therapy only when Pseudomonas aeruginosa has been isolated."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng117",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG117",
    "relatedIcd11Code": "CA23",
    "relatedSnomedId": "12295008"
  },
  {
    "guidelineId": "CG101",
    "title": "Chronic Obstructive Pulmonary Disease in Over 16s: Management in Primary and Secondary Care",
    "clinicalDomain": "Respiratory",
    "version": "2018 Validated Foundation",
    "publishedDate": "2010-06-23",
    "lastUpdated": "2018-12-05",
    "targetPopulation": "Adults aged 16 and over with stable COPD",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Post-bronchodilator spirometry (FEV1/FVC < 0.70), smoking cessation pharmacotherapy, pulmonary rehabilitation, LAMA/LABA inhaled therapy, and long-term oxygen therapy (LTOT) assessment.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Diagnostic Spirometry Confirmation",
        "recommendation": "Confirm diagnosis with post-bronchodilator spirometry showing FEV1/FVC < 0.70 in individuals with chronic respiratory symptoms.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Smoking Cessation & Pulmonary Rehabilitation",
        "recommendation": "Offer varenicline or nicotine replacement therapy for smoking cessation; refer to pulmonary rehabilitation if MRC dyspnoea grade ≥ 3.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Dual Bronchodilator Inhaled Maintenance",
        "recommendation": "Initiate combined long-acting beta2-agonist (LABA) and long-acting muscarinic antagonist (LAMA) inhaler for persistent breathlessness.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Triple Inhaled Therapy Escalation",
        "recommendation": "Add inhaled corticosteroid (ICS + LABA + LAMA) for patients experiencing ≥1 severe or ≥2 moderate exacerbations per year.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Assess blood eosinophil count prior to commencing inhaled corticosteroids; benefit is greatest when eosinophils ≥ 300 cells/uL.",
      "Offer LTOT only if resting PaO2 ≤ 7.3 kPa on two arterial blood gas measurements at least 3 weeks apart."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg101",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG101",
    "relatedIcd11Code": "CA22",
    "relatedSnomedId": "13645005"
  },
  {
    "guidelineId": "NG1",
    "title": "Gastro-Oesophageal Reflux Disease in Children and Young People",
    "clinicalDomain": "Gastroenterology",
    "version": "2019 Update (v1.2)",
    "publishedDate": "2015-01-14",
    "lastUpdated": "2019-10-02",
    "targetPopulation": "Infants, children, and young people under 18 with suspected or diagnosed GORD",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Reassurance for uncomplicated infant regurgitation, stepped feed-thickening strategies, trial of alginates or PPIs for marked distress/esophagitis, and fundoplication for intractable reflux.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Clinical Differentiation: Regurgitation vs GORD",
        "recommendation": "Reassure parents that effortless regurgitation is normal and benign in infants under 1 year provided weight gain is normal.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Stepped Feeding Modifications",
        "recommendation": "Offer review of feeding volume; trial thickened formula feeds or alginates (Gaviscon Infant) for regurgitation with significant distress.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Trial of Proton Pump Inhibitor (PPI)",
        "recommendation": "Trial 4-week course of omeprazole or lansoprazole in children with marked unexplained distress, hematemesis, or confirmed esophagitis.",
        "evidenceGrade": "Moderate"
      },
      {
        "stepNumber": 4,
        "stage": "Specialist Investigation (pH-Impedance / Endoscopy)",
        "recommendation": "Arrange 24-hour esophageal pH-impedance monitoring or upper GI endoscopy if symptoms fail to resolve after 4 weeks of PPI.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not routinely offer acid-suppressive therapy (PPI or H2RA) for overt regurgitation in infants without marked distress.",
      "Always consider cow's milk protein allergy in bottle-fed infants with severe reflux and eczema or stool changes."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng1",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG1",
    "relatedIcd11Code": "DA22.Z",
    "relatedSnomedId": "235595009"
  },
  {
    "guidelineId": "NG104",
    "title": "Pancreatitis: Diagnosis and Management",
    "clinicalDomain": "Gastroenterology",
    "version": "2020 Update (v1.2)",
    "publishedDate": "2018-09-05",
    "lastUpdated": "2020-12-09",
    "targetPopulation": "Adults and children presenting with acute or chronic pancreatitis",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Serum lipase/amylase testing (>3x ULN), Glasgow-Imrie severity scoring, early goal-directed hydration, ultrasound for gallstones within 24h, index-admission cholecystectomy, and pancreatic enzyme replacement (PERT).",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Diagnostic Confirmation & Etiology Triage",
        "recommendation": "Diagnose acute pancreatitis with characteristic abdominal pain and serum lipase or amylase > 3 times the upper limit of normal.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Early Goal-Directed Hydration & Ultrasound",
        "recommendation": "Initiate balanced crystalloid hydration; perform transabdominal ultrasound within 24 hours to identify gallstones.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Index Admission Cholecystectomy for Gallstone Etiology",
        "recommendation": "Perform laparoscopic cholecystectomy during the same hospital admission (or within 2 weeks) for mild gallstone pancreatitis.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Pancreatic Enzyme Replacement Therapy (PERT)",
        "recommendation": "Prescribe PERT with enteric-coated microspheres (creon) with meals and snacks for exocrine insufficiency in chronic pancreatitis.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not offer prophylactic intravenous antibiotics for mild or severe acute pancreatitis without confirmed infected necrosis.",
      "Contrast-enhanced abdominal CT should be delayed until 72-96 hours after symptom onset to accurately delineate pancreatic necrosis."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng104",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG104",
    "relatedIcd11Code": "DC31 & DC32",
    "relatedSnomedId": "197456007"
  },
  {
    "guidelineId": "CG141",
    "title": "Acute Upper Gastrointestinal Bleeding: Management",
    "clinicalDomain": "Gastroenterology",
    "version": "2020 Update (v1.3)",
    "publishedDate": "2012-06-13",
    "lastUpdated": "2020-08-26",
    "targetPopulation": "Adults aged 16 and over presenting with acute upper GI bleeding",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Pre-endoscopy Glasgow-Blatchford score (GBS), early resuscitation, emergency upper GI endoscopy within 24h (or immediately for shock), dual endoscopic hemostasis, and terlipressin/antibiotics for varices.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Glasgow-Blatchford Risk Stratification",
        "recommendation": "Calculate Glasgow-Blatchford Score immediately. Patients with GBS = 0 are very low risk and can be safely managed as outpatients.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Resuscitation & Restrictive Blood Transfusion",
        "recommendation": "Resuscitate with crystalloids; transfuse red blood cells only if Hb < 70 g/L (or Hb < 80 g/L in cardiovascular disease).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Endoscopy Timing & Endoscopic Hemostasis",
        "recommendation": "Perform upper GI endoscopy within 24 hours of admission (immediately after resuscitation if hemodynamically unstable).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Variceal Bleeding Targeted Protocol",
        "recommendation": "Administer intravenous terlipressin and prophylactic broad-spectrum antibiotics (ceftriaxone) immediately upon suspicion of variceal hemorrhage.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do NOT administer intravenous proton pump inhibitors before endoscopy for suspected peptic ulcer bleeding; start IV PPI only AFTER endoscopic therapy.",
      "Dual endoscopic therapy (mechanical clips or thermal coagulation PLUS dilute adrenaline injection) must be used for actively bleeding non-variceal ulcers."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg141",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG141",
    "relatedIcd11Code": "ME00",
    "relatedSnomedId": "74474003"
  },
  {
    "guidelineId": "CG49",
    "title": "Faecal Incontinence in Adults: Management",
    "clinicalDomain": "Gastroenterology",
    "version": "2021 Update (v1.2)",
    "publishedDate": "2007-06-27",
    "lastUpdated": "2021-04-14",
    "targetPopulation": "Adults with faecal incontinence or anal sphincter dysfunction",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Identification of baseline bowel habits, exclusion of faecal impaction, dietary fiber and fluid adjustment, loperamide titration, pelvic floor muscle retraining, and sacral nerve stimulation.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Baseline Assessment & Impaction Exclusion",
        "recommendation": "Perform digital rectal examination to exclude faecal loading or impaction with overflow diarrhea before initiating anti-diarrheal therapy.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Dietary Modification & Bowel Habit Retraining",
        "recommendation": "Establish regular bowel habit; adjust dietary fiber and caffeine; ensure appropriate toilet positioning and access.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Loperamide Dose Titration",
        "recommendation": "Prescribe oral loperamide hydrochloride titrated carefully (from 0.5 mg to 16 mg daily) to achieve predictable formed stools.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Specialist Sphincter Retraining & Surgery",
        "recommendation": "Refer for biofeedback and pelvic floor retraining; consider sacral nerve stimulation or anal sphincter repair for refractory sphincter tears.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Never prescribe anti-motility agents (e.g. loperamide) until faecal impaction has been completely cleared.",
      "Check for red flags (unexplained rectal bleeding, mass, weight loss) and refer via 2-week cancer pathway if present."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg49",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG49",
    "relatedIcd11Code": "ME05",
    "relatedSnomedId": "72042002"
  },
  {
    "guidelineId": "CG99",
    "title": "Constipation in Children and Young People: Diagnosis and Management",
    "clinicalDomain": "Gastroenterology",
    "version": "2021 Update (v1.4)",
    "publishedDate": "2010-05-26",
    "lastUpdated": "2021-06-09",
    "targetPopulation": "Infants, children, and young people under 18 with idiopathic constipation",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Early clinical diagnosis, disimpaction protocol using escalating doses of macrogol (polyethylene glycol 3350 + electrolytes), maintenance laxative therapy for at least several months, and dietary counseling.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Diagnostic Evaluation & Red Flag Exclusion",
        "recommendation": "Diagnose idiopathic constipation clinically; exclude red flags (delayed meconium >48h, ribbon stools, neurological deficits of spine/legs).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "First-Line Disimpaction Regimen",
        "recommendation": "Initiate escalating disimpaction regimen using macrogol (polyethylene glycol 3350 + electrolytes) over 1 to 2 weeks.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Stimulant Laxative Add-On if Needed",
        "recommendation": "Add a stimulant laxative (e.g. senna or sodium picosulfate) if macrogol alone does not produce disimpaction within 2 weeks.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Long-Term Maintenance & Gradual Weaning",
        "recommendation": "Continue maintenance laxative therapy for several months; do not reduce doses until regular soft bowel habit is established for weeks.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not perform digital rectal examination in children unless by a specialist assessing for organic neurological causes.",
      "Macrogol must be continued during toilet training; stopping prematurely causes painful defecation and relapse."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg99",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG99",
    "relatedIcd11Code": "ME05.0",
    "relatedSnomedId": "14760008"
  },
  {
    "guidelineId": "NG232",
    "title": "Head Injury: Assessment and Early Management",
    "clinicalDomain": "Neurology & CNS",
    "version": "2023 Update (v2.1)",
    "publishedDate": "2023-05-18",
    "lastUpdated": "2023-05-18",
    "targetPopulation": "People of all ages presenting with head injury in emergency settings",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Emergency triage using GCS, Canadian Head CT rule criteria (immediate CT head within 1 hour for high risk), cervical spine immobilisation and imaging, and neurosurgical emergency referral.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Emergency GCS & Risk Stratification",
        "recommendation": "Assess Glasgow Coma Scale (GCS) and vital signs immediately. Identify risk factors for intracranial hemorrhage.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "CT Head within 1 Hour Criteria",
        "recommendation": "Perform non-contrast CT head within 1 hour for GCS < 13 on arrival, GCS < 15 at 2h, suspected open skull fracture, sign of basal fracture, or >1 seizure.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Cervical Spine Imaging within 1 Hour",
        "recommendation": "Perform CT cervical spine within 1 hour for patients with GCS < 13, focal neurological deficit, or severe neck pain/tenderness.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Urgent Neurosurgical Contact",
        "recommendation": "Contact regional neurosurgical unit immediately for extradural/subdural hematoma, contusion with midline shift, or deteriorating GCS.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Patients taking anticoagulants (warfarin or DOACs) must receive a head CT within 8 hours even without neurological symptoms or loss of consciousness.",
      "Discharge advice must include a designated responsible adult and written red-flag warning signs."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng232",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG232",
    "relatedIcd11Code": "NA07",
    "relatedSnomedId": "82271004"
  },
  {
    "guidelineId": "NG42",
    "title": "Motor Neurone Disease: Assessment and Management",
    "clinicalDomain": "Neurology & CNS",
    "version": "2019 Update (v1.2)",
    "publishedDate": "2016-02-24",
    "lastUpdated": "2019-07-24",
    "targetPopulation": "Adults diagnosed with amyotrophic lateral sclerosis or motor neurone disease",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Rapid specialist MND multidisciplinary clinic referral, disease-modifying therapy with riluzole 50 mg bd, proactive respiratory assessment with non-invasive ventilation (NIV), and enteral gastrostomy (RIG/PEG).",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Specialist MDT Referral & Riluzole",
        "recommendation": "Refer to specialist MND multidisciplinary care team; offer disease-modifying oral riluzole 50 mg twice daily to prolong survival.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Proactive Respiratory Surveillance & NIV",
        "recommendation": "Monitor vital capacity and nocturnal oximetry; offer non-invasive ventilation (NIV) to improve quality of life and survival.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Swallowing & Enteral Tube Feeding",
        "recommendation": "Assess dysphagia and weight loss; discuss and place radiologically inserted gastrostomy (RIG) before vital capacity drops < 50%.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Communication Aids & Advance Care Planning",
        "recommendation": "Provide augmentative and alternative communication (AAC) aids early; document advance decisions to refuse treatment (ADRT).",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Monitor ALT/AST monthly for the first 3 months and 3-monthly thereafter while patient is taking riluzole.",
      "Avoid high-flow unmonitored oxygen therapy which can precipitate severe hypercapnic respiratory arrest in advanced MND."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng42",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG42",
    "relatedIcd11Code": "8B60",
    "relatedSnomedId": "86044005"
  },
  {
    "guidelineId": "NG105",
    "title": "Neuropathic Pain in Adults: Pharmacological Management in Non-Specialist Settings",
    "clinicalDomain": "Neurology & CNS",
    "version": "2020 Update (v1.3)",
    "publishedDate": "2013-11-20",
    "lastUpdated": "2020-09-22",
    "targetPopulation": "Adults with neuropathic pain (diabetic neuropathy, post-herpetic neuralgia, trigeminal neuralgia, radiculopathy)",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Choice of four first-line oral agents (amitriptyline, duloxetine, gabapentin, or pregabalin) titrated gradually; carbamazepine for trigeminal neuralgia; avoiding opioids for primary neuropathic pain.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "First-Line Pharmacological Selection",
        "recommendation": "Offer a choice of amitriptyline (10-75 mg nocte), duloxetine (60 mg od), gabapentin, or pregabalin as initial monotherapy.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Trigeminal Neuralgia Targeted Therapy",
        "recommendation": "Offer carbamazepine (titrated up to 1,200 mg daily) as first-line therapy for trigeminal neuralgia; refer for neurosurgical review if refractory.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Switching or Sequential Monotherapy",
        "recommendation": "If initial drug is ineffective or poorly tolerated, switch to one of the other remaining first-line agents before combining.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Topical Capsaicin & Specialist Pain Services",
        "recommendation": "Consider topical capsaicin patches or lidocaine for localized peripheral neuropathic pain; refer to specialist pain clinic.",
        "evidenceGrade": "Moderate"
      }
    ],
    "decisionSupportRules": [
      "Do not routinely offer oral opioids (tramadol, morphine, oxycodone) for non-cancer neuropathic pain.",
      "Pregabalin and gabapentin are controlled drugs with dependence and respiratory depression risks."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng105",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG105",
    "relatedIcd11Code": "MG30.5",
    "relatedSnomedId": "386033004"
  },
  {
    "guidelineId": "CG176",
    "title": "Head Injury: Triage, Assessment, Investigation and Early Management",
    "clinicalDomain": "Neurology & CNS",
    "version": "2019 Validated Foundation",
    "publishedDate": "2014-01-22",
    "lastUpdated": "2019-09-18",
    "targetPopulation": "Adults, young people, and children presenting with head injury",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Foundational framework for cervical spine restriction, standardized neurological observation charts, neurosurgical transfer criteria, and discharge safety nets.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Pre-Hospital Spinal Immobilization & Triage",
        "recommendation": "Maintain full cervical spine protection until cleared clinically or radiologically in all high-energy blunt trauma mechanisms.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Standardized Neurological Observations",
        "recommendation": "Perform and document neurological observations (GCS, pupil size/reactivity, limb power, HR, BP) every 30 minutes until stable.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Emergency Neurosurgical Transfer",
        "recommendation": "Transfer immediately to neurosciences centre if surgically evacuated hematoma indicated, GCS deteriorates by ≥2 points, or pupil dilates.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Post-Concussion Syndrome Follow-Up",
        "recommendation": "Provide comprehensive written discharge guidance detailing warning signs and common post-concussion symptoms (headache, fatigue, mood changes).",
        "evidenceGrade": "Moderate"
      }
    ],
    "decisionSupportRules": [
      "Deterioration in GCS score by 2 or more points requires an immediate repeat non-contrast head CT scan.",
      "A normal skull X-ray does NOT exclude significant intracranial bleeding."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg176",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG176",
    "relatedIcd11Code": "NA07",
    "relatedSnomedId": "82271004"
  },
  {
    "guidelineId": "NG113",
    "title": "Sinusitis (Acute): Antimicrobial Prescribing",
    "clinicalDomain": "Infections & Antimicrobial",
    "version": "2020 Update (v1.2)",
    "publishedDate": "2017-10-11",
    "lastUpdated": "2020-04-22",
    "targetPopulation": "People presenting with acute rhinosinusitis symptoms lasting up to 12 weeks",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Recognition that >90% of acute sinusitis is viral, watchful waiting with analgesia and saline nasal irrigation, delayed or targeted phenoxymethylpenicillin/doxycycline for symptoms >10 days.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Duration & Viral Etiology Assessment",
        "recommendation": "Advise that acute rhinosinusitis is usually viral and typically takes 2 to 3 weeks to resolve without antibiotics.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "First-Line Symptomatic Relief",
        "recommendation": "Offer paracetamol or ibuprofen for pain/fever; recommend nasal saline irrigation or high-dose nasal corticosteroids for adults if symptoms >10 days.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Targeted Antibiotic Selection for Prolonged Illness",
        "recommendation": "Offer phenoxymethylpenicillin 500 mg qds for 5 days (or doxycycline 200 mg day 1 then 100 mg od) if symptoms >10 days without improvement.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Emergency Red Flags for Intracranial/Orbital Complications",
        "recommendation": "Immediately refer patients with periorbital swelling/erythema, severe unilateral headache, diplopia, reduced visual acuity, or neck stiffness.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not prescribe antihistamines, decongestants, or steam inhalation as evidence of clinical benefit is lacking.",
      "Co-amoxiclav should NOT be used as first-line therapy for acute uncomplicated sinusitis."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng113",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG113",
    "relatedIcd11Code": "CA01",
    "relatedSnomedId": "36971009"
  },
  {
    "guidelineId": "NG154",
    "title": "Neonatal Infection: Antibiotics for Prevention and Treatment",
    "clinicalDomain": "Infections & Antimicrobial",
    "version": "2021 Update (v2.0)",
    "publishedDate": "2021-04-20",
    "lastUpdated": "2021-04-20",
    "targetPopulation": "Babies under 28 days of age at risk of or presenting with bacterial infection",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Red flag and non-red flag risk factor assessment for early-onset neonatal infection (Group B Strep), intravenous benzylpenicillin and gentamicin within 1 hour, therapeutic drug monitoring, and CRP surveillance.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Risk Factor & Clinical Red Flag Screening",
        "recommendation": "Identify maternal GBS colonization, PROM >18h, or maternal fever. Urgent blood cultures if grunting, tachypnea, apneas, or lethargy.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "First-Line Empiric IV Antibiotics within 1 Hour",
        "recommendation": "Administer intravenous benzylpenicillin plus gentamicin within 1 hour of deciding to treat early-onset neonatal sepsis.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Gentamicin Therapeutic Drug Monitoring",
        "recommendation": "Measure trough gentamicin levels before the second dose to prevent ototoxicity and nephrotoxicity.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Safe Antibiotic Cessation at 36-48 Hours",
        "recommendation": "Discontinue antibiotics at 36-48 hours if blood cultures are negative, CRP remains normal, and clinical condition is completely well.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not perform routine lumbar puncture for early-onset infection unless strong clinical suspicion of meningitis or positive blood culture.",
      "Gentamicin should be dosed according to postmenstrual age using extended-interval dosing regimens."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng154",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG154",
    "relatedIcd11Code": "KA60",
    "relatedSnomedId": "206380004"
  },
  {
    "guidelineId": "NG240",
    "title": "Meningitis (Bacterial) and Meningococcal Disease: Recognition, Diagnosis and Management",
    "clinicalDomain": "Infections & Antimicrobial",
    "version": "2024 Update (v2.0)",
    "publishedDate": "2024-03-06",
    "lastUpdated": "2024-03-06",
    "targetPopulation": "Babies, children, young people, and adults with suspected bacterial meningitis or meningococcal disease",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Immediate parenteral benzylpenicillin/ceftriaxone before hospital transfer if non-blanching purpuric rash, emergency IV ceftriaxone + dexamethasone in hospital, CSF PCR/microscopy, and public health chemoprophylaxis.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Pre-Hospital Immediate Antibiotics for Rash",
        "recommendation": "Give immediate IM or IV benzylpenicillin or ceftriaxone in primary care if meningococcal disease (non-blanching purpuric rash) is suspected.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Hospital Emergency Ceftriaxone & Dexamethasone",
        "recommendation": "Administer intravenous ceftriaxone 2g bd in adults (80 mg/kg od in children) plus IV dexamethasone 10 mg qds before or with first antibiotic.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Diagnostic Lumbar Puncture Timing",
        "recommendation": "Perform lumbar puncture immediately unless contraindications: signs of raised ICP, focal neurology, shock, or severe coagulopathy.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Public Health Contact Prophylaxis",
        "recommendation": "Notify Health Protection Unit immediately; offer oral ciprofloxacin (or rifampicin) chemoprophylaxis to close household contacts.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not delay antibiotics to obtain neuroimaging (CT scan) or perform lumbar puncture.",
      "Stop dexamethasone if microbiological investigation confirms meningococcal meningitis or non-bacterial cause."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng240",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG240",
    "relatedIcd11Code": "1D01",
    "relatedSnomedId": "128477000"
  },
  {
    "guidelineId": "NG33",
    "title": "Tuberculosis: Prevention, Diagnosis, Management and Service Organisation",
    "clinicalDomain": "Infections & Antimicrobial",
    "version": "2021 Update (v1.3)",
    "publishedDate": "2016-01-13",
    "lastUpdated": "2021-09-15",
    "targetPopulation": "All age groups with latent or active tuberculosis infection",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Interferon-gamma release assay (IGRA) and Mantoux screening, rapid molecular testing (GeneXpert/PCR) for active pulmonary TB, standard 6-month quadruple therapy (RHEZ), and directly observed therapy (DOT).",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Diagnostic Testing for Active TB",
        "recommendation": "Collect 3 sputum samples (including an early morning sample) for acid-fast bacilli (AFB) smear, culture, and rapid molecular drug susceptibility testing.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Standard Quadruple Therapy for Active TB",
        "recommendation": "Initiate 2 months of rifampicin, isoniazid, pyrazinamide, and ethambutol (RHEZ) followed by 4 months of rifampicin and isoniazid.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Screening & Chemoprophylaxis for Latent TB",
        "recommendation": "Screen contacts with IGRA/Mantoux test; offer 3 months of rifampicin and isoniazid or 6 months of isoniazid monotherapy.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Directly Observed Therapy (DOT) & Adherence",
        "recommendation": "Offer enhanced adherence support and directly observed therapy (DOT) for patients with risk factors for non-adherence or multi-drug resistant TB.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Prescribe pyridoxine (vitamin B6) 10-25 mg daily alongside isoniazid to prevent peripheral neuropathy.",
      "Monitor baseline liver function tests and visual acuity (for ethambutol retrobulbar neuritis) prior to starting treatment."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng33",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG33",
    "relatedIcd11Code": "1B10",
    "relatedSnomedId": "56717001"
  },
  {
    "guidelineId": "NG65",
    "title": "Spondyloarthritis in Over 16s: Diagnosis and Management",
    "clinicalDomain": "Musculoskeletal",
    "version": "2020 Update (v1.2)",
    "publishedDate": "2017-02-28",
    "lastUpdated": "2020-04-22",
    "targetPopulation": "People aged 16 and over with axial or peripheral spondyloarthritis (including ankylosing spondylitis and psoriatic arthritis)",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Early rheumatology referral for chronic inflammatory back pain (onset <45y, morning stiffness >30m, improvement with exercise), HLA-B27 testing, MRI of sacroiliac joints, NSAIDs, and TNF-alpha inhibitors.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Inflammatory Back Pain Screening",
        "recommendation": "Screen for back pain starting before age 45 lasting >3 months with night pain, improvement with movement, and marked morning stiffness.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "MRI Sacroiliac Joint Imaging",
        "recommendation": "Offer MRI of sacroiliac joints (STIR sequence) to detect active bone marrow edema in suspected axial spondyloarthritis without X-ray changes.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "First-Line NSAIDs & Structured Physiotherapy",
        "recommendation": "Offer standard NSAIDs at maximum tolerated dose for 2-4 weeks; prescribe supervised structured exercise therapy.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Biologic DMARDs (Anti-TNF / IL-17i)",
        "recommendation": "Escalate to adalimumab, etanercept, or secukinumab if disease activity score (BASDAI ≥ 4) remains high despite 2 full-dose NSAID trials.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Normal plain radiographs of the sacroiliac joints do NOT exclude early non-radiographic axial spondyloarthritis.",
      "A negative HLA-B27 does not rule out spondyloarthritis in the presence of strong clinical symptoms."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng65",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG65",
    "relatedIcd11Code": "FA20",
    "relatedSnomedId": "201804000"
  },
  {
    "guidelineId": "NG38",
    "title": "Fractures (Non-Complex): Assessment and Management",
    "clinicalDomain": "Musculoskeletal",
    "version": "2020 Update (v1.2)",
    "publishedDate": "2016-02-17",
    "lastUpdated": "2020-09-16",
    "targetPopulation": "Patients presenting with non-complex limb and torso fractures",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Rapid analgesia, neurovascular and skin integrity assessment, standardized plain radiographs (two views minimum), non-operative casting or functional bracing, and early weight-bearing mobilization.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Immediate Analgesia & Neurovascular Exam",
        "recommendation": "Provide rapid multimodal analgesia (paracetamol, NSAIDs, oral opioids); document limb pulses, capillary refill, and neurological sensation.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Radiological Assessment (Two Orthogonal Views)",
        "recommendation": "Perform plain X-rays including the joint above and joint below the suspected fracture site.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Immobilisation & Functional Bracing",
        "recommendation": "Use splints, removable boots, or functional casts for stable fractures; avoid rigid prolonged casting where functional bracing suffices.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Early Mobilization & Fracture Clinic Review",
        "recommendation": "Encourage safe early weight-bearing and active movement; review in dedicated virtual or face-to-face fracture clinic.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Always assess and document distal pulses and nerve sensation both BEFORE and AFTER fracture reduction or splint application.",
      "Suspect scaphoid fracture in anatomical snuffbox tenderness even if initial plain X-rays are normal; re-image or MRI."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng38",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG38",
    "relatedIcd11Code": "NC00",
    "relatedSnomedId": "125605004"
  },
  {
    "guidelineId": "NG34",
    "title": "Hip Fracture: Management in Older Adults",
    "clinicalDomain": "Musculoskeletal",
    "version": "2023 Update (v2.0)",
    "publishedDate": "2011-06-22",
    "lastUpdated": "2023-01-18",
    "targetPopulation": "Adults aged 60 and over with suspected or confirmed proximal femoral fracture",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Emergency nerve block (fascia iliaca block), surgery within 36 hours of admission, orthogeriatrician collaborative care, cemented arthroplasty for displaced intracapsular fractures, and early mobilization day 1 post-op.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Emergency Fascia Iliaca Nerve Block",
        "recommendation": "Administer ultrasound-guided or landmark fascia iliaca compartment block on admission to minimize systemic opioid requirement.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Surgical Repair within 36 Hours",
        "recommendation": "Perform definitive surgical repair on a scheduled daytime trauma list within 36 hours of hospital admission.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Cemented Arthroplasty for Intracapsular Fractures",
        "recommendation": "Offer cemented hemiarthroplasty (or total hip replacement if independent walker) for displaced intracapsular hip fractures.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Postoperative Mobilization Day 1 & Secondary Prevention",
        "recommendation": "Mobilize patient on the first postoperative day; initiate oral bisphosphonate (alendronate) and falls assessment.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not use uncemented prostheses for intracapsular hip fractures due to higher re-operation and peri-prosthetic fracture rates.",
      "Delaying surgery beyond 36 hours significantly increases 30-day mortality."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng34",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG34",
    "relatedIcd11Code": "NC72",
    "relatedSnomedId": "359817006"
  },
  {
    "guidelineId": "NG56",
    "title": "Multimorbidity: Clinical Assessment and Management",
    "clinicalDomain": "Musculoskeletal",
    "version": "2021 Update (v1.3)",
    "publishedDate": "2016-09-21",
    "lastUpdated": "2021-06-16",
    "targetPopulation": "Adults with multiple long-term health conditions receiving complex polypharmacy",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Identification of treatment burden, structured medication reviews to identify and deprescribe inappropriate polypharmacy, individualized disease targets, and single agreed comprehensive management plan.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Identification of High Treatment Burden",
        "recommendation": "Screen adults prescribed ≥10 medications, frequent unplanned admissions, or struggling with multiple clinical appointments.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Comprehensive Medication Review & Deprescribing",
        "recommendation": "Systematically identify and stop medications with limited long-term benefit, unfavorable risk/benefit ratio, or drug-drug interactions.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Individualized Patient-Centred Goal Setting",
        "recommendation": "Prioritize individual quality of life, physical independence, and symptom management over single-disease guidelines.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Single Integrated Management Plan",
        "recommendation": "Create a unified care plan shared across primary and secondary care; assign a designated primary care coordinator.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Stop preventative medications (e.g. tight glycemic control or aggressive lipid lowering) if life expectancy is limited or harm exceeds benefit.",
      "Check anticholinergic burden score in older patients presenting with cognitive decline or falls."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng56",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG56",
    "relatedIcd11Code": "QA00",
    "relatedSnomedId": "422843007"
  },
  {
    "guidelineId": "NG124",
    "title": "Bladder Cancer: Diagnosis and Management",
    "clinicalDomain": "Oncology & Cancer",
    "version": "2020 Update (v1.2)",
    "publishedDate": "2015-02-25",
    "lastUpdated": "2020-09-22",
    "targetPopulation": "Adults with suspected or diagnosed bladder cancer",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Urgent 2-week wait referral for unexplained visible hematuria, flexible cystoscopy, transurethral resection of bladder tumour (TURBT) with single post-op mitomycin C dose, and radical cystectomy/radiotherapy.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Urgent Referral for Visible Hematuria",
        "recommendation": "Refer adults aged 45 and over with unexplained visible hematuria without UTI via the urgent 2-week cancer pathway.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Flexible Cystoscopy & TURBT Staging",
        "recommendation": "Perform rigid TURBT for visible lesions; administer single post-operative instillation of intravesical mitomycin C within 6 hours.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Intravesical BCG for High-Risk Non-Muscle-Invasive",
        "recommendation": "Offer induction and maintenance intravesical BCG immunotherapy for high-risk non-muscle-invasive bladder cancer.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Muscle-Invasive Bladder Cancer Radical Treatment",
        "recommendation": "Offer neoadjuvant cisplatin-based combination chemotherapy followed by radical cystectomy or radical radiotherapy with radiosensitiser.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not give intravesical chemotherapy if bladder perforation is suspected during TURBT.",
      "Non-visible hematuria in adults aged 60 and over with dysuria requires urgent cancer referral."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng124",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG124",
    "relatedIcd11Code": "2C90",
    "relatedSnomedId": "399326009"
  },
  {
    "guidelineId": "NG85",
    "title": "Pancreatic Cancer in Adults: Diagnosis and Management",
    "clinicalDomain": "Oncology & Cancer",
    "version": "2020 Update (v1.3)",
    "publishedDate": "2018-02-07",
    "lastUpdated": "2020-04-22",
    "targetPopulation": "Adults with suspected or confirmed pancreatic adenocarcinoma",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Urgent CT scan within 48h for painless jaundice, pancreatic protocol triphasic CT, staging with EUS/biopsy, pancreatic enzyme replacement therapy (PERT) initiated immediately, and Whipple resection.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Urgent Imaging for Painless Obstructive Jaundice",
        "recommendation": "Arrange urgent contrast-enhanced pancreatic-protocol CT within 48 hours for adults aged 40 and over presenting with jaundice.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Immediate Pancreatic Enzyme Replacement (PERT)",
        "recommendation": "Prescribe enteric-coated pancreatin (PERT) immediately at diagnosis to treat malabsorption and weight loss.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Staging & Multidisciplinary Review",
        "recommendation": "Perform endoscopic ultrasound (EUS) and fine-needle biopsy to establish resectability and histological confirmation.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Resection & Adjuvant Chemotherapy",
        "recommendation": "Offer surgical resection (pancreaticoduodenectomy) for resectable disease followed by adjuvant gemcitabine/capecitabine or FOLFIRINOX.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not delay surgical referral for preoperative biliary drainage (stenting) in resectable patients unless bilirubin > 250 umol/L or severe cholangitis.",
      "Check CA19-9 baseline levels prior to initiating systemic chemotherapy."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng85",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG85",
    "relatedIcd11Code": "2C12",
    "relatedSnomedId": "363418001"
  },
  {
    "guidelineId": "NG99",
    "title": "Brain Tumours (Primary) and Brain Metastases in Over 16s: Management",
    "clinicalDomain": "Oncology & Cancer",
    "version": "2021 Update (v1.2)",
    "publishedDate": "2018-07-04",
    "lastUpdated": "2021-01-20",
    "targetPopulation": "People aged 16 and over with primary brain tumours or secondary brain metastases",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Contrast-enhanced MRI brain, molecular pathological testing (IDH mutation, 1p/19q codeletion, MGMT methylation), maximal safe surgical resection, adjuvant chemoradiotherapy (Stupp regimen), and stereotactic radiosurgery (SRS).",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Multiparametric Contrast-Enhanced MRI",
        "recommendation": "Perform gadolinium-enhanced brain MRI with diffusion and perfusion sequences prior to surgical intervention.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Molecular Pathology Profiling",
        "recommendation": "Test all gliomas for IDH1/2 mutation, 1p/19q codeletion, and MGMT promoter methylation to determine prognosis and treatment.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Maximal Safe Surgical Resection",
        "recommendation": "Perform maximal safe resection using intraoperative image guidance and 5-ALA fluorescence or awake craniotomy.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Adjuvant Chemoradiotherapy / Stereotactic Radiosurgery",
        "recommendation": "Offer concurrent temozolomide and radiotherapy (Stupp protocol) for glioblastoma; stereotactic radiosurgery for 1-4 brain metastases.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not routinely offer prophylactic antiepileptic drugs to people with brain tumours who have not had a seizure.",
      "Dexamethasone should be prescribed at the lowest effective dose with gastric protection and blood glucose monitoring."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng99",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG99",
    "relatedIcd11Code": "2A00",
    "relatedSnomedId": "126949005"
  },
  {
    "guidelineId": "NG52",
    "title": "Ovarian Cancer: Recognition and Initial Management",
    "clinicalDomain": "Oncology & Cancer",
    "version": "2020 Update (v1.3)",
    "publishedDate": "2011-04-27",
    "lastUpdated": "2020-04-22",
    "targetPopulation": "Women presenting with symptoms of ovarian cancer in primary care",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Screening for persistent abdominal distension/bloating, early satiety, pelvic pain, serum CA125 testing (threshold ≥ 35 IU/mL), urgent ultrasound, Risk of Malignancy Index (RMI) calculation, and cytoreductive surgery.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Symptom-Triggered Serum CA125 Testing",
        "recommendation": "Measure serum CA125 in primary care if woman has persistent abdominal bloating, early satiety, pelvic pain, or increased urinary urgency.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Pelvic & Abdominal Ultrasound for Elevated CA125",
        "recommendation": "Arrange urgent pelvic and abdominal ultrasound if serum CA125 is ≥ 35 IU/mL to assess ovarian morphology and ascites.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Risk of Malignancy Index (RMI I) Staging",
        "recommendation": "Calculate RMI I score (CA125 x menopausal status x ultrasound score); RMI ≥ 200 warrants urgent gynecological oncology MDT referral.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Cytoreductive Surgery & Platinum Chemotherapy",
        "recommendation": "Perform maximal cytoreductive surgery followed by adjuvant carboplatin plus paclitaxel chemotherapy for advanced disease.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not delay investigating IBS-like symptoms in women aged 50 or over; IBS rarely develops for the first time after age 50.",
      "Offer BRCA1/2 genetic germline testing to all women diagnosed with non-mucinous epithelial ovarian cancer."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng52",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG52",
    "relatedIcd11Code": "2C73",
    "relatedSnomedId": "363443007"
  },
  {
    "guidelineId": "CG178",
    "title": "Psychosis and Schizophrenia in Adults: Prevention and Management",
    "clinicalDomain": "Mental Health",
    "version": "2021 Update (v1.4)",
    "publishedDate": "2014-02-12",
    "lastUpdated": "2021-08-11",
    "targetPopulation": "Adults aged 18 and over with first-episode psychosis or chronic schizophrenia",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Early intervention in psychosis (EIP) service within 2 weeks, oral second-generation antipsychotic monotherapy, CBT for psychosis (CBTp) and family intervention, and clozapine for treatment resistance.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Early Intervention Services Referral",
        "recommendation": "Refer all individuals with first-episode psychosis to early intervention in psychosis (EIP) services within 14 days of presentation.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Antipsychotic Monotherapy Choice & Titration",
        "recommendation": "Offer oral antipsychotic medication chosen collaboratively with patient; monitor ECG, weight, prolactin, and lipid profile.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Psychological Therapies (CBTp & Family Intervention)",
        "recommendation": "Offer individual CBT for psychosis (at least 16 sessions) and family intervention to all patients with schizophrenia.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Clozapine for Treatment-Resistant Schizophrenia",
        "recommendation": "Offer clozapine to patients whose illness has not responded adequately despite sequential trials of two antipsychotics.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not use combination antipsychotics routinely except for short periods during drug cross-titration.",
      "Clozapine requires mandatory registered hematological monitoring to detect agranulocytosis."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg178",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG178",
    "relatedIcd11Code": "6A20",
    "relatedSnomedId": "58214004"
  },
  {
    "guidelineId": "CG185",
    "title": "Bipolar Disorder: Assessment and Management",
    "clinicalDomain": "Mental Health",
    "version": "2020 Update (v1.3)",
    "publishedDate": "2014-09-24",
    "lastUpdated": "2020-12-09",
    "targetPopulation": "Children, young people, and adults with bipolar I or bipolar II disorder",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Acute mania management with oral antipsychotic (haloperidol, olanzapine, quetiapine, or risperidone), mood stabilizer maintenance with lithium as first-line, serum lithium therapeutic monitoring (0.6-0.8 mmol/L), and structured psychoeducation.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Acute Mania / Hypomania Management",
        "recommendation": "Offer haloperidol, olanzapine, quetiapine, or risperidone for acute mania; taper antidepressant if currently prescribed.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Bipolar Depression Pharmacotherapy",
        "recommendation": "Offer quetiapine monotherapy, or combination fluoxetine plus olanzapine; avoid antidepressant monotherapy without mood stabilizer.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Long-Term Maintenance with Lithium First-Line",
        "recommendation": "Offer lithium as first-line long-term pharmacological treatment to prevent relapse; target serum level 0.6 to 0.8 mmol/L.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Physical Health & Therapeutic Drug Monitoring",
        "recommendation": "Check serum lithium, eGFR, and thyroid function tests every 3-6 months; monitor weight and metabolic parameters.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not prescribe sodium valproate to female patients of childbearing potential unless Pregnancy Prevention Programme conditions are met.",
      "Signs of lithium toxicity (coarse tremor, ataxia, confusion) require urgent emergency serum lithium testing."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg185",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG185",
    "relatedIcd11Code": "6A60 & 6A61",
    "relatedSnomedId": "13746004"
  },
  {
    "guidelineId": "NG225",
    "title": "Self-Harm: Assessment, Management and Preventing Recurrence",
    "clinicalDomain": "Mental Health",
    "version": "2022 Validated",
    "publishedDate": "2022-09-07",
    "lastUpdated": "2022-09-07",
    "targetPopulation": "People of all ages who have self-harmed or are at risk of self-harm",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Compassionate physical care, comprehensive biopsychosocial assessment for all presentations, safety planning with patient, cognitive behavioral therapy tailored for self-harm, and avoiding tick-box risk stratification tools.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Immediate Physical Care & Dignity",
        "recommendation": "Provide immediate treatment for physical injury and poisoning with the same empathy and respect as any medical emergency.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Comprehensive Biopsychosocial Assessment",
        "recommendation": "Perform detailed narrative assessment evaluating psychological distress, current stressors, and suicidal intent.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Collaborative Safety Planning",
        "recommendation": "Co-produce a personalized safety plan identifying personal coping strategies, social contacts, and emergency crisis numbers.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Psychological Interventions (CBT for Self-Harm)",
        "recommendation": "Offer psychological therapy specifically structured for self-harm (e.g. CBT-informed therapy, DBT) lasting at least 3 months.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do NOT use risk assessment tools or risk scales to predict suicide or determine who should receive clinical care.",
      "Never discharge a patient who has self-harmed without a collaboratively agreed safety plan."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng225",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG225",
    "relatedIcd11Code": "MB23",
    "relatedSnomedId": "248062006"
  },
  {
    "guidelineId": "NG87",
    "title": "Attention Deficit Hyperactivity Disorder: Diagnosis and Management",
    "clinicalDomain": "Mental Health",
    "version": "2020 Update (v1.3)",
    "publishedDate": "2018-03-14",
    "lastUpdated": "2020-04-22",
    "targetPopulation": "Children, young people, and adults with ADHD",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Multidisciplinary diagnostic assessment across multiple settings, ADHD parent-training programmes, methylphenidate or lisdexamfetamine first-line pharmacotherapy with cardiovascular monitoring, and environmental adjustments.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Comprehensive Diagnostic Assessment",
        "recommendation": "Confirm symptoms across two or more settings (home, school, work); record baseline height, weight, BP, and heart rate.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "First-Line Pharmacotherapy (Methylphenidate / Lisdexamfetamine)",
        "recommendation": "Offer methylphenidate as first-line in children ≥5y; lisdexamfetamine or methylphenidate as first-line in adults.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Second-Line Non-Stimulant (Atomoxetine / Guanfacine)",
        "recommendation": "Switch to atomoxetine or guanfacine if stimulants are ineffective or cause intolerable side effects (tics, insomnia).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Monitoring & Environmental Accommodations",
        "recommendation": "Monitor blood pressure, pulse, and appetite every 6 months; support academic and workplace reasonable adjustments.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not diagnose or initiate medication for ADHD without specialist multidisciplinary evaluation.",
      "Check baseline cardiovascular history (congenital heart disease, sudden unexplained death in family) before starting stimulants."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng87",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG87",
    "relatedIcd11Code": "6A05",
    "relatedSnomedId": "406506008"
  },
  {
    "guidelineId": "NG25",
    "title": "Preterm Labour and Birth: Diagnosis and Management",
    "clinicalDomain": "Cardiovascular",
    "version": "2022 Update (v1.4)",
    "publishedDate": "2015-11-20",
    "lastUpdated": "2022-08-10",
    "targetPopulation": "Women with suspected, diagnosed, or established preterm labour before 37 weeks",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Transvaginal ultrasound cervical length measurement, fetal fibronectin testing, maternal antenatal corticosteroids for fetal lung maturity, IV magnesium sulfate for neuroprotection, and prophylactic cerclage/progesterone.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Triage with Cervical Length & Fibronectin",
        "recommendation": "Offer transvaginal ultrasound cervical length or fetal fibronectin test in women with suspected preterm labour at 24-34 weeks.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Antenatal Corticosteroids for Lung Maturation",
        "recommendation": "Administer two doses of betamethasone 12 mg IM 24 hours apart to reduce neonatal respiratory distress syndrome and mortality.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Magnesium Sulfate for Fetal Neuroprotection",
        "recommendation": "Give IV magnesium sulfate 4g loading dose then 1g/h infusion for women in established preterm labour before 30 weeks to prevent cerebral palsy.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Prophylactic Cervical Cerclage or Vaginal Progesterone",
        "recommendation": "Offer vaginal progesterone or prophylactic cervical cerclage to women with prior preterm birth and cervical length ≤ 25 mm.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not routinely offer tocolytics to improve neonatal outcome; tocolytics (atosiban/nifedipine) are indicated only to allow corticosteroid/Mg completion or transfer.",
      "Magnesium sulfate must be monitored with hourly maternal patellar reflexes, respiratory rate, and urine output."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng25",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG25",
    "relatedIcd11Code": "JA41",
    "relatedSnomedId": "276369006"
  },
  {
    "guidelineId": "NG137",
    "title": "Twin and Triplet Pregnancy: Antenatal and Intrapartum Care",
    "clinicalDomain": "Renal & Urology",
    "version": "2021 Update (v1.2)",
    "publishedDate": "2019-09-04",
    "lastUpdated": "2021-04-14",
    "targetPopulation": "Women with confirmed twin or triplet pregnancy",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Early first-trimester determination of chorionicity and amnionicity, regular fetal ultrasound surveillance for twin-to-twin transfusion syndrome (TTTS), and planned birth timing recommendations.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "First Trimester Chorionicity Determination",
        "recommendation": "Determine chorionicity and amnionicity using ultrasound between 11+0 and 13+6 weeks using lambda or T-sign.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Ultrasound Surveillance for Monochorionic Twins",
        "recommendation": "Perform ultrasound scans every 2 weeks from 16 weeks onwards in monochorionic twins to detect early twin-to-twin transfusion syndrome.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Screening for Intrauterine Growth Restriction (IUGR)",
        "recommendation": "Perform serial ultrasound scans every 4 weeks in dichorionic twins from 24 weeks to monitor fetal growth concordance.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Planned Timing of Birth",
        "recommendation": "Recommend planned birth from 37+0 weeks for uncomplicated dichorionic twins, and from 36+0 weeks for monochorionic diamniotic twins.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Monochorionic monoamniotic pregnancies require planned elective cesarean section between 32+0 and 33+6 weeks.",
      "Refer urgently to tertiary fetal medicine within 24 hours if amniotic fluid discordance suggests TTTS."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng137",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG137",
    "relatedIcd11Code": "JA00.0",
    "relatedSnomedId": "60136006"
  },
  {
    "guidelineId": "NG126",
    "title": "Ectopic Pregnancy and Miscarriage: Diagnosis and Initial Management",
    "clinicalDomain": "Renal & Urology",
    "version": "2021 Update (v1.3)",
    "publishedDate": "2019-04-17",
    "lastUpdated": "2021-11-24",
    "targetPopulation": "Women presenting with pain or vaginal bleeding in early pregnancy (<13 weeks)",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Transvaginal ultrasound within 24 hours, quantitative serum beta-hCG monitoring (48-hour doubling rule), expectant vs medical methotrexate vs laparoscopic salpingectomy for ectopic pregnancy, and progesterone for threatened miscarriage.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Urgent Transvaginal Ultrasound Scanning",
        "recommendation": "Offer transvaginal ultrasound to identify pregnancy location and intrauterine fetal heartbeat in all early bleeding/pain.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Serial Serum Beta-hCG Monitoring for Pregnancy of Unknown Location",
        "recommendation": "Measure serum beta-hCG 48 hours apart; a rise of <63% suggests non-viable pregnancy or ectopic pregnancy.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Methotrexate for Unruptured Ectopic Pregnancy",
        "recommendation": "Offer single-dose intramuscular methotrexate (50 mg/m²) for unruptured tubal ectopic if hCG < 1,500 IU/L and mass < 35 mm.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Micronized Progesterone for Threatened Miscarriage",
        "recommendation": "Offer vaginal micronized progesterone 400 mg twice daily until 16 weeks to women with early bleeding and prior miscarriage.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Offer surgical salpingectomy immediately to any woman presenting with acute hemodynamic instability or signs of tubal rupture.",
      "Administer anti-D immunoglobulin (250 IU) to all RhD-negative women undergoing surgical management of miscarriage or ectopic pregnancy."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng126",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG126",
    "relatedIcd11Code": "JA01",
    "relatedSnomedId": "34801009"
  },
  {
    "guidelineId": "NG207",
    "title": "Inducing Labour: Clinical Assessment and Methods",
    "clinicalDomain": "Respiratory",
    "version": "2021 Update (v2.0)",
    "publishedDate": "2021-11-04",
    "lastUpdated": "2021-11-04",
    "targetPopulation": "Pregnant women being considered for induction of labour",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Membrane sweeping, vaginal dinoprostone or oral misoprostol first-line, mechanical balloon catheter induction as alternative, artificial rupture of membranes (ARM) with oxytocin, and continuous CTG.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Post-Term Induction Discussion at 41 Weeks",
        "recommendation": "Offer membrane sweeping at 39-41 weeks; discuss induction of labour between 41+0 and 42+0 weeks to reduce perinatal mortality.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Cervical Ripening with Dinoprostone or Oral Misoprostol",
        "recommendation": "Offer vaginal dinoprostone (gel/insert) or low-dose oral misoprostol as preferred methods of cervical ripening.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Mechanical Balloon Catheter Alternative",
        "recommendation": "Offer mechanical cervical ripening with a Foley or double balloon catheter if pharmacological methods are declined or contraindicated.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Amniotomy and Oxytocin Infusion",
        "recommendation": "Perform amniotomy (ARM) and initiate intravenous oxytocin titration once the cervix is favorable (Bishop score ≥ 6).",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not offer misoprostol to women with a previous cesarean section due to risk of uterine rupture.",
      "Commence continuous electronic fetal monitoring (CTG) as soon as contractions begin or oxytocin infusion starts."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng207",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG207",
    "relatedIcd11Code": "JA40",
    "relatedSnomedId": "181216001"
  },
  {
    "guidelineId": "NG194",
    "title": "Postnatal Care: Mother and Baby Clinical Pathway",
    "clinicalDomain": "Neurology & CNS",
    "version": "2021 Update (v2.0)",
    "publishedDate": "2021-04-20",
    "lastUpdated": "2021-04-20",
    "targetPopulation": "Women and their newborn babies in the first 8 weeks after birth",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Systematic postnatal maternal checks (bleeding, perineal healing, blood pressure, emotional wellbeing), newborn clinical checks (feeding, weight loss, neonatal jaundice, screening), and sudden infant death syndrome (SIDS) advice.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "First 24-Hour Maternal and Infant Assessment",
        "recommendation": "Examine maternal lochia, fundal height, perineum, and micturition; assess neonatal latch, tone, temperature, and feeding.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Screening for Perinatal Mental Illness",
        "recommendation": "Screen at every contact using Whooley questions and GAD-7; identify postnatal depression, anxiety, or postpartum psychosis.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Neonatal Jaundice Clinical Assessment",
        "recommendation": "Visually inspect for jaundice in natural light; measure transcutaneous bilirubin within 2 hours if jaundice appears after 24h.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Safe Sleep Education (SIDS Prevention)",
        "recommendation": "Advise placing baby to sleep on back, in cot in parents' room for first 6 months; clear cot of pillows, bumpers, and soft toys.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Jaundice appearing within the first 24 hours of life is a medical emergency requiring immediate serum bilirubin measurement.",
      "Ensure prompt urgent psychiatric review within 4 hours if signs of postpartum psychosis (delusions, hallucinations, severe agitation) occur."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng194",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG194",
    "relatedIcd11Code": "QA00 & 6A70",
    "relatedSnomedId": "133906008"
  },
  {
    "guidelineId": "NG210",
    "title": "Pelvic Floor Dysfunction: Prevention and Non-Surgical Management",
    "clinicalDomain": "Neurology & CNS",
    "version": "2021 Validated",
    "publishedDate": "2021-12-08",
    "lastUpdated": "2021-12-08",
    "targetPopulation": "Women aged 12 and over at risk of or presenting with pelvic floor dysfunction",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Universal pelvic floor muscle training (PFMT) education, supervised 3-month PFMT for pelvic organ prolapse or urinary/fecal incontinence, vaginal pessary fitting, and lifestyle factor optimization (BMI, constipation).",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Universal Primary Prevention & Education",
        "recommendation": "Provide universal information on pelvic floor anatomy, correct contraction technique, and avoiding chronic straining from constipation.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Supervised Pelvic Floor Muscle Training",
        "recommendation": "Offer at least 3 months of supervised PFMT delivered by a specialist physiotherapist as first-line therapy for prolapse or incontinence.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Vaginal Pessary Fitting for Prolapse",
        "recommendation": "Offer a trial of vaginal ring or shelf pessary for symptomatic pelvic organ prolapse, reviewing fit and vaginal epithelium at 6 months.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Lifestyle & Bowel Management Integration",
        "recommendation": "Optimize weight (BMI target < 30 kg/m²), eliminate chronic coughing/smoking, and manage chronic constipation with high-fiber diet and fluids.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Digital examination to confirm correct pelvic floor muscle contraction is essential before commencing unsupervised training.",
      "Remove and clean vaginal pessaries at least every 6 months to prevent ulceration or fistulae."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng210",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG210",
    "relatedIcd11Code": "GC40 & GC41",
    "relatedSnomedId": "267073004"
  },
  {
    "guidelineId": "NG198",
    "title": "Acne Vulgaris: Management",
    "clinicalDomain": "Musculoskeletal",
    "version": "2021 Validated",
    "publishedDate": "2021-06-25",
    "lastUpdated": "2021-06-25",
    "targetPopulation": "People of all ages with mild, moderate, or severe acne vulgaris",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Fixed-combination topical therapy (adapalene + benzoyl peroxide), oral limecycline/doxycycline for moderate-to-severe acne with topical retinoid, and oral isotretinoin under specialist supervision for severe nodulocystic acne.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "First-Line Topical Fixed Combination",
        "recommendation": "Offer topical adapalene plus benzoyl peroxide, or topical tretinoin plus clindamycin as first-line for mild-to-moderate acne.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Oral Antibiotics for Moderate-to-Severe Acne",
        "recommendation": "Prescribe oral lymecycline 408 mg od or doxycycline 100 mg od for up to 12 weeks COMBINED with a topical retinoid/benzoyl peroxide.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Oral Contraceptive Adjunct in Females",
        "recommendation": "Consider combined oral contraceptives (e.g. ethinylestradiol with levonorgestrel or co-cyprindiol) in women with hormonal flare patterns.",
        "evidenceGrade": "Moderate"
      },
      {
        "stepNumber": 4,
        "stage": "Specialist Oral Isotretinoin Referral",
        "recommendation": "Refer to dermatology for oral isotretinoin (Roaccutane) for severe nodulocystic acne, scarring risk, or resistance to oral antibiotics.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not prescribe oral or topical antibiotic monotherapy for acne due to rapid emergence of antimicrobial resistance.",
      "Oral isotretinoin is strictly teratogenic; female patients must adhere to strict Pregnancy Prevention Programme (PPP)."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng198",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG198",
    "relatedIcd11Code": "ED80",
    "relatedSnomedId": "24700007"
  },
  {
    "guidelineId": "CG153",
    "title": "Psoriasis: Assessment and Management",
    "clinicalDomain": "Musculoskeletal",
    "version": "2020 Update (v1.3)",
    "publishedDate": "2012-10-24",
    "lastUpdated": "2020-04-22",
    "targetPopulation": "Children, young people, and adults with plaque or guttate psoriasis",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "PASI and DLQI severity scoring, potent topical corticosteroid plus vitamin D analogue (calcipotriol), phototherapy (narrowband UVB), conventional systemic DMARDs (methotrexate), and biologic therapies.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Severity Scoring & Psoriatic Arthritis Screening",
        "recommendation": "Assess Psoriasis Area and Severity Index (PASI) and DLQI; screen annually for psoriatic arthritis using PEST questionnaire.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "First-Line Topical Combination Therapy",
        "recommendation": "Offer potent topical corticosteroid plus topical vitamin D analogue (e.g. betamethasone + calcipotriol gel) applied once daily for up to 8 weeks.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Phototherapy (Narrowband UVB)",
        "recommendation": "Offer narrowband UVB phototherapy 2-3 times weekly for extensive plaque psoriasis unresponsive to topical therapy.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Systemic Non-Biologic & Biologic DMARDs",
        "recommendation": "Initiate oral methotrexate (or ciclosporin); escalate to biologic agents (adalimumab, ustekinumab, risankizumab) if PASI ≥ 10 and DLQI > 10.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not use potent topical corticosteroids continuously for longer than 8 weeks to avoid cutaneous atrophy and systemic absorption.",
      "Screen for latent tuberculosis and viral hepatitis prior to commencing systemic or biologic therapy."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg153",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG153",
    "relatedIcd11Code": "EA90",
    "relatedSnomedId": "9014002"
  },
  {
    "guidelineId": "CG125",
    "title": "Surgical Site Infections: Prevention and Treatment",
    "clinicalDomain": "Musculoskeletal",
    "version": "2020 Update (v1.3)",
    "publishedDate": "2008-10-22",
    "lastUpdated": "2020-08-19",
    "targetPopulation": "Patients of all ages undergoing surgical procedures",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Preoperative chlorhexidine antiseptic skin preparation, single-dose IV prophylactic antibiotic within 60 minutes of skin incision, perioperative normothermia maintenance, and wound dressing management.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Preoperative Antiseptic Skin Preparation",
        "recommendation": "Apply alcoholic chlorhexidine (2% chlorhexidine in 70% alcohol) skin preparation; allow to dry completely before incision.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Timing of Prophylactic Antibiotic Administration",
        "recommendation": "Administer single-dose intravenous antibiotic prophylaxis within 60 minutes prior to surgical incision.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Maintenance of Perioperative Normothermia",
        "recommendation": "Use active forced-air warming blankets to maintain patient core body temperature ≥ 36.0°C throughout surgery and recovery.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Postoperative Wound Care & Targeted Antibiotics",
        "recommendation": "Keep surgical dressings intact for 48 hours; obtain wound swab for culture and prescribe targeted antibiotics if SSI develops.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not routinely use hair clippers or razors; if hair removal is essential, use electric clippers with a single-use head on the day of surgery.",
      "Do not continue routine surgical prophylactic antibiotics beyond the completion of surgery."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg125",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG125",
    "relatedIcd11Code": "NE81",
    "relatedSnomedId": "4331000175101"
  },
  {
    "guidelineId": "NG180",
    "title": "Perioperative Care in Adults: Optimisation and Recovery",
    "clinicalDomain": "Musculoskeletal",
    "version": "2020 Validated",
    "publishedDate": "2020-08-19",
    "lastUpdated": "2020-08-19",
    "targetPopulation": "Adults aged 18 and over undergoing elective or emergency surgery",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Cardiopulmonary exercise testing (CPET) risk assessment, enhanced recovery after surgery (ERAS) protocols, pre-op carbohydrate loading, opioid-sparing multimodal analgesia, and early mobilization.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Preoperative Risk Stratification & Prehabilitation",
        "recommendation": "Assess functional capacity using CPET or DASI score; offer exercise and nutritional prehabilitation before major elective surgery.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Minimizing Preoperative Fasting Times",
        "recommendation": "Allow clear oral fluids up to 2 hours, and light solid food up to 6 hours before induction of anesthesia; offer clear carbohydrate drinks.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Opioid-Sparing Multimodal Analgesia",
        "recommendation": "Use regional/neuraxial techniques (epidural, spinal, peripheral nerve blocks), IV paracetamol, and NSAIDs/ketamine to minimize systemic opioids.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Enhanced Postoperative Recovery & Early Feeding",
        "recommendation": "Encourage early oral feeding and out-of-bed mobilization within 24 hours of surgery as part of standardized ERAS pathway.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not routinely perform mechanical bowel preparation for elective colorectal surgery without oral antibiotics.",
      "Remove urinary catheters within 24 hours postoperatively unless specific surgical indication exists."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng180",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG180",
    "relatedIcd11Code": "QA00",
    "relatedSnomedId": "371572003"
  },
  {
    "guidelineId": "NG14",
    "title": "Melanoma: Assessment and Management",
    "clinicalDomain": "Oncology & Cancer",
    "version": "2022 Update (v1.3)",
    "publishedDate": "2015-07-29",
    "lastUpdated": "2022-07-27",
    "targetPopulation": "Children, young people, and adults with suspected or diagnosed cutaneous melanoma",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "7-point checklist or ABCDE dermoscopic lesion evaluation, urgent 2-week cancer referral, 2mm excisional biopsy, wide local excision margins based on Breslow thickness, and BRAF mutation targeted therapies.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Dermoscopic & Clinical Triage (7-Point Checklist)",
        "recommendation": "Evaluate suspicious pigmented lesions with dermoscopy; refer via 2-week cancer pathway if major signs: change in size, irregular shape, irregular colour.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Primary Excisional Biopsy Technique",
        "recommendation": "Perform full-thickness complete excisional biopsy with 2 mm clinical margin and subcutaneous fat; avoid punch or shave biopsies.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Wide Local Excision Margins & Sentinel Lymph Node Biopsy",
        "recommendation": "Perform wide local excision (1 cm margin for Breslow thickness <1 mm; 2 cm for 1-4 mm); offer SLNB for pT1b and above.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Targeted BRAF / MEK & Immune Checkpoint Therapy",
        "recommendation": "Test resected stage III/IV melanoma for BRAF V600 mutations; offer dabrafenib + trametinib or pembrolizumab / nivolumab.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Never perform partial incisional or shave biopsy on suspicious melanocytic lesions as this impairs accurate Breslow microstaging.",
      "Monitor for immune-related adverse events (colitis, hypophysitis, hepatitis) during checkpoint inhibitor therapy."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng14",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG14",
    "relatedIcd11Code": "2C30",
    "relatedSnomedId": "372244006"
  },
  {
    "guidelineId": "CG151",
    "title": "Neutropenic Sepsis: Prevention and Management in Children and Adults with Cancer",
    "clinicalDomain": "Oncology & Cancer",
    "version": "2020 Update (v1.3)",
    "publishedDate": "2012-09-19",
    "lastUpdated": "2020-04-22",
    "targetPopulation": "Patients of all ages receiving anticancer treatment who present with fever or symptoms of infection",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Medical emergency protocol: immediate empiric intravenous monotherapy with piperacillin/tazobactam within 1 hour of hospital arrival without waiting for full blood count results.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Urgent Triage & Door-to-Needle < 1 Hour",
        "recommendation": "Treat fever (temp > 38.0°C) or suspected sepsis in anticancer patients as an acute medical emergency; give IV antibiotics within 60 minutes.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "First-Line Empiric IV Antibiotic Monotherapy",
        "recommendation": "Administer intravenous piperacillin with tazobactam (Tazocin) immediately as first-line empiric monotherapy.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Diagnostic Blood Cultures & Line Sampling",
        "recommendation": "Draw peripheral blood cultures and central venous catheter lumen cultures prior to starting antibiotics, but do not delay first dose.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Daily Clinical & Neutrophil Reassessment",
        "recommendation": "Reassess clinically daily; switch to targeted antibiotics based on cultures or consider antifungal therapy if persistent fever at 48-72h.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do NOT wait for full blood count (neutrophil count) results before administering the first dose of IV antibiotic.",
      "Do not routinely offer granulocyte-colony stimulating factor (G-CSF) to treat established neutropenic sepsis."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg151",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG151",
    "relatedIcd11Code": "4B10 & 1D01",
    "relatedSnomedId": "234532001"
  },
  {
    "guidelineId": "NG234",
    "title": "Spinal Metastases and Metastatic Spinal Cord Compression (MSCC)",
    "clinicalDomain": "Oncology & Cancer",
    "version": "2023 Validated",
    "publishedDate": "2023-09-27",
    "lastUpdated": "2023-09-27",
    "targetPopulation": "Adults with cancer and spinal pain, spinal metastases, or suspected spinal cord compression",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Immediate high-dose dexamethasone (16 mg), whole-spine MRI within 24 hours, spinal oncology coordinator contact, and urgent surgical decompression or stereotactic spine radiotherapy.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Immediate High-Dose Dexamethasone",
        "recommendation": "Administer oral or IV dexamethasone 16 mg daily immediately with gastric protection upon clinical suspicion of cord compression.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Whole-Spine MRI within 24 Hours",
        "recommendation": "Perform whole-spine MRI within 24 hours of suspected MSCC (within 12 hours if neurological deficit is present).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Urgent Spinal Stability Assessment (SINS Score)",
        "recommendation": "Calculate Spinal Instability Neoplastic Score (SINS); refer for urgent spinal surgery review if unstable.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Definitive Surgical Decompression or Radiotherapy",
        "recommendation": "Offer urgent surgical decompression and stabilization within 24 hours, or external beam radiotherapy if surgery not indicated.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Image the WHOLE spine, not just the symptomatic level, as multiple metastatic lesions occur in >30% of cases.",
      "Do not immobilize the patient in hard collars or spinal boards unless mechanical spinal instability is confirmed."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng234",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG234",
    "relatedIcd11Code": "2B50 & 8B43",
    "relatedSnomedId": "271813009"
  },
  {
    "guidelineId": "CG31",
    "title": "Obsessive-Compulsive Disorder and Body Dysmorphic Disorder: Treatment",
    "clinicalDomain": "Mental Health",
    "version": "2020 Update (v1.3)",
    "publishedDate": "2005-11-23",
    "lastUpdated": "2020-04-22",
    "targetPopulation": "Children, young people, and adults with OCD or BDD",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Stepped care psychological therapy with Exposure and Response Prevention (ERP), high-dose SSRI monotherapy (sertraline, fluoxetine) for at least 12 weeks, combination therapy, and clomipramine.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "First-Line CBT with Exposure and Response Prevention (ERP)",
        "recommendation": "Offer individual or group CBT including ERP as first-line psychological treatment for mild-to-moderate OCD.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "SSRI Pharmacotherapy at High Therapeutic Doses",
        "recommendation": "Offer an SSRI (e.g. sertraline up to 200 mg, fluoxetine up to 60 mg) for moderate-to-severe OCD; continue for at least 12 weeks before evaluating efficacy.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Combined ERP and High-Dose SSRI",
        "recommendation": "Combine CBT with ERP alongside high-dose SSRI for patients with severe functional impairment or partial response.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Clomipramine or Antipsychotic Augmentation",
        "recommendation": "Switch to clomipramine or augment SSRI with low-dose aripiprazole/risperidone for treatment-refractory OCD.",
        "evidenceGrade": "Moderate"
      }
    ],
    "decisionSupportRules": [
      "SSRI treatment for OCD requires higher doses and a longer trial duration (12 weeks) than for major depression.",
      "Continue successful pharmacological treatment for at least 12 months after remission to prevent relapse."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg31",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG31",
    "relatedIcd11Code": "6B20",
    "relatedSnomedId": "191736004"
  },
  {
    "guidelineId": "NG116",
    "title": "Post-Traumatic Stress Disorder: Management",
    "clinicalDomain": "Mental Health",
    "version": "2020 Update (v1.2)",
    "publishedDate": "2018-12-05",
    "lastUpdated": "2020-04-22",
    "targetPopulation": "Children, young people, and adults exposed to traumatic events who have PTSD",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Watchful waiting within 1 month of trauma, trauma-focused cognitive behavioral therapy (TF-CBT) or Eye Movement Desensitisation and Reprocessing (EMDR) as first-line, and paroxetine/sertraline for adults.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Watchful Waiting for Acute Stress (Under 1 Month)",
        "recommendation": "Offer active monitoring and practical support for mild symptoms within 1 month of traumatic exposure; do not offer psychological debriefing.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Trauma-Focused Psychological Therapies (TF-CBT)",
        "recommendation": "Offer 8 to 12 sessions of trauma-focused CBT or EMDR to adults with PTSD presenting >1 month after trauma.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Eye Movement Desensitisation and Reprocessing (EMDR)",
        "recommendation": "Offer EMDR to adults with non-combat PTSD who prefer an alternative to exposure-based TF-CBT.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Pharmacotherapy for Adults with PTSD",
        "recommendation": "Offer venlafaxine or sertraline to adults with PTSD if they prefer medication or psychological therapy is unavailable.",
        "evidenceGrade": "Moderate"
      }
    ],
    "decisionSupportRules": [
      "Do NOT offer brief single-session psychological debriefing as it can increase the risk of developing chronic PTSD.",
      "Do not offer drug treatments as first-line therapy for PTSD in children and young people under 18 years."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng116",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG116",
    "relatedIcd11Code": "6B40",
    "relatedSnomedId": "47505003"
  },
  {
    "guidelineId": "CG90",
    "title": "Depression in Adults with a Chronic Physical Health Problem",
    "clinicalDomain": "Mental Health",
    "version": "2021 Update (v1.3)",
    "publishedDate": "2009-10-28",
    "lastUpdated": "2021-08-11",
    "targetPopulation": "Adults with chronic physical health conditions (e.g. CVD, diabetes, COPD, cancer) and depression",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Case identification using Whooley questions, low-intensity psychological interventions (guided self-help, peer support), sertraline as preferred SSRI due to lowest cardiovascular drug interaction risk, and collaborative care.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Identification & Severity Assessment",
        "recommendation": "Screen using Whooley questions; assess depression severity with PHQ-9 in people with chronic physical health problems.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Low-Intensity Psychological Therapy",
        "recommendation": "Offer structured group physical activity, guided self-help, or computerized CBT for mild-to-moderate depression.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Sertraline First-Line SSRI Pharmacotherapy",
        "recommendation": "Prescribe sertraline as the preferred antidepressant in patients with unstable angina, recent MI, or cardiovascular disease.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "High-Intensity CBT & Collaborative Care",
        "recommendation": "Offer individual CBT (16-20 sessions) or interpersonal therapy for moderate-to-severe depression refractory to low-intensity interventions.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Avoid tricyclic antidepressants (TCAs) in cardiovascular disease due to arrhythmogenic and postural hypotension risks.",
      "Check for drug interactions between SSRIs and anticoagulants or NSAIDs; prescribe a PPI for gastric protection."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg90",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG90",
    "relatedIcd11Code": "6A70 & QA00",
    "relatedSnomedId": "370143000"
  },
  {
    "guidelineId": "CG123",
    "title": "Common Mental Health Problems: Identification and Pathways to Care",
    "clinicalDomain": "Mental Health",
    "version": "2021 Update (v1.4)",
    "publishedDate": "2011-05-25",
    "lastUpdated": "2021-08-11",
    "targetPopulation": "Adults aged 18 and over with depression, generalized anxiety, panic, OCD, or PTSD",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Stepped-care framework across NHS Talking Therapies (IAPT), initial screening with PHQ-9 and GAD-7, low-intensity guided self-help for Step 2, high-intensity CBT for Step 3, and crisis escalation.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Identification & Routine Symptom Measurement",
        "recommendation": "Screen with Whooley questions and 2-item GAD; measure severity with PHQ-9 and GAD-7 at initial triage and every subsequent clinical contact.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Step 2: Low-Intensity Psychological Interventions",
        "recommendation": "Offer guided self-help, computerized CBT, or psychoeducational groups as first-line for mild-to-moderate depression or generalized anxiety.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Step 3: High-Intensity Psychological Therapies & Medication",
        "recommendation": "Offer individual face-to-face CBT, interpersonal therapy (IPT), or SSRI antidepressant for moderate-to-severe symptoms or Step 2 non-responders.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Step 4 & 5: Crisis & Multi-Agency Care",
        "recommendation": "Refer to crisis resolution home treatment teams (CRHTT) or community mental health teams (CMHT) for marked suicide risk or psychotic symptoms.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not routinely offer antidepressants as first-line therapy for mild depression unless history of moderate/severe episodes.",
      "Always document a formal suicide and self-harm risk appraisal when moving between stepped care tiers."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg123",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG123",
    "relatedIcd11Code": "6A70 & 6B00",
    "relatedSnomedId": "370143000"
  },
  {
    "guidelineId": "CG120",
    "title": "Psychosis with Coexisting Substance Misuse: Assessment and Management",
    "clinicalDomain": "Mental Health",
    "version": "2021 Update (v1.2)",
    "publishedDate": "2011-03-23",
    "lastUpdated": "2021-04-14",
    "targetPopulation": "Adults and young people with severe mental illness (psychosis/schizophrenia) and co-occurring alcohol or substance misuse",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Integrated dual-diagnosis care within mental health services, avoidance of discharge due to substance misuse, motivational interviewing, harm reduction, and collaborative addiction pharmacotherapy.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Integrated Care without Gatekeeping Exclusion",
        "recommendation": "Manage patients within existing mental health services; do NOT exclude or discharge patients from psychiatric care due to active substance misuse.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Comprehensive Dual-Diagnosis Assessment",
        "recommendation": "Assess chronological relationship between substance use and psychotic symptoms, risk of accidental overdose, and physical health comorbidities.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Motivational Interviewing & Harm Reduction",
        "recommendation": "Deliver adapted motivational interviewing and cognitive behavioral therapy focusing on reducing harmful consumption and managing cravings.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Pharmacotherapy Optimization",
        "recommendation": "Prescribe second-generation antipsychotics; consider depot/long-acting injectable formulations if oral medication adherence is compromised by chaotic substance use.",
        "evidenceGrade": "Moderate"
      }
    ],
    "decisionSupportRules": [
      "Do not prescribe high doses of benzodiazepines for dual diagnosis outpatients due to heightened fatal overdose risk with illicit sedatives or alcohol.",
      "Check toxicology screens routinely when evaluating suspected treatment-resistant psychotic exacerbations."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg120",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG120",
    "relatedIcd11Code": "6A20 & 6C40",
    "relatedSnomedId": "191811002"
  },
  {
    "guidelineId": "NG134",
    "title": "Depression in Children and Young People: Identification and Management",
    "clinicalDomain": "Mental Health",
    "version": "2021 Update (v1.3)",
    "publishedDate": "2019-06-25",
    "lastUpdated": "2021-08-11",
    "targetPopulation": "Children and young people aged 5 to 18 with mild, moderate, or severe depression",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Watchful waiting (2-4 weeks) for mild depression, individual CBT or family therapy, fluoxetine as the only licensed and recommended first-line antidepressant in under 18s (with intensive suicidal ideation monitoring), and CAMHS care.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Active Monitoring & Psychoeducation for Mild Depression",
        "recommendation": "Offer supportive monitoring for 2-4 weeks alongside sleep hygiene, physical activity, and school support for mild depression.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "First-Line Psychological Therapy for Moderate-to-Severe",
        "recommendation": "Offer individual CBT (at least 3 months) or interpersonal psychotherapy for adolescents (IPT-A) as initial first-line treatment.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Fluoxetine First-Line Pharmacotherapy",
        "recommendation": "Offer oral fluoxetine (starting 10 mg daily, titrated to 20 mg) COMBINED with psychological therapy if non-responsive after 4-6 sessions.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Specialist CAMHS Tier 3/4 Escalation",
        "recommendation": "Refer to tier 3 CAMHS or inpatient adolescent unit for severe persistent depression with active suicidal plans or psychotic features.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do NOT prescribe paroxetine, venlafaxine, or tricyclic antidepressants to children and young people due to increased risk of suicidal behavior and lack of efficacy.",
      "Review children and adolescents on fluoxetine weekly for the first 4 weeks to monitor for emerging agitation or suicidal ideation."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng134",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG134",
    "relatedIcd11Code": "6A70",
    "relatedSnomedId": "370143000"
  },
  {
    "guidelineId": "NG195",
    "title": "COVID-19 Rapid Guideline: Managing the Long-Term Effects of COVID-19",
    "clinicalDomain": "Infections & Antimicrobial",
    "version": "2024 Update (v2.2)",
    "publishedDate": "2020-12-18",
    "lastUpdated": "2024-01-24",
    "targetPopulation": "Adults, children, and young people with ongoing symptomatic COVID-19 (4-12 weeks) or Post-COVID-19 syndrome (>12 weeks)",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Exclusion of acute life-threatening complications (pulmonary embolism, myocarditis), multidisciplinary assessment, post-COVID rehabilitation services, symptom pacing for post-exertional malaise, and postural orthostatic tachycardia (POTS) evaluation.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Comprehensive Clinical Assessment & Red Flag Exclusion",
        "recommendation": "Evaluate breathlessness, chest pain, cognitive dysfunction, and severe fatigue. Exclude acute PE, heart failure, and renal injury with baseline tests.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "POTS & Orthostatic Intolerance Assessment",
        "recommendation": "Perform 10-minute active stand test (or NASA lean test); identify postural orthostatic tachycardia syndrome (POTS) or orthostatic hypotension.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Activity Management & Pacing for Fatigue",
        "recommendation": "Advise activity pacing, rest breaks, and energy conservation; avoid aggressive exercise therapy that triggers post-exertional symptom exacerbation (PESE).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Integrated MDT Post-COVID Clinic Referral",
        "recommendation": "Refer to specialist post-COVID multidisciplinary rehabilitation service for coordinated physiotherapy, occupational therapy, and cognitive support.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do NOT offer graded exercise therapy (GET) to patients experiencing post-exertional malaise (PEM), as it causes symptom relapse.",
      "Investigate unexplained hypoxemia on exertion with exercise pulse oximetry desaturation testing."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng195",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG195",
    "relatedIcd11Code": "RA02",
    "relatedSnomedId": "1119302008"
  },
  {
    "guidelineId": "NG69",
    "title": "Eating Disorders: Recognition and Treatment",
    "clinicalDomain": "Mental Health",
    "version": "2020 Update (v1.2)",
    "publishedDate": "2017-05-23",
    "lastUpdated": "2020-12-16",
    "targetPopulation": "Children, young people, and adults with anorexia nervosa, bulimia nervosa, or binge eating disorder",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Urgent physical health monitoring (ECG QTc, electrolytes, muscle power SUSS test), family-based treatment (FT-AN) for children/adolescents, specialist CBT-ED or MANTRA for adults, and avoidance of refeeding syndrome.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Comprehensive Physical Health Risk Assessment",
        "recommendation": "Examine BMI, postural BP and pulse, core temperature, muscle power (Sit-Up-Squat-Stand test), serum electrolytes, and 12-lead ECG for QTc.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "First-Line Psychological Therapy for Children & Adolescents",
        "recommendation": "Offer anorexia nervosa-focused family therapy (FT-AN) as the primary treatment for children and young people with anorexia nervosa.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "First-Line Psychological Therapy for Adults (CBT-ED / MANTRA)",
        "recommendation": "Offer individual eating disorder-focused CBT (CBT-ED) or Maudsley Anorexia Nervosa Treatment for Adults (MANTRA) over 40 sessions.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Refeeding Syndrome Prevention in Severe Malnutrition",
        "recommendation": "Start nutritional replenishment cautiously (e.g. 1,000-1,200 kcal/day); check daily phosphate, potassium, magnesium, and calcium.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do NOT use single BMI cut-offs as the sole criterion for determining severity or inpatient admission.",
      "Hypophosphatemia developing during the first 72 hours of refeeding is a hallmark of refeeding syndrome requiring urgent phosphate replacement."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng69",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG69",
    "relatedIcd11Code": "6B80 & 6B81",
    "relatedSnomedId": "72366004"
  },
  {
    "guidelineId": "NG74",
    "title": "Intermediate Care Including Reablement: Clinical Pathway",
    "clinicalDomain": "Oncology & Cancer",
    "version": "2018 Validated",
    "publishedDate": "2017-09-06",
    "lastUpdated": "2018-04-18",
    "targetPopulation": "Adults transitioning from acute hospital care to home, or at risk of hospital admission",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Multi-agency comprehensive geriatric assessment (CGA), bed-based and home-based intermediate care, time-limited 6-week reablement programmes, and functional goal setting.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Single Point of Access Triage",
        "recommendation": "Assess within 24 hours of referral for home-based care (within 2 hours for crisis intermediate care to prevent admission).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Comprehensive Geriatric Assessment (CGA)",
        "recommendation": "Conduct multidisciplinary CGA evaluating physical function, polypharmacy, nutrition, cognition, and home environment.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Time-Limited Reablement (Up to 6 Weeks)",
        "recommendation": "Deliver goal-directed reablement with occupational therapists and physiotherapists focused on daily living activities (ADLs).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Transition to Sustainable Long-Term Support",
        "recommendation": "Review at 6 weeks; transition to self-management or organized long-term community social care support.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not make permanent decisions regarding long-term care home placement while the patient is acutely unwell in hospital.",
      "Provide intermediate care free of charge for up to 6 weeks in line with NHS England statutory provisions."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng74",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG74",
    "relatedIcd11Code": "QA00",
    "relatedSnomedId": "308292007"
  },
  {
    "guidelineId": "NG186",
    "title": "Chronic Pain (Primary and Secondary) in Over 16s: Assessment and Management",
    "clinicalDomain": "Neurology & CNS",
    "version": "2021 Validated",
    "publishedDate": "2021-04-07",
    "lastUpdated": "2021-04-07",
    "targetPopulation": "Adults aged 16 and over with chronic primary pain (such as fibromyalgia, chronic non-specific neck/back pain) or chronic secondary pain",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Person-centered shared understanding of chronic primary pain, physical activity and exercise programmes, psychological therapies (acceptance and commitment therapy - ACT, CBT), and avoiding opioids, NSAIDs, and gabapentinoids.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Person-Centred Assessment & Validation",
        "recommendation": "Explore patient narrative, impact on daily life, work, and sleep; explain neurobiology of central sensitization and chronic primary pain.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Physical Activity & Exercise Programmes",
        "recommendation": "Offer supervised group or individual exercise programmes (cardiovascular, resistance, or mind-body like Tai Chi).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Psychological Therapies (ACT / CBT for Pain)",
        "recommendation": "Offer Acceptance and Commitment Therapy (ACT) or CBT to promote psychological flexibility and living well despite pain.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Evidence-Based Antidepressants (Amitriptyline / Duloxetine)",
        "recommendation": "Consider an antidepressant (amitriptyline, citalopram, duloxetine, fluoxetine, or sertraline) for chronic primary pain after discussion of benefits/risks.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do NOT initiate opioids, NSAIDs, paracetamol, benzodiazepines, or gabapentinoids for chronic primary pain as evidence shows lack of benefit and serious long-term harm.",
      "Do not routinely offer acupuncture unless as part of a structured protocol for chronic primary pain."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng186",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG186",
    "relatedIcd11Code": "MG30.0",
    "relatedSnomedId": "82423001"
  },
  {
    "guidelineId": "NG147",
    "title": "Diving and Hyperbaric Medicine: Health Assessment and Clinical Applications",
    "clinicalDomain": "Cardiovascular",
    "version": "2021 Validated",
    "publishedDate": "2019-10-16",
    "lastUpdated": "2021-04-14",
    "targetPopulation": "Divers and patients requiring hyperbaric oxygen therapy (HBOT)",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Medical fitness to dive certification, decompression illness (DCI) emergency recognition, 100% normobaric oxygen first aid, urgent recompression in multiplace hyperbaric chamber, and tissue necrosis care.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Medical Fitness to Dive Assessment",
        "recommendation": "Screen for asthma, patent foramen ovale (PFO), spontaneous pneumothorax, and epilepsy before certifying fitness for recreational/commercial diving.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Emergency Field Management of DCI / Arterial Gas Embolism",
        "recommendation": "Administer high-flow 100% normobaric oxygen via non-rebreather mask immediately; deliver oral or IV crystalloid fluids.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Urgent Hyperbaric Recompression Referral",
        "recommendation": "Contact national diving emergency helpline; transfer immediately to multiplace hyperbaric chamber for US Navy Treatment Table 6 recompression.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Post-DCI Medical Review & PFO Closure",
        "recommendation": "Perform bubble contrast transthoracic/transesophageal echocardiography to detect large right-to-left cardiac shunt in unprovoked DCI.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not fly or travel to high altitude (>300m) for at least 24 hours following suspected decompression illness or hyperbaric treatment.",
      "Hyperbaric oxygen is NOT indicated for uncomplicated acute tinnitus or sensorineural hearing loss without sudden barotrauma."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng147",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG147",
    "relatedIcd11Code": "NF00",
    "relatedSnomedId": "242045009"
  },
  {
    "guidelineId": "NG149",
    "title": "Neonatal Parenteral Nutrition: Clinical Formulation and Delivery",
    "clinicalDomain": "Gastroenterology",
    "version": "2020 Validated",
    "publishedDate": "2020-02-26",
    "lastUpdated": "2020-02-26",
    "targetPopulation": "Preterm and term newborn infants requiring parenteral nutrition",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Standardized neonatal PN bags within 8 hours of birth, early amino acid and lipid intake, centralized vascular access, daily electrolyte monitoring, and graduated enteral milk advancement.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Early Initiation within 8 Hours of Birth",
        "recommendation": "Start parenteral nutrition as soon as possible and within 8 hours of birth in babies born before 31 weeks or birthweight < 1,000g.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Standardized Amino Acid & Lipid Provision",
        "recommendation": "Provide starting amino acids 1.5-2.0 g/kg/day and IV lipid emulsion starting at 1.0-2.0 g/kg/day, titrating to 3.0 g/kg/day.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Dedicated Central Venous Catheter Infusion",
        "recommendation": "Administer PN via a dedicated lumen of a percutaneous central venous catheter (PICC) or umbilical venous catheter (UVC).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Biochemical Monitoring & Enteral Weaning",
        "recommendation": "Check daily blood gas, urea, electrolytes, calcium, and triglycerides; wean PN progressively as maternal breast milk feeds increase.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Protect intravenous lipid emulsions from light exposure to prevent the formation of toxic peroxides.",
      "Stop or reduce IV lipid infusion if serum triglyceride levels exceed 3.0 mmol/L."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng149",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG149",
    "relatedIcd11Code": "QA00",
    "relatedSnomedId": "225898003"
  },
  {
    "guidelineId": "NG70",
    "title": "Air Pollution: Outdoor Air Quality and Health",
    "clinicalDomain": "Respiratory",
    "version": "2020 Validated",
    "publishedDate": "2017-06-30",
    "lastUpdated": "2020-04-14",
    "targetPopulation": "Children, young people, and adults vulnerable to particulate matter and nitrogen dioxide",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Public health and clinical risk communication for patients with asthma, COPD, and cardiovascular disease regarding air quality index alerts, avoiding high-traffic outdoor exercise, and clean-air routing.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Vulnerable Population Identification",
        "recommendation": "Identify patients with severe asthma, COPD, ischemic heart disease, or heart failure who are acutely sensitive to air pollutants.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Daily Air Quality Index (DAQI) Counseling",
        "recommendation": "Advise vulnerable patients to check daily air quality forecasts and reduce strenuous outdoor physical exertion on high pollution days.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Personal Exposure Reduction Strategies",
        "recommendation": "Advise using quieter side streets rather than main arterial roads when walking or cycling to cut particulate matter exposure by up to 50%.",
        "evidenceGrade": "Moderate"
      },
      {
        "stepNumber": 4,
        "stage": "Optimizing Preventive Inhaler Therapy",
        "recommendation": "Ensure patients with chronic respiratory disease have up-to-date personalized asthma/COPD action plans and keep rescue inhalers accessible.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not advise patients with chronic disease to avoid physical exercise entirely; encourage indoor exercise when outdoor pollution is elevated.",
      "Review inhaler technique and adherence when patients report pollution-triggered flare-ups."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng70",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG70",
    "relatedIcd11Code": "QC00",
    "relatedSnomedId": "422843007"
  },
  {
    "guidelineId": "NG53",
    "title": "Chronic Obstructive Pulmonary Disease: Clinical Service Organisation",
    "clinicalDomain": "Respiratory",
    "version": "2021 Update (v1.3)",
    "publishedDate": "2016-07-20",
    "lastUpdated": "2021-08-11",
    "targetPopulation": "Adults with COPD across primary, secondary, and community care",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Structured annual review, multi-professional pulmonary rehabilitation networks, early supported discharge (ESD) schemes, and non-invasive ventilation (NIV) services in acute respiratory acidosis.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Structured Annual Primary Care Review",
        "recommendation": "Review MRC dyspnea score, exacerbation frequency, CAT score, inhaler technique, BMI, and smoking status at least annually.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Comprehensive Pulmonary Rehabilitation Services",
        "recommendation": "Ensure all patients with MRC dyspnoea grade ≥ 3 have access to a 6-to-12 week supervised exercise and education programme.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Early Supported Discharge (ESD) Schemes",
        "recommendation": "Provide dedicated hospital-at-home / ESD teams for acute COPD exacerbations to reduce length of inpatient hospital stay.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Acute Non-Invasive Ventilation (NIV) Protocols",
        "recommendation": "Ensure 24/7 dedicated acute NIV service for patients with persistent hypercapnic respiratory acidosis (pH < 7.35, PaCO2 > 6.0 kPa).",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Perform arterial blood gas analysis within 1 hour of hospital arrival in all acute COPD exacerbations.",
      "Do not delay acute NIV to wait for response to medical therapy once controlled oxygen and bronchodilators fail to correct acidosis."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng53",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG53",
    "relatedIcd11Code": "CA22",
    "relatedSnomedId": "13645005"
  },
  {
    "guidelineId": "CG160",
    "title": "Fever in Under 5s: Assessment and Initial Management (Foundational)",
    "clinicalDomain": "Infections & Antimicrobial",
    "version": "2019 Validated Foundation",
    "publishedDate": "2013-05-22",
    "lastUpdated": "2019-11-20",
    "targetPopulation": "Infants and children under 5 years presenting with feverish illness",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Standardized traffic light system (Green, Amber, Red), age-based risk stratification (under 3 months = high risk), objective temperature measurement, and emergency hospital transfer protocols.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Traffic Light Clinical Risk Stratification",
        "recommendation": "Assess colour, activity, respiratory signs, hydration, and other symptoms to categorize into Green (low), Amber (intermediate), or Red (high risk).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Infants Under 3 Months Emergency Care",
        "recommendation": "Refer all infants under 3 months with temperature ≥ 38.0°C immediately to secondary pediatric care for full septic screen.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Appropriate Antipyretic Use for Distress",
        "recommendation": "Offer paracetamol or ibuprofen only if the child is distressed or unwell; do not administer antipyretics solely to reduce body temperature.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Safety-Netting & Reassessment Thresholds",
        "recommendation": "Provide verbal and written safety-netting information specifying warning signs (non-blanching rash, breathing difficulty, floppiness).",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not use tepid sponging or cold baths to cool a feverish child.",
      "Do not give paracetamol and ibuprofen simultaneously; alternate only if distress does not alleviate with single agent."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg160",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG160",
    "relatedIcd11Code": "MG26",
    "relatedSnomedId": "386661006"
  },
  {
    "guidelineId": "NG159",
    "title": "Neonatal Respiratory Distress Syndrome: Clinical Pathway",
    "clinicalDomain": "Respiratory",
    "version": "2020 Validated",
    "publishedDate": "2020-04-15",
    "lastUpdated": "2020-04-15",
    "targetPopulation": "Preterm newborn infants with or at risk of respiratory distress syndrome (RDS)",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Delivery room CPAP stabilization, early exogenous surfactant administration (LISA/MIST technique), target oxygen saturation ranges (91-95%), and lung-protective volume-targeted ventilation.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Delivery Room CPAP Stabilization",
        "recommendation": "Stabilize spontaneously breathing preterm babies with nasal CPAP (5-6 cmH2O) rather than routine endotracheal intubation.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Early Exogenous Natural Surfactant",
        "recommendation": "Administer natural porcine or bovine surfactant (200 mg/kg) via thin catheter (LISA/MIST) if oxygen requirement FiO2 > 0.30 on CPAP.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Target Oxygen Saturation Alarm Limits",
        "recommendation": "Set pulse oximeter saturation targets strictly between 91% and 95% to prevent retinopathy of prematurity and bronchopulmonary dysplasia.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Volume-Targeted Mechanical Ventilation",
        "recommendation": "Use volume-targeted ventilation (tidal volume 4-5 mL/kg) when mechanical ventilation is unavoidable to minimize ventilator-induced lung injury.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Avoid high tidal volumes (>6 mL/kg) which cause volutrauma and pulmonary air leaks.",
      "Caffeine citrate should be initiated early to stimulate respiratory drive and facilitate extubation from CPAP."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng159",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG159",
    "relatedIcd11Code": "KB00",
    "relatedSnomedId": "206371000"
  },
  {
    "guidelineId": "CG191",
    "title": "Pneumonia in Adults: Diagnosis and Clinical Management",
    "clinicalDomain": "Respiratory",
    "version": "2020 Validated Foundation",
    "publishedDate": "2014-12-03",
    "lastUpdated": "2020-04-22",
    "targetPopulation": "Adults aged 18 and over presenting with community-acquired or hospital-acquired pneumonia",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "CURB-65 mortality risk scoring, chest radiograph confirmation, point-of-care CRP testing in primary care, 5-day antibiotic duration for low severity, and dual therapy (co-amoxiclav + macrolide) for severe CAP.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "CURB-65 Severity Stratification",
        "recommendation": "Calculate CURB-65 score (Confusion, Urea >7, RR ≥30, BP <90/60, Age ≥65). Score 0-1: home care; score ≥2: hospital care; ≥3: ICU/HDU review.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Point-of-Care CRP in Primary Care",
        "recommendation": "In primary care, measure point-of-care CRP: <20 mg/L (do not prescribe antibiotics); 20-100 mg/L (delayed prescription); >100 mg/L (immediate antibiotics).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Antibiotic Prescribing by Severity Tier",
        "recommendation": "Offer 5 days oral amoxicillin 500 mg tds for low severity; dual therapy with IV co-amoxiclav plus clarithromycin for severe CAP.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "6-Week Chest Radiograph Follow-Up",
        "recommendation": "Arrange repeat chest X-ray at 6 weeks for patients with persisting symptoms or at high risk of underlying malignancy (smokers >50 years).",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Administer first antibiotic dose within 4 hours of hospital arrival in all patients with confirmed community-acquired pneumonia.",
      "Do not routinely offer corticosteroids for community-acquired pneumonia unless in refractory septic shock."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg191",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG191",
    "relatedIcd11Code": "CA40",
    "relatedSnomedId": "233604007"
  },
  {
    "guidelineId": "NG184",
    "title": "Specialist Neonatal Respiratory Care for Preterm Infants",
    "clinicalDomain": "Respiratory",
    "version": "2021 Validated",
    "publishedDate": "2021-04-14",
    "lastUpdated": "2021-04-14",
    "targetPopulation": "Preterm newborn infants requiring specialist respiratory care in neonatal units",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Early caffeine citrate for apnea of prematurity, non-invasive respiratory support (biphasic CPAP / high flow), lung-protective invasive ventilation strategies, and home oxygen therapy assessment.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Prophylactic Caffeine Citrate Therapy",
        "recommendation": "Initiate loading dose caffeine citrate (20 mg/kg) within 72 hours of birth in babies < 30 weeks gestation to improve extubation and survival.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Non-Invasive Respiratory Modality Selection",
        "recommendation": "Use nasal CPAP or high-flow nasal cannula as primary modes of non-invasive respiratory support; minimize tracheal intubation.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Inhaled Nitric Oxide (iNO) for Severe PPHN",
        "recommendation": "Consider trial of inhaled nitric oxide (iNO 20 ppm) for confirmed persistent pulmonary hypertension of the newborn (PPHN) in near-term infants.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Discharge Planning with Home Oxygen",
        "recommendation": "Assess for safe home low-flow oxygen therapy in chronic lung disease of prematurity; confirm maternal training and equipment.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not use routine systemic dexamethasone within the first 7 days of life to prevent bronchopulmonary dysplasia due to neurodevelopmental risks.",
      "Perform continuous pulse oximetry monitoring with tight alarm boundaries for all preterm infants on oxygen."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng184",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG184",
    "relatedIcd11Code": "KB00 & KB02",
    "relatedSnomedId": "276369006"
  },
  {
    "guidelineId": "CG117",
    "title": "Tuberculosis: Clinical Diagnosis and Transmission Prevention",
    "clinicalDomain": "Infections & Antimicrobial",
    "version": "2019 Validated Foundation",
    "publishedDate": "2011-03-23",
    "lastUpdated": "2019-10-16",
    "targetPopulation": "Individuals presenting with signs of pulmonary or extra-pulmonary tuberculosis",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Chest radiography, 3 sputum samples for microscopy and culture, negative pressure isolation for open smear-positive pulmonary TB, and BCG vaccination criteria.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Clinical Red Flags & Chest Radiography",
        "recommendation": "Order chest X-ray for unexplained cough >3 weeks, hemoptysis, night sweats, or unexplained weight loss.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Airborne Infection Isolation Precautions",
        "recommendation": "Isolate patients with suspected infectious pulmonary TB in single rooms (negative pressure if multidrug-resistant TB suspected).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Molecular Drug Susceptibility Testing",
        "recommendation": "Perform rapid automated PCR (e.g. GeneXpert MTB/RIF) to identify Mycobacterium tuberculosis and rifampicin resistance within 48 hours.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Targeted Contact Tracing & Screening",
        "recommendation": "Screen household and close workplace contacts with symptom questionnaire and IGRA/Mantoux testing.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Smear-positive patients remain potentially infectious until completing at least 2 weeks of appropriate quadruple therapy and showing clinical improvement.",
      "Report all suspected or confirmed cases of tuberculosis to public health authorities within 3 working days."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg117",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG117",
    "relatedIcd11Code": "1B10",
    "relatedSnomedId": "56717001"
  },
  {
    "guidelineId": "NG188",
    "title": "COVID-19 Rapid Guideline: Reducing the Risk of Venous Thromboembolism in COVID-19",
    "clinicalDomain": "Cardiovascular",
    "version": "2023 Update (v2.1)",
    "publishedDate": "2020-11-20",
    "lastUpdated": "2023-03-15",
    "targetPopulation": "Hospitalized patients with acute COVID-19 infection",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Mandatory thromboprophylaxis with standard prophylactic-dose low-molecular-weight heparin (LMWH) for all hospitalized COVID-19 patients, monitoring D-dimer and bleeding risk.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Universal Inpatient Thromboprophylaxis",
        "recommendation": "Prescribe prophylactic-dose LMWH (e.g. enoxaparin 40 mg daily) to all patients admitted with COVID-19 unless contraindicated.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Dose Adjustment for Obesity and Renal Impairment",
        "recommendation": "Increase prophylactic LMWH dose in extreme obesity (BMI > 40 kg/m²); reduce dose or monitor anti-Xa if eGFR < 30 mL/min.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Investigating Sudden Clinical Deterioration",
        "recommendation": "Perform urgent CT pulmonary angiography (CTPA) for sudden unexplained tachycardia, hypotension, or worsening hypoxia to rule out acute PE.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Extended Thromboprophylaxis Evaluation",
        "recommendation": "Assess high-risk patients (ongoing immobility, ICU admission) for extended outpatient thromboprophylaxis upon discharge.",
        "evidenceGrade": "Moderate"
      }
    ],
    "decisionSupportRules": [
      "Do not routinely use full therapeutic-dose anticoagulation for VTE prophylaxis in COVID-19 outside of clinical trials due to major bleeding risk.",
      "Withhold pharmacological thromboprophylaxis if active major bleeding or platelets < 25 x 10^9/L."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng188",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG188",
    "relatedIcd11Code": "BD71 & RA01",
    "relatedSnomedId": "840539006"
  },
  {
    "guidelineId": "CG106",
    "title": "Barrett's Oesophagus: Ablative Therapy for Dysplasia",
    "clinicalDomain": "Gastroenterology",
    "version": "2021 Update (v1.2)",
    "publishedDate": "2010-08-25",
    "lastUpdated": "2021-04-14",
    "targetPopulation": "Adults with Barrett's esophagus and confirmed low-grade or high-grade dysplasia",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Expert histopathological confirmation of dysplasia by two gastrointestinal pathologists, radiofrequency ablation (RFA), endoscopic mucosal resection (EMR) for visible lesions, and endoscopic surveillance.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Dual Expert Pathologist Confirmation",
        "recommendation": "Ensure all biopsy specimens showing low-grade or high-grade dysplasia are independently confirmed by a second gastrointestinal pathologist.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Endoscopic Mucosal Resection (EMR) for Nodules",
        "recommendation": "Perform endoscopic mucosal resection for any visible nodular or elevated mucosal lesion prior to ablative therapy.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Radiofrequency Ablation (RFA) for Flat Dysplasia",
        "recommendation": "Offer radiofrequency ablation (HALO 360/HALO 90) to eradicate flat high-grade dysplasia or confirmed flat low-grade dysplasia.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Post-Ablation Endoscopic Surveillance",
        "recommendation": "Perform regular 4-quadrant Seattle protocol surveillance endoscopy at 3, 6, and 12 months post-ablation to detect recurrence.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not offer routine esophagectomy as first-line therapy for high-grade dysplasia; endoscopic eradication therapy has equivalent cancer control with much lower morbidity.",
      "Maintain continuous high-dose proton pump inhibitor therapy to suppress acid reflux throughout ablative treatment."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg106",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG106",
    "relatedIcd11Code": "DA22.1",
    "relatedSnomedId": "28165008"
  },
  {
    "guidelineId": "CG186",
    "title": "Multiple Sclerosis in Adults: Management (Foundational)",
    "clinicalDomain": "Neurology & CNS",
    "version": "2019 Validated Foundation",
    "publishedDate": "2014-10-08",
    "lastUpdated": "2019-11-20",
    "targetPopulation": "Adults diagnosed with relapsing-remitting or progressive multiple sclerosis",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Oral or intravenous methylprednisolone for acute relapses (500mg daily for 5 days), comprehensive symptom management (spasticity, neuropathic pain, bladder dysfunction), and multidisciplinary neuro-rehabilitation.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Acute Relapse Management with High-Dose Steroids",
        "recommendation": "Offer oral methylprednisolone 0.5g daily for 5 days (or IV 1g daily for 3-5 days) for acute relapses causing distressing disability.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Spasticity Pharmacotherapy (Baclofen / Gabapentin)",
        "recommendation": "Offer oral baclofen or gabapentin as first-line medication to treat spasticity; titrate to maximum tolerated functional benefit.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Bladder Dysfunction Management",
        "recommendation": "Assess post-void residual urine with ultrasound; teach clean intermittent self-catheterisation if residual volume > 100 mL.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Fatigue Management & Amantadine",
        "recommendation": "Offer supervised aerobic exercise and mindfulness/CBT for MS fatigue; consider trial of amantadine 100-200 mg daily.",
        "evidenceGrade": "Moderate"
      }
    ],
    "decisionSupportRules": [
      "Do not prescribe high-dose corticosteroids more than 3 times a year or for periods longer than 3 weeks.",
      "Check for concurrent urinary tract or systemic infection prior to treating suspected MS relapse with steroids."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg186",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG186",
    "relatedIcd11Code": "8A40",
    "relatedSnomedId": "24700007"
  },
  {
    "guidelineId": "CG42",
    "title": "Dementia: Supporting People with Dementia and Their Carers",
    "clinicalDomain": "Neurology & CNS",
    "version": "2018 Validated Foundation",
    "publishedDate": "2006-11-22",
    "lastUpdated": "2018-06-20",
    "targetPopulation": "People living with Alzheimer's disease, vascular dementia, dementia with Lewy bodies, or frontotemporal dementia",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Memory assessment service referral, structural neuroimaging (CT/MRI), acetylcholinesterase inhibitors (donepezil, rivastigmine, galantamine), memantine for severe dementia, and non-pharmacological behavioral care.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Specialist Memory Assessment Service Referral",
        "recommendation": "Refer all patients with suspected dementia for comprehensive neuropsychological testing and brain imaging (MRI/CT).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Acetylcholinesterase Inhibitors (AChEIs) First-Line",
        "recommendation": "Offer donepezil, galantamine, or rivastigmine as first-line options for mild-to-moderate Alzheimer's disease and Lewy body dementia.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Memantine for Moderate-to-Severe Dementia",
        "recommendation": "Offer memantine monotherapy for severe Alzheimer's disease, or as an add-on to AChEIs in moderate Alzheimer's disease.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Non-Pharmacological Behavioral Support",
        "recommendation": "Use personalized non-pharmacological approaches (validation therapy, music, reminiscence) for behavioral and psychological symptoms of dementia (BPSD).",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not prescribe antipsychotics for non-cognitive symptoms or challenging behavior unless the patient is at immediate risk of harming themselves or others.",
      "Antipsychotics carry a significantly increased risk of stroke and mortality in patients with dementia."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg42",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG42",
    "relatedIcd11Code": "6D80",
    "relatedSnomedId": "52448006"
  },
  {
    "guidelineId": "CG35",
    "title": "Parkinson's Disease: Diagnosis and Management in Primary and Secondary Care",
    "clinicalDomain": "Neurology & CNS",
    "version": "2017 Validated Foundation",
    "publishedDate": "2006-06-28",
    "lastUpdated": "2017-07-19",
    "targetPopulation": "People presenting with suspected or confirmed idiopathic Parkinson's disease",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Untreated patient referral to Parkinson's disease specialist within 6 weeks, levodopa first-line for motor symptoms affecting quality of life, dopamine agonists / MAO-B inhibitors, and specialist nurse support.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Urgent Specialist Referral within 6 Weeks",
        "recommendation": "Refer patients with suspected parkinsonism to a movement disorder specialist within 6 weeks before starting antiparkinsonian medication.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "First-Line Levodopa Therapy",
        "recommendation": "Offer levodopa with a dopa-decarboxylase inhibitor (co-beneldopa or co-careldopa) as the most effective first-line motor therapy.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Dopamine Agonists & MAO-B Inhibitors",
        "recommendation": "Consider non-ergot dopamine agonists (pramipexole, ropinirole) or MAO-B inhibitors (rasagiline) for early disease without major motor disability.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Parkinson's Specialist Nurse Integration",
        "recommendation": "Ensure all patients have continuous access to a Parkinson's disease nurse specialist for medication titration and monitoring.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Warn patients and carers about impulse control disorders (gambling, hypersexuality, compulsive shopping) associated with dopamine agonists.",
      "Never abruptly stop levodopa or dopamine agonists due to the risk of neuroleptic malignant-like syndrome."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg35",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG35",
    "relatedIcd11Code": "8A00",
    "relatedSnomedId": "49049000"
  },
  {
    "guidelineId": "NG193",
    "title": "Chronic Pain: Initial Assessment and Diagnostic Classification",
    "clinicalDomain": "Neurology & CNS",
    "version": "2021 Validated",
    "publishedDate": "2021-04-07",
    "lastUpdated": "2021-04-07",
    "targetPopulation": "People presenting with chronic pain lasting 3 months or longer",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Classification into chronic primary pain vs chronic secondary pain (underlying musculoskeletal, neuropathic, or visceral pathology), biopsychosocial evaluation, and collaborative therapeutic goal setting.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Initial Classification: Primary vs Secondary Pain",
        "recommendation": "Differentiate chronic primary pain (pain cannot be accounted for by another diagnosis) from chronic secondary pain conditions.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Biopsychosocial Pain Formulation",
        "recommendation": "Evaluate pain severity, impact on daily function, mood, sleep, employment, and social relationships.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Validation & Therapeutic Alliance",
        "recommendation": "Validate the patient's experience of pain; provide realistic reassurance regarding living well with chronic pain.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Developing Shared Self-Management Plan",
        "recommendation": "Agree on a shared management plan focusing on functional and quality-of-life goals rather than complete pain abolition.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Avoid repeated investigations and diagnostic imaging when no new red flag clinical signs have developed.",
      "Clearly explain that pain does not always indicate ongoing tissue damage."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng193",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG193",
    "relatedIcd11Code": "MG30",
    "relatedSnomedId": "82423001"
  },
  {
    "guidelineId": "CG87",
    "title": "Low Back Pain in Adults: Early Management (Foundational)",
    "clinicalDomain": "Musculoskeletal",
    "version": "2016 Validated Foundation",
    "publishedDate": "2009-05-27",
    "lastUpdated": "2016-11-23",
    "targetPopulation": "Adults aged 18 and over presenting with non-specific low back pain of less than 12 months duration",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Exclusion of cauda equina syndrome and red flags, promoting physical activity and remaining in work, supervised exercise programmes, manual therapy, and avoiding routine X-rays and MRI scans.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Exclusion of Serious Spinal Red Flags",
        "recommendation": "Screen urgently for cauda equina syndrome (saddle anesthesia, bowel/bladder incontinence, bilateral sciatica) and infection/fracture.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Reassurance & Encouraging Normal Activity",
        "recommendation": "Reassure patient that non-specific back pain usually improves; advise remaining active and continuing normal daily activities/work.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Exercise & Manual Therapy Courses",
        "recommendation": "Offer a structured exercise programme (biomechanical, aerobic, or mind-body) tailored to patient preference; consider course of manual therapy.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Short-Course Oral NSAIDs",
        "recommendation": "Offer oral NSAIDs (e.g. naproxen 500 mg bd) at lowest effective dose with a proton pump inhibitor for pain relief.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not routinely offer X-rays or MRI of the lumbar spine for non-specific low back pain without red flag signs.",
      "Do not offer bed rest as a treatment for low back pain."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg87",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG87",
    "relatedIcd11Code": "ME84.2",
    "relatedSnomedId": "279039007"
  },
  {
    "guidelineId": "CG79",
    "title": "Rheumatoid Arthritis in Adults: Early Management (Foundational)",
    "clinicalDomain": "Musculoskeletal",
    "version": "2018 Validated Foundation",
    "publishedDate": "2009-02-25",
    "lastUpdated": "2018-07-11",
    "targetPopulation": "Adults with suspected or diagnosed active rheumatoid arthritis",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Urgent rheumatology referral within 3 working days for suspected persistent synovitis, treat-to-target strategy, conventional synthetic DMARD monotherapy (methotrexate) plus short-term glucocorticoid bridging.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Urgent Referral within 3 Working Days",
        "recommendation": "Refer adults with persistent small joint synovitis (swelling of hands/feet, positive squeeze test) to rheumatology within 3 days.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Treat-to-Target Strategy (DAS28 Remission)",
        "recommendation": "Aim for disease remission or low disease activity measured with DAS28; escalate therapy every 1-3 months until target reached.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "First-Line csDMARD Monotherapy with Methotrexate",
        "recommendation": "Initiate oral methotrexate alongside short-term oral prednisolone bridging therapy to achieve rapid symptomatic control.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Escalation to Combination DMARDs / Biologics",
        "recommendation": "Add a second csDMARD (leflunomide or sulfasalazine); escalate to TNF inhibitors (adalimumab/etanercept) if DAS28 > 5.1.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Prescribe oral folic acid (5 mg weekly) on a different day from methotrexate to reduce hepatic and gastrointestinal toxicity.",
      "Monitor full blood count, renal function, and ALT every 2-4 weeks until methotrexate dose is stable, then 3-monthly."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg79",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG79",
    "relatedIcd11Code": "FA20",
    "relatedSnomedId": "69896004"
  },
  {
    "guidelineId": "CG59",
    "title": "Osteoarthritis: Care and Management in Adults (Foundational)",
    "clinicalDomain": "Musculoskeletal",
    "version": "2022 Validated Foundation",
    "publishedDate": "2008-02-27",
    "lastUpdated": "2022-10-19",
    "targetPopulation": "Adults aged 45 and over presenting with joint pain and functional impairment",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Clinical diagnosis without routine imaging (age ≥45, activity-related joint pain, morning stiffness ≤30m), core non-pharmacological treatments (exercise, weight loss), topical NSAIDs first-line, and joint arthroplasty referral.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Clinical Diagnosis without Routine Radiography",
        "recommendation": "Diagnose clinically without plain X-rays if patient is ≥45 years with activity-related joint pain and morning stiffness ≤ 30 minutes.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Core Treatments: Exercise and Weight Reduction",
        "recommendation": "Prescribe muscle strengthening and aerobic exercise for all patients; recommend weight loss if BMI ≥ 25 kg/m².",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Topical NSAIDs as First-Line Pharmacotherapy",
        "recommendation": "Offer topical NSAIDs (e.g. ibuprofen or diclofenac gel) as first-line medication for knee or hand osteoarthritis before oral agents.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Timely Orthopedic Surgical Referral",
        "recommendation": "Refer for total hip or knee replacement before severe prolonged joint destruction or irreversible muscle wasting develops.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not offer glucosamine, chondroitin, or acupuncture products for osteoarthritis.",
      "Routine plain joint radiography is not required to diagnose osteoarthritis or initiate first-line conservative management."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg59",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG59",
    "relatedIcd11Code": "FA00 & FA01",
    "relatedSnomedId": "396275006"
  },
  {
    "guidelineId": "NG37",
    "title": "Fractures (Complex): Assessment and Management",
    "clinicalDomain": "Musculoskeletal",
    "version": "2020 Update (v1.2)",
    "publishedDate": "2016-02-17",
    "lastUpdated": "2020-09-16",
    "targetPopulation": "Patients of all ages presenting with complex, open, pelvic, or pilon fractures",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Major trauma centre (MTC) triage, immediate pelvic binder for unstable pelvic fractures, photo-documentation and saline dressing of open fractures, urgent IV antibiotics within 3 hours, and joint ortho-plastic debridement.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Pre-Hospital Triage & Pelvic Binder Application",
        "recommendation": "Apply a pelvic binder immediately for suspected open-book or unstable pelvic ring injury before moving patient.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Open Fracture Wound Photography & Dressing",
        "recommendation": "Take single clinical photograph of open fracture wound, cover with saline-soaked gauze, and do not re-expose wound until in theatre.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Urgent Systemic Antibiotic Prophylaxis",
        "recommendation": "Administer intravenous co-amoxiclav 1.2g (or cefuroxime) immediately and within 3 hours of injury for all open fractures.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Combined Ortho-Plastic Debridement in Theatre",
        "recommendation": "Perform joint surgical debridement by consultant orthopedic and plastic surgeons within 24 hours of injury (within 12h if heavily contaminated).",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not irrigate or wash open fracture wounds in the emergency department; perform debridement only in the operating theatre.",
      "Definitive skeletal fixation and soft tissue cover should be achieved within 72 hours of open fracture injury."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng37",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG37",
    "relatedIcd11Code": "NC32",
    "relatedSnomedId": "125605004"
  },
  {
    "guidelineId": "CG177",
    "title": "Osteoarthritis: Care and Management in Adults (Updated Framework)",
    "clinicalDomain": "Musculoskeletal",
    "version": "2020 Validated Framework",
    "publishedDate": "2014-02-12",
    "lastUpdated": "2020-09-16",
    "targetPopulation": "Adults with peripheral joint osteoarthritis",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Holistic assessment of function and sleep, biomechanical aids and insoles, oral NSAIDs with PPI gastroprotection, and intra-articular corticosteroid injections for acute flare relief.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Holistic Impact Assessment",
        "recommendation": "Assess joint pain, stiffness, functional limitations, sleep disruption, and mood; support patient self-management.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Assistive Devices & Biomechanical Footwear",
        "recommendation": "Advise appropriate footwear with shock-absorbing soles; provide walking sticks and assistive aids to relieve joint loading.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Oral NSAIDs with Mandatory PPI Co-Prescription",
        "recommendation": "Prescribe oral NSAID at lowest effective dose; always co-prescribe a proton pump inhibitor to minimize GI bleeding risk.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Intra-Articular Corticosteroid Injections",
        "recommendation": "Consider intra-articular corticosteroid injection for short-term relief of moderate-to-severe joint pain during an acute flare.",
        "evidenceGrade": "Moderate"
      }
    ],
    "decisionSupportRules": [
      "Do NOT offer intra-articular hyaluronan (hyaluronic acid) injections for the management of osteoarthritis.",
      "Do not routinely offer paracetamol or weak opioids due to minimal clinical benefit and heightened risk of toxicity."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg177",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG177",
    "relatedIcd11Code": "FA00",
    "relatedSnomedId": "396275006"
  },
  {
    "guidelineId": "CG122",
    "title": "Ovarian Cancer: Identifying and Managing Advanced Disease",
    "clinicalDomain": "Oncology & Cancer",
    "version": "2020 Validated Foundation",
    "publishedDate": "2011-04-27",
    "lastUpdated": "2020-04-22",
    "targetPopulation": "Women with FIGO stage III-IV epithelial ovarian cancer",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Staging CT of chest, abdomen, and pelvis; primary debulking cytoreductive surgery to achieve zero macroscopic residual disease; neoadjuvant chemotherapy (NACT); and bevacizumab/PARP inhibitor maintenance.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Contrast CT of Chest, Abdomen and Pelvis",
        "recommendation": "Perform contrast-enhanced CT of chest, abdomen, and pelvis to stage extent of disease and assess surgical resectability.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Maximal Cytoreductive Debulking Surgery",
        "recommendation": "Perform primary cytoreductive surgery aiming for complete macroscopic resection of all visible tumor deposits.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Platinum-Based Combination Chemotherapy",
        "recommendation": "Administer 6 cycles of intravenous carboplatin (AUC 5-6) plus paclitaxel (175 mg/m²) as adjuvant or neoadjuvant therapy.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "PARP Inhibitor Maintenance Therapy (Olaparib)",
        "recommendation": "Offer maintenance olaparib or niraparib for women with BRCA1/2 mutation or homologous recombination deficiency responding to platinum.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Women with extensive disease where complete cytoreduction is not feasible should receive 3 cycles of NACT followed by interval debulking surgery.",
      "Check germline and somatic BRCA status in all non-mucinous epithelial ovarian cancer patients."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg122",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG122",
    "relatedIcd11Code": "2C73",
    "relatedSnomedId": "363443007"
  },
  {
    "guidelineId": "CG81",
    "title": "Advanced Breast Cancer: Diagnosis and Treatment",
    "clinicalDomain": "Oncology & Cancer",
    "version": "2021 Update (v1.3)",
    "publishedDate": "2009-02-25",
    "lastUpdated": "2021-08-11",
    "targetPopulation": "Patients with locally advanced or metastatic breast cancer",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Biopsy of metastatic site to re-evaluate ER/PR and HER2 receptor status, CDK4/6 inhibitors plus aromatase inhibitor for ER+ HER2- disease, trastuzumab/pertuzumab for HER2+ disease, and bisphosphonates for bone metastases.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Metastatic Site Biopsy for Biomarker Confirmation",
        "recommendation": "Obtain histological biopsy of suspected metastatic lesion to re-assess estrogen, progesterone, and HER2 receptor status.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "First-Line CDK4/6 Inhibitor Combination for ER+ HER2-",
        "recommendation": "Offer a CDK4/6 inhibitor (palbociclib, ribociclib, or abemaciclib) with an aromatase inhibitor as first-line therapy for ER+ HER2- metastatic cancer.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Dual HER2-Targeted Therapy for HER2+ Disease",
        "recommendation": "Offer docetaxel, trastuzumab, and pertuzumab as first-line therapy for HER2-positive metastatic breast cancer.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Bone-Targeted Antiresorptive Therapy",
        "recommendation": "Offer zoledronic acid (4 mg IV) or denosumab (120 mg SC) to reduce skeletal-related events and bone pain in metastatic bone disease.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Arrange dental examination and complete invasive dental procedures before initiating zoledronic acid or denosumab to prevent osteonecrosis of the jaw.",
      "Monitor left ventricular ejection fraction (LVEF) every 3 months during trastuzumab therapy."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg81",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG81",
    "relatedIcd11Code": "2C6Y & 2B50",
    "relatedSnomedId": "254837009"
  },
  {
    "guidelineId": "CG80",
    "title": "Early and Locally Advanced Breast Cancer: Diagnosis and Treatment (Foundational)",
    "clinicalDomain": "Oncology & Cancer",
    "version": "2018 Validated Foundation",
    "publishedDate": "2009-02-25",
    "lastUpdated": "2018-07-18",
    "targetPopulation": "Adults with newly diagnosed primary invasive breast cancer",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Triple diagnostic assessment (clinical exam, mammography/ultrasound, core needle biopsy), sentinel lymph node biopsy (SLNB), breast-conserving surgery or mastectomy, adjuvant radiotherapy, and 5-10 years endocrine therapy.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Triple Diagnostic Assessment",
        "recommendation": "Ensure rapid one-stop clinic evaluation with clinical examination, bilateral mammography/ultrasound, and core needle biopsy.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Sentinel Lymph Node Biopsy (SLNB)",
        "recommendation": "Perform SLNB using dual technique (radioisotope and blue dye) for staging clinically node-negative invasive breast cancer.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Adjuvant Whole Breast Radiotherapy",
        "recommendation": "Offer hypofractionated whole-breast radiotherapy (26 Gy in 5 fractions over 1 week) following breast-conserving surgery.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Adjuvant Endocrine Therapy for ER+ Disease",
        "recommendation": "Offer tamoxifen for 5-10 years in premenopausal women; an aromatase inhibitor (anastrozole/letrozole) in postmenopausal women.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not routinely perform full axillary lymph node dissection in patients with negative sentinel lymph nodes.",
      "Offer adjuvant bisphosphonates (zoledronic acid or oral ibandronate) to postmenopausal women with invasive breast cancer to reduce bone recurrence."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg80",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG80",
    "relatedIcd11Code": "2C61",
    "relatedSnomedId": "254837009"
  },
  {
    "guidelineId": "CG75",
    "title": "Metastatic Spinal Cord Compression in Adults: Risk Assessment and Early Diagnosis",
    "clinicalDomain": "Oncology & Cancer",
    "version": "2023 Validated Foundation",
    "publishedDate": "2008-11-26",
    "lastUpdated": "2023-09-27",
    "targetPopulation": "Patients with known or suspected cancer presenting with new spinal pain or neurological signs",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Early recognition of severe non-mechanical spinal pain, emergency contact with MSCC coordinator, flat bed rest if spine unstable, immediate high-dose dexamethasone, and whole-spine sagittal T1/T2 MRI within 24 hours.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Early Identification of Neurological Warning Signs",
        "recommendation": "Identify progressive spinal pain, band-like thoracic pain, gait unsteadiness, sensory loss in limbs, or bladder/bowel dysfunction.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Contact MSCC Coordinator Immediately",
        "recommendation": "Contact the designated 24/7 regional Metastatic Spinal Cord Compression coordinator immediately upon suspicion.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Urgent Whole-Spine MRI Scanning",
        "recommendation": "Perform whole-spine MRI within 24 hours of presentation (within 12 hours if neurological symptoms have commenced).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Spinal Surgery / Radiotherapy Referral",
        "recommendation": "Refer suitable patients with acute motor deficit for surgical decompression and stabilization within 24 hours.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not wait for motor weakness or sphincter disturbance to develop before organizing urgent MRI; pain alone with history of cancer warrants whole-spine MRI.",
      "Prescribe oral dexamethasone 16 mg daily immediately upon suspicion."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg75",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG75",
    "relatedIcd11Code": "2B50 & 8B43",
    "relatedSnomedId": "271813009"
  },
  {
    "guidelineId": "CG131",
    "title": "Colorectal Cancer: Diagnosis and Management (Foundational)",
    "clinicalDomain": "Oncology & Cancer",
    "version": "2020 Validated Foundation",
    "publishedDate": "2011-11-09",
    "lastUpdated": "2020-01-29",
    "targetPopulation": "Adults aged 18 and over with suspected or diagnosed colorectal adenocarcinoma",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Colonoscopy with biopsy, contrast-enhanced CT of chest/abdomen/pelvis, pelvic MRI for rectal cancer, total mesorectal excision (TME), adjuvant fluoropyrimidine chemotherapy, and mismatch repair (MMR) testing.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Colonoscopic Biopsy & Complete Examination",
        "recommendation": "Perform complete colonoscopy to cecum with biopsy of all suspected neoplastic lesions; CTC if colonoscopy incomplete.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "High-Resolution Pelvic MRI for Rectal Cancer",
        "recommendation": "Perform high-resolution pelvic MRI for rectal adenocarcinoma to evaluate circumferential resection margin (CRM) and extramural venous invasion.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Total Mesorectal Excision (TME) Surgical Resection",
        "recommendation": "Perform laparoscopic or open TME for rectal cancer or oncological segmental resection with high vascular ligation for colon cancer.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Molecular MMR / MSI & KRAS/BRAF Testing",
        "recommendation": "Test all colorectal cancers for mismatch repair (MMR) proteins (Lynch syndrome screening) and KRAS/NRAS/BRAF for targeted biological therapy.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Offer neoadjuvant chemoradiotherapy for rectal cancer if the circumferential resection margin is threatened (<1 mm on MRI).",
      "Patients with stage III (node-positive) colon cancer must be offered adjuvant oxaliplatin-based chemotherapy (FOLFOX/CAPOX)."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg131",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG131",
    "relatedIcd11Code": "2B90",
    "relatedSnomedId": "363406005"
  },
  {
    "guidelineId": "CG175",
    "title": "Prostate Cancer: Diagnosis and Management (Foundational)",
    "clinicalDomain": "Oncology & Cancer",
    "version": "2019 Validated Foundation",
    "publishedDate": "2014-01-08",
    "lastUpdated": "2019-05-09",
    "targetPopulation": "Men with suspected or diagnosed localized or metastatic prostate cancer",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Multiparametric MRI (mpMRI) prior to biopsy (Likert/PI-RADS scoring), targeted transperineal biopsy, active surveillance for low-risk disease, radical prostatectomy/radiotherapy, and androgen deprivation therapy (ADT).",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Pre-Biopsy Multiparametric MRI (mpMRI)",
        "recommendation": "Offer pre-biopsy multiparametric MRI to men with elevated PSA; report using Likert or PI-RADS scoring system.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Targeted Transperineal Prostate Biopsy",
        "recommendation": "Perform targeted prostate biopsy via transperineal approach for mpMRI Likert/PI-RADS scores 3-5 to minimize sepsis risk.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Active Surveillance for Low-Risk Disease",
        "recommendation": "Offer active surveillance (serial PSA, clinical review, repeat mpMRI) as preferred choice for low-risk localized prostate cancer.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Radical Treatment / Androgen Deprivation Therapy",
        "recommendation": "Offer robot-assisted laparoscopic prostatectomy or radical external beam radiotherapy with androgen deprivation therapy (ADT) for intermediate/high risk.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not routinely offer biopsy if pre-biopsy mpMRI is Likert/PI-RADS 1-2, unless patient expresses strong preference.",
      "Transperineal biopsy significantly reduces post-procedure sepsis and hospital admission compared to transrectal biopsy."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg175",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG175",
    "relatedIcd11Code": "2C82",
    "relatedSnomedId": "399068003"
  },
  {
    "guidelineId": "NG242",
    "title": "Ovarian Cancer: Diagnosis and Management (2024 Modernized)",
    "clinicalDomain": "Oncology & Cancer",
    "version": "2024 Update (v2.0)",
    "publishedDate": "2024-03-20",
    "lastUpdated": "2024-03-20",
    "targetPopulation": "Women presenting with suspected or diagnosed epithelial and non-epithelial ovarian cancer",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Comprehensive modern pathway incorporating primary cytoreductive surgery quality metrics, ultra-radical upper abdominal surgery by specialist teams, homologous recombination deficiency (HRD) testing, and niraparib/olaparib.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Primary Triage with CA125 & Fast-Track Pelvic Ultrasound",
        "recommendation": "Rapid fast-track diagnostic pathway combining serum CA125 and high-resolution transvaginal/abdominal ultrasound within 2 weeks.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "MDT Staging & Surgical Quality Benchmark",
        "recommendation": "Perform contrast CT of thorax/abdomen/pelvis; ensure surgery is conducted in high-volume specialist centers aiming for complete macroscopic resection.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Comprehensive Genomic HRD / BRCA Profiling",
        "recommendation": "Mandatory tumor testing for both BRCA1/2 and homologous recombination deficiency (HRD) to direct first-line PARP inhibitor maintenance.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Maintenance PARP Inhibitor & Anti-Angiogenic Regimens",
        "recommendation": "Prescribe maintenance olaparib plus bevacizumab, or niraparib monotherapy, for 2-3 years following response to first-line platinum chemotherapy.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Complete cytoreduction (zero macroscopic disease) is the single most powerful prognostic factor for overall survival.",
      "Offer referral to clinical genetics for all first-degree relatives of women with high-grade serous ovarian cancer."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng242",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG242",
    "relatedIcd11Code": "2C73",
    "relatedSnomedId": "363443007"
  },
  {
    "guidelineId": "CG116",
    "title": "Lung Cancer: Diagnosis and Management (Foundational)",
    "clinicalDomain": "Oncology & Cancer",
    "version": "2019 Validated Foundation",
    "publishedDate": "2011-04-20",
    "lastUpdated": "2019-03-28",
    "targetPopulation": "Adults with suspected or diagnosed non-small cell (NSCLC) or small cell lung cancer (SCLC)",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Urgent chest X-ray within 48h for unexplained hemoptysis/persistent cough, contrast CT thorax/upper abdomen, PET-CT staging, endobronchial ultrasound (EBUS-TBNA), minimally invasive lobectomy, and targeted immunotherapy.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Urgent Chest Radiograph & Contrast CT",
        "recommendation": "Arrange urgent chest X-ray for unexplained hemoptysis or cough >3 weeks; proceed directly to contrast CT thorax/upper abdomen if X-ray abnormal.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Metabolic & Pathological Staging (PET-CT & EBUS)",
        "recommendation": "Perform whole-body 18F-FDG PET-CT and endobronchial ultrasound-guided transbronchial needle aspiration (EBUS-TBNA) for mediastinal nodal staging.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Minimally Invasive Anatomical Resection (VATS)",
        "recommendation": "Offer video-assisted thoracoscopic (VATS) or robotic lobectomy with systematic nodal dissection for stage I-IIA NSCLC.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Molecular Biomarker-Directed Therapy",
        "recommendation": "Test all non-squamous NSCLC for EGFR, ALK, ROS1, BRAF mutations and PD-L1 expression to guide first-line tyrosine kinase inhibitors or pembrolizumab.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Ensure spirometry and cardiopulmonary exercise testing (CPET) are performed to assess post-resection lung function (predicted postoperative FEV1 > 30%).",
      "Offer stereotactic ablative radiotherapy (SABR) to patients with early-stage NSCLC who are medically unfit for surgical resection."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg116",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG116",
    "relatedIcd11Code": "2C25",
    "relatedSnomedId": "254637007"
  },
  {
    "guidelineId": "CG133",
    "title": "Self-Harm in Over 8s: Long-Term Management (Foundational)",
    "clinicalDomain": "Mental Health",
    "version": "2022 Validated Foundation",
    "publishedDate": "2011-11-23",
    "lastUpdated": "2022-09-07",
    "targetPopulation": "Children, young people, and adults who self-harm repeatedly",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Psychosocial assessment by trained mental health professionals, collaborative risk management, dialectical behavior therapy (DBT) or mentalization-based therapy (MBT) for recurrent self-harm, and avoiding coercive interventions.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Comprehensive Psychiatric & Psychosocial Assessment",
        "recommendation": "Conduct detailed assessment exploring psychological meaning of self-harm, underlying trauma, interpersonal relationships, and coexisting mental illness.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Co-Produced Written Safety Plan",
        "recommendation": "Develop a practical written safety plan documenting identifiable triggers, distraction techniques, supportive family contacts, and 24/7 crisis numbers.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Specialized Psychotherapy (DBT / MBT)",
        "recommendation": "Offer intensive psychological therapy specifically tailored to recurrent self-harm (dialectical behavior therapy or mentalization-based treatment).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Carer Support & Multidisciplinary Review",
        "recommendation": "Provide psychological support and guidance to family members and carers; conduct structured multi-agency care coordination reviews.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not prescribe psychotropic medications specifically to treat self-harm behavior; treat coexisting psychiatric disorders according to guidelines.",
      "Avoid punitive or disciplinary hospital discharge policies for patients who self-harm while in inpatient settings."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg133",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG133",
    "relatedIcd11Code": "MB23",
    "relatedSnomedId": "248062006"
  },
  {
    "guidelineId": "CG72",
    "title": "Attention Deficit Hyperactivity Disorder: Diagnosis and Management (Foundational)",
    "clinicalDomain": "Mental Health",
    "version": "2018 Validated Foundation",
    "publishedDate": "2008-09-24",
    "lastUpdated": "2018-03-14",
    "targetPopulation": "Children, young people, and adults with ADHD",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Specialist assessment using Conner's or Vanderbilt rating scales across home and school, parent-training/education programmes, methylphenidate first-line pharmacotherapy, and drug holidays/review.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Multi-Informant Assessment Across Settings",
        "recommendation": "Collect behavioral observation reports from parents and teachers/employers; confirm persistent pervasive symptoms causing functional impairment.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Parent-Training Programmes First-Line in Under 5s",
        "recommendation": "Offer parent-training and education programmes as the primary intervention in children under 5 years; do not offer medication.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Stimulant Titration with Methylphenidate",
        "recommendation": "Initiate oral methylphenidate titrated gradually; monitor growth (height/weight curves) and pulse/blood pressure every 6 months.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Annual Drug Review & Trial Discontinuation",
        "recommendation": "Conduct an annual comprehensive review to assess continued medication requirement; consider trial periods off medication during school holidays.",
        "evidenceGrade": "Moderate"
      }
    ],
    "decisionSupportRules": [
      "Plot child's height and weight on standard growth charts every 6 months; refer to pediatric endocrinology if growth velocity decelerates.",
      "Check baseline ECG prior to starting stimulant medication if personal or family history of cardiac disease or sudden death."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg72",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG72",
    "relatedIcd11Code": "6A05",
    "relatedSnomedId": "406506008"
  },
  {
    "guidelineId": "CG26",
    "title": "Post-Traumatic Stress Disorder: Management (Foundational)",
    "clinicalDomain": "Mental Health",
    "version": "2018 Validated Foundation",
    "publishedDate": "2005-03-23",
    "lastUpdated": "2018-12-05",
    "targetPopulation": "Children, young people, and adults presenting with PTSD after traumatic incidents",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Screening for re-experiencing, hyperarousal, and emotional numbing; trauma-focused cognitive behavioral therapy (TF-CBT); EMDR; and stepped community psychological care.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Trauma History & Symptom Profiling",
        "recommendation": "Identify intrusive memories, flashbacks, nightmares, hypervigilance, and emotional avoidance following life-threatening exposure.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Trauma-Focused Cognitive Behavioral Therapy (TF-CBT)",
        "recommendation": "Offer 8 to 12 sessions of structured individual TF-CBT focusing on trauma narrative and cognitive reappraisal.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Eye Movement Desensitisation and Reprocessing (EMDR)",
        "recommendation": "Offer EMDR delivered by an accredited therapist for adults presenting with chronic trauma-related psychological distress.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Pharmacological Treatment for Severe Comorbid Distress",
        "recommendation": "Consider paroxetine, mirtazapine, or phenelzine for adults with severe comorbid depression or who decline psychological therapy.",
        "evidenceGrade": "Moderate"
      }
    ],
    "decisionSupportRules": [
      "Psychological debriefing must NOT be routinely offered following traumatic events as it may worsen trauma outcomes.",
      "Prescribing hypnotics/benzodiazepines for insomnia in PTSD should be strictly limited to short courses (<2 weeks)."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg26",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG26",
    "relatedIcd11Code": "6B40",
    "relatedSnomedId": "47505003"
  },
  {
    "guidelineId": "CG91",
    "title": "Depression in Adults: Recognition and Management (Foundational)",
    "clinicalDomain": "Mental Health",
    "version": "2022 Validated Foundation",
    "publishedDate": "2009-10-28",
    "lastUpdated": "2022-06-29",
    "targetPopulation": "Adults aged 18 and over presenting with unipolar major depressive disorder",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Stepped care model, active monitoring for mild depression, generic SSRI (citalopram, fluoxetine, sertraline) first-line for moderate-to-severe depression, combination CBT, and electroconvulsive therapy (ECT) for life-threatening depression.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Stepped Care Assessment & Routine Outcome Monitoring",
        "recommendation": "Screen with Whooley questions; measure depression severity with PHQ-9 to determine stepped care allocation.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Step 2: Low-Intensity Psychological Treatments",
        "recommendation": "Offer guided self-help, behavioral activation, or physical exercise for mild depression before considering medication.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Step 3: SSRI Pharmacotherapy & High-Intensity CBT",
        "recommendation": "Prescribe generic SSRI (sertraline or citalopram); combine with high-intensity CBT for moderate-to-severe depression.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Maintenance Pharmacotherapy & Relapse Prevention",
        "recommendation": "Continue antidepressant medication for at least 6 months after full remission (at least 2 years for recurrent depression).",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Always advise patients about antidepressant discontinuation symptoms and taper doses gradually over at least 4 weeks when stopping.",
      "Review young adults (aged 18-25) within 1 week of starting an SSRI due to elevated risk of suicidal ideation and agitation."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg91",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG91",
    "relatedIcd11Code": "6A70",
    "relatedSnomedId": "370143000"
  },
  {
    "guidelineId": "CG38",
    "title": "Bipolar Disorder: The Management of Bipolar Disorder in Adults and Children (Foundational)",
    "clinicalDomain": "Mental Health",
    "version": "2014 Validated Foundation",
    "publishedDate": "2006-07-26",
    "lastUpdated": "2014-09-24",
    "targetPopulation": "Children, young people, and adults with bipolar affective disorder",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Emergency management of acute mania, avoiding antidepressant monotherapy that induces rapid cycling/mania, long-term lithium prophylaxis, and physical health monitoring.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Acute Mania Pharmacotherapy",
        "recommendation": "Prescribe oral antipsychotic (olanzapine, quetiapine, or risperidone) or sodium valproate for acute mania; taper any antidepressant.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Bipolar Depression Specialist Care",
        "recommendation": "Offer quetiapine, olanzapine combined with fluoxetine, or lurasidone; do not prescribe antidepressant monotherapy.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Long-Term Prophylaxis with Lithium",
        "recommendation": "Offer oral lithium carbonate as first-line maintenance treatment; target therapeutic serum level 0.6 to 0.8 mmol/L.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Structured Psychological Interventions & Relapse Drill",
        "recommendation": "Deliver individual or group psychoeducation focusing on early warning sign identification and sleep regularity.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Valproate must NOT be used in women of childbearing potential unless there are exceptional circumstances and an authorized Pregnancy Prevention Programme is in place.",
      "Check renal function, serum electrolytes, and thyroid function tests every 6 months during long-term lithium therapy."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg38",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG38",
    "relatedIcd11Code": "6A60",
    "relatedSnomedId": "13746004"
  },
  {
    "guidelineId": "CG17",
    "title": "Dyspepsia: Managing Dyspepsia in Adults in Primary Care (Foundational)",
    "clinicalDomain": "Gastroenterology",
    "version": "2014 Validated Foundation",
    "publishedDate": "2004-08-25",
    "lastUpdated": "2014-09-03",
    "targetPopulation": "Adults aged 18 and over presenting with dyspeptic symptoms in primary care",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Review of medication for ulcerogenic drugs (NSAIDs, aspirin), Helicobacter pylori \"test and treat\" strategy using 13C-urea breath test or stool antigen test, 4-week full-dose PPI trial, and lifestyle changes.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Medication Review & Alarm Sign Check",
        "recommendation": "Review NSAID and aspirin use; exclude alarm signs (dysphagia, persistent vomiting, weight loss, abdominal mass, anemia).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Helicobacter Pylori \"Test and Treat\"",
        "recommendation": "Offer H. pylori stool antigen test or 13C-urea breath test in patients without alarm signs; prescribe 7-day eradication triple therapy if positive.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Empirical Full-Dose Proton Pump Inhibitor (PPI)",
        "recommendation": "Offer 4-week course of full-dose oral PPI (e.g. omeprazole 20 mg or lansoprazole 30 mg daily) if H. pylori negative.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Step-Down & On-Demand Maintenance Therapy",
        "recommendation": "Step down to lowest effective dose or on-demand PPI therapy once symptoms resolve; avoid continuous lifelong unreviewed PPIs.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Patients must stop PPIs for at least 2 weeks and antibiotics for 4 weeks before H. pylori breath testing or stool antigen testing to avoid false negatives.",
      "Do not routinely use serology (antibody) testing to diagnose active H. pylori infection."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg17",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG17",
    "relatedIcd11Code": "DA22",
    "relatedSnomedId": "16331000"
  },
  {
    "guidelineId": "CG118",
    "title": "Colonoscopic Surveillance for Prevention of Colorectal Cancer in Adults with IBD",
    "clinicalDomain": "Gastroenterology",
    "version": "2021 Update (v1.3)",
    "publishedDate": "2011-03-23",
    "lastUpdated": "2021-04-14",
    "targetPopulation": "Adults with ulcerative colitis, Crohn's colitis, or primary sclerosing cholangitis",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Screening colonoscopy at 8-10 years from symptom onset, chromoendoscopy with targeted biopsies, risk stratification (lower, intermediate, higher risk), and annual surveillance for concurrent primary sclerosing cholangitis (PSC).",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Initial Screening Colonoscopy Timing",
        "recommendation": "Offer screening colonoscopy at 8 to 10 years after symptom onset to determine extent and phenotype of colonic disease.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "High-Definition Chromoendoscopy",
        "recommendation": "Perform high-definition colonoscopy using pan-colonic dye spraying (chromoendoscopy with indigo carmine) and targeted biopsy of abnormal mucosa.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Risk Stratification for Surveillance Intervals",
        "recommendation": "Stratify into lower risk (5-yearly), intermediate risk (3-yearly), or higher risk (1-yearly) based on extent, active inflammation, and family history.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Annual Surveillance for Concurrent PSC",
        "recommendation": "Perform annual colonoscopy from time of diagnosis in all IBD patients with concurrent primary sclerosing cholangitis (PSC).",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Chromoendoscopy with targeted biopsy is superior to random non-targeted 4-quadrant biopsies for detecting colonic dysplasia.",
      "Refer confirmed flat high-grade dysplasia or uncurable visible dysplasia to colorectal surgery for pan-proctocolectomy."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg118",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG118",
    "relatedIcd11Code": "DD70 & 2B90",
    "relatedSnomedId": "422843007"
  },
  {
    "guidelineId": "CG152",
    "title": "Crohn's Disease: Management in Adults, Children and Young People (Foundational)",
    "clinicalDomain": "Gastroenterology",
    "version": "2019 Validated Foundation",
    "publishedDate": "2012-10-10",
    "lastUpdated": "2019-05-03",
    "targetPopulation": "Patients of all ages with active or quiescent Crohn's disease",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Monotherapy oral prednisolone or budesonide for acute ileocecal flares, exclusive enteral nutrition (EEN) in pediatric Crohn's, maintenance with azathioprine/mercaptopurine, and infliximab/adalimumab escalation.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Induction of Remission with Corticosteroids",
        "recommendation": "Offer oral prednisolone (or oral budesonide for ileocecal disease) to induce remission in acute mild-to-moderate flares.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Exclusive Enteral Nutrition (EEN) in Children",
        "recommendation": "Offer exclusive enteral nutrition (EEN) for 6 to 8 weeks as first-line induction therapy in children and young people with active Crohn's.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Maintenance of Remission with Thiopurines",
        "recommendation": "Offer oral azathioprine or mercaptopurine (or methotrexate) to maintain remission in patients with frequent relapses.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Anti-TNF Biologic Escalation (Infliximab / Adalimumab)",
        "recommendation": "Escalate to infliximab or adalimumab for severe active refractory Crohn's disease unresponsive to conventional immunosuppression.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Check thiopurine methyltransferase (TPMT) activity before commencing azathioprine or mercaptopurine to prevent severe fatal bone marrow suppression.",
      "Do not use corticosteroids to maintain remission in Crohn's disease due to osteoporosis and systemic toxicity."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg152",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG152",
    "relatedIcd11Code": "DD70",
    "relatedSnomedId": "34000006"
  },
  {
    "guidelineId": "CG166",
    "title": "Ulcerative Colitis: Management in Adults, Children and Young People (Foundational)",
    "clinicalDomain": "Gastroenterology",
    "version": "2019 Validated Foundation",
    "publishedDate": "2013-06-26",
    "lastUpdated": "2019-05-03",
    "targetPopulation": "Patients of all ages with active or quiescent ulcerative colitis",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Topical aminosalicylates (mesalazine suppositories/enemas) for proctitis, combined oral and topical 5-ASA for extensive colitis, IV hydrocortisone for acute severe colitis (Truelove and Witts criteria), and rescue infliximab/ciclosporin.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Topical 5-ASA First-Line for Proctosigmoiditis",
        "recommendation": "Offer topical mesalazine suppository or enema as first-line therapy to induce and maintain remission in ulcerative proctitis.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Oral plus Topical 5-ASA for Extensive Colitis",
        "recommendation": "Combine high-dose oral mesalazine (≥2g daily) with topical mesalazine for extensive mild-to-moderate colitis.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Emergency Protocol for Acute Severe Ulcerative Colitis",
        "recommendation": "Admit immediately for IV hydrocortisone 100 mg qds if Truelove and Witts criteria met (≥6 bloody stools/day plus systemic toxicity).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Rescue Therapy with Infliximab or Ciclosporin",
        "recommendation": "Assess response on Day 3 using Oxford criteria (stool frequency >8 or CRP >45); initiate IV infliximab or ciclosporin; evaluate urgent colectomy.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Monitor renal function (serum creatinine) annually in all patients receiving long-term oral 5-aminosalicylates.",
      "Do not delay surgical colectomy review beyond Day 5 of refractory acute severe ulcerative colitis to prevent toxic megacolon and perforation."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg166",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG166",
    "relatedIcd11Code": "DD71",
    "relatedSnomedId": "64766004"
  },
  {
    "guidelineId": "CG149",
    "title": "Neonatal Infection (Early Onset): Antibiotics for Prevention and Treatment (Foundational)",
    "clinicalDomain": "Infections & Antimicrobial",
    "version": "2021 Validated Foundation",
    "publishedDate": "2012-08-22",
    "lastUpdated": "2021-04-20",
    "targetPopulation": "Newborn babies in the first 72 hours of life at risk of early-onset bacterial infection",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Maternal intrapartum antibiotic prophylaxis (IV benzylpenicillin), clinical indicator assessment, blood culture before antibiotics, empiric IV penicillin + gentamicin, and 36-hour discharge criteria.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Intrapartum Maternal Prophylaxis for GBS",
        "recommendation": "Offer intravenous benzylpenicillin to women in labour with maternal GBS colonization in current pregnancy or previous baby with invasive GBS.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Clinical Red Flags and Risk Factor Screening",
        "recommendation": "Evaluate newborn for respiratory distress, apnea, seizures, hypothermia, or maternal chorioamnionitis; perform urgent blood culture.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Empiric IV Benzylpenicillin plus Gentamicin",
        "recommendation": "Administer intravenous benzylpenicillin (50 mg/kg 12-hourly) plus gentamicin (5 mg/kg 36-hourly) within 1 hour of decision to treat.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Safe Antibiotic Cessation at 36 Hours",
        "recommendation": "Discontinue antibiotics at 36 hours if blood culture shows no growth, serial CRP values are < 10 mg/L, and baby is clinically healthy.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not perform surface swabs or gastric aspirate cultures for neonatal sepsis as they correlate poorly with invasive infection.",
      "Always calculate gentamicin dosage based on exact birthweight and postmenstrual age."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg149",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG149",
    "relatedIcd11Code": "KA60",
    "relatedSnomedId": "206380004"
  },
  {
    "guidelineId": "CG102",
    "title": "Meningitis (Bacterial) and Meningococcal Septicaemia in Under 16s (Foundational)",
    "clinicalDomain": "Infections & Antimicrobial",
    "version": "2024 Validated Foundation",
    "publishedDate": "2010-06-23",
    "lastUpdated": "2024-03-06",
    "targetPopulation": "Babies, children, and young people under 16 with suspected meningitis or septicaemia",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Recognition of non-blanching petechial/purpuric rash (glass test), rapid fluid boluses (20 mL/kg balanced crystalloid) for septic shock, parenteral ceftriaxone, and post-discharge audiology screening.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Triage for Shock and Non-Blanching Rash",
        "recommendation": "Examine skin completely; apply pressure with tumbler glass; identify purpura, cold peripheries, prolonged capillary refill (>2s), or tachypnea.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Immediate Fluid Resuscitation for Septic Shock",
        "recommendation": "Administer 20 mL/kg balanced crystalloid bolus over 5-10 minutes if shock is present; call PICU/retrieval team if shock persists after 40-60 mL/kg.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Intravenous Ceftriaxone & Dexamethasone",
        "recommendation": "Administer IV ceftriaxone 80 mg/kg once daily immediately; give IV dexamethasone 0.15 mg/kg for children >3 months if CSF purulent.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Formal Audiological Assessment at Discharge",
        "recommendation": "Arrange formal pure-tone audiometry within 4 weeks of discharge to detect sensorineural hearing loss following bacterial meningitis.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do NOT perform lumbar puncture in children with cardiovascular instability, worsening shock, or non-blanching purpuric rash.",
      "Cochlear implantation assessment must be accelerated urgently if post-meningitic hearing loss and labyrinthitis ossificans occur."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg102",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG102",
    "relatedIcd11Code": "1D01",
    "relatedSnomedId": "128477000"
  },
  {
    "guidelineId": "CG127",
    "title": "Hypertension in Pregnancy: Diagnosis and Management (Foundational)",
    "clinicalDomain": "Cardiovascular",
    "version": "2019 Validated Foundation",
    "publishedDate": "2010-08-25",
    "lastUpdated": "2019-06-25",
    "targetPopulation": "Pregnant women with chronic hypertension, gestational hypertension, or pre-eclampsia",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Aspirin 75-150 mg prophylaxis from 12 weeks for high-risk women, labetalol first-line antihypertensive (target BP ≤ 135/85 mmHg), sFlt-1/PlGF placental biomarker testing, and IV magnesium sulfate for eclampsia.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Pre-Eclampsia Prophylaxis with Aspirin",
        "recommendation": "Prescribe aspirin 75-150 mg daily from 12 weeks until birth for women with 1 high risk or ≥2 moderate risk factors for pre-eclampsia.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "First-Line Antihypertensive Therapy (Labetalol)",
        "recommendation": "Offer oral labetalol as first-line therapy (nifedipine or methyldopa as alternatives); target blood pressure ≤ 135/85 mmHg.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Placental Growth Factor (PlGF) Testing",
        "recommendation": "Offer PlGF-based biomarker testing between 20 and 35 weeks to rule out pre-eclampsia in women with gestational hypertension.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Intravenous Magnesium Sulfate for Severe Pre-Eclampsia",
        "recommendation": "Administer IV magnesium sulfate (4g loading over 10 min, then 1g/h infusion) for severe pre-eclampsia or eclamptic seizures.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do NOT prescribe ACE inhibitors, ARBs, or thiazide diuretics in pregnancy due to severe congenital malformations and fetal renal failure.",
      "Severe hypertension in pregnancy (systolic BP ≥ 160 mmHg) requires emergency medical treatment within 1 hour."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg127",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG127",
    "relatedIcd11Code": "JA20 & JA24",
    "relatedSnomedId": "38341003"
  },
  {
    "guidelineId": "NG24",
    "title": "Children's Attachment: Attachment in Children and Young People",
    "clinicalDomain": "Mental Health",
    "version": "2021 Validated",
    "publishedDate": "2015-11-04",
    "lastUpdated": "2021-04-14",
    "targetPopulation": "Children and young people who are looked after, adopted from care, or at high risk of attachment difficulties",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Attachment-informed clinical assessment, video feedback interventions for parents/foster carers, trauma-informed schooling accommodations, and intensive parenting support.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Attachment Screening & Relationship History",
        "recommendation": "Assess relationship patterns, history of maltreatment, separation, multiple placements, and emotional regulation across settings.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Video Feedback Interventions for Carers",
        "recommendation": "Offer video feedback intervention programmes (e.g. VIPP-SD) to parents and foster carers to enhance parental sensitivity and attunement.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Attachment-Focused Family Psychotherapy",
        "recommendation": "Offer Dyadic Developmental Psychotherapy (DDP) or family therapy to help children process trauma and form secure attachment bonds.",
        "evidenceGrade": "Moderate"
      },
      {
        "stepNumber": 4,
        "stage": "School & Educational Environmental Accommodations",
        "recommendation": "Provide training for designated teachers; establish predictable classroom routines and safe attachment figures in school.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do NOT use coercive holding therapies or rebirthing techniques; they are unsafe and psychologically harmful.",
      "Ensure stability of placement is prioritized when planning clinical and social work interventions."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng24",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG24",
    "relatedIcd11Code": "6B43",
    "relatedSnomedId": "422843007"
  },
  {
    "guidelineId": "NG63",
    "title": "Antimicrobial Stewardship: Changing Risk-Related Behaviour in the General Population",
    "clinicalDomain": "Infections & Antimicrobial",
    "version": "2020 Validated",
    "publishedDate": "2017-01-25",
    "lastUpdated": "2020-04-22",
    "targetPopulation": "General population, community pharmacists, and primary care prescribers",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "National public health campaigns regarding self-limiting viral infections, delayed antibiotic prescribing strategies, community pharmacy self-care advice, and antimicrobial resistance education.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Public Education on Self-Limiting Illnesses",
        "recommendation": "Provide clear public education that colds, flu, sore throats, and most earaches are viral and do not benefit from antibiotics.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Community Pharmacy First Consultations",
        "recommendation": "Promote community pharmacists as first contact for self-care, fever management, and symptom relief without a prescription.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Delayed Antibiotic Prescribing Protocols",
        "recommendation": "Issue delayed (back-up) antibiotic prescriptions for upper respiratory infections; advise filling only if symptoms worsen after specified days.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Safe Disposal of Unused Antibiotics",
        "recommendation": "Advise patients never to save leftover antibiotics for future use or share with others; return unused medicines to pharmacies.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Delayed prescriptions significantly reduce antibiotic consumption without increasing complications or reducing patient satisfaction.",
      "Always share expected duration of symptoms: acute cough takes up to 3 weeks, sore throat 1 week, otitis media 4 days."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng63",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG63",
    "relatedIcd11Code": "QA00",
    "relatedSnomedId": "422843007"
  },
  {
    "guidelineId": "NG79",
    "title": "Sinusitis (Acute): Diagnosis and Clinical Management",
    "clinicalDomain": "Infections & Antimicrobial",
    "version": "2020 Validated Foundation",
    "publishedDate": "2017-10-11",
    "lastUpdated": "2020-04-22",
    "targetPopulation": "Adults and children presenting with acute rhinosinusitis in primary care",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Differentiation of acute rhinosinusitis from simple viral URTI, assessing nasal blockage/discharge, facial pain, loss of smell, and conservative stepped management.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Diagnostic Criteria for Acute Sinusitis",
        "recommendation": "Diagnose acute sinusitis in adults with nasal obstruction or discolored discharge PLUS facial pain/pressure or reduction in smell.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Duration-Based Clinical Categorization",
        "recommendation": "Classify as viral rhinosinusitis if duration < 10 days; post-viral if symptoms persist or double-sicken after 5 days.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "High-Dose Intranasal Corticosteroids",
        "recommendation": "Prescribe high-dose topical nasal corticosteroids (e.g. mometasone 200 mcg bd) for adults with symptoms persisting > 10 days.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Emergency Red Flag Triage for Orbital Complications",
        "recommendation": "Refer immediately for hospital admission if orbital cellulitis signs (proptosis, ophthalmoplegia, reduced vision) are present.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do not perform plain sinus radiographs as they have no diagnostic utility for acute sinusitis.",
      "Antibiotics are indicated only if symptoms fail to improve after 10 days or in systemically unwell patients."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng79",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG79",
    "relatedIcd11Code": "CA01",
    "relatedSnomedId": "36971009"
  },
  {
    "guidelineId": "NG119",
    "title": "Brain Tumours in Children and Young People: Management",
    "clinicalDomain": "Neurology & CNS",
    "version": "2021 Update (v1.2)",
    "publishedDate": "2018-07-04",
    "lastUpdated": "2021-01-20",
    "targetPopulation": "Children and young people under 18 with primary brain or central nervous system tumors",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Early symptom recognition (morning vomiting, persistent headache, abnormal gait, squint, macrocephaly), fast-track contrast brain MRI within 2 weeks, pediatric neuro-oncology MDT care, and proton beam therapy.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Early Pediatric Symptom Recognition (HeadSmart)",
        "recommendation": "Assess persistent morning headache with vomiting, new squint, ataxia, regression in motor milestones, or rapid head circumference increase.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Direct Access MRI Brain Imaging",
        "recommendation": "Perform whole-brain and spine MRI with contrast within 2 weeks for persistent unexplained neurological symptoms in children.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Pediatric Neurosurgical Resection & Molecular Profiling",
        "recommendation": "Perform maximal safe surgical resection in specialist pediatric center; analyze molecular biomarkers (e.g. BRAF alterations in astrocytomas, WNT/SHH in medulloblastoma).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Proton Beam Radiotherapy Referral",
        "recommendation": "Refer eligible pediatric brain tumors (medulloblastoma, ependymoma, craniopharyngioma) for proton beam therapy to reduce late radiation toxicities.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Always image the ENTIRE spinal cord when evaluating medulloblastoma or ependymoma due to frequent CSF drop metastases.",
      "Avoid high-dose radiotherapy in children under 3 years where possible to prevent devastating cognitive deficits."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng119",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG119",
    "relatedIcd11Code": "2A00",
    "relatedSnomedId": "126949005"
  },
  {
    "guidelineId": "CG137",
    "title": "Epilepsies: Diagnosis and Management (Foundational)",
    "clinicalDomain": "Neurology & CNS",
    "version": "2022 Validated Foundation",
    "publishedDate": "2012-01-11",
    "lastUpdated": "2022-04-27",
    "targetPopulation": "Children, young people, and adults with recurrent unprovoked seizures",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Seizure classification (focal vs generalized), standard 12-lead ECG and EEG, structural MRI brain, sodium valproate restrictions, lamotrigine/levetiracetam first-line, and status epilepticus protocols.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Specialist Epilepsy Clinic Referral within 2 Weeks",
        "recommendation": "Refer all individuals with a first unprovoked seizure to an epilepsy specialist clinic within 14 days.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Diagnostic Neuroimaging & EEG",
        "recommendation": "Perform 3T MRI brain (epilepsy protocol) and standard EEG; perform 12-lead ECG in all patients to exclude cardiogenic syncope.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "First-Line Antiseptic Pharmacotherapy",
        "recommendation": "Offer lamotrigine or levetiracetam as first-line monotherapy for focal seizures; sodium valproate (with PPP for females) or levetiracetam for generalized seizures.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Emergency Status Epilepticus Protocol",
        "recommendation": "Administer buccal midazolam 10 mg or rectal diazepam for seizures lasting >5 minutes; escalate to IV levetiracetam/phenytoin in hospital.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Valproate is strictly contraindicated in women of childbearing potential unless the Pregnancy Prevention Programme is fully compliant.",
      "Do not offer routine antiepileptic drug treatment after a single uncomplicated unprovoked seizure unless high risk of recurrence."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg137",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG137",
    "relatedIcd11Code": "8A60",
    "relatedSnomedId": "84757009"
  },
  {
    "guidelineId": "CG138",
    "title": "Patient Experience in Adult NHS Services: Improving Clinical Experience",
    "clinicalDomain": "Mental Health",
    "version": "2021 Update (v1.3)",
    "publishedDate": "2012-02-22",
    "lastUpdated": "2021-06-16",
    "targetPopulation": "Adults receiving NHS healthcare services across all specialties",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Principles of compassionate, dignified patient-centred care, communication and information provision, shared clinical decision making, continuity of care, and complaints resolution.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Knowing the Patient as an Individual",
        "recommendation": "Treat patients with dignity, empathy, and respect; explore personal values, beliefs, culture, and individual priorities in care.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Clear & Tailored Clinical Communication",
        "recommendation": "Communicate information clearly without jargon; check understanding; provide written summaries and accessible digital formats.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Active Shared Decision Making",
        "recommendation": "Support active participation in decisions regarding investigations and treatments; discuss pros, cons, and alternatives openly.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Continuity & Named Key Worker Coordination",
        "recommendation": "Ensure named healthcare professionals coordinate complex multidisciplinary care across hospital and community transitions.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Document individual patient communication preferences (e.g. interpreter needs, large font, sensory impairment) prominently in health records.",
      "Ensure family members and designated carers are involved in discussions when authorized by the patient."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg138",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG138",
    "relatedIcd11Code": "QA00",
    "relatedSnomedId": "408443003"
  },
  {
    "guidelineId": "CG96",
    "title": "Neuropathic Pain in Adults: Pharmacological Management (Foundational)",
    "clinicalDomain": "Neurology & CNS",
    "version": "2020 Validated Foundation",
    "publishedDate": "2010-03-24",
    "lastUpdated": "2020-09-22",
    "targetPopulation": "Adults with chronic non-malignant neuropathic pain",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Systematic monotherapy titration with amitriptyline, duloxetine, gabapentin, or pregabalin; capsaicin cream/patches; monitoring pain reduction (target ≥30%) and side effects.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Diagnostic Confirmation of Neuropathic Mechanism",
        "recommendation": "Identify neuropathic pain features: burning, electric shocks, allodynia, hyperalgesia, numbness in a neuroanatomical distribution.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "First-Line Oral Monotherapy Titration",
        "recommendation": "Offer choice of amitriptyline, duloxetine, gabapentin, or pregabalin; titrate slowly over several weeks to maximum tolerated dose.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Sequential Switching Strategy",
        "recommendation": "Switch to an alternative first-line drug class if initial treatment fails to achieve ≥30% pain reduction or causes adverse effects.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Topical Analgesia & Specialist Referral",
        "recommendation": "Offer topical capsaicin cream (0.075%) for localized neuropathic pain; refer to specialist chronic pain clinic for refractory cases.",
        "evidenceGrade": "Moderate"
      }
    ],
    "decisionSupportRules": [
      "Do not routinely combine two oral neuropathic pain medications unless monotherapy trials have failed.",
      "Do not use opioids (e.g. oxycodone, fentanyl) for long-term neuropathic pain management in primary care."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg96",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG96",
    "relatedIcd11Code": "MG30.5",
    "relatedSnomedId": "386033004"
  },
  {
    "guidelineId": "CG84",
    "title": "Diarrhoea and Vomiting in Children Under 5: Diagnosis and Management",
    "clinicalDomain": "Gastroenterology",
    "version": "2020 Update (v1.3)",
    "publishedDate": "2009-04-22",
    "lastUpdated": "2020-08-19",
    "targetPopulation": "Children under 5 years presenting with acute gastroenteritis",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Clinical assessment of dehydration (no dehydration, clinical dehydration, clinical shock), oral rehydration therapy (ORT) with low-osmolarity ORS, rapid re-introduction of food, and IV fluids for shock.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Clinical Dehydration Severity Assessment",
        "recommendation": "Assess sunken eyes, dry mucous membranes, skin turgor, tachypnea, tachycardia, and altered mental state; categorize into clinical dehydration vs shock.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Oral Rehydration Therapy (ORT) First-Line",
        "recommendation": "Offer 50 mL/kg low-osmolarity oral rehydration solution (ORS) over 4 hours in small frequent amounts (e.g. 5 mL every 5 min) for clinical dehydration.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Rapid Resumption of Full Feeding",
        "recommendation": "Resume full normal fluid intake including breast milk and normal solid food immediately after completing 4-hour rehydration.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Intravenous Fluid Therapy for Dehydration Shock",
        "recommendation": "Give rapid 20 mL/kg IV bolus of 0.9% sodium chloride for clinical shock; re-evaluate ABCDE response immediately.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Do NOT prescribe antidiarrheal medicines (e.g. loperamide) or anti-emetics to children under 5 with acute gastroenteritis.",
      "Do not routinely perform stool microscopy and culture unless blood/mucus in stool or overseas travel."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg84",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG84",
    "relatedIcd11Code": "1A00",
    "relatedSnomedId": "197456007"
  },
  {
    "guidelineId": "CG142",
    "title": "Autism Spectrum Disorder in Under 19s: Support and Management",
    "clinicalDomain": "Mental Health",
    "version": "2021 Update (v1.3)",
    "publishedDate": "2013-08-28",
    "lastUpdated": "2021-06-24",
    "targetPopulation": "Children and young people under 19 with confirmed autism spectrum disorder",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Personalized autism support plans, psychosocial interventions for communication and social interaction, structured environmental modifications, parent-mediated programmes, and crisis behavior plans.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Individualized Autism Support Plan",
        "recommendation": "Develop personalized profile outlining communication style, sensory sensitivities, predictable routines, and specific strengths.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Psychosocial Interventions for Social Interaction",
        "recommendation": "Offer play-based and parent-mediated interventions (e.g. PACT) to enhance joint attention, communication, and reciprocal engagement.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Managing Sensory Processing Difficulties",
        "recommendation": "Modify physical environments (acoustic damping, dimmable lighting, quiet retreats) to reduce sensory overload in schools and healthcare.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Antipsychotics strictly for Severe Challenging Behavior",
        "recommendation": "Consider risperidone or aripiprazole only when severe challenging behavior persists despite psychosocial interventions and causes imminent danger.",
        "evidenceGrade": "Moderate"
      }
    ],
    "decisionSupportRules": [
      "Do NOT use secretin, hyperbaric oxygen, chelation therapy, or exclusion diets for autism; they are ineffective and potentially harmful.",
      "Review antipsychotic medication within 4 weeks of initiation and discontinue if no significant improvement is documented."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/cg142",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+CG142",
    "relatedIcd11Code": "6A02",
    "relatedSnomedId": "408856003"
  },
  {
    "guidelineId": "NG183",
    "title": "Behaviour Change: Digital and Mobile Interventions",
    "clinicalDomain": "Diabetes & Metabolism",
    "version": "2020 Validated",
    "publishedDate": "2020-10-15",
    "lastUpdated": "2020-10-15",
    "targetPopulation": "Adults using digital health technologies for lifestyle modification",
    "jurisdiction": "United Kingdom (NHS / National Reference)",
    "jurisdictionNotice": "NICE guidance is not automatically the applicable standard for every country. Regional clinical frameworks (such as ICMR in India) apply for national statutory care.",
    "pathwaySummary": "Evidence-based digital behavior change interventions (DBCIs) for smoking cessation, physical activity, healthy eating, and alcohol reduction; user-centered design; and data privacy compliance.",
    "pathwaySteps": [
      {
        "stepNumber": 1,
        "stage": "Clinical Suitability & Digital Literacy Assessment",
        "recommendation": "Assess patient digital access, health literacy, and willingness to use mobile apps or wearable tracking devices for self-monitoring.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 2,
        "stage": "Selection of Accredited Digital Interventions",
        "recommendation": "Recommend apps and digital programmes evaluated and accredited by NHS DTAC (Digital Technology Assessment Criteria).",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 3,
        "stage": "Self-Monitoring & Real-Time Biofeedback",
        "recommendation": "Encourage active logging of dietary intake, step counts, or nicotine cravings with personalized automated reminders.",
        "evidenceGrade": "High"
      },
      {
        "stepNumber": 4,
        "stage": "Integration with Clinician Consultations",
        "recommendation": "Review digital tracking data during clinical follow-up consultations to provide positive reinforcement and tailor goals.",
        "evidenceGrade": "High"
      }
    ],
    "decisionSupportRules": [
      "Digital health apps must comply with UK GDPR and data protection regulations for sensitive health data.",
      "Digital interventions should complement, not completely replace, human healthcare professional interaction for high-risk patients."
    ],
    "officialUrl": "https://www.nice.org.uk/guidance/ng183",
    "ncbiUrl": "https://www.ncbi.nlm.nih.gov/books/?term=NICE+guideline+NG183",
    "relatedIcd11Code": "QA00",
    "relatedSnomedId": "422843007"
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
