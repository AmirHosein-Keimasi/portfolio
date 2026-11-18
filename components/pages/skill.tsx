"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import {
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiBootstrap,
  SiGit,
  SiWebpack,
  SiNpm,
  SiReactquery,
  SiReacthookform,
} from "react-icons/si";
import { FaCubes, FaPlug, FaCheckDouble, FaWpforms } from "react-icons/fa";
import type { IconType } from "react-icons";

interface SkillIconConfig {
  icon: IconType;
  colorClass: string;
}

const ICON_MAP: Record<string, SkillIconConfig> = {
  typescript: { icon: SiTypescript, colorClass: "text-blue-500" },
  javascript: { icon: SiJavascript, colorClass: "text-amber-400" },
  html5: { icon: SiHtml5, colorClass: "text-orange-500" },
  css3: { icon: SiCss, colorClass: "text-sky-500" },
  react: { icon: SiReact, colorClass: "text-cyan-400" },
  nextjs: { icon: SiNextdotjs, colorClass: "text-slate-900 dark:text-white" },
  zustand: { icon: FaCubes, colorClass: "text-amber-500" },
  redux: { icon: SiRedux, colorClass: "text-purple-500" },
  tanstack: { icon: SiReactquery, colorClass: "text-rose-500" },
  api: { icon: FaPlug, colorClass: "text-emerald-500" },
  tailwind: { icon: SiTailwindcss, colorClass: "text-teal-400" },
  mui: { icon: SiMui, colorClass: "text-blue-500" },
  bootstrap: { icon: SiBootstrap, colorClass: "text-violet-500" },
  rhf: { icon: SiReacthookform, colorClass: "text-pink-500" },
  formik: { icon: FaWpforms, colorClass: "text-indigo-400" },
  yup: { icon: FaCheckDouble, colorClass: "text-emerald-500" },
  git: { icon: SiGit, colorClass: "text-orange-600" },
  webpack: { icon: SiWebpack, colorClass: "text-sky-400" },
  npm: { icon: SiNpm, colorClass: "text-red-500" },
};

interface SkillProps {
  name: string;
  iconKey: string;
  value: number;
  featured?: boolean;
}

export const Skill = memo(function Skill({
  name,
  iconKey,
  value,
  featured = false,
}: SkillProps) {
  const iconConfig = ICON_MAP[iconKey] || {
    icon: FaCubes,
    colorClass: "text-emerald-500",
  };
  const Icon = iconConfig.icon;

  return (
    <div className="group py-2.5">
      <div className="flex items-center justify-between gap-3 mb-2">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="w-8 h-8 rounded-lg flex items-center justify-center bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 shrink-0 group-hover:scale-105 transition-transform">
            <Icon className={`text-base ${iconConfig.colorClass}`} aria-hidden="true" />
          </span>
          <span
            className="text-sm font-semibold text-slate-800 dark:text-slate-100 truncate"
            dir="ltr"
          >
            {name}
          </span>
          {featured && (
            <span className="hidden sm:inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300">
              تخصص اصلی
            </span>
          )}
        </div>
        <span
          className="text-xs font-semibold text-slate-500 dark:text-slate-400 tabular-nums"
          dir="ltr"
        >
          {value}%
        </span>
      </div>

      <div
        className="w-full h-1.5 rounded-full bg-slate-200/80 dark:bg-white/10 overflow-hidden"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name}: ${value}%`}
      >
        <motion.div
          className="h-full rounded-full bg-gradient-to-l from-emerald-500 via-teal-400 to-sky-400"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
});
