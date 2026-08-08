import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useMotionValue } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const Timeline = () => {
  const containerRef = useRef(null);

  // 4. Scroll-scrubbed section reveal with GSAP ScrollTrigger
  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!containerRef.current) return;

    const children = containerRef.current.querySelectorAll('.gsap-reveal');
    if (!children.length) return;

    gsap.from(children, {
      opacity: 0,
      y: 40,
      stagger: 0.08,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'top 30%',
        scrub: 1,
      },
    });
  }, { scope: containerRef });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 200, damping: 25 });

  const timelineEvents = [
    {
      year: "2024 — 2028",
      title: "B.E. Electronics & Communication Engineering",
      institution: "R.M.K. Engineering College",
      type: "COLLEGE EDUCATION",
      badge: "ECE STUDENT",
      desc: "Pursuing Bachelor of Engineering specializing in Full Stack Software Development (Web & Mobile), IoT embedded systems, and Application Security.",
      icon: GraduationCap
    },
    {
      year: "2023 — 2024",
      title: "Higher Secondary Education (HSE) — CS Group",
      institution: "Vivekananda Matric Hr Sec School",
      type: "SCHOOL EDUCATION",
      badge: "COMPUTER SCIENCE",
      desc: "Completed Higher Secondary Education focusing on Computer Science, Advanced Mathematics, Physics, and Software Fundamentals.",
      icon: BookOpen
    }
  ];

  return (
    <section id="timeline" ref={containerRef} className="py-24 px-6 md:px-12 max-w-5xl mx-auto relative z-10 space-y-16">
      {/* Section Header: 05 // EDUCATION & TIMELINE */}
      <div className="flex items-center gap-4 gsap-reveal">
        <span className="text-xs font-mono text-neon tracking-widest uppercase">
          05 // EDUCATION & ACADEMIC TIMELINE
        </span>
        <div className="h-[1px] flex-grow bg-white/10" />
      </div>

      <div className="text-center max-w-2xl mx-auto space-y-2 gsap-reveal">
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
          Education Journey
        </h2>
        <p className="text-gray-400 font-light text-base">
          Academic milestones from Computer Science secondary schooling to B.E. Electronics & Communication Engineering.
        </p>
      </div>

      {/* Timeline Track */}
      <div className="relative pt-8 gsap-reveal">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2" />

        <motion.div
          style={{ scaleY, originY: 0 }}
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-neon shadow-[0_0_12px_#00FF6A] -translate-x-1/2"
        />

        <div className="space-y-16">
          {timelineEvents.map((item, idx) => {
            const Icon = item.icon;
            const isEven = idx % 2 === 0;

            return (
              <TimelineItem key={item.title} item={item} isEven={isEven} Icon={Icon} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

// 7.11 Direction-Aware Hover Timeline Item Component
const TimelineItem = ({ item, isEven, Icon }) => {
  const cardRef = useRef(null);
  const [isHoverCapable, setIsHoverCapable] = useState(true);

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsHoverCapable(finePointer && !reducedMotion);
  }, []);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 20 };
  const shiftX = useSpring(rawX, springConfig);
  const shiftY = useSpring(rawY, springConfig);

  const handleMouseEnter = (e) => {
    if (!isHoverCapable || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const w = rect.width;
    const h = rect.height;

    // Calculate nearest edge entrance
    const distTop = y;
    const distBottom = h - y;
    const distLeft = x;
    const distRight = w - x;

    const minDist = Math.min(distTop, distBottom, distLeft, distRight);

    if (minDist === distLeft) {
      rawX.set(4);
    } else if (minDist === distRight) {
      rawX.set(-4);
    } else if (minDist === distTop) {
      rawY.set(4);
    } else {
      rawY.set(-4);
    }
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <div
      className={`relative flex flex-col md:flex-row items-center ${
        isEven ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0A0A0A] border-2 border-neon flex items-center justify-center z-10 shadow-[0_0_15px_#00FF6A]">
        <Icon className="w-4 h-4 text-neon" />
      </div>

      <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
        <motion.div
          ref={cardRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            x: isHoverCapable ? shiftX : 0,
            y: isHoverCapable ? shiftY : 0,
          }}
          className="p-6 rounded-2xl bg-neutral-900/90 border border-white/10 hover:border-neon/50 backdrop-blur-md transition-colors duration-300 shadow-xl space-y-3 group cursor-pointer"
        >
          <div className={`flex items-center gap-3 ${isEven ? 'md:justify-end' : ''}`}>
            <span className="text-xs font-mono text-neon font-bold">
              {item.year}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-gray-300 uppercase">
              {item.type}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neon/10 text-neon border border-neon/30 uppercase font-bold">
              {item.badge}
            </span>
          </div>

          <h3 className="font-serif font-bold text-xl text-white group-hover:text-neon transition-colors">
            {item.title}
          </h3>

          <p className="text-xs font-mono text-gray-400">
            {item.institution}
          </p>

          <p className="text-gray-300 font-light text-sm leading-relaxed">
            {item.desc}
          </p>
        </motion.div>
      </div>
    </div>
  );
};
