export interface ClinicalMedicationEntry {
  code: string;
  display: string;
  system: string;
  category: string;
  description: string;
  quantity?: string;
  measurementUnit?: string;
  doseAmount?: string;
  dosageForm?: string;
  route?: string;
  rxNormCui?: string;
}

export interface StandardTerminologyEntry {
  code: string;
  display: string;
  system: string;
  category: string;
  description: string;
  quantity?: string;
  measurementUnit?: string;
  doseAmount?: string;
  dosageForm?: string;
  route?: string;
  rxNormCui?: string;
}

export const CLINICAL_ATC_DATA: StandardTerminologyEntry[] = [
  {
    "code": "A10BA02",
    "display": "Metformin Hydrochloride 500 mg Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Alimentary tract and metabolism (Blood glucose lowering drugs)",
    "description": "First-line biguanide oral antihyperglycemic agent that suppresses hepatic gluconeogenesis and increases peripheral insulin sensitivity. Standard maintenance: 500 mg twice daily with meals.",
    "rxNormCui": "316256",
    "quantity": "500 mg",
    "measurementUnit": "mg",
    "doseAmount": "500",
    "dosageForm": "Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "A10BA02",
    "display": "Metformin Hydrochloride 850 mg Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Alimentary tract and metabolism (Blood glucose lowering drugs)",
    "description": "Higher-strength biguanide formulation for optimized glycemic control in Type 2 Diabetes Mellitus without weight gain. Standard dosage: 850 mg twice daily with meals.",
    "rxNormCui": "861010",
    "quantity": "850 mg",
    "measurementUnit": "mg",
    "doseAmount": "850",
    "dosageForm": "Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "A10BA02",
    "display": "Metformin Hydrochloride 1000 mg Extended-Release Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Alimentary tract and metabolism (Blood glucose lowering drugs)",
    "description": "Once-daily extended-release formulation designed to minimize gastrointestinal adverse effects while providing 24-hour glycemic coverage in Type 2 diabetes.",
    "rxNormCui": "861014",
    "quantity": "1000 mg",
    "measurementUnit": "mg",
    "doseAmount": "1000",
    "dosageForm": "Extended-Release Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "A02BC01",
    "display": "Omeprazole 20 mg Delayed-Release Oral Capsule",
    "system": "ATC / RxNorm",
    "category": "Alimentary tract and metabolism (Drugs for peptic ulcer and GORD)",
    "description": "Proton pump inhibitor (PPI) that suppresses gastric acid secretion by specific inhibition of the H+/K+-ATPase enzyme system at the secretory surface of the gastric parietal cell.",
    "rxNormCui": "312154",
    "quantity": "20 mg",
    "measurementUnit": "mg",
    "doseAmount": "20",
    "dosageForm": "Oral Capsule",
    "route": "Oral"
  },
  {
    "code": "A02BC02",
    "display": "Pantoprazole 40 mg Delayed-Release Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Alimentary tract and metabolism (Drugs for peptic ulcer and GORD)",
    "description": "Substituted benzimidazole proton pump inhibitor used for erosive esophagitis associated with gastroesophageal reflux disease and hypersecretory conditions.",
    "rxNormCui": "312320",
    "quantity": "40 mg",
    "measurementUnit": "mg",
    "doseAmount": "40",
    "dosageForm": "Delayed-Release Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "A10BB09",
    "display": "Gliclazide 80 mg Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Alimentary tract and metabolism (Sulfonylureas)",
    "description": "Second-generation sulfonylurea oral hypoglycemic agent that stimulates beta cells of the islet of Langerhans in the pancreas to release insulin.",
    "rxNormCui": "310489",
    "quantity": "80 mg",
    "measurementUnit": "mg",
    "doseAmount": "80",
    "dosageForm": "Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "A10BB12",
    "display": "Glimepiride 2 mg Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Alimentary tract and metabolism (Sulfonylureas)",
    "description": "Long-acting third-generation sulfonylurea used as an adjunct to diet and exercise to lower blood glucose in adults with Type 2 diabetes mellitus.",
    "rxNormCui": "197737",
    "quantity": "2 mg",
    "measurementUnit": "mg",
    "doseAmount": "2",
    "dosageForm": "Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "A10BH01",
    "display": "Sitagliptin 100 mg Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Alimentary tract and metabolism (Dipeptidyl peptidase 4 / DPP-4 inhibitors)",
    "description": "Orally active dipeptidyl peptidase-4 (DPP-4) inhibitor that slows the inactivation of incretin hormones (GLP-1 and GIP), regulating glucose homeostasis in Type 2 diabetes.",
    "rxNormCui": "665042",
    "quantity": "100 mg",
    "measurementUnit": "mg",
    "doseAmount": "100",
    "dosageForm": "Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "A10BK03",
    "display": "Empagliflozin 10 mg Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Alimentary tract and metabolism (Sodium-glucose co-transporter 2 / SGLT2 inhibitors)",
    "description": "Inhibitor of sodium-glucose co-transporter 2 (SGLT2) that reduces renal glucose reabsorption, promoting glycosuria and delivering proven cardiovascular and renal protection.",
    "rxNormCui": "1545653",
    "quantity": "10 mg",
    "measurementUnit": "mg",
    "doseAmount": "10",
    "dosageForm": "Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "A10BK01",
    "display": "Dapagliflozin 10 mg Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Alimentary tract and metabolism (SGLT2 inhibitors)",
    "description": "Selective SGLT2 inhibitor indicated for adults with Type 2 diabetes, heart failure with reduced ejection fraction (HFrEF), and chronic kidney disease (CKD).",
    "rxNormCui": "1488564",
    "quantity": "10 mg",
    "measurementUnit": "mg",
    "doseAmount": "10",
    "dosageForm": "Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "A10BJ06",
    "display": "Semaglutide 0.5 mg Subcutaneous Solution",
    "system": "ATC / RxNorm",
    "category": "Alimentary tract and metabolism (Glucagon-like peptide-1 / GLP-1 receptor agonists)",
    "description": "Once-weekly GLP-1 receptor agonist that selectively stimulates glucose-dependent insulin secretion, slows gastric emptying, and reduces major adverse cardiovascular events (MACE).",
    "rxNormCui": "1999557",
    "quantity": "0.5 mg",
    "measurementUnit": "mg",
    "doseAmount": "0.5",
    "dosageForm": "Subcutaneous Solution",
    "route": "Subcutaneous"
  },
  {
    "code": "A10AE04",
    "display": "Insulin Glargine 100 units/ml Subcutaneous Solution",
    "system": "ATC / RxNorm",
    "category": "Alimentary tract and metabolism (Insulins and analogues for injection, long-acting)",
    "description": "Recombinant human insulin analog providing smooth, peakless 24-hour basal glycemic control with a once-daily subcutaneous injection.",
    "rxNormCui": "261551",
    "quantity": "100 units/ml",
    "measurementUnit": "units/ml",
    "doseAmount": "100",
    "dosageForm": "Subcutaneous Solution",
    "route": "Subcutaneous"
  },
  {
    "code": "A10AB04",
    "display": "Insulin Lispro 100 units/ml Subcutaneous Solution",
    "system": "ATC / RxNorm",
    "category": "Alimentary tract and metabolism (Insulins and analogues for injection, fast-acting)",
    "description": "Rapid-acting human insulin analog administered immediately before or after meals to control postprandial glucose excursions in Type 1 and Type 2 diabetes.",
    "rxNormCui": "261553",
    "quantity": "100 units/ml",
    "measurementUnit": "units/ml",
    "doseAmount": "100",
    "dosageForm": "Subcutaneous Solution",
    "route": "Subcutaneous"
  },
  {
    "code": "A04AA01",
    "display": "Ondansetron 4 mg Film-Coated Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Alimentary tract and metabolism (Serotonin 5-HT3 receptor antagonists)",
    "description": "Selective 5-HT3 receptor antagonist used for the prevention and treatment of nausea and vomiting induced by cytotoxic chemotherapy, radiation therapy, or surgery.",
    "rxNormCui": "312035",
    "quantity": "4 mg",
    "measurementUnit": "mg",
    "doseAmount": "4",
    "dosageForm": "Film-Coated Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "A07DA03",
    "display": "Loperamide Hydrochloride 2 mg Oral Capsule",
    "system": "ATC / RxNorm",
    "category": "Alimentary tract and metabolism (Antidiarrheals)",
    "description": "Synthetic opioid peripheral mu-opioid receptor agonist that slows intestinal motility, prolonging transit time and increasing fluid absorption.",
    "rxNormCui": "311354",
    "quantity": "2 mg",
    "measurementUnit": "mg",
    "doseAmount": "2",
    "dosageForm": "Oral Capsule",
    "route": "Oral"
  },
  {
    "code": "B01AC06",
    "display": "Aspirin 75 mg Gastro-Resistant Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Blood and blood forming organs (Platelet aggregation inhibitors)",
    "description": "Low-dose acetylsalicylic acid providing irreversible inhibition of platelet cyclooxygenase-1 (COX-1) for secondary cardiovascular prevention against myocardial infarction and stroke.",
    "rxNormCui": "243670",
    "quantity": "75 mg",
    "measurementUnit": "mg",
    "doseAmount": "75",
    "dosageForm": "Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "B01AC04",
    "display": "Clopidogrel 75 mg Film-Coated Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Blood and blood forming organs (Platelet aggregation inhibitors)",
    "description": "Thienopyridine class P2Y12 adenosine diphosphate (ADP) receptor antagonist that inhibits platelet aggregation in acute coronary syndrome and ischemic stroke.",
    "rxNormCui": "309362",
    "quantity": "75 mg",
    "measurementUnit": "mg",
    "doseAmount": "75",
    "dosageForm": "Film-Coated Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "B01AA03",
    "display": "Warfarin Sodium 5 mg Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Blood and blood forming organs (Vitamin K antagonists)",
    "description": "Oral anticoagulant that inhibits the synthesis of vitamin K-dependent clotting factors (II, VII, IX, X) and anticoagulant proteins C and S. Monitored via INR.",
    "rxNormCui": "855333",
    "quantity": "5 mg",
    "measurementUnit": "mg",
    "doseAmount": "5",
    "dosageForm": "Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "B01AF02",
    "display": "Apixaban 5 mg Film-Coated Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Blood and blood forming organs (Direct factor Xa inhibitors / DOAC)",
    "description": "Direct oral anticoagulant (DOAC) that selectively and reversibly inhibits factor Xa, preventing thrombin generation and clot development in nonvalvular atrial fibrillation and DVT/PE.",
    "rxNormCui": "1364444",
    "quantity": "5 mg",
    "measurementUnit": "mg",
    "doseAmount": "5",
    "dosageForm": "Film-Coated Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "B01AF01",
    "display": "Rivaroxaban 20 mg Film-Coated Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Blood and blood forming organs (Direct factor Xa inhibitors / DOAC)",
    "description": "Direct factor Xa inhibitor indicated for prevention of stroke and systemic embolism in nonvalvular atrial fibrillation, and for treatment of deep vein thrombosis (DVT) and pulmonary embolism (PE).",
    "rxNormCui": "1114195",
    "quantity": "20 mg",
    "measurementUnit": "mg",
    "doseAmount": "20",
    "dosageForm": "Film-Coated Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "B01AB05",
    "display": "Enoxaparin Sodium 40 mg Subcutaneous Solution",
    "system": "ATC / RxNorm",
    "category": "Blood and blood forming organs (Low molecular weight heparins / LMWH)",
    "description": "Low molecular weight heparin with high anti-factor Xa activity relative to antithrombin activity, indicated for prophylaxis and treatment of venous thromboembolism.",
    "rxNormCui": "854235",
    "quantity": "40 mg",
    "measurementUnit": "mg",
    "doseAmount": "40",
    "dosageForm": "Subcutaneous Solution",
    "route": "Subcutaneous"
  },
  {
    "code": "B03AA07",
    "display": "Ferrous Sulfate 200 mg Film-Coated Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Blood and blood forming organs (Iron preparations)",
    "description": "Elemental iron supplement providing 65 mg elemental iron per 200 mg salt, used for the prevention and treatment of iron deficiency anemia.",
    "rxNormCui": "310385",
    "quantity": "200 mg",
    "measurementUnit": "mg",
    "doseAmount": "200",
    "dosageForm": "Film-Coated Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "B03BB01",
    "display": "Folic Acid 5 mg Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Blood and blood forming organs (Vitamin B12 and folic acid)",
    "description": "Synthetic folate essential for DNA synthesis and red blood cell maturation, used in megaloblastic anemia and preconceptional prophylaxis for neural tube defects.",
    "rxNormCui": "310398",
    "quantity": "5 mg",
    "measurementUnit": "mg",
    "doseAmount": "5",
    "dosageForm": "Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "C08CA01",
    "display": "Amlodipine Besylate 5 mg Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Cardiovascular system (Dihydropyridine calcium channel blockers)",
    "description": "Long-acting dihydropyridine calcium channel blocker that inhibits transmembrane influx of calcium ions into vascular smooth muscle, causing peripheral vasodilation.",
    "rxNormCui": "197361",
    "quantity": "5 mg",
    "measurementUnit": "mg",
    "doseAmount": "5",
    "dosageForm": "Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "C08CA01",
    "display": "Amlodipine Besylate 10 mg Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Cardiovascular system (Dihydropyridine calcium channel blockers)",
    "description": "Maximum clinical strength formulation for management of moderate-to-severe essential hypertension and chronic stable or vasospastic angina pectoris.",
    "rxNormCui": "197362",
    "quantity": "10 mg",
    "measurementUnit": "mg",
    "doseAmount": "10",
    "dosageForm": "Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "C10AA05",
    "display": "Atorvastatin Calcium 20 mg Film-Coated Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Cardiovascular system (HMG-CoA reductase inhibitors / Statins)",
    "description": "Synthetic HMG-CoA reductase inhibitor that catalyzes the rate-limiting step in cholesterol biosynthesis, lowering LDL-C and triglycerides while stabilizing atheromatous plaques.",
    "rxNormCui": "617318",
    "quantity": "20 mg",
    "measurementUnit": "mg",
    "doseAmount": "20",
    "dosageForm": "Film-Coated Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "C10AA05",
    "display": "Atorvastatin Calcium 40 mg Film-Coated Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Cardiovascular system (HMG-CoA reductase inhibitors / Statins)",
    "description": "High-intensity statin therapy recommended for secondary prevention in atherosclerotic cardiovascular disease (ASCVD) and acute coronary syndromes.",
    "rxNormCui": "617320",
    "quantity": "40 mg",
    "measurementUnit": "mg",
    "doseAmount": "40",
    "dosageForm": "Film-Coated Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "C10AA07",
    "display": "Rosuvastatin Calcium 10 mg Film-Coated Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Cardiovascular system (HMG-CoA reductase inhibitors / Statins)",
    "description": "Hydrophilic high-potency statin delivering superior LDL-C reduction with minimal CYP3A4 drug-drug interaction profile compared to lipophilic statins.",
    "rxNormCui": "309312",
    "quantity": "10 mg",
    "measurementUnit": "mg",
    "doseAmount": "10",
    "dosageForm": "Film-Coated Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "C09CA01",
    "display": "Losartan Potassium 50 mg Film-Coated Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Cardiovascular system (Angiotensin II receptor blockers / ARB)",
    "description": "Selective, competitive angiotensin II receptor type 1 (AT1) antagonist that blocks vasoconstriction and aldosterone secretion without inducing bradykinin-mediated cough.",
    "rxNormCui": "311354",
    "quantity": "50 mg",
    "measurementUnit": "mg",
    "doseAmount": "50",
    "dosageForm": "Film-Coated Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "C09CA07",
    "display": "Telmisartan 40 mg Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Cardiovascular system (Angiotensin II receptor blockers / ARB)",
    "description": "Long-acting AT1 receptor antagonist with the longest terminal elimination half-life (24 hours) in its class, providing sustained blood pressure reduction and partial PPAR-gamma agonism.",
    "rxNormCui": "313271",
    "quantity": "40 mg",
    "measurementUnit": "mg",
    "doseAmount": "40",
    "dosageForm": "Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "C09AA02",
    "display": "Enalapril Maleate 10 mg Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Cardiovascular system (ACE inhibitors)",
    "description": "Prodrug hydrolyzed to enalaprilat that inhibits angiotensin-converting enzyme (ACE), preventing conversion of angiotensin I to angiotensin II in hypertension and heart failure.",
    "rxNormCui": "197652",
    "quantity": "10 mg",
    "measurementUnit": "mg",
    "doseAmount": "10",
    "dosageForm": "Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "C09AA05",
    "display": "Ramipril 5 mg Oral Capsule",
    "system": "ATC / RxNorm",
    "category": "Cardiovascular system (ACE inhibitors)",
    "description": "Potent tissue-specific ACE inhibitor with proven mortality reduction in post-myocardial infarction patients, diabetic nephropathy, and heart failure.",
    "rxNormCui": "198191",
    "quantity": "5 mg",
    "measurementUnit": "mg",
    "doseAmount": "5",
    "dosageForm": "Oral Capsule",
    "route": "Oral"
  },
  {
    "code": "C07AB07",
    "display": "Bisoprolol Fumarate 5 mg Film-Coated Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Cardiovascular system (Selective beta-1 adrenoceptor blockers)",
    "description": "Highly cardioselective beta-1 adrenoceptor antagonist devoid of intrinsic sympathomimetic activity, indicated for hypertension, angina, and chronic stable heart failure.",
    "rxNormCui": "308777",
    "quantity": "5 mg",
    "measurementUnit": "mg",
    "doseAmount": "5",
    "dosageForm": "Film-Coated Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "C07AB02",
    "display": "Metoprolol Tartrate 50 mg Film-Coated Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Cardiovascular system (Selective beta-1 adrenoceptor blockers)",
    "description": "Cardioselective beta-blocker that reduces myocardial oxygen demand by decreasing heart rate, cardiac output, and systemic blood pressure.",
    "rxNormCui": "866414",
    "quantity": "50 mg",
    "measurementUnit": "mg",
    "doseAmount": "50",
    "dosageForm": "Film-Coated Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "C07AG02",
    "display": "Carvedilol 6.25 mg Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Cardiovascular system (Non-selective beta and alpha-1 blockers)",
    "description": "Non-selective beta-adrenoceptor and alpha-1 receptor antagonist with antioxidant properties, demonstrated to reduce mortality and hospitalizations in congestive heart failure.",
    "rxNormCui": "315677",
    "quantity": "6.25 mg",
    "measurementUnit": "mg",
    "doseAmount": "6.25",
    "dosageForm": "Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "C03CA01",
    "display": "Furosemide 20 mg Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Cardiovascular system (High-ceiling loop diuretics)",
    "description": "Short-acting loop diuretic that blocks Na+/K+/2Cl- symporter in the thick ascending limb of the loop of Henle, producing potent natriuresis in congestive heart failure and edema.",
    "rxNormCui": "310429",
    "quantity": "20 mg",
    "measurementUnit": "mg",
    "doseAmount": "20",
    "dosageForm": "Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "C03CA01",
    "display": "Furosemide 40 mg Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Cardiovascular system (High-ceiling loop diuretics)",
    "description": "Standard clinical strength loop diuretic for acute and chronic volume overload in cardiac, renal, and hepatic failure. Requires monitoring of serum potassium and creatinine.",
    "rxNormCui": "310430",
    "quantity": "40 mg",
    "measurementUnit": "mg",
    "doseAmount": "40",
    "dosageForm": "Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "C03DA01",
    "display": "Spironolactone 25 mg Film-Coated Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Cardiovascular system (Aldosterone antagonists / Potassium-sparing diuretics)",
    "description": "Competitive aldosterone receptor antagonist that acts in the distal convoluted tubule to increase sodium and water excretion while conserving potassium and preventing cardiac fibrosis.",
    "rxNormCui": "313019",
    "quantity": "25 mg",
    "measurementUnit": "mg",
    "doseAmount": "25",
    "dosageForm": "Film-Coated Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "C01DA02",
    "display": "Nitroglycerin 0.4 mg Sublingual Tablet",
    "system": "ATC / RxNorm",
    "category": "Cardiovascular system (Vasodilators used in cardiac diseases / Organic nitrates)",
    "description": "Nitric oxide donor producing venous and systemic arteriolar dilation, reducing cardiac preload and wall tension for immediate relief of acute angina pectoris episodes.",
    "rxNormCui": "855324",
    "quantity": "0.4 mg",
    "measurementUnit": "mg",
    "doseAmount": "0.4",
    "dosageForm": "Sublingual Tablet",
    "route": "Sublingual"
  },
  {
    "code": "G04BE03",
    "display": "Sildenafil Citrate 50 mg Film-Coated Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Genito-urinary system and sex hormones (Drugs used in erectile dysfunction / PDE-5 inhibitors)",
    "description": "Selective phosphodiesterase type 5 (PDE-5) inhibitor that potentiates nitric oxide-mediated cyclic GMP relaxation of cavernosal smooth muscle. Contraindicated with organic nitrates.",
    "rxNormCui": "312961",
    "quantity": "50 mg",
    "measurementUnit": "mg",
    "doseAmount": "50",
    "dosageForm": "Film-Coated Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "G04CA02",
    "display": "Tamsulosin Hydrochloride 0.4 mg Modified-Release Capsule",
    "system": "ATC / RxNorm",
    "category": "Genito-urinary system and sex hormones (Alpha-1 adrenoceptor antagonists)",
    "description": "Selective alpha-1A adrenoceptor antagonist that relaxes smooth muscle in the prostate and bladder neck, improving urinary flow in benign prostatic hyperplasia (BPH).",
    "rxNormCui": "313171",
    "quantity": "0.4 mg",
    "measurementUnit": "mg",
    "doseAmount": "0.4",
    "dosageForm": "Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "H03AA01",
    "display": "Levothyroxine Sodium 50 mcg Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Systemic hormonal preparations (Thyroid hormones)",
    "description": "Synthetic crystalline levo-isomer of thyroxine (T4) identical to the hormone secreted by the human thyroid gland, used as thyroid hormone replacement therapy in primary hypothyroidism.",
    "rxNormCui": "966224",
    "quantity": "50 mcg",
    "measurementUnit": "mcg",
    "doseAmount": "50",
    "dosageForm": "Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "H03AA01",
    "display": "Levothyroxine Sodium 100 mcg Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Systemic hormonal preparations (Thyroid hormones)",
    "description": "Higher maintenance dose for full replacement therapy in postoperative thyroidectomy, autoimmune thyroiditis (Hashimoto disease), and TSH suppression in thyroid carcinoma.",
    "rxNormCui": "966228",
    "quantity": "100 mcg",
    "measurementUnit": "mcg",
    "doseAmount": "100",
    "dosageForm": "Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "H02AB06",
    "display": "Prednisolone 5 mg Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Systemic hormonal preparations (Corticosteroids for systemic use / Glucocorticoids)",
    "description": "Synthetic glucocorticoid with four times the anti-inflammatory potency of hydrocortisone, indicated for severe autoimmune, allergic, and inflammatory exacerbations.",
    "rxNormCui": "312615",
    "quantity": "5 mg",
    "measurementUnit": "mg",
    "doseAmount": "5",
    "dosageForm": "Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "H02AB02",
    "display": "Dexamethasone 4 mg Injection",
    "system": "ATC / RxNorm",
    "category": "Systemic hormonal preparations (Corticosteroids for systemic use / Glucocorticoids)",
    "description": "Long-acting synthetic glucocorticoid with negligible mineralocorticoid effect and 25-30 times the anti-inflammatory potency of hydrocortisone, indicated for cerebral edema and anaphylaxis.",
    "rxNormCui": "310118",
    "quantity": "4 mg",
    "measurementUnit": "mg",
    "doseAmount": "4",
    "dosageForm": "Injection",
    "route": "Injectable / IV"
  },
  {
    "code": "J01CA04",
    "display": "Amoxicillin 250 mg Oral Capsule",
    "system": "ATC / RxNorm",
    "category": "Antiinfectives for systemic use (Beta-lactam antibacterials, penicillins with extended spectrum)",
    "description": "Broad-spectrum aminopenicillin that inhibits bacterial cell wall peptidoglycan synthesis via binding to penicillin-binding proteins (PBPs). Indicated for susceptible respiratory and ENT infections.",
    "rxNormCui": "308189",
    "quantity": "250 mg",
    "measurementUnit": "mg",
    "doseAmount": "250",
    "dosageForm": "Oral Capsule",
    "route": "Oral"
  },
  {
    "code": "J01CA04",
    "display": "Amoxicillin 500 mg Oral Capsule",
    "system": "ATC / RxNorm",
    "category": "Antiinfectives for systemic use (Beta-lactam antibacterials, penicillins with extended spectrum)",
    "description": "Standard adult therapeutic strength for streptococcal pharyngitis, acute otitis media, community-acquired pneumonia, and H. pylori triple eradication therapy.",
    "rxNormCui": "308191",
    "quantity": "500 mg",
    "measurementUnit": "mg",
    "doseAmount": "500",
    "dosageForm": "Oral Capsule",
    "route": "Oral"
  },
  {
    "code": "J01CR02",
    "display": "Amoxicillin 875 mg / Clavulanate Potassium 125 mg Film-Coated Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Antiinfectives for systemic use (Combinations of penicillins, including beta-lactamase inhibitors)",
    "description": "Extended-spectrum aminopenicillin combined with irreversible beta-lactamase inhibitor clavulanate to overcome beta-lactamase-producing pathogens in complex respiratory and skin infections.",
    "rxNormCui": "308194",
    "quantity": "875 mg",
    "measurementUnit": "mg",
    "doseAmount": "875",
    "dosageForm": "Film-Coated Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "J01DD04",
    "display": "Ceftriaxone Sodium 1 g Powder for Solution for Injection",
    "system": "ATC / RxNorm",
    "category": "Antiinfectives for systemic use (Third-generation cephalosporins)",
    "description": "Broad-spectrum third-generation cephalosporin with long half-life permitting once-daily parenteral administration for bacterial meningitis, pneumonia, and severe sepsis.",
    "rxNormCui": "309095",
    "quantity": "1 g",
    "measurementUnit": "g",
    "doseAmount": "1",
    "dosageForm": "Injection",
    "route": "Injectable / IV"
  },
  {
    "code": "J01FA10",
    "display": "Azithromycin 500 mg Film-Coated Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Antiinfectives for systemic use (Macrolides / Azalides)",
    "description": "Azalide subclass macrolide that inhibits bacterial protein synthesis by binding to the 50S ribosomal subunit. Safe first-line antibiotic in patients with documented Penicillin hypersensitivity.",
    "rxNormCui": "308460",
    "quantity": "500 mg",
    "measurementUnit": "mg",
    "doseAmount": "500",
    "dosageForm": "Film-Coated Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "J01MA02",
    "display": "Ciprofloxacin 500 mg Film-Coated Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Antiinfectives for systemic use (Fluoroquinolones)",
    "description": "Broad-spectrum bactericidal fluoroquinolone that inhibits bacterial DNA gyrase (topoisomerase II) and topoisomerase IV, indicated for complicated urinary tract and intra-abdominal infections.",
    "rxNormCui": "309309",
    "quantity": "500 mg",
    "measurementUnit": "mg",
    "doseAmount": "500",
    "dosageForm": "Film-Coated Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "J01AA02",
    "display": "Doxycycline Hyclate 100 mg Oral Capsule",
    "system": "ATC / RxNorm",
    "category": "Antiinfectives for systemic use (Tetracyclines)",
    "description": "Broad-spectrum bacteriostatic tetracycline that binds reversibly to the 30S ribosomal subunit, indicated for atypical respiratory infections, Lyme disease, and rickettsial diseases.",
    "rxNormCui": "310196",
    "quantity": "100 mg",
    "measurementUnit": "mg",
    "doseAmount": "100",
    "dosageForm": "Oral Capsule",
    "route": "Oral"
  },
  {
    "code": "J01XD01",
    "display": "Metronidazole 400 mg Film-Coated Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Antiinfectives for systemic use (Nitroimidazole derivatives)",
    "description": "Synthetic nitroimidazole antibacterial and antiprotozoal that disrupts helical DNA structure and causes strand breakage in obligate anaerobic bacteria and protozoa.",
    "rxNormCui": "311681",
    "quantity": "400 mg",
    "measurementUnit": "mg",
    "doseAmount": "400",
    "dosageForm": "Film-Coated Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "J02AC01",
    "display": "Fluconazole 150 mg Oral Capsule",
    "system": "ATC / RxNorm",
    "category": "Antiinfectives for systemic use (Antimycotics for systemic use / Triazole derivatives)",
    "description": "Synthetic triazole antifungal that selectively inhibits fungal cytochrome P-450 dependent 14-alpha-demethylase, preventing ergosterol synthesis in Candida and Cryptococcus infections.",
    "rxNormCui": "310385",
    "quantity": "150 mg",
    "measurementUnit": "mg",
    "doseAmount": "150",
    "dosageForm": "Oral Capsule",
    "route": "Oral"
  },
  {
    "code": "M01AE01",
    "display": "Ibuprofen 400 mg Film-Coated Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Musculo-skeletal system (Non-steroidal anti-inflammatory drugs / Propionic acid derivatives)",
    "description": "Non-selective reversible inhibitor of cyclooxygenase enzymes (COX-1 and COX-2) producing analgesia, antipyresis, and anti-inflammatory activity. Contraindicated in AERD and active peptic ulcers.",
    "rxNormCui": "310965",
    "quantity": "400 mg",
    "measurementUnit": "mg",
    "doseAmount": "400",
    "dosageForm": "Film-Coated Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "M01AB05",
    "display": "Diclofenac Sodium 50 mg Gastro-Resistant Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Musculo-skeletal system (NSAIDs / Acetic acid derivatives)",
    "description": "Potent non-steroidal anti-inflammatory with balanced COX-1/COX-2 inhibition indicated for acute musculoskeletal trauma, osteoarthritis, and rheumatoid arthritis flares.",
    "rxNormCui": "310149",
    "quantity": "50 mg",
    "measurementUnit": "mg",
    "doseAmount": "50",
    "dosageForm": "Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "M01AH01",
    "display": "Celecoxib 200 mg Oral Capsule",
    "system": "ATC / RxNorm",
    "category": "Musculo-skeletal system (Specific COX-2 inhibitors / Coxibs)",
    "description": "Selective cyclooxygenase-2 (COX-2) inhibitor that provides anti-inflammatory and analgesic efficacy with significantly reduced incidence of endoscopic gastroduodenal ulcers.",
    "rxNormCui": "309114",
    "quantity": "200 mg",
    "measurementUnit": "mg",
    "doseAmount": "200",
    "dosageForm": "Oral Capsule",
    "route": "Oral"
  },
  {
    "code": "M04AA01",
    "display": "Allopurinol 100 mg Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Musculo-skeletal system (Antigout preparations / Uric acid synthesis inhibitors)",
    "description": "Xanthine oxidase inhibitor that reduces the conversion of hypoxanthine and xanthine to uric acid, preventing recurrent gout attacks and urate nephropathy.",
    "rxNormCui": "308136",
    "quantity": "100 mg",
    "measurementUnit": "mg",
    "doseAmount": "100",
    "dosageForm": "Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "N02BE01",
    "display": "Paracetamol 500 mg Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Nervous system (Analgesics and antipyretics / Anilides)",
    "description": "Central cyclooxygenase inhibitor delivering proven analgesic and antipyretic relief without peripheral anti-inflammatory action, making it completely safe in patients with Aspirin-induced asthma (AERD).",
    "rxNormCui": "312076",
    "quantity": "500 mg",
    "measurementUnit": "mg",
    "doseAmount": "500",
    "dosageForm": "Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "N02BE01",
    "display": "Paracetamol 650 mg Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Nervous system (Analgesics and antipyretics / Anilides)",
    "description": "Therapeutic strength formulation providing sustained symptomatic relief for high fever, acute cephalalgia, and chronic osteoarthritis pain without gastrointestinal or platelet toxicity.",
    "rxNormCui": "312077",
    "quantity": "650 mg",
    "measurementUnit": "mg",
    "doseAmount": "650",
    "dosageForm": "Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "N02AJ13",
    "display": "Tramadol Hydrochloride 50 mg Oral Capsule",
    "system": "ATC / RxNorm",
    "category": "Nervous system (Opioid analgesics in combination with other non-opioids)",
    "description": "Centrally acting synthetic opioid analgesic with dual mechanism: weak mu-opioid receptor agonism combined with norepinephrine and serotonin reuptake inhibition.",
    "rxNormCui": "313495",
    "quantity": "50 mg",
    "measurementUnit": "mg",
    "doseAmount": "50",
    "dosageForm": "Oral Capsule",
    "route": "Oral"
  },
  {
    "code": "N03AX16",
    "display": "Pregabalin 75 mg Oral Capsule",
    "system": "ATC / RxNorm",
    "category": "Nervous system (Antiepileptics / Other antiepileptics)",
    "description": "GABA analog that binds to the alpha-2-delta auxiliary subunit of voltage-gated calcium channels in the CNS, reducing calcium influx and neurotransmitter release for neuropathic pain and generalized anxiety.",
    "rxNormCui": "646549",
    "quantity": "75 mg",
    "measurementUnit": "mg",
    "doseAmount": "75",
    "dosageForm": "Oral Capsule",
    "route": "Oral"
  },
  {
    "code": "N03AX12",
    "display": "Gabapentin 300 mg Oral Capsule",
    "system": "ATC / RxNorm",
    "category": "Nervous system (Antiepileptics)",
    "description": "Structural analog of neurotransmitter gamma-aminobutyric acid (GABA) that modulates voltage-dependent calcium channels for postherpetic neuralgia and focal onset seizures.",
    "rxNormCui": "310442",
    "quantity": "300 mg",
    "measurementUnit": "mg",
    "doseAmount": "300",
    "dosageForm": "Oral Capsule",
    "route": "Oral"
  },
  {
    "code": "N06AB06",
    "display": "Sertraline Hydrochloride 50 mg Film-Coated Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Nervous system (Psychoanaleptics / Selective serotonin reuptake inhibitors - SSRI)",
    "description": "Potent and selective inhibitor of neuronal serotonin (5-HT) reuptake indicated for major depressive disorder, obsessive-compulsive disorder, and post-traumatic stress disorder.",
    "rxNormCui": "312938",
    "quantity": "50 mg",
    "measurementUnit": "mg",
    "doseAmount": "50",
    "dosageForm": "Film-Coated Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "N06AB10",
    "display": "Escitalopram 10 mg Film-Coated Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Nervous system (Selective serotonin reuptake inhibitors - SSRI)",
    "description": "Pure S-enantiomer of citalopram with allosteric serotonin reuptake inhibition, delivering rapid clinical onset and predictable pharmacokinetics in major depression and panic disorder.",
    "rxNormCui": "352741",
    "quantity": "10 mg",
    "measurementUnit": "mg",
    "doseAmount": "10",
    "dosageForm": "Film-Coated Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "N05BA06",
    "display": "Lorazepam 1 mg Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Nervous system (Psycholeptics / Anxiolytics - Benzodiazepine derivatives)",
    "description": "Intermediate-acting benzodiazepine that enhances the inhibitory action of GABA on GABAA receptors for short-term relief of severe anxiety and premedication before diagnostic procedures.",
    "rxNormCui": "311354",
    "quantity": "1 mg",
    "measurementUnit": "mg",
    "doseAmount": "1",
    "dosageForm": "Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "R03AC02",
    "display": "Salbutamol 100 mcg Metered-Dose Inhaler",
    "system": "ATC / RxNorm",
    "category": "Respiratory system (Adrenergics, inhalants / Selective beta-2 adrenoceptor agonists)",
    "description": "Short-acting selective beta-2 adrenoceptor agonist (SABA) providing rapid bronchodilation within 5 minutes for acute relief of bronchospasm in bronchial asthma and COPD.",
    "rxNormCui": "252298",
    "quantity": "100 mcg",
    "measurementUnit": "mcg",
    "doseAmount": "100",
    "dosageForm": "Metered-Dose Inhaler",
    "route": "Inhalation"
  },
  {
    "code": "R03BA02",
    "display": "Budesonide 200 mcg Dry Powder Inhaler",
    "system": "ATC / RxNorm",
    "category": "Respiratory system (Inhalants for obstructive airway diseases / Glucocorticoids)",
    "description": "Inhaled synthetic corticosteroid with high local anti-inflammatory potency and extensive first-pass hepatic metabolism, used as maintenance controller therapy for persistent asthma.",
    "rxNormCui": "751717",
    "quantity": "200 mcg",
    "measurementUnit": "mcg",
    "doseAmount": "200",
    "dosageForm": "Dry Powder Inhaler",
    "route": "Inhalation"
  },
  {
    "code": "R03AK07",
    "display": "Budesonide 160 mcg / Formoterol Fumarate 4.5 mcg Metered-Dose Inhaler",
    "system": "ATC / RxNorm",
    "category": "Respiratory system (Adrenergics in combination with corticosteroids)",
    "description": "Combination of an inhaled corticosteroid (ICS) and a fast-, long-acting beta-2 agonist (LABA) for both maintenance controller therapy and symptom relief (SMART regimen).",
    "rxNormCui": "896014",
    "quantity": "160 mcg",
    "measurementUnit": "mcg",
    "doseAmount": "160",
    "dosageForm": "Metered-Dose Inhaler",
    "route": "Inhalation"
  },
  {
    "code": "R03DC03",
    "display": "Montelukast Sodium 10 mg Film-Coated Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Respiratory system (Leukotriene receptor antagonists - LTRA)",
    "description": "Selective and competitive cysteinyl leukotriene receptor (CysLT1) antagonist that inhibits physiological actions of LTD4, reducing bronchoconstriction and airway eosinophilia in asthma and allergic rhinitis.",
    "rxNormCui": "72237",
    "quantity": "10 mg",
    "measurementUnit": "mg",
    "doseAmount": "10",
    "dosageForm": "Film-Coated Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "R06AE07",
    "display": "Cetirizine Hydrochloride 10 mg Film-Coated Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Respiratory system (Antihistamines for systemic use / Piperazine derivatives)",
    "description": "Second-generation non-sedating H1-receptor antagonist that inhibits histamine release and eosinophil chemotaxis during allergic response in perennial rhinitis and chronic urticaria.",
    "rxNormCui": "315752",
    "quantity": "10 mg",
    "measurementUnit": "mg",
    "doseAmount": "10",
    "dosageForm": "Film-Coated Oral Tablet",
    "route": "Oral"
  },
  {
    "code": "R06AX26",
    "display": "Fexofenadine Hydrochloride 120 mg Film-Coated Oral Tablet",
    "system": "ATC / RxNorm",
    "category": "Respiratory system (Antihistamines for systemic use / Other antihistamines)",
    "description": "Active metabolite of terfenadine with zero anticholinergic or alpha-1 adrenergic blocking activity, providing non-drowsy 24-hour symptom relief for seasonal allergic rhinitis.",
    "rxNormCui": "310385",
    "quantity": "120 mg",
    "measurementUnit": "mg",
    "doseAmount": "120",
    "dosageForm": "Film-Coated Oral Tablet",
    "route": "Oral"
  }
];

