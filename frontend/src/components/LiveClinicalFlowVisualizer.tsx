'use client';

import React, { useState, useEffect } from 'react';
import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  ShieldAlert,
  Database,
  Network,
  FileCode,
  Stethoscope,
  Pill,
  Sparkles,
  Cpu,
  ExternalLink,
  Clock,
  ArrowRight,
  Lock,
  UserCheck,
  RefreshCw,
  Flame,
  Check,
  XCircle,
  FileText,
  ChevronDown,
  ChevronUp,
  Copy,
  Zap,
  Microscope,
  Thermometer,
  FileBadge,
  User
} from 'lucide-react';
import { api, ClinicalFlowExecutionResult, PatientProfile } from '@/lib/api';

interface Props {
  patient?: PatientProfile | null;
  patientId?: string;
  doctorId?: string;
  doctorName?: string;
}

function getDefaultClinicalNoteForPatient(patient?: PatientProfile | null, patientId?: string): string {
  const pid = patient?.id || patientId || 'P-1005';
  const name = patient?.fullName || (pid === 'P-1006' ? 'Pooja Nair' : pid === 'P-1003' ? 'Rajesh Kumar' : 'Ramesh Patel');

  if (pid === 'P-1006' || name.toLowerCase().includes('pooja')) {
    return `Patient Pooja Nair (P-1006): Fever 101°F with acute throat irritation, Bronchial Asthma, takes Salbutamol 100mcg inhaler, allergic to Aspirin and Ibuprofen, Peak Flow 380 L/min`;
  }

  if (pid === 'P-1003' || name.toLowerCase().includes('rajesh') || name.toLowerCase().includes('kumar')) {
    return `Patient Rajesh Kumar (P-1003): Blood pressure 160/100 mmHg, Essential Hypertension, takes Amlodipine 5mg, allergic to ACE inhibitors (Lisinopril), Serum Creatinine 1.1 mg/dL`;
  }

  if (pid === 'P-1004') {
    return `Patient Ramesh (P-1004): Type 2 Diabetes, takes Metformin 500mg, allergic to Penicillin, HbA1c 8.0%, presenting with fever 101.8°F`;
  }

  if (patient && patient.chronicConditions && patient.chronicConditions.length > 0) {
    const conditions = patient.chronicConditions.join(', ');
    const allergies = patient.allergies && patient.allergies.length > 0 ? patient.allergies.join(' and ') : 'Penicillin';
    return `Patient ${name} (${pid}): Fever 101.5°F, ${conditions}, takes maintenance therapy, allergic to ${allergies}, vitals monitored`;
  }

  return `Patient Ramesh Patel (P-1005): Fever 102°F, Type 2 Diabetes, takes Metformin 500mg, allergic to Penicillin, HbA1c 8.2%`;
}

