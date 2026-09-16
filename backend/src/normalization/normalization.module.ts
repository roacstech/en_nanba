import { Module } from '@nestjs/common';
import { NormalizationService } from './normalization.service';
import { NormalizationController } from './normalization.controller';

@Module({
  controllers: [NormalizationController],
  providers: [NormalizationService],
  exports: [NormalizationService],
})
export class NormalizationModule {}
