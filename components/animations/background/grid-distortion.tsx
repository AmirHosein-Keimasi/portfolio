"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface GridDistortionProps {
  className?: string;
  color?: string;
}

export function GridDistortion({
  className = "",
  color = "#00ff00",
}: GridDistortionProps) {
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
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.2;

      const spacing = 50;

      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          const offsetX = Math.sin(time + x * 0.01) * 10;
          const offsetY = Math.cos(time + y * 0.01) * 10;

          ctx.beginPath();
          ctx.moveTo(x + offsetX, y + offsetY);
          ctx.lineTo(x + spacing + offsetX, y + offsetY);
          ctx.lineTo(x + spacing + offsetX, y + spacing + offsetY);
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 1;
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

