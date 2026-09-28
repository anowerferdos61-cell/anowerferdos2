import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Code2, Sparkles, ArrowUpRight } from 'lucide-react';

export default function AboutSection({ onOpenResume }) {
  const stats = [
    { label: 'Startup Founded', value: 'Dr. Chem', sub: 'Bangla-First EdTech Platform', icon: Sparkles },
    { label: 'Core Focus', value: 'Full-Stack & AI', sub: 'React, Node, Python, DB', icon: Code2 },
    { label: 'Education', value: 'B.Sc. in Chemistry', sub: 'Dhaka College', icon: GraduationCap },
    { label: 'Location', value: 'Dhaka, Bangladesh', sub: 'Open to Global Projects', icon: MapPin },
  ];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-100/40 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col items-start space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-sky-800 font-semibold">
          <span>SECTION 01</span>
          <span>•</span>
          <span>ABOUT & FOUNDER IDENTITY</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-4">
          <div>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
              Engineering with <span className="text-sky-700">Purpose.</span>
            </h2>
            <p className="text-lg text-slate-600 font-normal mt-2 max-w-2xl">
              Bridging educational science and full-stack software development to build real-world digital solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column — Editorial Story */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 space-y-6 text-slate-600 font-normal leading-relaxed text-base sm:text-lg"
        >
          <div className="p-6 rounded-3xl bg-white border border-sky-200/90 shadow-sm relative overflow-hidden">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-sky-100 rounded-full blur-xl pointer-events-none" />
            <p className="text-xl sm:text-2xl text-slate-900 font-bold leading-snug">
              "I don't just write code. As a founder and developer, I design scalable solutions, solve complex curriculum bottlenecks, and build digital platforms that add tangible value."
            </p>
          </div>

          <p>
            Combining my background in <span className="text-slate-900 font-semibold">Chemistry (Dhaka College)</span> with modern full-stack software engineering, I founded <a href="https://drchemedu.com" target="_blank" rel="noopener noreferrer" className="text-sky-700 font-bold underline hover:text-sky-800 transition-colors">Dr. Chem</a> (<span className="font-mono text-sky-700 text-sm">drchemedu.com</span>) to transform chemistry education through interactive virtual labs, 3D molecular simulations, and AI-assisted tutoring.
          </p>

          <p>
            Whether developing high-converting e-commerce engines like <strong>Corporate Technologies</strong>, academic dispatch platforms, or web services, my philosophy centers on <span className="text-slate-900 font-semibold">fast load times, rock-solid architecture, clean UX, and production-grade reliability</span>.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://drchemedu.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-mono font-bold hover:bg-sky-100 transition-colors"
            >
              <span>Explore Dr. Chem Ecosystem</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-300 text-slate-800 text-xs font-mono font-bold hover:bg-slate-50 hover:border-sky-400 hover:text-sky-700 transition-all shadow-xs"
            >
              <span>View & Download Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>

        {/* Right Column — Bento Stats Grid */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="p-5 rounded-3xl bg-white border border-slate-200 hover:border-sky-300 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">{stat.label}</span>
                  <div className="w-8 h-8 rounded-full bg-sky-50 border border-sky-200 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-sky-700" />
                  </div>
                </div>
                <div>
                  <div className="text-lg font-black text-slate-900 leading-tight">{stat.value}</div>
                  <div className="text-xs text-slate-500 font-mono mt-1">{stat.sub}</div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
