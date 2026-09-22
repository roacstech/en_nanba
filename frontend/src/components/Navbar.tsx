'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Activity,
  Sun,
  Moon,
  Stethoscope,
  User,
  LogOut,
  ChevronDown,
  UserCog,
  Edit3,
  X,
  Check,
  Loader2,
  HeartPulse,
  Search,
} from 'lucide-react';
import { SystemStatus, PatientProfile, AuthUser, api } from '../lib/api';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  systemStatus: SystemStatus | null;
  currentRole?: 'doctor' | 'patient';
  activePatient?: PatientProfile | null;
  currentUser?: AuthUser | null;
  onLogout?: () => void;
  onEditProfile?: () => void;
  onPatientUpdated?: (patient: PatientProfile) => void;
  // Patient selector in navbar
  patients?: PatientProfile[];
  selectedPatient?: PatientProfile | null;
  onSelectPatient?: (patient: PatientProfile | null) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  systemStatus,
  currentRole = 'doctor',
  activePatient,
  currentUser,
  onLogout,
  onEditProfile,
  onPatientUpdated,
  patients,
  selectedPatient,
  onSelectPatient,
}) => {
  const { theme, toggleTheme } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Patient Search in Navbar
  const [patientSearch, setPatientSearch] = useState('');
  const [isPatientDropdownOpen, setIsPatientDropdownOpen] = useState(false);
  const patientDropdownRef = useRef<HTMLDivElement>(null);

  // Filter patients by ID, Name, EnNanbaID, or phone
  const filteredPatients = (patients || []).filter(p => {
    const q = patientSearch.toLowerCase().trim();
    if (!q) return true;
    return (
      p.id.toLowerCase().includes(q) ||
      p.fullName.toLowerCase().includes(q) ||
      (p.enNanbaId && p.enNanbaId.toLowerCase().includes(q)) ||
      (p.phone && p.phone.includes(q))
    );
  });

  // Prioritize active patient name for patients to ensure the true profile name is shown
  const displayName =
    currentRole === 'patient'
      ? activePatient?.fullName || currentUser?.fullName || 'Patient'
      : currentUser?.fullName || 'Dr. Aravind Swamy, MD (Cardiology)';

  // Doctor Name for Search Placeholder
  const rawDoctorName = currentUser?.fullName || 'Dr. Aravind Swamy';
  const doctorNameFormatted = rawDoctorName.startsWith('Dr.') ? rawDoctorName : `Dr. ${rawDoctorName}`;
  const shortDoctorName = doctorNameFormatted.split(',')[0].trim();

  // Initials (e.g. "kumar" -> "KU", "Rajesh Kumar" -> "RK")
  const initials = displayName
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0]?.toUpperCase() || '')
    .join('') || (currentRole === 'doctor' ? 'DR' : 'PT');

  // Handle outside click to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setIsDropdownOpen(false);
      }
      if (patientDropdownRef.current && !patientDropdownRef.current.contains(target)) {
        setIsPatientDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/80 backdrop-blur-md sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        {currentRole === 'patient' && (
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-lg tracking-tight text-slate-900 dark:text-white">EN NANBA</span>
              </div>
            </div>
          </div>
        )}


        {/* Center: Searchable Patient Selector (Doctor Workspace) */}
        {currentRole === 'doctor' && (
          <div className="relative w-72 sm:w-80 mx-2 sm:mx-4" ref={patientDropdownRef}>
            {!selectedPatient ? (
              /* When NO patient selected: Compact Search Input with clean placeholder */
              <div className="relative flex items-center w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600 focus-within:border-blue-500 dark:focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 rounded-2xl transition-all px-3 py-1.5 shadow-xs group">
                <Search className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mr-2" />
                <input
                  type="text"
                  value={patientSearch}
                  onChange={e => {
                    setPatientSearch(e.target.value);
                    setIsPatientDropdownOpen(true);
                  }}
                  onFocus={() => setIsPatientDropdownOpen(true)}
                  onKeyDown={e => {
                    if (e.key === 'Enter' && filteredPatients.length > 0) {
                      if (onSelectPatient) onSelectPatient(filteredPatients[0]);
                      setIsPatientDropdownOpen(false);
                      setPatientSearch('');
                    }
                  }}
                  placeholder="Search patient by Name or ID..."
                  className="w-full bg-transparent text-xs text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none font-medium"
                />
                {patientSearch && (
                  <button
                    type="button"
                    onClick={() => setPatientSearch('')}
                    className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5 ml-1"
                    title="Clear search text"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
                <ChevronDown
                  onClick={() => setIsPatientDropdownOpen(prev => !prev)}
                  className={`w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-transform duration-200 shrink-0 cursor-pointer ml-1 ${
                    isPatientDropdownOpen ? 'rotate-180 text-blue-600' : ''
                  }`}
                />
              </div>
            ) : (
              /* When Patient IS Selected: Show Selected Badge with Clear (X) to Return to Search */
              <div
                onClick={() => setIsPatientDropdownOpen(prev => !prev)}
                className="w-full flex items-center justify-between gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200/80 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600 rounded-2xl transition-all cursor-pointer shadow-xs group"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <Search className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span className="font-mono text-[11px] font-bold px-1.5 py-0.5 rounded-md bg-blue-600 text-white shrink-0 shadow-xs">
                    {selectedPatient.id}
                  </span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white truncate capitalize">
                    {selectedPatient.fullName}
                  </span>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    type="button"
                    onClick={e => {
                      e.stopPropagation();
                      if (onSelectPatient) onSelectPatient(null);
                      setPatientSearch('');
                      setIsPatientDropdownOpen(false);
                    }}
                    title="Clear patient / Return to search"
                    className="p-1 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-400 hover:text-rose-500 transition-colors cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-transform duration-200 ${
                      isPatientDropdownOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </div>
              </div>
            )}

            {/* Dropdown Panel */}
            {isPatientDropdownOpen && (
              <div className="absolute left-0 right-0 top-full mt-1.5 w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl overflow-hidden z-50 animate-fadeIn">
                {/* Search Input Filter when a patient was already selected */}
                {selectedPatient && (
                  <div className="p-2.5 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2 bg-slate-50 dark:bg-slate-950">
                    <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <input
                      type="text"
                      autoFocus
                      value={patientSearch}
                      onChange={e => setPatientSearch(e.target.value)}
                      placeholder="Search patient by Name or ID..."
                      className="w-full bg-transparent text-xs text-slate-900 dark:text-white focus:outline-none placeholder:text-slate-400 font-medium"
                    />
                    {patientSearch && (
                      <button
                        onClick={() => setPatientSearch('')}
                        className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                )}

                {/* Patient List: Clean UI with ONLY Patient Unique Number & Name */}
                <div className="max-h-64 overflow-y-auto p-1.5 space-y-0.5">
                  {filteredPatients.length > 0 ? (
                    filteredPatients.map(p => {
                      const isSelected = selectedPatient?.id === p.id;
                      return (
                        <div
                          key={p.id}
                          onClick={() => {
                            if (onSelectPatient) onSelectPatient(p);
                            setIsPatientDropdownOpen(false);
                            setPatientSearch('');
                          }}
                          className={`px-2.5 py-2 rounded-xl flex items-center justify-between cursor-pointer transition-colors ${
                            isSelected
                              ? 'bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800'
                              : 'hover:bg-slate-100 dark:hover:bg-slate-800/60 border border-transparent'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 shrink-0">
                              {p.id}
                            </span>
                            <span className="font-medium text-xs text-slate-800 dark:text-slate-200 truncate capitalize">
                              {p.fullName}
                            </span>
                          </div>
                          {isSelected && <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 ml-2" />}
                        </div>
                      );
                    })
                  ) : (
                    <div className="p-3 text-center text-xs text-slate-400">
                      No patients found matching "{patientSearch}"
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Right side: Controls & Profile Menu */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Light/Dark Theme"
            className="p-2 rounded-md bg-slate-100  text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer flex items-center gap-1.5"
            title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4 text-slate-700" />
            ) : (
              <Sun className="w-4 h-4 text-amber-400" />
            )}
          </button>

          {/* Profile Trigger Button & Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(prev => !prev)}
              aria-label="Open User Profile Menu"
              aria-expanded={isDropdownOpen}
              className="flex items-center p-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all cursor-pointer shadow-sm group"
            >
              {/* Avatar circle with initials */}
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center font-extrabold text-xs text-white shadow-md bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-blue-500/20"
              >
                {initials}
              </div>
            </button>

            {/* Profile Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-2.5 z-50 animate-fadeIn">
                {/* Header card: User summary */}
                <div className="p-3 rounded-md  dark:bg-slate-950/80">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center font-extrabold text-sm text-white shadow-md bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-blue-500/20"
                    >
                      {initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-sm font-extrabold text-slate-900 dark:text-white truncate">
                          {displayName}
                        </h4>
                        <span
                          className="text-[9px] uppercase font-extrabold px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300"
                        >
                          {currentRole === 'doctor' ? 'Doctor' : 'Patient'}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                        {currentUser?.email || (activePatient?.phone ? `Phone: ${activePatient.phone}` : '')}
                      </p>
                      {activePatient?.enNanbaId && (
                        <p className="text-[10px] font-mono text-blue-600 dark:text-blue-400 mt-0.5">
                          {activePatient.enNanbaId}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-1">
                  {/* Patient Health Intake Form / Edit Profile */}
                  <button
                    onClick={() => {
                      setIsDropdownOpen(false);
                      if (onEditProfile) {
                        onEditProfile();
                      }
                    }}
                    className="w-full px-3 py-2.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800/80 text-left flex items-center gap-3 transition-colors cursor-pointer group/item"
                  >
                    <div className="w-8 h-8 rounded-md  dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-700 dark:text-blue-300 group-hover/item:scale-105 transition-transform">
                      <Edit3 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-slate-800 dark:text-slate-200">
                        {currentRole === 'patient' ? 'Edit Profile' : 'Edit Profile'}
                      </div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">
                        {currentRole === 'patient'
                          ? ''
                          : 'Update doctor personal details'}
                      </div>
                    </div>
                  </button>

                  {/* Divider */}
                  <div className="border-t border-slate-100 dark:border-slate-800 my-1" />

                  {/* Log Out */}
                  {onLogout && (
                    <button
                      onClick={() => {
                        setIsDropdownOpen(false);
                        onLogout();
                      }}
                      className="w-full px-3 py-2.5 rounded-md hover:bg-rose-50 dark:hover:bg-rose-950/40 text-left flex items-center gap-3 transition-colors cursor-pointer group/item text-rose-600 dark:text-rose-400"
                    >
                      <div className="w-8 h-8 rounded-md    dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900/60 flex items-center justify-center text-rose-600 dark:text-rose-400 group-hover/item:scale-105 transition-transform">
                        <LogOut className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold">
                          Log Out
                        </div>
                        {/* <div className="text-[10px] text-rose-500/80">
                          End your active session securely
                        </div> */}
                      </div>
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
