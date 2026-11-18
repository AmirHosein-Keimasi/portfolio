"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface NumberCounterProps {
  value: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export function NumberCounter({
  value,
  suffix = "",
  decimals = 0,
  duration = 1000,
  className = "",
}: NumberCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  // Start with value for SSG/SEO, animate on client view
  const [displayValue, setDisplayValue] = useState(value);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isInView || hasAnimated) return;

    setHasAnimated(true);
    let frameId: number;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(value * eased);

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, value, duration, hasAnimated]);

  const formatted =
    decimals > 0
      ? displayValue.toFixed(decimals)
      : Math.round(displayValue).toString();

  return (
    <span ref={ref} className={className} dir="ltr">
      {suffix}
      {formatted}
    </span>
  );
}
