'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  User,
  Heart,
  Activity,
  FileText,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Printer,
  Edit3,
  Stethoscope,
  ShieldCheck,
  PlusCircle,
  Save,
  ChevronRight,
  TrendingUp,
  Droplet,
  Pill,
  FileCheck,
  RefreshCw,
  Sparkles,
  ShieldAlert,
  X,
} from 'lucide-react';
import {
  api,
  PatientProfile,
  PatientReportData,
  PatientIntakePayload,
} from '../lib/api';

interface PatientDashboardProps {
  patient: PatientProfile | null;
  onPatientUpdated: (updatedPatient: PatientProfile) => void;
  onSwitchToDoctorView?: () => void;
  initialMode?: 'report' | 'intake';
  isIntakeModalOpen?: boolean;
  onCloseIntakeModal?: () => void;
}

export const PatientDashboard: React.FC<PatientDashboardProps> = ({
  patient,
  onPatientUpdated,
  onSwitchToDoctorView,
  initialMode = 'report',
  isIntakeModalOpen: propIsIntakeModalOpen,
  onCloseIntakeModal,
}) => {
  const [activeTab, setActiveTab] = useState<'report' | 'ledger'>('report');
  const [isIntakeModalOpen, setIsIntakeModalOpen] = useState<boolean>(false);
  const [report, setReport] = useState<PatientReportData | null>(null);
  const [isLoadingReport, setIsLoadingReport] = useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    if (propIsIntakeModalOpen !== undefined) {
      setIsIntakeModalOpen(propIsIntakeModalOpen);
    } else if (initialMode === 'intake') {
      setIsIntakeModalOpen(true);
    }
  }, [propIsIntakeModalOpen, initialMode]);

  const handleCloseIntakeModal = () => {
    setIsIntakeModalOpen(false);
    if (onCloseIntakeModal) {
      onCloseIntakeModal();
    }
  };

  // Form State for Mandatory Intake
  const [formData, setFormData] = useState<PatientIntakePayload>({
    patientId: patient?.id || '',
    fullName: patient?.fullName || '',
    age: patient?.age || 35,
    gender: patient?.gender || 'M',
    dob: patient?.dob || '1990-01-01',
    phone: patient?.phone || '+91 ',
    bloodType: patient?.bloodType || 'O+',
    vitals: {
      bloodPressure: patient?.vitals.bloodPressure || '120/80 mmHg',
      heartRate: patient?.vitals.heartRate || 72,
      bloodGlucose: patient?.vitals.bloodGlucose || '95 mg/dL',
      oxygenSaturation: patient?.vitals.oxygenSaturation || 98,
      bmi: patient?.vitals.bmi || 22.5,
    },
    chronicConditions: patient?.chronicConditions || [],
    pastDiseases: patient?.pastDiseases || [],
    allergies: patient?.allergies || [],
    currentMedications: [],
    symptomsNotes: '',
  });

  const [allergyInput, setAllergyInput] = useState('');
  const [conditionInput, setConditionInput] = useState('');
  const [medicationInput, setMedicationInput] = useState('');
  const [pastDiseaseCondition, setPastDiseaseCondition] = useState('');
  const [pastDiseaseYear, setPastDiseaseYear] = useState('');
  const [pastDiseaseStatus, setPastDiseaseStatus] = useState('');
  const [ledgerPage, setLedgerPage] = useState(1);
  const ledgerItemsPerPage = 5;
  // Sync form when active patient changes
  useEffect(() => {
    if (patient) {
      setFormData({
        patientId: patient.id,
        fullName: patient.fullName,
        age: patient.age,
        gender: patient.gender,
        dob: patient.dob,
        phone: patient.phone,
        bloodType: patient.bloodType,
        vitals: {
          bloodPressure: patient.vitals.bloodPressure,
          heartRate: patient.vitals.heartRate,
          bloodGlucose: patient.vitals.bloodGlucose || '95 mg/dL',
          oxygenSaturation: patient.vitals.oxygenSaturation,
          bmi: patient.vitals.bmi,
        },
        chronicConditions: patient.chronicConditions || [],
        pastDiseases: patient.pastDiseases || [],
        allergies: patient.allergies || [],
        currentMedications: [],
        symptomsNotes: '',
      });
    }
  }, [patient]);

  // Load patient consolidated report
  const loadReport = useCallback(async () => {
    if (!patient?.id) return;
    setIsLoadingReport(true);
    try {
      const data = await api.getPatientReport(patient.id);
      setReport(data);
      if (data) {
        setFormData(prev => ({
          ...prev,
          currentMedications:
            prev.currentMedications && prev.currentMedications.length > 0
              ? prev.currentMedications
              : data.medications?.map(m => (m.dosage ? `${m.name} (${m.dosage})` : m.name)) || [],
        }));
      }
    } catch (e) {
      console.error('Failed to load patient report', e);
    } finally {
      setIsLoadingReport(false);
    }
  }, [patient?.id]);

  useEffect(() => {
    loadReport();
  }, [loadReport]);

  // Handle Form Input Change
  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleVitalsChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      vitals: {
        ...prev.vitals,
        [field]: value,
      },
    }));
  };

  // Add Item to Array Tags
  const addAllergy = () => {
    if (allergyInput.trim()) {
      setFormData(prev => ({
        ...prev,
        allergies: [...(prev.allergies || []), allergyInput.trim()],
      }));
      setAllergyInput('');
    }
  };

  const removeAllergy = (index: number) => {
    setFormData(prev => ({
      ...prev,
      allergies: (prev.allergies || []).filter((_, i) => i !== index),
    }));
  };

  const addCondition = () => {
    if (conditionInput.trim()) {
      setFormData(prev => ({
        ...prev,
        chronicConditions: [...(prev.chronicConditions || []), conditionInput.trim()],
      }));
      setConditionInput('');
    }
  };

  const removeCondition = (index: number) => {
    setFormData(prev => ({
      ...prev,
      chronicConditions: (prev.chronicConditions || []).filter((_, i) => i !== index),
    }));
  };

  const addPastDisease = () => {
    if (pastDiseaseCondition.trim()) {
      const newEntry = {
        year: pastDiseaseYear.trim() || new Date().getFullYear().toString(),
        condition: pastDiseaseCondition.trim(),
        status: pastDiseaseStatus.trim() || 'Post-treatment surveillance',
      };
      setFormData(prev => ({
        ...prev,
        pastDiseases: [...(prev.pastDiseases || []), newEntry],
      }));
      setPastDiseaseCondition('');
    }
  };

  const removePastDisease = (index: number) => {
    setFormData(prev => ({
      ...prev,
      pastDiseases: (prev.pastDiseases || []).filter((_, i) => i !== index),
    }));
  };

  const addMedication = () => {
    if (medicationInput.trim()) {
      setFormData(prev => ({
        ...prev,
        currentMedications: [...(prev.currentMedications || []), medicationInput.trim()],
      }));
      setMedicationInput('');
    }
  };

  const removeMedication = (index: number) => {
    setFormData(prev => ({
      ...prev,
      currentMedications: (prev.currentMedications || []).filter((_, i) => i !== index),
    }));
  };

  // Handle Form Submission
  const handleSubmitIntake = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.dob) {
      setToastMessage({ type: 'error', text: 'Please fill in all required personal demographic fields.' });
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await api.submitPatientIntake(formData);
      setToastMessage({
        type: 'success',
        text: `Health data for ${res.patient.fullName} successfully submitted and synced with clinical care team!`,
      });
      onPatientUpdated(res.patient);
      await loadReport();
      handleCloseIntakeModal();
    } catch (err: any) {
      setToastMessage({ type: 'error', text: err.message || 'Failed to submit patient data.' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setToastMessage(null), 6000);
    }
  };

  return (
    <div className="space-y-6">
      {/* Toast Notification */}
      {toastMessage && (
        <div
          className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-2xl p-4 rounded-xl flex items-center justify-between text-sm font-semibold shadow-2xl transition-all animate-fadeIn ${
            toastMessage.type === 'success'
              ? 'bg-emerald-600 text-white'
              : 'bg-rose-600 text-white'
          }`}
        >
          <div className="flex items-center gap-3">
            {toastMessage.type === 'success' ? <CheckCircle2 className="w-5 h-5 flex-shrink-0" /> : <AlertTriangle className="w-5 h-5 flex-shrink-0" />}
            <span>{toastMessage.text}</span>
          </div>
          <button onClick={() => setToastMessage(null)} className="text-white/80 hover:text-white p-1 rounded-md hover:bg-black/10 transition-colors ml-4 flex-shrink-0">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Patient Digital Health Header Banner */}
      {patient && (
        <div className="pro-card p-6 md:p-8 relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            {/* Left: Demographics */}
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-xl bg-slate-800 dark:bg-slate-700 flex items-center justify-center text-white font-medium text-xl shadow-sm">
                <User className="w-8 h-8 text-white/80" />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <h1 className="text-2xl font-medium tracking-tight text-slate-900 dark:text-white">{patient.fullName}</h1>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 font-mono">
                    {patient.enNanbaId}
                  </span>
                  {/* <span className="px-2 py-0.5 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    Patient Portal
                  </span> */}
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-400 mt-2">
                  <span>Age: <strong className="text-slate-800 dark:text-slate-200">{patient.age} yrs</strong></span>
                  <span>•</span>
                  <span>Gender: <strong className="text-slate-800 dark:text-slate-200">{patient.gender === 'M' ? 'Male' : patient.gender === 'F' ? 'Female' : 'Other'}</strong></span>
                  <span>•</span>
                  <span>Blood: <strong className="text-rose-600 dark:text-rose-400 font-medium">{patient.bloodType}</strong></span>
                  <span>•</span>
                  <span>DOB: <strong className="text-slate-800 dark:text-slate-200">{patient.dob}</strong></span>
                  <span>•</span>
                  <span>Phone: <strong className="text-slate-800 dark:text-slate-200">{patient.phone}</strong></span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => window.print()}
                className="px-4 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-semibold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Print Clinical Summary"
              >
                <Printer className="w-4 h-4" /> Print Report
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Patient Portal Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-6 border-b border-slate-200 dark:border-slate-800 mt-6">
        <button
          onClick={() => setActiveTab('report')}
          className={`pb-3 text-sm font-semibold flex items-center gap-2 transition-colors cursor-pointer border-b-2 -mb-[1px] ${activeTab === 'report'
              ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
              : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
            }`}
        >
          <FileCheck className="w-4 h-4" /> My Health Records & Reports
        </button>

        <button
          onClick={() => setActiveTab('ledger')}
          className={`pb-3 text-sm font-semibold flex items-center gap-2 transition-colors cursor-pointer border-b-2 -mb-[1px] ${activeTab === 'ledger'
              ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
              : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
            }`}
        >
          <Clock className="w-4 h-4" /> Care History ({report?.evidenceRecords?.length || 0})
        </button>

        <button
          onClick={loadReport}
          className="ml-auto p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-xs flex items-center gap-1 cursor-pointer"
          title="Refresh Reports"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Refresh</span>
        </button>
      </div>

      {/* TAB 1: MY HEALTH RECORDS & REPORTS */}
      {activeTab === 'report' && (
        <div className="space-y-6 animate-fadeIn">
          {isLoadingReport ? (
            <div className="p-16 text-center text-slate-400">
              <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-teal-500" />
              <p>Loading your clinical health records and doctor reviews...</p>
            </div>
          ) : report ? (
            <div className="space-y-6">
              {/* Critical Safety Hazard Banner if Contradictions Exist */}
              {report.safetyRadarAlerts && report.safetyRadarAlerts.length > 0 && (
                <div className="p-5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-rose-500/20 text-rose-600 dark:text-rose-400 shrink-0">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-rose-500 text-white">
                        CRITICAL SAFETY ALERT
                      </span>
                      <h3 className="font-medium text-sm text-rose-900 dark:text-rose-200">
                        {report.safetyRadarAlerts[0].ruleName}
                      </h3>
                    </div>
                    <p className="text-xs text-rose-700 dark:text-rose-300 mt-1">
                      {report.safetyRadarAlerts[0].clinicalHazard}
                    </p>
                    <div className="mt-2 text-xs font-semibold text-rose-800 dark:text-rose-200">
                      Recommendation: {report.safetyRadarAlerts[0].recommendedAction}
                    </div>
                  </div>
                </div>
              )}

              {/* 1. Vitals Status Dashboard Cards */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-teal-500" /> Current Vitals & Health Indicators
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {/* Blood Pressure */}
                  <div className="p-4 rounded-xl shadow-sm text-white bg-[#638ff4] relative overflow-hidden">
                    <div className="flex items-center justify-between mb-2 opacity-90">
                      <span className="text-xs font-semibold uppercase tracking-wide">Blood Pressure</span>
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                        <Activity className="w-4 h-4 text-[#638ff4]" />
                      </div>
                    </div>
                    <p className="text-2xl font-medium mb-1">{report.vitalsAnalysis.bloodPressure.value}</p>
                    <div className="flex items-center justify-between text-[10px] mt-3">
                      <span className="px-2 py-1 rounded bg-white/25 font-medium">
                        {report.vitalsAnalysis.bloodPressure.category}
                      </span>
                      <span className="opacity-80">Target: &lt;120/80</span>
                    </div>
                  </div>

                  {/* Heart Rate */}
                  <div className="p-4 rounded-xl shadow-sm text-white bg-[#48d298] relative overflow-hidden">
                    <div className="flex items-center justify-between mb-2 opacity-90">
                      <span className="text-xs font-semibold uppercase tracking-wide">Heart Rate</span>
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                        <Heart className="w-4 h-4 text-[#48d298]" />
                      </div>
                    </div>
                    <p className="text-2xl font-medium mb-1">{report.vitalsAnalysis.heartRate.value}</p>
                    <div className="flex items-center justify-between text-[10px] mt-3">
                      <span className="px-2 py-1 rounded bg-white/25 font-medium">
                        {report.vitalsAnalysis.heartRate.category}
                      </span>
                      <span className="opacity-80">Normal: 60-100 bpm</span>
                    </div>
                  </div>

                  {/* Blood Glucose */}
                  <div className="p-4 rounded-xl shadow-sm text-white bg-[#8b65f7] relative overflow-hidden">
                    <div className="flex items-center justify-between mb-2 opacity-90">
                      <span className="text-xs font-semibold uppercase tracking-wide">Blood Glucose</span>
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                        <Droplet className="w-4 h-4 text-[#8b65f7]" />
                      </div>
                    </div>
                    <p className="text-2xl font-medium mb-1">{report.vitalsAnalysis.bloodGlucose.value}</p>
                    <div className="flex items-center justify-between text-[10px] mt-3">
                      <span className="px-2 py-1 rounded bg-white/25 font-medium">
                        {report.vitalsAnalysis.bloodGlucose.category}
                      </span>
                      <span className="opacity-80">Normal: 70-140 mg/dL</span>
                    </div>
                  </div>

                  {/* Oxygen Saturation */}
                  <div className="p-4 rounded-xl shadow-sm text-white bg-[#24bdf3] relative overflow-hidden">
                    <div className="flex items-center justify-between mb-2 opacity-90">
                      <span className="text-xs font-semibold uppercase tracking-wide">Oxygen (SpO2)</span>
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-[#24bdf3]" />
                      </div>
                    </div>
                    <p className="text-2xl font-medium mb-1">{report.vitalsAnalysis.oxygenSaturation.value}</p>
                    <div className="flex items-center justify-between text-[10px] mt-3">
                      <span className="px-2 py-1 rounded bg-white/25 font-medium">
                        {report.vitalsAnalysis.oxygenSaturation.category}
                      </span>
                      <span className="opacity-80">Normal: 95-100%</span>
                    </div>
                  </div>

                  {/* BMI */}
                  <div className="p-4 rounded-xl shadow-sm text-white bg-[#f38b63] relative overflow-hidden">
                    <div className="flex items-center justify-between mb-2 opacity-90">
                      <span className="text-xs font-semibold uppercase tracking-wide">BMI</span>
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                        <User className="w-4 h-4 text-[#f38b63]" />
                      </div>
                    </div>
                    <p className="text-2xl font-medium mb-1">{report.vitalsAnalysis.bmi.value}</p>
                    <div className="flex items-center justify-between text-[10px] mt-3">
                      <span className="px-2 py-1 rounded bg-white/25 font-medium">
                        {report.vitalsAnalysis.bmi.category}
                      </span>
                      <span className="opacity-80">Healthy: 18.5-24.9</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Official Doctor Assessments & Prescriptions */}
              <div className="pro-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                    <Stethoscope className="w-4 h-4 text-blue-600" /> Official Doctor Reviews & Prescriptions
                  </h3>
                  <span className="text-xs text-slate-500">
                    {report.doctorReviews?.length || 0} consultations on record
                  </span>
                </div>

                {report.doctorReviews && report.doctorReviews.length > 0 ? (
                  <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 mt-6 space-y-8 pb-4">
                    {report.doctorReviews.map((rev, idx) => (
                      <div
                        key={idx}
                        className="relative pl-6"
                      >
                        {/* Timeline Node */}
                        <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 bg-white dark:bg-slate-900 ${
                          rev.decision === 'ACCEPT' ? 'border-emerald-500' :
                          rev.decision === 'MODIFY' ? 'border-blue-500' : 'border-rose-500'
                        }`} />

                        <div className="space-y-3">
                          {/* Header: Name, Decision, Date */}
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <div className="flex items-center gap-3">
                              <span className="font-medium text-sm text-slate-900 dark:text-white">{rev.doctorName}</span>
                              <span className={`px-2 py-0.5 rounded text-[10px] font-medium ${rev.decision === 'ACCEPT'
                                  ? 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300'
                                  : rev.decision === 'MODIFY'
                                    ? 'bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300'
                                    : 'bg-rose-100 dark:bg-rose-900/60 text-rose-700 dark:text-rose-300'
                                }`}>
                                Decision: {rev.decision}
                              </span>
                            </div>
                            <span className="text-xs font-semibold text-slate-400">{new Date(rev.timestamp).toLocaleDateString()}</span>
                          </div>

                          {/* Clinical Notes */}
                          {rev.reasoningNotes && (
                            <div className="text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800/60">
                              <strong className="text-slate-800 dark:text-slate-200">Clinical Notes:</strong> {rev.reasoningNotes}
                            </div>
                          )}

                          {/* Prescription Block */}
                          {rev.modifiedPrescription && (
                            <div className="p-3 rounded-xl bg-[#00cba9]/10 border border-[#00cba9]/20 text-xs text-slate-700 dark:text-slate-200 flex items-start gap-2.5">
                              <Pill className="w-4 h-4 text-[#00cba9] shrink-0 mt-0.5" />
                              <div>
                                <strong className="block text-[#00b597] dark:text-[#00cba9] mb-0.5">Prescribed Regimen:</strong>
                                <span>{rev.modifiedPrescription}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center p-8 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl mt-4">
                    <p className="text-xs text-slate-500 font-medium">No formal doctor consultations submitted yet.</p>
                  </div>
                )}
              </div>

              {/* 3. Chronic Conditions & Drug Allergies Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="pro-card p-6">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-blue-600" /> Active Diagnoses & Chronic Conditions
                  </h3>
                  {report.patient?.chronicConditions && report.patient.chronicConditions.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {report.patient.chronicConditions.map((cond, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold"
                        >
                          {cond}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-slate-400 italic">No chronic conditions reported.</p>
                  )}
                </div>

                <div className="pro-card p-6">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-rose-500" /> Drug & Substance Allergies
                  </h3>
                  {report.patient?.allergies && report.patient.allergies.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {report.patient.allergies.map((allg, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-xl bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 text-xs font-semibold flex items-center gap-1.5"
                        >
                          <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
                          {allg}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-slate-400 italic">No known allergies recorded.</p>
                  )}
                </div>
              </div>

              {/* 4. Active Medications from Clinical Fabric */}
              {report.medications && report.medications.length > 0 && (
                <div className="pro-card p-6">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                    <Pill className="w-4 h-4 text-blue-600" /> Prescribed Medications (RxNorm Mapped)
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {report.medications.map((m, i) => (
                      <div
                        key={i}
                        className="p-3 border-b border-slate-100 dark:border-slate-800/50 last:border-0"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-xs text-slate-900 dark:text-white">{m.name}</span>
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                            RxNorm: {m.rxNormCode}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-1">{m.dosage}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <p className="text-center text-slate-500">Report details currently unavailable.</p>
          )}
        </div>
      )}

      {/* MANDATORY PATIENT INTAKE FORM MODAL */}
      {isIntakeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-sm overflow-y-auto animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 rounded-md p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl w-full max-w-5xl my-auto max-h-[92vh] overflow-y-auto relative flex flex-col">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200 dark:border-slate-800 sticky -top-6 md:-top-8 -mx-6 md:-mx-8 px-6 md:px-8 pt-4 pb-4 bg-white dark:bg-slate-900 z-20">
              <div>
                <h2 className="text-xl font-medium text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                  <Edit3 className="w-5 h-5 text-blue-600" /> Patient Mandatory Health Intake Form
                </h2>
                {/* <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  View and edit your demographic, physiological, and clinical data. Fields with{' '}
                  <span className="text-rose-500 font-medium">*</span> are mandatory for clinical compliance.
                </p> */}
              </div>
              <div className="flex items-center gap-2">
                <span className="hidden sm:inline-block px-3 py-1 rounded-sm text-xs font-medium bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                    Secured
                </span>
                <button
                  type="button"
                  onClick={handleCloseIntakeModal}
                  aria-label="Close Modal"
                  className="p-2 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmitIntake} className="space-y-8">
              {/* Section 1: Demographics */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-blue-900 dark:text-blue-300 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-blue-600" /> 1. Personal & Demographics (Mandatory)
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Full Legal Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={e => handleInputChange('fullName', e.target.value)}
                      placeholder="e.g. Rajesh Kumar"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Date of Birth <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.dob}
                      onChange={e => {
                        handleInputChange('dob', e.target.value);
                        const birthYear = new Date(e.target.value).getFullYear();
                        if (!isNaN(birthYear)) {
                          handleInputChange('age', new Date().getFullYear() - birthYear);
                        }
                      }}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Age <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="number"
                      required
                      min="1"
                      max="120"
                      value={formData.age}
                      onChange={e => handleInputChange('age', Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Gender <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={formData.gender}
                      onChange={e => handleInputChange('gender', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="M">Male</option>
                      <option value="F">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => handleInputChange('phone', e.target.value)}
                      placeholder="+91 98401 23456"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Blood Group <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={formData.bloodType}
                      onChange={e => handleInputChange('bloodType', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 2: Vital Signs */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-blue-900 dark:text-blue-300 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-blue-600" /> 2. Vital Signs & Baseline Measurements (Mandatory)
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Blood Pressure <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.vitals.bloodPressure}
                      onChange={e => handleVitalsChange('bloodPressure', e.target.value)}
                      placeholder="120/80 mmHg"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <span className="text-[10px] text-slate-400 mt-1 block">Format: Systolic/Diastolic</span>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Heart Rate (bpm) <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="number"
                      required
                      min="30"
                      max="220"
                      value={formData.vitals.heartRate}
                      onChange={e => handleVitalsChange('heartRate', Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <span className="text-[10px] text-slate-400 mt-1 block">Resting pulse</span>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Blood Glucose
                    </label>
                    <input
                      type="text"
                      value={formData.vitals.bloodGlucose || ''}
                      onChange={e => handleVitalsChange('bloodGlucose', e.target.value)}
                      placeholder="e.g. 110 mg/dL"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <span className="text-[10px] text-slate-400 mt-1 block">Fasting or Post-meal</span>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Oxygen Saturation (%) <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="number"
                      required
                      min="70"
                      max="100"
                      value={formData.vitals.oxygenSaturation}
                      onChange={e => handleVitalsChange('oxygenSaturation', Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <span className="text-[10px] text-slate-400 mt-1 block">SpO2 Percentage</span>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      BMI <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      required
                      min="10"
                      max="60"
                      value={formData.vitals.bmi}
                      onChange={e => handleVitalsChange('bmi', parseFloat(e.target.value))}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <span className="text-[10px] text-slate-400 mt-1 block">Body Mass Index</span>
                  </div>
                </div>
              </div>

              {/* Section 3: Symptoms & Complaints */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-blue-900 dark:text-blue-300 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-blue-600" /> 3. Current Symptoms & Complaints
                </h3>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    How are you feeling? Describe your symptoms, onset, and duration:
                  </label>
                  <textarea
                    rows={3}
                    value={formData.symptomsNotes || ''}
                    onChange={e => handleInputChange('symptomsNotes', e.target.value)}
                    placeholder="e.g. Mild chest tightness on exertion for the past 3 days. Shortness of breath when climbing stairs."
                    className="w-full p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              {/* Section 4: Allergies & Conditions Tags */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Allergies */}
                <div className="space-y-2">
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300">
                    Known Drug & Food Allergies:
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={allergyInput}
                      onChange={e => setAllergyInput(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addAllergy())}
                      placeholder="e.g. Penicillin"
                      className="flex-1 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-xs text-slate-900 dark:text-white"
                    />
                    <button
                      type="button"
                      onClick={addAllergy}
                      className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-medium shadow-sm transition-all"
                    >
                      Add
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {formData.allergies?.map((allg, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-[11px] font-semibold flex items-center gap-1"
                      >
                        {allg}
                        <button
                          type="button"
                          onClick={() => removeAllergy(idx)}
                          className="hover:text-rose-500 font-medium ml-1"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Chronic Conditions */}
                <div className="space-y-2">
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300">
                    Existing Chronic Conditions:
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={conditionInput}
                      onChange={e => setConditionInput(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addCondition())}
                      placeholder="e.g. Type 2 Diabetes"
                      className="flex-1 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-xs text-slate-900 dark:text-white"
                    />
                    <button
                      type="button"
                      onClick={addCondition}
                      className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-medium shadow-sm transition-all"
                    >
                      Add
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {formData.chronicConditions?.map((cond, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-[11px] font-semibold flex items-center gap-1"
                      >
                        {cond}
                        <button
                          type="button"
                          onClick={() => removeCondition(idx)}
                          className="hover:text-rose-500 font-medium ml-1"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Current Medications */}
                <div className="space-y-2">
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300">
                    Current Medications (Self-Reported):
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={medicationInput}
                      onChange={e => setMedicationInput(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addMedication())}
                      placeholder="e.g. Metformin 500mg"
                      className="flex-1 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-xs text-slate-900 dark:text-white"
                    />
                    <button
                      type="button"
                      onClick={addMedication}
                      className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-medium transition-all shadow-sm"
                    >
                      Add
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {formData.currentMedications?.map((med, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-[11px] font-semibold flex items-center gap-1"
                      >
                        {med}
                        <button
                          type="button"
                          onClick={() => removeMedication(idx)}
                          className="hover:text-rose-500 font-medium ml-1"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-3 sticky -bottom-6 md:-bottom-8 -mx-6 md:-mx-8 px-6 md:px-8 py-4 bg-white dark:bg-slate-900 z-20">
                <button
                  type="button"
                  onClick={handleCloseIntakeModal}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 font-semibold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-medium text-xs shadow-lg shadow-blue-600/30 flex items-center gap-2 cursor-pointer transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" /> Submitting & Syncing to Graph...
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4" /> Save & Submit Health Data
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* TAB 3: CARE HISTORY & EVIDENCE LEDGER */}
      {activeTab === 'ledger' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-sm animate-fadeIn">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-medium text-slate-900 dark:text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-indigo-500" /> Longitudinal Evidence Ledger & Care Timeline
              </h3>
              {/* <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Every clinical intake, doctor prescription, and AI verification is immutably logged.
              </p> */}
            </div>
          </div>

          {report?.evidenceRecords && report.evidenceRecords.length > 0 ? (
            <>
              <div className="space-y-3">
                {report.evidenceRecords
                  .slice((ledgerPage - 1) * ledgerItemsPerPage, ledgerPage * ledgerItemsPerPage)
                  .map((entry, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 flex items-start justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                            {entry.id}
                          </span>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-medium ${entry.statusTag === 'verified'
                              ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                              : entry.statusTag === 'conflict'
                                ? 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300'
                                : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                            }`}>
                            {entry.statusTag}
                          </span> 
                          {/* <span className="text-[11px] text-slate-400">
                            Source: {entry.sourceDocument} 
                          </span> */}
                        </div>
                        <p className="text-xs font-medium text-slate-800 dark:text-slate-200">{entry.claim}</p>
                        {/* {entry.clinicalSignificance && (
                          <p className="text-[11px] text-slate-500 italic">{entry.clinicalSignificance} </p>
                        )} */}
                      </div>
                      <span className="text-[10px] text-slate-900 whitespace-nowrap">
                        {new Date(entry.recordedAt).toLocaleString()}
                      </span>
                    </div>
                  ))}
              </div>

              {/* Pagination Controls */}
              {Math.ceil(report.evidenceRecords.length / ledgerItemsPerPage) > 1 && (
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Showing {(ledgerPage - 1) * ledgerItemsPerPage + 1} to {Math.min(ledgerPage * ledgerItemsPerPage, report.evidenceRecords.length)} of {report.evidenceRecords.length} entries
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setLedgerPage(Math.max(1, ledgerPage - 1))}
                      disabled={ledgerPage === 1}
                      className="px-3 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
                    >
                      Previous
                    </button>
                    <span className="text-xs font-medium text-slate-700 dark:text-slate-300 mx-2">
                      Page {ledgerPage} of {Math.ceil(report.evidenceRecords.length / ledgerItemsPerPage)}
                    </span>
                    <button
                      onClick={() => setLedgerPage(Math.min(Math.ceil(report.evidenceRecords.length / ledgerItemsPerPage), ledgerPage + 1))}
                      disabled={ledgerPage === Math.ceil(report.evidenceRecords.length / ledgerItemsPerPage)}
                      className="px-3 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <p className="text-xs text-slate-400 italic text-center py-8">
              No evidence records found for this patient yet.
            </p>
          )}
        </div>
      )}
    </div>
  );
};
