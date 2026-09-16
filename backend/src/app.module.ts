import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';
import { NormalizationModule } from './normalization/normalization.module';
import { GraphModule } from './graph/graph.module';
import { AiModule } from './ai/ai.module';
import { PatientModule } from './patient/patient.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '../.env'],
    }),
    DatabaseModule,
    NormalizationModule,
    GraphModule,
    AiModule,
    PatientModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
