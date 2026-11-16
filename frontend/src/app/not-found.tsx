import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-slate-50 dark:bg-slate-900">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">Page Not Found</h2>
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
        The requested clinical resource could not be found.
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
      >
        Return to Clinical Workspace
      </Link>
    </div>
  );
}

