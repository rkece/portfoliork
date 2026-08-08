import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Flame, Shield, Coffee, Zap, Code2, Globe, Sparkles, Terminal } from 'lucide-react';

export const SocialProofGrid = () => {
  const stickers = [
    {
      label: "Open Source Contributor",
      icon: GitBranch,
      detail: "Active GitHub PRs & Modules",
      color: "border-neon/40 bg-neon/5 text-neon",
    },
    {
      label: "Always Shipping",
      icon: Zap,
      detail: "Full Stack & IoT Prototypes",
      color: "border-amber-400/40 bg-amber-400/5 text-amber-400",
    },
    {
      label: "Deploys on Vercel",
      icon: Globe,
      detail: "Next.js & React Edge Builds",
      color: "border-blue-400/40 bg-blue-400/5 text-blue-400",
    },
    {
      label: "GitHub Streak: 120+ Days",
      icon: Flame,
      detail: "Daily Commits & Pushes",
      color: "border-rose-400/40 bg-rose-400/5 text-rose-400",
    },
    {
      label: "Runs on Caffeine ☕",
      icon: Coffee,
      detail: "Late Night Code Sprints",
      color: "border-emerald-400/40 bg-emerald-400/5 text-emerald-400",
    },
    {
      label: "OWASP Hardened",
      icon: Shield,
      detail: "AppSec Vulnerability Audits",
      color: "border-purple-400/40 bg-purple-400/5 text-purple-400",
    },
    {
      label: "ECE Student @ RMKEC",
      icon: Terminal,
      detail: "8.33 CGPA Academic Standing",
      color: "border-cyan-400/40 bg-cyan-400/5 text-cyan-400",
    },
    {
      label: "MERN Stack Specialist",
      icon: Code2,
      detail: "MongoDB, Express, React, Node",
      color: "border-neon/40 bg-neon/5 text-neon",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-xs font-mono text-neon tracking-widest uppercase">
          05 // NOW GRID & PROOF OF CRAFT
        </span>
        <div className="h-[1px] flex-grow bg-white/10" />
      </div>

      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
          Real Facts & Live Signals
        </h2>
        <p className="text-gray-400 font-light text-sm">
          A bento masonry grid reflecting real engineering habits, stack deployment facts, and ongoing commitments.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stickers.map((sticker, idx) => {
          const Icon = sticker.icon;
          return (
            <motion.div
              key={sticker.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`p-6 rounded-2xl border backdrop-blur-xl transition-all duration-300 shadow-lg flex flex-col justify-between space-y-4 group cursor-default ${sticker.color}`}
              data-cursor-text="FACT"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <Sparkles className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="space-y-1">
                <h3 className="font-display font-bold text-base text-white group-hover:text-neon transition-colors">
                  {sticker.label}
                </h3>
                <p className="text-xs font-mono text-gray-400">
                  {sticker.detail}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
