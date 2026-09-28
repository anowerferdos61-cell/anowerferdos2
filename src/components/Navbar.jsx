import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Menu, X, ArrowUpRight, FileText, Download } from 'lucide-react';

export default function Navbar({ onOpenContact, onOpenResume }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { num: '01', name: 'Home', path: '/' },
    { num: '02', name: 'Projects', path: '/projects' },
    { num: '03', name: 'About', path: '/about' },
    { num: '04', name: 'Contact', path: '/contact' },
    { num: '05', name: 'Resume', path: '/resume' },
  ];

  const isHome = location.pathname === '/';

  return (
    <header className="fixed left-1/2 top-4 sm:top-6 -translate-x-1/2 z-50 w-[92%] max-w-[1480px] transition-all duration-500 pointer-events-none">
      <nav className="flex items-center justify-between rounded-full bg-white/85 backdrop-blur-xl border border-slate-200/90 px-4 sm:px-6 py-2.5 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.08)] pointer-events-auto">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 font-bold text-lg sm:text-xl tracking-tight text-slate-900 group">
          <span className="font-extrabold text-slate-900 group-hover:text-sky-700 transition-colors">
            Anower<span className="text-sky-600">.</span>
          </span>
          <span className="hidden md:inline-block px-2 py-0.5 rounded-full bg-sky-50 border border-sky-200 text-[10px] font-mono text-sky-800 font-semibold uppercase tracking-wider">
            Folio
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-5 lg:gap-7 font-sans text-xs sm:text-sm font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `transition-all duration-200 relative py-1 px-2.5 rounded-full ${
                  isActive
                    ? 'text-sky-700 font-semibold bg-sky-50 border border-sky-100 shadow-xs'
                    : 'text-slate-600 hover:text-sky-700 hover:bg-slate-50'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Quick jump to in-page anchors if on home */}
          {isHome && (
            <div className="hidden lg:flex items-center gap-4 pl-3 border-l border-slate-200 text-xs text-slate-500">
              <a href="#journey" className="hover:text-sky-700 transition-colors">Journey</a>
              <a href="#skills" className="hover:text-sky-700 transition-colors">Skills</a>
              <a href="#capabilities" className="hover:text-sky-700 transition-colors">Process</a>
            </div>
          )}
        </div>

        {/* Right CTA Cluster */}
        <div className="flex items-center gap-2.5">
          {/* Direct Resume Modal Trigger */}
          <button
            onClick={onOpenResume}
            title="Preview & Download CV"
            className="sparkle-btn-light text-xs py-2 px-3.5 rounded-full hidden sm:inline-flex items-center gap-1.5 shadow-xs"
          >
            <FileText className="w-3.5 h-3.5 text-sky-600" />
            <span>CV</span>
          </button>

          {/* Contact Button */}
          <button
            onClick={onOpenContact}
            className="sparkle-btn text-xs py-2 px-4.5 rounded-full hidden sm:inline-flex items-center gap-2 shadow-xs"
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
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-3 py-3 rounded-2xl transition-all font-medium text-base group ${
                        isActive
                          ? 'bg-sky-50 text-sky-700 font-semibold border border-sky-200'
                          : 'text-slate-800 hover:bg-slate-50 hover:text-sky-700'
                      }`
                    }
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-slate-400 group-hover:text-sky-600">{link.num}</span>
                      <span>{link.name}</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 opacity-0 group-hover:opacity-100 transition-all" />
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <a
                href="/Anower_Ferdos_Resume.pdf"
                download="Anower_Ferdos_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-2xl bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 font-bold text-sm flex items-center justify-center gap-2 shadow-xs transition-all"
              >
                <Download className="w-4 h-4 text-sky-600" />
                <span>Download Resume (PDF)</span>
              </a>

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
