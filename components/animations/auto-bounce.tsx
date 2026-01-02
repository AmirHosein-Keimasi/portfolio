"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface AutoBounceProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  distance?: number;
  className?: string;
}

export function AutoBounce({
  children,
  duration = 1.5,
  delay = 0,
  distance = 10,
  className = "",
}: AutoBounceProps) {
  return (
    <motion.div
      animate={{
        y: [0, -distance, 0],
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

