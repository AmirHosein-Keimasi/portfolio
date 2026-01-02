"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface ASCIITextProps {
  text: string;
  className?: string;
  duration?: number;
}

const asciiChars = " .:-=+*#%@";

export function ASCIIText({
  text,
  className = "",
  duration = 2,
}: ASCIITextProps) {
  const [displayText, setDisplayText] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    let iterations = 0;
    const maxIterations = text.length * 5;
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
            if (index < iterations / 5) {
              return text[index];
            }
            return asciiChars[Math.floor(Math.random() * asciiChars.length)];
          })
          .join("")
      );

      iterations++;
    }, (duration * 1000) / maxIterations);

    return () => clearInterval(interval);
  }, [text, duration]);

  return (
    <div ref={ref} className={`font-mono ${className}`}>
      {displayText}
    </div>
  );
}