export const CLINICAL_UCUM_DATA: StandardTerminologyEntry[] = [
  {
    "code": "mg/dL",
    "display": "milligram per deciliter",
    "system": "UCUM",
    "category": "Mass Concentration",
    "description": "Standard clinical lab unit for serum glucose, creatinine, bilirubin, and lipids."
  },
  {
    "code": "mmol/L",
    "display": "millimole per liter",
    "system": "UCUM",
    "category": "Substance Concentration",
    "description": "International standard unit for blood electrolytes (sodium, potassium, chloride) and metabolites."
  },
  {
    "code": "g/dL",
    "display": "gram per deciliter",
    "system": "UCUM",
    "category": "Mass Concentration",
    "description": "Standard unit for total serum protein, albumin, and hemoglobin concentration."
  },
  {
    "code": "mL/min",
    "display": "milliliter per minute",
    "system": "UCUM",
    "category": "Volume Rate",
    "description": "Standard measure for estimated Glomerular Filtration Rate (eGFR) and renal clearance."
  },
  {
    "code": "mmHg",
    "display": "millimeter of mercury",
    "system": "UCUM",
    "category": "Pressure",
    "description": "Universal clinical unit for arterial systolic/diastolic blood pressure and partial pressures (PaO2, PaCO2)."
  },
  {
    "code": "%",
    "display": "percent",
    "system": "UCUM",
    "category": "Fraction",
    "description": "Standard dimensionless fraction for hemoglobin A1c, arterial oxygen saturation (SpO2), and hematocrit."
  },
  {
    "code": "kg",
    "display": "kilogram",
    "system": "UCUM",
    "category": "Mass",
    "description": "Base SI unit of mass used for patient body weight and medication dosage calculations."
  },
  {
    "code": "cm",
    "display": "centimeter",
    "system": "UCUM",
    "category": "Length",
    "description": "Base unit of length for patient height, head circumference, and surgical lesion measurements."
  },
  {
    "code": "kg/m2",
    "display": "kilogram per square meter",
    "system": "UCUM",
    "category": "Body Mass Index",
    "description": "Universal clinical measure of body fatness and obesity staging (BMI)."
  },
  {
    "code": "m2",
    "display": "square meter",
    "system": "UCUM",
    "category": "Body Surface Area",
    "description": "Standard measure of Body Surface Area (BSA) for oncology chemotherapy dosing calculations."
  },
  {
    "code": "[degF]",
    "display": "degree Fahrenheit",
    "system": "UCUM",
    "category": "Temperature",
    "description": "Clinical temperature scale commonly used in North American and outpatient clinical intake."
  },
  {
    "code": "Cel",
    "display": "degree Celsius",
    "system": "UCUM",
    "category": "Temperature",
    "description": "Universal international SI metric temperature unit for patient core body temperature."
  },
  {
    "code": "U/L",
    "display": "unit per liter",
    "system": "UCUM",
    "category": "Catalytic Activity Concentration",
    "description": "Standard unit for serum enzymes including liver function tests (ALT, AST, ALP) and amylase."
  },
  {
    "code": "cells/mcL",
    "display": "cells per microliter",
    "system": "UCUM",
    "category": "Number Concentration",
    "description": "Hematology cell counts for white blood cells, red blood cells, and platelets."
  },
  {
    "code": "10*9/L",
    "display": "billion per liter (x10^9/L)",
    "system": "UCUM",
    "category": "Number Concentration",
    "description": "Standard SI metric reporting unit for complete blood count (leukocytes, absolute neutrophil count)."
  },
  {
    "code": "10*12/L",
    "display": "trillion per liter (x10^12/L)",
    "system": "UCUM",
    "category": "Number Concentration",
    "description": "Standard SI unit for erythrocyte (RBC) count in automated hematology analyzers."
  },
  {
    "code": "fL",
    "display": "femtoliter",
    "system": "UCUM",
    "category": "Volume",
    "description": "Measure of Mean Corpuscular Volume (MCV) of erythrocytes in microcytic vs macrocytic anemia."
  },
  {
    "code": "pg",
    "display": "picogram",
    "system": "UCUM",
    "category": "Mass",
    "description": "Measure of Mean Corpuscular Hemoglobin (MCH) per erythrocyte."
  },
  {
    "code": "mcg/mL",
    "display": "microgram per milliliter",
    "system": "UCUM",
    "category": "Mass Concentration",
    "description": "Therapeutic drug monitoring unit for antibiotics, antiepileptics, and biological assays."
  },
  {
    "code": "ng/mL",
    "display": "nanogram per milliliter",
    "system": "UCUM",
    "category": "Mass Concentration",
    "description": "Diagnostic marker unit for serum troponin, ferritin, PSA, and vitamin D levels."
  },
  {
    "code": "pg/mL",
    "display": "picogram per milliliter",
    "system": "UCUM",
    "category": "Mass Concentration",
    "description": "Endocrine hormone unit for free T3, free T4, vitamin B12, and inflammatory cytokines."
  },
  {
    "code": "mEq/L",
    "display": "milliequivalent per liter",
    "system": "UCUM",
    "category": "Equivalent Concentration",
    "description": "Traditional clinical unit for electrolyte chemical combining power (serum Na+, K+, HCO3-)."
  },
  {
    "code": "L/min",
    "display": "liter per minute",
    "system": "UCUM",
    "category": "Volume Rate",
    "description": "Peak Expiratory Flow (PEF) pulmonary rate and supplemental oxygen flow delivery rate."
  },
  {
    "code": "beats/min",
    "display": "beats per minute",
    "system": "UCUM",
    "category": "Frequency",
    "description": "Standard cardiac vital sign unit for heart rate and pulse rate assessment."
  },
  {
    "code": "breaths/min",
    "display": "breaths per minute",
    "system": "UCUM",
    "category": "Frequency",
    "description": "Standard pulmonary vital sign unit for respiratory rate evaluation."
  },
  {
    "code": "mOsm/kg",
    "display": "milliosmole per kilogram",
    "system": "UCUM",
    "category": "Osmolality",
    "description": "Clinical measure of plasma and urine solute osmolality for fluid balance and hyponatremia."
  },
  {
    "code": "mm/h",
    "display": "millimeter per hour",
    "system": "UCUM",
    "category": "Velocity",
    "description": "Westergren erythrocyte sedimentation rate (ESR) marker of acute systemic inflammation."
  }
];

