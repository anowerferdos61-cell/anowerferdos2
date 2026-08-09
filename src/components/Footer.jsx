import React from 'react';

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-slate-200 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Monogram & Title */}
      <div className="flex items-center gap-4">
        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-sky-600 to-cyan-500 flex items-center justify-center text-white font-black text-base shadow-xs">
          A
        </div>
        <div className="flex flex-col">
          <span className="text-base font-extrabold text-slate-900 tracking-tight">ANOWER FERDOS</span>
          <span className="text-xs text-slate-500 font-mono">Startup Founder @ <a href="https://drchemedu.com" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline font-semibold">Dr. Chem (drchemedu.com)</a> • Software Developer</span>
        </div>
      </div>

      {/* Footer Line */}
      <div className="text-xs text-sky-800 font-mono bg-slate-100 px-4 py-1.5 rounded-full border border-slate-200 font-medium">
        "Building digital platforms that solve real problems."
      </div>

      {/* Copyright */}
      <div className="text-xs text-slate-500 font-mono">
        © 2026 Anower Ferdos. All rights reserved.
      </div>
    </footer>
  );
}
