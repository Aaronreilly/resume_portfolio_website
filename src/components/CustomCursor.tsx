import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on fine pointer devices (desktops)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over clickable element
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.classList.contains('cursor-pointer'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let animFrame: number;
    const updateTrailing = () => {
      setTrailing((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2,
      }));
      animFrame = requestAnimationFrame(updateTrailing);
    };
    animFrame = requestAnimationFrame(updateTrailing);
    return () => cancelAnimationFrame(animFrame);
  }, [position, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <div
        className="fixed pointer-events-none z-50 w-3 h-3 bg-indigo-500 rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out shadow-sm shadow-indigo-500/50"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className={`fixed pointer-events-none z-50 rounded-full -translate-x-1/2 -translate-y-1/2 border border-indigo-400/40 transition-all duration-300 ease-out ${
          isHovered
            ? 'w-12 h-12 bg-indigo-500/10 scale-125 border-indigo-500'
            : 'w-8 h-8 bg-transparent'
        }`}
        style={{ left: `${trailing.x}px`, top: `${trailing.y}px` }}
      />
    </>
  );
};
