import { Injectable, Logger } from '@nestjs/common';
import { Neo4jService } from '../database/neo4j.service';
import { RadarAlert } from '../common/interfaces/clinical.interface';

@Injectable()
export class RadarService {
  private readonly logger = new Logger(RadarService.name);

  constructor(private neo4jService: Neo4jService) {}

  // Run all deterministic graph queries to detect clinical contradictions and diagnostic gaps
  async evaluatePatientRadar(patientId: string): Promise<RadarAlert[]> {
    const alerts: RadarAlert[] = [];
    const graph = await this.neo4jService.getPatientGraph(patientId);
    const nodes = graph.nodes;
    const rels = graph.relationships;

    const medications = nodes.filter(n => n.label === 'Medication');
    const allergies = nodes.filter(n => n.label === 'Allergy');
    const investigations = nodes.filter(n => n.label === 'Investigation');

    // Rule 1: Deterministic Drug-Drug Contraindication
    // Look for Sildenafil + Nitroglycerin
    const hasSildenafil = medications.some(m => m.properties.name?.toLowerCase().includes('sildenafil') || m.properties.rxNormCode === '136443');
    const hasNitrate = medications.some(m => m.properties.name?.toLowerCase().includes('nitroglycerin') || m.properties.rxNormCode === '7052');

    if (hasSildenafil && hasNitrate) {
      alerts.push({
        id: `RADAR-${patientId}-CONTRA-01`,
        patientId,
        severity: 'CRITICAL',
        ruleId: 'DETERMINISTIC-CYPHER-DDI-01',
        ruleName: 'Severe Drug-Drug Contraindication (PDE5i + Organic Nitrate)',
        summary: 'Concurrent prescription of Sildenafil and Nitroglycerin detected.',
        clinicalHazard: 'Co-administration produces profound peripheral vasodilation and severe, potentially fatal systemic hypotension or coronary hypoperfusion.',
        affectedEntities: {
          source: 'Sildenafil 50mg [RxNorm: 136443]',
          target: 'Nitroglycerin 0.4mg [RxNorm: 7052]',
          relationshipType: 'CONTRAINDICATED_WITH',
        },
        deterministicCypherRule: `MATCH (p:Patient {id: "${patientId}"})-[:PRESCRIBED]->(m1:Medication {rxNormCode: "136443"}), (p)-[:PRESCRIBED]->(m2:Medication {rxNormCode: "7052"}) RETURN m1, m2`,
        recommendedAction: 'WITHHOLD Nitroglycerin immediately or discontinue Sildenafil (minimum 24-hour washout required before organic nitrate administration).',
        status: 'ACTIVE',
        createdAt: new Date().toISOString(),
      });
    }

    // Rule 2: Deterministic Drug-Allergy Conflict
    // Look for Penicillin allergy + Amoxicillin prescription
    const hasPenicillinAllergy = allergies.some(a => a.properties.name?.toLowerCase().includes('penicillin'));
    const amoxicillinPrescription = medications.find(m => m.properties.name?.toLowerCase().includes('amoxicillin') || m.properties.rxNormCode === '723');

    if (hasPenicillinAllergy && amoxicillinPrescription) {
      alerts.push({
        id: `RADAR-${patientId}-ALLERGY-01`,
        patientId,
        severity: 'CRITICAL',
        ruleId: 'DETERMINISTIC-CYPHER-ALLERGY-01',
        ruleName: 'Documented Drug-Allergy Cross-Reactivity',
        summary: 'Amoxicillin prescribed to patient with documented Penicillin hypersensitivity.',
        clinicalHazard: 'Amoxicillin shares the core beta-lactam ring with penicillin and triggers severe IgE-mediated type-1 hypersensitivity / anaphylaxis.',
        affectedEntities: {
          source: 'Penicillin Allergy [ICD-11: 4A80]',
          target: `${amoxicillinPrescription.properties.name} [RxNorm: 723]`,
          relationshipType: 'CONFLICTS_WITH',
        },
        deterministicCypherRule: `MATCH (p:Patient {id: "${patientId}"})-[:HAS_ALLERGY]->(a:Allergy), (p)-[:PRESCRIBED]->(m:Medication) WHERE toLower(a.name) CONTAINS "penicillin" AND toLower(m.name) CONTAINS "amoxicillin" RETURN a, m`,
        recommendedAction: 'CANCEL Amoxicillin order immediately. Consider non-beta-lactam alternative such as Macrolides (Azithromycin) or Fluoroquinolones.',
        status: 'ACTIVE',
        createdAt: new Date().toISOString(),
      });
    }

    // Rule 3: Diagnostic Gap / Missing Baseline Investigation
    // Look for Metformin prescription without recent eGFR / Creatinine investigation
    const hasMetformin = medications.some(m => m.properties.name?.toLowerCase().includes('metformin') || m.properties.rxNormCode === '6809');
    const hasEgfrOrCreatinine = investigations.some(i =>
      i.properties.loincCode === '33914-3' ||
      i.properties.loincCode === '2160-0' ||
      i.properties.name?.toLowerCase().includes('egfr') ||
      i.properties.name?.toLowerCase().includes('creatinine')
    );

    if (hasMetformin && !hasEgfrOrCreatinine) {
      alerts.push({
        id: `RADAR-${patientId}-GAP-01`,
        patientId,
        severity: 'HIGH',
        ruleId: 'DETERMINISTIC-CYPHER-GAP-01',
        ruleName: 'Diagnostic Gap: Missing Baseline Renal Function (eGFR)',
        summary: 'Metformin active without baseline or recent Renal Function test.',
        clinicalHazard: 'Metformin is cleared primarily through renal tubules. Undiagnosed or declining renal function (eGFR < 30 mL/min/1.73m²) drastically increases risk of fatal Metformin-associated Lactic Acidosis (MALA).',
        affectedEntities: {
          source: 'Metformin HCl 500mg [RxNorm: 6809]',
          target: 'eGFR / Serum Creatinine [LOINC: 33914-3 / 2160-0]',
          relationshipType: 'MISSING_MANDATORY_BASELINE',
        },
        deterministicCypherRule: `MATCH (p:Patient {id: "${patientId}"})-[:PRESCRIBED]->(m:Medication {rxNormCode: "6809"}) WHERE NOT (p)-[:INVESTIGATED_WITH]->(:Investigation {loincCode: "33914-3"}) RETURN m`,
        recommendedAction: 'ORDER urgent Serum Creatinine & eGFR panel (LOINC: 33914-3). If eGFR < 45 mL/min, reduce dose; if eGFR < 30 mL/min, discontinue immediately.',
        status: 'ACTIVE',
        createdAt: new Date().toISOString(),
      });
    }

    // Rule 4: Therapeutic Duplication (e.g., ACE-I + ARB)
    const hasLisinopril = medications.some(m => m.properties.name?.toLowerCase().includes('lisinopril') || m.properties.rxNormCode === '29046');
    const hasLosartan = medications.some(m => m.properties.name?.toLowerCase().includes('losartan') || m.properties.rxNormCode === '6918');

    if (hasLisinopril && hasLosartan) {
      alerts.push({
        id: `RADAR-${patientId}-DUP-01`,
        patientId,
        severity: 'MEDIUM',
        ruleId: 'DETERMINISTIC-CYPHER-DUPLICATION-01',
        ruleName: 'Duplicate Renin-Angiotensin System Blockade',
        summary: 'Concurrent prescribing of ACE Inhibitor (Lisinopril) and ARB (Losartan).',
        clinicalHazard: 'Dual RAAS blockade does not provide additional cardiovascular benefit over monotherapy while substantially increasing the risk of hyperkalemia, syncope, and acute kidney injury.',
        affectedEntities: {
          source: 'Lisinopril [RxNorm: 29046]',
          target: 'Losartan [RxNorm: 6918]',
          relationshipType: 'DUPLICATE_THERAPY',
        },
        deterministicCypherRule: `MATCH (p:Patient {id: "${patientId}"})-[:PRESCRIBED]->(m1:Medication), (p)-[:PRESCRIBED]->(m2:Medication) WHERE m1.rxNormCode = "29046" AND m2.rxNormCode = "6918" RETURN m1, m2`,
        recommendedAction: 'DE-PRESCRIBE one of the agents. Continue either Lisinopril or Losartan as monotherapy.',
        status: 'ACTIVE',
        createdAt: new Date().toISOString(),
      });
    }

    return alerts;
  }
}
