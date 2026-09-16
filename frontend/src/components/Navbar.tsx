'use client';

import React from 'react';
import { Activity, ShieldCheck, Database, Cpu, Network, Sun, Moon } from 'lucide-react';
import { SystemStatus } from '../lib/api';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  systemStatus: SystemStatus | null;
}

export const Navbar: React.FC<NavbarProps> = ({ systemStatus }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/80 backdrop-blur-md sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-teal-500/20">
            <Activity className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white">EN NANBA</span>
              <span className="text-xs uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-teal-500/10 text-teal-700 dark:text-teal-400 border border-teal-500/30">
                POC v1.0
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">Clinical Intelligence Platform — Doctor's Workspace</p>
          </div>
        </div>

        {/* Database, AI Engine Live Status Pills & Theme Switcher */}
        <div className="flex items-center gap-2 text-xs">
          {/* PostgreSQL */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <Database className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span className="text-slate-700 dark:text-slate-300 font-medium hidden md:inline">PostgreSQL</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
          </div>

          {/* Neo4j */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <Network className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span className="text-slate-700 dark:text-slate-300 font-medium hidden md:inline">Neo4j</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
          </div>

          {/* Qdrant */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <Database className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
            <span className="text-slate-700 dark:text-slate-300 font-medium hidden md:inline">Qdrant</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
          </div>

          {/* Gemini API */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-50 dark:bg-slate-900 border border-teal-500/30 text-teal-700 dark:text-teal-300">
            <Cpu className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span className="font-medium hidden sm:inline">Gemini 3.8 Flash</span>
            <span className="w-2 h-2 rounded-full bg-teal-500 dark:bg-teal-400"></span>
          </div>

          {/* Compliance Tag */}
          <div className="hidden lg:flex items-center gap-1 text-slate-500 dark:text-slate-400 pl-2 border-l border-slate-200 dark:border-slate-800">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-[11px] font-medium">Zero-PHI Leakage</span>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Light/Dark Theme"
            className="ml-1 p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer flex items-center gap-1.5"
            title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
          >
            {theme === 'light' ? (
              <>
                <Moon className="w-4 h-4 text-slate-700" />
                <span className="hidden sm:inline text-xs font-semibold">Dark</span>
              </>
            ) : (
              <>
                <Sun className="w-4 h-4 text-amber-400" />
                <span className="hidden sm:inline text-xs font-semibold">Light</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
