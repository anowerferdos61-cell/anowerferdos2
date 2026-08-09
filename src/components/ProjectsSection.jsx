import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Atom, ExternalLink, CheckCircle, ArrowRight, X, Terminal, Sparkles, Play } from 'lucide-react';

const GithubIcon = (props) => (
  <svg className="w-4 h-4 fill-current inline-block" viewBox="0 0 24 24" {...props}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'dr-chem',
      num: 'PROJECT 01',
      title: 'Dr. Chem',
      subtitle: 'Virtual Chemistry Lab & AI Learning Platform',
      category: 'EdTech / Virtual Lab / AI',
      featured: true,
      description:
        'Dr. Chem is an educational technology platform designed to make chemistry more visual, interactive, and accessible for secondary-level students.',
      problem:
        'Traditional chemistry education often depends heavily on textbooks and theoretical explanations, while many students have limited access to proper laboratory facilities.',
      solution:
        'Dr. Chem brings interactive virtual experiments, guided learning, practice environments, and AI-assisted explanations into a single digital platform.',
      features: [
        'Interactive Chemistry Experiments',
        'Virtual Laboratory',
        'Teacher Presentation Mode',
        'Student Practice Mode',
        'AI Chemistry Tutor',
        'Bengali + English Learning',
        'Lab Reports & Analytics',
        'Chapter-based Learning Modules',
        'Interactive Molecular Simulations',
      ],
      role: 'Product Concept • UI/UX • Frontend • Backend • Database • AI Integration',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'AI/LLM', 'RAG'],
      github: 'https://github.com/anowerferdos61-cell',
      liveDemo: '#contact',
    },
    {
      id: 'school-management',
      num: 'PROJECT 02',
      title: 'School Management System',
      subtitle: 'Python / OOP Project',
      category: 'Software Architecture / OOP',
      featured: false,
      description:
        'A terminal-based school management application designed to manage students, teachers, courses, and basic academic operations.',
      focus: [
        'Object-Oriented Programming',
        'Classes & Objects Architecture',
        'Data Management & Storage',
        'CRUD Operations',
        'Modular Programming',
        'Problem Solving Logic',
      ],
      techStack: ['Python OOP'],
      github: 'https://github.com/anowerferdos61-cell',
    },
    {
      id: 'restaurant-management',
      num: 'PROJECT 03',
      title: 'Restaurant Management System',
      subtitle: 'Python Management System',
      category: 'Desktop Operations / System Logic',
      featured: false,
      description:
        'A Python-based management system designed to handle restaurant operations such as menu management, orders, billing, and basic customer information.',
      focus: [
        'Object-Oriented Programming (OOP)',
        'Data Structures Implementation',
        'Program Architecture Design',
        'Input Validation & Error Handling',
        'Business Logic Building',
      ],
      techStack: ['Python OOP'],
      github: 'https://github.com/anowerferdos61-cell',
    },
    {
      id: 'ride-sharing',
      num: 'PROJECT 04',
      title: 'Ride Sharing System',
      subtitle: 'Terminal-based System Design',
      category: 'Real-World System Logic',
      featured: false,
      description:
        'A terminal-based ride-sharing application developed to practice real-world programming logic, object-oriented design, and user interaction.',
      features: [
        'User Management',
        'Driver Management',
        'Ride Requests Processing',
        'Automated Ride Assignment',
        'Fare Calculation Engine',
        'Basic Real-Time Ride Tracking',
      ],
      techStack: ['Python OOP'],
      github: 'https://github.com/anowerferdos61-cell',
    },
  ];

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Header */}
      <div className="flex flex-col items-start space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-white/10 text-xs font-mono text-cyan-400">
          <span>SECTION 04</span>
          <span>•</span>
          <span>PROJECT PORTFOLIO</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-4">
          <div>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
              Things I've <span className="text-gradient-cyan">Built</span>
            </h2>
            <p className="text-lg text-slate-300 font-light mt-2 max-w-2xl">
              I learn by building. Here are some of the projects where I turned ideas into working products.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Flagship Project: Dr. Chem */}
      {projects.filter((p) => p.featured).map((project) => (
        <div
          key={project.id}
          className="mb-16 p-8 sm:p-12 rounded-3xl glass-panel border border-cyan-500/40 shadow-[0_0_50px_rgba(56,189,248,0.15)] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-3 bg-gradient-to-l from-cyan-500 to-emerald-400 text-slate-950 text-xs font-mono font-bold uppercase rounded-bl-2xl">
            FLAGSHIP PROJECT
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
                <Atom className="w-4 h-4" />
                <span>{project.num} • {project.subtitle}</span>
              </div>

              <h3 className="text-3xl sm:text-5xl font-black text-white">{project.title}</h3>

              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
                {project.description}
              </p>

              {/* Problem / Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-950 border border-red-500/20 space-y-1">
                  <div className="text-xs font-mono text-red-400 font-bold uppercase">The Problem</div>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">{project.problem}</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-950 border border-emerald-500/20 space-y-1">
                  <div className="text-xs font-mono text-emerald-400 font-bold uppercase">The Solution</div>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">{project.solution}</p>
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono text-slate-400 uppercase">Tech Stack</div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg"
                >
                  <span>View Project Details →</span>
                </button>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full glass-pill border border-white/15 text-white text-xs font-mono hover:border-cyan-400/40 transition-all flex items-center gap-2"
                >
                  <GithubIcon />
                  <span>GitHub →</span>
                </a>
              </div>
            </div>

            {/* Right Interactive Preview */}
            <div className="lg:col-span-5 rounded-2xl glass-card border border-white/15 p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-mono text-cyan-400 font-bold">MY ROLE</span>
                <span className="text-[10px] font-mono text-slate-400">FULL END-TO-END</span>
              </div>
              <p className="text-xs text-slate-300 font-mono leading-relaxed">{project.role}</p>

              <div className="space-y-2 pt-4 border-t border-white/10">
                <span className="text-xs font-mono text-slate-400 uppercase">Key Features</span>
                {project.features.slice(0, 5).map((f) => (
                  <div key={f} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Grid of Other Projects */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.filter((p) => !p.featured).map((project) => (
          <div
            key={project.id}
            className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold">{project.num}</span>
                <Terminal className="w-4 h-4 text-slate-400" />
              </div>
              <h4 className="text-xl font-bold text-white">{project.title}</h4>
              <div className="text-xs font-mono text-slate-400">{project.subtitle}</div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">{project.description}</p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-2.5 py-0.5 rounded bg-slate-900 text-[10px] font-mono text-cyan-300 border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => setSelectedProject(project)}
              className="pt-4 border-t border-white/10 text-xs font-mono text-cyan-400 hover:text-white flex items-center justify-between font-bold"
            >
              <span>EXPLORE DETAILS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6 sm:p-8 rounded-3xl glass-panel border border-white/20 shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full glass-pill border border-white/10 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase">{selectedProject.num}</span>
                <h3 className="text-3xl font-extrabold text-white">{selectedProject.title}</h3>
                <p className="text-sm font-mono text-cyan-300">{selectedProject.subtitle}</p>
                <p className="text-sm text-slate-300 leading-relaxed font-light">{selectedProject.description}</p>

                {selectedProject.features && (
                  <div className="space-y-2 pt-4 border-t border-white/10">
                    <div className="text-xs font-mono text-slate-400 uppercase">Features Included</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedProject.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-xs text-slate-200">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedProject.focus && (
                  <div className="space-y-2 pt-4 border-t border-white/10">
                    <div className="text-xs font-mono text-slate-400 uppercase">Key Focus & Practices</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedProject.focus.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-xs text-slate-200">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-2"
                  >
                    <GithubIcon />
                    <span>View Repository on GitHub →</span>
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-xs font-mono text-slate-400 hover:text-white"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
