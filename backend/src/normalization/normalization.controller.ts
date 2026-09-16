import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { NormalizationService } from './normalization.service';
import { ExternalTerminologiesService } from './external-terminologies.service';
import { IngestTextDto, IngestFhirDto, NormalizeQueryDto } from '../common/dto/clinical.dto';

@Controller('api')
export class NormalizationController {
  constructor(
    private readonly normalizationService: NormalizationService,
    private readonly externalTerminologies: ExternalTerminologiesService,
  ) {}

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

  // ==========================================
  // Live Terminology Verification Endpoints
  // ==========================================
  @Get('normalize/verify-rxnorm')
  async verifyRxNorm(@Query('term') term: string) {
    return this.externalTerminologies.verifyRxNorm(term || '');
  }

  @Get('normalize/verify-icd11')
  async verifyIcd11(@Query('term') term: string) {
    return this.externalTerminologies.verifyIcd11(term || '');
  }

  @Get('normalize/icd11/chapters')
  async getIcd11Chapters() {
    return this.externalTerminologies.getIcd11Chapters();
  }

  @Get('normalize/verify-loinc')
  async verifyLoinc(@Query('term') term: string) {
    return this.externalTerminologies.verifyLoinc(term || '');
  }

  @Get('normalize/verify-ucum')
  async verifyUcum(@Query('unit') unit: string) {
    return this.externalTerminologies.verifyUcum(unit || '');
  }

  @Post('normalize/verify-interactions')
  async verifyInteractions(@Body('rxcuis') rxcuis: string[]) {
    return this.externalTerminologies.checkDrugInteractions(rxcuis || []);
  }

  @Post('normalize/validate-fhir')
  async validateFhir(@Body('fhirBundle') fhirBundle: any) {
    return this.externalTerminologies.validateFhirBundle(fhirBundle);
  }
}
