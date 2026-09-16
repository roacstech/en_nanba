'use client';

import React, { useState } from 'react';
import {
  Heart,
  Activity,
  ShieldAlert,
  User,
  AlertCircle,
  CheckCircle,
  FileText,
  LogOut,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { api, AuthUser, PatientProfile, PatientIntakePayload } from '../lib/api';

interface PatientOnboardingFlowProps {
  user: AuthUser;
  onComplete: (updatedUser: AuthUser, patient: PatientProfile) => void;
  onLogout: () => void;
}

const COMMON_CONDITIONS = [
  'None',
  'Type 2 Diabetes',
  'Hypertension',
  'Asthma',
  'Hyperlipidemia',
  'Thyroid Disorder',
  'Migraine',
  'Coronary Artery Disease',
];

const COMMON_ALLERGIES = [
  'None',
  'Penicillin',
  'NSAIDs (Ibuprofen/Aspirin)',
  'Sulfa Drugs',
  'Cephalosporins',
  'Peanuts/Nuts',
  'Latex',
  'Contrast Media',
];

export const PatientOnboardingFlow: React.FC<PatientOnboardingFlowProps> = ({
  user,
  onComplete,
  onLogout,
}) => {
  // Demographics
  const [dob, setDob] = useState('1994-06-15');
  const [gender, setGender] = useState<'M' | 'F' | 'Other'>('F');
  const [bloodType, setBloodType] = useState('B+');
  const [phone, setPhone] = useState(user.phone || '+91 98765 43210');

  // Vitals
  const [bloodPressure, setBloodPressure] = useState('120/80');
  const [heartRate, setHeartRate] = useState(72);
  const [bloodGlucose, setBloodGlucose] = useState('95');
  const [oxygenSaturation, setOxygenSaturation] = useState(99);
  const [bmi, setBmi] = useState(22.5);

  // History & Symptoms
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [selectedAllergies, setSelectedAllergies] = useState<string[]>([]);
  const [customCondition, setCustomCondition] = useState('');
  const [customAllergy, setCustomAllergy] = useState('');
  const [medications, setMedications] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Calculate age from DOB
  const calculateAge = (dobString: string): number => {
    const birthDate = new Date(dobString);
    const difference = Date.now() - birthDate.getTime();
    const ageDate = new Date(difference);
    return Math.abs(ageDate.getUTCFullYear() - 1970) || 30;
  };

  const handleToggleCondition = (cond: string) => {
    if (cond === 'None') {
      setSelectedConditions(['None']);
      return;
    }
    setSelectedConditions(prev => {
      const filtered = prev.filter(c => c !== 'None');
      return filtered.includes(cond) ? filtered.filter(c => c !== cond) : [...filtered, cond];
    });
  };

  const handleToggleAllergy = (allg: string) => {
    if (allg === 'None') {
      setSelectedAllergies(['None']);
      return;
    }
    setSelectedAllergies(prev => {
      const filtered = prev.filter(a => a !== 'None');
      return filtered.includes(allg) ? filtered.filter(a => a !== allg) : [...filtered, allg];
    });
  };

  const handleAddCustomCondition = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && customCondition.trim()) {
      e.preventDefault();
      if (!selectedConditions.includes(customCondition.trim())) {
        setSelectedConditions(prev => [...prev.filter(c => c !== 'None'), customCondition.trim()]);
      }
      setCustomCondition('');
    }
  };

  const handleAddCustomAllergy = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && customAllergy.trim()) {
      e.preventDefault();
      if (!selectedAllergies.includes(customAllergy.trim())) {
        setSelectedAllergies(prev => [...prev.filter(a => a !== 'None'), customAllergy.trim()]);
      }
      setCustomAllergy('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    const calculatedAge = calculateAge(dob);
    const parsedMeds = medications
      .split(',')
      .map(m => m.trim())
      .filter(m => m.length > 0);

    const payload: PatientIntakePayload = {
      fullName: user.fullName,
      age: calculatedAge,
      gender,
      dob,
      phone,
      bloodType,
      vitals: {
        bloodPressure: bloodPressure.trim().includes('mmHg') ? bloodPressure.trim() : `${bloodPressure.trim()} mmHg`,
        heartRate: Number(heartRate) || 72,
        bloodGlucose: bloodGlucose.trim().includes('mg/dL') ? bloodGlucose.trim() : `${bloodGlucose.trim()} mg/dL`,
        oxygenSaturation: Number(oxygenSaturation) || 98,
        bmi: Number(bmi) || 22.0,
      },
      chronicConditions: selectedConditions.filter(c => c !== 'None'),
      allergies: selectedAllergies.filter(a => a !== 'None'),
      currentMedications: parsedMeds,
      symptomsNotes: symptoms.trim() || undefined,
    };

    try {
      const res = await api.completePatientOnboarding(user.id, payload);
      onComplete(res.user, res.patient);
    } catch (err: any) {
      setErrorMessage(err.message || 'Failed to complete patient onboarding. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-4 sm:py-8 px-4 animate-fadeIn">
      {/* Top Banner */}
      <div className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-6 text-slate-800 dark:text-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 dark:bg-blue-950/40 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
            <User className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900 dark:text-white">Welcome, {user.fullName}!</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Account: <strong className="text-blue-600 dark:text-blue-400">{user.email}</strong> • Initial Registration Complete
            </p>
          </div>
        </div>

        <button
          onClick={onLogout}
          className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center gap-1.5 transition-all cursor-pointer"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Log Out</span>
        </button>
      </div>

      {/* Mandatory Onboarding Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-6 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Mandatory Clinical Onboarding Gate</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Establish Your Digital Health Record
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
            Before entering your personal dashboard, please provide your baseline physiological metrics, blood group, and medical history. This information is indexed into our zero-leakage clinical graph and activates real-time drug contraindication radar monitoring.
          </p>
        </div>

        {errorMessage && (
          <div className="mb-6 p-4 rounded-xl bg-rose-50 dark:bg-rose-950/70 border border-rose-300 dark:border-rose-800 text-rose-800 dark:text-rose-200 text-xs flex items-center gap-2.5">
            <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* SECTION 1: Demographics */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
              <User className="w-4 h-4 text-blue-600" />
              <span>1. Baseline Demographics</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  value={dob}
                  onChange={e => setDob(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm font-medium text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Biological Gender *
                </label>
                <select
                  value={gender}
                  onChange={e => setGender(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm font-medium text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                >
                  <option value="M">Male (M)</option>
                  <option value="F">Female (F)</option>
                  <option value="Other">Other / Non-Binary</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Blood Group *
                </label>
                <select
                  value={bloodType}
                  onChange={e => setBloodType(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm font-medium text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                >
                  <option value="A+">A Positive (A+)</option>
                  <option value="A-">A Negative (A-)</option>
                  <option value="B+">B Positive (B+)</option>
                  <option value="B-">B Negative (B-)</option>
                  <option value="AB+">AB Positive (AB+)</option>
                  <option value="AB-">AB Negative (AB-)</option>
                  <option value="O+">O Positive (O+)</option>
                  <option value="O-">O Negative (O-)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Primary Contact Phone *
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm font-medium text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  required
                />
              </div>
            </div>
          </div>

          {/* SECTION 2: Physiological Vitals */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
              <Activity className="w-4 h-4 text-blue-600" />
              <span>2. Baseline Physiological Vitals</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Blood Pressure *
                </label>
                <input
                  type="text"
                  value={bloodPressure}
                  onChange={e => setBloodPressure(e.target.value)}
                  placeholder="120/80"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm font-medium text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  required
                />
                <span className="text-[10px] text-slate-400">Systolic / Diastolic mmHg</span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Heart Rate (bpm) *
                </label>
                <input
                  type="number"
                  value={heartRate}
                  onChange={e => setHeartRate(Number(e.target.value))}
                  placeholder="72"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm font-medium text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  required
                />
                <span className="text-[10px] text-slate-400">Resting beats/min</span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Fasting Glucose
                </label>
                <input
                  type="text"
                  value={bloodGlucose}
                  onChange={e => setBloodGlucose(e.target.value)}
                  placeholder="95"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm font-medium text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                />
                <span className="text-[10px] text-slate-400">mg/dL</span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  SpO2 Saturation (%) *
                </label>
                <input
                  type="number"
                  min="70"
                  max="100"
                  value={oxygenSaturation}
                  onChange={e => setOxygenSaturation(Number(e.target.value))}
                  placeholder="98"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm font-medium text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  required
                />
                <span className="text-[10px] text-slate-400">Optimal: 95-100%</span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  BMI (kg/m²) *
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={bmi}
                  onChange={e => setBmi(Number(e.target.value))}
                  placeholder="22.5"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm font-medium text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  required
                />
                <span className="text-[10px] text-slate-400">Body Mass Index</span>
              </div>
            </div>
          </div>

          {/* SECTION 3: Clinical Conditions & Allergies */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-blue-600" />
              <span>3. Chronic Conditions & Drug Allergies</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Conditions */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-2">
                  Existing Chronic Conditions
                </label>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {COMMON_CONDITIONS.map(cond => {
                    const isSelected = selectedConditions.includes(cond);
                    return (
                      <button
                        type="button"
                        key={cond}
                        onClick={() => handleToggleCondition(cond)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-blue-600 text-white shadow-sm'
                            : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                        }`}
                      >
                        {isSelected ? '✓ ' : '+ '}
                        {cond}
                      </button>
                    );
                  })}
                </div>
                <input
                  type="text"
                  value={customCondition}
                  onChange={e => setCustomCondition(e.target.value)}
                  onKeyDown={handleAddCustomCondition}
                  placeholder="Type other condition and press Enter..."
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                />
              </div>

              {/* Allergies */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-2">
                  Known Drug & Food Allergies
                </label>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {COMMON_ALLERGIES.map(allg => {
                    const isSelected = selectedAllergies.includes(allg);
                    return (
                      <button
                        type="button"
                        key={allg}
                        onClick={() => handleToggleAllergy(allg)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-rose-600 text-white shadow-sm'
                            : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                        }`}
                      >
                        {isSelected ? '✓ ' : '+ '}
                        {allg}
                      </button>
                    );
                  })}
                </div>
                <input
                  type="text"
                  value={customAllergy}
                  onChange={e => setCustomAllergy(e.target.value)}
                  onKeyDown={handleAddCustomAllergy}
                  placeholder="Type other allergy and press Enter..."
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-rose-500"
                />
              </div>
            </div>
          </div>

          {/* SECTION 4: Medications & Symptoms */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-600" />
              <span>4. Current Medications & Present Symptoms</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Current Medications (comma separated)
                </label>
                <input
                  type="text"
                  value={medications}
                  onChange={e => setMedications(e.target.value)}
                  placeholder="e.g. Metformin 500mg, Atorvastatin 20mg"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm font-medium text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Current Symptoms / Reason for Registration
                </label>
                <textarea
                  rows={2}
                  value={symptoms}
                  onChange={e => setSymptoms(e.target.value)}
                  placeholder="e.g. Mild headache and dizziness after exertion..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm font-medium text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 resize-none"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <CheckCircle className="w-4 h-4 text-blue-600" />
              <span>Baseline data will automatically sync with PostgreSQL and Neo4j.</span>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full sm:w-auto py-3.5 px-8 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-blue-600/30 transition-all cursor-pointer disabled:opacity-50"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  Generating Health Record...
                </span>
              ) : (
                <>
                  <span>Complete Medical Profile & Activate Dashboard</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
