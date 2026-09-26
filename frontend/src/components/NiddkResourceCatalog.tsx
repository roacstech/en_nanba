'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  RefreshCw,
  ExternalLink,
  Info,
  X,
  Eye,
  BookOpen,
  AlertCircle,
  HeartHandshake,
  ArrowRight,
} from 'lucide-react';
import {
  api,
  NiddkDiseaseResource,
  NiddkCatalogResponse,
  NiddkLicensingInfo,
} from '../lib/api';

export const NiddkResourceCatalog: React.FC = () => {
  const [resources, setResources] = useState<NiddkDiseaseResource[]>([]);
  const [licensing, setLicensing] = useState<NiddkLicensingInfo | null>(null);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(25);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [debouncedQuery, setDebouncedQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedResourceForModal, setSelectedResourceForModal] = useState<NiddkDiseaseResource | null>(null);

  // Debounce search
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
      setPage(1);
    }, 250);
    return () => clearTimeout(handler);
  }, [searchQuery]);

  // Fetch NIDDK catalog
  const fetchResources = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res: NiddkCatalogResponse = await api.getNiddkResources({
        page,
        limit,
        q: debouncedQuery.trim() || undefined,
        category: selectedCategory !== 'ALL' ? selectedCategory : undefined,
      });

      setResources(res.data || []);
      setLicensing(res.licensing || null);
      setTotal(res.total || 0);
      setTotalPages(res.totalPages || 1);
    } catch (err: any) {
      console.error('Failed to load NIDDK resources', err);
      setError(err.message || 'Failed to fetch NIDDK resources');
    } finally {
      setIsLoading(false);
    }
  }, [page, limit, debouncedQuery, selectedCategory]);

  useEffect(() => {
    fetchResources();
  }, [fetchResources]);

  return (
    <div className="space-y-4 animate-fadeIn pb-16">
      {/* ========================================================================= */}
      {/* 1. HEADER & SUMMARY                                                       */}
      {/* ========================================================================= */}
      <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 transition-all space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-600 to-blue-600 flex items-center justify-center text-white shadow-md shadow-sky-500/20 shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                NIDDK & Authoritative Disease Resources
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                Patient-oriented disease explanations, candidate plain-language expressions, symptoms, causes, and complications.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="https://www.niddk.nih.gov/health-information"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl text-xs font-semibold border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
            >
              <BookOpen className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              <span>NIDDK Health Information</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 ml-0.5" />
            </a>
          </div>
        </div>

        {/* Search Input & Category Filter */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-1">
          <div className="md:col-span-8 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search patient topics by disease, plain-language symptom, or cause..."
              className="w-full pl-10 pr-9 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="md:col-span-4 relative">
            <Filter className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setPage(1);
              }}
              className="w-full pl-10 pr-8 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all cursor-pointer appearance-none"
            >
              <option value="ALL">All NIDDK Categories</option>
              <option value="Diabetes">Diabetes & Endocrine</option>
              <option value="Digestive">Digestive Diseases</option>
              <option value="Kidney">Kidney Diseases</option>
              <option value="Liver">Liver Diseases</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
          <div>
            Showing <strong className="text-slate-900 dark:text-white">{resources.length}</strong> of{' '}
            <strong className="text-slate-900 dark:text-white">{total}</strong> health resources
            {debouncedQuery && (
              <span className="ml-2 px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-300">
                &quot;{debouncedQuery}&quot;
              </span>
            )}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. TOPICS TABLE                                                           */}
      {/* ========================================================================= */}
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
        {isLoading ? (
          <div className="py-20 flex flex-col items-center justify-center gap-3">
            <RefreshCw className="w-8 h-8 text-sky-600 animate-spin" />
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Loading NIDDK health resources...
            </span>
          </div>
        ) : error ? (
          <div className="py-16 px-4 text-center">
            <AlertCircle className="w-8 h-8 text-rose-500 mx-auto mb-2" />
            <p className="text-sm text-rose-600 dark:text-rose-400 font-medium">{error}</p>
            <button
              type="button"
              onClick={() => fetchResources()}
              className="mt-3 px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Retry
            </button>
          </div>
        ) : resources.length === 0 ? (
          <div className="py-16 px-4 text-center">
            <Info className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">No resources found</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
              Try adjusting your search terms or category filter.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/80 dark:bg-slate-950/50 border-b border-slate-200 dark:border-slate-800 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  <th className="py-3 px-4 w-48 min-w-[170px]">Disease / Condition</th>
                  <th className="py-3 px-4 w-48 min-w-[180px] whitespace-nowrap">Category</th>
                  <th className="py-3 px-4 w-60 max-w-[240px]">Patient Explanation</th>
                  <th className="py-3 px-4 min-w-[160px]">Plain-Language Terms</th>
                  <th className="py-3 px-4 min-w-[180px]">Symptoms</th>
                  <th className="py-3 px-4 w-20 text-right">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
                {resources.map((res) => (
                  <tr
                    key={res.id}
                    className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors group"
                  >
                    {/* Disease Title */}
                    <td className="py-3 px-4 align-top">
                      <div className="space-y-0.5">
                        <span className="font-bold text-slate-900 dark:text-white text-xs block">
                          {res.title}
                        </span>
                        {res.relatedIcd11Code && (
                          <span className="text-[10px] text-slate-400 font-mono">
                            ICD-11: {res.relatedIcd11Code}
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Category */}
                    <td className="py-3 px-4 align-top whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold border whitespace-nowrap ${
                          res.category === 'Diabetes & Endocrine'
                            ? 'bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300 border-amber-200 dark:border-amber-800'
                            : res.category === 'Digestive Diseases'
                            ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                            : res.category === 'Kidney Diseases'
                            ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300 border-blue-200 dark:border-blue-800'
                            : 'bg-purple-50 text-purple-700 dark:bg-purple-950/50 dark:text-purple-300 border-purple-200 dark:border-purple-800'
                        }`}
                      >
                        {res.category}
                      </span>
                    </td>

                    {/* Plain Language Summary */}
                    <td className="py-3 px-4 align-top max-w-[240px]">
                      <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed line-clamp-2">
                        {res.plainLanguageSummary}
                      </p>
                    </td>

                    {/* Plain Language Terms */}
                    <td className="py-3 px-4 align-top">
                      <div className="flex flex-wrap gap-1">
                        {res.candidatePlainLanguageTerms.slice(0, 2).map((term, idx) => (
                          <span
                            key={idx}
                            className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] text-slate-600 dark:text-slate-400"
                          >
                            {term}
                          </span>
                        ))}
                        {res.candidatePlainLanguageTerms.length > 2 && (
                          <span className="text-[10px] text-slate-400 font-medium self-center">
                            +{res.candidatePlainLanguageTerms.length - 2}
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Symptoms */}
                    <td className="py-3 px-4 align-top">
                      <div className="flex flex-wrap gap-1">
                        {res.symptoms.slice(0, 2).map((sym, idx) => (
                          <span
                            key={idx}
                            className="px-1.5 py-0.5 rounded bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300 text-[10px] border border-sky-200/50 dark:border-sky-800/50"
                          >
                            {sym}
                          </span>
                        ))}
                        {res.symptoms.length > 2 && (
                          <span className="text-[10px] text-slate-400 font-medium self-center">
                            +{res.symptoms.length - 2}
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Action Button */}
                    <td className="py-3 px-4 align-top text-right">
                      <button
                        type="button"
                        onClick={() => setSelectedResourceForModal(res)}
                        className="p-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 dark:bg-sky-950/50 dark:hover:bg-sky-900/50 text-sky-700 dark:text-sky-300 inline-flex items-center justify-center transition-colors cursor-pointer border border-sky-200 dark:border-sky-800 shadow-sm"
                        title="View Full Patient Explanation"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination Footer */}
        {!isLoading && resources.length > 0 && (
          <div className="py-3 px-4 bg-slate-50/80 dark:bg-slate-950/50 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <span className="text-slate-500 dark:text-slate-400">Rows per page:</span>
              <select
                value={limit}
                onChange={(e) => {
                  setLimit(Number(e.target.value));
                  setPage(1);
                }}
                className="py-1 px-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-xs"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                disabled={page <= 1}
                onClick={() => setPage(1)}
                className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                title="First Page"
              >
                <ChevronsLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                disabled={page <= 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                title="Previous Page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <span className="px-3 py-1 font-medium text-slate-700 dark:text-slate-300">
                Page {page} of {totalPages}
              </span>

              <button
                type="button"
                disabled={page >= totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                title="Next Page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                disabled={page >= totalPages}
                onClick={() => setPage(totalPages)}
                className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                title="Last Page"
              >
                <ChevronsRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* 3. PATIENT EXPLANATION MODAL (Symptoms, Causes, Complications, Context)    */}
      {/* ========================================================================= */}
      {selectedResourceForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-start justify-between gap-4 bg-slate-50/50 dark:bg-slate-950/40">
              <div className="space-y-1">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-sky-50 text-sky-700 dark:bg-sky-950/50 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                  {selectedResourceForModal.category}
                </span>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                  {selectedResourceForModal.title}
                </h2>
                {selectedResourceForModal.relatedIcd11Code && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    Related ICD-11: {selectedResourceForModal.relatedIcd11Code}
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={() => setSelectedResourceForModal(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 overflow-y-auto space-y-4 custom-scrollbar text-xs">
              {/* Plain-Language Summary */}
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Patient-Oriented Explanation
                </h4>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-950/50 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 text-sm">
                  {selectedResourceForModal.plainLanguageSummary}
                </p>
              </div>

              {/* Candidate Plain-Language Terms */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Candidate Plain-Language Expressions
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedResourceForModal.candidatePlainLanguageTerms.map((term, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
                    >
                      {term}
                    </span>
                  ))}
                </div>
              </div>

              {/* Symptoms */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400">
                  Symptoms (What Patients Experience)
                </h4>
                <ul className="space-y-1 bg-sky-50/50 dark:bg-sky-950/20 p-3 rounded-xl border border-sky-100 dark:border-sky-900/40">
                  {selectedResourceForModal.symptoms.map((sym, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0" />
                      <span>{sym}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Causes & Risk Factors */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Causes & Risk Factors
                </h4>
                <ul className="space-y-1 bg-slate-50 dark:bg-slate-950/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                  {selectedResourceForModal.causesAndRiskFactors.map((cause, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                      <span>{cause}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Complications */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                  Potential Complications
                </h4>
                <ul className="space-y-1 bg-rose-50/50 dark:bg-rose-950/20 p-3 rounded-xl border border-rose-100 dark:border-rose-900/40">
                  {selectedResourceForModal.complications.map((comp, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                      <span>{comp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 flex items-center justify-between gap-3">
              <a
                href={selectedResourceForModal.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-sky-600 hover:bg-sky-700 text-white flex items-center gap-1.5 shadow-sm transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>View Full Topic on NIDDK</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>

              <button
                type="button"
                onClick={() => setSelectedResourceForModal(null)}
                className="px-4 py-1.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
