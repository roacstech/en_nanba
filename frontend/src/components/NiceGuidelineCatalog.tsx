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
  GitMerge,
  Globe2,
  Calendar,
  Users,
} from 'lucide-react';
import {
  api,
  NiceGuidelineEntry,
  NiceCatalogResponse,
  NiceMetadataInfo,
} from '../lib/api';

export const NiceGuidelineCatalog: React.FC = () => {
  const [guidelines, setGuidelines] = useState<NiceGuidelineEntry[]>([]);
  const [metadata, setMetadata] = useState<NiceMetadataInfo | null>(null);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(25);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [debouncedQuery, setDebouncedQuery] = useState<string>('');
  const [selectedDomain, setSelectedDomain] = useState<string>('ALL');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedGuidelineForModal, setSelectedGuidelineForModal] = useState<NiceGuidelineEntry | null>(null);

  // Debounce search
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
      setPage(1);
    }, 250);
    return () => clearTimeout(handler);
  }, [searchQuery]);

  // Fetch guidelines
  const fetchGuidelines = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res: NiceCatalogResponse = await api.getNiceGuidelines({
        page,
        limit,
        q: debouncedQuery.trim() || undefined,
        domain: selectedDomain !== 'ALL' ? selectedDomain : undefined,
      });

      setGuidelines(res.data || []);
      setMetadata(res.metadata || null);
      setTotal(res.total || 0);
      setTotalPages(res.totalPages || 1);
    } catch (err: any) {
      console.error('Failed to load NICE guidelines', err);
      setError(err.message || 'Failed to fetch NICE guidelines');
    } finally {
      setIsLoading(false);
    }
  }, [page, limit, debouncedQuery, selectedDomain]);

  useEffect(() => {
    fetchGuidelines();
  }, [fetchGuidelines]);

  return (
    <div className="space-y-4 animate-fadeIn pb-16">
      {/* ========================================================================= */}
      {/* 1. CLEAN HEADER (Matching SNOMED & NIDDK design)                          */}
      {/* ========================================================================= */}
      <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 transition-all space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 shrink-0">
              <GitMerge className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                NICE & Recognised Guideline Publishers
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                Reviewed clinical assessment pathways, evidence-based recommendations, and decision-support design.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="https://www.nice.org.uk/guidance"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl text-xs font-semibold border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
            >
              <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>NICE Guidance</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 ml-0.5" />
            </a>
          </div>
        </div>

        {/* Search Input & Clinical Domain Filter */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-1">
          <div className="md:col-span-8 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search pathways by guideline ID (e.g. NG28), condition, or drug..."
              className="w-full pl-10 pr-9 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
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
              value={selectedDomain}
              onChange={(e) => {
                setSelectedDomain(e.target.value);
                setPage(1);
              }}
              className="w-full pl-10 pr-8 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all cursor-pointer appearance-none"
            >
              <option value="ALL">All Clinical Domains</option>
              <option value="Diabetes">Diabetes & Metabolism</option>
              <option value="Cardiovascular">Cardiovascular</option>
              <option value="Renal">Renal & Urology</option>
              <option value="Respiratory">Respiratory</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
          <div>
            Showing <strong className="text-slate-900 dark:text-white">{guidelines.length}</strong> of{' '}
            <strong className="text-slate-900 dark:text-white">{total}</strong> clinical guidelines
            {debouncedQuery && (
              <span className="ml-2 px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-300">
                &quot;{debouncedQuery}&quot;
              </span>
            )}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. GUIDELINES TABLE                                                       */}
      {/* ========================================================================= */}
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
        {isLoading ? (
          <div className="py-20 flex flex-col items-center justify-center gap-3">
            <RefreshCw className="w-8 h-8 text-indigo-600 animate-spin" />
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Loading NICE clinical guidelines...
            </span>
          </div>
        ) : error ? (
          <div className="py-16 px-4 text-center">
            <AlertCircle className="w-8 h-8 text-rose-500 mx-auto mb-2" />
            <p className="text-sm text-rose-600 dark:text-rose-400 font-medium">{error}</p>
            <button
              type="button"
              onClick={() => fetchGuidelines()}
              className="mt-3 px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Retry
            </button>
          </div>
        ) : guidelines.length === 0 ? (
          <div className="py-16 px-4 text-center">
            <Info className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">No clinical guidelines found</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
              Try adjusting your search terms or clinical domain filter.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/80 dark:bg-slate-950/50 border-b border-slate-200 dark:border-slate-800 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  <th className="py-3 px-4 w-28">ID</th>
                  <th className="py-3 px-4 min-w-[200px]">Clinical Guideline</th>
                  <th className="py-3 px-4 w-44 min-w-[170px] whitespace-nowrap">Domain</th>
                  <th className="py-3 px-4 min-w-[220px]">Reviewed Pathway</th>
                  <th className="py-3 px-4 min-w-[160px]">Target Population</th>
                  <th className="py-3 px-4 w-32 whitespace-nowrap">Version & Date</th>
                  <th className="py-3 px-4 w-20 text-right">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
                {guidelines.map((item) => (
                  <tr
                    key={item.guidelineId}
                    className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors group"
                  >
                    {/* Guideline ID */}
                    <td className="py-3 px-4 align-top">
                      <span className="font-mono font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-200 dark:border-indigo-800 text-[11px]">
                        {item.guidelineId}
                      </span>
                    </td>

                    {/* Title */}
                    <td className="py-3 px-4 align-top">
                      <div className="space-y-0.5">
                        <span className="font-bold text-slate-900 dark:text-white text-xs block">
                          {item.title}
                        </span>
                        {item.relatedIcd11Code && (
                          <span className="text-[10px] text-slate-400 font-mono">
                            ICD-11: {item.relatedIcd11Code}
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Domain */}
                    <td className="py-3 px-4 align-top whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold border whitespace-nowrap ${
                          item.clinicalDomain === 'Diabetes & Metabolism'
                            ? 'bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300 border-amber-200 dark:border-amber-800'
                            : item.clinicalDomain === 'Cardiovascular'
                            ? 'bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300 border-rose-200 dark:border-rose-800'
                            : item.clinicalDomain === 'Renal & Urology'
                            ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300 border-blue-200 dark:border-blue-800'
                            : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                        }`}
                      >
                        {item.clinicalDomain}
                      </span>
                    </td>

                    {/* Pathway Summary */}
                    <td className="py-3 px-4 align-top">
                      <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed line-clamp-2">
                        {item.pathwaySummary}
                      </p>
                    </td>

                    {/* Target Population */}
                    <td className="py-3 px-4 align-top">
                      <span className="text-slate-600 dark:text-slate-400 text-xs">
                        {item.targetPopulation}
                      </span>
                    </td>

                    {/* Version & Date */}
                    <td className="py-3 px-4 align-top whitespace-nowrap">
                      <div className="space-y-0.5 text-[11px]">
                        <span className="font-semibold text-slate-800 dark:text-slate-200 block">
                          {item.version}
                        </span>
                        <span className="text-slate-400 block font-mono">
                          {item.lastUpdated}
                        </span>
                      </div>
                    </td>

                    {/* Details Action */}
                    <td className="py-3 px-4 align-top text-right">
                      <button
                        type="button"
                        onClick={() => setSelectedGuidelineForModal(item)}
                        className="p-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/50 dark:hover:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 inline-flex items-center justify-center transition-colors cursor-pointer border border-indigo-200 dark:border-indigo-800 shadow-sm"
                        title="View Full Pathway & Recommendations"
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
        {!isLoading && guidelines.length > 0 && (
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
      {/* 3. PATHWAY & RECOMMENDATIONS MODAL                                        */}
      {/* ========================================================================= */}
      {selectedGuidelineForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-start justify-between gap-4 bg-slate-50/50 dark:bg-slate-950/40">
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono font-bold text-xs bg-indigo-100 dark:bg-indigo-950/80 text-indigo-800 dark:text-indigo-300 px-2 py-0.5 rounded border border-indigo-200 dark:border-indigo-800">
                    {selectedGuidelineForModal.guidelineId}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-violet-50 text-violet-700 dark:bg-violet-950/50 dark:text-violet-300 border border-violet-200 dark:border-violet-800">
                    {selectedGuidelineForModal.clinicalDomain}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    {selectedGuidelineForModal.version}
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                  {selectedGuidelineForModal.title}
                </h2>
                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 flex-wrap">
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-slate-400" />
                    Population: {selectedGuidelineForModal.targetPopulation}
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    Updated: {selectedGuidelineForModal.lastUpdated}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedGuidelineForModal(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 overflow-y-auto space-y-4 custom-scrollbar text-xs">
              {/* Pathway Overview */}
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Assessment Pathway Summary
                </h4>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-950/50 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 text-sm">
                  {selectedGuidelineForModal.pathwaySummary}
                </p>
              </div>

              {/* Stepped Recommendations */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
                  <GitMerge className="w-4 h-4 text-indigo-600" />
                  Stepped Assessment & Treatment Recommendations
                </h4>

                <div className="space-y-2">
                  {selectedGuidelineForModal.pathwaySteps.map((step) => (
                    <div
                      key={step.stepNumber}
                      className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/40 space-y-1"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 flex items-center justify-center text-[10px] font-mono font-bold">
                            {step.stepNumber}
                          </span>
                          <span>{step.stage}</span>
                        </span>
                        {step.evidenceGrade && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                            Evidence: {step.evidenceGrade}
                          </span>
                        )}
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed pl-7">
                        {step.recommendation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decision-Support Rules */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Decision-Support Rules & Monitoring Checkpoints
                </h4>
                <ul className="space-y-1 bg-slate-50 dark:bg-slate-950/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                  {selectedGuidelineForModal.decisionSupportRules.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Jurisdiction Note */}
              <div className="p-3 rounded-xl bg-slate-100/70 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                <div className="flex items-center gap-1.5 font-semibold text-slate-800 dark:text-slate-200 mb-0.5">
                  <Globe2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>Jurisdiction: {selectedGuidelineForModal.jurisdiction}</span>
                </div>
                {selectedGuidelineForModal.jurisdictionNotice}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 flex items-center justify-between gap-3">
              <a
                href={selectedGuidelineForModal.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white flex items-center gap-1.5 shadow-sm transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>View on Official NICE Portal</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>

              <button
                type="button"
                onClick={() => setSelectedGuidelineForModal(null)}
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
