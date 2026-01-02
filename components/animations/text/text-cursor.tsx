"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface TextCursorProps {
  text: string;
  className?: string;
  speed?: number;
  cursorChar?: string;
}

export function TextCursor({
  text,
  className = "",
  speed = 100,
  cursorChar = "|",
}: TextCursorProps) {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (indexRef.current < text.length) {
        setDisplayText(text.slice(0, indexRef.current + 1));
        indexRef.current++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, [text, speed]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && cursorChar}
    </span>
  );
}

