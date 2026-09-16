'use client';

import React, { useState } from 'react';
import { UploadCloud, Sparkles, Check, FileText, ArrowRight, Tag, ShieldCheck, RefreshCw } from 'lucide-react';
import { api, ExtractedClinicalEntity } from '../lib/api';

interface ClinicalIngestNormalizerProps {
  patientId: string;
  onIngestSuccess: () => void;
}

export const ClinicalIngestNormalizer: React.FC<ClinicalIngestNormalizerProps> = ({
  patientId,
  onIngestSuccess,
}) => {
  const [text, setText] = useState<string>('');
  const [docType, setDocType] = useState<string>('doctor_notes');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [extractedEntities, setExtractedEntities] = useState<ExtractedClinicalEntity[]>([]);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

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
      setSuccessMessage(`Successfully extracted and normalized ${result.entitiesCount} clinical entities into Qdrant & Neo4j graph!`);
      onIngestSuccess();
    } catch (err: any) {
      alert(`Ingestion failed: ${err.message}`);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm dark:shadow-xl transition-colors">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/30">
            <UploadCloud className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
              Clinical Data Ingestion & Normalization Engine
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Parses unstructured notes $\to$ Qdrant semantic vector lookup $\to$ ICD-11, LOINC, RxNorm, UCUM & FHIR
            </p>
          </div>
        </div>

        {/* Document Type Selector */}
        <select
          value={docType}
          onChange={e => setDocType(e.target.value)}
          className="bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300 text-xs rounded-lg px-2.5 py-1.5 focus:ring-1 focus:ring-teal-400 outline-none"
        >
          <option value="doctor_notes">Doctor OPD Note</option>
          <option value="discharge_summary">Discharge Summary</option>
          <option value="lab_report">Laboratory Report (OCR)</option>
          <option value="prescription">CPOE Prescription</option>
        </select>
      </div>

      {/* Pre-fill Sample Scenarios */}
      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
        <span className="text-slate-500 dark:text-slate-400 font-medium">Quick Test Scenarios:</span>
        {sampleScenarios.map((s, idx) => (
          <button
            key={idx}
            onClick={() => setText(s.text)}
            className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-950 dark:hover:bg-slate-800 text-cyan-800 dark:text-cyan-300 border border-slate-200 dark:border-slate-800 text-[11px] font-medium transition-colors"
          >
            {s.title}
          </button>
        ))}
      </div>

      {/* Textarea Input */}
      <div className="mt-3">
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          rows={4}
          placeholder="Paste or type clinical encounter notes, doctor observations, medications, lab values, or vitals..."
          className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-3 text-xs text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-400 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 outline-none resize-none font-mono leading-relaxed"
        />
      </div>

      {/* Action Bar */}
      <div className="mt-3 flex items-center justify-between">
        <span className="text-[11px] text-slate-500 dark:text-slate-400">
          Target Patient ID: <strong className="text-teal-600 dark:text-teal-400 font-mono">{patientId}</strong>
        </span>

        <button
          onClick={handleIngest}
          disabled={isProcessing || !text.trim()}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 disabled:opacity-50 text-white dark:text-slate-950 font-bold text-xs flex items-center gap-2 shadow-md shadow-teal-500/20 transition-all cursor-pointer"
        >
          {isProcessing ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              Normalizing via Qdrant...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              Ingest & Normalize Text
            </>
          )}
        </button>
      </div>

      {/* Success Notification */}
      {successMessage && (
        <div className="mt-3 p-3 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-500/50 flex items-center gap-2 text-xs text-teal-800 dark:text-teal-300">
          <Check className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
          <span>{successMessage}</span>
        </div>
      )}

      {/* Normalized Entity Output Grid */}
      {extractedEntities.length > 0 && (
        <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-bold text-slate-800 dark:text-slate-300 flex items-center gap-1.5">
              <Tag className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              Normalized Clinical Entities ({extractedEntities.length})
            </h3>
            <span className="text-[10px] text-slate-500 dark:text-slate-400">Ontology standard matches</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {extractedEntities.map(entity => (
              <div
                key={entity.id}
                className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-900 text-slate-700 dark:text-slate-400">
                      {entity.type}
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/40">
                      {Math.round(entity.confidence * 100)}% match
                    </span>
                  </div>

                  <div className="font-semibold text-slate-900 dark:text-white text-xs mb-1">
                    "{entity.rawText}"
                  </div>

                  {entity.matchedCode && (
                    <div className="p-2 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-cyan-700 dark:text-cyan-300 font-bold text-[11px]">
                          {entity.matchedCode.system}: {entity.matchedCode.code}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-700 dark:text-slate-300 leading-snug">
                        {entity.matchedCode.display}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-2 pt-2 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-teal-600 dark:text-teal-400" />
                    Status: <strong className="text-teal-700 dark:text-teal-300">{entity.provenance.status}</strong>
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
