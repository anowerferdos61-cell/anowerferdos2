import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Menu, X, Code2 } from 'lucide-react';

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
          className="group flex items-center gap-3 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 hover:border-sky-500/50 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-600 to-cyan-500 flex items-center justify-center text-white font-black text-sm shadow-sm group-hover:rotate-12 transition-transform duration-300">
            A
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-slate-900 group-hover:text-sky-700 transition-colors">
              ANOWER FERDOS
            </span>
            <span className="text-[10px] tracking-wider text-slate-500 font-mono flex items-center gap-1">
              <Code2 className="w-2.5 h-2.5 text-sky-600" />
              FOUNDER & DEVELOPER
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-full hover:bg-slate-100 transition-all duration-200"
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
            className="p-2.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 text-slate-600 hover:text-sky-600 hover:border-sky-300 transition-all duration-200 flex items-center gap-2 text-xs shadow-sm"
            title={isPlayingSound ? 'Mute ambient sound' : 'Enable ambient sound'}
          >
            {isPlayingSound ? (
              <>
                <Volume2 className="w-4 h-4 text-sky-600 animate-pulse" />
                <span className="hidden md:inline font-mono text-[10px] text-sky-700 font-semibold">ATMOSPHERE</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4" />
                <span className="hidden md:inline font-mono text-[10px] text-slate-500">AUDIO OFF</span>
              </>
            )}
          </button>

          {/* Let's Connect CTA */}
          <button
            onClick={onOpenContact}
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs shadow-sm hover:shadow-md hover:shadow-sky-500/20 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Let's Connect →</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-full bg-white/90 border border-slate-200 text-slate-800 shadow-sm"
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
            className="lg:hidden mt-3 max-w-sm mx-auto p-4 rounded-2xl bg-white border border-slate-200 shadow-xl pointer-events-auto"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-sky-600 hover:bg-slate-50 rounded-xl transition-all"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-slate-100 my-2" />
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 rounded-xl bg-sky-600 text-white font-semibold text-sm flex items-center justify-center gap-2"
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
