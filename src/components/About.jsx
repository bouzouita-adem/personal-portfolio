import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { personalInfo, rigSpecs } from '../data/content';

/**
 * About Section - Learner origin & hardware-to-code synergy
 */
export default function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="px-margin-mobile py-space-xl flex flex-col gap-space-lg max-w-5xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-1"
      >
        <div className="flex items-center gap-space-xs text-primary font-code-mono-sm text-code-mono-sm">
          <span className="material-symbols-outlined text-[18px]">terminal</span>
          <span>01 // ORIGIN & PHILOSOPHY</span>
        </div>
        <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">
          Silicon to DOM
        </h2>
      </motion.div>

      {/* Learner Bio Bento Card */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="bg-surface-container-low/80 backdrop-blur-xl p-space-lg rounded-2xl border border-outline-variant/30 shadow-md flex flex-col gap-space-md"
      >
        <p className="font-body-md text-body-md text-on-surface leading-relaxed">
          {personalInfo.bioP1}
        </p>
        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
          {personalInfo.bioP2}
        </p>

        {/* Live Counters */}
        <div className="grid grid-cols-3 gap-space-xs pt-space-xs bg-surface-container-lowest/60 rounded-xl p-space-sm border border-outline-variant/20">
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className={`font-code-mono-md text-code-mono-md ${stat.color} font-bold`}>
                {stat.value}
              </span>
              <span className="font-label-badge text-[9px] text-outline uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Hardware & Code Synergy Card */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, delay: 0.2 }}
        className="bg-surface-container-high/60 backdrop-blur-xl p-space-lg rounded-2xl border border-outline-variant/30 shadow-md flex flex-col gap-space-md"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            <div className="w-9 h-9 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary border border-secondary/30">
              <span className="material-symbols-outlined text-[18px]">memory</span>
            </div>
            <div>
              <span className="font-headline-sm text-headline-sm font-bold text-on-surface block">
                {rigSpecs.title}
              </span>
              <span className="font-code-mono-sm text-[11px] text-secondary">
                {rigSpecs.subtitle}
              </span>
            </div>
          </div>
          <span className="font-label-badge text-label-badge text-primary bg-primary/10 border border-primary/30 px-space-xs py-0.5 rounded-full">
            {rigSpecs.status}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs font-code-mono-sm text-code-mono-sm">
          {rigSpecs.specs.map((item, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest/70 p-space-sm rounded-xl border border-outline-variant/20 flex flex-col"
            >
              <span className="text-outline text-[11px]">{item.label}</span>
              <span className="text-on-surface font-semibold text-body-sm">{item.value}</span>
              <span className={`${item.color} text-[10px] mt-0.5`}>{item.detail}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
