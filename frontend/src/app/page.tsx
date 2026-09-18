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
import LiveClinicalFlowVisualizer from '../components/LiveClinicalFlowVisualizer';
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
  Zap,
  Sparkles,
  ArrowRight,
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
  const [activeTab, setActiveTab] = useState<'workspace' | 'live-flow' | 'graph' | 'radar' | 'ingest' | 'ai' | 'ledger'>('workspace');


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

      {currentUser.role === 'patient' ? (
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* ========================================================================= */}
          {/* VIEW 1: PATIENT PORTAL                                                    */}
          {/* ========================================================================= */}
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
        </main>
      ) : (
        <div className="flex flex-1 w-full h-[calc(100vh-64px)] overflow-hidden">
          {/* ========================================================================= */}
          {/* VIEW 2: DOCTOR INTELLIGENCE WORKSPACE                                     */}
          {/* ========================================================================= */}
          
          {/* Sidebar Navigation */}
          <aside className="w-64 flex-shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex-col hidden md:flex overflow-y-auto">
            <div className="p-4 space-y-1 mt-2">
              <div className="px-3 pb-2 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                Doctor Workspace
              </div>
              
              <button
                onClick={() => setActiveTab('workspace')}
                className={`w-full px-3 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-3 transition-colors cursor-pointer text-left ${
                  activeTab === 'workspace'
                    ? 'bg-slate-100 dark:bg-slate-900 text-blue-600 dark:text-blue-400 border-l-4 border-blue-600 dark:border-blue-500 pl-2'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900/50 border-l-4 border-transparent pl-2'
                }`}
              >
                <Layers className="w-4 h-4" /> Integrated Dashboard
              </button>

              <button
                onClick={() => setActiveTab('live-flow')}
                className={`w-full px-3 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-3 transition-colors cursor-pointer text-left ${
                  activeTab === 'live-flow'
                    ? 'bg-slate-100 dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 border-l-4 border-indigo-600 dark:border-indigo-500 pl-2'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900/50 border-l-4 border-transparent pl-2'
                }`}
              >
                <Zap className="w-4 h-4" /> Live AI Pipeline
              </button>

              <button
                onClick={() => setActiveTab('graph')}
                className={`w-full px-3 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-3 transition-colors cursor-pointer text-left ${
                  activeTab === 'graph'
                    ? 'bg-slate-100 dark:bg-slate-900 text-blue-600 dark:text-blue-400 border-l-4 border-blue-600 dark:border-blue-500 pl-2'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900/50 border-l-4 border-transparent pl-2'
                }`}
              >
                <Network className="w-4 h-4" /> Clinical Graph
              </button>

              <button
                onClick={() => setActiveTab('radar')}
                className={`w-full px-3 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-3 transition-colors cursor-pointer text-left ${
                  activeTab === 'radar'
                    ? 'bg-slate-100 dark:bg-slate-900 text-blue-600 dark:text-blue-400 border-l-4 border-blue-600 dark:border-blue-500 pl-2'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900/50 border-l-4 border-transparent pl-2'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3">
                    <ShieldAlert className="w-4 h-4" /> Contradictions
                  </div>
                  {radarAlerts.length > 0 && (
                    <span className="bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400 py-0.5 px-2 rounded-full text-[10px] font-bold">
                      {radarAlerts.length}
                    </span>
                  )}
                </div>
              </button>

              <button
                onClick={() => setActiveTab('ingest')}
                className={`w-full px-3 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-3 transition-colors cursor-pointer text-left ${
                  activeTab === 'ingest'
                    ? 'bg-slate-100 dark:bg-slate-900 text-blue-600 dark:text-blue-400 border-l-4 border-blue-600 dark:border-blue-500 pl-2'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900/50 border-l-4 border-transparent pl-2'
                }`}
              >
                <UploadCloud className="w-4 h-4" /> Data Ingestion
              </button>

              <button
                onClick={() => setActiveTab('ai')}
                className={`w-full px-3 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-3 transition-colors cursor-pointer text-left ${
                  activeTab === 'ai'
                    ? 'bg-slate-100 dark:bg-slate-900 text-blue-600 dark:text-blue-400 border-l-4 border-blue-600 dark:border-blue-500 pl-2'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900/50 border-l-4 border-transparent pl-2'
                }`}
              >
                <Cpu className="w-4 h-4" /> AI Reasoning
              </button>

              <button
                onClick={() => setActiveTab('ledger')}
                className={`w-full px-3 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-3 transition-colors cursor-pointer text-left ${
                  activeTab === 'ledger'
                    ? 'bg-slate-100 dark:bg-slate-900 text-blue-600 dark:text-blue-400 border-l-4 border-blue-600 dark:border-blue-500 pl-2'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900/50 border-l-4 border-transparent pl-2'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-4 h-4" /> Evidence Ledger
                  </div>
                  {evidenceLedger.length > 0 && (
                    <span className="bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 py-0.5 px-2 rounded-full text-[10px] font-bold">
                      {evidenceLedger.length}
                    </span>
                  )}
                </div>
              </button>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-950 p-4 sm:p-6 lg:p-8">
            <div className="max-w-6xl mx-auto">
              {/* Patient Profile Demographics Banner */}
              <PatientBanner
                patients={patients}
                selectedPatient={selectedPatient}
                onSelectPatient={handlePatientSelect}
              />


            {/* Tab Contents */}
            {selectedPatient ? (
              <div className="space-y-6">
                {/* 1. All-In-One Integrated Workspace */}
                {activeTab === 'workspace' && (
                  <div className="space-y-6">
                    {/* 7-Step Live Flowchart Banner */}
                    <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                          <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            Interactive 7-Step Clinical AI Pipeline
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono font-semibold border border-slate-200 dark:border-slate-700">
                              Live APIs Active
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                            Raw Text &rarr; Gemini NER &rarr; ICD-11, RxNorm, LOINC, UCUM &rarr; FHIR Bundle &rarr; Contradiction Radar &rarr; Doctor Sign-off.
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => setActiveTab('live-flow')}
                        className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold border border-slate-200 dark:border-slate-700 flex items-center gap-2 transition-all flex-shrink-0 cursor-pointer"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                        Open Live Pipeline
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

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

                {/* 7. Live 7-Step Clinical AI Pipeline (Flowchart) */}
                {activeTab === 'live-flow' && (
                  <LiveClinicalFlowVisualizer
                    key={selectedPatient.id}
                    patient={selectedPatient}
                    patientId={selectedPatient.id}
                    doctorId={currentUser?.hospitalId || currentUser?.id || 'DOC-CMC-01'}
                    doctorName={currentUser?.fullName || 'Dr. Aravind Swamy, MD'}
                  />
                )}
              </div>
            ) : (
              <div className="p-16 text-center text-slate-400">
                <p>Loading patient profiles from healthcare database...</p>
              </div>
            )}
            </div>
          </main>
        </div>
      )}
      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-4 text-center text-xs text-slate-500 dark:text-slate-400">
        <p>EN NANBA Clinical Intelligence Platform • Proof of Concept (POC) Architecture • 100% Self-Hosted & Secure</p>
      </footer>
    </div>
  );
}

