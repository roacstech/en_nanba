import { Test, TestingModule } from '@nestjs/testing';
import { RadarService } from './radar.service';
import { Neo4jService } from '../database/neo4j.service';
import { ConfigService } from '@nestjs/config';

describe('RadarService (Deterministic Gap & Contradiction Radar)', () => {
  let radarService: RadarService;
  let neo4jService: Neo4jService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RadarService,
        Neo4jService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn((key: string, defaultValue: any) => defaultValue),
          },
        },
      ],
    }).compile();

    radarService = module.get<RadarService>(RadarService);
    neo4jService = module.get<Neo4jService>(Neo4jService);
    await neo4jService.onModuleInit();
  });

  it('should be defined', () => {
    expect(radarService).toBeDefined();
  });

  it('should detect CRITICAL drug-drug contraindication between Sildenafil and Nitroglycerin', async () => {
    // Setup patient with both medications
    await neo4jService.createNode({ id: 'P-TEST', label: 'Patient', properties: { id: 'P-TEST' } });
    await neo4jService.createNode({ id: 'med-sild', label: 'Medication', properties: { name: 'Sildenafil 50mg', rxNormCode: '136443' } });
    await neo4jService.createNode({ id: 'med-nitro', label: 'Medication', properties: { name: 'Nitroglycerin 0.4mg', rxNormCode: '7052' } });

    await neo4jService.createRelationship({ id: 'rel-1', sourceId: 'P-TEST', targetId: 'med-sild', type: 'PRESCRIBED' });
    await neo4jService.createRelationship({ id: 'rel-2', sourceId: 'P-TEST', targetId: 'med-nitro', type: 'PRESCRIBED' });

    const alerts = await radarService.evaluatePatientRadar('P-TEST');
    expect(alerts.length).toBeGreaterThanOrEqual(1);

    const sildenafilContra = alerts.find(a => a.ruleId === 'DETERMINISTIC-CYPHER-DDI-01');
    expect(sildenafilContra).toBeDefined();
    expect(sildenafilContra?.severity).toBe('CRITICAL');
    expect(sildenafilContra?.clinicalHazard).toContain('systemic hypotension');
  });

  it('should detect CRITICAL drug-allergy cross-reactivity for Penicillin allergy with Amoxicillin', async () => {
    await neo4jService.createNode({ id: 'P-ALLERGY', label: 'Patient', properties: { id: 'P-ALLERGY' } });
    await neo4jService.createNode({ id: 'all-pen', label: 'Allergy', properties: { name: 'Penicillin' } });
    await neo4jService.createNode({ id: 'med-amox', label: 'Medication', properties: { name: 'Amoxicillin 500mg', rxNormCode: '723' } });

    await neo4jService.createRelationship({ id: 'r-a1', sourceId: 'P-ALLERGY', targetId: 'all-pen', type: 'HAS_ALLERGY' });
    await neo4jService.createRelationship({ id: 'r-m1', sourceId: 'P-ALLERGY', targetId: 'med-amox', type: 'PRESCRIBED' });

    const alerts = await radarService.evaluatePatientRadar('P-ALLERGY');
    const allergyAlert = alerts.find(a => a.ruleId === 'DETERMINISTIC-CYPHER-ALLERGY-01');
    expect(allergyAlert).toBeDefined();
    expect(allergyAlert?.severity).toBe('CRITICAL');
    expect(allergyAlert?.recommendedAction).toContain('CANCEL Amoxicillin');
  });

  it('should detect HIGH severity diagnostic gap when Metformin is prescribed without renal monitoring', async () => {
    await neo4jService.createNode({ id: 'P-GAP', label: 'Patient', properties: { id: 'P-GAP' } });
    await neo4jService.createNode({ id: 'med-met', label: 'Medication', properties: { name: 'Metformin HCl', rxNormCode: '6809' } });
    await neo4jService.createRelationship({ id: 'r-g1', sourceId: 'P-GAP', targetId: 'med-met', type: 'PRESCRIBED' });

    const alerts = await radarService.evaluatePatientRadar('P-GAP');
    const gapAlert = alerts.find(a => a.ruleId === 'DETERMINISTIC-CYPHER-GAP-01');
    expect(gapAlert).toBeDefined();
    expect(gapAlert?.severity).toBe('HIGH');
    expect(gapAlert?.ruleName).toContain('Missing Baseline Renal Function');
  });
});
