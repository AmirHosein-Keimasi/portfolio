"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
}

export function MagneticButton({
  children,
  className = "",
}: MagneticButtonProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
