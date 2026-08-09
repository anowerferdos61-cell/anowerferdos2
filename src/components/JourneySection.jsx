import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, GraduationCap, School, Code2, Rocket } from 'lucide-react';

export default function JourneySection() {
  const timelineEvents = [
    {
      year: '2021',
      title: 'HSC — GPA 5.00',
      subtitle: 'Rajshahi Cantonment Board School & College',
      desc: 'Completed Higher Secondary Certificate education with top academic marks.',
      icon: School,
      color: 'text-amber-600',
      border: 'border-slate-200',
    },
    {
      year: '2022–Present',
      title: 'B.Sc. in Chemistry',
      subtitle: 'Dhaka College, Dhaka',
      desc: 'Currently pursuing undergraduate degree in Chemistry (4th Year / Undergraduate).',
      icon: GraduationCap,
      color: 'text-sky-600',
      border: 'border-sky-200',
    },
    {
      year: '2025–Present',
      title: 'Started My Programming Journey',
      subtitle: 'Fundamentals & Software Engineering',
      desc: 'Started learning programming, problem solving, C/C++, Python, OOP, DSA, and software development.',
      icon: Code2,
      color: 'text-emerald-600',
      border: 'border-slate-200',
    },
    {
      year: '2026',
      title: 'Started Building Real Products',
      subtitle: 'From Tutorials to Working Software',
      desc: 'Moved beyond tutorials and started developing real-world products, including educational technology and digital solutions.',
      icon: Rocket,
      color: 'text-sky-600',
      border: 'border-slate-200',
    },
    {
      year: 'Present',
      title: 'Building → Learning → Improving',
      subtitle: 'Full-Stack & Product Development',
      desc: 'Currently focused on full-stack development, product building, AI-assisted applications, and creating meaningful digital experiences.',
      icon: Rocket,
      color: 'text-indigo-600',
      border: 'border-slate-200',
    },
  ];

  return (
    <section id="journey" className="relative py-24 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-sky-100/40 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col items-start space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-sky-800 font-semibold">
          <span>SECTION 02</span>
          <span>•</span>
          <span>TIMELINE & EDUCATION</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
          My <span className="text-sky-700">Journey & Education</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column — Timeline */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="text-xl font-mono font-bold text-slate-900 tracking-wide mb-6">CAREER TIMELINE</h3>
          <div className="relative pl-6 border-l border-slate-300 space-y-8">
            {timelineEvents.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-sky-600 group-hover:scale-125 transition-transform shadow-xs" />

                  <div className={`p-6 rounded-2xl bg-white border ${item.border} shadow-xs hover:border-sky-300 transition-all space-y-2`}>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-sky-700 font-bold">{item.year}</span>
                      <Icon className={`w-4 h-4 ${item.color}`} />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                    <div className="text-xs font-mono text-slate-500">{item.subtitle}</div>
                    <p className="text-xs text-slate-600 leading-relaxed pt-2 font-normal">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Column — Education Details */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="text-xl font-mono font-bold text-slate-900 tracking-wide mb-6">ACADEMIC DEGREES</h3>

          {/* B.Sc Chemistry Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white border border-sky-200/90 space-y-4 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-sky-50 border border-sky-200 text-sky-700">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-sky-700 uppercase tracking-widest font-bold">DEGREE</span>
                <h4 className="text-xl font-extrabold text-slate-900">B.Sc. in Chemistry</h4>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700 font-mono">
              <div className="flex justify-between">
                <span className="text-slate-500">Institution:</span>
                <span className="text-slate-900 font-bold">Dhaka College, Dhaka</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Department:</span>
                <span className="text-slate-900 font-bold">Chemistry</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Status:</span>
                <span className="text-emerald-700 font-bold">4th Year / Undergraduate</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed font-normal pt-2">
              Studying chemistry while simultaneously developing professional skills in software engineering, programming, and technology.
            </p>
          </motion.div>

          {/* HSC Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-white border border-slate-200 space-y-4 shadow-xs"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600">
                <School className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-amber-700 uppercase tracking-widest font-bold">CERTIFICATE</span>
                <h4 className="text-lg font-bold text-slate-900">Higher Secondary Certificate (HSC)</h4>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700 font-mono">
              <div className="flex justify-between">
                <span className="text-slate-500">Institution:</span>
                <span className="text-slate-900 font-bold">Rajshahi Cantonment Board School & College</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Year:</span>
                <span className="text-slate-900 font-bold">2021</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">GPA:</span>
                <span className="text-emerald-700 font-bold">5.00</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
