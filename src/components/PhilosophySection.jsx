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
      color: 'text-amber-600',
    },
    {
      num: '02',
      title: 'Build Simple',
      icon: Feather,
      desc: 'I believe good products don\'t need unnecessary complexity. Start simple, make it useful, then improve.',
      color: 'text-sky-600',
    },
    {
      num: '03',
      title: 'Learn by Building',
      icon: Hammer,
      desc: 'Tutorials can teach concepts. Real projects teach engineering.',
      color: 'text-emerald-600',
    },
    {
      num: '04',
      title: 'Think Like a User',
      icon: Users,
      desc: 'A product isn\'t successful because the code is beautiful. It\'s successful when people can actually use it.',
      color: 'text-sky-700',
    },
    {
      num: '05',
      title: 'Keep Improving',
      icon: RefreshCw,
      desc: 'Technology changes constantly. My goal isn\'t to know everything — it\'s to keep learning.',
      color: 'text-indigo-600',
    },
  ];

  return (
    <section id="philosophy" className="relative py-24 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Header */}
      <div className="flex flex-col items-start space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-sky-800 font-semibold">
          <span>SECTION 06</span>
          <span>•</span>
          <span>DEVELOPMENT PHILOSOPHY</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
          How I <span className="text-sky-700">Think</span>
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
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between hover:-translate-y-1 transition-transform"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-black text-slate-300">{p.num}</span>
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                    <Icon className={`w-5 h-5 ${p.color}`} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900">{p.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{p.desc}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[10px] font-mono text-slate-400 uppercase">
                CORE PRINCIPLE
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
