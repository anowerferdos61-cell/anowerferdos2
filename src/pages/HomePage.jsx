import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import JourneySection from '../components/JourneySection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import CapabilitiesSection from '../components/CapabilitiesSection';
import PhilosophySection from '../components/PhilosophySection';
import WhyMeAndGoalsSection from '../components/WhyMeAndGoalsSection';
import GitHubSection from '../components/GitHubSection';
import ContactSection from '../components/ContactSection';

export default function HomePage({ onOpenContact, onOpenResume }) {
  return (
    <div className="space-y-16">
      <HeroSection onOpenContact={onOpenContact} onOpenResume={onOpenResume} />
      <AboutSection onOpenResume={onOpenResume} />
      <JourneySection />
      <SkillsSection />
      <ProjectsSection />
      <CapabilitiesSection />
      <PhilosophySection />
      <WhyMeAndGoalsSection />
      <GitHubSection />
      <ContactSection onOpenContact={onOpenContact} />
    </div>
  );
}
