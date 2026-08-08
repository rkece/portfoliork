import React, { useRef, useEffect } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useVelocity,
  useReducedMotion,
} from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { HeroCanvas } from './HeroCanvas';
import { MagneticButton } from './MagneticButton';

export const Hero = () => {
  const heroRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // 1. Scroll-linked 3-layer parallax setup
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const yBack = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yMid = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const yFront = useTransform(scrollYProgress, [0, 1], [0, -260]);

  // 2. Cursor-reactive front layer with spring-lagged tracking
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springX = useSpring(rawX, { stiffness: 50, damping: 20, mass: 1 });
  const springY = useSpring(rawY, { stiffness: 50, damping: 20, mass: 1 });

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || !heroRef.current) return;
    const { left, top, width, height } = heroRef.current.getBoundingClientRect();
    const offsetX = (e.clientX - (left + width / 2)) * 0.04;
    const offsetY = (e.clientY - (top + height / 2)) * 0.04;
    rawX.set(offsetX);
    rawY.set(offsetY);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  // 6. Scroll-velocity reactive stretch
  const scrollVelocity = useVelocity(scrollYProgress);
  const velocityScaleY = useTransform(scrollVelocity, [-1, 0, 1], [1.03, 1, 1.03]);
  const springVelocityScaleY = useSpring(velocityScaleY, { stiffness: 100, damping: 15 });

  const headlineWords = ['RAKESH', 'KUMAR', 'M M'];

  return (
    <section
      ref={heroRef}
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full flex flex-col justify-center items-center py-20 px-6 md:px-12 overflow-hidden select-none z-10"
    >
      {/* Layer 1: Back Parallax Layer (Slowest, -60px) */}
      <motion.div
        style={{ y: shouldReduceMotion ? 0 : yBack }}
        className="absolute inset-0 pointer-events-none layer-back z-0 flex items-center justify-center opacity-30"
      >
        <div className="w-[700px] h-[700px] rounded-full bg-neon/5 blur-[160px]" />
      </motion.div>

      {/* Layer 2: Mid Parallax Layer (-140px) */}
      <motion.div
        style={{ y: shouldReduceMotion ? 0 : yMid }}
        className="absolute inset-0 pointer-events-none layer-mid z-0 flex items-center justify-center opacity-40"
      >
        <HeroCanvas />
      </motion.div>

      {/* Layer 3: Front Parallax Layer (Fastest -260px + Cursor Spring Lag) */}
      <motion.div
        style={{
          y: shouldReduceMotion ? 0 : yFront,
          x: shouldReduceMotion ? 0 : springX,
          translateY: shouldReduceMotion ? 0 : springY,
        }}
        className="absolute inset-0 pointer-events-none layer-front z-0 border border-white/5 rounded-full scale-90 opacity-20"
      />

      {/* 3. Idle Ambient Motion on Hero Central Visual */}
      <motion.div
        style={{ scaleY: shouldReduceMotion ? 1 : springVelocityScaleY }}
        className="z-10 text-center my-auto w-full max-w-6xl space-y-8 origin-center"
      >
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : { y: [0, -12, 0], rotate: [0, 1.5, 0, -1.5, 0] }
          }
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="font-serif font-black tracking-tighter leading-none cursor-default"
        >
          <div className="flex flex-wrap justify-center items-center gap-x-4 sm:gap-x-8 md:gap-x-12 text-5xl sm:text-7xl md:text-8xl lg:text-9xl overflow-hidden py-2">
            {headlineWords.map((word, i) => (
              <span
                key={i}
                className={`inline-block transition-colors duration-300 ${
                  i === 2 ? 'text-stroke hover:text-neon' : 'text-white hover:text-neon'
                }`}
              >
                {word}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-300 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto"
        >
          Full Stack Software Craftsman building scalable{' '}
          <span className="text-neon font-serif font-semibold">
            Web and Mobile Applications
          </span>{' '}
          with{' '}
          <span className="text-neon font-serif font-semibold">
            Application Security
          </span>{' '}
          hardening and hardware IoT integrations.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-5 pt-4"
        >
          {/* EXPLORE PROJECTS Button */}
          <MagneticButton
            href="#projects"
            className="px-8 py-4 rounded-full bg-[#00FF6A] text-black font-mono font-bold text-xs tracking-widest uppercase shadow-[0_0_15px_rgba(0,255,106,0.25)] hover:shadow-[0_0_20px_rgba(0,255,106,0.45)] hover:bg-[#00FF6A] hover:text-black border border-[#00FF6A] transition-all duration-300 flex items-center gap-3 cursor-pointer group"
          >
            <span>EXPLORE PROJECTS</span>
            <ArrowDown className="w-4 h-4 text-black transform group-hover:translate-y-0.5 transition-transform" />
          </MagneticButton>

          {/* GET IN TOUCH Button */}
          <MagneticButton
            href="#contact"
            className="px-8 py-4 rounded-full border border-white/20 bg-black/50 text-white font-mono text-xs tracking-widest uppercase hover:bg-neon hover:text-black hover:border-neon backdrop-blur-md transition-all duration-300 cursor-pointer"
          >
            GET IN TOUCH
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
};
