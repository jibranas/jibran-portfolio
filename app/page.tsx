import Hero from '@/components/Hero';
import Bio from '@/components/Bio';
import Stats from '@/components/Stats';
import ValueProposition from '@/components/ValueProposition';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';

export default function Home() {
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

      {/* Custom Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-8 text-center mb-12">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          This site was created exclusively for the <span className="font-bold text-[#3d2852]">Udacity Product Manager position</span>,
          so you should know, I'm very excited you're here! 🎉
        </p>
      </footer>
    </main>
  );
}
