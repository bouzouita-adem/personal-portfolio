/**
 * PORTFOLIO CONTENT REPOSITORY
 * 
 * Edit this file to update your bio, social links, hardware specs,
 * skills, projects, and timeline without touching any UI components.
 */

export const personalInfo = {
  name: "bouzouita",
  shortHandle: "bz.",
  tagline: "const dev =",
  headline: "Crafting responsive interfaces with spring physics & modern web runtimes.",
  subheadline: "Junior Software Engineer • Web Development & Hardware Enthusiast • Open Source Contributor",
  status: "OPEN TO WORK",
  statusSub: "SYSTEM READY // OPEN FOR ROLES",
  location: "Paris / Remote",
  bioP1: "I am a curious, disciplined beginner software engineer learning in public. My path doesn’t start in abstract theory—it starts at the copper heat pipes and memory clocks of custom PC hardware, branching seamlessly up into clean semantic HTML5, expressive modern CSS, and reactive JavaScript runtimes.",
  bioP2: "Building custom desktop rigs taught me system thermals, voltage stability, and deterministic diagnosis. Writing front-end interfaces taught me ergonomics, accessibility, and micro-delight. Currently expanding into React, component design tokens, and Framer Motion spring dampening.",
  stats: [
    { label: "Git Commits", value: "318+", color: "text-primary" },
    { label: "Study Streak", value: "142d", color: "text-secondary" },
    { label: "Rig Uptime", value: "99.9%", color: "text-tertiary" },
  ],
  heroBadges: [
    { value: "[3+]", label: "Shipped Projects", color: "text-primary" },
    { value: "∞", label: "Always Learning", color: "text-secondary" },
    { value: "0.04s", label: "Spring Physics", color: "text-tertiary" },
  ]
};

export const rigSpecs = {
  title: "Lab Rig Spec",
  subtitle: "DIAGNOSTIC & DEV WORKBENCH",
  status: "ACTIVE",
  specs: [
    {
      label: "PROCESSOR",
      value: "AMD Ryzen 7 5800X",
      detail: "8C / 16T • 4.7GHz Boost",
      color: "text-primary",
    },
    {
      label: "COOLING LOOP",
      value: "Custom Loop 280mm",
      detail: "Idle: 31°C • Load: 64°C",
      color: "text-secondary",
    },
    {
      label: "SYSTEM MEMORY",
      value: "32GB DDR4 3600MHz",
      detail: "CL16 Low Latency",
      color: "text-primary",
    },
    {
      label: "DEV OS ROOT",
      value: "Arch / Fedora Dual",
      detail: "ZSH + Neovim Toolchain",
      color: "text-tertiary",
    },
  ]
};

export const skillsMarquee = [
  { name: "HTML5 Semantic", icon: "html", color: "text-primary" },
  { name: "CSS3 Grid/Flex", icon: "css", color: "text-secondary" },
  { name: "Vanilla JavaScript ES6+", icon: "javascript", color: "text-primary" },
  { name: "Git & GitHub Pages", icon: "terminal", color: "text-tertiary" },
  { name: "Tailwind CSS", icon: "style", color: "text-primary-fixed-dim" },
  { name: "React (Modern Hooks)", icon: "code_blocks", color: "text-secondary-fixed-dim" },
  { name: "Framer Motion Springs", icon: "motion_photos_on", color: "text-primary" },
  { name: "Three.js / WebGL", icon: "view_in_ar", color: "text-tertiary" },
  { name: "PC Thermal Diagnostics", icon: "hardware", color: "text-secondary" },
];

