import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full text-center space-y-6 bg-white/90 backdrop-blur-xl border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl"
      >
        <div className="w-16 h-16 mx-auto rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 font-mono text-2xl font-bold">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Page Not Found
          </h1>
          <p className="text-slate-600 text-sm sm:text-base">
            The page or route you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="sparkle-btn w-full sm:w-auto inline-flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/projects"
            className="sparkle-btn-light w-full sm:w-auto inline-flex items-center justify-center gap-2"
          >
            <Search className="w-4 h-4" />
            <span>Browse Projects</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
