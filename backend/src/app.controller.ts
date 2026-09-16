import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
  @Get()
  getRoot(@Res() res: Response) {
    // Redirect to Swagger docs by default, or return platform directory
    return res.redirect('/api/docs');
  }

  @Get('info')
  getInfo() {
    return {
      platform: 'EN NANBA Clinical Intelligence Platform POC',
      version: '1.0.0',
      status: 'OPERATIONAL',
      endpoints: {
        swaggerDocs: '/api/docs',
        systemStatus: '/api/system/status',
        patients: '/api/patients',
        clinicalGraph: '/api/graph/:patientId',
        contradictionRadar: '/api/graph/:patientId/radar',
        medicalDictionaries: '/api/dictionaries',
        aiReasoning: '/api/ai/reasoning',
      },
      doctorWorkspaceUI: 'http://localhost:3000',
    };
  }
}
