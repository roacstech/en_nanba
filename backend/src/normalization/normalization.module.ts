import { Module } from '@nestjs/common';
import { NormalizationService } from './normalization.service';
import { NormalizationController } from './normalization.controller';
import { AiModule } from '../ai/ai.module';

@Module({
  imports: [AiModule],
  controllers: [NormalizationController],
  providers: [NormalizationService],
  exports: [NormalizationService],
})
export class NormalizationModule {}
