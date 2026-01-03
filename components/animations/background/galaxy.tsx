"use client";

import { useEffect, useRef, useCallback, memo } from "react";

interface GalaxyProps {
  className?: string;
}

export const Galaxy = memo(function Galaxy({ className = "" }: GalaxyProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();

  const handleResize = useCallback(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    handleResize();

    const stars: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
    }> = [];

    // Reduce star count for better performance
    const starCount = Math.min(80, Math.floor((window.innerWidth * window.innerHeight) / 15000));
    
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 0.3 + 0.1,
      });
    }

    let lastTime = 0;
    const targetFPS = 30;
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime: number) => {
      if (!ctx) return;
      
      const deltaTime = currentTime - lastTime;
      if (deltaTime >= frameInterval) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#ffffff";

        stars.forEach((star) => {
          star.x += star.speed;
          if (star.x > canvas.width) star.x = 0;

          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fill();
        });

        lastTime = currentTime - (deltaTime % frameInterval);
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [handleResize]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 will-change-contents ${className}`}
      aria-hidden="true"
    />
  );
});

