import React from 'react';
import ProjectsSection from '../components/ProjectsSection';
import GitHubSection from '../components/GitHubSection';
import WhatIBuildSection from '../components/WhatIBuildSection';
import { motion } from 'framer-motion';
import { Layers, Sparkles } from 'lucide-react';

export default function ProjectsPage({ onOpenContact }) {
  return (
    <div className="pt-24 sm:pt-28 pb-16 space-y-16">
      {/* Header Banner */}
      <section className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-white/80 border border-slate-200 p-8 sm:p-12 shadow-sm relative overflow-hidden"
        >
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono font-medium">
              <Layers className="w-3.5 h-3.5" />
              <span>Full Portfolio Catalog</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Featured Work & Systems
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Explore my curated collection of production web apps, full-stack architectures, interactive 3D experiences, and developer tools.
            </p>
          </div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-sky-100/60 rounded-full blur-3xl pointer-events-none" />
        </motion.div>
      </section>

      {/* Projects Showcase Component */}
      <ProjectsSection />

      {/* What I build */}
      <WhatIBuildSection />

      {/* GitHub Section */}
      <GitHubSection />
    </div>
  );
}
