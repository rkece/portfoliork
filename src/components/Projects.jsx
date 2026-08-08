import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Sparkles, Layers, Cpu, Shield, Bot } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const [activeProject, setActiveProject] = useState(0);
  const [hoveredCardId, setHoveredCardId] = useState(null);

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

  const projects = [
    {
      id: "01",
      title: "ROVEROSX AI",
      subtitle: "REAL-TIME HARDWARE & WEB TELEMETRY STREAM",
      desc: "Autonomous surveillance hardware & software system featuring live video telemetry, obstacle avoidance algorithms, and remote MERN web control dashboard.",
      link: "https://roverosx.vercel.app/",
      github: "https://github.com/rkece",
      status: "LIVE DEPLOYMENT",
      tags: ["MERN Stack", "IoT Hardware", "WebSockets", "Automation"],
      gradient: "from-[#0A0A0A] to-black",
      preview: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      accent: "#00FF6A",
      icon: Cpu,
      stats: { label: "TELEMETRY LATENCY", value: "< 50ms" }
    },
    {
      id: "02",
      title: "Shawrapinn",
      subtitle: "ONLINE FOOD ORDERING & MENU MANAGEMENT",
      desc: "Full-stack shawarma restaurant web platform with online ordering, dynamic add-ons, cart management, and real-time kitchen order tracking.",
      link: "https://shawrapinn.vercel.app",
      github: "https://github.com/rkece",
      status: "LIVE DEPLOYMENT",
      tags: ["Next.js", "MongoDB", "Tailwind CSS", "Framer Motion"],
      gradient: "from-[#0A0A0A] to-black",
      preview: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      accent: "#00FF6A",
      icon: Layers,
      stats: { label: "ORDER THROUGHPUT", value: "99.9% UP" }
    },
    {
      id: "03",
      title: "ClawPaw AI",
      subtitle: "INTELLIGENT NUTRITION & SCHEDULE ENGINE",
      desc: "Developed an AI-based application that generates personalized diet plans for pets, using Next.js and Firebase and Pet API to analyze pet details and recommend nutrition plans.",
      link: "https://clawpaw.vercel.app",
      github: "https://github.com/rkece",
      status: "COMPLETED",
      tags: ["Next.js", "Firebase", "Pet API", "AI Engine"],
      gradient: "from-[#0A0A0A] to-black",
      preview: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80",
      accent: "#00FF6A",
      icon: Bot,
      stats: { label: "DIET ACCURACY", value: "98.5%" }
    },
    {
      id: "04",
      title: "Honsymposium",
      subtitle: "SYMPOSIUM & EVENT REGISTRATION ENGINE",
      desc: "Comprehensive academic symposium platform built for R.M.K. Engineering College featuring event registrations, user authentication, and admin schedules.",
      link: "https://honsymp.vercel.app/",
      github: "https://github.com/rkece",
      status: "LIVE DEPLOYMENT",
      tags: ["React.js", "Node.js", "Express", "Tailwind CSS"],
      gradient: "from-[#0A0A0A] to-black",
      preview: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
      accent: "#00FF6A",
      icon: Sparkles,
      stats: { label: "EVENT REGISTRATIONS", value: "1000+" }
    },
    {
      id: "05",
      title: "MonitorHub AI",
      subtitle: "CAMPUS MONITORING & INCIDENT PORTAL",
      desc: "Campus security portal built for R.M.K. Engineering College to monitor incident submissions, enforce compliance, and route anonymous telemetry logs.",
      link: "https://monthub.vercel.app",
      github: "https://github.com/rkece",
      status: "LIVE DEPLOYMENT",
      tags: ["React.js", "Express", "Node.js", "Security"],
      gradient: "from-[#0A0A0A] to-black",
      preview: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
      accent: "#00FF6A",
      icon: Shield,
      stats: { label: "REPORTS LOGGED", value: "100% SECURE" }
    },
    {
      id: "06",
      title: "Debugenix AI",
      subtitle: "AUTOMATED DEBUGGING & RCA TOOL",
      desc: "Building an AI-powered tool that performs automated debugging and root cause analysis (RCA), providing developers and users with actionable solutions to fix issues efficiently.",
      link: "https://github.com/rkece",
      github: "https://github.com/rkece",
      status: "IN PROGRESS",
      tags: ["AI Debugging", "Automated RCA", "Next.js", "Python"],
      gradient: "from-[#0A0A0A] to-black",
      preview: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
      accent: "#00FF6A",
      icon: Bot,
      stats: { label: "DEBUG ENGINE", value: "BETA v1.0" }
    },
    {
      id: "07",
      title: "Aran",
      subtitle: "HARDWARE SOS & TELEMETRY MODULE",
      desc: "Wearable IoT emergency response device integrated with GPS location tracking, instant SMS alert dispatcher, and hardware panic trigger.",
      link: "https://github.com/rkece",
      github: "https://github.com/rkece",
      status: "UNDER CONSTRUCTION",
      tags: ["ESP32", "GSM/GPS", "Emergency IoT"],
      gradient: "from-[#0A0A0A] to-black",
      preview: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
      accent: "#00FF6A",
      icon: Cpu,
      stats: { label: "SOS DISPATCH", value: "< 2 sec" }
    }
  ];

  // Horizontal pinned scroll scrub timeline
  useEffect(() => {
    if (!triggerRef.current || !sectionRef.current) return;

    const totalWidth = sectionRef.current.scrollWidth - window.innerWidth + 120;

    const pin = gsap.fromTo(
      sectionRef.current,
      { x: 0 },
      {
        x: -totalWidth,
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: () => `+=${projects.length * 750}`,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const index = Math.round(self.progress * (projects.length - 1));
            setActiveProject(index);
          }
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, [projects.length]);

  return (
    <div ref={triggerRef} id="projects" className="relative z-10 py-12">
      {/* Section Header: 04 // PINNED PROJECT SHOWCASE */}
      <div className="pt-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-4 gsap-reveal">
          <span className="text-xs font-mono text-neon tracking-widest uppercase">
            04 // PINNED PROJECT SHOWCASE
          </span>
          <div className="h-[1px] flex-grow bg-white/10" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 gsap-reveal">
          <div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
              Featured Software & Hardware Projects
            </h2>
            <p className="text-gray-400 font-light text-base mt-2 max-w-xl">
              Hover cards to inspect project UI preview screenshots cleanly without dark tinting.
            </p>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-neon border border-neon/40 px-5 py-2.5 rounded-full bg-black/60 backdrop-blur-md shadow-[0_0_15px_rgba(0,255,106,0.15)]">
            <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
            <span>PROJECT {String(activeProject + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
          </div>
        </div>
      </div>

      {/* Horizontal Pinned Track */}
      <div className="overflow-hidden min-h-[75vh] flex items-center">
        <div
          ref={sectionRef}
          className="flex flex-col md:flex-row gap-8 md:gap-12 px-6 md:px-12 w-full md:w-auto"
        >
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              isCurrent={activeProject === idx}
              hoveredCardId={hoveredCardId}
              setHoveredCardId={setHoveredCardId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Project Card Component — Clean Image Preview on Hover (No green tinting!)
const ProjectCard = ({ project, isCurrent, hoveredCardId, setHoveredCardId }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isHoverCapable, setIsHoverCapable] = useState(true);

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsHoverCapable(finePointer && !reducedMotion);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 180, damping: 20, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  const imageX = useSpring(useTransform(mouseX, [-0.5, 0.5], [8, -8]), springConfig);
  const imageY = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);

  const handleMouseMove = (e) => {
    if (!isHoverCapable || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const normX = (x / rect.width) - 0.5;
    const normY = (y / rect.height) - 0.5;
    mouseX.set(normX);
    mouseY.set(normY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setHoveredCardId(project.id);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHoveredCardId(null);
    mouseX.set(0);
    mouseY.set(0);
  };

  const Icon = project.icon;
  const isDimmed = hoveredCardId !== null && hoveredCardId !== project.id;

  return (
    <div className="w-full md:w-[78vw] lg:w-[68vw] flex-shrink-0 perspective-1000">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => window.open(project.link, '_blank')}
        style={{
          rotateX: isHoverCapable ? rotateX : 0,
          rotateY: isHoverCapable ? rotateY : 0,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          scale: isHovered && isHoverCapable ? 1.02 : isDimmed ? 0.98 : 1,
          opacity: isDimmed ? 0.85 : 1,
        }}
        transition={{ duration: 0.3 }}
        className={`project-card group relative rounded-3xl bg-neutral-900 border transition-colors duration-500 overflow-hidden flex flex-col justify-between min-h-[520px] md:min-h-[560px] p-8 md:p-12 shadow-2xl cursor-pointer ${
          isCurrent ? 'border-white/40 shadow-2xl' : 'border-white/10 hover:border-white/30'
        }`}
      >
        {/* Crisp Clean Image Preview Container (No green tinting overlays!) */}
        <div
          style={{ transform: 'translateZ(20px)' }}
          className="absolute inset-0 z-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        >
          <motion.img
            src={project.preview}
            alt={project.title}
            style={{
              x: isHoverCapable ? imageX : 0,
              y: isHoverCapable ? imageY : 0,
            }}
            className="w-full h-full object-cover scale-105 filter brightness-105 contrast-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent" />
        </div>

        {/* Card Header */}
        <div style={{ transform: 'translateZ(25px)' }} className="relative z-10 flex justify-between items-start">
          <span className="font-mono text-sm text-gray-400 font-bold tracking-widest group-hover:text-white transition-colors">
            PROJECT // {project.id}
          </span>
          <span
            className={`text-[10px] font-mono px-3.5 py-1.5 rounded-full border font-bold uppercase tracking-wider ${
              project.status === 'UNDER CONSTRUCTION'
                ? 'bg-amber-500/10 border-amber-500/50 text-amber-400'
                : 'bg-white/10 border-white/30 text-white'
            }`}
          >
            {project.status}
          </span>
        </div>

        {/* Center Content */}
        <div style={{ transform: 'translateZ(25px)' }} className="relative z-10 my-auto space-y-4 pt-6">
          <div className="flex items-center gap-2" style={{ transform: 'translateZ(35px)' }}>
            <Icon className="w-5 h-5 text-white" />
            <span className="text-xs font-mono text-gray-300 tracking-widest uppercase font-semibold">
              {project.subtitle}
            </span>
          </div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white group-hover:translate-x-2 transition-transform duration-300">
            {project.title}
          </h3>

          <p className="text-gray-300 font-light text-base md:text-lg leading-relaxed max-w-2xl">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-3.5 py-1.5 rounded-md bg-black/60 border border-white/15 text-gray-200 group-hover:border-white/50 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Action Bar */}
        <div style={{ transform: 'translateZ(25px)' }} className="relative z-30 flex justify-between items-center pt-8 border-t border-white/10 pointer-events-auto">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="inline-flex items-center gap-2.5 font-mono text-xs font-bold tracking-widest text-white group-hover:text-white uppercase transition-colors z-30 cursor-pointer"
          >
            <span>{project.status === 'UNDER CONSTRUCTION' ? 'VIEW REPOSITORY' : 'LAUNCH APPLICATION'}</span>
            <ArrowUpRight className="w-4 h-4 text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-white transition-all z-30 cursor-pointer"
              aria-label="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
};
