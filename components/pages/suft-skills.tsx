"use client";

import { useMemo, useRef } from "react";
import {
  FaCalendar,
  FaClock,
  FaComments,
  FaUsers,
  FaCheckCircle,
  FaEdit,
  FaHeadphones,
  FaHeart,
  FaCode,
} from "react-icons/fa";
import { CustomDivider } from "@/components/common/custom-divider";
import { useApp } from "@/lib/context/app-context";
import { TextReveal } from "@/components/animations/text-reveal";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SpotlightCard } from "@/components/animations/list";
import { ShimmerOverlay } from "@/components/animations/shimmer-overlay";
import { GradientText } from "@/components/animations/gradient-text";
import { motion } from "framer-motion";

const skills = [
  { title: "مسئولیت‌پذیری", icon: <FaCalendar /> },
  { title: "نظم و وقت‌شناسی", icon: <FaClock /> },
  { title: "کار تیمی", icon: <FaUsers /> },
  { title: "توانایی حل مسئله", icon: <FaCheckCircle /> },
  { title: "انتقادپذیر", icon: <FaComments /> },
  { title: "یادگیری و تدریس", icon: <FaEdit /> },
  { title: "شنونده‌ی خوب", icon: <FaHeadphones /> },
  { title: "همدلی و همیاری", icon: <FaHeart /> },
];

export function SuftSkills() {
  const { mode } = useApp();

  const colors = useMemo(
    () => ({
      border: mode === "dark" ? "border-dark-text-main" : "border-light-text-main",
      successBg: mode === "dark" ? "bg-dark-success" : "bg-light-success",
      cardBg: mode === "dark" ? "bg-dark-primary-main" : "bg-white",
      textMain: mode === "dark" ? "text-dark-text-main" : "text-light-text-main",
      textSecondary: mode === "dark" ? "text-dark-text-main/70" : "text-light-text-main/70",
      successText: mode === "dark" ? "text-dark-success" : "text-light-success",
    }),
    [mode]
  );

  return (
    <div className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <TextReveal delay={0.2}>
          <div className="text-center mb-12">
            <CustomDivider
              bColor={colors.border}
              cColor="warning"
              icon={<FaCode />}
              align="center"
              text="مهارت های نرم"
            />
          </div>
        </TextReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <ScrollReveal
              key={index}
              delay={index * 0.1}
              direction="up"
            >
              <SpotlightCard>
                <motion.div
                  className={`
                    ${colors.cardBg}
                    relative overflow-hidden
                    flex flex-col items-center justify-center
                    p-8 rounded-xl
                    shadow-lg
                    cursor-pointer
                    group
                    border-2
                    ${mode === "dark" ? "border-dark-primary-dark" : "border-gray-100"}
                    transition-all duration-300
                  `}
                  whileHover={{
                    scale: 1.05,
                    y: -8,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  tabIndex={0}
                  role="article"
                  aria-label={`مهارت: ${skill.title}`}
                >
                  <ShimmerOverlay />
                  
                  {/* Icon Container */}
                  <div
                    className={`
                      ${colors.successText}
                      mb-4
                      relative z-10
                    `}
                  >
                    <div className="text-6xl">{skill.icon}</div>
                  </div>

                  {/* Title */}
                  <motion.h3
                    className={`
                      ${colors.textMain}
                      font-bold text-lg md:text-xl
                      text-center
                      relative z-10
                      mb-2
                    `}
                    whileHover={{ scale: 1.05 }}
                  >
                    <GradientText
                      gradient={
                        mode === "dark"
                          ? "from-green-400 via-green-500 to-green-600"
                          : "from-green-500 via-green-600 to-green-700"
                      }
                    >
                      {skill.title}
                    </GradientText>
                  </motion.h3>

                  {/* Decorative Element */}
                  <motion.div
                    className={`
                      absolute bottom-0 left-0 right-0 h-1
                      ${colors.successBg}
                      transform scale-x-0 group-hover:scale-x-100
                      transition-transform duration-300
                    `}
                  />
                </motion.div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
