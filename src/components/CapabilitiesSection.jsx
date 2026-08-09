import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Bot, FlaskConical, Globe, Laptop, Puzzle, Sparkles, Layout } from 'lucide-react';

export default function CapabilitiesSection() {
  const currentlyBuilding = [
    {
      icon: Rocket,
      title: 'Full-Stack Development',
      desc: 'Building modern web applications with frontend, backend, databases, authentication, and deployment.',
      badge: 'Active Focus',
      color: 'text-cyan-400',
    },
    {
      icon: Bot,
      title: 'AI-Powered Applications',
      desc: 'Exploring how AI can be integrated into useful products rather than building AI features just for the sake of AI.',
      badge: 'Research & Labs',
      color: 'text-emerald-400',
    },
    {
      icon: FlaskConical,
      title: 'EdTech Innovations',
      desc: 'Working on technology that can make science and chemistry education more interactive and accessible.',
      badge: 'Dr. Chem Startup',
      color: 'text-amber-400',
    },
  ];

  const whatICanBuild = [
    {
      icon: Globe,
      title: 'Modern Websites',
      desc: 'Responsive, modern websites designed for businesses, individuals, and organizations.',
    },
    {
      icon: Laptop,
      title: 'Web Applications',
      desc: 'Functional web applications with frontend, backend, authentication, and database integration.',
    },
    {
      icon: Puzzle,
      title: 'Custom Digital Solutions',
      desc: 'Turning specific business or organizational problems into practical software solutions.',
    },
    {
      icon: Sparkles,
      title: 'AI-Powered Features',
      desc: 'Integrating AI assistants, intelligent search, automated workflows, and AI-powered experiences into applications.',
    },
    {
      icon: Layout,
      title: 'Interactive Interfaces',
      desc: 'Clean, responsive, and user-focused interfaces with modern UI patterns and animations.',
    },
  ];

  return (
    <section className="relative py-28 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col items-start space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-white/10 text-xs font-mono text-cyan-400">
          <span>SECTION 05</span>
          <span>•</span>
          <span>ACTIVE FOCUS & CAPABILITIES</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Currently Building & <span className="text-gradient-cyan">What I Can Build</span>
        </h2>
      </div>

      {/* Currently Building Block */}
      <div className="mb-20 space-y-6">
        <div className="text-sm font-mono text-slate-400 uppercase tracking-widest flex items-center gap-2">
          <span>CURRENTLY BUILDING</span>
          <span className="text-slate-600">//</span>
          <span className="text-xs text-slate-500 font-normal">Active product development areas</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentlyBuilding.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl glass-panel border border-cyan-500/30 space-y-4 shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-2xl bg-slate-900 border border-white/10 ${item.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400 bg-slate-950 px-2.5 py-1 rounded-full border border-cyan-500/30 font-semibold">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* What I Can Build Grid */}
      <div className="space-y-6">
        <div className="text-sm font-mono text-slate-400 uppercase tracking-widest flex items-center gap-2">
          <span>WHAT I CAN BUILD FOR YOU</span>
          <span className="text-slate-600">//</span>
          <span className="text-xs text-slate-500 font-normal">Solutions & services</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatICanBuild.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl glass-card border border-white/10 hover:border-white/20 transition-all space-y-3"
              >
                <div className="p-2.5 rounded-xl bg-slate-900 border border-white/10 w-fit text-cyan-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
