"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface StarBorderProps {
  children: ReactNode;
  className?: string;
  starCount?: number;
  color?: string;
}

export function StarBorder({
  children,
  className = "",
  starCount = 20,
  color = "#00ff00",
}: StarBorderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const stars: HTMLDivElement[] = [];
    const rect = containerRef.current.getBoundingClientRect();

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.style.position = "absolute";
      star.style.width = "4px";
      star.style.height = "4px";
      star.style.backgroundColor = color;
      star.style.borderRadius = "50%";
      star.style.boxShadow = `0 0 10px ${color}`;

      const side = Math.floor(Math.random() * 4);
      let left, top;

      if (side === 0) {
        left = Math.random() * rect.width;
        top = 0;
      } else if (side === 1) {
        left = rect.width;
        top = Math.random() * rect.height;
      } else if (side === 2) {
        left = Math.random() * rect.width;
        top = rect.height;
      } else {
        left = 0;
        top = Math.random() * rect.height;
      }

      star.style.left = `${left}px`;
      star.style.top = `${top}px`;
      containerRef.current.appendChild(star);
      stars.push(star);

      gsap.to(star, {
        opacity: "random(0.3, 1)",
        scale: "random(0.5, 1.5)",
        duration: "random(1, 2)",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }

    return () => {
      stars.forEach((star) => star.remove());
    };
  }, [starCount, color]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {children}
    </div>
  );
}

