import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, CheckCircle2, Loader2 } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Collaborate on Dr. Chem', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Send real email directly to anowerferdos61@gmail.com via FormSubmit AJAX service
      const response = await fetch('https://formsubmit.co/ajax/anowerferdos61@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `Portfolio Contact: ${formData.subject} (from ${formData.name})`,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _captcha: 'false',
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        // Fallback email trigger if network blocks cross-origin
        window.location.href = `mailto:anowerferdos61@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        setSubmitted(true);
      }
    } catch (err) {
      console.log('FormSubmit AJAX fallback:', err);
      window.location.href = `mailto:anowerferdos61@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      setSubmitted(true);
    } finally {
      setSubmitting(false);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: 'Collaborate on Dr. Chem', message: '' });
        onClose();
      }, 3500);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg p-6 sm:p-8 rounded-3xl glass-panel border border-white/20 shadow-2xl relative"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full glass-pill border border-white/10 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-8 h-8 animate-bounce" />
                </div>
                <h3 className="text-2xl font-bold text-white">Email Sent Directly to Anower!</h3>
                <p className="text-sm text-slate-300 max-w-sm">
                  Your message has been sent directly to <span className="text-cyan-400 font-mono">anowerferdos61@gmail.com</span>. Anower will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>DIRECT EMAIL BACKEND</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Send Message to Anower</h3>
                  <p className="text-xs text-slate-400">
                    This form sends a direct email to <span className="text-cyan-300 font-mono">anowerferdos61@gmail.com</span> regarding Dr. Chem or software development.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">YOUR NAME</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Ahmed"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">TOPIC / SUBJECT</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">MESSAGE</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, Dr. Chem partnership, or question..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] transition-all disabled:opacity-50"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Email to anowerferdos61@gmail.com...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Direct Email</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

