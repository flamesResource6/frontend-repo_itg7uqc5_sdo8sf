import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-neutral-200/70 dark:border-neutral-800 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-medium text-neutral-900 dark:text-white">ANAZ</h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">The fragrance of creativity — crafted in small batches.</p>
        </div>
        <div>
          <h4 className="text-sm font-medium text-neutral-900 dark:text-white">Contact</h4>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">hello@anaz.studio</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">+1 (555) 012-3456</p>
        </div>
        <div className="sm:text-right">
          <p className="text-sm text-neutral-500">© {new Date().getFullYear()} ANAZ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
