import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Award, CheckCircle2 } from 'lucide-react';

export const Testimonials = () => {
  const reviews = [
    {
      name: "Dr. K. Vijayalakshmi",
      role: "Head of Dept, ECE @ R.M.K. Engineering College",
      quote: "Rakesh demonstrates exceptional engineering discipline. His ability to fuse hardware IoT protocols with full-stack web applications is outstanding.",
      stars: 5,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Senthil Nathan",
      role: "Senior Full Stack Mentor & Tech Lead",
      quote: "One of the sharpest student craftsmen I've mentored. Rakesh takes OWASP security standards seriously and builds production-grade code.",
      stars: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Anand M.",
      role: "IoT Hardware Project Collaborator",
      quote: "Collaborating with Rakesh on the Autonomous Rover project was seamless. His telemetry backend and UI response time (<50ms) exceeded all expectations.",
      stars: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-xs font-mono text-neon tracking-widest uppercase">
          06 // TESTIMONIALS & PEER ENDORSEMENTS
        </span>
        <div className="h-[1px] flex-grow bg-white/10" />
      </div>

      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
          What Mentors & Peers Say
        </h2>
        <p className="text-gray-400 font-light text-base">
          Endorsements from academic professors, project collaborators, and industry mentors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((rev, idx) => (
          <motion.div
            key={rev.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="p-8 rounded-3xl bg-neutral-900/90 border border-white/15 backdrop-blur-xl hover:border-neon/50 transition-all duration-300 shadow-2xl flex flex-col justify-between space-y-6 relative group"
            data-cursor-text="QUOTE"
          >
            <Quote className="w-10 h-10 text-neon/20 group-hover:text-neon/40 transition-colors absolute top-6 right-6" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-1">
                {[...Array(rev.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-neon text-neon" />
                ))}
              </div>

              <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed italic">
                "{rev.quote}"
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-white/10 relative z-10">
              <img
                src={rev.avatar}
                alt={rev.name}
                className="w-12 h-12 rounded-full object-cover border border-neon/40"
              />
              <div>
                <h3 className="font-display font-bold text-white text-base group-hover:text-neon transition-colors flex items-center gap-1.5">
                  {rev.name} <CheckCircle2 className="w-3.5 h-3.5 text-neon" />
                </h3>
                <p className="text-xs font-mono text-gray-400">
                  {rev.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
