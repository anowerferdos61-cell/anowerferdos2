import React from 'react';
import { motion } from 'framer-motion';
import { Brain, FlaskConical, Code2, Rocket, BookOpen, Globe, CheckCircle2 } from 'lucide-react';

export default function WhyMeAndGoalsSection() {
  const whyMePoints = [
    {
      title: 'I Think Beyond Code',
      desc: 'I don\'t see development as simply writing lines of code. I try to understand the problem, the user, and the purpose behind the product.',
    },
    {
      title: 'I\'m a Builder',
      desc: 'Instead of only collecting certificates and tutorials, I continuously build real projects to test what I learn.',
    },
    {
      title: 'I\'m Curious',
      desc: 'Coming from a Chemistry background has taught me to observe, experiment, analyze, and solve problems systematically.',
    },
    {
      title: 'I\'m Still Growing',
      desc: 'I\'m at the beginning of my professional journey, which means I\'m hungry to learn, improve, and take on challenging problems.',
    },
  ];

  const interests = [
    { title: 'Problem Solving', icon: Brain, emoji: '🧠' },
    { title: 'Science', icon: FlaskConical, emoji: '🔬' },
    { title: 'Technology', icon: Code2, emoji: '💻' },
    { title: 'Startups & Products', icon: Rocket, emoji: '🚀' },
    { title: 'Continuous Learning', icon: BookOpen, emoji: '📚' },
    { title: 'Exploring Ideas', icon: Globe, emoji: '🌎' },
  ];

  const milestones = [
    { num: '01', title: 'Master Full-Stack Development' },
    { num: '02', title: 'Build Products Used by Real People' },
    { num: '03', title: 'Become a World-Class Software Engineer' },
  ];

  return (
    <section id="why-me" className="relative py-24 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-sky-100/40 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col items-start space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-sky-800 font-semibold">
          <span>SECTION 07</span>
          <span>•</span>
          <span>PERSPECTIVE & GOALS</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
          Why <span className="text-sky-700">Me?</span>
        </h2>
      </div>

      {/* Why Me Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
        {whyMePoints.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3"
          >
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal pl-8">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Beyond Code (Personal Interests) */}
      <div className="mb-24 space-y-6">
        <div className="text-sm font-mono text-slate-500 uppercase tracking-widest flex items-center gap-2">
          <span>BEYOND CODE</span>
          <span className="text-slate-400">//</span>
          <span className="text-xs text-slate-500 font-normal">Personal interests & curiosity</span>
        </div>

        <p className="text-base text-slate-600 font-normal max-w-3xl leading-relaxed">
          When I'm not coding, I enjoy learning about technology, exploring new ideas, studying science, improving my English communication, and thinking about products that could solve everyday problems.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pt-2">
          {interests.map((interest) => (
            <div
              key={interest.title}
              className="p-4 rounded-2xl bg-white border border-slate-200 text-center space-y-2 hover:border-sky-300 transition-colors shadow-xs"
            >
              <div className="text-2xl">{interest.emoji}</div>
              <div className="text-xs font-semibold text-slate-800">{interest.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Where I'm Going (Goals Milestone Showcase) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-8 sm:p-12 rounded-3xl bg-white border border-sky-200 space-y-8 shadow-sm relative overflow-hidden"
      >
        <div className="space-y-3">
          <div className="text-xs font-mono text-sky-700 uppercase tracking-widest font-bold">FUTURE VISION</div>
          <h3 className="text-3xl sm:text-5xl font-black text-slate-900">Where I'm Going</h3>
          <p className="text-base text-slate-600 font-normal max-w-2xl">
            My current goal is simple: become a strong software engineer capable of building products from idea to production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-100">
          {milestones.map((m) => (
            <div key={m.num} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-mono text-2xl font-black text-sky-700">{m.num}</span>
              <h4 className="text-sm font-bold text-slate-900">{m.title}</h4>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-slate-100 text-center sm:text-right">
          <p className="text-xs font-mono text-sky-800 italic font-medium">
            "This portfolio is not the final version of my journey. It's a snapshot of where I'm going."
          </p>
        </div>
      </motion.div>
    </section>
  );
}
