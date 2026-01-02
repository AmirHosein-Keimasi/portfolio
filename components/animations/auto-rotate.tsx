"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface AutoRotateProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
}

export function AutoRotate({
  children,
  duration = 20,
  delay = 0,
  className = "",
}: AutoRotateProps) {
  return (
    <motion.div
      animate={{
        rotate: 360,
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

