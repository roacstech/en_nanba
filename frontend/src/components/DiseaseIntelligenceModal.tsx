'use client';

import React, { useEffect, useState } from 'react';
import {
  X,
  ExternalLink,
  BookOpen,
  Layers,
  Activity,
  HeartPulse,
  Stethoscope,
  Network,
  GitBranch,
  Info,
  Loader2,
} from 'lucide-react';
import { api, Icd11DiseaseEntry, WhoLiveEntityDetails } from '../lib/api';

interface DiseaseIntelligenceModalProps {
  disease: Icd11DiseaseEntry | null;
  onClose: () => void;
}

export const DiseaseIntelligenceModal: React.FC<DiseaseIntelligenceModalProps> = ({
  disease,
  onClose,
}) => {
  const [liveDetails, setLiveDetails] = useState<WhoLiveEntityDetails | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!disease?.code) {
      setLiveDetails(null);
      setIsLoading(false);
      return;
    }

    let isMounted = true;
    setIsLoading(true);

    api.getIcd11EntityDetails(disease.code)
      .then((data) => {
        if (isMounted) {
          setLiveDetails(data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.warn('Could not fetch live WHO entity details:', err);
        if (isMounted) {
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [disease?.code]);

  if (!disease) return null;

  const chNum = String(disease.chapterNumber || '').replace(/^0+/, '');
  const isSymptomChapter = chNum === '21' || (disease.chapter || '').toLowerCase().includes('symptom');
  const isDiseaseChapter = !isSymptomChapter && (parseInt(chNum, 10) >= 1 && parseInt(chNum, 10) <= 20);

  const activeBrowserUrl = liveDetails?.browserUrl || disease.browserUrl;
  const foundationBrowserUrl = liveDetails?.foundationBrowserUrl || disease.foundationBrowserUrl;
  const foundationUri = liveDetails?.foundationUri || disease.foundationUri || `http://id.who.int/icd/entity/${disease.code}`;
  const displayDefinition = liveDetails?.definition?.trim() || disease.description || '';

  // Interconnected synonyms from WHO API and disease index
  const synonymsList = Array.from(new Set([
    ...(liveDetails?.synonyms || []),
    ...(disease.synonyms || [])
  ])).filter(s => s && s.toLowerCase() !== disease.display.toLowerCase()).slice(0, 10);

  // Inclusions from WHO API
  const inclusionsList = liveDetails?.inclusions || [];

  // Signs & symptoms (from WHO API & Ch 21 catalog)
  const clinicalManifestations = liveDetails?.symptoms || disease.symptoms || [];

  // Interventions from WHO Foundation component
  const interventionsList = liveDetails?.interventions || [];

  // Related disorders & hierarchy
  const relatedDisordersList = liveDetails?.relatedDisorders || [];

  // Other concepts (Pathophysiology, Anatomy, Etiology)
  const relatedConceptsList = liveDetails?.relatedConcepts || [];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-5 sm:p-6 text-slate-900 dark:text-white transition-all transform animate-in fade-in zoom-in-95 duration-150 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ========================================================================= */}
        {/* HEADER: BADGES, PROVENANCE & CLOSE BUTTON                                */}
        {/* ========================================================================= */}
        <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800/80 shrink-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-600 text-white shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              WHO ICD-11 MMS (2026 Edition)
            </span>

            {/* Entity Classification Badge */}
            {isSymptomChapter ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold bg-purple-600 text-white shadow-xs">
                Clinical Sign / Symptom
              </span>
            ) : isDiseaseChapter ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold bg-blue-600 text-white shadow-xs">
                Disease / Disorder
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-600 text-white shadow-xs">
                Health Concept / Factor
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ========================================================================= */}
        {/* SCROLLABLE BODY                                                           */}
        {/* ========================================================================= */}
        <div className="overflow-y-auto pr-1 py-4 space-y-4 flex-1 scrollbar-thin">
          {/* Entity Title & Code */}
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <h2 className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
                {disease.display}
              </h2>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-blue-600 text-white shadow-xs">
                ICD-11: {disease.code}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Category: <span className="font-semibold text-slate-700 dark:text-slate-300">{disease.category}</span> • Chapter {disease.chapterNumber}: {disease.chapter}
            </p>
          </div>

          {/* WHO Definition / Clinical Scope */}
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200 text-xs">
                <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>WHO Official Definition & Scope:</span>
              </div>
              {isLoading && (
                <span className="inline-flex items-center gap-1 text-[10px] text-blue-600 dark:text-blue-400">
                  <Loader2 className="w-3 h-3 animate-spin" />
                  Refreshing WHO API...
                </span>
              )}
            </div>
            <p className="italic text-slate-700 dark:text-slate-300">
              {displayDefinition ? `“${displayDefinition}”` : 'Official clinical classification entity under WHO ICD-11 MMS. Diagnostic criteria and interconnected concepts are indexed in the official WHO ICD-11 Browser.'}
            </p>
          </div>

          {/* ========================================================================= */}
          {/* WHO FOUNDATION INTERCONNECTED ENTITIES                                     */}
          {/* ========================================================================= */}
          <div className="space-y-4 pt-1">
            <div className="flex items-center gap-1.5 pb-1 border-b border-slate-100 dark:border-slate-800">
              <Layers className="w-4 h-4 text-indigo-500" />
              <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                WHO Foundation Interconnected Entities
              </h3>
            </div>

            {/* 1. SIGNS & SYMPTOMS */}
            {clinicalManifestations.length > 0 && (
              <div className="rounded-xl border border-purple-100 dark:border-purple-900/40 bg-purple-50/30 dark:bg-purple-950/20 p-3.5 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-purple-900 dark:text-purple-300">
                  <HeartPulse className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                  <span>Signs & Symptoms (WHO Definition & Ch 21 Findings)</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {clinicalManifestations.map((manifestation, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 bg-white dark:bg-slate-900/80 p-2 rounded-lg border border-purple-100 dark:border-purple-900/30 text-slate-700 dark:text-slate-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0 mt-1.5" />
                      <span className="font-medium text-[11px] leading-tight">{manifestation}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 2. CLINICAL INTERVENTIONS */}
            {interventionsList.length > 0 && (
              <div className="rounded-xl border border-blue-100 dark:border-blue-900/40 bg-blue-50/30 dark:bg-blue-950/20 p-3.5 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-blue-900 dark:text-blue-300">
                  <Stethoscope className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Clinical Interventions & Protocols (WHO Foundation)</span>
                </div>
                <div className="space-y-2">
                  {interventionsList.map((intervention, idx) => (
                    <div
                      key={idx}
                      className="bg-white dark:bg-slate-900/80 p-2.5 rounded-lg border border-blue-100 dark:border-blue-900/30 space-y-1"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-slate-900 dark:text-white">
                          {intervention.name}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                          {intervention.category}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                        {intervention.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. RELATED DISORDERS & HIERARCHY */}
            {relatedDisordersList.length > 0 && (
              <div className="rounded-xl border border-amber-100 dark:border-amber-900/40 bg-amber-50/30 dark:bg-amber-950/20 p-3.5 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 dark:text-amber-300">
                  <GitBranch className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Interconnected Diseases & Disorders</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {relatedDisordersList.map((disorder, idx) => (
                    <div
                      key={idx}
                      className="bg-white dark:bg-slate-900/80 p-2 rounded-lg border border-amber-100 dark:border-amber-900/30 flex items-center justify-between gap-2"
                    >
                      <span className="text-[11px] font-medium text-slate-800 dark:text-slate-200 truncate">
                        {disorder.title}
                      </span>
                      <span className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded ${
                        disorder.relationship === 'parent'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                          : disorder.relationship === 'subtype'
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                          : 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300'
                      }`}>
                        {disorder.relationship}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. OTHER CONCEPTS (Pathophysiology, Anatomy, Etiology) */}
            {relatedConceptsList.length > 0 && (
              <div className="rounded-xl border border-teal-100 dark:border-teal-900/40 bg-teal-50/30 dark:bg-teal-950/20 p-3.5 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-teal-900 dark:text-teal-300">
                  <Network className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>Other Foundation Concepts (Anatomy, Mechanism, Etiology)</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {relatedConceptsList.map((concept, idx) => (
                    <div
                      key={idx}
                      className="bg-white dark:bg-slate-900/80 p-2.5 rounded-lg border border-teal-100 dark:border-teal-900/30 space-y-0.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase text-teal-700 dark:text-teal-400">
                          {concept.category}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium">
                          {concept.label}
                        </span>
                      </div>
                      <p className="text-[11px] font-medium text-slate-800 dark:text-slate-200">
                        {concept.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. SYNONYMS & INCLUSIONS */}
            {(synonymsList.length > 0 || inclusionsList.length > 0) && (
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 p-3.5 space-y-3">
                {synonymsList.length > 0 && (
                  <div>
                    <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                      Interconnected Diagnostic Terms & Synonyms:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {synonymsList.map((syn, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-2xs"
                        >
                          {syn}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {inclusionsList.length > 0 && (
                  <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                    <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                      Official WHO Diagnostic Inclusions:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {inclusionsList.map((inc, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
                        >
                          {inc}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FOOTER: ACTION LINKS (WHO MMS & FOUNDATION BROWSERS)                     */}
        {/* ========================================================================= */}
        <div className="pt-3.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-2 text-xs shrink-0">
          <div className="flex items-center gap-2 flex-wrap justify-end">
            {foundationBrowserUrl && (
              <a
                href={foundationBrowserUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs transition-colors"
                title="Open entity in WHO Foundation Browser"
              >
                <span>WHO Foundation Browser</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {activeBrowserUrl && (
              <a
                href={activeBrowserUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-xs transition-colors"
                title="Open entity in WHO MMS Browser"
              >
                <span>WHO MMS Browser</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
