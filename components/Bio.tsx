'use client';

import { useCompany } from '@/hooks/useCompany';

export default function Bio() {
  const company = useCompany();

  return (
    <section className="max-w-5xl mx-auto py-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        <span className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#3d2852] to-[#6b5b95] bg-clip-text text-transparent">
          Who am I?
        </span>
      </h2>

      <div className="space-y-4 text-gray-700">
        <p className="text-lg md:text-2xl leading-relaxed">
          I&apos;m a <span className="font-semibold text-purple-700">builder at heart </span>who loves to create products from concept to launch: product strategy, development, design, and go-to-market.
          There&apos;s nothing more rewarding than crafting experiences that genuinely empower people.
        </p>

        <p className="text-sm md:text-lg leading-relaxed">
          On weekdays, I lead product development for warehouse automation software at Honeywell, working cross-functionally with engineering,
          design, and business teams to deliver features that drove measurable outcomes.
        </p>

        <p className="text-sm md:text-lg leading-relaxed">
          At night and on weekends, I dwell in <span className="font-semibold text-purple-700">edtech</span>: building
          products that help learners succeed, stay engaged, and achieve their goals.
        </p>

        <p className="text-sm md:text-lg leading-relaxed">
          I don&apos;t just define requirements and hand them off. I <span className="font-semibold">code</span>,
          I <span className="font-semibold">design</span>,
          I <span className="font-semibold">analyze data</span>,
          and I understand what it takes to <span className="font-semibold">launch and market products</span> that resonate with users.
          This end-to-end perspective lets me ship faster, collaborate deeper, and build products that truly work.
        </p>

        <div className="relative bg-[#f5f9ff] border border-[#e2e8f0] rounded-2xl px-5 py-6 mt-6 flex items-center gap-3 shadow-sm">
          <p className="text-sm md:text-lg font-bold text-[#283d51] leading-snug flex flex-wrap items-center gap-2">
            Now, I'm looking to tackle my next challenge: shaping learning products where design, technology, and strategy come together.
            I'd love to contribute to{' '}
            <span className="text-[#175cff] font-extrabold inline align-middle" style={{whiteSpace: 'nowrap'}}>
              {company.name}
              <img
                src={company.logo}
                alt={`${company.name} Logo`}
                className="inline w-5 h-5 md:w-7 md:h-7 ml-1 align-middle"
                style={{ verticalAlign: 'middle' }}
              />
            </span>
            {' '}and help learners succeed.
          </p>
        </div>
      </div>
    </section>
  );
}
