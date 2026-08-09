import React from 'react';
import { motion } from 'framer-motion';
import { Search, Hammer, RefreshCw } from 'lucide-react';

export default function ApproachSection() {
  const principles = [
    {
      num: '01',
      title: 'Understand the Problem',
      icon: Search,
      color: 'text-amber-400',
      borderColor: 'border-amber-500/30',
      desc: 'Deeply analyze student learning bottlenecks, curriculum hurdles, and classroom friction before writing a single line of code.',
    },
    {
      num: '02',
      title: 'Build the Solution',
      icon: Hammer,
      color: 'text-cyan-400',
      borderColor: 'border-cyan-500/30',
      desc: 'Architect high-fidelity, interactive 3D digital products and educational tools that directly address those pain points.',
    },
    {
      num: '03',
      title: 'Improve Through Feedback',
      icon: RefreshCw,
      color: 'text-emerald-400',
      borderColor: 'border-emerald-500/30',
      desc: 'Continuously iterate using real classroom metrics, educator insights, and direct student usability data.',
    },
  ];

  return (
    <section id="approach" className="relative py-32 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col items-start space-y-4 mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-white/10 text-xs font-mono text-cyan-400">
          <span>SECTION 06</span>
          <span>•</span>
          <span>BUILDING PHILOSOPHY</span>
        </div>

        <h2 className="text-4xl sm:text-7xl font-extrabold text-white tracking-tight leading-tight">
          I don't just teach. <br />
          <span className="text-gradient-cyan">I build.</span>
        </h2>
      </div>

      {/* 3 Core Principles Grid with Scroll Reveal */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {principles.map((p, idx) => {
          const Icon = p.icon;

          return (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`p-8 sm:p-10 rounded-3xl glass-panel border ${p.borderColor} flex flex-col justify-between space-y-6 hover:-translate-y-2 transition-transform duration-300`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xl font-black text-slate-500">{p.num}</span>
                  <div className="p-3 rounded-2xl bg-slate-900 border border-white/10">
                    <Icon className={`w-6 h-6 ${p.color}`} />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-wide">{p.title}</h3>

                <p className="text-xs text-slate-400 leading-relaxed font-light">{p.desc}</p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>PRINCIPLE</span>
                <span className={p.color}>EXECUTION READY</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
