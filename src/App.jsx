import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BottomDock from './components/BottomDock';

export default function App() {
  return (
    <div className="bg-background text-on-surface font-body-md text-body-md min-h-screen relative selection:bg-primary-container selection:text-on-primary-container">
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-secondary-container/10 blur-[140px]" />
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-tertiary/10 blur-[130px]" />
      </div>

      {/* Floating Top Navigation */}
      <Navbar />

      {/* Main Page Layout */}
      <main className="flex flex-col relative w-full pt-16 bg-surface z-10 pb-28">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
        <Footer />
      </main>

      {/* Persistent Bottom Floating Pill Navigation */}
      <BottomDock />
    </div>
  );
}
