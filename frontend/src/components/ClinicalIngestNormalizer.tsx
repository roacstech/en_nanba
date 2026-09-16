'use client';

import React, { useState } from 'react';
import {
  UploadCloud,
  Sparkles,
  Check,
  Search,
  FileCode,
  Tag,
  ShieldCheck,
  RefreshCw,
  Layers,
  ArrowRight,
  Database,
  Activity,
  CheckCircle2,
} from 'lucide-react';
import { api, ExtractedClinicalEntity, MedicalCode } from '../lib/api';

interface ClinicalIngestNormalizerProps {
  patientId: string;
  onIngestSuccess: () => void;
}

export const ClinicalIngestNormalizer: React.FC<ClinicalIngestNormalizerProps> = ({
  patientId,
  onIngestSuccess,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'text' | 'aiSearch' | 'fhir'>('text');

  // Text Ingestion State
  const [text, setText] = useState<string>('');
  const [docType, setDocType] = useState<string>('doctor_notes');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [extractedEntities, setExtractedEntities] = useState<ExtractedClinicalEntity[]>([]);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // AI Terminology Search State
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchSystem, setSearchSystem] = useState<string>('ALL');
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<MedicalCode[]>([]);

  // FHIR Ingestion State
  const [fhirJson, setFhirJson] = useState<string>(
    JSON.stringify(
      {
        resourceType: 'Bundle',
        type: 'collection',
        entry: [
          {
            resource: {
              resourceType: 'Condition',
              code: {
                coding: [{ system: 'http://hl7.org/fhir/sid/icd-11', code: '5A11', display: 'Type 2 diabetes mellitus' }],
                text: 'Type 2 diabetes mellitus',
              },
            },
          },
          {
            resource: {
              resourceType: 'Observation',
              code: {
                coding: [{ system: 'http://loinc.org', code: '4548-4', display: 'Hemoglobin A1c/Hemoglobin.total' }],
                text: 'HbA1c Blood Test',
              },
              valueQuantity: { value: 8.2, unit: '%', system: 'http://unitsofmeasure.org', code: '%' },
            },
          },
          {
            resource: {
              resourceType: 'MedicationRequest',
              medicationCodeableConcept: {
                coding: [{ system: 'http://www.nlm.nih.gov/research/umls/rxnorm', code: '6809', display: 'Metformin hydrochloride 500 MG' }],
                text: 'Metformin 500mg Oral Tablet',
              },
            },
          },
        ],
      },
      null,
      2,
    ),
  );
  const [isProcessingFhir, setIsProcessingFhir] = useState<boolean>(false);

  // Preloaded Clinical Scenarios
  const sampleScenarios = [
    {
      title: 'Scenario A: Diabetic Angina & Sildenafil',
      text: 'Patient presents with severe exertional chest pain radiating to the left arm. Diagnosed with Type 2 diabetes mellitus and uncontrolled hypertension. Currently taking Metformin 500mg BID and Sildenafil 50mg PRN. Requesting sublingual Nitroglycerin 0.4mg for acute episodes. Recent HbA1c 8.4%. BP: 152/94 mmHg.',
    },
    {
      title: 'Scenario B: Bronchitis with Penicillin Allergy',
      text: 'Patient evaluated for acute bronchitis with purulent productive cough and fever. Documented severe allergic reaction to penicillin with past anaphylaxis. Proposed antibiotic order: Amoxicillin 500mg oral capsule TID. Pulse: 78 bpm, SpO2: 99%.',
    },
    {
      title: 'Scenario C: CKD & Lab Panel',
      text: 'Follow-up for chronic kidney disease stage 3. Serum creatinine tested at 1.8 mg/dL. Glomerular filtration rate eGFR reported at 38 mL/min/1.73 sq M. Patient advised regarding hydration and avoidance of nephrotoxic medications.',
    },
  ];

  const handleIngest = async () => {
    if (!text.trim()) return;
    setIsProcessing(true);
    setSuccessMessage(null);

    try {
      const result = await api.ingestText(patientId, text, docType);
      setExtractedEntities(result.entities || []);
      setSuccessMessage(
        `Gemini 3.6 Flash extracted and normalized ${result.entitiesCount} clinical entities across ICD-11, RxNorm, LOINC, UCUM & FHIR into Neo4j graph!`,
      );
      onIngestSuccess();
    } catch (err: any) {
      alert(`Ingestion failed: ${err.message}`);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleAiSearch = async () => {
    if (!searchQuery.trim()) return;
    setIsSearching(true);

    try {
      const results = await api.aiSearchTerminology(searchQuery, searchSystem);
      setSearchResults(results || []);
    } catch (err: any) {
      alert(`Search failed: ${err.message}`);
    } finally {
      setIsSearching(false);
    }
  };

  const handleIngestFhir = async () => {
    if (!fhirJson.trim()) return;
    setIsProcessingFhir(true);
    setSuccessMessage(null);

    try {
      const parsed = JSON.parse(fhirJson);
      const result = await api.ingestFhir(patientId, parsed);
      setExtractedEntities(result.normalizedEntities || []);
      setSuccessMessage(
        `Successfully ingested ${result.resourcesProcessed} FHIR resources and mapped to ICD-11, RxNorm, LOINC & UCUM!`,
      );
      onIngestSuccess();
    } catch (err: any) {
      alert(`FHIR Ingestion failed: ${err.message}`);
    } finally {
      setIsProcessingFhir(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm dark:shadow-xl transition-colors space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-2xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
            <UploadCloud className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">
                Clinical Ingestion & Medical Standards Normalizer
              </h2>
              <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
                Gemini 3.6 Flash
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Live automated normalization across <strong>ICD-11</strong>, <strong>RxNorm</strong>, <strong>LOINC</strong>, <strong>UCUM</strong>, and <strong>FHIR R4</strong>.
            </p>
          </div>
        </div>

        {/* Standards Badges */}
        <div className="flex items-center gap-1.5 flex-wrap text-[10px] font-extrabold">
          <span className="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">ICD-11</span>
          <span className="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">RxNorm</span>
          <span className="px-2 py-0.5 rounded bg-cyan-50 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">LOINC</span>
          <span className="px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">UCUM</span>
          <span className="px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">FHIR</span>
        </div>
      </div>

      {/* Interactive Clinical Flow Visualizer */}
      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
        <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-blue-600" /> Clinical Intelligence Pipeline Flow
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 text-xs">
          <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <span className="text-[10px] font-bold text-blue-600 block">STAGE 1</span>
            <span className="font-extrabold text-slate-800 dark:text-slate-200">Raw Data Ingestion</span>
            <p className="text-[11px] text-slate-500 mt-0.5">Notes, Intake, or FHIR</p>
          </div>
          <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <span className="text-[10px] font-bold text-blue-600 block">STAGE 2</span>
            <span className="font-extrabold text-slate-800 dark:text-slate-200">Gemini Extraction</span>
            <p className="text-[11px] text-slate-500 mt-0.5">NLP Entity Parsing</p>
          </div>
          <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <span className="text-[10px] font-bold text-blue-600 block">STAGE 3</span>
            <span className="font-extrabold text-slate-800 dark:text-slate-200">Standards Normalization</span>
            <p className="text-[11px] text-slate-500 mt-0.5">ICD-11, RxNorm, LOINC, UCUM</p>
          </div>
          <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <span className="text-[10px] font-bold text-blue-600 block">STAGE 4</span>
            <span className="font-extrabold text-slate-800 dark:text-slate-200">Graph & Radar Rules</span>
            <p className="text-[11px] text-slate-500 mt-0.5">Neo4j Hazard Evaluation</p>
          </div>
          <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <span className="text-[10px] font-bold text-blue-600 block">STAGE 5</span>
            <span className="font-extrabold text-slate-800 dark:text-slate-200">Clinical Reasoning</span>
            <p className="text-[11px] text-slate-500 mt-0.5">Differential & Ledger</p>
          </div>
        </div>
      </div>

      {/* Mode Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
        <button
          onClick={() => setActiveSubTab('text')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeSubTab === 'text'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          Clinical Notes Ingestion
        </button>

        <button
          onClick={() => setActiveSubTab('aiSearch')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
            activeSubTab === 'aiSearch'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Search className="w-3.5 h-3.5" /> Live AI Terminology Search
        </button>

        <button
          onClick={() => setActiveSubTab('fhir')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
            activeSubTab === 'fhir'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <FileCode className="w-3.5 h-3.5" /> FHIR Bundle Importer
        </button>
      </div>

      {/* TAB 1: CLINICAL NOTES INGESTION */}
      {activeSubTab === 'text' && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Quick Test Scenarios */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-500 dark:text-slate-400 font-bold">Quick Presets:</span>
              {sampleScenarios.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setText(s.text)}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-950 dark:hover:bg-slate-800 text-blue-700 dark:text-blue-300 border border-slate-200 dark:border-slate-800 text-[11px] font-semibold transition-colors cursor-pointer"
                >
                  {s.title}
                </button>
              ))}
            </div>

            {/* Document Type Selector */}
            <select
              value={docType}
              onChange={e => setDocType(e.target.value)}
              className="bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300 text-xs rounded-xl px-3 py-1.5 focus:ring-2 focus:ring-blue-500 outline-none font-semibold"
            >
              <option value="doctor_notes">Doctor OPD Note</option>
              <option value="discharge_summary">Discharge Summary</option>
              <option value="lab_report">Laboratory Report (OCR)</option>
              <option value="prescription">CPOE Prescription</option>
            </select>
          </div>

          <textarea
            value={text}
            onChange={e => setText(e.target.value)}
            rows={4}
            placeholder="Enter clinical encounter narrative, patient symptoms, prescribed medications, or vitals..."
            className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 text-xs text-slate-900 dark:text-slate-200 placeholder-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 outline-none resize-none font-mono leading-relaxed"
          />

          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Active Patient: <strong className="text-blue-600 dark:text-blue-400 font-mono">{patientId}</strong>
            </span>

            <button
              onClick={handleIngest}
              disabled={isProcessing || !text.trim()}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold text-xs flex items-center gap-2 shadow-md shadow-blue-500/20 transition-all cursor-pointer"
            >
              {isProcessing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Gemini 3.6 Flash Normalizing...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Run Gemini Entity Normalization
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* TAB 2: LIVE AI TERMINOLOGY SEARCH */}
      {activeSubTab === 'aiSearch' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleAiSearch()}
                placeholder="Search any diagnosis, drug, or lab (e.g., 'Metformin', 'Angina', 'Creatinine', 'SpO2')..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <select
              value={searchSystem}
              onChange={e => setSearchSystem(e.target.value)}
              className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs rounded-xl px-3 py-2.5 font-bold text-slate-700 dark:text-slate-300"
            >
              <option value="ALL">All Standards</option>
              <option value="ICD-11">ICD-11 (Diagnoses/Symptoms)</option>
              <option value="RxNorm">RxNorm (Medications)</option>
              <option value="LOINC">LOINC (Labs/Vitals)</option>
              <option value="UCUM">UCUM (Units)</option>
              <option value="FHIR">FHIR Resources</option>
            </select>

            <button
              onClick={handleAiSearch}
              disabled={isSearching || !searchQuery.trim()}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold text-xs flex items-center gap-2 shadow-md shadow-blue-500/20 transition-all cursor-pointer whitespace-nowrap"
            >
              {isSearching ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
              Search Standards
            </button>
          </div>

          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Found {searchResults.length} Standard Codes:
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {searchResults.map((res, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-extrabold text-blue-600 dark:text-blue-400">
                        {res.system}: {res.code}
                      </span>
                      <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
                        {res.category || 'Clinical Code'}
                      </span>
                    </div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">{res.display}</h4>
                    {res.description && (
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                        {res.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: FHIR BUNDLE IMPORTER */}
      {activeSubTab === 'fhir' && (
        <div className="space-y-4">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Paste standard FHIR R4 JSON Bundle (Condition, Observation, MedicationRequest, AllergyIntolerance) to ingest into graph:
          </p>

          <textarea
            value={fhirJson}
            onChange={e => setFhirJson(e.target.value)}
            rows={6}
            className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 text-xs font-mono text-slate-900 dark:text-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 outline-none resize-none leading-relaxed"
          />

          <div className="flex justify-end">
            <button
              onClick={handleIngestFhir}
              disabled={isProcessingFhir || !fhirJson.trim()}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold text-xs flex items-center gap-2 shadow-md shadow-blue-500/20 transition-all cursor-pointer"
            >
              {isProcessingFhir ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" /> Ingesting FHIR...
                </>
              ) : (
                <>
                  <FileCode className="w-4 h-4" /> Ingest FHIR Bundle & Sync Graph
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Success Notification */}
      {successMessage && (
        <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-center gap-2.5 text-xs text-emerald-800 dark:text-emerald-300 font-semibold animate-fadeIn">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span>{successMessage}</span>
        </div>
      )}

      {/* Normalized Entity Output Grid */}
      {extractedEntities.length > 0 && (
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-slate-800 dark:text-slate-300 flex items-center gap-1.5">
              <Tag className="w-4 h-4 text-blue-600" />
              Normalized Clinical Entities ({extractedEntities.length})
            </h3>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
              Standardized across ICD-11, RxNorm, LOINC, UCUM & FHIR
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {extractedEntities.map(entity => (
              <div
                key={entity.id}
                className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                      {entity.type}
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/40">
                      {Math.round(entity.confidence * 100)}% match
                    </span>
                  </div>

                  <div className="font-bold text-slate-900 dark:text-white text-xs mb-1.5">
                    "{entity.rawText}"
                  </div>

                  {entity.matchedCode && (
                    <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-blue-600 dark:text-blue-400 font-extrabold text-[11px]">
                          {entity.matchedCode.system}: {entity.matchedCode.code}
                        </span>
                        {entity.unit && (
                          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                            UCUM: {entity.unit}
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-700 dark:text-slate-300 font-medium leading-snug">
                        {entity.matchedCode.display}
                      </div>
                      {entity.matchedCode.description && (
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">
                          {entity.matchedCode.description}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                <div className="mt-2.5 pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                    Status: <strong className="text-slate-700 dark:text-slate-300">{entity.provenance.status}</strong>
                  </span>
                  <span>{docType}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
