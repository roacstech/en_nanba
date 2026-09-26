'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Copy,
  Check,
  RefreshCw,
  ExternalLink,
  ShieldCheck,
  Info,
  X,
  Eye,
  Network,
  Share2,
  Building2,
  CheckCircle2,
  Compass,
  AlertCircle,
} from 'lucide-react';
import {
  api,
  SnomedConceptEntry,
  SnomedCatalogResponse,
  SnomedLicensingInfo,
} from '../lib/api';

export const SnomedCatalog: React.FC = () => {
  const [concepts, setConcepts] = useState<SnomedConceptEntry[]>([]);
  const [licensing, setLicensing] = useState<SnomedLicensingInfo | null>(null);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(25);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [debouncedQuery, setDebouncedQuery] = useState<string>('');
  const [selectedHierarchy, setSelectedHierarchy] = useState<string>('ALL');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedConceptForModal, setSelectedConceptForModal] = useState<SnomedConceptEntry | null>(null);
  const [showLicensingDetails, setShowLicensingDetails] = useState<boolean>(false);

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
      setPage(1);
    }, 250);
    return () => clearTimeout(handler);
  }, [searchQuery]);

  // Fetch SNOMED catalog
  const fetchCatalog = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res: SnomedCatalogResponse = await api.getSnomedCatalog({
        page,
        limit,
        q: debouncedQuery.trim() || undefined,
        hierarchy: selectedHierarchy !== 'ALL' ? selectedHierarchy : undefined,
      });

      setConcepts(res.data || []);
      setLicensing(res.licensing || null);
      setTotal(res.total || 0);
      setTotalPages(res.totalPages || 1);
    } catch (err: any) {
      console.error('Failed to load SNOMED catalog', err);
      setError(err.message || 'Failed to fetch SNOMED CT concepts');
    } finally {
      setIsLoading(false);
    }
  }, [page, limit, debouncedQuery, selectedHierarchy]);

  useEffect(() => {
    fetchCatalog();
  }, [fetchCatalog]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(text);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-4 animate-fadeIn pb-16">
      {/* ========================================================================= */}
      {/* 1. CLEAN HEADER (Directly matches client requirements)                     */}
      {/* ========================================================================= */}
      <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 transition-all space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-teal-600 to-emerald-600 flex items-center justify-center text-white shadow-md shadow-teal-500/20 shrink-0">
              <Network className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                SNOMED CT Clinical Terminology
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                Clinical concepts, descriptions, synonyms, and relationships complementing ICD-11.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setShowLicensingDetails(!showLicensingDetails)}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>NRC India & Licensing</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. LICENSING & NRC INDIA NOTICE PANEL                                     */}
        {/* ========================================================================= */}
        {showLicensingDetails && licensing && (
          <div className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 shadow-inner animate-fadeIn space-y-3">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  SNOMED International Licensing & National Release Centre for India
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowLicensingDetails(false)}
                className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-black/5 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {licensing.licenseSummary}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 text-xs space-y-1">
                <span className="font-semibold text-slate-900 dark:text-white block">
                  National Release Centre (NRC India)
                </span>
                <p className="text-slate-600 dark:text-slate-400">
                  {licensing.nationalReleaseCenter} ({licensing.ministryAuthority})
                </p>
                <p className="text-[11px] text-slate-500 font-mono">
                  Territory: {licensing.territory} &bull; Edition: {licensing.releaseEdition}
                </p>
              </div>

              <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 text-xs space-y-1">
                <span className="font-semibold text-slate-900 dark:text-white block">
                  Licensing & Deployment Compliance
                </span>
                <ul className="text-slate-600 dark:text-slate-400 space-y-0.5 text-[11px]">
                  {licensing.complianceNotes.map((note, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-1 flex-wrap text-xs">
              <a
                href={licensing.officialLinks.licensing}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 dark:text-emerald-400 hover:underline font-semibold flex items-center gap-1"
              >
                SNOMED International Licensing <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-slate-300 dark:text-slate-700">&bull;</span>
              <a
                href={licensing.officialLinks.nrcIndia || 'https://www.nrces.in'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 dark:text-blue-400 hover:underline font-semibold flex items-center gap-1"
              >
                NRC India Portal (NRCeS - MoHFW) <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-slate-300 dark:text-slate-700">&bull;</span>
              <a
                href={licensing.officialLinks.browser}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 dark:text-teal-400 hover:underline font-semibold flex items-center gap-1"
              >
                IHTSDO Concept Browser <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}

        {/* Search Input & Hierarchy Filter */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-1">
          <div className="md:col-span-8 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search concepts by SCTID, term, synonym, or ICD-11 code..."
              className="w-full pl-10 pr-9 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
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
              value={selectedHierarchy}
              onChange={(e) => {
                setSelectedHierarchy(e.target.value);
                setPage(1);
              }}
              className="w-full pl-10 pr-8 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all cursor-pointer appearance-none"
            >
              <option value="ALL">All Hierarchies</option>
              <option value="Clinical Finding">Clinical Finding (Disorders & Symptoms)</option>
              <option value="Procedure">Procedure (Interventions & Surgeries)</option>
              <option value="Body Structure">Body Structure (Anatomy)</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
          <div>
            Showing <strong className="text-slate-900 dark:text-white">{concepts.length}</strong> of{' '}
            <strong className="text-slate-900 dark:text-white">{total}</strong> concepts
            {debouncedQuery && (
              <span className="ml-2 px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-300">
                &quot;{debouncedQuery}&quot;
              </span>
            )}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. CLEAN NON-REPETITIVE TABLE                                             */}
      {/* ========================================================================= */}
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
        {isLoading ? (
          <div className="py-20 flex flex-col items-center justify-center gap-3">
            <RefreshCw className="w-8 h-8 text-teal-600 animate-spin" />
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Loading SNOMED CT concepts...
            </span>
          </div>
        ) : error ? (
          <div className="py-16 px-4 text-center">
            <AlertCircle className="w-8 h-8 text-rose-500 mx-auto mb-2" />
            <p className="text-sm text-rose-600 dark:text-rose-400 font-medium">{error}</p>
            <button
              type="button"
              onClick={() => fetchCatalog()}
              className="mt-3 px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Retry
            </button>
          </div>
        ) : concepts.length === 0 ? (
          <div className="py-16 px-4 text-center">
            <Info className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">No concepts found</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
              Try adjusting your search terms or hierarchy filter.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/80 dark:bg-slate-950/50 border-b border-slate-200 dark:border-slate-800 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  <th className="py-3 px-4 w-32">SCTID</th>
                  <th className="py-3 px-4 min-w-[220px]">Clinical Concept</th>
                  <th className="py-3 px-4 w-36">Hierarchy</th>
                  <th className="py-3 px-4 min-w-[160px]">Complementary ICD-11</th>
                  <th className="py-3 px-4 min-w-[180px]">Synonyms</th>
                  <th className="py-3 px-4 w-20 text-right">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
                {concepts.map((concept) => (
                  <tr
                    key={concept.conceptId}
                    className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors group"
                  >
                    {/* SCTID */}
                    <td className="py-3 px-4 align-top">
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono font-bold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-[11px]">
                          {concept.conceptId}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleCopy(concept.conceptId)}
                          title="Copy SCTID"
                          className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 p-0.5"
                        >
                          {copiedId === concept.conceptId ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </td>

                    {/* Concept & Semantic Tag */}
                    <td className="py-3 px-4 align-top">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <span className="font-bold text-slate-900 dark:text-white text-xs">
                          {concept.preferredTerm}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">
                          ({concept.semanticTag})
                        </span>
                      </div>
                    </td>

                    {/* Hierarchy */}
                    <td className="py-3 px-4 align-top">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${
                          concept.hierarchy === 'Clinical Finding'
                            ? 'bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300 border-amber-200 dark:border-amber-800'
                            : concept.hierarchy === 'Procedure'
                            ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300 border-blue-200 dark:border-blue-800'
                            : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                        }`}
                      >
                        {concept.hierarchy}
                      </span>
                    </td>

                    {/* Complementary ICD-11 */}
                    <td className="py-3 px-4 align-top">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-mono font-bold text-[11px] bg-blue-100 dark:bg-blue-950/70 text-blue-800 dark:text-blue-300 px-1.5 py-0.5 rounded border border-blue-200 dark:border-blue-800">
                          {concept.icd11Mapping.code}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          ({concept.icd11Mapping.mapType})
                        </span>
                      </div>
                    </td>

                    {/* Synonyms */}
                    <td className="py-3 px-4 align-top">
                      <div className="flex flex-wrap gap-1">
                        {concept.synonyms
                          .filter((syn) => syn.toLowerCase() !== concept.preferredTerm.toLowerCase())
                          .slice(0, 2)
                          .map((syn, idx) => (
                            <span
                              key={idx}
                              className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] text-slate-600 dark:text-slate-400"
                            >
                              {syn}
                            </span>
                          ))}
                        {concept.synonyms.filter((syn) => syn.toLowerCase() !== concept.preferredTerm.toLowerCase()).length > 2 && (
                          <span className="text-[10px] text-slate-400 font-medium self-center">
                            +{concept.synonyms.filter((syn) => syn.toLowerCase() !== concept.preferredTerm.toLowerCase()).length - 2}
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Action Button */}
                    <td className="py-3 px-4 align-top text-right">
                      <button
                        type="button"
                        onClick={() => setSelectedConceptForModal(concept)}
                        className="p-1.5 rounded-lg bg-teal-50 hover:bg-teal-100 dark:bg-teal-950/50 dark:hover:bg-teal-900/50 text-teal-700 dark:text-teal-300 inline-flex items-center justify-center transition-colors cursor-pointer border border-teal-200 dark:border-teal-800 shadow-sm"
                        title="Inspect Concept & Relationships"
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
        {!isLoading && concepts.length > 0 && (
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
                <option value={100}>100</option>
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
      {/* 4. CONCEPT INSPECTOR MODAL (Ontological Relationships & Details)           */}
      {/* ========================================================================= */}
      {selectedConceptForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-start justify-between gap-4 bg-slate-50/50 dark:bg-slate-950/40">
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono font-bold text-xs bg-teal-100 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 px-2 py-0.5 rounded border border-teal-200 dark:border-teal-800">
                    SCTID: {selectedConceptForModal.conceptId}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                    {selectedConceptForModal.semanticTag}
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                  {selectedConceptForModal.preferredTerm}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  FSN: {selectedConceptForModal.fsn}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedConceptForModal(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 overflow-y-auto space-y-4 custom-scrollbar text-xs">
              {/* Definition */}
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Description
                </h4>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-950/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                  {selectedConceptForModal.definition}
                </p>
              </div>

              {/* Ontological Relationships */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Share2 className="w-3.5 h-3.5 text-teal-600" />
                  Ontological Relationships ({selectedConceptForModal.relationships.length})
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedConceptForModal.relationships.map((rel, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/40 flex items-start gap-2.5"
                    >
                      <div className="w-2 h-2 rounded-full bg-teal-500 mt-1.5 shrink-0" />
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider block">
                          {rel.type}
                        </span>
                        <div className="font-semibold text-slate-900 dark:text-white">
                          {rel.targetDisplay}
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono">
                          SCTID: {rel.targetId}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Complementary ICD-11 Mapping */}
              <div className="p-3.5 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 space-y-1.5">
                <span className="text-xs font-bold text-blue-900 dark:text-blue-200 block">
                  Complementary WHO ICD-11 Mapping
                </span>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-blue-600 text-white font-mono font-bold text-xs shadow-sm">
                    {selectedConceptForModal.icd11Mapping.code}
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {selectedConceptForModal.icd11Mapping.display}
                  </span>
                  <span className="text-slate-400 text-[11px]">
                    ({selectedConceptForModal.icd11Mapping.mapType})
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  {selectedConceptForModal.icd11Mapping.chapter}
                </p>
              </div>

              {/* Synonyms */}
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Synonyms
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedConceptForModal.synonyms.map((syn, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs"
                    >
                      {syn}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 flex items-center justify-between gap-3">
              <a
                href={`https://browser.ihtsdotools.org/?perspective=full&conceptId1=${selectedConceptForModal.conceptId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-teal-600 hover:bg-teal-700 text-white flex items-center gap-1.5 shadow-sm transition-colors"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>View on SNOMED Browser</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>

              <button
                type="button"
                onClick={() => setSelectedConceptForModal(null)}
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
