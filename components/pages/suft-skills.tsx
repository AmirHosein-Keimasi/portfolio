"use client";

import { memo } from "react";
import {
  FaChalkboardTeacher,
  FaPuzzlePiece,
  FaCodeBranch,
  FaUsers,
  FaBookOpen,
  FaShieldAlt,
  FaClock,
  FaComments,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import { SOFT_SKILLS } from "@/lib/data/portfolio";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

const SOFT_ICON_MAP: Record<string, IconType> = {
  mentorship: FaChalkboardTeacher,
  "problem-solving": FaPuzzlePiece,
  "code-review": FaCodeBranch,
  teamwork: FaUsers,
  learning: FaBookOpen,
  responsibility: FaShieldAlt,
  time: FaClock,
  feedback: FaComments,
};

export const SuftSkills = memo(function SuftSkills() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
      {SOFT_SKILLS.map((skill, index) => {
        const Icon = SOFT_ICON_MAP[skill.id] || FaUsers;
        return (
          <ScrollReveal key={skill.id} delay={index * 0.05} direction="up">
            <div className="h-full rounded-2xl p-5 bg-white/85 dark:bg-[#0e1526]/85 border border-slate-200/80 dark:border-white/10 hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xl mb-4">
                <Icon aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                {skill.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {skill.description}
              </p>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
});