export const CLINICAL_DICOM_DATA: StandardTerminologyEntry[] = [
  {
    "code": "CT",
    "display": "Computed Tomography",
    "system": "DICOM",
    "category": "Cross-Sectional Imaging",
    "description": "Axial X-ray tomography generating volumetric slices of anatomical structures with calibrated Hounsfield Unit density."
  },
  {
    "code": "MR",
    "display": "Magnetic Resonance Imaging",
    "system": "DICOM",
    "category": "Magnetic Resonance Imaging",
    "description": "Radiofrequency excitation of hydrogen nuclei in high-strength magnetic field producing high soft-tissue contrast."
  },
  {
    "code": "CR",
    "display": "Computed Radiography",
    "system": "DICOM",
    "category": "Projection Radiography",
    "description": "Photostimulable phosphor plate digital radiography used for general musculoskeletal and chest imaging."
  },
  {
    "code": "DX",
    "display": "Digital Radiography",
    "system": "DICOM",
    "category": "Direct Digital Radiography",
    "description": "Flat-panel detector direct digital radiography with high spatial resolution and low patient radiation dose."
  },
  {
    "code": "US",
    "display": "Ultrasound",
    "system": "DICOM",
    "category": "Acoustic Imaging",
    "description": "High-frequency acoustic beam reflection creating real-time dynamic imaging of soft tissues, organs, and Doppler blood flow."
  },
  {
    "code": "NM",
    "display": "Nuclear Medicine",
    "system": "DICOM",
    "category": "Scintigraphic Imaging",
    "description": "Gamma camera detection of targeted radiopharmaceuticals for metabolic and physiological organ imaging."
  },
  {
    "code": "PT",
    "display": "Positron Emission Tomography (PET)",
    "system": "DICOM",
    "category": "Nuclear Imaging",
    "description": "Coincidence detection of positron-emitting radiotracers (18F-FDG) evaluating tissue glucose metabolism in oncology."
  },
  {
    "code": "XA",
    "display": "X-Ray Angiography",
    "system": "DICOM",
    "category": "Fluoroscopic / Vascular",
    "description": "High-speed fluoroscopic digital subtraction imaging of cardiovascular vessels during interventional procedures."
  },
  {
    "code": "MG",
    "display": "Mammography",
    "system": "DICOM",
    "category": "Specialized Radiography",
    "description": "Low-dose breast X-ray examination optimized for detection of early microcalcifications and architectural distortion."
  },
  {
    "code": "OCT",
    "display": "Optical Coherence Tomography",
    "system": "DICOM",
    "category": "Interferometric Imaging",
    "description": "Micron-resolution optical cross-sectional imaging of retinal layers and coronary intravascular microstructures."
  },
  {
    "code": "ECG",
    "display": "Electrocardiography Waveform",
    "system": "DICOM",
    "category": "Electrophysiological Waveform",
    "description": "Synchronized multichannel surface bioelectric voltage recordings evaluating cardiac conduction rhythm."
  },
  {
    "code": "EPS",
    "display": "Cardiac Electrophysiology",
    "system": "DICOM",
    "category": "Invasive Electrophysiology",
    "description": "Intracardiac multichannel catheter electrode signals recorded during catheter ablation and arrhythmia mapping."
  },
  {
    "code": "HD",
    "display": "Hemodynamic Waveform",
    "system": "DICOM",
    "category": "Hemodynamic Waveform",
    "description": "Direct arterial, pulmonary artery, and central venous invasive blood pressure pressure-time waveforms."
  },
  {
    "code": "SC",
    "display": "Secondary Capture Image",
    "system": "DICOM",
    "category": "Derived Evidence Object",
    "description": "Digital graphic capture of processed diagnostic displays, 3D surface volume renderings, and clinical screenshots."
  },
  {
    "code": "SR",
    "display": "Structured Report",
    "system": "DICOM",
    "category": "Structured Clinical Evidence",
    "description": "Machine-readable semantic document containing quantitative measurements, CAD findings, and physician conclusions."
  },
  {
    "code": "PR",
    "display": "Presentation State",
    "system": "DICOM",
    "category": "Display Consistency Object",
    "description": "Parameters for window width/level, spatial transformations, annotations, and calibrated display rendering."
  },
  {
    "code": "KO",
    "display": "Key Object Selection",
    "system": "DICOM",
    "category": "Manifest Object",
    "description": "Curated flag identifying critical diagnostic images referenced for clinical consultation and tumor board review."
  },
  {
    "code": "IVUS",
    "display": "Intravascular Ultrasound",
    "system": "DICOM",
    "category": "Endovascular Ultrasound",
    "description": "Catheter-mounted miniature ultrasound transducer imaging coronary vessel lumen geometry and plaque morphology."
  },
  {
    "code": "PX",
    "display": "Panoramic X-Ray",
    "system": "DICOM",
    "category": "Maxillofacial Radiography",
    "description": "Tomographic rotational panoramic radiograph capturing the entire dentition, mandible, and maxilla."
  },
  {
    "code": "RG",
    "display": "Radiographic Imaging (General)",
    "system": "DICOM",
    "category": "Projection Radiography",
    "description": "Standard planar transmission X-ray imaging for anatomical evaluation."
  },
  {
    "code": "IO",
    "display": "Intra-Oral Radiography",
    "system": "DICOM",
    "category": "Dental Radiography",
    "description": "High-resolution periapical and bitewing dental sensor radiography for alveolar bone and dental root pathology."
  },
  {
    "code": "OP",
    "display": "Ophthalmic Photography",
    "system": "DICOM",
    "category": "Ophthalmic Imaging",
    "description": "Digital color fundus photography capturing retina, macula, and optic disc morphology."
  },
  {
    "code": "ES",
    "display": "Endoscopy",
    "system": "DICOM",
    "category": "Endoscopic Video",
    "description": "Video and photographic digital capture from flexible or rigid endoscopes during diagnostic and surgical procedures."
  },
  {
    "code": "XC",
    "display": "External Camera Photography",
    "system": "DICOM",
    "category": "Visible Light Imaging",
    "description": "Clinical gross photography of dermatological lesions, wound healing progress, and surgical specimens."
  },
  {
    "code": "BDUS",
    "display": "Bone Densitometry (Ultrasound)",
    "system": "DICOM",
    "category": "Densitometry",
    "description": "Quantitative ultrasound of peripheral bone sites evaluating bone mineral density and osteoporosis risk."
  },
  {
    "code": "DOC",
    "display": "Encapsulated Document",
    "system": "DICOM",
    "category": "Document Storage",
    "description": "PDF or CDA clinical consultation document encapsulated within a DICOM information object for PACS archiving."
  }
];

