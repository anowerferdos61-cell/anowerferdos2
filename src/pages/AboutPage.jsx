import React from 'react';
import AboutSection from '../components/AboutSection';
import JourneySection from '../components/JourneySection';
import SkillsSection from '../components/SkillsSection';
import PhilosophySection from '../components/PhilosophySection';
import WhyMeAndGoalsSection from '../components/WhyMeAndGoalsSection';
import MissionSection from '../components/MissionSection';
import { motion } from 'framer-motion';
import { User, Sparkles, Download, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage({ onOpenResume }) {
  return (
    <div className="pt-24 sm:pt-28 pb-16 space-y-16">
      {/* Header Banner */}
      <section className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-white/80 border border-slate-200 p-8 sm:p-12 shadow-sm relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono font-medium">
              <User className="w-3.5 h-3.5" />
              <span>Biography & Background</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              About Anower Ferdos
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Passionate Full-Stack Developer & Modern Web Specialist dedicated to building high-performance, aesthetically rich digital solutions.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={onOpenResume}
              className="sparkle-btn-light w-full sm:w-auto text-xs py-3 px-5 rounded-full flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-sky-600" />
              <span>Preview CV</span>
            </button>
            <a
              href="/Anower_Ferdos_Resume.pdf"
              download="Anower_Ferdos_Resume.pdf"
              className="sparkle-btn w-full sm:w-auto text-xs py-3 px-5 rounded-full flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-500"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
          </div>

          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-sky-100/60 rounded-full blur-3xl pointer-events-none" />
        </motion.div>
      </section>

      <AboutSection onOpenResume={onOpenResume} />
      <MissionSection />
      <JourneySection />
      <SkillsSection />
      <PhilosophySection />
      <WhyMeAndGoalsSection />
    </div>
  );
}
