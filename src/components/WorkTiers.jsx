import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Clock, MessageSquare, Target, Calendar, Briefcase, Zap, Sparkles } from 'lucide-react';

export const WorkTiers = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tiers = [
    {
      id: 'freelance',
      title: 'Freelance Project',
      subtitle: 'Fixed-Scope Full-Stack Delivery',
      length: '2 - 6 Weeks',
      comm: 'Daily Slack / Discord & Async Updates',
      ideal: 'MERN Web Apps, Landing Pages, Microservices',
      availability: 'Immediate (1 Spot Left)',
      deliverables: [
        'End-to-End MERN Stack Implementation',
        'Responsive Mobile-First UI (Framer / GSAP)',
        'OWASP Top 10 Security Audit & Hardening',
        'Deployment on Vercel / AWS / Netlify',
        'Full Source Code & Documentation Handover'
      ],
      badge: 'POPULAR FOR STARTUPS'
    },
    {
      id: 'contract',
      title: 'Contract Work',
      subtitle: 'Dedicated Engineering Sprint',
      length: '1 - 3 Months',
      comm: 'Weekly Sprint Demos + Dedicated Channel',
      ideal: 'Feature Rollouts, Codebase Refactoring, AppSec Audits',
      availability: 'Available Q3 2026',
      deliverables: [
        'Dedicated 20-30 Hours / Week Commitment',
        'Complex API Integrations & Database Schema Design',
        'Frontend Performance Optimization (<100ms LCP)',
        'IoT Telemetry & WebSocket Real-Time Dashboards',
        'CI/CD Pipeline Setup & Testing'
      ],
      badge: 'FLEXIBLE DURATION'
    },
    {
      id: 'fulltime',
      title: 'Full-Time Role',
      subtitle: 'Graduate / Junior Engineer',
      length: 'Permanent (Post 2028 Graduation)',
      comm: 'Full Agile / Scrum Sync & Team Integration',
      ideal: 'High-Growth Tech Teams, Security & SaaS Product Companies',
      availability: 'Open for Campus / PPO Offers',
      deliverables: [
        'Full Ownership of Stack Modules & Services',
        'Proactive OWASP Vulnerability Mitigation',
        'Cross-Functional Collaboration with Product & Design',
        'Continuous Learning & Systems Mentorship',
        'Long-Term Commitment & Craft Discipline'
      ],
      badge: 'GRADUATE / PPO'
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-xs font-mono text-neon tracking-widest uppercase">
          07 // ENGAGEMENT TIERS & COLLABORATION
        </span>
        <div className="h-[1px] flex-grow bg-white/10" />
      </div>

      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
          Ways to Work With Me
        </h2>
        <p className="text-gray-400 font-light text-base">
          Select a tier tab below to inspect detailed engagement terms, deliverables, and availability.
        </p>
      </div>

      {/* Tab Switcher Buttons */}
      <div className="flex justify-center mb-12">
        <div className="grid grid-cols-3 gap-2 p-1.5 rounded-2xl bg-neutral-900 border border-white/15 max-w-2xl w-full">
          {tiers.map((tier, idx) => (
            <button
              key={tier.id}
              onClick={() => setActiveTab(idx)}
              className={`py-3 px-4 rounded-xl font-mono text-xs font-bold transition-all text-center flex items-center justify-center gap-2 ${
                activeTab === idx
                  ? 'bg-neon text-black shadow-[0_0_20px_#00FF6A]'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
              data-cursor-text="SELECT"
            >
              <Briefcase className="w-3.5 h-3.5 hidden sm:inline" />
              <span>{tier.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Animated Tier Detail & Comparison Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tiers[activeTab].id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-neutral-900/90 border border-neon/40 rounded-3xl p-8 md:p-12 backdrop-blur-2xl shadow-[0_0_35px_rgba(0,255,106,0.15)]"
        >
          {/* Left Column: Key Parameters Comparison Table */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-neon/10 border border-neon/30 text-neon font-bold">
                {tiers[activeTab].badge}
              </span>
              <span className="text-xs font-mono text-gray-400">TIER {activeTab + 1} OF 3</span>
            </div>

            <div>
              <h3 className="text-3xl font-display font-bold text-white">
                {tiers[activeTab].title}
              </h3>
              <p className="text-neon font-mono text-xs tracking-wider uppercase mt-1">
                {tiers[activeTab].subtitle}
              </p>
            </div>

            {/* Comparison Metrics Grid */}
            <div className="space-y-4 pt-2 font-mono text-xs">
              <div className="p-4 rounded-xl bg-black/60 border border-white/10 flex items-start gap-3">
                <Clock className="w-4 h-4 text-neon flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase">ENGAGEMENT LENGTH</span>
                  <span className="text-white font-bold">{tiers[activeTab].length}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/60 border border-white/10 flex items-start gap-3">
                <MessageSquare className="w-4 h-4 text-neon flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase">COMMUNICATION & CADENCE</span>
                  <span className="text-white font-bold">{tiers[activeTab].comm}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/60 border border-white/10 flex items-start gap-3">
                <Target className="w-4 h-4 text-neon flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase">IDEAL PROJECT TYPE</span>
                  <span className="text-white font-bold">{tiers[activeTab].ideal}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/60 border border-white/10 flex items-start gap-3">
                <Calendar className="w-4 h-4 text-neon flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase">CURRENT AVAILABILITY</span>
                  <span className="text-neon font-bold">{tiers[activeTab].availability}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Deliverables Checklist */}
          <div className="lg:col-span-6 p-8 rounded-2xl bg-black border border-white/10 flex flex-col justify-between space-y-6">
            <div>
              <h4 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-neon" /> INCLUDED DELIVERABLES & COMMITMENTS
              </h4>
              <ul className="space-y-3">
                {tiers[activeTab].deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-200">
                    <span className="w-5 h-5 rounded-full bg-neon/20 border border-neon text-neon flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contact"
              className="w-full py-4 rounded-xl bg-neon text-black font-mono text-xs font-bold tracking-widest uppercase text-center hover:bg-white hover:shadow-[0_0_25px_#00FF6A] transition-all block"
              data-cursor-text="START"
            >
              INITIATE COLLABORATION →
            </a>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
