'use client';

import React, { useState } from 'react';
import { Cpu, Sparkles, CheckCircle, XCircle, Edit3, ShieldAlert, BookOpen, AlertTriangle, RefreshCw, Send, Check } from 'lucide-react';
import { api, ClinicalReasoningResponse } from '../lib/api';

interface AiReasoningConsoleProps {
  patientId: string;
  onDecisionSubmitted?: () => void;
}

export const AiReasoningConsole: React.FC<AiReasoningConsoleProps> = ({
  patientId,
  onDecisionSubmitted,
}) => {
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [aiResult, setAiResult] = useState<ClinicalReasoningResponse | null>(null);
  const [pipelineMetrics, setPipelineMetrics] = useState<any | null>(null);

  // Doctor Review & Decision State
  const [decision, setDecision] = useState<'ACCEPT' | 'MODIFY' | 'REJECT' | null>(null);
  const [doctorName, setDoctorName] = useState<string>('Dr. S. K. Raman (Consultant Cardiologist)');
  const [reasoningNotes, setReasoningNotes] = useState<string>('');
  const [modifiedPrescription, setModifiedPrescription] = useState<string>('');
  const [isSubmittingDecision, setIsSubmittingDecision] = useState<boolean>(false);
  const [decisionSuccess, setDecisionSuccess] = useState<string | null>(null);

  const handleRunAiReasoning = async () => {
    setIsGenerating(true);
    setDecisionSuccess(null);
    setDecision(null);

    try {
      const response = await api.runReasoning(patientId);
      setAiResult(response.validatedResponse);
      setPipelineMetrics({
        phiScrubbedTokensCount: response.phiScrubbedTokensCount,
        ragContextItemsCount: response.ragContextItemsCount,
        graphNodesAnalyzed: response.graphNodesAnalyzed,
        deterministicRadarAlertsCount: response.deterministicRadarAlertsCount,
      });
    } catch (err: any) {
      alert(`AI reasoning failed: ${err.message}`);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleRecordDecision = async () => {
    if (!decision) return;
    setIsSubmittingDecision(true);

    try {
      await api.recordDecision(
        patientId,
        decision,
        doctorName,
        reasoningNotes,
        modifiedPrescription,
      );
      setDecisionSuccess(`Decision [${decision}] successfully recorded in immutable evidence ledger and logged to continuous learning loop.`);
      if (onDecisionSubmitted) onDecisionSubmitted();
    } catch (err: any) {
      alert(`Failed to record decision: ${err.message}`);
    } finally {
      setIsSubmittingDecision(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm dark:shadow-xl transition-colors">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-500/30">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                AI Orchestration & Clinical Reasoning
              </h2>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-teal-50 dark:bg-teal-500/20 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-500/30">
                Gemini 3.8 Flash + LangChain.js
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              RAG-grounded synthesis with PHI masking & strict Zod response schema validation
            </p>
          </div>
        </div>

        {/* Generate / Re-run Button */}
        <button
          onClick={handleRunAiReasoning}
          disabled={isGenerating}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 disabled:opacity-50 text-white dark:text-slate-950 font-bold text-xs flex items-center gap-2 shadow-md shadow-teal-500/20 transition-all cursor-pointer"
        >
          {isGenerating ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              Running RAG & Gemini API...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              Run Clinical Reasoning
            </>
          )}
        </button>
      </div>

      {/* Execution Pipeline Badges */}
      {pipelineMetrics && (
        <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800">
          <span className="text-slate-600 dark:text-slate-400 font-semibold">Pipeline Verification:</span>
          <span className="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50">
            ✓ Zod Schema Validated
          </span>
          <span className="px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/70 text-indigo-800 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/50">
            {pipelineMetrics.phiScrubbedTokensCount} PHI Tokens Masked
          </span>
          <span className="px-2 py-0.5 rounded bg-cyan-50 dark:bg-cyan-950/70 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/50">
            {pipelineMetrics.ragContextItemsCount} Qdrant Guideline Citations
          </span>
          <span className="px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/50">
            {pipelineMetrics.graphNodesAnalyzed} Neo4j Nodes Evaluated
          </span>
        </div>
      )}

      {/* Main AI Reasoning Results View */}
      {aiResult ? (
        <div className="mt-5 space-y-5">
          {/* Patient Synthesis Summary */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-bold text-slate-800 dark:text-slate-300 uppercase tracking-wider">
                De-Identified Clinical Synthesis
              </h3>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                aiResult.safetyRiskLevel === 'CRITICAL'
                  ? 'bg-rose-100 text-rose-800 dark:bg-rose-500/20 dark:text-rose-300 border border-rose-300 dark:border-rose-500/40'
                  : 'bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-300 border border-amber-300 dark:border-amber-500/40'
              }`}>
                Safety Risk: {aiResult.safetyRiskLevel}
              </span>
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">{aiResult.patientSummary}</p>

            {/* Key Findings Chips */}
            <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800/80">
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold mb-1.5">Key Salient Findings:</div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                {aiResult.keyFindings.map((f, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-teal-600 dark:text-teal-400 font-bold">•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Differential Diagnosis Table */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
            <h3 className="text-xs font-bold text-slate-800 dark:text-slate-300 uppercase tracking-wider mb-3">
              Ranked Differential Diagnoses (ICD-11)
            </h3>
            <div className="space-y-2">
              {aiResult.differentialDiagnoses.map((dd, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 text-xs flex flex-col md:flex-row md:items-center justify-between gap-2"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 dark:text-white text-xs">{dd.conditionName}</span>
                      <span className="font-mono text-[11px] text-cyan-800 dark:text-cyan-300 px-1.5 py-0.5 rounded bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800/50 font-medium">
                        ICD-11: {dd.icdCode}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                      <strong className="text-slate-700 dark:text-slate-300">Supporting Evidence: </strong>{dd.supportingEvidence.join(', ')}
                    </div>
                  </div>

                  <span className={`self-start md:self-center px-2 py-0.5 text-[10px] font-bold rounded uppercase ${
                    dd.probability === 'HIGH' ? 'bg-rose-100 text-rose-800 dark:bg-rose-500/20 dark:text-rose-300 border border-rose-200 dark:border-rose-500/30' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}>
                    {dd.probability} Probability
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Clinical Contradictions Identified by Gemini */}
          <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-500/50">
            <div className="flex items-center gap-2 text-xs font-bold text-rose-800 dark:text-rose-300 mb-2">
              <ShieldAlert className="w-4 h-4 text-rose-600 dark:text-rose-400" />
              Identified Safety Hazards & Contraindications
            </div>
            <div className="space-y-2">
              {aiResult.contradictionsIdentified.map((c, i) => (
                <div key={i} className="p-3 rounded-lg bg-white dark:bg-slate-950/80 border border-rose-200 dark:border-rose-500/30 text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-rose-600 dark:text-rose-400 text-[11px] uppercase tracking-wider">
                      {c.severity} RISK
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      Involving: {c.entitiesInvolved.join(' + ')}
                    </span>
                  </div>
                  <p className="text-slate-800 dark:text-slate-200">{c.hazard}</p>
                  <p className="text-teal-800 dark:text-teal-300 font-medium text-[11px] pt-1 border-t border-slate-100 dark:border-slate-800">
                    <strong>Mitigation: </strong>{c.recommendation}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RAG Evidence Ledger Citations */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-300 mb-2">
              <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              Evidence Ledger & Clinical Guideline Citations (RAG)
            </div>
            <div className="space-y-2">
              {aiResult.evidenceCitations.map((cite, i) => (
                <div key={i} className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
                  <div className="font-semibold text-indigo-800 dark:text-indigo-300 text-[11px] mb-0.5">{cite.source}</div>
                  <div className="text-slate-700 dark:text-slate-300 italic text-[11px]">"{cite.excerpt}"</div>
                </div>
              ))}
            </div>
          </div>

          {/* Actionable Recommendations Plan */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs space-y-3">
            <h3 className="font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider text-xs">
              Recommended Clinical Action Plan
            </h3>

            <div>
              <span className="text-[11px] font-bold text-rose-700 dark:text-rose-400 uppercase">1. Immediate Actions:</span>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 mt-1 space-y-0.5 pl-1">
                {aiResult.recommendedPlan.immediateActions.map((act, i) => (
                  <li key={i}>{act}</li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-[11px] font-bold text-cyan-700 dark:text-cyan-400 uppercase">2. Suggested Investigations (LOINC):</span>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 mt-1 space-y-0.5 pl-1">
                {aiResult.recommendedPlan.suggestedInvestigations.map((inv, i) => (
                  <li key={i}>{inv}</li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-[11px] font-bold text-indigo-700 dark:text-indigo-400 uppercase">3. Safe Alternative Therapies (RxNorm):</span>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 mt-1 space-y-0.5 pl-1">
                {aiResult.recommendedPlan.alternativeTherapies.map((alt, i) => (
                  <li key={i}>{alt}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* ======================================================== */}
          {/* Doctor Intelligence Workspace: Accept / Modify / Reject Loop */}
          {/* ======================================================== */}
          <div className="p-5 rounded-xl bg-white dark:bg-gradient-to-b dark:from-slate-950 dark:to-slate-900 border-2 border-teal-500/40 shadow-md dark:shadow-2xl">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  Doctor Intelligence Workspace — Clinical Decision Capture
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Review AI analysis and capture verified clinician action for the Compounding Moat learning loop
                </p>
              </div>

              <input
                type="text"
                value={doctorName}
                onChange={e => setDoctorName(e.target.value)}
                placeholder="Doctor Name & Credential"
                className="bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-200 text-xs px-2.5 py-1 rounded-lg outline-none font-medium"
              />
            </div>

            {/* Decision Action Buttons */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                onClick={() => setDecision('ACCEPT')}
                className={`p-3 rounded-xl border font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  decision === 'ACCEPT'
                    ? 'bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-600/30'
                    : 'bg-slate-50 hover:bg-emerald-50 dark:bg-slate-950 dark:hover:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60'
                }`}
              >
                <CheckCircle className="w-4 h-4" />
                Accept AI Guidance
              </button>

              <button
                onClick={() => setDecision('MODIFY')}
                className={`p-3 rounded-xl border font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  decision === 'MODIFY'
                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/30'
                    : 'bg-slate-50 hover:bg-amber-50 dark:bg-slate-950 dark:hover:bg-amber-950/50 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800/60'
                }`}
              >
                <Edit3 className="w-4 h-4" />
                Modify Clinical Plan
              </button>

              <button
                onClick={() => setDecision('REJECT')}
                className={`p-3 rounded-xl border font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  decision === 'REJECT'
                    ? 'bg-rose-600 text-white border-rose-500 shadow-md shadow-rose-600/30'
                    : 'bg-slate-50 hover:bg-rose-50 dark:bg-slate-950 dark:hover:bg-rose-950/50 text-rose-800 dark:text-rose-300 border-rose-200 dark:border-rose-800/60'
                }`}
              >
                <XCircle className="w-4 h-4" />
                Reject Guidance
              </button>
            </div>

            {/* Additional Inputs depending on Decision */}
            {decision && (
              <div className="mt-4 space-y-3 pt-3 border-t border-slate-200 dark:border-slate-800/80">
                {decision === 'MODIFY' && (
                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                      Adjusted Medication / Custom Order:
                    </label>
                    <input
                      type="text"
                      value={modifiedPrescription}
                      onChange={e => setModifiedPrescription(e.target.value)}
                      placeholder="e.g. Withhold Nitroglycerin; start Metoprolol Tartrate 25mg PO BID instead"
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg p-2 text-xs text-slate-900 dark:text-slate-200 outline-none focus:border-amber-400"
                    />
                  </div>
                )}

                <div>
                  <label className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    Doctor Clinical Notes & Rationale:
                  </label>
                  <textarea
                    value={reasoningNotes}
                    onChange={e => setReasoningNotes(e.target.value)}
                    rows={2}
                    placeholder="Enter doctor commentary, patient counseling notes, or justification..."
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg p-2 text-xs text-slate-900 dark:text-slate-200 outline-none focus:border-teal-400 resize-none"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={handleRecordDecision}
                    disabled={isSubmittingDecision}
                    className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white dark:bg-teal-500 dark:hover:bg-teal-400 dark:text-slate-950 font-bold text-xs flex items-center gap-2 shadow-md transition-all cursor-pointer"
                  >
                    {isSubmittingDecision ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        Saving Decision...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Confirm & Record in Ledger
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Success Message */}
            {decisionSuccess && (
              <div className="mt-4 p-3 rounded-xl bg-teal-950/60 border border-teal-500/60 flex items-center gap-2 text-xs text-teal-300">
                <Check className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{decisionSuccess}</span>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="mt-8 p-12 text-center text-xs text-slate-400 rounded-xl bg-slate-950/50 border border-dashed border-slate-800">
          <Sparkles className="w-8 h-8 text-teal-400 mx-auto mb-3 animate-pulse" />
          <p className="font-semibold text-slate-200 text-sm">Ready to orchestrate clinical AI reasoning.</p>
          <p className="text-slate-400 mt-1 max-w-md mx-auto">
            Click "Run Clinical Reasoning" to de-identify patient data, query Qdrant RAG guidelines, and generate an evidence-backed clinical action plan with Gemini 3.8 Flash.
          </p>
        </div>
      )}
    </div>
  );
};
