"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface WavesProps {
  className?: string;
  color?: string;
}

export function Waves({
  className = "",
  color = "#00ff00",
}: WavesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let time = 0;

    const animate = () => {
      time += 0.02;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;

      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x++) {
          const y =
            canvas.height / 2 +
            Math.sin((x * 0.01 + time + i) * 2) * 50 * (i + 1);
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.globalAlpha = 0.3 / (i + 1);
        ctx.stroke();
        ctx.globalAlpha = 1;
      }

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

