import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpenCheck, Cpu, Rocket, ArrowUpRight } from 'lucide-react';

export default function WhatIBuildSection() {
  const cards = [
    {
      num: '01',
      title: 'EDUCATION',
      tagline: 'Designing better learning experiences.',
      icon: BookOpenCheck,
      description:
        'Crafting intuitive pedagogical methods, visual chemistry frameworks, and interactive learning journeys that make complex concepts effortless to master.',
      color: 'from-amber-500/20 via-cyan-500/10 to-transparent',
      borderColor: 'group-hover:border-amber-500/40',
      badgeColor: 'text-amber-400',
    },
    {
      num: '02',
      title: 'TECHNOLOGY',
      tagline: 'Turning educational ideas into digital products.',
      icon: Cpu,
      description:
        'Developing high-performance 3D visual simulation engines, web tools, and AI tutors designed specifically for student engagement and retention.',
      color: 'from-cyan-500/20 via-blue-500/10 to-transparent',
      borderColor: 'group-hover:border-cyan-500/40',
      badgeColor: 'text-cyan-400',
    },
    {
      num: '03',
      title: 'STARTUPS',
      tagline: 'Building products around real-world problems.',
      icon: Rocket,
      description:
        'Launching scalable EdTech solutions like Dr. Chem that address genuine curriculum challenges, empowering students and educators.',
      color: 'from-emerald-500/20 via-teal-500/10 to-transparent',
      borderColor: 'group-hover:border-emerald-500/40',
      badgeColor: 'text-emerald-400',
    },
  ];

  return (
    <section id="what-i-build" className="relative py-32 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col items-start space-y-4 mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-white/10 text-xs font-mono text-cyan-400">
          <span>SECTION 04</span>
          <span>•</span>
          <span>DOMAINS & CAPABILITIES</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          What <span className="text-gradient-cyan">I Build</span>
        </h2>
      </div>

      {/* 3 Interactive Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-container">
        {cards.map((card, idx) => {
          const Icon = card.icon;

          return (
            <TiltCard key={card.num} card={card} index={idx} Icon={Icon} />
          );
        })}
      </div>
    </section>
  );
}

function TiltCard({ card, index, Icon }) {
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setTransform({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className={`group relative p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 ${card.borderColor} shadow-xl hover:shadow-2xl preserve-3d cursor-pointer flex flex-col justify-between min-h-[380px] overflow-hidden`}
    >
      {/* Dynamic Background Hover Gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      />

      <div className="relative z-10 space-y-6">
        <div className="flex items-center justify-between">
          <span className="font-mono text-3xl font-black text-slate-600 group-hover:text-cyan-400 transition-colors">
            {card.num}
          </span>
          <div className="p-3 rounded-2xl bg-slate-900 border border-white/10 group-hover:scale-110 transition-transform">
            <Icon className={`w-6 h-6 ${card.badgeColor}`} />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-black text-white tracking-wide group-hover:text-cyan-300 transition-colors mb-2">
            {card.title}
          </h3>
          <p className="text-base text-slate-200 font-medium leading-tight">
            "{card.tagline}"
          </p>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed font-light">
          {card.description}
        </p>
      </div>

      {/* Footer link trigger */}
      <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-cyan-300">
        <span>LEARN MORE</span>
        <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </div>
    </motion.div>
  );
}
