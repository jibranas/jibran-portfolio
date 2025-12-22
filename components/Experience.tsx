import type { Experience } from '@/types';

const experiences: Experience[] = [
  {
    company: "Honeywell Intelligrated",
    logo: "/images/honeywell-logo.png",
    role: "Product Manager",
    period: "Since September 2021",
    description:
      "Led product strategy and roadmap for complex, user-facing warehouse software platforms. Led discovery and delivery of features improving user adoption, operational visibility, and outcomes. Drove cross-functional execution for integrations and platform enhancements supporting a $400M pipeline, translating user insights into scalable product experiences.",
    learningHighlight:
      "designing end-to-end user journeys, aligning stakeholders around product vision, and using data and feedback to drive measurable outcomes.",
  },
  {
    company: "Honeywell Intelligrated",
    logo: "/images/honeywell-logo.png",
    role: "Application Engineer",
    period: "June 2018 - September 2021",
    description:
      "Worked closely with enterprise users to implement and optimize mission-critical software, gaining deep insight into workflows and success metrics. Identified product gaps driving a 21% outcome improvement, built automation tools to reduce user effort, and partnered with product and engineering to improve usability and adoption.",
    learningHighlight:
      "grounding product decisions in real user behavior, validating solutions through feedback and outcomes, and bridging user needs with technical execution.",
  },
  {
    company: "Honeywell Intelligrated",
    logo: "/images/intelligrated-logo.jpg",
    role: "Project Coordinator Co-op",
    period: "August 2017 - April 2018",
    description:
      "Built dashboards and analytics to track performance and capacity across 30+ initiatives. Optimized SQL queries and data models to deliver clear, actionable insights for faster decision-making.",
    learningHighlight:
      "using metrics and visualization to tell clear stories and guide decisions at scale.",
  },
];



export default function Experience() {
  return (
    <section className="max-w-5xl mx-auto py-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        <span className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#3d2852] to-[#6b5b95] bg-clip-text text-transparent">
          Where do I come from?
        </span>
      </h2>

      <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed">
      My experience spans from being on the floor using the product to designing and building it, giving me a holistic perspective on what it takes to create products that truly work.      </p>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-4 md:gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 md:w-32 md:h-32 bg-white border-2 md:border-4 border-gray-200 rounded-xl md:rounded-2xl flex items-center justify-center overflow-hidden p-2 md:p-3">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                {exp.role} 
              </h3>
              <p className="text-base text-gray-600 mb-4">{exp.period}</p>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                {exp.description}
              </p>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                <span className="font-bold">Most important thing I've learned here:</span> {exp.learningHighlight}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
