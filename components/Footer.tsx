'use client';

import { useCompany } from '@/hooks/useCompany';

export default function Footer() {
  const company = useCompany();

  // Don't render footer if no company is specified
  if (!company) {
    return null;
  }

  return (
    <footer className="max-w-4xl mx-auto px-6 py-8 text-center mb-12">
      <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
        This site was created exclusively for the{' '}
        <span className="font-bold text-[#3d2852]">
          {company.name} {company.role || 'Product Manager'} position
        </span>
        , so you should know, I'm very excited you're here! 🎉
      </p>
    </footer>
  );
}

