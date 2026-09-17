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
}

export const Navbar: React.FC<NavbarProps> = ({
  systemStatus,
  currentRole = 'doctor',
  activePatient,
  currentUser,
  onLogout,
  onEditProfile,
  onPatientUpdated,
}) => {
  const { theme, toggleTheme } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Prioritize active patient name for patients to ensure the true profile name is shown
  const displayName =
    currentRole === 'patient'
      ? activePatient?.fullName || currentUser?.fullName || 'Patient'
      : currentUser?.fullName || 'Dr. S. K. Raman';

  // Initials (e.g. "kumar" -> "KU", "Rajesh Kumar" -> "RK")
  const initials = displayName
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0]?.toUpperCase() || '')
    .join('') || (currentRole === 'doctor' ? 'DR' : 'PT');

  // Handle outside click to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/80 backdrop-blur-md sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Activity className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white">EN NANBA</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
              {currentRole === 'doctor'
                ? "Clinical Intelligence Platform — Doctor's Workspace"
                : "Personal Health Portal — Patient Health Records"}
            </p>
          </div>
        </div>

        {/* Right side: Controls & Profile Menu */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Light/Dark Theme"
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer flex items-center gap-1.5"
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
              className="flex items-center gap-2.5 p-1.5 sm:px-3 sm:py-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all cursor-pointer shadow-sm group"
            >
              {/* Avatar circle with initials */}
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center font-extrabold text-xs text-white shadow-md bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-blue-500/20"
              >
                {initials}
              </div>

              {/* User Name & Subtext */}
              <div className="hidden sm:flex flex-col text-left">
                <span className="text-xs font-bold text-slate-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {displayName}
                </span>
                <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 leading-tight">
                  {currentRole === 'doctor' ? 'Doctor' : (activePatient?.enNanbaId || 'Patient Portal')}
                </span>
              </div>

              <ChevronDown
                className={`w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200 transition-transform duration-200 ${
                  isDropdownOpen ? 'rotate-180 text-blue-600' : ''
                }`}
              />
            </button>

            {/* Profile Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-72 sm:w-80 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-2.5 z-50 animate-fadeIn">
                {/* Header card: User summary */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-100 dark:border-slate-800/80 mb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center font-extrabold text-sm text-white shadow-md bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-blue-500/20"
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
                    className="w-full px-3 py-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 text-left flex items-center gap-3 transition-colors cursor-pointer group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-700 dark:text-blue-300 group-hover/item:scale-105 transition-transform">
                      <Edit3 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        {currentRole === 'patient' ? 'Patient Health Intake Form' : 'Edit Profile'}
                      </div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">
                        {currentRole === 'patient'
                          ? 'View & edit your full demographic & medical data'
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
                      className="w-full px-3 py-2.5 rounded-xl hover:bg-rose-50 dark:hover:bg-rose-950/40 text-left flex items-center gap-3 transition-colors cursor-pointer group/item text-rose-600 dark:text-rose-400"
                    >
                      <div className="w-8 h-8 rounded-lg bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900/60 flex items-center justify-center text-rose-600 dark:text-rose-400 group-hover/item:scale-105 transition-transform">
                        <LogOut className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold">
                          Log Out
                        </div>
                        <div className="text-[10px] text-rose-500/80">
                          End your active session securely
                        </div>
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
