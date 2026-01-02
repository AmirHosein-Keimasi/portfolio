"use client";

import { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface SkillProps {
  icon: string;
  color: string;
  name: string;
  value: number;
}

const colorClasses: Record<string, string> = {
  primary: "bg-blue-500",
  secondary: "bg-gray-500",
  success: "bg-green-500",
  error: "bg-red-500",
  warning: "bg-yellow-500",
  info: "bg-blue-400",
};

export const Skill = memo(function Skill({ icon, color, name, value }: SkillProps) {
  const progressColor = colorClasses[color] || "bg-blue-500";

  return (
    <>
      <div className="flex items-center justify-center my-1 relative">
        <div className="absolute border-t border-gray-300 dark:border-gray-600 w-full" aria-hidden="true"></div>
        <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full flex items-center gap-2 z-10">
          <Image 
            src={icon} 
            alt={`${name} icon`} 
            width={24} 
            height={24} 
            className="h-6 w-6" 
            loading="lazy"
          />
          <span className="text-black dark:text-white font-medium">{name}</span>
        </div>
      </div>

      <div className="flex items-center m-2">
        <div className="min-w-[35px]">
          <span className="text-sm text-black dark:text-white font-medium" aria-label={`${name}: ${Math.round(value)}%`}>
            {Math.round(value)}%
          </span>
        </div>
        <div className="flex-1 mr-3">
          <div 
            className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden"
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${name} skill level: ${Math.round(value)}%`}
          >
            <motion.div
              className={`${progressColor} h-2 rounded-full`}
              initial={{ width: 0 }}
              animate={{ width: `${value}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </>
  );
});
