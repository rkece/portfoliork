import React from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitBranch, Terminal, Shield, Award, Sparkles } from 'lucide-react';

export const Highlights = () => {
  const highlights = [
    {
      title: "Full Stack Mastery",
      stat: "MERN Stack",
      desc: "Architecting end-to-end applications with React, Node.js, Express, MongoDB, and Firebase.",
      icon: Terminal
    },
    {
      title: "Security Auditing",
      stat: "OWASP ZAP",
      desc: "Proactive vulnerability assessment, pen-testing Web APIs, and hardening modern authentication flows.",
      icon: Shield
    },
    {
      title: "Academic Standing",
      stat: "8.33 CGPA",
      desc: "ECE student at R.M.K. Engineering College consistently maintaining top academic performance.",
      icon: Award
    },
    {
      title: "IoT & Hardware Telemetry",
      stat: "Embedded Systems",
      desc: "Building autonomous rovers and distress protocols integrated with real-time web telemetry.",
      icon: Sparkles
    }
  ];

  return (
    <section className="py-20 bg-neutral-950/60 border-y border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-mono text-neon tracking-widest uppercase">
            05 // HIGHLIGHTS & CREDENTIALS
          </span>
          <div className="h-[1px] flex-grow bg-white/10" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h) => {
            const Icon = h.icon;
            return (
              <div
                key={h.title}
                className="group p-6 rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-neon/50 backdrop-blur-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-neon/10 border border-neon/30 flex items-center justify-center mb-4 group-hover:bg-neon group-hover:text-black transition-colors">
                    <Icon className="w-5 h-5 text-neon group-hover:text-black transition-colors" />
                  </div>
                  <span className="text-xs font-mono text-neon font-bold uppercase tracking-wider">
                    {h.stat}
                  </span>
                  <h3 className="font-display font-bold text-xl text-white mt-1 mb-2">
                    {h.title}
                  </h3>
                  <p className="text-gray-400 font-light text-xs leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
