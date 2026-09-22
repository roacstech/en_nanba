'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { Stethoscope, BookOpen, ChevronDown } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { PatientDashboard } from '../components/PatientDashboard';
import { AuthPortal } from '../components/AuthPortal';
import { PatientOnboardingFlow } from '../components/PatientOnboardingFlow';
import { ClientPocDashboard } from '../components/ClientPocDashboard';
import { Icd11DiseaseCatalog } from '../components/Icd11DiseaseCatalog';
import { TerminologyCatalog } from '../components/TerminologyCatalog';
import {
  api,
  AuthUser,
  PatientProfile,
  SystemStatus,
} from '../lib/api';

export default function DoctorWorkspacePage() {
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);
  const [isAuthChecking, setIsAuthChecking] = useState<boolean>(true);

  const [systemStatus, setSystemStatus] = useState<SystemStatus | null>(null);
  const [patients, setPatients] = useState<PatientProfile[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<PatientProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);


  // Role Separation States
  const [activePatient, setActivePatient] = useState<PatientProfile | null>(null);
  const [patientPortalMode, setPatientPortalMode] = useState<'report' | 'intake'>('report');
  const [isIntakeModalOpen, setIsIntakeModalOpen] = useState<boolean>(false);
  const [doctorMenu, setDoctorMenu] = useState<'workspace' | 'icd11' | 'snomed' | 'loinc' | 'ucum' | 'atc' | 'dicom' | 'fhir' | 'procedures'>('icd11');
  const [isTerminologyDropdownOpen, setIsTerminologyDropdownOpen] = useState(false);
  const terminologyDropdownRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (terminologyDropdownRef.current && !terminologyDropdownRef.current.contains(event.target as Node)) {
        setIsTerminologyDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
        if (!activePatient) setActivePatient(patientList[0]);
        // For doctor workspace, do not auto-select a patient on startup.
        // Patient clinical dashboard screen appears only when searched or selected.
      }
    } catch (e) {
      console.error('Failed loading system status', e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadInitialData();
  }, []);

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

  const handlePatientSelect = (p: PatientProfile | null) => {
    setSelectedPatient(p);
    if (p) {
      setDoctorMenu('workspace');
    }
  };

  const handleRefresh = () => {
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
      // Doctor logged in: keep selectedPatient as null so welcome & search screen appears first
      setSelectedPatient(null);
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
      {currentUser.role === 'patient' ? (
        <div className="flex-1 flex flex-col min-w-0">
          <Navbar
            systemStatus={systemStatus}
            currentRole={currentUser.role}
            activePatient={activePatient}
            currentUser={currentUser}
            onLogout={handleLogout}
            onEditProfile={() => setIsIntakeModalOpen(true)}
            onPatientUpdated={handlePatientUpdated}
            patients={patients}
            selectedPatient={selectedPatient}
            onSelectPatient={handlePatientSelect}
          />
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
        </div>
      ) : (
        <div className="flex-1 w-full flex flex-col lg:flex-row">
          {/* ========================================================================= */}
          {/* DOCTOR DASHBOARD SIDEBAR NAVIGATION                                       */}
          {/* ========================================================================= */}
          <aside className="w-full lg:w-[280px] shrink-0 flex flex-col bg-[#052c54] text-white shadow-2xl border-r border-[#0b4275] z-50">
            <div className="p-5 flex flex-col gap-3 h-full">
              
              {/* Brand Logo inside sidebar for full-height layout */}
              <div className="flex items-center gap-3 shrink-0 mb-6 px-2">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <Stethoscope className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg tracking-tight text-white">EN NANBA</span>
              </div>

              <h3 className="text-[11px] font-bold uppercase text-blue-200/70 tracking-wider px-2 mt-2 mb-1">
                Clinical Workflow
              </h3>
              
              <button
                type="button"
                onClick={() => setDoctorMenu('workspace')}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm transition-all cursor-pointer w-full text-left ${
                  doctorMenu === 'workspace'
                    ? 'bg-white/15 text-white shadow-sm font-bold border border-white/10'
                    : 'bg-transparent text-white/80 hover:bg-white/10 hover:text-white font-medium'
                }`}
              >
                <Stethoscope className="w-5 h-5 shrink-0" />
                <span className="flex-1">Patient Workspace</span>
                {selectedPatient && (
                  <span className="px-2 py-0.5 text-[10px] rounded-md bg-white/20 text-white font-mono font-bold shrink-0">
                    {selectedPatient.id}
                  </span>
                )}
              </button>


                  <div className="w-full h-px bg-white/10 my-2" />

                  <h3 className="text-[11px] font-bold uppercase text-blue-200/70 tracking-wider px-2 mb-1">
                    Knowledge Base
                  </h3>

                  <div className="mt-2 w-full">
                    <div className="space-y-0.5 max-h-[60vh] overflow-y-auto pr-1 custom-scrollbar">
                      {[
                        { id: 'icd11', title: 'Disease/condition', value: 'ICD-11' },
                        { id: 'snomed', title: 'Detailed clinical terminology', value: 'SNOMED CT, where useful' },
                        { id: 'loinc', title: 'Laboratory tests/results', value: 'LOINC' },
                        { id: 'ucum', title: 'Units', value: 'UCUM' },
                        { id: 'atc', title: 'Medicines', value: 'ATC + appropriate drug terminology' },
                        { id: 'dicom', title: 'Medical imaging', value: 'DICOM' },
                        { id: 'fhir', title: 'Interoperability', value: 'FHIR' },
                        { id: 'procedures', title: 'Procedures/interventions', value: 'Appropriate ICD-11/ICHI/SNOMED representation depending on use case' },
                      ].map((term) => (
                        <button
                          key={term.id}
                          type="button"
                          onClick={() => {
                            setDoctorMenu(term.id as any);
                          }}
                          className={`w-full flex flex-col items-start px-3 py-2.5 rounded-lg text-xs transition-colors text-left cursor-pointer ${
                            doctorMenu === term.id 
                              ? 'bg-blue-600/40 border border-blue-500/30 shadow-sm' 
                              : 'border border-transparent hover:bg-white/10'
                          }`}
                        >
                          <span className={`font-bold ${doctorMenu === term.id ? 'text-white' : 'text-slate-200'}`}>{term.title}</span>
                          <span className={`${doctorMenu === term.id ? 'text-blue-200' : 'text-blue-300/80'} mt-0.5`}>{term.value}</span>
                        </button>
                      ))}
                    </div>
                  </div>

            </div>
            
            {doctorMenu === 'workspace' && selectedPatient && (
              <div className="px-5 pb-5 mt-auto">
                <button
                  type="button"
                  onClick={() => setDoctorMenu('icd11')}
                  className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer border border-white/10 shadow-sm"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Search ICD-11 Directory</span>
                </button>
              </div>
            )}
          </aside>

          {/* ========================================================================= */}
          {/* MAIN CONTENT AREA                                                         */}
          {/* ========================================================================= */}
          <div className="flex-1 flex flex-col min-w-0 relative">
            <Navbar
              systemStatus={systemStatus}
              currentRole={currentUser.role}
              activePatient={activePatient}
              currentUser={currentUser}
              onLogout={handleLogout}
              onEditProfile={() => setIsIntakeModalOpen(true)}
              onPatientUpdated={handlePatientUpdated}
              patients={patients}
              selectedPatient={selectedPatient}
              onSelectPatient={handlePatientSelect}
            />
            
            <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 overflow-y-auto">
              {/* Render Active Doctor View */}
            {doctorMenu === 'icd11' ? (
              <Icd11DiseaseCatalog />
            ) : doctorMenu === 'snomed' ? (
              <TerminologyCatalog terminologyId="snomed" title="SNOMED CT Official Catalog" />
            ) : doctorMenu === 'loinc' ? (
              <TerminologyCatalog terminologyId="loinc" title="LOINC Official Catalog" />
            ) : doctorMenu === 'ucum' ? (
              <TerminologyCatalog terminologyId="ucum" title="UCUM Official Catalog" />
            ) : doctorMenu === 'atc' ? (
              <TerminologyCatalog terminologyId="atc" title="ATC Official Catalog" />
            ) : doctorMenu === 'dicom' ? (
              <TerminologyCatalog terminologyId="dicom" title="DICOM Official Catalog" />
            ) : doctorMenu === 'fhir' ? (
              <TerminologyCatalog terminologyId="fhir" title="FHIR Official Catalog" />
            ) : doctorMenu === 'procedures' ? (
              <TerminologyCatalog terminologyId="procedures" title="ICHI Official Catalog" />
            ) : selectedPatient ? (
              <ClientPocDashboard
                key={selectedPatient.id}
                patients={patients}
                selectedPatient={selectedPatient}
                onSelectPatient={handlePatientSelect}
                doctorId={currentUser?.hospitalId || currentUser?.id || 'CMC-CARD-001'}
                doctorName={currentUser?.fullName || 'Dr. Aravind Swamy, MD (Cardiology)'}
              />
            ) : (
              <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-3xl bg-blue-600/10 dark:bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5 text-blue-600 dark:text-blue-400 shadow-sm">
                  <Stethoscope className="w-8 h-8" />
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
                  Welcome, {currentUser?.fullName ? (currentUser.fullName.startsWith('Dr.') ? currentUser.fullName : `Dr. ${currentUser.fullName}`) : 'Dr. Aravind Swamy'}
                </h1>
                {/* <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mb-6">
                  Search or select a patient from the top navigation bar to open their Clinical AI Workspace, or explore the ICD-11 disease directory.
                </p> */}
                {/* <button
                  type="button"
                  onClick={() => setDoctorMenu('icd11')}
                  className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md shadow-blue-500/20 hover:opacity-95 transition-all cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Explore ICD-11 Diseases Catalog</span>
                </button> */}
              </div>
            )}
          </main>
        </div>
      </div>
      )}
    </div>
  );
}

