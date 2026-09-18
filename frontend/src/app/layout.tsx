import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '../context/ThemeContext';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'EN NANBA — Clinical Intelligence Platform POC',
  description: 'AI-driven Clinical Intelligence Platform Doctor Workspace with Neo4j Graph, Qdrant Vector Normalization, Gap & Contradiction Radar, and Gemini RAG Reasoning.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="min-h-screen antialiased selection:bg-[#00cba9] selection:text-white font-sans bg-slate-50 dark:bg-slate-950">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
