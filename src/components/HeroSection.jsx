import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code2, Sparkles, Terminal, ShieldCheck, Laptop, Cpu, Activity, Globe, ExternalLink, Copy, Check, Zap, User } from 'lucide-react';

export default function HeroSection({ onOpenContact }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeCardMode, setActiveCardMode] = useState('photo'); // 'photo' | 'tech' | 'metrics'
  const [copiedCode, setCopiedCode] = useState(false);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    setMousePos({ x, y });
  };

  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 800], [1, 0.96]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0.6]);

  const copySnippet = () => {
    const code = `const founder = {
  name: "Anower Ferdos",
  role: "Startup Founder & Software Developer",
  startup: "Dr. Chem (drchemedu.com)",
  focus: ["React 19", "Three.js", "Node.js", "EdTech"],
  mission: "Solve real-world problems through software."
};`;
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <motion.section
      style={{ scale: heroScale, opacity: heroOpacity }}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-28 pb-16 flex flex-col items-center justify-center overflow-hidden px-4 sm:px-8 z-10"
    >
      {/* Subtle Ambient Lighting Overlay */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-sky-200/20 rounded-full blur-[140px] pointer-events-none"
        style={{
          transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)`,
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-slate-200/30 rounded-full blur-[140px] pointer-events-none"
        style={{
          transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)`,
        }}
      />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        {/* Left Column — Headline & Identity */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-8">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-sky-50/80 backdrop-blur-sm border border-sky-200/80 text-sky-900 text-xs font-mono tracking-wide shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-sky-600 animate-ping" />
            <span>Startup Founder @ Dr. Chem (drchemedu.com) & Software Developer</span>
          </motion.div>

          {/* Main Headline */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-xs font-mono text-sky-700 tracking-[0.25em] uppercase font-bold"
            >
              ANOWER FERDOS
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08]"
            >
              I Build Digital Experiences <br className="hidden sm:inline" />
              <span className="text-sky-700">That Solve Real Problems.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xs sm:text-sm font-mono text-slate-700 flex flex-wrap items-center gap-2 pt-2"
            >
              <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-800">Startup Founder</span>
              <span>•</span>
              <span className="px-2.5 py-1 rounded-md bg-sky-100/70 border border-sky-200 text-sky-900">Founder @ Dr. Chem</span>
              <span>•</span>
              <span className="px-2.5 py-1 rounded-md bg-indigo-50 border border-indigo-200 text-indigo-900">Software Developer</span>
              <span>•</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-800">Product Builder</span>
            </motion.div>
          </div>

          {/* Subheadline Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed"
          >
            I'm Anower Ferdos, a Startup Founder working on <a href="https://drchemedu.com" target="_blank" rel="noopener noreferrer" className="text-sky-700 font-semibold underline hover:text-sky-800 transition-colors">Dr. Chem</a> (<span className="font-mono text-sky-700">drchemedu.com</span>) and a passionate software developer building modern, impactful digital products.
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
              className="group px-7 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-3 transform hover:-translate-y-0.5"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-sky-400" />
            </a>

            <button
              onClick={onOpenContact}
              className="px-7 py-4 rounded-full bg-white border border-slate-300 text-slate-800 font-semibold text-sm sm:text-base hover:bg-slate-50 hover:border-sky-500/50 shadow-xs transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Let's Connect →
            </button>
          </motion.div>
        </div>

        {/* Right Column — Editorial Hardware Photo Frame */}
        <div className="lg:col-span-5 flex justify-center items-center relative perspective-container">
          {/* Soft Shadow Glow Behind Card */}
          <div
            className="absolute inset-0 rounded-3xl bg-slate-200/50 blur-2xl transform scale-105 pointer-events-none"
            style={{
              transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)`,
            }}
          />

          <motion.div
            animate={{
              rotateX: mousePos.y * -6,
              rotateY: mousePos.x * 8,
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="relative w-full max-w-md rounded-3xl p-1.5 bg-white border border-slate-200 shadow-xl preserve-3d group overflow-hidden"
          >
            {/* Floating Badges */}
            <div className="absolute -top-3 -right-3 z-30 w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-sky-600 animate-float">
              <Code2 className="w-5 h-5" />
            </div>
            <div
              className="absolute -bottom-3 -left-3 z-30 w-12 h-12 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-emerald-600 animate-float"
              style={{ animationDelay: '2s' }}
            >
              <Sparkles className="w-5 h-5" />
            </div>

            {/* macOS Window Title Bar */}
            <div className="px-4 py-3 bg-slate-100/90 border-b border-slate-200 flex items-center justify-between rounded-t-3xl z-20 relative">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
              </div>
              <div className="text-[11px] font-mono text-slate-700 font-semibold flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-sky-600" />
                <span>ANOWER FERDOS</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono text-emerald-700 font-semibold">FOUNDER</span>
              </div>
            </div>

            {/* Mode Switcher Tabs */}
            <div className="p-1.5 bg-slate-50 border-b border-slate-200 flex items-center gap-1">
              <button
                onClick={() => setActiveCardMode('photo')}
                className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-mono transition-all flex items-center justify-center gap-1.5 ${
                  activeCardMode === 'photo'
                    ? 'bg-white text-sky-700 font-bold border border-slate-200 shadow-xs'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>Portrait</span>
              </button>
              <button
                onClick={() => setActiveCardMode('tech')}
                className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-mono transition-all flex items-center justify-center gap-1.5 ${
                  activeCardMode === 'tech'
                    ? 'bg-white text-emerald-700 font-bold border border-slate-200 shadow-xs'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Tech Spec</span>
              </button>
              <button
                onClick={() => setActiveCardMode('metrics')}
                className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-mono transition-all flex items-center justify-center gap-1.5 ${
                  activeCardMode === 'metrics'
                    ? 'bg-white text-indigo-700 font-bold border border-slate-200 shadow-xs'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span>Stats</span>
              </button>
            </div>

            {/* Card Content Area */}
            <div className="relative w-full aspect-[4/5] rounded-b-3xl overflow-hidden bg-slate-100 flex flex-col justify-between">
              {activeCardMode === 'photo' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full relative group/img"
                >
                  <img
                    src="/anower-hero.jpg"
                    alt="Anower Ferdos — Startup Founder & Software Developer"
                    className="w-full h-full object-cover object-top filter brightness-105 contrast-105 group-hover/img:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* Bottom Editorial Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 flex items-center justify-between shadow-lg">
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-900 font-mono tracking-wider font-bold">ANOWER FERDOS</span>
                      <span className="text-xs text-slate-600 font-medium">Startup Founder @ Dr. Chem</span>
                    </div>
                    <a
                      href="https://drchemedu.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[10px] font-mono text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200 hover:bg-sky-100 transition-colors shadow-xs"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                      <span>drchemedu.com</span>
                    </a>
                  </div>
                </motion.div>
              )}

              {activeCardMode === 'tech' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 h-full bg-white flex flex-col justify-between space-y-4"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="text-xs font-mono text-emerald-700 uppercase font-semibold">FOUNDER & DEV SPEC</span>
                    <button
                      onClick={copySnippet}
                      className="text-[11px] font-mono text-slate-500 hover:text-sky-600 flex items-center gap-1 transition-colors"
                    >
                      {copiedCode ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedCode ? 'Copied!' : 'Copy Object'}</span>
                    </button>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900 text-slate-100 font-mono text-xs leading-relaxed overflow-x-auto space-y-1 shadow-sm">
                    <div><span className="text-purple-400">const</span> <span className="text-amber-300">founder</span> = &#123;</div>
                    <div className="pl-4"><span className="text-sky-300">name</span>: <span className="text-emerald-300">"Anower Ferdos"</span>,</div>
                    <div className="pl-4"><span className="text-sky-300">role</span>: <span className="text-emerald-300">"Startup Founder & Developer"</span>,</div>
                    <div className="pl-4"><span className="text-sky-300">startup</span>: <span className="text-emerald-300">"Dr. Chem (drchemedu.com)"</span>,</div>
                    <div className="pl-4"><span className="text-sky-300">tech</span>: [<span className="text-amber-300">"React"</span>, <span className="text-amber-300">"Three.js"</span>, <span className="text-amber-300">"Node"</span>],</div>
                    <div className="pl-4"><span className="text-sky-300">focus</span>: <span className="text-emerald-300">"Solving real problems"</span></div>
                    <div>&#125;;</div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-[11px] font-mono text-slate-500">PRIMARY TECH STACK:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {['JavaScript (ES6+)', 'React 19', 'Vite', 'Three.js', 'Tailwind CSS', 'Node.js', 'Git / GitHub'].map((tech) => (
                        <span key={tech} className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-800">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href="https://drchemedu.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-sky-600 text-white font-bold text-xs font-mono flex items-center justify-center gap-2 hover:bg-sky-500 transition-all shadow-sm"
                  >
                    <span>Visit drchemedu.com</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </motion.div>
              )}

              {activeCardMode === 'metrics' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 h-full bg-white flex flex-col justify-between space-y-4"
                >
                  <div className="text-xs font-mono text-indigo-700 uppercase font-semibold pb-1 border-b border-slate-100">
                    REAL-TIME STATS & IMPACT
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                      <div className="text-3xl font-black text-slate-900 font-mono">15+</div>
                      <div className="text-xs text-slate-600 font-medium">Projects Completed</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-200 space-y-1">
                      <div className="text-3xl font-black text-sky-800 font-mono">1</div>
                      <div className="text-xs text-sky-700 font-medium">Startup Founded</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-1">
                      <div className="text-3xl font-black text-emerald-800 font-mono">100%</div>
                      <div className="text-xs text-emerald-700 font-medium">User Centric</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1">
                      <div className="text-3xl font-black text-amber-800 font-mono">24/7</div>
                      <div className="text-xs text-amber-700 font-medium">Continuous Innovation</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 font-mono flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Degree: B.Sc. in Chemistry (Dhaka College)</span>
                  </div>

                  <button
                    onClick={() => setActiveCardMode('photo')}
                    className="w-full py-3 px-4 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-bold text-xs font-mono flex items-center justify-center gap-2 hover:bg-slate-200 transition-all"
                  >
                    <span>View Portrait Photo →</span>
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slogan Banner Below Hero */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl mx-auto mt-24 p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/80 text-center space-y-4 shadow-sm relative overflow-hidden"
      >
        <div className="text-xs font-mono text-sky-700 uppercase tracking-[0.2em] font-bold">FOUNDER SLOGAN</div>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          "I Don't Just Write Code. <span className="text-sky-700">I Build Solutions."</span>
        </h2>
        <p className="text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
          Turning ideas, problems, and possibilities into meaningful, high-performance digital experiences.
        </p>
      </motion.div>
    </motion.section>
  );
}
