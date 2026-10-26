import React from 'react';

/**
 * Footer - Back to top trigger and metadata
 */
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="px-margin-mobile pt-space-lg pb-space-2xl flex flex-col items-center gap-space-md text-center max-w-5xl mx-auto w-full">
      <div className="w-12 h-0.5 bg-surface-container-highest rounded-full" />
      <div className="flex items-center gap-space-md">
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant/30 flex items-center justify-center text-primary shadow-sm active:scale-90 hover:bg-surface-bright transition-all"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_upward</span>
        </button>
      </div>
      <p className="font-code-mono-sm text-[11px] text-outline max-w-sm leading-relaxed">
        Built with Vite, React, Tailwind CSS, Three.js &amp; Framer Motion for GitHub Pages deployment. Designed for bouzouita.
      </p>
    </footer>
  );
}
