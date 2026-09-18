'use client';

import React from 'react';
import { User, Heart, Activity, AlertTriangle, FileText, Droplet, ShieldAlert, ChevronDown, Clock } from 'lucide-react';
import { PatientProfile } from '../lib/api';

interface PatientBannerProps {
  patients: PatientProfile[];
  selectedPatient: PatientProfile | null;
  onSelectPatient: (patient: PatientProfile) => void;
}

export const PatientBanner: React.FC<PatientBannerProps> = ({
  patients,
  selectedPatient,
  onSelectPatient,
}) => {
  if (!selectedPatient) {
    return (
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 mb-6 text-center text-slate-500 dark:text-slate-400">
        <User className="w-8 h-8 mx-auto mb-2 text-slate-400 opacity-60" />
        <p className="font-semibold text-sm">No Patients Registered in Database</p>
        <p className="text-xs mt-1 text-slate-400">Newly registered patients will automatically appear here once they complete their intake form.</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm dark:shadow-xl mb-6 transition-colors">
      {/* Top Patient Switcher Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 dark:bg-blue-950/40 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-lg">
            {selectedPatient.fullName.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">{selectedPatient.fullName}</h1>
              <span className="px-2 py-0.5 text-xs rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono border border-slate-200 dark:border-slate-700">
                {selectedPatient.id}
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mt-1">
              <span>{selectedPatient.age} yrs • {selectedPatient.gender === 'M' ? 'Male' : 'Female'}</span>
              <span>DOB: {selectedPatient.dob}</span>
              <span>Blood: <strong className="text-rose-600 dark:text-rose-400 font-bold">{selectedPatient.bloodType}</strong></span>
              <span>Ph: {selectedPatient.phone}</span>
            </div>
          </div>
        </div>

        {/* Patient Switcher Dropdown */}
        <div className="flex items-center gap-3">
          <label htmlFor="patient-select" className="text-xs text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap">
            Select Case:
          </label>
          <div className="relative">
            <select
              id="patient-select"
              value={selectedPatient.id}
              onChange={(e) => {
                const patient = patients.find((p) => p.id === e.target.value);
                if (patient) onSelectPatient(patient);
              }}
              className="appearance-none bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-semibold rounded-xl pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50 cursor-pointer shadow-sm transition-colors"
            >
              {patients.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.fullName} ({p.id})
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400 dark:text-slate-500">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Vitals, Chronic Conditions, Past Diseases & Known Allergies Grid */}
      <div className={`grid grid-cols-1 ${selectedPatient.pastDiseases && selectedPatient.pastDiseases.length > 0 ? 'md:grid-cols-4' : 'md:grid-cols-3'} gap-4 pt-4 text-xs`}>
        {/* Vitals */}
        <div className="bg-slate-50 dark:bg-slate-950/60 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800/80 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 font-semibold mb-2">
            <span className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-bold">
              <Activity className="w-4 h-4" /> Real-Time Vitals
            </span>
            <span className="text-[10px] text-slate-400">Today's Record</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-white dark:bg-slate-900/80 p-2 rounded-lg text-center border border-slate-200 dark:border-slate-800">
              <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">BP (mmHg)</div>
              <div className="text-sm font-bold text-amber-600 dark:text-amber-400">{selectedPatient.vitals.bloodPressure}</div>
            </div>
            <div className="bg-white dark:bg-slate-900/80 p-2 rounded-lg text-center border border-slate-200 dark:border-slate-800">
              <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Heart Rate</div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">{selectedPatient.vitals.heartRate} bpm</div>
            </div>
            <div className="bg-white dark:bg-slate-900/80 p-2 rounded-lg text-center border border-slate-200 dark:border-slate-800">
              <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Glucose</div>
              <div className="text-sm font-bold text-rose-600 dark:text-rose-400">{selectedPatient.vitals.bloodGlucose || 'N/A'}</div>
            </div>
          </div>
        </div>

        {/* Chronic Conditions */}
        <div className="bg-slate-50 dark:bg-slate-950/60 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800/80 flex flex-col justify-between">
          <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-semibold mb-2">
            <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" /> Active Diagnoses (ICD-11)
          </div>
          <div className="flex flex-wrap gap-1.5">
            {selectedPatient.chronicConditions.map((cond, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/50 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800/50 font-medium"
              >
                {cond}
              </span>
            ))}
          </div>
        </div>

        {/* Past Diseases if any */}
        {selectedPatient.pastDiseases && selectedPatient.pastDiseases.length > 0 && (
          <div className="bg-slate-50 dark:bg-slate-950/60 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800/80 flex flex-col justify-between">
            <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-semibold mb-2">
              <Clock className="w-4 h-4 text-purple-600 dark:text-purple-400" /> Past Diseases / History
            </div>
            <div className="flex flex-wrap gap-1.5">
              {selectedPatient.pastDiseases.map((item, idx) => {
                const year = typeof item === 'string' ? (item.match(/\b(19|20)\d{2}\b/)?.[0] || 'Prior') : item.year;
                const name = typeof item === 'string' ? item.replace(/\b(19|20)\d{2}\b/, '').trim() : item.condition;
                return (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-purple-50 dark:bg-purple-950/50 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800/50 font-medium flex items-center gap-1"
                  >
                    <span className="font-bold text-purple-600 dark:text-purple-400">{year}:</span> {name}
                  </span>
                );
              })}
            </div>
          </div>
        )}

        {/* Known Allergies */}
        <div className="bg-slate-50 dark:bg-slate-950/60 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800/80 flex flex-col justify-between">
          <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-semibold mb-2">
            <ShieldAlert className="w-4 h-4 text-rose-600 dark:text-rose-400" /> Known Allergies / Hazards
          </div>
          <div className="flex flex-wrap gap-1.5">
            {selectedPatient.allergies.length > 0 ? (
              selectedPatient.allergies.map((allergy, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800/60 font-semibold flex items-center gap-1"
                >
                  <AlertTriangle className="w-3 h-3 text-rose-500 dark:text-rose-400" />
                  {allergy}
                </span>
              ))
            ) : (
              <span className="text-slate-400">No known drug allergies reported</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
