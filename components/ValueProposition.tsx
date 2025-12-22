'use client';

import Lottie from 'lottie-react';
import edtechPassion from '../public/lotties/edtech-passion.json';
import crossfuncLeader from '../public/lotties/crossfunc-leader.json';
import techDepth from '../public/lotties/tech-depth.json';
import dataDriven from '../public/lotties/data-driven.json';
import creator from '../public/lotties/creator.json';
import learnerCentered from '../public/lotties/learner-centered.json';

interface ValueProp {
  title: string;
  description: string;
  bgColor: string;
  lottie?: any;
  lottieSize?: string;
}

export default function ValueProposition() {
  const values: ValueProp[] = [
    {
      title: "EDTECH PASSION",
      description: "Building products that help students succeed",
      bgColor: "bg-[#faf6d6]",
      lottie: edtechPassion,
      lottieSize: "w-60 h-60",
    },
    {
      title: "CROSS-FUNCTIONAL LEADER",
      description: "4+ years shipping products with diverse teams",
      bgColor: "bg-[#F5E5E1]",
      lottie: crossfuncLeader,
      lottieSize: "w-60 h-60",
    },
    {
      title: "TECHNICAL DEPTH",
      description: "I code and speak developer fluently",
      bgColor: "bg-[#BDE3C3]",
      lottie: techDepth,
      lottieSize: "w-60 h-60",
    },
    {
      title: "DATA-DRIVEN EXPERIMENTER",
      description: "Built analytics systems and ran experiments",
      bgColor: "bg-[#d6d3f1]",
      lottie: dataDriven,
      lottieSize: "w-60 h-60",
    },
    {
      title: "CREATOR MINDSET",
      description: "I ship products end-to-end",
      bgColor: "bg-[#e9e9dd]",
      lottie: creator,
      lottieSize: "w-60 h-60",
    },
    {
      title: "LEARNER-CENTERED",
      description: "I build experiences that truly work",
      bgColor: "bg-[#8CE4FF]",
      lottie: learnerCentered,
      lottieSize: "w-60 h-60",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto py-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        <span className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#3d2852] to-[#6b5b95] bg-clip-text text-transparent">
          What can I bring?
        </span>
      </h2>

      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
        {values.map((value, index) => (
          <div
            key={index}
            className={`${value.bgColor} rounded-3xl transition-all duration-300 hover:-translate-y-1`}
          >
            {/* Mobile: side-by-side alternating layout - flatter cards */}
            <div className={`md:hidden flex items-center gap-4 p-4 h-32 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              {value.lottie && (
                <div className="flex-shrink-0">
                  <div className="w-24 h-24">
                    <Lottie animationData={value.lottie} loop={true} />
                  </div>
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-xs font-bold mb-1 uppercase tracking-wide text-[#3d2852]">
                  {value.title}
                </h3>
                <p className="text-xs leading-snug text-gray-800">
                  {value.description}
                </p>
              </div>
            </div>

            {/* Desktop: original vertical layout */}
            <div className="hidden md:flex md:flex-col md:justify-between md:min-h-[280px] md:p-8">
              <div>
                <h3 className="text-sm md:text-base font-bold mb-4 uppercase tracking-wide text-[#3d2852]">
                  {value.title}
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-gray-800">
                  {value.description}
                </p>
              </div>
              {value.lottie && (
                <div className="mt-6 flex items-center justify-center">
                  <div className={value.lottieSize || "w-60 h-60"}>
                    <Lottie animationData={value.lottie} loop={true} />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
