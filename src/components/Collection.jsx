import React from 'react';

const items = [
  {
    name: 'No. 01 — Veil',
    note: 'Iris, bergamot, white amber',
    color: 'from-purple-200/70 to-violet-100/70 dark:from-purple-500/10 dark:to-violet-500/10',
  },
  {
    name: 'No. 02 — Lumen',
    note: 'Pear, jasmine, cashmere wood',
    color: 'from-pink-200/70 to-rose-100/70 dark:from-pink-500/10 dark:to-rose-500/10',
  },
  {
    name: 'No. 03 — Slate',
    note: 'Cedar, cardamom, tonka',
    color: 'from-slate-200/70 to-slate-100/70 dark:from-slate-500/10 dark:to-slate-500/10',
  },
];

export default function Collection() {
  return (
    <section id="collection" className="relative py-24 sm:py-28 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">The Collection</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400 max-w-xl">A refined curation of everyday signatures. Minimal, versatile, and distinctly ANAZ.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-full border border-neutral-300/70 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors text-sm">Request a sample</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.name} className={`group relative rounded-2xl p-6 border border-neutral-200/70 dark:border-neutral-800 bg-gradient-to-br ${item.color} overflow-hidden` }>
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/30 dark:bg-white/5 blur-2xl" />
              <div className="relative">
                <h3 className="text-lg font-medium text-neutral-900 dark:text-white">{item.name}</h3>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{item.note}</p>
                <button className="mt-5 inline-flex items-center gap-2 text-sm text-neutral-900 dark:text-white/90 hover:underline underline-offset-4">View details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
