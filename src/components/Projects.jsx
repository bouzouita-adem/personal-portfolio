import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { projects } from '../data/content';
import CalculatriceWidget from './CalculatriceWidget';

/**
 * TiltCard - 3D Tilt-on-hover card component
 * Uses spring physics for mouse perspective tilt.
 * Gracefully disables tilt on touch screens or when prefers-reduced-motion is enabled.
 */
function TiltCard({ children, className = '' }) {
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['6deg', '-6deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-6deg', '6deg']);

  const handleMouseMove = (e) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: shouldReduceMotion ? 0 : rotateX,
        rotateY: shouldReduceMotion ? 0 : rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`transition-shadow duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();
  const [bounceActive, setBounceActive] = useState(false);

  const triggerBounce = () => {
    setBounceActive(true);
    setTimeout(() => setBounceActive(false), 300);
  };

  return (
    <section
      id="projects"
      className="px-margin-mobile py-space-xl flex flex-col gap-space-lg max-w-5xl mx-auto w-full"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-1"
      >
        <div className="flex items-center gap-space-xs text-primary font-code-mono-sm text-code-mono-sm">
          <span className="material-symbols-outlined text-[18px]">view_quilt</span>
          <span>03 // FEATURED BUILDS</span>
        </div>
        <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">
          Selected Projects
        </h2>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Production-ready deployments showcasing responsive layout logic, keyboard events, and tactile UI feedback.
        </p>
      </motion.div>

      {/* PROJECT 1: Calculatrice (Featured) */}
      <TiltCard className="perspective-1000">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="bg-surface-container-low/90 backdrop-blur-2xl rounded-2xl p-space-lg border border-primary/30 shadow-2xl flex flex-col gap-space-md"
        >
          {/* Top row */}
          <div className="flex items-center justify-between">
            <span className="font-label-badge text-label-badge text-primary bg-primary/10 border border-primary/30 px-space-sm py-1 rounded-full uppercase tracking-wider">
              {projects[0].badge}
            </span>
            <div className="flex items-center gap-space-xs">
              <a
                href={projects[0].githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Calculatrice GitHub Repository"
                className="w-9 h-9 rounded-full bg-surface-container-high border border-outline-variant/30 flex items-center justify-center text-on-surface hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">code</span>
              </a>
              <a
                href="#calc-preview"
                aria-label="Try Calculatrice"
                className="w-9 h-9 rounded-full bg-surface-container-high border border-outline-variant/30 flex items-center justify-center text-on-surface hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="font-headline-md text-headline-md font-bold text-on-surface">
              {projects[0].title}
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              {projects[0].description}
            </p>
          </div>

          {/* Interactive Calculator Component */}
          <CalculatriceWidget />

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-space-xs font-code-mono-sm text-[11px] text-outline">
            {projects[0].tags.map((tag, idx) => (
              <span key={idx} className="bg-surface-container-high/80 px-space-xs py-0.5 rounded border border-outline-variant/20">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </TiltCard>

      {/* PROJECT 2: HardwarePulse */}
      <TiltCard className="perspective-1000">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-surface-container-low/80 backdrop-blur-xl rounded-2xl p-space-lg border border-outline-variant/30 shadow-md flex flex-col gap-space-md"
        >
          <div className="flex items-center justify-between">
            <span className="font-label-badge text-label-badge text-secondary bg-secondary-container/15 border border-secondary/30 px-space-sm py-1 rounded-full uppercase tracking-wider">
              {projects[1].badge}
            </span>
            <span className="material-symbols-outlined text-outline text-[20px]">monitor_heart</span>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="font-headline-md text-headline-md font-bold text-on-surface">
              {projects[1].title}
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              {projects[1].description}
            </p>
          </div>

          {/* Simulated Telemetry Sparkline */}
          <div className="bg-surface-container-lowest/80 rounded-xl p-space-md flex flex-col gap-space-xs border border-outline-variant/20">
            <div className="flex justify-between items-center font-code-mono-sm text-code-mono-sm">
              <span className="text-on-surface-variant text-[11px] flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
                {projects[1].sparkline.label}
              </span>
              <span className="text-secondary font-bold">{projects[1].sparkline.value}</span>
            </div>
            <svg
              className="w-full h-16 text-secondary"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 300 60"
            >
              <path
                d="M0,45 Q20,30 40,40 T80,20 T120,35 T160,15 T200,28 T240,10 T280,22 T300,18"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              />
              <path
                d="M0,45 Q20,30 40,40 T80,20 T120,35 T160,15 T200,28 T240,10 T280,22 T300,18 L300,60 L0,60 Z"
                fill="currentColor"
                fillOpacity="0.08"
              />
            </svg>
          </div>

          <div className="flex flex-wrap items-center gap-space-xs font-code-mono-sm text-[11px] text-outline">
            {projects[1].tags.map((tag, idx) => (
              <span key={idx} className="bg-surface-container-high/80 px-space-xs py-0.5 rounded border border-outline-variant/20">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </TiltCard>

      {/* PROJECT 3: MotionForge UI */}
      <TiltCard className="perspective-1000">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-surface-container-low/80 backdrop-blur-xl rounded-2xl p-space-lg border border-outline-variant/30 shadow-md flex flex-col gap-space-md"
        >
          <div className="flex items-center justify-between">
            <span className="font-label-badge text-label-badge text-tertiary bg-tertiary/10 border border-tertiary/30 px-space-sm py-1 rounded-full uppercase tracking-wider">
              {projects[2].badge}
            </span>
            <span className="material-symbols-outlined text-outline text-[20px]">animation</span>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="font-headline-md text-headline-md font-bold text-on-surface">
              {projects[2].title}
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              {projects[2].description}
            </p>
          </div>

          {/* Spring Physics Interactive Test Button */}
          <div className="bg-surface-container-lowest/80 p-space-md rounded-xl flex items-center justify-between border border-outline-variant/20">
            <div className="flex flex-col">
              <span className="font-code-mono-sm text-[11px] text-primary">SPRING DAMPING: 0.16</span>
              <span className="font-body-sm text-body-sm text-on-surface">Tap to trigger bounce:</span>
            </div>
            <motion.button
              type="button"
              onClick={triggerBounce}
              animate={{ scale: bounceActive ? 1.35 : 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              className="w-12 h-12 rounded-full bg-primary/20 text-primary border border-primary/40 flex items-center justify-center shadow-sm hover:bg-primary/30"
              aria-label="Trigger spring bounce demo"
            >
              <span className="material-symbols-outlined text-[20px]">touch_app</span>
            </motion.button>
          </div>

          <div className="flex flex-wrap items-center gap-space-xs font-code-mono-sm text-[11px] text-outline">
            {projects[2].tags.map((tag, idx) => (
              <span key={idx} className="bg-surface-container-high/80 px-space-xs py-0.5 rounded border border-outline-variant/20">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </TiltCard>
    </section>
  );
}
