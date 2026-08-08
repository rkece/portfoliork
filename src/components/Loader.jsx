import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Loader = ({ onComplete }) => {
  const [langIndex, setLangIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [percent, setPercent] = useState(0);
  const canvasRef = useRef(null);

  // 10 Languages ending in Tamil
  const languages = [
    "Hello",
    "నమస్కారం",
    "നമസ്കാര",
    "നമസ്കാരം",
    "Hallo",
    "こんにちは",
    "¡Hola!",
    "Bonjour",
    "नमस्ते",
    "வணக்கம்!"
  ];

  // Synthesize soft high-tech audio chime
  const playChime = (freq = 540) => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.02, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.12);
    } catch (err) {}
  };

  // Ambient Floating Tech Objects Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Floating Objects: Stack, Cloud, IoT, Security, React, DB, Code, Zap
    const objects = [];
    const types = ['stack', 'cloud', 'iot', 'security', 'react', 'database', 'code', 'zap'];

    for (let i = 0; i < 22; i++) {
      objects.push({
        type: types[i % types.length],
        x: Math.random() * width,
        y: Math.random() * height,
        size: 28 + Math.random() * 38,
        speedX: (Math.random() - 0.5) * 0.75,
        speedY: (Math.random() - 0.5) * 0.75,
        opacity: 0.12 + Math.random() * 0.18,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
      });
    }

    const drawObject = (obj) => {
      ctx.save();
      ctx.translate(obj.x, obj.y);
      ctx.rotate(obj.rotation);
      ctx.strokeStyle = `rgba(0, 255, 106, ${obj.opacity})`;
      ctx.fillStyle = `rgba(0, 255, 106, ${obj.opacity})`;
      ctx.lineWidth = 1.5;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      const s = obj.size / 2;

      if (obj.type === 'stack') {
        ctx.strokeRect(-s * 0.6, -s * 0.5, s * 1.2, s * 0.22);
        ctx.strokeRect(-s * 0.6, -s * 0.05, s * 1.2, s * 0.22);
        ctx.strokeRect(-s * 0.6, s * 0.4, s * 1.2, s * 0.22);
      } else if (obj.type === 'cloud') {
        ctx.beginPath();
        ctx.arc(-s * 0.2, 0, s * 0.35, Math.PI * 0.8, Math.PI * 1.9);
        ctx.arc(s * 0.2, -s * 0.1, s * 0.3, Math.PI * 1.2, Math.PI * 2.2);
        ctx.arc(s * 0.4, s * 0.2, s * 0.25, Math.PI * 1.7, Math.PI * 0.5);
        ctx.lineTo(-s * 0.4, s * 0.45);
        ctx.arc(-s * 0.4, s * 0.2, s * 0.25, Math.PI * 0.5, Math.PI * 1.3);
        ctx.closePath();
        ctx.stroke();
      } else if (obj.type === 'iot') {
        ctx.strokeRect(-s * 0.4, -s * 0.4, s * 0.8, s * 0.8);
        ctx.beginPath();
        ctx.moveTo(-s * 0.6, 0); ctx.lineTo(-s * 0.4, 0);
        ctx.moveTo(s * 0.4, 0); ctx.lineTo(s * 0.6, 0);
        ctx.moveTo(0, -s * 0.6); ctx.lineTo(0, -s * 0.4);
        ctx.moveTo(0, s * 0.4); ctx.lineTo(0, s * 0.6);
        ctx.stroke();
      } else if (obj.type === 'security') {
        ctx.beginPath();
        ctx.moveTo(0, -s * 0.5);
        ctx.lineTo(s * 0.45, -s * 0.3);
        ctx.lineTo(s * 0.45, s * 0.1);
        ctx.quadraticCurveTo(s * 0.45, s * 0.5, 0, s * 0.6);
        ctx.quadraticCurveTo(-s * 0.45, s * 0.5, -s * 0.45, s * 0.1);
        ctx.lineTo(-s * 0.45, -s * 0.3);
        ctx.closePath();
        ctx.stroke();
      } else if (obj.type === 'react') {
        ctx.beginPath();
        ctx.ellipse(0, 0, s * 0.6, s * 0.25, Math.PI / 4, 0, Math.PI * 2);
        ctx.ellipse(0, 0, s * 0.6, s * 0.25, -Math.PI / 4, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, s * 0.1, 0, Math.PI * 2);
        ctx.fill();
      } else if (obj.type === 'database') {
        ctx.beginPath();
        ctx.ellipse(0, -s * 0.3, s * 0.5, s * 0.2, 0, 0, Math.PI * 2);
        ctx.ellipse(0, 0, s * 0.5, s * 0.2, 0, 0, Math.PI * 2);
        ctx.ellipse(0, s * 0.3, s * 0.5, s * 0.2, 0, 0, Math.PI * 2);
        ctx.stroke();
      } else if (obj.type === 'code') {
        ctx.beginPath();
        ctx.moveTo(-s * 0.4, -s * 0.3); ctx.lineTo(-s * 0.6, 0); ctx.lineTo(-s * 0.4, s * 0.3);
        ctx.moveTo(s * 0.4, -s * 0.3); ctx.lineTo(s * 0.6, 0); ctx.lineTo(s * 0.4, s * 0.3);
        ctx.moveTo(s * 0.1, -s * 0.4); ctx.lineTo(-s * 0.1, s * 0.4);
        ctx.stroke();
      } else if (obj.type === 'zap') {
        ctx.beginPath();
        ctx.moveTo(-s * 0.1, -s * 0.5);
        ctx.lineTo(s * 0.3, -s * 0.1);
        ctx.lineTo(0, 0);
        ctx.lineTo(s * 0.2, s * 0.5);
        ctx.lineTo(-s * 0.3, s * 0.1);
        ctx.lineTo(0, 0);
        ctx.closePath();
        ctx.stroke();
      }

      ctx.restore();
    };

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      objects.forEach((obj, idx) => {
        obj.x += obj.speedX;
        obj.y += obj.speedY;
        obj.rotation += obj.rotSpeed;

        if (obj.x < -50) obj.x = width + 50;
        if (obj.x > width + 50) obj.x = -50;
        if (obj.y < -50) obj.y = height + 50;
        if (obj.y > height + 50) obj.y = -50;

        drawObject(obj);

        if (idx % 3 === 0 && idx + 1 < objects.length) {
          const next = objects[idx + 1];
          const ldx = obj.x - next.x;
          const ldy = obj.y - next.y;
          const ldist = Math.sqrt(ldx * ldx + ldy * ldy);

          if (ldist < 180) {
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(obj.x, obj.y);
            ctx.lineTo(next.x, next.y);
            ctx.strokeStyle = `rgba(0, 255, 106, ${Math.min(obj.opacity, next.opacity) * 0.4})`;
            ctx.lineWidth = 0.8;
            ctx.setLineDash([3, 3]);
            ctx.stroke();
            ctx.restore();
          }
        }
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Non-linear velocity progress counter & greeting cycler
  useEffect(() => {
    let index = 0;
    const nonLinearProgress = [12, 28, 45, 62, 74, 86, 94, 98, 100];

    const langInterval = setInterval(() => {
      if (index < languages.length - 1) {
        index++;
        setLangIndex(index);
        setPercent(nonLinearProgress[Math.min(index, nonLinearProgress.length - 1)]);
        playChime(520 + index * 32);
      } else {
        clearInterval(langInterval);
        setPercent(100);
        playChime(880);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(onComplete, 800);
        }, 700);
      }
    }, 280);

    return () => clearInterval(langInterval);
  }, [onComplete, languages.length]);

  return (
    <div className="fixed inset-0 z-[100000] pointer-events-none select-none overflow-hidden font-sans bg-[#0A0A0A]">
      {/* Canvas for Floating Skill Objects */}
      <canvas ref={canvasRef} className="absolute inset-0 z-10 pointer-events-none" />

      {/* Top Curtain Shutter */}
      <motion.div
        initial={{ y: 0 }}
        animate={isDone ? { y: '-100%' } : { y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-0 left-0 w-full h-[50vh] bg-[#0A0A0A] z-20 overflow-hidden"
      />

      {/* Bottom Curtain Shutter */}
      <motion.div
        initial={{ y: 0 }}
        animate={isDone ? { y: '100%' } : { y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="absolute bottom-0 left-0 w-full h-[50vh] bg-[#0A0A0A] z-20 overflow-hidden"
      />

      {/* Non-Linear Percentage Counter (Bottom-Left) */}
      {/* {!isDone && (
        <div className="absolute bottom-8 left-8 z-30 font-mono text-xs text-neon/70 font-bold tracking-widest pointer-events-none">
          BOOT // {String(percent).padStart(3, '0')}%
        </div>
      )} */}

      {/* Green Dot Bullet + Compact Greeting Text */}
      <AnimatePresence mode="wait">
        {!isDone && (
          <motion.div
            key={langIndex}
            initial={{ opacity: 0, scale: 0.92, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05, y: -10 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-30 flex items-center justify-center pointer-events-auto px-6"
          >
            <div className="flex items-center gap-3 text-2xl sm:text-4xl md:text-5xl font-serif text-white tracking-normal text-center leading-none">
              <span className="w-2.5 h-2.5 rounded-full bg-neon shadow-[0_0_12px_#00FF6A] inline-block flex-shrink-0 animate-pulse" />
              <span>{languages[langIndex]}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
