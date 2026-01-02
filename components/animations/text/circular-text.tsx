"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface CircularTextProps {
  text: string;
  radius?: number;
  className?: string;
  rotation?: number;
}

export function CircularText({
  text,
  radius = 100,
  className = "",
  rotation = 0,
}: CircularTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chars = text.split("");
    const angleStep = (360 / chars.length) * (Math.PI / 180);

    containerRef.current.innerHTML = "";

    chars.forEach((char, i) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.position = "absolute";
      span.style.transformOrigin = "0 0";
      span.style.left = "50%";
      span.style.top = "50%";

      const angle = i * angleStep + rotation * (Math.PI / 180);
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      span.style.transform = `translate(${x}px, ${y}px) rotate(${
        angle * (180 / Math.PI) + 90
      }deg)`;

      containerRef.current?.appendChild(span);
    });

    gsap.from(containerRef.current.children, {
      opacity: 0,
      scale: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: "back.out",
    });
  }, [text, radius, rotation]);

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ width: radius * 2, height: radius * 2 }}
    />
  );
}

