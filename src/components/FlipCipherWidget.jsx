import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Unlock, RefreshCw, Copy, Check, Terminal, Key } from 'lucide-react';

export const FlipCipherWidget = () => {
  const [inputText, setInputText] = useState("Rakesh Kumar M M — Full Stack Craftsman");
  const [isFlipped, setIsFlipped] = useState(false);
  const [copied, setCopied] = useState(false);

  // Simple Caesar / Substitution cipher function (Shift by 7)
  const encodeText = (str) => {
    return str
      .split('')
      .map((char) => {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) {
          return String.fromCharCode(((code - 65 + 7) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
          return String.fromCharCode(((code - 97 + 7) % 26) + 97);
        }
        return char;
      })
      .join('');
  };

  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(encodeText(inputText));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 px-6 md:px-12 max-w-4xl mx-auto relative z-10 select-none">
      <div className="text-center space-y-3 mb-10">
        <span className="text-xs font-mono text-neon tracking-widest uppercase">
          02 // INTERACTIVE UTILITY
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
          Smart Flip Encryption Widget
        </h2>
        <p className="text-gray-400 font-light text-sm max-w-md mx-auto">
          Type any custom message below and tap the card to trigger 3D flip substitution encryption.
        </p>
      </div>

      {/* 3D Flip Card Container */}
      <div className="perspective-1000 w-full max-w-xl mx-auto min-h-[260px] cursor-pointer">
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full transform-style-3d relative"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* FRONT SIDE (PLAINTEXT INPUT) */}
          <div className="absolute inset-0 backface-hidden p-8 rounded-3xl bg-neutral-900 border border-white/15 backdrop-blur-xl shadow-2xl flex flex-col justify-between hover:border-neon/50 transition-colors">
            <div className="flex justify-between items-center text-xs font-mono text-gray-400">
              <span className="flex items-center gap-2 text-white font-bold">
                <Unlock className="w-4 h-4 text-amber-400" /> PLAINTEXT INPUT
              </span>
              <span className="text-neon flex items-center gap-1">
                TAP CARD TO FLIP <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              </span>
            </div>

            <div className="my-4" onClick={(e) => e.stopPropagation()}>
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your message here..."
                className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-neon transition-colors"
                data-cursor-text="TYPE"
              />
            </div>

            <div className="flex justify-between items-center text-xs font-mono text-gray-400">
              <span>STATUS: UNENCRYPTED</span>
              <span className="text-neon font-bold">MODE: SHIFT-7 CIPHER</span>
            </div>
          </div>

          {/* BACK SIDE (ENCRYPTED CIPHER REVEAL) */}
          <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] p-8 rounded-3xl bg-neutral-950 border border-neon/50 backdrop-blur-xl shadow-[0_0_30px_rgba(0,255,106,0.15)] flex flex-col justify-between">
            <div className="flex justify-between items-center text-xs font-mono text-gray-400">
              <span className="flex items-center gap-2 text-neon font-bold">
                <Lock className="w-4 h-4 text-neon" /> SECURED ENCRYPTED OUTPUT
              </span>
              <span className="text-gray-400">TAP TO DECRYPT</span>
            </div>

            <div className="my-4 p-4 rounded-xl bg-black border border-neon/30 text-neon font-mono text-sm break-all font-bold relative group">
              {encodeText(inputText) || 'EMPTY_INPUT'}
              <button
                onClick={handleCopy}
                className="absolute top-2 right-2 p-1.5 rounded-lg bg-neon/10 hover:bg-neon/30 text-neon transition-colors"
                title="Copy encrypted payload"
                data-cursor-text="COPY"
              >
                {copied ? <Check className="w-4 h-4 text-neon" /> : <Copy className="w-4 h-4 text-neon" />}
              </button>
            </div>

            <div className="flex justify-between items-center text-xs font-mono text-gray-400">
              <span className="text-neon font-bold flex items-center gap-1">
                <Key className="w-3.5 h-3.5" /> OWASP HARDENED
              </span>
              <span className="text-white">CLICK ANYWHERE TO REVERT</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
