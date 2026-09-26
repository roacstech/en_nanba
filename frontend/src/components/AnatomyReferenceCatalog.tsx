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
  HeartPulse,
  ShieldAlert,
  GraduationCap,
  Layers,
  FileText,
  Lock,
} from 'lucide-react';
import {
  api,
  OpenStaxAnatomyEntry,
  OpenStaxCatalogResponse,
  OpenStaxLicensingMetadata,
} from '../lib/api';

export const AnatomyReferenceCatalog: React.FC = () => {
  const [references, setReferences] = useState<OpenStaxAnatomyEntry[]>([]);
  const [metadata, setMetadata] = useState<OpenStaxLicensingMetadata | null>(null);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(25);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [debouncedQuery, setDebouncedQuery] = useState<string>('');
  const [selectedSystem, setSelectedSystem] = useState<string>('ALL');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedItemForModal, setSelectedItemForModal] = useState<OpenStaxAnatomyEntry | null>(null);

  // Debounce search
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
      setPage(1);
    }, 250);
    return () => clearTimeout(handler);
  }, [searchQuery]);

  // Fetch OpenStax references
  const fetchReferences = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res: OpenStaxCatalogResponse = await api.getOpenStaxAnatomyReferences({
        page,
        limit,
        q: debouncedQuery.trim() || undefined,
        system: selectedSystem !== 'ALL' ? selectedSystem : undefined,
      });

      setReferences(res.data || []);
      setMetadata(res.metadata || null);
      setTotal(res.total || 0);
      setTotalPages(res.totalPages || 1);
    } catch (err: any) {
      console.error('Failed to load OpenStax anatomy references', err);
      setError(err.message || 'Failed to fetch OpenStax anatomy references');
    } finally {
      setIsLoading(false);
    }
  }, [page, limit, debouncedQuery, selectedSystem]);

  useEffect(() => {
    fetchReferences();
  }, [fetchReferences]);

  return (
    <div className="space-y-4 animate-fadeIn pb-16">
      {/* ========================================================================= */}
      {/* 1. CLEAN HEADER (Matching SNOMED, NIDDK, NICE, and LOINC style)           */}
      {/* ========================================================================= */}
      <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 transition-all space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Anatomy & Physiology Educational References
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                OpenStax Anatomy and Physiology 2e learning and scoping directory with reference and licensing review.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="https://openstax.org/license"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl text-xs font-semibold border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
            >
              <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>OpenStax Licence Information</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 ml-0.5" />
            </a>
          </div>
        </div>

        {/* Search Input & System Filter */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-1">
          <div className="md:col-span-8 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search anatomical systems, chapters, structures, or mechanisms..."
              className="w-full pl-10 pr-9 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
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
              value={selectedSystem}
              onChange={(e) => {
                setSelectedSystem(e.target.value);
                setPage(1);
              }}
              className="w-full pl-10 pr-8 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all cursor-pointer appearance-none"
            >
              <option value="ALL">All Anatomical Systems</option>
              <option value="CARDIO">Cardiovascular System</option>
              <option value="ENDO">Endocrine System</option>
              <option value="RENAL">Urinary & Renal System</option>
              <option value="RESP">Respiratory System</option>
              <option value="NEURO">Nervous System</option>
              <option value="DIGEST">Digestive System</option>
              <option value="IMMUNE">Lymphatic & Immune</option>
              <option value="MSK">Musculoskeletal System</option>
            </select>
          </div>
        </div>

        {/* Results Count & Governance Review Note */}
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
          <div>
            Showing <strong className="text-slate-900 dark:text-white">{references.length}</strong> of{' '}
            <strong className="text-slate-900 dark:text-white">{total}</strong> anatomical scoping references
            {debouncedQuery && (
              <span className="ml-2 px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-300">
                &quot;{debouncedQuery}&quot;
              </span>
            )}
          </div>
          <div className="hidden sm:block text-[11px] text-slate-400">
            OpenStax A&P 2e &bull; Reference & Licensing Review Required
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. REFERENCES TABLE                                                       */}
      {/* ========================================================================= */}
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
        {isLoading ? (
          <div className="py-20 flex flex-col items-center justify-center gap-3">
            <RefreshCw className="w-8 h-8 text-emerald-600 animate-spin" />
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Loading OpenStax anatomy references...
            </span>
          </div>
        ) : error ? (
          <div className="py-16 px-4 text-center">
            <AlertCircle className="w-8 h-8 text-rose-500 mx-auto mb-2" />
            <p className="text-sm text-rose-600 dark:text-rose-400 font-medium">{error}</p>
            <button
              type="button"
              onClick={() => fetchReferences()}
              className="mt-3 px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Retry
            </button>
          </div>
        ) : references.length === 0 ? (
          <div className="py-16 px-4 text-center">
            <Info className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">No anatomical references found</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
              Try adjusting your search terms or system filter.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/80 dark:bg-slate-950/50 border-b border-slate-200 dark:border-slate-800 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  <th className="py-3 px-4 w-24">System Code</th>
                  <th className="py-3 px-4 min-w-[220px]">Anatomical System & Chapter</th>
                  <th className="py-3 px-4 min-w-[240px]">Educational Scoping Focus</th>
                  <th className="py-3 px-4 w-36 min-w-[150px] whitespace-nowrap">Licence Type</th>
                  <th className="py-3 px-4 w-48 min-w-[190px] whitespace-nowrap">AI Training Policy</th>
                  <th className="py-3 px-4 w-20 text-right">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
                {references.map((item) => (
                  <tr
                    key={item.systemCode}
                    className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors group"
                  >
                    {/* System Code */}
                    <td className="py-3 px-4 align-top">
                      <span className="font-mono font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800 text-[11px] whitespace-nowrap">
                        {item.systemCode}
                      </span>
                    </td>

                    {/* System Name & OpenStax Chapter */}
                    <td className="py-3 px-4 align-top">
                      <div className="space-y-0.5">
                        <span className="font-bold text-slate-900 dark:text-white text-xs block">
                          {item.systemName}
                        </span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 block line-clamp-1">
                          {item.openStaxChapters}
                        </span>
                      </div>
                    </td>

                    {/* Educational Scope */}
                    <td className="py-3 px-4 align-top">
                      <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed line-clamp-2">
                        {item.educationalScope}
                      </p>
                    </td>

                    {/* Licence Type */}
                    <td className="py-3 px-4 align-top whitespace-nowrap">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300 border border-blue-200 dark:border-blue-800 whitespace-nowrap">
                        <FileText className="w-3 h-3" />
                        {item.licenseType}
                      </span>
                    </td>

                    {/* AI Ingestion Status */}
                    <td className="py-3 px-4 align-top whitespace-nowrap">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-700 whitespace-nowrap">
                        <Lock className="w-3 h-3 text-slate-500" />
                        Restricted / No AI Training
                      </span>
                    </td>

                    {/* Details Action */}
                    <td className="py-3 px-4 align-top text-right">
                      <button
                        type="button"
                        onClick={() => setSelectedItemForModal(item)}
                        className="p-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/50 dark:hover:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 inline-flex items-center justify-center transition-colors cursor-pointer border border-emerald-200 dark:border-emerald-800 shadow-sm"
                        title="View Scoping & Licensing Review"
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
        {!isLoading && references.length > 0 && (
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
                <ChevronsLeft className="w-4 h-4 text-slate-600 dark:text-slate-400" />
              </button>
              <button
                type="button"
                disabled={page <= 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                title="Previous Page"
              >
                <ChevronLeft className="w-4 h-4 text-slate-600 dark:text-slate-400" />
              </button>
              <span className="px-3 py-1 text-slate-600 dark:text-slate-400 font-medium">
                Page {page} of {totalPages}
              </span>
              <button
                type="button"
                disabled={page >= totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                title="Next Page"
              >
                <ChevronRight className="w-4 h-4 text-slate-600 dark:text-slate-400" />
              </button>
              <button
                type="button"
                disabled={page >= totalPages}
                onClick={() => setPage(totalPages)}
                className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                title="Last Page"
              >
                <ChevronsRight className="w-4 h-4 text-slate-600 dark:text-slate-400" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* 3. SCOPING & LICENSING REVIEW MODAL                                       */}
      {/* ========================================================================= */}
      {selectedItemForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-start justify-between gap-4 bg-slate-50/50 dark:bg-slate-950/40">
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono font-bold text-xs bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                    {selectedItemForModal.systemCode}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                    {selectedItemForModal.licenseType}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    Educational Reference
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                  {selectedItemForModal.systemName}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {selectedItemForModal.openStaxChapters}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedItemForModal(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 overflow-y-auto space-y-4 custom-scrollbar text-xs">
              {/* Educational Scoping Overview */}
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Curriculum Scoping & Educational Overview
                </h4>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-950/50 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 text-sm">
                  {selectedItemForModal.educationalScope}
                </p>
              </div>

              {/* Core Structures & Mechanisms Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Core Structures */}
                <div className="space-y-2 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/40">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-emerald-600" />
                    Key Anatomical Structures
                  </h4>
                  <ul className="space-y-1 text-slate-600 dark:text-slate-300 pl-1">
                    {selectedItemForModal.coreStructures.map((struct, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                        <span>{struct}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Physiological Mechanisms */}
                <div className="space-y-2 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/40">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <HeartPulse className="w-4 h-4 text-teal-600" />
                    Physiological Mechanisms
                  </h4>
                  <ul className="space-y-1 text-slate-600 dark:text-slate-300 pl-1">
                    {selectedItemForModal.keyPhysiologicalMechanisms.map((mech, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0" />
                        <span>{mech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Clinical Relevance */}
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Clinical Diagnostics & Decision Relevance
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-950/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800 text-xs">
                  {selectedItemForModal.clinicalRelevance}
                </p>
              </div>

              {/* Reference & Licensing Review Governance Notice */}
              <div className="p-4 rounded-xl bg-slate-100/70 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                  <ShieldAlert className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Reference and Licensing Review Policy</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs">
                  {selectedItemForModal.governanceNotice}
                </p>
                <div className="flex items-center gap-4 text-[11px] text-slate-500 dark:text-slate-400 pt-1 flex-wrap">
                  <span>Licence: <strong>CC BY-NC-SA 4.0</strong></span>
                  <span>&bull;</span>
                  <span>AI Ingestion: <strong>Restricted (Permission Required)</strong></span>
                  <span>&bull;</span>
                  <span>En Nanba Pipeline: <strong>Excluded from AI Training</strong></span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-2">
                <a
                  href={selectedItemForModal.officialBookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-1.5 shadow-sm transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Read Chapter on OpenStax</span>
                  <ExternalLink className="w-3 h-3 opacity-80" />
                </a>

                <a
                  href={selectedItemForModal.officialLicenseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-xl text-xs font-semibold border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-center gap-1.5 transition-colors"
                >
                  <span>Licence Terms</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>

              <button
                type="button"
                onClick={() => setSelectedItemForModal(null)}
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
