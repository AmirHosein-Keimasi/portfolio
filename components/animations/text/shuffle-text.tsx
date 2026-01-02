"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface ShuffleTextProps {
  text: string;
  className?: string;
  duration?: number;
  shuffleSpeed?: number;
}

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export function ShuffleText({
  text,
  className = "",
  duration = 1,
  shuffleSpeed = 50,
}: ShuffleTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    if (!ref.current) return;

    let iterations = 0;
    const maxIterations = (duration * 1000) / shuffleSpeed;

    const interval = setInterval(() => {
      if (iterations >= maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
        return;
      }

      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iterations) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      iterations += 1 / 3;
    }, shuffleSpeed);

    return () => clearInterval(interval);
  }, [text, duration, shuffleSpeed]);

  return (
    <div ref={ref} className={className}>
      {displayText}
    </div>
  );
}

