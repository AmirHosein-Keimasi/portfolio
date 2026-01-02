"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface ScrambledTextProps {
  text: string;
  className?: string;
  duration?: number;
}

export function ScrambledText({
  text,
  className = "",
  duration = 1.5,
}: ScrambledTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    let iterations = 0;
    const maxIterations = text.length * 3;
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
            if (index < iterations / 3) {
              return text[index];
            }
            return String.fromCharCode(
              33 + Math.floor(Math.random() * 94)
            );
          })
          .join("")
      );

      iterations++;
    }, (duration * 1000) / maxIterations);

    return () => clearInterval(interval);
  }, [text, duration]);

  return (
    <div ref={ref} className={className}>
      {displayText}
    </div>
  );
}

