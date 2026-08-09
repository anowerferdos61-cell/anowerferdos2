import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Eye, FlaskConical, BrainCircuit } from 'lucide-react';

export default function MissionSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Scroll animations for sequential word reveals and depth shifts
  const word1Opacity = useTransform(scrollYProgress, [0.15, 0.3], [0.2, 1]);
  const word1Scale = useTransform(scrollYProgress, [0.15, 0.3], [0.85, 1]);
  const word1Z = useTransform(scrollYProgress, [0.15, 0.3], [-50, 0]);

  const word2Opacity = useTransform(scrollYProgress, [0.35, 0.5], [0.2, 1]);
  const word2Scale = useTransform(scrollYProgress, [0.35, 0.5], [0.85, 1]);
  const word2Z = useTransform(scrollYProgress, [0.35, 0.5], [-50, 0]);

  const word3Opacity = useTransform(scrollYProgress, [0.55, 0.7], [0.2, 1]);
  const word3Scale = useTransform(scrollYProgress, [0.55, 0.7], [0.85, 1]);
  const word3Z = useTransform(scrollYProgress, [0.55, 0.7], [-50, 0]);

  const pillars = [
    {
      word: 'Learn.',
      sub: 'Absorb Fundamental Principles',
      desc: 'Master chemistry concepts through clear visual models rather than abstract text equations.',
      icon: Eye,
      color: 'text-cyan-400',
      borderColor: 'border-cyan-500/30',
      glow: 'shadow-[0_0_30px_rgba(56,189,248,0.15)]',
      opacity: word1Opacity,
      scale: word1Scale,
      z: word1Z,
    },
    {
      word: 'Experiment.',
      sub: 'Simulate Real Reactivity',
      desc: 'Interact with virtual lab apparatus, manipulate molecular bonds, and observe immediate outcomes.',
      icon: FlaskConical,
      color: 'text-emerald-400',
      borderColor: 'border-emerald-500/30',
      glow: 'shadow-[0_0_30px_rgba(16,185,129,0.15)]',
      opacity: word2Opacity,
      scale: word2Scale,
      z: word2Z,
    },
    {
      word: 'Understand.',
      sub: 'Achieve True Mastery',
      desc: 'Connect theory to intuition. Transform memorized facts into permanent deep conceptual understanding.',
      icon: BrainCircuit,
      color: 'text-amber-300',
      borderColor: 'border-amber-500/30',
      glow: 'shadow-[0_0_30px_rgba(245,158,11,0.15)]',
      opacity: word3Opacity,
      scale: word3Scale,
      z: word3Z,
    },
  ];

  return (
    <section
      id="mission"
      ref={containerRef}
      className="relative min-h-screen py-32 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col justify-center overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Header Badge */}
      <div className="flex flex-col items-start space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-white/10 text-xs font-mono text-cyan-400">
          <span>SECTION 02</span>
          <span>•</span>
          <span>THE MISSION</span>
        </div>

        <h2 className="text-4xl sm:text-7xl font-black text-white tracking-tight leading-none">
          Make Learning <br className="hidden sm:inline" />
          <span className="text-gradient-cyan">Interactive.</span>
        </h2>
      </div>

      {/* Core Philosophy Statement */}
      <div className="max-w-3xl mb-24">
        <p className="text-xl sm:text-3xl text-slate-300 font-light leading-relaxed">
          "I believe students should not only read about concepts.{' '}
          <strong className="text-white font-semibold underline decoration-cyan-500/60 decoration-2 underline-offset-8">
            They should experience them.
          </strong>"
        </p>
      </div>

      {/* 3D Sequential Typography Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-container">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <motion.div
              key={pillar.word}
              style={{
                opacity: pillar.opacity,
                scale: pillar.scale,
                translateZ: pillar.z,
              }}
              className={`p-8 sm:p-10 rounded-3xl glass-panel border ${pillar.borderColor} ${pillar.glow} flex flex-col justify-between transition-all duration-300 hover:-translate-y-2`}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-white/10">
                    <Icon className={`w-7 h-7 ${pillar.color}`} />
                  </div>
                  <span className="font-mono text-xs text-slate-500 uppercase tracking-widest">Pillar</span>
                </div>

                <h3 className={`text-4xl sm:text-5xl font-black tracking-tight ${pillar.word === 'Learn.' ? 'text-white' : pillar.word === 'Experiment.' ? 'text-cyan-300' : 'text-emerald-300'}`}>
                  {pillar.word}
                </h3>

                <div className="font-mono text-xs text-slate-300 tracking-wider font-semibold uppercase">
                  {pillar.sub}
                </div>

                <p className="text-sm text-slate-400 leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>PEDAGOGY FOCUS</span>
                <span className={pillar.color}>100% VISUAL</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
