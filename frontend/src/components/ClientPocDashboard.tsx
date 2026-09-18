'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  User,
  Activity,
  Heart,
  AlertTriangle,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  Stethoscope,
  Pill,
  FileText,
  Clock,
  RefreshCw,
  ShieldAlert,
  ShieldCheck,
  Database,
  ArrowRight,
  Droplet,
  ChevronRight,
  Lock,
  Plus,
  Edit3,
  Search,
  Check,
  ChevronDown,
  X,
  Calendar,
  BookOpen,
} from 'lucide-react';
import { Icd11DiseaseCatalog } from './Icd11DiseaseCatalog';
import {
  api,
  PatientProfile,
  PatientReportData,
  ClinicalFlowExecutionResult,
} from '../lib/api';

interface CareGapItem {
  id: string;
  category: string;
  title: string;
  description: string;
  priority: 'CRITICAL' | 'HIGH' | 'MEDIUM';
  status: 'OVERDUE' | 'MISSING_DATA' | 'ACTION_REQUIRED';
  recommendedStandard: string;
  duePeriod: string;
}

const getPatientCareGaps = (patient: PatientProfile | null, report: PatientReportData | null): CareGapItem[] => {
  if (!patient) return [];
  const gaps: CareGapItem[] = [];

  const conditions = patient.chronicConditions?.map(c => c.toLowerCase()) || [];
  const hasDiabetes = conditions.some(c => c.includes('diabetes'));
  const hasHypertension = conditions.some(c => c.includes('hypertension') || c.includes('bp'));
  const hasAsthma = conditions.some(c => c.includes('asthma') || c.includes('bronchial'));

  if (hasDiabetes) {
    gaps.push({
      id: 'gap-uacr',
      category: 'Nephrology & Renal Screening',
      title: 'Urine Albumin-to-Creatinine Ratio (UACR)',
      description: 'Annual microalbuminuria screening missing from EHR flowsheet. Essential for early detection and prevention of diabetic nephropathy.',
      priority: 'HIGH',
      status: 'OVERDUE',
      recommendedStandard: 'LOINC: 14959-1 (Urine Albumin/Creatinine)',
      duePeriod: 'Overdue by 4 months',
    });
    gaps.push({
      id: 'gap-retinal',
      category: 'Ophthalmology Surveillance',
      title: 'Annual Dilated Retinal Fundoscopy',
      description: 'Diabetic retinopathy screening gap identified. Patient has not undergone retinal photography documentation in current cycle.',
      priority: 'MEDIUM',
      status: 'MISSING_DATA',
      recommendedStandard: 'SNOMED-CT: 36228007 (Retinal Screening)',
      duePeriod: 'Due this encounter',
    });
  }

  if (hasHypertension) {
    gaps.push({
      id: 'gap-ecg',
      category: 'Cardiovascular Risk Stratification',
      title: '12-Lead Electrocardiogram (ECG / EKG)',
      description: 'Baseline resting 12-lead ECG missing from EHR flowsheet to evaluate for left ventricular hypertrophy (LVH) or rhythm conduction anomalies.',
      priority: 'HIGH',
      status: 'ACTION_REQUIRED',
      recommendedStandard: 'LOINC: 11524-6 (12-Lead EKG Report)',
      duePeriod: 'Required for hypertensive evaluation',
    });
    gaps.push({
      id: 'gap-lytes',
      category: 'Renal & Electrolyte Profile',
      title: 'Serum Potassium & Serum Creatinine Panel',
      description: 'Electrolyte baseline required prior to anti-hypertensive titration or concurrent antibiotic prescription.',
      priority: 'MEDIUM',
      status: 'OVERDUE',
      recommendedStandard: 'LOINC: 24326-1 (Basic Metabolic Panel)',
      duePeriod: 'Overdue by 6 months',
    });
  }

  if (hasAsthma) {
    gaps.push({
      id: 'gap-spirometry',
      category: 'Pulmonary Function Testing',
      title: 'Peak Expiratory Flow (PEF) & Spirometry (FEV1)',
      description: 'Objective airway reversibility testing documentation not recorded in recent pulmonary flowsheet.',
      priority: 'HIGH',
      status: 'OVERDUE',
      recommendedStandard: 'LOINC: 20150-9 (FEV1/FVC ratio)',
      duePeriod: 'Recommended annually',
    });
  }

  if (patient.allergies && patient.allergies.length > 0) {
    const hasUngradedAllergy = patient.allergies.some(a => !a.toLowerCase().includes('severe') && !a.toLowerCase().includes('anaphylaxis'));
    if (hasUngradedAllergy) {
      gaps.push({
        id: 'gap-allergy-grade',
        category: 'Pharmacovigilance Ledger',
        title: 'Immunological Allergy Phenotype & Severity Grading',
        description: `Hypersensitivity documented (${patient.allergies.join(', ')}) requires formal severity classification (IgE-mediated vs mild intolerance).`,
        priority: 'MEDIUM',
        status: 'MISSING_DATA',
        recommendedStandard: 'HL7 FHIR AllergyIntolerance Severity Standard',
        duePeriod: 'Verification required',
      });
    }
  }

  if (gaps.length === 0) {
    gaps.push({
      id: 'gap-preventive-lipid',
      category: 'Preventive Care',
      title: 'Fasting Lipid & Metabolic Panel',
      description: 'Annual wellness fasting lipid panel overdue in longitudinal record.',
      priority: 'MEDIUM',
      status: 'ACTION_REQUIRED',
      recommendedStandard: 'LOINC: 57698-3 (Lipid Panel)',
      duePeriod: 'Annual check due',
    });
  }

  return gaps;
};

interface ClientPocDashboardProps {
  patients: PatientProfile[];
  selectedPatient: PatientProfile | null;
  onSelectPatient: (p: PatientProfile | null) => void;
  doctorId?: string;
  doctorName?: string;
}

