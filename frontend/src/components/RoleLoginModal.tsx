'use client';

import React, { useState } from 'react';
import {
  Stethoscope,
  User,
  ShieldCheck,
  ArrowRight,
  Activity,
  X,
  UserCheck,
  UserPlus,
  HeartPulse,
  Building2,
} from 'lucide-react';
import { PatientProfile } from '../lib/api';

interface RoleLoginModalProps {
  isOpen: boolean;
  currentRole: 'doctor' | 'patient';
  patients: PatientProfile[];
  selectedPatient: PatientProfile | null;
  onClose: () => void;
  onSelectRole: (role: 'doctor' | 'patient', patient?: PatientProfile | null, isRegisteringNew?: boolean) => void;
}

export const RoleLoginModal: React.FC<RoleLoginModalProps> = ({
  isOpen,
  currentRole,
  patients,
  selectedPatient,
  onClose,
  onSelectRole,
}) => {
  const [activeTab, setActiveTab] = useState<'doctor' | 'patient'>(currentRole);
  const [pickedPatient, setPickedPatient] = useState<PatientProfile | null>(selectedPatient || (patients[0] || null));

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden transition-all">
        {/* Modal Header */}
        <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-extrabold tracking-tight">EN NANBA Clinical Intelligence</h2>
              <p className="text-xs text-blue-100">Select Portal Role & Perspective for POC Demonstration</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Modal"
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Portal Role Selector Tabs */}
        {/* <div className="grid grid-cols-2 p-3 gap-2 bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
          <button
            onClick={() => setActiveTab('doctor')}
            className={`py-3 px-4 rounded-2xl flex items-center justify-center gap-2.5 font-bold text-sm transition-all cursor-pointer ${
              activeTab === 'doctor'
                ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-400 shadow-md border border-slate-200/80 dark:border-slate-800'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <Stethoscope className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            Doctor Workspace
          </button>

          <button
            onClick={() => setActiveTab('patient')}
            className={`py-3 px-4 rounded-2xl flex items-center justify-center gap-2.5 font-bold text-sm transition-all cursor-pointer ${
              activeTab === 'patient'
                ? 'bg-white dark:bg-slate-900 text-cyan-700 dark:text-cyan-400 shadow-md border border-slate-200/80 dark:border-slate-800'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <User className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            Patient Portal
          </button>
        </div> */}

        {/* Modal Body */}
        <div className="p-6">
          {activeTab === 'doctor' ? (
            /* Doctor Persona View */
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800/60 flex items-start gap-3">
                <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-md shadow-teal-600/20">
                  DR
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">Dr. S. K. Raman</h3>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-teal-100 dark:bg-teal-900/60 text-teal-700 dark:text-teal-300 border border-teal-300 dark:border-teal-700">
                      Chief Cardiologist
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Hospital Department of Cardiology & Internal Medicine • License: IND-TN-88210
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                <p className="font-semibold text-slate-900 dark:text-white mb-1.5 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-teal-600" /> Capabilities in Doctor Workspace:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                    <span>Neo4j Clinical Graph Fabric</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                    <span>Gap & Contradiction Radar™</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                    <span>AI Differential Diagnosis (Gemini)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                    <span>Review & Prescribe (Accept/Modify)</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    onSelectRole('doctor');
                    onClose();
                  }}
                  className="w-full py-3 px-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <UserCheck className="w-4 h-4" /> Enter Doctor Intelligence Workspace
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Patient Persona View */
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Select Patient Account or Enter as New:
                </p>
                <button
                  onClick={() => {
                    onSelectRole('patient', null, true);
                    onClose();
                  }}
                  className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <UserPlus className="w-3.5 h-3.5" /> + New Patient Registration
                </button>
              </div>

              {/* Patient List */}
              <div className="grid grid-cols-1 gap-2.5 max-h-56 overflow-y-auto pr-1">
                {patients.map(p => {
                  const isSelected = pickedPatient?.id === p.id;
                  return (
                    <div
                      key={p.id}
                      onClick={() => setPickedPatient(p)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'border-blue-500 bg-blue-50/70 dark:bg-blue-950/30 shadow-sm'
                          : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${
                          isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                        }`}>
                          {p.fullName.slice(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-slate-900 dark:text-white">{p.fullName}</span>
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                              {p.id}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                            {p.age} yrs • {p.gender === 'M' ? 'Male' : 'Female'} • Blood: <strong className="text-rose-500">{p.bloodType}</strong>
                          </p>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400">
                          {p.chronicConditions.length} conditions
                        </span>
                        <p className="text-[10px] text-slate-400">BP: {p.vitals.bloodPressure}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Enter Patient Portal Button */}
              <div className="pt-2">
                <button
                  disabled={!pickedPatient}
                  onClick={() => {
                    if (pickedPatient) {
                      onSelectRole('patient', pickedPatient);
                      onClose();
                    }
                  }}
                  className="w-full py-3 px-4 rounded-2xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold text-sm shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <HeartPulse className="w-4 h-4" /> Enter Patient Portal as {pickedPatient?.fullName || 'Patient'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Privacy & Compliance Footer */}
          <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>EN NANBA Zero-PHI Leakage Architecture • Self-Hosted & HIPAA-Compliant Ready</span>
          </div>
        </div>
      </div>
    </div>
  );
};
