import React from 'react';
import ContactSection from '../components/ContactSection';
import CapabilitiesSection from '../components/CapabilitiesSection';
import { motion } from 'framer-motion';
import { Mail, MessageSquare } from 'lucide-react';

export default function ContactPage({ onOpenContact }) {
  return (
    <div className="pt-24 sm:pt-28 pb-16 space-y-16">
      {/* Header Banner */}
      <section className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-white/80 border border-slate-200 p-8 sm:p-12 shadow-sm relative overflow-hidden"
        >
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono font-medium">
              <Mail className="w-3.5 h-3.5" />
              <span>Direct Communication</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Let's Start a Conversation
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Have a project in mind, a question, or an exciting opportunity? Feel free to reach out via the form below or connect directly on social platforms.
            </p>
          </div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-sky-100/60 rounded-full blur-3xl pointer-events-none" />
        </motion.div>
      </section>

      <ContactSection onOpenContact={onOpenContact} />
      <CapabilitiesSection />
    </div>
  );
}