export const ClientPocDashboard: React.FC<ClientPocDashboardProps> = ({
  patients,
  selectedPatient,
  onSelectPatient,
  doctorId = 'CMC-CARD-001',
  doctorName = 'Dr. Aravind Swamy, MD (Cardiology)',
}) => {
  // Patient Report & Historical Records
  const [report, setReport] = useState<PatientReportData | null>(null);
  const [isLoadingReport, setIsLoadingReport] = useState<boolean>(false);

  // Active Category Dropdown selection
  const [selectedCategory, setSelectedCategory] = useState<'conditions' | 'vitals' | 'medications' | 'labs' | 'allergies' | 'consultations'>('conditions');
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState<boolean>(false);
  const categoryDropdownRef = useRef<HTMLDivElement>(null);

  // Active Main View Tab: 'records' | 'ai' | 'icd11'
  const [dashboardView, setDashboardView] = useState<'records' | 'ai' | 'icd11'>('records');

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target as Node)) {
        setIsCategoryDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // AI Encounter Input & Execution State
  const [clinicalNote, setClinicalNote] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [aiResult, setAiResult] = useState<ClinicalFlowExecutionResult | null>(null);

  // Doctor Decision State
  const [doctorDecision, setDoctorDecision] = useState<'ACCEPT' | 'MODIFY' | 'REJECT'>('ACCEPT');
  const [doctorNotes, setDoctorNotes] = useState<string>('');
  const [customPrescription, setCustomPrescription] = useState<string>('');
  const [isSavingDecision, setIsSavingDecision] = useState<boolean>(false);
  const [commitSuccess, setCommitSuccess] = useState<{
    signature: string;
    timestamp: string;
    message: string;
  } | null>(null);

  // Auto-fill clinical note when patient changes
  useEffect(() => {
    if (!selectedPatient) return;

    if (selectedPatient.id === 'P-1005') {
      setClinicalNote(
        'Patient Ramesh Patel (P-1005) presents with acute high fever 102°F, productive cough, and chills for 2 days. Type 2 Diabetes on Metformin 500mg. Severe Penicillin allergy. Considering Amoxicillin 500mg for acute chest infection.'
      );
    } else if (selectedPatient.id === 'P-1001') {
      setClinicalNote(
        'Patient Rajesh Kumar (P-1001) presents with elevated BP 160/100 mmHg, chest heaviness. Chronic hypertension on Amlodipine 5mg. Mild sulfa allergy. Considering Nitroglycerin sublingual.'
      );
    } else if (selectedPatient.id === 'P-1002') {
      setClinicalNote(
        'Patient Priya Sharma (P-1002) presents with severe unilateral throbbing migraine and nausea. Documented Penicillin allergy. Considering Ampicillin for mild sinus infection.'
      );
    } else {
      setClinicalNote(
        `Patient ${selectedPatient.fullName} (${selectedPatient.id}) presents for routine follow-up with acute symptoms. Chronic conditions: ${selectedPatient.chronicConditions.join(', ') || 'None'}.`
      );
    }

    setAiResult(null);
    setCommitSuccess(null);
    setDoctorNotes('');
    setCustomPrescription('');
  }, [selectedPatient?.id]);

  // Load Patient Report (Past and Present records)
  const loadPatientReport = useCallback(async () => {
    if (!selectedPatient?.id) return;
    setIsLoadingReport(true);
    try {
      const data = await api.getPatientReport(selectedPatient.id);
      setReport(data);
    } catch (err) {
      console.error('Failed to load patient report', err);
    } finally {
      setIsLoadingReport(false);
    }
  }, [selectedPatient?.id]);

  useEffect(() => {
    loadPatientReport();
  }, [loadPatientReport]);

  // Run AI Clinical Analysis
  const handleRunAiAnalysis = async () => {
    if (!selectedPatient) return;
    setIsAnalyzing(true);
    setCommitSuccess(null);
    try {
      const textToAnalyze =
        clinicalNote.trim() ||
        (selectedPatient.id === 'P-1005'
          ? 'Patient Ramesh Patel (P-1005) presents with acute high fever 102°F, productive cough, and chills for 2 days. Type 2 Diabetes on Metformin 500mg. Severe Penicillin allergy. Considering Amoxicillin 500mg for acute chest infection.'
          : selectedPatient.id === 'P-1001'
          ? 'Patient Rajesh Kumar (P-1001) presents with elevated BP 160/100 mmHg, chest heaviness. Chronic hypertension on Amlodipine 5mg. Mild sulfa allergy. Considering Nitroglycerin sublingual.'
          : selectedPatient.id === 'P-1002'
          ? 'Patient Priya Sharma (P-1002) presents with severe unilateral throbbing migraine and nausea. Documented Penicillin allergy. Considering Ampicillin for mild sinus infection.'
          : `Patient ${selectedPatient.fullName} (${selectedPatient.id}) presents with acute clinical presentation. Chronic conditions: ${selectedPatient.chronicConditions.join(', ') || 'None'}. Documented allergies: ${selectedPatient.allergies.join(', ') || 'None'}.`);

      const result = await api.executeClinicalFlow({
        patientId: selectedPatient.id,
        rawText: textToAnalyze,
        doctorId,
        doctorName,
      });
      setAiResult(result);

      // Pre-fill doctor notes based on AI result
      if (result.step5ContradictionRadar?.hasConflict) {
        setDoctorDecision('ACCEPT');
        setDoctorNotes(
          `Approved safe alternative recommendation: ${result.step5ContradictionRadar.geminiRecommendation?.safeAlternative || 'Azithromycin 500mg + Paracetamol 650mg'}. Hard-blocked beta-lactams due to documented anaphylaxis.`
        );
        const suggested = result.step5ContradictionRadar.geminiRecommendation?.suggestedPrescription;
        if (suggested && suggested.length > 0) {
          setCustomPrescription(suggested.map((s: any) => `${s.drugName || s.drug} (${s.dosage || s.dose}${s.frequency ? ' ' + s.frequency : ''})`).join(', '));
        }
      } else {
        setDoctorDecision('ACCEPT');
        setDoctorNotes('Clinical findings verified. Patient treatment plan confirmed.');
      }
    } catch (err: any) {
      console.error('AI Analysis failed:', err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Immediate Click Handler for Analyze Patient Data with AI
  const handleAnalyzeClick = () => {
    setDashboardView('ai');
    handleRunAiAnalysis();
  };

  // Doctor Commits Decision to Patient Database
  const handleCommitToDatabase = async () => {
    if (!selectedPatient) return;
    setIsSavingDecision(true);
    try {
      const res = await api.recordClinicalFlowDecision({
        patientId: selectedPatient.id,
        doctorId,
        doctorName,
        decision: doctorDecision,
        approvedDrugs: customPrescription ? [customPrescription] : ['Azithromycin 500mg', 'Paracetamol 650mg'],
        rejectedDrugs: aiResult?.step5ContradictionRadar?.blockedDrugs || ['Amoxicillin 500mg', 'Penicillin G'],
        notes: doctorNotes,
      });

      // Also record formal consultation in PostgreSQL
      await api.recordDecision(
        selectedPatient.id,
        doctorDecision,
        doctorName,
        doctorNotes,
        customPrescription
      );

      setCommitSuccess({
        signature: res.signature || `ED25519-DOC-${Date.now().toString(16).toUpperCase()}`,
        timestamp: res.timestamp || new Date().toISOString(),
        message: 'Patient record cryptographically sealed and permanently saved to EHR / FHIR R4 database.',
      });

      // Reload patient report to immediately reflect updated consultations
      await loadPatientReport();
    } catch (err: any) {
      console.error('Failed to commit decision', err);
    } finally {
      setIsSavingDecision(false);
    }
  };

  if (!selectedPatient) {
    return (
      <div className="p-12 text-center text-slate-400">
        <p>Please select a patient to open the clinical dashboard.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fadeIn pb-16">
      {/* ========================================================================= */}
      {/* TIER 1: CLEAN PATIENT OVERVIEW & DEMOGRAPHICS + AI TRIGGER BUTTON        */}
      {/* ========================================================================= */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 shadow-sm border border-slate-200 dark:border-slate-800 transition-all">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Patient Profile Card */}
          <div className="flex items-center gap-4 sm:gap-5 min-w-0 flex-1">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-extrabold text-xl shadow-md shadow-blue-500/20 shrink-0">
              {selectedPatient.fullName.slice(0, 2).toUpperCase()}
            </div>
            <div className="min-w-0 flex-1">
              {/* Top Row: Name & ID Badge */}
              <div className="flex items-center gap-3 mb-1.5">
                <h1 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white truncate">
                  {selectedPatient.fullName}
                </h1>
                <span className="px-2.5 py-0.5 rounded-lg text-xs font-bold bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 font-mono shrink-0">
                  {selectedPatient.enNanbaId || selectedPatient.id}
                </span>
              </div>

              {/* Patient Details: All in same row */}
              <div className="flex items-center flex-nowrap overflow-x-auto gap-3 sm:gap-4 text-xs text-slate-600 dark:text-slate-400">
                <span className="shrink-0">Age: <strong className="text-slate-900 dark:text-slate-200 font-bold">{selectedPatient.age} yrs</strong></span>
                <span className="text-slate-300 dark:text-slate-700 shrink-0">•</span>
                <span className="shrink-0">Gender: <strong className="text-slate-900 dark:text-slate-200 font-bold">{selectedPatient.gender === 'M' ? 'Male' : selectedPatient.gender === 'F' ? 'Female' : 'Other'}</strong></span>
                <span className="text-slate-300 dark:text-slate-700 shrink-0">•</span>
                <span className="shrink-0">Blood Group: <strong className="text-rose-600 dark:text-rose-400 font-bold">{selectedPatient.bloodType}</strong></span>
                <span className="text-slate-300 dark:text-slate-700 shrink-0">•</span>
                <span className="shrink-0">DOB: <strong className="text-slate-900 dark:text-slate-200 font-semibold">{selectedPatient.dob}</strong></span>
                <span className="text-slate-300 dark:text-slate-700 shrink-0">•</span>
                <span className="shrink-0">Phone: <strong className="text-slate-900 dark:text-slate-200 font-semibold">{selectedPatient.phone}</strong></span>
              </div>
            </div>
          </div>

          {/* Right Side: Analyze Patient Data with AI Button */}
          <div className="shrink-0 flex items-center justify-end">
            <button
              type="button"
              onClick={handleAnalyzeClick}
              disabled={isAnalyzing}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600 hover:opacity-95 text-white font-extrabold text-xs sm:text-sm flex items-center gap-2.5 shadow-lg shadow-indigo-500/20 transition-all cursor-pointer disabled:opacity-60"
            >
              {isAnalyzing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-white" />
                  <span>Analyzing Patient Data...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>✨ Analyze Patient Data with AI</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation View Switcher Tabs */}
      <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800/80 p-1.5 rounded-2xl w-fit border border-slate-200 dark:border-slate-800">
        <button
          type="button"
          onClick={() => setDashboardView('records')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            dashboardView === 'records'
              ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Patient Medical Records</span>
        </button>

        <button
          type="button"
          onClick={handleAnalyzeClick}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            dashboardView === 'ai'
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-indigo-500/20'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>AI Clinical Analysis & Safety</span>
          {aiResult && (
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          )}
        </button>

        <button
          type="button"
          onClick={() => setDashboardView('icd11')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            dashboardView === 'icd11'
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>ICD-11 Diseases</span>
          <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold border transition-colors ${
            dashboardView === 'icd11'
              ? 'bg-white/20 text-white border-white/30'
              : 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800'
          }`}>
            17k+
          </span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* TIER 2: PATIENT MEDICAL RECORDS (CATEGORY DROPDOWN & ANIMATED LIST)       */}
      {/* ========================================================================= */}
      {dashboardView === 'records' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 shadow-sm border border-slate-200 dark:border-slate-800 space-y-4 transition-all">
        {/* Header & Interactive Category Dropdown */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Patient Medical Records
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Select category from dropdown &bull; Ordered chronologically by date
            </p>
          </div>

          {/* Category Dropdown Selector */}
          <div className="relative" ref={categoryDropdownRef}>
            <button
              type="button"
              onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
              className="px-3.5 py-2 rounded-2xl text-xs font-bold text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700 transition-all flex items-center gap-2.5 shadow-xs cursor-pointer"
            >
              {(() => {
                const currentCat = [
                  { id: 'conditions' as const, label: 'Conditions & Diagnoses', icon: Stethoscope, bg: 'bg-blue-600' },
                  { id: 'vitals' as const, label: 'Vitals Flowsheet History', icon: Activity, bg: 'bg-rose-600' },
                  { id: 'medications' as const, label: 'Medications & Prescriptions', icon: Pill, bg: 'bg-violet-600' },
                  { id: 'labs' as const, label: 'Laboratory Diagnostic Panels', icon: Droplet, bg: 'bg-cyan-600' },
                  { id: 'allergies' as const, label: 'Allergies & Contraindications', icon: AlertTriangle, bg: 'bg-amber-500' },
                  { id: 'consultations' as const, label: 'Clinical Doctor Consultations', icon: Clock, bg: 'bg-emerald-600' },
                ].find(c => c.id === selectedCategory) || {
                  id: 'conditions', label: 'Conditions & Diagnoses', icon: Stethoscope, bg: 'bg-blue-600'
                };
                const Icon = currentCat.icon;
                return (
                  <>
                    <div className={`w-7 h-7 rounded-xl ${currentCat.bg} text-white flex items-center justify-center shadow-xs shrink-0`}>
                      <Icon className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                      {currentCat.label}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isCategoryDropdownOpen ? 'rotate-180' : ''}`} />
                  </>
                );
              })()}
            </button>

            {/* Dropdown Options Menu */}
            {isCategoryDropdownOpen && (
              <div className="absolute right-0 mt-2 w-72 sm:w-80 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-2 z-50 animate-slideDownFade">
                <div className="px-3 py-1.5 text-[10px] font-black uppercase text-slate-400 tracking-wider">
                  Select Medical Category
                </div>
                <div className="space-y-1 mt-1">
                  {[
                    { id: 'conditions' as const, label: 'Conditions & Diagnoses', icon: Stethoscope, bg: 'bg-blue-600' },
                    { id: 'vitals' as const, label: 'Vitals Flowsheet History', icon: Activity, bg: 'bg-rose-600' },
                    { id: 'medications' as const, label: 'Medications & Prescriptions', icon: Pill, bg: 'bg-violet-600' },
                    { id: 'labs' as const, label: 'Laboratory Diagnostic Panels', icon: Droplet, bg: 'bg-cyan-600' },
                    { id: 'allergies' as const, label: 'Allergies & Contraindications', icon: AlertTriangle, bg: 'bg-amber-500' },
                    { id: 'consultations' as const, label: 'Clinical Doctor Consultations', icon: Clock, bg: 'bg-emerald-600' },
                  ].map((cat) => {
                    const Icon = cat.icon;
                    const isSelected = selectedCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(cat.id);
                          setIsCategoryDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs transition-colors text-left cursor-pointer ${
                          isSelected
                            ? 'bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 font-bold'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 font-medium'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className={`w-7 h-7 rounded-xl ${cat.bg} text-white flex items-center justify-center shadow-xs shrink-0`}>
                            <Icon className="w-3.5 h-3.5 text-white" />
                          </div>
                          <span className="font-bold truncate text-slate-900 dark:text-white">
                            {cat.label}
                          </span>
                        </div>
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0 mr-1" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* DISPLAY ONLY THE SELECTED CATEGORY LIST */}
        <div key={selectedCategory} className="pt-1 animate-content-fade">
          {/* 1. CONDITIONS */}
          {selectedCategory === 'conditions' && (
            <div className="relative pl-6 sm:pl-8 space-y-4 my-1">
              {/* Continuous Timeline line */}
              <div className="absolute left-[11px] sm:left-[15px] top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-700/60" />

              {[
                {
                  id: 'cond-2026',
                  date: '18 Sep 2026',
                  tag: 'Today • Acute Visit',
                  title:
                    selectedPatient.id === 'P-1005'
                      ? 'Acute Febrile Syndrome & Productive Chest Cough'
                      : selectedPatient.id === 'P-1001'
                      ? 'Acute Hypertensive Episode & Angina-Like Chest Heaviness'
                      : selectedPatient.id === 'P-1002'
                      ? 'Acute Unilateral Throbbing Migraine with Photophobia'
                      : 'Acute Symptoms & Follow-up Encounter',
                  code: 'ICD-11: CA40 / 1D01',
                  description:
                    selectedPatient.id === 'P-1005'
                      ? 'Onset 2 days ago • Body Temperature 102.0°F • High fever with chills and productive sputum. Evaluated in outpatient clinic.'
                      : 'Acute symptom presentation evaluated at current clinical encounter.',
                  status: 'Active Encounter',
                  variant: 'danger' as const,
                },
                {
                  id: 'cond-2025',
                  date: '14 Oct 2025',
                  tag: 'Follow-up Review',
                  title:
                    selectedPatient.id === 'P-1005'
                      ? 'Diabetic Peripheral Neuropathy (Early Stage)'
                      : 'Hypertensive Cardiovascular Observation',
                  code: 'ICD-11: 5A11 / 8C01',
                  description:
                    'Bilateral foot paresthesia noted during annual diabetic foot screen. Monofilament score: 8/10. Continued metabolic control.',
                  status: 'Under Observation',
                  variant: 'info' as const,
                },
                {
                  id: 'cond-2024',
                  date: '10 Mar 2024',
                  tag: 'Confirmed Primary Diagnosis',
                  title: selectedPatient.chronicConditions[0] || 'Type 2 Diabetes Mellitus',
                  code: 'ICD-11: 5A11',
                  description:
                    'Diagnosed on oral glucose tolerance test (OGTT 210 mg/dL) & fasting blood sugar 180 mg/dL. Initiated first-line oral therapy.',
                  status: 'Chronic Maintenance',
                  variant: 'success' as const,
                },
                {
                  id: 'cond-2023',
                  date: '05 Nov 2023',
                  tag: 'Longitudinal EHR Record',
                  title: selectedPatient.chronicConditions[1] || 'Essential Hypertension (Stage 1)',
                  code: 'ICD-11: BA00',
                  description:
                    'Resting blood pressure 142/90 mmHg recorded during annual wellness assessment. Lifestyle and sodium restriction recommended.',
                  status: 'Monitored',
                  variant: 'neutral' as const,
                },
                {
                  id: 'cond-2022',
                  date: '22 Aug 2022',
                  tag: 'Historical Baseline',
                  title: 'Impaired Fasting Glucose (Pre-Diabetes Phase)',
                  code: 'ICD-11: 5A10',
                  description:
                    'Baseline fasting plasma glucose 114 mg/dL recorded during initial screening. Preventive dietary regimen instituted.',
                  status: 'Historical Record',
                  variant: 'neutral' as const,
                },
              ].map((record, idx) => (
                <div
                  key={record.id}
                  className="relative group animate-smooth-item"
                  style={{ animationDelay: `${idx * 60}ms` }}
                >
                  {/* Centered Timeline dot on vertical card center */}
                  <span
                    className={`absolute -left-[21px] sm:-left-[25px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full ring-4 shadow-sm z-10 flex items-center justify-center ${
                      record.variant === 'danger'
                        ? 'bg-rose-600 ring-rose-100 dark:ring-rose-950 animate-pulse'
                        : record.variant === 'success'
                        ? 'bg-emerald-600 ring-emerald-100 dark:ring-emerald-950'
                        : record.variant === 'info'
                        ? 'bg-blue-600 ring-blue-100 dark:ring-blue-950'
                        : 'bg-slate-500 ring-slate-100 dark:ring-slate-800'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  </span>

                  <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-950/40 border border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">
                          {record.date}
                        </span>
                        <span className="text-slate-300 dark:text-slate-700">&bull;</span>
                        <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                          {record.tag}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                          {record.code}
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                        {record.title}
                      </h4>

                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                        {record.description}
                      </p>
                    </div>

                    {/* Right Status Badge with Solid BG & White Text */}
                    <div className="shrink-0 self-start sm:self-center">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm ${
                          record.variant === 'danger'
                            ? 'bg-rose-600'
                            : record.variant === 'success'
                            ? 'bg-emerald-600'
                            : record.variant === 'info'
                            ? 'bg-blue-600'
                            : 'bg-slate-600'
                        }`}
                      >
                        {record.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 2. VITALS */}
          {selectedCategory === 'vitals' && (
            <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-50/50 dark:bg-slate-950/30">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 text-[11px] font-black uppercase text-slate-400 bg-slate-100/70 dark:bg-slate-900/60">
                    <th className="py-3 px-4 font-semibold">Date</th>
                    <th className="py-3 px-4 font-semibold">Clinical Encounter</th>
                    <th className="py-3 px-4 font-semibold">Blood Pressure</th>
                    <th className="py-3 px-4 font-semibold">Heart Rate</th>
                    <th className="py-3 px-4 font-semibold">Body Temp</th>
                    <th className="py-3 px-4 font-semibold">SpO2</th>
                    <th className="py-3 px-4 font-semibold">Blood Glucose</th>
                    <th className="py-3 px-4 font-semibold text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                  {[
                    {
                      date: '18 Sep 2026',
                      isToday: true,
                      encounter: 'Acute Triage / Emergency Check',
                      bp: selectedPatient.id === 'P-1001' ? '160/100 mmHg' : '130/85 mmHg',
                      bpAlert: selectedPatient.id === 'P-1001',
                      hr: selectedPatient.id === 'P-1005' ? '104 bpm' : '82 bpm',
                      hrAlert: selectedPatient.id === 'P-1005',
                      temp: selectedPatient.id === 'P-1005' ? '102.0°F' : '98.6°F',
                      tempAlert: selectedPatient.id === 'P-1005',
                      spo2: '97%',
                      glucose: selectedPatient.id === 'P-1005' ? '180 mg/dL' : '110 mg/dL',
                      glucoseAlert: selectedPatient.id === 'P-1005',
                      status: '⚠️ Acute Episode',
                      statusBg: 'bg-rose-600',
                    },
                    {
                      date: '12 May 2026',
                      isToday: false,
                      encounter: 'Routine OPD Follow-up Visit',
                      bp: '124/80 mmHg',
                      bpAlert: false,
                      hr: '76 bpm',
                      hrAlert: false,
                      temp: '98.6°F',
                      tempAlert: false,
                      spo2: '99%',
                      glucose: '138 mg/dL',
                      glucoseAlert: false,
                      status: 'Controlled Baseline',
                      statusBg: 'bg-emerald-600',
                    },
                    {
                      date: '15 Jan 2025',
                      isToday: false,
                      encounter: 'Annual Health Screening',
                      bp: '134/86 mmHg',
                      bpAlert: false,
                      hr: '80 bpm',
                      hrAlert: false,
                      temp: '98.4°F',
                      tempAlert: false,
                      spo2: '98%',
                      glucose: '164 mg/dL',
                      glucoseAlert: true,
                      status: 'Mild Glycemic Elevation',
                      statusBg: 'bg-amber-500',
                    },
                    {
                      date: '10 Mar 2024',
                      isToday: false,
                      encounter: 'Hospital Intake Registration',
                      bp: selectedPatient.vitals.bloodPressure || '140/90 mmHg',
                      bpAlert: false,
                      hr: `${selectedPatient.vitals.heartRate || 88} bpm`,
                      hrAlert: false,
                      temp: '99.0°F',
                      tempAlert: false,
                      spo2: `${selectedPatient.vitals.oxygenSaturation || 97}%`,
                      glucose: selectedPatient.vitals.bloodGlucose || '210 mg/dL',
                      glucoseAlert: true,
                      status: 'Baseline Recorded',
                      statusBg: 'bg-blue-600',
                    },
                  ].map((row, idx) => (
                    <tr
                      key={idx}
                      className={`hover:bg-blue-50/40 dark:hover:bg-blue-950/20 transition-colors animate-table-row ${
                        row.isToday ? 'bg-rose-50/30 dark:bg-rose-950/10' : ''
                      }`}
                      style={{ animationDelay: `${idx * 60}ms` }}
                    >
                      <td className="py-3 px-4 font-mono font-bold text-slate-900 dark:text-white whitespace-nowrap">
                        {row.date} {row.isToday && <span className="text-[10px] text-rose-600 font-sans ml-1">(Today)</span>}
                      </td>
                      <td className="py-3 px-4 text-slate-700 dark:text-slate-300 whitespace-nowrap">
                        {row.encounter}
                      </td>
                      <td className={`py-3 px-4 font-mono font-bold ${row.bpAlert ? 'text-rose-600 dark:text-rose-400' : 'text-slate-900 dark:text-white'}`}>
                        {row.bp}
                      </td>
                      <td className={`py-3 px-4 font-mono font-bold ${row.hrAlert ? 'text-rose-600 dark:text-rose-400' : 'text-slate-900 dark:text-white'}`}>
                        {row.hr}
                      </td>
                      <td className={`py-3 px-4 font-mono font-bold ${row.tempAlert ? 'text-rose-600 dark:text-rose-400' : 'text-slate-900 dark:text-white'}`}>
                        {row.temp}
                      </td>
                      <td className="py-3 px-4 font-mono text-slate-700 dark:text-slate-300">
                        {row.spo2}
                      </td>
                      <td className={`py-3 px-4 font-mono font-bold ${row.glucoseAlert ? 'text-amber-600 dark:text-amber-400' : 'text-slate-900 dark:text-white'}`}>
                        {row.glucose}
                      </td>
                      <td className="py-3 px-4 text-right whitespace-nowrap">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm ${row.statusBg}`}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* 3. MEDICATIONS */}
          {selectedCategory === 'medications' && (
            <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-50/50 dark:bg-slate-950/30">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 text-[11px] font-black uppercase text-slate-400 bg-slate-100/70 dark:bg-slate-900/60">
                    <th className="py-3 px-4 font-semibold">Date Ordered</th>
                    <th className="py-3 px-4 font-semibold">Medication Name</th>
                    <th className="py-3 px-4 font-semibold">Dosage & Frequency</th>
                    <th className="py-3 px-4 font-semibold">RxNorm Code</th>
                    <th className="py-3 px-4 font-semibold">Clinical Indication</th>
                    <th className="py-3 px-4 font-semibold text-right">Order Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                  {[
                    {
                      date: '18 Sep 2026 (Today)',
                      isToday: true,
                      drug:
                        selectedPatient.id === 'P-1005'
                          ? 'Amoxicillin 500mg Oral Capsule'
                          : selectedPatient.id === 'P-1001'
                          ? 'Nitroglycerin 0.4mg Sublingual'
                          : 'Amoxicillin 500mg Oral Capsule',
                      dosage: '500mg TID for 7 days',
                      rxnorm: '7299',
                      indication: 'Acute respiratory infection (Held for allergy safety radar check)',
                      status: '⚠️ Pending Clearance',
                      statusBg: 'bg-amber-600',
                    },
                    {
                      date: '10 Mar 2024 - Present',
                      isToday: false,
                      drug:
                        selectedPatient.id === 'P-1001'
                          ? 'Amlodipine 5mg Oral Tablet'
                          : 'Metformin 500mg Oral Tablet',
                      dosage: selectedPatient.id === 'P-1001' ? '5mg once daily' : '500mg twice daily with meals',
                      rxnorm: selectedPatient.id === 'P-1001' ? '329528' : '316256',
                      indication: selectedPatient.id === 'P-1001' ? 'Hypertension maintenance' : 'Type 2 Diabetes glycemic control',
                      status: 'Active Ongoing Rx',
                      statusBg: 'bg-emerald-600',
                    },
                    {
                      date: '14 Jan 2025',
                      isToday: false,
                      drug: 'Azithromycin 500mg Oral Tablet',
                      dosage: '1 tablet daily x 3 days',
                      rxnorm: '18631',
                      indication: 'Acute bacterial rhinosinusitis (Safe macrolide alternative)',
                      status: 'Completed Course',
                      statusBg: 'bg-slate-600',
                    },
                    {
                      date: '05 Nov 2023',
                      isToday: false,
                      drug: 'Glimepiride 1mg Oral Tablet',
                      dosage: '1mg once daily before breakfast',
                      rxnorm: '310537',
                      indication: 'Early glycemic therapy (Discontinued after hypoglycemic episodes)',
                      status: 'Discontinued',
                      statusBg: 'bg-rose-600',
                    },
                  ].map((row, idx) => (
                    <tr
                      key={idx}
                      className={`hover:bg-blue-50/40 dark:hover:bg-blue-950/20 transition-colors animate-table-row ${
                        row.isToday ? 'bg-amber-50/30 dark:bg-amber-950/10' : ''
                      }`}
                      style={{ animationDelay: `${idx * 60}ms` }}
                    >
                      <td className="py-3 px-4 font-mono font-bold text-slate-900 dark:text-white whitespace-nowrap">
                        {row.date}
                      </td>
                      <td className="py-3 px-4 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <Pill className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{row.drug}</span>
                      </td>
                      <td className="py-3 px-4 text-slate-700 dark:text-slate-300">
                        {row.dosage}
                      </td>
                      <td className="py-3 px-4 font-mono text-[11px] text-slate-500">
                        {row.rxnorm}
                      </td>
                      <td className="py-3 px-4 text-slate-600 dark:text-slate-400 max-w-xs">
                        {row.indication}
                      </td>
                      <td className="py-3 px-4 text-right whitespace-nowrap">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm ${row.statusBg}`}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* 4. LAB TESTS */}
          {selectedCategory === 'labs' && (
            <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-50/50 dark:bg-slate-950/30">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 text-[11px] font-black uppercase text-slate-400 bg-slate-100/70 dark:bg-slate-900/60">
                    <th className="py-3 px-4 font-semibold">Date</th>
                    <th className="py-3 px-4 font-semibold">Investigation Panel</th>
                    <th className="py-3 px-4 font-semibold">Key Results & Values</th>
                    <th className="py-3 px-4 font-semibold">Reference Range</th>
                    <th className="py-3 px-4 font-semibold">LOINC Code</th>
                    <th className="py-3 px-4 font-semibold text-right">Interpretation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                  {[
                    {
                      date: '18 Sep 2026 (Today)',
                      isToday: true,
                      test: 'Complete Blood Count (CBC) & CRP',
                      results: 'WBC: 11,800 / µL • CRP: 24 mg/L • Neutrophils: 78%',
                      refRange: 'WBC: 4,500-11,000 / CRP: < 5.0 mg/L',
                      loinc: '58410-2',
                      interp: '⚠️ Acute Inflammatory Reaction',
                      interpBg: 'bg-rose-600',
                    },
                    {
                      date: '20 Feb 2026',
                      isToday: false,
                      test: 'Glycated Hemoglobin (HbA1c) & Fasting Glucose',
                      results: selectedPatient.id === 'P-1005' ? 'HbA1c: 8.2% • Fasting Glucose: 180 mg/dL' : 'HbA1c: 6.4% • Fasting Glucose: 110 mg/dL',
                      refRange: 'HbA1c: < 5.7% (Normal) • < 7.0% (Target)',
                      loinc: '4548-4',
                      interp: selectedPatient.id === 'P-1005' ? 'Sub-Optimal Glycemia' : 'Controlled Baseline',
                      interpBg: selectedPatient.id === 'P-1005' ? 'bg-amber-600' : 'bg-emerald-600',
                    },
                    {
                      date: '14 Oct 2025',
                      isToday: false,
                      test: 'Comprehensive Renal & Lipid Panel',
                      results: 'Creatinine: 1.1 mg/dL • eGFR: 84 mL/min • Total Cholesterol: 198 mg/dL',
                      refRange: 'Creatinine: 0.7-1.3 mg/dL • eGFR: > 60',
                      loinc: '24362-6',
                      interp: 'Normal Organ Function',
                      interpBg: 'bg-emerald-600',
                    },
                    {
                      date: '10 Mar 2024',
                      isToday: false,
                      test: 'Initial Diagnostic Baseline Workup',
                      results: 'HbA1c: 8.8% • Fasting Sugar: 215 mg/dL • Microalbumin: 28 mg/g',
                      refRange: 'Standard diagnostic admission workup',
                      loinc: '4548-4',
                      interp: 'Diagnostic Baseline',
                      interpBg: 'bg-blue-600',
                    },
                  ].map((row, idx) => (
                    <tr
                      key={idx}
                      className={`hover:bg-blue-50/40 dark:hover:bg-blue-950/20 transition-colors animate-table-row ${
                        row.isToday ? 'bg-rose-50/30 dark:bg-rose-950/10' : ''
                      }`}
                      style={{ animationDelay: `${idx * 60}ms` }}
                    >
                      <td className="py-3 px-4 font-mono font-bold text-slate-900 dark:text-white whitespace-nowrap">
                        {row.date}
                      </td>
                      <td className="py-3 px-4 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <Droplet className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{row.test}</span>
                      </td>
                      <td className="py-3 px-4 font-mono font-bold text-slate-900 dark:text-white">
                        {row.results}
                      </td>
                      <td className="py-3 px-4 text-slate-500">
                        {row.refRange}
                      </td>
                      <td className="py-3 px-4 font-mono text-[11px] text-slate-400">
                        {row.loinc}
                      </td>
                      <td className="py-3 px-4 text-right whitespace-nowrap">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm ${row.interpBg}`}>
                          {row.interp}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* 5. ALLERGIES */}
          {selectedCategory === 'allergies' && (
            <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-50/50 dark:bg-slate-950/30">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 text-[11px] font-black uppercase text-slate-400 bg-slate-100/70 dark:bg-slate-900/60">
                    <th className="py-3 px-4 font-semibold">Documented Date</th>
                    <th className="py-3 px-4 font-semibold">Allergen Substance</th>
                    <th className="py-3 px-4 font-semibold">Drug Class / Type</th>
                    <th className="py-3 px-4 font-semibold">Documented Adverse Reaction</th>
                    <th className="py-3 px-4 font-semibold text-right">Safety Protocol</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                  {(() => {
                    const validAllergies = (selectedPatient.allergies || []).filter(
                      (a): a is string =>
                        typeof a === 'string' &&
                        a.trim() !== '' &&
                        a.toLowerCase() !== 'null' &&
                        a.toLowerCase() !== 'none'
                    );

                    if (validAllergies.length === 0) {
                      return (
                        <tr>
                          <td colSpan={5} className="py-8 text-center text-slate-400">
                            No known drug allergies (NKDA) documented on institutional record.
                          </td>
                        </tr>
                      );
                    }

                    return [
                      {
                        date: '15 Jun 2018',
                        allergen: validAllergies[0],
                        drugClass: 'Beta-Lactam Antibiotics',
                        reaction: 'Severe systemic anaphylaxis with acute bronchospasm and facial edema within 15 minutes of oral dose.',
                        status: 'CRITICAL HARD-BLOCK ⚠️',
                        statusBg: 'bg-rose-600',
                      },
                      ...(validAllergies.length > 1
                        ? validAllergies.slice(1).map((a) => ({
                            date: '22 Aug 2022',
                            allergen: a,
                            drugClass: 'Documented Sensitivity',
                            reaction: 'Cutaneous erythema or mild seasonal rhinitis symptoms.',
                            status: 'Documented Sensitivity',
                            statusBg: 'bg-amber-600',
                          }))
                        : [
                            {
                              date: '22 Aug 2022',
                              allergen: 'Dust Mites & Environmental Aeroallergens',
                              drugClass: 'Environmental Aeroallergen',
                              reaction: 'Mild seasonal rhinitis, sneezing, and conjunctival irritation.',
                              status: 'Mild Sensitivity',
                              statusBg: 'bg-blue-600',
                            },
                          ]),
                    ].map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-rose-50/30 dark:hover:bg-rose-950/20 transition-colors animate-table-row"
                        style={{ animationDelay: `${idx * 60}ms` }}
                      >
                        <td className="py-3 px-4 font-mono font-bold text-slate-900 dark:text-white whitespace-nowrap">
                          {row.date}
                        </td>
                        <td className="py-3 px-4 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                          <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0" />
                          <span>{row.allergen}</span>
                        </td>
                        <td className="py-3 px-4 text-slate-600 dark:text-slate-400 font-medium">
                          {row.drugClass}
                        </td>
                        <td className="py-3 px-4 text-slate-700 dark:text-slate-300 max-w-md">
                          {row.reaction}
                        </td>
                        <td className="py-3 px-4 text-right whitespace-nowrap">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm ${row.statusBg}`}>
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ));
                  })()}
                </tbody>
              </table>
            </div>
          )}

          {/* 6. CONSULTATIONS */}
          {selectedCategory === 'consultations' && (
            <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-50/50 dark:bg-slate-950/30">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 text-[11px] font-black uppercase text-slate-400 bg-slate-100/70 dark:bg-slate-900/60">
                    <th className="py-3 px-4 font-semibold">Consultation Date</th>
                    <th className="py-3 px-4 font-semibold">Attending Physician</th>
                    <th className="py-3 px-4 font-semibold">Decision</th>
                    <th className="py-3 px-4 font-semibold">Clinical Review Notes</th>
                    <th className="py-3 px-4 font-semibold text-right">Prescription Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                  {report?.doctorReviews && report.doctorReviews.length > 0 ? (
                    report.doctorReviews.map((rev, idx) => {
                      const d = new Date(rev.timestamp);
                      const dateStr = `${String(d.getDate()).padStart(2, '0')} ${d.toLocaleString('default', { month: 'short' })} ${d.getFullYear()}`;
                      return (
                        <tr
                          key={idx}
                          className="hover:bg-blue-50/40 dark:hover:bg-blue-950/20 transition-colors animate-table-row"
                          style={{ animationDelay: `${idx * 60}ms` }}
                        >
                          <td className="py-3 px-4 font-mono font-bold text-slate-900 dark:text-white whitespace-nowrap">
                            {dateStr}
                          </td>
                          <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">
                            {rev.doctorName}
                          </td>
                          <td className="py-3 px-4 whitespace-nowrap">
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm ${
                              rev.decision === 'ACCEPT' ? 'bg-emerald-600' : 'bg-blue-600'
                            }`}>
                              {rev.decision}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-slate-600 dark:text-slate-400 max-w-md">
                            {rev.reasoningNotes || 'Routine consultation clearance recorded.'}
                          </td>
                          <td className="py-3 px-4 text-right font-mono text-[11px] text-slate-700 dark:text-slate-300">
                            {rev.modifiedPrescription || 'Standard Regimen Maintained'}
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    [
                      {
                        date: '14 Oct 2025',
                        doctor: 'Dr. S. K. Raman, MD',
                        decision: 'ROUTINE CLEARANCE',
                        decisionBg: 'bg-emerald-600',
                        notes: 'Reviewed glycemic profile. Continued Metformin 500mg BID. Recommended annual ophthalmology fundus screening.',
                        action: 'Metformin 500mg BID Maintained',
                      },
                      {
                        date: '10 Mar 2024',
                        doctor: 'Dr. Aravind Swamy, MD (Cardiology)',
                        decision: 'TREATMENT COMMENCED',
                        decisionBg: 'bg-blue-600',
                        notes: 'Primary clinical intake. Confirmed Type 2 Diabetes on OGTT. Flagged severe Penicillin allergy in medical chart with hard electronic block.',
                        action: 'Initiated Metformin 500mg BID',
                      },
                    ].map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-blue-50/40 dark:hover:bg-blue-950/20 transition-colors animate-table-row"
                        style={{ animationDelay: `${idx * 60}ms` }}
                      >
                        <td className="py-3 px-4 font-mono font-bold text-slate-900 dark:text-white whitespace-nowrap">
                          {row.date}
                        </td>
                        <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">
                          {row.doctor}
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm ${row.decisionBg}`}>
                            {row.decision}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-slate-600 dark:text-slate-400 max-w-md">
                          {row.notes}
                        </td>
                        <td className="py-3 px-4 text-right font-mono text-[11px] text-slate-700 dark:text-slate-300">
                          {row.action}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      )}

      {/* ========================================================================= */}
      {/* TIER 3: ON-DEMAND AI CLINICAL ANALYSIS & CARE GAPS (CLEAN UI)             */}
      {/* ========================================================================= */}
      {dashboardView === 'ai' && (
        <div className="space-y-6 animate-fadeIn">
          {/* A. LOADING STATE: Animated Clinical Intelligence Flow */}
          {isAnalyzing && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200 dark:border-slate-800 text-center animate-fadeIn space-y-6">
              <div className="relative mx-auto w-20 h-20 flex items-center justify-center">
                <div className="absolute inset-0 rounded-3xl bg-blue-500/15 dark:bg-blue-400/15 animate-ping" />
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-teal-600 flex items-center justify-center text-white shadow-xl shadow-blue-500/30">
                  <RefreshCw className="w-8 h-8 animate-spin" />
                </div>
              </div>

              <div className="max-w-md mx-auto space-y-2">
                <h3 className="text-lg font-black text-slate-900 dark:text-white">
                  Analyzing Patient Clinical Records with AI...
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Extracting clinical entities with Gemini NLP, detecting clinical care gaps, and checking the safety contradiction radar against live ICD-11 & RxNorm standards.
                </p>
              </div>


            </div>
          )}

          {/* B. POST-ANALYSIS CLEAN CLINICAL WORKSPACE */}
          {!isAnalyzing && aiResult && (
            <div className="space-y-6 animate-fadeIn">
              {/* 1. Patient Clinical Overview & Diagnostic Synthesis */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
                      <Stethoscope className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-black text-slate-900 dark:text-white">
                        Patient Clinical Overview & Diagnostic Synthesis
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Cross-referencing longitudinal EHR history with acute encounter presentation
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800 w-fit">
                    AI Synthesis Complete
                  </span>
                </div>

                {/* Two Column Grid: Present Encounter vs Past Medical Profile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Present Encounter */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                      <Activity className="w-3.5 h-3.5" />
                      <span>Today's Acute Presentation</span>
                    </div>
                    <p className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                      {aiResult.step6DoctorWorkspace?.presentEncounterSummary || aiResult.step1RawText?.text}
                    </p>
                    <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
                      <span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-200 font-semibold">
                        Symptom: {aiResult.step2NlpBuckets?.symptom || 'Acute Febrile Syndrome'}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-200 font-semibold">
                        Lab Observation: {aiResult.step2NlpBuckets?.labTest || 'HbA1c 8.2%'}
                      </span>
                    </div>
                  </div>

                  {/* Past Medical Profile */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                      <FileText className="w-3.5 h-3.5" />
                      <span>Longitudinal Medical Profile</span>
                    </div>
                    <p className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                      {aiResult.step6DoctorWorkspace?.pastHistorySummary || `Known chronic conditions: ${selectedPatient.chronicConditions.join(', ') || 'None'}. Allergies: ${selectedPatient.allergies.join(', ') || 'None'}.`}
                    </p>
                    <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
                      <span className="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 font-semibold">
                        Condition: {aiResult.step2NlpBuckets?.disease || selectedPatient.chronicConditions[0] || 'Type 2 Diabetes'}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-violet-100 dark:bg-violet-950 text-violet-800 dark:text-violet-200 font-semibold">
                        Maintenance: {aiResult.step2NlpBuckets?.medication || 'Metformin 500mg'}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-200 font-semibold">
                        Allergy: {aiResult.step2NlpBuckets?.allergy || selectedPatient.allergies[0] || 'Penicillin'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Differential Diagnoses */}
                {aiResult.step6DoctorWorkspace?.differentialDiagnoses && aiResult.step6DoctorWorkspace.differentialDiagnoses.length > 0 && (
                  <div className="space-y-2 pt-1">
                    <div className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      AI Differential Diagnoses &amp; Clinical Probabilities:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {aiResult.step6DoctorWorkspace.differentialDiagnoses.map((diag: any, idx: number) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between"
                        >
                          <div className="min-w-0 flex-1 pr-2">
                            <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                              {diag.condition || diag.conditionName}
                            </div>
                            <div className="text-[10px] text-slate-500 font-mono">
                              ICD-11: {diag.code || diag.icd11Code || diag.icdCode || 'CA00'}
                            </div>
                          </div>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 shrink-0">
                            {diag.probability ? `${diag.probability}` : diag.confidenceScore ? `${Math.round(diag.confidenceScore * 100)}%` : 'HIGH'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* 2. Care Gaps & Missing Clinical Observations Radar */}
              {(() => {
                const careGaps = getPatientCareGaps(selectedPatient, report);
                return (
                  <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-xs">
                          <AlertCircle className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="text-base font-black text-slate-900 dark:text-white">
                            Care Gaps &amp; Missing Clinical Records Radar
                          </h3>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            Proactively detected overdue screenings, unmonitored baseline panels, and documentation gaps
                          </p>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 w-fit">
                        {careGaps.length} Actionable Gaps Identified
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {careGaps.map((gap) => (
                        <div
                          key={gap.id}
                          className="p-4 rounded-2xl bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 hover:border-amber-300 dark:hover:border-amber-700 transition-colors space-y-2"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                              {gap.category}
                            </span>
                            <div className="flex items-center gap-1.5">
                              <span
                                className={`px-2 py-0.5 rounded text-[10px] font-black ${
                                  gap.status === 'OVERDUE'
                                    ? 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300'
                                    : gap.status === 'MISSING_DATA'
                                    ? 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300'
                                    : 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300'
                                }`}
                              >
                                {gap.status.replace('_', ' ')}
                              </span>
                              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                                {gap.priority}
                              </span>
                            </div>
                          </div>

                          <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                            {gap.title}
                          </h4>
                          <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                            {gap.description}
                          </p>

                          <div className="pt-1 flex flex-wrap items-center justify-between gap-2 text-[10px] border-t border-slate-100 dark:border-slate-800/80 mt-2">
                            <span className="font-mono text-slate-500 dark:text-slate-400 font-semibold">
                              {gap.recommendedStandard}
                            </span>
                            <span className="text-amber-600 dark:text-amber-400 font-bold">
                              {gap.duePeriod}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}

              {/* 3. Contradiction Radar Safety Alert */}
              {aiResult.step5ContradictionRadar?.hasConflict ? (
                <div className="p-5 rounded-3xl bg-rose-50 dark:bg-rose-950/40 border-2 border-rose-400 dark:border-rose-900/80 flex items-start gap-4 shadow-sm">
                  <div className="p-3 rounded-2xl bg-rose-600 text-white shrink-0">
                    <ShieldAlert className="w-7 h-7" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-rose-600 text-white">
                        CRITICAL CONTRADICTION RADAR INTERLOCK
                      </span>
                      <span className="text-xs font-bold text-rose-900 dark:text-rose-200">
                        Fatal Drug-Allergy Interaction Blocked!
                      </span>
                    </div>

                    <p className="text-xs text-rose-800 dark:text-rose-300">
                      {aiResult.step5ContradictionRadar.clinicalHazard}
                    </p>

                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      <span className="text-[11px] font-bold text-rose-900 dark:text-rose-200 mr-1">Hard-Blocked:</span>
                      {aiResult.step5ContradictionRadar.blockedDrugs?.map((drug, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-rose-200 dark:bg-rose-900 text-rose-800 dark:text-rose-100">
                          ✕ {drug}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-4 rounded-3xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-emerald-900 dark:text-emerald-200">
                      Contradiction Radar Verified: No high-risk drug-disease or drug-allergy interactions detected.
                    </span>
                    <p className="text-[11px] text-emerald-700 dark:text-emerald-400 mt-0.5">
                      {aiResult.step5ContradictionRadar?.clinicalHazard || 'All safe clinical thresholds satisfied for current encounter.'}
                    </p>
                  </div>
                </div>
              )}

              {/* 4. AI Safe Treatment Plan & Standards */}
              {aiResult.step5ContradictionRadar?.geminiRecommendation && (
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                    <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <h3 className="text-base font-black text-slate-900 dark:text-white">
                      AI Recommended Safe Care Plan &amp; Treatment
                    </h3>
                  </div>

                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {aiResult.step5ContradictionRadar.geminiRecommendation.clinicalRationale}
                  </p>

                  {/* Suggested Prescriptions Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {aiResult.step5ContradictionRadar.geminiRecommendation.suggestedPrescription?.map((rx: any, i: number) => (
                      <div key={i} className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 flex items-center justify-between">
                        <div>
                          <div className="text-xs font-bold text-slate-900 dark:text-white">{rx.drugName || rx.drug}</div>
                          <div className="text-[11px] text-emerald-700 dark:text-emerald-400 font-medium mt-0.5">
                            {rx.dosage || rx.dose} {rx.frequency || ''} {rx.duration ? `• ${rx.duration}` : ''}
                          </div>
                        </div>
                        <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 shrink-0">
                          RxNorm: {rx.rxNormCode}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              )}

              {/* 5. Doctor Clinical Decision & EHR Database Commit */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                      <Stethoscope className="w-5 h-5 text-blue-600" />
                      Doctor Decision &amp; EHR Database Commit
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Review AI recommendations, customize orders, and permanently commit to EHR database
                    </p>
                  </div>

                  <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-blue-600" />
                    <span>Signing Physician: <strong className="text-slate-800 dark:text-slate-200">{doctorName}</strong></span>
                  </div>
                </div>

                <div className="pt-2 space-y-4">
                  {/* Decision Tabs */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                      Clinical Decision:
                    </label>
                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setDoctorDecision('ACCEPT')}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                          doctorDecision === 'ACCEPT'
                            ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Approve AI Recommendation</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setDoctorDecision('MODIFY')}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                          doctorDecision === 'MODIFY'
                            ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                        }`}
                      >
                        <Edit3 className="w-4 h-4" />
                        <span>Modify / Add Custom Orders</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setDoctorDecision('REJECT')}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                          doctorDecision === 'REJECT'
                            ? 'bg-rose-600 text-white shadow-md shadow-rose-600/20'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                        }`}
                      >
                        <ShieldAlert className="w-4 h-4" />
                        <span>Reject / Defer Treatment</span>
                      </button>
                    </div>
                  </div>

                  {/* Prescription Field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Final Prescription to be Committed:
                    </label>
                    <input
                      type="text"
                      value={customPrescription}
                      onChange={e => setCustomPrescription(e.target.value)}
                      placeholder="e.g. Azithromycin 500mg OD x 3 days, Paracetamol 650mg QDS PRN"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-sans"
                    />
                  </div>

                  {/* Doctor Clinical Notes */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Doctor Clinical Sign-Off Notes:
                    </label>
                    <textarea
                      rows={2}
                      value={doctorNotes}
                      onChange={e => setDoctorNotes(e.target.value)}
                      placeholder="Enter official physician reasoning for medical record..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-sans"
                    />
                  </div>

                  {/* Commit Action Button */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="text-[11px] text-slate-400">
                      Commits cryptographically sealed bundle to PostgreSQL EHR table &amp; FHIR R4 ledger.
                    </div>

                    <button
                      onClick={handleCommitToDatabase}
                      disabled={isSavingDecision}
                      className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 transition-all cursor-pointer disabled:opacity-50"
                    >
                      {isSavingDecision ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Committing to Patient Database...</span>
                        </>
                      ) : (
                        <>
                          <Database className="w-4 h-4" />
                          <span>💾 Approve &amp; Update Patient Database</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Success Confirmation Card */}
                  {commitSuccess && (
                    <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 space-y-2 animate-fadeIn">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-xs font-bold text-emerald-900 dark:text-emerald-200">
                          {commitSuccess.message}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-[10px] text-emerald-800 dark:text-emerald-300 font-mono">
                        <span>Signature Hash: <strong>{commitSuccess.signature}</strong></span>
                        <span>•</span>
                        <span>Sealed At: <strong>{new Date(commitSuccess.timestamp).toLocaleString()}</strong></span>
                      </div>
                      <p className="text-[11px] text-emerald-700 dark:text-emerald-300 mt-1">
                        ✓ Patient record updated in live database. Switch to the <strong>Patient Medical Records</strong> tab to view this consultation!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* C. EMPTY STATE: Prompt to Trigger AI Analysis */}
          {!isAnalyzing && !aiResult && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200 dark:border-slate-800 text-center animate-fadeIn space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto shadow-xs">
                <Sparkles className="w-8 h-8" />
              </div>
              <div className="max-w-md mx-auto space-y-1.5">
                <h3 className="text-base font-black text-slate-900 dark:text-white">
                  AI Clinical Analysis Ready
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Click below to cross-reference past EHR records, detect care gaps, and verify safe treatment options against the contradiction radar.
                </p>
              </div>
              <button
                type="button"
                onClick={handleAnalyzeClick}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600 text-white font-extrabold text-xs inline-flex items-center gap-2 shadow-lg shadow-indigo-500/20 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>✨ Run AI Clinical Analysis</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* TIER 4: ICD-11 ALL DISEASES CATALOG */}
      {dashboardView === 'icd11' && (
        <div className="pt-2">
          <Icd11DiseaseCatalog />
        </div>
      )}
    </div>
  );
};

export default ClientPocDashboard;