export const CLINICAL_FHIR_DATA: StandardTerminologyEntry[] = [
  {
    "code": "Patient",
    "display": "Patient Resource",
    "system": "HL7 FHIR",
    "category": "Individuals",
    "description": "Demographics and administrative information about an individual receiving healthcare services."
  },
  {
    "code": "Practitioner",
    "display": "Practitioner Resource",
    "system": "HL7 FHIR",
    "category": "Individuals",
    "description": "A person who is directly or indirectly involved in the provisioning of healthcare (doctors, nurses, specialists)."
  },
  {
    "code": "PractitionerRole",
    "display": "PractitionerRole Resource",
    "system": "HL7 FHIR",
    "category": "Individuals",
    "description": "A specific set of roles/locations/specialties that a practitioner is authorized to perform at an organization."
  },
  {
    "code": "Organization",
    "display": "Organization Resource",
    "system": "HL7 FHIR",
    "category": "Entities",
    "description": "A formally or informally recognized grouping of people or organizations formed for the purpose of delivering healthcare."
  },
  {
    "code": "Location",
    "display": "Location Resource",
    "system": "HL7 FHIR",
    "category": "Entities",
    "description": "Details and position information for a physical place where healthcare services are provided and resources stored."
  },
  {
    "code": "HealthcareService",
    "display": "HealthcareService Resource",
    "system": "HL7 FHIR",
    "category": "Entities",
    "description": "The details of a healthcare service available at an organization or location."
  },
  {
    "code": "Encounter",
    "display": "Encounter Resource",
    "system": "HL7 FHIR",
    "category": "Management",
    "description": "An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s)."
  },
  {
    "code": "EpisodeOfCare",
    "display": "EpisodeOfCare Resource",
    "system": "HL7 FHIR",
    "category": "Management",
    "description": "An association between a patient and an organization representing a continuous course of treatment across time."
  },
  {
    "code": "Condition",
    "display": "Condition Resource",
    "system": "HL7 FHIR",
    "category": "Clinical Summary",
    "description": "A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern."
  },
  {
    "code": "Observation",
    "display": "Observation Resource",
    "system": "HL7 FHIR",
    "category": "Diagnostics",
    "description": "Measurements and simple assertions made about a patient, device or other subject (vitals, lab results, imaging observations)."
  },
  {
    "code": "DiagnosticReport",
    "display": "DiagnosticReport Resource",
    "system": "HL7 FHIR",
    "category": "Diagnostics",
    "description": "The findings and interpretation of diagnostic tests performed on patients, devices, and/or specimens (lab, imaging, pathology)."
  },
  {
    "code": "Specimen",
    "display": "Specimen Resource",
    "system": "HL7 FHIR",
    "category": "Diagnostics",
    "description": "A sample to be used for analysis (e.g. venous blood, urine, tissue biopsy, cerebrospinal fluid)."
  },
  {
    "code": "ImagingStudy",
    "display": "ImagingStudy Resource",
    "system": "HL7 FHIR",
    "category": "Diagnostics",
    "description": "Representation of the content produced in a DICOM imaging study with series, instances, modalities, and SOP classes."
  },
  {
    "code": "Medication",
    "display": "Medication Resource",
    "system": "HL7 FHIR",
    "category": "Medications",
    "description": "Definition and package representation of a medicinal product, drug, or dietary supplement."
  },
  {
    "code": "MedicationRequest",
    "display": "MedicationRequest Resource",
    "system": "HL7 FHIR",
    "category": "Medications",
    "description": "An order or request for both supply of the medication and the instructions for administration to a patient."
  },
  {
    "code": "MedicationAdministration",
    "display": "MedicationAdministration Resource",
    "system": "HL7 FHIR",
    "category": "Medications",
    "description": "Historical event of a patient consuming or being given a medicinal product with dose, route, and clinician signature."
  },
  {
    "code": "MedicationDispense",
    "display": "MedicationDispense Resource",
    "system": "HL7 FHIR",
    "category": "Medications",
    "description": "The provision of a supply of a medication with appropriate labeling and instructions to a patient."
  },
  {
    "code": "MedicationStatement",
    "display": "MedicationStatement Resource",
    "system": "HL7 FHIR",
    "category": "Medications",
    "description": "A record of a medication that is being consumed by a patient or was consumed in the past."
  },
  {
    "code": "AllergyIntolerance",
    "display": "AllergyIntolerance Resource",
    "system": "HL7 FHIR",
    "category": "Clinical Summary",
    "description": "Risk of harmful or undesirable, physiological response which is unique to an individual and results from exposure to a substance."
  },
  {
    "code": "Procedure",
    "display": "Procedure Resource",
    "system": "HL7 FHIR",
    "category": "Care Provision",
    "description": "An action that is or was performed on or for a patient, such as a surgical operation, diagnostic biopsy, or physical therapy."
  },
  {
    "code": "Immunization",
    "display": "Immunization Resource",
    "system": "HL7 FHIR",
    "category": "Medications",
    "description": "Event of administration of a vaccine or record of an immunization statement regarding a vaccine dose."
  },
  {
    "code": "ImmunizationRecommendation",
    "display": "ImmunizationRecommendation Resource",
    "system": "HL7 FHIR",
    "category": "Medications",
    "description": "A patient targeted vaccine recommendation based on immunization history and age-appropriate guidelines."
  },
  {
    "code": "CarePlan",
    "display": "CarePlan Resource",
    "system": "HL7 FHIR",
    "category": "Care Provision",
    "description": "Describes the intention of how one or more healthcare professionals plan to deliver care for a patient, group, or community."
  },
  {
    "code": "CareTeam",
    "display": "CareTeam Resource",
    "system": "HL7 FHIR",
    "category": "Care Provision",
    "description": "The group of people and/or organizations who plan to participate in the coordination and delivery of care for a patient."
  },
  {
    "code": "Goal",
    "display": "Goal Resource",
    "system": "HL7 FHIR",
    "category": "Care Provision",
    "description": "Describes the intended objective(s) for a patient, group or organization care (e.g. weight loss target, target HbA1c < 7.0%)."
  },
  {
    "code": "ServiceRequest",
    "display": "ServiceRequest Resource",
    "system": "HL7 FHIR",
    "category": "Care Provision",
    "description": "A record of a request for service such as diagnostic investigations, clinical consultations, or therapies to be executed."
  },
  {
    "code": "NutritionOrder",
    "display": "NutritionOrder Resource",
    "system": "HL7 FHIR",
    "category": "Care Provision",
    "description": "A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient."
  },
  {
    "code": "RiskAssessment",
    "display": "RiskAssessment Resource",
    "system": "HL7 FHIR",
    "category": "Clinical Summary",
    "description": "An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome."
  },
  {
    "code": "FamilyMemberHistory",
    "display": "FamilyMemberHistory Resource",
    "system": "HL7 FHIR",
    "category": "Clinical Summary",
    "description": "Significant health events and conditions for a person related to the patient relevant to hereditary disease risks."
  },
  {
    "code": "ClinicalImpression",
    "display": "ClinicalImpression Resource",
    "system": "HL7 FHIR",
    "category": "Diagnostics",
    "description": "A record of a clinical assessment performed to determine what problem(s) may affect the patient and baseline status."
  },
  {
    "code": "Coverage",
    "display": "Coverage Resource",
    "system": "HL7 FHIR",
    "category": "Financial",
    "description": "Financial instrument which may be used to pay for healthcare expenses (health insurance policies, public benefit plans)."
  },
  {
    "code": "DocumentReference",
    "display": "DocumentReference Resource",
    "system": "HL7 FHIR",
    "category": "Foundation / Documents",
    "description": "A reference to a document of any kind for any purpose (clinical discharge summaries, scanned intake records, PDF charts)."
  },
  {
    "code": "Binary",
    "display": "Binary Resource",
    "system": "HL7 FHIR",
    "category": "Foundation",
    "description": "A resource that contains raw arbitrary content such as text, images, or documents without FHIR serialization."
  },
  {
    "code": "Bundle",
    "display": "Bundle Resource",
    "system": "HL7 FHIR",
    "category": "Foundation",
    "description": "A container for a collection of FHIR resources packaged together for transactions, messages, or clinical search results."
  }
];

