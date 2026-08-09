import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Menu, X, Code2, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  const [isPlayingSound, setIsPlayingSound] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Journey', href: '#journey' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Why Me', href: '#why-me' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-8 transition-all duration-300 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-3 px-4 py-2.5 rounded-full glass-panel border border-white/10 hover:border-cyan-500/40 transition-all duration-300"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-emerald-400 flex items-center justify-center text-slate-950 font-black text-sm shadow-md group-hover:rotate-12 transition-transform duration-300">
            A
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-wide text-white group-hover:text-cyan-300 transition-colors">
              ANOWER FERDOS
            </span>
            <span className="text-[10px] tracking-wider text-slate-400 font-mono flex items-center gap-1">
              <Code2 className="w-2.5 h-2.5 text-cyan-400" />
              SOFTWARE DEVELOPER
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 px-4 py-2 rounded-full glass-panel border border-white/10 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white rounded-full hover:bg-white/10 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-3">
          {/* Ambient Sound Toggle */}
          <button
            onClick={() => setIsPlayingSound(!isPlayingSound)}
            className="p-2.5 rounded-full glass-pill border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-200 flex items-center gap-2 text-xs"
            title={isPlayingSound ? 'Mute ambient sound' : 'Enable ambient sound'}
          >
            {isPlayingSound ? (
              <>
                <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="hidden md:inline font-mono text-[10px] text-cyan-400">ATMOSPHERE</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4" />
                <span className="hidden md:inline font-mono text-[10px] text-slate-400">AUDIO OFF</span>
              </>
            )}
          </button>

          {/* Let's Connect CTA */}
          <button
            onClick={onOpenContact}
            className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-950 font-bold text-xs hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Let's Connect →</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-full glass-pill border border-white/10 text-slate-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mt-3 max-w-sm mx-auto p-4 rounded-2xl glass-panel border border-white/15 shadow-2xl pointer-events-auto"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-cyan-300 hover:bg-white/5 rounded-xl transition-all"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-white/10 my-2" />
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2"
              >
                <span>Let's Connect →</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
