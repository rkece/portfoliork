import React from 'react';
import { ArrowUp } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/10 bg-[#0A0A0A] relative z-10 font-mono text-xs text-gray-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Info */}
        <div className="space-y-1 text-center md:text-left">
          <p className="text-gray-300 font-bold tracking-widest">
            RAKESH KUMAR M M
          </p>
          <p className="text-gray-500 text-[11px]">
            Full Stack Software Craftsman • ECE Student @ R.M.K. Engineering College
          </p>
        </div>

        {/* Center Copyright */}
        <div className="text-center text-[11px] text-gray-500">
          © {new Date().getFullYear()} ALL RIGHTS RESERVED.
        </div>

        {/* Right Back-to-Top Button */}
        <MagneticButton
          onClick={scrollToTop}
          className="p-3 rounded-full border border-white/20 bg-white/5 text-white hover:border-neon hover:text-neon transition-all"
        >
          <ArrowUp className="w-5 h-5" />
        </MagneticButton>
      </div>
    </footer>
  );
};
