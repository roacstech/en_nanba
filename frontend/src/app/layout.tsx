import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '../context/ThemeContext';

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
    <html lang="en">
      <body className="min-h-screen antialiased selection:bg-teal-500 selection:text-white">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
