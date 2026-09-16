'use client';

import React from 'react';
import { ShieldAlert, AlertTriangle, CheckCircle, Code2, ArrowRight, Ban, Zap } from 'lucide-react';
import { RadarAlert } from '../lib/api';

interface ContradictionRadarProps {
  alerts: RadarAlert[];
  isLoading: boolean;
  onResolveAlert?: (alertId: string, resolution: string) => void;
}

export const ContradictionRadar: React.FC<ContradictionRadarProps> = ({
  alerts,
  isLoading,
  onResolveAlert,
}) => {
  const getSeverityStyle = (sev: string) => {
    switch (sev) {
      case 'CRITICAL':
        return {
          bg: 'bg-rose-50 dark:bg-rose-950/40',
          border: 'border-rose-300 dark:border-rose-500/80',
          badge: 'bg-rose-600 text-white shadow-rose-500/30',
          text: 'text-rose-900 dark:text-rose-200',
        };
      case 'HIGH':
        return {
          bg: 'bg-amber-50 dark:bg-amber-950/40',
          border: 'border-amber-300 dark:border-amber-500/80',
          badge: 'bg-amber-500 text-slate-950 font-bold',
          text: 'text-amber-900 dark:text-amber-200',
        };
      case 'MEDIUM':
        return {
          bg: 'bg-yellow-50 dark:bg-yellow-950/30',
          border: 'border-yellow-300 dark:border-yellow-600/60',
          badge: 'bg-yellow-500 text-slate-950 font-bold',
          text: 'text-yellow-900 dark:text-yellow-200',
        };
      default:
        return {
          bg: 'bg-slate-50 dark:bg-slate-900',
          border: 'border-slate-200 dark:border-slate-700',
          badge: 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200',
          text: 'text-slate-800 dark:text-slate-300',
        };
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm dark:shadow-xl transition-colors">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-500/30">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
              Gap & Contradiction Radar™
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Deterministic graph queries for safety, contraindications, and missing baselines
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold border border-slate-200 dark:border-slate-700">
            {alerts.length} Active {alerts.length === 1 ? 'Alert' : 'Alerts'}
          </span>
        </div>
      </div>

      {/* Alerts Stream */}
      <div className="mt-4 space-y-4">
        {alerts.length === 0 ? (
          <div className="p-8 rounded-xl bg-slate-950/60 border border-slate-800 text-center text-xs text-slate-400">
            <CheckCircle className="w-8 h-8 text-teal-400 mx-auto mb-2" />
            <p className="font-semibold text-slate-300">No active clinical contradictions detected.</p>
            <p className="text-slate-400 mt-1">
              Deterministic Cypher rules evaluated against all prescribed medications and conditions.
            </p>
          </div>
        ) : (
          alerts.map(alert => {
            const styles = getSeverityStyle(alert.severity);

            return (
              <div
                key={alert.id}
                className={`p-4 rounded-xl border ${styles.bg} ${styles.border} transition-all`}
              >
                {/* Top Title & Severity Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] px-2 py-0.5 rounded uppercase tracking-wider font-extrabold shadow ${styles.badge}`}>
                      {alert.severity} HAZARD
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">{alert.ruleName}</h3>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">{alert.ruleId}</span>
                </div>

                {/* Summary */}
                <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 mb-2">{alert.summary}</p>

                {/* Clinical Hazard Description */}
                <div className="p-3 rounded-lg bg-white/90 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 text-xs mb-3 space-y-2">
                  <div className="text-slate-700 dark:text-slate-300">
                    <strong className="text-rose-600 dark:text-rose-400">Pathophysiological Hazard: </strong>
                    {alert.clinicalHazard}
                  </div>

                  {/* Entities involved */}
                  <div className="flex flex-wrap items-center gap-2 text-[11px] pt-1.5 border-t border-slate-200 dark:border-slate-800/60 text-slate-700 dark:text-slate-300">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">Conflict Path:</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-mono text-cyan-700 dark:text-cyan-300">
                      {alert.affectedEntities.source}
                    </span>
                    <ArrowRight className="w-3 h-3 text-rose-500 dark:text-rose-400" />
                    <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-mono text-rose-700 dark:text-rose-300">
                      {alert.affectedEntities.target}
                    </span>
                  </div>

                  {/* Recommended Action */}
                  <div className="text-teal-800 dark:text-teal-300 font-medium pt-1.5 border-t border-slate-200 dark:border-slate-800/60 flex items-start gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-teal-700 dark:text-teal-400">Recommended Action: </strong>
                      {alert.recommendedAction}
                    </span>
                  </div>
                </div>

                {/* Deterministic Cypher Query Citation */}
                <div className="p-2 rounded bg-slate-100 dark:bg-black/50 border border-slate-200 dark:border-slate-800/80 text-[10px] font-mono text-slate-600 dark:text-slate-400 flex items-center justify-between">
                  <div className="flex items-center gap-1 truncate">
                    <Code2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    <span className="text-cyan-700 dark:text-cyan-400 shrink-0">Cypher:</span>
                    <span className="truncate">{alert.deterministicCypherRule}</span>
                  </div>
                  <span className="text-[9px] text-slate-500 dark:text-slate-400 shrink-0 ml-2">100% Deterministic</span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
