import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Atom, ExternalLink, CheckCircle, X, ShoppingBag, GraduationCap, Ambulance } from 'lucide-react';

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
      badge: 'FLAGSHIP PROJECT',
      title: 'Dr. Chem',
      subtitle: 'Bangla-First Interactive Chemistry Learning Platform',
      category: 'Education / AI / Full-Stack',
      icon: Atom,
      description:
        'A Bangla-first interactive chemistry learning platform designed for SSC/HSC students, combining virtual chemistry labs, AI-assisted learning, notes, quizzes, and practice features.',
      box1Title: 'The Problem',
      box1Content:
        'Traditional chemistry education often depends heavily on textbooks and theoretical explanations, while many students have limited access to proper laboratory facilities.',
      box2Title: 'The Solution',
      box2Content:
        'Dr. Chem brings interactive virtual chemistry experiments, guided learning, practice environments, notes, quizzes, and AI-assisted explanations into a single digital platform.',
      role: 'Product Concept • UI/UX • Frontend • Backend • Database • AI Integration',
      roleBadge: 'FOUNDER & ARCHITECT',
      features: [
        'Interactive virtual chemistry labs',
        'AI-assisted chemistry learning',
        'Notes and learning resources',
        'Quiz and practice system',
        'Viva/practice-oriented learning',
        'Student-focused educational experience',
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'AI/LLM', 'Full-Stack'],
      github: 'https://github.com/anowerferdos61-cell/drchem-7f7af476',
      liveDemo: 'https://drchemedu.com/',
    },
    {
      id: 'corporate-technologies',
      num: 'PROJECT 02',
      badge: 'FULL-STACK E-COMMERCE',
      title: 'Corporate Technologies',
      subtitle: 'Technical Products & Office Equipment E-Commerce Platform',
      category: 'E-commerce / Full-Stack',
      icon: ShoppingBag,
      description:
        'A full-stack e-commerce platform designed for selling technical products and office/printing equipment with product browsing, shopping, checkout, payment instructions and administrative management.',
      box1Title: 'Order Workflow',
      box1Content:
        'Order received → Admin reviews order → Customer is contacted/called for confirmation → Order is processed/dispatched.',
      box2Title: 'Payment & Delivery',
      box2Content:
        'Supports Cash on Delivery, bKash / Nagad / Rocket payment guidance, coupons, area-based delivery charges, and order confirmations.',
      role: 'Full-Stack Architecture • Cart & Checkout Flow • Payment Guidance • Admin Suite',
      roleBadge: 'FULL-STACK ENGINEER',
      features: [
        'Product browsing and product details',
        'Cart & Wishlist',
        'Buy Now & Checkout',
        'Customer information & delivery area charge calculation',
        'Cash on Delivery & bKash / Nagad / Rocket payment instructions',
        'Coupon system & discount validation',
        'Order summary and confirmation',
        'Admin product, order & customer management',
      ],
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Full-Stack'],
      github: 'https://github.com/anowerferdos61-cell/corporate_tecnologies',
      liveDemo: 'https://corporate-tecnologies.vercel.app/',
    },
    {
      id: 'buet-tutor-service',
      num: 'PROJECT 03',
      badge: 'TUTOR SERVICE PLATFORM',
      title: 'BUET Tutor Service',
      subtitle: 'Tutoring & Academic Service Web Platform',
      category: 'Education / Tutor Service / Web Platform',
      icon: GraduationCap,
      description:
        'A tutoring/service-oriented web platform focused on presenting tutoring information and connecting students with tutoring opportunities or services.',
      box1Title: 'Platform Objective',
      box1Content:
        'Structured web platform designed to present tutoring information, organize academic categories, and connect students with tutoring services.',
      box2Title: 'Project Context',
      box2Content:
        'Note: The project name is "BUET Tutor Service" only (independent web project, no official affiliation/endorsement claimed).',
      role: 'Frontend Engineering • UI/UX Design • Responsive Layout • Lead Capture',
      roleBadge: 'WEB DEVELOPER',
      features: [
        'Presenting tutoring information & tutor listings',
        'Connecting students with tutoring opportunities or services',
        'Subject and academic level categorization',
        'Tutor inquiry and contact workflow',
        'Clean, responsive and accessible user interface',
      ],
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Responsive UI'],
      github: 'https://github.com/anowerferdos013-work/Tution-Media',
      liveDemo: 'https://uitionservice.netlify.app/',
    },
    {
      id: 'ambulance-management-system',
      num: 'PROJECT 04',
      badge: 'ACADEMIC FULL-STACK PROJECT',
      title: 'Dhaka 24/7 Emergency Ambulance Management System',
      subtitle: 'Academic Project / Emergency Dispatch System',
      category: 'Full-Stack / Academic Project',
      icon: Ambulance,
      description:
        'A full-stack emergency ambulance management and dispatch system developed as an academic/project-based application for managing ambulance booking, drivers, dispatches and role-based administrative operations.',
      box1Title: 'System Architecture',
      box1Content:
        'FastAPI & PostgreSQL backend with JWT authentication, supporting dedicated User, Driver, and Admin access control.',
      box2Title: 'Academic Notice',
      box2Content:
        'Academic / Project-Based Application (developed as a simulation and management prototype, not an active emergency dispatch service).',
      role: 'Full-Stack Architecture • FastAPI Backend • PostgreSQL DB • React UI',
      roleBadge: 'ACADEMIC PROJECT LEAD',
      features: [
        'User authentication & JWT authentication',
        'Role-based authorization (User, Driver, Admin roles)',
        'Ambulance fleet management',
        'Driver management & allocation',
        'Ambulance booking & dispatch workflow',
        'Pricing management & admin controls',
      ],
      techStack: [
        'React',
        'Vite',
        'Tailwind CSS',
        'DaisyUI',
        'Python',
        'FastAPI',
        'SQLAlchemy',
        'PostgreSQL',
        'JWT',
      ],
      github: 'https://github.com/anowerferdos61-cell/Emergency-ambulance-dispatch-system',
      liveDemo: 'https://emergency-ambulance-dispatch-system-plum.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Header */}
      <div className="flex flex-col items-start space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-sky-800 font-semibold">
          <span>SECTION 04</span>
          <span>•</span>
          <span>PROJECT PORTFOLIO</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-4">
          <div>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
              Things I've <span className="text-sky-700">Built</span>
            </h2>
            <p className="text-lg text-slate-600 font-normal mt-2 max-w-2xl">
              I learn by building. Here are the projects where I turned ideas into working products.
            </p>
          </div>
        </div>
      </div>

      {/* Projects List — Full Featured Card Style for All Projects */}
      <div className="space-y-12">
        {projects.map((project) => {
          const IconComponent = project.icon;
          return (
            <div
              key={project.id}
              className="p-8 sm:p-12 rounded-3xl bg-white border border-sky-300 shadow-md relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-sky-400"
            >
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-sky-600 text-white text-xs font-mono font-bold uppercase rounded-bl-2xl">
                {project.badge}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-700 uppercase tracking-widest font-bold">
                    <IconComponent className="w-4 h-4" />
                    <span>
                      {project.num} • {project.category}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlight Boxes Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                      <div className="text-xs font-mono text-sky-800 font-bold uppercase">{project.box1Title}</div>
                      <p className="text-xs text-slate-700 leading-relaxed font-normal">{project.box1Content}</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-1">
                      <div className="text-xs font-mono text-emerald-800 font-bold uppercase">{project.box2Title}</div>
                      <p className="text-xs text-slate-700 leading-relaxed font-normal">{project.box2Content}</p>
                    </div>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-mono text-slate-500 uppercase">Tech Stack</div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg bg-sky-50 border border-sky-200 text-xs font-mono text-sky-800 font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs flex items-center gap-2 shadow-xs transition-all"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo →</span>
                      </a>
                    )}

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-5 py-3 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-bold text-xs flex items-center gap-2 shadow-xs transition-all"
                    >
                      <span>View Project Details →</span>
                    </button>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono hover:bg-slate-200 transition-all flex items-center gap-2"
                      >
                        <GithubIcon />
                        <span>GitHub →</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Interactive Preview */}
                <div className="lg:col-span-5 rounded-2xl bg-slate-50 border border-slate-200 p-6 space-y-4 shadow-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span className="text-xs font-mono text-sky-700 font-bold">MY ROLE</span>
                    <span className="text-[10px] font-mono text-slate-500">{project.roleBadge}</span>
                  </div>
                  <p className="text-xs text-slate-800 font-mono leading-relaxed">{project.role}</p>

                  <div className="space-y-2 pt-4 border-t border-slate-200">
                    <span className="text-xs font-mono text-slate-500 uppercase">Key Features</span>
                    {project.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-xs text-slate-800 font-medium">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-2xl relative space-y-6"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4">
                <div className="inline-flex items-center gap-2">
                  <span className="text-xs font-mono text-sky-700 font-bold uppercase">{selectedProject.num}</span>
                  <span className="text-xs font-mono text-slate-400">•</span>
                  <span className="text-xs font-mono text-slate-500 uppercase">{selectedProject.category}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{selectedProject.title}</h3>
                <p className="text-sm font-mono text-sky-700 font-semibold">{selectedProject.subtitle}</p>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">{selectedProject.description}</p>

                {/* Insight Highlights in Modal */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="text-xs font-mono text-sky-800 font-bold uppercase">{selectedProject.box1Title}</div>
                    <p className="text-xs text-slate-700 leading-relaxed font-normal">{selectedProject.box1Content}</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-1">
                    <div className="text-xs font-mono text-emerald-800 font-bold uppercase">{selectedProject.box2Title}</div>
                    <p className="text-xs text-slate-700 leading-relaxed font-normal">{selectedProject.box2Content}</p>
                  </div>
                </div>

                {/* Features List */}
                {selectedProject.features && (
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="text-xs font-mono text-slate-500 uppercase">Key Features</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedProject.features.map((f) => (
                        <div key={f} className="flex items-start gap-2 text-xs text-slate-800">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                {selectedProject.techStack && (
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="text-xs font-mono text-slate-500 uppercase">Technologies Used</div>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 text-xs font-mono text-slate-700 border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Modal Footer CTAs */}
                <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2.5">
                    {selectedProject.liveDemo && (
                      <a
                        href={selectedProject.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-full bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs flex items-center gap-2 shadow-xs transition-all"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo →</span>
                      </a>
                    )}
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 text-xs font-mono transition-all flex items-center gap-2"
                      >
                        <GithubIcon />
                        <span>GitHub Repository →</span>
                      </a>
                    )}
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-xs font-mono text-slate-500 hover:text-slate-900 font-semibold px-3 py-2"
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
