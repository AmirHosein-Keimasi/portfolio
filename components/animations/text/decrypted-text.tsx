"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface DecryptedTextProps {
  text: string;
  className?: string;
  duration?: number;
}

const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

export function DecryptedText({
  text,
  className = "",
  duration = 2,
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState("");
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
            return chars[Math.floor(Math.random() * chars.length)];
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

