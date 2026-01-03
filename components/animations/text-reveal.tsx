"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface TextRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function TextReveal({
  children,
  delay = 0,
  className = "",
}: TextRevealProps) {
  return (
    <motion.div
      className={`overflow-hidden will-change-transform ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay }}
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.5,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{ willChange: "transform" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

