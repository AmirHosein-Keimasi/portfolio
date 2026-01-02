"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface AutoPulseProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  scale?: number;
  className?: string;
}

export function AutoPulse({
  children,
  duration = 2,
  delay = 0,
  scale = 1.1,
  className = "",
}: AutoPulseProps) {
  return (
    <motion.div
      animate={{
        scale: [1, scale, 1],
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

