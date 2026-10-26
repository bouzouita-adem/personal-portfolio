import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { timelineEvents } from '../data/content';

/**
 * Timeline Section - Visual roadmap of technical growth
 */
export default function Timeline() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="timeline" className="px-margin-mobile py-space-xl flex flex-col gap-space-lg max-w-5xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-1"
      >
        <div className="flex items-center gap-space-xs text-primary font-code-mono-sm text-code-mono-sm">
          <span className="material-symbols-outlined text-[18px]">timeline</span>
          <span>04 // TIMELINE</span>
        </div>
        <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">
          The Learning Log
        </h2>
      </motion.div>

      {/* Vertical Timeline Nodes */}
      <div className="flex flex-col gap-space-md relative pl-6 before:content-[''] before:absolute before:left-2 before:top-3 before:bottom-3 before:w-0.5 before:bg-surface-container-highest">
        {timelineEvents.map((node, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 * idx }}
            className="relative flex flex-col gap-1 pt-space-xs"
          >
            {/* Glowing dot */}
            <span
              className={`absolute -left-[27px] top-3 w-3.5 h-3.5 rounded-full ${node.color} shadow-[0_0_12px_rgba(79,219,200,0.6)] ring-4 ring-background`}
            />

            <span className={`font-code-mono-sm text-code-mono-sm ${node.tagColor} font-bold`}>
              {node.year} // {node.tag}
            </span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
              {node.title}
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              {node.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
