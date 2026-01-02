"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface PlasmaProps {
  className?: string;
}

export function Plasma({ className = "" }: PlasmaProps) {
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
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
          const index = (y * canvas.width + x) * 4;
          const value =
            Math.sin((x * 0.01 + time) * 2) +
            Math.sin((y * 0.01 + time) * 2) +
            Math.sin(((x + y) * 0.01 + time) * 2);
          const normalized = (value + 3) / 6;

          data[index] = normalized * 255;
          data[index + 1] = normalized * 100;
          data[index + 2] = normalized * 200;
          data[index + 3] = 100;
        }
      }

      ctx.putImageData(imageData, 0, 0);
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
    />
  );
}

