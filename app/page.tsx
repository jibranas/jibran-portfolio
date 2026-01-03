'use client';

import { Suspense } from 'react';
import Hero from '@/components/Hero';
import Bio from '@/components/Bio';
import Stats from '@/components/Stats';
import ValueProposition from '@/components/ValueProposition';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

function HomeContent() {
  return (
    <main className="min-h-screen bg-blue-50">
      <Hero />

      {/* Content container with rounded box */}
      <div className="max-w-7xl mx-auto px-2 md:px-8 -mt-8 mb-12">
        <div className="bg-white rounded-2xl shadow-lg border-4 border-gray-200 py-8 md:py-12 px-4 md:px-6">
          <Bio />
          <Stats />
          <ValueProposition />
          <Experience />
          <Projects />
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-blue-50 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </main>
    }>
      <HomeContent />
    </Suspense>
  );
}
