import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FlaskConical, Bot, Sparkles, BookOpen, Users, Play, ExternalLink, RefreshCw, Zap, CheckCircle2 } from 'lucide-react';

export default function DrChemSection() {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState('labs');
  const [reactionState, setReactionState] = useState({ reactantA: 'Na', reactantB: 'H2O', reacting: false, result: null });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // 3D Motion from background depth into foreground focus on scroll
  const cardZ = useTransform(scrollYProgress, [0.1, 0.45], [-120, 0]);
  const cardScale = useTransform(scrollYProgress, [0.1, 0.45], [0.85, 1]);
  const cardOpacity = useTransform(scrollYProgress, [0.1, 0.35], [0.4, 1]);
  const cardRotateX = useTransform(scrollYProgress, [0.1, 0.45], [15, 0]);

  const features = [
    {
      id: 'labs',
      title: 'Interactive Chemistry Labs',
      icon: FlaskConical,
      color: 'text-cyan-400',
      badge: '3D Simulation Engine',
      description: 'Virtual lab equipment allowing students to conduct experiments safely with instant visual outcomes.',
    },
    {
      id: 'ai-tutor',
      title: 'AI Chemistry Tutor',
      icon: Bot,
      color: 'text-emerald-400',
      badge: '24/7 AI Assistance',
      description: 'Step-by-step guidance, stoichiometry calculations, and real-time problem solving powered by custom chemistry LLM models.',
    },
    {
      id: 'interactive',
      title: 'Interactive Learning',
      icon: Sparkles,
      color: 'text-amber-400',
      badge: 'Visual Intuition',
      description: 'Drag-and-drop electron orbital structures, covalent/ionic bond formation, and dynamic molecular models.',
    },
    {
      id: 'nctb',
      title: 'NCTB-Based Curriculum',
      icon: BookOpen,
      color: 'text-blue-400',
      badge: 'National Curriculum',
      description: 'Tailored specifically for Bangladeshi secondary and higher secondary chemistry standards (Classes 9-12).',
    },
    {
      id: 'experience',
      title: 'Student & Teacher Experience',
      icon: Users,
      color: 'text-purple-400',
      badge: 'Dual Portal',
      description: 'Dedicated analytics dashboards for educators to track classroom progress and assign interactive homework.',
    },
  ];

  const handleSimulateReaction = () => {
    setReactionState((prev) => ({ ...prev, reacting: true, result: null }));
    setTimeout(() => {
      let outcome = '';
      if (reactionState.reactantA === 'Na' && reactionState.reactantB === 'H2O') {
        outcome = '2 Na + 2 H₂O → 2 NaOH + H₂ ↑ (Exothermic Vigor & Hydrogen Gas Bubbles)';
      } else if (reactionState.reactantA === 'H2' && reactionState.reactantB === 'O2') {
        outcome = '2 H₂ + O₂ → 2 H₂O (Synthesis of Pure Water Molecule)';
      } else {
        outcome = 'HCl + NaOH → NaCl + H₂O (Neutralization Heat + Salt Water)';
      }
      setReactionState((prev) => ({ ...prev, reacting: false, result: outcome }));
    }, 1200);
  };

  return (
    <section id="dr-chem" ref={containerRef} className="relative py-32 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[180px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col items-center text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-cyan-500/30 text-xs font-mono text-cyan-300">
          <FlaskConical className="w-3.5 h-3.5" />
          <span>SECTION 03 • FLAGSHIP STARTUP</span>
        </div>

        <h2 className="text-4xl sm:text-7xl font-extrabold text-white tracking-tight">
          Building <span className="text-gradient-cyan">Dr. Chem</span>
        </h2>
        <p className="text-xl text-slate-400 font-light max-w-2xl">
          Making Chemistry Learning Interactive, Visual, and Accessible.
        </p>
      </div>

      {/* 3D Product Showcase Window (Receding Z-Depth to Foreground Animation) */}
      <div className="perspective-container">
        <motion.div
          style={{
            scale: cardScale,
            opacity: cardOpacity,
            rotateX: cardRotateX,
            translateZ: cardZ,
          }}
          className="rounded-3xl glass-panel border border-white/15 p-6 sm:p-10 shadow-2xl preserve-3d"
        >
          {/* Mock Browser Header Dock */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              </div>
              <div className="hidden sm:flex items-center gap-2 px-4 py-1 rounded-full bg-slate-900 border border-white/10 text-xs font-mono text-slate-400">
                <span className="text-emerald-400">https://</span>
                <span className="text-white">drchem.app</span>
              </div>
            </div>

            <a
              href="#contact"
              className="flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>PLATFORM STATUS: IN DEVELOPMENT</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Feature Tabs Selector (Left Column) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Core Features</div>
              {features.map((feat) => {
                const Icon = feat.icon;
                const isSel = activeTab === feat.id;

                return (
                  <button
                    key={feat.id}
                    onClick={() => setActiveTab(feat.id)}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-start gap-4 border ${
                      isSel
                        ? 'bg-slate-900/90 border-cyan-500/40 shadow-[0_0_20px_rgba(56,189,248,0.15)] transform translate-x-1'
                        : 'bg-white/5 border-transparent hover:border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className={`p-2.5 rounded-xl bg-slate-950 border border-white/10 ${feat.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className={`font-bold text-sm ${isSel ? 'text-white' : 'text-slate-300'}`}>
                          {feat.title}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500 bg-slate-950 px-2 py-0.5 rounded border border-white/5">
                          {feat.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">{feat.description}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Live Interactive Reaction Sandbox Workspace (Right Column) */}
            <div className="lg:col-span-7 rounded-2xl bg-slate-950 border border-white/10 p-6 flex flex-col justify-between min-h-[460px] relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    Interactive Lab Simulator Sandbox
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-500">NCTB CLASS 9-12 DEMO</span>
              </div>

              {/* Central Flask & Reaction Display */}
              <div className="my-8 flex flex-col items-center justify-center text-center space-y-6">
                <div className="relative w-36 h-36 rounded-full bg-slate-900 border border-cyan-500/30 flex items-center justify-center shadow-inner">
                  {reactionState.reacting ? (
                    <motion.div
                      animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                      className="text-cyan-400"
                    >
                      <RefreshCw className="w-16 h-16" />
                    </motion.div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <FlaskConical className="w-16 h-16 text-cyan-400 animate-bounce" style={{ animationDuration: '3s' }} />
                      <div className="text-xs font-mono text-emerald-400 mt-1">
                        {reactionState.reactantA} + {reactionState.reactantB}
                      </div>
                    </div>
                  )}

                  {/* Reaction Sparks */}
                  <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-pulse" />
                </div>

                {/* Reaction Selector Switches */}
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <button
                    onClick={() => setReactionState({ reactantA: 'Na', reactantB: 'H2O', reacting: false, result: null })}
                    className={`px-3 py-1.5 rounded-lg font-mono text-xs border ${
                      reactionState.reactantA === 'Na' ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300' : 'bg-slate-900 border-white/10 text-slate-400'
                    }`}
                  >
                    Sodium + Water
                  </button>
                  <button
                    onClick={() => setReactionState({ reactantA: 'H2', reactantB: 'O2', reacting: false, result: null })}
                    className={`px-3 py-1.5 rounded-lg font-mono text-xs border ${
                      reactionState.reactantA === 'H2' ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300' : 'bg-slate-900 border-white/10 text-slate-400'
                    }`}
                  >
                    Hydrogen + Oxygen
                  </button>
                  <button
                    onClick={() => setReactionState({ reactantA: 'HCl', reactantB: 'NaOH', reacting: false, result: null })}
                    className={`px-3 py-1.5 rounded-lg font-mono text-xs border ${
                      reactionState.reactantA === 'HCl' ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300' : 'bg-slate-900 border-white/10 text-slate-400'
                    }`}
                  >
                    Acid + Base
                  </button>
                </div>

                {/* Trigger Reaction CTA */}
                <button
                  onClick={handleSimulateReaction}
                  disabled={reactionState.reacting}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-2 hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] transition-all"
                >
                  <Play className="w-4 h-4 fill-slate-950" />
                  <span>Simulate Reaction</span>
                </button>

                {/* Outcome Display */}
                {reactionState.result && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 font-mono text-xs flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{reactionState.result}</span>
                  </motion.div>
                )}
              </div>

              {/* Bottom Footer Callout */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>SIMULATION ENGINE v2.4</span>
                <span className="text-cyan-400 font-bold">DR. CHEM ECOSYSTEM</span>
              </div>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-lg font-bold text-white">Ready to transform chemistry learning?</div>
              <div className="text-xs text-slate-400">Visit <span className="text-cyan-400 font-mono font-semibold">drchemedu.com</span> and experience the future of EdTech.</div>
            </div>

            <a
              href="https://drchemedu.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400 text-slate-950 font-extrabold text-sm hover:shadow-[0_0_35px_rgba(56,189,248,0.5)] transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <span>Visit drchemedu.com →</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
