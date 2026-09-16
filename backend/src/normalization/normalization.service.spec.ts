import { Test, TestingModule } from '@nestjs/testing';
import { NormalizationService } from './normalization.service';
import { QdrantService } from '../database/qdrant.service';
import { Neo4jService } from '../database/neo4j.service';
import { PostgresService } from '../database/postgres.service';
import { ConfigService } from '@nestjs/config';

describe('NormalizationService', () => {
  let service: NormalizationService;
  let qdrantService: QdrantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NormalizationService,
        QdrantService,
        Neo4jService,
        PostgresService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn((key: string, defaultValue: any) => defaultValue),
          },
        },
      ],
    }).compile();

    service = module.get<NormalizationService>(NormalizationService);
    qdrantService = module.get<QdrantService>(QdrantService);
    await qdrantService.onModuleInit();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should map clinical terms to ICD-11, LOINC, and RxNorm codes', async () => {
    const diabetesMatch = await service.normalizeTerm('diabetes', 'ICD-11');
    expect(diabetesMatch.length).toBeGreaterThan(0);
    expect(diabetesMatch[0].code).toBe('5A11');
    expect(diabetesMatch[0].system).toBe('ICD-11');

    const labMatch = await service.normalizeTerm('HbA1c', 'LOINC');
    expect(labMatch.length).toBeGreaterThan(0);
    expect(labMatch[0].code).toBe('4548-4');

    const rxMatch = await service.normalizeTerm('Metformin', 'RxNorm');
    expect(rxMatch.length).toBeGreaterThan(0);
    expect(rxMatch[0].code).toBe('6809');
  });

  it('should ingest and normalize an unstructured clinical note', async () => {
    const res = await service.ingestClinicalText({
      patientId: 'P-1001',
      clinicalText: 'Patient presents with angina pectoris and uncontrolled hypertension. Currently taking Metformin 500mg. Recent HbA1c is 8.4%. BP: 152/94 mmHg.',
      documentType: 'doctor_notes',
    });

    expect(res.entitiesCount).toBeGreaterThanOrEqual(3);
    const hasMetformin = res.entities.some(e => e.rawText.toLowerCase().includes('metformin'));
    const hasHypertension = res.entities.some(e => e.rawText.toLowerCase().includes('hypertension'));
    expect(hasMetformin).toBe(true);
    expect(hasHypertension).toBe(true);
  });
});
