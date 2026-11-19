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
  sideEffects?: string;
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
  sideEffects?: string;
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
    "route": "Oral",
    "sideEffects": "Nausea, diarrhea, abdominal bloating, anorexia, metallic taste, vitamin B12 deficiency. Rare/Black Box: Lactic acidosis (in renal impairment or hypoxia)."
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
    "route": "Oral",
    "sideEffects": "Nausea, diarrhea, abdominal bloating, anorexia, metallic taste, vitamin B12 deficiency. Rare/Black Box: Lactic acidosis (in renal impairment or hypoxia)."
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
    "route": "Oral",
    "sideEffects": "Nausea, diarrhea, abdominal bloating, anorexia, metallic taste, vitamin B12 deficiency. Rare/Black Box: Lactic acidosis (in renal impairment or hypoxia)."
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
    "route": "Oral",
    "sideEffects": "Headache, diarrhea, constipation, nausea, abdominal pain, flatulence. Long-term: Hypomagnesemia, vitamin B12 deficiency, bone fracture risk, Clostridioides difficile colitis."
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
    "route": "Oral",
    "sideEffects": "Headache, diarrhea, nausea, abdominal discomfort, flatulence. Long-term: Hypomagnesemia, fundic gland polyps, subacute cutaneous lupus erythematosus, interstitial nephritis."
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
    "route": "Oral",
    "sideEffects": "Hypoglycemia, mild gastrointestinal upset (nausea, epigastric fullness), weight gain, rare cutaneous hypersensitivity rash, reversible hepatic enzyme elevation."
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
    "route": "Oral",
    "sideEffects": "Hypoglycemia, dizziness, asthenia, headache, nausea, mild weight gain. Rare: Hemolytic anemia (G6PD deficiency), allergic skin reactions."
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
    "route": "Oral",
    "sideEffects": "Upper respiratory tract infection, nasopharyngitis, headache. Rare: Acute pancreatitis, joint pain (severe arthralgia), bullous pemphigoid, hypersensitivity reactions."
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
    "route": "Oral",
    "sideEffects": "Genital mycotic infections (vulvovaginal candidiasis, balanitis), urinary tract infections, polyuria, volume depletion/hypotension. Rare: Euglycemic DKA, Fournier gangrene."
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
    "route": "Oral",
    "sideEffects": "Vulvovaginal candidiasis, urinary tract infections, increased urination, thirst, orthostatic hypotension. Rare: Diabetic ketoacidosis, necrotizing fasciitis of the perineum."
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
    "route": "Subcutaneous",
    "sideEffects": "Nausea, vomiting, diarrhea, abdominal pain, constipation, dyspepsia, decreased appetite. Rare/Black Box: Thyroid C-cell tumors in rodents, acute pancreatitis, gallbladder disease."
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
    "route": "Subcutaneous",
    "sideEffects": "Hypoglycemia (highest risk), lipohypertrophy or lipoatrophy at injection sites, weight gain, peripheral edema, rare systemic allergic/anaphylactic reactions."
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
    "route": "Subcutaneous",
    "sideEffects": "Rapid-onset hypoglycemia, localized injection site reactions (erythema, lipodystrophy), hypokalemia, weight gain, rare insulin antibody formation."
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
    "route": "Oral",
    "sideEffects": "Headache, constipation, diarrhea, fatigue, sensation of warmth or flushing. Rare: Prolongation of QT interval, serotonin syndrome (when combined with serotonergic drugs)."
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
    "route": "Oral",
    "sideEffects": "Constipation, abdominal cramps, nausea, dizziness, drowsiness, dry mouth. Black box: Torsades de pointes and cardiac arrest at supra-therapeutic doses."
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
    "route": "Oral",
    "sideEffects": "Dyspepsia, epigastric discomfort, gastrointestinal bleeding, occult blood loss, easy bruising, tinnitus at high doses. Black box/Warning: Reye syndrome in pediatric viral illness."
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
    "route": "Oral",
    "sideEffects": "Bleeding (hematoma, epistaxis, GI hemorrhage), dyspepsia, abdominal pain, diarrhea, purpura. Black box: Reduced antiplatelet effect in CYP2C19 poor metabolizers."
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
    "route": "Oral",
    "sideEffects": "Major and minor hemorrhage (epistaxis, hematuria, GI bleeding), tissue necrosis/gangrene (purple toe syndrome). Black box: Fatal hemorrhage risk; requires INR monitoring."
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
    "route": "Oral",
    "sideEffects": "Bleeding (epistaxis, hematuria, GI hemorrhage, hematoma), anemia, nausea. Black box: Premature discontinuation increases thrombotic risk; spinal/epidural hematoma risk."
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
    "route": "Oral",
    "sideEffects": "Bleeding complications, abdominal pain, dyspepsia, peripheral edema, elevated transaminases. Black box: Epidural hematoma with neuraxial anesthesia; rebound thrombosis if abruptly stopped."
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
    "route": "Subcutaneous",
    "sideEffects": "Hemorrhage (injection site hematoma), thrombocytopenia (Heparin-Induced Thrombocytopenia - HIT), local irritation. Black box: Spinal/epidural hematomas with neuraxial anesthesia."
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
    "route": "Oral",
    "sideEffects": "Gastrointestinal irritation, nausea, epigastric discomfort, constipation, dark or black stools, diarrhea, temporary dental staining (liquid form)."
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
    "route": "Oral",
    "sideEffects": "Generally well-tolerated. Rare: Gastrointestinal disturbances (nausea, abdominal distension), allergic skin reactions (erythema, pruritus). May mask pernicious anemia."
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
    "route": "Oral",
    "sideEffects": "Peripheral lower-extremity edema, facial flushing, headache, palpitations, dizziness, fatigue, gingival hyperplasia (with prolonged use)."
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
    "route": "Oral",
    "sideEffects": "Peripheral lower-extremity edema, facial flushing, headache, palpitations, dizziness, fatigue, gingival hyperplasia (with prolonged use)."
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
    "route": "Oral",
    "sideEffects": "Myalgia, arthralgia, nasopharyngitis, dyspepsia, diarrhea, elevated serum transaminases. Rare/Severe: Rhabdomyolysis, immune-mediated necrotizing myopathy, elevated HbA1c."
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
    "route": "Oral",
    "sideEffects": "Myalgia, arthralgia, nasopharyngitis, dyspepsia, diarrhea, elevated serum transaminases. Rare/Severe: Rhabdomyolysis, immune-mediated necrotizing myopathy, elevated HbA1c."
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
    "route": "Oral",
    "sideEffects": "Myalgia, headache, asthenia, abdominal pain, nausea, proteinuria. Rare/Severe: Rhabdomyolysis with acute kidney injury, hepatic dysfunction."
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
    "route": "Oral",
    "sideEffects": "Dizziness, orthostatic hypotension, hyperkalemia, fatigue, upper respiratory congestion. Black box: Fetal toxicity; contraindicated in pregnancy."
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
    "route": "Oral",
    "sideEffects": "Dizziness, back pain, sinus congestion, diarrhea, hyperkalemia, hypotension. Black box: Fetal toxicity; contraindicated in pregnancy."
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
    "route": "Oral",
    "sideEffects": "Persistent dry non-productive cough (bradykinin accumulation), dizziness, hypotension, hyperkalemia, headache. Black box: Fetal toxicity. Rare: Angioedema."
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
    "route": "Oral",
    "sideEffects": "Persistent dry cough, dizziness, hypotension, hyperkalemia, headache, fatigue, nausea. Black box: Fetal toxicity. Rare: Life-threatening angioedema (face, lips, larynx)."
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
    "route": "Oral",
    "sideEffects": "Bradycardia, cold extremities, dizziness, fatigue, hypotension, bronchospasm in asthmatic patients, masked hypoglycemia symptoms."
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
    "route": "Oral",
    "sideEffects": "Bradycardia, hypotension, fatigue, dizziness, depression, cold extremities, shortness of breath. Black box: Severe angina exacerbation/MI upon abrupt cessation."
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
    "route": "Oral",
    "sideEffects": "Dizziness, fatigue, hypotension, bradycardia, weight gain, worsening heart failure during titration, fluid retention. Masked hypoglycemia symptoms."
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
    "route": "Oral",
    "sideEffects": "Hypokalemia, hyponatremia, hypomagnesemia, hyperuricemia (gout flare), prerenal azotemia, orthostatic hypotension, ototoxicity (at high IV doses)."
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
    "route": "Oral",
    "sideEffects": "Hypokalemia, hyponatremia, hypomagnesemia, hyperuricemia (gout flare), prerenal azotemia, orthostatic hypotension, ototoxicity (at high IV doses)."
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
    "route": "Oral",
    "sideEffects": "Hyperkalemia, gynecomastia (in males), menstrual irregularities, breast tenderness, dehydration, hyponatremia, dizziness, gastrointestinal cramping."
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
    "route": "Sublingual",
    "sideEffects": "Throbbing headache (very common due to cerebral vasodilation), flushing, orthostatic dizziness, tachycardia, hypotension. Syncope with phosphodiesterase-5 inhibitors."
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
    "route": "Oral",
    "sideEffects": "Headache, facial flushing, dyspepsia, nasal congestion, visual color distortion (cyanopsia), back pain. Contraindicated with nitrates (severe refractory hypotension)."
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
    "route": "Oral",
    "sideEffects": "Orthostatic hypotension, dizziness, headache, asthenia, retrograde ejaculation, rhinitis, floppy iris syndrome during cataract surgery."
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
    "route": "Oral",
    "sideEffects": "Generally well-tolerated at physiological replacement. Overreplacement: Tachycardia, palpitations, cardiac arrhythmias, insomnia, tremors, weight loss, heat intolerance, bone loss."
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
    "route": "Oral",
    "sideEffects": "Generally well-tolerated at physiological replacement. Overreplacement: Tachycardia, palpitations, cardiac arrhythmias, insomnia, tremors, weight loss, heat intolerance, bone loss."
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
    "route": "Oral",
    "sideEffects": "Insomnia, fluid retention, hypertension, weight gain, hyperglycemia, mood changes. Long-term: Cushingoid features, osteoporosis, immunosuppression, adrenal suppression."
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
    "route": "Injectable / IV",
    "sideEffects": "Insomnia, emotional lability, increased appetite, elevated blood glucose, sodium/water retention. Long-term: Adrenal suppression, avascular necrosis, opportunistic infections."
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
    "route": "Oral",
    "sideEffects": "Diarrhea, nausea, vomiting, morbilliform skin rash, urticaria. Rare/Severe: Anaphylaxis, Clostridioides difficile-associated diarrhea, Stevens-Johnson syndrome."
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
    "route": "Oral",
    "sideEffects": "Diarrhea, nausea, vomiting, morbilliform skin rash, urticaria. Rare/Severe: Anaphylaxis, Clostridioides difficile-associated diarrhea, Stevens-Johnson syndrome."
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
    "route": "Oral",
    "sideEffects": "Diarrhea (frequent due to clavulanate), nausea, vomiting, candidiasis (oral/vaginal), elevated ALT/AST. Rare: Cholestatic jaundice, hepatitis, severe allergic reactions."
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
    "route": "Injectable / IV",
    "sideEffects": "Diarrhea, injection site pain/phlebitis, thrombocytosis, rash, elevated transaminases. Biliary sludging (pseudolithiasis in pediatrics), hypersensitivity."
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
    "route": "Oral",
    "sideEffects": "Nausea, diarrhea, abdominal cramps, vomiting, flatulence. Rare: QT prolongation and torsades de pointes, cholestatic jaundice, hepatotoxicity."
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
    "route": "Oral",
    "sideEffects": "Nausea, diarrhea, dyspepsia, headache, dizziness, insomnia. Black box: Tendinitis and tendon rupture (Achilles), peripheral neuropathy, CNS toxicities, QT prolongation."
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
    "route": "Oral",
    "sideEffects": "Photosensitivity, pill-induced esophagitis, nausea, epigastric distress, diarrhea. Tooth discoloration and enamel hypoplasia in children under 8 and pregnancy."
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
    "route": "Oral",
    "sideEffects": "Metallic taste, nausea, abdominal discomfort, dark/reddish-brown urine, peripheral neuropathy (with prolonged use). Disulfiram-like ethanol intolerance reaction."
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
    "route": "Oral",
    "sideEffects": "Headache, nausea, abdominal pain, diarrhea, elevated transaminases, rash. Rare: QT prolongation, hepatic failure, toxic epidermal necrolysis."
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
    "route": "Oral",
    "sideEffects": "Dyspepsia, epigastric pain, nausea, fluid retention, hypertension. Black box: Increased risk of cardiovascular thrombotic events (MI, stroke), GI ulceration and bleeding."
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
    "route": "Oral",
    "sideEffects": "Gastrointestinal pain, dyspepsia, nausea, diarrhea, elevated transaminases, fluid retention. Black box: Serious cardiovascular thrombotic risk, severe GI hemorrhage."
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
    "route": "Oral",
    "sideEffects": "Headache, hypertension, dyspepsia, diarrhea, peripheral edema. Black box: Cardiovascular thrombotic events, serious GI events. Avoid in sulfonamide allergy."
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
    "route": "Oral",
    "sideEffects": "Maculopapular rash, pruritus, acute gout flare (upon initiation), diarrhea, nausea. Severe/Life-threatening: Allopurinol hypersensitivity syndrome (DRESS, SJS/TEN)."
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
    "route": "Oral",
    "sideEffects": "Well-tolerated at therapeutic dosages. Rare: Hypersensitivity skin rash. Overdose/Toxic: Acute hepatic necrosis, irreversible liver failure, renal tubular necrosis."
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
    "route": "Oral",
    "sideEffects": "Well-tolerated at therapeutic dosages. Rare: Hypersensitivity skin rash. Overdose/Toxic: Acute hepatic necrosis, irreversible liver failure, renal tubular necrosis."
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
    "route": "Oral",
    "sideEffects": "Nausea, dizziness, constipation, somnolence, sweating, headache, vomiting, xerostomia. Black box: Opioid addiction, abuse, misuse, life-threatening respiratory depression, serotonin syndrome, seizure risk."
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
    "route": "Oral",
    "sideEffects": "Dizziness, somnolence, peripheral edema, blurred vision, weight gain, xerostomia, cognitive slowing. Black box: Abuse potential, respiratory depression with opioids."
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
    "route": "Oral",
    "sideEffects": "Somnolence, dizziness, ataxia, fatigue, peripheral edema, nystagmus, viral infection. Black box: Respiratory depression when combined with CNS depressants."
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
    "route": "Oral",
    "sideEffects": "Nausea, diarrhea, insomnia, somnolence, dry mouth, sexual dysfunction (ejaculatory delay, anorgasmia). Black box: Suicidal ideation in children/young adults; serotonin syndrome."
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
    "route": "Oral",
    "sideEffects": "Nausea, insomnia, somnolence, sexual dysfunction, diaphoresis, fatigue, tremor. Black box: Increased suicidality risk in adolescents; QT prolongation at doses >20mg."
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
    "route": "Oral",
    "sideEffects": "Drowsiness, sedation, dizziness, ataxia, weakness, confusion. Black box: Concomitant use with opioids may cause profound sedation, respiratory depression, coma, death; dependence."
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
    "route": "Inhalation",
    "sideEffects": "Fine skeletal muscle tremor (especially hands), tachycardia, palpitations, headache, nervousness, hypokalemia at high doses. Paradoxical bronchospasm (rare)."
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
    "route": "Inhalation",
    "sideEffects": "Oral candidiasis (thrush), dysphonia (hoarseness), cough, throat irritation. Rinse mouth after inhalation. Long-term high-dose: Systemic corticosteroid effects."
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
    "route": "Inhalation",
    "sideEffects": "Oral candidiasis, tremor, palpitations, headache, throat irritation, upper respiratory tract infection. Rinse mouth after use. Potential cardiovascular stimulation."
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
    "route": "Oral",
    "sideEffects": "Headache, abdominal pain, dyspepsia, fever, cough. Black box: Neuropsychiatric events (agitation, aggression, depression, sleep disturbances, suicidal ideation)."
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
    "route": "Oral",
    "sideEffects": "Somnolence (mild, dose-dependent), fatigue, dry mouth, pharyngitis, dizziness. Generally non-sedating at standard 10mg dose, but sedation may occur."
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
    "route": "Oral",
    "sideEffects": "Headache, somnolence, dizziness, nausea. Highly selective peripheral H1 antagonist with minimal blood-brain barrier penetration; very low sedation profile."
  }
];

