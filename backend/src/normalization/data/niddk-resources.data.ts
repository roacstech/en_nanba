/**
 * NIDDK & Authoritative Disease Resources
 * Sourced from the National Institute of Diabetes and Digestive and Kidney Diseases (NIH NIDDK)
 * Official portal: https://www.niddk.nih.gov/health-information
 *
 * Focus: Patient-oriented disease explanations, plain-language expressions,
 * symptoms, causes, and complications.
 */

export interface NiddkDiseaseResource {
  id: string;
  title: string;
  category: 'Diabetes & Endocrine' | 'Digestive Diseases' | 'Kidney Diseases' | 'Liver Diseases';
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
  // =========================================================================
  // 1. DIABETES & ENDOCRINE
  // =========================================================================
  {
    id: 'type-2-diabetes',
    title: 'Type 2 Diabetes',
    category: 'Diabetes & Endocrine',
    plainLanguageSummary: 'A condition where your body either cannot produce enough insulin or cannot effectively use the insulin it makes, causing blood glucose (sugar) levels to become too high.',
    candidatePlainLanguageTerms: ['adult-onset diabetes', 'high blood sugar', 'insulin resistance', 'sugar problem'],
    symptoms: [
      'Increased thirst and dry mouth',
      'Frequent urination, especially at night',
      'Unusual fatigue and lack of energy',
      'Blurry vision',
      'Cuts or sores that take a long time to heal',
      'Tingling, pain, or numbness in the hands or feet'
    ],
    causesAndRiskFactors: [
      'Insulin resistance where cells do not respond normally to insulin',
      'Overweight, obesity, or physical inactivity',
      'Family history and genetic predisposition',
      'Age 45 or older, or history of gestational diabetes'
    ],
    complications: [
      'Cardiovascular diseases including heart attacks and stroke',
      'Chronic kidney disease and kidney failure (diabetic nephropathy)',
      'Eye damage and vision loss (diabetic retinopathy)',
      'Nerve damage leading to foot ulcers and amputation risk'
    ],
    clinicalContextNotice: 'The clinical content must still be checked for the intended population, context and use.',
    officialUrl: 'https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes/type-2-diabetes',
    relatedIcd11Code: '5A11',
    relatedSnomedId: '44054006'
  },
  {
    id: 'type-1-diabetes',
    title: 'Type 1 Diabetes',
    category: 'Diabetes & Endocrine',
    plainLanguageSummary: 'A chronic autoimmune disease where the immune system mistakenly attacks and destroys the insulin-making beta cells in the pancreas, requiring daily insulin therapy to survive.',
    candidatePlainLanguageTerms: ['juvenile diabetes', 'insulin-dependent diabetes', 'autoimmune diabetes'],
    symptoms: [
      'Heavy thirst and extreme hunger even while eating',
      'Frequent urination and bedwetting in children who previously stayed dry',
      'Rapid, unintended weight loss',
      'Extreme fatigue and weakness',
      'Fruity-smelling breath (sign of diabetic ketoacidosis)',
      'Nausea, stomach pain, and vomiting'
    ],
    causesAndRiskFactors: [
      'Autoimmune destruction of pancreatic beta cells',
      'Inherited genetic susceptibility factors',
      'Potential environmental triggers such as certain viral infections'
    ],
    complications: [
      'Diabetic ketoacidosis (DKA) – a life-threatening acute emergency',
      'Severe hypoglycemia (dangerously low blood sugar episodes)',
      'Long-term microvascular and macrovascular damage to heart, kidneys, and eyes'
    ],
    clinicalContextNotice: 'The clinical content must still be checked for the intended population, context and use.',
    officialUrl: 'https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes/type-1-diabetes',
    relatedIcd11Code: '5A10',
    relatedSnomedId: '46635009'
  },
  {
    id: 'prediabetes',
    title: 'Prediabetes & Insulin Resistance',
    category: 'Diabetes & Endocrine',
    plainLanguageSummary: 'A condition where blood sugar levels are higher than normal, but not yet high enough to be diagnosed as type 2 diabetes. Often reversible with lifestyle changes.',
    candidatePlainLanguageTerms: ['borderline diabetes', 'impaired glucose tolerance', 'elevated fasting blood sugar'],
    symptoms: [
      'Usually silent with no obvious symptoms in the early stages',
      'Darkened areas of skin around the neck, armpits, or groin (acanthosis nigricans)',
      'Mild fatigue after carbohydrate-heavy meals'
    ],
    causesAndRiskFactors: [
      'Body tissues becoming resistant to the effects of insulin',
      'Excess body weight, especially around the abdomen',
      'Sedentary lifestyle with minimal aerobic physical activity',
      'Age 45 or older and history of high blood pressure'
    ],
    complications: [
      'Progression to full type 2 diabetes within 5 to 10 years if untreated',
      'Increased baseline risk of heart disease and stroke'
    ],
    clinicalContextNotice: 'The clinical content must still be checked for the intended population, context and use.',
    officialUrl: 'https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes/prediabetes-insulin-resistance',
    relatedIcd11Code: '5A43',
    relatedSnomedId: '714628002'
  },
  {
    id: 'gestational-diabetes',
    title: 'Gestational Diabetes',
    category: 'Diabetes & Endocrine',
    plainLanguageSummary: 'A type of diabetes that develops during pregnancy in women who did not previously have diabetes, caused by pregnancy hormones interfering with insulin action.',
    candidatePlainLanguageTerms: ['pregnancy diabetes', 'maternal high blood sugar'],
    symptoms: [
      'Often causes no noticeable symptoms',
      'Mildly increased thirst and urination beyond normal pregnancy changes',
      'Mild fatigue'
    ],
    causesAndRiskFactors: [
      'Hormones made by the placenta making maternal cells more resistant to insulin',
      'Excess weight prior to pregnancy',
      'Family history of type 2 diabetes or previous gestational diabetes'
    ],
    complications: [
      'High birth weight (macrosomia) leading to difficult delivery or C-section',
      'Pre-eclampsia (dangerously high blood pressure during pregnancy)',
      'Increased risk for mother and child developing type 2 diabetes later in life'
    ],
    clinicalContextNotice: 'The clinical content must still be checked for the intended population, context and use.',
    officialUrl: 'https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes/gestational-diabetes',
    relatedIcd11Code: 'JA62',
    relatedSnomedId: '11687002'
  },