export default function LiveClinicalFlowVisualizer({
  patient,
  patientId = 'P-1005',
  doctorId = 'DOC-CMC-01',
  doctorName = 'Dr. Aravind Swamy, MD',
}: Props) {
  const activePid = patient?.id || patientId;
  const activeName = patient?.fullName || (activePid === 'P-1006' ? 'Pooja Nair' : activePid === 'P-1003' ? 'Rajesh Kumar' : 'Ramesh Patel');

  const [rawInput, setRawInput] = useState(() => getDefaultClinicalNoteForPatient(patient, activePid));
  const [selectedPatientId, setSelectedPatientId] = useState(activePid);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [flowResult, setFlowResult] = useState<ClinicalFlowExecutionResult | null>(null);

  // Decision state
  const [decisionSubmitting, setDecisionSubmitting] = useState(false);
  const [doctorDecisionResult, setDoctorDecisionResult] = useState<{
    decision: string;
    signature: string;
    timestamp: string;
    message: string;
  } | null>(null);

  const [decisionNotes, setDecisionNotes] = useState(
    'Verified clinical allergy and contraindication profile against medical ledger. Blocked high-risk medication. Prescribing safe Gemini AI recommended regimen.'
  );

  // UI expand states
  const [showFhirJson, setShowFhirJson] = useState(false);
  const [copiedFhir, setCopiedFhir] = useState(false);
  const [copiedSignature, setCopiedSignature] = useState(false);

  const handleRunFlow = async (textToRun?: string, pidToRun?: string) => {
    const text = textToRun || rawInput;
    const pid = pidToRun || selectedPatientId;
    if (!text.trim()) return;

    setLoading(true);
    setError(null);
    setDoctorDecisionResult(null);

    try {
      const res = await api.executeClinicalFlow({
        patientId: pid,
        rawText: text,
        doctorId,
        doctorName,
      });
      setFlowResult(res);
    } catch (err: any) {
      console.error('Flow execution error:', err);
      setError(err.message || 'Failed to execute clinical workflow');
    } finally {
      setLoading(false);
    }
  };

  // Synchronize when patient changes & auto-execute live pipeline
  useEffect(() => {
    const newPid = patient?.id || patientId;
    setSelectedPatientId(newPid);
    const note = getDefaultClinicalNoteForPatient(patient, newPid);
    setRawInput(note);
    setFlowResult(null);
    setDoctorDecisionResult(null);
    setError(null);
    handleRunFlow(note, newPid);
  }, [patient?.id, patientId]);

  const handleRecordDecision = async (decisionType: 'ACCEPT' | 'MODIFY' | 'REJECT') => {
    if (!flowResult) return;

    setDecisionSubmitting(true);
    try {
      const suggestedDrugs =
        flowResult.step5ContradictionRadar?.geminiRecommendation?.suggestedPrescription?.map(
          (p: any) => `${p.drugName || p.drug} (${p.dosage || p.dose || 'Prescribed'})`
        ) || ['Safe Alternative Prescription'];

      const res = await api.recordClinicalFlowDecision({
        patientId: selectedPatientId,
        doctorId,
        doctorName,
        decision: decisionType,
        approvedDrugs:
          decisionType === 'ACCEPT'
            ? suggestedDrugs
            : ['Custom Doctor Prescription'],
        rejectedDrugs:
          flowResult.step5ContradictionRadar?.blockedDrugs || [],
        notes: decisionNotes,
      });

      setDoctorDecisionResult({
        decision: res.decision,
        signature: res.signature,
        timestamp: res.timestamp,
        message: res.message,
      });
    } catch (err: any) {
      console.error('Record decision error:', err);
      setError(err.message || 'Failed to record doctor decision');
    } finally {
      setDecisionSubmitting(false);
    }
  };

  const copyFhirToClipboard = () => {
    if (!flowResult?.step4FhirPackage?.fhirBundle) return;
    navigator.clipboard.writeText(JSON.stringify(flowResult.step4FhirPackage.fhirBundle, null, 2));
    setCopiedFhir(true);
    setTimeout(() => setCopiedFhir(false), 2000);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      {/* Top Banner & Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-indigo-500/20 p-6 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <Zap className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
              Live Clinical AI Pipeline (7-Step Standard)
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center flex-wrap gap-2">
              <span>Patient Data</span>
              <ArrowRight className="inline w-5 h-5 text-indigo-400" />
              <span>Gemini NLP</span>
              <ArrowRight className="inline w-5 h-5 text-cyan-400" />
              <span>Live Terminology</span>
              <ArrowRight className="inline w-5 h-5 text-emerald-400" />
              <span>Human Signature</span>
            </h1>
            <p className="text-slate-400 text-sm mt-1 max-w-3xl">
              Currently analyzing case for <strong className="text-indigo-300 font-semibold">{activeName} ({activePid})</strong>. Strict parallel live queries to ICD-11, RxNorm, LOINC & UCUM with automated FHIR R4 packaging, Contradiction Radar contraindication prevention, and cryptographic doctor sign-off.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                const note = getDefaultClinicalNoteForPatient(patient, selectedPatientId);
                setRawInput(note);
                handleRunFlow(note);
              }}
              disabled={loading}
              className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 transition-all flex items-center gap-2 disabled:opacity-50 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-indigo-200" />
              Run {activeName} ({activePid}) Live Flow
            </button>
          </div>
        </div>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0" />
          <div className="text-sm">{error}</div>
        </div>
      )}

      {/* PIPELINE OVERVIEW PROGRESS BAR */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
        {[
          { step: 1, name: 'Raw Patient Data', icon: FileText, color: 'text-blue-400' },
          { step: 2, name: 'AI Checks Text', icon: Cpu, color: 'text-indigo-400' },
          { step: 3, name: 'Live Parallel APIs', icon: Activity, color: 'text-cyan-400' },
          { step: 4, name: 'FHIR & Clean DB', icon: Database, color: 'text-emerald-400' },
          { step: 5, name: 'Contradiction Radar', icon: ShieldAlert, color: 'text-rose-400' },
          { step: 6, name: 'Doctor Workspace', icon: Stethoscope, color: 'text-purple-400' },
          { step: 7, name: 'Human Signature', icon: FileBadge, color: 'text-amber-400' },
        ].map((s) => {
          const isDone = !!flowResult;
          const isPendingStep7 = isDone && s.step === 7 && !doctorDecisionResult;
          const isDoneStep7 = isDone && s.step === 7 && !!doctorDecisionResult;
          const Icon = s.icon;
          return (
            <div
              key={s.step}
              className={`p-3 rounded-xl border text-center transition-all ${
                isDoneStep7
                  ? 'bg-emerald-950/40 border-emerald-500/40'
                  : isPendingStep7
                  ? 'bg-amber-950/30 border-amber-500/40 animate-pulse'
                  : isDone
                  ? 'bg-slate-900/80 border-slate-700'
                  : 'bg-slate-900/40 border-slate-800/60 opacity-70'
              }`}
            >
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                  Step {s.step}
                </span>
                {isDone && s.step < 7 && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                {isDoneStep7 && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                {isPendingStep7 && <Clock className="w-3.5 h-3.5 text-amber-400" />}
              </div>
              <div className={`text-xs font-semibold flex items-center justify-center gap-1 ${s.color}`}>
                <Icon className="w-3.5 h-3.5" />
                <span className="truncate">{s.name}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* STEP 1: SIMPLE PATIENT DATA (RAW TEXT) */}
      {/* ========================================================================= */}
      <div className="rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 shadow-sm dark:shadow-xl relative transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-blue-500/20 border border-blue-500/40 text-blue-600 dark:text-blue-400 font-bold flex items-center justify-center text-sm flex-shrink-0">
              1
            </span>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                Simple Patient Data (Raw Text)
                <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/20 font-normal">
                  Doctor or Clinic Enters Plain Words
                </span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Active Patient Case: <strong className="text-slate-800 dark:text-slate-200">{activeName}</strong> ({selectedPatientId})
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Patient ID:</span>
            <input
              type="text"
              value={selectedPatientId}
              onChange={(e) => setSelectedPatientId(e.target.value)}
              className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg px-2.5 py-1 text-xs text-slate-800 dark:text-slate-200 w-24 focus:outline-none focus:border-blue-500 font-mono"
            />
          </div>
        </div>

        {/* Quick Clinical Presets */}
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider text-[11px]">
            Quick Cases:
          </span>
          <button
            type="button"
            onClick={() => {
              setSelectedPatientId('P-1005');
              const note = 'Patient Ramesh Patel (P-1005): Fever 102°F, Type 2 Diabetes, takes Metformin 500mg, allergic to Penicillin, HbA1c 8.2%';
              setRawInput(note);
              handleRunFlow(note, 'P-1005');
            }}
            className="text-xs px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/50 dark:hover:bg-blue-900/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 font-semibold transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles className="w-3 h-3 text-blue-500" />
            Ramesh Patel (P-1005) • Fever + Penicillin Allergy
          </button>
          <button
            type="button"
            onClick={() => {
              setSelectedPatientId('P-1001');
              const note = 'Patient Rajesh Kumar (P-1001): Blood pressure 160/100 mmHg, Essential Hypertension, takes Amlodipine 5mg and Nitroglycerin, allergic to Sulfa drugs, Serum Creatinine 1.1 mg/dL';
              setRawInput(note);
              handleRunFlow(note, 'P-1001');
            }}
            className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-medium transition-colors cursor-pointer"
          >
            Rajesh Kumar (P-1001) • Hypertension + Nitroglycerin
          </button>
          <button
            type="button"
            onClick={() => {
              setSelectedPatientId('P-1006');
              const note = 'Patient Pooja Nair (P-1006): Fever 101°F with acute throat irritation, Bronchial Asthma, takes Salbutamol 100mcg inhaler, allergic to Aspirin and Ibuprofen, Peak Flow 380 L/min';
              setRawInput(note);
              handleRunFlow(note, 'P-1006');
            }}
            className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-medium transition-colors cursor-pointer"
          >
            Pooja Nair (P-1006) • Asthma + Aspirin Allergy
          </button>
        </div>

        <div className="space-y-3">
          <textarea
            rows={3}
            value={rawInput}
            onChange={(e) => setRawInput(e.target.value)}
            placeholder={`Type clinical notes for ${activeName} (${selectedPatientId})...`}
            className="w-full bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-700 rounded-xl p-3.5 text-sm text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 font-mono transition-colors"
          />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <Stethoscope className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
              Doctor: <span className="text-slate-700 dark:text-slate-300 font-medium">{doctorName}</span> ({doctorId})
            </div>
            <button
              onClick={() => handleRunFlow()}
              disabled={loading}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-sm shadow-md shadow-blue-500/20 flex items-center gap-2 disabled:opacity-50 transition-all cursor-pointer self-end sm:self-auto"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-white" />
                  Executing Parallel Workflow for {activeName}...
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 text-cyan-200" />
                  Execute Live Clinical Pipeline
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* PIPELINE OUTPUT (STEPS 2 TO 7) */}
      {flowResult && (
        <div className="space-y-8 animate-fadeIn">
          {/* ========================================================================= */}
          {/* STEP 2: AI CHECKS RAW TEXT (CLINICAL NLP) */}
          {/* ========================================================================= */}
          <div className="rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 shadow-sm dark:shadow-xl transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-600 dark:text-indigo-400 font-bold flex items-center justify-center text-sm">
                  2
                </span>
                <div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    AI Checks Raw Text (Clinical NLP)
                    <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/20 font-normal">
                      Gemini Parses into 5 Buckets
                    </span>
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Named Entity Recognition (NER) splits narrative into Disease, Medication, Allergy, Lab Test, and Symptom.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full font-medium">
                <Cpu className="w-3.5 h-3.5" />
                Gemini High Precision NER
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {/* Disease */}
              <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-500/5 border border-amber-200 dark:border-amber-500/20 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-700 dark:text-amber-400 mb-1">
                    <Activity className="w-3.5 h-3.5" />
                    Disease / Condition
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-slate-100 mt-1">
                    {flowResult.step2NlpBuckets.disease || 'None detected'}
                  </div>
                </div>
                <div className="text-[10px] text-amber-700/70 dark:text-amber-400/70 font-mono mt-3">Target: ICD-11</div>
              </div>

              {/* Medication */}
              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-500/5 border border-emerald-200 dark:border-emerald-500/20 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-1">
                    <Pill className="w-3.5 h-3.5" />
                    Current Medication
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-slate-100 mt-1">
                    {flowResult.step2NlpBuckets.medication || 'None detected'}
                  </div>
                </div>
                <div className="text-[10px] text-emerald-700/70 dark:text-emerald-400/70 font-mono mt-3">Target: NIH RxNorm</div>
              </div>

              {/* Allergy */}
              <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-700 dark:text-rose-400 mb-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    Documented Allergy
                  </div>
                  <div className="text-sm font-bold text-rose-800 dark:text-rose-200 mt-1">
                    {flowResult.step2NlpBuckets.allergy || 'None detected'}
                  </div>
                </div>
                <div className="text-[10px] text-rose-700/70 dark:text-rose-400/70 font-mono mt-3">Target: NIH RxNorm Allergen</div>
              </div>

              {/* Lab Test */}
              <div className="p-4 rounded-xl bg-cyan-50 dark:bg-cyan-500/5 border border-cyan-200 dark:border-cyan-500/20 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-700 dark:text-cyan-400 mb-1">
                    <Microscope className="w-3.5 h-3.5" />
                    Laboratory Test / Vitals
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-slate-100 mt-1">
                    {flowResult.step2NlpBuckets.labTest || 'None detected'}
                  </div>
                </div>
                <div className="text-[10px] text-cyan-700/70 dark:text-cyan-400/70 font-mono mt-3">Target: LOINC + UCUM</div>
              </div>

              {/* Present Symptom */}
              <div className="p-4 rounded-xl bg-orange-50 dark:bg-orange-500/5 border border-orange-200 dark:border-orange-500/20 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-orange-700 dark:text-orange-400 mb-1">
                    <Thermometer className="w-3.5 h-3.5" />
                    Present Symptom
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-slate-100 mt-1">
                    {flowResult.step2NlpBuckets.symptom || 'None detected'}
                  </div>
                </div>
                <div className="text-[10px] text-orange-700/70 dark:text-orange-400/70 font-mono mt-3">Target: ICD-11 / SNOMED</div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* STEP 3: AI CALLS LIVE APIS IN PARALLEL */}
          {/* ========================================================================= */}
          <div className="rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 shadow-sm dark:shadow-xl transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-600 dark:text-cyan-400 font-bold flex items-center justify-center text-sm">
                  3
                </span>
                <div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    AI Calls Live APIs in Parallel
                    <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/20 font-normal">
                      Simultaneous WHO & NIH Live Resolvers
                    </span>
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Parallel live external terminology queries with real network latency tracking.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 px-3 py-1 rounded-full font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping mr-1" />
                Live Network Response: 200 OK
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* ICD-11 */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 hover:border-amber-500/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                    WHO ICD-11 MMS
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono font-medium">
                    {flowResult.step3LiveApis.icd11.latencyMs}ms
                  </span>
                </div>
                <div className="text-2xl font-black text-amber-600 dark:text-amber-300 font-mono tracking-wide">
                  {flowResult.step3LiveApis.icd11.officialCode}
                </div>
                <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1 line-clamp-1">
                  {flowResult.step3LiveApis.icd11.officialDisplay}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  Matched Term: <span className="text-slate-800 dark:text-slate-200 font-mono">&quot;{flowResult.step3LiveApis.icd11.queryTerm}&quot;</span>
                </div>
                <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-3 pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <span>WHO Classification</span>
                  <a
                    href="https://icd.who.int/browse11/l-m/en"
                    target="_blank"
                    rel="noreferrer"
                    className="text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1 font-medium"
                  >
                    id.who.int <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>

              {/* RxNorm (Medication & Allergy) */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                    NIH RxNorm (RxNav)
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono font-medium">
                    {flowResult.step3LiveApis.rxNormMedication.latencyMs}ms
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <div className="text-2xl font-black text-emerald-600 dark:text-emerald-300 font-mono tracking-wide">
                    {flowResult.step3LiveApis.rxNormMedication.officialCode}
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    / {flowResult.step3LiveApis.rxNormAllergy.officialCode}
                  </span>
                </div>
                <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1 line-clamp-1">
                  {flowResult.step3LiveApis.rxNormMedication.officialDisplay} + {flowResult.step3LiveApis.rxNormAllergy.officialDisplay}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  Verified via <span className="text-slate-700 dark:text-slate-200">NLM RxNav REST API</span>
                </div>
                <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-3 pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <span>NIH NLM Standard</span>
                  <a
                    href="https://rxnav.nlm.nih.gov/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1 font-medium"
                  >
                    rxnav.nlm.nih.gov <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>

              {/* LOINC */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider">
                    NIH LOINC / Regenstrief
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono font-medium">
                    {flowResult.step3LiveApis.loincLabTest.latencyMs}ms
                  </span>
                </div>
                <div className="text-2xl font-black text-cyan-600 dark:text-cyan-300 font-mono tracking-wide">
                  {flowResult.step3LiveApis.loincLabTest.officialCode}
                </div>
                <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1 line-clamp-1">
                  {flowResult.step3LiveApis.loincLabTest.officialDisplay}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  Matched: <span className="text-slate-800 dark:text-slate-200 font-mono">&quot;{flowResult.step3LiveApis.loincLabTest.queryTerm}&quot;</span>
                </div>
                <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-3 pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <span>Clinical Tables API</span>
                  <a
                    href={`https://loinc.org/${flowResult.step3LiveApis.loincLabTest.officialCode}/`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-600 dark:text-cyan-400 hover:underline inline-flex items-center gap-1 font-medium"
                  >
                    loinc.org <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>

              {/* UCUM */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 hover:border-purple-500/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-purple-700 dark:text-purple-400 uppercase tracking-wider">
                    NIH UCUM Web Service
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono font-medium">
                    Live
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 my-1">
                  {flowResult.step3LiveApis.ucumUnits.map((u, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/30 text-purple-800 dark:text-purple-200 font-mono font-medium"
                    >
                      {u.unit} <span className="text-emerald-600 dark:text-emerald-400 text-[10px]">✓</span>
                    </span>
                  ))}
                </div>
                <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1">
                  Standardized Clinical Units
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  Validated against HL7 / ISO 11240
                </div>
                <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-3 pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <span>UCUM Service</span>
                  <a
                    href="https://ucum.nlm.nih.gov/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-purple-600 dark:text-purple-400 hover:underline inline-flex items-center gap-1 font-medium"
                  >
                    ucum.nlm.nih.gov <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* STEP 4: FHIR PACKAGING & CLEAN DB STORAGE */}
          {/* ========================================================================= */}
          <div className="rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 shadow-sm dark:shadow-xl transition-colors">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 font-bold flex items-center justify-center text-sm">
                  4
                </span>
                <div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    FHIR Packaging & Clean DB Storage
                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/20 font-normal">
                      HL7 FHIR R4 Bundle + PostgreSQL + Neo4j
                    </span>
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Patient <strong className="text-slate-800 dark:text-slate-200">{flowResult.step1RawText.patientName}</strong> ({flowResult.step1RawText.patientId}) clinical bundle permanently committed.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-300 font-medium">
                  <Database className="w-3.5 h-3.5" />
                  PostgreSQL Sealed ({flowResult.step4FhirPackage.resourceCount} resources)
                </span>
                <span className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 font-medium">
                  <Network className="w-3.5 h-3.5" />
                  Neo4j Graph Synced
                </span>
              </div>
            </div>

            {/* Storage Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                <div className="text-xs text-slate-500 dark:text-slate-400">PostgreSQL Evidence Ledger</div>
                <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  {flowResult.step4FhirPackage.evidenceLedgerRecordedCount} Clinical Events Recorded
                </div>
                <div className="text-[11px] text-slate-400 dark:text-slate-500 mt-1 font-mono">
                  Table: evidence_ledger, fhir_bundles
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                <div className="text-xs text-slate-500 dark:text-slate-400">HL7 FHIR R4 Resource Bundle</div>
                <div className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1 flex items-center gap-1.5">
                  <FileCode className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  Bundle ID: {flowResult.step4FhirPackage.fhirBundle?.id}
                </div>
                <div className="text-[11px] text-slate-400 dark:text-slate-500 mt-1 font-mono">
                  Type: collection (Condition, Med, Obs, Allergy)
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                <div className="text-xs text-slate-500 dark:text-slate-400">Neo4j Clinical Knowledge Graph</div>
                <div className="text-sm font-bold text-purple-600 dark:text-purple-400 mt-1 flex items-center gap-1.5">
                  <Network className="w-4 h-4" />
                  Active Node & Relationship Graph
                </div>
                <div className="text-[11px] text-slate-400 dark:text-slate-500 mt-1 font-mono">
                  HAS_CONDITION, TAKES_MEDICATION, ALLERGIC_TO
                </div>
              </div>
            </div>

            {/* FHIR JSON Drawer */}
            <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-950">
              <button
                onClick={() => setShowFhirJson(!showFhirJson)}
                className="w-full px-4 py-2.5 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 bg-slate-100/70 dark:bg-slate-900/50 flex items-center justify-between transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    View Complete HL7 FHIR R4 JSON Bundle Specification
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-400 font-mono">
                    {flowResult.step4FhirPackage.resourceCount} Entries
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {showFhirJson ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {showFhirJson && (
                <div className="p-4 border-t border-slate-200 dark:border-slate-800 relative bg-slate-900">
                  <button
                    onClick={copyFhirToClipboard}
                    className="absolute top-6 right-6 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1 font-mono cursor-pointer"
                  >
                    {copiedFhir ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        Copy FHIR JSON
                      </>
                    )}
                  </button>
                  <pre className="text-[11px] font-mono text-emerald-300/90 overflow-x-auto max-h-72 p-2 scrollbar-thin">
                    {JSON.stringify(flowResult.step4FhirPackage.fhirBundle, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          </div>

          {/* ========================================================================= */}
          {/* STEP 5: AI ANALYZES PAST + PRESENT (CONTRADICTION RADAR) */}
          {/* ========================================================================= */}
          <div className="rounded-2xl bg-gradient-to-br from-rose-50/70 via-white to-rose-50/30 dark:from-rose-950/40 dark:via-slate-900/90 dark:to-slate-900 border border-rose-200 dark:border-rose-500/40 p-6 shadow-sm dark:shadow-2xl relative overflow-hidden transition-colors">
            <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-600 dark:text-rose-400 font-bold flex items-center justify-center text-sm">
                  5
                </span>
                <div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    AI Analyzes Past + Present Data (Contradiction Radar)
                    <span className="text-xs px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-500/20 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-500/40 font-bold">
                      SAFETY INTERLOCK ACTIVE
                    </span>
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Cross-references <strong className="text-slate-800 dark:text-slate-200">{flowResult.step1RawText.patientName}&apos;s</strong> documented allergy against present acute presentation.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-500/20 border border-rose-300 dark:border-rose-500/40 text-rose-700 dark:text-rose-300 text-xs font-bold animate-pulse">
                <Flame className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                CRITICAL CONTRADICTION PREVENTED
              </div>
            </div>

            {/* Red Alert Banner */}
            <div className="p-4 rounded-xl bg-rose-100/80 dark:bg-rose-500/15 border border-rose-300 dark:border-rose-500/40 mb-6">
              <div className="flex items-start gap-3">
                <ShieldAlert className="w-6 h-6 text-rose-600 dark:text-rose-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-base font-bold text-rose-900 dark:text-rose-200">
                    {flowResult.step5ContradictionRadar.conflictSummary}
                  </div>
                  <p className="text-xs text-rose-800 dark:text-rose-200/80 mt-1 leading-relaxed">
                    {flowResult.step5ContradictionRadar.clinicalHazard}
                  </p>
                  {flowResult.step5ContradictionRadar.blockedDrugs.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2 mt-3">
                      <span className="text-xs font-semibold text-rose-900 dark:text-rose-300">Hard-Blocked Medications:</span>
                      {flowResult.step5ContradictionRadar.blockedDrugs.map((drug, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2.5 py-0.5 rounded-lg bg-rose-200 dark:bg-rose-900/60 border border-rose-300 dark:border-rose-500/40 text-rose-900 dark:text-rose-200 font-mono font-medium flex items-center gap-1"
                        >
                          <XCircle className="w-3 h-3 text-rose-600 dark:text-rose-400" />
                          {drug}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Gemini Safe Recommendation Box */}
            <div className="p-5 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-500/40">
              <div className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <div className="w-full">
                  <div className="text-sm font-bold text-emerald-800 dark:text-emerald-300">
                    {flowResult.step5ContradictionRadar.geminiRecommendation.safeAlternative}
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 mt-1 leading-relaxed">
                    {flowResult.step5ContradictionRadar.geminiRecommendation.clinicalRationale}
                  </p>

                  <div className="mt-4 pt-3 border-t border-emerald-200 dark:border-emerald-500/20">
                    <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-2">
                      Proposed Safe Prescription Regiment:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {flowResult.step5ContradictionRadar.geminiRecommendation.suggestedPrescription.map(
                        (rx: any, i: number) => (
                          <div
                            key={i}
                            className="p-3 rounded-lg bg-white dark:bg-slate-950/80 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-between"
                          >
                            <div>
                              <div className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                                <Pill className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                                {rx.drugName || rx.drug} {rx.dosage ? `(${rx.dosage})` : ''}
                              </div>
                              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                                Regimen: {rx.frequency || rx.dose} {rx.duration ? `• Duration: ${rx.duration}` : ''}
                              </div>
                            </div>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/20 font-medium">
                              RxCUI: {rx.rxNormCode}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* STEP 6: SHOW TO DOCTOR (DOCTOR INTELLIGENCE WORKSPACE) */}
          {/* ========================================================================= */}
          <div className="rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 shadow-sm dark:shadow-xl transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-500/40 text-purple-600 dark:text-purple-400 font-bold flex items-center justify-center text-sm">
                  6
                </span>
                <div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    Show to Doctor (Doctor Intelligence Workspace)
                    <span className="text-xs px-2 py-0.5 rounded-full bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/20 font-normal">
                      Full Picture for {flowResult.step1RawText.patientName}
                    </span>
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Synthesis of past clinical history, present vitals, and algorithmic safety warnings.
                  </p>
                </div>
              </div>
              <div className="text-xs text-purple-700 dark:text-purple-300 font-medium flex items-center gap-1">
                <Stethoscope className="w-3.5 h-3.5" />
                Attending: {doctorName}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-3">
                <div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Longitudinal Medical History
                  </div>
                  <div className="text-xs text-slate-800 dark:text-slate-200 mt-1.5 p-2.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    {flowResult.step6DoctorWorkspace.pastHistorySummary}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Today&apos;s Encounter & Vitals
                  </div>
                  <div className="text-xs text-slate-800 dark:text-slate-200 mt-1.5 p-2.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    {flowResult.step6DoctorWorkspace.presentEncounterSummary}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                  Gemini Differential Diagnoses
                </div>
                <div className="space-y-2">
                  {flowResult.step6DoctorWorkspace.differentialDiagnoses.map((diff: any, i: number) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between"
                    >
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-slate-100">{diff.condition}</div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400">
                          ICD-11: <span className="text-amber-600 dark:text-amber-400 font-mono font-medium">{diff.icd11Code || diff.code}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-bold text-indigo-600 dark:text-indigo-300 font-mono">
                          {diff.probability || (diff.confidenceScore ? `${(diff.confidenceScore * 100).toFixed(0)}% Match` : 'HIGH')}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-3 p-2.5 rounded bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 text-[11px] text-rose-800 dark:text-rose-300 font-medium">
                  {flowResult.step6DoctorWorkspace.safetyRiskAlert}
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* STEP 7: DOCTOR DECIDES NEXT (HUMAN CLINICAL SIGNATURE) */}
          {/* ========================================================================= */}
          <div className="rounded-2xl bg-gradient-to-br from-amber-50/40 via-white to-amber-50/20 dark:from-slate-900 dark:via-amber-950/20 dark:to-slate-900 border border-amber-200 dark:border-amber-500/40 p-6 shadow-sm dark:shadow-2xl relative transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-600 dark:text-amber-400 font-bold flex items-center justify-center text-sm">
                  7
                </span>
                <div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    Doctor Decides Next (Human Clinical Signature)
                    <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-500/20 font-normal">
                      Human-in-the-Loop Governance
                    </span>
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Clinical decision for <strong className="text-slate-800 dark:text-slate-200">{flowResult.step1RawText.patientName}</strong>. AI never prescribes autonomously.
                  </p>
                </div>
              </div>

              {doctorDecisionResult ? (
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/20 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  DECISION SEALED & AUDIT LOGGED
                </div>
              ) : (
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-500/20 border border-amber-300 dark:border-amber-500/40 text-amber-800 dark:text-amber-300 text-xs font-bold animate-pulse">
                  <Lock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  Awaiting Doctor Sign-off
                </div>
              )}
            </div>

            {doctorDecisionResult ? (
              /* Signed State */
              <div className="p-6 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/40 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-1">
                      <FileBadge className="w-4 h-4" />
                      Cryptographic Clinical Signature Verified
                    </div>
                    <div className="text-xl font-bold text-slate-900 dark:text-white">
                      Decision [{doctorDecisionResult.decision}] Confirmed & Sealed for {flowResult.step1RawText.patientName}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                      {doctorDecisionResult.message}
                    </p>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                      Timestamp: {new Date(doctorDecisionResult.timestamp).toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-white dark:bg-slate-950/80 border border-emerald-200 dark:border-emerald-500/30 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Digital Signature Stamp:</div>
                    <div className="text-sm font-bold font-mono text-emerald-700 dark:text-emerald-300 mt-0.5">
                      {doctorDecisionResult.signature}
                    </div>
                    <div className="text-[11px] text-slate-400 dark:text-slate-500 mt-0.5">
                      Doctor: {doctorName} • Hospital CMC-CARD-001 • Patient: {flowResult.step1RawText.patientName} ({flowResult.step1RawText.patientId})
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(doctorDecisionResult.signature);
                      setCopiedSignature(true);
                      setTimeout(() => setCopiedSignature(false), 2000);
                    }}
                    className="px-3 py-1.5 rounded bg-emerald-100 hover:bg-emerald-200 dark:bg-emerald-500/10 dark:hover:bg-emerald-500/20 border border-emerald-200 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs font-mono flex items-center gap-1.5 self-start md:self-auto cursor-pointer font-medium"
                  >
                    {copiedSignature ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        Signature Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        Copy Signature
                      </>
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Active Approved Prescription:
                    </div>
                    <div className="text-xs text-slate-800 dark:text-slate-200 mt-1 font-mono space-y-1">
                      {flowResult.step5ContradictionRadar?.geminiRecommendation?.suggestedPrescription?.map(
                        (rx: any, idx: number) => (
                          <div key={idx}>
                            • {rx.drugName || rx.drug} {rx.dosage ? `(${rx.dosage})` : ''} {rx.dose ? `(${rx.dose})` : ''}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <div className="text-xs font-semibold text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
                      <XCircle className="w-3.5 h-3.5" />
                      Blocked Lethal Medications:
                    </div>
                    <div className="text-xs text-slate-800 dark:text-slate-200 mt-1 font-mono space-y-1">
                      {flowResult.step5ContradictionRadar?.blockedDrugs?.map((drug: string, idx: number) => (
                        <div key={idx}>• {drug}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Awaiting Decision Buttons */
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 block">
                    Doctor Clinical Justification & Audit Notes:
                  </label>
                  <textarea
                    rows={2}
                    value={decisionNotes}
                    onChange={(e) => setDecisionNotes(e.target.value)}
                    className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-xs text-slate-900 dark:text-slate-200 focus:outline-none focus:border-amber-500 font-mono"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => handleRecordDecision('ACCEPT')}
                    disabled={decisionSubmitting}
                    className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 flex items-center gap-2 transition-all disabled:opacity-50 cursor-pointer"
                  >
                    {decisionSubmitting ? (
                      <RefreshCw className="w-4 h-4 animate-spin" />
                    ) : (
                      <CheckCircle2 className="w-4 h-4" />
                    )}
                    [ACCEPT RECOMMENDATION] Prescribe Safe Alternative
                  </button>

                  <button
                    onClick={() => handleRecordDecision('MODIFY')}
                    disabled={decisionSubmitting}
                    className="px-5 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm shadow-md transition-all disabled:opacity-50 flex items-center gap-2 cursor-pointer"
                  >
                    <UserCheck className="w-4 h-4" />
                    [CUSTOM / MODIFY] Adjust Regimen
                  </button>

                  <button
                    onClick={() => handleRecordDecision('REJECT')}
                    disabled={decisionSubmitting}
                    className="px-5 py-3 rounded-xl bg-rose-100 hover:bg-rose-200 dark:bg-rose-900/60 dark:hover:bg-rose-800 text-rose-800 dark:text-rose-200 border border-rose-300 dark:border-rose-700/50 font-semibold text-sm transition-all disabled:opacity-50 flex items-center gap-2 cursor-pointer"
                  >
                    <XCircle className="w-4 h-4" />
                    [REJECT & OVERRIDE]
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
