/**
 * OPENSTAX ANATOMY AND PHYSIOLOGY 2E
 * Educational Scoping & Licensing Governance Directory
 * Published by OpenStax (Rice University) - https://openstax.org
 *
 * GOVERNANCE POLICY & INTELLECTUAL PROPERTY NOTICE:
 * OpenStax Anatomy and Physiology 2e material is published under a Creative Commons
 * Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) licence.
 * OpenStax terms specify that this material may NOT be ingested into generative AI
 * or used to train large language models without express permission.
 *
 * In compliance with commercial intellectual property requirements, En Nanba restricts
 * this resource to human clinical scoping and educational reference ONLY; it is
 * explicitly EXCLUDED from automated LLM training and generative model ingestion.
 */

export interface OpenStaxAnatomyEntry {
  systemCode: string;
  systemName: string;
  openStaxChapters: string;
  educationalScope: string;
  coreStructures: string[];
  keyPhysiologicalMechanisms: string[];
  clinicalRelevance: string;
  licenseType: 'CC BY-NC-SA 4.0';
  aiIngestionStatus: 'RESTRICTED / NO AI TRAINING';
  commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE';
  governanceNotice: string;
  officialBookUrl: string;
  officialLicenseUrl: string;
}

export interface OpenStaxLicensingMetadata {
  publisher: string;
  institution: string;
  bookTitle: string;
  edition: string;
  licenseType: string;
  licenseDescription: string;
  aiIngestionAllowed: boolean;
  commercialTrainingAllowed: boolean;
  clientDirective: string;
  officialBookUrl: string;
  officialLicenseUrl: string;
}

export const OPENSTAX_LICENSING_METADATA: OpenStaxLicensingMetadata = {
  publisher: 'OpenStax',
  institution: 'Rice University',
  bookTitle: 'Anatomy and Physiology',
  edition: '2nd Edition (2e)',
  licenseType: 'Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)',
  licenseDescription:
    'Requires attribution, prohibits commercial use without authorization, and mandates ShareAlike terms for derivative adaptations.',
  aiIngestionAllowed: false,
  commercialTrainingAllowed: false,
  clientDirective:
    'OpenStax Anatomy and Physiology can be useful as a learning and scoping reference. However, its Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
  officialBookUrl: 'https://openstax.org/details/books/anatomy-and-physiology-2e',
  officialLicenseUrl: 'https://openstax.org/license',
};

