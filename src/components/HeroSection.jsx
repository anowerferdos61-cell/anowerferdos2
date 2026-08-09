import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code2, Sparkles, Terminal, ShieldCheck, Laptop } from 'lucide-react';

export default function HeroSection({ onOpenContact }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    setMousePos({ x, y });
  };

  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 800], [1, 0.94]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0.4]);

  return (
    <motion.section
      style={{ scale: heroScale, opacity: heroOpacity }}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-28 pb-16 flex flex-col items-center justify-center overflow-hidden px-4 sm:px-8"
    >
      {/* Ambient Lighting Background */}
      <div
        className="absolute top-1/4 left-1/4 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none"
        style={{
          transform: `translate(${mousePos.x * 25}px, ${mousePos.y * 25}px)`,
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none"
        style={{
          transform: `translate(${mousePos.x * -25}px, ${mousePos.y * -25}px)`,
        }}
      />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        {/* Left Column — Headline & Identity */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-8">
          {/* Small Status Line Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-pill border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wide"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>Startup Founder @ Dr. Chem (drchemedu.com) & Software Developer</span>
          </motion.div>

          {/* Main Headline */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-xs font-mono text-cyan-400 tracking-widest uppercase font-bold"
            >
              ANOWER FERDOS
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
            >
              I Build Digital Experiences <br className="hidden sm:inline" />
              <span className="text-gradient-cyan">That Solve Real Problems.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-sm sm:text-base font-mono text-emerald-400 flex flex-wrap items-center gap-2 pt-2"
            >
              <span>Startup Founder</span>
              <span>•</span>
              <span>Founder @ Dr. Chem</span>
              <span>•</span>
              <span>Software Developer</span>
              <span>•</span>
              <span>Product Builder</span>
            </motion.div>
          </div>

          {/* Subheadline Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg sm:text-xl text-slate-300 max-w-2xl font-light leading-relaxed"
          >
            I'm Anower Ferdos, a Startup Founder working on <a href="https://drchemedu.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 font-semibold underline">Dr. Chem</a> (<span className="font-mono text-cyan-300">drchemedu.com</span>) and a passionate software developer building modern, impactful digital products.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="#projects"
              className="group px-7 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-950 font-bold text-sm sm:text-base shadow-[0_0_30px_rgba(56,189,248,0.35)] hover:shadow-[0_0_45px_rgba(56,189,248,0.6)] transition-all duration-300 flex items-center gap-3 transform hover:-translate-y-1"
            >
              <span>View My Work →</span>
            </a>

            <button
              onClick={onOpenContact}
              className="px-7 py-4 rounded-full glass-panel border border-white/20 text-white font-semibold text-sm sm:text-base hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300 transform hover:-translate-y-1"
            >
              Let's Connect →
            </button>
          </motion.div>
        </div>

        {/* Right Column — 3D Floating Portrait Card */}
        <div className="lg:col-span-5 flex justify-center items-center relative perspective-container">
          <div
            className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-emerald-500/10 to-transparent blur-3xl transform scale-110 pointer-events-none"
            style={{
              transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)`,
            }}
          />

          <motion.div
            animate={{
              rotateX: mousePos.y * -10,
              rotateY: mousePos.x * 12,
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="relative w-full max-w-md aspect-[4/5] rounded-3xl p-3 glass-panel border border-white/15 shadow-2xl preserve-3d group"
          >
            {/* Ambient Badges */}
            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full glass-pill border border-cyan-400/40 flex items-center justify-center text-cyan-300 animate-float">
              <Code2 className="w-6 h-6" />
            </div>
            <div
              className="absolute -bottom-4 -left-4 w-14 h-14 rounded-full glass-pill border border-emerald-400/40 flex items-center justify-center text-emerald-300 animate-float"
              style={{ animationDelay: '2s' }}
            >
              <Laptop className="w-6 h-6" />
            </div>

            {/* Inner Frame */}
            <div className="w-full h-full rounded-2xl overflow-hidden relative border border-white/10 bg-slate-950">
              <img
                src="/anower-portrait.jpg"
                alt="Anower Ferdos — Software Developer & Chemistry Student"
                className="w-full h-full object-cover object-top filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel border border-white/20 backdrop-blur-md flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-xs text-cyan-300 font-mono tracking-wider font-semibold">ANOWER FERDOS</span>
                  <span className="text-xs text-slate-300 font-medium">Startup Founder @ Dr. Chem</span>
                </div>
                <a
                  href="https://drchemedu.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[10px] font-mono text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded-full border border-cyan-500/40 hover:bg-cyan-900 transition-colors"
                >
                  <ShieldCheck className="w-3 h-3 text-cyan-400" />
                  <span>drchemedu.com</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Large Slogan Showcase Banner (Below Hero) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl mx-auto mt-24 p-8 sm:p-12 rounded-3xl glass-panel border border-white/10 text-center space-y-4 shadow-2xl relative overflow-hidden"
      >
        <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">PERSONAL SLOGAN</div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          "I Don't Just Write Code. <span className="text-gradient-cyan">I Build Solutions."</span>
        </h2>
        <p className="text-base sm:text-lg text-slate-400 font-light max-w-2xl mx-auto">
          Turning ideas, problems, and possibilities into meaningful digital experiences.
        </p>
      </motion.div>
    </motion.section>
  );
}
