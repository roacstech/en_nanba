import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { NormalizationService } from './normalization.service';
import { IngestTextDto, IngestFhirDto, NormalizeQueryDto } from '../common/dto/clinical.dto';

@Controller('api')
export class NormalizationController {
  constructor(private readonly normalizationService: NormalizationService) {}

  @Post('ingest/text')
  async ingestClinicalText(@Body() dto: IngestTextDto) {
    return this.normalizationService.ingestClinicalText(dto);
  }

  @Post('ingest/fhir')
  async ingestFhirBundle(@Body() dto: IngestFhirDto) {
    return this.normalizationService.ingestFhirBundle(dto);
  }

  @Get('normalize')
  async normalizeSingleTerm(@Query() query: NormalizeQueryDto) {
    return this.normalizationService.normalizeTerm(
      query.term,
      query.system,
      query.limit ? Number(query.limit) : 5,
    );
  }

  @Get('dictionaries')
  async getDictionaries(
    @Query('system') system?: string,
    @Query('q') query?: string,
  ) {
    return this.normalizationService.getDictionaries(system, query);
  }

  @Get('normalization/ai-search')
  async aiSearch(
    @Query('q') query: string,
    @Query('system') system?: string,
  ) {
    return this.normalizationService.aiSearchTerminology(query, system);
  }
}
