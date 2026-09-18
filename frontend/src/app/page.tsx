'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { Stethoscope, BookOpen } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { PatientDashboard } from '../components/PatientDashboard';
import { AuthPortal } from '../components/AuthPortal';
import { PatientOnboardingFlow } from '../components/PatientOnboardingFlow';
import { ClientPocDashboard } from '../components/ClientPocDashboard';
import { Icd11DiseaseCatalog } from '../components/Icd11DiseaseCatalog';
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
  const [doctorMenu, setDoctorMenu] = useState<'workspace' | 'diseases'>('workspace');

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
      {/* Top Navbar with Searchable Patient Selector & Profile Dropdown */}
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
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* ========================================================================= */}
          {/* DOCTOR DASHBOARD TOP MENU NAVIGATION                                      */}
          {/* ========================================================================= */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => setDoctorMenu('workspace')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  doctorMenu === 'workspace'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
                }`}
              >
                <Stethoscope className="w-4 h-4" />
                <span>Patient Clinical Workspace</span>
                {selectedPatient && (
                  <span className="px-2 py-0.5 text-[10px] rounded-md bg-white/20 text-white font-mono font-bold">
                    {selectedPatient.id}
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={() => setDoctorMenu('diseases')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  doctorMenu === 'diseases'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>ICD-11 Diseases</span>
                <span className={`px-2 py-0.5 text-[10px] rounded-full font-bold border transition-colors ${
                  doctorMenu === 'diseases'
                    ? 'bg-white/20 text-white border-white/30'
                    : 'bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800'
                }`}>
                  17,000+ Entries
                </span>
              </button>
            </div>

            {doctorMenu === 'workspace' && selectedPatient && (
              <button
                type="button"
                onClick={() => setDoctorMenu('diseases')}
                className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Look up Disease in ICD-11 Directory</span>
              </button>
            )}
          </div>

          {/* Render Active Doctor View */}
          {doctorMenu === 'diseases' ? (
            <Icd11DiseaseCatalog />
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
              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mb-6">
                Search or select a patient from the top navigation bar to open their Clinical AI Workspace, or explore the ICD-11 disease directory.
              </p>
              <button
                type="button"
                onClick={() => setDoctorMenu('diseases')}
                className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md shadow-blue-500/20 hover:opacity-95 transition-all cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Explore ICD-11 Diseases Catalog</span>
              </button>
            </div>
          )}
        </main>
      )}
      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-4 text-center text-xs text-slate-500 dark:text-slate-400">
        <p>EN NANBA Clinical Intelligence Platform • Proof of Concept (POC) Architecture • 100% Self-Hosted & Secure</p>
      </footer>
    </div>
  );
}

