"use client";

import { motion } from "framer-motion";
import { MdArrowDownward } from "react-icons/md";
import { useApp } from "@/lib/context/app-context";

export function ScrollIndicator() {
  const { mode } = useApp();

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      <span
        className={`text-xs font-medium ${
          mode === "dark"
            ? "text-dark-text-main/50"
            : "text-light-text-main/50"
        }`}
      >
        اسکرول کنید
      </span>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <MdArrowDownward
          className={`text-xl ${
            mode === "dark"
              ? "text-dark-text-main/50"
              : "text-light-text-main/50"
          }`}
        />
      </motion.div>
    </motion.div>
  );
}

