import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { num: '01', name: 'Work', href: '#projects' },
    { num: '02', name: 'About', href: '#about' },
    { num: '03', name: 'Journey', href: '#journey' },
    { num: '04', name: 'Skills', href: '#skills' },
    { num: '05', name: 'Process', href: '#capabilities' },
    { num: '06', name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed left-1/2 top-4 sm:top-6 -translate-x-1/2 z-50 w-[92%] max-w-[1480px] transition-all duration-500 pointer-events-none">
      <nav className="flex items-center justify-between rounded-full bg-white/80 backdrop-blur-xl border border-slate-200/80 px-4 sm:px-6 py-2.5 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.08)] pointer-events-auto">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2 font-bold text-lg sm:text-xl tracking-tight text-slate-900 group">
          <span className="font-extrabold text-slate-900 group-hover:text-sky-700 transition-colors">
            Anower<span className="text-sky-600">.</span>
          </span>
          <span className="hidden md:inline-block px-2 py-0.5 rounded-full bg-sky-50 border border-sky-200 text-[10px] font-mono text-sky-800 font-semibold uppercase tracking-wider">
            Folio
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 font-sans text-xs sm:text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="transition-colors hover:text-sky-700 relative py-1 hover:font-semibold"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenContact}
            className="sparkle-btn text-xs py-2 px-4.5 rounded-full hidden sm:inline-flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-sky-300" />
            <span>Get in Touch</span>
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 rounded-full bg-slate-100 border border-slate-200 text-slate-900 hover:bg-slate-200 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mt-3 bg-white/95 backdrop-blur-2xl border border-slate-200 rounded-3xl p-6 shadow-2xl pointer-events-auto space-y-4"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="font-bold text-slate-900 tracking-tight">ANOWER FERDOS</span>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Navigation</span>
            </div>

            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-3 rounded-2xl text-slate-800 hover:bg-sky-50 hover:text-sky-700 transition-all font-medium text-base group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-slate-400 group-hover:text-sky-600">{link.num}</span>
                      <span>{link.name}</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 opacity-0 group-hover:opacity-100 transition-all" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Let's Build Something Great</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
