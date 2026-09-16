'use client';

import React, { useState } from 'react';
import { Network, ZoomIn, ZoomOut, RefreshCw, AlertOctagon, Info, Layers } from 'lucide-react';
import { PatientGraphData, GraphNode, GraphRelationship } from '../lib/api';

interface ClinicalGraphViewProps {
  graphData: PatientGraphData | null;
  isLoading: boolean;
  onRefresh: () => void;
}

export const ClinicalGraphView: React.FC<ClinicalGraphViewProps> = ({
  graphData,
  isLoading,
  onRefresh,
}) => {
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);
  const [filterType, setFilterType] = useState<string>('ALL');

  if (isLoading || !graphData) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[420px]">
        <RefreshCw className="w-8 h-8 text-teal-400 animate-spin mb-3" />
        <p className="text-slate-400 text-sm">Traversing Patient Clinical Graph in Neo4j...</p>
      </div>
    );
  }

  const nodes = graphData.nodes;
  const rels = graphData.relationships;

  // Filter nodes if active
  const filteredNodes = filterType === 'ALL' ? nodes : nodes.filter(n => n.label === filterType || n.label === 'Patient');

  // Categorized Node counts
  const countByType = {
    All: nodes.length,
    Symptom: nodes.filter(n => n.label === 'Symptom').length,
    Diagnosis: nodes.filter(n => n.label === 'Diagnosis').length,
    Medication: nodes.filter(n => n.label === 'Medication').length,
    Investigation: nodes.filter(n => n.label === 'Investigation').length,
    Allergy: nodes.filter(n => n.label === 'Allergy').length,
  };

  // Node Color scheme
  const getNodeStyles = (label: string, isHazard = false) => {
    if (isHazard) {
      return {
        bg: 'bg-rose-950/80',
        border: 'border-rose-500',
        text: 'text-rose-300',
        dot: 'bg-rose-500',
      };
    }
    switch (label) {
      case 'Patient':
        return { bg: 'bg-teal-950/90', border: 'border-teal-400', text: 'text-teal-200', dot: 'bg-teal-400' };
      case 'Symptom':
        return { bg: 'bg-amber-950/80', border: 'border-amber-400', text: 'text-amber-200', dot: 'bg-amber-400' };
      case 'Diagnosis':
        return { bg: 'bg-cyan-950/80', border: 'border-cyan-400', text: 'text-cyan-200', dot: 'bg-cyan-400' };
      case 'Medication':
        return { bg: 'bg-indigo-950/80', border: 'border-indigo-400', text: 'text-indigo-200', dot: 'bg-indigo-400' };
      case 'Investigation':
        return { bg: 'bg-emerald-950/80', border: 'border-emerald-400', text: 'text-emerald-200', dot: 'bg-emerald-400' };
      case 'Allergy':
        return { bg: 'bg-rose-950/80', border: 'border-rose-400', text: 'text-rose-200', dot: 'bg-rose-400' };
      default:
        return { bg: 'bg-slate-800', border: 'border-slate-600', text: 'text-slate-200', dot: 'bg-slate-400' };
    }
  };

  // Detect hazard relationships
  const hazardRels = rels.filter(r => r.type === 'CONTRAINDICATED_WITH' || r.type === 'CONFLICTS_WITH');

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm dark:shadow-xl flex flex-col h-full transition-colors">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <Network className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
          <h2 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
            The Clinical Intelligence Fabric (Neo4j Graph)
          </h2>
          <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-50 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800 font-mono">
            {nodes.length} Nodes • {rels.length} Edges
          </span>
        </div>

        {/* Filters & Refresh */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-950 p-1 rounded-lg border border-slate-200 dark:border-slate-800 text-xs">
            {(['ALL', 'Diagnosis', 'Medication', 'Investigation', 'Allergy'] as const).map(type => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-2 py-1 rounded-md transition-colors ${
                  filterType === type ? 'bg-cyan-100 dark:bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 font-semibold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
          <button
            onClick={onRefresh}
            title="Refresh Graph from Neo4j"
            className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Hazard Warning Banner if active contradictions */}
      {hazardRels.length > 0 && (
        <div className="mt-3 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-500/50 flex items-center justify-between text-xs text-rose-800 dark:text-rose-300 animate-pulse-subtle">
          <div className="flex items-center gap-2">
            <AlertOctagon className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />
            <span>
              <strong>Deterministic Radar Conflict in Graph:</strong>{' '}
              {hazardRels.map(h => `(${h.sourceId}) -[${h.type}]-> (${h.targetId})`).join(', ')}
            </span>
          </div>
          <span className="font-bold px-2 py-0.5 rounded bg-rose-600 text-white dark:bg-rose-500/20 dark:text-rose-400 border border-rose-500/40">
            CRITICAL
          </span>
        </div>
      )}

      {/* Main Canvas Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4 flex-1 min-h-[380px]">
        {/* Visual Graph Layout Grid */}
        <div className="lg:col-span-2 bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 rounded-xl p-4 relative overflow-y-auto max-h-[460px]">
          {/* Legend */}
          <div className="flex flex-wrap gap-2 text-[11px] mb-4 pb-2 border-b border-slate-200 dark:border-slate-800/80">
            <span className="flex items-center gap-1 text-teal-800 dark:text-teal-300 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-500 dark:bg-teal-400"></span> Patient
            </span>
            <span className="flex items-center gap-1 text-cyan-800 dark:text-cyan-300 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 dark:bg-cyan-400"></span> Diagnosis (ICD-11)
            </span>
            <span className="flex items-center gap-1 text-indigo-800 dark:text-indigo-300 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 dark:bg-indigo-400"></span> Medication (RxNorm)
            </span>
            <span className="flex items-center gap-1 text-emerald-800 dark:text-emerald-300 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 dark:bg-emerald-400"></span> Investigation (LOINC)
            </span>
            <span className="flex items-center gap-1 text-amber-800 dark:text-amber-300 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 dark:bg-amber-400"></span> Symptom
            </span>
            <span className="flex items-center gap-1 text-rose-800 dark:text-rose-300 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 dark:bg-rose-400"></span> Allergy
            </span>
          </div>

          {/* Node Cards Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {filteredNodes.map(node => {
              const isSelected = selectedNode?.id === node.id;
              const hasContra = hazardRels.some(r => r.sourceId === node.id || r.targetId === node.id);
              const styles = getNodeStyles(node.label, hasContra);

              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNode(node)}
                  className={`p-3 rounded-xl border transition-all cursor-pointer relative ${styles.bg} ${
                    isSelected ? 'ring-2 ring-white scale-[1.02] shadow-lg' : 'hover:scale-[1.01]'
                  } ${styles.border}`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-black/40 text-slate-300">
                      {node.label}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${styles.dot}`}></span>
                  </div>

                  <div className="font-semibold text-xs text-slate-900 dark:text-white line-clamp-1">
                    {node.properties.name || node.properties.fullName || node.id}
                  </div>

                  {/* Standard Code Tag */}
                  {(node.properties.icdCode || node.properties.rxNormCode || node.properties.loincCode) && (
                    <div className="text-[10px] font-mono text-cyan-700 dark:text-cyan-300 mt-1">
                      {node.properties.system ? `${node.properties.system}: ` : ''}
                      {node.properties.icdCode || node.properties.rxNormCode || node.properties.loincCode}
                    </div>
                  )}

                  {/* Value / Dosage */}
                  {node.properties.dosage && (
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">{node.properties.dosage}</div>
                  )}
                  {node.properties.value && (
                    <div className="text-[10px] text-emerald-700 dark:text-emerald-300 font-bold mt-0.5">
                      {node.properties.value} {node.properties.unit}
                    </div>
                  )}

                  {/* Hazard Marker */}
                  {hasContra && (
                    <span className="absolute -top-1.5 -right-1.5 px-1 py-0.5 bg-rose-600 text-white rounded-full text-[9px] font-bold shadow animate-pulse">
                      CONFLICT
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Connected Relationships Stream */}
          <div className="mt-5 pt-3 border-t border-slate-200 dark:border-slate-800/80">
            <h4 className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" /> Active Graph Relationships:
            </h4>
            <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto">
              {rels.map((rel, i) => {
                const isContra = rel.type === 'CONTRAINDICATED_WITH' || rel.type === 'CONFLICTS_WITH';
                return (
                  <span
                    key={i}
                    className={`px-2 py-1 rounded text-[11px] font-mono border ${
                      isContra
                        ? 'bg-rose-100 dark:bg-rose-950/70 border-rose-300 dark:border-rose-500/80 text-rose-800 dark:text-rose-300 font-bold'
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    ({rel.sourceId}) <strong className={isContra ? 'text-rose-600 dark:text-rose-400' : 'text-teal-600 dark:text-teal-400'}>-[:{rel.type}]-&gt;</strong> ({rel.targetId})
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* Node Inspector Detail Panel */}
        <div className="bg-slate-50 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 pb-2 mb-3 border-b border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
              <Info className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span className="font-semibold text-slate-800 dark:text-slate-200">Clinical Entity Inspector</span>
            </div>

            {selectedNode ? (
              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold">Node Label</span>
                  <div className="font-bold text-sm text-slate-900 dark:text-white mt-0.5">{selectedNode.label}</div>
                </div>

                <div>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold">Clinical Name</span>
                  <div className="font-semibold text-cyan-700 dark:text-cyan-300 text-sm mt-0.5">
                    {selectedNode.properties.name || selectedNode.properties.fullName || selectedNode.id}
                  </div>
                </div>

                {/* Standard Code Mapping */}
                {(selectedNode.properties.icdCode || selectedNode.properties.rxNormCode || selectedNode.properties.loincCode) && (
                  <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold">Standard Terminology</span>
                    <div className="font-mono text-teal-700 dark:text-teal-300 font-semibold text-xs mt-0.5">
                      {selectedNode.properties.system || 'Standard'}:{' '}
                      {selectedNode.properties.icdCode || selectedNode.properties.rxNormCode || selectedNode.properties.loincCode}
                    </div>
                  </div>
                )}

                {/* Properties Table */}
                <div>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold">Graph Properties</span>
                  <div className="bg-white dark:bg-slate-900/80 p-2.5 rounded-lg mt-1 space-y-1 font-mono text-[11px] max-h-40 overflow-y-auto border border-slate-200 dark:border-slate-800">
                    {Object.entries(selectedNode.properties).map(([k, v]) => (
                      <div key={k} className="flex justify-between border-b border-slate-100 dark:border-slate-800/40 pb-0.5">
                        <span className="text-slate-500 dark:text-slate-400">{k}:</span>
                        <span className="text-slate-800 dark:text-slate-200 font-medium truncate max-w-[120px]">{String(v)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-slate-500 dark:text-slate-400 text-xs">
                <p>Click on any node in the clinical graph to inspect its properties, standard code, and relationships.</p>
              </div>
            )}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 text-[10px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
            <span>Graph Engine: Neo4j Cypher</span>
            <span>Deterministic Model</span>
          </div>
        </div>
      </div>
    </div>
  );
};
