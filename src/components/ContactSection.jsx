import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Sparkles, MessageSquare, PhoneCall, Globe } from 'lucide-react';

const GithubIcon = (props) => (
  <svg className="w-4 h-4 fill-current inline-block" viewBox="0 0 24 24" {...props}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg className="w-4 h-4 fill-current inline-block" viewBox="0 0 24 24" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const WhatsappIcon = (props) => (
  <svg className="w-4 h-4 fill-current inline-block" viewBox="0 0 24 24" {...props}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

export default function ContactSection({ onOpenContact }) {
  const socialLinks = [
    {
      name: 'WhatsApp',
      href: 'https://wa.me/8801303446161',
      icon: WhatsappIcon,
      color: 'hover:text-emerald-400 hover:border-emerald-500/40',
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/share/1Cv9hL24Sk/',
      icon: (props) => (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" {...props}>
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.65 13.75 5.65c1.08 0 2.21.19 2.21.19v2.43h-1.25c-1.23 0-1.61.77-1.61 1.56V12h2.74l-.44 3h-2.3v6.8c4.56-.93 8-4.96 8-9.8z" />
        </svg>
      ),
      color: 'hover:text-blue-500 hover:border-blue-400/40',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/anowerferdos61-cell',
      icon: GithubIcon,
      color: 'hover:text-cyan-400 hover:border-cyan-500/40',
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/anower_ferdos?igsh=a2xuMXBvZHE2MDJ0',
      icon: InstagramIcon,
      color: 'hover:text-pink-400 hover:border-pink-500/40',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/anower-ferdos/',
      icon: (props) => (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" {...props}>
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z" />
        </svg>
      ),
      color: 'hover:text-blue-400 hover:border-blue-500/40',
    },
  ];

  return (
    <section id="contact" className="relative py-32 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[180px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="p-10 sm:p-20 rounded-3xl glass-panel border border-cyan-500/30 text-center flex flex-col items-center shadow-[0_0_50px_rgba(56,189,248,0.15)] relative overflow-hidden"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-cyan-500/40 text-xs font-mono text-cyan-300 mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>STARTUP FOUNDER & DEVELOPER</span>
        </div>

        <h2 className="text-4xl sm:text-7xl font-black text-white tracking-tight leading-tight mb-6">
          Have an Idea or Partnership? <br className="hidden sm:inline" />
          <span className="text-gradient-cyan">Let's Connect & Build.</span>
        </h2>

        <p className="text-lg sm:text-2xl text-slate-300 font-light max-w-2xl mb-10">
          Whether you want to discuss Dr. Chem (<a href="https://drchemedu.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline font-semibold">drchemedu.com</a>), educational tech, investments, or custom software solutions — feel free to reach out directly.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <button
            onClick={onOpenContact}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-950 font-extrabold text-sm sm:text-base shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:shadow-[0_0_45px_rgba(56,189,248,0.6)] transition-all flex items-center gap-3 transform hover:-translate-y-1"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Send Direct Message →</span>
          </button>

          <a
            href="https://wa.me/8801303446161"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full glass-panel border border-emerald-500/40 text-emerald-300 font-bold text-sm sm:text-base hover:bg-emerald-500/10 transition-all flex items-center gap-3 transform hover:-translate-y-1"
          >
            <WhatsappIcon className="w-5 h-5 text-emerald-400" />
            <span>WhatsApp (01303446161) →</span>
          </a>

          <a
            href="mailto:anowerferdos61@gmail.com"
            className="px-8 py-4 rounded-full glass-panel border border-white/20 text-white font-bold text-sm sm:text-base hover:bg-white/10 hover:border-cyan-400/40 transition-all flex items-center gap-3 transform hover:-translate-y-1"
          >
            <Mail className="w-5 h-5 text-cyan-400" />
            <span>Email Me →</span>
          </a>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mb-10 text-xs font-mono text-slate-300">
          <a
            href="mailto:anowerferdos61@gmail.com"
            className="p-4 rounded-2xl glass-card border border-white/10 flex items-center gap-3 justify-center hover:border-cyan-400/40 transition-all"
          >
            <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>anowerferdos61@gmail.com</span>
          </a>

          <a
            href="https://wa.me/8801303446161"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl glass-card border border-white/10 flex items-center gap-3 justify-center hover:border-emerald-400/40 transition-all text-emerald-300"
          >
            <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>01303446161</span>
          </a>

          <a
            href="https://drchemedu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl glass-card border border-white/10 flex items-center gap-3 justify-center hover:border-amber-400/40 transition-all text-amber-300"
          >
            <Globe className="w-4 h-4 text-amber-400 shrink-0" />
            <span>drchemedu.com</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="pt-8 border-t border-white/10 flex flex-col items-center space-y-4 w-full max-w-2xl">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Connect With Me Everywhere</span>
          <div className="flex flex-wrap justify-center items-center gap-3">
            {socialLinks.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3.5 rounded-full glass-pill border border-white/10 text-slate-300 ${s.color} transition-all duration-300 flex items-center gap-2 text-xs font-mono`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{s.name} →</span>
                </a>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

