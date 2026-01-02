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
  FaSmile,
  FaHeart,
  FaCode,
} from "react-icons/fa";
import { CustomDivider } from "@/components/common/custom-divider";
import { useApp } from "@/lib/context/app-context";
import { motion, useInView } from "framer-motion";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    },
  },
};

export function SuftSkills() {
  const { mode } = useApp();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

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
      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center mt-2"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              y: -10,
              rotate: [0, -5, 5, -5, 0],
              transition: { duration: 0.5 },
            }}
            className={`
              ${colors.successBg}
              text-white
              flex flex-col items-center
              p-4 rounded-lg
              shadow-md
              cursor-pointer
              focus-within:ring-2 focus-within:ring-yellow-500
            `}
            tabIndex={0}
            role="article"
            aria-label={`مهارت: ${skill.title}`}
          >
            <motion.div
              className="flex items-center justify-center mb-2"
              aria-hidden="true"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-5xl text-white">{skill.icon}</div>
            </motion.div>
            <motion.p
              className="font-bold text-black dark:text-white"
              whileHover={{ scale: 1.05 }}
            >
              {skill.title}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
