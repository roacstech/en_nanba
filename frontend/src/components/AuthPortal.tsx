'use client';

import React, { useState } from 'react';
import {
  Stethoscope,
  User,
  Lock,
  Mail,
  Phone,
  UserPlus,
  LogIn,
  AlertCircle,
  Activity,
  ArrowRight,
} from 'lucide-react';
import { api, AuthUser, PatientProfile } from '../lib/api';

import Image from 'next/image';
import loginImage from '../assets/login_image.png';

interface AuthPortalProps {
  onLoginSuccess: (user: AuthUser, patient?: PatientProfile | null) => void;
}

export const AuthPortal: React.FC<AuthPortalProps> = ({ onLoginSuccess }) => {
  const [role, setRole] = useState<'doctor' | 'patient'>('doctor');
  const [patientMode, setPatientMode] = useState<'signin' | 'signup'>('signin');

  // Doctor Form
  const [doctorEmail, setDoctorEmail] = useState('');
  const [doctorPassword, setDoctorPassword] = useState('');

  // Patient Sign In
  const [patientIdentifier, setPatientIdentifier] = useState('');
  const [patientPassword, setPatientPassword] = useState('');

  // Patient Sign Up
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPhone, setSignupPhone] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Doctor Login
  const handleDoctorLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!doctorEmail.trim() || !doctorPassword.trim()) {
      setErrorMessage('Please enter both email and password.');
      return;
    }
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const res = await api.doctorLogin(doctorEmail.trim(), doctorPassword);
      onLoginSuccess(res.user);
    } catch (err: any) {
      setErrorMessage(err.message || 'Invalid email or password.');
    } finally {
      setIsLoading(false);
    }
  };

  // Patient Sign In
  const handlePatientSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientIdentifier.trim() || !patientPassword.trim()) {
      setErrorMessage('Please enter your email or phone and password.');
      return;
    }
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const res = await api.patientLogin(patientIdentifier.trim(), patientPassword);
      onLoginSuccess(res.user, res.patient);
    } catch (err: any) {
      setErrorMessage(err.message || 'Invalid login credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  // Patient Sign Up
  const handlePatientSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!signupName.trim() || !signupEmail.trim() || !signupPhone.trim() || !signupPassword.trim()) {
      setErrorMessage('Please fill in all fields to create an account.');
      return;
    }
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const res = await api.patientSignup({
        fullName: signupName.trim(),
        email: signupEmail.trim(),
        phone: signupPhone.trim(),
        password: signupPassword,
      });
      // Newly signed-up patient is gated to mandatory onboarding
      onLoginSuccess(res.user, null);
    } catch (err: any) {
      setErrorMessage(err.message || 'Registration failed.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors">
      {/* Left Column (Brand/Illustration) */}
      <div className="hidden md:flex w-1/2 bg-[#0a182d] relative overflow-hidden">
        {/* Logo Overlay */}
        <div className="absolute top-8 left-8 flex items-center gap-3 z-10">
          <div className="relative flex items-center justify-center w-12 h-14">
            <svg viewBox="0 0 24 24" className="absolute inset-0 w-full h-full text-[#00cba9]">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="currentColor" />
              <path d="M12 20.5S5.5 17 5.5 12V6.5L12 4l6.5 2.5V12c0 5-6.5 8.5-6.5 8.5z" fill="white" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center pt-0.5">
              <User className="w-[22px] h-[22px] text-[#00cba9] fill-[#00cba9]" />
            </div>
          </div>
          <span className="text-[32px] font-medium text-[#00cba9] tracking-normal">En Nanba</span>
        </div>
        
        <Image 
          src={loginImage} 
          alt="Login Illustration" 
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Right Column (Form) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-24 xl:px-32 relative py-12">
        <div className="w-full max-w-md mx-auto space-y-8">

          {/* Header */}
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Login to your account
            </h1>
            {/* <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Login to access your healthcare dashboard. Explore appointments, manage tasks and patient record with ease
            </p> */}
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-sm flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Role Toggle */}
          <div className="flex bg-slate-100 dark:bg-slate-800/50 p-1 rounded-xl">
            <button
              type="button"
              onClick={() => {
                setRole('doctor');
                setErrorMessage(null);
              }}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-colors ${role === 'doctor'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-700'
                }`}
            >
              Doctor Login
            </button>
            <button
              type="button"
              onClick={() => {
                setRole('patient');
                setErrorMessage(null);
              }}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-colors ${role === 'patient'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-700'
                }`}
            >
              Patient Portal
            </button>
          </div>

          {/* DOCTOR LOGIN */}
          {role === 'doctor' && (
            <form onSubmit={handleDoctorLogin} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-slate-200 mb-1.5">
                  Email
                </label>
                <div className="relative">
                  <Mail className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={doctorEmail}
                    onChange={e => setDoctorEmail(e.target.value)}
                    placeholder="doctor@medicdr.com"
                    className="w-full pl-11 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-slate-200 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    value={doctorPassword}
                    onChange={e => setDoctorPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full pl-11 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 transition-colors"
                    required
                  />
                  {/* Fake Eye Icon matching mockup */}
                  <Activity className="w-5 h-5 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              {/* Forgot Password & Remember Me (Mockup matching) */}
              <div className="flex items-center justify-between mt-2">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className="w-4 h-4 border border-slate-300 dark:border-slate-600 rounded flex items-center justify-center group-hover:border-primary-600">
                  </div>
                  <span className="text-sm text-slate-600 dark:text-slate-400">Remember me</span>
                </label>
                <a href="#" className="text-sm font-medium text-primary-600 hover:underline">
                  Forgot your Password
                </a>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 mt-4 rounded-md bg-primary-600 hover:bg-primary-700 text-white font-medium text-sm transition-colors cursor-pointer disabled:opacity-50"
              >
                {isLoading ? 'Authenticating...' : 'Login'}
              </button>
            </form>
          )}

          {/* PATIENT PORTAL */}
          {role === 'patient' && (
            <div>
              <div className="flex gap-6 border-b border-slate-200 dark:border-slate-800 mb-6 pb-2">
                <button
                  type="button"
                  onClick={() => {
                    setPatientMode('signin');
                    setErrorMessage(null);
                  }}
                  className={`text-sm font-semibold transition-colors cursor-pointer relative ${patientMode === 'signin'
                      ? 'text-slate-900 dark:text-white'
                      : 'text-slate-400 hover:text-slate-700'
                    }`}
                >
                  Sign In
                  {patientMode === 'signin' && (
                    <div className="absolute -bottom-2.5 left-0 w-full h-[2px] bg-primary-600" />
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setPatientMode('signup');
                    setErrorMessage(null);
                  }}
                  className={`text-sm font-semibold transition-colors cursor-pointer relative ${patientMode === 'signup'
                      ? 'text-slate-900 dark:text-white'
                      : 'text-slate-400 hover:text-slate-700'
                    }`}
                >
                  New Patient Register
                  {patientMode === 'signup' && (
                    <div className="absolute -bottom-2.5 left-0 w-full h-[2px] bg-primary-600" />
                  )}
                </button>
              </div>

              {/* Patient Sign In */}
              {patientMode === 'signin' && (
                <form onSubmit={handlePatientSignIn} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 dark:text-slate-200 mb-1.5">
                      Email or Phone
                    </label>
                    <div className="relative">
                      <Mail className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={patientIdentifier}
                        onChange={e => setPatientIdentifier(e.target.value)}
                        placeholder="your.email@example.com"
                        className="w-full pl-11 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 dark:text-slate-200 mb-1.5">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="password"
                        value={patientPassword}
                        onChange={e => setPatientPassword(e.target.value)}
                        placeholder="Enter password"
                        className="w-full pl-11 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Forgot Password & Remember Me */}
                  <div className="flex items-center justify-between mt-2">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <div className="w-4 h-4 border border-slate-300 dark:border-slate-600 rounded flex items-center justify-center group-hover:border-primary-600">
                      </div>
                      <span className="text-sm text-slate-600 dark:text-slate-400">Remember me</span>
                    </label>
                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline">
                      Forgot your Password
                    </a>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 mt-4 rounded-md bg-primary-600 hover:bg-primary-700 text-white font-medium text-sm transition-colors cursor-pointer disabled:opacity-50"
                  >
                    {isLoading ? 'Authenticating...' : 'Login'}
                  </button>
                </form>
              )}

              {/* Patient Sign Up */}
              {patientMode === 'signup' && (
                <form onSubmit={handlePatientSignUp} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 dark:text-slate-200 mb-1.5">Full Legal Name</label>
                    <input
                      type="text"
                      value={signupName}
                      onChange={e => setSignupName(e.target.value)}
                      placeholder="e.g. Ramesh Chandra"
                      className="w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 dark:text-slate-200 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      value={signupEmail}
                      onChange={e => setSignupEmail(e.target.value)}
                      placeholder="ramesh@example.com"
                      className="w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 dark:text-slate-200 mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      value={signupPhone}
                      onChange={e => setSignupPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 dark:text-slate-200 mb-1.5">Password</label>
                    <input
                      type="password"
                      value={signupPassword}
                      onChange={e => setSignupPassword(e.target.value)}
                      placeholder="Create password"
                      className="w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 mt-4 rounded-md bg-primary-600 hover:bg-primary-700 text-white font-medium text-sm transition-colors cursor-pointer disabled:opacity-50"
                  >
                    {isLoading ? 'Registering...' : 'Register Account'}
                  </button>
                </form>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
