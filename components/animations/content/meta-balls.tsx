"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface MetaBallsProps {
  children: ReactNode;
  className?: string;
  ballCount?: number;
  color?: string;
}

export function MetaBalls({
  children,
  className = "",
  ballCount = 5,
  color = "#00ff00",
}: MetaBallsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const balls: HTMLDivElement[] = [];

    for (let i = 0; i < ballCount; i++) {
      const ball = document.createElement("div");
      const size = Math.random() * 50 + 30;
      ball.style.position = "absolute";
      ball.style.width = `${size}px`;
      ball.style.height = `${size}px`;
      ball.style.borderRadius = "50%";
      ball.style.backgroundColor = color;
      ball.style.opacity = "0.3";
      ball.style.left = `${Math.random() * 100}%`;
      ball.style.top = `${Math.random() * 100}%`;
      containerRef.current.appendChild(ball);
      balls.push(ball);

      gsap.to(ball, {
        x: "random(-50, 50)",
        y: "random(-50, 50)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }

    return () => {
      balls.forEach((ball) => ball.remove());
    };
  }, [ballCount, color]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {children}
    </div>
  );
}

