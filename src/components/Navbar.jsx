import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Download } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Timeline", href: "#timeline" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 ${
          isScrolled
            ? 'py-3 bg-[#0A0A0A]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Panda Logo Badge */}
          <a
            href="#home"
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-transparent border border-white/15 flex items-center justify-center text-white group-hover:border-neon group-hover:text-neon group-hover:bg-transparent group-hover:shadow-[0_0_15px_rgba(0,255,106,0.4)] transition-all duration-300">
              {/* Crisp Detailed Panda Vector Icon */}
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                {/* Ears */}
                <circle cx="6" cy="6" r="2.2" fill="currentColor" />
                <circle cx="18" cy="6" r="2.2" fill="currentColor" />
                {/* Face Outline */}
                <path d="M12 5.5C7.3 5.5 4 8.8 4 13.2c0 3.8 3.1 6.8 7 6.8s7-3 7-6.8c0-4.4-3.3-7.7-7-7.7z" />
                {/* Eye Patches */}
                <ellipse cx="9" cy="12.5" rx="1.5" ry="2" fill="currentColor" />
                <ellipse cx="15" cy="12.5" rx="1.5" ry="2" fill="currentColor" />
                {/* Nose */}
                <path d="M11.5 15.5h1a.5.5 0 01.5.5v0a1 1 0 01-1 1h0a1 1 0 01-1-1v0a.5.5 0 01.5-.5z" fill="currentColor" />
              </svg>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 bg-white/5 px-6 py-2 rounded-full border border-white/10 backdrop-blur-md">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-xs font-mono tracking-widest text-gray-300 hover:text-white uppercase transition-colors group py-1"
                data-cursor-text="GO"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-neon group-hover:w-full transition-all duration-300 ease-out" />
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <MagneticButton
              href="/rakeshkumarresume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full border border-neon/40 text-neon font-mono text-xs tracking-wider flex items-center gap-2 hover:bg-neon hover:text-black hover:border-neon transition-all duration-300"
              data-cursor-text="CV"
            >
              <Download className="w-3.5 h-3.5" />
              <span>RESUME</span>
            </MagneticButton>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:text-neon hover:border-neon transition-colors z-50"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Fullscreen Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 90% 10%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 90% 10%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 90% 10%)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col justify-between p-8 pt-28 md:hidden"
          >
            <div className="flex flex-col gap-6 my-auto">
              <span className="text-xs font-mono text-neon tracking-widest uppercase">
                // NAVIGATION
              </span>
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="text-4xl font-display font-bold text-white hover:text-neon transition-colors flex items-center justify-between border-b border-white/10 pb-4"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-6 h-6 text-neon opacity-70" />
                </motion.a>
              ))}
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <a
                href="/rakeshkumarresume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="w-full py-3.5 rounded-lg bg-neon text-black font-mono text-center text-sm font-bold tracking-widest flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                DOWNLOAD RESUME
              </a>
              <p className="text-center font-mono text-xs text-gray-500">
                mmrakeshkumar13@gmail.com
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
