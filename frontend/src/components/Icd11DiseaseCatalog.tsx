'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  Search,
  BookOpen,
  Filter,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Copy,
  Check,
  RefreshCw,
  ExternalLink,
  Sparkles,
  Database,
  Activity,
  Heart,
  FileSpreadsheet,
  X,
  Eye,
} from 'lucide-react';
import { api, Icd11DiseaseEntry, Icd11CatalogResponse } from '../lib/api';
import { DiseaseIntelligenceModal } from './DiseaseIntelligenceModal';

export const Icd11DiseaseCatalog: React.FC = () => {
  const [diseases, setDiseases] = useState<Icd11DiseaseEntry[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(100);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [debouncedQuery, setDebouncedQuery] = useState<string>('');
  const [selectedChapter, setSelectedChapter] = useState<string>('ALL');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [selectedDiseaseForModal, setSelectedDiseaseForModal] = useState<Icd11DiseaseEntry | null>(null);

  // Debounce search input to avoid spamming while typing
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
      setPage(1); // Reset to page 1 on new search
    }, 250);
    return () => clearTimeout(handler);
  }, [searchQuery]);

  // Fetch catalog data from backend API
  const fetchCatalog = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res: Icd11CatalogResponse = await api.getAllIcd11Diseases({
        page,
        limit,
        q: debouncedQuery.trim() || undefined,
        chapter: selectedChapter !== 'ALL' ? selectedChapter : undefined,
      });

      setDiseases(res.data || []);
      setTotal(res.total || 0);
      setTotalPages(res.totalPages || 1);
    } catch (err: any) {
      console.error('Failed to load ICD-11 catalog', err);
      setError(err.message || 'Failed to fetch ICD-11 diseases');
    } finally {
      setIsLoading(false);
    }
  }, [page, limit, debouncedQuery, selectedChapter]);

  useEffect(() => {
    fetchCatalog();
  }, [fetchCatalog]);

  // Copy code handler
  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  // Quick preset shortcuts matching user requirements
  const handleApplyPreset = (presetType: 'page1_100' | 'page2_100' | 'diabetes' | 'heart_50') => {
    setSelectedChapter('ALL');
    if (presetType === 'page1_100') {
      setSearchQuery('');
      setDebouncedQuery('');
      setLimit(100);
      setPage(1);
    } else if (presetType === 'page2_100') {
      setSearchQuery('');
      setDebouncedQuery('');
      setLimit(100);
      setPage(2);
    } else if (presetType === 'diabetes') {
      setSearchQuery('diabetes');
      setDebouncedQuery('diabetes');
      setLimit(100);
      setPage(1);
    } else if (presetType === 'heart_50') {
      setSearchQuery('heart');
      setDebouncedQuery('heart');
      setLimit(50);
      setPage(1);
    }
  };

  // Construct current endpoint URL string for transparency & quick testing
  const currentEndpointUrl = (() => {
    const params = new URLSearchParams();
    if (debouncedQuery.trim()) params.append('q', debouncedQuery.trim());
    if (page > 1 || limit !== 50) params.append('page', String(page));
    params.append('limit', String(limit));
    if (selectedChapter !== 'ALL') params.append('chapter', selectedChapter);
    return `http://localhost:4000/api/normalize/icd11/all-diseases?${params.toString()}`;
  })();

  return (
    <div className="space-y-6 animate-fadeIn pb-16">
      {/* ========================================================================= */}
      {/* 1. UNIFIED HEADER, STATS & SEARCH / FILTER PANEL                          */}
      {/* ========================================================================= */}
      <div className="bg-white dark:bg-slate-900 rounded-md p-6 shadow-sm border border-slate-200 dark:border-slate-800 transition-all space-y-5">
        {/* Top Header & Summary Stats */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 shrink-0">
              <BookOpen className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                  ICD-11 Official Disease Catalog
                </h1>
              </div>
            </div>
          </div>

          {/* Refresh & Stats */}
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <div className="text-xs text-slate-400">Database Size</div>
              <div className="text-lg font-black text-slate-900 dark:text-white">
                {total.toLocaleString()} <span className="text-xs font-normal text-slate-500">Diseases</span>
              </div>
            </div>
            <button
              type="button"
              onClick={fetchCatalog}
              disabled={isLoading}
              className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer disabled:opacity-50"
              title="Refresh Catalog Data"
            >
              <RefreshCw className={`w-5 h-5 ${isLoading ? 'animate-spin text-blue-500' : ''}`} />
            </button>
          </div>
        </div>

        {/* Subtle Horizontal Divider */}
        <div className="border-t border-slate-100 dark:border-slate-800" />

        {/* Bottom Search, Chapter Filter & Page Size Bar */}
        <div>
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Live Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-blue-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search 17,000+ diseases by code (e.g. 5A11, BA00, 1A00), name, category, or symptoms..."
                className="w-full pl-10 pr-10 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setDebouncedQuery('');
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 cursor-pointer"
                  title="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Chapter Filter Dropdown with all 26 WHO Chapters */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-md px-3 py-1.5">
                <Filter className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <select
                  value={selectedChapter}
                  onChange={e => {
                    setSelectedChapter(e.target.value);
                    setPage(1);
                  }}
                  className="bg-transparent text-xs font-semibold text-slate-700 dark:text-slate-300 focus:outline-none cursor-pointer"
                >
                  <option value="ALL">All 26 WHO Chapters</option>
                  <option value="01">Ch 01 - Certain infectious or parasitic diseases</option>
                  <option value="02">Ch 02 - Neoplasms (Cancers & Malignancies)</option>
                  <option value="03">Ch 03 - Diseases of the blood or blood-forming organs</option>
                  <option value="04">Ch 04 - Diseases of the immune system</option>
                  <option value="05">Ch 05 - Endocrine, nutritional or metabolic diseases</option>
                  <option value="06">Ch 06 - Mental, behavioural or neurodevelopmental</option>
                  <option value="07">Ch 07 - Sleep-wake disorders</option>
                  <option value="08">Ch 08 - Diseases of the nervous system</option>
                  <option value="09">Ch 09 - Diseases of the visual system</option>
                  <option value="10">Ch 10 - Diseases of the ear or mastoid process</option>
                  <option value="11">Ch 11 - Diseases of the circulatory system (Heart)</option>
                  <option value="12">Ch 12 - Diseases of the respiratory system</option>
                  <option value="13">Ch 13 - Diseases of the digestive system</option>
                  <option value="14">Ch 14 - Diseases of the skin</option>
                  <option value="15">Ch 15 - Musculoskeletal & connective tissue</option>
                  <option value="16">Ch 16 - Diseases of the genitourinary system (Kidney)</option>
                  <option value="17">Ch 17 - Conditions related to sexual health</option>
                  <option value="18">Ch 18 - Pregnancy, childbirth or puerperium</option>
                  <option value="19">Ch 19 - Perinatal period conditions</option>
                  <option value="20">Ch 20 - Developmental anomalies</option>
                  <option value="21">Ch 21 - Symptoms, signs or clinical findings</option>
                  <option value="22">Ch 22 - Injury, poisoning & external consequences</option>
                  <option value="23">Ch 23 - External causes of morbidity/mortality</option>
                  <option value="24">Ch 24 - Factors influencing health status</option>
                  <option value="25">Ch 25 - Codes for special purposes</option>
                  <option value="26">Ch 26 - Traditional Medicine Conditions</option>
                </select>
              </div>

              {/* Page Size Selector */}
              <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-md px-3 py-1.5">
                <span className="text-xs text-slate-900 font-medium">Rows:</span>
                <select
                  value={limit}
                  onChange={e => {
                    setLimit(Number(e.target.value));
                    setPage(1);
                  }}
                  className="bg-transparent text-xs font-bold text-slate-700 dark:text-slate-300 focus:outline-none cursor-pointer"
                >
                  <option value={50}>50 / page</option>
                  <option value={100}>100 / page</option>
                  <option value={150}>150 / page</option>
                </select>
              </div>
            </div>
          </div>

          {/* Active Filter Indicators */}
          {(debouncedQuery || selectedChapter !== 'ALL') && (
            <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <span>Active filters:</span>
                {debouncedQuery && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 font-medium">
                    Keyword: "{debouncedQuery}"
                    <X
                      className="w-3 h-3 cursor-pointer hover:text-blue-900 dark:hover:text-blue-100"
                      onClick={() => {
                        setSearchQuery('');
                        setDebouncedQuery('');
                      }}
                    />
                  </span>
                )}
                {selectedChapter !== 'ALL' && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 font-medium">
                    Chapter {selectedChapter}
                    <X
                      className="w-3 h-3 cursor-pointer hover:text-blue-900 dark:hover:text-blue-100"
                      onClick={() => setSelectedChapter('ALL')}
                    />
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setDebouncedQuery('');
                  setSelectedChapter('ALL');
                }}
                className="text-xs text-rose-500 hover:underline cursor-pointer font-medium"
              >
                Reset all filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. DATA TABLE                                                             */}
      {/* ========================================================================= */}
      <div className="bg-white dark:bg-slate-900 rounded-md shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
        {/* Table Toolbar Header */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50/50 dark:bg-slate-950/40">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Disease Classification Records
            </h3>
            <span className="text-xs px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold">
              {total.toLocaleString()} found
            </span>
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400">
            Showing <strong className="text-slate-900 dark:text-white font-bold">{diseases.length}</strong> diseases on page {page}
          </div>
        </div>

        {/* Content Body */}
        {isLoading ? (
          <div className="py-24 flex flex-col items-center justify-center space-y-3">
            <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-sm font-semibold">Loading ICD-11 catalog diseases...</span>
            <span className="text-xs text-slate-400 font-mono">Querying official WHO MMS entities</span>
          </div>
        ) : error ? (
          <div className="py-16 px-6 text-center space-y-3">
            <div className="text-rose-500 font-bold text-sm">Failed to load disease directory</div>
            <p className="text-xs text-slate-500 max-w-md mx-auto">{error}</p>
            <button
              type="button"
              onClick={fetchCatalog}
              className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Retry
            </button>
          </div>
        ) : diseases.length === 0 ? (
          <div className="py-20 px-6 text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto text-slate-400">
              <Search className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              No matching diseases found
            </h4>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Try searching with another keyword or clear the filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setDebouncedQuery('');
                setSelectedChapter('ALL');
              }}
              className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-[11px] font-bold uppercase tracking-wider text-slate-800 bg-slate-50 dark:bg-slate-950/60">
                  <th className="py-3.5 px-6 w-36">ICD-11 Code</th>
                  <th className="py-3.5 px-6 w-72">Disease Title</th>
                  <th className="py-3.5 px-6 w-56">Chapter</th>
                  <th className="py-3.5 px-6 w-48">Category</th>
                  <th className="py-3.5 px-6 min-w-[320px]">Clinical Description & Diagnostic Criteria</th>
                  <th className="py-3.5 px-4 w-20 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-xs">
                {diseases.map((d, idx) => {
                  const isCopied = copiedCode === d.code;
                  return (
                    <tr
                      key={`${d.code}-${idx}`}
                      className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors group"
                    >
                      {/* Code with 1-click Copy */}
                      <td className="py-4 px-6 align-top">
                        <div className="flex items-center gap-1.5">
                          <span className="font-mono font-black text-sm text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/80 px-2 py-1 rounded-lg border border-blue-200 dark:border-blue-800/60 shadow-xs">
                            {d.code}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleCopyCode(d.code)}
                            className="p-1 rounded-md text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors opacity-0 group-hover:opacity-100 cursor-pointer"
                            title="Copy code to clipboard"
                          >
                            {isCopied ? (
                              <Check className="w-3.5 h-3.5 text-emerald-500" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                        {isCopied && (
                          <span className="text-[10px] text-emerald-500 font-bold ml-1">Copied!</span>
                        )}
                      </td>

                      {/* Display / Title */}
                      <td className="py-4 px-6 align-top">
                        <div className="font-bold text-slate-900 dark:text-white text-sm leading-snug">
                          {d.display}
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                          WHO Entity MMS
                        </div>
                      </td>

                      {/* Chapter */}
                      <td className="py-4 px-6 align-top">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60">
                          {d.chapter}
                        </span>
                      </td>

                      {/* Category */}
                      <td className="py-4 px-6 align-top">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                          {d.category}
                        </span>
                      </td>

                      {/* Description */}
                      <td className="py-4 px-6 align-top">
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
                          {d.description}
                        </p>
                      </td>

                      {/* Action: Eye Icon to Open Modal (LAST COLUMN) */}
                      <td className="py-4 px-4 align-top text-center">
                        <button
                          type="button"
                          onClick={() => setSelectedDiseaseForModal(d)}
                          className="inline-flex items-center justify-center p-2 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-all shadow-xs border border-blue-200 dark:border-blue-800/60 cursor-pointer group/btn"
                          title={`View Clinical Profile for ${d.display} (RxNorm, LOINC, UCUM, FHIR)`}
                        >
                          <Eye className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Bottom Pagination Controls */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Page <strong className="text-slate-900 dark:text-white font-bold">{page}</strong> of{' '}
            <strong className="text-slate-900 dark:text-white font-bold">{totalPages || 1}</strong> ({total} total catalog entries)
          </div>

          <div className="flex items-center gap-1.5">
            {/* First Page */}
            <button
              type="button"
              disabled={page <= 1 || isLoading}
              onClick={() => setPage(1)}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
              title="First Page"
            >
              <ChevronsLeft className="w-4 h-4" />
            </button>

            {/* Prev Page */}
            <button
              type="button"
              disabled={page <= 1 || isLoading}
              onClick={() => setPage(prev => Math.max(1, prev - 1))}
              className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Prev</span>
            </button>

            {/* Page Number Badges */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(pNum => {
              if (
                pNum === 1 ||
                pNum === totalPages ||
                (pNum >= page - 1 && pNum <= page + 1)
              ) {
                return (
                  <button
                    key={pNum}
                    type="button"
                    onClick={() => setPage(pNum)}
                    className={`w-9 h-9 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      pNum === page
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                        : 'border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {pNum}
                  </button>
                );
              }
              if (pNum === page - 2 || pNum === page + 2) {
                return (
                  <span key={pNum} className="px-1 text-slate-400 text-xs">
                    ...
                  </span>
                );
              }
              return null;
            })}

            {/* Next Page */}
            <button
              type="button"
              disabled={page >= totalPages || isLoading}
              onClick={() => setPage(prev => Math.min(totalPages, prev + 1))}
              className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors flex items-center gap-1"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Last Page */}
            <button
              type="button"
              disabled={page >= totalPages || isLoading}
              onClick={() => setPage(totalPages)}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
              title="Last Page"
            >
              <ChevronsRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Dynamic Clinical Intelligence Modal */}
      {selectedDiseaseForModal && (
        <DiseaseIntelligenceModal
          disease={selectedDiseaseForModal}
          onClose={() => setSelectedDiseaseForModal(null)}
        />
      )}
    </div>
  );
};
