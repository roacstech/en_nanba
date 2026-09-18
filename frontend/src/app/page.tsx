'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { Stethoscope } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { PatientDashboard } from '../components/PatientDashboard';
import { AuthPortal } from '../components/AuthPortal';
import { PatientOnboardingFlow } from '../components/PatientOnboardingFlow';
import { ClientPocDashboard } from '../components/ClientPocDashboard';
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
          {/* VIEW 2: DOCTOR CLINICAL AI WORKSPACE                                      */}
          {/* ========================================================================= */}
          {selectedPatient ? (
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
              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md">
                Search or select a patient from the top navigation bar to open their Clinical AI Workspace.
              </p>
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

