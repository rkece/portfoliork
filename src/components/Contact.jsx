import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Mail, Linkedin, Github, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { MagneticButton } from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [isHovered, setIsHovered] = useState(false);
  const [isHoverCapable, setIsHoverCapable] = useState(true);

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsHoverCapable(finePointer && !reducedMotion);
  }, []);

  // 4. Scroll-scrubbed section reveal with GSAP ScrollTrigger
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

  // 3D Tilt Spring Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 180, damping: 20, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus('submitting');

    try {
      // 1. Direct Email Dispatch via Web3Forms API to rkprojectworks07@gmail.com
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: 'c9f0bd5a-939a-4c28-b0a2-252c1e8c07f4',
          name: formState.name,
          email: formState.email,
          message: formState.message,
          to_email: 'rkprojectworks07@gmail.com',
          subject: `Portfolio Inquiry from ${formState.name}`
        })
      });
    } catch (err) {}

    // 2. Immediate mailto trigger fallback to rkprojectworks07@gmail.com & mmrakeshkumar13@gmail.com
    const mailtoLink = `mailto:rkprojectworks07@gmail.com,mmrakeshkumar13@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(formState.name)}&body=${encodeURIComponent("Client Name: " + formState.name + "\nClient Email: " + formState.email + "\n\nMessage:\n" + formState.message)}`;
    window.location.href = mailtoLink;

    setStatus('success');
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#00FF6A', '#ffffff', '#10B981']
    });

    setTimeout(() => {
      setStatus('idle');
      setFormState({ name: '', email: '', message: '' });
    }, 4500);
  };

  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:rkprojectworks07@gmail.com',
      icon: Mail,
      color: 'hover:border-red-500 hover:text-red-400',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rakesh-kumar-m-m-694634346/',
      icon: Linkedin,
      color: 'hover:border-blue-500 hover:text-blue-400',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/rkece',
      icon: Github,
      color: 'hover:border-white hover:text-white',
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/919789401325',
      icon: MessageSquare,
      color: 'hover:border-emerald-500 hover:text-emerald-400',
    },
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto relative z-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Header: 06 // INITIATE TRANSMISSION */}
      <div className="flex items-center gap-4 mb-16 gsap-reveal">
        <span className="text-xs font-mono text-neon tracking-widest uppercase">
          06 // INITIATE TRANSMISSION
        </span>
        <div className="h-[1px] flex-grow bg-white/10" />
      </div>

      {/* Kinetic Big Closing CTA Title */}
      <div className="text-center space-y-6 mb-16 select-none gsap-reveal">
        <h2 className="text-4xl sm:text-6xl md:text-8xl font-serif font-bold tracking-tighter text-white uppercase leading-none">
          LET'S BUILD <br />
          <span className="text-stroke hover:text-neon transition-colors duration-500 cursor-default">
            SOMETHING GREAT .
          </span>
        </h2>
        {/* <p className="text-gray-400 font-light text-base md:text-lg max-w-xl mx-auto">
          Have an exciting project, internship opportunity, or system architecture challenge? Direct transmissions routed to <span className="text-neon font-mono font-bold">rkprojectworks07@gmail.com</span>.
        </p> */}
      </div>

      {/* Social Magnetic Button Row */}
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-16 gsap-reveal">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <MagneticButton
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-full border border-white/20 bg-white/5 text-white transition-all duration-300 ${social.color}`}
            >
              <Icon className="w-6 h-6" />
            </MagneticButton>
          );
        })}
      </div>

      {/* Form Container with 3D Tilt Card & Radial Cursor Glow */}
      <div className="max-w-2xl mx-auto perspective-1000 gsap-reveal">
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
            scale: isHovered && isHoverCapable ? 1.01 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="p-8 md:p-12 rounded-3xl bg-neutral-900/90 border border-white/15 backdrop-blur-xl hover:border-white/30 shadow-2xl relative overflow-hidden"
        >
          {/* Radial Glow Layer */}
          <motion.div
            animate={{ opacity: isHovered && isHoverCapable ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background: `radial-gradient(circle at ${glowX.get()}px ${glowY.get()}px, rgba(255, 255, 255, 0.06) 0%, transparent 45%)`,
            }}
            className="absolute inset-0 pointer-events-none z-0 rounded-3xl"
          />

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-400 tracking-wider uppercase">YOUR NAME</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Rakesh Kumar"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-neon focus:bg-neon/5 transition-all font-sans"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-400 tracking-wider uppercase">YOUR EMAIL</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="rakesh@example.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-neon focus:bg-neon/5 transition-all font-sans"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-gray-400 tracking-wider uppercase">PROJECT DETAILS / MESSAGE</label>
              <textarea
                required
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Tell me about your project requirement or role..."
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-neon focus:bg-neon/5 transition-all font-sans resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status !== 'idle'}
              className={`w-full py-4 rounded-xl font-mono font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-3 transition-all duration-300 ${
                status === 'success'
                  ? 'bg-emerald-500 text-black shadow-[0_0_25px_#10B981]'
                  : status === 'submitting'
                  ? 'bg-neon/70 text-black cursor-wait'
                  : 'bg-neon text-black hover:bg-neon hover:text-black hover:shadow-[0_0_20px_#00FF6A]'
              }`}
            >
              {status === 'submitting' && (
                <span className="w-4 h-4 rounded-full border-2 border-black border-t-transparent animate-spin" />
              )}
              {status === 'success' && (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  <span>DISPATCHED TO rkprojectworks07@gmail.com!</span>
                </>
              )}
              {status === 'idle' && (
                <>
                  <span>SEND MESSAGE</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
