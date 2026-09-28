import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer({ onOpenResume }) {
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

      {/* Quick Nav Links */}
      <div className="flex items-center gap-4 text-xs font-medium text-slate-600">
        <Link to="/" className="hover:text-sky-700 transition-colors">Home</Link>
        <Link to="/projects" className="hover:text-sky-700 transition-colors">Projects</Link>
        <Link to="/about" className="hover:text-sky-700 transition-colors">About</Link>
        <Link to="/contact" className="hover:text-sky-700 transition-colors">Contact</Link>
        <Link to="/resume" className="hover:text-sky-700 font-semibold text-sky-700 transition-colors">Resume (CV)</Link>
      </div>

      {/* Copyright */}
      <div className="text-xs text-slate-400 font-mono text-center md:text-right">
        © 2026 Anower Ferdos · Dhaka, Bangladesh
      </div>
    </footer>
  );
}
