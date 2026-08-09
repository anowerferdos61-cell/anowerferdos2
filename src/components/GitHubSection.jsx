import React from 'react';
import { motion } from 'framer-motion';
import { Code2, GitBranch, ArrowUpRight, Terminal } from 'lucide-react';

const GithubIcon = (props) => (
  <svg className="w-5 h-5 fill-current inline-block" viewBox="0 0 24 24" {...props}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export default function GitHubSection() {
  return (
    <section className="relative py-28 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-8 sm:p-12 rounded-3xl glass-panel border border-white/15 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-white/10 text-xs font-mono text-cyan-400">
            <GithubIcon className="w-3.5 h-3.5" />
            <span>OPEN SOURCE & REPOSITORIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Code. Build. <span className="text-gradient-cyan">Repeat.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            "My GitHub is where ideas become experiments, experiments become projects, and projects become lessons."
          </p>

          <div className="flex flex-wrap gap-4 pt-2 font-mono text-xs text-slate-400">
            <span className="flex items-center gap-1.5"><Code2 className="w-4 h-4 text-cyan-400" /> React, JS, Python, C++</span>
            <span className="flex items-center gap-1.5"><GitBranch className="w-4 h-4 text-emerald-400" /> Continuous Commits</span>
            <span className="flex items-center gap-1.5"><Terminal className="w-4 h-4 text-amber-400" /> Product Experiments</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 shrink-0">
          <a
            href="https://github.com/anowerferdos61-cell"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-950 font-extrabold text-sm sm:text-base shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:shadow-[0_0_45px_rgba(56,189,248,0.6)] transition-all flex items-center gap-3 transform hover:-translate-y-1"
          >
            <GithubIcon />
            <span>Explore My GitHub →</span>
          </a>

          <span className="text-[11px] font-mono text-slate-500">github.com/anowerferdos61-cell</span>
        </div>
      </motion.div>
    </section>
  );
}
