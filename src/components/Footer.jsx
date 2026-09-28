import React from 'react';

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-slate-200 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Monogram & Title */}
      <div className="flex items-center gap-3.5">
        <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white font-extrabold text-xs shadow-xs">
          A
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-black text-slate-900 tracking-tight">Anower Ferdos</span>
          <span className="text-[11px] text-slate-500 font-mono">
            Founder @{' '}
            <a
              href="https://drchemedu.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-700 underline font-semibold hover:text-sky-800"
            >
              Dr. Chem (drchemedu.com)
            </a>{' '}
            • Full-Stack Engineer
          </span>
        </div>
      </div>

      {/* Philosophy pill */}
      <div className="text-[11px] text-slate-600 font-mono bg-slate-50 px-4 py-1.5 rounded-full border border-slate-200">
        "Turn complex ideas into scalable digital realities."
      </div>

      {/* Copyright */}
      <div className="text-xs text-slate-400 font-mono">
        © 2026 Anower Ferdos · Dhaka, Bangladesh
      </div>
    </footer>
  );
}
