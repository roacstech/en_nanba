'use client';

import React from 'react';
import { BookOpen, ShieldCheck, AlertCircle, Clock, FileCheck2, Cpu } from 'lucide-react';
import { EvidenceLedgerEntry } from '../lib/api';

interface EvidenceLedgerViewProps {
  entries: EvidenceLedgerEntry[];
  isLoading: boolean;
}

export const EvidenceLedgerView: React.FC<EvidenceLedgerViewProps> = ({
  entries,
  isLoading,
}) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(entries.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentEntries = entries.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const getStatusBadge = (tag: string) => {
    switch (tag) {
      case 'verified':
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-950/80 text-emerald-300 border border-emerald-700/60 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-400" /> Verified
          </span>
        );
      case 'conflict':
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-950/80 text-rose-300 border border-rose-700/60 flex items-center gap-1">
            <AlertCircle className="w-3 h-3 text-rose-400" /> Conflict
          </span>
        );
      case 'outdated':
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-950/80 text-amber-300 border border-amber-700/60 flex items-center gap-1">
            <Clock className="w-3 h-3 text-amber-400" /> Outdated
          </span>
        );
      case 'ai-derived':
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-cyan-950/80 text-cyan-300 border border-cyan-700/60 flex items-center gap-1">
            <Cpu className="w-3 h-3 text-cyan-400" /> AI-Derived
          </span>
        );
      default:
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-slate-300">
            {tag}
          </span>
        );
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm dark:shadow-xl transition-colors">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/30">
            <FileCheck2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
              Evidence Ledger™ & Clinical Truth Engine
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Immutable provenance tracing with Verified, Conflict, Outdated, and AI-Derived tags
            </p>
          </div>
        </div>

        <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono border border-slate-200 dark:border-slate-700">
          {entries.length} Ledger Entries
        </span>
      </div>

      {/* Entries List */}
      <div className="mt-4 space-y-3">
        {entries.length === 0 ? (
          <div className="p-8 text-center text-xs text-slate-400 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800">
            No claims recorded yet in the Evidence Ledger.
          </div>
        ) : (
          currentEntries.map(item => (
            <div
              key={item.id}
              className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/90 text-xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                <div className="flex items-center gap-2">
                  {getStatusBadge(item.statusTag)}
                  <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400">{item.id}</span>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-slate-500 dark:text-slate-400">
                  <span>Confidence: <strong className="text-teal-700 dark:text-teal-300 font-bold">{Math.round(item.confidenceScore * 100)}%</strong></span>
                  <span>{new Date(item.recordedAt).toLocaleString()}</span>
                </div>
              </div>

              <div className="font-semibold text-slate-800 dark:text-slate-200 text-xs mb-1">
                {item.claim}
              </div>

              <div className="text-[11px] text-slate-500 dark:text-slate-400 flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-200 dark:border-slate-900">
                <span>
                  Source: <strong className="text-slate-700 dark:text-slate-300 font-mono">{item.sourceDocument}</strong>
                </span>
                {item.clinicalSignificance && (
                  <span className="text-teal-700 dark:text-teal-400 font-medium truncate max-w-md">
                    {item.clinicalSignificance}
                  </span>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, entries.length)} of {entries.length} entries
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-3 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
            >
              Previous
            </button>
            <span className="text-xs font-medium text-slate-700 dark:text-slate-300 mx-2">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
