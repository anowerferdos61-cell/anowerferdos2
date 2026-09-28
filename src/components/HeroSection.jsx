import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ExternalLink, Check, FileSpreadsheet } from 'lucide-react';

export default function HeroSection({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <section className="relative z-10 w-full bg-[#FBFBFD] text-slate-900 overflow-hidden pt-24 sm:pt-28 pb-16 lg:pb-24">
      {/* Background Ambience & Subtle Tech Lines */}
      <div className="pointer-events-none absolute inset-0 bg-tech-lines opacity-40 z-0" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-sky-200/20 blur-[130px] z-0" />

      {/* Decorative Horizon Lines */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute bottom-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[92svh] w-full max-w-[1600px] flex-col px-4 sm:px-6 md:px-10 lg:px-12 justify-between">
        
        {/* Top Folio Header Bar */}
        <header className="relative z-10 flex items-center justify-between gap-4 pt-2">
          {/* Left Folio Mark */}
          <div className="hidden md:flex flex-col items-start gap-1 text-[10px] tracking-[0.22em] uppercase text-slate-500 font-semibold font-mono">
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-slate-400" />
              <span>A.F — FOLIO</span>
            </div>
            <span className="text-slate-400 pl-8">— vol. 01</span>
          </div>

          {/* Center Status Pill */}
          <div className="flex flex-1 justify-center">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-sky-200 bg-white/95 px-4 py-1.5 font-mono text-[10px] sm:text-xs font-semibold tracking-wider text-slate-800 uppercase shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-600" />
              </span>
              <span>Available for high-impact projects & EdTech · 24h reply</span>
            </span>
          </div>

          {/* Right Folio Mark */}
          <div className="hidden md:flex flex-col items-end gap-1 text-[10px] tracking-[0.22em] uppercase text-slate-500 font-semibold font-mono">
            <div className="flex items-center gap-2">
              <span>Dhaka · 2026</span>
              <span className="h-px w-6 bg-slate-400" />
            </div>
            <span className="text-slate-400 pr-8">— issue №01</span>
          </div>
        </header>

        {/* Central Headline & Value Prop */}
        <main className="relative z-10 flex flex-1 flex-col items-center justify-center py-10 lg:py-14 text-center max-w-5xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono text-sky-800 font-semibold uppercase tracking-wider mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>STARTUP FOUNDER & FULL-STACK SOFTWARE ENGINEER</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold text-slate-900 tracking-tight leading-[1.08] max-w-4xl"
          >
            Turn complex ideas into{' '}
            <span className="relative inline-block px-2 text-sky-700 italic">
              <span className="absolute inset-0 border border-sky-400 pointer-events-none rounded-xs" />
              <span className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-sky-600" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-sky-600" />
              <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-sky-600" />
              <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-sky-600" />
              scalable
            </span>{' '}
            software and{' '}
            <span className="relative inline-block px-2 text-sky-700 italic">
              <span className="absolute inset-0 border border-sky-400 pointer-events-none rounded-xs" />
              <span className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-sky-600" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-sky-600" />
              <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-sky-600" />
              <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-sky-600" />
              web apps
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base sm:text-lg text-slate-600 font-normal leading-relaxed"
          >
            Hi, I'm <span className="text-slate-900 font-semibold">Anower Ferdos</span> — Founder of{' '}
            <a
              href="https://drchemedu.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-700 font-semibold underline hover:text-sky-800 transition-colors"
            >
              Dr. Chem
            </a>{' '}
            (<span className="font-mono text-sky-700 text-sm">drchemedu.com</span>) and a passionate software developer building impactful, production-grade applications.
          </motion.p>

          {/* CTA Cluster */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="sparkle-btn w-full sm:w-auto px-7 py-3.5 text-sm"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenContact}
              className="sparkle-btn-light w-full sm:w-auto px-7 py-3.5 text-sm"
            >
              <span>Discuss a Project</span>
              <ExternalLink className="w-4 h-4 text-sky-600" />
            </button>
          </motion.div>
        </main>

        {/* Floating Before vs. After Interactive Canvas */}
        <div className="relative w-full max-w-6xl mx-auto my-6 lg:my-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Box: Before (The Manual Problem) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 p-6 rounded-3xl bg-slate-50/90 border border-slate-200/90 shadow-sm relative rotate-[-1deg] space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-rose-700 uppercase">01 • THE CHALLENGE</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Manual / Fragmented</span>
              </div>

              {/* Spreadsheet & Note mockup */}
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                    <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                    <span>Traditional_Curriculum_Notes.xlsx</span>
                  </div>
                  <div className="grid grid-cols-3 text-[10px] font-mono text-slate-500 bg-slate-50 p-1.5 rounded border border-slate-100">
                    <span>Theory</span>
                    <span>No Lab</span>
                    <span className="text-rose-600">Manual Check</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 shadow-xs">
                  <p className="text-xs text-amber-900 font-mono leading-relaxed">
                    📝 "Students memorize chemistry equations from paper notes without virtual 3D practice or lab access."
                  </p>
                </div>
              </div>

              {/* Pain points tag */}
              <div className="flex items-center gap-2 pt-2 text-[10px] font-mono font-bold uppercase tracking-wider text-rose-700">
                <span className="px-2 py-1 rounded bg-rose-50 border border-rose-200">✕ Slow</span>
                <span className="px-2 py-1 rounded bg-rose-50 border border-rose-200">✕ Theoretical Only</span>
                <span className="px-2 py-1 rounded bg-rose-50 border border-rose-200">✕ Hard to Scale</span>
              </div>
            </motion.div>

            {/* Center Indicator Pulse Arrow */}
            <div className="hidden lg:flex lg:col-span-2 flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-sky-50 border border-sky-300 flex items-center justify-center shadow-md animate-pulse-border">
                <ArrowRight className="w-5 h-5 text-sky-700" />
              </div>
              <span className="text-[10px] font-mono text-sky-700 font-bold uppercase mt-2">TRANSFORMED</span>
            </div>

            {/* Right Box: After (The Interactive Digital Solution) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 p-6 rounded-3xl bg-white border border-sky-300 shadow-md relative rotate-[1deg] space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-sky-700 uppercase">02 • THE SOLUTION</span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-mono font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  DR. CHEM & APPS
                </span>
              </div>

              {/* Dashboard Preview */}
              <div className="space-y-3">
                {/* Tabs */}
                <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl">
                  {['Dashboard', 'Virtual Lab', 'AI Tutor', 'Analytics'].map((t) => (
                    <button
                      key={t}
                      onClick={() => setActiveTab(t)}
                      className={`flex-1 py-1 rounded-lg text-[10px] font-mono font-bold transition-all ${
                        activeTab === t
                          ? 'bg-white text-sky-700 shadow-xs'
                          : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                {/* Metric chart box */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-slate-50 to-sky-50/40 border border-sky-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase">Interactive Engagement</div>
                      <div className="text-xl font-black text-slate-900">100% Visual</div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full">
                      ↑ 3D Simulations
                    </span>
                  </div>

                  {/* SVG Trace Line */}
                  <svg viewBox="0 0 200 36" className="w-full h-7" fill="none">
                    <path
                      d="M0,28 L20,24 L40,30 L60,18 L80,22 L100,12 L120,16 L140,8 L160,14 L180,4 L200,8"
                      stroke="#0284C7"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Activity Feed */}
                <div className="space-y-1.5 text-[11px] font-mono text-slate-600">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Virtual titration lab executed in real-time</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                    <span>AI-assisted explanation delivered in Bangla</span>
                  </div>
                </div>
              </div>

              {/* Success tags */}
              <div className="flex items-center gap-2 pt-2 text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700">
                <span className="px-2 py-1 rounded bg-emerald-50 border border-emerald-200">✓ Fast</span>
                <span className="px-2 py-1 rounded bg-emerald-50 border border-emerald-200">✓ Interactive</span>
                <span className="px-2 py-1 rounded bg-emerald-50 border border-emerald-200">✓ Scalable</span>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
