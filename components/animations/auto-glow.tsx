"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface AutoGlowProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
  glowColor?: string;
}

export function AutoGlow({
  children,
  duration = 2,
  delay = 0,
  className = "",
  glowColor = "rgba(234, 179, 8, 0.5)",
}: AutoGlowProps) {
  return (
    <motion.div
      animate={{
        boxShadow: [
          `0 0 10px ${glowColor}`,
          `0 0 20px ${glowColor}`,
          `0 0 10px ${glowColor}`,
        ],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

