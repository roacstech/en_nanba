'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { Navbar } from '../components/Navbar';
import { PatientBanner } from '../components/PatientBanner';
import { ClinicalGraphView } from '../components/ClinicalGraphView';
import { ContradictionRadar } from '../components/ContradictionRadar';
import { ClinicalIngestNormalizer } from '../components/ClinicalIngestNormalizer';
import { AiReasoningConsole } from '../components/AiReasoningConsole';
import { EvidenceLedgerView } from '../components/EvidenceLedgerView';
import { PatientDashboard } from '../components/PatientDashboard';
import { AuthPortal } from '../components/AuthPortal';
import { PatientOnboardingFlow } from '../components/PatientOnboardingFlow';
import {
  api,
  AuthUser,
  PatientProfile,
  PatientGraphData,
  RadarAlert,
  EvidenceLedgerEntry,
  SystemStatus,
} from '../lib/api';
import {
  Network,
  ShieldAlert,
  UploadCloud,
  Cpu,
  BookOpen,
  Layers,
} from 'lucide-react';

export default function DoctorWorkspacePage() {
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);
  const [isAuthChecking, setIsAuthChecking] = useState<boolean>(true);

  const [systemStatus, setSystemStatus] = useState<SystemStatus | null>(null);
  const [patients, setPatients] = useState<PatientProfile[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<PatientProfile | null>(null);
  const [graphData, setGraphData] = useState<PatientGraphData | null>(null);
  const [radarAlerts, setRadarAlerts] = useState<RadarAlert[]>([]);
  const [evidenceLedger, setEvidenceLedger] = useState<EvidenceLedgerEntry[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'workspace' | 'graph' | 'radar' | 'ingest' | 'ai' | 'ledger'>('workspace');

  // Role Separation States
  const [activePatient, setActivePatient] = useState<PatientProfile | null>(null);
  const [patientPortalMode, setPatientPortalMode] = useState<'report' | 'intake'>('report');
  const [isIntakeModalOpen, setIsIntakeModalOpen] = useState<boolean>(false);

  // Check saved authentication session
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('ennanba_user');
      if (savedUser) {
        const parsed: AuthUser = JSON.parse(savedUser);
        setCurrentUser(parsed);
      }
    } catch (e) {
      console.warn('Failed restoring user session from localStorage', e);
    } finally {
      setIsAuthChecking(false);
    }
  }, []);

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
      if (patientList.length > 0) {
        if (!selectedPatient) setSelectedPatient(patientList[0]);
        if (!activePatient) setActivePatient(patientList[0]);
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

  // When patient user is loaded, match their profile
  useEffect(() => {
    if (currentUser?.role === 'patient' && currentUser.patientId && patients.length > 0) {
      const found = patients.find(p => p.id === currentUser.patientId);
      if (found) {
        setActivePatient(found);
        setSelectedPatient(found);
      }
    }
  }, [currentUser, patients]);

  const handlePatientSelect = (p: PatientProfile) => {
    setSelectedPatient(p);
  };

  const handleRefresh = () => {
    if (selectedPatient) {
      loadPatientDetails(selectedPatient.id);
    }
    api.getPatients().then(list => setPatients(list)).catch(() => {});
  };

  // Auth Handlers
  const handleLoginSuccess = (user: AuthUser, patient?: PatientProfile | null) => {
    setCurrentUser(user);
    try {
      localStorage.setItem('ennanba_user', JSON.stringify(user));
    } catch (e) {
      console.warn('Failed persisting user session', e);
    }

    if (user.role === 'patient') {
      if (patient) {
        setActivePatient(patient);
        setSelectedPatient(patient);
        setPatients(prev => (prev.some(p => p.id === patient.id) ? prev : [patient, ...prev]));
      } else if (user.patientId) {
        api.getPatient(user.patientId).then(p => {
          setActivePatient(p);
          setSelectedPatient(p);
        }).catch(() => {});
      }
    } else {
      // Doctor logged in: ensure first patient is selected
      if (patients.length > 0 && !selectedPatient) {
        setSelectedPatient(patients[0]);
      }
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    try {
      localStorage.removeItem('ennanba_user');
    } catch (e) {
      console.warn('Failed clearing user session', e);
    }
    setActivePatient(null);
  };

  const handleOnboardingComplete = (updatedUser: AuthUser, createdPatient: PatientProfile) => {
    setCurrentUser(updatedUser);
    try {
      localStorage.setItem('ennanba_user', JSON.stringify(updatedUser));
    } catch (e) {
      console.warn('Failed persisting user session', e);
    }
    setActivePatient(createdPatient);
    setSelectedPatient(createdPatient);
    setPatients(prev => [createdPatient, ...prev.filter(p => p.id !== createdPatient.id)]);
    loadPatientDetails(createdPatient.id);
  };


  // When patient submits new or updated intake data
  const handlePatientUpdated = (updatedPatient: PatientProfile) => {
    setActivePatient(updatedPatient);
    setSelectedPatient(updatedPatient);
    if (currentUser && currentUser.fullName !== updatedPatient.fullName) {
      const updatedUser = { ...currentUser, fullName: updatedPatient.fullName };
      setCurrentUser(updatedUser);
      try {
        localStorage.setItem('ennanba_user', JSON.stringify(updatedUser));
      } catch (e) {
        console.warn('Failed persisting user update', e);
      }
    }
    setPatients(prev => {
      const exists = prev.some(p => p.id === updatedPatient.id);
      if (exists) {
        return prev.map(p => (p.id === updatedPatient.id ? updatedPatient : p));
      }
      return [updatedPatient, ...prev];
    });
    loadPatientDetails(updatedPatient.id);
  };

  if (isAuthChecking) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 border-2 border-teal-400 border-t-transparent rounded-full animate-spin" />
          <span className="text-sm font-semibold">Initializing EN NANBA Platform...</span>
        </div>
      </div>
    );
  }

  // Not logged in -> Show crisp Dedicated Auth Portal
  if (!currentUser) {
    return <AuthPortal onLoginSuccess={handleLoginSuccess} />;
  }

  // Patient with pending onboarding -> Gate directly to baseline medical onboarding
  if (currentUser.role === 'patient' && !currentUser.isIntakeCompleted) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col transition-colors">
        <Navbar
          systemStatus={systemStatus}
          currentRole="patient"
          currentUser={currentUser}
          onLogout={handleLogout}
        />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <PatientOnboardingFlow
            user={currentUser}
            onComplete={handleOnboardingComplete}
            onLogout={handleLogout}
          />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col transition-colors">
      {/* Top Navbar with Profile Icon & Dropdown */}
      <Navbar
        systemStatus={systemStatus}
        currentRole={currentUser.role}
        activePatient={activePatient}
        currentUser={currentUser}
        onLogout={handleLogout}
        onEditProfile={() => setIsIntakeModalOpen(true)}
        onPatientUpdated={handlePatientUpdated}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* ========================================================================= */}
        {/* VIEW 1: PATIENT PORTAL                                                    */}
        {/* ========================================================================= */}
        {currentUser.role === 'patient' ? (
          <PatientDashboard
            patient={activePatient}
            onPatientUpdated={handlePatientUpdated}
            initialMode={patientPortalMode}
            isIntakeModalOpen={isIntakeModalOpen}
            onCloseIntakeModal={() => {
              setIsIntakeModalOpen(false);
              setPatientPortalMode('report');
            }}
          />
        ) : (
          /* ========================================================================= */
          /* VIEW 2: DOCTOR INTELLIGENCE WORKSPACE                                     */
          /* ========================================================================= */
          <>
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
                className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'workspace'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-900'
                }`}
              >
                <Layers className="w-4 h-4" /> Doctor Intelligence Workspace
              </button>

              <button
                onClick={() => setActiveTab('graph')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'graph'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-900'
                }`}
              >
                <Network className="w-4 h-4" /> Clinical Graph (Neo4j)
              </button>

              <button
                onClick={() => setActiveTab('radar')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'radar'
                    ? 'bg-rose-600 text-white shadow-md shadow-rose-500/20'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-900'
                }`}
              >
                <ShieldAlert className="w-4 h-4" /> Contradiction Radar ({radarAlerts.length})
              </button>

              <button
                onClick={() => setActiveTab('ingest')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'ingest'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-900'
                }`}
              >
                <UploadCloud className="w-4 h-4" /> Text Ingest & Normalizer
              </button>

              <button
                onClick={() => setActiveTab('ai')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'ai'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-900'
                }`}
              >
                <Cpu className="w-4 h-4" /> AI Reasoning (Gemini RAG)
              </button>

              <button
                onClick={() => setActiveTab('ledger')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'ledger'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
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
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-4 text-center text-xs text-slate-500 dark:text-slate-400">
        <p>EN NANBA Clinical Intelligence Platform • Proof of Concept (POC) Architecture • 100% Self-Hosted & Secure</p>
      </footer>
    </div>
  );
}

