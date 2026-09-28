import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Atom,
  ExternalLink,
  CheckCircle,
  X,
  ShoppingBag,
  GraduationCap,
  Ambulance,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
  Layers,
  ArrowRight,
  Play,
  Pause
} from 'lucide-react';

const GithubIcon = ({ className = "", ...props }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ width: '14px', height: '14px', minWidth: '14px', minHeight: '14px' }} className={`shrink-0 inline-block ${className}`} {...props}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [lightboxImage, setLightboxImage] = useState(null);
  const sliderRef = useRef(null);

  const projects = [
    {
      id: 'dr-chem',
      num: 'PROJECT 01',
      badge: 'FLAGSHIP PROJECT',
      title: 'Dr. Chem',
      subtitle: 'Bangla-First Interactive Chemistry Learning Platform',
      category: 'Education / AI / Full-Stack',
      categoryTag: 'EdTech',
      icon: Atom,
      image: '/projects/drchem-preview.png',
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
        'Curriculum Hub for Class 9-10 & HSC',
        'Interactive chapter notes & formula sheets',
        'MCQ & creative test assessment module',
        'Student progress analytics & streaks',
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'AI/LLM', 'Supabase'],
      github: 'https://github.com/anowerferdos61-cell/drchem-7f7af476',
      liveDemo: 'https://drchemedu.com/',
      accentColor: 'from-emerald-500/20 to-teal-500/10',
      badgeColor: 'bg-emerald-600',
    },
    {
      id: 'corporate-technologies',
      num: 'PROJECT 02',
      badge: 'FULL-STACK E-COMMERCE',
      title: 'Corporate Technologies',
      subtitle: 'Technical Products & Office Equipment E-Commerce Platform',
      category: 'E-commerce / Full-Stack',
      categoryTag: 'E-Commerce',
      icon: ShoppingBag,
      image: '/projects/corporate-tech-preview.png',
      description:
        'A full-stack e-commerce platform designed for selling technical products and office/printing equipment with product browsing, shopping, checkout, payment instructions and administrative management.',
      box1Title: 'Order Workflow',
      box1Content:
        'Order received → Admin reviews order → Customer is contacted/called for phone confirmation → Order is processed/dispatched.',
      box2Title: 'Payment & Delivery',
      box2Content:
        'Supports Cash on Delivery, bKash / Nagad / Rocket payment guidance, coupons, area-based delivery charges, and order confirmations.',
      role: 'Full-Stack Architecture • Cart & Checkout Flow • Payment Guidance • Admin Suite',
      roleBadge: 'FULL-STACK ENGINEER',
      features: [
        'Product browsing with multi-level category navigation',
        'Shopping cart, wishlist & instant Buy Now flow',
        'Dynamic area-based delivery charge calculation',
        'Multi-channel payment instructions (COD, bKash, Nagad, Rocket)',
        'Coupon system & discount validation',
        'Comprehensive admin dashboards for inventory & order tracking',
      ],
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/anowerferdos61-cell/corporate_tecnologies',
      liveDemo: 'https://corporate-tecnologies.vercel.app/',
      accentColor: 'from-rose-500/20 to-amber-500/10',
      badgeColor: 'bg-rose-600',
    },
    {
      id: 'buet-tutor-service',
      num: 'PROJECT 03',
      badge: 'TUTOR SERVICE PLATFORM',
      title: 'BUET Tutor Service',
      subtitle: 'Tutoring & Academic Service Web Platform',
      category: 'Education / Tutor Service / Web Platform',
      categoryTag: 'EdTech',
      icon: GraduationCap,
      image: '/projects/buet-tutor-preview.png',
      description:
        'A tutoring/service-oriented web platform focused on presenting tutoring information and connecting students with verified tutoring opportunities and mentors in Dhaka.',
      box1Title: 'Platform Objective',
      box1Content:
        'Structured web platform designed to present tutoring information, organize academic categories, and connect students with tutoring services.',
      box2Title: 'Project Context',
      box2Content:
        'Note: Independent web project focused on academic services and seamless communication workflows via WhatsApp and direct inquiry.',
      role: 'Frontend Engineering • UI/UX Design • Responsive Layout • Lead Capture',
      roleBadge: 'WEB DEVELOPER',
      features: [
        'Verified tutor directory & search filter system',
        'Direct WhatsApp & phone contact integration',
        'Subject and academic level categorization (Bangla & English Medium)',
        'Tutor registration & student inquiry capture',
        'Clean, modern responsive UI with fast load speeds',
      ],
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Responsive UI'],
      github: 'https://github.com/anowerferdos013-work/Tution-Media',
      liveDemo: 'https://uitionservice.netlify.app/',
      accentColor: 'from-emerald-500/20 to-sky-500/10',
      badgeColor: 'bg-teal-700',
    },
    {
      id: 'ambulance-management-system',
      num: 'PROJECT 04',
      badge: 'ACADEMIC FULL-STACK PROJECT',
      title: 'Dhaka 24/7 Emergency Ambulance System',
      subtitle: 'Academic Project / Emergency Dispatch System',
      category: 'Full-Stack / Academic Project',
      categoryTag: 'Full-Stack',
      icon: Ambulance,
      image: '/projects/ambulance-preview.png',
      description:
        'A full-stack emergency ambulance management and dispatch system developed as an academic application for managing ambulance booking, drivers, dispatches and role-based administrative operations.',
      box1Title: 'System Architecture',
      box1Content:
        'FastAPI & PostgreSQL backend with JWT authentication, supporting dedicated User, Driver, and Admin access control.',
      box2Title: 'Academic Notice',
      box2Content:
        'Academic / Project-Based Application (developed as a simulation and management prototype for dispatch operations).',
      role: 'Full-Stack Architecture • FastAPI Backend • PostgreSQL DB • React UI',
      roleBadge: 'ACADEMIC PROJECT LEAD',
      features: [
        'User authentication & JWT role-based authorization',
        'Fleet categorization (Freezer van, AC, Non-AC)',
        'Real-time vehicle availability & maintenance status',
        'Driver assignment and location hub management',
        'Ambulance booking & emergency schedule workflow',
        'Dynamic base fare calculation across Dhaka zones',
      ],
      techStack: [
        'React',
        'Vite',
        'Tailwind CSS',
        'Python',
        'FastAPI',
        'SQLAlchemy',
        'PostgreSQL',
        'JWT',
      ],
      github: 'https://github.com/anowerferdos61-cell/Emergency-ambulance-dispatch-system',
      liveDemo: 'https://emergency-ambulance-dispatch-system-plum.vercel.app/',
      accentColor: 'from-red-500/20 to-orange-500/10',
      badgeColor: 'bg-red-600',
    },
  ];

  const categories = ['All', 'EdTech', 'E-Commerce', 'Full-Stack'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.categoryTag === activeCategory);

  // Auto play carousel interval
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay, projects.length]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-8 max-w-[1480px] mx-auto overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-sky-100/40 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col items-start space-y-4 mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-sky-800 font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-sky-600" />
          <span>PORTFOLIO SHOWCASE & LIVE SYSTEMS</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between w-full gap-6">
          <div>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
              Things I've <span className="text-sky-700">Built.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal mt-2 max-w-2xl">
              Real-world web applications, production architectures, and platforms built from concept to deployment.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white border border-slate-200 rounded-full shadow-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setActiveIndex(0);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* FEATURED INTERACTIVE ANIMATED SHOWCASE CAROUSEL */}
      {/* ========================================================= */}
      <div className="mb-20 relative z-10">
        <div className="flex items-center justify-between pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
              Interactive Spotlight Preview
            </span>
            <span className="text-xs font-mono text-slate-400">
              ({activeIndex + 1} of {projects.length})
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              title={isAutoPlay ? 'Pause auto-slide' : 'Resume auto-slide'}
              className="p-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-sky-700 hover:bg-slate-50 transition-colors shadow-xs"
            >
              {isAutoPlay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={handlePrev}
              aria-label="Previous project"
              className="p-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-sky-700 hover:bg-slate-50 transition-colors shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next project"
              className="p-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-sky-700 hover:bg-slate-50 transition-colors shadow-xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Active Slide Card */}
        <div className="relative rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden min-h-[480px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={projects[activeIndex].id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 p-6 sm:p-10 items-center"
            >
              {/* Left Column: Info */}
              <div className="lg:col-span-5 space-y-5">
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-white text-[10px] font-mono font-bold uppercase ${projects[activeIndex].badgeColor}`}>
                    {projects[activeIndex].badge}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    {projects[activeIndex].num}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {projects[activeIndex].title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-sky-700 font-mono mt-1">
                    {projects[activeIndex].subtitle}
                  </p>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {projects[activeIndex].description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {projects[activeIndex].techStack.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  {projects[activeIndex].liveDemo && (
                    <a
                      href={projects[activeIndex].liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sparkle-btn text-xs py-2.5 px-5 rounded-full flex items-center gap-2 bg-sky-600 hover:bg-sky-500"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Platform</span>
                    </a>
                  )}

                  <button
                    onClick={() => setSelectedProject(projects[activeIndex])}
                    className="sparkle-btn-light text-xs py-2.5 px-5 rounded-full flex items-center gap-2"
                  >
                    <span>Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 text-sky-600" />
                  </button>

                  {projects[activeIndex].github && (
                    <a
                      href={projects[activeIndex].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: High-Impact Screenshot Mockup Window */}
              <div className="lg:col-span-7">
                <div
                  onClick={() => setLightboxImage(projects[activeIndex].image)}
                  className="group relative cursor-pointer rounded-2xl bg-slate-900 p-2 sm:p-3 shadow-2xl border border-slate-800/80 hover:border-sky-500/60 transition-all duration-300"
                >
                  {/* Browser top chrome */}
                  <div className="flex items-center justify-between px-3 py-1.5 bg-slate-900 rounded-t-xl text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    </div>
                    <div className="px-4 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-400 truncate max-w-[220px]">
                      {projects[activeIndex].liveDemo || projects[activeIndex].title}
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-mono text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3 h-3" />
                      <span className="hidden sm:inline">Zoom</span>
                    </div>
                  </div>

                  {/* Screenshot Container */}
                  <div className="relative overflow-hidden rounded-xl bg-slate-950 aspect-[16/9] border border-slate-800/50">
                    <img
                      src={projects[activeIndex].image}
                      alt={projects[activeIndex].title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {projects.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'w-8 bg-sky-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* DETAILED PROJECT CARDS LIST (WITH ANIMATED SCROLL REVEAL) */}
      {/* ========================================================= */}
      <div className="space-y-16 relative z-10">
        <div className="border-b border-slate-200 pb-4 flex items-center justify-between">
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Detailed Project Catalog & Architecture
          </h3>
          <span className="text-xs font-mono text-slate-500">
            {filteredProjects.length} Projects Listed
          </span>
        </div>

        {filteredProjects.map((project, idx) => {
          const IconComponent = project.icon;
          const isEven = idx % 2 === 0;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-lg relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-sky-300 group"
            >
              {/* Category Badge */}
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-slate-900 text-white text-[11px] font-mono font-bold uppercase rounded-bl-2xl">
                {project.badge}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                
                {/* Info Column */}
                <div className={`space-y-6 ${isEven ? 'lg:col-span-6' : 'lg:col-span-6 lg:order-2'}`}>
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-700 uppercase tracking-widest font-bold">
                    <IconComponent className="w-4 h-4" />
                    <span>
                      {project.num} • {project.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-sky-700 font-mono mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                      <div className="text-[11px] font-mono text-sky-800 font-bold uppercase">{project.box1Title}</div>
                      <p className="text-xs text-slate-700 leading-relaxed font-normal">{project.box1Content}</p>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-1">
                      <div className="text-[11px] font-mono text-emerald-800 font-bold uppercase">{project.box2Title}</div>
                      <p className="text-xs text-slate-700 leading-relaxed font-normal">{project.box2Content}</p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-mono text-slate-500 uppercase">Core Architecture & Capabilities</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800">
                      {project.features.slice(0, 4).map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="space-y-2 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-sky-50 border border-sky-200 text-xs font-mono text-sky-800 font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sparkle-btn text-xs py-2.5 px-5 rounded-full flex items-center gap-2 bg-sky-600 hover:bg-sky-500"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo →</span>
                      </a>
                    )}

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="sparkle-btn-light text-xs py-2.5 px-5 rounded-full flex items-center gap-2"
                    >
                      <span>Project Details →</span>
                    </button>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 text-xs font-mono transition-all flex items-center gap-2"
                      >
                        <GithubIcon />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Screenshot & Mockup Column */}
                <div className={`${isEven ? 'lg:col-span-6' : 'lg:col-span-6 lg:order-1'}`}>
                  <div
                    onClick={() => setLightboxImage(project.image)}
                    className="relative cursor-pointer rounded-2xl bg-slate-900 p-2.5 sm:p-3.5 shadow-xl border border-slate-800 transition-all duration-300 group-hover:border-sky-500/50 group-hover:shadow-2xl"
                  >
                    {/* Browser Bar */}
                    <div className="flex items-center justify-between px-3 py-1.5 bg-slate-900 rounded-t-xl text-slate-400 mb-1">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      </div>
                      <div className="text-[10px] font-mono text-slate-400">
                        {project.title} · Live Interface
                      </div>
                      <Maximize2 className="w-3.5 h-3.5 text-sky-400 opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Screenshot */}
                    <div className="relative overflow-hidden rounded-xl aspect-[16/10] bg-slate-950">
                      <img
                        src={project.image}
                        alt={`${project.title} interface preview`}
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-sky-950/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-3 py-1.5 rounded-full bg-slate-900/80 text-white text-xs font-mono backdrop-blur-md border border-white/20">
                          Click to Enlarge
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ========================================================= */}
      {/* IMAGE LIGHTBOX MODAL */}
      {/* ========================================================= */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl p-2 sm:p-4"
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={lightboxImage}
                alt="Project Full Screenshot Preview"
                className="w-full h-auto max-h-[85vh] object-contain rounded-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================= */}
      {/* PROJECT DETAILS MODAL */}
      {/* ========================================================= */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl max-h-[88vh] overflow-y-auto p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-2xl relative space-y-6"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Screenshot Banner */}
              <div className="rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 aspect-[16/9]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

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
                    <div className="text-xs font-mono text-slate-500 uppercase">Key Features & Modules</div>
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
                        className="sparkle-btn text-xs py-2.5 px-5 rounded-full flex items-center gap-2 bg-sky-600 hover:bg-sky-500"
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
                        className="px-4 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 text-xs font-mono transition-all flex items-center gap-2"
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
