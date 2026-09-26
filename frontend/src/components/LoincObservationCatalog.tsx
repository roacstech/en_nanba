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
  FlaskConical,
  Activity,
  Layers,
  Clock,
  Droplet,
  Gauge,
  SlidersHorizontal,
} from 'lucide-react';
import {
  api,
  LoincObservationEntry,
  LoincCatalogResponse,
  LoincMetadataInfo,
} from '../lib/api';

export const LoincObservationCatalog: React.FC = () => {
  const [observations, setObservations] = useState<LoincObservationEntry[]>([]);
  const [metadata, setMetadata] = useState<LoincMetadataInfo | null>(null);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(25);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [debouncedQuery, setDebouncedQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedClassType, setSelectedClassType] = useState<string>('ALL');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedItemForModal, setSelectedItemForModal] = useState<LoincObservationEntry | null>(null);

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
      setPage(1);
    }, 250);
    return () => clearTimeout(handler);
  }, [searchQuery]);

  // Fetch LOINC observations
  const fetchObservations = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res: LoincCatalogResponse = await api.getLoincObservations({
        page,
        limit,
        q: debouncedQuery.trim() || undefined,
        category: selectedCategory !== 'ALL' ? selectedCategory : undefined,
        classType: selectedClassType !== 'ALL' ? selectedClassType : undefined,
      });

      setObservations(res.data || []);
      setMetadata(res.metadata || null);
      setTotal(res.total || 0);
      setTotalPages(res.totalPages || 1);
    } catch (err: any) {
      console.error('Failed to load LOINC observations', err);
      setError(err.message || 'Failed to fetch LOINC observations');
    } finally {
      setIsLoading(false);
    }
  }, [page, limit, debouncedQuery, selectedCategory, selectedClassType]);

  useEffect(() => {
    fetchObservations();
  }, [fetchObservations]);

  return (
    <div className="space-y-4 animate-fadeIn pb-16">
      {/* ========================================================================= */}
      {/* 1. CLEAN HEADER (Matching SNOMED, NIDDK, and NICE style)                  */}
      {/* ========================================================================= */}
      <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 transition-all space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20 shrink-0">
              <FlaskConical className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                LOINC & Clinical Observations
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                Laboratory tests, clinical measurements, vital signs and documents with 6-axes distinction.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="https://loinc.org"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl text-xs font-semibold border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
            >
              <BookOpen className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>LOINC Official Website</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 ml-0.5" />
            </a>
          </div>
        </div>

        {/* Search Input & Category Filters */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-1">
          <div className="md:col-span-6 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tests by LOINC code (e.g. 4548-4), analyte, specimen, or unit..."
              className="w-full pl-10 pr-9 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all"
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

          <div className="md:col-span-3 relative">
            <Filter className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setPage(1);
              }}
              className="w-full pl-10 pr-8 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all cursor-pointer appearance-none"
            >
              <option value="ALL">All Test Categories</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Hematology">Hematology</option>
              <option value="Lipid">Lipid Panel</option>
              <option value="Cardiac">Cardiac Markers</option>
              <option value="Vital">Vital Signs</option>
              <option value="Urinalysis">Urinalysis</option>
              <option value="Endocrine">Endocrine & Metabolic</option>
            </select>
          </div>

          <div className="md:col-span-3 relative">
            <SlidersHorizontal className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <select
              value={selectedClassType}
              onChange={(e) => {
                setSelectedClassType(e.target.value);
                setPage(1);
              }}
              className="w-full pl-10 pr-8 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all cursor-pointer appearance-none"
            >
              <option value="ALL">All Classes (Lab & Clinical)</option>
              <option value="Laboratory">Laboratory Observations</option>
              <option value="Clinical">Clinical & Vital Measurements</option>
            </select>
          </div>
        </div>

        {/* Results Count & Scope Note */}
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
          <div>
            Showing <strong className="text-slate-900 dark:text-white">{observations.length}</strong> of{' '}
            <strong className="text-slate-900 dark:text-white">{total}</strong> observation standards
            {debouncedQuery && (
              <span className="ml-2 px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-300">
                &quot;{debouncedQuery}&quot;
              </span>
            )}
          </div>
          <div className="hidden sm:block text-[11px] text-slate-400">
            Observation Layer &bull; Six-Axes Standard
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. OBSERVATIONS TABLE                                                     */}
      {/* ========================================================================= */}
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
        {isLoading ? (
          <div className="py-20 flex flex-col items-center justify-center gap-3">
            <RefreshCw className="w-8 h-8 text-cyan-600 animate-spin" />
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Loading LOINC clinical observations...
            </span>
          </div>
        ) : error ? (
          <div className="py-16 px-4 text-center">
            <AlertCircle className="w-8 h-8 text-rose-500 mx-auto mb-2" />
            <p className="text-sm text-rose-600 dark:text-rose-400 font-medium">{error}</p>
            <button
              type="button"
              onClick={() => fetchObservations()}
              className="mt-3 px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Retry
            </button>
          </div>
        ) : observations.length === 0 ? (
          <div className="py-16 px-4 text-center">
            <Info className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">No LOINC observations found</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
              Try adjusting your search terms or category filter.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/80 dark:bg-slate-950/50 border-b border-slate-200 dark:border-slate-800 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  <th className="py-3 px-4 w-28">LOINC Code</th>
                  <th className="py-3 px-4 min-w-[200px]">Observation / Test Name</th>
                  <th className="py-3 px-4 w-44 min-w-[170px] whitespace-nowrap">Category</th>
                  <th className="py-3 px-4 min-w-[140px]">Specimen / System</th>
                  <th className="py-3 px-4 min-w-[180px]">Component (Analyte)</th>
                  <th className="py-3 px-4 w-28 whitespace-nowrap">Scale & Unit</th>
                  <th className="py-3 px-4 w-20 text-right">6 Axes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
                {observations.map((item) => (
                  <tr
                    key={item.loincNumber}
                    className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors group"
                  >
                    {/* LOINC Code */}
                    <td className="py-3 px-4 align-top">
                      <span className="font-mono font-bold text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-200 dark:border-cyan-800 text-[11px] whitespace-nowrap">
                        {item.loincNumber}
                      </span>
                    </td>

                    {/* Display & Long Common Name */}
                    <td className="py-3 px-4 align-top">
                      <div className="space-y-0.5">
                        <span className="font-bold text-slate-900 dark:text-white text-xs block">
                          {item.displayName}
                        </span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 block line-clamp-1">
                          {item.longCommonName}
                        </span>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="py-3 px-4 align-top whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold border whitespace-nowrap ${
                          item.category === 'Chemistry'
                            ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300 border-blue-200 dark:border-blue-800'
                            : item.category === 'Hematology'
                            ? 'bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300 border-rose-200 dark:border-rose-800'
                            : item.category === 'Lipid Panel'
                            ? 'bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300 border-amber-200 dark:border-amber-800'
                            : item.category === 'Cardiac Markers'
                            ? 'bg-red-50 text-red-700 dark:bg-red-950/50 dark:text-red-300 border-red-200 dark:border-red-800'
                            : item.category === 'Vital Signs'
                            ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                            : item.category === 'Urinalysis'
                            ? 'bg-purple-50 text-purple-700 dark:bg-purple-950/50 dark:text-purple-300 border-purple-200 dark:border-purple-800'
                            : 'bg-teal-50 text-teal-700 dark:bg-teal-950/50 dark:text-teal-300 border-teal-200 dark:border-teal-800'
                        }`}
                      >
                        {item.category}
                      </span>
                    </td>

                    {/* Specimen / System */}
                    <td className="py-3 px-4 align-top">
                      <span className="text-slate-700 dark:text-slate-300 text-xs font-medium">
                        {item.axes.system}
                      </span>
                    </td>

                    {/* Component */}
                    <td className="py-3 px-4 align-top">
                      <span className="text-slate-600 dark:text-slate-300 text-xs">
                        {item.axes.component}
                      </span>
                    </td>

                    {/* Scale & Example Units */}
                    <td className="py-3 px-4 align-top whitespace-nowrap">
                      <div className="space-y-0.5 text-[11px]">
                        <span className="font-mono font-semibold text-slate-800 dark:text-slate-200 block">
                          {item.exampleUnits}
                        </span>
                        <span className="text-slate-400 text-[10px] block">
                          Scale: {item.axes.scale.split(' ')[0]}
                        </span>
                      </div>
                    </td>

                    {/* Details Action */}
                    <td className="py-3 px-4 align-top text-right">
                      <button
                        type="button"
                        onClick={() => setSelectedItemForModal(item)}
                        className="p-1.5 rounded-lg bg-cyan-50 hover:bg-cyan-100 dark:bg-cyan-950/50 dark:hover:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300 inline-flex items-center justify-center transition-colors cursor-pointer border border-cyan-200 dark:border-cyan-800 shadow-sm"
                        title="Inspect LOINC 6 Axes & Clinical Scope"
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
        {!isLoading && observations.length > 0 && (
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
      {/* 3. SIX-AXES INSPECTOR MODAL                                               */}
      {/* ========================================================================= */}
      {selectedItemForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-start justify-between gap-4 bg-slate-50/50 dark:bg-slate-950/40">
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono font-bold text-xs bg-cyan-100 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300 px-2 py-0.5 rounded border border-cyan-200 dark:border-cyan-800">
                    LOINC: {selectedItemForModal.loincNumber}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                    {selectedItemForModal.category}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    {selectedItemForModal.classType} Layer
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                  {selectedItemForModal.displayName}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  {selectedItemForModal.longCommonName}
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
              {/* Observation Layer Scope Note */}
              <div className="p-3 rounded-xl bg-cyan-50/50 dark:bg-cyan-950/30 border border-cyan-100 dark:border-cyan-900/50 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-[11px]">
                  <strong>Clinical Observation & Investigation Layer:</strong> Identifies clinical measurements, laboratory orders, and observation outcomes. Does not function as a disease description database.
                </p>
              </div>

              {/* Six Axes Breakdown Cards */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-cyan-600" />
                  The Six Axes of LOINC
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {/* Axis 1: Component */}
                  <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 space-y-1">
                    <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-semibold text-[11px]">
                      <FlaskConical className="w-3.5 h-3.5 text-cyan-600" />
                      <span>1. Component (Analyte)</span>
                    </div>
                    <p className="font-bold text-slate-900 dark:text-white text-xs pl-5">
                      {selectedItemForModal.axes.component}
                    </p>
                  </div>

                  {/* Axis 2: Property */}
                  <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 space-y-1">
                    <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-semibold text-[11px]">
                      <Gauge className="w-3.5 h-3.5 text-blue-600" />
                      <span>2. Property (Kind of Quantity)</span>
                    </div>
                    <p className="font-bold text-slate-900 dark:text-white text-xs pl-5">
                      {selectedItemForModal.axes.property}
                    </p>
                  </div>

                  {/* Axis 3: Timing */}
                  <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 space-y-1">
                    <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-semibold text-[11px]">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      <span>3. Timing (Time Aspect)</span>
                    </div>
                    <p className="font-bold text-slate-900 dark:text-white text-xs pl-5">
                      {selectedItemForModal.axes.timing}
                    </p>
                  </div>

                  {/* Axis 4: System */}
                  <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 space-y-1">
                    <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-semibold text-[11px]">
                      <Droplet className="w-3.5 h-3.5 text-rose-600" />
                      <span>4. System (Specimen / Body Site)</span>
                    </div>
                    <p className="font-bold text-slate-900 dark:text-white text-xs pl-5">
                      {selectedItemForModal.axes.system}
                    </p>
                  </div>

                  {/* Axis 5: Scale */}
                  <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 space-y-1">
                    <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-semibold text-[11px]">
                      <SlidersHorizontal className="w-3.5 h-3.5 text-purple-600" />
                      <span>5. Scale (Scale Type)</span>
                    </div>
                    <p className="font-bold text-slate-900 dark:text-white text-xs pl-5">
                      {selectedItemForModal.axes.scale}
                    </p>
                  </div>

                  {/* Axis 6: Method */}
                  <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 space-y-1">
                    <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-semibold text-[11px]">
                      <Activity className="w-3.5 h-3.5 text-emerald-600" />
                      <span>6. Method (Analytical Technique)</span>
                    </div>
                    <p className="font-bold text-slate-900 dark:text-white text-xs pl-5">
                      {selectedItemForModal.axes.method}
                    </p>
                  </div>
                </div>
              </div>

              {/* Reference Range & Clinical Use */}
              {selectedItemForModal.referenceRange && (
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Typical Reference Ranges & Diagnostic Thresholds
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 font-mono text-xs bg-slate-50 dark:bg-slate-950/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                    {selectedItemForModal.referenceRange}
                  </p>
                </div>
              )}

              {/* Clinical Investigation Use */}
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Clinical Investigation Purpose
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-950/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800 text-xs">
                  {selectedItemForModal.clinicalObservationUse}
                </p>
              </div>

              {/* FHIR Observation Resource Mapping */}
              <div className="p-3 rounded-xl bg-slate-100/70 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-[11px]">
                    HL7 FHIR Observation Coding:
                  </span>
                  <span className="font-mono font-semibold text-slate-800 dark:text-slate-200">
                    {selectedItemForModal.fhirObservationCode}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-slate-500 dark:text-slate-400 block text-[11px]">
                    Standard UCUM Unit:
                  </span>
                  <span className="font-mono font-bold text-cyan-700 dark:text-cyan-300">
                    {selectedItemForModal.ucumCode}
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 flex items-center justify-between gap-3">
              <a
                href={selectedItemForModal.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-cyan-600 hover:bg-cyan-700 text-white flex items-center gap-1.5 shadow-sm transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>View on Official LOINC.org</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>

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
