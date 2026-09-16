import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('EN-NANBA-BOOTSTRAP');
  const app = await NestFactory.create(AppModule);

  // Enable CORS for Doctor Workspace Frontend
  app.enableCors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    credentials: true,
  });

  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: false,
    }),
  );

  // Swagger Documentation Setup
  const config = new DocumentBuilder()
    .setTitle('EN NANBA Clinical Intelligence Platform API')
    .setDescription('Proof of Concept (POC) Backend — Clinical Ingestion, Normalization, Clinical Graph, Gap & Contradiction Radar, and AI Orchestration')
    .setVersion('1.0.0')
    .addTag('Clinical Ingestion & Normalization')
    .addTag('The Clinical Intelligence Fabric (Neo4j)')
    .addTag('AI Orchestration & Reasoning (Gemini + LangChain)')
    .addTag('Patient Longitudinal Memory')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const port = process.env.PORT || 4000;
  await app.listen(port);
  logger.log(`=======================================================`);
  logger.log(`  EN NANBA Clinical Intelligence Core is running!`);
  logger.log(`  API Base URL: http://localhost:${port}`);
  logger.log(`  Swagger Docs: http://localhost:${port}/api/docs`);
  logger.log(`=======================================================`);
}

bootstrap();
