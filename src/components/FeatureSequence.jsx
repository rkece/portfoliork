import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Shield, Zap, Cpu, Cloud, Server, Database, Layers, Smartphone } from 'lucide-react';

export const FeatureSequence = () => {
  const [secLevel, setSecLevel] = useState(2);

  const secLevels = [
    { label: 'PROTOTYPE', badge: 'DEV MODE', desc: 'Basic routes and mock data. Zero input validation.' },
    { label: 'PRODUCTION', badge: 'STANDARD', desc: 'JWT authentication, CORS enforcement & SSL encryption.' },
    { label: 'HARDENED', badge: 'MAX SECURE', desc: 'Strict CSP, AES-256 field encryption & zero-trust API tokens.' }
  ];

  return (
    <section id="features" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10 space-y-16">
      {/* Section Header: 02 // ARCHITECTURE & ENGINEERING */}
      <div className="flex items-center gap-4 gsap-reveal">
        <span className="text-xs font-mono text-neon tracking-widest uppercase">
          02 // ARCHITECTURE & ENGINEERING COMPETENCIES
        </span>
        <div className="h-[1px] flex-grow bg-white/10" />
      </div>

      <div className="text-center max-w-3xl mx-auto space-y-3 gsap-reveal">
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
          Full Stack Architecture & Cloud Systems
        </h2>
        <p className="text-gray-400 font-light text-base">
          Core engineering pillars spanning scalable backend architecture, cloud deployments, hardware IoT, and application security.
        </p>
      </div>

      {/* 2x2 Grid Layout with 3D Tilt Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gsap-reveal">
        {/* Card 1: Full Stack Architecture (Enters from Left) */}
        <TiltArchitectureCard direction="left">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon/10 border border-neon/30 text-neon font-mono text-xs uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" /> FULL STACK ARCHITECTURE
            </div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white group-hover:text-neon transition-colors duration-300">
              Full Stack Architecture
            </h3>
            <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed">
              Architecting web applications using decoupled services, cached RESTful endpoints, and optimized database schemas to guarantee response times under heavy traffic load.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-black border border-white/15 font-mono text-xs space-y-4">
            <div className="flex justify-between items-center text-[10px] text-gray-400 uppercase tracking-widest">
              <span className="text-white font-bold">DATA FLOW PIPELINE</span>
              <span className="text-neon font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-neon animate-ping" /> STREAMING
              </span>
            </div>
            
            <div className="flex items-center justify-between gap-3 relative py-2">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-1">
                <Smartphone className="w-5 h-5 text-white" />
              </div>

              <div className="flex-1 relative flex items-center justify-center">
                <div className="w-full h-[2px] bg-neon/20 relative overflow-hidden">
                  <motion.div
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                    className="w-1/2 h-full bg-neon shadow-[0_0_8px_#00FF6A]"
                  />
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-1">
                <Server className="w-5 h-5 text-white" />
              </div>

              <div className="flex-1 relative flex items-center justify-center">
                <div className="w-full h-[2px] bg-neon/20 relative overflow-hidden">
                  <motion.div
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'linear', delay: 0.75 }}
                    className="w-1/2 h-full bg-neon shadow-[0_0_8px_#00FF6A]"
                  />
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-1">
                <Database className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </TiltArchitectureCard>

        {/* Card 2: Cloud Computing (Enters from Right) */}
        <TiltArchitectureCard direction="right">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon/10 border border-neon/30 text-neon font-mono text-xs uppercase tracking-wider">
              <Cloud className="w-3.5 h-3.5" /> CLOUD COMPUTING
            </div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white group-hover:text-neon transition-colors duration-300">
              Cloud Computing
            </h3>
            <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed">
              Deploying cloud infrastructure across AWS, Vercel Edge networks, Docker containers, and automated CI/CD deployment pipelines for 99.9% uptime reliability.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-black border border-white/15 font-mono text-xs space-y-4">
            <div className="flex justify-between items-center text-[10px] text-gray-400 uppercase tracking-widest">
              <span className="text-white font-bold">EDGE CLOUD CLUSTER</span>
              <span className="text-neon font-bold">99.9% UPTIME</span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center space-y-1.5 hover:border-white/30 transition-colors">
                <Cloud className="w-5 h-5 text-white" />
                <div className="w-2 h-2 rounded-full bg-neon animate-ping" />
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center space-y-1.5 hover:border-white/30 transition-colors">
                <Server className="w-5 h-5 text-white" />
                <div className="w-2 h-2 rounded-full bg-neon animate-ping" />
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center space-y-1.5 hover:border-white/30 transition-colors">
                <Layers className="w-5 h-5 text-white" />
                <div className="w-2 h-2 rounded-full bg-neon animate-ping" />
              </div>
            </div>
          </div>
        </TiltArchitectureCard>

        {/* Card 3: IoT & Embedded Telemetry (Enters from Left) */}
        <TiltArchitectureCard direction="left">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon/10 border border-neon/30 text-neon font-mono text-xs uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5" /> IOT EMBEDDED SYSTEMS
            </div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white group-hover:text-neon transition-colors duration-300">
              IoT & Embedded Telemetry
            </h3>
            <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed">
              Bridging hardware microcontrollers with cloud dashboards via real-time WebSocket telemetry streams, sensor data parsing, and autonomous rover automation.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-black border border-white/15 font-mono text-xs space-y-3">
            <div className="flex justify-between items-center text-[10px] text-gray-400 uppercase tracking-widest">
              <span className="text-white font-bold">TELEMETRY WAVEFORM</span>
              <span className="text-neon font-bold">&lt; 50ms LATENCY</span>
            </div>

            <div className="flex items-center justify-center gap-1.5 h-10 px-4 rounded-xl bg-white/5 border border-white/10">
              {[40, 70, 30, 90, 50, 80, 45, 100, 60, 30, 85, 50, 70].map((h, i) => (
                <motion.div
                  key={i}
                  animate={{ height: [`${h * 0.3}%`, `${h}%`, `${h * 0.3}%`] }}
                  transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.08, ease: 'easeInOut' }}
                  className="w-1.5 bg-neon rounded-full"
                />
              ))}
            </div>
          </div>
        </TiltArchitectureCard>

        {/* Card 4: Application Security (Enters from Right) */}
        <TiltArchitectureCard direction="right">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon/10 border border-neon/30 text-neon font-mono text-xs uppercase tracking-wider">
              <Shield className="w-3.5 h-3.5" /> APPLICATION SECURITY
            </div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white group-hover:text-neon transition-colors duration-300">
              Application Security
            </h3>
            <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed">
              Rigorous OWASP vulnerability scanning, query parameter sanitization, JWT authorization tokens, and strict Content-Security-Policies across backend APIs.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-black border border-white/15 font-mono text-xs space-y-3">
            <div className="flex justify-between items-center text-[10px]">
              <span className="text-white font-bold uppercase">SECURITY AUDIT STATE</span>
              <span className="text-neon font-bold uppercase">{secLevels[secLevel].badge}</span>
            </div>
            <div className="grid grid-cols-3 gap-1 bg-neutral-900 p-1.5 rounded-xl border border-white/10">
              {secLevels.map((lvl, index) => (
                <button
                  key={lvl.label}
                  onClick={() => setSecLevel(index)}
                  className={`py-1.5 rounded-lg text-[10px] font-bold transition-all ${
                    secLevel === index ? 'bg-neon text-black shadow-[0_0_10px_#00FF6A]' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {lvl.label}
                </button>
              ))}
            </div>
          </div>
        </TiltArchitectureCard>
      </div>
    </section>
  );
};

// 3D Tilt Card wrapper with Left/Right scroll entrance motion
const TiltArchitectureCard = ({ children, direction = "left" }) => {
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

  const handleMouseMove = (e) => {
    if (!isHoverCapable || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set((x / rect.width) - 0.5);
    mouseY.set((y / rect.height) - 0.5);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const startX = direction === "left" ? -80 : 80;

  return (
    <motion.div
      initial={{ opacity: 0, x: startX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="perspective-1000"
    >
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
        className="p-8 rounded-3xl bg-neutral-900/90 border border-white/15 backdrop-blur-xl hover:border-white/40 transition-colors duration-300 shadow-2xl flex flex-col justify-between space-y-6 group cursor-pointer"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
