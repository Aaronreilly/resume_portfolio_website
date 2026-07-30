import React, { useEffect, useRef } from 'react';

interface BackgroundCanvasProps {
  darkMode: boolean;
}

export const BackgroundCanvas: React.FC<BackgroundCanvasProps> = ({ darkMode }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Create particles
    const numParticles = Math.floor((width * height) / 18000);
    const particles: {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      alpha: number;
    }[] = [];

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 0.8,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Gradient background subtle glow
      const baseColor = darkMode ? '#090d16' : '#f8fafc';
      ctx.fillStyle = baseColor;
      ctx.fillRect(0, 0, width, height);

      // Draw subtle mouse radial glow
      const radialGlow = ctx.createRadialGradient(
        mouseX,
        mouseY,
        10,
        mouseX,
        mouseY,
        400
      );
      if (darkMode) {
        radialGlow.addColorStop(0, 'rgba(99, 102, 241, 0.08)');
        radialGlow.addColorStop(0.5, 'rgba(168, 85, 247, 0.03)');
        radialGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else {
        radialGlow.addColorStop(0, 'rgba(99, 102, 241, 0.06)');
        radialGlow.addColorStop(0.5, 'rgba(14, 165, 233, 0.02)');
        radialGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');
      }
      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);

      // Draw particles
      const particleColor = darkMode ? '99, 102, 241' : '71, 85, 105';

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleColor}, ${p.alpha})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const lineAlpha = (1 - dist / 110) * (darkMode ? 0.15 : 0.08);
            ctx.strokeStyle = `rgba(${particleColor}, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [darkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-500"
    />
  );
};
