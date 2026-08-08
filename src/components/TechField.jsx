import React, { useEffect, useRef } from 'react';

export const TechField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let scrollY = window.scrollY;

    // 5. Directional ambient drift offset state
    let driftOffsetX = 0;
    let driftOffsetY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const domains = [
      { name: 'FULL STACK', type: 'stack' },
      { name: 'CLOUD', type: 'cloud' },
      { name: 'IOT', type: 'iot' },
      { name: 'APP SECURITY', type: 'security' },
    ];

    const itemCount = 20;
    const items = [];

    for (let i = 0; i < itemCount; i++) {
      const domain = domains[i % domains.length];
      const layer = i < 8 ? 'back' : i < 16 ? 'mid' : 'front';
      const isLabel = Math.random() < 0.3;

      let size = 32;
      let opacity = 0.08;
      let parallax = 0.02;

      if (layer === 'mid') {
        size = 46;
        opacity = 0.12;
        parallax = 0.05;
      } else if (layer === 'front') {
        size = 64;
        opacity = 0.18;
        parallax = 0.1;
      }

      items.push({
        id: i,
        domain,
        isLabel,
        layer,
        x: Math.random() * width,
        y: Math.random() * height * 3,
        baseX: Math.random() * width,
        baseY: Math.random() * height * 3,
        size,
        opacity,
        baseOpacity: opacity,
        parallax,
        phase: Math.random() * Math.PI * 2,
        bobSpeed: 0.001 + Math.random() * 0.001,
      });
    }

    const drawIcon = (type, x, y, size, opacity) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.strokeStyle = `rgba(0, 255, 106, ${opacity})`;
      ctx.fillStyle = `rgba(0, 255, 106, ${opacity})`;
      ctx.lineWidth = 1.6;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      const s = size / 2;

      if (type === 'stack') {
        ctx.beginPath();
        ctx.rect(-s * 0.6, -s * 0.5, s * 1.2, s * 0.22);
        ctx.rect(-s * 0.6, -s * 0.05, s * 1.2, s * 0.22);
        ctx.rect(-s * 0.6, s * 0.4, s * 1.2, s * 0.22);
        ctx.stroke();
      } else if (type === 'cloud') {
        ctx.beginPath();
        ctx.arc(-s * 0.2, 0, s * 0.35, Math.PI * 0.8, Math.PI * 1.9);
        ctx.arc(s * 0.2, -s * 0.1, s * 0.3, Math.PI * 1.2, Math.PI * 2.2);
        ctx.arc(s * 0.4, s * 0.2, s * 0.25, Math.PI * 1.7, Math.PI * 0.5);
        ctx.lineTo(-s * 0.4, s * 0.45);
        ctx.arc(-s * 0.4, s * 0.2, s * 0.25, Math.PI * 0.5, Math.PI * 1.3);
        ctx.closePath();
        ctx.stroke();
      } else if (type === 'iot') {
        ctx.beginPath();
        ctx.rect(-s * 0.4, -s * 0.4, s * 0.8, s * 0.8);
        ctx.moveTo(-s * 0.6, 0); ctx.lineTo(-s * 0.4, 0);
        ctx.moveTo(s * 0.4, 0); ctx.lineTo(s * 0.6, 0);
        ctx.moveTo(0, -s * 0.6); ctx.lineTo(0, -s * 0.4);
        ctx.moveTo(0, s * 0.4); ctx.lineTo(0, s * 0.6);
        ctx.stroke();
      } else if (type === 'security') {
        ctx.beginPath();
        ctx.moveTo(0, -s * 0.5);
        ctx.lineTo(s * 0.45, -s * 0.3);
        ctx.lineTo(s * 0.45, s * 0.1);
        ctx.quadraticCurveTo(s * 0.45, s * 0.5, 0, s * 0.6);
        ctx.quadraticCurveTo(-s * 0.45, s * 0.5, -s * 0.45, s * 0.1);
        ctx.lineTo(-s * 0.45, -s * 0.3);
        ctx.closePath();
        ctx.stroke();
      }

      ctx.restore();
    };

    const drawLabel = (name, x, y, size, opacity) => {
      ctx.save();
      ctx.font = `${Math.max(10, Math.floor(size * 0.35))}px monospace`;
      ctx.fillStyle = `rgba(0, 255, 106, ${opacity})`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(name, x, y);
      ctx.restore();
    };

    let animId;

    const render = () => {
      // Pause RAF loop when document is hidden
      if (document.hidden) {
        animId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // 5. Directional ambient drift step (-0.05 on X, -0.02 on Y)
      if (!prefersReducedMotion) {
        driftOffsetX -= 0.05;
        driftOffsetY -= 0.02;
      }

      const targetXOffset = (mouseX - width / 2) * 0.02;

      items.forEach((item, idx) => {
        if (!prefersReducedMotion) {
          item.phase += item.bobSpeed;
          const bobY = Math.sin(item.phase) * 12;
          const driftX = Math.cos(item.phase * 0.7) * 8;

          item.x = (item.baseX + driftX + driftOffsetX - targetXOffset * item.parallax * 15) % width;
          if (item.x < 0) item.x += width;

          item.y = (item.baseY + bobY + driftOffsetY - scrollY * item.parallax) % (height * 3);
          if (item.y < -100) item.y += height * 3;
        }

        const dx = mouseX - item.x;
        const dy = mouseY - (item.y - scrollY);
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          item.opacity = Math.min(0.45, item.baseOpacity + (1 - dist / 110) * 0.3);
        } else {
          item.opacity += (item.baseOpacity - item.opacity) * 0.05;
        }

        if (item.isLabel) {
          drawLabel(item.domain.name, item.x, item.y - scrollY, item.size, item.opacity);
        } else {
          drawIcon(item.domain.type, item.x, item.y - scrollY, item.size, item.opacity);
        }

        if (idx % 4 === 0 && idx + 1 < items.length) {
          const next = items[idx + 1];
          const ldx = item.x - next.x;
          const ldy = item.y - next.y;
          const ldist = Math.sqrt(ldx * ldx + ldy * ldy);

          if (ldist < 220) {
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(item.x, item.y - scrollY);
            ctx.lineTo(next.x, next.y - scrollY);
            ctx.strokeStyle = `rgba(0, 255, 106, ${Math.min(item.opacity, next.opacity) * 0.4})`;
            ctx.lineWidth = 0.8;
            ctx.setLineDash([4, 4]);
            ctx.stroke();
            ctx.restore();
          }
        }
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full opacity-90"
    />
  );
};
