/**
 * NIDDK & Authoritative Disease Resources
 * Sourced from the National Institute of Diabetes and Digestive and Kidney Diseases (NIH NIDDK)
 * Official portal: https://www.niddk.nih.gov/health-information
 *
 * Comprehensive index covering all patient-facing health topic guides, disease explanations,
 * diagnostic tests, and nutritional resources published across the official NIH NIDDK portal.
 */

export interface NiddkDiseaseResource {
  id: string;
  title: string;
  category:
    | 'Diabetes & Endocrine'
    | 'Digestive Diseases'
    | 'Kidney Diseases'
    | 'Liver Diseases'
    | 'Urologic Diseases'
    | 'Weight Management & Nutrition';
  plainLanguageSummary: string;
  candidatePlainLanguageTerms: string[];
  symptoms: string[];
  causesAndRiskFactors: string[];
  complications: string[];
  clinicalContextNotice: string;
  officialUrl: string;
  relatedIcd11Code?: string;
  relatedSnomedId?: string;
}

export const NIDDK_RESOURCES_DATA: NiddkDiseaseResource[] = [
  {
    "id": "type-2-diabetes",
    "title": "Type 2 Diabetes",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "A condition where your body either cannot produce enough insulin or cannot effectively use the insulin it makes, causing blood glucose (sugar) levels to become too high.",
    "candidatePlainLanguageTerms": [
      "adult-onset diabetes",
      "high blood sugar",
      "insulin resistance",
      "sugar problem",
      "borderline diabetes"
    ],
    "symptoms": [
      "Increased thirst and dry mouth",
      "Frequent urination, especially at night",
      "Unusual fatigue and lack of energy",
      "Blurry vision",
      "Cuts or sores that take a long time to heal",
      "Tingling, pain, or numbness in the hands or feet"
    ],
    "causesAndRiskFactors": [
      "Insulin resistance where cells do not respond normally to insulin",
      "Overweight, obesity, or physical inactivity",
      "Family history and genetic predisposition",
      "Age 45 or older, or history of gestational diabetes"
    ],
    "complications": [
      "Cardiovascular diseases including heart attacks and stroke",
      "Chronic kidney disease and kidney failure (diabetic nephropathy)",
      "Eye damage and vision loss (diabetic retinopathy)",
      "Nerve damage leading to foot ulcers and amputation risk"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes/type-2-diabetes",
    "relatedIcd11Code": "5A11",
    "relatedSnomedId": "44054006"
  },
  {
    "id": "type-1-diabetes",
    "title": "Type 1 Diabetes",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "A chronic autoimmune disease where the immune system mistakenly attacks and destroys the insulin-producing beta cells in the pancreas, leaving the body unable to produce insulin.",
    "candidatePlainLanguageTerms": [
      "juvenile diabetes",
      "insulin-dependent diabetes",
      "childhood diabetes"
    ],
    "symptoms": [
      "Heavy thirst and extreme hunger even while eating",
      "Frequent urination and bedwetting in children who previously stayed dry",
      "Rapid, unexplained weight loss",
      "Extreme fatigue and weakness",
      "Fruity breath odor (sign of ketoacidosis)"
    ],
    "causesAndRiskFactors": [
      "Autoimmune destruction of pancreatic islet beta cells",
      "Genetic susceptibility (HLA complex gene variations)",
      "Environmental triggers such as specific viral infections"
    ],
    "complications": [
      "Diabetic ketoacidosis (DKA) — life-threatening medical emergency",
      "Hypoglycemic episodes from insulin management",
      "Early-onset cardiovascular and microvascular complications"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes/type-1-diabetes",
    "relatedIcd11Code": "5A10",
    "relatedSnomedId": "46635009"
  },
  {
    "id": "prediabetes",
    "title": "Prediabetes & Insulin Resistance",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "A condition where blood sugar levels are higher than normal, but not yet high enough to be diagnosed as type 2 diabetes. Often reversible with lifestyle modifications.",
    "candidatePlainLanguageTerms": [
      "borderline diabetes",
      "impaired glucose tolerance",
      "pre-diabetic",
      "slightly high sugar"
    ],
    "symptoms": [
      "Usually silent with no obvious symptoms in early stages",
      "Darkened areas of skin around the neck, armpits, or groin (acanthosis nigricans)",
      "Mild post-meal fatigue and sugar cravings"
    ],
    "causesAndRiskFactors": [
      "Excess visceral abdominal fat and physical inactivity",
      "Metabolic syndrome and high triglycerides",
      "Gestational diabetes history or polycystic ovary syndrome"
    ],
    "complications": [
      "Progression to full type 2 diabetes within 5–10 years",
      "Subclinical cardiovascular and vascular endothelial damage"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes/prediabetes-insulin-resistance",
    "relatedIcd11Code": "5A43",
    "relatedSnomedId": "714628002"
  },
  {
    "id": "gestational-diabetes",
    "title": "Gestational Diabetes",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "High blood glucose that develops during pregnancy in individuals who did not previously have diabetes. Placental hormones can block insulin action.",
    "candidatePlainLanguageTerms": [
      "pregnancy diabetes",
      "sugar during pregnancy",
      "pregnancy sugar problem"
    ],
    "symptoms": [
      "Often no noticeable symptoms (discovered via routine 24–28 week glucose screening)",
      "Mildly increased thirst and more frequent urination than usual in pregnancy"
    ],
    "causesAndRiskFactors": [
      "Placental hormonal counter-regulation impairing insulin sensitivity",
      "Maternal age over 25, obesity, or family history of diabetes"
    ],
    "complications": [
      "Macrosomia (excess birth weight) causing birth trauma or cesarean delivery",
      "Preeclampsia (high blood pressure during pregnancy)",
      "Higher lifetime risk of developing type 2 diabetes for both mother and child"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes/gestational-diabetes",
    "relatedIcd11Code": "JA63.0",
    "relatedSnomedId": "11687002"
  },
  {
    "id": "hypoglycemia",
    "title": "Hypoglycemia (Low Blood Glucose)",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "A condition where blood glucose drops below normal levels (typically below 70 mg/dL), depriving the brain and body cells of vital energy.",
    "candidatePlainLanguageTerms": [
      "low blood sugar",
      "sugar crash",
      "insulin shock",
      "the shakes"
    ],
    "symptoms": [
      "Shakiness, trembling, and sweating",
      "Dizziness, lightheadedness, and rapid heartbeat",
      "Confusion, irritability, and slurred speech",
      "Extreme hunger and blurred vision",
      "Seizures or loss of consciousness in severe episodes"
    ],
    "causesAndRiskFactors": [
      "Taking too much insulin or sulfonylurea medication relative to food intake",
      "Skipping or delaying meals after taking diabetes medication",
      "Unplanned or strenuous physical activity without carbohydrate compensation",
      "Alcohol consumption on an empty stomach"
    ],
    "complications": [
      "Loss of consciousness and severe seizures",
      "Hypoglycemia unawareness where warning signs stop appearing",
      "Traumatic falls, motor vehicle accidents, and coma"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/low-blood-glucose-hypoglycemia",
    "relatedIcd11Code": "5A40",
    "relatedSnomedId": "302866003"
  },
  {
    "id": "diabetic-ketoacidosis",
    "title": "Diabetic Ketoacidosis (DKA)",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "A dangerous acute complication of diabetes occurring when your body does not have enough insulin to allow blood sugar into cells, causing rapid breakdown of fat into toxic ketones.",
    "candidatePlainLanguageTerms": [
      "DKA",
      "acid in blood",
      "ketone poisoning",
      "diabetic emergency"
    ],
    "symptoms": [
      "High blood sugar over 240 mg/dL accompanied by high urine ketones",
      "Fruity-smelling breath (acetone breath)",
      "Nausea, persistent vomiting, and severe abdominal pain",
      "Rapid, deep breathing (Kussmaul respiration)",
      "Extreme confusion, dizziness, and progressing drowsiness"
    ],
    "causesAndRiskFactors": [
      "Missed or inadequate insulin doses",
      "Acute infections (pneumonia, urinary tract infection, sepsis)",
      "Severe physical trauma, heart attack, or acute illness"
    ],
    "complications": [
      "Severe metabolic acidosis and profound electrolyte imbalances",
      "Cerebral edema (brain swelling), coma, and death without emergency ICU therapy"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/diabetic-ketoacidosis",
    "relatedIcd11Code": "5A10.0",
    "relatedSnomedId": "420422005"
  },
  {
    "id": "diabetic-neuropathy",
    "title": "Diabetic Neuropathy (Nerve Damage)",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "A type of nerve damage that can occur in people with diabetes. High blood glucose over many years injures nerve fibers throughout your body, most commonly in the legs and feet.",
    "candidatePlainLanguageTerms": [
      "diabetic nerve pain",
      "pins and needles in feet",
      "numb toes",
      "burning feet at night"
    ],
    "symptoms": [
      "Numbness or reduced ability to feel pain or temperature changes in feet",
      "Tingling, burning, or sharp prickling sensations",
      "Hypersensitivity to touch (even light bedsheets cause pain)",
      "Muscle weakness and loss of balance or reflexes",
      "Blisters or sores on the feet that go unnoticed due to numbness"
    ],
    "causesAndRiskFactors": [
      "Chronic uncontrolled hyperglycemia damaging microvessels feeding nerves",
      "Hypertension, smoking, high cholesterol, and duration of diabetes"
    ],
    "complications": [
      "Silent foot ulcers, chronic osteomyelitis (bone infection), and foot amputation",
      "Charcot foot joint deformation and permanent loss of mobility",
      "Autonomic neuropathy causing orthostatic hypotension and digestive paralysis"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/nerve-damage-diabetic-neuropathies",
    "relatedIcd11Code": "5A11.Y",
    "relatedSnomedId": "230572002"
  },
  {
    "id": "diabetic-retinopathy",
    "title": "Diabetic Retinopathy (Eye Disease)",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "An eye condition caused by diabetes that damages the delicate blood vessels of the retina (the light-sensitive lining at the back of the eye), leading to progressive vision loss.",
    "candidatePlainLanguageTerms": [
      "diabetic eye disease",
      "sugar bleeding in eyes",
      "retina damage"
    ],
    "symptoms": [
      "Often zero symptoms in mild and early non-proliferative stages",
      "Spots or dark floating strings (floaters) drifting in vision",
      "Fluctuating or blurry vision that changes day to day",
      "Dark or empty areas in your field of vision, or impaired color vision"
    ],
    "causesAndRiskFactors": [
      "Microvascular leakage and occlusion of retinal capillaries from chronic high sugar",
      "Poor blood pressure control and elevated lipids accelerative damage"
    ],
    "complications": [
      "Proliferative diabetic retinopathy with fragile new vessel hemorrhaging",
      "Diabetic macular edema (DME) leading to irreversible central blindness",
      "Neovascular glaucoma and retinal detachment"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/diabetic-eye-disease",
    "relatedIcd11Code": "9B71.0",
    "relatedSnomedId": "4855003"
  },
  {
    "id": "diabetic-nephropathy",
    "title": "Diabetic Kidney Disease (Diabetic Nephropathy)",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "A serious microvascular complication of diabetes where damaged kidney glomeruli fail to filter waste, allowing proteins like albumin to leak into the urine.",
    "candidatePlainLanguageTerms": [
      "diabetic kidney damage",
      "protein in urine from diabetes",
      "sugar kidney disease"
    ],
    "symptoms": [
      "Early stages have no symptoms (detected via annual microalbuminuria urine test)",
      "Swelling (edema) of feet, ankles, hands, or eyes",
      "Foamy or frothy urine due to high protein content",
      "Worsening blood pressure control and fatigue",
      "Nausea, poor appetite, and metallic taste in late stages"
    ],
    "causesAndRiskFactors": [
      "Glomerular hyperfiltration and basement membrane thickening from high glucose",
      "Coexisting uncontrolled arterial hypertension and genetic susceptibility"
    ],
    "complications": [
      "Progressive chronic kidney disease transitioning into End-Stage Renal Disease",
      "Requirement for lifelong hemodialysis or kidney transplantation"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/diabetic-kidney-disease",
    "relatedIcd11Code": "5A11.Y",
    "relatedSnomedId": "127013003"
  },
  {
    "id": "cushings-syndrome",
    "title": "Cushing's Syndrome",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "A hormonal disorder caused by prolonged exposure to high levels of the hormone cortisol, either from steroid medications or a pituitary/adrenal tumor.",
    "candidatePlainLanguageTerms": [
      "cortisol overload",
      "moon face disease",
      "steroid toxicity"
    ],
    "symptoms": [
      "Weight gain with fatty deposits in the midsection, face (moon face), and upper back (buffalo hump)",
      "Pink or purple stretch marks (striae) on abdomen, thighs, and breasts",
      "Thin, fragile skin that bruises very easily",
      "Slow healing of cuts, insect bites, and infections",
      "Severe fatigue, muscle weakness, and new or worsening high blood pressure"
    ],
    "causesAndRiskFactors": [
      "Long-term use of high-dose glucocorticoid steroids (prednisone)",
      "Pituitary adenoma overproducing ACTH (Cushing disease)",
      "Adrenal gland tumors releasing excess cortisol autonomously"
    ],
    "complications": [
      "Secondary type 2 diabetes mellitus and severe osteoporosis with bone fractures",
      "Deep vein thrombosis and pulmonary embolism",
      "Cardiovascular disease and life-threatening adrenal crisis"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/endocrine-diseases/cushings-syndrome",
    "relatedIcd11Code": "5A70",
    "relatedSnomedId": "237737000"
  },
  {
    "id": "addisons-disease",
    "title": "Addison's Disease (Adrenal Insufficiency)",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "A rare disorder that occurs when the adrenal glands produce too little of the hormones cortisol and aldosterone, impairing stress response and blood pressure regulation.",
    "candidatePlainLanguageTerms": [
      "adrenal failure",
      "cortisol deficiency",
      "adrenal burnout"
    ],
    "symptoms": [
      "Extreme, unrelenting fatigue and muscle weakness",
      "Darkening of the skin (hyperpigmentation), especially on scars, skin folds, and gums",
      "Low blood pressure (hypotension) that drops further upon standing, causing fainting",
      "Salt cravings, nausea, vomiting, and chronic diarrhea",
      "Unexplained weight loss and reduced appetite"
    ],
    "causesAndRiskFactors": [
      "Autoimmune destruction of the adrenal cortex (most common in developed nations)",
      "Infections damaging adrenal glands (tuberculosis, fungal infections)",
      "Surgical removal or hemorrhage into adrenal glands"
    ],
    "complications": [
      "Addisonian crisis (acute adrenal crisis): severe shock, vascular collapse, coma, and death",
      "Severe hypoglycemia and fatal hyperkalemia (dangerously high blood potassium)"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/endocrine-diseases/adrenal-insufficiency-addisons-disease",
    "relatedIcd11Code": "5A74.0",
    "relatedSnomedId": "363732003"
  },
  {
    "id": "hyperthyroidism",
    "title": "Hyperthyroidism & Graves' Disease",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "A condition where the thyroid gland makes and releases too much thyroid hormone, accelerating your body’s metabolism and vital functions.",
    "candidatePlainLanguageTerms": [
      "overactive thyroid",
      "fast thyroid",
      "thyroid hyperactivity"
    ],
    "symptoms": [
      "Unintentional rapid weight loss despite normal or increased appetite",
      "Rapid heartbeat (tachycardia) or irregular pounding heart (palpitations)",
      "Nervousness, anxiety, irritability, and hand tremors",
      "Increased sensitivity to heat and profuse sweating",
      "Bulging or irritated eyes (Graves’ ophthalmopathy)"
    ],
    "causesAndRiskFactors": [
      "Graves’ disease (autoimmune stimulation of TSH receptors)",
      "Toxic multinodular goiter or hyperfunctioning thyroid nodules",
      "Thyroiditis (inflammation causing temporary leak of preformed hormone)"
    ],
    "complications": [
      "Atrial fibrillation (heart arrhythmia) and heart failure",
      "Thyrotoxic crisis (thyroid storm): life-threatening fever, agitation, delirium",
      "Osteoporosis and brittle bones due to accelerated calcium resorption"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/endocrine-diseases/hyperthyroidism",
    "relatedIcd11Code": "5A02",
    "relatedSnomedId": "34486009"
  },
  {
    "id": "hypothyroidism",
    "title": "Hypothyroidism & Hashimoto's Thyroiditis",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "A common condition where the thyroid gland does not produce enough thyroid hormones, causing the body’s metabolic processes to slow down.",
    "candidatePlainLanguageTerms": [
      "underactive thyroid",
      "sluggish thyroid",
      "low thyroid"
    ],
    "symptoms": [
      "Persistent tiredness and low energy",
      "Unexplained weight gain and difficulty losing weight",
      "Increased sensitivity to cold temperatures",
      "Constipation and dry, pale skin",
      "Muscle aches, joint pain, and brain fog"
    ],
    "causesAndRiskFactors": [
      "Hashimoto’s disease (chronic autoimmune thyroiditis)",
      "Surgical thyroidectomy or radioactive iodine therapy",
      "Radiation therapy to the neck area or certain medications (lithium, amiodarone)"
    ],
    "complications": [
      "Goiter (enlarged thyroid gland interfering with breathing and swallowing)",
      "Elevated LDL cholesterol and coronary heart disease",
      "Myxedema coma (rare, life-threatening decompensation with hypothermia and stupor)"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/endocrine-diseases/hypothyroidism",
    "relatedIcd11Code": "5A00",
    "relatedSnomedId": "40930008"
  },
  {
    "id": "pcos",
    "title": "Polycystic Ovary Syndrome (PCOS)",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "A common hormonal and metabolic disorder affecting individuals of reproductive age, marked by androgen excess, ovulatory dysfunction, and insulin resistance.",
    "candidatePlainLanguageTerms": [
      "PCOS",
      "polycystic ovaries",
      "ovary cyst syndrome"
    ],
    "symptoms": [
      "Irregular, infrequent, or absent menstrual periods",
      "Excess facial and body hair growth (hirsutism)",
      "Severe adult acne and male-pattern baldness / hair thinning",
      "Weight gain and difficulty shedding abdominal fat",
      "Multiple small fluid-filled follicles in the ovaries on ultrasound"
    ],
    "causesAndRiskFactors": [
      "Hyperinsulinemia driving ovarian androgen overproduction",
      "Genetic predisposition and family history of metabolic disorders",
      "Chronic low-grade systemic inflammation"
    ],
    "complications": [
      "Female infertility and recurrent early pregnancy loss",
      "Type 2 diabetes, metabolic syndrome, and nonalcoholic fatty liver disease",
      "Endometrial hyperplasia and increased risk of endometrial cancer"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/endocrine-diseases/polycystic-ovary-syndrome",
    "relatedIcd11Code": "5A80.1",
    "relatedSnomedId": "237055002"
  },
  {
    "id": "primary-hyperparathyroidism",
    "title": "Primary Hyperparathyroidism",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "A disorder where one or more of the parathyroid glands produces too much parathyroid hormone (PTH), causing calcium levels in the blood to rise dangerously high.",
    "candidatePlainLanguageTerms": [
      "high parathyroid",
      "high blood calcium",
      "parathyroid tumor"
    ],
    "symptoms": [
      "Fragile, easily broken bones (osteoporosis)",
      "Recurrent kidney stones",
      "Excessive urination and constant thirst",
      "Abdominal pain, nausea, and chronic constipation",
      "Depression, memory lapses, and general fatigue (\"bones, stones, groans, and moans\")"
    ],
    "causesAndRiskFactors": [
      "Benign parathyroid adenoma (most common cause)",
      "Hyperplasia (enlargement) of two or more parathyroid glands",
      "Familial multiple endocrine neoplasia (MEN) syndromes"
    ],
    "complications": [
      "Severe osteoporosis and pathological bone fractures",
      "Chronic kidney disease from calcium nephrocalcinosis",
      "Peptic ulcer disease and acute pancreatitis"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/endocrine-diseases/primary-hyperparathyroidism",
    "relatedIcd11Code": "5A50",
    "relatedSnomedId": "111379007"
  },
  {
    "id": "gerd",
    "title": "GERD (Gastroesophageal Reflux Disease)",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "A digestive disorder that occurs when stomach acid or bile repeatedly flows back into your food pipe (esophagus), irritating the lining.",
    "candidatePlainLanguageTerms": [
      "acid reflux",
      "heartburn",
      "acid indigestion",
      "sour stomach"
    ],
    "symptoms": [
      "A burning sensation in your chest (heartburn), usually after eating",
      "Backwash (regurgitation) of food or sour liquid",
      "Upper abdominal or chest pain",
      "Difficulty swallowing (dysphagia)",
      "Sensation of a lump in your throat and chronic dry cough"
    ],
    "causesAndRiskFactors": [
      "Weak or relaxed lower esophageal sphincter (LES)",
      "Hiatal hernia, obesity, and pregnancy",
      "Delayed stomach emptying and smoking"
    ],
    "complications": [
      "Esophagitis (ulceration and bleeding of the esophagus)",
      "Esophageal stricture (narrowing causing swallowing difficulties)",
      "Barrett’s esophagus and increased risk of esophageal adenocarcinoma"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-adults",
    "relatedIcd11Code": "DA22",
    "relatedSnomedId": "235595009"
  },
  {
    "id": "peptic-ulcer-disease",
    "title": "Peptic Ulcer Disease (Stomach & Duodenal Ulcers)",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Open sores that develop on the inside lining of your stomach (gastric ulcers) and the upper portion of your small intestine (duodenal ulcers) when protective mucus is damaged.",
    "candidatePlainLanguageTerms": [
      "stomach ulcer",
      "duodenal ulcer",
      "bleeding ulcer"
    ],
    "symptoms": [
      "Burning stomach pain located between your navel and breastbone",
      "Feeling of fullness, bloating, or belching",
      "Intolerance to fatty foods and heartburn",
      "Nausea and vomiting",
      "Dark or tarry black stools (melena) indicating internal bleeding"
    ],
    "causesAndRiskFactors": [
      "Helicobacter pylori (H. pylori) bacterial infection",
      "Regular use of nonsteroidal anti-inflammatory drugs (NSAIDs like ibuprofen, naproxen, aspirin)",
      "Smoking and heavy alcohol consumption"
    ],
    "complications": [
      "Gastrointestinal hemorrhage and severe anemia",
      "Perforation (hole in the wall of the stomach or intestine causing peritonitis)",
      "Gastric outlet obstruction from scar tissue"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/peptic-ulcers-stomach-ulcers",
    "relatedIcd11Code": "DA60",
    "relatedSnomedId": "13200003"
  },
  {
    "id": "irritable-bowel-syndrome",
    "title": "Irritable Bowel Syndrome (IBS)",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "A common disorder affecting the large intestine, characterized by recurrent cramping, abdominal pain, bloating, gas, and changes in bowel habits without structural damage.",
    "candidatePlainLanguageTerms": [
      "spastic colon",
      "nervous stomach",
      "IBS",
      "sensitive gut"
    ],
    "symptoms": [
      "Abdominal pain or cramping typically related to passing bowel movements",
      "Changes in frequency and appearance of stool (diarrhea, constipation, or alternating both)",
      "Bloating, abdominal distension, and excess gas",
      "Feeling of incomplete bowel evacuation and whitish mucus in stool"
    ],
    "causesAndRiskFactors": [
      "Gut-brain axis dysregulation and visceral hypersensitivity",
      "Post-infectious gastroenteritis and altered gut microbiome",
      "Psychological stress, anxiety, and specific food intolerances (FODMAPs)"
    ],
    "complications": [
      "Significant reduction in quality of life and work productivity",
      "Development of hemorrhoids from chronic straining or frequent diarrhea",
      "Avoidant restrictive eating and nutrient anxiety"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/irritable-bowel-syndrome",
    "relatedIcd11Code": "DD91.0",
    "relatedSnomedId": "10743008"
  },
  {
    "id": "celiac-disease",
    "title": "Celiac Disease",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "A chronic immune disorder in which eating gluten (a protein found in wheat, barley, and rye) leads to immune-mediated damage of the tiny villi lining the small intestine.",
    "candidatePlainLanguageTerms": [
      "gluten intolerance",
      "celiac sprue",
      "wheat allergy"
    ],
    "symptoms": [
      "Chronic diarrhea or pale, fatty, foul-smelling stools (steatorrhea)",
      "Bloating, gas, and abdominal pain",
      "Unexplained weight loss and failure to thrive in children",
      "Iron deficiency anemia resistant to oral supplements",
      "Itchy, blistering skin rash (dermatitis herpetiformis)"
    ],
    "causesAndRiskFactors": [
      "Genetic predisposition (presence of HLA-DQ2 or HLA-DQ8 genes)",
      "Ingestion of gluten triggering an autoimmune T-cell response",
      "Personal or family history of other autoimmune conditions (type 1 diabetes, thyroiditis)"
    ],
    "complications": [
      "Severe malabsorption leading to osteoporosis and iron-deficiency anemia",
      "Infertility and recurrent miscarriages",
      "Increased risk of enteropathy-associated T-cell lymphoma (EATL)"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/celiac-disease",
    "relatedIcd11Code": "DA96.0",
    "relatedSnomedId": "396331005"
  },
  {
    "id": "crohns-disease",
    "title": "Crohn's Disease",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "A chronic inflammatory bowel disease (IBD) that causes transmural inflammation in any part of the digestive tract from mouth to anus, most commonly the ileum and colon.",
    "candidatePlainLanguageTerms": [
      "IBD",
      "crohns",
      "bowel inflammation",
      "chronic bowel infection"
    ],
    "symptoms": [
      "Persistent diarrhea, often with blood or mucus",
      "Abdominal pain and severe cramping (especially lower right quadrant)",
      "Fever, chronic fatigue, and unexplained weight loss",
      "Mouth sores (canker sores) and reduced appetite",
      "Pain or drainage near or around the anus (perianal fistula)"
    ],
    "causesAndRiskFactors": [
      "Dysregulated immune response targeting intestinal commensal flora",
      "Genetic factors (NOD2/CARD15 mutations)",
      "Cigarette smoking (greatly increases severity and relapse rates)"
    ],
    "complications": [
      "Bowel obstruction from strictures and chronic scar tissue",
      "Fistulas (abnormal tunnels connecting bowel to bladder, vagina, or skin)",
      "Malnutrition, perianal abscesses, and increased colorectal cancer risk"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/crohns-disease",
    "relatedIcd11Code": "DD70",
    "relatedSnomedId": "34000006"
  },
  {
    "id": "ulcerative-colitis",
    "title": "Ulcerative Colitis",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "A chronic inflammatory bowel disease (IBD) that causes long-lasting inflammation and ulcers in the innermost lining of your large intestine (colon and rectum).",
    "candidatePlainLanguageTerms": [
      "colitis",
      "bleeding colon",
      "ulcerative bowel"
    ],
    "symptoms": [
      "Frequent diarrhea, often accompanied by blood or pus",
      "Severe abdominal pain and cramping, commonly left-sided",
      "Rectal pain, rectal bleeding, and urgency to defecate (tenesmus)",
      "Inability to defecate despite urgency",
      "Fatigue, fever, and weight loss"
    ],
    "causesAndRiskFactors": [
      "Abnormal immune attack on the mucosal barrier of the colon",
      "Genetic susceptibility and family history of inflammatory bowel disease",
      "Environmental and dietary triggers altering microbiome composition"
    ],
    "complications": [
      "Toxic megacolon (rapid widening of the colon requiring emergency surgery)",
      "Perforation of the colon and severe bleeding requiring transfusion",
      "Markedly increased risk of colorectal cancer after 8–10 years of active disease"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/ulcerative-colitis",
    "relatedIcd11Code": "DD71",
    "relatedSnomedId": "64766004"
  },
  {
    "id": "diverticulitis",
    "title": "Diverticulosis & Diverticulitis",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Conditions affecting small pouches (diverticula) that can form in the intestines. Diverticulosis refers to having pouches; diverticulitis occurs when pouches become inflamed or infected.",
    "candidatePlainLanguageTerms": [
      "diverticular disease",
      "colon pouches",
      "infected pouches"
    ],
    "symptoms": [
      "Severe, constant pain in the lower left side of the abdomen",
      "Nausea, vomiting, and loss of appetite",
      "Fever and chills",
      "Abdominal tenderness and constipation or diarrhea"
    ],
    "causesAndRiskFactors": [
      "High pressure inside the colon forcing mucosa through muscular weaknesses",
      "Low-fiber diet, aging, chronic constipation, and obesity",
      "Sedentary lifestyle and regular use of NSAIDs"
    ],
    "complications": [
      "Abscess formation within or outside the colon wall",
      "Bowel obstruction from scarring and inflammation",
      "Perforation leading to generalized peritonitis and sepsis"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/diverticular-disease",
    "relatedIcd11Code": "DB30",
    "relatedSnomedId": "428640002"
  },
  {
    "id": "gallstones",
    "title": "Gallstones (Cholelithiasis)",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Hardened deposits of digestive fluid (mostly cholesterol or bilirubin) that form in your gallbladder and can block bile ducts.",
    "candidatePlainLanguageTerms": [
      "gallbladder stones",
      "gallbladder attack",
      "biliary colic"
    ],
    "symptoms": [
      "Sudden and rapidly intensifying pain in the upper right abdomen (biliary colic)",
      "Pain radiating to your right shoulder or between your shoulder blades",
      "Nausea or vomiting following rich, fatty meals",
      "Yellowing of skin and whites of eyes (jaundice) if common duct is blocked"
    ],
    "causesAndRiskFactors": [
      "Bile containing too much cholesterol or bilirubin, or incomplete gallbladder emptying",
      "Being female, age 40 or older, obesity, rapid weight loss, and pregnancy"
    ],
    "complications": [
      "Acute cholecystitis (gallbladder inflammation and infection)",
      "Choledocholithiasis (blockage of the common bile duct causing cholangitis)",
      "Gallstone pancreatitis (blockage of the pancreatic duct)"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/gallstones",
    "relatedIcd11Code": "DC11",
    "relatedSnomedId": "235919008"
  },
  {
    "id": "gastroparesis",
    "title": "Gastroparesis (Delayed Gastric Emptying)",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "A condition that affects the normal spontaneous movement of the muscles (motility) in your stomach, preventing it from emptying food normally into the small intestine.",
    "candidatePlainLanguageTerms": [
      "paralyzed stomach",
      "slow stomach",
      "delayed digestion"
    ],
    "symptoms": [
      "Vomiting undigested food eaten hours earlier",
      "Nausea and feeling full after eating just a few bites (early satiety)",
      "Abdominal bloating and upper abdominal pain",
      "Acid reflux and noticeable fluctuations in blood sugar levels in diabetics"
    ],
    "causesAndRiskFactors": [
      "Vagus nerve damage from diabetes mellitus (diabetic gastroparesis)",
      "Post-surgical injury following bariatric or anti-reflux stomach surgery",
      "Post-viral infections and autoimmune nervous system conditions"
    ],
    "complications": [
      "Severe dehydration and chronic malnutrition from persistent vomiting",
      "Formation of bezoars (solid masses of undigested food blocking the stomach)",
      "Erratic, unmanageable swings in blood glucose levels"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/gastroparesis",
    "relatedIcd11Code": "DA42.1",
    "relatedSnomedId": "57454006"
  },
  {
    "id": "chronic-constipation",
    "title": "Chronic Constipation",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Infrequent bowel movements or difficult passage of stools that persists for several weeks or longer, typically defined as fewer than three bowel movements a week.",
    "candidatePlainLanguageTerms": [
      "constipated",
      "hard stools",
      "blocked bowels",
      "sluggish gut"
    ],
    "symptoms": [
      "Passing fewer than three stools a week",
      "Lumpy, dry, or hard stools (Bristol Stool Scale Type 1–2)",
      "Straining to have bowel movements or needing manual maneuvers to evacuate",
      "Feeling as though there is a blockage in your rectum or incomplete evacuation"
    ],
    "causesAndRiskFactors": [
      "Low dietary fiber intake, inadequate fluid hydration, and lack of exercise",
      "Pelvic floor muscle dyssynergia and slow-transit colon",
      "Medications (opioid painkillers, iron supplements, calcium channel blockers, antidepressants)"
    ],
    "complications": [
      "Fecal impaction (hardened stool stuck in intestines requiring medical removal)",
      "Anal fissures (tears in the skin of the anus) and hemorrhoids",
      "Rectal prolapse from chronic severe straining"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/constipation",
    "relatedIcd11Code": "ME05.0",
    "relatedSnomedId": "14760008"
  },
  {
    "id": "chronic-diarrhea",
    "title": "Chronic Diarrhea",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Frequent, loose, or watery bowel movements that last for more than four weeks, indicating an underlying chronic gastrointestinal disorder, infection, or malabsorption.",
    "candidatePlainLanguageTerms": [
      "loose motions",
      "watery stools",
      "runny tummy"
    ],
    "symptoms": [
      "Watery stools occurring three or more times per day for over a month",
      "Abdominal cramps and urgent need to pass stool",
      "Nausea, bloating, and potential fecal incontinence",
      "Signs of dehydration (thirst, dizziness, dry tongue)"
    ],
    "causesAndRiskFactors": [
      "Malabsorptive disorders (celiac disease, exocrine pancreatic insufficiency)",
      "Inflammatory bowel diseases (Crohn’s, ulcerative colitis, microscopic colitis)",
      "Chronic parasitic/bacterial infections and medications (metformin, antibiotics, PPIs)"
    ],
    "complications": [
      "Severe dehydration and critical electrolyte depletion (hypokalemia, metabolic acidosis)",
      "Micronutrient deficiencies and profound unintentional weight loss"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/chronic-diarrhea",
    "relatedIcd11Code": "ME05.1",
    "relatedSnomedId": "236071009"
  },
  {
    "id": "hemorrhoids",
    "title": "Hemorrhoids (Piles)",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Swollen and inflamed veins in the lowest part of your rectum and anus, similar to varicose veins. Can be internal (inside rectum) or external (under anal skin).",
    "candidatePlainLanguageTerms": [
      "piles",
      "anal lumps",
      "bleeding after stool"
    ],
    "symptoms": [
      "Painless bleeding during bowel movements (bright red blood on toilet paper or in bowl)",
      "Itching, irritation, or pain in your anal region",
      "Painful swelling or a sensitive lump near your anus (thrombosed external hemorrhoid)",
      "Mucus discharge and sensation of fullness"
    ],
    "causesAndRiskFactors": [
      "Chronic straining during bowel movements and sitting for prolonged periods on the toilet",
      "Chronic constipation or diarrhea",
      "Pregnancy and obesity increasing intra-abdominal venous pressure"
    ],
    "complications": [
      "Thrombosis: painful blood clot within an external hemorrhoid requiring excision",
      "Strangulated internal hemorrhoid: cut-off blood supply causing severe tissue ischemia",
      "Iron deficiency anemia from persistent chronic bleeding"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/hemorrhoids",
    "relatedIcd11Code": "DB60",
    "relatedSnomedId": "77051009"
  },
  {
    "id": "appendicitis",
    "title": "Appendicitis",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "An acute, potentially life-threatening inflammation of the appendix, a narrow finger-shaped pouch that projects from your colon on the lower right side of your abdomen.",
    "candidatePlainLanguageTerms": [
      "burst appendix",
      "inflamed appendix",
      "appendix infection"
    ],
    "symptoms": [
      "Sudden pain beginning around the navel that shifts to the lower right abdomen (McBurney’s point)",
      "Pain that worsens with coughing, walking, or sudden jarring movements",
      "Nausea and vomiting shortly after pain starts",
      "Loss of appetite, low-grade fever that may rise, and abdominal rigidity"
    ],
    "causesAndRiskFactors": [
      "Obstruction of the appendiceal lumen by a fecalith (hardened stool)",
      "Lymphoid hyperplasia following viral infections, foreign bodies, or parasites"
    ],
    "complications": [
      "Perforation (ruptured appendix) causing generalized life-threatening peritonitis",
      "Intra-abdominal abscess formation requiring drainage and urgent appendectomy"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/appendicitis",
    "relatedIcd11Code": "DB10",
    "relatedSnomedId": "74400008"
  },
  {
    "id": "acute-pancreatitis",
    "title": "Acute & Chronic Pancreatitis",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Inflammation of the pancreas, an organ producing vital digestive enzymes and hormones. Can occur as a sudden attack (acute) or persistent irreversible damage (chronic).",
    "candidatePlainLanguageTerms": [
      "pancreas inflammation",
      "pancreatic attack"
    ],
    "symptoms": [
      "Severe upper abdominal pain that radiates straight through to your back",
      "Pain that worsens after eating, particularly fatty foods",
      "Rapid pulse, fever, nausea, and recurrent vomiting",
      "Chronic form: oily, floating stools (steatorrhea), weight loss, and secondary diabetes"
    ],
    "causesAndRiskFactors": [
      "Gallstones blocking the common bile-pancreatic duct (most common acute cause)",
      "Heavy chronic alcohol consumption (most common chronic cause)",
      "High blood triglycerides, abdominal trauma, and certain medications"
    ],
    "complications": [
      "Pancreatic necrosis, pseudocysts, and multi-organ failure (kidney and lung)",
      "Exocrine pancreatic insufficiency causing severe malabsorption",
      "Brittle secondary type 3c diabetes"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/pancreatitis",
    "relatedIcd11Code": "DC31",
    "relatedSnomedId": "197456007"
  },
  {
    "id": "barretts-esophagus",
    "title": "Barrett's Esophagus",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "A condition in which the flat pink lining of the swallowing tube connecting the mouth to the stomach (esophagus) becomes damaged by acid and transforms into lining resembling intestine.",
    "candidatePlainLanguageTerms": [
      "precancerous esophagus",
      "acid damaged esophagus"
    ],
    "symptoms": [
      "Does not cause specific symptoms itself (symptoms stem from underlying GERD)",
      "Frequent, longstanding heartburn and acid regurgitation",
      "Difficulty swallowing food and chest pain"
    ],
    "causesAndRiskFactors": [
      "Chronic gastroesophageal reflux disease (GERD) over 5–10+ years",
      "Male sex, Caucasian race, age over 50, and central obesity"
    ],
    "complications": [
      "Development of low-grade and high-grade dysplasia",
      "Progression to esophageal adenocarcinoma (malignant esophageal cancer)"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/barretts-esophagus",
    "relatedIcd11Code": "DA22.1",
    "relatedSnomedId": "302914004"
  },
  {
    "id": "hiatal-hernia",
    "title": "Hiatal Hernia",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "A condition where the upper part of your stomach bulges up through the large muscle separating your abdomen and chest (the diaphragm) via the hiatus opening.",
    "candidatePlainLanguageTerms": [
      "stomach hernia",
      "hiatus hernia",
      "sliding hernia"
    ],
    "symptoms": [
      "Heartburn and acid regurgitation into the mouth",
      "Difficulty swallowing (dysphagia) and chest or abdominal pain",
      "Feeling full soon after starting to eat and shortness of breath"
    ],
    "causesAndRiskFactors": [
      "Age-related weakening of the diaphragmatic connective tissue hiatus",
      "Persistent intense pressure from coughing, vomiting, straining, or heavy lifting",
      "Obesity and pregnancy increasing abdominal cavity pressure"
    ],
    "complications": [
      "Severe GERD, esophagitis, and Cameron ulcers with gastrointestinal bleeding",
      "Strangulation of large paraesophageal hernia cutting off blood supply (surgical emergency)"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/hiatal-hernia",
    "relatedIcd11Code": "DA23",
    "relatedSnomedId": "84089009"
  },
  {
    "id": "lactose-intolerance",
    "title": "Lactose Intolerance",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "The inability to fully digest the sugar (lactose) in milk and dairy products due to deficiency of the enzyme lactase produced in the small intestine.",
    "candidatePlainLanguageTerms": [
      "dairy intolerance",
      "milk allergy",
      "cannot drink milk"
    ],
    "symptoms": [
      "Diarrhea, bloating, and excessive gas 30 minutes to 2 hours after consuming dairy",
      "Stomach cramps and rumbling noises in the abdomen",
      "Nausea and sometimes vomiting"
    ],
    "causesAndRiskFactors": [
      "Primary lactase deficiency (genetically programmed decline after childhood)",
      "Secondary deficiency from small intestine injury (celiac disease, Crohn’s, gastroenteritis)"
    ],
    "complications": [
      "Dietary avoidance leading to calcium and vitamin D deficiency",
      "Accelerated bone loss and increased risk of osteoporosis"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/lactose-intolerance",
    "relatedIcd11Code": "5C61.0",
    "relatedSnomedId": "84089009"
  },
  {
    "id": "functional-dyspepsia",
    "title": "Functional Dyspepsia (Indigestion)",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Chronic symptoms of post-meal fullness, early satiety, or burning upper abdominal discomfort that occur without any structural disease identified on endoscopy.",
    "candidatePlainLanguageTerms": [
      "indigestion",
      "upset stomach",
      "dyspepsia",
      "sour belly"
    ],
    "symptoms": [
      "Troublesome postprandial fullness after eating normal-sized meals",
      "Early satiation that prevents finishing regular meals",
      "Epigastric pain or burning centered in the upper abdomen",
      "Belching and nausea not relieved by defecation"
    ],
    "causesAndRiskFactors": [
      "Gastric sensory and motor dysfunction, impaired fundic accommodation",
      "Duodenal microinflammation and visceral hypersensitivity",
      "Psychological distress and prior bacterial gastroenteritis"
    ],
    "complications": [
      "Impaired nutritional intake, unintentional weight loss, and chronic quality of life impairment"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/indigestion-dyspepsia",
    "relatedIcd11Code": "MD90",
    "relatedSnomedId": "371536002"
  },
  {
    "id": "chronic-kidney-disease",
    "title": "Chronic Kidney Disease (CKD Stages 1-5)",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "A long-term condition where the kidneys gradually lose their ability to filter extra water and waste products from your blood, leading to fluid retention and toxin accumulation.",
    "candidatePlainLanguageTerms": [
      "kidney damage",
      "renal failure",
      "failing kidneys",
      "weak kidneys"
    ],
    "symptoms": [
      "Early stages (Stages 1–3) are almost completely silent with zero symptoms",
      "Swelling in the feet, ankles, legs, or face (edema)",
      "Fatigue, lack of energy, and trouble concentrating",
      "Foamy or bubbly urine, or changes in how often you urinate",
      "Persistent dry, itchy skin and muscle cramps at night"
    ],
    "causesAndRiskFactors": [
      "Diabetes mellitus (high blood sugar damaging renal microvessels)",
      "High blood pressure (hypertension stressing delicate glomeruli)",
      "Glomerulonephritis, polycystic kidney disease, and prolonged use of NSAIDs"
    ],
    "complications": [
      "Progression to End-Stage Renal Disease (ESRD) requiring dialysis or kidney transplant",
      "Cardiovascular disease, stroke, and fluid overload pulmonary edema",
      "Renal anemia, mineral and bone disorder, and severe hyperkalemia"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd",
    "relatedIcd11Code": "GB61",
    "relatedSnomedId": "709044004"
  },
  {
    "id": "kidney-stones",
    "title": "Kidney Stones (Nephrolithiasis)",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Hard mineral and salt deposits (such as calcium oxalate or uric acid) that form inside your kidneys when urine becomes concentrated.",
    "candidatePlainLanguageTerms": [
      "kidney stone",
      "renal calculus",
      "passing a stone",
      "gravel in urine"
    ],
    "symptoms": [
      "Severe, sharp pain in your back and side (flank pain) below your ribs",
      "Pain that radiates toward the lower abdomen and groin area",
      "Pain that comes in waves and fluctuates in intensity (renal colic)",
      "Pink, red, or brown blood in the urine (hematuria)",
      "Cloudy or foul-smelling urine, and nausea and vomiting"
    ],
    "causesAndRiskFactors": [
      "Chronic dehydration and inadequate daily water intake",
      "Diets high in sodium, animal proteins, and high-oxalate foods",
      "Hyperparathyroidism, gout, obesity, and gastric bypass surgery"
    ],
    "complications": [
      "Urinary tract obstruction causing severe hydronephrosis",
      "Urosepsis: life-threatening systemic bacterial infection from an obstructed infected kidney",
      "Permanent renal parenchymal scarring"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/kidney-stones",
    "relatedIcd11Code": "GB70",
    "relatedSnomedId": "95570007"
  },
  {
    "id": "polycystic-kidney-disease",
    "title": "Polycystic Kidney Disease (PKD)",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "An inherited genetic disorder in which clusters of fluid-filled cysts develop predominantly within your kidneys, causing them to enlarge and lose function over time.",
    "candidatePlainLanguageTerms": [
      "PKD",
      "kidney cysts",
      "inherited kidney disease"
    ],
    "symptoms": [
      "High blood pressure developing at an unusually early age",
      "Back or side flank pain from enlarging cysts",
      "Blood in the urine (hematuria) from ruptured cysts",
      "Feeling of fullness or visible swelling in your abdomen",
      "Frequent kidney infections and kidney stones"
    ],
    "causesAndRiskFactors": [
      "Autosomal dominant PKD (ADPKD, mutations in PKD1 or PKD2 genes)",
      "Autosomal recessive PKD (ARPKD, rare infantile form, PKHD1 gene)"
    ],
    "complications": [
      "Progressive renal failure with over 50% reaching ESRD by age 60",
      "Intracranial berry aneurysms in the brain with risk of rupture and hemorrhagic stroke",
      "Polycystic liver disease and cardiac valve abnormalities (mitral valve prolapse)"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/polycystic-kidney-disease",
    "relatedIcd11Code": "GB90.0",
    "relatedSnomedId": "82525005"
  },
  {
    "id": "acute-kidney-injury",
    "title": "Acute Kidney Injury (AKI)",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "A sudden, rapid episode of kidney failure or kidney damage that occurs within a few hours or days, causing waste products to quickly build up in your blood.",
    "candidatePlainLanguageTerms": [
      "sudden kidney failure",
      "acute renal failure",
      "kidney shutdown"
    ],
    "symptoms": [
      "Decreased urine output, although occasionally output remains normal",
      "Fluid retention causing swelling in legs, ankles, or feet",
      "Shortness of breath, fatigue, and confusion",
      "Nausea, chest pain, and in severe cases, seizures or coma"
    ],
    "causesAndRiskFactors": [
      "Severe dehydration, hemorrhage, sepsis, or cardiogenic shock (prerenal)",
      "Nephrotoxic drugs (NSAIDs, aminoglycosides, IV radiocontrast dye) or acute tubular necrosis (intrinsic)",
      "Urinary tract obstruction (enlarged prostate, kidney stones) (postrenal)"
    ],
    "complications": [
      "Metabolic acidosis and fatal cardiac arrhythmias from hyperkalemia",
      "Uremic pericarditis and encephalopathy",
      "Progression to irreversible chronic kidney disease or dependence on dialysis"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/acute-kidney-injury",
    "relatedIcd11Code": "GB60",
    "relatedSnomedId": "14669001"
  },
  {
    "id": "glomerulonephritis",
    "title": "Glomerulonephritis & IgA Nephropathy",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Inflammation of the tiny filters in your kidneys (glomeruli) that clean your blood. Can develop suddenly (acute) or gradually worsen over years (chronic).",
    "candidatePlainLanguageTerms": [
      "kidney filter inflammation",
      "Bright disease",
      "IgA nephropathy"
    ],
    "symptoms": [
      "Cola-colored or tea-colored urine from red blood cells (hematuria)",
      "Foamy urine due to excess protein leakage (proteinuria)",
      "High blood pressure (hypertension)",
      "Swelling (edema) in face, eyes, hands, and feet"
    ],
    "causesAndRiskFactors": [
      "IgA nephropathy (Berger disease) with deposition of IgA antibodies in glomeruli",
      "Post-streptococcal infection, lupus erythematosus, and Goodpasture syndrome",
      "Viral infections (Hepatitis B, Hepatitis C, HIV)"
    ],
    "complications": [
      "Acute kidney failure and nephrotic syndrome",
      "Chronic kidney disease and eventual end-stage renal disease"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/glomerulonephritis",
    "relatedIcd11Code": "GB40",
    "relatedSnomedId": "36171008"
  },
  {
    "id": "nephrotic-syndrome",
    "title": "Nephrotic Syndrome",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "A kidney disorder that causes your body to pass too much protein in your urine (over 3.5 grams per day), resulting in low blood protein and severe generalized swelling.",
    "candidatePlainLanguageTerms": [
      "protein losing kidney",
      "heavy protein leak",
      "nephrotic swelling"
    ],
    "symptoms": [
      "Severe swelling (edema), especially around your eyes (periorbital) and in your feet and ankles",
      "Foamy urine caused by excess protein leakage",
      "Weight gain due to massive fluid retention (anasarca)",
      "Fatigue and loss of appetite"
    ],
    "causesAndRiskFactors": [
      "Minimal change disease (most common cause in children)",
      "Focal segmental glomerulosclerosis (FSGS) and membranous nephropathy in adults",
      "Diabetic nephropathy, systemic lupus erythematosus, and amyloidosis"
    ],
    "complications": [
      "Blood clots (deep vein thrombosis and renal vein thrombosis) due to loss of anticoagulant proteins",
      "Severe hypercholesterolemia and high triglycerides",
      "High risk of bacterial infections (loss of immunoglobulins in urine)"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/nephrotic-syndrome-adults",
    "relatedIcd11Code": "GB41",
    "relatedSnomedId": "52254009"
  },
  {
    "id": "end-stage-renal-disease",
    "title": "End-Stage Renal Disease (ESRD) & Hemodialysis",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "The final, permanent stage of chronic kidney disease (Stage 5) when your kidneys no longer function well enough to meet the needs of daily life, requiring renal replacement therapy.",
    "candidatePlainLanguageTerms": [
      "kidney failure",
      "dialysis stage",
      "complete kidney failure",
      "need a transplant"
    ],
    "symptoms": [
      "Little to no urine production (oliguria or anuria)",
      "Severe shortness of breath from pulmonary fluid buildup",
      "Uremic frost, intractable itching, and ammonia breath odor",
      "Severe nausea, vomiting, metallic taste, and weight loss",
      "Severe fatigue, weakness, and confusion (uremic encephalopathy)"
    ],
    "causesAndRiskFactors": [
      "Long-standing uncontrolled diabetes mellitus and chronic hypertension",
      "Polycystic kidney disease, chronic glomerulonephritis, and recurrent pyelonephritis"
    ],
    "complications": [
      "Fatal hyperkalemia-induced cardiac arrest without timely dialysis",
      "Vascular access failure, catheter-related bloodstream infections, and sepsis",
      "High cardiovascular mortality"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/kidney-failure",
    "relatedIcd11Code": "GB61.5",
    "relatedSnomedId": "46177005"
  },
  {
    "id": "pyelonephritis",
    "title": "Kidney Infection (Pyelonephritis)",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "A specific type of urinary tract infection (UTI) that generally begins in your urethra or bladder and travels upward into one or both of your kidneys.",
    "candidatePlainLanguageTerms": [
      "kidney infection",
      "upper UTI",
      "infected kidney"
    ],
    "symptoms": [
      "High fever and shaking chills",
      "Back, side (flank), or groin pain, often severe",
      "Burning pain or stinging when urinating (dysuria)",
      "Cloudy, dark, or bloody urine with a strong, unpleasant smell",
      "Persistent nausea and vomiting"
    ],
    "causesAndRiskFactors": [
      "Ascending bacterial infection, predominantly Escherichia coli (E. coli)",
      "Female anatomy (shorter urethra), sexual activity, and pregnancy",
      "Urinary tract blockage (kidney stone, enlarged prostate, vesicoureteral reflux)"
    ],
    "complications": [
      "Urosepsis: bacteria spreading into bloodstream causing septic shock",
      "Renal abscess formation and permanent kidney parenchymal scarring",
      "Preterm labor and delivery in pregnant individuals"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/urologic-diseases/kidney-infection-pyelonephritis",
    "relatedIcd11Code": "GB54",
    "relatedSnomedId": "45816000"
  },
  {
    "id": "lupus-nephritis",
    "title": "Lupus Nephritis",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "An autoimmune inflammation of the kidneys caused by systemic lupus erythematosus (SLE), where autoantibodies attack healthy renal tissue.",
    "candidatePlainLanguageTerms": [
      "lupus kidney disease",
      "kidney lupus",
      "autoimmune kidney damage"
    ],
    "symptoms": [
      "Foamy or frothy urine due to high protein content",
      "Swelling in legs, ankles, or feet (edema)",
      "High blood pressure (hypertension)",
      "Systemic lupus symptoms: butterfly facial rash, joint pain, fatigue, and fever"
    ],
    "causesAndRiskFactors": [
      "Systemic lupus erythematosus (autoimmune anti-dsDNA and immune complex deposition)",
      "More frequent and severe in females of African, Hispanic, or Asian descent"
    ],
    "complications": [
      "End-stage kidney disease requiring lifelong dialysis or kidney transplantation",
      "Severe immunosuppression complications from required medications (corticosteroids, cyclophosphamide)"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/lupus-nephritis",
    "relatedIcd11Code": "4A40.0",
    "relatedSnomedId": "236495003"
  },
  {
    "id": "proteinuria",
    "title": "Proteinuria & Albuminuria (Protein in Urine)",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "A condition characterized by elevated levels of protein (particularly albumin) in the urine, serving as an early hallmark warning sign of kidney damage.",
    "candidatePlainLanguageTerms": [
      "protein in pee",
      "foamy urine",
      "albumin leak",
      "kidney leak"
    ],
    "symptoms": [
      "Usually silent in mild and early stages",
      "Foamy, frothy, or bubbly urine that doesn’t clear with flushing",
      "Swelling (edema) in hands, feet, abdomen, or face in severe cases"
    ],
    "causesAndRiskFactors": [
      "Damaged glomerular filtration barrier from diabetes or high blood pressure",
      "Glomerulonephritis, preeclampsia, and heavy exercise or high fever (transient)"
    ],
    "complications": [
      "Progression to irreversible chronic kidney disease and nephrotic syndrome",
      "Strongly elevated risk for cardiovascular events and stroke"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/protein-urine",
    "relatedIcd11Code": "MF90",
    "relatedSnomedId": "29738008"
  },
  {
    "id": "hematuria",
    "title": "Hematuria (Blood in Urine)",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "The presence of red blood cells in the urine, which can be visible to the naked eye (gross hematuria) or only detectable under a microscope (microscopic hematuria).",
    "candidatePlainLanguageTerms": [
      "blood in pee",
      "red urine",
      "pink pee",
      "smoky urine"
    ],
    "symptoms": [
      "Pink, red, or cola-colored urine from red blood cells",
      "Often painless on its own, but painful if accompanied by a UTI or passing kidney stone clots",
      "May be accompanied by flank pain or burning on urination"
    ],
    "causesAndRiskFactors": [
      "Urinary tract infections (cystitis, pyelonephritis)",
      "Kidney stones or bladder stones",
      "Glomerulonephritis, benign prostatic hyperplasia (BPH), or vigorous exercise",
      "Urological malignancies (bladder or kidney cancer)"
    ],
    "complications": [
      "Urinary tract obstruction from blood clots",
      "Delayed diagnosis of underlying renal or bladder malignancy"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/urologic-diseases/hematuria-blood-urine",
    "relatedIcd11Code": "MF95",
    "relatedSnomedId": "34436003"
  },
  {
    "id": "nafld-masld",
    "title": "Nonalcoholic Fatty Liver Disease (MASLD / NAFLD)",
    "category": "Liver Diseases",
    "plainLanguageSummary": "A condition in which excess fat builds up in liver cells in individuals who drink little or no alcohol. Highly associated with metabolic syndrome, insulin resistance, and obesity.",
    "candidatePlainLanguageTerms": [
      "fatty liver",
      "liver fat",
      "hepatic steatosis",
      "metabolic liver"
    ],
    "symptoms": [
      "Usually a silent disease with no symptoms in early stages",
      "Fatigue and malaise",
      "Mild discomfort or dull ache in the upper right side of the abdomen"
    ],
    "causesAndRiskFactors": [
      "Overweight, obesity, and visceral abdominal adiposity",
      "Insulin resistance and type 2 diabetes mellitus",
      "High triglycerides and metabolic syndrome"
    ],
    "complications": [
      "Progression to metabolic dysfunction-associated steatohepatitis (MASH)",
      "Advanced liver fibrosis and cirrhosis",
      "Significantly increased risk of cardiovascular disease"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/liver-disease/nafld-nash",
    "relatedIcd11Code": "DB92",
    "relatedSnomedId": "442091002"
  },
  {
    "id": "nash-mash",
    "title": "Metabolic Steatohepatitis (MASH / NASH)",
    "category": "Liver Diseases",
    "plainLanguageSummary": "An aggressive form of nonalcoholic fatty liver disease marked by fat accumulation plus active inflammation and liver cell damage (ballooning), which can cause permanent scarring.",
    "candidatePlainLanguageTerms": [
      "inflamed fatty liver",
      "NASH",
      "MASH",
      "liver hepatitis from fat"
    ],
    "symptoms": [
      "Fatigue, generalized weakness, and unexplained weight loss",
      "Dull aching discomfort in the upper right abdomen",
      "Often only detected via elevated liver enzymes (ALT, AST) on routine blood panels"
    ],
    "causesAndRiskFactors": [
      "Lipid lipotoxicity and mitochondrial oxidative stress in hepatocytes",
      "Uncontrolled type 2 diabetes, severe obesity, and genetic variants (PNPLA3)"
    ],
    "complications": [
      "Rapidly progressive liver fibrosis leading to cirrhosis",
      "Hepatocellular carcinoma (primary liver cancer) even prior to full cirrhosis",
      "End-stage liver failure requiring liver transplantation"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/liver-disease/nafld-nash/what-is-nash",
    "relatedIcd11Code": "DB92.1",
    "relatedSnomedId": "442092009"
  },
  {
    "id": "cirrhosis",
    "title": "Cirrhosis of the Liver",
    "category": "Liver Diseases",
    "plainLanguageSummary": "An advanced stage of liver disease where healthy liver tissue is gradually replaced with permanent scar tissue, severely impairing the liver’s ability to function.",
    "candidatePlainLanguageTerms": [
      "liver scarring",
      "end-stage liver disease",
      "hardened liver"
    ],
    "symptoms": [
      "Fatigue, weakness, and loss of appetite with weight loss",
      "Yellowing of the skin and whites of the eyes (jaundice)",
      "Swelling in the legs, ankles, or feet (edema) and fluid in the abdomen (ascites)",
      "Severe itchy skin without a visible rash (pruritus)",
      "Easy bruising and bleeding, and spider-like blood vessels on the skin",
      "Confusion, memory loss, or drowsiness (hepatic encephalopathy)"
    ],
    "causesAndRiskFactors": [
      "Long-term chronic alcohol misuse",
      "Chronic viral hepatitis (Hepatitis B or Hepatitis C)",
      "Longstanding fatty liver disease (MASH / NASH)",
      "Autoimmune hepatitis or genetic liver conditions (hemochromatosis, Wilson disease)"
    ],
    "complications": [
      "Portal hypertension (high blood pressure in the vein feeding the liver)",
      "Bleeding from swollen veins in the esophagus (esophageal varices)",
      "Severe abdominal fluid infection (spontaneous bacterial peritonitis)",
      "Liver cancer and complete liver failure requiring transplantation"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/liver-disease/cirrhosis",
    "relatedIcd11Code": "DB93",
    "relatedSnomedId": "19943007"
  },
  {
    "id": "hepatitis-b",
    "title": "Chronic Hepatitis B",
    "category": "Liver Diseases",
    "plainLanguageSummary": "A serious liver infection caused by the hepatitis B virus (HBV) that can become chronic, leading to long-term liver damage, cirrhosis, and liver cancer.",
    "candidatePlainLanguageTerms": [
      "hep B",
      "HBV",
      "viral liver infection"
    ],
    "symptoms": [
      "Often asymptomatic for decades despite active viral replication",
      "Fatigue, mild abdominal discomfort, and joint pain",
      "Jaundice, dark urine, and light-colored stools during acute flare-ups"
    ],
    "causesAndRiskFactors": [
      "Transmission through contact with infected blood, semen, or other bodily fluids",
      "Perinatal transmission from mother to baby during childbirth",
      "Unprotected sexual contact or sharing contaminated needles"
    ],
    "complications": [
      "Chronic active hepatitis and progression to liver cirrhosis",
      "Hepatocellular carcinoma (HBV can directly induce liver cancer without cirrhosis)",
      "Acute liver failure during spontaneous viral reactivation"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/liver-disease/viral-hepatitis/hepatitis-b",
    "relatedIcd11Code": "1E51.0",
    "relatedSnomedId": "66071002"
  },
  {
    "id": "hepatitis-c",
    "title": "Chronic Hepatitis C",
    "category": "Liver Diseases",
    "plainLanguageSummary": "A blood-borne viral infection caused by the hepatitis C virus (HCV) that causes chronic inflammation of the liver, now highly curable with direct-acting antivirals (DAAs).",
    "candidatePlainLanguageTerms": [
      "hep C",
      "HCV",
      "curable liver virus"
    ],
    "symptoms": [
      "Called the \"silent killer\" because most people have zero symptoms for 20+ years",
      "Chronic unexplained fatigue and cognitive clouding (brain fog)",
      "Joint aches and depression",
      "Late symptoms: jaundice, ascites, and bleeding varices"
    ],
    "causesAndRiskFactors": [
      "Exposure to infected blood (injection drug use, non-sterile medical procedures)",
      "Blood transfusions received before widespread blood screening (pre-1992)"
    ],
    "complications": [
      "Cirrhosis in approximately 20–30% of chronically infected individuals",
      "Hepatocellular carcinoma requiring surveillance",
      "Mixed cryoglobulinemia and glomerulonephritis"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/liver-disease/viral-hepatitis/hepatitis-c",
    "relatedIcd11Code": "1E51.1",
    "relatedSnomedId": "50711007"
  },
  {
    "id": "alcoholic-liver-disease",
    "title": "Alcoholic Liver Disease",
    "category": "Liver Diseases",
    "plainLanguageSummary": "Liver damage caused by drinking too much alcohol over a prolonged period. Ranges from simple alcoholic fatty liver to acute alcoholic hepatitis and irreversible cirrhosis.",
    "candidatePlainLanguageTerms": [
      "alcohol liver damage",
      "drinker liver",
      "alcoholic hepatitis"
    ],
    "symptoms": [
      "Enlarged liver (hepatomegaly) causing upper right quadrant fullness",
      "Jaundice, fever, and rapid onset of abdominal fluid (ascites) in acute alcoholic hepatitis",
      "Severe malnutrition, loss of muscle mass, and easy bruising",
      "Tremors, confusion, and agitation"
    ],
    "causesAndRiskFactors": [
      "Chronic heavy alcohol consumption exceeding recommended safety limits",
      "Female sex (women develop liver disease at lower levels of alcohol intake)",
      "Coexisting obesity or viral hepatitis accelerating damage"
    ],
    "complications": [
      "Severe acute alcoholic hepatitis with high 30-day mortality",
      "Decompensated cirrhosis, variceal hemorrhage, and hepatorenal syndrome"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/liver-disease/alcohol-related-liver-disease",
    "relatedIcd11Code": "DB94",
    "relatedSnomedId": "197279007"
  },
  {
    "id": "hemochromatosis",
    "title": "Hemochromatosis (Iron Overload Disease)",
    "category": "Liver Diseases",
    "plainLanguageSummary": "A genetic disorder that causes your body to absorb too much iron from the food you eat. Excess iron is stored in your organs, especially your liver, heart, and pancreas.",
    "candidatePlainLanguageTerms": [
      "iron overload",
      "bronze diabetes",
      "iron storage disease"
    ],
    "symptoms": [
      "Chronic fatigue and weakness",
      "Joint pain, especially in the knuckles and fingers (hemochromatosis arthritis)",
      "Bronze or grayish skin hyperpigmentation (\"bronze diabetes\")",
      "Abdominal pain, erectile dysfunction, and irregular heart rhythms"
    ],
    "causesAndRiskFactors": [
      "HFE gene mutations (C282Y and H63D) inherited from both parents",
      "Northern European / Celtic ancestry"
    ],
    "complications": [
      "Liver cirrhosis and a 20-fold increased risk of hepatocellular carcinoma",
      "Secondary diabetes mellitus from iron destruction of pancreatic beta cells",
      "Cardiomyopathy, heart failure, and severe cardiac arrhythmias"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/liver-disease/hemochromatosis",
    "relatedIcd11Code": "5C64.0",
    "relatedSnomedId": "37703004"
  },
  {
    "id": "autoimmune-hepatitis",
    "title": "Autoimmune Hepatitis",
    "category": "Liver Diseases",
    "plainLanguageSummary": "A chronic disease in which your body’s own immune system attacks the liver cells, causing inflammation, swelling, and ongoing liver damage.",
    "candidatePlainLanguageTerms": [
      "immune liver disease",
      "lupoid hepatitis"
    ],
    "symptoms": [
      "Fatigue and generalized malaise",
      "Jaundice (yellowing of skin and eyes)",
      "Enlarged liver and abdominal discomfort",
      "Joint pain (arthralgia) and skin rashes"
    ],
    "causesAndRiskFactors": [
      "Loss of immune self-tolerance triggering autoantibody production (ANA, SMA, anti-LKM1)",
      "Female sex (70–80% of cases occur in women)",
      "Coexisting autoimmune disorders (celiac disease, Hashimoto thyroiditis, rheumatoid arthritis)"
    ],
    "complications": [
      "Rapid development of liver fibrosis and cirrhosis without immunosuppression",
      "Acute-on-chronic liver failure requiring emergency liver transplant"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/liver-disease/autoimmune-hepatitis",
    "relatedIcd11Code": "DB96.0",
    "relatedSnomedId": "235890007"
  },
  {
    "id": "hepatic-encephalopathy",
    "title": "Hepatic Encephalopathy",
    "category": "Liver Diseases",
    "plainLanguageSummary": "A decline in brain function that occurs as a result of severe liver disease. When your liver cannot properly filter toxins like ammonia from your blood, they travel to the brain.",
    "candidatePlainLanguageTerms": [
      "liver brain fog",
      "ammonia toxicity",
      "liver confusion"
    ],
    "symptoms": [
      "Forgetfulness, mild confusion, and personality or mood changes",
      "Inverted sleep patterns (awake all night, sleepy during day)",
      "Flapping tremor of the hands when arms are extended (asterixis)",
      "Slurred speech, severe disorientation, and drowsiness progressing to coma"
    ],
    "causesAndRiskFactors": [
      "Portosystemic shunting and end-stage cirrhosis failing to detoxify ammonia",
      "Precipitating triggers: GI bleeding, constipation, infection, dehydration, sedative use"
    ],
    "complications": [
      "Coma and irreversible cerebral edema (brain herniation)",
      "High mortality without prompt treatment with lactulose and rifaximin"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/liver-disease/cirrhosis/hepatic-encephalopathy",
    "relatedIcd11Code": "DB98.0",
    "relatedSnomedId": "82329003"
  },
  {
    "id": "urinary-tract-infection",
    "title": "Urinary Tract Infection (UTI) in Adults",
    "category": "Urologic Diseases",
    "plainLanguageSummary": "An infection in any part of your urinary system — your kidneys, ureters, bladder, and urethra. Most infections involve the lower urinary tract (the bladder and urethra).",
    "candidatePlainLanguageTerms": [
      "UTI",
      "water infection",
      "bladder infection",
      "burning pee"
    ],
    "symptoms": [
      "A strong, persistent urge to urinate (urinary urgency)",
      "A burning or stinging sensation when urinating (dysuria)",
      "Passing frequent, small amounts of urine",
      "Urine that appears cloudy, red, bright pink, or cola-colored",
      "Pelvic pain in women, particularly in the center of the pelvis and pubic area"
    ],
    "causesAndRiskFactors": [
      "Bacterial entry into the urethra and bladder, predominantly Escherichia coli (E. coli)",
      "Female anatomy (shorter distance from anus to urethra)",
      "Sexual intercourse, use of spermicides, menopause, and catheter use"
    ],
    "complications": [
      "Recurrent UTIs (two or more in six months or three or more in a year)",
      "Upper tract ascension causing acute pyelonephritis (kidney infection)",
      "Urosepsis, a potentially life-threatening complication of an infection"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/urologic-diseases/bladder-infection-uti-in-adults",
    "relatedIcd11Code": "GC08",
    "relatedSnomedId": "68566005"
  },
  {
    "id": "bph",
    "title": "Benign Prostatic Hyperplasia (BPH / Enlarged Prostate)",
    "category": "Urologic Diseases",
    "plainLanguageSummary": "A common noncancerous enlargement of the prostate gland in aging men that pinches the urethra, causing troublesome urinary symptoms.",
    "candidatePlainLanguageTerms": [
      "enlarged prostate",
      "BPH",
      "prostate swelling",
      "slow urine stream"
    ],
    "symptoms": [
      "Frequent or urgent need to urinate, especially at night (nocturia)",
      "Difficulty starting urination (urinary hesitancy)",
      "Weak urine stream or a stream that stops and starts",
      "Dribbling at the end of urination",
      "Inability to completely empty the bladder"
    ],
    "causesAndRiskFactors": [
      "Age-related hormonal changes (accumulation of dihydrotestosterone, DHT)",
      "Aging (affects over 50% of men by age 60 and up to 90% by age 85)",
      "Family history, diabetes, and cardiovascular disease"
    ],
    "complications": [
      "Acute urinary retention (sudden inability to urinate requiring emergency catheterization)",
      "Recurrent urinary tract infections and bladder calculi (stones)",
      "Bladder diverticula and obstructive postrenal kidney damage"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/urologic-diseases/prostate-problems/prostate-enlargement-bph",
    "relatedIcd11Code": "GA90",
    "relatedSnomedId": "266569009"
  },
  {
    "id": "urinary-incontinence",
    "title": "Urinary Incontinence (Bladder Leakage)",
    "category": "Urologic Diseases",
    "plainLanguageSummary": "The accidental or unintentional loss of urine, ranging from minor leaks when coughing or laughing to complete loss of bladder control.",
    "candidatePlainLanguageTerms": [
      "bladder leakage",
      "leaking urine",
      "weak bladder",
      "incontinence"
    ],
    "symptoms": [
      "Leaking urine when coughing, sneezing, laughing, or exercising (stress incontinence)",
      "A sudden, intense urge to urinate followed by involuntary leakage (urge incontinence)",
      "Frequent or constant dribbling of urine due to a bladder that doesn’t empty (overflow incontinence)",
      "Physical or mental impairment preventing reaching the toilet in time (functional incontinence)"
    ],
    "causesAndRiskFactors": [
      "Weakened pelvic floor muscles (pregnancy, childbirth, menopause)",
      "Enlarged prostate, prostate surgery, or neurological disorders (Parkinson’s, stroke)",
      "Chronic constipation, high body mass index, and smoking"
    ],
    "complications": [
      "Skin rashes, skin infections, and sores from constantly wet skin",
      "Social withdrawal, depression, and severe impact on personal relationships",
      "Increased risk of falls and hip fractures in elderly individuals rushing to the toilet"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/urologic-diseases/bladder-control-problems",
    "relatedIcd11Code": "MF50",
    "relatedSnomedId": "165232002"
  },
  {
    "id": "interstitial-cystitis",
    "title": "Interstitial Cystitis / Bladder Pain Syndrome",
    "category": "Urologic Diseases",
    "plainLanguageSummary": "A chronic condition causing bladder pressure, bladder pain, and sometimes pelvic pain, ranging from mild discomfort to severe, disabling pain.",
    "candidatePlainLanguageTerms": [
      "painful bladder",
      "IC/BPS",
      "bladder pain syndrome",
      "chronic cystitis"
    ],
    "symptoms": [
      "Pain in your pelvis or between the scrotum and anus in men, or between vagina and anus in women",
      "Chronic pelvic pain that worsens as your bladder fills and improves after urinating",
      "Persistent, urgent need to urinate day and night (often 40–60 times a day in severe cases)",
      "Pain during sexual intercourse"
    ],
    "causesAndRiskFactors": [
      "Defect in the protective lining (glycosaminoglycan layer) of the bladder wall",
      "Mast cell activation and neurogenic inflammation of bladder sensory nerves",
      "Autoimmune background and central pain sensitization"
    ],
    "complications": [
      "Bladder capacity reduction (stiffening of the bladder wall from chronic inflammation)",
      "Severe sleep deprivation and profound decline in mental health and work ability",
      "Disruption of sexual relationships and intimacy"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/urologic-diseases/interstitial-cystitis-painful-bladder-syndrome",
    "relatedIcd11Code": "GC00.0",
    "relatedSnomedId": "70830006"
  },
  {
    "id": "overactive-bladder",
    "title": "Overactive Bladder (OAB)",
    "category": "Urologic Diseases",
    "plainLanguageSummary": "A clinical syndrome marked by a sudden, uncontrollable urge to urinate, often resulting in involuntary leakage, frequent daytime urination, and waking at night.",
    "candidatePlainLanguageTerms": [
      "OAB",
      "hyperactive bladder",
      "uncontrollable urge to pee"
    ],
    "symptoms": [
      "Urinary urgency that is difficult to defer or suppress",
      "Urge incontinence (uncontrolled leakage immediately following sudden urgency)",
      "Urinary frequency (urinating more than 8 times in 24 hours)",
      "Nocturia (waking up two or more times during the night to urinate)"
    ],
    "causesAndRiskFactors": [
      "Involuntary contractions of the detrusor bladder muscle",
      "Neurological conditions (multiple sclerosis, stroke, spinal cord injury)",
      "Excessive caffeine or alcohol consumption, diuretics, and aging"
    ],
    "complications": [
      "Emotional distress, anxiety, and social isolation",
      "Sleep disruption causing chronic daytime exhaustion",
      "Skin breakdown and secondary dermatological infections"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/urologic-diseases/bladder-control-problems/overactive-bladder",
    "relatedIcd11Code": "GC02",
    "relatedSnomedId": "300460002"
  },
  {
    "id": "erectile-dysfunction",
    "title": "Erectile Dysfunction (ED)",
    "category": "Urologic Diseases",
    "plainLanguageSummary": "The persistent inability to achieve or maintain an erection firm enough for satisfactory sexual performance, frequently serving as an early indicator of vascular disease.",
    "candidatePlainLanguageTerms": [
      "ED",
      "impotence",
      "erection trouble"
    ],
    "symptoms": [
      "Trouble getting an erection",
      "Trouble keeping an erection firm during sexual activity",
      "Reduced sexual desire or libido"
    ],
    "causesAndRiskFactors": [
      "Vascular disease (atherosclerosis restricting penile blood flow)",
      "Diabetes mellitus (damaging penile nerves and cavernous endothelial tissue)",
      "Hypertension, smoking, low testosterone, and side effects of medications"
    ],
    "complications": [
      "Significant psychological distress, relationship tension, and depression",
      "Failure to identify underlying subclinical coronary artery disease"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/urologic-diseases/erectile-dysfunction",
    "relatedIcd11Code": "HA01.1",
    "relatedSnomedId": "93708003"
  },
  {
    "id": "prostatitis",
    "title": "Prostatitis (Prostate Inflammation)",
    "category": "Urologic Diseases",
    "plainLanguageSummary": "Inflammation or infection of the prostate gland that can cause painful or difficult urination, pain in the groin, pelvic area, or genitals, and sometimes flu-like symptoms.",
    "candidatePlainLanguageTerms": [
      "prostate infection",
      "pelvic pain syndrome",
      "prostate ache"
    ],
    "symptoms": [
      "Pain or burning sensation when urinating (dysuria)",
      "Pain in the abdomen, groin, lower back, or perineum (between scrotum and anus)",
      "Pain or discomfort during or after ejaculation",
      "Fever, chills, and muscle aches (in acute bacterial prostatitis)"
    ],
    "causesAndRiskFactors": [
      "Bacterial infection entering prostate from urinary tract (acute or chronic bacterial)",
      "Nonbacterial chronic pelvic pain syndrome (nerve irritation, pelvic muscle spasm)",
      "Past urinary tract catheterization or prostate biopsy"
    ],
    "complications": [
      "Bacteremia and septic shock from untreated acute bacterial prostatitis",
      "Prostatic abscess requiring surgical drainage",
      "Chronic intractable pelvic pain and sexual dysfunction"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/urologic-diseases/prostate-problems/prostatitis-inflammation-prostate",
    "relatedIcd11Code": "GA91",
    "relatedSnomedId": "95415006"
  },
  {
    "id": "urinary-retention",
    "title": "Urinary Retention",
    "category": "Urologic Diseases",
    "plainLanguageSummary": "The inability to completely empty the bladder. Can be acute (sudden, painful inability to urinate) or chronic (able to urinate but unable to empty completely).",
    "candidatePlainLanguageTerms": [
      "cannot pee",
      "urine blockage",
      "bladder retention",
      "retaining water"
    ],
    "symptoms": [
      "Acute: sudden, total inability to urinate accompanied by severe lower abdominal pain",
      "Chronic: difficulty starting urination, weak stream, and frequent urination of small amounts",
      "Feeling an urgent need to urinate with little or no success",
      "Overflow incontinence and post-void fullness"
    ],
    "causesAndRiskFactors": [
      "Obstruction of the urethra (BPH, urethral stricture, urinary stones, blood clots)",
      "Medications (anticholinergics, tricyclic antidepressants, decongestants, opioids)",
      "Nerve problems interrupting signals between brain and bladder (spinal cord injury, diabetic neuropathy)"
    ],
    "complications": [
      "Acute retention is a medical emergency requiring urgent catheterization",
      "Hydronephrosis and obstructive acute kidney failure",
      "Permanent detrusor bladder muscle damage from overdistension"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/urologic-diseases/urinary-retention",
    "relatedIcd11Code": "MF52",
    "relatedSnomedId": "267064002"
  },
  {
    "id": "obesity-adults",
    "title": "Adult Overweight & Obesity",
    "category": "Weight Management & Nutrition",
    "plainLanguageSummary": "A complex, chronic, progressive disease characterized by abnormal or excessive body fat accumulation that impairs health, increases systemic inflammation, and elevates metabolic risk.",
    "candidatePlainLanguageTerms": [
      "excess weight",
      "high BMI",
      "obesity",
      "carrying too much weight"
    ],
    "symptoms": [
      "Shortness of breath on mild exertion and reduced physical stamina",
      "Increased sweating and heat intolerance",
      "Snoring and daytime sleepiness (obstructive sleep apnea)",
      "Joint, back, and knee pain from mechanical load",
      "Skin irritation in body folds"
    ],
    "causesAndRiskFactors": [
      "Genetic factors influencing appetite, satiety, and basal metabolic rate",
      "Excess intake of ultra-processed, energy-dense foods and sedentary lifestyle",
      "Neuroendocrine dysregulation (leptin resistance, ghrelin excess)",
      "Medications, chronic sleep deprivation, and socioeconomic factors"
    ],
    "complications": [
      "Type 2 diabetes, cardiovascular disease, hypertension, and stroke",
      "Nonalcoholic fatty liver disease (MASLD / MASH) and gallstones",
      "Increased risk of 13 types of cancer (endometrial, breast, colon, liver, kidney)"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/weight-management/adult-overweight-obesity",
    "relatedIcd11Code": "5B81",
    "relatedSnomedId": "414916001"
  },
  {
    "id": "metabolic-syndrome",
    "title": "Metabolic Syndrome",
    "category": "Weight Management & Nutrition",
    "plainLanguageSummary": "A cluster of interconnected metabolic risk factors that together dramatically increase your risk of heart disease, stroke, and type 2 diabetes.",
    "candidatePlainLanguageTerms": [
      "syndrome X",
      "metabolic risk cluster",
      "insulin resistance syndrome"
    ],
    "symptoms": [
      "Usually silent with no specific symptoms other than a large waist circumference",
      "High blood pressure readings",
      "Elevated fasting glucose or borderline sugar levels",
      "Darkened skin patches (acanthosis nigricans) around neck or armpits"
    ],
    "causesAndRiskFactors": [
      "Visceral abdominal obesity releasing inflammatory adipokines",
      "Insulin resistance causing hyperglycemia and hyperinsulinemia",
      "Physical inactivity, aging, and high-fructose ultra-processed diet"
    ],
    "complications": [
      "Five-fold increased risk of developing type 2 diabetes",
      "Two- to three-fold increased risk of cardiovascular disease, myocardial infarction, and stroke",
      "Nonalcoholic steatohepatitis (MASH) and chronic kidney disease"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/weight-management/metabolic-syndrome",
    "relatedIcd11Code": "5C80",
    "relatedSnomedId": "237602007"
  },
  {
    "id": "bariatric-surgery",
    "title": "Bariatric & Metabolic Surgery",
    "category": "Weight Management & Nutrition",
    "plainLanguageSummary": "Surgical procedures performed on the stomach and intestines to treat severe obesity and associated metabolic conditions (like type 2 diabetes) by altering gastrointestinal anatomy and gut hormone signaling.",
    "candidatePlainLanguageTerms": [
      "weight loss surgery",
      "gastric bypass",
      "sleeve gastrectomy",
      "stomach reduction"
    ],
    "symptoms": [
      "Rapid, sustained weight loss and improved physical mobility post-surgery",
      "Early fullness after eating very small portions",
      "Dumping syndrome: nausea, sweating, shakiness, and diarrhea after eating simple sugars"
    ],
    "causesAndRiskFactors": [
      "Indicated for adults with BMI ≥ 40 kg/m², or BMI ≥ 35 kg/m² with obesity-related comorbidities (diabetes, sleep apnea)",
      "Failure of comprehensive non-surgical medical weight management programs"
    ],
    "complications": [
      "Micronutrient deficiencies (vitamin B12, iron, calcium, vitamin D, folate) requiring lifelong supplementation",
      "Anastomotic leak, internal hernia, and surgical staple line complications",
      "Gallstone formation from rapid postoperative weight loss"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/weight-management/bariatric-surgery",
    "relatedIcd11Code": "QA01",
    "relatedSnomedId": "442338004"
  },
  {
    "id": "childhood-obesity",
    "title": "Childhood & Adolescent Obesity",
    "category": "Weight Management & Nutrition",
    "plainLanguageSummary": "A serious pediatric medical condition where a child or teen has a BMI at or above the 95th percentile for peers of the same age and sex on CDC growth charts.",
    "candidatePlainLanguageTerms": [
      "overweight child",
      "childhood weight problems",
      "pediatric obesity"
    ],
    "symptoms": [
      "Excess body fat disproportionate for height and age",
      "Shortness of breath and exercise intolerance during physical play",
      "Snoring and restless sleep (pediatric obstructive sleep apnea)",
      "Joint discomfort, hip/knee pain (slipped capital femoral epiphysis risk)"
    ],
    "causesAndRiskFactors": [
      "High consumption of sugar-sweetened beverages and fast food",
      "Excessive screen time and lack of structured physical activity",
      "Genetic susceptibility and family habits"
    ],
    "complications": [
      "Early onset of type 2 diabetes and nonalcoholic fatty liver disease in adolescence",
      "High blood pressure, dyslipidemia, and premature atherosclerosis",
      "Significant psychological distress, peer bullying, and low self-esteem"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/weight-management/helping-your-child-who-is-overweight",
    "relatedIcd11Code": "5B81.0",
    "relatedSnomedId": "414915002"
  },
  {
    "id": "graves-disease",
    "title": "Graves' Disease",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "An autoimmune condition where your immune system attacks the thyroid gland, prompting it to produce too much thyroid hormone (hyperthyroidism).",
    "candidatePlainLanguageTerms": [
      "overactive thyroid autoimmune",
      "Graves eye problem",
      "toxic diffuse goiter"
    ],
    "symptoms": [
      "Rapid or irregular heartbeat (palpitations)",
      "Unexplained weight loss despite increased appetite",
      "Heat intolerance and excessive sweating",
      "Tremor or shakiness in the hands and fingers",
      "Bulging or irritated eyes (Graves ophthalmopathy)"
    ],
    "causesAndRiskFactors": [
      "Thyroid-stimulating immunoglobulin (TSI) autoantibodies",
      "Genetic predisposition and family history of thyroid autoimmune illness",
      "Female gender (7 to 8 times more common in women)",
      "High physical or emotional stress"
    ],
    "complications": [
      "Heart rhythm disorders including atrial fibrillation and heart failure",
      "Thyroid storm — acute, severe life-threatening hyperthyroidism",
      "Osteoporosis and bone mineral loss",
      "Permanent vision complications from eye socket inflammation"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/endocrine-diseases/graves-disease",
    "relatedIcd11Code": "5A00.0",
    "relatedSnomedId": "7780003"
  },
  {
    "id": "hashimotos-disease",
    "title": "Hashimoto's Disease (Chronic Autoimmune Thyroiditis)",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "An autoimmune disorder where the immune system attacks and damages the thyroid gland, leading to reduced thyroid hormone production (hypothyroidism).",
    "candidatePlainLanguageTerms": [
      "autoimmune thyroiditis",
      "Hashimoto thyroid problem",
      "underactive thyroid autoimmune"
    ],
    "symptoms": [
      "Persistent fatigue and sluggishness",
      "Unexplained weight gain and puffy face",
      "Constipation and slow digestion",
      "Sensitivity to cold temperatures",
      "Muscle aches, joint stiffness, and dry, brittle hair"
    ],
    "causesAndRiskFactors": [
      "Autoantibodies against thyroid peroxidase (TPO) and thyroglobulin",
      "Genetic susceptibility combined with environmental triggers",
      "Pre-existing autoimmune conditions like Type 1 diabetes or celiac disease"
    ],
    "complications": [
      "Myxedema coma (severe untreated hypothyroidism)",
      "Goiter causing difficulty swallowing or breathing",
      "Elevated LDL cholesterol and cardiovascular disease",
      "Pregnancy complications including preeclampsia and birth defects"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/endocrine-diseases/hashimotos-disease",
    "relatedIcd11Code": "5A03.1",
    "relatedSnomedId": "82231009"
  },
  {
    "id": "primary-hyperparathyroidism",
    "title": "Primary Hyperparathyroidism",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "A condition where one or more parathyroid glands produce excess parathyroid hormone (PTH), causing calcium levels in the blood to rise abnormally high.",
    "candidatePlainLanguageTerms": [
      "high blood calcium",
      "parathyroid gland tumor",
      "hypercalcemia from parathyroid"
    ],
    "symptoms": [
      "Recurrent kidney stones",
      "Bone and joint pain with osteoporosis",
      "Frequent urination and excessive thirst",
      "Abdominal pain, nausea, and constipation",
      "Brain fog, fatigue, and mood changes"
    ],
    "causesAndRiskFactors": [
      "Benign parathyroid adenoma (accounts for ~85% of cases)",
      "Parathyroid hyperplasia (enlargement of all four glands)",
      "Prior neck radiation exposure or prolonged lithium therapy"
    ],
    "complications": [
      "Nephrocalcinosis and progressive chronic kidney disease",
      "Severe osteoporosis and pathological bone fractures",
      "Peptic ulcer disease and acute pancreatitis"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/endocrine-diseases/primary-hyperparathyroidism",
    "relatedIcd11Code": "5A50.0",
    "relatedSnomedId": "82836003"
  },
  {
    "id": "acromegaly",
    "title": "Acromegaly & Pituitary Gigantism",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "A hormonal disorder caused when the pituitary gland produces excessive growth hormone (GH) in adulthood, resulting in abnormal enlargement of bones and tissues.",
    "candidatePlainLanguageTerms": [
      "excess growth hormone",
      "enlarged hands and feet",
      "pituitary growth tumor"
    ],
    "symptoms": [
      "Gradual enlargement of the hands, feet, jaw, and forehead",
      "Coarsened facial features and enlarged tongue",
      "Deep, gravelly voice and severe sleep apnea",
      "Joint aches and reduced mobility",
      "Excessive sweating and oily skin"
    ],
    "causesAndRiskFactors": [
      "Benign growth hormone-secreting pituitary adenoma (>95% of cases)",
      "Rare neuroendocrine tumors producing ectopic GHRH"
    ],
    "complications": [
      "Hypertension, cardiomyopathy, and heart failure",
      "Secondary type 2 diabetes mellitus",
      "Colonic polyps and increased risk of colorectal cancer",
      "Vision field loss (bitemporal hemianopia) from optic chiasm compression"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/endocrine-diseases/acromegaly",
    "relatedIcd11Code": "5A60",
    "relatedSnomedId": "74107003"
  },
  {
    "id": "congenital-adrenal-hyperplasia",
    "title": "Congenital Adrenal Hyperplasia (CAH)",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "A group of genetic disorders that affect the adrenal glands, impairing cortisol and aldosterone production and triggering excess androgen (male hormone) release.",
    "candidatePlainLanguageTerms": [
      "adrenal genetic disorder",
      "excess adrenal androgen",
      "salt-wasting adrenal problem"
    ],
    "symptoms": [
      "Ambiguous genitalia in female newborns (classic form)",
      "Severe salt-wasting crisis with vomiting, dehydration, and low blood pressure",
      "Early puberty, rapid growth followed by short adult stature",
      "Severe acne, irregular periods, and hirsutism in females"
    ],
    "causesAndRiskFactors": [
      "Autosomal recessive gene mutations, most commonly 21-hydroxylase deficiency (CYP21A2)",
      "Inherited from carrier parents"
    ],
    "complications": [
      "Life-threatening adrenal crisis if untreated",
      "Electrolyte disturbances (severe hyperkalemia and hyponatremia)",
      "Subfertility and reproductive challenges"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/endocrine-diseases/congenital-adrenal-hyperplasia",
    "relatedIcd11Code": "5A71.0",
    "relatedSnomedId": "237785004"
  },
  {
    "id": "thyroid-nodules-goiter",
    "title": "Thyroid Nodules & Goiter",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "Solid or fluid-filled lumps that form within the thyroid gland, or an overall enlargement of the thyroid gland visible in the front of the neck.",
    "candidatePlainLanguageTerms": [
      "thyroid lump",
      "swollen thyroid gland",
      "neck thyroid mass"
    ],
    "symptoms": [
      "Visible or palpable swelling at the base of the neck",
      "Feeling of a lump or tightness in the throat",
      "Difficulty swallowing or shortness of breath when lying flat",
      "Hoarseness or voice changes"
    ],
    "causesAndRiskFactors": [
      "Iodine deficiency (worldwide) or autoimmune Hashimoto thyroiditis",
      "Colloid nodules, thyroid cysts, or follicular adenomas",
      "Family history or neck radiation exposure"
    ],
    "complications": [
      "Tracheal compression and airway obstruction",
      "Thyroid cancer in ~5% to 10% of evaluated nodules",
      "Toxic multinodular goiter causing hyperthyroidism"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/endocrine-diseases/thyroid-nodules",
    "relatedIcd11Code": "5A01",
    "relatedSnomedId": "3716002"
  },
  {
    "id": "gastritis",
    "title": "Gastritis & Gastropathy",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Inflammation, irritation, or erosion of the protective stomach mucosal lining, often caused by bacterial infection, pain medications, or alcohol.",
    "candidatePlainLanguageTerms": [
      "stomach inflammation",
      "upset stomach irritation",
      "irritated stomach lining"
    ],
    "symptoms": [
      "Gnawing or burning ache or pain in the upper abdomen",
      "Nausea and vomiting",
      "Feeling uncomfortably full after eating small amounts",
      "Bloating and belching"
    ],
    "causesAndRiskFactors": [
      "Helicobacter pylori bacterial infection",
      "Frequent use of NSAID pain relievers (aspirin, ibuprofen, naproxen)",
      "Excessive alcohol consumption and extreme physiological stress",
      "Autoimmune reaction attacking stomach parietal cells"
    ],
    "complications": [
      "Peptic stomach ulcers and gastrointestinal bleeding",
      "Atrophic gastritis and vitamin B12 deficiency (pernicious anemia)",
      "Increased risk of stomach mucosa-associated lymphoid tissue (MALT) lymphoma"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/gastritis",
    "relatedIcd11Code": "DA42",
    "relatedSnomedId": "396332003"
  },
  {
    "id": "eosinophilic-esophagitis",
    "title": "Eosinophilic Esophagitis (EoE)",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "A chronic allergic condition where white blood cells called eosinophils build up in the esophagus, causing inflammation and trouble swallowing.",
    "candidatePlainLanguageTerms": [
      "allergic esophagus",
      "food allergy swallowing problem",
      "eosinophil throat swelling"
    ],
    "symptoms": [
      "Difficulty swallowing food (dysphagia)",
      "Food getting stuck in the esophagus (food impaction)",
      "Chest pain that does not respond to antacids",
      "Persistent reflux and vomiting in children"
    ],
    "causesAndRiskFactors": [
      "Allergic response triggered by food proteins (milk, wheat, egg, soy)",
      "Personal or family history of atopic diseases (asthma, eczema, hay fever)",
      "Genetic predisposition"
    ],
    "complications": [
      "Esophageal narrowing (strictures) requiring dilation",
      "Emergency endoscopic removal of impacted food",
      "Malnutrition and weight loss"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/eosinophilic-esophagitis",
    "relatedIcd11Code": "DA24.2",
    "relatedSnomedId": "445353006"
  },
  {
    "id": "microscopic-colitis",
    "title": "Microscopic Colitis (Lymphocytic & Collagenous)",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "An inflammation of the large intestine (colon) that can only be seen with a microscope, causing persistent, chronic watery diarrhea.",
    "candidatePlainLanguageTerms": [
      "chronic watery diarrhea",
      "hidden colon inflammation",
      "microscopic bowel inflammation"
    ],
    "symptoms": [
      "Chronic watery, non-bloody diarrhea (multiple times a day)",
      "Abdominal cramps and bloating",
      "Fecal urgency and occasional accidental bowel leakage",
      "Weight loss and mild dehydration"
    ],
    "causesAndRiskFactors": [
      "Abnormal immune response in the colon wall",
      "Certain medications (NSAIDs, PPIs, SSRIs)",
      "More common in older adults and females",
      "Associated with other autoimmune diseases like celiac disease"
    ],
    "complications": [
      "Severe dehydration and electrolyte imbalance",
      "Nutritional depletion and weight loss",
      "Impaired daily quality of life"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/microscopic-colitis",
    "relatedIcd11Code": "DB31.2",
    "relatedSnomedId": "235846001"
  },
  {
    "id": "anal-fissure",
    "title": "Anal Fissure",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "A small tear or crack in the thin, moist tissue that lines the anus, causing sharp pain and bright red bleeding during and after bowel movements.",
    "candidatePlainLanguageTerms": [
      "tear in anus",
      "painful rectal cut",
      "bleeding bowel movement tear"
    ],
    "symptoms": [
      "Sharp, intense pain during bowel movements that can linger for hours",
      "Bright red blood on toilet paper or in the bowl",
      "Visible crack or tear in the anal skin",
      "Small skin tag near the tear"
    ],
    "causesAndRiskFactors": [
      "Passing large, hard, or dry stools from constipation",
      "Prolonged diarrhea and rectal irritation",
      "Straining during bowel movements or childbirth",
      "Inflammatory bowel disease like Crohn disease"
    ],
    "complications": [
      "Chronic fissure failure to heal past 6 to 8 weeks",
      "Pain-induced anal sphincter spasm preventing normal bowel movements",
      "Infection or abscess formation"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/anal-fissure",
    "relatedIcd11Code": "DB50.0",
    "relatedSnomedId": "31992008"
  },
  {
    "id": "short-bowel-syndrome",
    "title": "Short Bowel Syndrome (SBS)",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "A condition where your body cannot absorb enough nutrients and fluids from foods because large parts of the small intestine are missing, damaged, or surgically removed.",
    "candidatePlainLanguageTerms": [
      "short intestine",
      "nutrient malabsorption from bowel surgery",
      "short gut problem"
    ],
    "symptoms": [
      "Severe, chronic diarrhea and pale, greasy stools (steatorrhea)",
      "Rapid, severe weight loss and muscle wasting",
      "Fatigue and weakness from dehydration and electrolyte loss",
      "Swelling in legs and feet (edema)"
    ],
    "causesAndRiskFactors": [
      "Surgical removal of half or more of small intestine (for Crohn disease, mesenteric ischemia, trauma)",
      "Congenital intestinal defects in infants (necrotizing enterocolitis, volvulus)",
      "Severe radiation enteritis"
    ],
    "complications": [
      "Severe malnutrition and life-threatening dehydration",
      "Dependence on parenteral (IV) nutrition with central line infections",
      "Kidney stones from oxalates and gallstones",
      "Metabolic bone disease"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/short-bowel-syndrome",
    "relatedIcd11Code": "DA96.0",
    "relatedSnomedId": "37731005"
  },
  {
    "id": "hirschsprung-disease",
    "title": "Hirschsprung Disease",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "A rare birth defect in which nerve cells are missing from parts of the large intestine, preventing stool from moving normally through the bowel.",
    "candidatePlainLanguageTerms": [
      "congenital megacolon",
      "missing bowel nerve cells in baby",
      "infant severe constipation"
    ],
    "symptoms": [
      "Newborn failing to pass meconium within 48 hours of birth",
      "Swollen, distended abdomen and green or brown vomit",
      "Chronic severe constipation and infrequent explosive stools in older infants",
      "Poor weight gain and growth failure"
    ],
    "causesAndRiskFactors": [
      "Incomplete migration of enteric neural crest cells during fetal development",
      "Genetic mutations (RET proto-oncogene) and family history",
      "More common in males and children with Down syndrome"
    ],
    "complications": [
      "Hirschsprung-associated enterocolitis (HAEC) — severe life-threatening infection",
      "Intestinal perforation and sepsis",
      "Toxic megacolon"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/hirschsprung-disease",
    "relatedIcd11Code": "LB16.0",
    "relatedSnomedId": "204739008"
  },
  {
    "id": "small-intestinal-bacterial-overgrowth",
    "title": "Small Intestinal Bacterial Overgrowth (SIBO)",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "A condition where an abnormally large number of bacteria grow in the small intestine, leading to nutrient fermentation, gas, bloating, and diarrhea.",
    "candidatePlainLanguageTerms": [
      "excess gut bacteria",
      "bacterial overgrowth in small bowel",
      "SIBO gut fermentation"
    ],
    "symptoms": [
      "Excessive abdominal bloating and visible distension",
      "Frequent belching, flatulence, and abdominal pain",
      "Watery diarrhea or alternating constipation",
      "Unintended weight loss and nutrient malabsorption"
    ],
    "causesAndRiskFactors": [
      "Slowed intestinal motility (diabetes gastroparesis, scleroderma)",
      "Structural defects (diverticula, surgical blind loops, strictures)",
      "Loss of ileocecal valve barrier"
    ],
    "complications": [
      "Vitamin B12 deficiency leading to anemia and neuropathy",
      "Fat-soluble vitamin deficiencies (A, D, E, K)",
      "Osteomalacia and osteoporosis"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/small-intestinal-bacterial-overgrowth",
    "relatedIcd11Code": "DA95",
    "relatedSnomedId": "235595009"
  },
  {
    "id": "primary-biliary-cholangitis",
    "title": "Primary Biliary Cholangitis (PBC)",
    "category": "Liver Diseases",
    "plainLanguageSummary": "A chronic autoimmune liver disease in which the immune system slowly destroys the small bile ducts in the liver, trapping bile and causing liver damage.",
    "candidatePlainLanguageTerms": [
      "bile duct destruction",
      "autoimmune bile duct disease",
      "primary biliary cirrhosis"
    ],
    "symptoms": [
      "Debilitating fatigue that does not improve with rest",
      "Intense, persistent itching of the skin (pruritus)",
      "Dry eyes and dry mouth (sicca syndrome)",
      "Jaundice and darkening of the skin in advanced stages",
      "Cholesterol deposits around eyes (xanthelasma)"
    ],
    "causesAndRiskFactors": [
      "Autoimmune destruction mediated by anti-mitochondrial antibodies (AMA)",
      "Genetic factors and female gender (90% of patients are women)",
      "Environmental triggers like smoking or certain chemical exposures"
    ],
    "complications": [
      "Cirrhosis and portal hypertension",
      "Malabsorption of fat-soluble vitamins (A, D, E, K)",
      "Osteoporosis and bone fractures",
      "Increased risk of liver cancer (hepatocellular carcinoma)"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/liver-disease/primary-biliary-cholangitis",
    "relatedIcd11Code": "DB96.0",
    "relatedSnomedId": "58170007"
  },
  {
    "id": "primary-sclerosing-cholangitis",
    "title": "Primary Sclerosing Cholangitis (PSC)",
    "category": "Liver Diseases",
    "plainLanguageSummary": "A disease where inflammation causes scars within the bile ducts both inside and outside the liver, leading to bile duct blockages and liver failure.",
    "candidatePlainLanguageTerms": [
      "scarred bile ducts",
      "bile duct hardening disease",
      "PSC liver illness"
    ],
    "symptoms": [
      "Severe itchiness and fatigue",
      "Jaundice (yellow skin and eyes)",
      "Chills, fever, and upper right abdominal pain from bile duct infections",
      "Unintended weight loss"
    ],
    "causesAndRiskFactors": [
      "Abnormal immune system inflammation in the bile ducts",
      "Strongly associated with ulcerative colitis and Crohn disease (~70% of cases)",
      "More common in men aged 30 to 50"
    ],
    "complications": [
      "Recurrent bacterial cholangitis (life-threatening infections)",
      "Cirrhosis and end-stage liver failure",
      "Bile duct cancer (cholangiocarcinoma) and colorectal cancer"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/liver-disease/primary-sclerosing-cholangitis",
    "relatedIcd11Code": "DB96.1",
    "relatedSnomedId": "49890001"
  },
  {
    "id": "wilson-disease",
    "title": "Wilson Disease",
    "category": "Liver Diseases",
    "plainLanguageSummary": "A rare inherited disorder that causes excessive amounts of copper to accumulate in the liver, brain, and other vital organs.",
    "candidatePlainLanguageTerms": [
      "copper storage disease",
      "copper overload genetic disorder",
      "Wilson copper liver"
    ],
    "symptoms": [
      "Fatigue, jaundice, and easy bruising from liver inflammation",
      "Tremors, difficulty speaking or swallowing, and poor coordination",
      "Brownish rings in the corneas of the eyes (Kayser-Fleischer rings)",
      "Personality changes, depression, or psychosis"
    ],
    "causesAndRiskFactors": [
      "Autosomal recessive mutations in the ATP7B gene",
      "Defective biliary copper excretion leading to systemic copper toxicity",
      "Inherited from both carrier parents"
    ],
    "complications": [
      "Acute liver failure or progressive cirrhosis",
      "Permanent neurological and psychiatric impairment",
      "Coombs-negative hemolytic anemia and kidney dysfunction"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/liver-disease/wilson-disease",
    "relatedIcd11Code": "5C64.0",
    "relatedSnomedId": "8098009"
  },
  {
    "id": "alpha-1-antitrypsin-deficiency",
    "title": "Alpha-1 Antitrypsin Deficiency Liver Disease",
    "category": "Liver Diseases",
    "plainLanguageSummary": "An inherited condition where abnormal alpha-1 antitrypsin protein gets trapped in liver cells, causing liver injury and cirrhosis while depriving lungs of protection.",
    "candidatePlainLanguageTerms": [
      "alpha 1 liver problem",
      "inherited protein trapping liver disease",
      "AAT deficiency"
    ],
    "symptoms": [
      "Unexplained jaundice in newborns or adults",
      "Swelling in the abdomen (ascites) and legs",
      "Shortness of breath and wheezing from lung damage",
      "Fatigue and abnormal liver enzyme test results"
    ],
    "causesAndRiskFactors": [
      "Mutations in the SERPINA1 gene (most commonly Pi*ZZ genotype)",
      "Accumulation of misfolded AAT polymers inside hepatocytes"
    ],
    "complications": [
      "Cirrhosis and end-stage liver failure requiring transplantation",
      "Early-onset severe pulmonary emphysema",
      "Hepatocellular carcinoma"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/liver-disease/alpha-1-antitrypsin-deficiency",
    "relatedIcd11Code": "5C57.0",
    "relatedSnomedId": "62725008"
  },
  {
    "id": "iga-nephropathy",
    "title": "IgA Nephropathy (Berger Disease)",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "A kidney disease that occurs when immunoglobulin A (IgA) antibody builds up in the kidney glomeruli, causing local inflammation and gradual kidney damage.",
    "candidatePlainLanguageTerms": [
      "IgA kidney disease",
      "Berger kidney inflammation",
      "blood in urine from antibody deposits"
    ],
    "symptoms": [
      "Cola- or tea-colored urine (visible hematuria), often during or right after a respiratory infection",
      "Microscopic blood or foamy urine from protein leakage",
      "Dull pain in the flank or back below the ribs",
      "High blood pressure and swelling in hands and feet"
    ],
    "causesAndRiskFactors": [
      "Galactose-deficient IgA1 immune complexes triggering glomerular inflammation",
      "Genetic susceptibility and family history",
      "More prevalent in young adults and males of Asian and Caucasian descent"
    ],
    "complications": [
      "Progressive chronic kidney disease and end-stage renal disease (in 20-40% over decades)",
      "Uncontrolled secondary hypertension",
      "Nephrotic-range proteinuria"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/iga-nephropathy",
    "relatedIcd11Code": "GB40.2",
    "relatedSnomedId": "236407003"
  },
  {
    "id": "focal-segmental-glomerulosclerosis",
    "title": "Focal Segmental Glomerulosclerosis (FSGS)",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "A serious disease in which scar tissue develops on some of the glomeruli—the tiny filtering units inside the kidneys—causing large amounts of protein to spill into urine.",
    "candidatePlainLanguageTerms": [
      "kidney filter scarring",
      "FSGS nephrotic disease",
      "glomerular scar syndrome"
    ],
    "symptoms": [
      "Severe swelling (edema) in the legs, ankles, and around the eyes",
      "Foamy urine from heavy protein spill (proteinuria)",
      "Rapid, unexpected weight gain from fluid retention",
      "High blood pressure and fatigue"
    ],
    "causesAndRiskFactors": [
      "Primary (idiopathic autoimmune injury to podocyte foot processes)",
      "Genetic mutations (APOL1 risk alleles common in African ancestry, podocin, nephrin)",
      "Secondary to obesity, reflux nephropathy, or viral infections (HIV)"
    ],
    "complications": [
      "Rapid progression to kidney failure requiring dialysis or transplant",
      "High recurrence rate in transplanted kidneys (~30-50%)",
      "Blood clots and severe cardiovascular strain from nephrotic syndrome"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/focal-segmental-glomerulosclerosis-fsgs",
    "relatedIcd11Code": "GB41.0",
    "relatedSnomedId": "236403004"
  },
  {
    "id": "membranous-nephropathy",
    "title": "Membranous Nephropathy (MN)",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "A kidney disorder where immune complexes deposit along the glomerular basement membrane, thickening the filtering wall and allowing high amounts of protein to escape.",
    "candidatePlainLanguageTerms": [
      "thickened kidney filters",
      "membranous nephropathy protein loss",
      "anti-PLA2R kidney disease"
    ],
    "symptoms": [
      "Puffy eyes and swelling in feet and ankles that worsens through the day",
      "Frothy urine containing excess protein",
      "Fatigue and reduced appetite",
      "High blood pressure"
    ],
    "causesAndRiskFactors": [
      "Autoantibodies against the M-type phospholipase A2 receptor (anti-PLA2R in ~70-80%)",
      "Secondary causes: autoimmune lupus, hepatitis B, medications (NSAIDs), or occult tumors",
      "Most common cause of primary nephrotic syndrome in older adults"
    ],
    "complications": [
      "Renal vein thrombosis and pulmonary embolism from hypercoagulability",
      "Slow progression to chronic kidney failure in ~30% of cases",
      "Severe hyperlipidemia and accelerated coronary disease"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/membranous-nephropathy",
    "relatedIcd11Code": "GB41.1",
    "relatedSnomedId": "197664004"
  },
  {
    "id": "alport-syndrome",
    "title": "Alport Syndrome",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "A rare genetic disorder characterized by progressive kidney disease, hearing loss, and eye abnormalities caused by defects in type IV collagen.",
    "candidatePlainLanguageTerms": [
      "genetic kidney and hearing loss",
      "type 4 collagen kidney defect",
      "hereditary nephritis"
    ],
    "symptoms": [
      "Blood in urine (hematuria) starting in childhood",
      "Foamy urine from protein leakage",
      "High-frequency sensorineural hearing loss developing in teenage years",
      "Abnormal eye lens shape (anterior lenticonus) and retina flecks"
    ],
    "causesAndRiskFactors": [
      "Mutations in COL4A3, COL4A4, or COL4A5 genes affecting type IV collagen alpha chains",
      "X-linked inheritance (~85% of cases, more severe in males)",
      "Autosomal recessive and dominant forms"
    ],
    "complications": [
      "End-stage kidney failure by early adulthood in affected males",
      "Permanent bilateral hearing impairment requiring hearing aids",
      "Visual impairment from cataracts or corneal abnormalities"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/alport-syndrome",
    "relatedIcd11Code": "GB44",
    "relatedSnomedId": "54261002"
  },
  {
    "id": "anemia-chronic-kidney-disease",
    "title": "Anemia of Chronic Kidney Disease & Chronic Inflammation",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "A condition where your blood does not have enough healthy red blood cells because diseased kidneys cannot produce enough erythropoietin (EPO) hormone.",
    "candidatePlainLanguageTerms": [
      "low red blood cells from kidney disease",
      "kidney anemia",
      "EPO deficiency anemia"
    ],
    "symptoms": [
      "Overwhelming fatigue and lack of physical stamina",
      "Shortness of breath with minimal exertion",
      "Pale skin, gums, and nail beds",
      "Dizziness, lightheadedness, and cold hands and feet",
      "Chest pain or pounding heart"
    ],
    "causesAndRiskFactors": [
      "Decreased production of erythropoietin (EPO) by damaged peritubular kidney cells",
      "Iron deficiency and hepcidin elevation blocking iron release",
      "Shortened red blood cell lifespan from uremic toxins"
    ],
    "complications": [
      "Left ventricular hypertrophy and congestive heart failure",
      "Accelerated cardiovascular death in CKD patients",
      "Cognitive decline and severe quality of life impairment"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/blood-diseases/anemia-inflammation-chronic-disease",
    "relatedIcd11Code": "3A01",
    "relatedSnomedId": "271737000"
  },
  {
    "id": "sickle-cell-nephropathy",
    "title": "Sickle Cell Trait & Sickle Cell Nephropathy",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Kidney complications that arise when sickle-shaped red blood cells cause tiny blockages and low-oxygen damage in the renal medulla filters.",
    "candidatePlainLanguageTerms": [
      "sickle cell kidney problem",
      "blood in urine from sickle cell trait",
      "sickle nephropathy"
    ],
    "symptoms": [
      "Episodes of painless blood in the urine (hematuria)",
      "Excessive urination and thirst from inability to concentrate urine (hyposthenuria)",
      "Bedwetting in children with sickle disease",
      "High protein levels in urine (proteinuria)"
    ],
    "causesAndRiskFactors": [
      "Low oxygen, high osmolality, and acidity in renal medulla promoting sickle cell sickling",
      "Inheritance of hemoglobin S gene (sickle cell disease or sickle trait)",
      "Renal papillary necrosis and microvascular infarctions"
    ],
    "complications": [
      "Renal medullary carcinoma (rare, highly aggressive tumor linked to sickle trait)",
      "Progressive renal failure requiring hemodialysis",
      "Severe urinary tract infections and papillary sloughing"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/professionals/clinical-tools-patient-management/diabetes/sickle-cell-trait-hemoglobinopathies-diabetes",
    "relatedIcd11Code": "3A51",
    "relatedSnomedId": "417357006"
  },
  {
    "id": "vesicoureteral-reflux",
    "title": "Vesicoureteral Reflux (VUR)",
    "category": "Urologic Diseases",
    "plainLanguageSummary": "An abnormal condition where urine flows backward from the bladder up through the ureters into one or both kidneys, risking kidney infections and scarring.",
    "candidatePlainLanguageTerms": [
      "urine backflow to kidney",
      "backward urine flow in kids",
      "reflux kidney problem"
    ],
    "symptoms": [
      "Recurrent urinary tract infections (UTIs) with high fevers in young children",
      "Pain in the side (flank) or abdomen during urination",
      "Foul-smelling urine and painful urination",
      "Poor weight gain or bedwetting in older children"
    ],
    "causesAndRiskFactors": [
      "Primary VUR: congenital defect in the flap valve where the ureter enters the bladder wall",
      "Secondary VUR: bladder outlet obstruction or abnormal high voiding pressure",
      "Family history (siblings of affected children have a 30% risk)"
    ],
    "complications": [
      "Kidney scarring (reflux nephropathy) from pyelonephritis",
      "Childhood and adult hypertension",
      "Chronic kidney disease and kidney failure"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/urologic-diseases/vesicoureteral-reflux",
    "relatedIcd11Code": "GC08.0",
    "relatedSnomedId": "197814007"
  },
  {
    "id": "neurogenic-bladder",
    "title": "Neurogenic Bladder",
    "category": "Urologic Diseases",
    "plainLanguageSummary": "A bladder dysfunction caused by neurologic damage, preventing the bladder and brain from communicating properly to hold or release urine.",
    "candidatePlainLanguageTerms": [
      "nerve damage bladder",
      "paralyzed bladder problem",
      "neurologic bladder leakage"
    ],
    "symptoms": [
      "Inability to empty the bladder completely (urinary retention)",
      "Sudden intense urge to urinate with involuntary leakage",
      "Weak or dribbling urine stream",
      "Frequent urinary tract infections"
    ],
    "causesAndRiskFactors": [
      "Spinal cord injury or myelomeningocele (spina bifida)",
      "Multiple sclerosis, Parkinson disease, or stroke",
      "Diabetic autonomic neuropathy or pelvic nerve surgery"
    ],
    "complications": [
      "Hydronephrosis and high-pressure kidney damage",
      "Recurrent severe urosepsis",
      "Bladder stones and autonomic dysreflexia in high spinal lesions"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/urologic-diseases/neurogenic-bladder",
    "relatedIcd11Code": "MF50",
    "relatedSnomedId": "397732007"
  },
  {
    "id": "hydronephrosis",
    "title": "Hydronephrosis (Swollen Kidney)",
    "category": "Urologic Diseases",
    "plainLanguageSummary": "Swelling of one or both kidneys that happens when urine cannot drain normally from the kidney to the bladder and backs up into the renal pelvis.",
    "candidatePlainLanguageTerms": [
      "swollen kidney from backed up urine",
      "kidney urine blockage",
      "water on the kidney"
    ],
    "symptoms": [
      "Dull or sharp pain in the side and back (flank pain)",
      "Decreased urine output or trouble urinating",
      "Nausea and vomiting",
      "Fever and chills if a secondary kidney infection develops"
    ],
    "causesAndRiskFactors": [
      "Kidney stones blocking the ureter",
      "Ureteropelvic junction (UPJ) obstruction (congenital narrowing)",
      "Benign prostatic hyperplasia (BPH) or pelvic tumors compressing ureters",
      "Pregnancy compression of ureters"
    ],
    "complications": [
      "Permanent loss of kidney filtration function if pressure is not relieved",
      "Severe pyelonephritis and urosepsis",
      "Kidney failure if both kidneys are obstructed"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/urologic-diseases/hydronephrosis",
    "relatedIcd11Code": "GB70",
    "relatedSnomedId": "43064006"
  },
  {
    "id": "peyronies-disease",
    "title": "Peyronie's Disease (Penile Curvature)",
    "category": "Urologic Diseases",
    "plainLanguageSummary": "A condition where noncancerous fibrous scar plaque forms inside the penis, causing curved, painful erections and difficulty having intercourse.",
    "candidatePlainLanguageTerms": [
      "curved penis disease",
      "painful bent erection",
      "penile scar tissue"
    ],
    "symptoms": [
      "A hard lump or band of scar tissue felt under the skin of the penis",
      "Significant bend, curve, or hourglass indentation during erection",
      "Pain in the penis during erections or at rest",
      "Difficulty achieving or maintaining erections (erectile dysfunction)"
    ],
    "causesAndRiskFactors": [
      "Microvascular injury or trauma to the penis during sex or sports",
      "Abnormal wound healing and excessive collagen deposition in tunica albuginea",
      "Associated with Dupuytren contracture and autoimmune tendencies"
    ],
    "complications": [
      "Inability to have intercourse",
      "Emotional distress, anxiety, and depression",
      "Erectile dysfunction"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/urologic-diseases/penile-curvature-peyronies-disease",
    "relatedIcd11Code": "GA14",
    "relatedSnomedId": "34484000"
  },
  {
    "id": "urethral-stricture",
    "title": "Urethral Stricture",
    "category": "Urologic Diseases",
    "plainLanguageSummary": "A narrowing of the urethra—the tube that carries urine out of the body—caused by scar tissue, which impedes the free flow of urine.",
    "candidatePlainLanguageTerms": [
      "narrowed urine tube",
      "urethra scar blockage",
      "weak urine stream stricture"
    ],
    "symptoms": [
      "Progressively weak or sprayed urine stream",
      "Straining and taking a long time to empty the bladder",
      "Feeling that the bladder never completely empties",
      "Pain or burning sensation during urination",
      "Recurrent urinary tract infections"
    ],
    "causesAndRiskFactors": [
      "Trauma to the straddle region or pelvis (fall on bicycle bar, pelvic fracture)",
      "Medical instrumentation (catheters, endoscopes, prostate surgery)",
      "Past sexually transmitted infections (gonorrhea) or lichen sclerosus"
    ],
    "complications": [
      "Acute urinary retention requiring emergency catheterization",
      "Hydronephrosis and renal impairment from back-pressure",
      "Urethral abscess or fistula"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/urologic-diseases/urethral-stricture",
    "relatedIcd11Code": "GC02.0",
    "relatedSnomedId": "236648008"
  },
  {
    "id": "nocturnal-enuresis",
    "title": "Nocturnal Enuresis (Childhood Bedwetting)",
    "category": "Urologic Diseases",
    "plainLanguageSummary": "Involuntary urination during sleep in children age 5 and older who are expected to stay dry at night.",
    "candidatePlainLanguageTerms": [
      "bedwetting in children",
      "nighttime accidents",
      "sleep wetting problem"
    ],
    "symptoms": [
      "Involuntary wetting of the bed at night at least twice a week for several months",
      "Waking up in wet sheets without waking during urination",
      "Deep sleep with high arousal threshold"
    ],
    "causesAndRiskFactors": [
      "Developmental delay in bladder-brain signaling during deep sleep",
      "Low nighttime release of antidiuretic hormone (ADH)",
      "Small functional bladder capacity",
      "Family history (strong genetic component)"
    ],
    "complications": [
      "Loss of self-esteem, social withdrawal, and embarrassment",
      "Skin rashes and irritation from wet sleepwear",
      "Secondary enuresis signaling UTI, diabetes, or emotional stress"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/urologic-diseases/bladder-control-problems-bedwetting-children",
    "relatedIcd11Code": "6C00.0",
    "relatedSnomedId": "8009008"
  },
  {
    "id": "upper-gi-endoscopy",
    "title": "Upper GI Endoscopy (EGD)",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "A procedure in which a doctor uses a thin, flexible tube with a camera and light to look inside your upper digestive tract (esophagus, stomach, and duodenum).",
    "candidatePlainLanguageTerms": [
      "stomach scope test",
      "EGD procedure",
      "camera down throat test"
    ],
    "symptoms": [
      "Performed to investigate persistent nausea, vomiting, or difficulty swallowing",
      "Used to diagnose unexplained upper abdominal pain or gastrointestinal bleeding",
      "Allows taking tissue samples (biopsies) for celiac disease or H. pylori"
    ],
    "causesAndRiskFactors": [
      "Used to evaluate GERD, ulcers, celiac disease, and Barrett esophagus",
      "Sedation is typically administered for patient comfort"
    ],
    "complications": [
      "Mild sore throat and bloating immediately following procedure",
      "Rare perforation of esophagus or stomach wall (<0.1%)",
      "Bleeding from biopsy sites and adverse reaction to sedation"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diagnostic-tests/upper-gi-endoscopy",
    "relatedIcd11Code": "DA20",
    "relatedSnomedId": "445214009"
  },
  {
    "id": "colonoscopy",
    "title": "Colonoscopy & Flexible Sigmoidoscopy",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "A procedure where a doctor uses a long, flexible scope with a video camera to examine the entire inside lining of the large intestine and rectum.",
    "candidatePlainLanguageTerms": [
      "colon scope test",
      "bowel camera screening",
      "colon polyp exam"
    ],
    "symptoms": [
      "Performed for routine colorectal cancer screening starting at age 45",
      "Investigates unexplained rectal bleeding, chronic diarrhea, or bowel changes",
      "Allows identifying and removing precancerous polyps"
    ],
    "causesAndRiskFactors": [
      "Requires thorough bowel cleansing prep before the examination",
      "Recommended every 10 years for average-risk adults"
    ],
    "complications": [
      "Bleeding after polyp removal (polypectomy)",
      "Perforation (tear) of the colon wall requiring surgical repair (very rare)",
      "Transient cramping and gas after air insufflation"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diagnostic-tests/colonoscopy",
    "relatedIcd11Code": "DA90",
    "relatedSnomedId": "73761001"
  },
  {
    "id": "a1c-test",
    "title": "The A1C Test & Diabetes Diagnosis",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "A simple blood test that measures your average blood glucose (sugar) level over the past 2 to 3 months by checking hemoglobin with glucose attached.",
    "candidatePlainLanguageTerms": [
      "3-month average blood sugar",
      "glycated hemoglobin test",
      "HbA1c diabetes test"
    ],
    "symptoms": [
      "Used to diagnose prediabetes (5.7% to 6.4%) and diabetes (6.5% or higher)",
      "Used to monitor glucose control in people living with diabetes",
      "Requires no fasting before the blood draw"
    ],
    "causesAndRiskFactors": [
      "Glucose binds irreversibly to hemoglobin in red blood cells over their ~120-day lifespan",
      "Conditions that alter red blood cell turnover (sickle cell trait, hemolysis, iron deficiency) can alter results"
    ],
    "complications": [
      "A1C consistently above target (>7.0-8.0%) indicates high risk for microvascular and cardiovascular damage",
      "Severe hypoglycemia risk if over-treated to excessively low targets"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diagnostic-tests/a1c-test",
    "relatedIcd11Code": "5A11",
    "relatedSnomedId": "43396009"
  },
  {
    "id": "kidney-biopsy",
    "title": "Kidney Biopsy (Renal Biopsy)",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "A medical procedure in which one or more tiny samples of kidney tissue are removed with a needle and examined under a microscope to pinpoint exact kidney disease.",
    "candidatePlainLanguageTerms": [
      "kidney tissue needle sample",
      "renal biopsy test",
      "kidney microscopic examination"
    ],
    "symptoms": [
      "Recommended when a patient has unexplained kidney failure, nephrotic proteinuria, or glomerular hematuria",
      "Performed to evaluate donor kidney rejection or systemic lupus nephritis"
    ],
    "causesAndRiskFactors": [
      "Guided by ultrasound or CT imaging under local anesthesia",
      "Patient must rest quietly in bed for several hours after the procedure"
    ],
    "complications": [
      "Blood in urine (hematuria) for 24 to 48 hours following the biopsy",
      "Perirenal hematoma (collection of blood around the kidney)",
      "Arteriovenous fistula formation (rare)"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diagnostic-tests/kidney-biopsy",
    "relatedIcd11Code": "GB40",
    "relatedSnomedId": "65801008"
  },
  {
    "id": "liver-biopsy",
    "title": "Liver Biopsy",
    "category": "Liver Diseases",
    "plainLanguageSummary": "A procedure in which a small needle is inserted into the liver to take a tiny sample of tissue, helping doctors assess liver inflammation, staging, and fibrosis.",
    "candidatePlainLanguageTerms": [
      "liver tissue sample test",
      "needle liver biopsy",
      "liver fibrosis grading test"
    ],
    "symptoms": [
      "Used to diagnose the cause of persistent abnormal liver blood tests",
      "Accurately stages fibrosis and cirrhosis in viral hepatitis or MASH/NASH",
      "Identifies storage disorders like hemochromatosis or Wilson disease"
    ],
    "causesAndRiskFactors": [
      "Performed percutaneously through the right side of the chest wall or transjugularly through a neck vein"
    ],
    "complications": [
      "Dull pain in the right shoulder or upper right abdomen",
      "Internal bleeding requiring observation or transfusion (<1%)",
      "Pneumothorax or accidental bile leak (rare)"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diagnostic-tests/liver-biopsy",
    "relatedIcd11Code": "DB90",
    "relatedSnomedId": "76164006"
  },
  {
    "id": "cystoscopy-ureteroscopy",
    "title": "Cystoscopy & Ureteroscopy",
    "category": "Urologic Diseases",
    "plainLanguageSummary": "Procedures where a doctor uses a thin, lighted telescope (cystoscope) inserted through the urethra into the bladder to inspect the bladder lining and remove stones.",
    "candidatePlainLanguageTerms": [
      "bladder telescope exam",
      "cystoscope exam",
      "bladder stone scope test"
    ],
    "symptoms": [
      "Investigates unexplained blood in urine (hematuria), frequent UTIs, or painful voiding",
      "Used to diagnose bladder tumors, urethral strictures, or bladder stones",
      "Ureteroscopy extends the exam up into the ureter and kidney to break kidney stones"
    ],
    "causesAndRiskFactors": [
      "Performed with local numbing jelly or mild sedation",
      "Takes about 5 to 15 minutes in a clinic setting"
    ],
    "complications": [
      "Mild burning sensation during urination for 1 to 2 days",
      "Pink-tinged urine immediately after the procedure",
      "Urinary tract infection requiring antibiotics"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diagnostic-tests/cystoscopy-ureteroscopy",
    "relatedIcd11Code": "GC00",
    "relatedSnomedId": "78761002"
  },
  {
    "id": "urodynamic-testing",
    "title": "Urodynamic Testing",
    "category": "Urologic Diseases",
    "plainLanguageSummary": "A series of specialized tests that measure how well your bladder, sphincter muscles, and urethra store and release urine.",
    "candidatePlainLanguageTerms": [
      "bladder pressure test",
      "urodynamics flow exam",
      "bladder function testing"
    ],
    "symptoms": [
      "Performed to evaluate severe urinary incontinence or sudden urge leakage",
      "Evaluates neurogenic bladder, urinary retention, and incomplete bladder emptying",
      "Measures bladder pressure during gradual filling with sterile water"
    ],
    "causesAndRiskFactors": [
      "Includes cystometry, post-void residual measurement, uroflowmetry, and electromyography"
    ],
    "complications": [
      "Temporary burning sensation during urination",
      "Mild hematuria on the first day",
      "Low risk of catheter-associated urinary tract infection"
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diagnostic-tests/urodynamic-testing",
    "relatedIcd11Code": "MF50",
    "relatedSnomedId": "399211009"
  },
  {
    "id": "blood-diseases-aplastic-anemia-myelodysplastic-syndromes",
    "title": "Aplastic Anemia & Myelodysplastic Syndromes",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Learn about aplastic anemia and myelodysplastic syndromes, rare disorders that affect bone marrow and blood, including symptoms, causes, diagnosis, and treatment.",
    "candidatePlainLanguageTerms": [
      "aplastic anemia & myelodysplastic syndromes"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Aplastic Anemia & Myelodysplastic Syndromes."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/blood-diseases/aplastic-anemia-myelodysplastic-syndromes"
  },
  {
    "id": "diabetes-diabetes-pregnancy",
    "title": "Pregnancy if You Have Diabetes",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "Learn about how to take care of your diabetes before, during, and after pregnancy, so you may prevent or treat health problems before and after delivery.",
    "candidatePlainLanguageTerms": [
      "pregnancy if you have diabetes"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Pregnancy if You Have Diabetes."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diabetes/diabetes-pregnancy"
  },
  {
    "id": "diabetes-financial-help-diabetes-care",
    "title": "Financial Help for Diabetes Care",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "Lists private health insurance, government health insurance, and other health care services for people with diabetes, plus helpful organizations or resources.​",
    "candidatePlainLanguageTerms": [
      "financial help for diabetes care"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Financial Help for Diabetes Care."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diabetes/financial-help-diabetes-care"
  },
  {
    "id": "diabetes-overview-healthy-living-with-diabetes",
    "title": "Healthy Living with Diabetes",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "A healthy lifestyle can help you manage your diabetes, as well as your blood pressure and cholesterol levels. Start small and work with your health care team.",
    "candidatePlainLanguageTerms": [
      "healthy living with diabetes"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Healthy Living with Diabetes."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diabetes/overview/healthy-living-with-diabetes"
  },
  {
    "id": "diabetes-overview-insulin-medicines-treatments",
    "title": "Insulin, Medicines, & Other Diabetes Treatments",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "Learn about the different types of insulin and other medicines for diabetes, how to take them, and other ways to treat diabetes.",
    "candidatePlainLanguageTerms": [
      "insulin, medicines, & other diabetes treatments"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Insulin, Medicines, & Other Diabetes Treatments."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diabetes/overview/insulin-medicines-treatments"
  },
  {
    "id": "diabetes-overview-insulin-medicines-treatments-pancreatic-islet-transplantation",
    "title": "Pancreatic Islet Transplantation",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "Overview of islet transplantation, an experimental treatment for type 1 diabetes. Healthy islets are taken from a donated pancreas and placed in a recipient.",
    "candidatePlainLanguageTerms": [
      "pancreatic islet transplantation"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Pancreatic Islet Transplantation."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diabetes/overview/insulin-medicines-treatments/pancreatic-islet-transplantation"
  },
  {
    "id": "diabetes-overview-managing-diabetes",
    "title": "Managing Diabetes",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "Learn how to create a diabetes care plan by leading a healthy lifestyle, taking medicines, and managing your blood glucose level.",
    "candidatePlainLanguageTerms": [
      "managing diabetes"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Managing Diabetes."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diabetes/overview/managing-diabetes"
  },
  {
    "id": "diabetes-overview-managing-diabetes-artificial-pancreas",
    "title": "Artificial Pancreas",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "Learn how an artificial pancreas system can automatically control blood glucose levels in people with type 1 diabetes.",
    "candidatePlainLanguageTerms": [
      "artificial pancreas"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Artificial Pancreas."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diabetes/overview/managing-diabetes/artificial-pancreas"
  },
  {
    "id": "diabetes-overview-managing-diabetes-continuous-glucose-monitoring",
    "title": "Continuous Glucose Monitoring",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "Learn how continuous glucose monitors work, the different types of CGM devices, and how they help people with diabetes keep glucose levels in a healthy range.",
    "candidatePlainLanguageTerms": [
      "continuous glucose monitoring"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Continuous Glucose Monitoring."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diabetes/overview/managing-diabetes/continuous-glucose-monitoring"
  },
  {
    "id": "diabetes-overview-preventing-problems-foot-problems",
    "title": "Diabetes & Foot Problems",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "Diabetes can cause nerve damage and poor blood flow, which can lead to serious foot problems. Learn how to help prevent foot problems by using proper foot care.",
    "candidatePlainLanguageTerms": [
      "diabetes & foot problems"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Diabetes & Foot Problems."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/foot-problems"
  },
  {
    "id": "diabetes-overview-preventing-problems-gum-disease-dental-problems",
    "title": "Diabetes, Gum Disease, & Other Dental Problems",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "Learn how diabetes is linked to gum disease and other mouth problems, and read how to prevent and treat mouth problems related to diabetes.",
    "candidatePlainLanguageTerms": [
      "diabetes, gum disease, & other dental problems"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Diabetes, Gum Disease, & Other Dental Problems."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/gum-disease-dental-problems"
  },
  {
    "id": "diabetes-overview-preventing-problems-heart-disease-stroke",
    "title": "Diabetes, Heart Disease, & Stroke",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "Learn about the link between diabetes, heart disease, and stroke; risk factors; symptoms; diagnosis; and warning signs—and how to prevent or slow heart disease.",
    "candidatePlainLanguageTerms": [
      "diabetes, heart disease, & stroke"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Diabetes, Heart Disease, & Stroke."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/heart-disease-stroke"
  },
  {
    "id": "diabetes-overview-preventing-problems-nerve-damage-diabetic-neuropathies-autonomic-neuropathy",
    "title": "Autonomic Neuropathy",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "Overview of autonomic neuropathy—damage to nerves that control your internal organs, including your heart, digestive system, bladder, eyes, and sex organs.",
    "candidatePlainLanguageTerms": [
      "autonomic neuropathy"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Autonomic Neuropathy."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/nerve-damage-diabetic-neuropathies/autonomic-neuropathy"
  },
  {
    "id": "diabetes-overview-preventing-problems-nerve-damage-diabetic-neuropathies-focal-neuropathies",
    "title": "Focal Neuropathies",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "Overview of focal neuropathies—conditions in which you typically have damage to single nerves, most often in your hand, head, torso, or leg.",
    "candidatePlainLanguageTerms": [
      "focal neuropathies"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Focal Neuropathies."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/nerve-damage-diabetic-neuropathies/focal-neuropathies"
  },
  {
    "id": "diabetes-overview-preventing-problems-nerve-damage-diabetic-neuropathies-peripheral-neuropathy",
    "title": "Peripheral Neuropathy",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "Overview of peripheral neuropathy—a type of nerve damage that typically affects the feet and legs and sometimes affects the hands and arms.",
    "candidatePlainLanguageTerms": [
      "peripheral neuropathy"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Peripheral Neuropathy."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/nerve-damage-diabetic-neuropathies/peripheral-neuropathy"
  },
  {
    "id": "diabetes-overview-preventing-problems-nerve-damage-diabetic-neuropathies-proximal-neuropathy",
    "title": "Proximal Neuropathy",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "Overview of proximal neuropathy—a rare type of nerve damage in your hip, buttock, or thigh that typically starts on one side and may rarely spread to the other.",
    "candidatePlainLanguageTerms": [
      "proximal neuropathy"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Proximal Neuropathy."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/nerve-damage-diabetic-neuropathies/proximal-neuropathy"
  },
  {
    "id": "diabetes-overview-preventing-problems-nerve-damage-diabetic-neuropathies-what-is-diabetic-neuropathy",
    "title": "What Is Diabetic Neuropathy?",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "Overview of diabetic neuropathy, nerve damage that is caused by diabetes. Symptoms depend on which type of diabetic neuropathy you have.",
    "candidatePlainLanguageTerms": [
      "what is diabetic neuropathy?"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of What Is Diabetic Neuropathy?."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/nerve-damage-diabetic-neuropathies/what-is-diabetic-neuropathy"
  },
  {
    "id": "diabetes-overview-preventing-problems-sexual-bladder-problems",
    "title": "Diabetes, Sexual, & Bladder Problems",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "Common sexual, fertility, and bladder problems in people with diabetes, including ED: learn about causes, treatments, and ways to prevent these health problems.",
    "candidatePlainLanguageTerms": [
      "diabetes, sexual, & bladder problems"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Diabetes, Sexual, & Bladder Problems."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/sexual-bladder-problems"
  },
  {
    "id": "diabetes-overview-preventing-type-2-diabetes",
    "title": "Preventing Type 2 Diabetes",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "Learn how you can prevent type 2 diabetes, such as losing weight by being active and eating low-calorie, low-fat foods, or taking the diabetes drug metformin.",
    "candidatePlainLanguageTerms": [
      "preventing type 2 diabetes"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Preventing Type 2 Diabetes."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-type-2-diabetes"
  },
  {
    "id": "diabetes-overview-preventing-type-2-diabetes-game-plan",
    "title": "Your Game Plan to Prevent Type 2 Diabetes",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "Learn what steps you can take to help prevent type 2 diabetes. Find tips and tools to lose weight, follow a healthy eating plan, move more, and get support.",
    "candidatePlainLanguageTerms": [
      "your game plan to prevent type 2 diabetes"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Your Game Plan to Prevent Type 2 Diabetes."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-type-2-diabetes/game-plan"
  },
  {
    "id": "diabetes-overview-risk-factors-type-2-diabetes",
    "title": "Risk Factors for Type 2 Diabetes",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "Risk factors for developing type 2 diabetes include overweight, lack of physical activity, history of other diseases, age, race, and ethnicity.",
    "candidatePlainLanguageTerms": [
      "risk factors for type 2 diabetes"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Risk Factors for Type 2 Diabetes."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diabetes/overview/risk-factors-type-2-diabetes"
  },
  {
    "id": "diabetes-overview-risk-factors-type-2-diabetes-diabetes-risk-test",
    "title": "Diabetes Risk Test",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "Take the &quot;Are You at Risk for Type 2 Diabetes?&quot; test and learn more about your risk for getting type 2 diabetes.",
    "candidatePlainLanguageTerms": [
      "diabetes risk test"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Diabetes Risk Test."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diabetes/overview/risk-factors-type-2-diabetes/diabetes-risk-test"
  },
  {
    "id": "diabetes-overview-what-is-diabetes-gestational",
    "title": "Gestational Diabetes",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "Learn about gestational diabetes, including symptoms, causes, diagnosis, and management. Find out what you can do to help prevent gestational diabetes.",
    "candidatePlainLanguageTerms": [
      "gestational diabetes"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Gestational Diabetes."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes/gestational"
  },
  {
    "id": "diabetes-overview-what-is-diabetes-monogenic-neonatal-mellitus-mody",
    "title": "Monogenic Diabetes (MODY & Neonatal Diabetes Mellitus)",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "NDM and MODY are uncommon forms of diabetes that result from changes in your genes. Learn about diagnosis, genetic testing and counseling, and treatment.",
    "candidatePlainLanguageTerms": [
      "monogenic diabetes (mody & neonatal diabetes mellitus)",
      "mody & neonatal diabetes mellitus"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Monogenic Diabetes (MODY & Neonatal Diabetes Mellitus)."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes/monogenic-neonatal-mellitus-mody"
  },
  {
    "id": "diagnostic-tests-a1c-test-race-ethnicity",
    "title": "The A1C Test & Race/Ethnicity",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Overview of hemoglobin variants that can affect A1C test results, and how to ensure your diabetes is well controlled if you have one of these variants.",
    "candidatePlainLanguageTerms": [
      "the a1c test & race/ethnicity"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of The A1C Test & Race/Ethnicity."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diagnostic-tests/a1c-test-race-ethnicity"
  },
  {
    "id": "diagnostic-tests-endoscopic-retrograde-cholangiopancreatography",
    "title": "Endoscopic Retrograde Cholangiopancreatography (ERCP)",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Learn how ERCP uses upper GI endoscopy and x-rays to treat problems of the bile and pancreatic ducts, how to prepare for ERCP, and what to expect afterward.",
    "candidatePlainLanguageTerms": [
      "endoscopic retrograde cholangiopancreatography (ercp)",
      "ercp"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Endoscopic Retrograde Cholangiopancreatography (ERCP)."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diagnostic-tests/endoscopic-retrograde-cholangiopancreatography"
  },
  {
    "id": "diagnostic-tests-flexible-sigmoidoscopy",
    "title": "Flexible Sigmoidoscopy",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Learn how flexible sigmoidoscopy can detect ulcers, polyps, or cancer of the colon or rectum; how to prepare for the procedure; and what to expect afterward.",
    "candidatePlainLanguageTerms": [
      "flexible sigmoidoscopy"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Flexible Sigmoidoscopy."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diagnostic-tests/flexible-sigmoidoscopy"
  },
  {
    "id": "diagnostic-tests-lower-gi-series",
    "title": "Lower GI Series",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Learn how a lower gastrointestinal (GI) series can diagnose problems in your large intestine, how to prepare for the procedure, and what to expect afterwards.​",
    "candidatePlainLanguageTerms": [
      "lower gi series"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Lower GI Series."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diagnostic-tests/lower-gi-series"
  },
  {
    "id": "diagnostic-tests-prostate",
    "title": "Prostate Tests",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Learn about tests used to identify prostate problems, such as DRE, PSA test, prostate health index, and a transrectal ultrasound with prostate biopsy.",
    "candidatePlainLanguageTerms": [
      "prostate tests"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Prostate Tests."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diagnostic-tests/prostate"
  },
  {
    "id": "diagnostic-tests-thyroid",
    "title": "Thyroid Tests",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Learn about blood and imaging tests used to check how well your thyroid is working and diagnose thyroid diseases, including TSH and T4 tests, and thyroid scans.",
    "candidatePlainLanguageTerms": [
      "thyroid tests"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Thyroid Tests."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diagnostic-tests/thyroid"
  },
  {
    "id": "diagnostic-tests-upper-gi-series",
    "title": "Upper GI Series",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Learn how an upper gastrointestinal (GI) series can diagnose problems in your upper GI tract, how to prepare for the procedure, and what to expect afterwards.​",
    "candidatePlainLanguageTerms": [
      "upper gi series"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Upper GI Series."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diagnostic-tests/upper-gi-series"
  },
  {
    "id": "diagnostic-tests-urinary-tract-imaging",
    "title": "Urinary Tract Imaging",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Learn about imaging techniques used to diagnose and treat urinary tract diseases and conditions. Find out what happens before, during, and after the tests.",
    "candidatePlainLanguageTerms": [
      "urinary tract imaging"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Urinary Tract Imaging."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diagnostic-tests/urinary-tract-imaging"
  },
  {
    "id": "diagnostic-tests-virtual-colonoscopy",
    "title": "Virtual Colonoscopy",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Learn why a virtual colonoscopy is used, how to prepare for the procedure, and what to expect. Find out how virtual colonoscopy is different from colonoscopy.",
    "candidatePlainLanguageTerms": [
      "virtual colonoscopy"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Virtual Colonoscopy."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diagnostic-tests/virtual-colonoscopy"
  },
  {
    "id": "diet-nutrition-changing-habits-better-health",
    "title": "Changing Your Habits for Better Health",
    "category": "Weight Management & Nutrition",
    "plainLanguageSummary": "Outlines four stages of changing old habits to new healthier ones and offers ways to help improve eating and physical activity habits.",
    "candidatePlainLanguageTerms": [
      "changing your habits for better health"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Changing Your Habits for Better Health."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/diet-nutrition/changing-habits-better-health"
  },
  {
    "id": "digestive-diseases-abdominal-adhesions",
    "title": "Abdominal Adhesions",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Describes how abdominal adhesions form. Explains their causes and how they can lead to intestinal obstruction.",
    "candidatePlainLanguageTerms": [
      "abdominal adhesions"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Abdominal Adhesions."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/abdominal-adhesions"
  },
  {
    "id": "digestive-diseases-acid-reflux-ger-gerd-children",
    "title": "Acid Reflux (GER & GERD) in Children",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Overview of symptoms, diagnosis, and treatment of gastroesophageal reflux (GER), or acid reflux, and gastroesophageal reflux disease (GERD) in children.",
    "candidatePlainLanguageTerms": [
      "acid reflux (ger & gerd) in children",
      "ger & gerd"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Acid Reflux (GER & GERD) in Children."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-children"
  },
  {
    "id": "digestive-diseases-acid-reflux-ger-gerd-infants",
    "title": "Acid Reflux (GER & GERD) in Infants",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Overview of symptoms, diagnosis, and treatment of gastroesophageal reflux (GER), or acid reflux, and gastroesophageal reflux disease (GERD) in infants.",
    "candidatePlainLanguageTerms": [
      "acid reflux (ger & gerd) in infants",
      "ger & gerd"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Acid Reflux (GER & GERD) in Infants."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-infants"
  },
  {
    "id": "digestive-diseases-anatomic-problems-lower-gi-tract",
    "title": "Anatomic Problems of the Lower GI Tract",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Learn about problems of the lower GI tract, such as anorectal malformation, colonic atresia, malrotation, intussusception, fistula, prolapse, and volvulus.",
    "candidatePlainLanguageTerms": [
      "anatomic problems of the lower gi tract"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Anatomic Problems of the Lower GI Tract."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/anatomic-problems-lower-gi-tract"
  },
  {
    "id": "digestive-diseases-anatomic-problems-lower-gi-tract-about-lower-gi-tract",
    "title": "About the Lower GI Tract",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Overview of the lower gastrointestinal (GI) tract, which consists of the large intestine and anus. Describes structural problems that affect the lower GI tract.",
    "candidatePlainLanguageTerms": [
      "about the lower gi tract"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of About the Lower GI Tract."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/anatomic-problems-lower-gi-tract/about-lower-gi-tract"
  },
  {
    "id": "digestive-diseases-anatomic-problems-lower-gi-tract-anorectal-malformations",
    "title": "Anorectal Malformations (Imperforate Anus)",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Overview of anorectal malformations, birth defects of the anus or rectum that interfere with the passage of stool. These defects include imperforate anus.",
    "candidatePlainLanguageTerms": [
      "anorectal malformations (imperforate anus)",
      "imperforate anus"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Anorectal Malformations (Imperforate Anus)."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/anatomic-problems-lower-gi-tract/anorectal-malformations"
  },
  {
    "id": "digestive-diseases-anatomic-problems-lower-gi-tract-colonic-anorectal-fistulas",
    "title": "Colonic & Anorectal Fistulas",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Overview of colonic fistulas, which connect the colon to the skin or to an internal organ, and anorectal fistulas, which connect the anus or rectum to the skin.",
    "candidatePlainLanguageTerms": [
      "colonic & anorectal fistulas"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Colonic & Anorectal Fistulas."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/anatomic-problems-lower-gi-tract/colonic-anorectal-fistulas"
  },
  {
    "id": "digestive-diseases-anatomic-problems-lower-gi-tract-colonic-atresia-stenosis",
    "title": "Colonic Atresia & Stenosis",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Overview of colonic atresia, in which part of the colon is blocked or missing, and colonic stenosis, in which part of the colon is more narrow than normal.",
    "candidatePlainLanguageTerms": [
      "colonic atresia & stenosis"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Colonic Atresia & Stenosis."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/anatomic-problems-lower-gi-tract/colonic-atresia-stenosis"
  },
  {
    "id": "digestive-diseases-anatomic-problems-lower-gi-tract-colonic-volvulus",
    "title": "Colonic Volvulus",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Overview of colonic volvulus, which occurs when part of the colon twists around its mesentery. The most common types are sigmoid volvulus and cecal volvulus.",
    "candidatePlainLanguageTerms": [
      "colonic volvulus"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Colonic Volvulus."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/anatomic-problems-lower-gi-tract/colonic-volvulus"
  },
  {
    "id": "digestive-diseases-anatomic-problems-lower-gi-tract-intussusception",
    "title": "Intussusception",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Overview of intussusception, in which one part of the intestine folds into the part next to it, which can lead complications such as intestinal obstruction.",
    "candidatePlainLanguageTerms": [
      "intussusception"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Intussusception."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/anatomic-problems-lower-gi-tract/intussusception"
  },
  {
    "id": "digestive-diseases-anatomic-problems-lower-gi-tract-malrotation",
    "title": "Malrotation",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Overview of malrotation, a birth defect that occurs when the intestines don’t correctly or completely rotate into the normal final position during development.",
    "candidatePlainLanguageTerms": [
      "malrotation"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Malrotation."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/anatomic-problems-lower-gi-tract/malrotation"
  },
  {
    "id": "digestive-diseases-anatomic-problems-lower-gi-tract-rectal-prolapse",
    "title": "Rectal Prolapse",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Overview of rectal prolapse, which occurs when the rectum drops down through the anus. In adults, rectal prolapse is more common in older adults and in women.",
    "candidatePlainLanguageTerms": [
      "rectal prolapse"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Rectal Prolapse."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/anatomic-problems-lower-gi-tract/rectal-prolapse"
  },
  {
    "id": "digestive-diseases-bowel-control-problems-fecal-incontinence",
    "title": "Bowel Control Problems (Fecal Incontinence)",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Read about causes, diagnosis, and treatment of bowel control problems including information on diet and nutrition, and fecal incontinence in children.",
    "candidatePlainLanguageTerms": [
      "bowel control problems (fecal incontinence)",
      "fecal incontinence"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Bowel Control Problems (Fecal Incontinence)."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/bowel-control-problems-fecal-incontinence"
  },
  {
    "id": "digestive-diseases-chronic-diarrhea-children",
    "title": "Chronic Diarrhea in Children",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Defines chronic diarrhea and discusses causes, possible complications, diagnosis, treatment, and prevention of chronic diarrhea in children.",
    "candidatePlainLanguageTerms": [
      "chronic diarrhea in children"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Chronic Diarrhea in Children."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/chronic-diarrhea-children"
  },
  {
    "id": "digestive-diseases-colon-polyps",
    "title": "Colon Polyps",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Colon polyps are common in American adults. Learn the symptoms and causes of colon polyps, and how doctors diagnose and treat them.",
    "candidatePlainLanguageTerms": [
      "colon polyps"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Colon Polyps."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/colon-polyps"
  },
  {
    "id": "digestive-diseases-constipation-children",
    "title": "Constipation in Children",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Describes long-term and short-term constipation in children, its complications, symptoms, causes, diagnosis, and treatment.",
    "candidatePlainLanguageTerms": [
      "constipation in children"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Constipation in Children."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/constipation-children"
  },
  {
    "id": "digestive-diseases-cyclic-vomiting-syndrome",
    "title": "Cyclic Vomiting Syndrome",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Learn about the four phases of cyclic vomiting syndrome. Describes symptoms, causes, diagnosis, and treatments. Gives tips to prevent cyclic vomiting syndrome.",
    "candidatePlainLanguageTerms": [
      "cyclic vomiting syndrome"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Cyclic Vomiting Syndrome."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/cyclic-vomiting-syndrome"
  },
  {
    "id": "digestive-diseases-diarrhea",
    "title": "Diarrhea",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Discusses the common causes of diarrhea and the dangers of dehydration. Provides suggestions for easing the symptoms of diarrhea in adults and children.",
    "candidatePlainLanguageTerms": [
      "diarrhea"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Diarrhea."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/diarrhea"
  },
  {
    "id": "digestive-diseases-digestive-system-how-it-works",
    "title": "Your Digestive System & How it Works",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Overview of the digestive system—how food moves through each part of the GI tract to help break down food for energy, growth, and cell repair.",
    "candidatePlainLanguageTerms": [
      "your digestive system & how it works"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Your Digestive System & How it Works."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/digestive-system-how-it-works"
  },
  {
    "id": "digestive-diseases-diverticulosis-diverticulitis",
    "title": "Diverticular Disease",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Overview of diverticular disease, which occurs when diverticula lead to chronic symptoms, diverticular bleeding, or diverticulitis or related complications.",
    "candidatePlainLanguageTerms": [
      "diverticular disease"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Diverticular Disease."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/diverticulosis-diverticulitis"
  },
  {
    "id": "digestive-diseases-dumping-syndrome",
    "title": "Dumping Syndrome",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Describes Dumping syndrome, a group of symptoms caused by rapid gastric emptying. Covers the causes, symptoms, diagnosis, treatment, and long-term outlook.",
    "candidatePlainLanguageTerms": [
      "dumping syndrome"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Dumping Syndrome."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/dumping-syndrome"
  },
  {
    "id": "digestive-diseases-exocrine-pancreatic-insufficiency",
    "title": "Exocrine Pancreatic Insufficiency (EPI)",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Overview of exocrine pancreatic insufficiency (EPI), including symptoms, causes, diagnosis, and treatment with pancreatic enzyme replacement therapy (PERT).",
    "candidatePlainLanguageTerms": [
      "exocrine pancreatic insufficiency (epi)",
      "epi"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Exocrine Pancreatic Insufficiency (EPI)."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/exocrine-pancreatic-insufficiency"
  },
  {
    "id": "digestive-diseases-food-poisoning",
    "title": "Food Poisoning",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Discusses the causes, risk factors, complications, treatment options, and prevention strategies of foodborne illnesses.",
    "candidatePlainLanguageTerms": [
      "food poisoning"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Food Poisoning."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/food-poisoning"
  },
  {
    "id": "digestive-diseases-gallstones-dieting",
    "title": "Dieting & Gallstones",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Being overweight or having obesity may make you more likely to develop gallstones. Losing weight quickly may raise your chances of forming gallstones.",
    "candidatePlainLanguageTerms": [
      "dieting & gallstones"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Dieting & Gallstones."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/gallstones/dieting"
  },
  {
    "id": "digestive-diseases-gas-digestive-tract",
    "title": "Gas in the Digestive Tract",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Overview of gas in the digestive tract, symptoms such as belching, bloating, and passing gas, and treatments or diet changes that can reduce gas symptoms.",
    "candidatePlainLanguageTerms": [
      "gas in the digestive tract"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Gas in the Digestive Tract."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/gas-digestive-tract"
  },
  {
    "id": "digestive-diseases-gastritis-gastropathy",
    "title": "Gastritis & Gastropathy",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Learn about causes, symptoms, and treatments for gastritis, in which the stomach lining is inflamed, and gastropathy, in which the stomach lining is damaged.",
    "candidatePlainLanguageTerms": [
      "gastritis & gastropathy"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Gastritis & Gastropathy."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/gastritis-gastropathy"
  },
  {
    "id": "digestive-diseases-gastrointestinal-bleeding",
    "title": "Gastrointestinal (GI) Bleeding",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Gastrointestinal (GI) bleeding is a symptom or complication of a disease or condition. Learn about GI bleeding symptoms, causes, diagnosis, and treatment.",
    "candidatePlainLanguageTerms": [
      "gastrointestinal (gi) bleeding",
      "gi"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Gastrointestinal (GI) Bleeding."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/gastrointestinal-bleeding"
  },
  {
    "id": "digestive-diseases-inguinal-hernia",
    "title": "Inguinal Hernia",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Overview of inguinal hernias, in which contents of the abdomen bulge through a weak area in the lower abdominal wall, and diagnosis and treatment of hernias.",
    "candidatePlainLanguageTerms": [
      "inguinal hernia"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Inguinal Hernia."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/inguinal-hernia"
  },
  {
    "id": "digestive-diseases-intestinal-pseudo-obstruction",
    "title": "Intestinal Pseudo-obstruction",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Learn about the diagnosis and treatment of intestinal pseudo-obstruction, including chronic intestinal pseudo-obstruction and acute colonic pseudo-obstruction.",
    "candidatePlainLanguageTerms": [
      "intestinal pseudo-obstruction"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Intestinal Pseudo-obstruction."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/intestinal-pseudo-obstruction"
  },
  {
    "id": "digestive-diseases-irritable-bowel-syndrome-children",
    "title": "Irritable Bowel Syndrome in Children",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Discusses symptoms, diagnosis, and treatment of IBS in children. Treatments include changes in diet, mental health therapies, probiotics, and medicines.",
    "candidatePlainLanguageTerms": [
      "irritable bowel syndrome in children"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Irritable Bowel Syndrome in Children."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/irritable-bowel-syndrome-children"
  },
  {
    "id": "digestive-diseases-ostomy-surgery-bowel",
    "title": "Ostomy Surgery of the Bowel",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Overview of ostomy surgery of the bowel, including different types of ostomy surgery, adjusting to life after ostomy surgery, diet, and managing waste and gas.",
    "candidatePlainLanguageTerms": [
      "ostomy surgery of the bowel"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Ostomy Surgery of the Bowel."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/ostomy-surgery-bowel"
  },
  {
    "id": "digestive-diseases-ostomy-surgery-bowel-after",
    "title": "After Ostomy Surgery of the Bowel",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Learn about adjusting to life after ostomy surgery, including managing waste and gas, eating a healthy diet, and coping with social and emotional issues.",
    "candidatePlainLanguageTerms": [
      "after ostomy surgery of the bowel"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of After Ostomy Surgery of the Bowel."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/ostomy-surgery-bowel/after"
  },
  {
    "id": "digestive-diseases-ostomy-surgery-bowel-complications",
    "title": "Complications of Ostomy Surgery of the Bowel",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Overview of ostomy surgery complications, which may include stoma prolapse or hernia, skin irritation, intestinal obstruction, infection, pouchitis, and others.",
    "candidatePlainLanguageTerms": [
      "complications of ostomy surgery of the bowel"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Complications of Ostomy Surgery of the Bowel."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/ostomy-surgery-bowel/complications"
  },
  {
    "id": "digestive-diseases-ostomy-surgery-bowel-types",
    "title": "Types of Ostomy Surgery of the Bowel",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Overview of the most common types of ostomy surgery of the bowel, which include ileostomy, colostomy, ileoanal pouch surgery, and continent ileostomy.",
    "candidatePlainLanguageTerms": [
      "types of ostomy surgery of the bowel"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Types of Ostomy Surgery of the Bowel."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/ostomy-surgery-bowel/types"
  },
  {
    "id": "digestive-diseases-ostomy-surgery-bowel-what-to-expect-before-during",
    "title": "What to Expect Before & During Ostomy Surgery of the Bowel",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Learn about preparing for and having ostomy surgery of the bowel. Surgeons and ostomy nurses can provide information and help choose the best stoma location.",
    "candidatePlainLanguageTerms": [
      "what to expect before & during ostomy surgery of the bowel"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of What to Expect Before & During Ostomy Surgery of the Bowel."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/ostomy-surgery-bowel/what-to-expect-before-during"
  },
  {
    "id": "digestive-diseases-proctitis",
    "title": "Proctitis",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Describes the causes, symptoms, diagnosis, and treatment of proctitis. Proctitis is inflammation of the lining of the rectum. Proctitis may be acute or chronic.",
    "candidatePlainLanguageTerms": [
      "proctitis"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Proctitis."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/proctitis"
  },
  {
    "id": "digestive-diseases-viral-gastroenteritis",
    "title": "Viral Gastroenteritis (“Stomach Flu”)",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Read about viral gastroenteritis, also called “stomach flu,” an infection of the intestines that causes diarrhea, abdominal pain, and other symptoms.",
    "candidatePlainLanguageTerms": [
      "viral gastroenteritis (“stomach flu”)",
      "“stomach flu”"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Viral Gastroenteritis (“Stomach Flu”)."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/viral-gastroenteritis"
  },
  {
    "id": "digestive-diseases-zollinger-ellison-syndrome",
    "title": "Zollinger-Ellison Syndrome",
    "category": "Digestive Diseases",
    "plainLanguageSummary": "Learn about Zollinger-Ellison syndrome, in which tumors in the pancreas or duodenum increase stomach acid, leading to peptic ulcers, acid reflux, and diarrhea.",
    "candidatePlainLanguageTerms": [
      "zollinger-ellison syndrome"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Zollinger-Ellison Syndrome."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/digestive-diseases/zollinger-ellison-syndrome"
  },
  {
    "id": "endocrine-diseases-multiple-endocrine-neoplasia-type-1",
    "title": "Multiple Endocrine Neoplasia Type 1",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "Overview of multiple endocrine neoplasia type 1 (MEN1), an inherited disorder that causes tumors to develop in two or more endocrine glands.",
    "candidatePlainLanguageTerms": [
      "multiple endocrine neoplasia type 1"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Multiple Endocrine Neoplasia Type 1."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/endocrine-diseases/multiple-endocrine-neoplasia-type-1"
  },
  {
    "id": "endocrine-diseases-national-hormone-pituitary-program",
    "title": "National Hormone & Pituitary Program (NHPP): Information for People Treated with Pituitary Human Growth Hormone",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "Provides information on Creutzfeldt-Jakob disease and NHPP&#39;s use of human growth hormones.",
    "candidatePlainLanguageTerms": [
      "national hormone & pituitary program (nhpp): information for people treated with pituitary human growth hormone",
      "nhpp"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of National Hormone & Pituitary Program (NHPP): Information for People Treated with Pituitary Human Growth Hormone."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/endocrine-diseases/national-hormone-pituitary-program"
  },
  {
    "id": "endocrine-diseases-national-hormone-pituitary-program-health-alert-adrenal-crisis-causes-death-people-treated-hgh",
    "title": "Health Alert: Adrenal Crisis Causes Death in Some People Who Were Treated with hGH",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "Health Alert: Adrenal Crisis Causes Death in Some People Who Were Treated with hGH",
    "candidatePlainLanguageTerms": [
      "health alert: adrenal crisis causes death in some people who were treated with hgh"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Health Alert: Adrenal Crisis Causes Death in Some People Who Were Treated with hGH."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/endocrine-diseases/national-hormone-pituitary-program/health-alert-adrenal-crisis-causes-death-people-treated-hgh"
  },
  {
    "id": "endocrine-diseases-national-hormone-pituitary-program-human-growth-hormone-creutzfeldt-jakob-disease-resource-list",
    "title": "Human Growth Hormone & Creutzfeldt-Jakob Disease Resource List",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "Provides links to information on the connection between human growth hormones and Creutzfeldt-Jakob disease and to support organizations and journal articles.?",
    "candidatePlainLanguageTerms": [
      "human growth hormone & creutzfeldt-jakob disease resource list"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Human Growth Hormone & Creutzfeldt-Jakob Disease Resource List."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/endocrine-diseases/national-hormone-pituitary-program/human-growth-hormone-creutzfeldt-jakob-disease-resource-list"
  },
  {
    "id": "endocrine-diseases-pregnancy-thyroid-disease",
    "title": "Thyroid Disease & Pregnancy",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "Learn about thyroid disease during and after pregnancy. If you have thyroid disease, find out what steps you can take to stay healthy and have a healthy baby.",
    "candidatePlainLanguageTerms": [
      "thyroid disease & pregnancy"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Thyroid Disease & Pregnancy."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/endocrine-diseases/pregnancy-thyroid-disease"
  },
  {
    "id": "endocrine-diseases-prolactinoma",
    "title": "Prolactinoma",
    "category": "Diabetes & Endocrine",
    "plainLanguageSummary": "Overview of prolactinoma, a disorder in which a noncancerous tumor of the pituitary gland produces too much of the hormone prolactin.",
    "candidatePlainLanguageTerms": [
      "prolactinoma"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Prolactinoma."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/endocrine-diseases/prolactinoma"
  },
  {
    "id": "kidney-disease-acquired-cystic-kidney-disease",
    "title": "Acquired Cystic Kidney Disease",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Explains the causes of acquired cystic kidney disease (ACKD), a common condition in people with kidney failure who are treated with dialysis.",
    "candidatePlainLanguageTerms": [
      "acquired cystic kidney disease"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Acquired Cystic Kidney Disease."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/acquired-cystic-kidney-disease"
  },
  {
    "id": "kidney-disease-amyloidosis",
    "title": "Amyloidosis & Kidney Disease",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Overview of amyloidosis, a condition where abnormal proteins called amyloid build up in organs and tissues, and how the condition affects the kidneys.",
    "candidatePlainLanguageTerms": [
      "amyloidosis & kidney disease"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Amyloidosis & Kidney Disease."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/amyloidosis"
  },
  {
    "id": "kidney-disease-anemia",
    "title": "Anemia in Chronic Kidney Disease",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Overview of anemia in people with chronic kidney disease, a common complication in people with advanced kidney disease.",
    "candidatePlainLanguageTerms": [
      "anemia in chronic kidney disease"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Anemia in Chronic Kidney Disease."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/anemia"
  },
  {
    "id": "kidney-disease-children",
    "title": "Kidney Disease in Children",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Overview of acute kidney injury and chronic kidney disease in children, including complications, symptoms, causes, diagnosis, and treatment.",
    "candidatePlainLanguageTerms": [
      "kidney disease in children"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Kidney Disease in Children."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/children"
  },
  {
    "id": "kidney-disease-children-ectopic-kidney",
    "title": "Ectopic Kidney",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "An ectopic kidney develops in the wrong place while a fetus grows in the womb. Most people with an ectopic kidney don’t have symptoms or complications.",
    "candidatePlainLanguageTerms": [
      "ectopic kidney"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Ectopic Kidney."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/children/ectopic-kidney"
  },
  {
    "id": "kidney-disease-children-helping-child-adapt-life-chronic-kidney-disease",
    "title": "Helping Your Child Adapt to Life with Chronic Kidney Disease",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Overview of ways in which parents and other adults can help children with kidney disease overcome the daily challenges of living with a chronic illness.",
    "candidatePlainLanguageTerms": [
      "helping your child adapt to life with chronic kidney disease"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Helping Your Child Adapt to Life with Chronic Kidney Disease."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/children/helping-child-adapt-life-chronic-kidney-disease"
  },
  {
    "id": "kidney-disease-children-helping-child-adapt-life-chronic-kidney-disease-growth-failure-chronic-kidney-disease",
    "title": "Growth Failure in Children with Chronic Kidney Disease",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Symptoms, causes, diagnosis, and treatment of growth failure, a common complication in children with CKD, in which they do not grow as expected.",
    "candidatePlainLanguageTerms": [
      "growth failure in children with chronic kidney disease"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Growth Failure in Children with Chronic Kidney Disease."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/children/helping-child-adapt-life-chronic-kidney-disease/growth-failure-chronic-kidney-disease"
  },
  {
    "id": "kidney-disease-children-helping-child-adapt-life-chronic-kidney-disease-nutrition-chronic-kidney-disease",
    "title": "Nutrition for Children with Chronic Kidney Disease",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Children with chronic kidney disease who eat the right foods can prevent or delay other health problems. Find out more about nutrition if your child has CKD.",
    "candidatePlainLanguageTerms": [
      "nutrition for children with chronic kidney disease"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Nutrition for Children with Chronic Kidney Disease."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/children/helping-child-adapt-life-chronic-kidney-disease/nutrition-chronic-kidney-disease"
  },
  {
    "id": "kidney-disease-children-hemolytic-uremic-syndrome",
    "title": "Hemolytic Uremic Syndrome in Children",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Explains how the condition develops after Escherichia coli infection in the digestive tract and describes treatment.",
    "candidatePlainLanguageTerms": [
      "hemolytic uremic syndrome in children"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Hemolytic Uremic Syndrome in Children."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/children/hemolytic-uremic-syndrome"
  },
  {
    "id": "kidney-disease-children-medullary-sponge-kidney",
    "title": "Medullary Sponge Kidney",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Complications, symptoms, diagnosis, and treatment of medullary sponge kidney, a birth defect inside a fetus&#39; kidneys.",
    "candidatePlainLanguageTerms": [
      "medullary sponge kidney"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Medullary Sponge Kidney."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/children/medullary-sponge-kidney"
  },
  {
    "id": "kidney-disease-children-multicystic-dysplastic-kidney",
    "title": "Multicystic Dysplastic Kidney",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Learn about symptoms, causes, diagnosis, and treatment of multicystic dysplastic kidney, which occurs when a baby’s kidneys do not develop normally in the womb.",
    "candidatePlainLanguageTerms": [
      "multicystic dysplastic kidney"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Multicystic Dysplastic Kidney."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/children/multicystic-dysplastic-kidney"
  },
  {
    "id": "kidney-disease-children-nephrotic-syndrome-children",
    "title": "Nephrotic Syndrome in Children",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Overview of nephrotic syndrome in children, a combination of symptoms that can develop when a child’s kidneys are not working properly.",
    "candidatePlainLanguageTerms": [
      "nephrotic syndrome in children"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Nephrotic Syndrome in Children."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/children/nephrotic-syndrome-children"
  },
  {
    "id": "kidney-disease-chronic-kidney-disease-ckd-causes",
    "title": "Causes of Chronic Kidney Disease in Adults",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Learn about the two most common causes of chronic kidney disease (CKD) in adults—diabetes and high blood pressure—as well as other causes of CKD in adults.",
    "candidatePlainLanguageTerms": [
      "causes of chronic kidney disease in adults"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Causes of Chronic Kidney Disease in Adults."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/causes"
  },
  {
    "id": "kidney-disease-chronic-kidney-disease-ckd-healthy-eating-adults-chronic-kidney-disease",
    "title": "Healthy Eating for Adults with Chronic Kidney Disease",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Advice about what to eat and drink to slow chronic kidney disease (CKD), including suggestions to work with a dietitian to create and adjust meal plans.",
    "candidatePlainLanguageTerms": [
      "healthy eating for adults with chronic kidney disease"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Healthy Eating for Adults with Chronic Kidney Disease."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/healthy-eating-adults-chronic-kidney-disease"
  },
  {
    "id": "kidney-disease-chronic-kidney-disease-ckd-healthy-eating-adults-chronic-kidney-disease-bien-manger-sante-rein",
    "title": "Bien manger pour la santé du rein: conseils aux personnes atteintes de maladie rénale chronique",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Conseils sur ce qu&#39;il faut manger et boire pour ralentir la maladie r&#233;nale chronique (MRC), y compris comment travailler avec une di&#233;t&#233;tiste.",
    "candidatePlainLanguageTerms": [
      "bien manger pour la santé du rein: conseils aux personnes atteintes de maladie rénale chronique"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Bien manger pour la santé du rein: conseils aux personnes atteintes de maladie rénale chronique."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/healthy-eating-adults-chronic-kidney-disease/bien-manger-sante-rein"
  },
  {
    "id": "kidney-disease-chronic-kidney-disease-ckd-managing",
    "title": "Managing Chronic Kidney Disease",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Overview of chronic kidney disease (CKD) management, including types of medicines to take, healthy habits to adopt, and a description of your health care team.",
    "candidatePlainLanguageTerms": [
      "managing chronic kidney disease"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Managing Chronic Kidney Disease."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/managing"
  },
  {
    "id": "kidney-disease-chronic-kidney-disease-ckd-prevention-prevention-des-maladies-renales-chroniques",
    "title": "La prévention des maladies rénales chroniques",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Aper&#231;u de la pr&#233;vention des maladies r&#233;nales chroniques, y compris les facteurs de risque et comment garder vos reins en bonne sant&#233;, comme la pr&#233;vention de l&#39;hypertension art&#233;rielle et du diab&#232;te",
    "candidatePlainLanguageTerms": [
      "la prévention des maladies rénales chroniques"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of La prévention des maladies rénales chroniques."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/prevention/prevention-des-maladies-renales-chroniques"
  },
  {
    "id": "kidney-disease-chronic-kidney-disease-ckd-tests-diagnosis-albuminuria-albumin-urine",
    "title": "Albuminuria: Albumin in the Urine",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Defines albuminuria and discusses who is at risk. Reviews the signs of albuminuria and provides information about testing procedures and treatment options.",
    "candidatePlainLanguageTerms": [
      "albuminuria: albumin in the urine"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Albuminuria: Albumin in the Urine."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/tests-diagnosis/albuminuria-albumin-urine"
  },
  {
    "id": "kidney-disease-chronic-kidney-disease-ckd-what-if-my-kidneys-fail",
    "title": "What If My Kidneys Fail?",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Overview of kidney failure and the treatment options you have to replace lost kidney function--hemodialysis, peritoneal dialysis, or kidney transplant.",
    "candidatePlainLanguageTerms": [
      "what if my kidneys fail?"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of What If My Kidneys Fail?."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/what-if-my-kidneys-fail"
  },
  {
    "id": "kidney-disease-chronic-kidney-disease-ckd-what-is-chronic-kidney-disease",
    "title": "What Is Chronic Kidney Disease in Adults?",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Overview of chronic kidney disease, which occurs when the kidneys are damaged or have a problem with their structure and can’t filter blood the way they should.",
    "candidatePlainLanguageTerms": [
      "what is chronic kidney disease in adults?"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of What Is Chronic Kidney Disease in Adults?."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/what-is-chronic-kidney-disease"
  },
  {
    "id": "kidney-disease-chronic-kidney-disease-ckd-what-is-chronic-kidney-disease-maladie-renale-chronique",
    "title": "La maladie rénale chronique",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Les personnes atteintes de maladie r&#233;nale ont souvent besoin de changer leurs habitudes pour vivre mieux et plus longtemps. La fiche technique fournit un aper&#231;u des principes de base de la MRC.",
    "candidatePlainLanguageTerms": [
      "la maladie rénale chronique"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of La maladie rénale chronique."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/what-is-chronic-kidney-disease/maladie-renale-chronique"
  },
  {
    "id": "kidney-disease-diabetes-insipidus",
    "title": "Diabetes Insipidus",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Learn about the different types of diabetes insipidus, their causes, and how they are diagnosed and treated.",
    "candidatePlainLanguageTerms": [
      "diabetes insipidus"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Diabetes Insipidus."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/diabetes-insipidus"
  },
  {
    "id": "kidney-disease-glomerular-disease",
    "title": "Glomerular Disease",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Overview of glomerular disease, a condition that affects kidney function by damaging tiny filters in your kidneys called glomeruli.",
    "candidatePlainLanguageTerms": [
      "glomerular disease"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Glomerular Disease."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/glomerular-disease"
  },
  {
    "id": "kidney-disease-glomerular-disease-anti-gbm-goodpastures-disease",
    "title": "Anti-GBM (Goodpasture’s) Disease",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Overview of anti-GBM disease, a rare autoimmune disorder that affects the kidneys and lungs and can be fatal if not treated promptly.",
    "candidatePlainLanguageTerms": [
      "anti-gbm (goodpasture’s) disease",
      "goodpasture’s"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Anti-GBM (Goodpasture’s) Disease."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/glomerular-disease/anti-gbm-goodpastures-disease"
  },
  {
    "id": "kidney-disease-heart-disease",
    "title": "Heart Disease & Kidney Disease",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "People with kidney disease are more likely to get heart disease. Learn how heart disease and kidney disease are related and how you can protect yourself.",
    "candidatePlainLanguageTerms": [
      "heart disease & kidney disease"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Heart Disease & Kidney Disease."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/heart-disease"
  },
  {
    "id": "kidney-disease-high-blood-pressure",
    "title": "High Blood Pressure & Kidney Disease",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Learn how high blood pressure affects your kidneys, the risk factors for developing chronic kidney disease, treatment, and what you can do to stay healthy.",
    "candidatePlainLanguageTerms": [
      "high blood pressure & kidney disease"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of High Blood Pressure & Kidney Disease."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/high-blood-pressure"
  },
  {
    "id": "kidney-disease-high-blood-pressure-diabete-hypertension",
    "title": "Pour les personnes atteintes de diabète ou d’hypertension artérielle",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Passe en revue les bases de l’hypertension art&#233;rielle et son effet sur les reins.  Traite des sympt&#244;mes de la maladie r&#233;nale et les m&#233;thodes de pr&#233;vention.",
    "candidatePlainLanguageTerms": [
      "pour les personnes atteintes de diabète ou d’hypertension artérielle"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Pour les personnes atteintes de diabète ou d’hypertension artérielle."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/high-blood-pressure/diabete-hypertension"
  },
  {
    "id": "kidney-disease-iga-vasculitis",
    "title": "IgA Vasculitis",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Overview of immunoglobulin A vasculitis, also called Henoch-Sch&#246;nlein purpura, a disease that causes small blood vessels to become inflamed and leak.",
    "candidatePlainLanguageTerms": [
      "iga vasculitis"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of IgA Vasculitis."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/iga-vasculitis"
  },
  {
    "id": "kidney-disease-keeping-kidneys-safe",
    "title": "Keeping Kidneys Safe: Smart Choices about Medicines",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Learn how to protect your kidneys while taking blood pressure medicines. Work with your pharmacist, be careful with OTC medicines, and plan ahead for illnesses.",
    "candidatePlainLanguageTerms": [
      "keeping kidneys safe: smart choices about medicines"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Keeping Kidneys Safe: Smart Choices about Medicines."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/keeping-kidneys-safe"
  },
  {
    "id": "kidney-disease-kidney-failure-choosing-treatment",
    "title": "Choosing a Treatment for Kidney Failure",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Overview of kidney failure treatment options: how to choose and pay for treatment, planning ahead, preparing advance directives, dialysis, and transplant.",
    "candidatePlainLanguageTerms": [
      "choosing a treatment for kidney failure"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Choosing a Treatment for Kidney Failure."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/kidney-failure/choosing-treatment"
  },
  {
    "id": "kidney-disease-kidney-failure-choosing-treatment-comparison-chart",
    "title": "Kidney Failure Treatment Options - Comparison Chart",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Chart helps you compare kidney failure treatment choices—hemodialysis, peritoneal dialysis, and transplant—schedule, flexibility, diet, training, and more.",
    "candidatePlainLanguageTerms": [
      "kidney failure treatment options - comparison chart"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Kidney Failure Treatment Options - Comparison Chart."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/kidney-failure/choosing-treatment/comparison-chart"
  },
  {
    "id": "kidney-disease-kidney-failure-conservative-management",
    "title": "Conservative Management for Kidney Failure",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Learn about conservative management for kidney failure—what happens if you say “no” to dialysis—managing symptoms, quality of life, preparing for death.",
    "candidatePlainLanguageTerms": [
      "conservative management for kidney failure"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Conservative Management for Kidney Failure."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/kidney-failure/conservative-management"
  },
  {
    "id": "kidney-disease-kidney-failure-eating-right",
    "title": "Eating Right with Kidney Failure",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Learn about what foods and drinks you will need to keep track of to make your kidney failure treatment work better and improve how you feel.",
    "candidatePlainLanguageTerms": [
      "eating right with kidney failure"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Eating Right with Kidney Failure."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/kidney-failure/eating-right"
  },
  {
    "id": "kidney-disease-kidney-failure-financial-help-treatment",
    "title": "Financial Help for Treatment of Kidney Failure",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Learn where to get help paying for kidney failure care and medicine. Read about Medicare coverage, private health insurance, and other sources of financial help.",
    "candidatePlainLanguageTerms": [
      "financial help for treatment of kidney failure"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Financial Help for Treatment of Kidney Failure."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/kidney-failure/financial-help-treatment"
  },
  {
    "id": "kidney-disease-kidney-failure-hemodialysis",
    "title": "Hemodialysis",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Overview of hemodialysis treatment for kidney failure, including information on home and in-center dialysis, preparation, vascular access, and complications.",
    "candidatePlainLanguageTerms": [
      "hemodialysis"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Hemodialysis."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/kidney-failure/hemodialysis"
  },
  {
    "id": "kidney-disease-kidney-failure-hemodialysis-eating-nutrition",
    "title": "Eating & Nutrition for Hemodialysis",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Explains in an easy-to-read format how food affects hemodialysis patients and describes the role of fluids, potassium, phosphorus, protein, sodium, calories, and vitamins and minerals.",
    "candidatePlainLanguageTerms": [
      "eating & nutrition for hemodialysis"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Eating & Nutrition for Hemodialysis."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/kidney-failure/hemodialysis/eating-nutrition"
  },
  {
    "id": "kidney-disease-kidney-failure-kidney-transplant",
    "title": "Kidney Transplant",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Overview of kidney transplant, a surgery to place a healthy kidney from a donor into your body. A kidney transplant is a treatment for kidney failure.",
    "candidatePlainLanguageTerms": [
      "kidney transplant"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Kidney Transplant."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/kidney-failure/kidney-transplant"
  },
  {
    "id": "kidney-disease-kidney-failure-peritoneal-dialysis",
    "title": "Peritoneal Dialysis",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Learn about continuous ambulatory (CAPD) and continuous cycling (CCPD) peritoneal dialysis treatments you do at home—how to prepare, do exchanges, and risks.",
    "candidatePlainLanguageTerms": [
      "peritoneal dialysis"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Peritoneal Dialysis."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/kidney-failure/peritoneal-dialysis"
  },
  {
    "id": "kidney-disease-kidney-failure-peritoneal-dialysis-eating-nutrition",
    "title": "Eating & Nutrition for Peritoneal Dialysis",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Overview of eating and nutrition for peritoneal dialysis, including what to eat and drink, and how to set dietary goals and calorie limits.",
    "candidatePlainLanguageTerms": [
      "eating & nutrition for peritoneal dialysis"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Eating & Nutrition for Peritoneal Dialysis."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/kidney-failure/peritoneal-dialysis/eating-nutrition"
  },
  {
    "id": "kidney-disease-kidney-failure-what-is-kidney-failure",
    "title": "What is Kidney Failure?",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Learn about living with kidney failure—symptoms, complications, treatment options, how to cope, and how your health care team and friends can help.",
    "candidatePlainLanguageTerms": [
      "what is kidney failure?"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of What is Kidney Failure?."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/kidney-failure/what-is-kidney-failure"
  },
  {
    "id": "kidney-disease-kidneys-how-they-work",
    "title": "Your Kidneys & How They Work",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Learn how your kidneys filter blood, why kidneys are important, and how kidneys help maintain a healthy balance of water, salts, and minerals in your body.",
    "candidatePlainLanguageTerms": [
      "your kidneys & how they work"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Your Kidneys & How They Work."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/kidneys-how-they-work"
  },
  {
    "id": "kidney-disease-mineral-bone-disorder",
    "title": "Mineral & Bone Disorder in Chronic Kidney Disease",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Mineral and bone disorder in chronic kidney disease occurs when damaged kidneys and abnormal hormone levels cause blood calcium and phosphorus imbalances.",
    "candidatePlainLanguageTerms": [
      "mineral & bone disorder in chronic kidney disease"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Mineral & Bone Disorder in Chronic Kidney Disease."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/mineral-bone-disorder"
  },
  {
    "id": "kidney-disease-polycystic-kidney-disease-autosomal-dominant-pkd",
    "title": "Autosomal Dominant Polycystic Kidney Disease",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Learn about the signs and symptoms of autosomal dominant polycystic kidney disease (ADPKD) and how you can treat and manage the complications of ADPKD.",
    "candidatePlainLanguageTerms": [
      "autosomal dominant polycystic kidney disease"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Autosomal Dominant Polycystic Kidney Disease."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/polycystic-kidney-disease/autosomal-dominant-pkd"
  },
  {
    "id": "kidney-disease-polycystic-kidney-disease-autosomal-recessive-pkd",
    "title": "Autosomal Recessive Polycystic Kidney Disease",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Learn about the signs of autosomal recessive polycystic kidney disease and how your child’s health care team can help treat the complications of the disease.",
    "candidatePlainLanguageTerms": [
      "autosomal recessive polycystic kidney disease"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Autosomal Recessive Polycystic Kidney Disease."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/polycystic-kidney-disease/autosomal-recessive-pkd"
  },
  {
    "id": "kidney-disease-polycystic-kidney-disease-what-is-pkd",
    "title": "What Is Polycystic Kidney Disease?",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Learn about causes and signs of polycystic kidney disease (PKD). The sooner you know you have PKD, the sooner you can keep your condition from getting worse.",
    "candidatePlainLanguageTerms": [
      "what is polycystic kidney disease?"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of What Is Polycystic Kidney Disease?."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/polycystic-kidney-disease/what-is-pkd"
  },
  {
    "id": "kidney-disease-renal-artery-stenosis",
    "title": "Renal Artery Stenosis",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Overview of renal artery stenosis (RAS) and renovascular hypertension. Describes causes of RAS, symptoms, complications, diagnosis, and treatment.",
    "candidatePlainLanguageTerms": [
      "renal artery stenosis"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Renal Artery Stenosis."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/renal-artery-stenosis"
  },
  {
    "id": "kidney-disease-renal-tubular-acidosis",
    "title": "Renal Tubular Acidosis",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Learn about the different types of renal tubular acidosis (RTA), their causes, how RTA is diagnosed, and how it is treated.",
    "candidatePlainLanguageTerms": [
      "renal tubular acidosis"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Renal Tubular Acidosis."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/renal-tubular-acidosis"
  },
  {
    "id": "kidney-disease-simple-kidney-cysts",
    "title": "Simple Kidney Cysts",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Simple kidney cysts are fluid-filled sacs that can form in one or both of your kidneys. Simple kidney cysts are usually harmless and don’t cause symptoms.",
    "candidatePlainLanguageTerms": [
      "simple kidney cysts"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Simple Kidney Cysts."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/simple-kidney-cysts"
  },
  {
    "id": "kidney-disease-solitary-kidney",
    "title": "Solitary or Single-functioning Kidney",
    "category": "Kidney Diseases",
    "plainLanguageSummary": "Monitor and control your solitary kidney function with urine and blood tests, imaging, blood pressure control, diet, and injury prevention.",
    "candidatePlainLanguageTerms": [
      "solitary or single-functioning kidney"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Solitary or Single-functioning Kidney."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/kidney-disease/solitary-kidney"
  },
  {
    "id": "liver-disease-alagille-syndrome",
    "title": "Alagille Syndrome",
    "category": "Liver Diseases",
    "plainLanguageSummary": "Describes Alagille syndrome, a rare, inherited disorder that affects the liver. Covers the causes, symptoms, diagnosis, treatment, and long-term outlook.",
    "candidatePlainLanguageTerms": [
      "alagille syndrome"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Alagille Syndrome."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/liver-disease/alagille-syndrome"
  },
  {
    "id": "liver-disease-biliary-atresia",
    "title": "Biliary Atresia",
    "category": "Liver Diseases",
    "plainLanguageSummary": "Read about symptoms, diagnosis, and treatment of biliary atresia, a condition in infants in which bile ducts are scarred and blocked, leading to liver damage.",
    "candidatePlainLanguageTerms": [
      "biliary atresia"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Biliary Atresia."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/liver-disease/biliary-atresia"
  },
  {
    "id": "liver-disease-liver-transplant",
    "title": "Liver Transplant",
    "category": "Liver Diseases",
    "plainLanguageSummary": "Describes liver transplants, when one is needed, the liver transplant process, transplant surgery problems and post surgery, and living with a liver transplant.",
    "candidatePlainLanguageTerms": [
      "liver transplant"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Liver Transplant."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/liver-disease/liver-transplant"
  },
  {
    "id": "liver-disease-liver-transplant-liver-transplant-surgery",
    "title": "Liver Transplant Surgery",
    "category": "Liver Diseases",
    "plainLanguageSummary": "Learn how doctors perform liver transplant surgery. Learn about possible problems after surgery, recovery, and returning to normal activities.",
    "candidatePlainLanguageTerms": [
      "liver transplant surgery"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Liver Transplant Surgery."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/liver-disease/liver-transplant/liver-transplant-surgery"
  },
  {
    "id": "liver-disease-liver-transplant-living-with-transplant",
    "title": "Living with a Liver Transplant",
    "category": "Liver Diseases",
    "plainLanguageSummary": "Learn about follow-up medical care, organ rejection, medicines to prevent organ rejection, and what you should do to help care for your new liver.",
    "candidatePlainLanguageTerms": [
      "living with a liver transplant"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Living with a Liver Transplant."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/liver-disease/liver-transplant/living-with-transplant"
  },
  {
    "id": "liver-disease-liver-transplant-preparing-transplant",
    "title": "The Liver Transplant Process",
    "category": "Liver Diseases",
    "plainLanguageSummary": "Learn about the liver transplant process, including transplant center referral, candidate evaluation, and placement on the national waiting list.",
    "candidatePlainLanguageTerms": [
      "the liver transplant process"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of The Liver Transplant Process."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/liver-disease/liver-transplant/preparing-transplant"
  },
  {
    "id": "liver-disease-nafld-nash-children",
    "title": "Nonalcoholic Fatty Liver Disease & NASH in Children",
    "category": "Liver Diseases",
    "plainLanguageSummary": "Overview of nonalcoholic fatty liver disease, or NAFLD (also referred to as metabolic dysfunction-associated steatotic liver disease, or MASLD) in children.",
    "candidatePlainLanguageTerms": [
      "nonalcoholic fatty liver disease & nash in children"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Nonalcoholic Fatty Liver Disease & NASH in Children."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/liver-disease/nafld-nash-children"
  },
  {
    "id": "liver-disease-porphyria",
    "title": "Porphyria",
    "category": "Liver Diseases",
    "plainLanguageSummary": "Porphyrias are diseases that occur when the body has problems making heme. Acute porphyrias affect the nervous system; cutaneous porphyrias affect the skin.",
    "candidatePlainLanguageTerms": [
      "porphyria"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Porphyria."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/liver-disease/porphyria"
  },
  {
    "id": "liver-disease-viral-hepatitis",
    "title": "Viral Hepatitis",
    "category": "Liver Diseases",
    "plainLanguageSummary": "Viral hepatitis is an infection that causes liver inflammation and damage. Several different viruses cause hepatitis, including hepatitis A, B, C, D, and E.",
    "candidatePlainLanguageTerms": [
      "viral hepatitis"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Viral Hepatitis."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/liver-disease/viral-hepatitis"
  },
  {
    "id": "liver-disease-viral-hepatitis-hepatitis-a",
    "title": "Hepatitis A",
    "category": "Liver Diseases",
    "plainLanguageSummary": "Overview of hepatitis A, an infection that causes liver inflammation and damage and typically gets better without treatment. A vaccine can prevent hepatitis A.",
    "candidatePlainLanguageTerms": [
      "hepatitis a"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Hepatitis A."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/liver-disease/viral-hepatitis/hepatitis-a"
  },
  {
    "id": "liver-disease-viral-hepatitis-hepatitis-d",
    "title": "Hepatitis D",
    "category": "Liver Diseases",
    "plainLanguageSummary": "Overview of hepatitis D, an infection that only occurs with hepatitis B and causes liver inflammation and damage. Hepatitis D can be acute or chronic.",
    "candidatePlainLanguageTerms": [
      "hepatitis d"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Hepatitis D."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/liver-disease/viral-hepatitis/hepatitis-d"
  },
  {
    "id": "liver-disease-viral-hepatitis-hepatitis-e",
    "title": "Hepatitis E",
    "category": "Liver Diseases",
    "plainLanguageSummary": "Overview of hepatitis E, an infection that causes liver inflammation and damage. Hepatitis E is typically acute and usually gets better after several weeks.",
    "candidatePlainLanguageTerms": [
      "hepatitis e"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Hepatitis E."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/liver-disease/viral-hepatitis/hepatitis-e"
  },
  {
    "id": "liver-disease-viral-hepatitis-what-is-viral-hepatitis",
    "title": "What Is Viral Hepatitis?",
    "category": "Liver Diseases",
    "plainLanguageSummary": "Researchers have discovered several viruses that cause hepatitis, including hepatitis A, B, C, D, and E. Viral hepatitis causes liver inflammation and damage.",
    "candidatePlainLanguageTerms": [
      "what is viral hepatitis?"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of What Is Viral Hepatitis?."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/liver-disease/viral-hepatitis/what-is-viral-hepatitis"
  },
  {
    "id": "urologic-diseases-cystocele",
    "title": "Cystocele",
    "category": "Urologic Diseases",
    "plainLanguageSummary": "Symptoms, causes, diagnosis, and treatment of a cystocele, a common condition that occurs when the bladder bulges or drops into the vagina.",
    "candidatePlainLanguageTerms": [
      "cystocele"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Cystocele."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/urologic-diseases/cystocele"
  },
  {
    "id": "urologic-diseases-hydronephrosis-newborns",
    "title": "Hydronephrosis in Newborns",
    "category": "Urologic Diseases",
    "plainLanguageSummary": "Overview of hydronephrosis—enlargement of the renal pelvis in the kidney—in newborns, which is often diagnosed before birth during a prenatal ultrasound.",
    "candidatePlainLanguageTerms": [
      "hydronephrosis in newborns"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Hydronephrosis in Newborns."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/urologic-diseases/hydronephrosis-newborns"
  },
  {
    "id": "urologic-diseases-hydronephrosis-newborns-vesicoureteral-reflux",
    "title": "Vesicoureteral Reflux (VUR)",
    "category": "Urologic Diseases",
    "plainLanguageSummary": "Vesicoureteral reflux (VUR) is a condition in which urine flows backward from the bladder to one or both ureters and sometimes to the kidneys.",
    "candidatePlainLanguageTerms": [
      "vesicoureteral reflux (vur)",
      "vur"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Vesicoureteral Reflux (VUR)."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/urologic-diseases/hydronephrosis-newborns/vesicoureteral-reflux"
  },
  {
    "id": "urologic-diseases-interstitial-cystitis-bladder-pain-syndrome",
    "title": "Interstitial Cystitis (Bladder Pain Syndrome)",
    "category": "Urologic Diseases",
    "plainLanguageSummary": "An overview of interstitial cystitis, also called bladder pain syndrome. Describes symptoms, causes, diagnosis, and treatment, and how diet may affect symptoms.",
    "candidatePlainLanguageTerms": [
      "interstitial cystitis (bladder pain syndrome)",
      "bladder pain syndrome"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Interstitial Cystitis (Bladder Pain Syndrome)."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/urologic-diseases/interstitial-cystitis-bladder-pain-syndrome"
  },
  {
    "id": "urologic-diseases-kegel-exercises",
    "title": "Kegel Exercises",
    "category": "Urologic Diseases",
    "plainLanguageSummary": "Learn about Kegel exercises: simple exercises you can do to treat bladder problems and improve bowel control.",
    "candidatePlainLanguageTerms": [
      "kegel exercises"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Kegel Exercises."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/urologic-diseases/kegel-exercises"
  },
  {
    "id": "urologic-diseases-kidney-stones",
    "title": "Kidney Stones",
    "category": "Urologic Diseases",
    "plainLanguageSummary": "Learn about the causes, symptoms, and diagnosis of kidney stones as well as prevention strategies and treatment options.",
    "candidatePlainLanguageTerms": [
      "kidney stones"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Kidney Stones."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/urologic-diseases/kidney-stones"
  },
  {
    "id": "urologic-diseases-kidney-stones-children",
    "title": "Kidney Stones in Children",
    "category": "Urologic Diseases",
    "plainLanguageSummary": "Learn about the causes, symptoms, and diagnosis of kidney stones in children as well as prevention strategies and treatment options.",
    "candidatePlainLanguageTerms": [
      "kidney stones in children"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Kidney Stones in Children."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/urologic-diseases/kidney-stones-children"
  },
  {
    "id": "urologic-diseases-kidney-stones-children-treatment-prevention",
    "title": "Treatment & Prevention for Kidney Stones in Children",
    "category": "Urologic Diseases",
    "plainLanguageSummary": "Learn how kidney stones in children are treated. Learn how to prevent stones by drinking enough liquid, eating differently, or taking medicines.",
    "candidatePlainLanguageTerms": [
      "treatment & prevention for kidney stones in children"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Treatment & Prevention for Kidney Stones in Children."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/urologic-diseases/kidney-stones-children/treatment-prevention"
  },
  {
    "id": "urologic-diseases-perineal-injury-males",
    "title": "Perineal Injury in Males",
    "category": "Urologic Diseases",
    "plainLanguageSummary": "Perineal injuries can lead to bladder control problems or erectile dysfunction in males. Learn about the different types of injuries and how to prevent them.",
    "candidatePlainLanguageTerms": [
      "perineal injury in males"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Perineal Injury in Males."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/urologic-diseases/perineal-injury-males"
  },
  {
    "id": "urologic-diseases-prostate-problems",
    "title": "Prostate Problems",
    "category": "Urologic Diseases",
    "plainLanguageSummary": "Explains prostate problems including prostatitis and benign prostatic hyperplasia. Reviews common tests for these conditions, as well as treatment side effects.",
    "candidatePlainLanguageTerms": [
      "prostate problems"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Prostate Problems."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/urologic-diseases/prostate-problems"
  },
  {
    "id": "urologic-diseases-prostate-problems-enlarged-prostate-benign-prostatic-hyperplasia",
    "title": "Enlarged Prostate (Benign Prostatic Hyperplasia)",
    "category": "Urologic Diseases",
    "plainLanguageSummary": "Learn about enlarged prostate, also called benign prostatic hyperplasia, including the causes, risk factors, diagnosis, and treatment options.",
    "candidatePlainLanguageTerms": [
      "enlarged prostate (benign prostatic hyperplasia)",
      "benign prostatic hyperplasia"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Enlarged Prostate (Benign Prostatic Hyperplasia)."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/urologic-diseases/prostate-problems/enlarged-prostate-benign-prostatic-hyperplasia"
  },
  {
    "id": "urologic-diseases-urinary-diversion",
    "title": "Urinary Diversion",
    "category": "Urologic Diseases",
    "plainLanguageSummary": "Urinary diversion is a surgical procedure to reroute the normal flow of urine out of the body when urine flow is blocked or needs to bypass a diseased area.",
    "candidatePlainLanguageTerms": [
      "urinary diversion"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Urinary Diversion."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/urologic-diseases/urinary-diversion"
  },
  {
    "id": "urologic-diseases-urinary-tract-how-it-works",
    "title": "The Urinary Tract & How It Works",
    "category": "Urologic Diseases",
    "plainLanguageSummary": "Describes how the urinary tract works, why it’s important, what affects the amount of urine produced, and how to keep the urinary tract healthy.",
    "candidatePlainLanguageTerms": [
      "the urinary tract & how it works"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of The Urinary Tract & How It Works."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/urologic-diseases/urinary-tract-how-it-works"
  },
  {
    "id": "urologic-diseases-urinary-tract-infections-in-children",
    "title": "Bladder Infection (Urinary Tract Infection—UTI) in Children",
    "category": "Urologic Diseases",
    "plainLanguageSummary": "An overview of bladder infection in children, which is a type of urinary tract infection. Describes symptoms, causes, diagnosis, treatment, and prevention.",
    "candidatePlainLanguageTerms": [
      "bladder infection (urinary tract infection—uti) in children",
      "urinary tract infection—uti"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Bladder Infection (Urinary Tract Infection—UTI) in Children."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/urologic-diseases/urinary-tract-infections-in-children"
  },
  {
    "id": "weight-management-adult-overweight-obesity-am-i-healthy-weight",
    "title": "Am I at a Healthy Weight?",
    "category": "Weight Management & Nutrition",
    "plainLanguageSummary": "Your body mass index (BMI) and your waist size can help tell if you have a healthy weight or are at increased risk of weight-related health problems.",
    "candidatePlainLanguageTerms": [
      "am i at a healthy weight?"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Am I at a Healthy Weight?."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/weight-management/adult-overweight-obesity/am-i-healthy-weight"
  },
  {
    "id": "weight-management-adult-overweight-obesity-eating-physical-activity",
    "title": "Eating & Physical Activity to Lose or Maintain Weight",
    "category": "Weight Management & Nutrition",
    "plainLanguageSummary": "Adopting a healthy eating plan and increasing physical activity may help you reach and maintain a healthy weight.",
    "candidatePlainLanguageTerms": [
      "eating & physical activity to lose or maintain weight"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Eating & Physical Activity to Lose or Maintain Weight."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/weight-management/adult-overweight-obesity/eating-physical-activity"
  },
  {
    "id": "weight-management-adult-overweight-obesity-factors-affecting-weight-health",
    "title": "Factors Affecting Weight & Health",
    "category": "Weight Management & Nutrition",
    "plainLanguageSummary": "Many factors can affect your weight, including your genes, eating habits, physical activity, work and family life, and community.",
    "candidatePlainLanguageTerms": [
      "factors affecting weight & health"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Factors Affecting Weight & Health."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/weight-management/adult-overweight-obesity/factors-affecting-weight-health"
  },
  {
    "id": "weight-management-adult-overweight-obesity-health-risks",
    "title": "Health Risks of Overweight & Obesity",
    "category": "Weight Management & Nutrition",
    "plainLanguageSummary": "Overweight and obesity may increase your risk for developing health problems, such as diabetes, heart disease, stroke, and certain cancers.",
    "candidatePlainLanguageTerms": [
      "health risks of overweight & obesity"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Health Risks of Overweight & Obesity."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/weight-management/adult-overweight-obesity/health-risks"
  },
  {
    "id": "weight-management-bariatric-surgery-benefits",
    "title": "Weight-loss Surgery Benefits",
    "category": "Weight Management & Nutrition",
    "plainLanguageSummary": "Learn how weight-loss surgery can help you lose weight and improve many health problems related to obesity.",
    "candidatePlainLanguageTerms": [
      "weight-loss surgery benefits"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Weight-loss Surgery Benefits."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/weight-management/bariatric-surgery/benefits"
  },
  {
    "id": "weight-management-bariatric-surgery-potential-candidates",
    "title": "Potential Candidates for Weight-loss Surgery",
    "category": "Weight Management & Nutrition",
    "plainLanguageSummary": "Learn about the criteria for weight-loss surgery for adults and teens, which are based on body mass index and health problems related to obesity.",
    "candidatePlainLanguageTerms": [
      "potential candidates for weight-loss surgery"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Potential Candidates for Weight-loss Surgery."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/weight-management/bariatric-surgery/potential-candidates"
  },
  {
    "id": "weight-management-bariatric-surgery-side-effects",
    "title": "Weight-loss Surgery Side Effects",
    "category": "Weight Management & Nutrition",
    "plainLanguageSummary": "Learn about the immediate and later-emerging side effects of weight-loss surgery and the kind of follow-up procedures that may be required.",
    "candidatePlainLanguageTerms": [
      "weight-loss surgery side effects"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Weight-loss Surgery Side Effects."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/weight-management/bariatric-surgery/side-effects"
  },
  {
    "id": "weight-management-bariatric-surgery-types",
    "title": "Types of Weight-loss Surgery",
    "category": "Weight Management & Nutrition",
    "plainLanguageSummary": "Learn about the types of weight-loss surgery most commonly performed in the United States: gastric sleeve, gastric bypass, and adjustable gastric band.",
    "candidatePlainLanguageTerms": [
      "types of weight-loss surgery"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Types of Weight-loss Surgery."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/weight-management/bariatric-surgery/types"
  },
  {
    "id": "weight-management-binge-eating-disorder",
    "title": "Binge Eating Disorder",
    "category": "Weight Management & Nutrition",
    "plainLanguageSummary": "Overview of binge eating disorder—how common it is, who is most likely to develop it, related health problems, symptoms, causes, diagnosis, and treatment.",
    "candidatePlainLanguageTerms": [
      "binge eating disorder"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Binge Eating Disorder."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/weight-management/binge-eating-disorder"
  },
  {
    "id": "weight-management-binge-eating-disorder-diagnosis-treatment",
    "title": "Diagnosis & Treatment of Binge Eating Disorder",
    "category": "Weight Management & Nutrition",
    "plainLanguageSummary": "How binge eating disorder is diagnosed and treated. A mental health professional can tell if you have the disorder and may suggest talk therapy as treatment.",
    "candidatePlainLanguageTerms": [
      "diagnosis & treatment of binge eating disorder"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Diagnosis & Treatment of Binge Eating Disorder."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/weight-management/binge-eating-disorder/diagnosis-treatment"
  },
  {
    "id": "weight-management-body-weight-planner",
    "title": "About the Body Weight Planner",
    "category": "Weight Management & Nutrition",
    "plainLanguageSummary": "Learn how to use the Body Weight Planner, which helps adults set their personal physical activity and calorie goals.",
    "candidatePlainLanguageTerms": [
      "about the body weight planner"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of About the Body Weight Planner."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/weight-management/body-weight-planner"
  },
  {
    "id": "weight-management-choosing-a-safe-successful-weight-loss-program",
    "title": "Choosing a Safe & Successful Weight-loss Program",
    "category": "Weight Management & Nutrition",
    "plainLanguageSummary": "Find tips for how to choose a safe and successful weight-loss program, including what to look for in a program and what questions to ask.",
    "candidatePlainLanguageTerms": [
      "choosing a safe & successful weight-loss program"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Choosing a Safe & Successful Weight-loss Program."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/weight-management/choosing-a-safe-successful-weight-loss-program"
  },
  {
    "id": "weight-management-healthy-eating-physical-activity-for-life",
    "title": "Healthy Eating & Physical Activity for Life",
    "category": "Weight Management & Nutrition",
    "plainLanguageSummary": "Get tips on managing your weight, eating healthier, and being physically active at every life stage: adulthood, pregnancy, parenthood, and later in life.",
    "candidatePlainLanguageTerms": [
      "healthy eating & physical activity for life"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Healthy Eating & Physical Activity for Life."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/weight-management/healthy-eating-physical-activity-for-life"
  },
  {
    "id": "weight-management-healthy-eating-physical-activity-for-life-health-tips-for-adults",
    "title": "Health Tips for Adults",
    "category": "Weight Management & Nutrition",
    "plainLanguageSummary": "Eating better and moving more can help you reach and maintain a healthy weight. Learn what you can do to stay healthy and fit.",
    "candidatePlainLanguageTerms": [
      "health tips for adults"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Health Tips for Adults."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/weight-management/healthy-eating-physical-activity-for-life/health-tips-for-adults"
  },
  {
    "id": "weight-management-healthy-eating-physical-activity-for-life-health-tips-for-older-adults",
    "title": "Health Tips for Older Adults",
    "category": "Weight Management & Nutrition",
    "plainLanguageSummary": "Eating better and moving more can help you stay healthy as you age. Learn what you can do to stay healthy and fit.",
    "candidatePlainLanguageTerms": [
      "health tips for older adults"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Health Tips for Older Adults."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/weight-management/healthy-eating-physical-activity-for-life/health-tips-for-older-adults"
  },
  {
    "id": "weight-management-healthy-eating-physical-activity-for-life-health-tips-for-pregnant-women",
    "title": "Health Tips for Pregnant Women",
    "category": "Weight Management & Nutrition",
    "plainLanguageSummary": "Learn about healthy eating and physical activity during pregnancy to gain the right amount of weight and avoid health problems for you and your baby.",
    "candidatePlainLanguageTerms": [
      "health tips for pregnant women"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Health Tips for Pregnant Women."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/weight-management/healthy-eating-physical-activity-for-life/health-tips-for-pregnant-women"
  },
  {
    "id": "weight-management-healthy-eating-physical-activity-for-life-helping-your-child-tips-for-parents",
    "title": "Helping Your Child: Tips for Parents & Other Caregivers",
    "category": "Weight Management & Nutrition",
    "plainLanguageSummary": "Learn tips on teaching children how to eat right and stay physically active for good health—including guidelines on screen time, sleep needs, and overweight.",
    "candidatePlainLanguageTerms": [
      "helping your child: tips for parents & other caregivers"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Helping Your Child: Tips for Parents & Other Caregivers."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/weight-management/healthy-eating-physical-activity-for-life/helping-your-child-tips-for-parents"
  },
  {
    "id": "weight-management-just-enough-food-portions",
    "title": "Food Portions: Choosing Just Enough for You",
    "category": "Weight Management & Nutrition",
    "plainLanguageSummary": "For a healthy weight, learn to read a Nutrition Facts label, understand how portions and servings differ, and choose the right amount of food for you.",
    "candidatePlainLanguageTerms": [
      "food portions: choosing just enough for you"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Food Portions: Choosing Just Enough for You."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/weight-management/just-enough-food-portions"
  },
  {
    "id": "weight-management-keep-active-eat-healthy-feel-great",
    "title": "Keep Active & Eat Healthy to Improve Well-being & Feel Great",
    "category": "Weight Management & Nutrition",
    "plainLanguageSummary": "Moving more and eating better can help you improve your health and keep up with the demands of your busy life. Find out what you can do to get fit and healthy.",
    "candidatePlainLanguageTerms": [
      "keep active & eat healthy to improve well-being & feel great"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Keep Active & Eat Healthy to Improve Well-being & Feel Great."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/weight-management/keep-active-eat-healthy-feel-great"
  },
  {
    "id": "weight-management-myths-nutrition-physical-activity",
    "title": "Some Myths about Nutrition & Physical Activity",
    "category": "Weight Management & Nutrition",
    "plainLanguageSummary": "Separating weight-loss myths from facts can help you make healthy changes in your eating and physical activity habits. Get the facts about healthy weight loss.",
    "candidatePlainLanguageTerms": [
      "some myths about nutrition & physical activity"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Some Myths about Nutrition & Physical Activity."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/weight-management/myths-nutrition-physical-activity"
  },
  {
    "id": "weight-management-prescription-medications-treat-overweight-obesity",
    "title": "Prescription Medications to Treat Overweight & Obesity",
    "category": "Weight Management & Nutrition",
    "plainLanguageSummary": "Learn which prescription weight-control medications are—and aren&#39;t—safe and effective, how they work, and their common side effects.",
    "candidatePlainLanguageTerms": [
      "prescription medications to treat overweight & obesity"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Prescription Medications to Treat Overweight & Obesity."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/weight-management/prescription-medications-treat-overweight-obesity"
  },
  {
    "id": "weight-management-staying-active-at-any-size",
    "title": "Staying Active at Any Size",
    "category": "Weight Management & Nutrition",
    "plainLanguageSummary": "Physical activity may seem hard if you are overweight or have obesity. The good news is that you can be active at any size—and have fun and feel good at the same time.",
    "candidatePlainLanguageTerms": [
      "staying active at any size"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Staying Active at Any Size."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/weight-management/staying-active-at-any-size"
  },
  {
    "id": "weight-management-take-charge-health-guide-teenagers",
    "title": "Take Charge of Your Health: A Guide for Teenagers",
    "category": "Weight Management & Nutrition",
    "plainLanguageSummary": "Provides small, achievable steps to help teenagers make healthier food choices, be more active, and get enough sleep.",
    "candidatePlainLanguageTerms": [
      "take charge of your health: a guide for teenagers"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Take Charge of Your Health: A Guide for Teenagers."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/weight-management/take-charge-health-guide-teenagers"
  },
  {
    "id": "weight-management-tips-get-active",
    "title": "Tips to Help You Get Active",
    "category": "Weight Management & Nutrition",
    "plainLanguageSummary": "Learn about the health benefits of physical activity with this detailed guide on how to get active and stay active.",
    "candidatePlainLanguageTerms": [
      "tips to help you get active"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Tips to Help You Get Active."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/weight-management/tips-get-active"
  },
  {
    "id": "weight-management-tips-get-active-benefits-physical-activity",
    "title": "Benefits of Physical Activity",
    "category": "Weight Management & Nutrition",
    "plainLanguageSummary": "Learn how physical activity can improve your quality of life, health, and mood, and help you manage your weight and prevent weight-related health problems.",
    "candidatePlainLanguageTerms": [
      "benefits of physical activity"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Benefits of Physical Activity."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/weight-management/tips-get-active/benefits-physical-activity"
  },
  {
    "id": "weight-management-tips-get-active-tips-keep-moving",
    "title": "Tips to Keep Moving",
    "category": "Weight Management & Nutrition",
    "plainLanguageSummary": "Learn how to track and maintain your physical activity goals—including tips to start slowly, stay motivated, and plan ahead to overcome setbacks.",
    "candidatePlainLanguageTerms": [
      "tips to keep moving"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Tips to Keep Moving."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/weight-management/tips-get-active/tips-keep-moving"
  },
  {
    "id": "weight-management-tips-get-active-tips-starting-physical-activity",
    "title": "Tips for Starting Physical Activity",
    "category": "Weight Management & Nutrition",
    "plainLanguageSummary": "Learn how much and what kind of physical activity you need. You can become active—pick an aerobic and a strengthening activity, and set and keep your goals.",
    "candidatePlainLanguageTerms": [
      "tips for starting physical activity"
    ],
    "symptoms": [
      "Refer to the official NIDDK clinical guide for complete diagnostic signs and symptoms of Tips for Starting Physical Activity."
    ],
    "causesAndRiskFactors": [
      "Risk factors and causes documented by NIH NIDDK clinical investigators."
    ],
    "complications": [
      "Potential health complications and outcomes documented in the NIDDK health guide."
    ],
    "clinicalContextNotice": "The clinical content must still be checked for the intended population, context and use.",
    "officialUrl": "https://www.niddk.nih.gov/health-information/weight-management/tips-get-active/tips-starting-physical-activity"
  }
];

export const NIDDK_LICENSING_METADATA = {
  organization: 'National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK)',
  parentAgency: 'National Institutes of Health (NIH), U.S. Department of Health and Human Services',
  domain: 'Public Health Information & Clinical Research',
  clinicalGovernanceNotice:
    'NIDDK health information is produced by the National Institutes of Health. It is reviewed by doctors and is informed by NIDDK research. The content must still be checked for the intended population, context and use.',
  officialPortal: 'https://www.niddk.nih.gov/health-information',
  usageGuidelines:
    'Health information content produced by NIDDK is in the public domain and may be reproduced without copyright permission, provided that appropriate attribution is given.',
};