export const skillProficiencies = [
  {
    name: "Modern HTML5 & Accessibility (a11y)",
    percentage: 88,
    barColor: "bg-primary",
    textColor: "text-primary",
  },
  {
    name: "CSS3 Flexbox, CSS Grid & Tailwind",
    percentage: 84,
    barColor: "bg-primary-container",
    textColor: "text-primary",
  },
  {
    name: "JavaScript DOM Manipulation & Logic",
    percentage: 75,
    barColor: "bg-secondary",
    textColor: "text-secondary",
  },
  {
    name: "Hardware Architecture & Thermal Benchmarking",
    percentage: 92,
    barColor: "bg-tertiary",
    textColor: "text-tertiary",
  },
];

export const projects = [
  {
    id: "calculatrice",
    title: "Calculatrice",
    badge: "Featured • French UI",
    badgeColor: "text-primary bg-primary/10",
    description:
      "Browser-based calculator in French with neumorphic-glass hybrid styling. Supports keyboard listeners, automatic font size scaling for long numbers, an interactive calculation history tape, and quick teal/warm orange accent themes.",
    tags: ["Vanilla JS", "CSS Glassmorphism", "Keyboard Events", "GitHub Pages Ready"],
    githubUrl: "https://github.com/bouzouita/calculatrice",
    liveUrl: "#calc-preview",
    featured: true,
    hasInteractivePreview: true,
  },
  {
    id: "hardware-pulse",
    title: "HardwarePulse",
    badge: "Hardware Diagnostics",
    badgeColor: "text-secondary bg-secondary-container/15",
    description:
      "PC diagnostic dashboard & benchmark monitor. Visualizes live sensor telemetry, thermal choke thresholds, and multi-core CPU utilization curves.",
    tags: ["Canvas 2D", "System Sensors", "Stress Algorithms"],
    githubUrl: "https://github.com/bouzouita/hardware-pulse",
    liveUrl: "#",
    featured: false,
    sparkline: {
      label: "THERMAL DRIFT (CPU CORE #0)",
      value: "54.2°C",
    },
  },
  {
    id: "motion-forge",
    title: "MotionForge UI",
    badge: "Micro-Interactions",
    badgeColor: "text-tertiary bg-tertiary/10",
    description:
      "Hand-tuned micro-interaction repository inspired by 21st.dev. Features spring physics parameters, kinetic card sheen tokens, and copy-paste Tailwind snippets.",
    tags: ["Framer Motion Specs", "Spring Equations", "Tailwind Tokens"],
    githubUrl: "https://github.com/bouzouita/motion-forge",
    liveUrl: "#",
    featured: false,
    interactiveDamping: true,
  },
];

export const timelineEvents = [
  {
    year: "2024",
    tag: "HARDWARE & ARCHITECTURE",
    title: "Diagnostic Rigs & Assembly",
    description:
      "Mastered PC building fundamentals, thermal profiling, custom loop tuning, and bootloader debugging. Formed a bedrock understanding of how software engages with silicon.",
    color: "bg-secondary",
    tagColor: "text-secondary",
  },
  {
    year: "2024 Q3",
    tag: "WEB FUNDAMENTALS",
    title: "Semantic HTML, Modern CSS, ES6+",
    description:
      "Began full immersion in modern web architecture. Implemented accessible layouts, responsive Flexbox/Grid architectures, and clean JavaScript data flows.",
    color: "bg-tertiary",
    tagColor: "text-tertiary",
  },
  {
    year: "2025",
    tag: "COMPONENT SYSTEMS",
    title: "Calculatrice Launch & Production Prep",
    description:
      "Launched Calculatrice, deployed GitHub Pages infrastructure, and integrated spring-based micro-interactions with Three.js rendering pipelines. Ready for junior developer roles.",
    color: "bg-primary",
    tagColor: "text-primary",
  },
];

export const contactDetails = {
  formspreeEndpoint: "https://formspree.io/f/xbjnqweo", // Replace with your Formspree ID
  github: {
    handle: "github.com/bouzouita",
    url: "https://github.com/bouzouita",
  },
  email: {
    address: "bouzouita.dev@pm.me",
    mailto: "mailto:bouzouita.dev@pm.me",
  },
};
