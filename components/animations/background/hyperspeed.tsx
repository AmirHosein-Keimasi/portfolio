"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface HyperspeedProps {
  className?: string;
  color?: string;
}

export function Hyperspeed({
  className = "",
  color = "#00ff00",
}: HyperspeedProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const lines: Array<{
      x: number;
      y: number;
      length: number;
      speed: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 100 + 50,
        speed: Math.random() * 10 + 5,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;

      lines.forEach((line) => {
        line.y += line.speed;
        if (line.y > canvas.height) {
          line.y = -line.length;
          line.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x, line.y + line.length);
        ctx.stroke();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
    />
  );
}