  // =========================================================================
  // 2. DIGESTIVE DISEASES
  // =========================================================================
  {
    id: 'gerd-acid-reflux',
    title: 'GERD (Gastroesophageal Reflux Disease)',
    category: 'Digestive Diseases',
    plainLanguageSummary: 'A chronic digestive condition where stomach acid and contents repeatedly flow back up into the food pipe (esophagus), irritating its lining and causing persistent heartburn.',
    candidatePlainLanguageTerms: ['acid reflux', 'chronic heartburn', 'acid indigestion', 'sour stomach'],
    symptoms: [
      'A burning sensation in the chest (heartburn), typically after eating or at night',
      'Backwash (regurgitation) of food or sour liquid into the throat or mouth',
      'Chest pain or discomfort behind the breastbone',
      'Difficulty swallowing (dysphagia)',
      'Chronic dry cough or hoarseness in the morning'
    ],
    causesAndRiskFactors: [
      'Weakness or inappropriate relaxation of the lower esophageal sphincter (LES)',
      'Hiatal hernia, where part of the stomach pushes up through the diaphragm',
      'Obesity, pregnancy, smoking, or eating large fatty meals before lying down'
    ],
    complications: [
      'Esophagitis (inflammation and erosion of the esophageal lining)',
      'Esophageal stricture (narrowing of the esophagus making swallowing difficult)',
      'Barrett’s esophagus (precancerous cellular changes in the esophagus)'
    ],
    clinicalContextNotice: 'The clinical content must still be checked for the intended population, context and use.',
    officialUrl: 'https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-adults',
    relatedIcd11Code: 'DA22',
    relatedSnomedId: '235595009'
  },
  {
    id: 'celiac-disease',
    title: 'Celiac Disease',
    category: 'Digestive Diseases',
    plainLanguageSummary: 'A chronic digestive and autoimmune disorder where eating gluten—a protein found in wheat, barley, and rye—triggers an immune response that damages the small intestine lining.',
    candidatePlainLanguageTerms: ['gluten intolerance', 'celiac sprue', 'gluten-sensitive enteropathy'],
    symptoms: [
      'Chronic diarrhea or loose, pale, foul-smelling stools',
      'Abdominal pain, bloating, and gas',
      'Unexplained weight loss and failure to thrive in children',
      'Fatigue and iron-deficiency anemia',
      'Itchy, blistering skin rash (dermatitis herpetiformis)'
    ],
    causesAndRiskFactors: [
      'Genetic factors (HLA-DQ2 and HLA-DQ8 genes)',
      'Consumption of dietary gluten triggering an abnormal immune response',
      'First-degree relative with celiac disease'
    ],
    complications: [
      'Malnutrition and impaired nutrient absorption',
      'Early-onset osteoporosis and bone thinning due to calcium malabsorption',
      'Increased risk of developing other autoimmune disorders or intestinal lymphoma'
    ],
    clinicalContextNotice: 'The clinical content must still be checked for the intended population, context and use.',
    officialUrl: 'https://www.niddk.nih.gov/health-information/digestive-diseases/celiac-disease',
    relatedIcd11Code: 'DA96.0',
    relatedSnomedId: '396331005'
  },
  {
    id: 'crohns-disease',
    title: "Crohn's Disease",
    category: 'Digestive Diseases',
    plainLanguageSummary: 'A chronic inflammatory bowel disease (IBD) that causes inflammation of the digestive tract, which can lead to abdominal pain, severe diarrhea, fatigue, and weight loss.',
    candidatePlainLanguageTerms: ['inflammatory bowel disease', 'digestive tract inflammation', 'chronic gut inflammation'],
    symptoms: [
      'Persistent diarrhea, sometimes containing blood or mucus',
      'Abdominal cramping and pain, especially in the lower right abdomen',
      'Fever, extreme fatigue, and decreased appetite',
      'Unintended weight loss and malnutrition',
      'Anal fissures or fistulas around the rectal area'
    ],
    causesAndRiskFactors: [
      'Malfunctioning immune system attacking healthy cells in the digestive tract',
      'Hereditary and genetic susceptibility',
      'Environmental triggers and smoking'
    ],
    complications: [
      'Bowel obstruction caused by chronic swelling and scar tissue',
      'Ulcers and fistulas connecting different parts of the bowel or skin',
      'Malnutrition and increased risk of colorectal cancer'
    ],
    clinicalContextNotice: 'The clinical content must still be checked for the intended population, context and use.',
    officialUrl: 'https://www.niddk.nih.gov/health-information/digestive-diseases/crohns-disease',
    relatedIcd11Code: 'DD70',
    relatedSnomedId: '34000006'
  },
  {
    id: 'gallstones',
    title: 'Gallstones (Cholelithiasis)',
    category: 'Digestive Diseases',
    plainLanguageSummary: 'Hardened deposits of digestive fluid (such as cholesterol or bilirubin) that can form in the gallbladder and block bile ducts, causing sudden intense abdominal pain.',
    candidatePlainLanguageTerms: ['gallbladder stones', 'gallbladder attack', 'biliary colic'],
    symptoms: [
      'Sudden, rapidly intensifying pain in the upper right or center of the abdomen',
      'Pain spreading to the right shoulder or back between shoulder blades',
      'Nausea and vomiting following a fatty meal',
      'Yellowing of the skin and whites of the eyes (jaundice) if bile duct is blocked'
    ],
    causesAndRiskFactors: [
      'Bile containing too much cholesterol or too much bilirubin',
      'Gallbladder not emptying completely or often enough',
      'Risk factors: Female sex, age 40 or older, obesity, rapid weight loss'
    ],
    complications: [
      'Cholecystitis (acute inflammation of the gallbladder requiring surgery)',
      'Blockage of the common bile duct causing jaundice or cholangitis',
      'Gallstone pancreatitis (blockage of the pancreatic duct)'
    ],
    clinicalContextNotice: 'The clinical content must still be checked for the intended population, context and use.',
    officialUrl: 'https://www.niddk.nih.gov/health-information/digestive-diseases/gallstones',
    relatedIcd11Code: 'DC11',
    relatedSnomedId: '235919008'
  },