export const CLINICAL_UCUM_DATA: StandardTerminologyEntry[] = [
  {
    "code": "mg",
    "display": "milligram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mg (milligram). Validated clinical measurement specification."
  },
  {
    "code": "mg/mg",
    "display": "milligram per milligram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mg/mg (milligram per milligram). Validated clinical measurement specification."
  },
  {
    "code": "mg/m2",
    "display": "milligram per square meter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mg/m2 (milligram per square meter). Validated clinical measurement specification."
  },
  {
    "code": "mg/h",
    "display": "milligram per hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mg/h (milligram per hour). Validated clinical measurement specification."
  },
  {
    "code": "mg/g",
    "display": "milligram per gram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mg/g (milligram per gram). Validated clinical measurement specification."
  },
  {
    "code": "mg/kg",
    "display": "milligram per kilogram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mg/kg (milligram per kilogram). Validated clinical measurement specification."
  },
  {
    "code": "mg/mmol",
    "display": "milligram per millimole",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mg/mmol (milligram per millimole). Validated clinical measurement specification."
  },
  {
    "code": "mg/dL",
    "display": "milligram per deciliter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mg/dL (milligram per deciliter). Validated clinical measurement specification."
  },
  {
    "code": "mg/L",
    "display": "milligram per liter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mg/L (milligram per liter). Validated clinical measurement specification."
  },
  {
    "code": "mg/min",
    "display": "milligram per minute",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mg/min (milligram per minute). Validated clinical measurement specification."
  },
  {
    "code": "mg/mL",
    "display": "milligram per milliliter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mg/mL (milligram per milliliter). Validated clinical measurement specification."
  },
  {
    "code": "mg/wk",
    "display": "milligram per week",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mg/wk (milligram per week). Validated clinical measurement specification."
  },
  {
    "code": "mg/(10.h)",
    "display": "milligram per 10 hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mg/(10.h) (milligram per 10 hour). Validated clinical measurement specification."
  },
  {
    "code": "mg/kg/min",
    "display": "milligram per kilogram per minute",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mg/kg/min (milligram per kilogram per minute). Validated clinical measurement specification."
  },
  {
    "code": "mg/(2.h)",
    "display": "milligram per 2 hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mg/(2.h) (milligram per 2 hour). Validated clinical measurement specification."
  },
  {
    "code": "mg/(6.h)",
    "display": "milligram per 6 hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mg/(6.h) (milligram per 6 hour). Validated clinical measurement specification."
  },
  {
    "code": "mg/d",
    "display": "milligram per day",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mg/d (milligram per day). Validated clinical measurement specification."
  },
  {
    "code": "mg/kg/h",
    "display": "milligram per kilogram per hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mg/kg/h (milligram per kilogram per hour). Validated clinical measurement specification."
  },
  {
    "code": "mg/m3",
    "display": "milligram per cubic meter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mg/m3 (milligram per cubic meter). Validated clinical measurement specification."
  },
  {
    "code": "mg/(24.h)",
    "display": "milligram per 24 hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mg/(24.h) (milligram per 24 hour). Validated clinical measurement specification."
  },
  {
    "code": "mg/kg/(8.h)",
    "display": "milligram per kilogram per 8 hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mg/kg/(8.h) (milligram per kilogram per 8 hour). Validated clinical measurement specification."
  },
  {
    "code": "mg/kg/d",
    "display": "milligram per kilogram per day",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mg/kg/d (milligram per kilogram per day). Validated clinical measurement specification."
  },
  {
    "code": "mg/(12.h)",
    "display": "milligram per 12 hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mg/(12.h) (milligram per 12 hour). Validated clinical measurement specification."
  },
  {
    "code": "mg/(72.h)",
    "display": "milligram per 72 hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mg/(72.h) (milligram per 72 hour). Validated clinical measurement specification."
  },
  {
    "code": "mg/(8.h)",
    "display": "milligram per 8 hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mg/(8.h) (milligram per 8 hour). Validated clinical measurement specification."
  },
  {
    "code": "/mg",
    "display": "per milligram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: /mg (per milligram). Validated clinical measurement specification."
  },
  {
    "code": "ug/mg",
    "display": "microgram per milligram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ug/mg (microgram per milligram). Validated clinical measurement specification."
  },
  {
    "code": "fmol/mg",
    "display": "femtomole per milligram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: fmol/mg (femtomole per milligram). Validated clinical measurement specification."
  },
  {
    "code": "ng/mg",
    "display": "nanogram per milligram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ng/mg (nanogram per milligram). Validated clinical measurement specification."
  },
  {
    "code": "pg/mg",
    "display": "picogram per milligram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: pg/mg (picogram per milligram). Validated clinical measurement specification."
  },
  {
    "code": "g/mg",
    "display": "gram per milligram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: g/mg (gram per milligram). Validated clinical measurement specification."
  },
  {
    "code": "nmol/mg",
    "display": "nanomole per milligram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: nmol/mg (nanomole per milligram). Validated clinical measurement specification."
  },
  {
    "code": "nmol/mg{prot}",
    "display": "nanomole per milligram of protein",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: nmol/mg{prot} (nanomole per milligram of protein). Validated clinical measurement specification."
  },
  {
    "code": "umol/mg",
    "display": "micromole per milligram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: umol/mg (micromole per milligram). Validated clinical measurement specification."
  },
  {
    "code": "mU/mg",
    "display": "milli enzyme unit per milligram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mU/mg (milli enzyme unit per milligram). Validated clinical measurement specification."
  },
  {
    "code": "ng/mg/h",
    "display": "nanogram per milligram per hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ng/mg/h (nanogram per milligram per hour). Validated clinical measurement specification."
  },
  {
    "code": "nmol/mg/h",
    "display": "nanomole per milligram per hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: nmol/mg/h (nanomole per milligram per hour). Validated clinical measurement specification."
  },
  {
    "code": "[EU]",
    "display": "Ehrlich units (urobilinogen)",
    "system": "UCUM",
    "category": "Enzyme & Biological Activity",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [EU] (Ehrlich units (urobilinogen)). Validated clinical measurement specification."
  },
  {
    "code": "meq/g",
    "display": "milliequivalent per gram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: meq/g (milliequivalent per gram). Validated clinical measurement specification."
  },
  {
    "code": "mL/kg/d",
    "display": "milliliter per kilogram per day",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mL/kg/d (milliliter per kilogram per day). Validated clinical measurement specification."
  },
  {
    "code": "g",
    "display": "gram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: g (gram). Validated clinical measurement specification."
  },
  {
    "code": "G",
    "display": "Gauss",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: G (Gauss). Validated clinical measurement specification."
  },
  {
    "code": "g/kg ",
    "display": "gram per kilogram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: g/kg  (gram per kilogram). Validated clinical measurement specification."
  },
  {
    "code": "g/mmol",
    "display": "gram per millimole",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: g/mmol (gram per millimole). Validated clinical measurement specification."
  },
  {
    "code": "g/min",
    "display": "gram per minute",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: g/min (gram per minute). Validated clinical measurement specification."
  },
  {
    "code": "g/mL",
    "display": "gram per milliliter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: g/mL (gram per milliliter). Validated clinical measurement specification."
  },
  {
    "code": "g/m2",
    "display": "gram per square meter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: g/m2 (gram per square meter). Validated clinical measurement specification."
  },
  {
    "code": "g/kg/h",
    "display": "gram per kilogram per hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: g/kg/h (gram per kilogram per hour). Validated clinical measurement specification."
  },
  {
    "code": "g/kg/min",
    "display": "gram per kilogram per minute",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: g/kg/min (gram per kilogram per minute). Validated clinical measurement specification."
  },
  {
    "code": "g/kg/(8.h)",
    "display": "gram per kilogram per 8 hour ",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: g/kg/(8.h) (gram per kilogram per 8 hour ). Validated clinical measurement specification."
  },
  {
    "code": "g/cm3",
    "display": "gram per cubic centimeter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: g/cm3 (gram per cubic centimeter). Validated clinical measurement specification."
  },
  {
    "code": "g/h/m2",
    "display": "gram per hour per square meter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: g/h/m2 (gram per hour per square meter). Validated clinical measurement specification."
  },
  {
    "code": "g/g",
    "display": "gram per gram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: g/g (gram per gram). Validated clinical measurement specification."
  },
  {
    "code": "g/(100.g)",
    "display": "gram per 100 gram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: g/(100.g) (gram per 100 gram). Validated clinical measurement specification."
  },
  {
    "code": "g%",
    "display": "gram percent",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: g% (gram percent). Validated clinical measurement specification."
  },
  {
    "code": "g.m",
    "display": "gram meter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: g.m (gram meter). Validated clinical measurement specification."
  },
  {
    "code": "g/d",
    "display": "gram per day",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: g/d (gram per day). Validated clinical measurement specification."
  },
  {
    "code": "g/dL",
    "display": "gram per deciliter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: g/dL (gram per deciliter). Validated clinical measurement specification."
  },
  {
    "code": "g/h",
    "display": "gram per hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: g/h (gram per hour). Validated clinical measurement specification."
  },
  {
    "code": "g/L",
    "display": "gram per liter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: g/L (gram per liter). Validated clinical measurement specification."
  },
  {
    "code": "g/(12.h)",
    "display": "gram per 12 hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: g/(12.h) (gram per 12 hour). Validated clinical measurement specification."
  },
  {
    "code": "g/(24.h)",
    "display": "gram per 24 hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: g/(24.h) (gram per 24 hour). Validated clinical measurement specification."
  },
  {
    "code": "g/(3.d)",
    "display": "gram per 3 days",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: g/(3.d) (gram per 3 days). Validated clinical measurement specification."
  },
  {
    "code": "g/(4.h)",
    "display": "gram per 4 hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: g/(4.h) (gram per 4 hour). Validated clinical measurement specification."
  },
  {
    "code": "g/(48.h)",
    "display": "gram per 48 hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: g/(48.h) (gram per 48 hour). Validated clinical measurement specification."
  },
  {
    "code": "g/(5.h)",
    "display": "gram per 5 hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: g/(5.h) (gram per 5 hour). Validated clinical measurement specification."
  },
  {
    "code": "g/(6.h)",
    "display": "gram per 6 hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: g/(6.h) (gram per 6 hour). Validated clinical measurement specification."
  },
  {
    "code": "g/(72.h)",
    "display": "gram per 72 hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: g/(72.h) (gram per 72 hour). Validated clinical measurement specification."
  },
  {
    "code": "g/kg/d",
    "display": "gram per kilogram per day",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: g/kg/d (gram per kilogram per day). Validated clinical measurement specification."
  },
  {
    "code": "Gal",
    "display": "Gal",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: Gal (Gal). Validated clinical measurement specification."
  },
  {
    "code": "Gb",
    "display": "Gilbert",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: Gb (Gilbert). Validated clinical measurement specification."
  },
  {
    "code": "gf",
    "display": "gram-force",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: gf (gram-force). Validated clinical measurement specification."
  },
  {
    "code": "gon",
    "display": "gon",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: gon (gon). Validated clinical measurement specification."
  },
  {
    "code": "Gy",
    "display": "gray",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: Gy (gray). Validated clinical measurement specification."
  },
  {
    "code": "/g",
    "display": "per gram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: /g (per gram). Validated clinical measurement specification."
  },
  {
    "code": "[G]",
    "display": "Newtonian constant of gravitation",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [G] (Newtonian constant of gravitation). Validated clinical measurement specification."
  },
  {
    "code": "[g]",
    "display": "standard acceleration of free fall",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [g] (standard acceleration of free fall). Validated clinical measurement specification."
  },
  {
    "code": "umol/g",
    "display": "micromole per gram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: umol/g (micromole per gram). Validated clinical measurement specification."
  },
  {
    "code": "ug/g",
    "display": "microgram per gram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ug/g (microgram per gram). Validated clinical measurement specification."
  },
  {
    "code": "[IU]/g",
    "display": "international unit per gram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [IU]/g (international unit per gram). Validated clinical measurement specification."
  },
  {
    "code": "U/g",
    "display": "enzyme unit per gram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: U/g (enzyme unit per gram). Validated clinical measurement specification."
  },
  {
    "code": "a_g",
    "display": "mean Gregorian year",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: a_g (mean Gregorian year). Validated clinical measurement specification."
  },
  {
    "code": "fmol/g",
    "display": "femtomole per gram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: fmol/g (femtomole per gram). Validated clinical measurement specification."
  },
  {
    "code": "kU/g",
    "display": "kilo enzyme unit per gram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: kU/g (kilo enzyme unit per gram). Validated clinical measurement specification."
  },
  {
    "code": "mmol/g",
    "display": "millimole per gram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mmol/g (millimole per gram). Validated clinical measurement specification."
  },
  {
    "code": "mo_g",
    "display": "mean Gregorian month",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mo_g (mean Gregorian month). Validated clinical measurement specification."
  },
  {
    "code": "mU/g",
    "display": "milli enzyme unit per gram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mU/g (milli enzyme unit per gram). Validated clinical measurement specification."
  },
  {
    "code": "ug",
    "display": "microgram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ug (microgram). Validated clinical measurement specification."
  },
  {
    "code": "ug/(100.g)",
    "display": "microgram per 100 gram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ug/(100.g) (microgram per 100 gram). Validated clinical measurement specification."
  },
  {
    "code": "ug/d",
    "display": "microgram per day",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ug/d (microgram per day). Validated clinical measurement specification."
  },
  {
    "code": "ug/L",
    "display": "microgram per liter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ug/L (microgram per liter). Validated clinical measurement specification."
  },
  {
    "code": "ug/kg",
    "display": "microgram per kilogram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ug/kg (microgram per kilogram). Validated clinical measurement specification."
  },
  {
    "code": "ug/min",
    "display": "microgram per minute",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ug/min (microgram per minute). Validated clinical measurement specification."
  },
  {
    "code": "ug/mmol",
    "display": "microgram per millimole",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ug/mmol (microgram per millimole). Validated clinical measurement specification."
  },
  {
    "code": "ug/ng",
    "display": "microgram per nanogram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ug/ng (microgram per nanogram). Validated clinical measurement specification."
  },
  {
    "code": "ug/dL",
    "display": "microgram per deciliter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ug/dL (microgram per deciliter). Validated clinical measurement specification."
  },
  {
    "code": "ug/mL",
    "display": "microgram per milliliter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ug/mL (microgram per milliliter). Validated clinical measurement specification."
  },
  {
    "code": "ug/h",
    "display": "microgram per hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ug/h (microgram per hour). Validated clinical measurement specification."
  },
  {
    "code": "uL/h",
    "display": "microliter per hour",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: uL/h (microliter per hour). Validated clinical measurement specification."
  },
  {
    "code": "ug/kg/h",
    "display": "microgram per kilogram per hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ug/kg/h (microgram per kilogram per hour). Validated clinical measurement specification."
  },
  {
    "code": "ug/kg/min",
    "display": "microgram per kilogram per minute",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ug/kg/min (microgram per kilogram per minute). Validated clinical measurement specification."
  },
  {
    "code": "ug/(24.h)",
    "display": "microgram per 24 hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ug/(24.h) (microgram per 24 hour). Validated clinical measurement specification."
  },
  {
    "code": "ug/(8.h)",
    "display": "microgram per 8 hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ug/(8.h) (microgram per 8 hour). Validated clinical measurement specification."
  },
  {
    "code": "ug/kg/d",
    "display": "microgram per kilogram per day",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ug/kg/d (microgram per kilogram per day). Validated clinical measurement specification."
  },
  {
    "code": "uL/(2.h)",
    "display": "microliter per 2 hour",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: uL/(2.h) (microliter per 2 hour). Validated clinical measurement specification."
  },
  {
    "code": "ug/L/(24.h)",
    "display": "microgram per liter per 24 hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ug/L/(24.h) (microgram per liter per 24 hour). Validated clinical measurement specification."
  },
  {
    "code": "ug/m2",
    "display": "microgram per square meter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ug/m2 (microgram per square meter). Validated clinical measurement specification."
  },
  {
    "code": "ug/kg/(8.h)",
    "display": "microgram per kilogram per 8 hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ug/kg/(8.h) (microgram per kilogram per 8 hour). Validated clinical measurement specification."
  },
  {
    "code": "ug/m3",
    "display": "microgram per cubic meter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ug/m3 (microgram per cubic meter). Validated clinical measurement specification."
  },
  {
    "code": "pmol/umol",
    "display": "picomole per micromole",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: pmol/umol (picomole per micromole). Validated clinical measurement specification."
  },
  {
    "code": "kg",
    "display": "kilogram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: kg (kilogram). Validated clinical measurement specification."
  },
  {
    "code": "kg/L",
    "display": "kilogram per liter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: kg/L (kilogram per liter). Validated clinical measurement specification."
  },
  {
    "code": "kg/h",
    "display": "kilogram per hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: kg/h (kilogram per hour). Validated clinical measurement specification."
  },
  {
    "code": "kg/min",
    "display": "kilogram per minute",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: kg/min (kilogram per minute). Validated clinical measurement specification."
  },
  {
    "code": "kg/mol",
    "display": "kilogram per mole",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: kg/mol (kilogram per mole). Validated clinical measurement specification."
  },
  {
    "code": "kg/s",
    "display": "kilogram per second",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: kg/s (kilogram per second). Validated clinical measurement specification."
  },
  {
    "code": "kg/m3",
    "display": "kilogram per cubic meter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: kg/m3 (kilogram per cubic meter). Validated clinical measurement specification."
  },
  {
    "code": "kg/m2",
    "display": "kilogram per square meter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: kg/m2 (kilogram per square meter). Validated clinical measurement specification."
  },
  {
    "code": "kg/(s.m2)",
    "display": "kilogram per second per square meter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: kg/(s.m2) (kilogram per second per square meter). Validated clinical measurement specification."
  },
  {
    "code": "kg.m/s",
    "display": "kilogram meter per second",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: kg.m/s (kilogram meter per second). Validated clinical measurement specification."
  },
  {
    "code": "/kg",
    "display": "per kilogram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: /kg (per kilogram). Validated clinical measurement specification."
  },
  {
    "code": "L/kg",
    "display": "Liters per kilogram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: L/kg (Liters per kilogram). Validated clinical measurement specification."
  },
  {
    "code": "mol/kg",
    "display": "mole per kilogram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mol/kg (mole per kilogram). Validated clinical measurement specification."
  },
  {
    "code": "[IU]/kg",
    "display": "international unit per kilogram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [IU]/kg (international unit per kilogram). Validated clinical measurement specification."
  },
  {
    "code": "meq/kg",
    "display": "milliequivalent per kilogram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: meq/kg (milliequivalent per kilogram). Validated clinical measurement specification."
  },
  {
    "code": "mmol/kg",
    "display": "millimole per kilogram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mmol/kg (millimole per kilogram). Validated clinical measurement specification."
  },
  {
    "code": "mosm/kg",
    "display": "milliosmole per kilogram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mosm/kg (milliosmole per kilogram). Validated clinical measurement specification."
  },
  {
    "code": "ng/kg",
    "display": "nanogram per kilogram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ng/kg (nanogram per kilogram). Validated clinical measurement specification."
  },
  {
    "code": "umol/kg",
    "display": "micromole per kilogram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: umol/kg (micromole per kilogram). Validated clinical measurement specification."
  },
  {
    "code": "mL/kg",
    "display": "milliliter per kilogram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mL/kg (milliliter per kilogram). Validated clinical measurement specification."
  },
  {
    "code": "osm/kg",
    "display": "osmole per kilogram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: osm/kg (osmole per kilogram). Validated clinical measurement specification."
  },
  {
    "code": "10*6/kg",
    "display": "million per kilogram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: 10*6/kg (million per kilogram). Validated clinical measurement specification."
  },
  {
    "code": "[IU]/kg/d",
    "display": "international unit per kilogram per day",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [IU]/kg/d (international unit per kilogram per day). Validated clinical measurement specification."
  },
  {
    "code": "mmol/kg/h",
    "display": "millimole per kilogram per hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mmol/kg/h (millimole per kilogram per hour). Validated clinical measurement specification."
  },
  {
    "code": "ng/kg/min",
    "display": "nanogram per kilogram per minute",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ng/kg/min (nanogram per kilogram per minute). Validated clinical measurement specification."
  },
  {
    "code": "kat/kg",
    "display": "katal per kilogram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: kat/kg (katal per kilogram). Validated clinical measurement specification."
  },
  {
    "code": "meq/kg/h",
    "display": "milliequivalent per kilogram per hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: meq/kg/h (milliequivalent per kilogram per hour). Validated clinical measurement specification."
  },
  {
    "code": "mmol/kg/d",
    "display": "millimole per kilogram per day",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mmol/kg/d (millimole per kilogram per day). Validated clinical measurement specification."
  },
  {
    "code": "mmol/kg/min",
    "display": "millimole per kilogram per minute",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mmol/kg/min (millimole per kilogram per minute). Validated clinical measurement specification."
  },
  {
    "code": "mol/kg/s",
    "display": "mole per kilogram per second",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mol/kg/s (mole per kilogram per second). Validated clinical measurement specification."
  },
  {
    "code": "ng/kg/h",
    "display": "nanogram per kilogram per hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ng/kg/h (nanogram per kilogram per hour). Validated clinical measurement specification."
  },
  {
    "code": "mL/kg/h",
    "display": "milliliter per kilogram per hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mL/kg/h (milliliter per kilogram per hour). Validated clinical measurement specification."
  },
  {
    "code": "mL/kg/min",
    "display": "milliliter per kilogram per minute",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mL/kg/min (milliliter per kilogram per minute). Validated clinical measurement specification."
  },
  {
    "code": "kcal/kg/(24.h)",
    "display": "kilocalorie per kilogram per 24 hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: kcal/kg/(24.h) (kilocalorie per kilogram per 24 hour). Validated clinical measurement specification."
  },
  {
    "code": "mmol/kg/(8.h)",
    "display": "millimole per kilogram per 8 hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mmol/kg/(8.h) (millimole per kilogram per 8 hour). Validated clinical measurement specification."
  },
  {
    "code": "mL",
    "display": "milliliter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mL (milliliter). Validated clinical measurement specification."
  },
  {
    "code": "mL/min",
    "display": "milliliter per minute",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mL/min (milliliter per minute). Validated clinical measurement specification."
  },
  {
    "code": "mL/dL",
    "display": "milliliter per deciliter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mL/dL (milliliter per deciliter). Validated clinical measurement specification."
  },
  {
    "code": "mL/mbar",
    "display": "milliliter per millibar",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mL/mbar (milliliter per millibar). Validated clinical measurement specification."
  },
  {
    "code": "mL/mm",
    "display": "milliliter per millimeter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mL/mm (milliliter per millimeter). Validated clinical measurement specification."
  },
  {
    "code": "mL/s",
    "display": "milliliter per second",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mL/s (milliliter per second). Validated clinical measurement specification."
  },
  {
    "code": "mL/d",
    "display": "milliliter per day",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mL/d (milliliter per day). Validated clinical measurement specification."
  },
  {
    "code": "mL/(24.h)",
    "display": "milliliter per 24 hour",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mL/(24.h) (milliliter per 24 hour). Validated clinical measurement specification."
  },
  {
    "code": "mL/cm[H2O]",
    "display": "milliliter per centimeter of water",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mL/cm[H2O] (milliliter per centimeter of water). Validated clinical measurement specification."
  },
  {
    "code": "mL/h",
    "display": "milliliter per hour",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mL/h (milliliter per hour). Validated clinical measurement specification."
  },
  {
    "code": "mL/(10.h)",
    "display": "milliliter per 10 hour",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mL/(10.h) (milliliter per 10 hour). Validated clinical measurement specification."
  },
  {
    "code": "mL/(12.h)",
    "display": "milliliter per 12 hour",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mL/(12.h) (milliliter per 12 hour). Validated clinical measurement specification."
  },
  {
    "code": "mL/(2.h)",
    "display": "milliliter per 2 hour",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mL/(2.h) (milliliter per 2 hour). Validated clinical measurement specification."
  },
  {
    "code": "mL/(4.h)",
    "display": "milliliter per 4 hour",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mL/(4.h) (milliliter per 4 hour). Validated clinical measurement specification."
  },
  {
    "code": "mL/(5.h)",
    "display": "milliliter per 5 hour",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mL/(5.h) (milliliter per 5 hour). Validated clinical measurement specification."
  },
  {
    "code": "mL/(6.h)",
    "display": "milliliter per 6 hour",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mL/(6.h) (milliliter per 6 hour). Validated clinical measurement specification."
  },
  {
    "code": "mL/(72.h)",
    "display": "milliliter per 72 hour",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mL/(72.h) (milliliter per 72 hour). Validated clinical measurement specification."
  },
  {
    "code": "mL/(8.h)",
    "display": "milliliter per 8 hour",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mL/(8.h) (milliliter per 8 hour). Validated clinical measurement specification."
  },
  {
    "code": "mL/[sin_i]",
    "display": "milliliter per square inch (international)",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mL/[sin_i] (milliliter per square inch (international)). Validated clinical measurement specification."
  },
  {
    "code": "mL/m2",
    "display": "milliliter per square meter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mL/m2 (milliliter per square meter). Validated clinical measurement specification."
  },
  {
    "code": "mL/kg/(8.h)",
    "display": "milliliter per kilogram per 8 hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mL/kg/(8.h) (milliliter per kilogram per 8 hour). Validated clinical measurement specification."
  },
  {
    "code": "mL/min/m2",
    "display": "milliliter per minute per square meter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mL/min/m2 (milliliter per minute per square meter). Validated clinical measurement specification."
  },
  {
    "code": "mL/(8.h)/kg",
    "display": "milliliter per 8 hour per kilogram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mL/(8.h)/kg (milliliter per 8 hour per kilogram). Validated clinical measurement specification."
  },
  {
    "code": "[drp]",
    "display": "drop - metric (1/20 mL)",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [drp] (drop - metric (1/20 mL)). Validated clinical measurement specification."
  },
  {
    "code": "/mL",
    "display": "per milliliter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: /mL (per milliliter). Validated clinical measurement specification."
  },
  {
    "code": "[CFU]/mL",
    "display": "colony forming units per milliliter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [CFU]/mL (colony forming units per milliliter). Validated clinical measurement specification."
  },
  {
    "code": "10*9/mL",
    "display": "billion per milliliter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: 10*9/mL (billion per milliliter). Validated clinical measurement specification."
  },
  {
    "code": "ng/mL",
    "display": "nanogram per millliiter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ng/mL (nanogram per millliiter). Validated clinical measurement specification."
  },
  {
    "code": "mol/mL",
    "display": "mole per milliliter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mol/mL (mole per milliliter). Validated clinical measurement specification."
  },
  {
    "code": "meq/mL",
    "display": "milliequivalent per milliliter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: meq/mL (milliequivalent per milliliter). Validated clinical measurement specification."
  },
  {
    "code": "nmol/mL",
    "display": "nanomole per milliliter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: nmol/mL (nanomole per milliliter). Validated clinical measurement specification."
  },
  {
    "code": "pg/mL",
    "display": "picogram per milliliter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: pg/mL (picogram per milliliter). Validated clinical measurement specification."
  },
  {
    "code": "umol/mL",
    "display": "micromole per milliliter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: umol/mL (micromole per milliliter). Validated clinical measurement specification."
  },
  {
    "code": "10*3/mL",
    "display": "thousand per milliliter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: 10*3/mL (thousand per milliliter). Validated clinical measurement specification."
  },
  {
    "code": "10*6/mL",
    "display": "million per milliliter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: 10*6/mL (million per milliliter). Validated clinical measurement specification."
  },
  {
    "code": "eq/mL",
    "display": "equivalent per milliliter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: eq/mL (equivalent per milliliter). Validated clinical measurement specification."
  },
  {
    "code": "fmol/mL",
    "display": "femtomole per milliliter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: fmol/mL (femtomole per milliliter). Validated clinical measurement specification."
  },
  {
    "code": "U/mL",
    "display": "enzyme unit per milliliter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: U/mL (enzyme unit per milliliter). Validated clinical measurement specification."
  },
  {
    "code": "[IU]/mL",
    "display": "international unit per milliliter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [IU]/mL (international unit per milliliter). Validated clinical measurement specification."
  },
  {
    "code": "pmol/mL",
    "display": "picomole per milliliter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: pmol/mL (picomole per milliliter). Validated clinical measurement specification."
  },
  {
    "code": "u[IU]/mL",
    "display": "micro international unit per milliliter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: u[IU]/mL (micro international unit per milliliter). Validated clinical measurement specification."
  },
  {
    "code": "umol/mL/min",
    "display": "micromole per milliliter per minute",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: umol/mL/min (micromole per milliliter per minute). Validated clinical measurement specification."
  },
  {
    "code": "m[IU]/mL",
    "display": "milli  international unit per milliliter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: m[IU]/mL (milli  international unit per milliliter). Validated clinical measurement specification."
  },
  {
    "code": "l",
    "display": "Liters",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: l (Liters). Validated clinical measurement specification."
  },
  {
    "code": "L",
    "display": "Liters",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: L (Liters). Validated clinical measurement specification."
  },
  {
    "code": "L/L",
    "display": "Liters per liter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: L/L (Liters per liter). Validated clinical measurement specification."
  },
  {
    "code": "L/s",
    "display": "Liters per second",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: L/s (Liters per second). Validated clinical measurement specification."
  },
  {
    "code": "L/h",
    "display": "Liters per hour",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: L/h (Liters per hour). Validated clinical measurement specification."
  },
  {
    "code": "L/d",
    "display": "Liters per day",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: L/d (Liters per day). Validated clinical measurement specification."
  },
  {
    "code": "L/s/s2",
    "display": "Liters per second per square second",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: L/s/s2 (Liters per second per square second). Validated clinical measurement specification."
  },
  {
    "code": "L/(8.h)",
    "display": "Liters per 8 hour",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: L/(8.h) (Liters per 8 hour). Validated clinical measurement specification."
  },
  {
    "code": "L/(24.h)",
    "display": "Liters per 24 hour",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: L/(24.h) (Liters per 24 hour). Validated clinical measurement specification."
  },
  {
    "code": "L/(min.m2) ",
    "display": "Liters per minute per square meter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: L/(min.m2)  (Liters per minute per square meter). Validated clinical measurement specification."
  },
  {
    "code": "L/min/m2",
    "display": "Liters per minute per square meter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: L/min/m2 (Liters per minute per square meter). Validated clinical measurement specification."
  },
  {
    "code": "L/min",
    "display": "Liters per minute",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: L/min (Liters per minute). Validated clinical measurement specification."
  },
  {
    "code": "lm",
    "display": "lumen",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: lm (lumen). Validated clinical measurement specification."
  },
  {
    "code": "lm.m2",
    "display": "lumen square meter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: lm.m2 (lumen square meter). Validated clinical measurement specification."
  },
  {
    "code": "Lmb",
    "display": "Lambert",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: Lmb (Lambert). Validated clinical measurement specification."
  },
  {
    "code": "lx",
    "display": "lux",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: lx (lux). Validated clinical measurement specification."
  },
  {
    "code": "[lne]",
    "display": "line",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [lne] (line). Validated clinical measurement specification."
  },
  {
    "code": "pg/L",
    "display": "picogram per liter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: pg/L (picogram per liter). Validated clinical measurement specification."
  },
  {
    "code": "dL",
    "display": "deciliter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: dL (deciliter). Validated clinical measurement specification."
  },
  {
    "code": "pmol/L",
    "display": "picomole per liter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: pmol/L (picomole per liter). Validated clinical measurement specification."
  },
  {
    "code": "mbar.s/L",
    "display": "millibar second per liter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mbar.s/L (millibar second per liter). Validated clinical measurement specification."
  },
  {
    "code": "J/L",
    "display": "joule per liter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: J/L (joule per liter). Validated clinical measurement specification."
  },
  {
    "code": "mmol/L",
    "display": "millimole per liter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mmol/L (millimole per liter). Validated clinical measurement specification."
  },
  {
    "code": "ng/L",
    "display": "nanogram per liter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ng/L (nanogram per liter). Validated clinical measurement specification."
  },
  {
    "code": "nmol/L",
    "display": "nanomole per liter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: nmol/L (nanomole per liter). Validated clinical measurement specification."
  },
  {
    "code": "meq/L",
    "display": "milliequivalent per liter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: meq/L (milliequivalent per liter). Validated clinical measurement specification."
  },
  {
    "code": "osm/L",
    "display": "osmole per liter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: osm/L (osmole per liter). Validated clinical measurement specification."
  },
  {
    "code": "mol/L",
    "display": "mole per liter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mol/L (mole per liter). Validated clinical measurement specification."
  },
  {
    "code": "u[IU]/L",
    "display": "micro international unit per liter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: u[IU]/L (micro international unit per liter). Validated clinical measurement specification."
  },
  {
    "code": "nmol/s/L",
    "display": "nanomole per second per liter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: nmol/s/L (nanomole per second per liter). Validated clinical measurement specification."
  },
  {
    "code": "U/L",
    "display": "enzyme unit per liter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: U/L (enzyme unit per liter). Validated clinical measurement specification."
  },
  {
    "code": "10.L/min",
    "display": "10 liter per minute",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: 10.L/min (10 liter per minute). Validated clinical measurement specification."
  },
  {
    "code": "nm/s/L",
    "display": "nanometer per second per liter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: nm/s/L (nanometer per second per liter). Validated clinical measurement specification."
  },
  {
    "code": "kat/L",
    "display": "katal per liter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: kat/L (katal per liter). Validated clinical measurement specification."
  },
  {
    "code": "k[IU]/L",
    "display": "kilo international unit per liter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: k[IU]/L (kilo international unit per liter). Validated clinical measurement specification."
  },
  {
    "code": "mmol/s/L",
    "display": "millimole per second per liter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mmol/s/L (millimole per second per liter). Validated clinical measurement specification."
  },
  {
    "code": "uU/L",
    "display": "micro enzyme unit per liter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: uU/L (micro enzyme unit per liter). Validated clinical measurement specification."
  },
  {
    "code": "nmol/h/L",
    "display": "nanomole per hour per liter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: nmol/h/L (nanomole per hour per liter). Validated clinical measurement specification."
  },
  {
    "code": "umol/L/h",
    "display": "micromole per liter per hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: umol/L/h (micromole per liter per hour). Validated clinical measurement specification."
  },
  {
    "code": "mbar/L/s",
    "display": "millibar per liter per second",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mbar/L/s (millibar per liter per second). Validated clinical measurement specification."
  },
  {
    "code": "cm[H2O]/L/s",
    "display": "centimeter of water per liter per second",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: cm[H2O]/L/s (centimeter of water per liter per second). Validated clinical measurement specification."
  },
  {
    "code": "10.L/(min.m2)",
    "display": "10 liter per minute per square meter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: 10.L/(min.m2) (10 liter per minute per square meter). Validated clinical measurement specification."
  },
  {
    "code": "/L",
    "display": "per liter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: /L (per liter). Validated clinical measurement specification."
  },
  {
    "code": "[CFU]/L",
    "display": "colony forming units per liter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [CFU]/L (colony forming units per liter). Validated clinical measurement specification."
  },
  {
    "code": "[IU]/L",
    "display": "international unit per liter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [IU]/L (international unit per liter). Validated clinical measurement specification."
  },
  {
    "code": "eq/L",
    "display": "equivalent per liter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: eq/L (equivalent per liter). Validated clinical measurement specification."
  },
  {
    "code": "/dL",
    "display": "per deciliter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: /dL (per deciliter). Validated clinical measurement specification."
  },
  {
    "code": "mmol/dL",
    "display": "millimole per deciliter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mmol/dL (millimole per deciliter). Validated clinical measurement specification."
  },
  {
    "code": "pg/dL",
    "display": "picogram per deciliter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: pg/dL (picogram per deciliter). Validated clinical measurement specification."
  },
  {
    "code": "meq/dL",
    "display": "milliequivalent per deciliter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: meq/dL (milliequivalent per deciliter). Validated clinical measurement specification."
  },
  {
    "code": "ng/dL",
    "display": "nanogram per deciliter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ng/dL (nanogram per deciliter). Validated clinical measurement specification."
  },
  {
    "code": "pmol/dL",
    "display": "picomole per deciliter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: pmol/dL (picomole per deciliter). Validated clinical measurement specification."
  },
  {
    "code": "U/dL",
    "display": "enzyme unit per deciliter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: U/dL (enzyme unit per deciliter). Validated clinical measurement specification."
  },
  {
    "code": "[IU]/dL",
    "display": "international unit per deciliter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [IU]/dL (international unit per deciliter). Validated clinical measurement specification."
  },
  {
    "code": "umol/dL",
    "display": "micromole per deciliter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: umol/dL (micromole per deciliter). Validated clinical measurement specification."
  },
  {
    "code": "nmol/dL",
    "display": "nanomole per deciliter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: nmol/dL (nanomole per deciliter). Validated clinical measurement specification."
  },
  {
    "code": "mol",
    "display": "mole",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mol (mole). Validated clinical measurement specification."
  },
  {
    "code": "mol/mol",
    "display": "mole per mole",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mol/mol (mole per mole). Validated clinical measurement specification."
  },
  {
    "code": "mol/s",
    "display": "mole per second",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mol/s (mole per second). Validated clinical measurement specification."
  },
  {
    "code": "mol/m3",
    "display": "mole per cubic meter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mol/m3 (mole per cubic meter). Validated clinical measurement specification."
  },
  {
    "code": "mmol/mol",
    "display": "millimole per mole",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mmol/mol (millimole per mole). Validated clinical measurement specification."
  },
  {
    "code": "umol/mol",
    "display": "micromole per mole",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: umol/mol (micromole per mole). Validated clinical measurement specification."
  },
  {
    "code": "nmol/mol",
    "display": "nanomole per mole",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: nmol/mol (nanomole per mole). Validated clinical measurement specification."
  },
  {
    "code": "kat",
    "display": "katal",
    "system": "UCUM",
    "category": "Enzyme & Biological Activity",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: kat (katal). Validated clinical measurement specification."
  },
  {
    "code": "mmol",
    "display": "millimole",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mmol (millimole). Validated clinical measurement specification."
  },
  {
    "code": "mmol/mmol",
    "display": "millimole per millimole",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mmol/mmol (millimole per millimole). Validated clinical measurement specification."
  },
  {
    "code": "mmol/min",
    "display": "millimole per minute",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mmol/min (millimole per minute). Validated clinical measurement specification."
  },
  {
    "code": "mmol/h",
    "display": "millimole per hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mmol/h (millimole per hour). Validated clinical measurement specification."
  },
  {
    "code": "mmol/(12.h)",
    "display": "millimole per 12 hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mmol/(12.h) (millimole per 12 hour). Validated clinical measurement specification."
  },
  {
    "code": "mmol/(2.h)",
    "display": "millimole per 2 hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mmol/(2.h) (millimole per 2 hour). Validated clinical measurement specification."
  },
  {
    "code": "mmol/(24.h)",
    "display": "millimole per 24 hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mmol/(24.h) (millimole per 24 hour). Validated clinical measurement specification."
  },
  {
    "code": "mmol/(5.h)",
    "display": "millimole per 5 hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mmol/(5.h) (millimole per 5 hour). Validated clinical measurement specification."
  },
  {
    "code": "mmol/(6.h)",
    "display": "millimole per 6 hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mmol/(6.h) (millimole per 6 hour). Validated clinical measurement specification."
  },
  {
    "code": "mmol/d",
    "display": "millimole per day",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mmol/d (millimole per day). Validated clinical measurement specification."
  },
  {
    "code": "mmol/(8.h)",
    "display": "millimole per 8 hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mmol/(8.h) (millimole per 8 hour). Validated clinical measurement specification."
  },
  {
    "code": "mmol/m2",
    "display": "millimole per square meter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mmol/m2 (millimole per square meter). Validated clinical measurement specification."
  },
  {
    "code": "nmol/mmol",
    "display": "nanomole per millimole",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: nmol/mmol (nanomole per millimole). Validated clinical measurement specification."
  },
  {
    "code": "umol/mmol",
    "display": "micromole per millimole",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: umol/mmol (micromole per millimole). Validated clinical measurement specification."
  },
  {
    "code": "eq/mmol",
    "display": "equivalent per millimole",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: eq/mmol (equivalent per millimole). Validated clinical measurement specification."
  },
  {
    "code": "nmol/mmol{creat}",
    "display": "nanomole per millimole of creatinine",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: nmol/mmol{creat} (nanomole per millimole of creatinine). Validated clinical measurement specification."
  },
  {
    "code": "kU",
    "display": "kilo enzyme unit",
    "system": "UCUM",
    "category": "Enzyme & Biological Activity",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: kU (kilo enzyme unit). Validated clinical measurement specification."
  },
  {
    "code": "umol",
    "display": "micromole",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: umol (micromole). Validated clinical measurement specification."
  },
  {
    "code": "umol/umol",
    "display": "micromole per micromole",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: umol/umol (micromole per micromole). Validated clinical measurement specification."
  },
  {
    "code": "umol/h",
    "display": "micromole per hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: umol/h (micromole per hour). Validated clinical measurement specification."
  },
  {
    "code": "umol/d",
    "display": "micromole per day",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: umol/d (micromole per day). Validated clinical measurement specification."
  },
  {
    "code": "umol/(8.h)",
    "display": "micromole per 8 hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: umol/(8.h) (micromole per 8 hour). Validated clinical measurement specification."
  },
  {
    "code": "umol/L",
    "display": "micromole per liter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: umol/L (micromole per liter). Validated clinical measurement specification."
  },
  {
    "code": "umol/min",
    "display": "micromole per minute",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: umol/min (micromole per minute). Validated clinical measurement specification."
  },
  {
    "code": "umol/(2.h)",
    "display": "micromole per 2 hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: umol/(2.h) (micromole per 2 hour). Validated clinical measurement specification."
  },
  {
    "code": "umol/(24.h)",
    "display": "micromole per 24 hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: umol/(24.h) (micromole per 24 hour). Validated clinical measurement specification."
  },
  {
    "code": "umol/min/g",
    "display": "micromole per minute per gram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: umol/min/g (micromole per minute per gram). Validated clinical measurement specification."
  },
  {
    "code": "umol/min/L",
    "display": "micromole per minute per liter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: umol/min/L (micromole per minute per liter). Validated clinical measurement specification."
  },
  {
    "code": "U",
    "display": "enzyme unit",
    "system": "UCUM",
    "category": "Enzyme & Biological Activity",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: U (enzyme unit). Validated clinical measurement specification."
  },
  {
    "code": "eq/umol",
    "display": "equivalent per micromole",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: eq/umol (equivalent per micromole). Validated clinical measurement specification."
  },
  {
    "code": "U/(2.h)",
    "display": "enzyme unit per 2 hour",
    "system": "UCUM",
    "category": "Enzyme & Biological Activity",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: U/(2.h) (enzyme unit per 2 hour). Validated clinical measurement specification."
  },
  {
    "code": "U/h",
    "display": "enzyme unit per hour",
    "system": "UCUM",
    "category": "Enzyme & Biological Activity",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: U/h (enzyme unit per hour). Validated clinical measurement specification."
  },
  {
    "code": "U/min",
    "display": "enzyme unit per minute",
    "system": "UCUM",
    "category": "Enzyme & Biological Activity",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: U/min (enzyme unit per minute). Validated clinical measurement specification."
  },
  {
    "code": "U/s",
    "display": "enzyme unit per second",
    "system": "UCUM",
    "category": "Enzyme & Biological Activity",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: U/s (enzyme unit per second). Validated clinical measurement specification."
  },
  {
    "code": "U/10*9",
    "display": "enzyme unit per billion",
    "system": "UCUM",
    "category": "Enzyme & Biological Activity",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: U/10*9 (enzyme unit per billion). Validated clinical measurement specification."
  },
  {
    "code": "U/d",
    "display": "enzyme unit per day",
    "system": "UCUM",
    "category": "Enzyme & Biological Activity",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: U/d (enzyme unit per day). Validated clinical measurement specification."
  },
  {
    "code": "U/10*12",
    "display": "enzyme unit per trillion",
    "system": "UCUM",
    "category": "Enzyme & Biological Activity",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: U/10*12 (enzyme unit per trillion). Validated clinical measurement specification."
  },
  {
    "code": "U/10*6",
    "display": "enzyme unit per million",
    "system": "UCUM",
    "category": "Enzyme & Biological Activity",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: U/10*6 (enzyme unit per million). Validated clinical measurement specification."
  },
  {
    "code": "U/(24.h)",
    "display": "enzyme unit per 24 hour",
    "system": "UCUM",
    "category": "Enzyme & Biological Activity",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: U/(24.h) (enzyme unit per 24 hour). Validated clinical measurement specification."
  },
  {
    "code": "U/(12.h)",
    "display": "enzyme unit per 12 hour",
    "system": "UCUM",
    "category": "Enzyme & Biological Activity",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: U/(12.h) (enzyme unit per 12 hour). Validated clinical measurement specification."
  },
  {
    "code": "U/10",
    "display": "enzyme unit per 10",
    "system": "UCUM",
    "category": "Enzyme & Biological Activity",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: U/10 (enzyme unit per 10). Validated clinical measurement specification."
  },
  {
    "code": "U/10*10",
    "display": "enzyme unit per 10 billion",
    "system": "UCUM",
    "category": "Enzyme & Biological Activity",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: U/10*10 (enzyme unit per 10 billion). Validated clinical measurement specification."
  },
  {
    "code": "meq",
    "display": "milliequivalent",
    "system": "UCUM",
    "category": "Clinical Laboratory Units",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: meq (milliequivalent). Validated clinical measurement specification."
  },
  {
    "code": "meq/min",
    "display": "milliequivalent per minute",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: meq/min (milliequivalent per minute). Validated clinical measurement specification."
  },
  {
    "code": "meq/h",
    "display": "milliequivalent per hour",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: meq/h (milliequivalent per hour). Validated clinical measurement specification."
  },
  {
    "code": "meq/d",
    "display": "milliequivalent per day",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: meq/d (milliequivalent per day). Validated clinical measurement specification."
  },
  {
    "code": "meq/(2.h)",
    "display": "milliequivalent per 2 hour",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: meq/(2.h) (milliequivalent per 2 hour). Validated clinical measurement specification."
  },
  {
    "code": "meq/(24.h)",
    "display": "milliequivalent per 24 hour",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: meq/(24.h) (milliequivalent per 24 hour). Validated clinical measurement specification."
  },
  {
    "code": "meq/(8.h)",
    "display": "milliequivalent per 8 hour",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: meq/(8.h) (milliequivalent per 8 hour). Validated clinical measurement specification."
  },
  {
    "code": "meq/m2",
    "display": "milliequivalent per square meter",
    "system": "UCUM",
    "category": "Clinical Laboratory Units",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: meq/m2 (milliequivalent per square meter). Validated clinical measurement specification."
  },
  {
    "code": "10*6.[IU]",
    "display": "million international unit",
    "system": "UCUM",
    "category": "Enzyme & Biological Activity",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: 10*6.[IU] (million international unit). Validated clinical measurement specification."
  },
  {
    "code": "/[IU]",
    "display": "per international unit",
    "system": "UCUM",
    "category": "Enzyme & Biological Activity",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: /[IU] (per international unit). Validated clinical measurement specification."
  },
  {
    "code": "u[IU]",
    "display": "micro international unit",
    "system": "UCUM",
    "category": "Enzyme & Biological Activity",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: u[IU] (micro international unit). Validated clinical measurement specification."
  },
  {
    "code": "[IU]/min",
    "display": "international unit per minute",
    "system": "UCUM",
    "category": "Enzyme & Biological Activity",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [IU]/min (international unit per minute). Validated clinical measurement specification."
  },
  {
    "code": "[IU]/h",
    "display": "international unit per hour",
    "system": "UCUM",
    "category": "Enzyme & Biological Activity",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [IU]/h (international unit per hour). Validated clinical measurement specification."
  },
  {
    "code": "[IU]/d",
    "display": "international unit per day",
    "system": "UCUM",
    "category": "Enzyme & Biological Activity",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [IU]/d (international unit per day). Validated clinical measurement specification."
  },
  {
    "code": "[IU]/(2.h)",
    "display": "international unit per 2 hour",
    "system": "UCUM",
    "category": "Enzyme & Biological Activity",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [IU]/(2.h) (international unit per 2 hour). Validated clinical measurement specification."
  },
  {
    "code": "[IU]/(24.h)",
    "display": "international unit per 24 hour",
    "system": "UCUM",
    "category": "Enzyme & Biological Activity",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [IU]/(24.h) (international unit per 24 hour). Validated clinical measurement specification."
  },
  {
    "code": "m[IU]/L",
    "display": "milli international unit per liter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: m[IU]/L (milli international unit per liter). Validated clinical measurement specification."
  },
  {
    "code": "[iU]",
    "display": "international unit - arbitrary",
    "system": "UCUM",
    "category": "Enzyme & Biological Activity",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [iU] (international unit - arbitrary). Validated clinical measurement specification."
  },
  {
    "code": "[IU]",
    "display": "international unit - arbitrary",
    "system": "UCUM",
    "category": "Enzyme & Biological Activity",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [IU] (international unit - arbitrary). Validated clinical measurement specification."
  },
  {
    "code": "k[IU]/mL",
    "display": "kilo international unit per milliliter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: k[IU]/mL (kilo international unit per milliliter). Validated clinical measurement specification."
  },
  {
    "code": "u",
    "display": "unified atomic mass unit",
    "system": "UCUM",
    "category": "Enzyme & Biological Activity",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: u (unified atomic mass unit). Validated clinical measurement specification."
  },
  {
    "code": "ueq",
    "display": "microequivalent",
    "system": "UCUM",
    "category": "Enzyme & Biological Activity",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ueq (microequivalent). Validated clinical measurement specification."
  },
  {
    "code": "ueq/L",
    "display": "microequivalent per liter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ueq/L (microequivalent per liter). Validated clinical measurement specification."
  },
  {
    "code": "ueq/mL",
    "display": "microequivalent per milliliter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ueq/mL (microequivalent per milliliter). Validated clinical measurement specification."
  },
  {
    "code": "ug/[sft_i]",
    "display": "microgram per square foot (international)",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ug/[sft_i] (microgram per square foot (international)). Validated clinical measurement specification."
  },
  {
    "code": "ukat",
    "display": "microkatal",
    "system": "UCUM",
    "category": "Enzyme & Biological Activity",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ukat (microkatal). Validated clinical measurement specification."
  },
  {
    "code": "uL",
    "display": "microliter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: uL (microliter). Validated clinical measurement specification."
  },
  {
    "code": "mm[Hg]",
    "display": "millimeter of mercury",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mm[Hg] (millimeter of mercury). Validated clinical measurement specification."
  },
  {
    "code": "[wood'U]",
    "display": "Wood unit",
    "system": "UCUM",
    "category": "Enzyme & Biological Activity",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [wood'U] (Wood unit). Validated clinical measurement specification."
  },
  {
    "code": "kPa",
    "display": "kilopascal",
    "system": "UCUM",
    "category": "Pressure & Hemodynamics",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: kPa (kilopascal). Validated clinical measurement specification."
  },
  {
    "code": "cm[H2O]",
    "display": "centimeter of water",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: cm[H2O] (centimeter of water). Validated clinical measurement specification."
  },
  {
    "code": "cm[H2O]/s/m",
    "display": "centimeter of water per second per meter",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: cm[H2O]/s/m (centimeter of water per second per meter). Validated clinical measurement specification."
  },
  {
    "code": "/cm[H2O]",
    "display": "per centimeter of water",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: /cm[H2O] (per centimeter of water). Validated clinical measurement specification."
  },
  {
    "code": "Cel",
    "display": "degree Celsius",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: Cel (degree Celsius). Validated clinical measurement specification."
  },
  {
    "code": "/100{cells}",
    "display": "per 100 cells",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: /100{cells} (per 100 cells). Validated clinical measurement specification."
  },
  {
    "code": "/100{WBCs}",
    "display": "per 100 white blood cells",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: /100{WBCs} (per 100 white blood cells). Validated clinical measurement specification."
  },
  {
    "code": "[CCID_50]",
    "display": "50% cell culture infectious dose",
    "system": "UCUM",
    "category": "Radiological & Nuclear",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [CCID_50] (50% cell culture infectious dose). Validated clinical measurement specification."
  },
  {
    "code": "[FFU]",
    "display": "focus forming units (cells)",
    "system": "UCUM",
    "category": "Enzyme & Biological Activity",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [FFU] (focus forming units (cells)). Validated clinical measurement specification."
  },
  {
    "code": "10*3",
    "display": "10^3 (used for cell count)",
    "system": "UCUM",
    "category": "Dimensionless & Ratios",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: 10*3 (10^3 (used for cell count)). Validated clinical measurement specification."
  },
  {
    "code": "deg",
    "display": "degree - plane angle",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: deg (degree - plane angle). Validated clinical measurement specification."
  },
  {
    "code": "deg/s",
    "display": "degree per second",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: deg/s (degree per second). Validated clinical measurement specification."
  },
  {
    "code": "[degF]",
    "display": "degrees Fahrenheit",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [degF] (degrees Fahrenheit). Validated clinical measurement specification."
  },
  {
    "code": "[degR]",
    "display": "degrees Rankine",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [degR] (degrees Rankine). Validated clinical measurement specification."
  },
  {
    "code": "[degRe]",
    "display": "degrees Réaumur",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [degRe] (degrees Réaumur). Validated clinical measurement specification."
  },
  {
    "code": "K",
    "display": "degree Kelvin",
    "system": "UCUM",
    "category": "Temperature",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: K (degree Kelvin). Validated clinical measurement specification."
  },
  {
    "code": "K/W",
    "display": "degree Kelvin per Watt",
    "system": "UCUM",
    "category": "Temperature",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: K/W (degree Kelvin per Watt). Validated clinical measurement specification."
  },
  {
    "code": "min",
    "display": "minute",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: min (minute). Validated clinical measurement specification."
  },
  {
    "code": "[min_br]",
    "display": "minim - British",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [min_br] (minim - British). Validated clinical measurement specification."
  },
  {
    "code": "[min_us]",
    "display": "minim - US",
    "system": "UCUM",
    "category": "Enzyme & Biological Activity",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [min_us] (minim - US). Validated clinical measurement specification."
  },
  {
    "code": "ng/min",
    "display": "nanogram per minute",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ng/min (nanogram per minute). Validated clinical measurement specification."
  },
  {
    "code": "daL/min",
    "display": "dekaliter per minute",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: daL/min (dekaliter per minute). Validated clinical measurement specification."
  },
  {
    "code": "mm/min",
    "display": "millimeter per minute",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mm/min (millimeter per minute). Validated clinical measurement specification."
  },
  {
    "code": "nmol/mL/min",
    "display": "nanomole per milliliter per minute",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: nmol/mL/min (nanomole per milliliter per minute). Validated clinical measurement specification."
  },
  {
    "code": "pmol/min",
    "display": "picomole per minute",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: pmol/min (picomole per minute). Validated clinical measurement specification."
  },
  {
    "code": "nmol/min",
    "display": "nanomole per minute",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: nmol/min (nanomole per minute). Validated clinical measurement specification."
  },
  {
    "code": "mU/mL/min",
    "display": "milli enzyme unit per milliliter per minute",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mU/mL/min (milli enzyme unit per milliliter per minute). Validated clinical measurement specification."
  },
  {
    "code": "nmol/min/mL",
    "display": "nanomole per minute per milliliter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: nmol/min/mL (nanomole per minute per milliliter). Validated clinical measurement specification."
  },
  {
    "code": "/min",
    "display": "per minute",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: /min (per minute). Validated clinical measurement specification."
  },
  {
    "code": "H",
    "display": "henry",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: H (henry). Validated clinical measurement specification."
  },
  {
    "code": "h",
    "display": "hour",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: h (hour). Validated clinical measurement specification."
  },
  {
    "code": "Hz",
    "display": "hertz",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: Hz (hertz). Validated clinical measurement specification."
  },
  {
    "code": "Oe",
    "display": "Oersted",
    "system": "UCUM",
    "category": "Clinical Laboratory Units",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: Oe (Oersted). Validated clinical measurement specification."
  },
  {
    "code": "A/m",
    "display": "ampere per meter",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: A/m (ampere per meter). Validated clinical measurement specification."
  },
  {
    "code": "/h",
    "display": "per hour",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: /h (per hour). Validated clinical measurement specification."
  },
  {
    "code": "/(12.h)",
    "display": "per twelve hour",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: /(12.h) (per twelve hour). Validated clinical measurement specification."
  },
  {
    "code": "24.h",
    "display": "24 hour",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: 24.h (24 hour). Validated clinical measurement specification."
  },
  {
    "code": "kcal/h",
    "display": "kilocalorie per hour",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: kcal/h (kilocalorie per hour). Validated clinical measurement specification."
  },
  {
    "code": "mm/h",
    "display": "millimeter per hour",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mm/h (millimeter per hour). Validated clinical measurement specification."
  },
  {
    "code": "ng/h",
    "display": "nanogram per hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ng/h (nanogram per hour). Validated clinical measurement specification."
  },
  {
    "code": "kcal/(24.h)",
    "display": "kilocalorie per 24 hour",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: kcal/(24.h) (kilocalorie per 24 hour). Validated clinical measurement specification."
  },
  {
    "code": "d",
    "display": "day",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: d (day). Validated clinical measurement specification."
  },
  {
    "code": "daL/min/m2",
    "display": "dekaliter per minute per square meter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: daL/min/m2 (dekaliter per minute per square meter). Validated clinical measurement specification."
  },
  {
    "code": "dB",
    "display": "decibel",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: dB (decibel). Validated clinical measurement specification."
  },
  {
    "code": "dg",
    "display": "decigram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: dg (decigram). Validated clinical measurement specification."
  },
  {
    "code": "dm",
    "display": "decimeter",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: dm (decimeter). Validated clinical measurement specification."
  },
  {
    "code": "dm2/s2",
    "display": "square decimeter per square second",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: dm2/s2 (square decimeter per square second). Validated clinical measurement specification."
  },
  {
    "code": "dyn",
    "display": "dyne",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: dyn (dyne). Validated clinical measurement specification."
  },
  {
    "code": "dyn.s/(cm.m2)",
    "display": "dyne second per centimeter per square meter",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: dyn.s/(cm.m2) (dyne second per centimeter per square meter). Validated clinical measurement specification."
  },
  {
    "code": "dyn.s/cm",
    "display": "dyne second per centimeter",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: dyn.s/cm (dyne second per centimeter). Validated clinical measurement specification."
  },
  {
    "code": "[D'ag'U]",
    "display": "D-antigen unit (polio)",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [D'ag'U] (D-antigen unit (polio)). Validated clinical measurement specification."
  },
  {
    "code": "/d",
    "display": "per day",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: /d (per day). Validated clinical measurement specification."
  },
  {
    "code": "kcal/d",
    "display": "kilocalorie per day",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: kcal/d (kilocalorie per day). Validated clinical measurement specification."
  },
  {
    "code": "ng/d",
    "display": "nanogram per day",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ng/d (nanogram per day). Validated clinical measurement specification."
  },
  {
    "code": "nmol/d",
    "display": "nanomole per day",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: nmol/d (nanomole per day). Validated clinical measurement specification."
  },
  {
    "code": "pmol/d",
    "display": "picomole per day",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: pmol/d (picomole per day). Validated clinical measurement specification."
  },
  {
    "code": "[cicero]",
    "display": "cicero",
    "system": "UCUM",
    "category": "Radiological & Nuclear",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [cicero] (cicero). Validated clinical measurement specification."
  },
  {
    "code": "[den]",
    "display": "Denier (linear mass density)",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [den] (Denier (linear mass density)). Validated clinical measurement specification."
  },
  {
    "code": "[didot]",
    "display": "didot",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [didot] (didot). Validated clinical measurement specification."
  },
  {
    "code": "[diop]",
    "display": "diopter (lens)",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [diop] (diopter (lens)). Validated clinical measurement specification."
  },
  {
    "code": "[dpt_us]",
    "display": "dry pint - US",
    "system": "UCUM",
    "category": "Enzyme & Biological Activity",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [dpt_us] (dry pint - US). Validated clinical measurement specification."
  },
  {
    "code": "[dqt_us]",
    "display": "dry quart - US",
    "system": "UCUM",
    "category": "Enzyme & Biological Activity",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [dqt_us] (dry quart - US). Validated clinical measurement specification."
  },
  {
    "code": "[dr_ap]",
    "display": "dram - apothecary",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [dr_ap] (dram - apothecary). Validated clinical measurement specification."
  },
  {
    "code": "[dr_av]",
    "display": "Dram mass unit",
    "system": "UCUM",
    "category": "Enzyme & Biological Activity",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [dr_av] (Dram mass unit). Validated clinical measurement specification."
  },
  {
    "code": "S",
    "display": "siemens",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: S (siemens). Validated clinical measurement specification."
  },
  {
    "code": "s",
    "display": "second - time",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: s (second - time). Validated clinical measurement specification."
  },
  {
    "code": "sb",
    "display": "stilb",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: sb (stilb). Validated clinical measurement specification."
  },
  {
    "code": "sph",
    "display": "spere - solid angle",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: sph (spere - solid angle). Validated clinical measurement specification."
  },
  {
    "code": "sr",
    "display": "steradian - solid angle",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: sr (steradian - solid angle). Validated clinical measurement specification."
  },
  {
    "code": "St",
    "display": "Stokes",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: St (Stokes). Validated clinical measurement specification."
  },
  {
    "code": "st",
    "display": "stere",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: st (stere). Validated clinical measurement specification."
  },
  {
    "code": "Sv",
    "display": "sievert",
    "system": "UCUM",
    "category": "Radiological & Nuclear",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: Sv (sievert). Validated clinical measurement specification."
  },
  {
    "code": "[scwt_av]",
    "display": "short hundredweight",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [scwt_av] (short hundredweight). Validated clinical measurement specification."
  },
  {
    "code": "bit_s",
    "display": "bit - logarithmic",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: bit_s (bit - logarithmic). Validated clinical measurement specification."
  },
  {
    "code": "N.s",
    "display": "Newton second",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: N.s (Newton second). Validated clinical measurement specification."
  },
  {
    "code": "mo_s",
    "display": "synodal month",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mo_s (synodal month). Validated clinical measurement specification."
  },
  {
    "code": "/s",
    "display": "per second",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: /s (per second). Validated clinical measurement specification."
  },
  {
    "code": "[S]",
    "display": "Svedberg unit",
    "system": "UCUM",
    "category": "Enzyme & Biological Activity",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [S] (Svedberg unit). Validated clinical measurement specification."
  },
  {
    "code": "m/s",
    "display": "meter per second",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: m/s (meter per second). Validated clinical measurement specification."
  },
  {
    "code": "mPa.s",
    "display": "millipascal second",
    "system": "UCUM",
    "category": "Pressure & Hemodynamics",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: mPa.s (millipascal second). Validated clinical measurement specification."
  },
  {
    "code": "ng/s",
    "display": "nanogram per second",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ng/s (nanogram per second). Validated clinical measurement specification."
  },
  {
    "code": "nmol/s",
    "display": "nanomole per second",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: nmol/s (nanomole per second). Validated clinical measurement specification."
  },
  {
    "code": "um/s",
    "display": "microns per second",
    "system": "UCUM",
    "category": "Enzyme & Biological Activity",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: um/s (microns per second). Validated clinical measurement specification."
  },
  {
    "code": "cm2/s",
    "display": "square centimeter per second",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: cm2/s (square centimeter per second). Validated clinical measurement specification."
  },
  {
    "code": "m/s2",
    "display": "meter per square second",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: m/s2 (meter per square second). Validated clinical measurement specification."
  },
  {
    "code": "m2/s",
    "display": "square meter per second",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: m2/s (square meter per second). Validated clinical measurement specification."
  },
  {
    "code": "m3/s",
    "display": "cubic meter per second",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: m3/s (cubic meter per second). Validated clinical measurement specification."
  },
  {
    "code": "[m/s2/Hz^(1/2)]",
    "display": "meter per square seconds per square root of hertz",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [m/s2/Hz^(1/2)] (meter per square seconds per square root of hertz). Validated clinical measurement specification."
  },
  {
    "code": "10.uN.s/(cm5.m2)",
    "display": "10 micronewton second per centimeter to the fifth power per square meter",
    "system": "UCUM",
    "category": "Enzyme & Biological Activity",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: 10.uN.s/(cm5.m2) (10 micronewton second per centimeter to the fifth power per square meter). Validated clinical measurement specification."
  },
  {
    "code": "''",
    "display": "arc second",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: '' (arc second). Validated clinical measurement specification."
  },
  {
    "code": "%[slope]",
    "display": "percent of slope",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: %[slope] (percent of slope). Validated clinical measurement specification."
  },
  {
    "code": "/100{spermatozoa}",
    "display": "per 100 spermatozoa",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: /100{spermatozoa} (per 100 spermatozoa). Validated clinical measurement specification."
  },
  {
    "code": "/m2",
    "display": "per square meter",
    "system": "UCUM",
    "category": "Clinical Laboratory Units",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: /m2 (per square meter). Validated clinical measurement specification."
  },
  {
    "code": "[acr_us]",
    "display": "acre - US",
    "system": "UCUM",
    "category": "Enzyme & Biological Activity",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [acr_us] (acre - US). Validated clinical measurement specification."
  },
  {
    "code": "Bq",
    "display": "becquerel",
    "system": "UCUM",
    "category": "Radiological & Nuclear",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: Bq (becquerel). Validated clinical measurement specification."
  },
  {
    "code": "Ci",
    "display": "Curie",
    "system": "UCUM",
    "category": "Radiological & Nuclear",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: Ci (Curie). Validated clinical measurement specification."
  },
  {
    "code": "circ",
    "display": "circle - plane angle",
    "system": "UCUM",
    "category": "Radiological & Nuclear",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: circ (circle - plane angle). Validated clinical measurement specification."
  },
  {
    "code": "[cin_i]",
    "display": "cubic inch",
    "system": "UCUM",
    "category": "Radiological & Nuclear",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [cin_i] (cubic inch). Validated clinical measurement specification."
  },
  {
    "code": "[cml_i]",
    "display": "circular mil",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [cml_i] (circular mil). Validated clinical measurement specification."
  },
  {
    "code": "fL",
    "display": "femtoliter",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: fL (femtoliter). Validated clinical measurement specification."
  },
  {
    "code": "[foz_m]",
    "display": "fluid ounce - metric",
    "system": "UCUM",
    "category": "Clinical Laboratory Units",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [foz_m] (fluid ounce - metric). Validated clinical measurement specification."
  },
  {
    "code": "[foz_us]",
    "display": "fluid ounce - US",
    "system": "UCUM",
    "category": "Enzyme & Biological Activity",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [foz_us] (fluid ounce - US). Validated clinical measurement specification."
  },
  {
    "code": "[foz_br]",
    "display": "fluid ounce - British",
    "system": "UCUM",
    "category": "Clinical Laboratory Units",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [foz_br] (fluid ounce - British). Validated clinical measurement specification."
  },
  {
    "code": "[fdr_br]",
    "display": "fluid dram - British",
    "system": "UCUM",
    "category": "Time & Frequency",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [fdr_br] (fluid dram - British). Validated clinical measurement specification."
  },
  {
    "code": "[fdr_us]",
    "display": "fluid dram - US",
    "system": "UCUM",
    "category": "Enzyme & Biological Activity",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [fdr_us] (fluid dram - US). Validated clinical measurement specification."
  },
  {
    "code": "[Lf]",
    "display": "Limit of flocculation",
    "system": "UCUM",
    "category": "Volume & Fluid Measures",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: [Lf] (Limit of flocculation). Validated clinical measurement specification."
  },
  {
    "code": "Mx",
    "display": "Maxwell",
    "system": "UCUM",
    "category": "Clinical Laboratory Units",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: Mx (Maxwell). Validated clinical measurement specification."
  },
  {
    "code": "Wb",
    "display": "weber",
    "system": "UCUM",
    "category": "Clinical Laboratory Units",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: Wb (weber). Validated clinical measurement specification."
  },
  {
    "code": "pg",
    "display": "picogram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: pg (picogram). Validated clinical measurement specification."
  },
  {
    "code": "pg/mm",
    "display": "picogram per millimeter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: pg/mm (picogram per millimeter). Validated clinical measurement specification."
  },
  {
    "code": "ng",
    "display": "nanogram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ng (nanogram). Validated clinical measurement specification."
  },
  {
    "code": "ng/10*6",
    "display": "nanogram per million",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ng/10*6 (nanogram per million). Validated clinical measurement specification."
  },
  {
    "code": "ng/g",
    "display": "nanogram per gram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ng/g (nanogram per gram). Validated clinical measurement specification."
  },
  {
    "code": "ng/U",
    "display": "nanogram per enzyme unit",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ng/U (nanogram per enzyme unit). Validated clinical measurement specification."
  },
  {
    "code": "ng/m2",
    "display": "nanogram per square meter",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ng/m2 (nanogram per square meter). Validated clinical measurement specification."
  },
  {
    "code": "ng/kg/(8.h)",
    "display": "nanogram per kilogram per 8 hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ng/kg/(8.h) (nanogram per kilogram per 8 hour). Validated clinical measurement specification."
  },
  {
    "code": "ng/mL/h",
    "display": "nanogram per milliliter per hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ng/mL/h (nanogram per milliliter per hour). Validated clinical measurement specification."
  },
  {
    "code": "ng/(24.h)",
    "display": "nanogram per 24 hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ng/(24.h) (nanogram per 24 hour). Validated clinical measurement specification."
  },
  {
    "code": "ng/(8.h)",
    "display": "nanogram per 8 hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: ng/(8.h) (nanogram per 8 hour). Validated clinical measurement specification."
  },
  {
    "code": "pmol",
    "display": "picomole",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: pmol (picomole). Validated clinical measurement specification."
  },
  {
    "code": "pmol/g",
    "display": "picomole per gram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: pmol/g (picomole per gram). Validated clinical measurement specification."
  },
  {
    "code": "pmol/(24.h)",
    "display": "picomole per 24 hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: pmol/(24.h) (picomole per 24 hour). Validated clinical measurement specification."
  },
  {
    "code": "pmol/h/mL",
    "display": "picomole per hour per milliliter ",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: pmol/h/mL (picomole per hour per milliliter ). Validated clinical measurement specification."
  },
  {
    "code": "nmol",
    "display": "nanomole",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: nmol (nanomole). Validated clinical measurement specification."
  },
  {
    "code": "nmol/nmol",
    "display": "nanomole per nanomole",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: nmol/nmol (nanomole per nanomole). Validated clinical measurement specification."
  },
  {
    "code": "nmol/g",
    "display": "nanomole per gram",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: nmol/g (nanomole per gram). Validated clinical measurement specification."
  },
  {
    "code": "nmol/(24.h)",
    "display": "nanomole per 24 hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: nmol/(24.h) (nanomole per 24 hour). Validated clinical measurement specification."
  },
  {
    "code": "nmol/mL/h",
    "display": "nanomole per milliliter per hour",
    "system": "UCUM",
    "category": "Mass & Substance Amount",
    "description": "Standard Unified Code for Units of Measure (UCUM) metric code: nmol/mL/h (nanomole per milliliter per hour). Validated clinical measurement specification."
  }
];

export const CLINICAL_DICOM_DATA: StandardTerminologyEntry[] = [
  {
    "code": "CT",
    "display": "Computed Tomography",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Computed Tomography (CT)",
    "description": "Axial X-ray tomography generating volumetric slices of anatomical structures with calibrated Hounsfield Unit density. SOP Class UID: 1.2.840.10008.5.1.4.1.1.2 (CT Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4."
  },
  {
    "code": "MR",
    "display": "Magnetic Resonance Imaging",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Magnetic Resonance (MR)",
    "description": "Radiofrequency excitation of hydrogen nuclei in high-strength magnetic field producing high soft-tissue contrast. SOP Class UID: 1.2.840.10008.5.1.4.1.1.4 (MR Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4."
  },
  {
    "code": "CR",
    "display": "Computed Radiography",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Computed Radiography (CR)",
    "description": "Photostimulable phosphor plate digital radiography used for general musculoskeletal and chest imaging. SOP Class UID: 1.2.840.10008.5.1.4.1.1.1 (Computed Radiography Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4."
  },
  {
    "code": "DX",
    "display": "Digital Radiography",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Digital Radiography (DX)",
    "description": "Flat-panel detector direct digital radiography with high spatial resolution and low patient radiation dose. SOP Class UID: 1.2.840.10008.5.1.4.1.1.1.1 (Digital X-Ray Image Storage - For Presentation). Standard: NEMA DICOM PS3.3 / PS3.4."
  },
  {
    "code": "US",
    "display": "Ultrasound",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Ultrasound (US)",
    "description": "High-frequency acoustic beam reflection creating real-time dynamic imaging of soft tissues, organs, and Doppler blood flow. SOP Class UID: 1.2.840.10008.5.1.4.1.1.6.1 (Ultrasound Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4."
  },
  {
    "code": "NM",
    "display": "Nuclear Medicine",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Nuclear Medicine (NM)",
    "description": "Gamma photon emission imaging using radiotracers (e.g. Technetium-99m) assessing physiological and metabolic organ function. SOP Class UID: 1.2.840.10008.5.1.4.1.1.20 (Nuclear Medicine Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4."
  },
  {
    "code": "PT",
    "display": "Positron Emission Tomography (PET)",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Positron Emission Tomography (PET)",
    "description": "Coincidence positron annihilation detection typically using 18F-FDG for oncology staging and metabolic brain imaging. SOP Class UID: 1.2.840.10008.5.1.4.1.1.128 (Positron Emission Tomography Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4."
  },
  {
    "code": "XA",
    "display": "X-Ray Angiography",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "X-Ray Angiography (XA)",
    "description": "Dynamic cine-fluoroscopy visualizing arterial and venous vascular trees with iodinated contrast media during catheterization. SOP Class UID: 1.2.840.10008.5.1.4.1.1.12.1 (X-Ray Angiographic Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4."
  },
  {
    "code": "RF",
    "display": "Radiofluoroscopy",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Radiofluoroscopy (RF)",
    "description": "Real-time radiographic fluoroscopy imaging for gastrointestinal contrast swallows, enemas, and orthopedic guidance. SOP Class UID: 1.2.840.10008.5.1.4.1.1.12.2 (X-Ray Radiofluoroscopic Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4."
  },
  {
    "code": "MG",
    "display": "Mammography",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Mammography (MG)",
    "description": "Low-dose specialized X-ray screening and diagnostic evaluation of breast glandular architecture and microcalcifications. SOP Class UID: 1.2.840.10008.5.1.4.1.1.1.2 (Digital Mammography X-Ray Image Storage - For Presentation). Standard: NEMA DICOM PS3.3 / PS3.4."
  },
  {
    "code": "OCT",
    "display": "Optical Coherence Tomography",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Ophthalmic & Optical Tomography (OPT)",
    "description": "Micron-scale interferometric optical sectioning of retinal layers, macular architecture, and optic nerve head structures. SOP Class UID: 1.2.840.10008.5.1.4.1.1.77.1.5.4 (Ophthalmic Tomography Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4."
  },
  {
    "code": "ECG",
    "display": "Electrocardiography",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Electrocardiography (ECG)",
    "description": "Multi-lead surface cardiac biopotential waveform recording documenting rhythm disorders and myocardial ischemia. SOP Class UID: 1.2.840.10008.5.1.4.1.1.9.1.1 (12-Lead ECG Waveform Storage). Standard: NEMA DICOM PS3.3 / PS3.4."
  },
  {
    "code": "EPS",
    "display": "Cardiac Electrophysiology",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Cardiac Electrophysiology (EPS)",
    "description": "Intracardiac catheter electrogram recording analyzing conduction velocity, refractory periods, and arrhythmia triggers. SOP Class UID: 1.2.840.10008.5.1.4.1.1.9.3.1 (Cardiac Electrophysiology Waveform Storage). Standard: NEMA DICOM PS3.3 / PS3.4."
  },
  {
    "code": "HD",
    "display": "Hemodynamic Waveform",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Hemodynamic Monitoring (HD)",
    "description": "Invasive pressure monitoring waveforms capturing central venous, pulmonary arterial, and arterial blood pressure curves. SOP Class UID: 1.2.840.10008.5.1.4.1.1.9.2.1 (Hemodynamic Waveform Storage). Standard: NEMA DICOM PS3.3 / PS3.4."
  },
  {
    "code": "SC",
    "display": "Secondary Capture",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Secondary Capture (SC)",
    "description": "Screen captures, digitized analog film records, and converted legacy video frames preserved in standard DICOM format. SOP Class UID: 1.2.840.10008.5.1.4.1.1.7 (Secondary Capture Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4."
  },
  {
    "code": "VL",
    "display": "Visible Light Imaging",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Visible Light Photography (VL)",
    "description": "Color photographic imaging of surgical cavities, dermatological lesions, and gross pathology specimens. SOP Class UID: 1.2.840.10008.5.1.4.1.1.77.1.4 (VL Photographic Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4."
  },
  {
    "code": "RTDOSE",
    "display": "Radiotherapy Dose",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Radiation Therapy (RT)",
    "description": "Three-dimensional radiation dose distribution grid calculated by oncology treatment planning systems (TPS). SOP Class UID: 1.2.840.10008.5.1.4.1.1.481.2 (RT Dose Storage). Standard: NEMA DICOM PS3.3 / PS3.4."
  },
  {
    "code": "RTPLAN",
    "display": "Radiotherapy Plan",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Radiation Therapy (RT)",
    "description": "External beam and brachytherapy radiation treatment machine geometry, beam energies, monitor units, and fractionation. SOP Class UID: 1.2.840.10008.5.1.4.1.1.481.5 (RT Plan Storage). Standard: NEMA DICOM PS3.3 / PS3.4."
  },
  {
    "code": "RTSTRUCT",
    "display": "Radiotherapy Structure Set",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Radiation Therapy (RT)",
    "description": "Geometric contour boundaries defining Clinical Target Volumes (CTV), Planning Target Volumes (PTV), and Organs At Risk (OAR). SOP Class UID: 1.2.840.10008.5.1.4.1.1.481.3 (RT Structure Set Storage). Standard: NEMA DICOM PS3.3 / PS3.4."
  },
  {
    "code": "RTIMAGE",
    "display": "Radiotherapy Image",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Radiation Therapy (RT)",
    "description": "Megavoltage or kilovoltage portal verification images documenting patient position and collimation prior to radiation delivery. SOP Class UID: 1.2.840.10008.5.1.4.1.1.481.1 (RT Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4."
  },
  {
    "code": "SR",
    "display": "Structured Report",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Structured Reporting (SR)",
    "description": "Standardized semantic document containing clinical imaging measurements, CAD findings, and radiologist diagnostic conclusions. SOP Class UID: 1.2.840.10008.5.1.4.1.1.88.33 (Comprehensive SR Storage). Standard: NEMA DICOM PS3.3 / PS3.4."
  },
  {
    "code": "SM",
    "display": "Slide Microscopy",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Slide Microscopy (SM)",
    "description": "Whole slide digital pathology imaging scanning histological tissue sections at high optical magnification (20x/40x). SOP Class UID: 1.2.840.10008.5.1.4.1.1.77.1.6 (VL Whole Slide Microscopy Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4."
  },
  {
    "code": "PX",
    "display": "Panoramic X-Ray",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Panoramic X-Ray (PX)",
    "description": "Dental orthopantomography (OPG) producing panoramic tomographic view of maxilla, mandible, and dentition. Standard: NEMA DICOM PS3.3 / PS3.4 (Modality PX)."
  },
  {
    "code": "XC",
    "display": "External-Camera Photography",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Visible Light Photography (VL)",
    "description": "Clinical gross photography of dermatological lesions, wound healing progress, and surgical specimens. Standard: NEMA DICOM PS3.3 / PS3.4 (Modality XC)."
  },
  {
    "code": "BDUS",
    "display": "Bone Densitometry (Ultrasound)",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Bone Densitometry (BMD/BDUS)",
    "description": "Quantitative ultrasound of peripheral bone sites evaluating bone mineral density and osteoporosis risk. Standard: NEMA DICOM PS3.3 / PS3.4 (Modality BDUS)."
  },
  {
    "code": "DOC",
    "display": "Encapsulated Document",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Encapsulated Documents",
    "description": "PDF or CDA clinical consultation document encapsulated within a DICOM information object for PACS archiving. SOP Class UID: 1.2.840.10008.5.1.4.1.1.104.1 (Encapsulated PDF Storage). Standard: NEMA DICOM PS3.3 / PS3.4."
  },
  {
    "code": "US-MF",
    "display": "Ultrasound Multi-frame Image",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Ultrasound (US)",
    "description": "The Ultrasound Multi-frame Image IOD specifies a Multi-frame image that has been created by an ultrasound imaging device. SOP Class UID: 1.2.840.10008.5.1.4.1.1.3.1 (Ultrasound Multi-frame Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (ultrasound-multi-frame-image)."
  },
  {
    "code": "SC-MF",
    "display": "Multi-frame Single Bit Secondary Capture Image",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Secondary Capture (SC)",
    "description": "The Multi-frame Single Bit Secondary Capture Image IOD specifies images that are converted from a non-DICOM format to a modality independent DICOM format. SOP Class UID: 1.2.840.10008.5.1.4.1.1.7.1 (Multi-frame Single Bit Secondary Capture Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (multi-frame-single-bit-secondary-capture-image)."
  },
  {
    "code": "SC-MF-2",
    "display": "Multi-frame Grayscale Byte Secondary Capture Image",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Secondary Capture (SC)",
    "description": "The Multi-frame Grayscale Byte Secondary Capture Image IOD specifies Grayscale Byte images that are converted from a non-DICOM format to a modality independent DICOM format. SOP Class UID: 1.2.840.10008.5.1.4.1.1.7.2 (Multi-frame Grayscale Byte Secondary Capture Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (multi-frame-grayscale-byte-secondary-capture-image)."
  },
  {
    "code": "SC-MF-3",
    "display": "Multi-frame Grayscale Word Secondary Capture Image",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Secondary Capture (SC)",
    "description": "The Multi-frame Grayscale Word Secondary Capture Image IOD specifies Grayscale Word images that are converted from a non-DICOM format to a modality independent DICOM format. SOP Class UID: 1.2.840.10008.5.1.4.1.1.7.3 (Multi-frame Grayscale Word Secondary Capture Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (multi-frame-grayscale-word-secondary-capture-image)."
  },
  {
    "code": "SC-MF-4",
    "display": "Multi-frame True Color Secondary Capture Image",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Secondary Capture (SC)",
    "description": "The Multi-frame True Color Secondary Capture Image IOD specifies True Color images that are converted from a non-DICOM format to a modality independent DICOM format. SOP Class UID: 1.2.840.10008.5.1.4.1.1.7.4 (Multi-frame True Color Secondary Capture Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (multi-frame-true-color-secondary-capture-image)."
  },
  {
    "code": "IO",
    "display": "Digital Intra-Oral X-Ray Image",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Intra-Oral Radiography (IO)",
    "description": "The Digital Intra-Oral X-Ray Image IOD specifies an image that has been created by an intra-oral projection radiography imaging device. SOP Class UID: 1.2.840.10008.5.1.4.1.1.1.3 (Digital Intra-Oral X-Ray Image Storage - For Presentation). Standard: NEMA DICOM PS3.3 / PS3.4 (digital-intra-oral-x-ray-image)."
  },
  {
    "code": "RT-TREAT",
    "display": "RT Beams Treatment Record",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Radiation Therapy (RT)",
    "description": "The focus for this Radiotherapy Beams Treatment Record IOD (RT Beams Treatment Record IOD) is to address the requirements for transfer of treatment session reports generated by a treatment verification system during a course of external beam treatment, with optional cumulative summary information. It may also be used for transfer of treatment information during delivery. SOP Class UID: 1.2.840.10008.5.1.4.1.1.481.4 (RT Beams Treatment Record Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (rt-beams-treatment-record)."
  },
  {
    "code": "RT-BRACHY",
    "display": "RT Brachy Treatment Record",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Radiation Therapy (RT)",
    "description": "The focus for this Radiotherapy Brachy Treatment Record IOD (RT Brachy Treatment Record IOD) is to address the requirements for transfer of treatment session reports generated by a treatment verification system during a course of Brachytherapy treatment, with optional cumulative summary information. It may also be used for transfer of treatment information during delivery. SOP Class UID: 1.2.840.10008.5.1.4.1.1.481.6 (RT Brachy Treatment Record Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (rt-brachy-treatment-record)."
  },
  {
    "code": "RT-SUMM",
    "display": "RT Treatment Summary Record",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Radiation Therapy (RT)",
    "description": "The focus for this Radiotherapy Treatment Summary Record IOD (RT Treatment Summary Record IOD) is to address the requirements for transfer of cumulative summary information, normally generated at the completion of a course of treatment. SOP Class UID: 1.2.840.10008.5.1.4.1.1.481.7 (RT Treatment Summary Record Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (rt-treatment-summary-record)."
  },
  {
    "code": "ES",
    "display": "VL Endoscopic Image",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Endoscopy (ES / VL)",
    "description": "The VL Endoscopic Image IOD specifies the Attributes of Single-frame VL Endoscopic Images. SOP Class UID: 1.2.840.10008.5.1.4.1.1.77.1.1 (VL Endoscopic Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (vl-endoscopic-image)."
  },
  {
    "code": "GM",
    "display": "VL Microscopic Image",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "General Microscopy (GM)",
    "description": "The VL Microscopic Image IOD specifies the Attributes of Single-frame VL Microscopic Images, including both imaging of specimens and direct microscopic imaging of the Patient (e.g., perioperative microscopy). Microscopic Images with Slide Coordinates shall not be encoded with this IOD. SOP Class UID: 1.2.840.10008.5.1.4.1.1.77.1.2 (VL Microscopic Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (vl-microscopic-image)."
  },
  {
    "code": "ES-2",
    "display": "Video Endoscopic Image",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Endoscopy (ES / VL)",
    "description": "The Video Endoscopic Image IOD specifies the Attributes of Multi-frame Video Endoscopic Images. SOP Class UID: 1.2.840.10008.5.1.4.1.1.77.1.1.1 (Video Endoscopic Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (video-endoscopic-image)."
  },
  {
    "code": "GM-2",
    "display": "Video Microscopic Image",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "General Microscopy (GM)",
    "description": "The Video Microscopic Image IOD specifies the Attributes of Video Microscopic Images, including both imaging of specimens and direct microscopic imaging of the Patient (e.g., perioperative microscopy). Microscopic Images with Slide Coordinates shall not be encoded with this IOD. SOP Class UID: 1.2.840.10008.5.1.4.1.1.77.1.2.1 (Video Microscopic Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (video-microscopic-image)."
  },
  {
    "code": "VL-2",
    "display": "Video Photographic Image",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Visible Light Photography (VL)",
    "description": "The Video Photographic Image IOD specifies the Attributes of VL Multi-frame photographic Images. SOP Class UID: 1.2.840.10008.5.1.4.1.1.77.1.4.1 (Video Photographic Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (video-photographic-image)."
  },
  {
    "code": "SM-2",
    "display": "VL Whole Slide Microscopy Image",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Slide Microscopy (SM)",
    "description": "The VL Whole Slide Microscopy Image IOD specifies the Attributes of a multi-frame visible light whole slide microscopy image divided into a set of tiles. Each frame encodes a single tile within a three-dimensional imaged volume, with all tiles at a uniform resolution (same value for Pixel Spacing (0028,0030)). The image may be one layer of a Multi-Resolution Pyramid. SOP Class UID: 1.2.840.10008.5.1.4.1.1.77.1.6 (VL Whole Slide Microscopy Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (vl-whole-slide-microscopy-image)."
  },
  {
    "code": "ES-3",
    "display": "Real-Time Video Endoscopic Image",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Endoscopy (ES / VL)",
    "description": "The Real-Time Video Endoscopic Image IOD specifies the Attributes of Multi-frame Video Endoscopic Images transmitted in real-time. Standard: NEMA DICOM PS3.3 / PS3.4 (real-time-video-endoscopic-image)."
  },
  {
    "code": "VL-3",
    "display": "Real-Time Video Photographic Image",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Visible Light Photography (VL)",
    "description": "The Real-Time Video Photographic Image IOD specifies Multi-frame photographic Images, transmitted in real-time. Standard: NEMA DICOM PS3.3 / PS3.4 (real-time-video-photographic-image)."
  },
  {
    "code": "DP",
    "display": "Dermoscopic Photography Image",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Dermoscopic Photography Image IOD specifies an image that has been created using a dermoscope. The dermoscope may be a dedicated dermoscopic device, or a camera-attached or smart device-attached dermoscope. SOP Class UID: 1.2.840.10008.5.1.4.1.1.77.1.7 (Dermoscopic Photography Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (dermoscopic-photography-image)."
  },
  {
    "code": "GSPS",
    "display": "Grayscale Softcopy Presentation State",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Grayscale Softcopy Presentation State IOD specifies information that may be used to present (display) monochrome images that are referenced from within the IOD. SOP Class UID: 1.2.840.10008.5.1.4.1.1.11.1 (Grayscale Softcopy Presentation State Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (grayscale-softcopy-presentation-state)."
  },
  {
    "code": "CSPS",
    "display": "Color Softcopy Presentation State",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Color Softcopy Presentation State IOD specifies information that may be used to present (display) color images that are referenced from within the IOD. SOP Class UID: 1.2.840.10008.5.1.4.1.1.11.2 (Color Softcopy Presentation State Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (color-softcopy-presentation-state)."
  },
  {
    "code": "PSPS",
    "display": "Pseudo-Color Softcopy Presentation State",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Pseudo-Color Softcopy Presentation State IOD specifies information that may be used to present (display) images that are referenced from within the IOD. SOP Class UID: 1.2.840.10008.5.1.4.1.1.11.3 (Pseudo-Color Softcopy Presentation State Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (pseudo-color-softcopy-presentation-state)."
  },
  {
    "code": "BSPS",
    "display": "Blending Softcopy Presentation State",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Blending Softcopy Presentation State IOD specifies information that may be used to blend two sets of images that are referenced from within the IOD for the purpose of presentation (display). SOP Class UID: 1.2.840.10008.5.1.4.1.1.11.4 (Blending Softcopy Presentation State Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (blending-softcopy-presentation-state)."
  },
  {
    "code": "BSD",
    "display": "Basic Structured Display",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Basic Structured Display IOD specifies an Instance of a single screen structured display that has been created for a Patient. It references specific image or other composite SOP Instances from one or more Studies for that Patient, or for other Patients for comparison, arranged in a specific presentation layout. Presentation of images within the structured display may be controlled by referenced Softcopy Presentation State Instances. The structured display may include text annotations. SOP Class UID: 1.2.840.10008.5.1.4.1.1.131 (Basic Structured Display Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (basic-structured-display)."
  },
  {
    "code": "XGSPS",
    "display": "XA/XRF Grayscale Softcopy Presentation State",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The XA/XRF Grayscale Softcopy Presentation State IOD specifies information that may be used to present angiographic projection images that are referenced from within the IOD. SOP Class UID: 1.2.840.10008.5.1.4.1.1.11.5 (XA/XRF Grayscale Softcopy Presentation State Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (xa-xrf-grayscale-softcopy-presentation-state)."
  },
  {
    "code": "ABPS",
    "display": "Advanced Blending Presentation State",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Advanced Blending Presentation State IOD specifies information that may be used to blend two or more sets of images that are referenced from within the IOD for the purpose of presentation (display). SOP Class UID: 1.2.840.10008.5.1.4.1.1.11.8 (Advanced Blending Presentation State Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (advanced-blending-presentation-state)."
  },
  {
    "code": "VMLSPS",
    "display": "Variable Modality LUT Softcopy Presentation State",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Variable Modality LUT Softcopy Presentation State IOD specifies information that may be used to apply transformations to monochrome or pseudo-color images for which one or more Modality LUT transformations are intended for presentation control. This IOD supports presentation control for a set of images for which the Modality LUT varies on a frame-by-frame basis. SOP Class UID: 1.2.840.10008.5.1.4.1.1.11.12 (Variable Modality LUT Softcopy Presentation State Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (variable-modality-lut-softcopy-presentation-state)."
  },
  {
    "code": "AUDIO",
    "display": "Basic Voice Audio Waveform",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Clinical Audio Recording",
    "description": "The Basic Voice Audio Waveform IOD is the specification of a digitized sound that has been acquired or created by an audio modality or by an audio acquisition function within an imaging modality. A typical use is report dictation. SOP Class UID: 1.2.840.10008.5.1.4.1.1.9.4.1 (Basic Voice Audio Waveform Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (basic-voice-audio-waveform)."
  },
  {
    "code": "ECG-12L",
    "display": "12-Lead ECG",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Electrocardiography (ECG)",
    "description": "The 12-Lead ECG IOD is the specification of digitized electrical signals from the patient cardiac conduction system collected on the body surface, which has been acquired by an ECG modality or by an ECG acquisition function within an imaging modality. SOP Class UID: 1.2.840.10008.5.1.4.1.1.9.1.1 (12-lead ECG Waveform Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (12-lead-ecg)."
  },
  {
    "code": "ECG-AMB",
    "display": "Ambulatory ECG",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Electrocardiography (ECG)",
    "description": "The Ambulatory ECG IOD is the specification of digitized electrical signals from the patient cardiac conduction system collected on the body surface, which has been acquired by an ambulatory electrocardiography (Holter) device. SOP Class UID: 1.2.840.10008.5.1.4.1.1.9.1.3 (Ambulatory ECG Waveform Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (ambulatory-ecg)."
  },
  {
    "code": "APW",
    "display": "Arterial Pulse Waveform",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Arterial Pulse Waveform IOD is the specification of digitized electrical signals from the patient arterial system collected through pulse oximetry or other means by a Pulse modality or by a Pulse acquisition function within an imaging modality. SOP Class UID: 1.2.840.10008.5.1.4.1.1.9.5.1 (Arterial Pulse Waveform Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (arterial-pulse-waveform)."
  },
  {
    "code": "RW",
    "display": "Respiratory Waveform",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Respiratory Waveform IOD is the specification of digitized electrical signals from the patient respiratory system, which has been acquired by a Respiratory modality or by a Respiratory acquisition function within an imaging modality. SOP Class UID: 1.2.840.10008.5.1.4.1.1.9.6.1 (Respiratory Waveform Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (respiratory-waveform)."
  },
  {
    "code": "GAW",
    "display": "General Audio Waveform",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The General Audio Waveform IOD is the specification of one or two channel digitized audio signals. SOP Class UID: 1.2.840.10008.5.1.4.1.1.9.4.2 (General Audio Waveform Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (general-audio-waveform)."
  },
  {
    "code": "RAW",
    "display": "Real-Time Audio Waveform",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Real-Time Audio Waveform IOD specifies one-channel or two-channel digitized audio signals, transmitted in real-time. Standard: NEMA DICOM PS3.3 / PS3.4 (real-time-audio-waveform)."
  },
  {
    "code": "RSE",
    "display": "Routine Scalp Electroencephalogram",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Routine Scalp Electroencephalogram (EEG) IOD is the specification of digitized electrical signals from the patient's encephalon collected on the skull surface, which has been acquired by an EEG modality or by an EEG acquisition function within an imaging modality or a neurophysiology recording device. SOP Class UID: 1.2.840.10008.5.1.4.1.1.9.7.1 (Routine Scalp Electroencephalogram Waveform Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (routine-scalp-electroencephalogram)."
  },
  {
    "code": "E",
    "display": "Electromyogram",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Electromyogram (EMG) IOD is the specification of digitized electrical signals evoked by the patient's muscle movements, which has been acquired by an EMG modality or by an EMG acquisition function within a neurophysiology recording device or a polysomnography modality. SOP Class UID: 1.2.840.10008.5.1.4.1.1.9.7.2 (Electromyogram Waveform Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (electromyogram)."
  },
  {
    "code": "E-2",
    "display": "Electrooculogram",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Electrooculogram (EOG) IOD is the specification of digitized electrical signals evoked by the patient's eye movements collected on the face, which has been acquired by an EOG modality or by an EOG acquisition function within a neurophysiology recording device or a polysomnography modality. SOP Class UID: 1.2.840.10008.5.1.4.1.1.9.7.3 (Electrooculogram Waveform Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (electrooculogram)."
  },
  {
    "code": "SE",
    "display": "Sleep Electroencephalogram",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Sleep Electroencephalogram (EEG) IOD is the specification of digitized electrical signals from the patient's encephalon collected on the skull surface, which has been acquired by an EEG modality or by an EEG acquisition function within a polysomnography modality. SOP Class UID: 1.2.840.10008.5.1.4.1.1.9.7.4 (Sleep Electroencephalogram Waveform Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (sleep-electroencephalogram)."
  },
  {
    "code": "MRW",
    "display": "Multi-channel Respiratory Waveform",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Multi-channel Respiratory Waveform IOD is the specification of digitized electrical signals from the patient respiratory system, which has been acquired by a Respiratory modality or by a Respiratory acquisition function within a neurophysiology recording device or a polysomnography modality. SOP Class UID: 1.2.840.10008.5.1.4.1.1.9.6.2 (Multi-channel Respiratory Waveform Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (multi-channel-respiratory-waveform)."
  },
  {
    "code": "BPW",
    "display": "Body Position Waveform",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Body Position Waveform IOD is the specification of digitized electrical signals acquired by a device or sensor on the body of the patient measuring the position of the patient. Depending on the measurement method, either the digitized sensor data is saved directly or values derived from it. SOP Class UID: 1.2.840.10008.5.1.4.1.1.9.8.1 (Body Position Waveform Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (body-position-waveform)."
  },
  {
    "code": "G3E",
    "display": "General 32-bit ECG",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The General 32-bit ECG IOD is the specification of digitized electrical signals from the patient cardiac conduction system collected on the body surface, which has been acquired by an ECG modality or by an ECG acquisition function within an imaging modality or by another recording device. SOP Class UID: 1.2.840.10008.5.1.4.1.1.9.1.4 (General 32-bit ECG Waveform Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (general-32-bit-ecg)."
  },
  {
    "code": "SR-2",
    "display": "Enhanced SR",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Structured Reporting (SR)",
    "description": "The Enhanced Structured Report (SR) IOD is a superset of the Basic Text SR IOD. It is also intended for the representation of reports with minimal usage of coded entries (typically Document Title and headings) and a hierarchical tree of headings under which may appear text and subheadings. In addition, it supports the use of numeric measurements with coded measurement names and units. Reference to SOP Instances (e.g., images or waveforms or SR Documents) is restricted to appear at the level of the leaves of this primarily textual tree. It enhances references to SOP Instances with spatial regions of interest (points, lines, circle, ellipse, etc.) and temporal regions of interest. SOP Class UID: 1.2.840.10008.5.1.4.1.1.88.22 (Enhanced SR Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (enhanced-sr)."
  },
  {
    "code": "SR-3",
    "display": "Comprehensive SR",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Structured Reporting (SR)",
    "description": "The Comprehensive SR IOD is a superset of the Basic Text SR IOD and the Enhanced SR IOD, which specifies a class of documents, the content of which may include textual and a variety of coded information, numeric measurement values, references to the SOP Instances and spatial or temporal regions of interest within such SOP Instances. Relationships by-reference are enabled between Content Items. SOP Class UID: 1.2.840.10008.5.1.4.1.1.88.33 (Comprehensive SR Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (comprehensive-sr)."
  },
  {
    "code": "KO",
    "display": "Key Object Selection Document",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Key Object Selection (KO)",
    "description": "The Key Object Selection Document IOD is intended for flagging one or more significant images, waveforms, or other composite SOP Instances. SOP Class UID: 1.2.840.10008.5.1.4.1.1.88.59 (Key Object Selection Document Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (key-object-selection-document)."
  },
  {
    "code": "MCS",
    "display": "Mammography CAD SR",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Mammography CAD SR IOD is used to convey the detection and analysis results of a mammography CAD device. The content may include textual and a variety of coded information, numeric measurement values, references to the SOP Instances, and spatial regions of interest within such SOP Instances. Relationships by-reference are enabled between Content Items. SOP Class UID: 1.2.840.10008.5.1.4.1.1.88.50 (Mammography CAD SR Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (mammography-cad-sr)."
  },
  {
    "code": "CCS",
    "display": "Chest CAD SR",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Chest CAD SR IOD is used to convey the detection and analysis results of a chest CAD device. The content may include textual and a variety of coded information, numeric measurement values, references to the SOP Instances, and spatial regions of interest within such SOP Instances. Relationships by-reference are enabled between Content Items. SOP Class UID: 1.2.840.10008.5.1.4.1.1.88.65 (Chest CAD SR Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (chest-cad-sr)."
  },
  {
    "code": "PL",
    "display": "Procedure Log",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Procedure Log IOD is intended for the representation of reports or logs of time-stamped events occurring during an extended diagnostic or interventional procedure, typical of the cardiac catheterization lab. SOP Class UID: 1.2.840.10008.5.1.4.1.1.88.40 (Procedure Log Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (procedure-log)."
  },
  {
    "code": "XRDS",
    "display": "X-Ray Radiation Dose SR",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The X-Ray Radiation Dose SR IOD is used to convey the exposure characteristics and dose from X-Rays generated by imaging devices. SOP Class UID: 1.2.840.10008.5.1.4.1.1.88.67 (X-Ray Radiation Dose SR Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (x-ray-radiation-dose-sr)."
  },
  {
    "code": "SPR",
    "display": "Spectacle Prescription Report",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Spectacle Prescription Report IOD is used to represent the spectacle prescription for a Patient. SOP Class UID: 1.2.840.10008.5.1.4.1.1.78.6 (Spectacle Prescription Report Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (spectacle-prescription-report)."
  },
  {
    "code": "CCS-2",
    "display": "Colon CAD SR",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Colon CAD SR IOD is used to convey the detection and analysis results of a colon CAD device. The content may include textual and a variety of coded information, numeric measurement values, references to the SOP Instances, and spatial regions of interest within such SOP Instances. Relationships by-reference are enabled between Content Items. SOP Class UID: 1.2.840.10008.5.1.4.1.1.88.69 (Colon CAD SR Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (colon-cad-sr)."
  },
  {
    "code": "MGTAVR",
    "display": "Macular Grid Thickness and Volume Report",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Macular Grid Thickness and Volume Report IOD is used to represent the macular grid thickness and volume values derived from ophthalmic images. SOP Class UID: 1.2.840.10008.5.1.4.1.1.79.1 (Macular Grid Thickness and Volume Report). Standard: NEMA DICOM PS3.3 / PS3.4 (macular-grid-thickness-and-volume-report)."
  },
  {
    "code": "IPSD",
    "display": "Implantation Plan SR Document",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Implantation Plan SR Document IOD contains the results of a planning process for an individual Patient, wherein specific implant templates are selected and positioned using images of the Patient. The Implantation Plan SR Document references the implant templates, the images, and the registration SOP Instances that are used in the planning. SOP Class UID: 1.2.840.10008.5.1.4.1.1.88.70 (Implantation Plan SR Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (implantation-plan-sr-document)."
  },
  {
    "code": "C3S",
    "display": "Comprehensive 3D SR",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Comprehensive 3D SR IOD is a superset of the Comprehensive SR IOD, which specifies a class of documents, the content of which may include textual and a variety of coded information, numeric measurement values, references to the SOP Instances and 2D or 3D spatial or temporal regions of interest within such SOP Instances. Relationships by-reference are enabled between Content Items. SOP Class UID: 1.2.840.10008.5.1.4.1.1.88.34 (Comprehensive 3D SR Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (comprehensive-3d-sr)."
  },
  {
    "code": "RRDS",
    "display": "Radiopharmaceutical Radiation Dose SR",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Radiopharmaceutical Radiation Dose SR IOD is used to convey the exposure characteristics and dose from the administration of radiopharmaceuticals. SOP Class UID: 1.2.840.10008.5.1.4.1.1.88.68 (Radiopharmaceutical Radiation Dose SR Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (radiopharmaceutical-radiation-dose-sr)."
  },
  {
    "code": "ES-4",
    "display": "Extensible SR",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Extensible SR IOD specifies support for all SR Content Item and relationship types currently defined and that may be added in the future. SOP Class UID: 1.2.840.10008.5.1.4.1.1.88.35 (Extensible SR Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (extensible-sr)."
  },
  {
    "code": "ACS",
    "display": "Acquisition Context SR",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Acquisition Context SR IOD is used to represent the description of the conditions present during data acquisition of other data that is stored separately (such as images). SOP Class UID: 1.2.840.10008.5.1.4.1.1.88.71 (Acquisition Context SR Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (acquisition-context-sr)."
  },
  {
    "code": "SAES",
    "display": "Simplified Adult Echo SR",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Simplified Adult Echo SR IOD is used to convey measurements collected in association with an adult echocardiography procedure. SOP Class UID: 1.2.840.10008.5.1.4.1.1.88.72 (Simplified Adult Echo SR Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (simplified-adult-echo-sr)."
  },
  {
    "code": "PRDS",
    "display": "Patient Radiation Dose SR",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Patient Radiation Dose SR IOD is used to convey the information used in the calculations for estimating the radiation dose to an individual Patient. The complexity of the calculations and the precision of the resulting dose estimate will vary depending on the need. SOP Class UID: 1.2.840.10008.5.1.4.1.1.88.73 (Patient Radiation Dose SR Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (patient-radiation-dose-sr)."
  },
  {
    "code": "PIAAS",
    "display": "Planned Imaging Agent Administration SR",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Planned Imaging Agent Administration SR IOD is the plan for administering imaging agent material to a specific patient during an imaging study. SOP Class UID: 1.2.840.10008.5.1.4.1.1.88.74 (Planned Imaging Agent Administration SR Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (planned-imaging-agent-administration-sr)."
  },
  {
    "code": "PIAAS-2",
    "display": "Performed Imaging Agent Administration SR",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Performed Imaging Agent Administration SR IOD describes the imaging agent delivery whether manual methods or automated power-injector devices were used. It includes a reference to the Planned Imaging Agent Administration Procedure SR SOP Instance if based on a plan. SOP Class UID: 1.2.840.10008.5.1.4.1.1.88.75 (Performed Imaging Agent Administration SR Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (performed-imaging-agent-administration-sr)."
  },
  {
    "code": "RSD",
    "display": "Rendition Selection Document",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Rendition Selection Document IOD associates a group of time-synchronized Flows produced for a simultaneous presentation, transported using DICOM-RTV. Standard: NEMA DICOM PS3.3 / PS3.4 (rendition-selection-document)."
  },
  {
    "code": "EXRDS",
    "display": "Enhanced X-Ray Radiation Dose SR",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Enhanced X-Ray Radiation Dose SR IOD addresses cone-beam CT and tomosynthesis. This generic radiation description is capable of representing previously addressed acquisition types (Angiography, Mammography, CR/DR, CT). SOP Class UID: 1.2.840.10008.5.1.4.1.1.88.76 (Enhanced X-Ray Radiation Dose SR Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (enhanced-x-ray-radiation-dose-sr)."
  },
  {
    "code": "MR-ENH",
    "display": "Enhanced MR Image",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Magnetic Resonance (MR)",
    "description": "The Enhanced Magnetic Resonance (MR) Image IOD specifies an image, which has been created by a magnetic resonance device. SOP Class UID: 1.2.840.10008.5.1.4.1.1.4.1 (Enhanced MR Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (enhanced-mr-image)."
  },
  {
    "code": "MRS",
    "display": "MR Spectroscopy",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Magnetic Resonance Spectroscopy (MRS)",
    "description": "The Magnetic Resonance (MR) Spectroscopy IOD specifies spectroscopic data, which has been created by a magnetic resonance device. SOP Class UID: 1.2.840.10008.5.1.4.1.1.4.2 (MR Spectroscopy Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (mr-spectroscopy)."
  },
  {
    "code": "MR-ENH-2",
    "display": "Enhanced MR Color Image",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Magnetic Resonance (MR)",
    "description": "The Enhanced Magnetic Resonance (MR) Color Image IOD specifies an image, which has been created by a magnetic resonance device. SOP Class UID: 1.2.840.10008.5.1.4.1.1.4.3 (Enhanced MR Color Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (enhanced-mr-color-image)."
  },
  {
    "code": "RD",
    "display": "Raw Data",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Raw Data IOD specifies raw data. SOP Class UID: 1.2.840.10008.5.1.4.1.1.66 (Raw Data Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (raw-data)."
  },
  {
    "code": "CT-ENH",
    "display": "Enhanced CT Image",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Computed Tomography (CT)",
    "description": "The Enhanced Computed Tomography (CT) Image IOD specifies an image that has been created by a computed tomography imaging device. SOP Class UID: 1.2.840.10008.5.1.4.1.1.2.1 (Enhanced CT Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (enhanced-ct-image)."
  },
  {
    "code": "SR-4",
    "display": "Spatial Registration",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Registration IOD specifies the spatial relationship between Frames of Reference. SOP Class UID: 1.2.840.10008.5.1.4.1.1.66.1 (Spatial Registration Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (spatial-registration)."
  },
  {
    "code": "DSR",
    "display": "Deformable Spatial Registration",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Deformable Spatial Registration IOD describes spatial relationships between images in one or more frames of reference via deformation grids and transformation matrices. The deformations and transformations describe to an application how to sample data from one or more Source RCS into the Registered RCS. SOP Class UID: 1.2.840.10008.5.1.4.1.1.66.3 (Deformable Spatial Registration Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (deformable-spatial-registration)."
  },
  {
    "code": "SF",
    "display": "Spatial Fiducials",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Fiducials IOD specifies the spatial relationship between the Composite Fiducial Instance, to one or more images. SOP Class UID: 1.2.840.10008.5.1.4.1.1.66.2 (Spatial Fiducials Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (spatial-fiducials)."
  },
  {
    "code": "OP",
    "display": "Ophthalmic Photography 8 Bit Image",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Ophthalmic Photography (OP)",
    "description": "The Ophthalmic Photography 8 Bit Image IOD specifies a single-frame or a multi-frame image acquired on a digital photographic DICOM modality. This IOD can be used to encode single ophthalmic images and cine sequences. SOP Class UID: 1.2.840.10008.5.1.4.1.1.77.1.5.1 (Ophthalmic Photography 8 Bit Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (ophthalmic-photography-8-bit-image)."
  },
  {
    "code": "OP-2",
    "display": "Ophthalmic Photography 16 Bit Image",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Ophthalmic Photography (OP)",
    "description": "The Ophthalmic Photography 16 Bit Image IOD specifies a single-frame or a multi-frame image acquired on a digital photographic DICOM modality. This IOD can be used to encode single ophthalmic images and other combinations including cine sequences. SOP Class UID: 1.2.840.10008.5.1.4.1.1.77.1.5.2 (Ophthalmic Photography 16 Bit Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (ophthalmic-photography-16-bit-image)."
  },
  {
    "code": "SR-5",
    "display": "Stereometric Relationship",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "This Section defines an Information Object to be used for linking together images belonging to stereoscopic pairs. A Series IE will typically contain a single Stereometric Relationship IE that references one or more sets of stereoscopic images. Stereoscopic pairs for ophthalmic photographic imaging may include single images, multi-frame images, or cine images. SOP Class UID: 1.2.840.10008.5.1.4.1.1.77.1.5.3 (Stereometric Relationship Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (stereometric-relationship)."
  },
  {
    "code": "HP",
    "display": "Hanging Protocol",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "A Hanging Protocol entity specifies the viewing preferences of a specific user or group, for a specific type of Study (Modality, Anatomy, Laterality combination, and optionally Procedure, and/or Reason), that may be exchanged between connecting devices that claim conformance to the DICOM Standard. The Hanging Protocol contains information about the Hanging Protocol, the creator, the type of Study it addresses, the type of image sets to display, the intended display environment, and the intended layout for the screen(s). SOP Class UID: 1.2.840.10008.5.1.4.38.1 (Hanging Protocol Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (hanging-protocol)."
  },
  {
    "code": "DOC-PDF",
    "display": "Encapsulated PDF",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Encapsulated Documents",
    "description": "The Encapsulated PDF IOD describes a PDF document that has been encapsulated within a DICOM Information Object. SOP Class UID: 1.2.840.10008.5.1.4.1.1.104.1 (Encapsulated PDF Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (encapsulated-pdf)."
  },
  {
    "code": "DOC-CDA",
    "display": "Encapsulated CDA",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Encapsulated Documents",
    "description": "The Encapsulated CDA IOD describes an HL7 Clinical Document Architecture (CDA) document that has been encapsulated within a DICOM Information Object. SOP Class UID: 1.2.840.10008.5.1.4.1.1.104.2 (Encapsulated CDA Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (encapsulated-cda)."
  },
  {
    "code": "RWVM",
    "display": "Real World Value Mapping",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Real World Value Mapping IOD specifies a mapping of the stored pixel values of referenced images into some Real World value in defined units. This allows the capture of retrospectively determined mappings, e.g., for values that cannot be determined at the time of image acquisition and encoding. SOP Class UID: 1.2.840.10008.5.1.4.1.1.67 (Real World Value Mapping Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (real-world-value-mapping)."
  },
  {
    "code": "XA-ENH",
    "display": "Enhanced XA Image",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "X-Ray Angiography (XA)",
    "description": "This Section defines the enhanced Information Object for single plane X-Ray Angiographic Imaging that includes those Attributes and Information Objects necessary for the interchange of digital X-Ray Angiographic data. This includes images of the heart and all blood vessels. SOP Class UID: 1.2.840.10008.5.1.4.1.1.12.1.1 (Enhanced XA Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (enhanced-xa-image)."
  },
  {
    "code": "EX",
    "display": "Enhanced XRF Image",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The focus for this Enhanced XRF IOD is to address the requirements for image transfer found in general Radiofluoroscopic applications performed on a table with a column. For applications performed on X-Ray RF acquisition systems that support a Patient-Based Coordinate System with cranial/caudal, LAO/RAO angles, etc. the enhanced XA Image IOD may be used. SOP Class UID: 1.2.840.10008.5.1.4.1.1.12.2.1 (Enhanced XRF Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (enhanced-xrf-image)."
  },
  {
    "code": "RTPLAN-ION",
    "display": "RT Ion Plan",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Radiation Therapy (RT)",
    "description": "The focus for this Radiotherapy Ion Plan IOD (RT Ion Plan IOD) is to address the requirements for transfer of treatment plans generated by manual entry, a virtual simulation system, or a treatment planning system before or during a course of Ion therapy treatment. Such plans may contain fractionation information, and define Ion beams. SOP Class UID: 1.2.840.10008.5.1.4.1.1.481.8 (RT Ion Plan Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (rt-ion-plan)."
  },
  {
    "code": "RT-ION",
    "display": "RT Ion Beams Treatment Record",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Radiation Therapy (RT)",
    "description": "The Radiotherapy Ion Beams Treatment Record IOD (RT Ion Beams Treatment Record IOD) addresses the requirements for transfer of treatment session reports generated by a treatment verification system during a course of Ion beam treatment, with optional cumulative summary information. It may also be used for transfer of treatment information during delivery. SOP Class UID: 1.2.840.10008.5.1.4.1.1.481.9 (RT Ion Beams Treatment Record Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (rt-ion-beams-treatment-record)."
  },
  {
    "code": "SEG",
    "display": "Segmentation",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Segmentation & 3D Modeling",
    "description": "The Segmentation IOD specifies a multi-frame image representing a classification of pixels in one or more referenced images. Segmentations are either binary or fractional. If the referenced images have a defined Frame of Reference, the Segmentation Instance shall have the same Frame of Reference and is not required to have the same spatial sampling or extent as the referenced images. If the referenced image does not have a defined Frame of Reference, the Segmentation Instance shall have the same spatial sampling and extent as the referenced image. SOP Class UID: 1.2.840.10008.5.1.4.1.1.66.4 (Segmentation Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (segmentation)."
  },
  {
    "code": "OPT",
    "display": "Ophthalmic Tomography Image",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Ophthalmic Tomography (OPT)",
    "description": "The Ophthalmic Tomography Image IOD specifies a single-frame or a multi-frame image acquired on an Ophthalmic Tomography modality. This IOD can be used to encode both single and multi-frame ophthalmic images. SOP Class UID: 1.2.840.10008.5.1.4.1.1.77.1.5.4 (Ophthalmic Tomography Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (ophthalmic-tomography-image)."
  },
  {
    "code": "X3A",
    "display": "X-Ray 3D Angiographic Image",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "This Section defines the Information Object for multi-dimensional reconstructed cone beam X-Ray Angiographic Images and includes those Attributes and Information Objects necessary for the interchange of Multi-dimensional X-Ray volumes. SOP Class UID: 1.2.840.10008.5.1.4.1.1.13.1.1 (X-Ray 3D Angiographic Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (x-ray-3d-angiographic-image)."
  },
  {
    "code": "X3C",
    "display": "X-Ray 3D Craniofacial Image",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "This Section defines the Information Object for multi-dimensional reconstructed cone beam X-Ray Craniofacial Images and includes those Attributes and Information Objects necessary for the interchange of Multi-dimensional X-Ray volumes. SOP Class UID: 1.2.840.10008.5.1.4.1.1.13.1.2 (X-Ray 3D Craniofacial Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (x-ray-3d-craniofacial-image)."
  },
  {
    "code": "BT",
    "display": "Breast Tomosynthesis Image",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "This Section defines the Information Object for multi-dimensional reconstructed breast tomosynthesis X-Ray Images that includes those Attributes and Information Objects necessary for the interchange of multi-dimensional breast tomosynthesis X-Ray volumes. SOP Class UID: 1.2.840.10008.5.1.4.1.1.13.1.3 (Breast Tomosynthesis Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (breast-tomosynthesis-image)."
  },
  {
    "code": "PT-ENH",
    "display": "Enhanced PET Image",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Positron Emission Tomography (PET)",
    "description": "The Enhanced Positron Emission Tomography (PET) Image IOD specifies an image that has been created by a positron emission tomography coincidence imaging device. SOP Class UID: 1.2.840.10008.5.1.4.1.1.130 (Enhanced PET Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (enhanced-pet-image)."
  },
  {
    "code": "SEG-2",
    "display": "Surface Segmentation",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Segmentation & 3D Modeling",
    "description": "The Surface Segmentation IOD specifies a polygonal representation of a three dimensional surface. A Surface Segmentation SOP Instance may reference an externally defined coordinate system via the Frame of Reference UID (0020,0052) or establish its own coordinate system. SOP Class UID: 1.2.840.10008.5.1.4.1.1.66.5 (Surface Segmentation Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (surface-segmentation)."
  },
  {
    "code": "CP",
    "display": "Color Palette",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "A Color Palette entity specifies a color palette suitable for application to a grayscale image or parametric map. SOP Class UID: 1.2.840.10008.5.1.4.39.1 (Color Palette Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (color-palette)."
  },
  {
    "code": "EUV",
    "display": "Enhanced US Volume",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "Image objects of different types may be created from a 3D Ultrasound image acquisition, illustrated in Figure A.59-1 . It can be seen that there are two different types of data related to 3D image acquisition: 3D volume data and several kinds of 2D image derived from the volume data. SOP Class UID: 1.2.840.10008.5.1.4.1.1.6.2 (Enhanced US Volume Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (enhanced-us-volume)."
  },
  {
    "code": "LM",
    "display": "Lensometry Measurements",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Lensometry Measurements IOD is used to capture the refractive measurements by a lensometer of spectacles. SOP Class UID: 1.2.840.10008.5.1.4.1.1.78.1 (Lensometry Measurements Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (lensometry-measurements)."
  },
  {
    "code": "AM",
    "display": "Autorefraction Measurements",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Autorefraction Measurements IOD is used to encode the results of a modality (autorefractor) that automatically determines, without Patient input, what a Patient's refractive correction should be. SOP Class UID: 1.2.840.10008.5.1.4.1.1.78.2 (Autorefraction Measurements Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (autorefraction-measurements)."
  },
  {
    "code": "KM",
    "display": "Keratometry Measurements",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Keratometry Measurements IOD is used to encode the measurements of a modality (keratometer) that measures the curvature, and thus the refractive power, of a Patient's cornea. SOP Class UID: 1.2.840.10008.5.1.4.1.1.78.3 (Keratometry Measurements Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (keratometry-measurements)."
  },
  {
    "code": "SRM",
    "display": "Subjective Refraction Measurements",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Subjective Refraction Measurements IOD is used for encoding the measurements that subjectively determine the refractive correction of the eye that results in best corrected visual acuity. SOP Class UID: 1.2.840.10008.5.1.4.1.1.78.4 (Subjective Refraction Measurements Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (subjective-refraction-measurements)."
  },
  {
    "code": "VA",
    "display": "Visual Acuity Measurements",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Visual Acuity (VA)",
    "description": "The Visual Acuity Measurements IOD is used to capture a Patient's visual acuity relative to that of a reference standard Patient under given viewing conditions (distance, lighting, etc.). SOP Class UID: 1.2.840.10008.5.1.4.1.1.78.5 (Visual Acuity Measurements Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (visual-acuity-measurements)."
  },
  {
    "code": "OAM",
    "display": "Ophthalmic Axial Measurements",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Ophthalmic Axial Measurements IOD is used to encode axial measurements of the eye made by an axial measurements device. SOP Class UID: 1.2.840.10008.5.1.4.1.1.78.7 (Ophthalmic Axial Measurements Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (ophthalmic-axial-measurements)."
  },
  {
    "code": "ILC",
    "display": "Intraocular Lens Calculations",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Intraocular Lens Calculations IOD is used to encode calculations performed by ophthalmic axial measurements devices or by standalone software. Data input to these calculations comes both from the devices and from other sources. SOP Class UID: 1.2.840.10008.5.1.4.1.1.78.8 (Intraocular Lens Calculations Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (intraocular-lens-calculations)."
  },
  {
    "code": "GIT",
    "display": "Generic Implant Template",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Generic Implant Template IOD specifies the description of a 2D- and/or 3D-template representing a rigid and passive implant. The specific properties of flexible implants, such as silicone implants, and active implants such as cardiac pacemakers are not reflected. The IOD contains mechanisms for implant assembly, i.e., the rigid connection of two or more implants and implant registration, i.e., the placement of an implant in relation to anatomical landmarks. SOP Class UID: 1.2.840.10008.5.1.4.43.1 (Generic Implant Template Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (generic-implant-template)."
  },
  {
    "code": "IAT",
    "display": "Implant Assembly Template",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "Implant Assembly Templates describe how to combine several implants to fulfill a certain purpose. The Implant Assembly Templates describe the aspects of component assembly that are relevant to planning only. Implants that are made out of several parts but are treated as a single piece may be described as single Implant Template. SOP Class UID: 1.2.840.10008.5.1.4.44.1 (Implant Assembly Template Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (implant-assembly-template)."
  },
  {
    "code": "ITG",
    "display": "Implant Template Group",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Implant Template Group IOD facilitates the aggregation of a set of Implant Template Instances in an ordered set. SOP Class UID: 1.2.840.10008.5.1.4.45.1 (Implant Template Group Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (implant-template-group)."
  },
  {
    "code": "RBDI",
    "display": "RT Beams Delivery Instruction",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The RT Beams Delivery Instruction IOD contains all the parameters needed to deliver a radiation therapy treatment fraction that are not already described in the referenced RT Plan IOD . SOP Class UID: 1.2.840.10008.5.1.4.34.7 (RT Beams Delivery Instruction Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (rt-beams-delivery-instruction)."
  },
  {
    "code": "OVFSPM",
    "display": "Ophthalmic Visual Field Static Perimetry Measurements",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Ophthalmic Visual Field Static Perimetry Measurements IOD is used to encode results of static perimetry with visual field devices. SOP Class UID: 1.2.840.10008.5.1.4.1.1.80.1 (Ophthalmic Visual Field Static Perimetry Measurements Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (ophthalmic-visual-field-static-perimetry-measurements)."
  },
  {
    "code": "OTM",
    "display": "Ophthalmic Thickness Map",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Ophthalmic Thickness Map IOD is generated by ophthalmic thickness mapping devices, such as retinal nerve fiber layer analyzers and optic nerve head analyzers, to generate measurements that are presented topographically using a monochromatic image and a pseudo-color map. SOP Class UID: 1.2.840.10008.5.1.4.1.1.81.1 (Ophthalmic Thickness Map Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (ophthalmic-thickness-map)."
  },
  {
    "code": "SURF",
    "display": "Surface Scan Mesh",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Surface & 3D Scanning",
    "description": "The Surface Scan Mesh IOD specifies a triangulated surface generated by an optical surface scanner. The Surface Scan Mesh IOD stores a surface including UV mapping combined with device specific parameters. SOP Class UID: 1.2.840.10008.5.1.4.1.1.68.1 (Surface Scan Mesh Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (surface-scan-mesh)."
  },
  {
    "code": "SURF-2",
    "display": "Surface Scan Point Cloud",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Surface & 3D Scanning",
    "description": "The Surface Scan Point Cloud IOD specifies a point cloud generated by an optical surface scanner. Multiple Point Clouds within the same Series shall be from the same anatomical region, but they do not need to be in the same coordinate system. SOP Class UID: 1.2.840.10008.5.1.4.1.1.68.2 (Surface Scan Point Cloud Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (surface-scan-point-cloud)."
  },
  {
    "code": "LCEC",
    "display": "Legacy Converted Enhanced CT Image",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Legacy Converted Enhanced Computed Tomography (CT) Image IOD specifies an image that has been converted from images originally created by a computed tomography imaging device. SOP Class UID: 1.2.840.10008.5.1.4.1.1.2.2 (Legacy Converted Enhanced CT Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (legacy-converted-enhanced-ct-image)."
  },
  {
    "code": "LCEM",
    "display": "Legacy Converted Enhanced MR Image",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Legacy Converted Enhanced Magnetic Resonance (MR) Image IOD specifies an image that has been converted from images originally created by a magnetic resonance imaging device. SOP Class UID: 1.2.840.10008.5.1.4.1.1.4.4 (Legacy Converted Enhanced MR Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (legacy-converted-enhanced-mr-image)."
  },
  {
    "code": "LCEP",
    "display": "Legacy Converted Enhanced PET Image",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Legacy Converted Enhanced Positron Emission Tomography (PET) Image IOD specifies an image that has been converted from images originally created by a positron emission tomography coincidence imaging device. SOP Class UID: 1.2.840.10008.5.1.4.1.1.128.1 (Legacy Converted Enhanced PET Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (legacy-converted-enhanced-pet-image)."
  },
  {
    "code": "CTM",
    "display": "Corneal Topography Map",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Corneal Topography Map IOD is generated by ophthalmic corneal topography mapping devices, such as reflection-based topography and elevation-based tomography instruments to generate curvature and/or elevation measurements of corneal anterior and posterior surfaces that are presented topographically using a monochromatic image and a pseudo-color map. The pseudo-colored map may be superimposed over the source image for display. SOP Class UID: 1.2.840.10008.5.1.4.1.1.82.1 (Corneal Topography Map Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (corneal-topography-map)."
  },
  {
    "code": "BPX",
    "display": "Breast Projection X-Ray Image",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Breast Projection X-Ray Image IOD specifies an image set that has been created by a digital mammography projection radiography imaging device. SOP Class UID: 1.2.840.10008.5.1.4.1.1.13.1.4 (Breast Projection X-Ray Image Storage - For Presentation). Standard: NEMA DICOM PS3.3 / PS3.4 (breast-projection-x-ray-image)."
  },
  {
    "code": "PM",
    "display": "Parametric Map",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Quantitative Parametric Imaging",
    "description": "The Parametric Map IOD specifies a multi-frame image representing pixels with Real World Values. Parametric Maps are either integer or floating point. SOP Class UID: 1.2.840.10008.5.1.4.1.1.30 (Parametric Map Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (parametric-map)."
  },
  {
    "code": "OP-3",
    "display": "Wide Field Ophthalmic Photography Stereographic Projection Image",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Ophthalmic Photography (OP)",
    "description": "The Wide Field Ophthalmic Photography Stereographic Projection Image IOD specifies a multi-frame image acquired on a digital photographic DICOM modality. This IOD can be used to encode single wide field ophthalmic images and other combinations including cine sequences. This IOD captures the projection of the wide field 2D Pixel image to enable anatomically-correct geometric measurements of the retina by taking into account the curved shape of the eye using a sphere to approximate shape. SOP Class UID: 1.2.840.10008.5.1.4.1.1.77.1.5.5 (Wide Field Ophthalmic Photography Stereographic Projection Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (wide-field-ophthalmic-photography-stereographic-projection-image)."
  },
  {
    "code": "OP-4",
    "display": "Wide Field Ophthalmic Photography 3D Coordinates Image",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Ophthalmic Photography (OP)",
    "description": "The Wide Field Ophthalmic Photography 3D Coordinates Image IOD specifies a multi-frame image acquired on a digital photographic DICOM modality. This IOD can be used to encode single wide field ophthalmic images and other combinations including cine sequences. This IOD includes the mapping of the wide field 2D Pixel image to 3D (x,y,z) Cartesian coordinates. SOP Class UID: 1.2.840.10008.5.1.4.1.1.77.1.5.6 (Wide Field Ophthalmic Photography 3D Coordinates Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (wide-field-ophthalmic-photography-3d-coordinates-image)."
  },
  {
    "code": "TG",
    "display": "Tractography Results",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Diffusion Tractography",
    "description": "The Tractography Results IOD encodes tractography results into a collection of track sets. A track set collects a set of tracks containing the set of x, y and z coordinates of each point making up the track. Additional quantities like Fractional Anisotropy values, color, descriptive statistical values, etc. may be associated with track set, track or point. SOP Class UID: 1.2.840.10008.5.1.4.1.1.66.6 (Tractography Results Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (tractography-results)."
  },
  {
    "code": "RT-BRACHY-2",
    "display": "RT Brachy Application Setup Delivery Instruction",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Radiation Therapy (RT)",
    "description": "In order to deliver a Brachytherapy treatment fraction described in an RT Plan IOD, the RT Brachy Application Setup Delivery Instruction IOD describes which part of the RT Plan is to be delivered and contains additional parameters. This information is supplied by a Treatment Management System (TMS) when it creates an RT Brachy Application Setup Delivery Instruction SOP Instance which is referenced by a Unified Procedure Step (UPS) in the Unified Worklist and Procedure Step model. SOP Class UID: 1.2.840.10008.5.1.4.34.10 (RT Brachy Application Setup Delivery Instruction Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (rt-brachy-application-setup-delivery-instruction)."
  },
  {
    "code": "PMVPS",
    "display": "Planar MPR Volumetric Presentation State",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Planar MPR Volumetric Presentation State IOD specifies information that defines a Planar MPR presentation from volume data sets that are referenced from within the IOD. SOP Class UID: 1.2.840.10008.5.1.4.1.1.11.6 (Grayscale Planar MPR Volumetric Presentation State Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (planar-mpr-volumetric-presentation-state)."
  },
  {
    "code": "VRVPS",
    "display": "Volume Rendering Volumetric Presentation State",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Volume Rendering Volumetric Presentation State IOD specifies information that defines a Volume Rendering presentation from volume data sets that are referenced from within the IOD. SOP Class UID: 1.2.840.10008.5.1.4.1.1.11.9 (Volume Rendering Volumetric Presentation State Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (volume-rendering-volumetric-presentation-state)."
  },
  {
    "code": "AS",
    "display": "Content Assessment Results",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Quality & Content Assessment",
    "description": "This IOD represents the results of an assessment of the content of one or more SOP Instance(s). The assessment may be performed automatically without human intervention. There is no provision for encoding verification or approval by a human, although a human may be involved in determining whether the contents meet certain criteria. This IOD is not intended to communicate approval to proceed with the clinical workflow. SOP Class UID: 1.2.840.10008.5.1.4.1.1.90.1 (Content Assessment Results Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (content-assessment-results)."
  },
  {
    "code": "CPPP",
    "display": "CT Performed Procedure Protocol",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The CT Performed Procedure Protocol IOD describes acquisition and reconstruction protocol parameter values used during a specific performed CT procedure. SOP Class UID: 1.2.840.10008.5.1.4.1.1.200.2 (CT Performed Procedure Protocol Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (ct-performed-procedure-protocol)."
  },
  {
    "code": "CDPP",
    "display": "CT Defined Procedure Protocol",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The CT Defined Procedure Protocol IOD describes acquisition protocol parameters and related details for a defined CT procedure. SOP Class UID: 1.2.840.10008.5.1.4.1.1.200.1 (CT Defined Procedure Protocol Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (ct-defined-procedure-protocol)."
  },
  {
    "code": "PA",
    "display": "Protocol Approval",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Protocol Approval IOD describes approval-related Assertions made by people, organizations and devices about Instances. SOP Class UID: 1.2.840.10008.5.1.4.1.1.200.3 (Protocol Approval Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (protocol-approval)."
  },
  {
    "code": "XPPP",
    "display": "XA Performed Procedure Protocol",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The XA Performed Procedure Protocol IOD describes acquisition, reconstruction, and storage protocol parameter values used during a specific performed XA procedure. SOP Class UID: 1.2.840.10008.5.1.4.1.1.200.8 (XA Performed Procedure Protocol Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (xa-performed-procedure-protocol)."
  },
  {
    "code": "XDPP",
    "display": "XA Defined Procedure Protocol",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The XA Defined Procedure Protocol IOD describes acquisition protocol parameters and related details for a defined XA procedure. SOP Class UID: 1.2.840.10008.5.1.4.1.1.200.7 (XA Defined Procedure Protocol Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (xa-defined-procedure-protocol)."
  },
  {
    "code": "OCT-2",
    "display": "Ophthalmic Optical Coherence Tomography En Face Image",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Optical Coherence Tomography (OCT)",
    "description": "The Ophthalmic Optical Coherence Tomography En Face Image IOD specifies a single-frame image derived from images obtained using OCT technology. This IOD encodes a single derived en face image. SOP Class UID: 1.2.840.10008.5.1.4.1.1.77.1.5.7 (Ophthalmic Optical Coherence Tomography En Face Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (ophthalmic-optical-coherence-tomography-en-face-image)."
  },
  {
    "code": "OCT-3",
    "display": "Ophthalmic Optical Coherence Tomography B-scan Volume Analysis",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Optical Coherence Tomography (OCT)",
    "description": "The Ophthalmic Optical Coherence Tomography B-scan Volume Analysis IOD specifies a multi-frame image conveying ophthalmic optical coherence tomography volumetric B-scan volume analysis information (e.g., angiographic (blood flow) volume information). SOP Class UID: 1.2.840.10008.5.1.4.1.1.77.1.5.8 (Ophthalmic Optical Coherence Tomography B-scan Volume Analysis Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (ophthalmic-optical-coherence-tomography-b-scan-volume-analysis)."
  },
  {
    "code": "DOC-STL",
    "display": "Encapsulated STL",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "3D Manufacturing & Printing",
    "description": "The Encapsulated STL IOD describes a 3D model in Stereolithography (STL) format that has been encapsulated within a DICOM Information Object. SOP Class UID: 1.2.840.10008.5.1.4.1.1.104.3 (Encapsulated STL Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (encapsulated-stl)."
  },
  {
    "code": "DOC-OBJ",
    "display": "Encapsulated OBJ",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "3D Manufacturing & Printing",
    "description": "The Encapsulated OBJ IOD describes a 3D model in OBJ format. Any supporting material library file (MTL) and supporting 2D texture map image files are addressed in other distinct IODs (see Section A.85.3.1 and Section A.8.5.4 ). SOP Class UID: 1.2.840.10008.5.1.4.1.1.104.4 (Encapsulated OBJ Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (encapsulated-obj)."
  },
  {
    "code": "DOC-MTL",
    "display": "Encapsulated MTL",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "3D Manufacturing & Printing",
    "description": "The Encapsulated MTL IOD describes in MTL format a materials library used by an Encapsulated OBJ 3D model (see Section A.85.2.1 ). SOP Class UID: 1.2.840.10008.5.1.4.1.1.104.5 (Encapsulated MTL Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (encapsulated-mtl)."
  },
  {
    "code": "RPI",
    "display": "RT Physician Intent",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The RT Physician Intent IOD carries the prescriptions by which the physician describes the therapeutic goal and strategy for the radiotherapeutic treatment. SOP Class UID: 1.2.840.10008.5.1.4.1.1.481.10 (RT Physician Intent Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (rt-physician-intent)."
  },
  {
    "code": "RSA",
    "display": "RT Segment Annotation",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The RT Segment Annotation IOD annotates any general-purpose entity that represents geometric information such as Segmentation IOD , Surface Segmentation IOD , and RT Structure Set IOD with radiotherapy-specific information that cannot be encoded in the content of the annotated SOP Instance, or overrides that content with new or additional interpretation. SOP Class UID: 1.2.840.10008.5.1.4.1.1.481.11 (RT Segment Annotation Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (rt-segment-annotation)."
  },
  {
    "code": "RRS",
    "display": "RT Radiation Set",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The RT Radiation Set IOD represents an RT Radiation Set, which is a set of radiation deliveries that are intended to be delivered together in a single fraction (see Section 7.14.5 ). The RT Radiation Set also contains a description of the fractionation pattern, the intended number of fractions and the associated dose contributions. SOP Class UID: 1.2.840.10008.5.1.4.1.1.481.12 (RT Radiation Set Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (rt-radiation-set)."
  },
  {
    "code": "CPR",
    "display": "C-Arm Photon-Electron Radiation",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The C-Arm Photon-Electron Radiation IOD describes a radiotherapy treatment to be performed on a C-Arm delivery device using photon or electron radiation. SOP Class UID: 1.2.840.10008.5.1.4.1.1.481.13 (C-Arm Photon-Electron Radiation Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (c-arm-photon-electron-radiation)."
  },
  {
    "code": "TR",
    "display": "Tomotherapeutic Radiation",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Tomotherapeutic Radiation IOD represents the information required to describe a radiotherapy treatment on a serial or helical tomotherapeutic delivery device. SOP Class UID: 1.2.840.10008.5.1.4.1.1.481.14 (Tomotherapeutic Radiation Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (tomotherapeutic-radiation)."
  },
  {
    "code": "RR",
    "display": "Robotic-Arm Radiation",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Robotic-Arm Radiation IOD specifies the Robotic Path and collimation parameters required to describe a radiotherapy treatment on a robotic-arm delivery device. A Robotic Path is a sequence of Robotic Nodes. A Robotic Node specifies a Radiation Source location for a Robotic-Arm delivery device. SOP Class UID: 1.2.840.10008.5.1.4.1.1.481.15 (Robotic-Arm Radiation Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (robotic-arm-radiation)."
  },
  {
    "code": "RRRS",
    "display": "RT Radiation Record Set",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": " SOP Class UID: 1.2.840.10008.5.1.4.1.1.481.16 (RT Radiation Record Set Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (rt-radiation-record-set)."
  },
  {
    "code": "RRSR",
    "display": "RT Radiation Salvage Record",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The RT Radiation Salvage Record IOD contains the record of a complete or partial fraction of therapeutic radiation delivered using any therapeutic device where recording by the modality-specific RT Radiation Record IOD was not possible. SOP Class UID: 1.2.840.10008.5.1.4.1.1.481.17 (RT Radiation Salvage Record Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (rt-radiation-salvage-record)."
  },
  {
    "code": "CPRR",
    "display": "C-Arm Photon-Electron Radiation Record",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The C-Arm Photon-Electron Radiation Record IOD contains the record of a radiotherapy treatment that has been performed using a C-Arm Photon-Electron Radiation SOP Instance. SOP Class UID: 1.2.840.10008.5.1.4.1.1.481.19 (C-Arm Photon-Electron Radiation Record Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (c-arm-photon-electron-radiation-record)."
  },
  {
    "code": "TRR",
    "display": "Tomotherapeutic Radiation Record",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Tomotherapeutic Radiation Record IOD contains the record of a radiotherapy treatment that has been performed using a Tomotherapeutic Radiation SOP Instance. SOP Class UID: 1.2.840.10008.5.1.4.1.1.481.18 (Tomotherapeutic Radiation Record Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (tomotherapeutic-radiation-record)."
  },
  {
    "code": "RRR",
    "display": "Robotic-Arm Radiation Record",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Robotic-Arm Radiation Record IOD contains the record of a radiotherapy treatment that has been performed using a Robotic-Arm Radiation SOP Instance. SOP Class UID: 1.2.840.10008.5.1.4.1.1.481.20 (Robotic Radiation Record Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (robotic-arm-radiation-record)."
  },
  {
    "code": "RRSDI",
    "display": "RT Radiation Set Delivery Instruction",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The RT Radiation Set Delivery Instruction IOD contains all the parameters needed to deliver a single RT Treatment Fraction of one RT Radiation Set in the scope of one RT Treatment Session. It handles either the delivery of the complete fraction of the RT Radiation Set or the continuation of a formerly treated fraction which was interrupted and not completely delivered. SOP Class UID: 1.2.840.10008.5.1.4.1.1.481.21 (RT Radiation Set Delivery Instruction Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (rt-radiation-set-delivery-instruction)."
  },
  {
    "code": "RTP",
    "display": "RT Treatment Preparation",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The RT Treatment Preparation IOD describes the setup of the patient in preparation for delivery of the therapeutic radiation within an RT Treatment Session. It may include an initial patient’s position in preparation for treatment delivery, the treatment setup positions, or setup procedures along with the use of any fixation or shielding devices. SOP Class UID: 1.2.840.10008.5.1.4.1.1.481.22 (RT Treatment Preparation Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (rt-treatment-preparation)."
  },
  {
    "code": "ER",
    "display": "Enhanced RT Image",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Enhanced RT Image IOD represents projection images generated before, during or after Radiotherapy treatment sessions. The projection images may be acquired directly or may be derived (\"reconstructed\") from volumetric data such as CT. Such images capture the patient geometry to guide, or record, the positioning of the patient on a patient support device to deliver therapeutic dose to an intended location. SOP Class UID: 1.2.840.10008.5.1.4.1.1.481.23 (Enhanced RT Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (enhanced-rt-image)."
  },
  {
    "code": "ECR",
    "display": "Enhanced Continuous RT Image",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Enhanced Continuous RT Image IOD represents projection images generated before, during or after Radiotherapy treatment sessions. The projection images may be acquired directly or may be derived (\"reconstructed\") from volumetric data such as CT. Such images capture the patient geometry to guide, or record, the positioning of the patient on a patient support device to deliver therapeutic dose to an intended location. SOP Class UID: 1.2.840.10008.5.1.4.1.1.481.24 (Enhanced Continuous RT Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (enhanced-continuous-rt-image)."
  },
  {
    "code": "RPPAI",
    "display": "RT Patient Position Acquisition Instruction",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The RT Patient Position Acquisition Instruction IOD contains parameters needed to acquire the actual patient position. SOP Class UID: 1.2.840.10008.5.1.4.1.1.481.25 (RT Patient Position Acquisition Instruction Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (rt-patient-position-acquisition-instruction)."
  },
  {
    "code": "MBSA",
    "display": "Microscopy Bulk Simple Annotations",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Microscopy Bulk Simple Annotations IOD encodes Microscopy Bulk Simple Annotations into a collection of points, closed polygons, open polylines and simple geometric shapes. Polygons and polylines are defined by the coordinates of each point. Simple geometric shapes are defined by parameters. SOP Class UID: 1.2.840.10008.5.1.4.1.1.91.1 (Microscopy Bulk Simple Annotations Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (microscopy-bulk-simple-annotations)."
  },
  {
    "code": "I",
    "display": "Inventory",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Inventory IOD defines an Inventory of all Studies, Series, and SOP Instances managed by a repository, or a specified subset of those Studies, Series, and SOP Instances. It includes information about the available mechanisms to access such Studies, Series, and SOP Instances, including both DICOM and non-DICOM protocols. The Inventory provides selected Patient, Procedure, and Imaging Service Request Attribute values for the inventoried Studies. SOP Class UID: 1.2.840.10008.5.1.4.1.1.201.1 (Inventory Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (inventory)."
  },
  {
    "code": "PA-2",
    "display": "Photoacoustic Image",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Photoacoustic Imaging (PA)",
    "description": "The Photoacoustic Image IOD specifies an image which has been generated by the acquisition of acoustic signals from the absorption of light at one or more optical excitation wavelengths and the optional algorithmic combination of the acquired data. SOP Class UID: 1.2.840.10008.5.1.4.1.1.6.3 (Photoacoustic Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (photoacoustic-image)."
  },
  {
    "code": "CFM",
    "display": "Confocal Microscopy Image",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Confocal Microscopy",
    "description": "The Confocal Microscopy Image IOD specifies the Attributes of a simple (non-tiled) Confocal Microscopy Image. SOP Class UID: 1.2.840.10008.5.1.4.1.1.77.1.8 (Confocal Microscopy Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (confocal-microscopy-image)."
  },
  {
    "code": "CFM-2",
    "display": "Confocal Microscopy Tiled Pyramidal Image",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Confocal Microscopy",
    "description": "The Confocal Microscopy Tiled Pyramidal Image IOD specifies the Attributes of Tiled Pyramidal Confocal Microscopy Images. SOP Class UID: 1.2.840.10008.5.1.4.1.1.77.1.9 (Confocal Microscopy Tiled Pyramidal Image Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (confocal-microscopy-tiled-pyramidal-image)."
  },
  {
    "code": "BD",
    "display": "Basic Directory",
    "system": "NEMA DICOM PS3.3 / PS3.4",
    "category": "Medical Imaging & Clinical Objects",
    "description": "The Basic Directory IOD includes the Modules specified by Table F.3-1 . SOP Class UID: 1.2.840.10008.1.3.10 (Media Storage Directory Storage). Standard: NEMA DICOM PS3.3 / PS3.4 (basic-directory)."
  }
];

export const CLINICAL_FHIR_DATA: StandardTerminologyEntry[] = [
  {
    "code": "Account",
    "display": "Account Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Financial",
    "description": "A financial tool for tracking value accrued for a particular purpose (patient billing accounts)."
  },
  {
    "code": "ActivityDefinition",
    "display": "ActivityDefinition Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Workflow",
    "description": "This resource allows for the definition of how activity should be performed in a clinical workflow."
  },
  {
    "code": "ActorDefinition",
    "display": "ActorDefinition Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Foundation / Conformance",
    "description": "Describes an actor - human, system, or software component - involved in healthcare workflows and exchanges."
  },
  {
    "code": "AdministrableProductDefinition",
    "display": "AdministrableProductDefinition Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Specialized / IDMP",
    "description": "The administrable medicinal product in its final form suitable for administration to a patient."
  },
  {
    "code": "AdverseEvent",
    "display": "AdverseEvent Resource",
    "system": "HL7 FHIR Release 5",
    "category": "HL7 FHIR Release 5",
    "description": "Official HL7 FHIR Release 5 standard resource definition for AdverseEvent. Standard interoperability data model."
  },
  {
    "code": "AllergyIntolerance",
    "display": "AllergyIntolerance Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Summary",
    "description": "Risk of harmful or undesirable physiological response which is unique to an individual and results from exposure to a substance."
  },
  {
    "code": "Appointment",
    "display": "Appointment Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Base / Workflow",
    "description": "A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time."
  },
  {
    "code": "AppointmentResponse",
    "display": "AppointmentResponse Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Base / Workflow",
    "description": "A reply to an appointment request for a patient and/or practitioner."
  },
  {
    "code": "ArtifactAssessment",
    "display": "ArtifactAssessment Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Specialized / Evidence",
    "description": "Formal rating, critique, and commentary on a knowledge artifact or clinical practice guideline."
  },
  {
    "code": "AuditEvent",
    "display": "AuditEvent Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Foundation / Security",
    "description": "A record of an event made for purposes of maintaining a security log of electronic healthcare activities."
  },
  {
    "code": "Basic",
    "display": "Basic Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Foundation / General",
    "description": "Basic is used for handling concepts not yet addressed in FHIR, providing standard resource behaviors."
  },
  {
    "code": "Binary",
    "display": "Binary Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Foundation / Documents",
    "description": "A resource that contains raw arbitrary content such as text, images, or documents without FHIR serialization."
  },
  {
    "code": "BiologicallyDerivedProduct",
    "display": "BiologicallyDerivedProduct Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Base / Entities",
    "description": "A material of biological origin that is processed and suitable for medical use (blood products, tissue grafts)."
  },
  {
    "code": "BiologicallyDerivedProductDispense",
    "display": "BiologicallyDerivedProductDispense Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Medications",
    "description": "Dispensing of a biological product (blood unit, bone graft) to a patient recipient."
  },
  {
    "code": "BodyStructure",
    "display": "BodyStructure Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Diagnostics",
    "description": "Record of specific anatomical location or body structure for findings and procedures."
  },
  {
    "code": "Bundle",
    "display": "Bundle Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Foundation / Exchange",
    "description": "A container for a collection of FHIR resources packaged together for transactions, messages, or clinical search results."
  },
  {
    "code": "CapabilityStatement",
    "display": "CapabilityStatement Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Foundation / Conformance",
    "description": "A CapabilityStatement documents a set of capabilities of a FHIR server including supported resources and search parameters."
  },
  {
    "code": "CarePlan",
    "display": "CarePlan Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Care Provision",
    "description": "Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community."
  },
  {
    "code": "CareTeam",
    "display": "CareTeam Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Care Provision",
    "description": "The people and organizations who plan to participate in the coordination and delivery of care for a patient."
  },
  {
    "code": "ChargeItem",
    "display": "ChargeItem Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Financial",
    "description": "The resource ChargeItem describes the provision of healthcare provider products for billing purposes."
  },
  {
    "code": "ChargeItemDefinition",
    "display": "ChargeItemDefinition Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Financial",
    "description": "The ChargeItemDefinition resource provides the properties that apply to the billing of medical services."
  },
  {
    "code": "Citation",
    "display": "Citation Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Specialized / Evidence",
    "description": "The Citation resource describes bibliographic references for scientific evidence and medical literature."
  },
  {
    "code": "Claim",
    "display": "Claim Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Financial",
    "description": "A provider issued list of professional services and products provided, or to be provided, to a patient for payment."
  },
  {
    "code": "ClaimResponse",
    "display": "ClaimResponse Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Financial",
    "description": "This resource provides the adjudication results from the processing of a Claim."
  },
  {
    "code": "ClinicalImpression",
    "display": "ClinicalImpression Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Summary",
    "description": "A record of a clinical assessment performed to determine what problem(s) may affect the patient and formulate treatment plans."
  },
  {
    "code": "ClinicalUseDefinition",
    "display": "ClinicalUseDefinition Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Specialized / IDMP",
    "description": "Clinical indication, contraindication, interaction, or undesirable effect of a medicinal product."
  },
  {
    "code": "CodeSystem",
    "display": "CodeSystem Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Foundation / Terminology",
    "description": "The CodeSystem resource declares the existence of and describes a code system or code system supplement."
  },
  {
    "code": "Communication",
    "display": "Communication Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Care Provision",
    "description": "An occurrence of information being transmitted between healthcare providers or patients."
  },
  {
    "code": "CommunicationRequest",
    "display": "CommunicationRequest Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Care Provision",
    "description": "A request to convey information (e.g. SMS appointment reminders, follow-up alerts)."
  },
  {
    "code": "CompartmentDefinition",
    "display": "CompartmentDefinition Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Foundation / Conformance",
    "description": "A compartment definition that defines how resources are partitioned into groups (e.g. Patient compartment)."
  },
  {
    "code": "Composition",
    "display": "Composition Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Foundation / Documents",
    "description": "A set of healthcare-related information that is assembled together into a single logical document."
  },
  {
    "code": "ConceptMap",
    "display": "ConceptMap Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Foundation / Terminology",
    "description": "A statement of relationships from one set of concepts to one or more other concepts across code systems."
  },
  {
    "code": "Condition",
    "display": "Condition Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Summary",
    "description": "A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern."
  },
  {
    "code": "ConditionDefinition",
    "display": "ConditionDefinition Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Summary",
    "description": "Formal computable definition of a disease entity or clinical syndrome with criteria."
  },
  {
    "code": "Consent",
    "display": "Consent Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Foundation / Security",
    "description": "A record of a healthcare consumer’s policy or rules for permits and authorizations regarding their care or privacy."
  },
  {
    "code": "Contract",
    "display": "Contract Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Financial",
    "description": "Legally enforceable, formal agreements between parties with terms, rules, and privacy stipulations."
  },
  {
    "code": "Coverage",
    "display": "Coverage Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Financial",
    "description": "Financial instrument which may be used to reimburse or pay for health care products and services."
  },
  {
    "code": "CoverageEligibilityRequest",
    "display": "CoverageEligibilityRequest Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Financial",
    "description": "The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for benefits eligibility check."
  },
  {
    "code": "CoverageEligibilityResponse",
    "display": "CoverageEligibilityResponse Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Financial",
    "description": "This resource provides eligibility and plan details from the processing of an EligibilityRequest."
  },
  {
    "code": "DetectedIssue",
    "display": "DetectedIssue Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Safety",
    "description": "Indicates an actual or potential clinical issue with an action or proposed activity (drug-drug interaction, duplicate therapy)."
  },
  {
    "code": "Device",
    "display": "Device Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Base / Entities",
    "description": "An item of manufactured material that is used in the provision of healthcare (pumps, monitors, implants)."
  },
  {
    "code": "DeviceAssociation",
    "display": "DeviceAssociation Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Base / Entities",
    "description": "A record of association or implantation of a medical device with a specific patient or subject."
  },
  {
    "code": "DeviceDefinition",
    "display": "DeviceDefinition Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Base / Entities",
    "description": "The characteristics, operational parameters and capabilities of a medical device type."
  },
  {
    "code": "DeviceDispense",
    "display": "DeviceDispense Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Medications",
    "description": "Record of a medical device being dispensed to a patient for therapeutic or monitoring use."
  },
  {
    "code": "DeviceMetric",
    "display": "DeviceMetric Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Base / Entities",
    "description": "Describes a measurement, calculation or setting capability of a medical device."
  },
  {
    "code": "DeviceRequest",
    "display": "DeviceRequest Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Orders",
    "description": "Represents a request for a patient to employ or have implanted a medical device."
  },
  {
    "code": "DeviceUsage",
    "display": "DeviceUsage Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Medications",
    "description": "Record of actual patient usage of an assigned medical device (CPAP adherence, insulin pump logs)."
  },
  {
    "code": "DiagnosticReport",
    "display": "DiagnosticReport Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Diagnostics",
    "description": "The findings and interpretation of diagnostic tests performed on patients, groups, devices, and specimens (labs, imaging, pathology)."
  },
  {
    "code": "DocumentReference",
    "display": "DocumentReference Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Foundation / Documents",
    "description": "A reference to a document of any kind for any purpose (clinical discharge summaries, scanned intake records)."
  },
  {
    "code": "Encounter",
    "display": "Encounter Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Base / Management",
    "description": "An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare services or assessing patient health status."
  },
  {
    "code": "EncounterHistory",
    "display": "EncounterHistory Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Base / Management",
    "description": "A chronological audit log of states and movements during an inpatient or ambulatory encounter."
  },
  {
    "code": "Endpoint",
    "display": "Endpoint Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Base / Entities",
    "description": "The technical details of an endpoint that can be used for electronic healthcare data exchange services."
  },
  {
    "code": "EnrollmentRequest",
    "display": "EnrollmentRequest Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Financial",
    "description": "This resource provides the insurance enrollment details to the insurer for subscriber and family members."
  },
  {
    "code": "EnrollmentResponse",
    "display": "EnrollmentResponse Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Financial",
    "description": "This resource provides enrollment and plan details from the processing of an EnrollmentRequest."
  },
  {
    "code": "EpisodeOfCare",
    "display": "EpisodeOfCare Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Base / Management",
    "description": "An association between a patient and an organization/provider for a defined problem over time."
  },
  {
    "code": "EventDefinition",
    "display": "EventDefinition Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Workflow",
    "description": "The EventDefinition resource provides a description of an event that triggers clinical workflow execution."
  },
  {
    "code": "Evidence",
    "display": "Evidence Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Specialized / Evidence",
    "description": "The Evidence resource represents that the assertion is supported by scientific or empirical data."
  },
  {
    "code": "EvidenceReport",
    "display": "EvidenceReport Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Specialized / Evidence",
    "description": "A structured scientific evidence summary report compiling findings on a clinical topic."
  },
  {
    "code": "EvidenceVariable",
    "display": "EvidenceVariable Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Specialized / Evidence",
    "description": "The EvidenceVariable resource describes a population, intervention, or outcome in research."
  },
  {
    "code": "ExampleScenario",
    "display": "ExampleScenario Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Foundation / Conformance",
    "description": "Example of workflow or interaction between systems used in implementation guides."
  },
  {
    "code": "ExplanationOfBenefit",
    "display": "ExplanationOfBenefit Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Financial",
    "description": "This resource provides complete claim adjudication details from the insurer to the patient and provider."
  },
  {
    "code": "FamilyMemberHistory",
    "display": "FamilyMemberHistory Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Summary",
    "description": "Significant health conditions for a person related to the patient relevant to the patient’s health assessment."
  },
  {
    "code": "Flag",
    "display": "Flag Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Safety",
    "description": "Prospective warnings of potential risks of harm to healthcare staff, patients, or visitors (fall risk, infection isolation)."
  },
  {
    "code": "FormularyItem",
    "display": "FormularyItem Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Specialized / IDMP",
    "description": "An item included within an institutional or insurance health plan drug formulary."
  },
  {
    "code": "GenomicStudy",
    "display": "GenomicStudy Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Diagnostics",
    "description": "A genomic investigation recording raw variant calls, sequencing methodology, and genetic findings."
  },
  {
    "code": "Goal",
    "display": "Goal Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Care Provision",
    "description": "Describes the intended objective(s) for a patient, group or organization (e.g. weight loss, blood pressure control)."
  },
  {
    "code": "GraphDefinition",
    "display": "GraphDefinition Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Foundation / Conformance",
    "description": "A formal computable definition of a graph of resources to solve a specific business problem."
  },
  {
    "code": "Group",
    "display": "Group Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Base / Individuals",
    "description": "Represents a defined collection of people, animals, devices, or locations for healthcare actions or statistical analysis."
  },
  {
    "code": "GuidanceResponse",
    "display": "GuidanceResponse Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Reasoning",
    "description": "A guidance response is the synthesized result from evaluating clinical guidelines or decision support algorithms."
  },
  {
    "code": "HealthcareService",
    "display": "HealthcareService Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Base / Entities",
    "description": "The details of a healthcare service available at an organization or location."
  },
  {
    "code": "ImagingSelection",
    "display": "ImagingSelection Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Diagnostics",
    "description": "A set of specific image frames, slices, or coordinates selected from a DICOM ImagingStudy."
  },
  {
    "code": "ImagingStudy",
    "display": "ImagingStudy Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Diagnostics",
    "description": "Representation of the content produced in a DICOM imaging study with series and instance hierarchies."
  },
  {
    "code": "Immunization",
    "display": "Immunization Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Medications",
    "description": "Describes the event of a patient being administered a vaccine or a record of an immunization reported."
  },
  {
    "code": "ImmunizationEvaluation",
    "display": "ImmunizationEvaluation Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Medications",
    "description": "Describes a comparison of an immunization event against published recommendation schedules."
  },
  {
    "code": "ImmunizationRecommendation",
    "display": "ImmunizationRecommendation Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Medications",
    "description": "A patient-targeted vaccine recommendation based on immunization history and age-appropriate guidelines."
  },
  {
    "code": "ImplementationGuide",
    "display": "ImplementationGuide Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Foundation / Conformance",
    "description": "A set of rules of how a particular interoperability or standards context is implemented using FHIR."
  },
  {
    "code": "Ingredient",
    "display": "Ingredient Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Specialized / IDMP",
    "description": "An active or inactive chemical ingredient component of a pharmaceutical product."
  },
  {
    "code": "InsurancePlan",
    "display": "InsurancePlan Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Financial",
    "description": "Details of a health insurance product/plan offered by an insurer, including coverage networks and costs."
  },
  {
    "code": "InventoryItem",
    "display": "InventoryItem Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Base / Entities",
    "description": "A clinical item or supply tracked in hospital inventory management systems."
  },
  {
    "code": "InventoryReport",
    "display": "InventoryReport Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Base / Entities",
    "description": "A periodic or on-demand snapshot of inventory levels and locations across clinical departments."
  },
  {
    "code": "Invoice",
    "display": "Invoice Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Financial",
    "description": "Invoice of a provider for goods and services delivered to an insurance provider, patient, or third party."
  },
  {
    "code": "Library",
    "display": "Library Resource",
    "system": "HL7 FHIR Release 5",
    "category": "HL7 FHIR Release 5",
    "description": "Official HL7 FHIR Release 5 standard resource definition for Library. Standard interoperability data model."
  },
  {
    "code": "Linkage",
    "display": "Linkage Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Base / Management",
    "description": "Identifies two or more clinical records or resources that refer to the same real-world entity."
  },
  {
    "code": "List",
    "display": "List Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Base / Management",
    "description": "A curated list of healthcare resources (e.g. current problem list, allergy list)."
  },
  {
    "code": "Location",
    "display": "Location Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Base / Entities",
    "description": "Details and position information for a physical place where healthcare services are provided and resources stored."
  },
  {
    "code": "ManufacturedItemDefinition",
    "display": "ManufacturedItemDefinition Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Specialized / IDMP",
    "description": "The manufactured item and physical dosage form of a pharmaceutical product."
  },
  {
    "code": "Measure",
    "display": "Measure Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Quality",
    "description": "The Measure resource provides the definition of a quality measure or clinical metric."
  },
  {
    "code": "MeasureReport",
    "display": "MeasureReport Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Quality",
    "description": "The MeasureReport resource contains the results of evaluating a measure on patient data."
  },
  {
    "code": "Medication",
    "display": "Medication Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Medications",
    "description": "Primarily used for identification and definition of medication (ingredients, form, packaging)."
  },
  {
    "code": "MedicationAdministration",
    "display": "MedicationAdministration Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Medications",
    "description": "Describes the event of a patient consuming or being given a medicinal product."
  },
  {
    "code": "MedicationDispense",
    "display": "MedicationDispense Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Medications",
    "description": "Indicates that a medication product is to be or has been dispensed for a named person/patient."
  },
  {
    "code": "MedicationKnowledge",
    "display": "MedicationKnowledge Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Medications",
    "description": "Information about a medication that is independent of a patient (guidelines, kinetics, contraindications)."
  },
  {
    "code": "MedicationRequest",
    "display": "MedicationRequest Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Medications",
    "description": "An order or request for supply/administration of a medication to a patient."
  },
  {
    "code": "MedicationStatement",
    "display": "MedicationStatement Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Medications",
    "description": "A record of a medication that is being consumed by a patient according to patient or third party reports."
  },
  {
    "code": "MedicinalProductDefinition",
    "display": "MedicinalProductDefinition Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Specialized / IDMP",
    "description": "Detailed definition of a medicinal product according to ISO IDMP (Identification of Medicinal Products) standards."
  },
  {
    "code": "MessageDefinition",
    "display": "MessageDefinition Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Foundation / Messaging",
    "description": "Defines the characteristics of a message that can be shared between systems."
  },
  {
    "code": "MessageHeader",
    "display": "MessageHeader Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Foundation / Messaging",
    "description": "The header for a message exchange that either requests or responds to an action."
  },
  {
    "code": "MolecularSequence",
    "display": "MolecularSequence Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Diagnostics",
    "description": "Raw data and sequence variants for genomic, RNA, or protein sequencing analyses."
  },
  {
    "code": "NamingSystem",
    "display": "NamingSystem Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Foundation / Terminology",
    "description": "A curated namespace that issues unique symbols within that namespace for concept identification."
  },
  {
    "code": "NutritionIntake",
    "display": "NutritionIntake Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Care Provision",
    "description": "A record of food, fluid, or nutritional supplement actually consumed by a patient."
  },
  {
    "code": "NutritionOrder",
    "display": "NutritionOrder Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Care Provision",
    "description": "A request to supply a diet, oral nutritional supplement or enteral formula for a patient."
  },
  {
    "code": "NutritionProduct",
    "display": "NutritionProduct Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Base / Entities",
    "description": "A food or nutritional item that can be consumed or administered for clinical dietary therapy."
  },
  {
    "code": "Observation",
    "display": "Observation Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Diagnostics",
    "description": "Measurements and simple assertions made about a patient, device or other subject (vitals, lab results, clinical findings)."
  },
  {
    "code": "ObservationDefinition",
    "display": "ObservationDefinition Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Diagnostics",
    "description": "Set of parameters that defines what must be measured or observed for clinical tests."
  },
  {
    "code": "OperationDefinition",
    "display": "OperationDefinition Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Foundation / Conformance",
    "description": "A formal computable definition of an operation (e.g. $validate, $everything, $expand)."
  },
  {
    "code": "OperationOutcome",
    "display": "OperationOutcome Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Foundation / Conformance",
    "description": "A collection of error, warning or information messages that result from a system action."
  },
  {
    "code": "Organization",
    "display": "Organization Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Base / Entities",
    "description": "A formally or informally recognized grouping of people or organizations formed for delivering healthcare."
  },
  {
    "code": "OrganizationAffiliation",
    "display": "OrganizationAffiliation Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Base / Entities",
    "description": "Defines an affiliation/association between two organizations and the services they provide jointly."
  },
  {
    "code": "PackagedProductDefinition",
    "display": "PackagedProductDefinition Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Specialized / IDMP",
    "description": "A package of several medicinal products or devices sold together with labeling specifications."
  },
  {
    "code": "Parameters",
    "display": "Parameters Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Foundation / General",
    "description": "Non-persistent resource used only for passing input/output parameters to FHIR operations."
  },
  {
    "code": "Patient",
    "display": "Patient Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Base / Individuals",
    "description": "Demographics and administrative information about an individual receiving healthcare services."
  },
  {
    "code": "PaymentNotice",
    "display": "PaymentNotice Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Financial",
    "description": "This resource provides the details including amount of a payment and references the payor and recipient."
  },
  {
    "code": "PaymentReconciliation",
    "display": "PaymentReconciliation Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Financial",
    "description": "This resource provides the details submitter and recipient, and the breakdown of payment items."
  },
  {
    "code": "Permission",
    "display": "Permission Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Foundation / Security",
    "description": "Permission resource granting or denying access rights for actors and roles in FHIR systems."
  },
  {
    "code": "Person",
    "display": "Person Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Base / Individuals",
    "description": "Demographics and administrative information about a person independent of a specific health-related context."
  },
  {
    "code": "PlanDefinition",
    "display": "PlanDefinition Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Workflow",
    "description": "This resource allows for the definition of various actions to be taken in connection with a clinical plan."
  },
  {
    "code": "Practitioner",
    "display": "Practitioner Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Base / Individuals",
    "description": "A person who is directly or indirectly involved in the provisioning of healthcare (doctors, nurses, specialists)."
  },
  {
    "code": "PractitionerRole",
    "display": "PractitionerRole Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Base / Individuals",
    "description": "A specific set of roles/locations/specialties that a practitioner is authorized to perform at an organization."
  },
  {
    "code": "Procedure",
    "display": "Procedure Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Care Provision",
    "description": "An action that is or was performed on or for a patient (surgical procedures, diagnostic procedures, therapies)."
  },
  {
    "code": "Provenance",
    "display": "Provenance Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Foundation / Security",
    "description": "Tracks information about the activity that created, revised, or deleted a resource (authorship, timestamps)."
  },
  {
    "code": "Questionnaire",
    "display": "Questionnaire Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Diagnostics",
    "description": "A structured set of questions intended to guide the collection of answers from end-users."
  },
  {
    "code": "QuestionnaireResponse",
    "display": "QuestionnaireResponse Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Diagnostics",
    "description": "A structured set of questions and their answers collected from a user."
  },
  {
    "code": "RegulatedAuthorization",
    "display": "RegulatedAuthorization Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Specialized / IDMP",
    "description": "Regulatory marketing authorization or approval granted by FDA, EMA, or national regulatory bodies."
  },
  {
    "code": "RelatedPerson",
    "display": "RelatedPerson Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Base / Individuals",
    "description": "A person involved in the care of a patient, but who is not the target of healthcare nor has a formal responsibility in the care process."
  },
  {
    "code": "RequestOrchestration",
    "display": "RequestOrchestration Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Care Provision",
    "description": "Defines an order set or care protocol orchestrating multiple interrelated clinical orders."
  },
  {
    "code": "Requirements",
    "display": "Requirements Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Foundation / Conformance",
    "description": "The description of a set of requirements for system behaviors in a clinical or interoperability context."
  },
  {
    "code": "ResearchStudy",
    "display": "ResearchStudy Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Specialized / Research",
    "description": "A process where a investigator or organization gathers evidence to assess safety or efficacy."
  },
  {
    "code": "ResearchSubject",
    "display": "ResearchSubject Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Specialized / Research",
    "description": "A physical entity which is the primary unit of operational interest in a clinical research study."
  },
  {
    "code": "RiskAssessment",
    "display": "RiskAssessment Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Care Provision",
    "description": "An assessment of the likely outcome(s) for a patient or other subject as well as the presence of risk factors."
  },
  {
    "code": "Schedule",
    "display": "Schedule Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Base / Workflow",
    "description": "A container for slots of time on a calendar that describes the availability of healthcare services or resources."
  },
  {
    "code": "SearchParameter",
    "display": "SearchParameter Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Foundation / Conformance",
    "description": "A search parameter that defines a named search item that can be used to search/filter resources."
  },
  {
    "code": "ServiceRequest",
    "display": "ServiceRequest Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Care Provision",
    "description": "A record of a request for service such as diagnostic testing, surgical intervention, or therapy."
  },
  {
    "code": "Slot",
    "display": "Slot Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Base / Workflow",
    "description": "A slot of time on a schedule that may be available for booking appointments."
  },
  {
    "code": "Specimen",
    "display": "Specimen Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Diagnostics",
    "description": "A sample to be used for analysis (blood, urine, tissue biopsy)."
  },
  {
    "code": "SpecimenDefinition",
    "display": "SpecimenDefinition Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Diagnostics",
    "description": "A kind of specimen with requirements for collection, handling, and preservation."
  },
  {
    "code": "StructureDefinition",
    "display": "StructureDefinition Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Foundation / Conformance",
    "description": "A definition of a FHIR structure: resource type, data type, extension, or constrained profile."
  },
  {
    "code": "StructureMap",
    "display": "StructureMap Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Foundation / Conformance",
    "description": "A Map of relationships between two data structures that can be executed to transform data."
  },
  {
    "code": "Subscription",
    "display": "Subscription Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Foundation / Messaging",
    "description": "Defines a push-based subscription from a FHIR server to another system."
  },
  {
    "code": "SubscriptionStatus",
    "display": "SubscriptionStatus Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Foundation / Messaging",
    "description": "The SubscriptionStatus resource describes the current status of an active subscription channel."
  },
  {
    "code": "SubscriptionTopic",
    "display": "SubscriptionTopic Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Foundation / Messaging",
    "description": "Defines the triggers and criteria for notification generation in topic-based subscriptions."
  },
  {
    "code": "Substance",
    "display": "Substance Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Base / Entities",
    "description": "A homogeneous material with a definite chemical composition used in medication or lab reagents."
  },
  {
    "code": "SubstanceDefinition",
    "display": "SubstanceDefinition Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Specialized / IDMP",
    "description": "Detailed chemical, molecular, and botanical specification of a pharmaceutical substance."
  },
  {
    "code": "SubstanceNucleicAcid",
    "display": "SubstanceNucleicAcid Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Specialized / IDMP",
    "description": "Nucleic acid sequence definition for biopharmaceuticals and gene therapies."
  },
  {
    "code": "SubstancePolymer",
    "display": "SubstancePolymer Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Specialized / IDMP",
    "description": "Polymer definition for macromolecular pharmaceutical excipients."
  },
  {
    "code": "SubstanceProtein",
    "display": "SubstanceProtein Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Specialized / IDMP",
    "description": "Protein chemical structure and modification details for biologicals."
  },
  {
    "code": "SubstanceReferenceInformation",
    "display": "SubstanceReferenceInformation Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Specialized / IDMP",
    "description": "Reference information for therapeutic substance identification."
  },
  {
    "code": "SubstanceSourceMaterial",
    "display": "SubstanceSourceMaterial Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Specialized / IDMP",
    "description": "Source material details for biological and botanical active substances."
  },
  {
    "code": "SupplyDelivery",
    "display": "SupplyDelivery Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Logistics",
    "description": "Record of delivery of what was supplied in response to a SupplyRequest."
  },
  {
    "code": "SupplyRequest",
    "display": "SupplyRequest Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Logistics",
    "description": "A record of a request for a supply (syringes, PPE, tubing) to be ordered and delivered."
  },
  {
    "code": "Task",
    "display": "Task Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Base / Workflow",
    "description": "A task to be performed by a human or automated workflow engine."
  },
  {
    "code": "TerminologyCapabilities",
    "display": "TerminologyCapabilities Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Foundation / Terminology",
    "description": "A TerminologyCapabilities resource documents a set of capabilities of a FHIR terminology service."
  },
  {
    "code": "TestPlan",
    "display": "TestPlan Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Foundation / Testing",
    "description": "A formal plan describing testing activities and execution rules for FHIR systems."
  },
  {
    "code": "TestReport",
    "display": "TestReport Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Foundation / Testing",
    "description": "A summary of execution results from testing automated FHIR interfaces and profiles."
  },
  {
    "code": "TestScript",
    "display": "TestScript Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Foundation / Testing",
    "description": "A structured specification of one or more tests executed against a FHIR server."
  },
  {
    "code": "Transport",
    "display": "Transport Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Foundation / Workflow",
    "description": "Record of movement or transport of people, specimens, equipment, or medications in healthcare facilities."
  },
  {
    "code": "ValueSet",
    "display": "ValueSet Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Foundation / Terminology",
    "description": "A ValueSet resource specifies a set of codes drawn from one or more code systems for use in a specific context."
  },
  {
    "code": "VerificationResult",
    "display": "VerificationResult Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Base / Workflow",
    "description": "Describes validation requirements, source(s), and outcome of validation processes."
  },
  {
    "code": "VisionPrescription",
    "display": "VisionPrescription Resource",
    "system": "HL7 FHIR Release 5",
    "category": "Clinical / Care Provision",
    "description": "An authorization for the supply of glasses and/or contact lenses to a patient."
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
    "code": "KAX.00",
    "display": "Percutaneous coronary intervention (PCI) with stent placement",
    "system": "WHO ICHI",
    "category": "Cardiovascular Interventions",
    "description": "Transluminal balloon angioplasty with drug-eluting stent deployment in stenosed coronary arteries."
  },
  {
    "code": "KAZ.00",
    "display": "Aortic valve replacement (AVR)",
    "system": "WHO ICHI",
    "category": "Cardiovascular Interventions",
    "description": "Surgical excision of stenotic or regurgitant aortic valve and implantation of mechanical or bioprosthetic valve."
  },
  {
    "code": "KBA.00",
    "display": "Transcatheter aortic valve implantation (TAVI)",
    "system": "WHO ICHI",
    "category": "Cardiovascular Interventions",
    "description": "Minimally invasive percutaneous transfemoral or transapical deployment of prosthetic aortic valve."
  },
  {
    "code": "KBB.00",
    "display": "Mitral valve repair and annuloplasty",
    "system": "WHO ICHI",
    "category": "Cardiovascular Interventions",
    "description": "Reconstruction of regurgitant mitral valve leaflets, chordae tendineae, and placement of prosthetic ring."
  },
  {
    "code": "KBC.00",
    "display": "Permanent cardiac pacemaker implantation",
    "system": "WHO ICHI",
    "category": "Cardiovascular Interventions",
    "description": "Surgical insertion of pulse generator and transvenous endocardial leads for symptomatic bradycardia or AV block."
  },
  {
    "code": "KBD.00",
    "display": "Implantable cardioverter-defibrillator (ICD) placement",
    "system": "WHO ICHI",
    "category": "Cardiovascular Interventions",
    "description": "Subcutaneous generator placement with transvenous leads for primary or secondary prevention of sudden cardiac death."
  },
  {
    "code": "KBE.00",
    "display": "Catheter ablation for cardiac arrhythmia",
    "system": "WHO ICHI",
    "category": "Cardiovascular Interventions",
    "description": "Radiofrequency or cryoballoon thermal destruction of arrhythmogenic myocardial tissue causing atrial fibrillation or flutter."
  },
  {
    "code": "KBF.00",
    "display": "Carotid endarterectomy (CEA)",
    "system": "WHO ICHI",
    "category": "Cardiovascular Interventions",
    "description": "Surgical exposure of common and internal carotid artery with excision of atherosclerotic plaque to prevent stroke."
  },
  {
    "code": "KBG.00",
    "display": "Endovascular abdominal aortic aneurysm repair (EVAR)",
    "system": "WHO ICHI",
    "category": "Cardiovascular Interventions",
    "description": "Percutaneous transfemoral exclusion of infrarenal aortic aneurysm using bifurcated stent-graft prosthesis."
  },
  {
    "code": "KAA.00",
    "display": "Appendectomy",
    "system": "WHO ICHI",
    "category": "Digestive System Interventions",
    "description": "Laparoscopic or open surgical excision of an acutely inflamed vermiform appendix."
  },
  {
    "code": "KAB.00",
    "display": "Laparoscopic cholecystectomy",
    "system": "WHO ICHI",
    "category": "Digestive System Interventions",
    "description": "Minimally invasive excision of gallbladder and cystic duct ligation for symptomatic cholelithiasis or cholecystitis."
  },
  {
    "code": "KAC.00",
    "display": "Inguinal hernia repair (Herniorrhaphy / Hernioplasty)",
    "system": "WHO ICHI",
    "category": "Digestive System Interventions",
    "description": "Reduction of herniated peritoneal contents and prosthetic mesh reinforcement of the inguinal canal posterior wall."
  },
  {
    "code": "KAD.00",
    "display": "Right hemicolectomy with ileocolic anastomosis",
    "system": "WHO ICHI",
    "category": "Digestive System Interventions",
    "description": "Excision of cecum, ascending colon, and hepatic flexure with primary side-to-side ileocolic anastomosis."
  },
  {
    "code": "KAE.00",
    "display": "Low anterior resection of rectum (LAR)",
    "system": "WHO ICHI",
    "category": "Digestive System Interventions",
    "description": "Total mesorectal excision of rectal carcinoma with sphincter-preserving colorectal or coloanal anastomosis."
  },
  {
    "code": "KAF.00",
    "display": "Bariatric sleeve gastrectomy",
    "system": "WHO ICHI",
    "category": "Digestive System Interventions",
    "description": "Laparoscopic longitudinal gastric resection along greater curvature creating a calibrated tubular stomach."
  },
  {
    "code": "KAG.00",
    "display": "Roux-en-Y gastric bypass",
    "system": "WHO ICHI",
    "category": "Digestive System Interventions",
    "description": "Creation of a small proximal gastric pouch anastomosed to a Roux limb of jejunum bypassing duodenum."
  },
  {
    "code": "KAH.00",
    "display": "Exploratory laparotomy with peritoneal lavage",
    "system": "WHO ICHI",
    "category": "Digestive System Interventions",
    "description": "Surgical mid-line abdominal entry for evaluation of acute intra-abdominal hemorrhage, peritonitis, or trauma."
  },
  {
    "code": "KAI.00",
    "display": "Pancreaticoduodenectomy (Whipple procedure)",
    "system": "WHO ICHI",
    "category": "Digestive System Interventions",
    "description": "En-bloc resection of pancreatic head, duodenum, gallbladder, and distal bile duct with hepaticojejunostomy."
  },
  {
    "code": "KAJ.00",
    "display": "Hepatic wedge resection and partial hepatectomy",
    "system": "WHO ICHI",
    "category": "Digestive System Interventions",
    "description": "Surgical parenchyma-sparing or anatomical segmental resection of primary liver tumor or metastases."
  },
  {
    "code": "LAA.00",
    "display": "Colonoscopy with biopsy and polypectomy",
    "system": "WHO ICHI",
    "category": "Diagnostic Interventions",
    "description": "Endoscopic mucosal inspection of rectum, colon, and terminal ileum with snare electrocautery polypectomy."
  },
  {
    "code": "LAB.00",
    "display": "Esophagogastroduodenoscopy (EGD) / Upper endoscopy",
    "system": "WHO ICHI",
    "category": "Diagnostic Interventions",
    "description": "Direct endoscopic visualization of esophagus, stomach, and duodenum with mucosal biopsy or hemostasis."
  },
  {
    "code": "LAC.00",
    "display": "Endoscopic retrograde cholangiopancreatography (ERCP)",
    "system": "WHO ICHI",
    "category": "Diagnostic Interventions",
    "description": "Duodenoscopic cannulation of ampulla of Vater with fluoroscopic contrast injection, sphincterotomy, or stenting."
  },
  {
    "code": "LAD.00",
    "display": "Flexible bronchoscopy with bronchoalveolar lavage (BAL)",
    "system": "WHO ICHI",
    "category": "Diagnostic Interventions",
    "description": "Transoral or transnasal tracheobronchial inspection with saline alveolar washing for microbiological and cytologic diagnosis."
  },
  {
    "code": "LAE.00",
    "display": "Endobronchial ultrasound-guided transbronchial needle aspiration (EBUS-TBNA)",
    "system": "WHO ICHI",
    "category": "Diagnostic Interventions",
    "description": "Real-time ultrasound-directed fine-needle aspiration of mediastinal and hilar lymph nodes for lung cancer staging."
  },
  {
    "code": "LAF.00",
    "display": "Cystoscopy with ureteric catheterization",
    "system": "WHO ICHI",
    "category": "Diagnostic Interventions",
    "description": "Transurethral endoscopic examination of urinary bladder mucosa, ureteral orifices, and retrograde pyelography."
  },
  {
    "code": "LAG.00",
    "display": "Diagnostic laparoscopy with tissue biopsy",
    "system": "WHO ICHI",
    "category": "Diagnostic Interventions",
    "description": "Transabdominal endosurgical visualization of peritoneal cavity and pelvic organs with target tissue sampling."
  },
  {
    "code": "LAH.00",
    "display": "Capsule endoscopy",
    "system": "WHO ICHI",
    "category": "Diagnostic Interventions",
    "description": "Ingestion of wireless camera capsule capturing continuous luminal imaging through the entire small intestine."
  },
  {
    "code": "AAA.00",
    "display": "Electrocardiogram (ECG) 12-lead",
    "system": "WHO ICHI",
    "category": "Diagnostic Cardiac Interventions",
    "description": "Non-invasive graphic recording of electrical potentials generated by heart muscle excitation and conduction."
  },
  {
    "code": "AAB.00",
    "display": "Transthoracic echocardiography (TTE)",
    "system": "WHO ICHI",
    "category": "Diagnostic Cardiac Interventions",
    "description": "Ultrasound examination of cardiac chambers, myocardial wall motion, ventricular ejection fraction, and valvular gradients."
  },
  {
    "code": "AAC.00",
    "display": "Transesophageal echocardiography (TEE)",
    "system": "WHO ICHI",
    "category": "Diagnostic Cardiac Interventions",
    "description": "High-resolution ultrasonic imaging from retrocardiac esophageal transducer evaluating left atrial appendage and valve vegetations."
  },
  {
    "code": "AAD.00",
    "display": "Cardiac stress test (Treadmill exercise ECG)",
    "system": "WHO ICHI",
    "category": "Diagnostic Cardiac Interventions",
    "description": "Continuous 12-lead monitoring and blood pressure evaluation during graded Bruce protocol exercise to assess inducible ischemia."
  },
  {
    "code": "AAE.00",
    "display": "Diagnostic cardiac catheterization and coronary angiography",
    "system": "WHO ICHI",
    "category": "Diagnostic Cardiac Interventions",
    "description": "Selective coronary arterial injection with fluoroscopic cine recording assessing stenosis location and severity."
  },
  {
    "code": "AAF.00",
    "display": "Holter monitoring (24 to 48-hour ambulatory ECG)",
    "system": "WHO ICHI",
    "category": "Diagnostic Cardiac Interventions",
    "description": "Continuous ambulatory recording of heart rhythm detecting paroxysmal arrhythmias and ischemic ST shifts."
  },
  {
    "code": "AAG.00",
    "display": "Pulmonary function testing (Spirometry and DLCO)",
    "system": "WHO ICHI",
    "category": "Diagnostic Respiratory Interventions",
    "description": "Measurement of forced expiratory volume (FEV1), vital capacity (FVC), and diffusing capacity for carbon monoxide."
  },
  {
    "code": "AAH.00",
    "display": "Polysomnography (Overnight sleep study)",
    "system": "WHO ICHI",
    "category": "Diagnostic Respiratory Interventions",
    "description": "Simultaneous recording of EEG, electrooculogram, EMG, airflow, and oximetry assessing sleep architecture and apnea."
  },
  {
    "code": "MAA.00",
    "display": "Total hip arthroplasty (THA)",
    "system": "WHO ICHI",
    "category": "Musculoskeletal Interventions",
    "description": "Surgical excision of damaged femoral head and acetabulum with implantation of prosthetic acetabular cup and femoral stem."
  },
  {
    "code": "MAB.00",
    "display": "Total knee arthroplasty (TKA)",
    "system": "WHO ICHI",
    "category": "Musculoskeletal Interventions",
    "description": "Resurfacing of distal femur, proximal tibia, and patella with modular cemented or uncemented cobalt-chromium prostheses."
  },
  {
    "code": "MAC.00",
    "display": "Arthroscopic anterior cruciate ligament (ACL) reconstruction",
    "system": "WHO ICHI",
    "category": "Musculoskeletal Interventions",
    "description": "Endoscopic replacement of ruptured ACL using autologous bone-patellar tendon-bone or hamstring tendon graft."
  },
  {
    "code": "MAD.00",
    "display": "Open reduction and internal fixation (ORIF) of long bone fracture",
    "system": "WHO ICHI",
    "category": "Musculoskeletal Interventions",
    "description": "Direct anatomical fracture reduction and stabilization using rigid titanium compression plates and cortical screws."
  },
  {
    "code": "MAE.00",
    "display": "Spinal decompression and lumbar fusion (TLIF/PLIF)",
    "system": "WHO ICHI",
    "category": "Musculoskeletal Interventions",
    "description": "Laminectomy, discectomy, interbody cage placement, and pedicle screw instrumentation across unstable vertebral segments."
  },
  {
    "code": "MAF.00",
    "display": "Carpal tunnel release",
    "system": "WHO ICHI",
    "category": "Musculoskeletal Interventions",
    "description": "Surgical division of transverse carpal ligament to decompress median nerve within the carpal canal."
  },
  {
    "code": "MAG.00",
    "display": "Shoulder arthroscopy with rotator cuff repair",
    "system": "WHO ICHI",
    "category": "Musculoskeletal Interventions",
    "description": "Endoscopic tendon mobilization and suture anchor re-fixation of supraspinatus/infraspinatus tendon to humeral head."
  },
  {
    "code": "PAG.00",
    "display": "Hemodialysis",
    "system": "WHO ICHI",
    "category": "Renal / Metabolic Interventions",
    "description": "Extracorporeal clearance of metabolic waste products and excess fluid across a semipermeable dialyzer membrane in ESRD."
  },
  {
    "code": "PAH.00",
    "display": "Peritoneal dialysis catheter insertion and exchange",
    "system": "WHO ICHI",
    "category": "Renal / Metabolic Interventions",
    "description": "Surgical or percutaneous placement of Tenckhoff catheter into lower abdominal peritoneal cavity for ambulatory dialysis."
  },
  {
    "code": "PAI.00",
    "display": "Percutaneous renal biopsy",
    "system": "WHO ICHI",
    "category": "Renal / Metabolic Interventions",
    "description": "Ultrasound-guided core needle sampling of renal cortex evaluating glomerulonephritis, proteinuria, or graft rejection."
  },
  {
    "code": "PAJ.00",
    "display": "Arteriovenous fistula (AVF) creation",
    "system": "WHO ICHI",
    "category": "Renal / Metabolic Interventions",
    "description": "Surgical anastomosis between cephalic vein and radial or brachial artery creating vascular access for hemodialysis."
  },
  {
    "code": "PAK.00",
    "display": "Kidney transplantation",
    "system": "WHO ICHI",
    "category": "Renal / Metabolic Interventions",
    "description": "Heterotopic placement of donor renal graft into iliac fossa with vascular and ureterovesical anastomoses."
  },
  {
    "code": "NAA.00",
    "display": "Craniotomy for intracranial hematoma evacuation",
    "system": "WHO ICHI",
    "category": "Nervous System Interventions",
    "description": "Surgical removal of bone flap and evacuation of acute epidural, subdural, or intracerebral hemorrhage."
  },
  {
    "code": "NAB.00",
    "display": "Cerebral aneurysm clipping or endovascular coiling",
    "system": "WHO ICHI",
    "category": "Nervous System Interventions",
    "description": "Microsurgical titanium clip application or percutaneous Guglielmi platinum coil occlusion of cerebral aneurysm."
  },
  {
    "code": "NAC.00",
    "display": "Ventriculoperitoneal (VP) shunt placement",
    "system": "WHO ICHI",
    "category": "Nervous System Interventions",
    "description": "Insertion of cerebral ventricular catheter connected via one-way pressure valve to distal peritoneal tubing for hydrocephalus."
  },
  {
    "code": "NAD.00",
    "display": "Electroencephalogram (EEG) routine and continuous monitoring",
    "system": "WHO ICHI",
    "category": "Nervous System Interventions",
    "description": "Non-invasive scalp biopotential monitoring recording cortical rhythmic oscillations and epileptiform discharges."
  },
  {
    "code": "NAE.00",
    "display": "Lumbar puncture (Spinal tap)",
    "system": "WHO ICHI",
    "category": "Nervous System Interventions",
    "description": "Needle insertion into L3-L4/L4-L5 subarachnoid space measuring opening pressure and collecting CSF for laboratory analysis."
  },
  {
    "code": "NAF.00",
    "display": "Electromyography and nerve conduction studies (EMG/NCS)",
    "system": "WHO ICHI",
    "category": "Nervous System Interventions",
    "description": "Needle electrode and surface stimulation measuring muscle motor unit potentials and peripheral sensory conduction velocities."
  },
  {
    "code": "OAA.00",
    "display": "Cesarean section delivery",
    "system": "WHO ICHI",
    "category": "Obstetric Interventions",
    "description": "Transabdominal Pfannenstiel hysterotomy for delivery of infant in fetal distress, malpresentation, or obstructed labor."
  },
  {
    "code": "OAB.00",
    "display": "Hysterectomy (Total abdominal / laparoscopic / vaginal)",
    "system": "WHO ICHI",
    "category": "Gynecological Interventions",
    "description": "Surgical removal of uterus and cervix for leiomyomata, severe adenomyosis, endometriosis, or gynecologic malignancy."
  },
  {
    "code": "OAC.00",
    "display": "Diagnostic and operative hysteroscopy",
    "system": "WHO ICHI",
    "category": "Gynecological Interventions",
    "description": "Endoscopic visualization of uterine cavity with resection of endometrial polyps, submucosal fibroids, or synechiae."
  },
  {
    "code": "UAA.00",
    "display": "Transurethral resection of the prostate (TURP)",
    "system": "WHO ICHI",
    "category": "Urological Interventions",
    "description": "Endoscopic resectoscope excision of obstructing hyperplastic transition zone prostate tissue for bladder outlet obstruction."
  },
  {
    "code": "UAB.00",
    "display": "Percutaneous nephrolithotomy (PCNL)",
    "system": "WHO ICHI",
    "category": "Urological Interventions",
    "description": "Nephrostomy tract creation and rigid nephroscopic pneumatic/laser lithotripsy of large renal pelvic or staghorn calculi."
  },
  {
    "code": "UAC.00",
    "display": "Extracorporeal shock wave lithotripsy (ESWL)",
    "system": "WHO ICHI",
    "category": "Urological Interventions",
    "description": "Acoustic shock wave fragmentation of radiopaque renal or proximal ureteral calculi under fluoroscopic guidance."
  },
  {
    "code": "TAA.00",
    "display": "Intravenous chemotherapy administration",
    "system": "WHO ICHI",
    "category": "Medical Oncology Interventions",
    "description": "Infusion of cytotoxic antineoplastic agents following evidence-based protocol cycles with antiemetic premedication."
  },
  {
    "code": "TAB.00",
    "display": "Autologous and allogeneic hematopoietic stem cell transplantation",
    "system": "WHO ICHI",
    "category": "Hematology Interventions",
    "description": "High-dose conditioning chemotherapy followed by intravenous infusion of harvested CD34+ stem cells."
  },
  {
    "code": "TAC.00",
    "display": "Bone marrow aspiration and core biopsy",
    "system": "WHO ICHI",
    "category": "Hematology Interventions",
    "description": "Trephine needle sampling of posterior superior iliac spine bone marrow for hematological diagnosis and staging."
  },
  {
    "code": "TAD.00",
    "display": "Blood component transfusion (Packed RBCs / Platelets / FFP)",
    "system": "WHO ICHI",
    "category": "Hematology Interventions",
    "description": "Intravenous administration of crossmatched and screened donor blood products for hemorrhage or refractory cytopenias."
  },
  {
    "code": "TAE.00",
    "display": "External beam radiation therapy (IMRT / VMAT)",
    "system": "WHO ICHI",
    "category": "Radiation Oncology Interventions",
    "description": "Linear accelerator delivery of intensity-modulated Megavoltage X-ray beams conformal to target tumor geometry."
  },
  {
    "code": "TAF.00",
    "display": "Stereotactic radiosurgery (SRS / SBRT)",
    "system": "WHO ICHI",
    "category": "Radiation Oncology Interventions",
    "description": "High-precision sub-millimeter delivery of ablative radiation fractions to intracranial or extracranial oligometastases."
  },
  {
    "code": "EAA.00",
    "display": "Cataract extraction with intraocular lens (IOL) implantation",
    "system": "WHO ICHI",
    "category": "Ophthalmic Interventions",
    "description": "Phacoemulsification ultrasonic fragmentation of opacified crystalline lens and capsular bag injection of foldable IOL."
  },
  {
    "code": "EAB.00",
    "display": "Vitrectomy (Pars plana)",
    "system": "WHO ICHI",
    "category": "Ophthalmic Interventions",
    "description": "Microsurgical excision of vitreous humor for non-clearing vitreous hemorrhage, retinal detachment, or macular hole."
  },
  {
    "code": "EAC.00",
    "display": "Tympanoplasty and mastoidectomy",
    "system": "WHO ICHI",
    "category": "Otolaryngology Interventions",
    "description": "Reconstruction of perforated tympanic membrane with temporalis fascia graft and eradication of chronic mastoid infection."
  },
  {
    "code": "EAD.00",
    "display": "Functional endoscopic sinus surgery (FESS)",
    "system": "WHO ICHI",
    "category": "Otolaryngology Interventions",
    "description": "Endoscopic clearing of diseased ethmoid, maxillary, and frontal sinus ostia preserving mucosal ciliary architecture."
  },
  {
    "code": "EAE.00",
    "display": "Tonsillectomy and adenoidectomy",
    "system": "WHO ICHI",
    "category": "Otolaryngology Interventions",
    "description": "Surgical excision of palatine tonsils and nasopharyngeal adenoids for chronic recurrent infection or sleep apnea."
  }
];
