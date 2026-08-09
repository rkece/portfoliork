import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export const Highlights = () => {
  const highlights = [
    {
      title: "Full Stack Mastery",
      stat: "MERN Stack",
      desc: "Architecting end-to-end applications with Next.js, React, Node.js, PostgreSQL, and Firebase.",
      icon: Terminal
    },
    {
      title: "Industrial Automation",
      stat: "Siemens COE",
      desc: "PLC logic programming & HMI interface design for real-time industrial process monitoring.",
      icon: Shield
    },
    {
      title: "Academic Standing",
      stat: "8.33 CGPA",
      desc: "Third-year ECE student at R.M.K. Engineering College consistently maintaining high performance.",
      icon: Award
    },
    {
      title: "IoT & Hardware Telemetry",
      stat: "Embedded Systems",
      desc: "Arduino & microcontroller-based hardware projects integrated with real-time web & mobile applications.",
      icon: Sparkles
    }
  ];

  const certifications = [
    { name: "Application Development", issuer: "Microsoft Amazon" },
    { name: "Redshift Cloud", issuer: "Amazon Web Services (AWS)" },
    { name: "Networking Basics", issuer: "Cisco Networking Academy" },
    { name: "PLC and HMI", issuer: "Siemens Centre of Excellence" }
  ];

  return (
    <section className="py-20 bg-neutral-950/60 border-y border-white/10 relative z-10 space-y-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-mono text-neon tracking-widest uppercase">
            05 // HIGHLIGHTS & CREDENTIALS
          </span>
          <div className="h-[1px] flex-grow bg-white/10" />
        </div>

        {/* Highlights Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, x: isLeft ? -70 : 70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
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
              </motion.div>
            );
          })}
        </div>

        {/* Certifications Sub-Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-neon" />
            <h3 className="text-sm font-mono text-white tracking-widest uppercase font-bold">
              VERIFIED INDUSTRIAL CERTIFICATIONS
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="p-5 rounded-xl bg-neutral-900/80 border border-white/10 hover:border-neon/40 transition-colors space-y-1"
                >
                  <span className="text-xs font-mono text-neon font-bold uppercase block">
                    CERTIFIED
                  </span>
                  <h4 className="font-serif font-bold text-base text-white">
                    {cert.name}
                  </h4>
                  <p className="text-xs font-mono text-gray-400">
                    {cert.issuer}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