  // =========================================================================
  // 3. KIDNEY DISEASES
  // =========================================================================
  {
    id: 'chronic-kidney-disease',
    title: 'Chronic Kidney Disease (CKD)',
    category: 'Kidney Diseases',
    plainLanguageSummary: 'A long-term condition where the kidneys are damaged and gradually lose their ability to filter extra fluids and waste products from the blood over time.',
    candidatePlainLanguageTerms: ['kidney damage', 'reduced kidney function', 'failing kidneys'],
    symptoms: [
      'Often asymptomatic in early stages',
      'Swelling (edema) in the feet, ankles, legs, or face due to fluid retention',
      'Feeling more tired, having less energy, and trouble concentrating',
      'Changes in urination (urinating more or less often, foamy or bubbly urine)',
      'Persistent itchy, dry skin and muscle cramps at night'
    ],
    causesAndRiskFactors: [
      'Diabetes (high blood sugar damaging delicate kidney filtering units)',
      'High blood pressure (hypertension exerting stress on kidney blood vessels)',
      'Glomerulonephritis (inflammation of the kidney filtering units)',
      'Polycystic kidney disease and long-term use of certain pain medications (NSAIDs)'
    ],
    complications: [
      'End-stage renal disease (kidney failure) requiring dialysis or kidney transplant',
      'Severe high blood pressure, fluid overload, and pulmonary edema',
      'Anemia (due to reduced production of erythropoietin)',
      'Bone disease and high blood potassium levels (hyperkalemia)'
    ],
    clinicalContextNotice: 'The clinical content must still be checked for the intended population, context and use.',
    officialUrl: 'https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd',
    relatedIcd11Code: 'GB61',
    relatedSnomedId: '709044004'
  },
  {
    id: 'kidney-stones',
    title: 'Kidney Stones (Nephrolithiasis)',
    category: 'Kidney Diseases',
    plainLanguageSummary: 'Solid mineral and salt crystals that form inside the kidneys when urine becomes too concentrated, causing severe sharp pain as they travel down the urinary tract.',
    candidatePlainLanguageTerms: ['renal stones', 'urinary stones', 'kidney stone attack'],
    symptoms: [
      'Severe, sharp pain in the side and back, below the ribs',
      'Pain that radiates to the lower abdomen and groin area',
      'Pain that comes in waves and fluctuates in intensity',
      'Pink, red, or brown blood in the urine (hematuria)',
      'Burning sensation or pain while urinating, and feeling an urgent need to urinate'
    ],
    causesAndRiskFactors: [
      'Not drinking enough water (chronic dehydration)',
      'Diets high in protein, sodium (salt), and sugar/oxalate',
      'Family history or personal history of kidney stones',
      'Certain medical conditions like hyperparathyroidism or gout'
    ],
    complications: [
      'Urinary tract obstruction causing kidney swelling (hydronephrosis)',
      'Urinary tract infection and permanent kidney tissue damage if untreated'
    ],
    clinicalContextNotice: 'The clinical content must still be checked for the intended population, context and use.',
    officialUrl: 'https://www.niddk.nih.gov/health-information/urologic-diseases/kidney-stones',
    relatedIcd11Code: 'GB70',
    relatedSnomedId: '95570007'
  },
  {
    id: 'polycystic-kidney-disease',
    title: 'Polycystic Kidney Disease (PKD)',
    category: 'Kidney Diseases',
    plainLanguageSummary: 'An inherited genetic disorder that causes numerous fluid-filled sacs (cysts) to grow primarily in the kidneys, leading to kidney enlargement and gradual loss of function.',
    candidatePlainLanguageTerms: ['cystic kidney disease', 'inherited kidney cysts'],
    symptoms: [
      'High blood pressure (often the earliest sign)',
      'Back or side pain between the ribs and hips',
      'Enlarged abdominal size or a feeling of fullness in the abdomen',
      'Blood in the urine',
      'Frequent kidney or bladder infections'
    ],
    causesAndRiskFactors: [
      'Genetic mutations (Autosomal dominant PKD or Autosomal recessive PKD)',
      'Inherited from one or both parents with the gene mutation'
    ],
    complications: [
      'Progressive chronic kidney disease leading to kidney failure',
      'Aneurysms in blood vessels in the brain (intracranial aneurysms)',
      'Heart valve abnormalities (such as mitral valve prolapse)',
      'Cysts developing in the liver and pancreas'
    ],
    clinicalContextNotice: 'The clinical content must still be checked for the intended population, context and use.',
    officialUrl: 'https://www.niddk.nih.gov/health-information/kidney-disease/polycystic-kidney-disease',
    relatedIcd11Code: 'GB54.0',
    relatedSnomedId: '82525005'
  },

