"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface CurvedLoopTextProps {
  text: string;
  radius?: number;
  className?: string;
  speed?: number;
}

export function CurvedLoopText({
  text,
  radius = 150,
  className = "",
  speed = 1,
}: CurvedLoopTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const repeatedText = (text + " ").repeat(3);
    const chars = repeatedText.split("");
    const angleStep = (360 / chars.length) * (Math.PI / 180);

    containerRef.current.innerHTML = "";

    chars.forEach((char, i) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.position = "absolute";
      span.style.transformOrigin = "0 0";
      span.style.left = "50%";
      span.style.top = "50%";

      const angle = i * angleStep;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      span.style.transform = `translate(${x}px, ${y}px) rotate(${
        angle * (180 / Math.PI) + 90
      }deg)`;

      containerRef.current?.appendChild(span);
    });

    gsap.to(containerRef.current, {
      rotation: 360,
      duration: 10 / speed,
      repeat: -1,
      ease: "none",
      transformOrigin: "50% 50%",
    });
  }, [text, radius, speed]);

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ width: radius * 2, height: radius * 2 }}
    />
  );
}

