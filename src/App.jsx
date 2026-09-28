import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import Background3DCanvas from './components/Background3DCanvas';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import ResumeModal from './components/ResumeModal';
import ScrollToTop from './components/ScrollToTop';

// Immediate load for Homepage, lazy load for other pages
import HomePage from './pages/HomePage';
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ResumePage = lazy(() => import('./pages/ResumePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Route Transition Fallback
function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 rounded-full border-2 border-sky-600 border-t-transparent animate-spin" />
        <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Loading...</span>
      </div>
    </div>
  );
}

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Initialize Lenis Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen bg-[#FBFBFD] text-slate-900 selection:bg-sky-100 selection:text-sky-900 overflow-x-hidden bg-tech-lines flex flex-col justify-between">
        {/* 3D Canvas Background */}
        <Background3DCanvas />

        {/* Global Navbar */}
        <Navbar
          onOpenContact={() => setIsContactOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Dynamic Route Pages with Suspense */}
        <main className="relative z-10 flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage
                    onOpenContact={() => setIsContactOpen(true)}
                    onOpenResume={() => setIsResumeOpen(true)}
                  />
                }
              />
              <Route
                path="/projects"
                element={<ProjectsPage onOpenContact={() => setIsContactOpen(true)} />}
              />
              <Route
                path="/about"
                element={<AboutPage onOpenResume={() => setIsResumeOpen(true)} />}
              />
              <Route
                path="/contact"
                element={<ContactPage onOpenContact={() => setIsContactOpen(true)} />}
              />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>

        {/* Global Footer */}
        <Footer onOpenResume={() => setIsResumeOpen(true)} />

        {/* Contact Inquiry Modal */}
        <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

        {/* Resume Preview & Download Modal */}
        <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      </div>
    </BrowserRouter>
  );
}
