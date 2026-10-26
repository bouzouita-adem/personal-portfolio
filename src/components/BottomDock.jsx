import React, { useState, useEffect } from 'react';

/**
 * BottomDock - Sticky bottom glassmorphic floating navigation pill
 */
export default function BottomDock() {
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Hero', icon: 'home' },
    { id: 'about', label: 'About', icon: 'account_circle' },
    { id: 'skills', label: 'Skills', icon: 'terminal' },
    { id: 'projects', label: 'Projects', icon: 'grid_view' },
    { id: 'contact', label: 'Contact', icon: 'send' },
  ];

  // IntersectionObserver to dynamically highlight the current visible section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed bottom-0 w-full z-50 pb-safe pointer-events-none px-margin-mobile mb-space-sm">
      <div className="pointer-events-auto max-w-md mx-auto h-16 rounded-full bg-surface-container-lowest/85 backdrop-blur-2xl border border-outline-variant/30 px-space-xs flex items-center justify-around shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8),0_0_20px_rgba(79,219,200,0.12)]">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={`flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all duration-200 active:scale-90 ${
                isActive
                  ? 'bg-primary/20 text-primary shadow-[0_0_12px_rgba(79,219,200,0.35)] scale-105'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
              aria-label={`Navigate to ${item.label}`}
            >
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              <span className="font-label-badge text-[9px] uppercase tracking-tight">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
