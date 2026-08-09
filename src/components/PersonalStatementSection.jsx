import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Quote } from 'lucide-react';

export default function PersonalStatementSection() {
  return (
    <section className="relative py-36 px-4 sm:px-8 max-w-6xl mx-auto flex flex-col items-center text-center overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-500/10 via-emerald-500/10 to-transparent rounded-full blur-[180px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 p-10 sm:p-16 rounded-3xl glass-panel border border-white/10 max-w-4xl w-full shadow-2xl"
      >
        <div className="w-12 h-12 rounded-full glass-pill border border-cyan-500/30 flex items-center justify-center mx-auto mb-8 text-cyan-300">
          <Quote className="w-6 h-6 rotate-180" />
        </div>

        <h2 className="text-3xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-8">
          "I want to build things <br />
          <span className="text-gradient-cyan">that actually matter."</span>
        </h2>

        <div className="w-24 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-400 mx-auto mb-8 opacity-60" />

        <p className="text-xl sm:text-2xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
          Education is where I started. <br className="hidden sm:inline" />
          <strong className="text-cyan-300 font-semibold">Building is where I'm going.</strong>
        </p>
      </motion.div>
    </section>
  );
}
