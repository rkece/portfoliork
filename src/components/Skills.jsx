import React, { useState, useRef, useEffect } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const Skills = () => {
  const sectionRef = useRef(null);
  const [hoveredSkillName, setHoveredSkillName] = useState(null);

  // Scroll-scrubbed section reveal with GSAP ScrollTrigger
  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!sectionRef.current) return;

    const children = sectionRef.current.querySelectorAll('.gsap-reveal');
    if (!children.length) return;

    gsap.from(children, {
      opacity: 0,
      y: 40,
      stagger: 0.08,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'top 30%',
        scrub: 1,
      },
    });
  }, { scope: sectionRef });

  const skillCategories = [
    {
      category: "SOFTWARE",
      skills: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      ],
    },
    {
      category: "HARDWARE & NETWORKING",
      skills: [
        { name: "Arduino", icon: "https://cdn.simpleicons.org/arduino/00979D" },
        { name: "Packet Tracer", icon: "https://cdn.simpleicons.org/cisco/049FD9" },
        { name: "IoT Devices", icon: "https://cdn.simpleicons.org/raspberrypi/C51A4A" },
      ],
    },
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10 space-y-16">
      {/* Header: 03 // ARSENAL & SKILLS */}
      <div className="flex items-center gap-4 gsap-reveal">
        <span className="text-xs font-mono text-neon tracking-widest uppercase">
          03 // ARSENAL & SKILLS
        </span>
        <div className="h-[1px] flex-grow bg-white/10" />
      </div>

      {/* Animated Stat Counters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gsap-reveal">
        <StatCounter title="PROJECTS SHIPPED" value={8} suffix="+" desc="Full-stack & IoT builds" />
        <StatCounter title="TECH STACK TOOLS" value={15} suffix="+" desc="Web, Security & Hardware" />
        <StatCounter title="SYSTEM COMMITS" value={500} suffix="+" desc="Daily GitHub pushes" />
      </div>

      {/* Categories & Diamond-Rotation Skill Icon Row */}
      <div className="space-y-16 pt-6 gsap-reveal">
        {skillCategories.map((cat) => (
          <div key={cat.category} className="space-y-8 text-center">
            <h3 className="text-xs font-mono text-gray-400 tracking-widest uppercase font-semibold">
              {cat.category}
            </h3>

            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-10">
              {cat.skills.map((skill) => (
                <DiamondSkillCard
                  key={skill.name}
                  skill={skill}
                  hoveredSkillName={hoveredSkillName}
                  setHoveredSkillName={setHoveredSkillName}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Animated Stat Counter Component
const StatCounter = ({ title, value, suffix = "", desc }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleViewportEnter = () => {
    if (hasAnimated) return;
    setHasAnimated(true);

    const duration = 1200;
    const steps = 40;
    const stepTime = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeProgress = 1 - Math.pow(1 - progress, 2);
      const currentVal = Math.floor(value * easeProgress);

      setCount(currentVal);

      if (currentStep >= steps) {
        setCount(value);
        clearInterval(timer);
      }
    }, stepTime);
  };

  return (
    <motion.div
      onViewportEnter={handleViewportEnter}
      viewport={{ once: true }}
      className="p-8 rounded-3xl bg-neutral-900/90 border border-white/15 backdrop-blur-xl hover:border-white/40 transition-all duration-300 shadow-2xl flex flex-col justify-between"
    >
      <div className="text-xs font-mono text-white font-bold tracking-widest uppercase mb-2">
        {title}
      </div>
      <div className="text-5xl md:text-6xl font-serif font-bold text-white my-2">
        {count}{suffix}
      </div>
      <div className="text-xs font-mono text-gray-400">
        {desc}
      </div>
    </motion.div>
  );
};

// Diamond Skill Card — 45 Degree Diamond Rotation on Hover, original logo colors preserved
const DiamondSkillCard = ({ skill, hoveredSkillName, setHoveredSkillName }) => {
  const [isHovered, setIsHovered] = useState(false);

  const isDimmed = hoveredSkillName !== null && hoveredSkillName !== skill.name;

  return (
    <div
      onMouseEnter={() => {
        setIsHovered(true);
        setHoveredSkillName(skill.name);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setHoveredSkillName(null);
      }}
      className={`flex flex-col items-center gap-4 group cursor-pointer transition-opacity duration-300 ${
        isDimmed ? 'opacity-50' : 'opacity-100'
      }`}
    >
      {/* 45-Degree Rotating Diamond Container */}
      <div
        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#0A0A0A] border transition-all duration-500 ease-out flex items-center justify-center relative ${
          isHovered
            ? 'rotate-45 border-2 border-neon/90 shadow-[0_0_15px_rgba(0,255,106,0.35)] scale-105'
            : 'border-white/10 hover:border-white/30'
        }`}
      >
        <div
          className={`w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-500 flex items-center justify-center ${
            isHovered ? '-rotate-45' : 'rotate-0'
          }`}
        >
          <img
            src={skill.icon}
            alt={skill.name}
            className={`w-full h-full object-contain transition-opacity duration-300 ${
              skill.invert ? 'filter invert opacity-90 group-hover:opacity-100' : 'opacity-90 group-hover:opacity-100'
            }`}
          />
        </div>
      </div>

      <span
        className={`text-xs font-mono transition-colors duration-300 font-medium ${
          isHovered ? 'text-neon font-bold scale-105' : 'text-gray-400'
        }`}
      >
        {skill.name}
      </span>
    </div>
  );
};
