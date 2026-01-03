"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  gradient?: string;
}

export function GradientText({
  children,
  className = "",
  gradient = "from-green-400 via-green-500 to-green-600",
}: GradientTextProps) {
  return (
    <motion.span
      className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent will-change-transform ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.span>
  );
}

