import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Globe, Laptop, Sparkles } from 'lucide-react';

export default function CapabilitiesSection() {
  const engineeringProcess = [
    {
      num: '01',
      title: 'Strategy & Roadmap',
      desc: 'Deep discovery into curriculum goals, user workflows, product requirements, and technical constraints to establish a clear architectural blueprint.',
      tags: ['Requirement Analysis', 'User Flows', 'Tech Specs'],
    },
    {
      num: '02',
      title: 'System Architecture',
      desc: 'Designing robust database schemas (PostgreSQL, MongoDB), API contracts (FastAPI, Express), security layers (JWT, RBAC), and state models.',
      tags: ['Data Modeling', 'API Design', 'Security & RBAC'],
    },
    {
      num: '03',
      title: 'Full-Stack Development',
      desc: 'Building responsive, accessible frontend interfaces (React, Vite, Tailwind CSS) paired with high-performance backends and AI model integrations.',
      tags: ['React 19 / Vite', 'Interactive Labs', 'AI Integration'],
    },
    {
      num: '04',
      title: 'Deployment & Scale',
      desc: 'Deploying to cloud infrastructure (Vercel, Netlify, Render), configuring production pipelines, optimizing Core Web Vitals, and ongoing iterations.',
      tags: ['CI/CD Deployment', 'Speed Optimization', 'Production Support'],
    },
  ];

  const whatICanBuild = [
    {
      icon: Globe,
      title: 'High-Performance Web Apps',
      desc: 'Interactive, fast-loading web applications with full frontend, backend, database, and authentication integration.',
    },
    {
      icon: FlaskConical,
      title: 'EdTech & Interactive Labs',
      desc: 'Specialized educational platforms featuring 3D virtual experiments, student practice environments, and AI tutoring systems.',
    },
    {
      icon: Laptop,
      title: 'E-Commerce & Service Portals',
      desc: 'Full-stack platforms with dynamic carts, checkout flows, payment guidance (bKash/Nagad), and administrative control centers.',
    },
    {
      icon: Sparkles,
      title: 'AI-Powered Digital Products',
      desc: 'Practical AI integration — intelligent assistants, automated prompt workflows, and content generation tailored to user needs.',
    },
  ];

  return (
    <section id="capabilities" className="relative py-24 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-100/40 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col items-start space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-sky-800 font-semibold">
          <span>SECTION 05</span>
          <span>•</span>
          <span>HOW I BUILD & DELIVER</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-4">
          <div>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
              Engineering <span className="text-sky-700">Process</span>
            </h2>
            <p className="text-lg text-slate-600 font-normal mt-2 max-w-2xl">
              From concept to live deployment — a structured, accountable engineering workflow built for quality and speed.
            </p>
          </div>
        </div>
      </div>

      {/* Process 4-Step Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {engineeringProcess.map((step, idx) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-sky-300 transition-all duration-300 shadow-xs flex flex-col justify-between space-y-4 relative group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xl font-black text-sky-700">{step.num}</span>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Phase</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">{step.desc}</p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
              {step.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded bg-slate-50 text-[10px] font-mono text-slate-700 border border-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Solutions & Capabilities */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">
            WHAT I DELIVER FOR CLIENTS & USERS
          </div>
          <span className="w-2 h-2 rounded-full bg-sky-600 animate-pulse" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whatICanBuild.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-sky-300 transition-all space-y-3 shadow-xs"
              >
                <div className="p-3 rounded-2xl bg-sky-50 border border-sky-200 w-fit text-sky-700">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