export const CLINICAL_PROCEDURES_DATA: StandardTerminologyEntry[] = [
  {
    "code": "KAY.00",
    "display": "Coronary artery bypass grafting (CABG)",
    "system": "WHO ICHI",
    "category": "Cardiovascular Interventions",
    "description": "Surgical revascularization of ischemic myocardium using harvested arterial or venous graft conduits."
  },
  {
    "code": "KAA.00",
    "display": "Appendectomy",
    "system": "WHO ICHI",
    "category": "Digestive System Interventions",
    "description": "Laparoscopic or open surgical excision of an acutely inflamed vermiform appendix."
  },
  {
    "code": "PAG.00",
    "display": "Hemodialysis",
    "system": "WHO ICHI",
    "category": "Renal / Metabolic Interventions",
    "description": "Extracorporeal clearance of metabolic waste products and excess fluid across a semipermeable dialyzer membrane in ESRD."
  },
  {
    "code": "AAA.00",
    "display": "Electrocardiogram (ECG)",
    "system": "WHO ICHI",
    "category": "Diagnostic Cardiac Interventions",
    "description": "Non-invasive graphic recording of electrical potentials generated by heart muscle excitation and conduction."
  },
  {
    "code": "LAA.00",
    "display": "Colonoscopy",
    "system": "WHO ICHI",
    "category": "Digestive Endoscopic Interventions",
    "description": "Endoscopic visualization of the entire large bowel lumen from the cecum to the rectum with mucosal biopsy capability."
  },
  {
    "code": "MAA.00",
    "display": "Percutaneous coronary intervention (PCI)",
    "system": "WHO ICHI",
    "category": "Cardiovascular Interventions",
    "description": "Catheter-based balloon angioplasty and drug-eluting stent implantation restoring lumen patency in stenotic coronary arteries."
  },
  {
    "code": "NAB.00",
    "display": "Total hip arthroplasty (THA)",
    "system": "WHO ICHI",
    "category": "Musculoskeletal Interventions",
    "description": "Surgical replacement of the acetabular cup and femoral head with prosthetic components for severe end-stage osteoarthritis."
  },
  {
    "code": "FAA.00",
    "display": "Tracheostomy",
    "system": "WHO ICHI",
    "category": "Respiratory Interventions",
    "description": "Surgical creation of an opening into the trachea through the neck to secure an airway during prolonged mechanical ventilation."
  },
  {
    "code": "DAA.00",
    "display": "Upper gastrointestinal endoscopy (OGD)",
    "system": "WHO ICHI",
    "category": "Digestive Diagnostic Interventions",
    "description": "Flexible fiberoptic inspection of the esophagus, stomach, and duodenum for peptic ulceration, varices, and malignancy."
  },
  {
    "code": "CAA.00",
    "display": "Coronary arteriography",
    "system": "WHO ICHI",
    "category": "Cardiovascular Diagnostic Interventions",
    "description": "Selective contrast injection into coronary ostia with cineangiographic recording to localize hemodynamically significant stenosis."
  },
  {
    "code": "EAA.00",
    "display": "Bronchoscopy",
    "system": "WHO ICHI",
    "category": "Respiratory Diagnostic Interventions",
    "description": "Direct visual inspection of the tracheobronchial tree with flexible bronchoscope including bronchoalveolar lavage."
  },
  {
    "code": "GAA.00",
    "display": "Cholecystectomy",
    "system": "WHO ICHI",
    "category": "Digestive System Interventions",
    "description": "Surgical removal of the gallbladder indicated for symptomatic cholelithiasis, acute cholecystitis, and biliary colic."
  },
  {
    "code": "HAA.00",
    "display": "Cesarean section",
    "system": "WHO ICHI",
    "category": "Obstetric Interventions",
    "description": "Surgical delivery of a fetus through incisions made through the maternal abdominal wall and uterine musculature."
  },
  {
    "code": "JAA.00",
    "display": "Cataract extraction and intraocular lens implantation",
    "system": "WHO ICHI",
    "category": "Eye Interventions",
    "description": "Phacoemulsification of an opacified crystalline lens followed by implantation of an artificial foldable intraocular lens."
  },
  {
    "code": "RAA.00",
    "display": "Total knee arthroplasty (TKA)",
    "system": "WHO ICHI",
    "category": "Musculoskeletal Interventions",
    "description": "Prosthetic resurfacing of femoral, tibial, and patellar articular surfaces for severe tricompartmental osteoarthritis."
  },
  {
    "code": "SAA.00",
    "display": "Lumbar puncture (Spinal tap)",
    "system": "WHO ICHI",
    "category": "Nervous System Diagnostic Interventions",
    "description": "Diagnostic sampling of cerebrospinal fluid (CSF) from the lumbar subarachnoid space for infection, hemorrhage, or pressure."
  },
  {
    "code": "TAA.00",
    "display": "Bone marrow aspiration and trephine biopsy",
    "system": "WHO ICHI",
    "category": "Hematological Diagnostic Interventions",
    "description": "Extraction of bone marrow fluid and intact core tissue from the posterior superior iliac spine for hematological diagnosis."
  },
  {
    "code": "UAA.00",
    "display": "Renal biopsy",
    "system": "WHO ICHI",
    "category": "Urological Diagnostic Interventions",
    "description": "Percutaneous ultrasound-guided core needle sampling of renal parenchyma for histological classification of glomerulonephritis."
  },
  {
    "code": "VAA.00",
    "display": "Thyroidectomy",
    "system": "WHO ICHI",
    "category": "Endocrine Surgical Interventions",
    "description": "Partial or total surgical excision of the thyroid gland for thyroid carcinoma, toxic multinodular goiter, or Graves disease."
  },
  {
    "code": "WAA.00",
    "display": "Mastectomy",
    "system": "WHO ICHI",
    "category": "Oncological Surgical Interventions",
    "description": "Surgical removal of breast tissue with or without axillary lymph node dissection for invasive breast carcinoma."
  }
];
