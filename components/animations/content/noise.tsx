"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface NoiseProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export function Noise({
  children,
  className = "",
  intensity = 0.1,
}: NoiseProps) {
  const ref = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    const animate = () => {
      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255 * intensity;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = 255;
      }

      ctx.putImageData(imageData, 0, 0);
      requestAnimationFrame(animate);
    };

    animate();
  }, [intensity]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      {children}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-50"
        width={200}
        height={200}
      />
    </div>
  );
}

