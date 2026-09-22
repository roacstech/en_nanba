'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  Search,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Copy,
  Check,
  RefreshCw,
  Database,
} from 'lucide-react';
import { api, TerminologyEntry, TerminologyCatalogResponse } from '../lib/api';

interface TerminologyCatalogProps {
  terminologyId: string; // e.g. 'snomed', 'loinc'
  title: string;         // e.g. 'SNOMED CT Official Catalog'
}

export const TerminologyCatalog: React.FC<TerminologyCatalogProps> = ({ terminologyId, title }) => {
  const [entries, setEntries] = useState<TerminologyEntry[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(50);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [debouncedQuery, setDebouncedQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

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
      const res: TerminologyCatalogResponse = await api.getTerminologyCatalog(terminologyId, {
        page,
        limit,
        q: debouncedQuery.trim() || undefined,
      });

      setEntries(res.data || []);
      setTotal(res.total || 0);
      setTotalPages(res.totalPages || 1);
    } catch (err: any) {
      console.error(`Failed to load ${terminologyId} catalog`, err);
      setError(err.message || `Failed to fetch ${terminologyId} data`);
    } finally {
      setIsLoading(false);
    }
  }, [terminologyId, page, limit, debouncedQuery]);

  useEffect(() => {
    fetchCatalog();
  }, [fetchCatalog]);

  // Copy code handler
  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="w-full flex flex-col gap-2 animate-fadeIn">
      {/* 1. Header Section */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
            <Database className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              {title}
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
              Browse, search, and verify standard clinical codes
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <div className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider mb-1">
            Database Size
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-slate-900 dark:text-white">
              {total.toLocaleString()}
            </span>
            <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
              Entries
            </span>
            <button
              onClick={fetchCatalog}
              disabled={isLoading}
              className="ml-2 p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Refresh Catalog"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin text-blue-600' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Controls Section */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-3 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row gap-3">
        {/* Search */}
        <div className="flex-1 relative group">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
          </div>
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-medium focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all dark:text-white placeholder:text-slate-400"
            placeholder={`Search ${terminologyId.toUpperCase()} by code, name, category, or description...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
            >
              <span className="text-xs font-bold">Clear</span>
            </button>
          )}
        </div>

        {/* Rows per page */}
        <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-950 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 shrink-0">
          <span className="text-xs font-bold text-slate-500">Rows:</span>
          <select
            className="bg-transparent text-sm font-bold text-slate-900 dark:text-white border-none focus:ring-0 p-0 cursor-pointer"
            value={limit}
            onChange={(e) => {
              setLimit(Number(e.target.value));
              setPage(1);
            }}
          >
            <option value={50}>50 / page</option>
            <option value={100}>100 / page</option>
            <option value={200}>200 / page</option>
          </select>
        </div>
      </div>

      {/* 3. Main Data Table */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col flex-1 min-h-[400px]">
        
        {/* Table Header Area */}
        <div className="px-5 py-2.5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex items-center gap-3">
            <h2 className="text-sm font-extrabold text-slate-900 dark:text-white">{terminologyId.toUpperCase()} Records</h2>
            {total > 0 && (
              <span className="px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 text-xs font-bold">
                {total.toLocaleString()} found
              </span>
            )}
          </div>
          
          <div className="text-xs font-medium text-slate-500">
            Showing {Math.min(limit, total)} entries on page {page}
          </div>
        </div>

        {/* Data Loading / Error / Empty States */}
        {error ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center text-red-600 mb-3">
              <Database className="w-5 h-5" />
            </div>
            <p className="text-red-600 dark:text-red-400 font-bold mb-2">Error Loading Catalog</p>
            <p className="text-sm text-slate-500 max-w-md mb-4">{error}</p>
            <button
              onClick={fetchCatalog}
              className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : entries.length === 0 && !isLoading ? (
          <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-4">
              <Search className="w-6 h-6" />
            </div>
            <p className="text-slate-900 dark:text-white font-bold text-lg mb-1">No Entries Found</p>
            <p className="text-sm text-slate-500 max-w-md">
              We couldn't find any {terminologyId.toUpperCase()} terms matching "{searchQuery}".
            </p>
          </div>
        ) : (
          /* The Table */
          <div className="flex-1 overflow-x-auto">
            <table className="w-full text-left border-collapse table-fixed min-w-[800px]">
              <thead>
                <tr className="bg-slate-50/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800">
                  <th className="py-2 px-4 text-[10px] font-black uppercase tracking-wider text-slate-500 w-[15%]">Code</th>
                  <th className="py-2 px-4 text-[10px] font-black uppercase tracking-wider text-slate-500 w-[35%]">Display Term</th>
                  <th className="py-2 px-4 text-[10px] font-black uppercase tracking-wider text-slate-500 w-[15%]">Category</th>
                  <th className="py-2 px-4 text-[10px] font-black uppercase tracking-wider text-slate-500 w-[35%] hidden sm:table-cell">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                {isLoading && entries.length === 0 ? (
                  // Initial loading skeleton
                  Array.from({ length: 10 }).map((_, i) => (
                    <tr key={i} className="animate-pulse">
                      <td className="py-4 px-5"><div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-16"></div></td>
                      <td className="py-4 px-5"><div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-48"></div></td>
                      <td className="py-4 px-5"><div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-24"></div></td>
                      <td className="py-4 px-5 hidden sm:table-cell"><div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-64"></div></td>
                    </tr>
                  ))
                ) : (
                  entries.map((entry) => (
                    <tr 
                      key={entry.code} 
                      className={`hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors group ${isLoading ? 'opacity-50' : ''}`}
                    >
                      <td className="py-1.5 px-4">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-md border border-blue-100 dark:border-blue-800/30">
                            {entry.code}
                          </span>
                          <button
                            onClick={() => handleCopyCode(entry.code)}
                            className="text-slate-400 hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"
                            title="Copy Code"
                          >
                            {copiedCode === entry.code ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                      </td>
                      <td className="py-1.5 px-4">
                        <div className="font-bold text-sm text-slate-900 dark:text-white">
                          {entry.display}
                        </div>
                        <div className="text-[10px] text-slate-400 mt-0.5 uppercase tracking-wide">
                          {entry.system}
                        </div>
                      </td>
                      <td className="py-1.5 px-4">
                        {entry.category ? (
                          <div className="inline-flex items-center px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium border border-slate-200 dark:border-slate-700">
                            {entry.category}
                          </div>
                        ) : (
                          <span className="text-xs text-slate-400">-</span>
                        )}
                      </td>
                      <td className="py-3.5 px-5 hidden sm:table-cell">
                        <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                          {entry.description || '-'}
                        </p>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination Footer */}
        <div className="px-5 py-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-medium text-slate-500">
            Page <span className="font-bold text-slate-900 dark:text-white">{page}</span> of <span className="font-bold text-slate-900 dark:text-white">{totalPages}</span>
          </div>
          
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage(1)}
              disabled={page === 1 || isLoading}
              className="p-1.5 rounded-lg text-slate-500 hover:bg-white dark:hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700 shadow-sm disabled:shadow-none"
            >
              <ChevronsLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1 || isLoading}
              className="p-1.5 rounded-lg text-slate-500 hover:bg-white dark:hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700 shadow-sm disabled:shadow-none"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            <div className="flex items-center gap-1 px-2">
              {/* Simple page numbers around current page */}
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                // Logic to center the current page
                let p = page - 2 + i;
                if (page <= 3) p = i + 1;
                else if (page >= totalPages - 2) p = totalPages - 4 + i;
                
                // Ensure p is valid
                if (p < 1 || p > totalPages) return null;
                
                return (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    disabled={isLoading}
                    className={`w-7 h-7 flex items-center justify-center rounded-lg text-xs font-bold transition-all ${
                      page === p
                        ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
                    }`}
                  >
                    {p}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page >= totalPages || isLoading}
              className="p-1.5 rounded-lg text-slate-500 hover:bg-white dark:hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700 shadow-sm disabled:shadow-none"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setPage(totalPages)}
              disabled={page >= totalPages || isLoading}
              className="p-1.5 rounded-lg text-slate-500 hover:bg-white dark:hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700 shadow-sm disabled:shadow-none"
            >
              <ChevronsRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
