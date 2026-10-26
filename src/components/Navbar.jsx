import React from 'react';
import { personalInfo } from '../data/content';

/**
 * Navbar - Floating frosted top bar with live status indicator
 */
export default function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 pt-safe px-margin-mobile">
      <div className="max-w-5xl mx-auto h-16 flex items-center justify-between mt-space-xs">
        {/* Brand identity pill */}
        <div className="flex items-center gap-space-sm bg-surface-container-low/70 backdrop-blur-xl rounded-full pl-space-sm pr-space-md py-space-xs border border-outline-variant/30 shadow-[0_1px_8px_rgba(0,0,0,0.25)]">
          <span className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold pl-space-xs">
            {personalInfo.shortHandle}
          </span>
          <div className="h-4 w-px bg-outline-variant/40" />
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="font-label-badge text-label-badge text-primary uppercase tracking-wider hidden sm:inline-block">
              {personalInfo.status}
            </span>
          </div>
        </div>

        {/* Right action group */}
        <div className="flex items-center gap-space-xs">
          <button
            onClick={() => scrollTo('contact')}
            className="hidden xs:inline-flex items-center justify-center h-11 px-space-md rounded-full bg-primary font-headline-sm text-label-badge text-on-primary font-semibold shadow-[0_0_16px_rgba(79,219,200,0.25)] hover:bg-primary-fixed hover:shadow-[0_0_24px_rgba(79,219,200,0.45)] transition-all active:scale-95"
          >
            CONTACT
          </button>

          <a
            href="https://github.com/bouzouita"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-11 h-11 flex items-center justify-center rounded-full bg-surface-container-low/70 backdrop-blur-xl border border-outline-variant/30 text-on-surface hover:text-primary transition-colors active:scale-95"
          >
            <span className="material-symbols-outlined text-[20px]">code</span>
          </a>

          <div
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_0_12px_rgba(79,219,200,0.4)]"
            title="bouzouita avatar"
          >
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>
  );
}
