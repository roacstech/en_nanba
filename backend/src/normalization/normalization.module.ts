import { Module } from '@nestjs/common';
import { NormalizationService } from './normalization.service';
import { NormalizationController } from './normalization.controller';
import { ExternalTerminologiesService } from './external-terminologies.service';
import { AiModule } from '../ai/ai.module';

@Module({
  imports: [AiModule],
  controllers: [NormalizationController],
  providers: [NormalizationService, ExternalTerminologiesService],
  exports: [NormalizationService, ExternalTerminologiesService],
})
export class NormalizationModule {}
