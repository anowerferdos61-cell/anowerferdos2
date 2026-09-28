import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, Mail, Phone, MapPin, Globe, ExternalLink, Sparkles } from 'lucide-react';

const GithubIcon = ({ className = "", ...props }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ width: '14px', height: '14px', minWidth: '14px', minHeight: '14px' }} className={`shrink-0 inline-block ${className}`} {...props}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ className = "", ...props }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ width: '14px', height: '14px', minWidth: '14px', minHeight: '14px' }} className={`shrink-0 inline-block ${className}`} {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        >
          {/* Top Control Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/90 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="font-bold text-slate-900 text-sm">Anower Ferdos — Resume / CV</span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded-md bg-sky-100 text-sky-800 text-[10px] font-mono font-semibold">
                Updated 2026
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors shadow-xs"
              >
                <Printer className="w-3.5 h-3.5 text-slate-600" />
                <span>Print / Save PDF</span>
              </button>

              <a
                href="/Anower_Ferdos_Resume.pdf"
                download="Anower_Ferdos_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-600 hover:bg-sky-500 text-xs font-bold text-white shadow-xs transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>

              <button
                onClick={onClose}
                className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/80 transition-colors ml-1"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Content Container */}
          <div className="overflow-y-auto p-6 sm:p-10 text-slate-800 font-sans space-y-8 print:p-0 print:m-0 print:overflow-visible">
            
            {/* Header / Identity */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 pb-6 border-b border-slate-200">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Anower Ferdos
                </h1>
                <p className="text-base sm:text-lg font-bold text-sky-700 mt-0.5">
                  Student Developer | Full-Stack Web Development
                </p>
                <p className="text-xs text-slate-500 italic mt-1 font-serif">
                  "Chemistry student by degree. Developer by choice."
                </p>
              </div>

              <div className="flex flex-col text-xs sm:text-right space-y-1 text-slate-600 font-mono">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Dhaka, Bangladesh</span>
                  <span>•</span>
                  <a href="tel:01303446161" className="hover:text-sky-700">01303446161</a>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <a href="mailto:anowerferdos61@gmail.com" className="text-sky-700 hover:underline">
                    anowerferdos61@gmail.com
                  </a>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <GithubIcon className="text-slate-400" />
                  <a href="https://github.com/anowerferdos61-cell" target="_blank" rel="noopener noreferrer" className="text-sky-700 hover:underline">
                    github.com/anowerferdos61-cell
                  </a>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <a href="https://anowerferdos2.netlify.app" target="_blank" rel="noopener noreferrer" className="text-sky-700 hover:underline">
                    anowerferdos2.netlify.app
                  </a>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <LinkedinIcon className="text-slate-400" />
                  <a href="https://linkedin.com/in/anower-ferdos" target="_blank" rel="noopener noreferrer" className="text-sky-700 hover:underline">
                    linkedin.com/in/anower-ferdos
                  </a>
                </div>
              </div>
            </div>

            {/* Two Column Layout (Summary & Skills / Projects) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column (Summary, Skills, Education, AI Workflow) */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* Professional Summary */}
                <div>
                  <h3 className="text-xs font-bold font-mono tracking-wider text-slate-900 uppercase pb-1.5 border-b-2 border-slate-900 mb-2.5">
                    PROFESSIONAL SUMMARY
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed text-justify">
                    Chemistry undergraduate student and self-directed developer actively learning and practicing full-stack web development through real projects. Hands-on experience developing frontend user interfaces, backend APIs, relational databases, authentication mechanisms, role-based access control, admin portals, e-commerce workflows, and AI integration. Employs modern AI-assisted development tools including Antigravity IDE to accelerate prototyping and implementation while diligently testing, analyzing, and refining code quality.
                  </p>
                </div>

                {/* Technical Skills */}
                <div>
                  <h3 className="text-xs font-bold font-mono tracking-wider text-slate-900 uppercase pb-1.5 border-b-2 border-slate-900 mb-2.5">
                    TECHNICAL SKILLS
                  </h3>
                  
                  <div className="space-y-3 text-xs">
                    <div>
                      <span className="font-bold text-slate-800 block text-[11px] uppercase tracking-wider text-sky-800">Languages</span>
                      <div className="flex flex-wrap gap-1 mt-1 font-mono">
                        {['C', 'C++', 'Python', 'JavaScript', 'TypeScript'].map(s => (
                          <span key={s} className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-800 text-[10px]">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="font-bold text-slate-800 block text-[11px] uppercase tracking-wider text-sky-800">Frontend</span>
                      <div className="flex flex-wrap gap-1 mt-1 font-mono">
                        {['React', 'Vite', 'Tailwind CSS', 'Bootstrap', 'HTML', 'CSS'].map(s => (
                          <span key={s} className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-800 text-[10px]">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="font-bold text-slate-800 block text-[11px] uppercase tracking-wider text-sky-800">Backend & APIs</span>
                      <div className="flex flex-wrap gap-1 mt-1 font-mono">
                        {['Python', 'FastAPI', 'REST APIs'].map(s => (
                          <span key={s} className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-800 text-[10px]">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="font-bold text-slate-800 block text-[11px] uppercase tracking-wider text-sky-800">Databases</span>
                      <div className="flex flex-wrap gap-1 mt-1 font-mono">
                        {['PostgreSQL', 'Supabase', 'MySQL'].map(s => (
                          <span key={s} className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-800 text-[10px]">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="font-bold text-slate-800 block text-[11px] uppercase tracking-wider text-sky-800">Core Concepts</span>
                      <div className="flex flex-wrap gap-1 mt-1 font-mono">
                        {['OOP', 'Data Structures', 'Algorithms', 'Auth & RBAC', 'API Integration'].map(s => (
                          <span key={s} className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-800 text-[10px]">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="font-bold text-slate-800 block text-[11px] uppercase tracking-wider text-sky-800">Tools & Workflows</span>
                      <div className="flex flex-wrap gap-1 mt-1 font-mono">
                        {['Git', 'GitHub', 'Antigravity IDE', 'AI Development Tools'].map(s => (
                          <span key={s} className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-800 text-[10px]">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h3 className="text-xs font-bold font-mono tracking-wider text-slate-900 uppercase pb-1.5 border-b-2 border-slate-900 mb-2.5">
                    EDUCATION
                  </h3>
                  <div className="space-y-3 text-xs">
                    <div>
                      <div className="font-bold text-slate-900">Dhaka College</div>
                      <div className="text-sky-700 font-semibold">B.Sc. (Honours) in Chemistry</div>
                      <div className="text-[11px] text-slate-500 font-mono">Current Status: 4th Year · Dhaka, Bangladesh</div>
                    </div>

                    <div>
                      <div className="font-bold text-slate-900">Rajshahi Cantonment Board School & College</div>
                      <div className="text-slate-700">Higher Secondary Certificate (HSC)</div>
                      <div className="text-[11px] text-slate-500 font-mono">Passing Year: 2021 · GPA: 5.00 / 5.00</div>
                    </div>
                  </div>
                </div>

                {/* AI-Assisted Workflow */}
                <div>
                  <h3 className="text-xs font-bold font-mono tracking-wider text-slate-900 uppercase pb-1.5 border-b-2 border-slate-900 mb-2.5">
                    AI-ASSISTED WORKFLOW
                  </h3>
                  <p className="text-[11px] text-slate-700 leading-relaxed">
                    Uses Antigravity IDE and AI-assisted development tools to accelerate exploration, prototyping, and debugging cycles. Approaches AI as a development aid, prioritizing critical review, code comprehension, logical testing, and manual refinement of generated code.
                  </p>
                </div>

              </div>

              {/* Right Column (Featured Projects) */}
              <div className="lg:col-span-8 space-y-6">
                <h3 className="text-xs font-bold font-mono tracking-wider text-slate-900 uppercase pb-1.5 border-b-2 border-slate-900 mb-4">
                  FEATURED PROJECTS
                </h3>

                {/* Project 1: Dr. Chem */}
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="text-sm font-bold text-slate-900">
                      Dr. Chem — Interactive Chemistry Platform
                    </h4>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-800">
                      EDUCATION / STARTUP
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-sky-700 font-medium">
                    React • TypeScript • Tailwind CSS • Supabase / PostgreSQL • AI Integration
                  </div>
                  <p className="text-xs text-slate-700 font-medium italic">
                    A Bangla-first chemistry learning platform designed for SSC and HSC students, featuring virtual chemistry labs with structured academic management tools.
                  </p>
                  <ul className="list-disc list-outside pl-4 text-xs text-slate-600 space-y-1">
                    <li>Engineered web application architecture with student learning paths, notes, question banks, and viva practice.</li>
                    <li>Integrated AI tutoring functionality to help students understand complex chemistry concepts interactively.</li>
                    <li>Implemented authentication and role-based workflows to separate student learning zones from teacher controls.</li>
                    <li>Configured database-backed content management for lab resources, curriculum tracks, and assessments.</li>
                  </ul>
                </div>

                {/* Project 2: Corporate Technologies */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="text-sm font-bold text-slate-900">
                      Corporate Technologies — E-Commerce Platform
                    </h4>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                      E-COMMERCE
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-emerald-700 font-medium">
                    React • Vite • Tailwind CSS • Supabase • API Workflows
                  </div>
                  <p className="text-xs text-slate-700 font-medium italic">
                    An e-commerce web platform for printing and office equipment, providing customer ordering flows and an operations admin portal.
                  </p>
                  <ul className="list-disc list-outside pl-4 text-xs text-slate-600 space-y-1">
                    <li>Developed core storefront: product catalog browsing, cart, wishlist, Buy Now, and order summary.</li>
                    <li>Structured checkout workflows supporting delivery area selection, dynamic charges, and coupon processing.</li>
                    <li>Configured multi-channel payment guides for Cash on Delivery (COD), bKash, Nagad, and Rocket instructions.</li>
                    <li>Created admin dashboards for product management, customer oversight, and order status handling.</li>
                  </ul>
                  <div className="p-2 rounded bg-slate-50 border border-slate-200 text-[11px] font-mono text-slate-700">
                    <span className="font-bold text-slate-900">Business Workflow:</span> Orders are placed, held for review, and confirmed via customer phone verification before dispatch processing.
                  </div>
                </div>

                {/* Project 3: Dhaka 24/7 Emergency Ambulance */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="text-sm font-bold text-slate-900">
                      Dhaka 24/7 Emergency Ambulance System
                    </h4>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                      FULL-STACK / ACADEMIC
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-amber-700 font-medium">
                    FastAPI • Python • SQLAlchemy • PostgreSQL • React • Vite • JWT • DaisyUI
                  </div>
                  <p className="text-xs text-slate-700 font-medium italic">
                    An academic full-stack emergency dispatch system structured around distinct User, Driver, and Admin operations.
                  </p>
                  <ul className="list-disc list-outside pl-4 text-xs text-slate-600 space-y-1">
                    <li>Developed backend APIs using Python and FastAPI with SQLAlchemy ORM on PostgreSQL.</li>
                    <li>Implemented JWT authentication alongside role-based authorization for Users, Drivers, and Admins.</li>
                    <li>Built core booking flows incorporating pricing calculation, dispatch coordination, and fleet controls.</li>
                  </ul>
                </div>

                {/* Project 4: Personal Portfolio */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="text-sm font-bold text-slate-900">
                      Personal Portfolio & Development Projects
                    </h4>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-violet-100 text-violet-800">
                      WEB DEVELOPMENT
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-violet-700 font-medium">
                    HTML • CSS • JavaScript • React • REST APIs • Git • GitHub
                  </div>
                  <p className="text-xs text-slate-700 font-medium italic">
                    Personal developer portfolio and practice projects built to reinforce modern UI engineering, component lifecycle, and deployment workflows.
                  </p>
                  <ul className="list-disc list-outside pl-4 text-xs text-slate-600 space-y-1">
                    <li>Constructed responsive, accessible layouts with modular components and clear visual hierarchy.</li>
                    <li>Strengthened REST API integration patterns and version control workflows using Git and GitHub.</li>
                  </ul>
                </div>

              </div>

            </div>

            {/* Bottom Footer Bar */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Anower Ferdos — Student Developer Resume</span>
              <span>Page 1 of 1</span>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