  // =========================================================================
  // 4. LIVER DISEASES
  // =========================================================================
  {
    id: 'fatty-liver-disease',
    title: 'Nonalcoholic Fatty Liver Disease (MASLD / NAFLD)',
    category: 'Liver Diseases',
    plainLanguageSummary: 'A condition in which excess fat builds up in liver cells in people who drink little or no alcohol. It can progress to liver inflammation, scarring, and cirrhosis.',
    candidatePlainLanguageTerms: ['fatty liver', 'liver fat buildup', 'metabolic liver disease', 'NASH / MASH'],
    symptoms: [
      'Usually a silent disease with few or no obvious symptoms early on',
      'Persistent tiredness and fatigue',
      'Mild pain or fullness in the upper right side of the belly'
    ],
    causesAndRiskFactors: [
      'Overweight or obesity, especially excess abdominal fat',
      'Type 2 diabetes or insulin resistance',
      'Metabolic syndrome with high triglycerides or abnormal cholesterol levels',
      'High blood pressure'
    ],
    complications: [
      'Metabolic dysfunction-associated steatohepatitis (MASH) with inflammation',
      'Liver fibrosis and irreversible cirrhosis (advanced liver scarring)',
      'Liver failure and increased risk of primary liver cancer (hepatocellular carcinoma)'
    ],
    clinicalContextNotice: 'The clinical content must still be checked for the intended population, context and use.',
    officialUrl: 'https://www.niddk.nih.gov/health-information/liver-disease/nafld-nash',
    relatedIcd11Code: 'DB92',
    relatedSnomedId: '442091002'
  },
  {
    id: 'cirrhosis',
    title: 'Cirrhosis of the Liver',
    category: 'Liver Diseases',
    plainLanguageSummary: 'An advanced stage of liver disease where healthy liver tissue is gradually replaced with permanent scar tissue, severely impairing the liver’s ability to function.',
    candidatePlainLanguageTerms: ['liver scarring', 'end-stage liver disease', 'hardened liver'],
    symptoms: [
      'Fatigue, weakness, and loss of appetite with weight loss',
      'Yellowing of the skin and whites of the eyes (jaundice)',
      'Swelling in the legs, ankles, or feet (edema) and fluid in the abdomen (ascites)',
      'Severe itchy skin without a visible rash',
      'Easy bruising and bleeding, and spider-like blood vessels on the skin',
      'Confusion, memory loss, or drowsiness (hepatic encephalopathy)'
    ],
    causesAndRiskFactors: [
      'Long-term chronic alcohol misuse',
      'Chronic viral hepatitis (Hepatitis B or Hepatitis C)',
      'Longstanding fatty liver disease (MASH / NASH)',
      'Autoimmune hepatitis or genetic liver conditions (hemochromatosis, Wilson disease)'
    ],
    complications: [
      'Portal hypertension (high blood pressure in the vein feeding the liver)',
      'Bleeding from swollen veins in the esophagus (esophageal varices)',
      'Severe abdominal fluid infection (spontaneous bacterial peritonitis)',
      'Liver cancer and complete liver failure requiring transplantation'
    ],
    clinicalContextNotice: 'The clinical content must still be checked for the intended population, context and use.',
    officialUrl: 'https://www.niddk.nih.gov/health-information/liver-disease/cirrhosis',
    relatedIcd11Code: 'DB93',
    relatedSnomedId: '19943007'
  }
];

export const NIDDK_LICENSING_METADATA = {
  organization: 'National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK)',
  parentAgency: 'National Institutes of Health (NIH), U.S. Department of Health and Human Services',
  domain: 'Patient-oriented disease explanations, candidate plain-language expressions, symptoms, causes, and complications.',
  clinicalGovernanceNotice: 'The clinical content must still be checked for the intended population, context and use.',
  officialPortal: 'https://www.niddk.nih.gov/health-information',
  usageGuidelines: 'Content is authoritative, evidence-based health information designed to help clinicians and patients communicate effectively using plain-language concepts without replacing professional clinical judgment.'
};
