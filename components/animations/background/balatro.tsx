"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface BalatroProps {
  className?: string;
}

export function Balatro({ className = "" }: BalatroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards: HTMLDivElement[] = [];
    const suits = ["♠", "♥", "♦", "♣"];

    for (let i = 0; i < 10; i++) {
      const card = document.createElement("div");
      card.textContent = `${Math.floor(Math.random() * 13) + 1}${
        suits[Math.floor(Math.random() * 4)]
      }`;
      card.style.position = "absolute";
      card.style.fontSize = "24px";
      card.style.left = `${Math.random() * 100}%`;
      card.style.top = `${Math.random() * 100}%`;
      card.style.opacity = "0.1";
      containerRef.current.appendChild(card);
      cards.push(card);

      gsap.to(card, {
        rotation: "random(-30, 30)",
        scale: "random(0.8, 1.2)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }

    return () => {
      cards.forEach((card) => card.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
    />
  );
}

