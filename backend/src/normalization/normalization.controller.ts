import { Controller, Post, Get, Body, Query, Param } from '@nestjs/common';
import { NormalizationService } from './normalization.service';
import { ExternalTerminologiesService } from './external-terminologies.service';
import { IngestTextDto, IngestFhirDto, NormalizeQueryDto } from '../common/dto/clinical.dto';

@Controller(['api', ''])
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

  @Get('normalize/icd11/all-diseases')
  async getAllIcd11Diseases(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('q') q?: string,
    @Query('query') query?: string,
    @Query('chapter') chapter?: string,
  ) {
    return this.externalTerminologies.getAllIcd11Diseases({
      page: page ? parseInt(page, 10) : 1,
      limit: limit ? parseInt(limit, 10) : 50,
      query: q || query,
      chapter,
    });
  }

  @Get('normalize/icd11/entity-details')
  async getIcd11EntityDetails(
    @Query('code') code?: string,
    @Query('uri') uri?: string,
  ) {
    return this.externalTerminologies.getIcd11EntityDetails(code || uri || '');
  }

  @Get('normalize/snomed/catalog')
  async getSnomedCatalog(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('q') q?: string,
    @Query('query') query?: string,
    @Query('hierarchy') hierarchy?: string,
  ) {
    return this.externalTerminologies.getSnomedCatalog({
      page: page ? parseInt(page, 10) : 1,
      limit: limit ? parseInt(limit, 10) : 50,
      query: q || query,
      hierarchy,
    });
  }

  @Get('normalize/snomed/concept-details')
  async getSnomedConceptDetails(@Query('id') id: string) {
    const concept = this.externalTerminologies.getSnomedConceptDetails(id || '');
    return {
      success: !!concept,
      data: concept,
      licensing: this.externalTerminologies.getSnomedLicensingInfo(),
    };
  }

  @Get('normalize/niddk/resources')
  async getNiddkResources(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('q') q?: string,
    @Query('query') query?: string,
    @Query('category') category?: string,
  ) {
    return this.externalTerminologies.getNiddkResources({
      page: page ? parseInt(page, 10) : 1,
      limit: limit ? parseInt(limit, 10) : 50,
      query: q || query,
      category,
    });
  }

  @Get('normalize/niddk/resource-details')
  async getNiddkResourceDetails(@Query('id') id: string) {
    const resource = this.externalTerminologies.getNiddkResourceDetails(id || '');
    return {
      success: !!resource,
      data: resource,
    };
  }

  @Get('normalize/nice/guidelines')
  async getNiceGuidelines(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('q') q?: string,
    @Query('query') query?: string,
    @Query('domain') domain?: string,
  ) {
    return this.externalTerminologies.getNiceGuidelines({
      page: page ? parseInt(page, 10) : 1,
      limit: limit ? parseInt(limit, 10) : 50,
      query: q || query,
      domain,
    });
  }

  @Get('normalize/nice/guideline-details')
  async getNiceGuidelineDetails(@Query('id') id: string) {
    const guideline = this.externalTerminologies.getNiceGuidelineDetails(id || '');
    return {
      success: !!guideline,
      data: guideline,
    };
  }

  @Get('normalize/loinc/observations')
  async getLoincObservations(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('q') q?: string,
    @Query('query') query?: string,
    @Query('category') category?: string,
    @Query('classType') classType?: string,
  ) {
    return this.externalTerminologies.getLoincObservations({
      page: page ? parseInt(page, 10) : 1,
      limit: limit ? parseInt(limit, 10) : 50,
      query: q || query,
      category,
      classType,
    });
  }

  @Get('normalize/loinc/observation-details')
  async getLoincObservationDetails(@Query('code') code: string, @Query('id') id?: string) {
    const observation = this.externalTerminologies.getLoincObservationDetails(code || id || '');
    return {
      success: !!observation,
      data: observation,
    };
  }

  @Get('normalize/openstax/anatomy-references')
  async getOpenStaxAnatomyReferences(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('q') q?: string,
    @Query('query') query?: string,
    @Query('system') system?: string,
  ) {
    return this.externalTerminologies.getOpenStaxAnatomyReferences({
      page: page ? parseInt(page, 10) : 1,
      limit: limit ? parseInt(limit, 10) : 50,
      query: q || query,
      system,
    });
  }

  @Get('normalize/openstax/reference-details')
  async getOpenStaxAnatomyDetails(@Query('code') code: string, @Query('id') id?: string) {
    const details = this.externalTerminologies.getOpenStaxAnatomyDetails(code || id || '');
    return {
      success: !!details,
      data: details,
    };
  }

  @Get('normalize/terminologies/:terminology')
  async getTerminologyCatalog(
    @Param('terminology') terminology: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('q') q?: string,
    @Query('query') query?: string,
  ) {
    return this.externalTerminologies.getTerminologyCatalog(terminology, {
      page: page ? parseInt(page, 10) : 1,
      limit: limit ? parseInt(limit, 10) : 50,
      query: q || query,
    });
  }

  @Get('normalize/disease-clinical-profile')
  async getDiseaseClinicalProfile(
    @Query('code') code: string,
    @Query('disease') disease: string,
    @Query('category') category?: string,
    @Query('description') description?: string,
  ) {
    return this.externalTerminologies.getDiseaseClinicalProfile({
      code: code || '',
      disease: disease || '',
      category,
      description,
    });
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
