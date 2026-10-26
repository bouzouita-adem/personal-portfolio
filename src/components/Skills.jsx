import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { skillsMarquee, skillProficiencies } from '../data/content';

/**
 * Skills Section - Infinite Marquee & Animated Proficiency Matrix
 */
export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" className="py-space-xl flex flex-col gap-space-lg overflow-hidden max-w-5xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="px-margin-mobile flex flex-col gap-1"
      >
        <div className="flex items-center gap-space-xs text-secondary font-code-mono-sm text-code-mono-sm">
          <span className="material-symbols-outlined text-[18px]">developer_mode</span>
          <span>02 // SKILL SPECTRUM</span>
        </div>
        <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">
          Toolkit &amp; Frameworks
        </h2>
      </motion.div>

      {/* Infinite Auto-Scroll Marquee (Dual Set for seamless loop) */}
      <div className="relative w-full overflow-hidden py-space-xs mask-gradient">
        <div className="flex gap-space-sm w-max animate-marquee hover:[animation-play-state:paused]">
          {[...skillsMarquee, ...skillsMarquee].map((skill, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1.5 px-space-md py-space-xs rounded-full bg-surface-container-high/80 backdrop-blur-md border border-outline-variant/30 font-code-mono-sm text-code-mono-sm shadow-sm whitespace-nowrap transition-transform hover:scale-105"
            >
              <span className={`material-symbols-outlined text-[16px] ${skill.color}`}>
                {skill.icon}
              </span>
              <span className={skill.color}>{skill.name}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Animated Skill Proficiency Matrix */}
      <div className="px-margin-mobile flex flex-col gap-space-sm">
        <div className="bg-surface-container-low/70 backdrop-blur-xl p-space-lg rounded-2xl border border-outline-variant/30 shadow-md flex flex-col gap-space-md">
          {skillProficiencies.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center font-code-mono-sm text-code-mono-sm">
                <span className="text-on-surface font-medium">{item.name}</span>
                <span className={`${item.textColor} font-bold`}>{item.percentage}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden">
                <motion.div
                  className={`h-full ${item.barColor} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.1 * idx, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
