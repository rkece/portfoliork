import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, FileText, Bookmark, Award, BookOpen, Quote, ShieldCheck } from 'lucide-react';

export const ModelCard = () => {
  const [copied, setCopied] = useState(false);

  const bibtex = `@misc{rakeshkumar2026,
  title  = {Rakesh Kumar M M — Full Stack Software Craftsman},
  author = {Kumar M M, Rakesh},
  institution = {R.M.K. Engineering College},
  year   = {2026},
  note   = {Portfolio: rakeshkumarmm.in},
  keywords = {MERN Stack, Application Security, IoT, OWASP}
}`;

  const handleCopyBibtex = () => {
    navigator.clipboard.writeText(bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto relative z-10 font-mono">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-xs text-neon tracking-widest uppercase">
          08 // SPEC SHEET & MODEL CARD (arXiv FORMAT)
        </span>
        <div className="h-[1px] flex-grow bg-white/10" />
      </div>

      {/* Monospace Paper Card with Scanlines */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl bg-[#0F0F0F] border border-white/20 p-8 md:p-14 shadow-2xl relative overflow-hidden scanlines space-y-10 hover:border-neon/50 transition-colors"
      >
        {/* Top Header Badge */}
        <div className="flex flex-wrap justify-between items-center border-b border-white/10 pb-6 gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-neon" />
            <span className="text-white font-bold tracking-widest uppercase">MODEL_CARD // RAKESH_KUMAR_MM.pdf</span>
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-neon">arXiv:2026.08.RK</span>
            <span className="text-gray-500">REV: 2.0.0</span>
          </div>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
            System Card: Rakesh Kumar M M — Full Stack Software Craftsman & AppSec Engineer
          </h2>
          <p className="text-xs text-neon tracking-wider">
            AUTHOR: KUMAR M M, RAKESH • AFFILIATION: R.M.K. ENGINEERING COLLEGE (ECE)
          </p>
        </div>

        {/* 1. Abstract */}
        <div className="space-y-3 bg-black/60 p-6 rounded-2xl border border-white/10">
          <h3 className="text-xs text-neon font-bold uppercase tracking-widest flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-neon" /> 1. ABSTRACT
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
            This document outlines the architectural specifications and engineering profile of Rakesh Kumar M M, a Full Stack Software Craftsman specializing in high-throughput MERN stack web applications, OWASP application security auditing, and hardware IoT telemetry streams. Currently pursuing a Bachelor of Engineering in Electronics and Communication Engineering at R.M.K. Engineering College (8.33 CGPA index), the candidate combines decoupled backend RESTful architecture with 60 FPS motion-driven frontend interfaces. All production builds enforce strict Content-Security-Policies, input sanitization, and automated latency benchmarks.
          </p>
        </div>

        {/* 2. Acknowledgements */}
        <div className="space-y-3 bg-black/60 p-6 rounded-2xl border border-white/10">
          <h3 className="text-xs text-neon font-bold uppercase tracking-widest flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-neon" /> 2. ACKNOWLEDGEMENTS
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
            Special acknowledgements to the faculty mentors at R.M.K. Engineering College, open-source maintainers across the React, Node.js, and OWASP communities, and peer engineering collaborators in the IoT embedded hardware research lab.
          </p>
        </div>

        {/* 3. Peer Review */}
        <div className="space-y-3 bg-black/60 p-6 rounded-2xl border border-white/10 relative">
          <h3 className="text-xs text-neon font-bold uppercase tracking-widest flex items-center gap-2">
            <Quote className="w-4 h-4 text-neon" /> 3. PEER REVIEW & EVALUATION
          </h3>
          <blockquote className="text-xs sm:text-sm text-gray-300 italic font-light border-l-2 border-neon pl-4 py-1">
            "Candidate exhibits exceptional code hygiene, security foresight, and full-stack execution capability under tight production timelines."
          </blockquote>
          <p className="text-[10px] text-gray-500 text-right uppercase">
            — EVALUATION BOARD // R.M.K. ECE DEPARTMENT
          </p>
        </div>

        {/* 4. Cite This (BibTeX Block with Copy Button) */}
        <div className="space-y-3 bg-black p-6 rounded-2xl border border-neon/40 relative group">
          <div className="flex justify-between items-center">
            <h3 className="text-xs text-neon font-bold uppercase tracking-widest flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-neon" /> 4. CITE THIS (BibTeX)
            </h3>
            <button
              onClick={handleCopyBibtex}
              className="px-3 py-1.5 rounded-lg bg-neon/10 hover:bg-neon text-neon hover:text-black font-bold text-xs transition-all flex items-center gap-1.5"
              data-cursor-text="COPY"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" /> COPIED!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> COPY BIBTEX
                </>
              )}
            </button>
          </div>

          <pre className="text-[11px] sm:text-xs text-neon/90 overflow-x-auto p-4 bg-neutral-950 rounded-xl border border-white/10 font-mono leading-relaxed select-all">
            {bibtex}
          </pre>
        </div>
      </motion.div>
    </section>
  );
};
