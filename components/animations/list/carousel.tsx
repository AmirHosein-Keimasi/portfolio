"use client";

import { useEffect, useRef, ReactNode, useState } from "react";
import { gsap } from "gsap";

interface CarouselProps {
  children: ReactNode[];
  className?: string;
  autoPlay?: boolean;
  interval?: number;
}

export function Carousel({
  children,
  className = "",
  autoPlay = false,
  interval = 3000,
}: CarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const items = Array.from(containerRef.current.children) as HTMLElement[];

    items.forEach((item, i) => {
      if (i === currentIndex) {
        gsap.to(item, {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      } else {
        gsap.to(item, {
          opacity: 0,
          scale: 0.8,
          x: i > currentIndex ? 100 : -100,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    });
  }, [currentIndex, children]);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % children.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, children.length]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

