import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">Essence in Simplicity</h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400">ANAZ distills modern minimalism into nuanced fragrances. We believe the most compelling stories are told with restraint — clean compositions, elevated materials, and a focus on how scent shapes memory.</p>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400">Each bottle is a quiet statement: crafted in small batches, sustainably sourced, and designed to live beautifully in your space.</p>
          </div>
          <div className="relative rounded-2xl border border-neutral-200/70 dark:border-neutral-800 overflow-hidden">
            <div className="aspect-[4/3] w-full bg-gradient-to-br from-violet-200/60 via-white to-rose-100/40 dark:from-violet-500/10 dark:via-neutral-900 dark:to-rose-500/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
