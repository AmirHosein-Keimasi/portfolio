"use client";

import { useMemo } from "react";
import {
  FaCalendar,
  FaClock,
  FaComments,
  FaUsers,
  FaCheckCircle,
  FaEdit,
  FaHeadphones,
  FaSmile,
  FaHeart,
  FaCode,
} from "react-icons/fa";
import { CustomDivider } from "@/components/common/custom-divider";
import { useApp } from "@/lib/context/app-context";

const skills = [
  { title: "مسئولیت‌پذیری", icon: <FaCalendar /> },
  { title: "نظم و وقت‌شناسی", icon: <FaClock /> },
  { title: "کار تیمی", icon: <FaUsers /> },
  { title: "توانایی حل مسئله", icon: <FaCheckCircle /> },
  { title: "انتقادپذیر", icon: <FaComments /> },
  { title: "یادگیری و تدریس", icon: <FaEdit /> },
  { title: "شنونده‌ی خوب", icon: <FaHeadphones /> },
  { title: "شوخ‌طبعی", icon: <FaSmile /> },
  { title: "همدلی و همیاری", icon: <FaHeart /> },
];

export function SuftSkills() {
  const { mode } = useApp();
  
  const colors = useMemo(
    () => ({
      border: mode === "dark" ? "border-dark-text-main" : "border-light-text-main",
      successBg: mode === "dark" ? "bg-dark-success" : "bg-light-success",
    }),
    [mode]
  );

  return (
    <div className="p-5 text-center">
      <CustomDivider
        bColor={colors.border}
        cColor="warning"
        icon={<FaCode />}
        align="center"
        text="مهارت های نرم"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center mt-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`
              ${colors.successBg}
              text-white
              flex flex-col items-center
              p-4 rounded-lg
              shadow-md
              transition-transform duration-300
              hover:scale-105
              focus-within:ring-2 focus-within:ring-yellow-500
            `}
            tabIndex={0}
            role="article"
            aria-label={`مهارت: ${skill.title}`}
          >
            <div className="flex items-center justify-center mb-2" aria-hidden="true">
              <div className="text-5xl text-white">
                {skill.icon}
              </div>
            </div>
            <p className="font-bold text-black dark:text-white">
              {skill.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
