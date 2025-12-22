'use client';

import { useState } from 'react';

interface SimpleProject {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  bgColor: string;
  type: 'B2B' | 'B2C';
  technologies: string[];
  images: string[];
  link?: string;
  logoSize?: string;
}

const projects: SimpleProject[] = [
  {
    id: "1",
    title: "MOMENTUM WES",
    description: "Warehouse automation system powering operations for Fortune 500 retailers.",
    fullDescription: "Led product development for Momentum WES, a warehouse execution system that powers automation for Fortune 500 retailers. Executed go-to-market strategy for integrating WES with third-party robotic vendors (ACR/AMR), targeting a $400M pipeline. Enhanced ASRS storage rules, improved operational dashboards with key KPIs, and supported product demos to key customers. Collaborated cross-functionally with WMS, WCS, and Business Intelligence teams.",
    bgColor: "bg-[#f5f1e8]",
    type: "B2B",
    technologies: ["Product Management", "Warehouse Automation", "ASRS", "WES", "Agile/Scrum", "Cross-functional Leadership"],
    images: ["/images/momentum-wes.png", "/images/momentum-wes-product-5.png", "/images/momentum-wes-product-4.png",  "/images/momentum-wes-product-3.png", "/images/momentum-wes-product-1.png", "/images/momentum-wes-product-2.png",  ],
    logoSize: "w-48 h-48",
  },
  {
    id: "2",
    title: "MOMENTUM LABOR",
    description: "Workforce management platform with real-time KPIs and intelligent staff planning.",
    fullDescription: "Led the discovery phase for an LMS (Labor Management System) upgrade to incorporate real-time labor performance KPIs and intelligent staff planning based on production data. Designed features to help warehouse operations optimize workforce allocation, track performance metrics, and improve operational efficiency through data-driven insights.",
    bgColor: "bg-[#f5f1e8]",
    type: "B2B",
    technologies: ["Product Management", "Workforce Analytics", "Real-time KPIs", "Data-driven Planning", "Enterprise Software"],
    images: ["/images/momentum-labor.png", "/images/momentum-labor-product-4.png","/images/momentum-labor-product-1.png", "/images/momentum-labor-product-2.png", "/images/momentum-labor-product-3.png", ],
    logoSize: "w-48 h-48",
  },
  {
    id: "3",
    title: "HH COURSES",
    description: "Online learning platform helping students master Islamic studies.",
    fullDescription: "HH Courses was born from my own experience of learning amidst a busy professional and family life. I discovered that bite-sized, self-paced learning made it possible to tackle complex studies without feeling overwhelmed. Inspired by this, I built HH Courses—an engaging platform that delivers studies in small, manageable lessons. The app includes quizzes for instant feedback, leaderboards for friendly peer competition, streaks to reinforce learning habits, and many other features designed to make learning enjoyable, effective, and easy to stick with.",
    bgColor: "bg-[#f5f1e8]",
    type: "B2C",
    technologies: ["EdTech", "Course Platform", "Progress Tracking", "Student Engagement", "Learning Analytics"],
    images: ["/images/hh-logo.png", "/images/hhcoourses-product-1.png", "/images/hhcoourses-product-2.png", "/images/hhcoourses-product-3.png", "/images/hhcoourses-product-4.png", "/images/hhcoourses-product-5.png", "/images/hhcoourses-product-6.png"],
    link: "https://hhcourses.com",
    logoSize: "w-64 h-64",
  },
  {
    id: "4",
    title: "TAFSEEL AI",
    description: "Easily search and study Tafseer with AI-powered insights.",
    fullDescription: "When I asked people why they stop at just reading the translation of the Qur’an and don’t go further to study its Tafseer (explanations of the context and events surrounding the Ayahs), they told me it's difficult to navigate through lengthy texts to find what they want. It struck me that this was the perfect opportunity to build a tool that makes Tafseer search easier and more accessible.",
    bgColor: "bg-[#f5f1e8]",
    type: "B2C",
    technologies: ["AI/ML", "Speech Recognition", "Mobile App", "EdTech", "Personalization", "User Engagement"],
    images: ["/images/tafseel-ai-logo.png", "/images/tafseel-product-1.jpg", "/images/tafseel-product-2.jpg", "/images/tafseel-product-3.jpg"],
    link: "https://tafseelsearch.com",
    logoSize: "w-56 h-56",
  },
  {
    id: "5",
    title: "COLOR DEEN",
    description: "AI-generated, educational coloring books with personalized, fun lessons.",
    fullDescription: "As parents, my friends and I all have kids who love to color. A frustration we all found was that coloring books either did not have the right kind of imagery suitable for our children, or they did not have any meaningful content in them to mix a fun activity with a great learning experience! And so I built ColorDeen - awesome colouring books generated with the help of AI, each with an amazing lesson to teach and with a touch of personalization that puts a smile on any face, young or old.",
    bgColor: "bg-[#f5f1e8]",
    type: "B2C",
    technologies: ["EdTech", "Interactive Content", "Gamification", "Kids Learning", "Engagement Design"],
    images: ["/images/color-deen-logo.png", "/images/colordeen-product-1.jpg", "/images/colordeen-product-2.jpg", "/images/colordeen-product-3.jpg"],
    link: "https://colordeen.com",
    logoSize: "w-56 h-56",
  },
  {
    id: "6",
    title: "QURANIC GRAMMAR",
    description: "Arabic grammar learning platform breaking down the language of the Quran.",
    fullDescription: "I learnt Quranic Arabic Grammar after work hours between 2018-2022. It wasn’t that the course was long, but it was me balancing my professional time with studies. I would come home from work and spend about 15 minutes learning a grammar rule with examples—and that was enough to keep me motivated for the next day! Thinking of other professionals with a dream to deeply understand the Qur’an, I built this app so they too can balance a busy life while learning a simple new grammar rule every day, with examples drawn directly from the Qur’an.",
    bgColor: "bg-[#f5f1e8]",
    type: "B2C",
    technologies: ["EdTech", "Language Learning", "Interactive Lessons", "Visual Learning", "Progress Tracking"],
    images: ["/images/quranic-grammer-logo.png", "/images/quran-grammar-product-1.jpg", "/images/quran-grammar-product-2.jpg", "/images/quran-grammar-product-3.jpg", "/images/quran-grammar-product-4.jpg", "/images/quran-grammar-product-5.jpg", "/images/quran-grammar-product-6.jpg"],
    link: "https://quranic-arabic-rules.vercel.app",
    logoSize: "w-56 h-56",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<'All' | 'B2B' | 'B2C'>('All');
  const [selectedProject, setSelectedProject] = useState<SimpleProject | null>(null);

  const filteredProjects = projects.filter(project =>
    filter === 'All' ? true : project.type === filter
  );

  return (
    <section className="max-w-5xl mx-auto py-8">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#3d2852] mb-6">
        Products I have shipped
      </h2>

      <p className="text-lg md:text-2xl leading-relaxed mb-8">
  I’m a creator at heart, both in my work and in my free time, where I build products that solve real problems—many focused on education, learning experiences, and knowledge tools. Here are a few of them:
</p>



      {/* Filter Toggle */}
      <div className="flex gap-3 mb-8">
        <button
          onClick={() => setFilter('All')}
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            filter === 'All'
              ? 'bg-[#3d2852] text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('B2B')}
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            filter === 'B2B'
              ? 'bg-[#3d2852] text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          B2B
        </button>
        <button
          onClick={() => setFilter('B2C')}
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            filter === 'B2C'
              ? 'bg-[#3d2852] text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          B2C
        </button>
      </div>

      {/* Products Grid */}
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className={`${project.bgColor} rounded-3xl shadow-lg cursor-pointer transition-all hover:shadow-2xl hover:-translate-y-1 duration-300 relative`}
          >
            {/* B2B/B2C Badge - hidden on mobile */}
            <span className="hidden md:block absolute top-4 right-4 px-3 py-1 bg-[#3d2852] text-white text-xs font-bold rounded-full">
              {project.type}
            </span>

            {/* Mobile: compact side-by-side layout */}
            <div className="md:hidden flex items-center gap-4 p-4 h-32">
              {/* Project logo */}
              {project.images[0] ? (
                <div className="flex-shrink-0">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-20 h-20 object-cover rounded-xl"
                  />
                </div>
              ) : (
                <div className="flex-shrink-0 w-20 h-20 bg-gray-300 rounded-xl"></div>
              )}

              {/* Text content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-xs font-bold mb-1 uppercase tracking-wide text-[#3d2852]">
                  {project.title}
                </h3>
                <p className="text-xs leading-snug text-gray-800 line-clamp-3">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Desktop: original vertical layout */}
            <div className="hidden md:flex md:flex-col md:justify-between md:min-h-[400px] md:p-8">
              <div className="pt-2">
                <h3 className="text-sm md:text-base font-bold mb-3 uppercase tracking-wide text-[#3d2852] pr-16">
                  {project.title}
                </h3>
                <p className="text-base leading-relaxed text-gray-800">
                  {project.description}
                </p>
              </div>
              <div className="mt-8 h-64 flex items-center justify-center">
                {project.images[0] ? (
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className={`${project.logoSize || 'w-48 h-48'} object-cover rounded-2xl`}
                  />
                ) : (
                  <div className={`${project.logoSize || 'w-48 h-48'} bg-gray-300 rounded-2xl`}></div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Product Modal */}
      {selectedProject && (
        <ProductModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

// Product Modal Component
interface ProductModalProps {
  project: SimpleProject;
  onClose: () => void;
}

function ProductModal({ project, onClose }: ProductModalProps) {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn"
      onClick={handleBackdropClick}
      style={{
        animation: 'fadeIn 0.3s ease-out'
      }}
    >
      <div
        className="relative mt-32 mb-32 md:mt-12 md:mb-0 max-w-5xl w-full"
        style={{
          animation: 'slideUp 0.3s ease-out'
        }}
      >
        {/* Icon - fixed position, half in half out */}
        <div className="relative w-full h-0 flex justify-center pointer-events-none z-20">
          {project.images[0] ? (
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-40 h-40 object-contain -translate-y-1/2"
            />
          ) : (
            <div className="w-40 h-40 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl shadow-lg flex items-center justify-center -translate-y-1/2">
              <span className="text-white text-2xl font-bold">
                {project.title.charAt(0)}
              </span>
            </div>
          )}
        </div>

        {/* Modal */}
        <div className="bg-white rounded-3xl w-full shadow-2xl relative flex flex-col z-10">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 text-3xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors z-20"
            aria-label="Close modal"
          >
            ×
          </button>

          {/* Fixed title */}
          <div className="mt-2 md:mt-0 p-8 md:p-12 pt-16 md:pt-28 pb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d2852] text-center">
              {project.title}
            </h2>
          </div>

          {/* Scrollable content container */}
          <div className="mx-8 md:mx-12 mb-8 overflow-y-auto max-h-[65vh] md:max-h-[60vh] pr-2">
            {/* Description */}
            <div className="mb-8">
              <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                {project.fullDescription}
              </p>
            </div>

            {/* Images */}
            {project.images.length > 1 && (
              <div className={`mb-8 ${(project.id === "3" || project.id === "4" || project.id === "5" || project.id === "6") ? "grid grid-cols-1 md:grid-cols-3 gap-4" : ""}`}>
                {project.images.slice(1).map((image, index) => (
                  <div key={index} className={(project.id === "3" || project.id === "4" || project.id === "5" || project.id === "6") ? "rounded-3xl overflow-hidden aspect-[9/16]" : "mb-4 rounded-2xl overflow-hidden"}>
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className={`${(project.id === "3" || project.id === "4" || project.id === "5" || project.id === "6") ? "w-full h-full object-cover" : "w-full"}`}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Link */}
            {project.link && (
              <div className="text-center mb-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-[#3d2852] text-white rounded-full font-semibold hover:bg-[#2d1f3d] transition-colors"
                >
                  Visit Product →
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
