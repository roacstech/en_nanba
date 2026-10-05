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
 *
 * Dataset scope: Complete coverage across all 28 textbook chapters and
 * major physiological/anatomical subsystems (77 comprehensive entries).
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
  totalChapters: number;
  totalReferencesCount: number;
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
  totalChapters: 28,
  totalReferencesCount: 77,
};

export const OPENSTAX_ANATOMY_DATA: OpenStaxAnatomyEntry[] = [
  {
    systemCode: "ORG-01",
    systemName: "Human Body Structural Organization & Foundational Hierarchy",
    openStaxChapters: "Chapter 1: An Introduction to the Human Body (Sections 1.1–1.4)",
    educationalScope:
      "Provides systematic overview of gross and microscopic anatomy, human physiology subspecialties, the six-level hierarchy of structural organization (chemical, cellular, tissue, organ, organ system, and organismal levels), and foundational criteria essential for human survival including metabolism, responsiveness, movement, growth, differentiation, and reproduction.",
    coreStructures: [
          "Chemical & Molecular Hierarchy",
          "Cellular Structural Components",
          "Primary Tissue Classifications",
          "Eleven Organ Systems of the Human Body",
          "Organismal Integration Interfaces"
    ],
    keyPhysiologicalMechanisms: [
          "Catabolic breakdown and anabolic macromolecular biosynthesis equilibrium",
          "Cellular differentiation from unspecialized stem cells",
          "Environmental responsiveness via neural and endocrine signaling",
          "Nutrient, oxygen, water, and atmospheric pressure survival requirements"
    ],
    clinicalRelevance:
      "Establishes standardized terminology for clinical documentation, multi-organ dysfunction syndrome (MODS) identification, systemic inflammatory response staging, and shock categorization.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/1-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "ORG-02",
    systemName: "Homeostasis, Dynamic Equilibrium & Physiological Feedback Loops",
    openStaxChapters: "Chapter 1: An Introduction to the Human Body (Section 1.5)",
    educationalScope:
      "Detailed study of homeostatic mechanisms maintaining physiological dynamic equilibrium around regulated set points. Analyzes the canonical triad of homeostatic control: sensory receptors, integration centers (hypothalamus and brainstem), and cellular effectors. Contrasts ubiquitous negative feedback stabilization with self-amplifying positive feedback cascades.",
    coreStructures: [
          "Sensory Receptors (Baroreceptors, Thermoreceptors, Chemoreceptors)",
          "Hypothalamic Thermoregulatory & Osmoreceptor Control Centers",
          "Effector Tissues (Smooth Muscle, Glands, Skeletal Muscle)",
          "Uterine Stretch Receptors & Oxytocin Neuroendocrine Axis",
          "Platelet Surface Receptors & Thrombus Aggregation Matrix"
    ],
    keyPhysiologicalMechanisms: [
          "Negative feedback loop operation: stimulus detection, integration, and corrective effector response",
          "Thermoregulatory negative feedback: sweating, shivering, and cutaneous vasomotor adjustments",
          "Positive feedback cascade in parturition: cervical stretch, oxytocin secretion, and uterine contractions",
          "Positive feedback in hemostatic plug formation: platelet activation, ADP/TxA2 release, and recruitments"
    ],
    clinicalRelevance:
      "Core pathophysiological paradigm: decompensated heart failure, diabetic ketoacidosis, hyperpyrexia versus fever setpoint elevation, and therapeutic closed-loop medical interventions.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/1-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "ORG-03",
    systemName: "Anatomical Directional Terminology, Planes, Cavities & Diagnostic Imaging",
    openStaxChapters: "Chapter 1: An Introduction to the Human Body (Sections 1.6–1.7)",
    educationalScope:
      "Standard anatomical position, directional nomenclature (anterior/posterior, superior/inferior, medial/lateral, proximal/distal, superficial/deep), cardinal anatomical reference planes (sagittal, coronal/frontal, transverse/axial), dorsal (cranial, spinal) and ventral (thoracic, abdominopelvic) body cavities, serous membranes (pleura, pericardium, peritoneum), and clinical imaging modalities (plain radiography, CT, MRI, ultrasound, PET).",
    coreStructures: [
          "Cranial Cavity & Vertebral Canal (Dorsal Cavity)",
          "Thoracic Cavity (Pleural Cavities & Mediastinum)",
          "Abdominopelvic Cavity & Nine Anatomical Abdominal Regions",
          "Visceral & Parietal Serous Membranes (Pleura, Pericardium, Peritoneum)",
          "Medical Diagnostic Imaging Modalities (X-Ray, CT, MRI, US, PET)"
    ],
    keyPhysiologicalMechanisms: [
          "Parietal and visceral serosa transudation of frictionless lubricating serous fluid",
          "X-ray photon attenuation through differing tissue densities (air, fat, soft tissue, bone)",
          "Nuclear magnetic resonance radiofrequency proton excitation and relaxation in MRI",
          "High-frequency sound wave acoustic impedance reflection in Doppler ultrasonography"
    ],
    clinicalRelevance:
      "Standardized anatomical mapping for surgical incisions, laparoscopic trocar placement, cross-sectional radiology interpretation, paracentesis/thoracentesis landmarks, and acute abdomen localization.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/1-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "ORG-04",
    systemName: "Chemical Foundations, Atomic Bonds & Enzymatic Kinetics",
    openStaxChapters: "Chapter 2: The Chemical Level of Organization (Sections 2.1–2.3)",
    educationalScope:
      "Atomic subparticles (protons, neutrons, electrons), clinical radioisotopes and radiotracers, valence electron orbitals, ionic bonding and crystal lattices, covalent nonpolar and polar bonds, hydrogen bond molecular bridges, and chemical thermodynamics including synthesis, decomposition, exchange reactions, activation energy barriers, and catalytic enzyme kinetics.",
    coreStructures: [
          "Atomic Nuclei & Valence Electron Orbitals",
          "Diagnostic Radioisotopes (Technetium-99m, Iodine-131, Fluorine-18)",
          "Electrolytic Cations (Na+, K+, Ca2+, Mg2+) & Anions (Cl-, HCO3-, PO4 3-)",
          "High-Energy Phosphoanhydride Bonds of ATP",
          "Enzymatic Active Sites & Substrate Complexes"
    ],
    keyPhysiologicalMechanisms: [
          "Ionic dissociation of salts into conducting electrolytes in aqueous biological solutions",
          "Enzymatic transition state stabilization lowering Gibbs free activation energy",
          "Competitive and non-competitive allosteric enzymatic inhibition kinetics",
          "Oxidation-reduction electron transfer couples in mitochondrial energetics"
    ],
    clinicalRelevance:
      "Theoretical basis of PET radiotracer distribution, radiation safety/dosimetry, pharmacophore drug-receptor ligand binding, and competitive enzyme inhibitor drugs (statins, ACE inhibitors).",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/2-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "ORG-05",
    systemName: "Inorganic Buffers, Water Properties & Biological Macromolecules",
    openStaxChapters: "Chapter 2: The Chemical Level of Organization (Sections 2.4–2.5)",
    educationalScope:
      "Biological water characteristics (high heat capacity, heat of vaporization, universal solvent polarity, lubrication), acid-base equilibrium and physiological pH regulation, the carbonic acid-bicarbonate buffer system, and four core organic macromolecular classes: carbohydrates (monosaccharides, disaccharides, glycogen), lipids (fatty acids, triglycerides, phospholipids, steroids), proteins (amino acids, four peptide structural levels), and nucleic acids (DNA, RNA, ATP).",
    coreStructures: [
          "Carbonic Acid-Bicarbonate Buffer Chemical Pair (H2CO3 / HCO3-)",
          "Amphipathic Phospholipids & Cholesterol Membrane Fluidizers",
          "Primary, Secondary, Tertiary & Quaternary Protein Conformations",
          "Deoxyribonucleic Acid (DNA) Double Helix & Ribonucleic Acid (RNA)",
          "Glycogen Polymer Branched Energy Stores"
    ],
    keyPhysiologicalMechanisms: [
          "Carbonic anhydrase catalysis maintaining arterial pH between 7.35 and 7.45",
          "Dehydration synthesis polymerization and hydrolytic depolymerization",
          "Hydrophobic interactions driving spontaneous lipid bilayer self-assembly",
          "Protein thermal and pH denaturation disrupting tertiary enzymatic active conformations"
    ],
    clinicalRelevance:
      "Interpreting arterial blood gases, metabolic ketoacidosis and lactic acidosis, hyperosmolar hyperosmotic dehydration, and protein conformational misfolding disorders (amyloidosis, prion diseases).",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/2-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "ORG-06",
    systemName: "Cellular Membrane Dynamics, Organelles & Cytoskeletal Transport",
    openStaxChapters: "Chapter 3: The Cellular Level of Organization (Sections 3.1–3.2)",
    educationalScope:
      "Fluid mosaic plasma membrane architecture, selective permeability barriers, passive transport (simple diffusion, facilitated diffusion, osmosis, Fick law), active transport (primary Na+/K+ ATPase, secondary symport and antiport), vesicular endocytosis/exocytosis, cytoplasm, and cytoplasmic organelles (rough/smooth endoplasmic reticulum, Golgi apparatus, mitochondria, lysosomes, peroxisomes, proteasomes, ribosomes, centrosomes, and cytoskeleton).",
    coreStructures: [
          "Phospholipid Bilayer, Glycocalyx & Cholesterol Inclusions",
          "Integral Voltage-Gated, Ligand-Gated & Aquaporin Membrane Channels",
          "Primary Active Na+/K+ ATPase Electrogenic Pumps",
          "Rough Endoplasmic Reticulum, Ribosomes & Golgi Cisternae",
          "Mitochondria Outer/Inner Membranes, Cristae & Matrix"
    ],
    keyPhysiologicalMechanisms: [
          "Na+/K+ ATPase 3:2 electrogenic pumping establishing -70 mV resting membrane potential",
          "Osmotic water movement and cellular swelling/crenation across tonicity gradients",
          "COPI, COPII, and clathrin-mediated vesicular budding, trafficking, and SNARE-mediated fusion",
          "Lysosomal acid hydrolase macromolecular degradation and autophagic clearance"
    ],
    clinicalRelevance:
      "Tonicity choices in intravenous fluid resuscitation (isotonic saline, lactated Ringer, hypertonic 3% saline, hypotonic D5W), lysosomal storage diseases (Gaucher, Tay-Sachs), and mitochondrial myopathies.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/3-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "ORG-07",
    systemName: "Nuclear Genetics, Transcription, Translation & Cell Division",
    openStaxChapters: "Chapter 3: The Cellular Level of Organization (Sections 3.3–3.6)",
    educationalScope:
      "Nuclear envelope structure and nuclear pore complexes, chromatin packing and histones, semiconservative DNA replication (helicase, single-strand binding proteins, primase, DNA polymerase, ligase, telomerase), transcription (RNA polymerase, promoter binding, intron splicing, 5-cap and poly-A tail), translation (tRNA anticodon matching, ribosomal peptidyl transferase), the eukaryotic cell cycle (G1, S, G2, mitosis, cytokinesis), checkpoints (G1/S, G2/M, spindle assembly), and cellular differentiation.",
    coreStructures: [
          "Nuclear Envelope, Pore Complexes & Nucleolus",
          "Nucleosomes, Histone Octamers & Chromatin",
          "Replication Fork Multienzyme Complex & Telomeres",
          "Spliceosomes & Ribosomal 40S/60S Subunits",
          "Cyclin-Dependent Kinases (CDKs) & Tumor Suppressor p53"
    ],
    keyPhysiologicalMechanisms: [
          "Semiconservative replication of the leading and lagging (Okazaki fragments) DNA strands",
          "Pre-mRNA alternative splicing producing distinct protein isoforms from single genes",
          "Ribosomal mRNA translation elongation, peptide bond synthesis, and ER translocation",
          "G1/S cyclin-CDK phosphorylation of retinoblastoma protein (Rb) driving cell cycle entry"
    ],
    clinicalRelevance:
      "Molecular biology basis of cancer genetics (p53 loss of heterozygosity, oncogene activation), mechanisms of chemotherapeutic drugs (antimetabolites, topoisomerase inhibitors, taxanes), and stem cell regenerative therapies.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/3-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "ORG-08",
    systemName: "Epithelial Tissue Architecture, Intercellular Junctions & Exocrine Glands",
    openStaxChapters: "Chapter 4: The Tissue Level of Organization (Sections 4.1–4.2)",
    educationalScope:
      "Epithelial characteristics (cellularity, polarity: apical vs basolateral surfaces, avascularity, basement membrane support, rapid regenerative capacity), classification by layer count (simple, stratified, pseudostratified) and cell morphology (squamous, cuboidal, columnar, transitional), specialized cell junctions (tight junctions/zonula occludens, adherens junctions, desmosomes, hemidesmosomes, gap junctions), and glandular epithelium (endocrine vs exocrine; merocrine/eccrine, apocrine, holocrine secretomotor mechanisms).",
    coreStructures: [
          "Apical Cilia, Microvilli Brush Border & Basal Lamina",
          "Tight Junctions (Claudins & Occludins) & Desmosomes (Cadherins)",
          "Stratified Squamous Keratinized & Nonkeratinized Epithelia",
          "Transitional Epithelium / Urothelium (Plaque-Bearing Umbrella Cells)",
          "Exocrine Gland Acini, Ducts & Goblet Mucus Cells"
    ],
    keyPhysiologicalMechanisms: [
          "Paracellular gatekeeping and transcellular vectorial electrolyte/nutrient transport",
          "Claudin-selective tight junction permeability maintenance across mucosal barriers",
          "Merocrine exocytosis, apocrine apical shedding, and holocrine whole-cell sebaceous lysis",
          "Urothelial folding and umbrella cell membrane unfolding accommodating bladder distension"
    ],
    clinicalRelevance:
      "Carcinoma histopathology (adenocarcinoma vs squamous cell carcinoma), mucosal blunting in celiac disease, metaplastic conversion in Barrett esophagus, pemphigus vulgaris desmoglein autoantibodies, and cystic fibrosis epithelial transport.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/4-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "ORG-09",
    systemName: "Connective Tissue Matrix, Cartilage Varieties & Fascial Architecture",
    openStaxChapters: "Chapter 4: The Tissue Level of Organization (Section 4.3)",
    educationalScope:
      "Connective tissue ground substance (glycosaminoglycans, proteoglycans, glycoproteins) and structural protein fibers (collagen types I, II, III; elastin; reticulin). Fibroblasts, adipocytes (white vs brown fat), mast cells, and tissue macrophages. Classification: loose connective tissue (areolar, adipose, reticular), dense connective tissue (dense regular tendons/ligaments, dense irregular dermis/capsules, elastic), cartilage (hyaline, fibrocartilage, elastic), osseous bone tissue, and vascular fluid connective tissue.",
    coreStructures: [
          "Extracellular Matrix Ground Substance (Hyaluronic Acid & Chondroitin Sulfate)",
          "Type I, II, and III Collagen Triple-Helix Fibrils",
          "Hyaline Cartilage Chondrocytes & Perichondrium",
          "Fibrocartilage Chondrocyte Cords & Dense Collagen Bundles",
          "Dense Regular Tendinous Fascicles & Superficial/Deep Fascial Planes"
    ],
    keyPhysiologicalMechanisms: [
          "Tensile resistance to longitudinal mechanical traction by parallel collagen fibrils",
          "Ground substance osmotic hydration resisting compressive hydrostatic loads",
          "Avascular cartilage nutrient and oxygen diffusion from surrounding synovial fluid",
          "Mast cell degranulation releasing preformed histamine and chemotactic mediators"
    ],
    clinicalRelevance:
      "Genetic connective tissue disorders (Marfan syndrome fibrillin-1 mutations, Ehlers-Danlos collagen defects, osteogenesis imperfecta type I collagen mutations), osteoarthritis cartilage loss, and keloid scarring.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/4-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "ORG-10",
    systemName: "Muscle, Nervous Histology & The Multiphase Tissue Repair Response",
    openStaxChapters: "Chapter 4: The Tissue Level of Organization (Sections 4.4–4.6)",
    educationalScope:
      "Comparative histology of skeletal, cardiac, and smooth muscle tissues; nervous tissue cytological components (neurons and neuroglial supporting cells); multiphasic tissue response to injury (Phase 1: acute inflammation and hemostatic plug; Phase 2: granulation tissue formation, angiogenesis, and fibroplasia; Phase 3: remodeling, wound contraction by myofibroblasts, re-epithelialization, and scar maturation); and systemic physiological effects of tissue aging.",
    coreStructures: [
          "Striated Skeletal Muscle Multinucleated Fibers",
          "Cardiac Muscle Intercalated Discs & Branching Fibers",
          "Spindle-Shaped Smooth Muscle Cells & Dense Bodies",
          "Capillary Sprouting (Granulation Tissue Angiogenesis)",
          "Myofibroblasts & Cross-Linked Collagen Scar Matrix"
    ],
    keyPhysiologicalMechanisms: [
          "Acute inflammatory vasodilation, leukocyte marginating, and plasma extravasation",
          "VEGF-driven capillary endothelial sprouting into fibrin wound scaffolds",
          "Myofibroblast alpha-smooth muscle actin contraction reducing wound gap area",
          "Collagen type III to type I phenotypic replacement during late scar maturation"
    ],
    clinicalRelevance:
      "Surgical wound healing: primary versus secondary intention, wound dehiscence risk factors, post-myocardial infarction ventricular wall rupture and remodeling, and chronic non-healing diabetic ulcer pathogenesis.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/4-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "INTEG-01",
    systemName: "Epidermal Stratification, Dermal Architecture & Subcutaneous Fascia",
    openStaxChapters: "Chapter 5: The Integumentary System (Section 5.1)",
    educationalScope:
      "Integumentary microscopic architecture: epidermal strata (basale, spinosum, granulosum, lucidum in thick skin, corneum), epidermal cell lineages (keratinocytes, melanocytes, Langerhans dendritic cells, tactile Merkel cells), papillary dermis with dermal papillae and Meissner corpuscles, reticular dermis with dense irregular collagen and cleavage lines (Langer lines), and the hypodermis subcutaneous fascial fat cushion.",
    coreStructures: [
          "Epidermal Stratum Basale Germinative Layer & Hemidesmosomes",
          "Stratum Corneum Anucleate Desquamating Keratin Squames",
          "Melanocytes & Tyrosinase-Driven Melanosome Organelles",
          "Papillary Dermis Capillary Loops & Reticular Dermis Langer Cleavage Lines",
          "Subcutaneous Hypodermis Adipose Lobules & Neurovascular Trunks"
    ],
    keyPhysiologicalMechanisms: [
          "Keratinocyte differentiation, tonofilament aggregation, and lamellar lipid granule exocytosis",
          "Melanosome transfer to keratinocytes forming supranuclear ultraviolet-protective caps",
          "Epidermal water barrier creation preventing dehydration and pathogen penetration",
          "Dermal collagen and elastin mechanical elasticity and tensile stress distribution"
    ],
    clinicalRelevance:
      "Depth-based classification of burn injury (superficial 1st degree, partial thickness 2nd degree, full thickness 3rd degree), surgical incisions along Langer cleavage lines to minimize scarring, and transdermal drug delivery.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/5-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "INTEG-02",
    systemName: "Cutaneous Appendages, Thermoregulation & Dermatological Pathologies",
    openStaxChapters: "Chapter 5: The Integumentary System (Sections 5.2–5.4)",
    educationalScope:
      "Hair follicle structure, hair matrix and papilla, hair growth cycle (anagen, catagen, telogen), arrector pili smooth muscle, sebaceous holocrine glands, sudoriferous sweat glands (eccrine thermoregulatory and apocrine scent glands), nail plate and matrix, cutaneous thermoregulatory vasomotor reflexes, 7-dehydrocholesterol ultraviolet synthesis of cholecalciferol (vitamin D3), and common cutaneous pathologies (basal cell carcinoma, squamous cell carcinoma, malignant melanoma, burn Rule of Nines).",
    coreStructures: [
          "Hair Follicle Papilla, Matrix & Arrector Pili Muscle",
          "Sebaceous Holocrine Glands & Sebum Secretion Duct",
          "Eccrine Sweat Glands & Coiled Secretory Tubules",
          "Nail Matrix, Eponychium (Cuticle) & Hyponychium",
          "Cutaneous Thermoreceptors & Sympathetic Arteriolar Shunts"
    ],
    keyPhysiologicalMechanisms: [
          "Eccrine gland hypoosmotic fluid secretion and evaporative cutaneous cooling",
          "Sympathetic arteriolar vasoconstriction in cold and vasodilation in warm environments",
          "Keratinocyte ultraviolet-B photolysis converting 7-dehydrocholesterol to pre-vitamin D3",
          "Melanoma malignant transformation following the ABCDE morphological criteria"
    ],
    clinicalRelevance:
      "Estimation of burn surface area with Wallace Rule of Nines and fluid resuscitation with Parkland formula, ABCDE clinical screening for malignant melanoma, and acne vulgaris pathogenesis.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/5-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "SKEL-01",
    systemName: "Bone Tissue Microarchitecture, Osteons & Skeletal Classification",
    openStaxChapters: "Chapter 6: Bone Tissue and the Skeletal System (Sections 6.1–6.3)",
    educationalScope:
      "Mechanical, protective, hematological, and metabolic functions of the skeletal system; morphological classification of bones (long, short, flat, irregular, sesamoid); gross anatomy of long bones (diaphysis, proximal/distal epiphyses, metaphysis, epiphyseal growth plate/line, periosteum, endosteum, medullary cavity); microscopic histology of compact cortical bone (osteons/Haversian systems, concentric lamellae, central canals, perforating Volkmann canals, lacunae, osteocyte canaliculi); and cancellous trabecular bone.",
    coreStructures: [
          "Cortical Bone Osteons (Haversian Systems) & Interstitial Lamellae",
          "Central Haversian Canals & Perforating Volkmann Canals",
          "Osteocytes Embedded within Lacunae & Communicating Canaliculi",
          "Cancellous Spongy Bone Trabecular Lattice & Hematopoietic Red Marrow",
          "Outer Fibrous & Inner Osteogenic Layers of the Periosteum"
    ],
    keyPhysiologicalMechanisms: [
          "Osteocyte canalicular fluid shear-stress mechanical strain sensing and signaling",
          "Osteoblast synthesis and alkaline phosphatase-driven mineralization of osteoid",
          "Hydroxyapatite [Ca10(PO4)6(OH)2] crystal deposition on type I collagen scaffolding",
          "Osteoclast hydrogen ion and cathepsin K dissolution of mineralized bone matrix"
    ],
    clinicalRelevance:
      "Pathophysiology of osteopenia and osteoporosis (dual-energy X-ray absorptiometry DEXA T-scores), osteomyelitis, avascular necrosis, and bone marrow aspiration landmarks.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/6-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "SKEL-02",
    systemName: "Osteogenesis, Fracture Consolidation & Calcium Endocrine Regulation",
    openStaxChapters: "Chapter 6: Bone Tissue and the Skeletal System (Sections 6.4–6.7)",
    educationalScope:
      "Embryonic ossification pathways: intramembranous ossification (cranial flat bones, clavicle) versus endochondral ossification (long bones from hyaline cartilage templates); epiphyseal growth plate zones (resting, proliferative, hypertrophic, calcified cartilage, ossification); appositional bone growth; fracture classifications (transverse, spiral, greenstick, comminuted, compound/open); four-stage biological fracture repair; and systemic endocrine calcium homeostasis (parathyroid hormone, calcitriol, calcitonin).",
    coreStructures: [
          "Epiphyseal Growth Plate Functional Chondrocyte Cartilage Zones",
          "Fracture Hematoma & Fibrocartilaginous Soft Callus",
          "Trabecular Bony Hard Callus & Woven Bone Matrix",
          "Parathyroid Glands & Calcium-Sensing Receptors (CaSR)",
          "Renal 1-Alpha-Hydroxylase & Active Calcitriol [1,25-(OH)2-D3]"
    ],
    keyPhysiologicalMechanisms: [
          "Endochondral chondrocyte hypertrophy, vascular invasion, and osteoid replacement",
          "Fracture healing progression: hematoma -> soft callus -> bony callus -> remodeling",
          "PTH stimulation of osteoblast RANKL expression inducing osteoclast osteolysis",
          "Calcitriol-mediated upregulation of calbindin and active intestinal calcium absorption"
    ],
    clinicalRelevance:
      "Pediatric epiphyseal plate (Salter-Harris) fractures and growth arrest, fracture nonunion etiologies, hypocalcemic tetany (Chvostek and Trousseau signs), and hyperparathyroid osteitis fibrosa cystica.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/6-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "SKEL-03",
    systemName: "Axial Skeleton: Cranial Vault, Facial Bones & Skull Base Foramina",
    openStaxChapters: "Chapter 7: Axial Skeleton (Section 7.1)",
    educationalScope:
      "Detailed osteology of the 22 human skull bones: 8 cranial bones (frontal, paired parietals, paired temporals, occipital, sphenoid, ethmoid) and 14 facial bones (paired maxillae, zygomatics, nasals, lacrimals, palatines, inferior nasal conchae, single vomer, and mandible); cranial sutures (coronal, sagittal, lambdoid, squamosal); paranasal sinuses (frontal, maxillary, ethmoidal, sphenoidal); orbital walls; anterior, middle, and posterior cranial fossae; and key skull base foramina for cranial nerves and major vessels.",
    coreStructures: [
          "Sphenoid Sella Turcica, Greater/Lesser Wings & Pterygoid Plates",
          "Ethmoid Cribriform Plate, Crista Galli & Perpendicular Plate",
          "Foramen Magnum, Jugular Foramen & Carotid Canal",
          "Superior Orbital Fissure, Foramen Rotundum & Foramen Ovale",
          "Temporomandibular Joint (TMJ) Mandibular Condyle & Fossa"
    ],
    keyPhysiologicalMechanisms: [
          "Sutural synostosis timeline and cranial fontanelle elasticity during vaginal delivery",
          "Paranasal sinus air volume resonance and respiratory air conditioning",
          "Passage of cranial nerves I through XII and the internal carotid artery through cranial base foramina",
          "Masticatory compressive force dissipation through facial vertical and horizontal buttresses"
    ],
    clinicalRelevance:
      "Basilar skull fracture signs (Battle sign, raccoon eyes, hemotympanum, CSF rhinorrhea), pterion trauma with middle meningeal artery rupture causing epidural hematoma, and craniosynostosis.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/7-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "SKEL-04",
    systemName: "Axial Skeleton: Vertebral Column, Curvatures & Biomechanical Kinematics",
    openStaxChapters: "Chapter 7: Axial Skeleton (Section 7.2)",
    educationalScope:
      "Vertebral column architecture: 24 presacral vertebrae (7 cervical, 12 thoracic, 5 lumbar), sacrum (5 fused), and coccyx (4 fused); regional vertebral morphology (atlas C1, axis C2 with dens, bifid cervical spinous processes, thoracic costal facets, robust lumbar bodies); intervertebral discs (annulus fibrosus and nucleus pulposus); primary (thoracic, sacral kyphoses) and secondary (cervical, lumbar lordoses) spinal curves; and spinal ligaments (anterior/posterior longitudinal, ligamentum flavum, interspinous, supraspinous).",
    coreStructures: [
          "Atlas (C1) Lateral Masses & Axis (C2) Odontoid Process (Dens)",
          "Vertebral Foramen & Transverse Foramina of Cervical Vertebrae",
          "Intervertebral Discs: Peripheral Annulus Fibrosus & Gelatinous Nucleus Pulposus",
          "Spinal Canal Ligamentum Flavum & Posterior Longitudinal Ligament",
          "Sacral Promontory, Sacral Canal & Anterior/Posterior Sacral Foramina"
    ],
    keyPhysiologicalMechanisms: [
          "Atlanto-occipital flexion-extension (\"nodding\") and atlanto-axial rotation (\"shaking head no\")",
          "Intervertebral disc hydrostatic cushioning and viscoelastic shock distribution",
          "Dynamic maintenance of bipedal upright posture through alternating spinal curvatures",
          "Spinal ligament tension limiting excessive hyperextension, hyperflexion, and rotation"
    ],
    clinicalRelevance:
      "Herniated nucleus pulposus with spinal nerve root radiculopathy (sciatica), pathological curvatures (scoliosis, excessive kyphosis, hyperlordosis), spinal stenosis, and lumbar puncture landmarks (L3/L4 or L4/L5).",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/7-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "SKEL-05",
    systemName: "Axial Skeleton: Thoracic Cage & Respiratory Biomechanics",
    openStaxChapters: "Chapter 7: Axial Skeleton (Section 7.3)",
    educationalScope:
      "Thoracic cage structural components: sternum (manubrium, body, xiphoid process; sternal angle of Louis, suprasternal jugular notch); twelve pairs of ribs: true ribs (1–7 vertebrosternal), false ribs (8–10 vertebrochondral), and floating ribs (11–12 vertebral); costal cartilages; costovertebral joints (head of rib with vertebral bodies, tubercle with transverse processes); intercostal spaces transmitting intercostal neurovascular bundles (vein, artery, nerve: VAN order superior to inferior); and respiratory mechanical kinematics.",
    coreStructures: [
          "Sternum: Manubrium, Body, Xiphoid Process & Sternal Angle of Louis",
          "True Ribs (1–7), False Ribs (8–10) & Floating Ribs (11–12)",
          "Costal Cartilages & Costochondral Junctions",
          "Intercostal Neurovascular Bundle (Intercostal Vein, Artery, Nerve)",
          "Superior & Inferior Thoracic Apertures (Thoracic Inlets/Outlets)"
    ],
    keyPhysiologicalMechanisms: [
          "Pump-handle motion of upper ribs expanding anterior-posterior thoracic diameter",
          "Bucket-handle motion of lower ribs expanding transverse lateral thoracic diameter",
          "Elastic recoil of costal cartilages driving passive respiratory expiration",
          "Costovertebral joint gliding during deep inspiratory and expiratory efforts"
    ],
    clinicalRelevance:
      "Flail chest paradox in blunt thoracic trauma, sternal angle as clinical landmark for second rib and carina, thoracostomy needle decompression and chest tube placement avoiding intercostal neurovascular bundles.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/7-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "SKEL-06",
    systemName: "Appendicular Skeleton: Pectoral Girdle & Upper Extremity Osteology",
    openStaxChapters: "Chapter 8: The Appendicular Skeleton (Sections 8.1–8.2)",
    educationalScope:
      "Pectoral girdle bones (clavicle: sternal/acromial ends; scapula: spine, acromion, coracoid process, glenoid cavity, subscapular/supraspinous/infraspinous fossae); arm and forearm bones (humerus: head, greater/lesser tubercles, anatomical/surgical necks, deltoid tuberosity, radial groove, capitulum, trochlea, medial/lateral epicondyles; radius: head, radial tuberosity, styloid process; ulna: olecranon, trochlear notch, coronoid process, styloid process; interosseous membrane); and hand bones (8 carpals: scaphoid, lunate, triquetrum, pisiform, trapezium, trapezoid, capitate, hamate; 5 metacarpals, 14 phalanges).",
    coreStructures: [
          "Glenoid Cavity of the Scapula & Glenoid Labrum Insertion Edge",
          "Surgical Neck & Midshaft Radial Groove of the Humerus",
          "Proximal & Distal Radioulnar Articulations & Interosseous Membrane",
          "Carpal Bones: Scaphoid, Lunate, Capitate & Hamate Hook",
          "Carpal Tunnel Fibrous Roof (Flexor Retinaculum / Transverse Carpal Ligament)"
    ],
    keyPhysiologicalMechanisms: [
          "High-range multi-axial glenohumeral mobility supported by dynamic muscle bracing",
          "Forearm pronation and supination radius rotation across stationary ulna",
          "Carpal arch spatial geometry maintaining non-collapsible flexor tendon and median nerve canal",
          "Opposable pollex biomechanics enabled by the first carpometacarpal saddle joint"
    ],
    clinicalRelevance:
      "Midshaft clavicle fractures, humeral surgical neck fractures injuring the axillary nerve, midshaft fractures injuring the radial nerve, Colles fracture of distal radius, scaphoid fracture avascular necrosis, and carpal tunnel syndrome.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/8-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "SKEL-07",
    systemName: "Appendicular Skeleton: Pelvic Girdle & Lower Extremity Locomotion",
    openStaxChapters: "Chapter 8: The Appendicular Skeleton (Sections 8.3–8.4)",
    educationalScope:
      "Pelvic girdle architecture (os coxae: fused ilium, ischium, pubis; acetabulum, obturator foramen, greater/lesser sciatic notches, sacroiliac joints, pubic symphysis; pelvic brim, true vs false pelvis; male vs female sexual dimorphism); thigh and leg bones (femur: head, fovea capitis, neck, greater/lesser trochanters, medial/lateral condyles; patella sesamoid tracking; tibia: tibial plateau, condyles, tibial tuberosity, medial malleolus; fibula: lateral malleolus, non-weight-bearing); and foot bones (7 tarsals: talus, calcaneus, navicular, cuboid, 3 cuneiforms; 5 metatarsals, 14 phalanges; longitudinal and transverse arches).",
    coreStructures: [
          "Acetabular Fossa & Triradiate Cartilage Epiphyseal Fusion Site",
          "Femoral Neck Angle of Inclination (~125°) & Femoral Anteversion",
          "Tibial Plateau Articular Facets & Anterior/Posterior Intercondylar Areas",
          "Subtalar & Talocrural Articular Trochlea of the Talus",
          "Medial Longitudinal, Lateral Longitudinal & Transverse Foot Arches"
    ],
    keyPhysiologicalMechanisms: [
          "Gravitational axial load transfer from spine through sacroiliac joints to femoral necks",
          "Patellar fulcrum lever arm amplification for quadriceps extension moment",
          "Subtalar joint triplanar inversion-eversion and talocrural dorsiflexion-plantarflexion",
          "Foot arch dynamic elastic deformation and recoil during the stance-to-propulsion gait phases"
    ],
    clinicalRelevance:
      "Femoral neck subcapital fractures in elderly osteoporosis, pelvic ring fractures, tibial plateau intra-articular fractures, lateral ankle ligament sprains (ATFL), and pes planus (flatfoot) biomechanics.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/8-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "JOINTS-01",
    systemName: "Joint Classifications, Fibrous & Cartilaginous Articulations",
    openStaxChapters: "Chapter 9: Joints (Sections 9.1–9.3)",
    educationalScope:
      "Joint functional classifications (synarthrosis: immobile; amphiarthrosis: slightly movable; diarthrosis: freely movable); structural classifications: fibrous joints (sutures with dense regular collagen; syndesmoses with interosseous ligaments; gomphoses peg-in-socket dentoalveolar joints) and cartilaginous joints (synchondroses with hyaline cartilage such as epiphyseal growth plates and first sternocostal joint; symphyses with fibrocartilage discs such as pubic symphysis and intervertebral discs).",
    coreStructures: [
          "Cranial Sutural Connective Tissue Bundles (Sharpey Fibers)",
          "Interosseous Membranes of the Forearm & Leg (Syndesmoses)",
          "Periodontal Ligament Fibrous Anchorage of Dentition (Gomphoses)",
          "Epiphyseal Plate Hyaline Synchondrosis & Costochondral Junctions",
          "Intervertebral Discs & Pubic Symphysis Fibrocartilage"
    ],
    keyPhysiologicalMechanisms: [
          "Immobile fibrous interlocking of cranial bones providing rigid intracranial brain protection",
          "Syndesmotic interosseous ligament load distribution preventing bone separation during weight bearing",
          "Fibrocartilage symphysis viscoelastic shock absorption and minimal hormonal mobility in pregnancy",
          "Age-associated progressive synchondrosal and sutural synostosis ossification"
    ],
    clinicalRelevance:
      "High ankle sprain (distal tibiofibular syndesmotic ligament tear), pubic symphysis diastasis in obstetric delivery, periodontal disease loosening dentition, and premature sutural craniosynostosis.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/9-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "JOINTS-02",
    systemName: "Synovial Joint Architecture, Ligamentous Restraints & Kinematics",
    openStaxChapters: "Chapter 9: Joints (Sections 9.4–9.6)",
    educationalScope:
      "Universal synovial joint features: articular capsule (outer fibrous capsule, inner synovial membrane), joint cavity, synovial fluid (hyaluronic acid, lubricin), articular hyaline cartilage, reinforcing intrinsic/extrinsic ligaments, articular discs/menisci, bursae, and tendon sheaths. Six synovial joint structural classes (planar, hinge, pivot, condyloid, saddle, ball-and-socket); body movement nomenclature; and clinical anatomy of major diarthrodial joints (glenohumeral, humeroulnar, coxal, and tibiofemoral).",
    coreStructures: [
          "Synovial Membrane (Synoviocytes Type A & B) & Viscous Synovial Fluid",
          "Articular Hyaline Cartilage Extracellular Chondral Matrix",
          "Glenohumeral & Acetabular Fibrocartilage Labra",
          "Knee Anterior/Posterior Cruciate Ligaments (ACL/PCL) & Menisci",
          "Synovial Bursae (Subacromial, Prepatellar, Olecranon)"
    ],
    keyPhysiologicalMechanisms: [
          "Weeping lubrication: compressive cartilage fluid extrusion and sponge-like reabsorption",
          "Ligamentous constraint: cruciate ligaments preventing anterior/posterior tibial translation",
          "Terminal knee extension screw-home mechanism locking the joint via external tibial rotation",
          "Multi-axial ball-and-socket triplanar movement in glenohumeral and coxofemoral joints"
    ],
    clinicalRelevance:
      "Anterior cruciate ligament (ACL) tears, meniscal bucket-handle tears, glenohumeral anterior dislocation with Bankart/Hill-Sachs lesions, rheumatoid arthritis pannus, and crystalline gouty arthritis.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/9-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "MUSCLE-01",
    systemName: "Muscle Tissue Histology, Sarcomeres & Sliding Filament Mechanism",
    openStaxChapters: "Chapter 10: Muscle Tissue (Sections 10.1–10.3)",
    educationalScope:
      "Comparative functional anatomy of skeletal, cardiac, and smooth muscle tissues; connective tissue sheaths (epimysium, perimysium surrounding fascicles, endomysium surrounding muscle fibers); muscle fiber ultrastructure (sarcolemma, transverse T-tubules, sarcoplasmic reticulum, terminal cisternae, triads); myofibril sarcomeric organization (Z-discs, I-bands, A-bands, H-zones, M-lines, actin, myosin, tropomyosin, troponin T/I/C, titin); neuromuscular junction (NMJ, ACh release, nicotinic ACh receptors, acetylcholinesterase); and excitation-contraction coupling.",
    coreStructures: [
          "Neuromuscular Junction (NMJ) Synaptic Cleft & Subneural Motor End Plate",
          "Sarcolemma Transverse (T) Tubules & Dihydropyridine Receptors (DHPR)",
          "Sarcoplasmic Reticulum Terminal Cisternae & Ryanodine Receptors (RyR1)",
          "Sarcomere Actin Thin Filaments & Myosin Thick Filaments with Cross-Bridge Heads",
          "Troponin Complex (TnC, TnI, TnT) & Tropomyosin Regulatory Threads"
    ],
    keyPhysiologicalMechanisms: [
          "Action potential T-tubule depolarization mechanically opening sarcoplasmic RyR1 calcium channels",
          "Calcium binding to troponin C shifting tropomyosin and exposing actin myosin-binding sites",
          "ATP hydrolysis driving cross-bridge cocking, power stroke, and detachment cycling",
          "SERCA calcium ATPase active reuptake of calcium into sarcoplasmic reticulum inducing muscle relaxation"
    ],
    clinicalRelevance:
      "Myasthenia gravis anti-AChR autoantibodies, Lambert-Eaton presynaptic P/Q-type calcium channel antibodies, malignant hyperthermia ryanodine mutations, botulinum toxin paralysis, and organophosphate toxicity.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/10-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "MUSCLE-02",
    systemName: "Motor Unit Recruitment, Muscle Fiber Types & Energy Metabolism",
    openStaxChapters: "Chapter 10: Muscle Tissue (Sections 10.4–10.6)",
    educationalScope:
      "Motor unit physiology and Henneman size principle; muscle twitch kinetics (latent period, contraction phase, relaxation phase); wave summation, incomplete and complete tetanus; sarcomere length-tension curve (optimal overlap 2.0–2.2 μm); isotonic (concentric, eccentric) and isometric contractions; ATP replenishment pathways (phosphocreatine shuttle, anaerobic glycolysis, oxidative phosphorylation, excess post-exercise oxygen consumption EPOC); and skeletal muscle fiber subtypes: Type I (slow oxidative), Type IIa (fast oxidative-glycolytic), and Type IIx (fast glycolytic).",
    coreStructures: [
          "Alpha Motor Neurons & Axonal Collateral Motor Units",
          "Phosphocreatine & Creatine Kinase (CK-MM) Energy Reserve",
          "Sarcoplasmic Myoglobin Oxygen-Binding Monomers",
          "Type I Slow Oxidative Mitochondria-Dense Fibers",
          "Type IIx Fast Glycolytic High-Glycogen Sarcoplasm"
    ],
    keyPhysiologicalMechanisms: [
          "Progressive motor unit recruitment from smallest slow-twitch to largest fast-twitch motor units",
          "High-frequency motor stimulation intracellular calcium accumulation maintaining continuous tetanus",
          "Eccentric contraction mechanical tension producing microscopic sarcolemmal strain and microtrauma",
          "Lactate production in anaerobic glycolysis and hepatic Cori cycle glucose resynthesis"
    ],
    clinicalRelevance:
      "Rhabdomyolysis releasing myoglobin causing acute tubular necrosis, motor neuron loss in amyotrophic lateral sclerosis (ALS), Duchenne muscular dystrophy (dystrophin deficiency), and sarcopenia.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/10-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "MUSCLE-03",
    systemName: "Cardiac & Smooth Muscle Histology, Electrophysiology & Regeneration",
    openStaxChapters: "Chapter 10: Muscle Tissue (Sections 10.7–10.9)",
    educationalScope:
      "Cardiac muscle specialization: branching striated fibers, single central nucleus, intercalated discs (fascia adherens, desmosomes, gap junctions), functional syncytium, intrinsic automaticity, and lack of tetanus due to prolonged absolute refractory period. Smooth muscle: non-striated spindle cells, single nucleus, dense bodies, intermediate filaments, lack of troponin (calmodulin and myosin light chain kinase MLCK activation), latch-bridge mechanism, single-unit (visceral) vs multi-unit smooth muscle, and satellite cell skeletal muscle regeneration.",
    coreStructures: [
          "Cardiac Muscle Intercalated Discs (Fascia Adherens & Connexon Gap Junctions)",
          "Smooth Muscle Dense Bodies (Alpha-Actinin) & Caveolae Infoldings",
          "Calmodulin & Myosin Light Chain Kinase (MLCK) Phosphorylation Cascade",
          "Single-Unit Visceral Pacemaker Plexuses (Interstitial Cells of Cajal)",
          "Quiescent Satellite Cells Beneath Skeletal Muscle Basal Lamina"
    ],
    keyPhysiologicalMechanisms: [
          "Intercalated disc low-resistance gap junction electrical conduction synchronizing chamber contraction",
          "Calcium-induced calcium release (CICR) through cardiac RyR2 maintaining prolonged systole",
          "Smooth muscle calcium-calmodulin activation of MLCK phosphorylating regulatory myosin heads",
          "Latch state cross-bridge dephosphorylation maintaining high isometric force with minimal ATP consumption"
    ],
    clinicalRelevance:
      "Arrhythmogenic cardiomyopathy from desmosomal mutations, vascular smooth muscle spasm in Raynaud phenomenon, bronchial smooth muscle hyperreactivity in asthma, and tocolytic drug targets.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/10-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "MUSCLE-04",
    systemName: "Muscular Levers, Fascicle Topography & Axial Musculature",
    openStaxChapters: "Chapter 11: The Muscular System (Sections 11.1–11.4)",
    educationalScope:
      "Anatomical lever systems (first, second, third class; mechanical advantage vs speed/range); fascicle architectures (parallel, convergent, pennate: unipennate, bipennate, multipennate; circular sphincters); muscular naming conventions; facial expression muscles (orbicularis oculi, orbicularis oris, zygomaticus, buccinator); mastication muscles (temporalis, masseter, pterygoids); neck musculature (sternocleidomastoid, scalenes); and axial trunk muscles (rectus abdominis, obliques, transversus abdominis, quadratus lumborum, diaphragm, intercostals).",
    coreStructures: [
          "Muscles of Mastication (Masseter, Temporalis, Medial/Lateral Pterygoids)",
          "Sternocleidomastoid & Phrenic-Innervated Diaphragm Dome",
          "Abdominal Wall Layers: External Oblique, Internal Oblique, Transversus Abdominis",
          "Rectus Abdominis, Linea Alba & Rectus Sheath",
          "External & Internal Intercostal Rib-Spanning Musculature"
    ],
    keyPhysiologicalMechanisms: [
          "Third-class lever system biomechanics maximizing speed and excursion distance of distal extremities",
          "Multipennate deltoid arrangement maximizing physiological cross-sectional area and tension",
          "Diaphragmatic dome contraction flattening inferiorly and generating negative intrathoracic pressure",
          "Valsalva maneuver coordinated abdominal wall contraction increasing intra-abdominal pressure"
    ],
    clinicalRelevance:
      "Cranial nerve VII Bell palsy facial drooping, torticollis spasm of the sternocleidomastoid, inguinal hernia boundaries (Hesselbach triangle), and diaphragm paralysis from phrenic nerve injury.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/11-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "MUSCLE-05",
    systemName: "Appendicular Musculature: Pectoral & Pelvic Girdle Myology",
    openStaxChapters: "Chapter 11: The Muscular System (Sections 11.5–11.6)",
    educationalScope:
      "Pectoral girdle and upper limb musculature: trapezius, serratus anterior, rotator cuff complex (supraspinatus, infraspinatus, teres minor, subscapularis - SITS), brachium flexors (biceps brachii, brachialis) and extensors (triceps brachii), forearm flexor-pronator and extensor-supinator compartments; pelvic girdle and lower limb musculature: gluteus maximus, medius, minimus, piriformis, iliopsoas, anterior thigh quadriceps femoris, medial adductors, posterior hamstrings, anterior leg dorsiflexors (tibialis anterior), and posterior calf plantarflexors (gastrocnemius, soleus).",
    coreStructures: [
          "Rotator Cuff Tendinous Cuff (Supraspinatus, Infraspinatus, Teres Minor, Subscapularis)",
          "Serratus Anterior & Long Thoracic Nerve Scapular Stabilizer",
          "Gluteus Medius & Minimus Hip Abductors (Superior Gluteal Nerve)",
          "Quadriceps Femoris Tendon & Patellar Ligament Extensor Mechanism",
          "Triceps Surae (Gastrocnemius & Soleus) & Calcaneal (Achilles) Tendon"
    ],
    keyPhysiologicalMechanisms: [
          "Dynamic rotator cuff centration keeping humeral head seated within shallow glenoid fossa",
          "Gluteus medius abductor contraction preventing contralateral pelvic tilt during single-leg stance",
          "Elastic energy storage in the Achilles tendon during eccentric dorsiflexion and propulsion",
          "Antagonistic muscle group reciprocal inhibition coordinating smooth limb flexion and extension"
    ],
    clinicalRelevance:
      "Supraspinatus rotator cuff tears and impingement, winged scapula from long thoracic nerve injury, positive Trendelenburg sign from superior gluteal nerve lesion, hamstring tears, and Achilles tendon rupture.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/11-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "NEURO-01",
    systemName: "Nervous Tissue Cytology, Neuroglial Subtypes & Axonal Transport",
    openStaxChapters: "Chapter 12: The Nervous System and Nervous Tissue (Sections 12.1–12.3)",
    educationalScope:
      "Structural and functional divisions of the nervous system (CNS vs PNS; somatic, autonomic, enteric; sensory afferent vs motor efferent); neuron cytology (soma, dendrites, axon hillock, axon initial segment, axolemma, telodendria, synaptic terminals); structural classifications (multipolar, bipolar, unipolar); CNS neuroglia (astrocytes, oligodendrocytes, microglia, ependymal cells); PNS neuroglia (Schwann cells, satellite cells); myelin sheath formation and nodes of Ranvier; and fast/slow axonal transport mechanisms.",
    coreStructures: [
          "Multipolar Neuron Soma, Nissl Granules & Axon Initial Segment",
          "Blood-Brain Barrier Astrocytic Perivascular End-Feet",
          "Oligodendrocytes (CNS Multi-Axon Myelination) & Schwann Cells (PNS Myelination)",
          "Nodes of Ranvier & Voltage-Gated Sodium Channel Clusters",
          "Microglia Resident Immune Cells & Ependymal Ciliated Epithelium"
    ],
    keyPhysiologicalMechanisms: [
          "Anterograde axonal transport driven by kinesin motor proteins along microtubule tracks",
          "Retrograde axonal transport mediated by dynein returning neurotrophic signals and endosomes",
          "Astrocyte potassium spatial buffering and excitatory glutamate reuptake from synaptic clefts",
          "Ependymal ciliary beating circulating cerebrospinal fluid through the cerebral ventricular cavities"
    ],
    clinicalRelevance:
      "Multiple sclerosis autoimmune CNS demyelination, Guillain-Barré syndrome post-infectious PNS demyelination, retrograde neurotropic virus transit (rabies, herpes simplex, polio), and astrocytoma neoplasms.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/12-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "NEURO-02",
    systemName: "Action Potential Biophysics, Synaptic Neurotransmission & Receptors",
    openStaxChapters: "Chapter 12: The Nervous System and Nervous Tissue (Sections 12.4–12.5)",
    educationalScope:
      "Resting membrane potential (-70 mV, Goldman-Hodgkin-Katz equation, Na+/K+ ATPase, resting potassium leak channels); graded potentials (hyperpolarizing, depolarizing; temporal and spatial summation); action potential electrophysiology (threshold -55 mV, voltage-gated Na+ channels activation/inactivation gates, voltage-gated K+ channels opening, repolarization, hyperpolarization, absolute vs relative refractory periods); saltatory vs continuous conduction; chemical synapses (voltage-gated Ca2+ channels, SNARE exocytosis); and ionotropic vs metabotropic neurotransmitter receptors.",
    coreStructures: [
          "Voltage-Gated Sodium (Nav1.1–1.6) & Potassium (Kv) Channels",
          "Presynaptic Bouton Synaptic Vesicles & SNARE Complex (Synaptobrevin, Syntaxin, SNAP-25)",
          "Synaptic Cleft Intercellular Gap (20–40 nm)",
          "Postsynaptic Ionotropic (AMPA, NMDA, GABAA) & Metabotropic (GPCR) Receptors",
          "Monoamine Transporters (SERT, DAT, NET) & Synaptic Enzymatic Degraders (AChE, MAO, COMT)"
    ],
    keyPhysiologicalMechanisms: [
          "Fast Nav channel activation gate opening driving rapid regenerative depolarization to +30 mV",
          "Nav channel inactivation gate closure enforcing absolute refractoriness and unidirectional propagation",
          "Presynaptic calcium influx triggering synaptotagmin-mediated vesicular SNARE zipper fusion",
          "Excitatory postsynaptic potentials (EPSPs, glutamate) vs inhibitory potentials (IPSPs, GABA/glycine)"
    ],
    clinicalRelevance:
      "Local anesthetic Nav channel blockade (lidocaine), antiepileptic drug targets (phenytoin, lamotrigine), selective serotonin reuptake inhibitors (SSRIs), and serum potassium alterations affecting resting potential.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/12-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "NEURO-03",
    systemName: "Central Nervous System: Cerebral Cortex, Brainstem & Ventricles",
    openStaxChapters: "Chapter 13: Anatomy of the Nervous System (Sections 13.1–13.3)",
    educationalScope:
      "Embryological brain vesicles (prosencephalon, mesencephalon, rhombencephalon); cerebral hemispheres, lobes (frontal, parietal, temporal, occipital, insula); functional cortical mapping (primary motor, primary somatosensory, Broca area, Wernicke area, prefrontal cortex); basal nuclei (caudate, putamen, globus pallidus); diencephalon (thalamus sensory gate, hypothalamus master homeostatic regulator, epithalamus); brainstem (midbrain, pons, medulla oblongata); cerebellum; meninges; ventricular system and cerebrospinal fluid (CSF) flow; and circle of Willis cerebral arterial blood supply.",
    coreStructures: [
          "Precentral Motor & Postcentral Somatosensory Gyri",
          "Basal Nuclei & Midbrain Substantia Nigra Compacta",
          "Thalamic Sensory Relay Nuclei & Hypothalamic Nuclei",
          "Medulla Oblongata Cardiac, Vasomotor & Respiratory Rhythmicity Centers",
          "Ventricular System (Lateral, Third, Aqueduct, Fourth) & Circle of Willis Arterial Ring"
    ],
    keyPhysiologicalMechanisms: [
          "Somatotopic motor and sensory homunculus representation along the central sulcus",
          "Basal nuclei direct and indirect motor loop balance modulating thalamocortical drive",
          "Choroid plexus CSF production (~500 mL/day) and arachnoid granulation venous reabsorption",
          "Cerebral autoregulation maintaining steady cerebral perfusion across 50–150 mmHg MAP"
    ],
    clinicalRelevance:
      "Acute ischemic stroke vascular localization (MCA, ACA, PCA syndromes), ruptured berry aneurysm subarachnoid hemorrhage, epidural vs subdural hematomas, hydrocephalus, and Parkinson disease dopamine deficiency.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/13-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "NEURO-04",
    systemName: "Spinal Cord Architecture, Somatotopic Tracts & Spinal Plexuses",
    openStaxChapters: "Chapter 13: Anatomy of the Nervous System (Section 13.4)",
    educationalScope:
      "Gross spinal cord anatomy (conus medullaris at L1/L2, cauda equina, filum terminale, cervical and lumbar enlargements); spinal meninges (epidural, subdural, subarachnoid spaces); cross-sectional gray matter horns (anterior motor, posterior sensory, lateral autonomic) and white matter funiculi; ascending sensory tracts (dorsal column-medial lemniscal system, spinothalamic tracts, spinocerebellar tracts); descending motor tracts (lateral and anterior corticospinal tracts, extrapyramidal pathways); 31 pairs of spinal nerves; and major nerve plexuses (cervical, brachial, lumbar, sacral).",
    coreStructures: [
          "Conus Medullaris, Cauda Equina & Filum Terminale Internum",
          "Dorsal Column-Medial Lemniscal Pathway (Fasciculus Gracilis & Cuneatus)",
          "Lateral Corticospinal Tract & Medullary Pyramidal Decussation",
          "Spinothalamic Tract (Anterolateral System)",
          "Brachial Plexus Roots, Trunks, Divisions, Cords & Terminal Nerves"
    ],
    keyPhysiologicalMechanisms: [
          "Dorsal column conscious proprioception and fine touch ascending to medulla before decussating",
          "Spinothalamic pain and temperature second-order fibers decussating immediately at spinal entry",
          "Lateral corticospinal upper motor neuron fibers decussating at medullary pyramids to synapse on alpha motor neurons",
          "Segmental dermatomal sensory and myotomal motor distribution patterns"
    ],
    clinicalRelevance:
      "Spinal cord injury patterns (complete transection, Brown-Séquard hemisection syndrome, anterior cord syndrome), cauda equina neurosurgical emergency, disc herniation radiculopathy, and Erb/Klumpke brachial birth palsies.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/13-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "NEURO-05",
    systemName: "Somatosensory Pathways, Cutaneous Receptors & Nociceptive Pain",
    openStaxChapters: "Chapter 14: The Somatic Nervous System (Section 14.1)",
    educationalScope:
      "Somatosensory receptor modalities (mechanoreceptors, thermoreceptors, nociceptors, proprioceptors); tactile cutaneous receptors (Meissner corpuscles, Pacinian corpuscles, Merkel discs, Ruffini endings); muscle spindles (intrafusal fibers, gamma motor innervation) and Golgi tendon organs; nociception pathways (fast A-delta fibers: sharp localized pain; slow unmyelinated C fibers: dull aching burning pain); dorsal horn substantia gelatinosa processing; ascending spinothalamic transmission; referred pain mechanisms; and descending opioid analgesia pathways.",
    coreStructures: [
          "Muscle Spindles (Nuclear Bag/Chain Fibers) & Golgi Tendon Organs",
          "Cutaneous Pacinian (Vibration) & Meissner (Light Touch) Corpuscles",
          "Spinal Dorsal Horn Substantia Gelatinosa (Rexed Lamina II)",
          "Midbrain Periaqueductal Gray (PAG) & Rostral Ventromedial Medulla (RVM)",
          "Substance P & Calcitonin Gene-Related Peptide (CGRP) Primary Afferents"
    ],
    keyPhysiologicalMechanisms: [
          "Mechanosensitive ion channel opening converting mechanical strain into graded receptor potentials",
          "Gate control theory: large A-beta tactile fibers activating inhibitory interneurons dampening C fiber pain",
          "Viscerosomatic convergence: visceral afferents sharing spinal cord second-order neurons with somatic dermatomes",
          "Endogenous opioid (enkephalin, beta-endorphin) presynaptic inhibition of dorsal horn neurotransmitter release"
    ],
    clinicalRelevance:
      "Neuropathic pain (diabetic neuropathy, postherpetic neuralgia), referred cardiac pain radiating to left arm and jaw, opioid pharmacology, and hyperalgesia and allodynia central sensitization.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/14-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "NEURO-06",
    systemName: "Special Senses: Vision, Ocular Optics & Retinal Phototransduction",
    openStaxChapters: "Chapter 14: The Somatic Nervous System (Section 14.1)",
    educationalScope:
      "Ocular gross anatomy and accessory structures (eyelids, conjunctiva, lacrimal apparatus, extraocular muscles: CN III, IV, VI); fibrous tunic (sclera, cornea); vascular tunic/uvea (choroid, ciliary body, ciliary processes, iris, pupil); neural tunic (retina, pigmented epithelium, macula lutea, fovea centralis, optic disc); refractive optical media (cornea, aqueous humor, crystalline lens, vitreous humor); ciliary muscle accommodation; and retinal phototransduction in rods (rhodopsin, scotopic) and cones (color opsins, photopic), optic chiasm hemidecussation, lateral geniculate nucleus, and visual cortex.",
    coreStructures: [
          "Cornea & Crystalline Lens Refractive Elements",
          "Ciliary Muscle, Zonular Fibers & Canal of Schlemm",
          "Fovea Centralis High-Acuity Retinal Core",
          "Photoreceptors: Rods (Rhodopsin) & Red/Green/Blue Cones",
          "Optic Chiasm Crossing of Nasal Hemiretinal Axons"
    ],
    keyPhysiologicalMechanisms: [
          "Aqueous humor production by ciliary processes and trabecular outflow into canal of Schlemm",
          "Parasympathetic ciliary contraction relaxing zonules, allowing lens to round up for near accommodation",
          "Light activation of rhodopsin triggering transducin, activating PDE, hydrolyzing cGMP, and hyperpolarizing photoreceptors",
          "Nasal retinal axon decussation at optic chiasm delivering contralateral visual hemifields to each hemisphere"
    ],
    clinicalRelevance:
      "Glaucoma (open-angle and acute angle-closure elevated intraocular pressure), cataract lens opacification, refractive errors (myopia, hyperopia, presbyopia), and visual field cuts (pituitary bitemporal hemianopia, homonymous hemianopia).",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/14-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "NEURO-07",
    systemName: "Special Senses: Auditory, Vestibular Equilibrium, Olfaction & Gustation",
    openStaxChapters: "Chapter 14: The Somatic Nervous System (Section 14.1)",
    educationalScope:
      "Ear anatomy: external ear (auricle, external acoustic meatus, tympanic membrane); middle ear (ossicles: malleus, incus, stapes; tensor tympani, stapedius; Eustachian tube; oval and round windows); inner ear cochlea (scala vestibuli, scala media, scala tympani, basilar membrane tonotopy, organ of Corti hair cells, tectorial membrane); vestibular equilibrium apparatus (utricle and saccule otolith maculae for linear acceleration; semicircular canals crista ampullaris for angular acceleration); olfactory epithelium, bipolar olfactory neurons, cribriform plate, olfactory bulb; and gustatory taste buds, papillae, and five primary taste modalities.",
    coreStructures: [
          "Middle Ear Auditory Ossicles (Malleus, Incus, Stapes)",
          "Cochlear Organ of Corti Hair Cells & Tonotopic Basilar Membrane",
          "Semicircular Canal Cupulae & Vestibular Utricle/Saccule Otolith Maculae",
          "Olfactory Sensory Neurons & Olfactory Bulb Glomeruli",
          "Lingual Papillae (Fungiform, Foliate, Circumvallate) & Taste Buds"
    ],
    keyPhysiologicalMechanisms: [
          "Middle ear ossicular lever impedance matching sound pressure from air to cochlear perilymph",
          "Basilar membrane high-frequency resonance at base and low-frequency resonance at apex",
          "Hair cell stereocilia tip-link mechanical deflection opening potassium channels from endolymph",
          "Otolithic calcium carbonate crystal inertia bending macular hair cells during head tilt or linear acceleration"
    ],
    clinicalRelevance:
      "Conductive vs sensorineural hearing loss (Weber and Rinne tuning fork tests), benign paroxysmal positional vertigo (BPPV canalithiasis), Ménière disease endolymphatic hydrops, and cranial nerve VII/IX taste deficits.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/14-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "NEURO-08",
    systemName: "Somatic Motor Control, Pyramidal Tracts & Cerebellar Coordination",
    openStaxChapters: "Chapter 14: The Somatic Nervous System (Sections 14.2–14.3)",
    educationalScope:
      "Somatic motor pathways: upper motor neurons (primary motor cortex, premotor area, supplementary motor cortex), corticospinal and corticobulbar tracts, lower motor neurons in spinal ventral horns and cranial nerve nuclei; somatic spinal reflex arcs (receptor, afferent neuron, central integration, efferent neuron, effector); monosynaptic stretch reflex (patellar reflex) and reciprocal inhibition; polysynaptic flexor withdrawal and crossed-extensor reflexes; and cerebellar motor coordination (Purkinje cells, deep cerebellar nuclei, comparator error-correction feedback).",
    coreStructures: [
          "Primary Motor Cortex (Precentral Gyrus) Betz Cells",
          "Corticospinal Tract Pyramidal Decussation at Medullo-Cervical Junction",
          "Spinal Ventral Horn Alpha & Gamma Motor Neurons",
          "Monosynaptic Muscle Spindle Stretch Reflex Arc",
          "Cerebellar Cortex Purkinje Cells & Deep Dentate Nuclei"
    ],
    keyPhysiologicalMechanisms: [
          "Gamma motor neuron coactivation maintaining muscle spindle tension during muscle shortening",
          "Reciprocal Ia inhibitory interneuron relaxation of antagonist muscle during agonist contraction",
          "Flexor withdrawal reflex coupled to contralateral crossed-extensor stabilization for postural support",
          "Cerebellar internal feedback comparing motor cortex intention with peripheral proprioception for real-time error correction"
    ],
    clinicalRelevance:
      "Upper motor neuron lesions (spasticity, hyperreflexia, Babinski sign) versus lower motor neuron lesions (flaccidity, hyporeflexia, muscle atrophy, fasciculations), and cerebellar ataxia, dysmetria, and intention tremor.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/14-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "NEURO-09",
    systemName: "Autonomic System: Sympathetic Thoracolumbar Outflow & Adrenergic Receptors",
    openStaxChapters: "Chapter 15: The Autonomic Nervous System (Section 15.1)",
    educationalScope:
      "Autonomic nervous system two-neuron efferent organization (preganglionic vs postganglionic); sympathetic division thoracolumbar outflow (lateral horns T1–L2); short preganglionic myelinated fibers in white rami communicantes; paravertebral sympathetic chain ganglia; prevertebral/collateral collateral ganglia (celiac, superior mesenteric, inferior mesenteric); long unmyelinated postganglionic fibers in gray rami; adrenal medulla as modified sympathetic ganglion; sympathetic divergence and fight-or-flight response; adrenergic receptors (alpha-1, alpha-2, beta-1, beta-2, beta-3); and neurotransmitters.",
    coreStructures: [
          "Thoracolumbar Spinal Lateral Gray Horns (T1–L2)",
          "Sympathetic Trunk Paravertebral Chain Ganglia",
          "Prevertebral Splanchnic Ganglia (Celiac, SMA, IMA)",
          "Adrenal Medullary Chromaffin Cells (80% Epinephrine, 20% Norepinephrine)",
          "Adrenergic Receptors: Alpha-1 (Vascular), Beta-1 (Cardiac), Beta-2 (Bronchial)"
    ],
    keyPhysiologicalMechanisms: [
          "Fight-or-flight systemic mobilization: pupil dilation, bronchodilation, positive inotropy/chronotropy, splanchnic vasoconstriction",
          "Widespread divergence: single preganglionic axon branching to multiple postganglionic neurons",
          "Alpha-1 Gq-protein coupled phospholipase C activation causing vascular smooth muscle contraction",
          "Beta-1/Beta-2 Gs-protein coupled adenylyl cyclase activation elevating intracellular cAMP"
    ],
    clinicalRelevance:
      "Pheochromocytoma catecholamine crisis, Horner syndrome (ptosis, miosis, anhidrosis from cervical sympathetic disruption), beta-blocker clinical pharmacology (metoprolol, carvedilol), and anaphylaxis epinephrine administration.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/15-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "NEURO-10",
    systemName: "Autonomic System: Parasympathetic Craniosacral Outflow & Cholinergic Control",
    openStaxChapters: "Chapter 15: The Autonomic Nervous System (Section 15.1)",
    educationalScope:
      "Parasympathetic division craniosacral origin: cranial outflow (CN III oculomotor, CN VII facial, CN IX glossopharyngeal, CN X vagus) and sacral outflow (S2–S4 lateral gray matter); long preganglionic fibers traveling to terminal and intramural ganglia near or within effector organs; short postganglionic fibers; cranial destinations: CN III ciliary ganglion (pupil constriction, accommodation), CN VII pterygopalatine and submandibular ganglia (lacrimal, salivary glands), CN IX otic ganglion (parotid), CN X vagus widespread thoracic and abdominal viscera innervation; sacral pelvic splanchnic nerves to distal colon, rectum, bladder, genitalia; cholinergic receptors: nicotinic and muscarinic (M1, M2 cardiac, M3 visceral); and rest-and-digest responses.",
    coreStructures: [
          "Brainstem Parasympathetic Nuclei (Edinger-Westphal, Salivatory, Dorsal Vagal Motor)",
          "Vagus Nerve (CN X) Thoracic & Abdominal Visceral Plexuses",
          "Sacral Parasympathetic Nuclei (S2–S4) & Pelvic Splanchnic Nerves",
          "Terminal & Intramural Visceral Ganglia",
          "Muscarinic Receptors: M2 (Cardiac SA/AV Nodes) & M3 (Glandular/Bronchial)"
    ],
    keyPhysiologicalMechanisms: [
          "Rest-and-digest energy conservation: heart rate reduction, bronchial constriction, stimulation of digestion, urination, defecation",
          "Discrete localized organ targeting with minimal divergence compared to sympathetic division",
          "M2 Gi-protein coupled adenylyl cyclase inhibition and potassium channel opening slowing SA node firing",
          "M3 Gq-protein coupled smooth muscle contraction and glandular exocytosis"
    ],
    clinicalRelevance:
      "Vasovagal syncope, organophosphate poisoning / cholinergic crisis (SLUDGE syndrome), atropine muscarinic antagonist pharmacology, and diabetic autonomic neuropathy gastroparesis.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/15-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "NEURO-11",
    systemName: "Autonomic Reflexes, Central Integration & Autonomic Pharmacology",
    openStaxChapters: "Chapter 15: The Autonomic Nervous System (Sections 15.2–15.4)",
    educationalScope:
      "Visceral reflex arcs (baroreceptor blood pressure reflex, micturition reflex, pupillary light reflex, GI motility reflexes); autonomic dual innervation and physiological autonomic tone (vascular sympathetic tone, resting cardiac vagal tone); central autonomic network: hypothalamus master coordinator, limbic emotional inputs, medullary cardiorespiratory centers; autonomic neuropharmacology: sympathomimetics, sympatholytics, parasympathomimetics, anticholinergics; and enteric nervous system independence.",
    coreStructures: [
          "Carotid Sinus & Aortic Arch Arterial Baroreceptors",
          "Medullary Nucleus of the Solitary Tract (NTS) Sensory Integrator",
          "Hypothalamic Paraventricular & Dorsomedial Autonomic Command Centers",
          "Enteric Nervous System Myenteric (Auerbach) & Submucosal (Meissner) Plexuses",
          "Vascular Smooth Muscle Alpha-1 Adrenergic Receptors Governing Basal Tone"
    ],
    keyPhysiologicalMechanisms: [
          "Negative feedback arterial baroreceptor reflex resetting cardiac output and systemic vascular resistance upon postural standing",
          "Hypothalamic integration of circadian, temperature, and emotional states with visceral efferents",
          "Enteric peristaltic reflex coordination without mandatory central nervous system intervention",
          "Selective receptor agonism and antagonism altering organ-specific autonomic responses"
    ],
    clinicalRelevance:
      "Orthostatic hypotension, autonomic dysreflexia in spinal cord injuries above T6, anticholinergic toxicity (\"blind as a bat, mad as a hatter, dry as a bone, red as a beet\"), and Hirschsprung disease aganglionosis.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/15-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "NEURO-12",
    systemName: "Neurological Examination: Mental Status & Cranial Nerves I–XII Matrix",
    openStaxChapters: "Chapter 16: The Neurological Exam (Sections 16.1–16.3)",
    educationalScope:
      "Five core components of the neurological examination; mental status assessment (orientation, memory, attention, language: Broca motor vs Wernicke sensory aphasias, executive prefrontal function); and comprehensive evaluation of all 12 pairs of cranial nerves: CN I Olfactory (smell), CN II Optic (acuity, visual fields, fundoscopy, pupillary afferent), CN III Oculomotor, CN IV Trochlear, CN VI Abducens (extraocular movements, ptosis, pupillary efferent), CN V Trigeminal (facial sensation, mastication, corneal reflex), CN VII Facial (facial expression, taste anterior 2/3), CN VIII Vestibulocochlear (hearing, vestibular), CN IX Glossopharyngeal, CN X Vagus (palatal elevation, gag reflex, swallowing), CN XI Accessory (SCM, trapezius), and CN XII Hypoglossal (tongue protrusion).",
    coreStructures: [
          "Cerebral Cortex Association Areas (Prefrontal, Broca, Wernicke)",
          "Brainstem Cranial Nerve Nuclei (Midbrain CN III/IV, Pons CN V–VIII, Medulla CN IX–XII)",
          "Edinger-Westphal Pupillary Parasympathetic Nuclei",
          "Nucleus Ambiguus (CN IX, X Somatic Motor)",
          "Hypoglossal Nucleus & Motor Axons (CN XII)"
    ],
    keyPhysiologicalMechanisms: [
          "Anatomical localization of cranial neuropathies to midbrain, pons, medulla, or skull base foramina",
          "Pupillary light reflex bilateral consensual pathway via pretectal nucleus and both Edinger-Westphal nuclei",
          "Differentiation of central UMN facial palsy (sparing forehead) from peripheral LMN Bell palsy (full hemiface paralysis)",
          "Corneal reflex arc: CN V1 ophthalmic afferent to bilateral CN VII facial efferents"
    ],
    clinicalRelevance:
      "Acute stroke assessment with the National Institutes of Health Stroke Scale (NIHSS), Glasgow Coma Scale (GCS), brain death brainstem reflex testing, trigeminal neuralgia, and acoustic neuroma cerebellopontine angle compression.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/16-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "NEURO-13",
    systemName: "Neurological Examination: Sensory, Motor, Deep Tendon Reflexes & Gait",
    openStaxChapters: "Chapter 16: The Neurological Exam (Sections 16.4–16.5)",
    educationalScope:
      "Sensory examination (spinothalamic pinprick/temperature vs dorsal column vibration/proprioception; cortical sensations: stereognosis, graphesthesia, two-point discrimination; dermatomal mapping); motor examination (muscle inspection, tone: spasticity vs rigidity vs flaccidity, MRC 0–5 muscle strength grading, pronator drift); deep tendon reflexes (biceps C5/C6, brachioradialis C6, triceps C7, patellar L4, Achilles S1; grading 0 to 4+; pathological signs: Babinski, Hoffman, clonus); coordination (finger-to-nose, heel-to-shin, rapid alternating movements, dysdiadochokinesia); Romberg test; and gait observation (hemiplegic, parkinsonian, steppage, sensory ataxic, cerebellar ataxic gaits).",
    coreStructures: [
          "Dermatomal Cutaneous Map (C6 Thumb, T4 Nipples, T10 Umbilicus, L4 Medial Foot, S1 Heel)",
          "Segmental Deep Tendon Reflex Spinal Arcs (C5 to S1)",
          "Corticospinal Motor Decussation Pathways",
          "Dorsal Column Proprioceptive Sensory Fibers & Romberg Circuit",
          "Cerebellar Vermis & Hemispheric Balance Circuits"
    ],
    keyPhysiologicalMechanisms: [
          "Dissociation of sensory loss identifying focal spinal cord hemisection versus dorsal column degeneration",
          "Hyperreflexia and spasticity resulting from loss of descending upper motor neuron inhibitory control",
          "Romberg sign distinguishing sensory ataxia (loss of proprioception with eyes closed) from cerebellar ataxia (unsteady eyes open or closed)",
          "Cerebellar dysmetria caused by loss of feedforward timing and coordination during voluntary target reaching"
    ],
    clinicalRelevance:
      "Spinal cord level localization in acute trauma, disc herniation radiculopathy mapping, diabetic peripheral polyneuropathy stocking-glove deficit, normal pressure hydrocephalus triad (wobbly, wet, wacky), and fall risk stratification.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/16-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "ENDO-01",
    systemName: "Endocrine Signaling & The Hypothalamic-Pituitary Neuroendocrine Axis",
    openStaxChapters: "Chapter 17: The Endocrine System (Sections 17.1–17.3)",
    educationalScope:
      "Chemical classifications of hormones (amine hormones: catecholamines and thyroid hormones; peptide/protein hormones: insulin, GH, ADH; steroid hormones: cortisol, aldosterone, estrogens, testosterone); cellular mechanisms of hormone action (plasma membrane GPCR second messengers: cAMP, IP3/DAG/Ca2+; intracellular nuclear receptors modulating gene transcription); hypothalamic anatomy and connection to the pituitary (hypophyseal portal system supplying adenohypophysis; hypothalamic-hypophyseal tract delivering oxytocin and ADH to neurohypophysis); hypothalamic releasing/inhibiting factors (TRH, CRH, GnRH, GHRH, somatostatin, dopamine); and anterior pituitary hormones (TSH, ACTH, FSH, LH, GH, prolactin).",
    coreStructures: [
          "Hypothalamus Paraventricular, Supraoptic & Arcuate Nuclei",
          "Hypophyseal Portal System Capillary Network",
          "Anterior Pituitary (Adenohypophysis) Acidophil & Basophil Endocrine Cells",
          "Posterior Pituitary (Neurohypophysis) Pituicytes & Axon Terminals",
          "Sella Turcica Bony Hypophyseal Fossa of Sphenoid"
    ],
    keyPhysiologicalMechanisms: [
          "Long-loop and short-loop negative feedback loops regulating hypothalamic and pituitary secretagogues",
          "Pulsatile GnRH secretion driving rhythmic gonadal gonadotropin release",
          "ADH V2-receptor mediated aquaporin-2 vesicle translocation in renal collecting duct principal cells",
          "Oxytocin positive feedback neuroendocrine milk ejection and labor uterine contractions"
    ],
    clinicalRelevance:
      "Pituitary adenomas (prolactinoma hyperprolactinemia, acromegaly and gigantism from GH excess), central diabetes insipidus vs nephrogenic DI, syndrome of inappropriate ADH (SIADH hyponatremia), and Sheehan postpartum pituitary necrosis.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/17-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "ENDO-02",
    systemName: "Thyroid & Parathyroid Glands: Basal Metabolism & Calcium Homeostasis",
    openStaxChapters: "Chapter 17: The Endocrine System (Sections 17.4–17.5)",
    educationalScope:
      "Thyroid gland macroscopic anatomy (lobes, isthmus) and microscopic architecture (follicles, follicular epithelial cells, colloid thyroglobulin; parafollicular C cells producing calcitonin); thyroid hormone synthesis (iodide trapping via sodium-iodide symporter NIS, thyroid peroxidase TPO oxidation and organification, MIT/DIT coupling into T4 and T3, endocytosis, proteolysis, circulation bound to TBG, peripheral 5-deiodination to active T3); systemic actions of T3/T4 (BMR calorigenesis, Na+/K+ ATPase upregulation, beta-adrenergic receptor upregulation, CNS development); parathyroid glands (chief cells, oxyphil cells); and parathyroid hormone (PTH) actions on bone, kidneys, and calcitriol activation.",
    coreStructures: [
          "Thyroid Follicles & Colloid Thyroglobulin Reservoir",
          "Sodium-Iodide Symporter (NIS) & Thyroid Peroxidase (TPO)",
          "Parafollicular C Cells Producing Calcitonin",
          "Parathyroid Glands Chief Cells & Calcium-Sensing Receptors (CaSR)",
          "Renal 1-Alpha-Hydroxylase Producing Active Calcitriol"
    ],
    keyPhysiologicalMechanisms: [
          "Hypothalamic-Pituitary-Thyroid (HPT) negative feedback maintaining circulating free T4/T3",
          "Genomic thyroid receptor transcription of metabolic enzymes elevating oxygen consumption and heat",
          "CaSR Gq-coupled suppression of parathyroid hormone exocytosis during hypercalcemia",
          "PTH stimulation of osteoblast RANKL promoting osteoclast calcium mobilization into blood"
    ],
    clinicalRelevance:
      "Hypothyroidism (Hashimoto thyroiditis, myxedema coma, congenital cretinism), hyperthyroidism (Graves disease TSH receptor antibodies, thyroid storm), primary hyperparathyroidism (\"stones, bones, abdominal groans\"), and post-thyroidectomy hypocalcemic tetany.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/17-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "ENDO-03",
    systemName: "Adrenal Glands: Cortical Steroidogenesis & Medullary Catecholamines",
    openStaxChapters: "Chapter 17: The Endocrine System (Section 17.6)",
    educationalScope:
      "Adrenal gland retroperitoneal anatomy; adrenal cortex histological zonation (zona glomerulosa producing mineralocorticoid aldosterone; zona fasciculata producing glucocorticoids cortisol and corticosterone; zona reticularis producing adrenal androgens DHEA and androstenedione); adrenal medulla chromaffin cells (epinephrine 80%, norepinephrine 20%); regulation of aldosterone via RAAS and serum potassium; regulation of cortisol via HPA axis (CRH, ACTH, diurnal circadian rhythm, stress response); metabolic actions of cortisol (gluconeogenesis, lipolysis, proteolysis, anti-inflammatory/immunosuppressive via NF-kB inhibition); and sympathomedullary emergency activation.",
    coreStructures: [
          "Adrenal Cortex Zona Glomerulosa, Fasciculata & Reticularis",
          "Adrenal Medullary Chromaffin Cells (Pre-Ganglionic Sympathetic Innervation)",
          "Renin-Angiotensin-Aldosterone System (RAAS) Endocrine Cascade",
          "Glucocorticoid Cytoplasmic Nuclear Hormone Receptors",
          "Epithelial Sodium Channels (ENaC) & Renal Distal Tubule Transporters"
    ],
    keyPhysiologicalMechanisms: [
          "Cholesterol cleavage by cytochrome P450 enzymes into steroid hormone classes",
          "Aldosterone mineralocorticoid receptor upregulation of basolateral Na+/K+ pumps and apical ENaC",
          "Cortisol genomic suppression of pro-inflammatory cytokines (IL-1, IL-6, TNF-alpha) and phospholipase A2",
          "Rapid adrenal catecholamine exocytosis amplifying systemic sympathetic fight-or-flight signaling"
    ],
    clinicalRelevance:
      "Cushing syndrome/disease (hypercortisolism, moon facies, buffalo hump, hyperglycemia, osteoporosis), Addison disease (primary adrenal failure, hyperpigmentation, hyponatremia, hyperkalemia), Conn syndrome (hyperaldosteronism hypertension), and congenital adrenal hyperplasia (21-hydroxylase deficiency).",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/17-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "ENDO-04",
    systemName: "Endocrine Pancreas, Pineal Gland & Secondary Endocrine Tissues",
    openStaxChapters: "Chapter 17: The Endocrine System (Sections 17.7–17.10)",
    educationalScope:
      "Endocrine pancreas histology (islets of Langerhans: alpha cells secreting glucagon, beta cells secreting insulin and amylin, delta cells secreting somatostatin, PP/F cells secreting pancreatic polypeptide); insulin synthesis (preproinsulin, proinsulin, C-peptide cleavage); glucose-stimulated insulin secretion (GLUT2, ATP-sensitive K+ channel closure, depolarization, Ca2+ influx); insulin receptor tyrosine kinase signaling (GLUT4 translocation, glycogen synthesis, lipogenesis); glucagon counter-regulation (glycogenolysis, gluconeogenesis, ketogenesis); pineal gland melatonin synthesis in circadian rhythms; and secondary endocrine organs (heart: ANP; kidneys: EPO, renin; GI tract: gastrin, CCK, secretin; adipose: leptin; bone: osteocalcin).",
    coreStructures: [
          "Pancreatic Islets of Langerhans (Alpha, Beta, Delta Cytology)",
          "Insulin Receptor Tyrosine Kinase & GLUT4 Storage Vesicles",
          "C-Peptide Equimolar Secretory Biomarker",
          "Pineal Gland Pinealocytes (Suprachiasmatic Nucleus Circadian Control)",
          "Atrial Myocytes (Atrial Natriuretic Peptide ANP Granules)"
    ],
    keyPhysiologicalMechanisms: [
          "Coordinated pancreatic islet counter-regulation maintaining fasting plasma glucose 70–99 mg/dL",
          "Insulin receptor autophosphorylation triggering IRS-1 and Akt/PKB signaling for GLUT4 membrane translocation",
          "Suprachiasmatic nucleus inhibition of daytime pineal melatonin synthesis driving diurnal sleep-wake cycle",
          "ANP cGMP-mediated renal vasodilation and natriuresis counteracting hypervolemia"
    ],
    clinicalRelevance:
      "Type 1 diabetes autoimmune beta-cell destruction with absolute insulin deficiency and diabetic ketoacidosis (DKA), Type 2 diabetes insulin resistance and beta-cell exhaustion, insulinoma hypoglycemia, and chronic kidney disease anemia treated with recombinant EPO.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/17-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "CARDIO-01",
    systemName: "Hematology: Plasma Composition, Erythrocytes & Hemoglobin Dynamics",
    openStaxChapters: "Chapter 18: Blood (Sections 18.1–18.3)",
    educationalScope:
      "Physical characteristics of whole blood (volume ~5 L, pH 7.35–7.45, viscosity, temperature 38°C); components (plasma 55%, buffy coat <1%, packed red cell volume/hematocrit 45%); plasma composition (water 92%, albumin 54% oncotic pressure, globulins 38%, fibrinogen 7%, electrolytes, nutrients, wastes); hematopoiesis in red bone marrow; erythrocyte morphology (biconcave disc, anucleate, 120-day lifespan); hemoglobin quaternary structure (two alpha, two beta chains, four heme Fe2+ pockets); cooperative oxygen binding and allostery; erythropoietin (EPO) regulation; and erythrocyte catabolism (splenic macrophage destruction, globin recycling, iron transferrin/ferritin storage, heme breakdown into bilirubin).",
    coreStructures: [
          "Erythrocyte Biconcave Spectrin-Actin Cytoskeletal Membrane",
          "Hemoglobin Tetramer (Alpha & Beta Chains with Ferrous Fe2+ Heme)",
          "Red Bone Marrow Hematopoietic Stem Cells & Sinusoids",
          "Splenic Red Pulp Sinusoids & Cords of Billroth",
          "Transferrin Iron Transport & Ferritin Intracellular Storage Complexes"
    ],
    keyPhysiologicalMechanisms: [
          "Hemoglobin cooperative oxygen binding and sigmoidal oxygen-dissociation kinetics",
          "Renal peritubular hypoxia sensing (HIF-1alpha) stimulating EPO-driven erythrocyte production",
          "Reticulocyte ribosomal loss and maturation into circulating mature red blood cells",
          "Macrophage heme oxygenase conversion of heme to biliverdin, unconjugated bilirubin, and hepatic glucuronidation"
    ],
    clinicalRelevance:
      "Anemia differential diagnosis (microcytic iron deficiency/thalassemia, normocytic chronic disease, macrocytic B12/folate deficiency), polycythemia vera, pre-hepatic vs hepatic vs post-hepatic jaundice, and sickle cell disease (HbS polymerization).",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/18-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "CARDIO-02",
    systemName: "Leukocytes, Platelets & Immune Cellular Surveillance",
    openStaxChapters: "Chapter 18: Blood (Section 18.4)",
    educationalScope:
      "Leukocyte lineages and differential count (Neutrophils 50–70%, Lymphocytes 20–40%, Monocytes 2–8%, Eosinophils 1–4%, Basophils 0.5–1%); granulocytes: neutrophils (multilobed nucleus, azurophilic/specific granules, phagocytosis, respiratory burst, neutrophil extracellular traps NETs), eosinophils (bilobed nucleus, major basic protein, parasite defense, allergic responses), basophils (histamine/heparin granules, IgE receptors); agranulocytes: monocytes (macrophage and dendritic cell precursors) and lymphocytes (B, T, NK cells); leukocyte extravasation (selectin rolling, integrin tight adhesion, diapedesis, chemotaxis); thrombopoiesis (thrombopoietin TPO, megakaryocytes); and platelet structure (150,000–400,000/μL, alpha and dense granules, canalicular system).",
    coreStructures: [
          "Polymorphonuclear Neutrophils & Azurophilic/Specific Granules",
          "Bone Marrow Polyploid Megakaryocytes & Demarcation Channels",
          "Platelet Alpha (vWF, Fibrinogen) & Dense (ADP, Serotonin, Ca2+) Granules",
          "Endothelial Selectins (P-selectin, E-selectin) & Leukocyte Integrins",
          "Circulating Monocytes & Resident Tissue Macrophages"
    ],
    keyPhysiologicalMechanisms: [
          "NADPH oxidase respiratory burst generating superoxide anions and hypochlorous acid during phagocytosis",
          "Multi-step leukocyte transendothelial migration: rolling, chemokine activation, arrest, and diapedesis",
          "Thrombopoietin feedback regulation maintaining steady platelet shedding from bone marrow megakaryocytes",
          "Platelet shape change and pseudopod extension following vascular endothelial injury"
    ],
    clinicalRelevance:
      "Leukocytosis with band neutrophil left shift in bacterial sepsis, neutropenia infection risks, acute/chronic leukemias (AML, ALL, CML, CLL), immune thrombocytopenic purpura (ITP), and heparin-induced thrombocytopenia (HIT).",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/18-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "CARDIO-03",
    systemName: "Hemostatic Cascade, Coagulation Factors & Immunohematology",
    openStaxChapters: "Chapter 18: Blood (Sections 18.5–18.6)",
    educationalScope:
      "Hemostasis three sequential phases: 1. Vascular spasm (endothelin, myogenic contraction); 2. Platelet plug formation (vWF bridging collagen to GPIb, platelet activation, ADP and thromboxane A2 release, GPIIb/IIIa fibrinogen cross-linking); 3. Coagulation cascade (extrinsic tissue factor pathway and intrinsic contact pathway converging on common pathway: Factor X activation, prothrombin to thrombin, fibrinogen to fibrin polymer mesh, Factor XIII cross-linking); physiological anticoagulants (antithrombin III, protein C/S, TFPI); fibrinolysis (tPA, plasmin, D-dimer); and immunohematology (ABO antigens, isohemagglutinins, Rh/D antigen, and hemolytic disease of the newborn).",
    coreStructures: [
          "Subendothelial Collagen & von Willebrand Factor (vWF)",
          "Platelet Glycoprotein Receptors (GPIb & GPIIb/IIIa)",
          "Prothrombinase Complex (Factor Xa, Factor Va, Ca2+, Phospholipids)",
          "Fibrin Polymer Mesh & Factor XIIIa Covalent Cross-Links",
          "Erythrocyte Surface Carbohydrate ABO & Protein Rh (D) Antigens"
    ],
    keyPhysiologicalMechanisms: [
          "Extrinsic pathway rapid ignition via Tissue Factor / Factor VIIa complex",
          "Thrombin burst amplification activating intrinsic Factors V, VIII, and XI",
          "tPA conversion of plasminogen to active plasmin cleaving fibrin clot networks",
          "Naturally occurring IgM anti-A and anti-B isohemagglutinin-mediated complement lysis in mismatched transfusions"
    ],
    clinicalRelevance:
      "Coagulation monitoring (PT/INR for extrinsic/warfarin, aPTT for intrinsic/heparin), hemophilia A (Factor VIII) and B (Factor IX), von Willebrand disease, disseminated intravascular coagulation (DIC), pulmonary embolism (D-dimer), and emergency uncrossed O-negative transfusion.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/18-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "CARDIO-04",
    systemName: "Cardiac Gross Anatomy, Pericardium & Coronary Circulation",
    openStaxChapters: "Chapter 19: The Cardiovascular System: The Heart (Section 19.1)",
    educationalScope:
      "Heart mediastinal position, pericardium (fibrous pericardium, serous parietal and visceral/epicardium layers, pericardial cavity); heart wall (epicardium, myocardium with helical muscle bundles, endocardium); four chambers (right atrium: pectinate muscles, fossa ovalis; right ventricle: trabeculae carneae, papillary muscles, chordae tendineae, moderator band; left atrium: smooth wall, auricle; left ventricle: thick wall, apex); heart valves (tricuspid, mitral/bicuspid, aortic, pulmonary semilunar valves); fibrous skeleton electrical insulation; and coronary circulation (RCA, LCA: LAD and circumflex; coronary sinus drainage).",
    coreStructures: [
          "Fibrous Pericardium & Serous Pericardial Cavity",
          "Atrioventricular (Tricuspid & Mitral) Valves & Chordae Tendineae",
          "Semilunar (Aortic & Pulmonary) Pocket Valves",
          "Fibrous Cardiac Skeleton (Annuli Fibrosi Electrical Insulators)",
          "Coronary Arteries: Left Main, LAD, Circumflex & Right Coronary Artery"
    ],
    keyPhysiologicalMechanisms: [
          "Ventricular myocardial helical wringing motion driving efficient apical-to-basal ejection",
          "Fibrous cardiac skeleton electrical insulation restricting conduction exclusively through the AV node",
          "Coronary arterial perfusion occurring predominantly during ventricular diastole due to aortic root elastic recoil",
          "Papillary muscle contraction pulling chordae tendineae taut, preventing AV valve systolic prolapse"
    ],
    clinicalRelevance:
      "Acute myocardial infarction (LAD anterior STEMI, RCA inferior STEMI with bradycardia), valvular stenosis and regurgitation murmurs, infective endocarditis vegetations, and pericarditis with Beck triad cardiac tamponade.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/19-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "CARDIO-05",
    systemName: "Cardiac Electrophysiology, Pacemaker Potentials & ECG Waveforms",
    openStaxChapters: "Chapter 19: The Cardiovascular System: The Heart (Sections 19.2–19.3)",
    educationalScope:
      "Intrinsic cardiac conduction system: sinoatrial (SA) node dominant pacemaker, internodal pathways, atrioventricular (AV) node delay, bundle of His, bundle branches, Purkinje subendocardial network; pacemaker action potential (Phase 4 spontaneous diastolic depolarization via funny currents If, Phase 0 depolarization via T/L-type Ca2+ channels, Phase 3 repolarization via K+ efflux); contractile cardiomyocyte action potential (Phase 0 Na+ spike, Phase 1 transient notch, Phase 2 Ca2+ plateau, Phase 3 K+ repolarization, Phase 4 resting -90 mV); prolonged absolute refractory period; and standard 12-lead ECG waveforms (P wave, PR interval, QRS complex, ST segment, T wave, QT interval).",
    coreStructures: [
          "Sinoatrial (SA) Node Automaticity Center (60–100 bpm)",
          "Atrioventricular (AV) Node (0.1 s Conduction Delay Gate)",
          "Bundle of His & Subendocardial Purkinje Fiber System",
          "Cardiomyocyte L-Type Calcium Channels & Sarcoplasmic RyR2 Receptors",
          "Electrocardiographic Deflections: P Wave, QRS Complex, T Wave"
    ],
    keyPhysiologicalMechanisms: [
          "HCN-mediated hyperpolarization-activated funny current (If) driving automatic pacemaker depolarization",
          "AV nodal conduction slowing allowing complete atrial emptying before ventricular contraction",
          "Contractile action potential Phase 2 calcium plateau preventing cardiac tetanic spasm",
          "Surface electrocardiographic vector deflection representing summation of propagating myocardial dipoles"
    ],
    clinicalRelevance:
      "Arrhythmias (atrial fibrillation irregularly irregular rhythm, ventricular tachycardia, ventricular fibrillation arrest), heart blocks (first, second Mobitz I/II, third-degree complete), STEMI ST-elevation localization, and long QT syndrome torsades de pointes.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/19-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "CARDIO-06",
    systemName: "Cardiac Cycle Hemodynamics, Heart Sounds & Output Regulation",
    openStaxChapters: "Chapter 19: The Cardiovascular System: The Heart (Section 19.4)",
    educationalScope:
      "Phases of the cardiac cycle (ventricular filling, isovolumetric contraction, ventricular ejection, isovolumetric relaxation; Wiggers diagram correlation of pressures, volumes, and ECG); heart sounds (S1 mitral/tricuspid closure, S2 aortic/pulmonary closure; physiologic S2 splitting on inspiration; S3 ventricular volume gallop; S4 stiff atrial gallop); cardiac output calculation (CO = HR × SV, normal ~5 L/min at rest); stroke volume determinants: Preload (end-diastolic volume EDV and Frank-Starling law of the heart), Afterload (systemic vascular resistance), and Contractility/Inotropy (calcium availability); and autonomic chronotropic/inotropic modulation.",
    coreStructures: [
          "Ventricular Pressure-Volume Loops (EDV, ESV, Stroke Volume)",
          "Atrioventricular & Semilunar Valvular Coaptation Surfaces",
          "Frank-Starling Myocardial Sarcomere Rest Length-Tension Curve",
          "Wiggers Diagram Multi-Chamber Pressure Curves",
          "Cardiac Sympathetic Accelerator Nerves & Vagal Parasympathetic Efferents"
    ],
    keyPhysiologicalMechanisms: [
          "Frank-Starling law: increased venous return increases preload, optimizing actin-myosin overlap and augmenting stroke volume",
          "Physiologic S2 splitting: inspiration increases right ventricular preload, delaying pulmonic valve closure relative to aortic closure",
          "Beta-1 adrenergic PKA phosphorylation of phospholamban accelerating SERCA calcium reuptake (positive lusitropy)",
          "Parasympathetic vagal M2 receptor opening of acetylcholine-activated potassium channels (IK,ACh) slowing heart rate"
    ],
    clinicalRelevance:
      "Congestive heart failure classification (HFrEF reduced ejection fraction vs HFpEF preserved ejection fraction), acute cardiogenic pulmonary edema, septic distributive shock, inotropic pharmacology (dobutamine, digoxin), and beta-blocker therapy.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/19-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "CARDIO-07",
    systemName: "Vascular Histology: Arteries, Veins, Capillaries & Microcirculation",
    openStaxChapters: "Chapter 20: The Cardiovascular System: Blood Vessels and Circulation (Sections 20.1–20.3)",
    educationalScope:
      "Blood vessel wall histology / tunics: tunica intima (endothelium, subendothelial connective tissue, internal elastic lamina), tunica media (vascular smooth muscle, external elastic lamina), tunica externa/adventitia (collagen, elastin, vasa vasorum); arterial tree (elastic conducting arteries, muscular distributing arteries, arterioles as primary resistance vessels); capillary classifications (continuous in brain/skin, fenestrated in kidneys/intestines, sinusoidal/discontinuous in liver/spleen/bone marrow); microcirculatory flow (metarterioles, precapillary sphincters, vascular shunts); and Starling capillary fluid exchange (capillary hydrostatic Pc, interstitial hydrostatic Pif, plasma oncotic πp, interstitial oncotic πif; net filtration pressure NFP).",
    coreStructures: [
          "Vascular Endothelial Monolayer & Glycocalyx Surface Barrier",
          "Tunica Media Vascular Smooth Muscle Cells & Elastic Laminae",
          "Arteriolar Precapillary Sphincters Regulating Capillary Bed Perfusion",
          "Fenestrated Glomerular & Sinusoidal Hepatic Capillaries",
          "Microvascular Starling Fluid Filtration & Lymphatic Drainage Interfaces"
    ],
    keyPhysiologicalMechanisms: [
          "Windkessel elastic recoil: aortic expansion in systole and recoil in diastole smoothing pulsatile capillary flow",
          "Precapillary sphincter vasomotion matching local tissue oxygenation and metabolic waste accumulation",
          "Starling fluid transudation at arterial end of capillaries and oncotic reabsorption at venous end",
          "Vascular endothelial shear-stress release of nitric oxide (NO) inducing smooth muscle vasodilation"
    ],
    clinicalRelevance:
      "Atherosclerosis endothelial injury, plaque rupture, and thrombosis; abdominal aortic aneurysm (AAA) and acute aortic dissection (Stanford A vs B); peripheral artery disease (claudication); and clinical edema mechanisms (heart failure, nephrotic syndrome, cirrhosis).",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/20-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "CARDIO-08",
    systemName: "Hemodynamics, Blood Pressure Regulation & Peripheral Resistance",
    openStaxChapters: "Chapter 20: The Cardiovascular System: Blood Vessels and Circulation (Sections 20.2–20.4)",
    educationalScope:
      "Hemodynamic principles: Ohm law of circulation (Flow Q = ΔP / Resistance R); Poiseuille law (R = 8ηL / πr^4; inverse fourth-power relationship of vessel radius to resistance); laminar vs turbulent flow (Reynolds number, bruits); blood pressure parameters (systolic BP, diastolic BP, pulse pressure PP = SBP - DBP, mean arterial pressure MAP = DBP + 1/3 PP); short-term neural control (carotid sinus CN IX and aortic arch CN X baroreceptor reflexes; vasomotor centers); intermediate and long-term endocrine regulation (RAAS cascade, ADH/vasopressin, ANP, catecholamines); and local tissue autoregulation (myogenic stretch response, metabolic vasodilation: adenosine, CO2, H+, K+, lactate, NO).",
    coreStructures: [
          "Carotid Sinus & Aortic Arch Baroreceptor Afferents",
          "Medullary Rostral Ventrolateral Medulla (RVLM) Vasomotor Center",
          "Pulmonary Endothelial Angiotensin-Converting Enzyme (ACE)",
          "Vascular Endothelial Nitric Oxide Synthase (eNOS)",
          "Renal Juxtaglomerular Granular Cells Producing Renin"
    ],
    keyPhysiologicalMechanisms: [
          "Poiseuille fourth-power arteriolar caliber modulation creating 60–70% of total systemic vascular resistance",
          "Negative feedback baroreceptor firing dampening sympathetic vasomotor tone upon acute pressure elevations",
          "Renin enzymatic cleavage of angiotensinogen, ACE conversion to angiotensin II, and AT1-receptor vasoconstriction",
          "Metabolic tissue autoregulation overriding systemic sympathetic tone during vigorous cellular work"
    ],
    clinicalRelevance:
      "Essential and secondary hypertension staging and target-organ damage (retinopathy, left ventricular hypertrophy, nephropathy); circulatory shock states (hypovolemic, cardiogenic, obstructive, distributive/septic); and antihypertensive drug mechanisms (ACEi, ARBs, CCBs, diuretics).",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/20-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "CARDIO-09",
    systemName: "Systemic, Pulmonary, Hepatic Portal & Fetal Circulatory Circuits",
    openStaxChapters: "Chapter 20: The Cardiovascular System: Blood Vessels and Circulation (Sections 20.5–20.6)",
    educationalScope:
      "Pulmonary circuit (pulmonary trunk, right/left pulmonary arteries, pulmonary capillary beds, four pulmonary veins; low resistance, low pressure ~25/10 mmHg); systemic arterial tree (ascending aorta, aortic arch and branches: brachiocephalic, left common carotid, left subclavian; descending thoracic and abdominal aorta; celiac trunk, SMA, renal arteries, IMA; iliac arteries); systemic venous return (SVC, IVC, azygos system; deep and superficial extremity veins; skeletal muscle pump and venous valves); hepatic portal system (splenic and superior mesenteric veins forming portal vein delivering gut nutrients to liver sinusoids); and fetal circulation and neonatal adaptations (umbilical vein, ductus venosus, foramen ovale, ductus arteriosus, umbilical arteries; neonatal ligamentous remodeling).",
    coreStructures: [
          "Aortic Arch Branches (Brachiocephalic, Left Common Carotid, Left Subclavian)",
          "Hepatic Portal Vein & Liver Sinusoidal Capillary Bed",
          "Lower Extremity Deep Veins & Unidirectional Bicuspid Valves",
          "Fetal Vascular Shunts: Ductus Venosus, Foramen Ovale, Ductus Arteriosus",
          "Placental Umbilical Cord (One Umbilical Vein, Two Umbilical Arteries)"
    ],
    keyPhysiologicalMechanisms: [
          "Hepatic first-pass metabolism of absorbed dietary nutrients and toxic xenobiotics",
          "Skeletal muscle pump and thoracic respiratory pump driving venous return against gravitational pooling",
          "First neonatal breath pulmonary expansion dropping vascular resistance, reversing atrial pressures and closing foramen ovale",
          "Oxygen elevation and prostaglandin withdrawal triggering ductus arteriosus muscular constriction"
    ],
    clinicalRelevance:
      "Patent ductus arteriosus (PDA machine-like murmur; indomethacin vs PGE1), patent foramen ovale (PFO paradoxical cryptogenic stroke), portal hypertension in cirrhosis (esophageal varices, caput medusae, ascites), and deep vein thrombosis / Virchow triad.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/20-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "IMMUNE-01",
    systemName: "Lymphatic Anatomy: Vessels, Nodes, Spleen & Mucosal Tissues",
    openStaxChapters: "Chapter 21: The Lymphatic and Immune System (Section 21.1)",
    educationalScope:
      "Lymphatic system functions (drainage of interstitial fluid ~3 L/day, dietary lipid absorption via lacteals, immune surveillance); lymphatic vasculature (capillaries with overlapping endothelial flap minivalves, collecting vessels with valves, lymphatic trunks, cisterna chyli, thoracic duct draining left venous angle, right lymphatic duct draining right venous angle); primary lymphoid organs (red bone marrow for B-cell genesis; thymus gland cortex, medulla, Hassall corpuscles, T-cell thymic selection, involution); secondary lymphoid organs: lymph nodes (cortex with B-cell follicles/germinal centers, paracortex T cells, medulla plasma cells), spleen (white pulp PALS, red pulp filtering sinusoids), and mucosal-associated lymphoid tissue MALT (tonsils, Peyer patches, appendix).",
    coreStructures: [
          "Lymphatic Capillary Endothelial Minivalves & Anchoring Filaments",
          "Thoracic Duct, Cisterna Chyli & Right Lymphatic Duct",
          "Thymus Gland Cortex, Medulla & Hassall (Thymic) Corpuscles",
          "Lymph Node Follicles, Germinal Centers & Paracortex",
          "Splenic White Pulp (PALS) & Red Pulp Cords of Billroth"
    ],
    keyPhysiologicalMechanisms: [
          "Interstitial hydrostatic pressure opening endothelial minivalves to admit fluid, proteins, and cell debris",
          "Lymphangion intrinsic smooth muscle rhythmic peristalsis and external muscular compression propelling lymph",
          "Thymic positive selection (MHC restriction) and negative selection (auto-reactive clonal deletion)",
          "Splenic red pulp macrophage phagocytosis of senescent, rigid, and opsonized erythrocytes"
    ],
    clinicalRelevance:
      "Lymphedema (secondary to axillary lymph node dissection in breast cancer surgery or filariasis), lymphadenopathy clinical evaluation (soft tender infectious vs hard fixed malignant), and post-splenectomy encapsulated bacterial infection sepsis risk.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/21-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "IMMUNE-02",
    systemName: "Innate Immunity: Barrier Defenses, Phagocytes & The Complement Cascade",
    openStaxChapters: "Chapter 21: The Lymphatic and Immune System (Section 21.2)",
    educationalScope:
      "Innate non-specific immunity: physical and chemical surface barriers (intact keratinized epidermis, acid mantle, mucosal ciliary escalator, gastric HCl pH 1.5–2, lysozyme, defensins); cellular defenses: neutrophils, tissue macrophages, dendritic cells, natural killer (NK) cells (missing-self MHC I recognition, perforin/granzyme apoptosis), eosinophils, mast cells; pattern recognition receptors (PRRs, Toll-like receptors TLRs) recognizing pathogen-associated molecular patterns (PAMPs); antimicrobial proteins: interferons (IFN-alpha/beta antiviral state, IFN-gamma macrophage activation); complement pathways (classical, alternative, lectin converging on C3 convertase, C3a/C5a anaphylatoxins, C3b opsonization, C5b-9 membrane attack complex MAC); and the acute inflammatory response and fever.",
    coreStructures: [
          "Epithelial Mucociliary Escalator & Tight Junction Barriers",
          "Pattern Recognition Receptors (Toll-Like Receptors TLR1–9)",
          "Natural Killer (NK) Cell Inhibitory (KIR) & Activating Receptors",
          "Complement Membrane Attack Complex (C5b-9 MAC Transmembrane Pore)",
          "Hypothalamic Thermoregulatory Prostaglandin E2 (PGE2) Receptors"
    ],
    keyPhysiologicalMechanisms: [
          "TLR recognition of bacterial LPS, peptidoglycan, and viral nucleic acids initiating NF-kB transcription",
          "Complement cascade amplification generating C3b opsonin and C5b-9 lytic transmembrane pore",
          "NK cell missing-self triggering: absence of normal MHC I releases inhibition, activating perforin/granzymes",
          "Endogenous pyrogens (IL-1, TNF, IL-6) inducing hypothalamic PGE2 elevation of the body temperature setpoint"
    ],
    clinicalRelevance:
      "Complement deficiencies (C3 deficiency severe pyogenic infections, C5–C9 MAC deficiency recurrent Neisseria meningitidis), chronic granulomatous disease (CGD NADPH oxidase defect), systemic inflammatory response syndrome (SIRS), and NSAID antipyretic mechanisms.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/21-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "IMMUNE-03",
    systemName: "Adaptive Immunity: T & B Lymphocytes, Antibodies & Immunological Memory",
    openStaxChapters: "Chapter 21: The Lymphatic and Immune System (Sections 21.3–21.5)",
    educationalScope:
      "Adaptive immunity hallmarks (specificity, diversity, memory, self vs non-self tolerance); antigens, epitopes, haptens; Major Histocompatibility Complex: MHC Class I (all nucleated cells, endogenous peptides to CD8+ cytotoxic T cells) vs MHC Class II (antigen-presenting cells, exogenous peptides to CD4+ helper T cells); cell-mediated immunity: T-cell receptor (TCR), CD4+ helper subsets (Th1, Th2, Th17, Treg), CD8+ cytotoxic T lymphocytes (CTLs, perforin/granzyme and Fas/FasL killing); humoral immunity: B-cell receptor (BCR), clonal selection and expansion, plasma cells, memory cells, somatic hypermutation, class switching; antibody structure (Fab antigen-binding fragment, Fc crystallizable constant fragment); five immunoglobulin classes (IgG, IgA, IgM, IgE, IgD); antibody effector functions; and primary vs secondary immune responses and vaccination.",
    coreStructures: [
          "T-Cell Receptor (TCR) & CD3 Signaling Complex",
          "Major Histocompatibility Complex (MHC I & MHC II Peptide Grooves)",
          "B-Cell Receptor Membrane Immunoglobulin & CD19/CD20 Markers",
          "Y-Shaped Antibody Monomer (Two Heavy, Two Light Chains; Fab & Fc Regions)",
          "Lymph Node Germinal Center Dark (Proliferation) & Light (Selection) Zones"
    ],
    keyPhysiologicalMechanisms: [
          "Two-signal requirement for lymphocyte activation (Signal 1: antigen-MHC; Signal 2: costimulatory B7-CD28 interaction)",
          "Th1 cytokine (IFN-gamma) activation of macrophages vs Th2 (IL-4, IL-5) stimulation of humoral and eosinophilic responses",
          "Activation-induced cytidine deaminase (AID) driving somatic hypermutation and immunoglobulin class switching",
          "Secondary immune response rapid high-affinity IgG generation mediated by persistent memory B and T cells"
    ],
    clinicalRelevance:
      "Severe combined immunodeficiency (SCID), HIV/AIDS CD4+ T-cell depletion and opportunistic infections, therapeutic monoclonal antibodies (rituximab, trastuzumab), vaccine schedules and booster rationale, and passive immunoglobulin prophylaxis.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/21-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "IMMUNE-04",
    systemName: "Immunopathology: Hypersensitivity Reactions, Autoimmunity & Allografts",
    openStaxChapters: "Chapter 21: The Lymphatic and Immune System (Sections 21.6–21.7)",
    educationalScope:
      "Gell and Coombs four hypersensitivity categories: Type I (immediate/IgE-mediated, mast cell degranulation, histamine, leukotrienes, anaphylaxis, asthma, urticaria); Type II (antibody-mediated cytotoxic, IgG/IgM against cell-surface antigens, hemolytic anemia, Goodpasture, myasthenia gravis); Type III (immune complex-mediated, circulating IgG-antigen lattices depositing in vessels/tissues, SLE, post-streptococcal glomerulonephritis, serum sickness); Type IV (delayed-type cell-mediated, sensitized T cells and macrophages, tuberculin PPD, contact dermatitis); autoimmune breakdown of central/peripheral tolerance (molecular mimicry, HLA associations); transplantation immunology (HLA matching; hyperacute, acute, and chronic rejection; graft-versus-host disease GVHD); and tumor immunology (immune evasion, PD-1/CTLA-4 checkpoint pathways).",
    coreStructures: [
          "Mast Cell High-Affinity IgE Receptors (Fc-epsilon-RI)",
          "Circulating Antigen-Antibody Immune Complexes & Vascular Endothelia",
          "Basement Membrane Glomerular & Alveolar Target Antigens",
          "Sensitized CD4+ Th1 Effector & CD8+ Cytotoxic T Cells",
          "Human Leukocyte Antigen (HLA-A, B, C, DR, DQ, DP) Polymorphic Alleles"
    ],
    keyPhysiologicalMechanisms: [
          "IgE receptor cross-linking triggering explosive mast cell exocytosis of histamine, heparin, and proteases",
          "Immune complex entrapment in vascular basement membranes activating complement and neutrophil elastase release",
          "Recipient T-cell direct and indirect allorecognition of donor foreign MHC molecules driving graft destruction",
          "Tumor cell expression of PD-L1 engaging T-cell PD-1 and inducing cytotoxic T-cell functional exhaustion"
    ],
    clinicalRelevance:
      "Anaphylactic shock management (intramuscular epinephrine, airway support, IV fluids), systemic lupus erythematosus (SLE ANA, anti-dsDNA), immunosuppressive therapy in organ transplantation (calcineurin inhibitors: tacrolimus, cyclosporine), and immune checkpoint inhibitor cancer therapy (pembrolizumab, ipilimumab).",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/21-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "RESP-01",
    systemName: "Respiratory Anatomy: Upper Airway, Larynx & Tracheobronchial Tree",
    openStaxChapters: "Chapter 22: The Respiratory System (Section 22.1)",
    educationalScope:
      "Functional respiratory divisions: conducting zone (nose, pharynx, larynx, trachea, bronchi, bronchioles, terminal bronchioles) vs respiratory zone (respiratory bronchioles, alveolar ducts, alveolar sacs, alveoli); upper tract anatomy: external nose, nasal cavity, conchae/turbinates, meatuses, paranasal sinuses, pseudostratified ciliated columnar respiratory epithelium with goblet cells; pharynx: nasopharynx, oropharynx, laryngopharynx; larynx: nine cartilages (thyroid, cricoid, epiglottis, paired arytenoids, corniculates, cuneiforms), vocal folds (true cords), vestibular folds (false cords), glottis, recurrent laryngeal nerve; trachea: C-shaped hyaline cartilage rings, trachealis muscle, carina cough reflex; and bronchial tree branching down to terminal bronchioles.",
    coreStructures: [
          "Nasal Conchae & Ciliated Pseudostratified Respiratory Mucosa",
          "Epiglottic Elastic Cartilage & Laryngeal True Vocal Folds",
          "Tracheal C-Shaped Hyaline Cartilage Rings & Trachealis Smooth Muscle",
          "Carina Bifurcation Sensory Cough Mechanoreceptors",
          "Bronchopulmonary Segments (10 Right, 8–10 Left) & Terminal Bronchioles"
    ],
    keyPhysiologicalMechanisms: [
          "Nasal mucosal countercurrent heat and water exchange warming air to 37°C and 100% relative humidity",
          "Mucociliary escalator upward sweeping of trapped particulate matter toward the pharynx",
          "Epiglottic posterior deflection and vocal cord tight adduction preventing aspiration during swallowing",
          "Autonomic airway caliber control: sympathetic beta-2 bronchodilation vs parasympathetic M3 bronchoconstriction"
    ],
    clinicalRelevance:
      "Foreign body aspiration right mainstem bronchus predilection, endotracheal intubation landmarks and mainstem intubation risk, cricothyroidotomy emergency airway access, recurrent laryngeal nerve injury vocal hoarseness, and asthma bronchospasm.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/22-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "RESP-02",
    systemName: "Pulmonary Ventilation Mechanics, Surfactant Dynamics & Spirometry",
    openStaxChapters: "Chapter 22: The Respiratory System (Sections 22.2–22.3)",
    educationalScope:
      "Gross lung anatomy (right: 3 lobes, horizontal/oblique fissures; left: 2 lobes, oblique fissure, cardiac notch, lingula); pleura (parietal, visceral, pleural cavity with negative intrapleural pressure -4 mmHg at rest); pulmonary ventilation mechanics (Boyle law P1V1 = P2V2; quiet inspiration: diaphragm flattening, external intercostals, intrapulmonary pressure drops to -1 mmHg; quiet expiration: passive elastic recoil; forced expiration: internal intercostals, abdominal wall muscles); transpulmonary pressure (Palv - Pip); pulmonary surfactant (DPPC from Type II pneumocytes, Law of Laplace P = 2T/r, surface tension reduction preventing small alveolar collapse); lung compliance and resistance; and spirometry (TV, IRV, ERV, RV, VC, FRC, TLC, FEV1, FVC, FEV1/FVC ratio).",
    coreStructures: [
          "Diaphragmatic Muscular Dome (Phrenic Nerve C3–C5)",
          "External & Internal Intercostal Respiratory Muscles",
          "Pleural Cavity Sub-Atmospheric Pressure Space (-4 mmHg Resting)",
          "Type II Alveolar Cells (Pneumocytes) & Lamellar Surfactant Bodies",
          "Spirometric Volume Compartments: TV, IRV, ERV, RV, VC, TLC"
    ],
    keyPhysiologicalMechanisms: [
          "Boyle law pressure gradients driving airflow into lungs during thoracic volume expansion",
          "Transpulmonary positive pressure distending alveolar walls and counteracting inward elastic recoil",
          "Pulmonary surfactant surface tension lowering equalizing collapsing pressures across variable alveolar radii",
          "Dynamic airway compression during forced expiration limiting maximum expiratory flow rates"
    ],
    clinicalRelevance:
      "Pneumothorax (spontaneous vs tension pneumothorax with mediastinal shift and obstructive shock), infant respiratory distress syndrome (IRDS surfactant deficiency), obstructive lung disease (asthma, COPD FEV1/FVC <0.70) vs restrictive disease (pulmonary fibrosis reduced TLC/FVC), and chest tube thoracostomy.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/22-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "RESP-03",
    systemName: "Alveolar Gas Exchange, Hemoglobin Dissociation & Chemical Control",
    openStaxChapters: "Chapter 22: The Respiratory System (Sections 22.4–22.6)",
    educationalScope:
      "Dalton law of partial pressures and Henry law of gas solubility; alveolar-capillary respiratory membrane (Type I pneumocytes, fused basal laminae, capillary endothelium; 0.5 μm thickness; Fick law of diffusion); ventilation-perfusion matching (V/Q ratio normal ~0.8; hypoxic pulmonary vasoconstriction shunting blood from poorly ventilated alveoli); oxygen transport (1.5% dissolved, 98.5% oxyhemoglobin; oxygen-hemoglobin dissociation curve; P50 ~26.6 mmHg; right shift factors: elevated temp, elevated CO2, decreased pH Bohr effect, 2,3-BPG facilitating tissue oxygen delivery; left shift factors: hypothermia, alkalosis, HbF); carbon dioxide transport (7% dissolved, 20% carbaminohemoglobin, 70% bicarbonate via carbonic anhydrase; chloride shift; Haldane effect); and neural chemical breathing control (medullary DRG/VRG; pontine PRG; central chemoreceptors sensing CSF H+/CO2; peripheral carotid/aortic body chemoreceptors sensing PaO2 <60 mmHg, PaCO2, pH).",
    coreStructures: [
          "Alveolar-Capillary Respiratory Diffusion Barrier (0.5 μm Membrane)",
          "Erythrocyte Carbonic Anhydrase & Band 3 Anion Exchanger (AE1)",
          "Ventrolateral Medulla Retrotrapezoid Central Chemoreceptors",
          "Carotid Body Glomus Cells (CN IX) & Aortic Bodies (CN X)",
          "Medullary Dorsal & Ventral Respiratory Groups (DRG & VRG)"
    ],
    keyPhysiologicalMechanisms: [
          "Fick law passive gas diffusion across ultra-thin alveolar-capillary membrane within 0.25 s capillary transit",
          "Hypoxic pulmonary vasoconstriction redirecting capillary blood flow to well-ventilated lung zones",
          "Bicarbonate generation and chloride shift (Hamburger phenomenon) transporting CO2 as plasma HCO3-",
          "Central chemoreceptor CO2-derived proton sensing providing dominant minute-to-minute ventilatory drive"
    ],
    clinicalRelevance:
      "Arterial blood gas (ABG) analysis (hypoxemic Type 1 vs hypercapnic Type 2 respiratory failure, elevated A-a gradient), carbon monoxide poisoning (carboxyhemoglobin left-shift, normal pulse ox), acute respiratory distress syndrome (ARDS), high-altitude hypoxia adaptations, and sleep apnea syndromes.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/22-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "DIGEST-01",
    systemName: "Upper GI Tract: Oral Cavity, Esophagus & Gastric Secretory Physiology",
    openStaxChapters: "Chapter 23: The Digestive System (Sections 23.1–23.4)",
    educationalScope:
      "Alimentary canal wall histological tunics: mucosa (epithelium, lamina propria, muscularis mucosae), submucosa (submucosal Meissner plexus), muscularis externa (inner circular, outer longitudinal smooth muscle, myenteric Auerbach plexus), serosa/adventitia; oral cavity and salivary glands (parotid: serous amylase; submandibular: seromucous; sublingual: mucous; lingual lipase); deglutition phases (buccal voluntary, pharyngeal involuntary, esophageal peristalsis; UES and LES); stomach gross anatomy (cardia, fundus, body, pylorus, pyloric sphincter; three muscular layers; rugae); gastric glands cytology (mucous neck cells, parietal/oxyntic cells producing HCl and intrinsic factor, chief/peptic cells producing pepsinogen, G cells producing gastrin, ECL cells producing histamine, D cells producing somatostatin); parietal cell apical H+/K+ ATPase proton pump mechanism; gastric secretion phases (cephalic, gastric, intestinal); and gastric mucosal barrier.",
    coreStructures: [
          "Alimentary Canal Four Tunics & Enteric Plexuses (Meissner & Auerbach)",
          "Salivary Glands (Parotid, Submandibular, Sublingual)",
          "Lower Esophageal Sphincter (LES) & Gastroesophageal Junction",
          "Gastric Glands Parietal Cells (Proton Pump & Intrinsic Factor)",
          "Gastric Chief Cells (Pepsinogen) & Enteroendocrine G Cells (Gastrin)"
    ],
    keyPhysiologicalMechanisms: [
          "Parietal cell apical H+/K+ ATPase active proton pumping stimulated by gastrin (CCK2), histamine (H2), and ACh (M3)",
          "Pepsinogen autoactivation to active endopeptidase pepsin at acidic pH <2",
          "Gastric mucosal barrier protection: bicarbonate secretion trapped in adherent mucus gel layer",
          "Intrinsic factor binding dietary cobalamin (vitamin B12) enabling distal ileal receptor-mediated endocytosis"
    ],
    clinicalRelevance:
      "Gastroesophageal reflux disease (GERD) and Barrett esophagus metaplasia, peptic ulcer disease (Helicobacter pylori, NSAIDs), Zollinger-Ellison gastrinoma, pernicious anemia (autoimmune parietal cell destruction, B12 deficiency), and PPI/H2RA pharmacology.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/23-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "DIGEST-02",
    systemName: "Lower GI Tract: Intestinal Absorption, Gut Microbiota & Colonic Motility",
    openStaxChapters: "Chapter 23: The Digestive System (Section 23.5)",
    educationalScope:
      "Small intestine gross anatomy (duodenum C-loop, jejunum, ileum terminating at ileocecal valve); surface area amplifications: plicae circulares, villi (capillary network, central lacteal), microvilli brush border enzymes (600-fold amplification to ~200 m^2); crypts of Lieberkühn, Paneth cells producing defensins/lysozyme, enterocyte stem cells; small intestine motility: segmentation contractions and migrating motor complex (MMC) housekeeper waves; large intestine gross anatomy (cecum, appendix, ascending/transverse/descending/sigmoid colon, rectum, anal canal; teniae coli, haustra, epiploic appendages; internal smooth and external skeletal anal sphincters); large bowel water and electrolyte reabsorption; colonic mass movements and defecation reflex; and gut microbiota functions (fiber fermentation to short-chain fatty acids acetate/propionate/butyrate, vitamin K and B synthesis, pathogen exclusion, immune tolerance).",
    coreStructures: [
          "Small Intestinal Villi & Central Lymphatic Lacteals",
          "Enterocyte Microvilli Brush Border Hydrolytic Enzymes",
          "Duodenal Brunner Glands & Crypt of Lieberkühn Paneth Cells",
          "Large Intestine Teniae Coli, Haustra & Epiploic Appendages",
          "Anal Canal Internal (Involuntary) & External (Voluntary) Sphincters"
    ],
    keyPhysiologicalMechanisms: [
          "Enterocyte sodium-glucose cotransporter (SGLT1) secondary active absorption driving osmotic water uptake",
          "Migrating motor complex (MMC) motilin-stimulated peristaltic waves clearing interdigestive debris",
          "Colonic microbial anaerobic fermentation yielding trophic short-chain fatty acids for colonocytes",
          "Parasympathetic pelvic nerve-mediated defecation reflex relaxation of internal anal sphincter"
    ],
    clinicalRelevance:
      "Celiac disease autoimmune gluten-sensitive enteropathy with villous blunting and malabsorption, inflammatory bowel disease (Crohn transmural skip lesions vs Ulcerative Colitis continuous mucosal disease), acute appendicitis, small bowel mechanical obstruction vs ileus, and Clostridioides difficile colitis.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/23-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "DIGEST-03",
    systemName: "Accessory Organs: Hepato-Biliary System, Exocrine Pancreas & Digestion",
    openStaxChapters: "Chapter 23: The Digestive System (Sections 23.6–23.7)",
    educationalScope:
      "Liver anatomy (lobes: right, left, caudate, quadrate; falciform ligament; porta hepatis); microscopic architecture (hexagonal lobules, central veins, portal triads: portal venule, hepatic arteriole, bile ductule; fenestrated sinusoids, hepatocytes, Kupffer macrophages, stellate/Ito fat-storing cells, space of Disse, bile canaliculi); liver metabolic functions (bile production ~1 L/day, plasma protein synthesis, urea cycle, glycogen storage, drug biotransformation via cytochrome P450); gallbladder and biliary tree (hepatic ducts, cystic duct, common bile duct, ampulla of Vater, sphincter of Oddi; bile storage and concentration; CCK stimulation); exocrine pancreas (acinar cells producing digestive enzymes and inactive zymogens: trypsinogen, chymotrypsinogen, procarboxypeptidase, amylase, lipase; duct cells producing alkaline bicarbonate; enterokinase brush border activation of trypsin; secretin and CCK regulation); and complete digestion/absorption of carbohydrates, proteins, lipids, and nucleic acids.",
    coreStructures: [
          "Hepatic Lobules & Portal Triads (Portal Vein, Hepatic Artery, Bile Duct)",
          "Liver Sinusoidal Endothelium, Kupffer Macrophages & Space of Disse",
          "Gallbladder & Common Bile Duct / Pancreatic Duct Confluence",
          "Pancreatic Acinar Cells & Ductal Epithelial Bicarbonate Transporters",
          "Intestinal Mixed Micelles & Enterocyte Chylomicron Complexes"
    ],
    keyPhysiologicalMechanisms: [
          "Enterohepatic circulation: 95% of bile salts reabsorbed in terminal ileum (ASBT) and returned via portal vein",
          "Duodenal enterokinase cleaving trypsinogen to active trypsin, initiating cascade activation of all pancreatic zymogens",
          "Secretin-induced ductal CFTR/bicarbonate secretion neutralizing gastric acid chyme in duodenum",
          "Lipid emulsification into mixed micelles, enterocyte uptake, re-esterification, and chylomicron packaging into lacteals"
    ],
    clinicalRelevance:
      "Cirrhosis liver failure (hypoalbuminemia, coagulopathy, jaundice, portal hypertension, ascites), cholelithiasis (cholesterol/pigment gallstones, cholecystitis, choledocholithiasis), acute/chronic pancreatitis (premature zymogen activation, elevated lipase), cystic fibrosis exocrine pancreatic failure, and steatorrhea.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/23-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "METAB-01",
    systemName: "Cellular Bioenergetics: Glycolysis, Krebs Cycle & Oxidative Phosphorylation",
    openStaxChapters: "Chapter 24: Metabolism and Nutrition (Sections 24.1–24.4)",
    educationalScope:
      "Metabolic principles: catabolism (exergonic macromolecular degradation generating ATP) vs anabolism (endergonic biosynthesis); redox reactions (NAD+/NADH, FAD/FADH2); ATP energy currency; carbohydrate catabolism: 1. Glycolysis (cytosol, 1 glucose to 2 pyruvate, net 2 ATP, 2 NADH; key regulatory enzymes: hexokinase/glucokinase, PFK-1 rate-limiting, pyruvate kinase; anaerobic fate: lactate dehydrogenase regenerating NAD+); 2. Pyruvate oxidation (mitochondrial matrix, pyruvate dehydrogenase PDH converting pyruvate to acetyl-CoA, CO2, NADH); 3. Citric acid cycle / Krebs cycle (mitochondrial matrix, acetyl-CoA + oxaloacetate to citrate; per glucose: 4 CO2, 6 NADH, 2 FADH2, 2 GTP/ATP; rate-limiting isocitrate dehydrogenase); 4. Oxidative phosphorylation and electron transport chain (ETC inner mitochondrial membrane complexes I–IV, coenzyme Q, cytochrome c; proton pumping into intermembrane space; complex V ATP synthase chemiosmosis; oxygen final electron acceptor; yield ~30–32 ATP/glucose); gluconeogenesis, glycogenesis, glycogenolysis; lipid beta-oxidation and ketogenesis; and amino acid deamination and the urea cycle.",
    coreStructures: [
          "Cytosolic Glycolytic Multienzyme Cascade & PFK-1 Regulatory Node",
          "Mitochondrial Pyruvate Dehydrogenase (PDH) Complex",
          "Mitochondrial Matrix Citric Acid Cycle Enzymes",
          "Inner Mitochondrial Membrane Complexes I, II, III, IV & ATP Synthase (Complex V)",
          "Hepatic Urea Cycle Mitochondrial & Cytosolic Compartments"
    ],
    keyPhysiologicalMechanisms: [
          "Chemiosmotic proton-motive force across inner mitochondrial membrane driving rotational catalysis of ATP synthase",
          "Allosteric regulation of PFK-1: activated by AMP and fructose-2,6-bisphosphate, inhibited by ATP and citrate",
          "Mitochondrial beta-oxidation cleaving 2-carbon acetyl-CoA units from fatty acids yielding abundant NADH and FADH2",
          "Hepatic urea cycle detoxifying deamination-derived neurotoxic ammonia into excretable water-soluble urea"
    ],
    clinicalRelevance:
      "Lactic acidosis from tissue hypoxia, diabetic ketoacidosis (DKA) and starvation ketosis from unbridled beta-oxidation, mitochondrial cytopathies and ETC poisonings (cyanide/CO inhibiting complex IV, DNP uncoupling), hepatic encephalopathy from hyperammonemia, and inborn errors (PKU, glycogen storage diseases).",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/24-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "METAB-02",
    systemName: "Metabolic States, Thermoregulation & Clinical Nutrition Principles",
    openStaxChapters: "Chapter 24: Metabolism and Nutrition (Sections 24.5–24.7)",
    educationalScope:
      "Absorptive / fed state (up to 4 hours postprandial, insulin dominance, glucose fuel, glycogenesis, lipogenesis, protein synthesis); postabsorptive / fasting state (gut empty, glucagon, epinephrine, cortisol dominance, hepatic glycogenolysis, gluconeogenesis, lipolysis releasing free fatty acids and glycerol, glucose sparing for brain); prolonged starvation adaptations (ketone body utilization by brain, muscle protein sparing); caloric values (carbs 4 kcal/g, protein 4 kcal/g, fat 9 kcal/g, alcohol 7 kcal/g); Basal Metabolic Rate (BMR) and Total Metabolic Rate (TMR); body temperature regulation (core 36.5–37.5°C vs shell; heat production: shivering, brown adipose tissue UCP-1 non-shivering thermogenesis; heat loss: radiation 60%, conduction, convection, evaporation; hypothalamic preoptic heat-loss vs posterior heat-promoting centers); and nutrition (essential amino acids, essential fatty acids, fat-soluble vitamins A/D/E/K, water-soluble B-complex and C, major and trace minerals).",
    coreStructures: [
          "Hypothalamic Preoptic Anterior & Posterior Thermoregulatory Nuclei",
          "Brown Adipose Tissue Mitochondria & Thermogenin (UCP-1)",
          "Adipose Tissue Hormone Leptin & Hypothalamic Arcuate Nucleus",
          "Hepatic Glycogen Stores & Gluconeogenic Substrate Pools",
          "Skeletal Muscle Protein Reserves Mobilized in Starvation"
    ],
    keyPhysiologicalMechanisms: [
          "Insulin versus glucagon/epinephrine hormonal switching governing energy storage versus substrate mobilization",
          "Uncoupling protein-1 (UCP-1) proton leak in brown fat dissipating proton gradient as pure thermogenic heat",
          "Hypothalamic arcuate POMC/CART satiety versus NPY/AgRP hunger neuroendocrine signaling",
          "Sympathetic cutaneous vasoconstriction and piloerection conserving heat in cold ambient conditions"
    ],
    clinicalRelevance:
      "Protein-energy malnutrition (kwashiorkor protein deficiency edema vs marasmus total calorie starvation), vitamin deficiencies (thiamine B1 Wernicke-Korsakoff/beriberi, niacin B3 pellagra, C scurvy, D rickets/osteomalacia, K bleeding), heat exhaustion vs life-threatening heat stroke, and metabolic syndrome.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/24-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "RENAL-01",
    systemName: "Renal Anatomy: Macroscopic Architecture, Nephrons & Microvasculature",
    openStaxChapters: "Chapter 25: The Urinary System (Sections 25.1–25.4)",
    educationalScope:
      "Urinary system homeostatic roles (blood volume, blood pressure, osmolarity, electrolyte balance, pH, nitrogenous waste excretion: urea, creatinine, uric acid; gluconeogenesis; endocrine EPO and calcitriol); kidney gross anatomy (retroperitoneal T12–L3, renal capsule, adipose capsule, Gerota fascia, hilum, cortex, medulla with 8–18 renal pyramids, renal columns, papillae, minor/major calyces, renal pelvis, ureter); renal microvasculature (20–25% resting cardiac output ~1.2 L/min; renal artery -> segmental -> interlobar -> arcuate -> cortical radiate -> afferent arteriole -> glomerulus -> efferent arteriole -> peritubular capillaries / vasa recta -> venous return); nephron microscopic organization (1 million/kidney; cortical 85% vs juxtamedullary 15% with long loops of Henle; renal corpuscle: glomerulus and Bowman capsule; proximal convoluted tubule PCT, loop of Henle, distal convoluted tubule DCT, collecting system); and the juxtaglomerular apparatus (JGA: macula densa, granular renin cells, extraglomerular mesangial cells).",
    coreStructures: [
          "Renal Cortex, Medullary Pyramids, Calyces & Renal Pelvis",
          "Dual-Arteriole Portal Microvasculature (Afferent -> Glomerulus -> Efferent -> Peritubular/Vasa Recta)",
          "Renal Corpuscle (Glomerular Capillaries & Bowman Capsule Podocytes)",
          "Proximal Convoluted Tubule (PCT) Brush Border Microvilli",
          "Juxtaglomerular Apparatus (JGA: Macula Densa & Granular Renin Cells)"
    ],
    keyPhysiologicalMechanisms: [
          "Series dual-arteriole resistance vessels creating high glomerular capillary hydrostatic pressure favoring filtration",
          "Juxtamedullary nephron deep medullary loops creating and maintaining vertical osmotic concentration gradients",
          "Macula densa luminal NaCl sensing signaling adjacent granular cells to modulate renin secretion",
          "Calyceal and ureteral smooth muscle myogenic pacemaker peristalsis propelling urine to the bladder"
    ],
    clinicalRelevance:
      "Renal artery stenosis renovascular hypertension, autosomal dominant polycystic kidney disease (ADPKD), renal cell carcinoma, glomerulonephritis, and obstructive hydronephrosis.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/25-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "RENAL-02",
    systemName: "Glomerular Filtration Dynamics, GFR Autoregulation & Starling Forces",
    openStaxChapters: "Chapter 25: The Urinary System (Sections 25.5–25.7)",
    educationalScope:
      "Glomerular filtration barrier three layers (1. Fenestrated capillary endothelium: pores 70–100 nm, excludes cells; 2. Glomerular basement membrane GBM: negatively charged heparan sulfate, type IV collagen, excludes polyanionic proteins; 3. Podocyte visceral layer: interdigitating pedicels, filtration slits 25–30 nm bridged by nephrin and podocin slit diaphragms); filtration dynamics and Starling forces (Glomerular capillary hydrostatic pressure Pgc ~55 mmHg; Bowman space hydrostatic pressure Pbs ~15 mmHg; Glomerular capillary oncotic pressure πgc ~30 mmHg; Bowman space oncotic pressure πbs ~0 mmHg; Net Filtration Pressure NFP = Pgc - [Pbs + πgc] = +10 mmHg); Glomerular Filtration Rate GFR (normal ~120–125 mL/min, ~180 L/day; Filtration Fraction FF = GFR / RPF ~20%); GFR intrinsic autoregulation (myogenic stretch mechanism; tubuloglomerular feedback TGF via macula densa adenosine release constricting afferent arteriole); and extrinsic neurohormonal regulation (sympathetic vasoconstriction, angiotensin II efferent constriction preserving GFR, ANP dilation).",
    coreStructures: [
          "Glomerular Tripartite Filtration Barrier (Endothelium, GBM, Podocytes)",
          "Podocyte Slit Diaphragm Nephrin & Podocin Molecular Sieve",
          "Intraglomerular Mesangial Cells & Contractile Machinery",
          "Afferent & Efferent Arteriolar Vascular Smooth Muscle Layers",
          "Macula Densa Luminal NKCC2 Solute Sensors"
    ],
    keyPhysiologicalMechanisms: [
          "Size and negative charge exclusion preventing glomerular filtration of plasma albumin",
          "Net Starling hydrostatic driving pressure producing 180 liters of primary ultrafiltrate daily",
          "Tubuloglomerular feedback: elevated GFR increases tubular NaCl delivery, triggering adenosine-mediated afferent vasoconstriction",
          "Angiotensin II preferential efferent arteriolar constriction sustaining GFR during systemic hypoperfusion"
    ],
    clinicalRelevance:
      "Nephrotic syndrome proteinuria (minimal change disease podocyte effacement, membranous nephropathy), Acute Kidney Injury (AKI prerenal azotemia vs ATN vs postrenal), eGFR staging of chronic kidney disease (CKD-EPI formula), and hemodynamically mediated renal failure from NSAIDs (afferent constriction) or ACEi/ARBs (efferent dilation) in hypovolemia.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/25-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "RENAL-03",
    systemName: "Tubular Reabsorption, Countercurrent Multiplication & Micturition",
    openStaxChapters: "Chapter 25: The Urinary System (Sections 25.6–25.10)",
    educationalScope:
      "Tubular transport principles (transcellular vs paracellular; transport maximum Tm, glucose renal threshold ~180–200 mg/dL); tubular segments: 1. Proximal Convoluted Tubule PCT (reabsorbs 65% water/Na+/Cl-, 100% glucose/amino acids via SGLT2/SGLT1, 85–90% HCO3- via NHE3 and carbonic anhydrase; secretes organic anions/cations; isosmotic); 2. Loop of Henle (thin descending limb permeable to water via aquaporin-1, impermeable to solutes, tubular fluid concentrates to 1200 mOsm/kg; thick ascending limb impermeable to water, actively reabsorbs 25% Na+/K+/2Cl- via NKCC2, dilutes tubular fluid to 100 mOsm/kg); 3. Distal Convoluted Tubule DCT (early DCT Na+/Cl- reabsorption via NCC, PTH-stimulated Ca2+ via TRPV5); 4. Collecting Duct (principal cells reabsorb Na+ via ENaC and water via ADH-induced aquaporin-2, secrete K+; intercalated cells regulate acid-base); medullary countercurrent multiplier and vasa recta countercurrent exchanger; urea recycling; and urine transport and micturition reflex (detrusor muscle, internal and external urethral sphincters, pontine micturition center).",
    coreStructures: [
          "Proximal Tubule Apical SGLT2 Cotransporters & NHE3 Exchangers",
          "Loop of Henle Thick Ascending Limb NKCC2 Cotransporters",
          "Distal Convoluted Tubule NCC & TRPV5 Calcium Channels",
          "Collecting Duct Principal Cells (ENaC & Aquaporin-2) & Intercalated Cells",
          "Bladder Detrusor Muscle, Trigone & Internal/External Sphincters"
    ],
    keyPhysiologicalMechanisms: [
          "Basolateral Na+/K+ ATPase active pumping driving secondary active apical solute reabsorption",
          "Countercurrent multiplication in Henle loops establishing vertical 300 to 1200 mOsm/kg medullary hyperosmolar gradient",
          "ADH V2-receptor mediated aquaporin-2 apical exocytosis governing final urine osmolarity and volume",
          "Parasympathetic pelvic nerve stimulation contracting detrusor and relaxing internal urethral sphincter during micturition"
    ],
    clinicalRelevance:
      "Diuretic mechanisms (loop diuretics: furosemide inhibiting NKCC2; thiazides: HCTZ inhibiting NCC; potassium-sparing: spironolactone, amiloride; osmotic: mannitol), SGLT2 inhibitors (empagliflozin, dapagliflozin) in diabetes and heart failure, diabetes insipidus, and neurogenic bladder.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/25-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "RENAL-04",
    systemName: "Fluid Compartments, Electrolyte Balance & Acid-Base Equilibrium",
    openStaxChapters: "Chapter 26: Fluid, Electrolyte, and Acid-Base Balance (Sections 26.1–26.5)",
    educationalScope:
      "Body fluid compartments: Total Body Water (TBW ~60% body weight, ~42 L; Intracellular Fluid ICF 2/3 TBW ~28 L, major cation K+, major anions proteins/phosphates; Extracellular Fluid ECF 1/3 TBW ~14 L: interstitial fluid 80% ~11 L, plasma 20% ~3 L; major ECF cation Na+, major ECF anions Cl-, HCO3-; hypothalamic osmoreceptors, thirst, ADH); electrolyte regulation (Sodium: ECF volume/osmolarity, aldosterone, ANP; Potassium: resting potential, cardiac rhythmicity, aldosterone renal excretion, insulin/beta-2 cellular shifts; Calcium/Phosphate: PTH, calcitriol, calcitonin; Magnesium); acid-base homeostasis (arterial pH 7.35–7.45; three defense lines: 1. Chemical buffers: bicarbonate CO2 + H2O <-> H2CO3 <-> H+ + HCO3-, Henderson-Hasselbalch equation; phosphate; proteins; 2. Respiratory compensation: medullary chemoreceptors adjust ventilation blowing off or retaining CO2 in minutes; 3. Renal compensation: tubular bicarbonate reabsorption and new bicarbonate synthesis via titratable acid and ammonium NH4+ excretion over days); and clinical acid-base disorders: metabolic acidosis (anion gap MUDPILES vs non-anion gap), metabolic alkalosis, respiratory acidosis, respiratory alkalosis.",
    coreStructures: [
          "Intracellular vs Extracellular Fluid Compartment Boundaries",
          "Hypothalamic Osmoreceptor Cells & Thirst Satiety Centers",
          "Carbonic Acid-Bicarbonate Buffer Chemical Equilibrium",
          "Renal Proximal Tubule Ammoniagenesis Enzymes (Glutaminase)",
          "Renal Alpha-Intercalated Cell Apical H+-ATPase & H+/K+-ATPase"
    ],
    keyPhysiologicalMechanisms: [
          "Osmotic water redistribution across cell membranes maintaining equal ICF and ECF osmolarities (~290 mOsm/kg)",
          "Aldosterone-stimulated apical ENaC sodium reabsorption driving electrogenic potassium and proton secretion",
          "Respiratory minute ventilation modulation altering volatile carbonic acid / PaCO2 levels",
          "Renal generation of new bicarbonate through tubular excretion of ammonium (NH4+) and titratable acid"
    ],
    clinicalRelevance:
      "Hyponatremia (SIADH, heart failure; risk of osmotic demyelination / CPM from rapid correction) vs Hypernatremia; Hypokalemia (arrhythmias, U waves) vs Hyperkalemia (peaked T waves, VFib); Hypocalcemia (tetany, prolonged QT); and arterial blood gas (ABG) diagnostic evaluation of mixed acid-base disorders.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/26-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "REPRO-01",
    systemName: "Male Reproductive System: Testicular Architecture & Spermatogenesis",
    openStaxChapters: "Chapter 27: The Reproductive System (Section 27.1)",
    educationalScope:
      "Male reproductive anatomy: scrotum (dartos and cremaster muscles maintaining testicular temperature 2–3°C below core); testes (tunica albuginea, lobules, seminiferous tubules, rete testis, efferent ductules); epididymis (head, body, tail; sperm maturation and motility storage); ductus / vas deferens, ejaculatory ducts, urethra; accessory glands: seminal vesicles (60% volume: alkaline, fructose, prostaglandins, clotting proteins), prostate gland (30% volume: milky, PSA, citric acid, seminalplasmin), bulbourethral / Cowper glands (alkaline lubricating pre-ejaculatory mucus); penis: corpora cavernosa, corpus spongiosum, glans; spermatogenesis (seminiferous tubules, ~64 days; spermatogonia -> primary spermatocytes meiosis I -> secondary spermatocytes meiosis II -> spermatids -> spermiogenesis into mature spermatozoa: head with acrosome, midpiece with mitochondria, flagellum); Sertoli sustentacular cells (blood-testis barrier tight junctions, ABP, inhibin B); Leydig interstitial cells (testosterone); hormonal regulation (GnRH, LH stimulating Leydig, FSH stimulating Sertoli); and male sexual response (parasympathetic erection via nitric oxide and cGMP; sympathetic emission; somatic ejaculation via pudendal nerve).",
    coreStructures: [
          "Scrotal Thermoregulatory Apparatus (Dartos & Cremaster Muscles)",
          "Seminiferous Tubules & Sertoli Cell Blood-Testis Barrier",
          "Leydig (Interstitial) Endocrine Cells & Androgen Biosynthesis",
          "Epididymis Duct System & Ductus (Vas) Deferens",
          "Penile Erectile Cylinders (Corpora Cavernosa & Corpus Spongiosum)",
          "Prostate Gland & Seminal Vesicles"
    ],
    keyPhysiologicalMechanisms: [
          "Blood-testis barrier tight junctions sequestering haploid auto-antigenic spermatids from immune attack",
          "Hypothalamic-Pituitary-Gonadal (HPG) negative feedback: testosterone inhibiting GnRH/LH, inhibin inhibiting FSH",
          "Parasympathetic pelvic nerve nitric oxide release stimulating cavernosal guanylyl cyclase and cGMP-mediated erection",
          "Sympathetic hypogastric nerve stimulation of ductal peristalsis producing semen emission into prostatic urethra"
    ],
    clinicalRelevance:
      "Male infertility evaluation (semen analysis: volume, concentration >15 million/mL, motility, morphology), varicocele hyperthermia impairment, testicular torsion emergency, cryptorchidism malignancy risk, benign prostatic hyperplasia (BPH), prostate cancer (PSA screening), and PDE-5 inhibitor pharmacology (sildenafil).",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/27-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "REPRO-02",
    systemName: "Female Reproductive System: Ovarian Cycle & Menstrual Physiology",
    openStaxChapters: "Chapter 27: The Reproductive System (Section 27.2)",
    educationalScope:
      "Female reproductive anatomy: ovaries (cortex with follicles, medulla; ovarian, suspensory, and broad ligaments); uterine / Fallopian tubes (infundibulum, fimbriae, ampulla fertilization site, isthmus; ciliated cells and secretory peg cells); uterus (fundus, body, cervix; perimetrium, myometrium, endometrium: stratum functionalis shed in menstruation, stratum basalis regenerating); vagina (acidic pH 3.8–4.5 via Lactobacillus); vulva (mons pubis, labia majora/minora, clitoris, greater vestibular Bartholin glands); mammary glands (lobes, alveoli, lactiferous ducts/sinuses); oogenesis (prenatal: oogonia to primary oocytes arrested in prophase I; puberty: monthly dominant follicle completes meiosis I to secondary oocyte arrested in metaphase II, completing meiosis II only if fertilized); ovarian cycle (follicular phase days 1–14: FSH follicular growth, two-cell two-gonadotropin steroidogenesis, estrogen surge; ovulation day 14: LH surge follicular rupture; luteal phase days 15–28: corpus luteum progesterone/estrogen secretion; corpus albicans degeneration); uterine cycle (menstrual days 1–5; proliferative days 6–14; secretory days 15–28); and neuroendocrine lactation control (prolactin milk synthesis, oxytocin let-down reflex).",
    coreStructures: [
          "Ovarian Follicular Hierarchy (Primordial, Primary, Secondary, Graafian Follicles)",
          "Uterine Tube Ampulla & Ciliated Fallopian Mucosa",
          "Endometrial Stratum Functionalis & Spiral Arterioles",
          "Corpus Luteum & Corpus Albicans Remnants",
          "Mammary Gland Alveolar Lobules & Myoepithelial Cells"
    ],
    keyPhysiologicalMechanisms: [
          "Two-cell two-gonadotropin steroidogenesis: theca cells synthesize androgens under LH, granulosa cells aromatize to estrogen under FSH",
          "High sustained estrogen switching from negative to positive feedback triggering the ovulatory LH surge",
          "Corpus luteum progesterone secretion inducing endometrial secretory glandular transformation for blastocyst implantation",
          "Progesterone withdrawal causing spiral arteriolar vasospasm, ischemic necrosis, and menstrual desquamation"
    ],
    clinicalRelevance:
      "Polycystic ovary syndrome (PCOS hyperandrogenism, anovulation), endometriosis dysmenorrhea and pelvic pain, pelvic inflammatory disease (PID tubal scarring and ectopic pregnancy), abnormal uterine bleeding (PALM-COEIN classification), menopause ovarian exhaustion, and hormonal contraception.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/27-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "DEV-01",
    systemName: "Fertilization, Cleavage Divisions & Blastocyst Implantation",
    openStaxChapters: "Chapter 28: Development and Inheritance (Section 28.1)",
    educationalScope:
      "Fertilization: sperm capacitation in female reproductive tract (cholesterol removal, hyperactivation); penetration of corona radiata and binding to zona pellucida ZP3; acrosome reaction (hyaluronidase, acrosin enzymatic digestion); sperm-egg membrane fusion (Izumo1-Juno interaction); prevention of polyspermy: fast block (rapid membrane depolarization) and slow block / cortical reaction (calcium wave, cortical granule exocytosis, ZP3 destruction, zona hardening); completion of female meiosis II with second polar body extrusion; male and female pronuclei fusion restoring diploid 46,XX or 46,XY zygote; pre-embryonic cleavage (mitotic divisions without growth, 2-cell, 4-cell, 8-cell, 16-cell morula enters uterus by day 3–4); blastocyst formation (days 4–5: blastocoel cavity, outer trophoblast placenta precursor, inner cell mass / embryoblast pluripotent stem cells; hatching from zona pellucida); and implantation (days 6–10: trophoblast differentiates into cytotrophoblast and syncytiotrophoblast; syncytiotrophoblast invasiveness into maternal decidua, lacunae formation, human chorionic gonadotropin hCG secretion rescuing corpus luteum).",
    coreStructures: [
          "Secondary Oocyte Corona Radiata & Zona Pellucida (ZP3 Matrix)",
          "Sperm Acrosomal Cap & Equatorial Fusion Segment",
          "Cleavage-Stage Morula & Blastocyst (Trophoblast vs Inner Cell Mass)",
          "Invasive Syncytiotrophoblast & Inner Cellular Cytotrophoblast",
          "Maternal Endometrial Decidual Stroma Layer"
    ],
    keyPhysiologicalMechanisms: [
          "Intracellular calcium wave driving cortical granule exocytosis establishing permanent vitelline block to polyspermy",
          "Blastocyst enzymatic hatching enabling direct trophoblast adhesion to receptive uterine endometrium",
          "Syncytiotrophoblast invasive digestion establishing maternal-fetal lacunar blood contact",
          "Trophoblastic hCG secretion maintaining luteal progesterone synthesis and preventing menstrual shedding"
    ],
    clinicalRelevance:
      "Ectopic pregnancy (ampullary tubal ectopic rupture and intra-abdominal hemorrhage), urine and serum beta-hCG pregnancy testing, gestational trophoblastic disease (hydatidiform mole, choriocarcinoma), and in vitro fertilization (IVF) embryo grading.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/28-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "DEV-02",
    systemName: "Embryogenesis, Primary Germ Layers, Organogenesis & Placentation",
    openStaxChapters: "Chapter 28: Development and Inheritance (Sections 28.2–28.3)",
    educationalScope:
      "Bilaminar embryonic disc formation (week 2: epiblast and hypoblast; amniotic cavity, yolk sac, extraembryonic mesoderm); gastrulation (week 3: primitive streak and node formation, epiblast invagination establishing trilaminar germ disc: Ectoderm, Mesoderm, Endoderm; notochord formation as primary axial inducer); germ layer derivatives: Ectoderm (surface: epidermis, hair, nails, lens; neuroectoderm: brain, spinal cord, retina; neural crest: cranial bones, melanocytes, dorsal root ganglia, adrenal medulla), Mesoderm (paraxial somites: sclerotome vertebrae/ribs, myotome skeletal muscles, dermatome dermis; intermediate: urogenital kidneys/gonads; lateral plate: limb skeleton, cardiovascular heart/vessels, smooth muscle), Endoderm (epithelial lining of GI and respiratory tracts, liver, pancreas, thyroid); embryonic folding (week 4: craniocaudal and lateral folding creating C-shaped cylindrical embryo; neural tube closure; heart beating day 21–22; pharyngeal arches; limb buds; organogenesis complete by week 8); placentation (chorionic villi interdigitating with decidua basalis; placental barrier; umbilical cord: two arteries, one vein, Wharton jelly; amnion and amniotic fluid); and fetal period (weeks 9 to 38/40: rapid somatic growth, tissue maturation).",
    coreStructures: [
          "Primitive Streak, Primitive Node & Invaginating Epiblast Cells",
          "Notochord Axial Inducing Rod",
          "Paraxial Mesoderm Somites (Sclerotome, Myotome, Dermatome)",
          "Neural Tube & Migratory Pluripotent Neural Crest Cells",
          "Mature Discoid Hemochorial Placenta & Intervillous Lacunae",
          "Umbilical Cord (Two Deoxygenated Arteries, One Oxygenated Vein, Wharton Jelly)"
    ],
    keyPhysiologicalMechanisms: [
          "Gastrulation morphogen signaling gradients establishing bilateral craniocaudal body symmetry",
          "Notochordal sonic hedgehog (Shh) induction of overlying ectoderm neural plate folding",
          "Placental passive diffusion and facilitated transport of oxygen, glucose, and maternal IgG antibodies",
          "Fetal hemoglobin (HbF) higher oxygen affinity extracting oxygen across intervillous maternal blood pools"
    ],
    clinicalRelevance:
      "Neural tube defects (anencephaly, spina bifida; prevention via maternal periconceptional folic acid), sacrococcygeal teratoma from primitive streak remnants, placental disorders (placenta previa, placental abruption, placenta accreta), preeclampsia, and oligohydramnios/polyhydramnios.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/28-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "DEV-03",
    systemName: "Parturition Physiology, Neonatal Transition, Teratology & Genetics",
    openStaxChapters: "Chapter 28: Development and Inheritance (Sections 28.4–28.6)",
    educationalScope:
      "Maternal pregnancy adaptations (cardiovascular: blood volume +45%, CO +40%, SVR drops; respiratory: tidal volume +40%, compensated respiratory alkalosis; renal: GFR +50%; metabolic: hPL gestational insulin resistance; relaxin ligamentous laxity); labor physiology / parturition (fetal CRH-ACTH-cortisol triggering placental estrogen elevation; rising estrogen-to-progesterone ratio upregulating myometrial oxytocin receptors and connexin gap junctions; Ferguson positive feedback reflex: cervical stretch, oxytocin release, uterine contractions; three labor stages: dilation, expulsion, placental delivery); neonatal transition (first breath: cold/sensory stimuli, pulmonary vascular resistance drops; shunt closures: foramen ovale, ductus arteriosus, ductus venosus; brown fat thermogenesis); teratology (critical exposure windows: weeks 1–2 all-or-none, weeks 3–8 organogenesis structural malformations, weeks 9+ functional deficits; known teratogens: thalidomide, isotretinoin, alcohol FAS, TORCH infections); and human genetics (autosomal dominant, autosomal recessive, X-linked recessive, non-Mendelian multifactorial, mitochondrial maternal inheritance, and chromosomal aneuploidies: trisomy 21 Down, trisomy 18 Edwards, trisomy 13 Patau, Turner 45,X, Klinefelter 47,XXY).",
    coreStructures: [
          "Myometrial Smooth Muscle Connexin-43 Gap Junction Networks",
          "Uterine Cervix Collagenous Remodeling Matrix",
          "Neonatal Transitional Shunt Ligaments (Fossa Ovalis, Ligamentum Arteriosum)",
          "Interscapular Brown Adipose Tissue Depots",
          "Human Karyotype Autosomes (1–22) & Sex Chromosomes (XX/XY)"
    ],
    keyPhysiologicalMechanisms: [
          "Ferguson neuroendocrine positive feedback loop: cervical stretch stimulating oxytocin release driving uterine contractions",
          "Immediate neonatal cardiopulmonary reconfiguration converting parallel fetal circulation to adult series circuits",
          "Teratogenic stage-specific disruption of embryonic morphogenetic cell migration and organogenesis",
          "Meiotic nondisjunction during gametogenesis producing gametes with abnormal chromosome copy numbers"
    ],
    clinicalRelevance:
      "Active management of third stage of labor preventing postpartum hemorrhage (oxytocin, fundal massage), APGAR scoring at 1 and 5 minutes, newborn genetic screening (PKU, hemoglobinopathies), teratogenic prescribing contraindications, and prenatal screening (cell-free fetal DNA NIPT, amniocentesis).",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/28-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "CARDIO-VASC",
    systemName: "Regional Vascular Beds & Organ Microcirculations (Systemic Focus)",
    openStaxChapters: "Chapter 20: The Cardiovascular System: Blood Vessels and Circulation (Section 20.5)",
    educationalScope:
      "Detailed comparative study of specialized regional circulatory beds in human physiology: coronary circulation (high baseline oxygen extraction 75%, tight metabolic autoregulation by adenosine and NO); cerebral circulation (internal carotid and vertebral systems, circle of Willis anastomoses, blood-brain barrier tight junctions, tight myogenic and chemical CO2 autoregulation); pulmonary circulation (low pressure, high capacitance, unique hypoxic pulmonary vasoconstriction); renal circulation (two capillary beds in series, high blood flow per gram, afferent/efferent resistance regulation); splanchnic circulation (celiac, SMA, IMA, postprandial hyperemic response); cutaneous circulation (thermoregulatory arteriovenous glomus shunts in apical skin); and skeletal muscle circulation (high basal tone, up to 20-fold exercise hyperemia).",
    coreStructures: [
          "Circle of Willis Basal Cerebral Anastomosis",
          "Coronary Subepicardial & Subendocardial Microcirculatory Beds",
          "Celiac Trunk & Superior/Inferior Mesenteric Vascular Arcades",
          "Cutaneous Dermal Glomus Bodies / Arteriovenous Anastomoses",
          "Skeletal Muscle Capillary Networks & Arteriolar Sphincters"
    ],
    keyPhysiologicalMechanisms: [
          "Neurovascular coupling: focal cerebral neuronal activity triggering localized arteriolar vasodilation (basis of fMRI)",
          "Exercise functional hyperemia mediated by local potassium, adenosine, lactate, and muscle contraction pumping",
          "Cutaneous sympathetic vasoconstriction shunting blood flow from peripheral skin to vital core viscera in hypothermia",
          "Splanchnic postprandial hyperemia redistributing up to 25% of cardiac output to gastrointestinal absorptive beds"
    ],
    clinicalRelevance:
      "Subclavian steal syndrome, acute vs chronic mesenteric ischemia (\"intestinal angina\"), hypertensive encephalopathy when blood pressure exceeds cerebral autoregulation threshold (>180 mmHg MAP), and Raynaud phenomenon digital vasospasm.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/20-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "NEURO-SPECIAL",
    systemName: "Integrated Neurosensory Processing & Vestibular Equilibrium (Sensory Focus)",
    openStaxChapters: "Chapter 14: The Somatic Nervous System (Section 14.1)",
    educationalScope:
      "Integrative neurosensory physiology linking peripheral receptor activation with higher cortical perception and motor reflex stabilization: vestibulo-ocular reflex (VOR: semicircular canal dynamic signals to vestibular nuclei, abducens/oculomotor driving compensatory eye movements equal and opposite to head movement to maintain stable retinal gaze); auditory brainstem localization (superior olivary complex comparing interaural time differences ITD for low frequencies and interaural level differences ILD for high frequencies); direct olfactory projection to limbic piriform cortex and amygdala bypassing the thalamus; gustatory-olfactory flavor synthesis in the orbitofrontal cortex; and dual visual processing streams (dorsal \"where/how\" parietal stream vs ventral \"what\" temporal stream).",
    coreStructures: [
          "Vestibulo-Ocular Reflex (VOR) Three-Neuron Brainstem Reflex Arc",
          "Superior Olivary Nuclei (Binaural Auditory Spatial Localization)",
          "Medial Longitudinal Fasciculus (MLF) Conjugate Gaze Tract",
          "Limbic Olfactory Amygdaloid & Entorhinal Projections",
          "Fusiform Gyrus Fusiform Face Area (FFA) & Ventral Visual Stream"
    ],
    keyPhysiologicalMechanisms: [
          "Hair cell kinocilium directional polarization: stereociliary deflection toward kinocilium depolarizes, away hyperpolarizes",
          "Internuclear conjugate gaze coordination through medial longitudinal fasciculus (MLF) linking CN VI and CN III",
          "Direct olfactory bulb projection to amygdala and hippocampus mediating rapid emotional and memory retrieval",
          "Ventral stream visual feature binding synthesizing shape, color, and object identity in inferior temporal cortex"
    ],
    clinicalRelevance:
      "Nystagmus clinical localization (peripheral labyrinthine vs central cerebellar/brainstem), internuclear ophthalmoplegia (INO in multiple sclerosis), visual agnosia and prosopagnosia (inability to recognize faces from fusiform lesions), and Head Impulse Test (HIT) in acute vestibular syndrome.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/14-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "MSK-KNEE",
    systemName: "Knee Articulation Biomechanics & Joint Dynamics (Joint Focus)",
    openStaxChapters: "Chapters 9 & 10: Joints & Muscle Tissue (Sections 9.6 & 10.2)",
    educationalScope:
      "Anatomical dissection and kinesiological analysis of the largest and most complex joint in the human body: tibiofemoral and patellofemoral articulations; extracapsular and capsular ligaments (patellar ligament, medial collateral ligament MCL fused with medial meniscus, lateral collateral ligament LCL cord-like, oblique/arcuate popliteal ligaments); intra-articular intracapsular cruciate ligaments (anterior cruciate ligament ACL preventing anterior tibial displacement; posterior cruciate ligament PCL preventing posterior tibial displacement); fibrocartilaginous menisci (medial C-shaped less mobile, lateral circular more mobile; load transmission, shock absorption); muscular stabilizers (quadriceps, hamstrings, popliteus unlocking muscle, gastrocnemius); and joint kinematics (screw-home terminal extension external tibial rotation, popliteus internal rotation to unlock).",
    coreStructures: [
          "Anterior & Posterior Cruciate Ligaments (ACL & PCL)",
          "Medial & Lateral Menisci Fibrocartilaginous Wedges",
          "Tibial (MCL) & Fibular (LCL) Collateral Ligaments",
          "Popliteus Muscle & Tendon (\"Unlocking\" Rotator Muscle)",
          "Patellofemoral Articular Cartilage & Quadriceps Extensor Mechanism"
    ],
    keyPhysiologicalMechanisms: [
          "Screw-home mechanism: external tibial rotation during final 15° of extension locking joint for effortless bipedal stance",
          "Meniscal hoop stress dissipation: converting vertical axial compressive loads into radial tensile hoop stresses",
          "Primary ACL restraint against anterior tibial translation and secondary restraint against tibial internal rotation",
          "Patellar sesamoid lever action elevating quadriceps tendon moment arm and mechanical efficiency"
    ],
    clinicalRelevance:
      "Anterior cruciate ligament (ACL) rupture (Lachman test, anterior drawer, pivot shift test), meniscal tears (McMurray test, joint line tenderness), patellofemoral pain syndrome (runner knee), knee osteoarthritis joint space narrowing, and Baker popliteal synovial cyst.",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/9-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
  {
    systemCode: "CRANIAL-NERVES",
    systemName: "Comprehensive Cranial Nerves I–XII Functional & Clinical Matrix",
    openStaxChapters: "Chapters 13 & 16: Anatomy of the Nervous System & Neurological Exam (Sections 13.4 & 16.3)",
    educationalScope:
      "Systematic master reference matrix for all 12 pairs of cranial nerves detailing modalities (GSA, SSA, GVA, SVA, GSE, SVE, GVE parasympathetic), brainstem origins and nuclei, foramina of exit from the skull base, peripheral targets, and classic clinical deficits: CN I Olfactory (SVA, cribriform plate, anosmia), CN II Optic (SSA, optic canal, anopsia), CN III Oculomotor (GSE/GVE, superior orbital fissure, ptosis, down-and-out eye, mydriasis), CN IV Trochlear (GSE, superior orbital fissure, vertical diplopia, head tilt), CN V Trigeminal (GSA/SVE; V1 superior orbital fissure, V2 foramen rotundum, V3 foramen ovale; facial numbness, absent corneal reflex, masticatory weakness), CN VI Abducens (GSE, superior orbital fissure, medial strabismus, failure of abduction), CN VII Facial (SVE/GVE/SVA/GSA, internal acoustic meatus and stylomastoid foramen, Bell palsy hemifacial paralysis, loss of taste anterior 2/3), CN VIII Vestibulocochlear (SSA, internal acoustic meatus, sensorineural hearing loss, vertigo), CN IX Glossopharyngeal (SVE/GVE/GVA/SVA/GSA, jugular foramen, loss of gag reflex afferent, dysphagia), CN X Vagus (SVE/GVE/GVA/GSA, jugular foramen, uvular deviation away from lesion, hoarseness, autonomic dysregulation), CN XI Accessory (SVE, jugular foramen, sternocleidomastoid/trapezius weakness, shoulder drop), CN XII Hypoglossal (GSE, hypoglossal canal, tongue deviation toward side of lesion).",
    coreStructures: [
          "Cranial Nerves I through XII Brainstem Nuclei (Midbrain, Pons, Medulla)",
          "Skull Base Exit Foramina (Cribriform, Optic Canal, SOF, Rotundum, Ovale, IAM, Jugular, Hypoglossal)",
          "Cavernous Sinus Transiting Neurovascular Bundle (CN III, IV, V1, V2, VI & ICA)",
          "Parasympathetic Cranial Ganglia (Ciliary, Pterygopalatine, Submandibular, Otic)",
          "Cranial Reflex Arcs (Pupillary CN II/III, Corneal CN V1/VII, Gag CN IX/X)"
    ],
    keyPhysiologicalMechanisms: [
          "Branchiomeric somite motor innervation matching embryonic pharyngeal arches (1st CN V3, 2nd CN VII, 3rd CN IX, 4th/6th CN X)",
          "Cavernous sinus spatial relationships predisposing transiting oculomotor nerves to compression or thrombosis",
          "Bilateral brainstem cranial reflex integration coordinating consensual pupillary, protective corneal, and airway gag responses",
          "Corticonuclear supranuclear upper motor neuron bilateral innervation protecting upper facial muscles in unilateral stroke"
    ],
    clinicalRelevance:
      "Cavernous sinus thrombosis multi-nerve ophthalmoplegia, jugular foramen syndrome (Vernet syndrome CN IX, X, XI paralysis), cerebellopontine angle acoustic neuroma (CN VII/VIII compression), microvascular pupil-sparing third nerve palsy (diabetes) vs compressive blown-pupil third nerve palsy (PCoA aneurysm).",
    licenseType: 'CC BY-NC-SA 4.0',
    aiIngestionStatus: 'RESTRICTED / NO AI TRAINING',
    commercialPipelinePolicy: 'EXCLUDED FROM COMMERCIAL AI TRAINING PIPELINE',
    governanceNotice:
      'OpenStax Anatomy and Physiology 2e material is under a non-commercial ShareAlike licence, and OpenStax states that it may not be ingested into generative AI or used to train large language models without permission. Do not copy it into a commercial En Nanba knowledge base or training pipeline without resolving the relevant rights.',
    officialBookUrl: "https://openstax.org/books/anatomy-and-physiology-2e/pages/16-introduction",
    officialLicenseUrl: 'https://openstax.org/license',
  },
];
