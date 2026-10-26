import React, { Suspense, lazy } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { personalInfo } from '../data/content';

// Lazy-load the heavy 3D scene so the hero renders instantaneously
const Hero3D = lazy(() => import('./Hero3D'));

function Hero3DFallback() {
  return (
    <div className="w-full h-[360px] rounded-xl bg-surface-container-lowest/60 border border-outline-variant/20 flex flex-col items-center justify-center gap-3">
      <div className="relative flex h-12 w-12 items-center justify-center">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/40 opacity-75" />
        <span className="relative inline-flex rounded-full h-8 w-8 bg-primary/20 border border-primary flex items-center justify-center">
          <span className="material-symbols-outlined text-primary text-[18px]">view_in_ar</span>
        </span>
      </div>
      <span className="font-code-mono-sm text-[12px] text-outline">
        Initializing WebGL 3D Canvas...
      </span>
    </div>
  );
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative px-margin-mobile pt-space-md pb-space-2xl flex flex-col gap-space-lg overflow-hidden max-w-5xl mx-auto w-full"
    >
      {/* Ambient Radiance Background Elements */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-primary/15 blur-[100px] pointer-events-none" />
      <div className="absolute top-48 right-0 w-60 h-60 rounded-full bg-secondary-container/10 blur-[90px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-space-lg w-full"
      >
        {/* Status Header Pill */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-space-xs self-start bg-surface-container-high/80 backdrop-blur-xl px-space-md py-space-xs rounded-full border border-outline-variant/30 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="font-code-mono-sm text-code-mono-sm text-primary tracking-wide">
            {personalInfo.statusSub}
          </span>
        </motion.div>

        {/* Main Typography Header */}
        <motion.div variants={itemVariants} className="flex flex-col gap-space-xs">
          <div className="flex items-baseline gap-space-xs">
            <span className="font-code-mono-sm text-code-mono-sm text-outline">
              {personalInfo.tagline}
            </span>
            <h1 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-fixed-dim to-secondary">
              {personalInfo.name}
            </h1>
          </div>
          <p className="font-headline-sm text-headline-sm md:text-headline-md text-on-surface font-semibold tracking-tight leading-snug">
            {personalInfo.headline}
          </p>
          <p className="font-code-mono-sm text-code-mono-sm text-on-surface-variant mt-space-xs">
            {personalInfo.subheadline}
          </p>
        </motion.div>

        {/* Interactive 3D Focal Object Container */}
        <motion.div
          variants={itemVariants}
          className="relative w-full rounded-2xl bg-surface-container-lowest/60 backdrop-blur-xl p-space-xs shadow-2xl border border-outline-variant/30 overflow-hidden group"
        >
          <Suspense fallback={<Hero3DFallback />}>
            <Hero3D />
          </Suspense>
        </motion.div>

        {/* Dual CTAs */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-space-sm w-full">
          <button
            onClick={() => scrollTo('projects')}
            className="w-full sm:flex-1 h-12 flex items-center justify-center gap-space-xs rounded-full bg-primary-container text-on-primary font-headline-sm text-headline-sm font-semibold shadow-[0_0_20px_rgba(20,184,166,0.35)] hover:shadow-[0_0_30px_rgba(20,184,166,0.55)] transition-all active:scale-95"
          >
            <span>View Projects</span>
            <span className="material-symbols-outlined text-[20px]">south_east</span>
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="w-full sm:flex-1 h-12 flex items-center justify-center gap-space-xs rounded-full bg-surface-container-high/60 backdrop-blur-xl border border-outline-variant/30 text-secondary font-headline-sm text-headline-sm font-semibold shadow-sm hover:border-secondary/40 transition-all active:scale-95"
          >
            <span>Contact Me</span>
            <span className="material-symbols-outlined text-[20px]">mail</span>
          </button>
        </motion.div>

        {/* Stat Chips Trio */}
        <motion.div variants={itemVariants} className="grid grid-cols-3 gap-space-xs pt-space-xs">
          {personalInfo.heroBadges.map((badge, idx) => (
            <div
              key={idx}
              className="bg-surface-container/70 backdrop-blur-md p-space-sm rounded-xl border border-outline-variant/20 flex flex-col items-center justify-center text-center shadow-sm"
            >
              <span className={`font-headline-sm text-headline-sm ${badge.color} font-bold`}>
                {badge.value}
              </span>
              <span className="font-label-badge text-[10px] text-on-surface-variant uppercase mt-1">
                {badge.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
