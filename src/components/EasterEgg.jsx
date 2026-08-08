import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Sparkles, Terminal, Heart, Zap, Smile } from 'lucide-react';

export const EasterEgg = () => {
  const [hovered, setHovered] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const EasterQuotes = [
    "// caffeine-powered software craftsman ☕",
    "// status: 100% bug-free (usually) 🚀",
    "// OWASP hardening active 🔒",
    "// ECE student by day, full-stack by night 🌙",
    "// fun fact: loves micro-interactions! ✨"
  ];

  return (
    <div className="relative inline-block cursor-pointer">
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        onClick={() => setClickCount((prev) => (prev + 1) % EasterQuotes.length)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative group p-1.5 rounded-full bg-gradient-to-r from-neon/40 via-white/10 to-neon/40 border border-neon/30 hover:border-neon shadow-[0_0_20px_rgba(0,255,106,0.2)] transition-all duration-300 flex items-center gap-2"
        data-cursor-text="HOVER ME"
      >
        {/* Avatar / Interactive Badge Image */}
        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-neon/50 bg-black flex items-center justify-center">
          <img
            src="/rk.jpg"
            alt="Rakesh Kumar M M Avatar"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {/* Reaction Overlay Badge */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="absolute inset-0 bg-neon/80 backdrop-blur-xs flex items-center justify-center text-black"
              >
                <Sparkles className="w-4 h-4 animate-spin text-black" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Small Ticker Badge */}
        <div className="flex items-center gap-1 px-2 font-mono text-[11px] text-neon font-bold tracking-wider">
          <span>TRY TO HOVER</span>
          <motion.div
            animate={hovered ? { rotate: [0, 20, -20, 0] } : { rotate: 0 }}
            transition={{ repeat: Infinity, duration: 0.6 }}
          >
            👋
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Code-Comment Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 px-4 py-2 rounded-xl bg-black/90 border border-neon/50 text-neon font-mono text-xs shadow-[0_0_25px_rgba(0,255,106,0.3)] backdrop-blur-md whitespace-nowrap z-50 flex items-center gap-2 pointer-events-none"
          >
            <Terminal className="w-3.5 h-3.5 text-neon animate-pulse" />
            <span>{EasterQuotes[clickCount]}</span>
            <span className="text-[10px] text-gray-400 font-sans font-light">(click to cycle)</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
