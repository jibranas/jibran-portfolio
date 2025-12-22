'use client';

import type { Stat } from '@/types';

function calculateAge(birthYear: number, birthMonth: number): number {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1; // JavaScript months are 0-indexed

  let age = currentYear - birthYear;
  if (currentMonth < birthMonth) {
    age--;
  }
  return age;
}

function calculateAgeWithMonths(birthYear: number, birthMonth: number): string {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1; // JavaScript months are 0-indexed

  let years = currentYear - birthYear;
  let months = currentMonth - birthMonth;

  if (months < 0) {
    years--;
    months += 12;
  }

  if (years < 0) {
    return "not yet born";
  }

  // If less than 1 year old, show only months
  if (years === 0) {
    return `${months}m`;
  }

  return `${years}y ${months}m`;
}

export default function Stats() {
  // Calculate ages dynamically
  const myAge = calculateAge(1994, 7); // Born July 1994
  const child1Age = calculateAgeWithMonths(2023, 4); // Born April 2023
  const child2Age = calculateAgeWithMonths(2025, 10); // Born October 2025

  // Calculate years since moving to USA
  const yearsSinceUSA = new Date().getFullYear() - 2016;

  const stats: Stat[] = [
    { number: `${myAge}y`, label: "old, born in 1994" },
    { number: `${yearsSinceUSA}y`, label: "since moving to USA" },
    { number: `${child1Age} + ${child2Age}`, label: "Zayd & Zunairah, my children" },
  ];

  return (
    <section className="max-w-5xl mx-auto py-8">
      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-[#f5f1e8] aspect-square md:aspect-auto p-3 md:p-8 text-center rounded-lg flex flex-col items-center justify-center"
          >
            <h4 className="text-xl md:text-4xl font-bold mb-1 md:mb-3">
              {stat.number}
            </h4>
            <p className="text-[10px] md:text-base text-gray-600 leading-tight md:leading-snug">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
