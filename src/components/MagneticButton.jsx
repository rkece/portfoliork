import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const MagneticButton = ({
  children,
  className = "",
  onClick,
  href,
  target,
  rel,
  maxMoveX = 12,
  maxMoveY = 8,
}) => {
  const ref = useRef(null);
  const [ripples, setRipples] = useState([]);
  const [isHoverCapable, setIsHoverCapable] = useState(true);

  // Check hover capability & reduced motion
  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsHoverCapable(finePointer && !reducedMotion);
  }, []);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // Recommended spring physics: stiffness: 180, damping: 18, mass: 0.5
  const springX = useSpring(rawX, { stiffness: 180, damping: 18, mass: 0.5 });
  const springY = useSpring(rawY, { stiffness: 180, damping: 18, mass: 0.5 });

  const handleMouseMove = (e) => {
    if (!isHoverCapable || !ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Clamp within -12px -> +12px on X, -8px -> +8px on Y
    const clampedX = Math.max(-maxMoveX, Math.min(maxMoveX, distanceX * 0.35));
    const clampedY = Math.max(-maxMoveY, Math.min(maxMoveY, distanceY * 0.35));

    rawX.set(clampedX);
    rawY.set(clampedY);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  // 7.10 Click Ripple Energy Pulse
  const handleClick = (e) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const id = Date.now();
      setRipples((prev) => [...prev, { x, y, id }]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 700);
    }
    if (onClick) onClick(e);
  };

  const Element = href ? 'a' : 'button';

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      whileHover={isHoverCapable ? { scale: 1.03 } : {}}
      className="inline-block relative"
    >
      <Element
        ref={ref}
        href={href}
        target={target}
        rel={rel}
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`magnetic-btn relative overflow-hidden group ${className}`}
      >
        {children}

        {/* Click Ripple Array */}
        {ripples.map((r) => (
          <span
            key={r.id}
            style={{
              left: r.x,
              top: r.y,
              transform: 'translate(-50%, -50%)',
            }}
            className="absolute rounded-full bg-neon/40 pointer-events-none animate-ripple"
          />
        ))}
      </Element>
    </motion.div>
  );
};