export const OPENSTAX_ANATOMY_DATA: OpenStaxAnatomyEntry[] = [
  {
    systemCode: 'CARDIO',
    systemName: 'Cardiovascular System',
    openStaxChapters: 'Chapters 18, 19 & 20: Blood, The Heart, and Blood Vessels',
    educationalScope:
      'Covers cardiac anatomy (atria, ventricles, pericardium, valves), electrical conduction system (SA node, AV node, Purkinje fibers), cardiac cycle hemodynamics, systemic and pulmonary vascular resistance, capillary exchange, and blood pressure autoregulation.',
    coreStructures: [
      'Myocardium & Endocardium',
      'Atrioventricular & Semilunar Valves',
      'Sinoatrial (SA) & Atrioventricular (AV) Nodes',
      'Coronary Arteries & Cardiac Veins',
      'Systemic Arteries, Arterioles & Capillaries',
    ],
    keyPhysiologicalMechanisms: [
      'Cardiac electrophysiology & Action potential generation',
      'Frank-Starling law of the heart (preload / afterload)',
      'Cardiac output (Stroke volume × Heart rate)',
      'Baroreceptor reflex and renin-angiotensin-aldosterone vascular control',
    ],
    clinicalRelevance:
      'Provides physiological grounding for interpreting electrocardiograms (ECG), hypertension staging, congestive heart failure fluid mechanics, and coronary ischemic injury.',
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/19-introduction',
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: 'ENDO',
    systemName: 'Endocrine System',
    openStaxChapters: 'Chapter 17: The Endocrine System',
    educationalScope:
      'Analyzes hypothalamic-pituitary neuroendocrine axes, hormone classifications (lipid-derived vs amino acid-derived), receptor signaling cascades, feedback loops (thyroid, adrenal, pancreatic islets), and systemic glucose homeostasis.',
    coreStructures: [
      'Hypothalamus & Pituitary Gland (Adeno & Neurohypophysis)',
      'Thyroid & Parathyroid Glands',
      'Adrenal Cortex & Adrenal Medulla',
      'Endocrine Pancreas (Islets of Langerhans: Alpha & Beta cells)',
      'Target Tissue Hormone Receptors',
    ],
    keyPhysiologicalMechanisms: [
      'Negative and positive endocrine feedback loops',
      'Insulin synthesis, GLUT4 translocation, and cellular glucose uptake',
      'Glucagon counter-regulatory glycogenolysis & gluconeogenesis',
      'Hypothalamic-Pituitary-Adrenal (HPA) stress response',
    ],
    clinicalRelevance:
      'Fundamental reference for understanding diabetes mellitus pathophysiology, autoimmune thyroiditis, Cushing syndrome, and hormone replacement monitoring.',
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/17-introduction',
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: 'RENAL',
    systemName: 'Urinary & Renal System',
    openStaxChapters: 'Chapters 25 & 26: The Urinary System and Fluid, Electrolyte & Acid-Base Balance',
    educationalScope:
      'Details macroscopic renal architecture (cortex, medulla, renal pelvis), microscopic nephron structure (glomerulus, Bowman capsule, proximal/distal convoluted tubules, loop of Henle, collecting duct), glomerular filtration dynamics, tubular reabsorption/secretion, and micturition reflexes.',
    coreStructures: [
      'Renal Cortex, Medullary Pyramids & Calyces',
      'Glomerular Filtration Barrier (Endothelium, Basement Membrane, Podocytes)',
      'Proximal Convoluted Tubule & Loop of Henle',
      'Distal Convoluted Tubule & Collecting Ducts',
      'Juxtaglomerular Apparatus (JGA)',
    ],
    keyPhysiologicalMechanisms: [
      'Glomerular filtration rate (GFR) hydrostatic and oncotic Starling forces',
      'Countercurrent multiplier mechanism for urinary concentration',
      'Tubuloglomerular feedback and renin secretion',
      'Aldosterone-mediated sodium/potassium exchange and ADH aquaporin insertion',
    ],
    clinicalRelevance:
      'Underpins clinical interpretation of serum creatinine, eGFR staging, proteinuria/albuminuria biomarkers, and acute tubular necrosis.',
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/25-introduction',
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: 'RESP',
    systemName: 'Respiratory System',
    openStaxChapters: 'Chapter 22: The Respiratory System',
    educationalScope:
      'Outlines conducting and respiratory zones (nasal cavity, pharynx, larynx, trachea, bronchial tree, alveolar sacs), mechanics of pulmonary ventilation (Boyle law, diaphragm, intercostal muscles), alveolar-capillary gas diffusion, and neural chemical control of respiration.',
    coreStructures: [
      'Larynx, Trachea & Primary/Secondary Bronchi',
      'Bronchioles & Terminal Bronchioles',
      'Alveoli & Alveolar-Capillary Membrane (Type I & II Pneumocytes)',
      'Diaphragm & External/Internal Intercostals',
      'Medullary & Pontine Respiratory Centers',
    ],
    keyPhysiologicalMechanisms: [
      'Intrapulmonary and intrapleural pressure dynamics',
      'Pulmonary surfactant surface tension reduction (Type II pneumocytes)',
      'Oxygen-hemoglobin dissociation curve (Bohr effect)',
      'Central and peripheral chemoreceptor hypercapnic drive',
    ],
    clinicalRelevance:
      'Essential for understanding spirometry lung volumes, obstructive airway disease (asthma, COPD), arterial blood gas (ABG) interpretations, and acute respiratory distress syndrome.',
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/22-introduction',
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: 'NEURO',
    systemName: 'Nervous System & Neural Integration',
    openStaxChapters: 'Chapters 12, 13, 14 & 15: Nervous Tissue, Brain, Spinal Cord, ANS, and Special Senses',
    educationalScope:
      'Comprehensive study of central (cerebrum, cerebellum, brainstem, spinal cord) and peripheral nervous systems, somatic vs autonomic divisions, action potential neurochemistry (sodium/potassium voltage gates), synaptic neurotransmission, and sensory perception.',
    coreStructures: [
      'Neurons (Dendrites, Axon, Myelin Sheath) & Neuroglia',
      'Cerebral Cortex, Basal Nuclei, Thalamus & Hypothalamus',
      'Brainstem (Midbrain, Pons, Medulla Oblongata)',
      'Spinal Cord Tracts & Spinal Nerves',
      'Autonomic Sympathetic & Parasympathetic Ganglia',
    ],
    keyPhysiologicalMechanisms: [
      'Resting membrane potential and saltatory conduction',
      'Neurotransmitter release, synaptic cleft kinetics, and post-synaptic potentials',
      'Reflex arcs and autonomic sympathetic fight-or-flight versus parasympathetic rest-and-digest',
      'Blood-brain barrier selective endothelial transport',
    ],
    clinicalRelevance:
      'Guides localization of neurological deficits, cerebrovascular accidents (stroke), peripheral neuropathies, autonomic dysregulation, and neuropharmacology.',
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/12-introduction',
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: 'DIGEST',
    systemName: 'Digestive System & Metabolism',
    openStaxChapters: 'Chapters 23 & 24: The Digestive System and Metabolism & Nutrition',
    educationalScope:
      'Examines gastrointestinal tract anatomy (esophagus, stomach, small intestine, large intestine), accessory digestive organs (liver, gallbladder, exocrine pancreas), mechanical/chemical digestion, nutrient absorption, biliary excretion, and cellular cellular bioenergetics (glycolysis, Krebs cycle).',
    coreStructures: [
      'Esophagus, Gastric Mucosa & Chief/Parietal Cells',
      'Duodenum, Jejunum, Ileum & Microvilli Brush Border',
      'Hepatic Lobules, Kupffer Cells & Portal Triad',
      'Gallbladder & Biliary Duct System',
      'Exocrine Pancreatic Acini & Pancreatic Duct',
    ],
    keyPhysiologicalMechanisms: [
      'Gastric acid (HCl) secretion and mucosal barrier protection',
      'Enzymatic macromolecule hydrolysis (amylases, proteases, lipases)',
      'Enterohepatic circulation of bile salts',
      'Hepatic first-pass metabolism and glycogen storage',
    ],
    clinicalRelevance:
      'Informs clinical reasoning around gastroesophageal reflux disease (GERD), peptic ulcer disease, malabsorption syndromes, acute pancreatitis, and cirrhosis.',
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/23-introduction',
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: 'IMMUNE',
    systemName: 'Lymphatic & Immune System',
    openStaxChapters: 'Chapter 21: The Lymphatic and Immune System',
    educationalScope:
      'Structural review of primary (bone marrow, thymus) and secondary lymphoid tissues (spleen, lymph nodes, MALT), lymphatic fluid circulation, innate barrier and cellular defenses (phagocytes, NK cells, complement), and adaptive cell-mediated (T cells) and humoral (B cells, immunoglobulins) immunity.',
    coreStructures: [
      'Lymphatic Vessels, Trunks & Thoracic Duct',
      'Lymph Nodes, Germinal Centers & Spleen White/Red Pulp',
      'Thymus Gland & Bone Marrow Microenvironment',
      'T Lymphocytes (CD4+ Helper & CD8+ Cytotoxic)',
      'B Lymphocytes & Antibody-Secreting Plasma Cells',
    ],
    keyPhysiologicalMechanisms: [
      'Lymphatic drainage and interstitial fluid balance',
      'Antigen presentation via Major Histocompatibility Complex (MHC I & II)',
      'Clonal selection, somatic hypermutation, and affinity maturation',
      'Classical and alternative complement cascade activation',
    ],
    clinicalRelevance:
      'Crucial for understanding autoimmune pathogenesis, primary/acquired immunodeficiencies, vaccination immunological memory, and hypersensitivity reactions.',
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/21-introduction',
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: 'MSK',
    systemName: 'Musculoskeletal System',
    openStaxChapters: 'Chapters 6, 7, 8, 9 & 10: Bone Tissue, Skeletal Architecture, Joints, and Muscle Tissue',
    educationalScope:
      'Details skeletal tissue microarchitecture (osteons, osteoblasts, osteoclasts), axial and appendicular skeleton, joint classifications (synovial joints, ligaments), skeletal muscle histological organization (sarcomeres, sarcoplasmic reticulum), and the sliding filament contractile mechanism.',
    coreStructures: [
      'Compact Bone, Spongy Bone & Trabeculae',
      'Synovial Articulations (Articular Cartilage, Synovial Membrane)',
      'Skeletal Muscle Fibers & Sarcomeres (Actin & Myosin Filaments)',
      'Neuromuscular Junction (Motor End Plate)',
      'Tendons, Ligaments & Bursae',
    ],
    keyPhysiologicalMechanisms: [
      'Bone remodeling cycle (RANK/RANKL/OPG pathway)',
      'Excitation-contraction coupling (Calcium release via Ryanodine receptors)',
      'Cross-bridge sliding filament cycling and ATP hydrolysis',
      'Calcium and phosphate bone mineralization balance',
    ],
    clinicalRelevance:
      'Provides structural framework for fracture healing mechanics, osteopenia/osteoporosis monitoring, osteoarthritis, and myopathies.',
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/6-introduction',
    officialLicenseUrl: 'https://openstax.org/license',
  },
];
