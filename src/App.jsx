import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Background3DCanvas from './components/Background3DCanvas';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import JourneySection from './components/JourneySection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import CapabilitiesSection from './components/CapabilitiesSection';
import PhilosophySection from './components/PhilosophySection';
import WhyMeAndGoalsSection from './components/WhyMeAndGoalsSection';
import GitHubSection from './components/GitHubSection';
import ContactSection from './components/ContactSection';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Initialize Lenis Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050608]/20 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* 3D Canvas Background */}
      <Background3DCanvas />

      {/* Navbar */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Flow */}
      <main className="relative z-10 space-y-12">
        <HeroSection onOpenContact={() => setIsContactOpen(true)} />
        <AboutSection />
        <JourneySection />
        <SkillsSection />
        <ProjectsSection />
        <CapabilitiesSection />
        <PhilosophySection />
        <WhyMeAndGoalsSection />
        <GitHubSection />
        <ContactSection onOpenContact={() => setIsContactOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Contact Inquiry Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
