import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, GraduationCap, Code2, BookOpen, Target, Sparkles } from 'lucide-react';

export default function AboutSection() {
  const quickFacts = [
    { label: 'Name', value: 'Anower Ferdos', icon: User },
    { label: 'Role', value: 'Startup Founder & Software Developer', icon: Code2 },
    { label: 'Startup', value: 'Dr. Chem (drchemedu.com)', icon: Sparkles },
    { label: 'WhatsApp', value: '01303446161', icon: BookOpen },
    { label: 'Education', value: 'B.Sc. in Chemistry (Dhaka College)', icon: GraduationCap },
    { label: 'Based In', value: 'Bangladesh 🇧🇩', icon: MapPin },
    { label: 'Goal', value: 'Empower education through Dr. Chem & build scalable web applications.', icon: Target },
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
          <span>STARTUP & IDENTITY</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
          About <span className="text-sky-700">Me</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column — Editorial Story */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-6 text-slate-600 font-normal leading-relaxed text-base sm:text-lg"
        >
          <p className="text-xl sm:text-2xl text-slate-900 font-semibold leading-snug">
            Hi, I'm <span className="text-sky-700 font-bold">Anower Ferdos</span> — a Startup Founder building <a href="https://drchemedu.com" target="_blank" rel="noopener noreferrer" className="text-sky-700 font-bold underline hover:text-sky-800 transition-colors">Dr. Chem</a> (<span className="font-mono text-sky-700">drchemedu.com</span>) and a passionate software developer.
          </p>

          <p>
            Combining my background in Chemistry with modern software engineering, I founded Dr. Chem to revolutionize chemistry learning through interactive 3D simulations, AI tutors, and accessible digital education tools.
          </p>

          <p>
            I specialize in full-stack web technologies, modern frameworks, database architecture, and user-first product design.
          </p>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 text-slate-800 font-medium text-base shadow-sm">
            "I don't just write code. As a founder and developer, I design practical solutions, solve complex problems, and build digital platforms that add real value to students and users."
          </div>

          <p>
            From educational technology to personal digital products, I enjoy taking an idea from a simple concept and turning it into a functional experience.
          </p>

          <p className="text-sky-800 font-medium">
            I'm still learning, still experimenting, and still building — but every project brings me one step closer to becoming the developer I want to be.
          </p>
        </motion.div>

        {/* Right Column — Quick Facts Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6"
        >
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <span className="text-xs font-mono text-sky-700 uppercase tracking-widest font-bold">QUICK FACTS</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>

          <div className="space-y-3.5">
            {quickFacts.map((fact) => {
              const Icon = fact.icon;
              return (
                <div key={fact.label} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                    <Icon className="w-3.5 h-3.5 text-sky-600" />
                    <span>{fact.label}</span>
                  </div>
                  <div className="text-sm font-semibold text-slate-900 pl-5">{fact.value}</div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
