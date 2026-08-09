import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Terminal, Database, Wrench, Compass, Sparkles } from 'lucide-react';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Layout,
      color: 'text-cyan-400',
      border: 'border-cyan-500/30',
      skills: [
        { name: 'HTML5', status: 'Comfortable' },
        { name: 'CSS3', status: 'Comfortable' },
        { name: 'JavaScript', status: 'Comfortable' },
        { name: 'React', status: 'Comfortable' },
        { name: 'Tailwind CSS', status: 'Comfortable' },
        { name: 'Responsive Web Design', status: 'Comfortable' },
        { name: 'UI/UX Implementation', status: 'Working Knowledge' },
      ],
    },
    {
      title: 'Programming',
      icon: Terminal,
      color: 'text-emerald-400',
      border: 'border-emerald-500/30',
      skills: [
        { name: 'C', status: 'Working Knowledge' },
        { name: 'C++', status: 'Working Knowledge' },
        { name: 'Python', status: 'Comfortable' },
        { name: 'Object-Oriented Programming', status: 'Comfortable' },
        { name: 'Data Structures & Algorithms', status: 'Learning' },
      ],
    },
    {
      title: 'Backend & Database',
      icon: Database,
      color: 'text-amber-400',
      border: 'border-amber-500/30',
      skills: [
        { name: 'REST APIs', status: 'Working Knowledge' },
        { name: 'PostgreSQL', status: 'Learning' },
        { name: 'Authentication', status: 'Working Knowledge' },
        { name: 'Database Design', status: 'Learning' },
        { name: 'Server-side Development', status: 'Learning' },
      ],
    },
    {
      title: 'Tools & Workflow',
      icon: Wrench,
      color: 'text-blue-400',
      border: 'border-blue-500/30',
      skills: [
        { name: 'Git', status: 'Comfortable' },
        { name: 'GitHub', status: 'Comfortable' },
        { name: 'VS Code', status: 'Comfortable' },
        { name: 'Figma', status: 'Working Knowledge' },
        { name: 'AI-assisted Development', status: 'Comfortable' },
        { name: 'Deployment & Hosting', status: 'Working Knowledge' },
      ],
    },
    {
      title: 'Currently Exploring',
      icon: Compass,
      color: 'text-purple-400',
      border: 'border-purple-500/30',
      fullWidth: true,
      skills: [
        { name: 'TypeScript', status: 'Currently Exploring' },
        { name: 'Next.js', status: 'Currently Exploring' },
        { name: 'AI/LLM Applications', status: 'Currently Exploring' },
        { name: 'RAG', status: 'Currently Exploring' },
        { name: 'Full-Stack Architecture', status: 'Currently Exploring' },
        { name: 'Cloud Technologies', status: 'Currently Exploring' },
      ],
    },
  ];

  const getBadgeStyle = (status) => {
    switch (status) {
      case 'Comfortable':
        return 'bg-emerald-950/80 text-emerald-300 border-emerald-500/30';
      case 'Working Knowledge':
        return 'bg-cyan-950/80 text-cyan-300 border-cyan-500/30';
      case 'Learning':
        return 'bg-amber-950/80 text-amber-300 border-amber-500/30';
      case 'Currently Exploring':
        return 'bg-purple-950/80 text-purple-300 border-purple-500/30';
      default:
        return 'bg-slate-900 text-slate-300 border-white/10';
    }
  };

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Header */}
      <div className="flex flex-col items-start space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-white/10 text-xs font-mono text-cyan-400">
          <span>SECTION 03</span>
          <span>•</span>
          <span>TECHNICAL SKILLS</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          What I <span className="text-gradient-cyan">Work With</span>
        </h2>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-8 rounded-3xl glass-panel border ${cat.border} space-y-6 ${
                cat.fullWidth ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-2xl bg-slate-900 border border-white/10 ${cat.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((s) => (
                  <div
                    key={s.name}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-950 border border-white/10 text-xs font-medium text-slate-200"
                  >
                    <span>{s.name}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${getBadgeStyle(s.status)}`}>
                      {s.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
