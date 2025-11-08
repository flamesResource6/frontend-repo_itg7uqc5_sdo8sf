import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full grid place-items-center overflow-hidden bg-gradient-to-b from-violet-100 to-white dark:from-violet-900/30 dark:to-neutral-950 pt-20">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-neutral-900 dark:text-white">ANAZ</h1>
        <p className="mt-4 text-neutral-700/80 dark:text-neutral-300">A minimalist fragrance atelier. Crafted simplicity, bottled. Discover the essence of modern elegance.</p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#collection" className="px-5 py-2.5 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-colors">Explore Collection</a>
          <a href="#about" className="px-5 py-2.5 rounded-full border border-neutral-300/70 dark:border-neutral-700 hover:bg-white/60 dark:hover:bg-white/5 transition-colors">Our Story</a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent" />
    </section>
  );
}
