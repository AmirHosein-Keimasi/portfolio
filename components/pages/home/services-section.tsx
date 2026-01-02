"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaCode, FaRocket, FaPalette } from "react-icons/fa";
import { useApp } from "@/lib/context/app-context";
import { GradientText } from "@/components/animations/gradient-text";
import { TextReveal } from "@/components/animations/text-reveal";
import { ShimmerOverlay } from "@/components/animations/shimmer-overlay";

const services = [
  {
    icon: <FaCode className="text-5xl" />,
    title: "توسعه Frontend",
    description: "توسعه رابط کاربری مدرن با React و Next.js",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    icon: <FaRocket className="text-5xl" />,
    title: "بهینه‌سازی Performance",
    description: "بهینه‌سازی سرعت و کارایی وبسایت",
    gradient: "from-purple-400 to-purple-600",
  },
  {
    icon: <FaPalette className="text-5xl" />,
    title: "طراحی UI/UX",
    description: "طراحی رابط کاربری مدرن و کاربرپسند",
    gradient: "from-pink-400 to-pink-600",
  },
];

export function ServicesSection() {
  const { mode } = useApp();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: isMounted ? sectionRef : undefined,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, y }}
      className={`py-32 px-4 md:px-8 relative ${
        mode === "dark" ? "bg-dark-primary-dark" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <TextReveal delay={0.2}>
          <h2
            className={`text-4xl md:text-5xl font-bold mb-12 text-center ${
              mode === "dark" ? "text-dark-text-main" : "text-light-text-main"
            }`}
          >
            <GradientText
              gradient={
                mode === "dark"
                  ? "from-green-400 via-green-500 to-green-600"
                  : "from-green-500 via-green-600 to-green-700"
              }
            >
              خدمات من
            </GradientText>
          </h2>
        </TextReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`
                p-8 rounded-2xl text-center relative overflow-hidden group
                ${
                  mode === "dark"
                    ? "bg-dark-primary-main border border-dark-primary-dark"
                    : "bg-white shadow-lg border border-gray-100"
                }
                transition-all duration-300
              `}
            >
              <ShimmerOverlay />
              <motion.div
                className={`mb-4 inline-block ${
                  mode === "dark" ? "text-dark-success" : "text-light-success"
                }`}
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {service.icon}
              </motion.div>
              <h3
                className={`text-xl font-bold mb-3 ${
                  mode === "dark"
                    ? "text-dark-text-main"
                    : "text-light-text-main"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`${
                  mode === "dark"
                    ? "text-dark-text-main/70"
                    : "text-light-text-main/70"
                }`}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

