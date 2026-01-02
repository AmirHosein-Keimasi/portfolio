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
      className={`overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay }}
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.25, 0.25, 0, 1],
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

