import React from 'react';
import { motion } from 'framer-motion';
import { Search, Feather, Hammer, Users, RefreshCw } from 'lucide-react';

export default function PhilosophySection() {
  const principles = [
    {
      num: '01',
      title: 'Understand the Problem',
      icon: Search,
      desc: 'Before writing code, I try to understand what problem actually needs to be solved.',
      color: 'text-amber-400',
    },
    {
      num: '02',
      title: 'Build Simple',
      icon: Feather,
      desc: 'I believe good products don\'t need unnecessary complexity. Start simple, make it useful, then improve.',
      color: 'text-cyan-400',
    },
    {
      num: '03',
      title: 'Learn by Building',
      icon: Hammer,
      desc: 'Tutorials can teach concepts. Real projects teach engineering.',
      color: 'text-emerald-400',
    },
    {
      num: '04',
      title: 'Think Like a User',
      icon: Users,
      desc: 'A product isn\'t successful because the code is beautiful. It\'s successful when people can actually use it.',
      color: 'text-blue-400',
    },
    {
      num: '05',
      title: 'Keep Improving',
      icon: RefreshCw,
      desc: 'Technology changes constantly. My goal isn\'t to know everything — it\'s to keep learning.',
      color: 'text-purple-400',
    },
  ];

  return (
    <section id="philosophy" className="relative py-28 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Header */}
      <div className="flex flex-col items-start space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-white/10 text-xs font-mono text-cyan-400">
          <span>SECTION 06</span>
          <span>•</span>
          <span>DEVELOPMENT PHILOSOPHY</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          How I <span className="text-gradient-cyan">Think</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {principles.map((p, idx) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl glass-panel border border-white/15 space-y-4 flex flex-col justify-between hover:-translate-y-1 transition-transform"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-black text-slate-500">{p.num}</span>
                  <div className="p-3 rounded-2xl bg-slate-900 border border-white/10">
                    <Icon className={`w-5 h-5 ${p.color}`} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white">{p.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-light">{p.desc}</p>
              </div>

              <div className="pt-3 border-t border-white/10 text-[10px] font-mono text-slate-500 uppercase">
                CORE PRINCIPLE
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
