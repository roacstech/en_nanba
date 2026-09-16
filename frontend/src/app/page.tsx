'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { Navbar } from '../components/Navbar';
import { PatientBanner } from '../components/PatientBanner';
import { ClinicalGraphView } from '../components/ClinicalGraphView';
import { ContradictionRadar } from '../components/ContradictionRadar';
import { ClinicalIngestNormalizer } from '../components/ClinicalIngestNormalizer';
import { AiReasoningConsole } from '../components/AiReasoningConsole';
import { EvidenceLedgerView } from '../components/EvidenceLedgerView';
import {
  api,
  PatientProfile,
  PatientGraphData,
  RadarAlert,
  EvidenceLedgerEntry,
  SystemStatus,
} from '../lib/api';
import { Network, ShieldAlert, UploadCloud, Cpu, BookOpen, Layers } from 'lucide-react';

export default function DoctorWorkspacePage() {
  const [systemStatus, setSystemStatus] = useState<SystemStatus | null>(null);
  const [patients, setPatients] = useState<PatientProfile[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<PatientProfile | null>(null);
  const [graphData, setGraphData] = useState<PatientGraphData | null>(null);
  const [radarAlerts, setRadarAlerts] = useState<RadarAlert[]>([]);
  const [evidenceLedger, setEvidenceLedger] = useState<EvidenceLedgerEntry[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'workspace' | 'graph' | 'radar' | 'ingest' | 'ai' | 'ledger'>('workspace');

  // Load initial system data
  const loadInitialData = async () => {
    setIsLoading(true);
    try {
      const [status, patientList] = await Promise.all([
        api.getSystemStatus().catch(() => null),
        api.getPatients().catch(() => []),
      ]);
      setSystemStatus(status);
      setPatients(patientList);
      if (patientList.length > 0 && !selectedPatient) {
        setSelectedPatient(patientList[0]);
      }
    } catch (e) {
      console.error('Failed loading system status', e);
    } finally {
      setIsLoading(false);
    }
  };

  // Load patient specific graph, radar alerts, and evidence ledger
  const loadPatientDetails = useCallback(async (patientId: string) => {
    try {
      const [graph, alerts, ledger] = await Promise.all([
        api.getPatientGraph(patientId).catch(() => null),
        api.getRadarAlerts(patientId).catch(() => []),
        api.getEvidenceLedger(patientId).catch(() => []),
      ]);
      setGraphData(graph);
      setRadarAlerts(alerts);
      setEvidenceLedger(ledger);
    } catch (e) {
      console.error(`Failed loading patient details for ${patientId}`, e);
    }
  }, []);

  useEffect(() => {
    loadInitialData();
  }, []);

  useEffect(() => {
    if (selectedPatient) {
      loadPatientDetails(selectedPatient.id);
    }
  }, [selectedPatient, loadPatientDetails]);

  const handlePatientSelect = (p: PatientProfile) => {
    setSelectedPatient(p);
  };

  const handleRefresh = () => {
    if (selectedPatient) {
      loadPatientDetails(selectedPatient.id);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col transition-colors">
      <Navbar systemStatus={systemStatus} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Patient Profile Demographics Banner */}
        <PatientBanner
          patients={patients}
          selectedPatient={selectedPatient}
          onSelectPatient={handlePatientSelect}
        />

        {/* Workspace Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3 mb-6">
          <button
            onClick={() => setActiveTab('workspace')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              activeTab === 'workspace'
                ? 'bg-teal-600 dark:bg-teal-500 text-white dark:text-slate-950 shadow-md shadow-teal-500/20'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-900'
            }`}
          >
            <Layers className="w-4 h-4" /> Doctor Intelligence Workspace
          </button>

          <button
            onClick={() => setActiveTab('graph')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              activeTab === 'graph'
                ? 'bg-cyan-600 dark:bg-cyan-500 text-white dark:text-slate-950 shadow-md shadow-cyan-500/20'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-900'
            }`}
          >
            <Network className="w-4 h-4" /> Clinical Graph (Neo4j)
          </button>

          <button
            onClick={() => setActiveTab('radar')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              activeTab === 'radar'
                ? 'bg-rose-600 dark:bg-rose-500 text-white shadow-md shadow-rose-500/20'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-900'
            }`}
          >
            <ShieldAlert className="w-4 h-4" /> Contradiction Radar ({radarAlerts.length})
          </button>

          <button
            onClick={() => setActiveTab('ingest')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              activeTab === 'ingest'
                ? 'bg-indigo-600 dark:bg-indigo-500 text-white shadow-md shadow-indigo-500/20'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-900'
            }`}
          >
            <UploadCloud className="w-4 h-4" /> Text Ingest & Normalizer
          </button>

          <button
            onClick={() => setActiveTab('ai')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              activeTab === 'ai'
                ? 'bg-teal-600 dark:bg-teal-500 text-white dark:text-slate-950 shadow-md shadow-teal-500/20'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-900'
            }`}
          >
            <Cpu className="w-4 h-4" /> AI Reasoning (Gemini RAG)
          </button>

          <button
            onClick={() => setActiveTab('ledger')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              activeTab === 'ledger'
                ? 'bg-slate-200 dark:bg-slate-800 text-teal-700 dark:text-teal-400 border border-teal-500/40'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-900'
            }`}
          >
            <BookOpen className="w-4 h-4" /> Evidence Ledger ({evidenceLedger.length})
          </button>
        </div>

        {/* Tab Contents */}
        {selectedPatient ? (
          <div className="space-y-6">
            {/* 1. All-In-One Integrated Workspace */}
            {activeTab === 'workspace' && (
              <div className="space-y-6">
                {/* Contradiction Radar Banner if Hazards exist */}
                <ContradictionRadar
                  alerts={radarAlerts}
                  isLoading={isLoading}
                />

                {/* Graph + Ingest Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <ClinicalGraphView
                    graphData={graphData}
                    isLoading={isLoading}
                    onRefresh={handleRefresh}
                  />

                  <ClinicalIngestNormalizer
                    patientId={selectedPatient.id}
                    onIngestSuccess={handleRefresh}
                  />
                </div>

                {/* AI Reasoning & Doctor Decision Console */}
                <AiReasoningConsole
                  patientId={selectedPatient.id}
                  onDecisionSubmitted={handleRefresh}
                />

                {/* Evidence Ledger */}
                <EvidenceLedgerView
                  entries={evidenceLedger}
                  isLoading={isLoading}
                />
              </div>
            )}

            {/* 2. Pure Clinical Graph View */}
            {activeTab === 'graph' && (
              <ClinicalGraphView
                graphData={graphData}
                isLoading={isLoading}
                onRefresh={handleRefresh}
              />
            )}

            {/* 3. Pure Contradiction Radar */}
            {activeTab === 'radar' && (
              <ContradictionRadar
                alerts={radarAlerts}
                isLoading={isLoading}
              />
            )}

            {/* 4. Ingestion & Normalizer Playground */}
            {activeTab === 'ingest' && (
              <div className="space-y-6">
                <ClinicalIngestNormalizer
                  patientId={selectedPatient.id}
                  onIngestSuccess={handleRefresh}
                />
                <ClinicalGraphView
                  graphData={graphData}
                  isLoading={isLoading}
                  onRefresh={handleRefresh}
                />
              </div>
            )}

            {/* 5. AI Reasoning & Clinical Decision Console */}
            {activeTab === 'ai' && (
              <AiReasoningConsole
                patientId={selectedPatient.id}
                onDecisionSubmitted={handleRefresh}
              />
            )}

            {/* 6. Evidence Ledger View */}
            {activeTab === 'ledger' && (
              <EvidenceLedgerView
                entries={evidenceLedger}
                isLoading={isLoading}
              />
            )}
          </div>
        ) : (
          <div className="p-16 text-center text-slate-400">
            <p>Loading patient profiles from healthcare database...</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-4 text-center text-xs text-slate-400">
        <p>EN NANBA Clinical Intelligence Platform • Proof of Concept (POC) Architecture • 100% Self-Hosted & Secure</p>
      </footer>
    </div>
  );
}
