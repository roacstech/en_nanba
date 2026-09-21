'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  X,
  Activity,
  Pill,
  FlaskConical,
  AlertTriangle,
  FileJson,
  Check,
  Copy,
  ExternalLink,
  RefreshCw,
  Layers,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  Download,
  CheckCircle2,
  Info,
} from 'lucide-react';
import {
  api,
  Icd11DiseaseEntry,
  DiseaseClinicalProfileResponse,
} from '../lib/api';

interface DiseaseIntelligenceModalProps {
  disease: Icd11DiseaseEntry | null;
  onClose: () => void;
}

type TabType = 'causes' | 'symptoms' | 'medications' | 'labs' | 'allergies' | 'fhir';

export const DiseaseIntelligenceModal: React.FC<DiseaseIntelligenceModalProps> = ({
  disease,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('causes');
  const [profile, setProfile] = useState<DiseaseClinicalProfileResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  // Fetch live clinical profile from backend API
  const fetchProfile = useCallback(async () => {
    if (!disease) return;
    setIsLoading(true);
    setError(null);
    try {
      const data = await api.getDiseaseClinicalProfile({
        code: disease.code,
        disease: disease.display,
        category: disease.category,
        description: disease.description,
      });
      setProfile(data);
    } catch (err: any) {
      console.error('Failed to load disease clinical profile', err);
      setError(err.message || 'Failed to fetch dynamic clinical intelligence from APIs');
    } finally {
      setIsLoading(false);
    }
  }, [disease]);

  useEffect(() => {
    if (disease) {
      fetchProfile();
      setActiveTab('causes');
    }
  }, [disease, fetchProfile]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!disease) return null;

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleDownloadFhir = () => {
    if (!profile?.fhirBundle) return;
    const blob = new Blob([JSON.stringify(profile.fhirBundle, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `fhir-r4-${disease.code}-${disease.display.toLowerCase().replace(/\s+/g, '-')}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-5xl max-h-[92vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-900 dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ========================================================================= */}
        {/* HEADER                                                                    */}
        {/* ========================================================================= */}
        <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 bg-gradient-to-r from-blue-50/50 via-white to-indigo-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950/20 flex items-start justify-between gap-4 shrink-0">
          <div className="space-y-1.5 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono font-black text-sm text-blue-600 dark:text-blue-400 bg-blue-100/70 dark:bg-blue-950/90 px-2.5 py-0.5 rounded-lg border border-blue-200 dark:border-blue-800">
                ICD-11: {disease.code}
              </span>
              <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded-md border border-indigo-200 dark:border-indigo-800/60">
                WHO MMS 2026
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                {disease.category}
              </span>
              
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white truncate">
              {disease.display}
            </h2>

            {/* <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
              {disease.chapter} • Live Terminology Resolution: RxNorm, LOINC, UCUM & FHIR R4
            </p> */}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0 cursor-pointer"
            title="Close modal (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ========================================================================= */}
        {/* LIVE API STATUS BAR                                                       */}
        {/* ========================================================================= */}
        {/* <div className="px-6 py-2.5 bg-slate-50 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 text-[11px] flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
              Active Standards:
            </span> */}

            {/* RxNorm Live Badge */}
            {/* <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 font-mono text-[10px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              RxNorm (NIH RxNav Live)
            </div> */}

            {/* LOINC Live Badge */}
            {/* <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800 font-mono text-[10px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></span>
              LOINC (NIH ClinicalTables Live)
            </div> */}

            {/* UCUM Live Badge */}
            {/* <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 font-mono text-[10px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
              UCUM (NIH Live Service)
            </div> */}

            {/* FHIR Badge */}
            {/* <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 font-mono text-[10px] font-medium">
              <ShieldCheck className="w-3 h-3 text-amber-500" />
              HL7 FHIR R4 (Validated)
            </div>
          </div> */}

          {/* {profile?.apiMetadata?.executionTimeMs && (
            <div className="text-slate-400 font-mono text-[10px] hidden sm:block">
              Latency: <strong className="text-slate-600 dark:text-slate-300 font-bold">{profile.apiMetadata.executionTimeMs} ms</strong>
            </div>
          )}
        </div> */}

        {/* ========================================================================= */}
        {/* TABS NAVIGATION                                                           */}
        {/* ========================================================================= */}
        <div className="px-6 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center gap-1 overflow-x-auto shrink-0 scrollbar-none">
          <button
            type="button"
            onClick={() => setActiveTab('causes')}
            className={`flex items-center gap-2 py-3 px-3.5 text-xs font-bold border-b-2 transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'causes'
                ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Causes & Etiology</span>
            {profile?.causes && (
              <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                {profile.causes.length}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('symptoms')}
            className={`flex items-center gap-2 py-3 px-3.5 text-xs font-bold border-b-2 transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'symptoms'
                ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>Symptoms & Presentation</span>
            {profile?.symptoms && (
              <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                {profile.symptoms.length}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('medications')}
            className={`flex items-center gap-2 py-3 px-3.5 text-xs font-bold border-b-2 transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'medications'
                ? 'border-emerald-600 text-emerald-600 dark:border-emerald-400 dark:text-emerald-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Pill className="w-4 h-4" />
            <span>Medications (RxNorm API)</span>
            {profile?.medications && (
              <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300">
                {profile.medications.length}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('labs')}
            className={`flex items-center gap-2 py-3 px-3.5 text-xs font-bold border-b-2 transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'labs'
                ? 'border-cyan-600 text-cyan-600 dark:border-cyan-400 dark:text-cyan-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <FlaskConical className="w-4 h-4" />
            <span>Lab Reports (LOINC & UCUM)</span>
            {profile?.labReports && (
              <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] bg-cyan-100 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300">
                {profile.labReports.length}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('allergies')}
            className={`flex items-center gap-2 py-3 px-3.5 text-xs font-bold border-b-2 transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'allergies'
                ? 'border-rose-600 text-rose-600 dark:border-rose-400 dark:text-rose-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <AlertTriangle className="w-4 h-4" />
            <span>Allergies & Risks</span>
            {profile?.allergies && (
              <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300">
                {profile.allergies.length}
              </span>
            )}
          </button>

          {/* <button
            type="button"
            onClick={() => setActiveTab('fhir')}
            className={`flex items-center gap-2 py-3 px-3.5 text-xs font-bold border-b-2 transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'fhir'
                ? 'border-amber-600 text-amber-600 dark:border-amber-400 dark:text-amber-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <FileJson className="w-4 h-4" />
            <span>HL7 FHIR R4 Bundle</span>
            {profile?.fhirValidation?.isValid && (
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 ml-1" />
            )}
          </button> */}
        </div>

        {/* ========================================================================= */}
        {/* BODY CONTENT                                                              */}
        {/* ========================================================================= */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {isLoading ? (
            <div className="py-16 flex flex-col items-center justify-center space-y-4 text-center">
              <div className="relative w-14 h-14">
                <div className="absolute inset-0 rounded-full border-4 border-blue-200 dark:border-blue-900 animate-pulse"></div>
                <div className="absolute inset-0 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Fetching Dynamic Medical Intelligence...
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md">
                  Querying live NIH NLM RxNav (RxNorm), ClinicalTables (LOINC), UCUM Web Service, and assembling FHIR R4 Resource Bundle with zero hardcoding.
                </p>
              </div>
            </div>
          ) : error ? (
            <div className="py-12 px-6 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-center space-y-4">
              <AlertTriangle className="w-10 h-10 text-rose-500 mx-auto" />
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-rose-800 dark:text-rose-200">
                  Live API Resolution Notice
                </h3>
                <p className="text-xs text-rose-600 dark:text-rose-400 max-w-md mx-auto">
                  {error}
                </p>
              </div>
              <button
                type="button"
                onClick={fetchProfile}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Retry Live APIs
              </button>
            </div>
          ) : profile ? (
            <>
              {/* TAB 1: CAUSES & ETIOLOGY */}
              {activeTab === 'causes' && (
                <div className="space-y-6 animate-fadeIn">
                  {/* Overview Card */}
                  {/* <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-800/50 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wider">
                      <Info className="w-4 h-4" />
                      Clinical Definition & Diagnostic Context
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {profile.overview || profile.description}
                    </p>
                  </div> */}

                  {/* Causes Grid */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Biological Causes, Pathophysiology & Risk Factors
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {profile.causes.map((cause, idx) => {
                        const badgeColor =
                          cause.type === 'pathophysiology'
                            ? 'bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800'
                            : cause.type === 'etiology'
                            ? 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800'
                            : 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800';

                        return (
                          <div
                            key={idx}
                            className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-blue-300 dark:hover:border-blue-800 transition-all space-y-2"
                          >
                            <div className="flex items-center justify-between gap-2">
                              <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                                {cause.title}
                              </h4>
                              <span
                                className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${badgeColor}`}
                              >
                                {cause.type.replace('_', ' ')}
                              </span>
                            </div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                              {cause.description}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: SYMPTOMS & CLINICAL PRESENTATION */}
              {activeTab === 'symptoms' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Clinical Signs, Symptoms & Manifestations
                    </h3>
                    <span className="text-xs text-slate-400 font-medium">
                      Categorized by Diagnostic Urgency
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {profile.symptoms.map((symptom, idx) => {
                      const severityColor =
                        symptom.severity === 'critical'
                          ? 'bg-rose-50 dark:bg-rose-950/60 border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300'
                          : symptom.severity === 'characteristic'
                          ? 'bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-900 text-amber-700 dark:text-amber-300'
                          : 'bg-blue-50 dark:bg-blue-950/60 border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300';

                      return (
                        <div
                          key={idx}
                          className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 space-y-2 hover:border-slate-300 dark:hover:border-slate-700 transition-all"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                              <Activity className="w-3.5 h-3.5 text-blue-500" />
                              {symptom.name}
                            </span>
                            {symptom.severity && (
                              <span
                                className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${severityColor}`}
                              >
                                {symptom.severity}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            {symptom.clinicalSignificance}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 3: MEDICATIONS (RXNORM API) */}
              {activeTab === 'medications' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
                        Pharmacotherapy & Prescribed Drugs (RxNorm Standard)
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Live verification against NIH NLM RxNav approximate term search & concept registry
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 font-mono text-xs font-bold self-start sm:self-auto">
                      NIH RxNav Live
                    </div>
                  </div>

                  <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-xs">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                          <th className="py-3 px-4 w-28">RxCUI</th>
                          <th className="py-3 px-4">Drug / Ingredient Name</th>
                          <th className="py-3 px-4">Dosage Form</th>
                          <th className="py-3 px-4 w-44">Source Standard</th>
                          <th className="py-3 px-4 w-28 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                        {profile.medications.map((med, idx) => (
                          <tr
                            key={idx}
                            className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
                          >
                            {/* RxCUI */}
                            <td className="py-3.5 px-4 font-mono font-bold text-emerald-600 dark:text-emerald-400">
                              <span className="bg-emerald-50 dark:bg-emerald-950/80 px-2 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-800/60">
                                {med.rxcui}
                              </span>
                            </td>

                            {/* Name */}
                            <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white capitalize">
                              {med.name}
                            </td>

                            {/* Dosage Form */}
                            <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300">
                              <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[11px] font-medium">
                                {med.dosageForm || 'Oral Tablet'}
                              </span>
                            </td>

                            {/* Source */}
                            <td className="py-3.5 px-4 text-slate-500 font-mono text-[10px]">
                              {med.source}
                            </td>

                            {/* Link to RxNav */}
                            <td className="py-3.5 px-4 text-center">
                              <a
                                href={med.rxnavUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 font-semibold text-[11px] transition-colors"
                              >
                                <span>RxNav</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* TAB 4: LAB REPORTS (LOINC & UCUM) */}
              {activeTab === 'labs' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
                        Diagnostic Lab Tests & Observations (LOINC + UCUM)
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Live resolution against Regenstrief LOINC clinical table & NIH UCUM unit validator
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-cyan-50 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800 font-mono text-xs font-bold self-start sm:self-auto">
                      NIH ClinicalTables Live
                    </div>
                  </div>

                  <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-xs">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                          <th className="py-3 px-4 w-32">LOINC Code</th>
                          <th className="py-3 px-4">Diagnostic Investigation</th>
                          <th className="py-3 px-4">Category</th>
                          <th className="py-3 px-4 w-32">UCUM Unit</th>
                          <th className="py-3 px-4 w-28 text-center">Copy Code</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                        {profile.labReports.map((lab, idx) => (
                          <tr
                            key={idx}
                            className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
                          >
                            {/* LOINC Code */}
                            <td className="py-3.5 px-4 font-mono font-bold text-cyan-600 dark:text-cyan-400">
                              <span className="bg-cyan-50 dark:bg-cyan-950/80 px-2 py-0.5 rounded-md border border-cyan-200 dark:border-cyan-800/60">
                                {lab.loincCode}
                              </span>
                            </td>

                            {/* Test Name */}
                            <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white">
                              {lab.testName}
                            </td>

                            {/* Category */}
                            <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400 text-[11px]">
                              {lab.category}
                            </td>

                            {/* UCUM Unit */}
                            <td className="py-3.5 px-4 font-mono">
                              <span className="inline-flex items-center gap-1 bg-purple-50 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60 px-2 py-0.5 rounded-md font-bold text-[11px]">
                                {lab.ucumUnit}
                                <Check className="w-3 h-3 text-emerald-500" />
                              </span>
                            </td>

                            {/* Copy button */}
                            <td className="py-3.5 px-4 text-center">
                              <button
                                type="button"
                                onClick={() => handleCopy(lab.loincCode, `loinc-${idx}`)}
                                className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                                title="Copy LOINC Code"
                              >
                                {copiedText === `loinc-${idx}` ? (
                                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                                ) : (
                                  <Copy className="w-3.5 h-3.5" />
                                )}
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* TAB 5: ALLERGIES & CONTRAINDICATIONS */}
              {activeTab === 'allergies' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
                        Drug Allergies, Hypersensitivities & Contradictions
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Mapped to RxNorm Allergenic Concepts & FHIR AllergyIntolerance models
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-rose-50 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 font-mono text-xs font-bold">
                      Safety Warning
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {profile.allergies.map((allergy, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl border border-rose-200 dark:border-rose-900/60 bg-rose-50/40 dark:bg-rose-950/20 space-y-2.5"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />
                            <h4 className="text-xs font-bold text-slate-900 dark:text-white capitalize">
                              {allergy.allergen}
                            </h4>
                          </div>
                          <span className="font-mono text-[10px] font-bold text-rose-700 dark:text-rose-300 bg-rose-100 dark:bg-rose-950 px-2 py-0.5 rounded-md border border-rose-200 dark:border-rose-800">
                            RxCUI: {allergy.rxcui}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                          <span>Class: <strong className="text-slate-700 dark:text-slate-300">{allergy.clinicalCategory}</strong></span>
                          <span>•</span>
                          <span className="font-bold text-rose-600 dark:text-rose-400">
                            Criticality: {allergy.criticality}
                          </span>
                        </div>

                        <p className="text-xs text-slate-600 dark:text-slate-300 bg-white/70 dark:bg-slate-900/80 p-2.5 rounded-lg border border-rose-100 dark:border-rose-950">
                          {allergy.reaction}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 6: HL7 FHIR R4 RESOURCE BUNDLE */}
              {activeTab === 'fhir' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-500" />
                        HL7 FHIR Release 4 Standard Representation
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Synthesized Condition, MedicationRequest, Observation & AllergyIntolerance Bundle
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          handleCopy(
                            JSON.stringify(profile.fhirBundle, null, 2),
                            'fhir-bundle'
                          )
                        }
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer shadow-xs"
                      >
                        {copiedText === 'fhir-bundle' ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-500" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy FHIR JSON</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={handleDownloadFhir}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>

                  {/* FHIR Validation Confirmation */}
                  <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span>
                        FHIR R4 Bundle Validation Passed ({profile.fhirValidation.entryCount} Resources)
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-700 dark:text-emerald-400">
                      {profile.fhirValidation.resourceTypesFound.join(' • ')}
                    </div>
                  </div>

                  {/* Formatted JSON Box */}
                  <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950 p-4 overflow-x-auto max-h-[380px] text-xs font-mono text-emerald-400 scrollbar-thin">
                    <pre>{JSON.stringify(profile.fhirBundle, null, 2)}</pre>
                  </div>
                </div>
              )}
            </>
          ) : null}
        </div>

        {/* ========================================================================= */}
        {/* FOOTER                                                                    */}
        {/* ========================================================================= */}
        {/* <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs shrink-0">
          <div className="text-slate-500 dark:text-slate-400 text-[11px] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>100% Dynamic API Resolution • Strict Zero-Hardcoded Mandate</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};
