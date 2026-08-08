import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const About = () => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isHoverCapable, setIsHoverCapable] = useState(true);

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsHoverCapable(finePointer && !reducedMotion);
  }, []);

  // 3D Tilt Spring Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 180, damping: 20, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);

  const handleMouseMove = (e) => {
    if (!isHoverCapable || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glowX.set(x);
    glowY.set(y);
    mouseX.set((x / rect.width) - 0.5);
    mouseY.set((y / rect.height) - 0.5);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10 space-y-16">
      {/* Section Header: 01 // IDENTITY & ABOUT */}
      <div className="flex items-center gap-4 gsap-reveal">
        <span className="text-xs font-mono text-neon tracking-widest uppercase">
          01 // IDENTITY & ABOUT
        </span>
        <div className="h-[1px] flex-grow bg-white/10" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Text & Bio */}
        <div className="lg:col-span-7 space-y-6 gsap-reveal">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neon" />
            </span>
            <span className="text-xs font-mono text-white tracking-wider">
              ECE STUDENT @ R.M.K. ENGINEERING COLLEGE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
            Engineering robust digital systems with craft & precision.
          </h2>

          <div className="space-y-4 text-gray-300 font-light text-base md:text-lg leading-relaxed">
            <p>
              I am <strong className="text-white font-medium">Rakesh Kumar M M</strong>, a ECE student focused on Software Development and IoT, building Web and Mobile apps alongside microcontroller-based hardware projects. Comfortable across both software and hardware layers.
            </p>
            <p>
              Currently pursuing my Bachelor's in <strong className="text-white">Electronics and Communication Engineering</strong> at <strong className="text-white">R.M.K. Engineering College</strong> (2024–2028).
            </p>
          </div>
        </div>

        {/* Right Column: User Portrait Image with 3D Tilt Card (No green tint on photo) */}
        <div className="lg:col-span-5 flex justify-center perspective-1000 gsap-reveal">
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX: isHoverCapable ? rotateX : 0,
              rotateY: isHoverCapable ? rotateY : 0,
              transformStyle: 'preserve-3d',
            }}
            animate={{
              scale: isHovered && isHoverCapable ? 1.02 : 1,
            }}
            transition={{ duration: 0.3 }}
            className="relative group w-full max-w-md cursor-pointer select-none"
          >
            {/* Outer Corner Frame */}
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-white/40 opacity-60 group-hover:border-white group-hover:translate-x-[-4px] group-hover:translate-y-[-4px] transition-all duration-300" />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-white/40 opacity-60 group-hover:border-white group-hover:translate-x-[4px] group-hover:translate-y-[4px] transition-all duration-300" />

            {/* Image Container with User Photo (Clean original colors, no green tint overlay) */}
            <div className="relative z-10 rounded-3xl overflow-hidden bg-neutral-900 border border-white/15 p-2 backdrop-blur-md group-hover:border-white/40 transition-colors duration-500 shadow-2xl">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative bg-black">
                <img
                  src="/rk.jpg"
                  alt="Rakesh Kumar M M"
                  className="w-full h-full object-cover grayscale opacity-95 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
