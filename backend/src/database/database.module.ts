import { Module, Global } from '@nestjs/common';
import { Neo4jService } from './neo4j.service';
import { QdrantService } from './qdrant.service';
import { PostgresService } from './postgres.service';

@Global()
@Module({
  providers: [Neo4jService, QdrantService, PostgresService],
  exports: [Neo4jService, QdrantService, PostgresService],
})
export class DatabaseModule {}
