import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const Cursor = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState("");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const dotSpringConfig = { damping: 30, stiffness: 800 };
  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);

  const outlineSpringConfig = { damping: 22, stiffness: 250 };
  const outlineX = useSpring(mouseX, outlineSpringConfig);
  const outlineY = useSpring(mouseY, outlineSpringConfig);

  useEffect(() => {
    // Hide custom cursor on touch devices
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) {
      setIsVisible(false);
      return;
    }

    const moveCursor = (e) => {
      setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, .magnetic-btn, .project-card, .skill-card, .cursor-hover');
      if (target) {
        setIsHovered(true);
        const customText = target.getAttribute('data-cursor-text');
        if (customText) {
          setHoverText(customText);
        }
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest('a, button, .magnetic-btn, .project-card, .skill-card, .cursor-hover');
      if (target) {
        setIsHovered(false);
        setHoverText("");
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-neon pointer-events-none"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? 6 : 6,
          height: isHovered ? 6 : 6,
          backgroundColor: '#00FF6A',
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Outer Neon Outline Ring — Clean Transparent Glass Ring (No solid green fill/pink dot) */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none flex items-center justify-center text-[10px] font-mono font-bold text-neon uppercase tracking-widest backdrop-blur-[1px]"
        style={{
          x: outlineX,
          y: outlineY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? 52 : 36,
          height: isHovered ? 52 : 36,
          borderColor: isHovered ? '#00FF6A' : 'rgba(255, 255, 255, 0.25)',
          backgroundColor: isHovered ? 'rgba(0, 255, 106, 0.08)' : 'rgba(0, 0, 0, 0)',
          boxShadow: isHovered ? '0 0 15px rgba(0, 255, 106, 0.3)' : 'none',
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        {isHovered && hoverText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-1 text-center leading-none select-none text-neon"
          >
            {hoverText}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
};
