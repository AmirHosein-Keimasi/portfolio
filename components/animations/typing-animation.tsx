"use client";

import { useEffect, useState } from "react";
import { useApp } from "@/lib/context/app-context";

interface TypingAnimationProps {
  text: string;
  speed?: number;
  className?: string;
}

export function TypingAnimation({
  text,
  speed = 100,
  className = "",
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const { mode } = useApp();

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  const cursorColor =
    mode === "dark" ? "text-dark-success" : "text-light-success";

  return (
    <span className={className}>
      {displayedText}
      <span
        className={`${cursorColor} animate-pulse`}
        aria-hidden="true"
      >
        |
      </span>
    </span>
  );
}

