import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/40 dark:bg-neutral-900/40 border-b border-white/30 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="tracking-widest text-xl font-semibold text-neutral-900 dark:text-white">ANAZ</a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-700 dark:text-neutral-300">
          <a href="#about" className="hover:text-neutral-900 dark:hover:text-white transition-colors">About</a>
          <a href="#collection" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Collection</a>
          <a href="#contact" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}
