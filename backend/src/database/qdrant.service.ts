import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MedicalCode } from '../common/interfaces/clinical.interface';
import { MEDICAL_DICTIONARIES } from '../normalization/medical-dictionary.data';

export interface VectorRecord {
  id: string | number;
  vector: number[];
  payload: MedicalCode;
}

@Injectable()
export class QdrantService implements OnModuleInit {
  private readonly logger = new Logger(QdrantService.name);
  private qdrantUrl: string;
  private isConnected = false;

  // In-Memory Vector Store Fallback
  private inMemoryIndex: VectorRecord[] = [];

  constructor(private configService: ConfigService) {
    this.qdrantUrl = this.configService.get<string>('QDRANT_URL', 'http://localhost:6333');
  }

  async onModuleInit() {
    await this.testConnectionAndInit();
    await this.seedDictionaries();
  }

  getConnectivityStatus(): { isConnected: boolean; mode: 'QDRANT_LIVE' | 'IN_MEMORY_VECTOR_INDEX'; totalTerms: number } {
    return {
      isConnected: this.isConnected,
      mode: this.isConnected ? 'QDRANT_LIVE' : 'IN_MEMORY_VECTOR_INDEX',
      totalTerms: this.inMemoryIndex.length,
    };
  }

  private async testConnectionAndInit() {
    try {
      const res = await fetch(`${this.qdrantUrl}/collections`, { signal: AbortSignal.timeout(2500) });
      if (res.ok) {
        this.isConnected = true;
        this.logger.log(`Successfully connected to Qdrant at ${this.qdrantUrl}`);
        await this.ensureCollectionExists('medical_dictionaries');
      } else {
        this.fallbackToInMemory();
      }
    } catch (e: any) {
      this.fallbackToInMemory();
    }
  }

  private fallbackToInMemory() {
    this.isConnected = false;
    this.logger.warn(`Qdrant connection unavailable. Running with Embedded In-Memory Vector Index.`);
  }

  private async ensureCollectionExists(collectionName: string) {
    try {
      const getRes = await fetch(`${this.qdrantUrl}/collections/${collectionName}`);
      if (getRes.status === 404) {
        await fetch(`${this.qdrantUrl}/collections/${collectionName}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            vectors: {
              size: 64, // Lightweight dimension for POC embedding representation
              distance: 'Cosine',
            },
          }),
        });
        this.logger.log(`Created Qdrant collection: ${collectionName}`);
      }
    } catch (e: any) {
      this.logger.warn(`Failed ensuring collection in Qdrant: ${e.message}`);
    }
  }

  // Pre-load embeddings of the medical dictionaries
  async seedDictionaries() {
    this.inMemoryIndex = [];
    let counter = 1;

    for (const item of MEDICAL_DICTIONARIES) {
      const vector = this.generateSemanticEmbedding(`${item.display} ${item.description || ''} ${item.category || ''}`);
      this.inMemoryIndex.push({
        id: counter++,
        vector,
        payload: item,
      });
    }

    this.logger.log(`Seeded ${this.inMemoryIndex.length} medical dictionary terms across ICD-11, LOINC, RxNorm, UCUM, and FHIR.`);
  }

  // Semantic similarity search across medical dictionary embeddings
  
  async searchTerminology(query: string, systemFilter?: string, limit: number = 5): Promise<MedicalCode[]> {
    const cleanQuery = query.toLowerCase().replace(/[^a-z0-9]/g, '');
    const queryVector = this.generateSemanticEmbedding(query);
    const queryTokens = query.toLowerCase().split(/[\s\-\/,]+/).filter(t => t.length > 1);

    // Common medical acronym expansions
    const acronymMap: Record<string, string[]> = {
      hba1c: ['hemoglobin a1c', 'glycated hemoglobin', 'a1c'],
      egfr: ['glomerular filtration rate', 'gfr'],
      bp: ['blood pressure', 'systolic', 'diastolic'],
      hr: ['heart rate', 'pulse'],
      ckd: ['chronic kidney disease'],
      t2d: ['type 2 diabetes', 'diabetes mellitus'],
      htn: ['hypertension', 'blood pressure'],
    };

    const expandedTokens = [...queryTokens];
    for (const token of queryTokens) {
      if (acronymMap[token]) {
        expandedTokens.push(...acronymMap[token].join(' ').split(' '));
      }
    }

    let candidates = this.inMemoryIndex;
    if (systemFilter && systemFilter !== 'ALL') {
      candidates = candidates.filter(c => c.payload.system.toUpperCase() === systemFilter.toUpperCase());
    }

    const scored = candidates.map(item => {
      const cosine = this.calculateCosineSimilarity(queryVector, item.vector);
      const textToSearch = `${item.payload.display} ${item.payload.code} ${item.payload.description || ''} ${item.payload.category || ''}`.toLowerCase();
      const normalizedTarget = textToSearch.replace(/[^a-z0-9]/g, '');

      let matchBonus = 0;
      // Direct substring match
      if (normalizedTarget.includes(cleanQuery) || cleanQuery.includes(normalizedTarget)) {
        matchBonus += 0.45;
      }

      // Exact code match
      if (item.payload.code.toLowerCase() === query.trim().toLowerCase()) {
        matchBonus += 0.8;
      }

      // Token overlap
      for (const token of expandedTokens) {
        if (textToSearch.includes(token)) {
          matchBonus += 0.15;
        }
      }

      const finalScore = Math.min(1.0, cosine * 0.4 + matchBonus);

      return {
        ...item.payload,
        score: parseFloat(finalScore.toFixed(4)),
      };
    });

    // Sort by highest score
    scored.sort((a, b) => (b.score || 0) - (a.score || 0));
    return scored.slice(0, limit);
  }

  // Generates a deterministic semantic pseudo-embedding vector (64 dimensions)
  // based on character bigrams and vocabulary hash buckets
  generateSemanticEmbedding(text: string): number[] {
    const dim = 64;
    const vector = new Array(dim).fill(0);
    const normalized = text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ');
    const words = normalized.split(/\s+/).filter(w => w.length > 0);

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      let hash = 0;
      for (let j = 0; j < word.length; j++) {
        hash = (hash << 5) - hash + word.charCodeAt(j);
        hash |= 0;
      }
      const idx = Math.abs(hash) % dim;
      vector[idx] += 1.0 / Math.sqrt(word.length);

      // Bigram features
      if (i > 0) {
        const bigram = `${words[i - 1]}_${word}`;
        let bHash = 0;
        for (let k = 0; k < bigram.length; k++) {
          bHash = (bHash << 5) - bHash + bigram.charCodeAt(k);
          bHash |= 0;
        }
        const bIdx = Math.abs(bHash) % dim;
        vector[bIdx] += 1.5;
      }
    }

    // L2 normalize
    const norm = Math.sqrt(vector.reduce((sum, val) => sum + val * val, 0));
    if (norm > 0) {
      for (let i = 0; i < dim; i++) {
        vector[i] = vector[i] / norm;
      }
    }
    return vector;
  }

  private calculateCosineSimilarity(vecA: number[], vecB: number[]): number {
    let dot = 0;
    for (let i = 0; i < vecA.length; i++) {
      dot += vecA[i] * vecB[i];
    }
    return Math.max(0, dot);
  }
}
