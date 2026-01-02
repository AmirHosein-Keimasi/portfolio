"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface LetterGlitchProps {
  className?: string;
  text?: string;
  color?: string;
}

export function LetterGlitch({
  className = "",
  text = "GLITCH",
  color = "#00ff00",
}: LetterGlitchProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const chars = text.split("");
    ref.current.innerHTML = "";

    chars.forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.display = "inline-block";
      ref.current!.appendChild(span);

      gsap.to(span, {
        x: "random(-5, 5)",
        y: "random(-5, 5)",
        duration: "random(0.1, 0.3)",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    });
  }, [text]);

  return (
    <div
      ref={ref}
      className={`fixed inset-0 flex items-center justify-center pointer-events-none z-0 text-6xl font-bold ${className}`}
      style={{ color }}
    >
      {text}
    </div>
  );
}

