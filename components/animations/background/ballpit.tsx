"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface BallpitProps {
  className?: string;
  ballCount?: number;
}

export function Ballpit({
  className = "",
  ballCount = 50,
}: BallpitProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const balls: HTMLDivElement[] = [];
    const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"];

    for (let i = 0; i < ballCount; i++) {
      const ball = document.createElement("div");
      const size = Math.random() * 30 + 20;
      ball.style.position = "absolute";
      ball.style.width = `${size}px`;
      ball.style.height = `${size}px`;
      ball.style.borderRadius = "50%";
      ball.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      ball.style.left = `${Math.random() * 100}%`;
      ball.style.top = `${Math.random() * 100}%`;
      ball.style.opacity = "0.5";
      containerRef.current.appendChild(ball);
      balls.push(ball);

      gsap.to(ball, {
        x: "random(-100, 100)",
        y: "random(-100, 100)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }

    return () => {
      balls.forEach((ball) => ball.remove());
    };
  }, [ballCount]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
    />
  );
}

