"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useApp } from "@/lib/context/app-context";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SpotlightCard } from "@/components/animations/list";
import { ShimmerOverlay } from "@/components/animations/shimmer-overlay";
import { TextReveal } from "@/components/animations/text-reveal";
import { CustomDivider } from "@/components/common/custom-divider";
import { AutoRotate, AutoPulse, AutoBounce } from "@/components/animations";
import {
  FaEnvelope,
  FaTelegram,
  FaLinkedin,
  FaPhone,
  FaGithub,
  FaGlobe,
  FaCopy,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";

const contactData = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "amirhosein.kiemasi@gmail.com",
    href: "mailto:amirhosein.kiemasi@gmail.com",
    animation: "rotate" as const,
  },
  {
    icon: <FaTelegram />,
    label: "Telegram",
    value: "@amir1_1",
    href: "https://telegram.im/@amir1_1",
    animation: "pulse" as const,
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "amirhossein-keimasi",
    href: "https://www.linkedin.com/in/amirhossein-keimasi",
    animation: "bounce" as const,
  },
  {
    icon: <FaPhone />,
    label: "Phone",
    value: "+98 933 378 8421",
    href: "tel:+989333788421",
    animation: "rotate" as const,
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "amirhosein-keimasi",
    href: "https://github.com/amirhosein-keimasi",
    animation: "pulse" as const,
  },
  {
    icon: <FaGlobe />,
    label: "Website",
    value: "www.amirhoseinkeimasi.ir",
    href: "https://www.amirhoseinkeimasi.ir",
    animation: "bounce" as const,
  },
];

export function ContactPage() {
  const { mode } = useApp();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const bgColor = mode === "dark" ? "bg-dark-primary-main" : "bg-light-primary-main";
  const textColor = mode === "dark" ? "text-dark-text-main" : "text-light-text-main";
  const cardBg = mode === "dark" ? "bg-dark-primary-dark/80" : "bg-white/80";
  const gridColor = mode === "dark" ? "#eab308" : "#facc15";

  const handleCopy = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("کپی شد!");
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (error) {
      toast.error("خطا در کپی کردن");
    }
  };

  return (
    <div className={`${bgColor} min-h-screen py-12 md:py-16`}>
      <div className="p-4 md:p-8 max-w-7xl mx-auto">
        <TextReveal delay={0.2}>
          <div className="mb-12">
            <CustomDivider
              bColor={mode === "dark" ? "border-dark-text-main" : "border-light-text-main"}
              cColor="warning"
              icon={<FaPaperPlane />}
              align="center"
              text="تماس با من"
            />
          </div>
        </TextReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {contactData.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <SpotlightCard>
                  <motion.div
                    className={`
                      ${cardBg}
                      relative overflow-hidden
                      rounded-2xl
                      p-6
                      shadow-xl
                      backdrop-blur-sm
                      group
                    `}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    {/* Background Pattern */}
                    <div
                      className="absolute inset-0 opacity-10 pointer-events-none"
                      style={{
                        backgroundImage: `
                          linear-gradient(${gridColor} 1px, transparent 1px),
                          linear-gradient(90deg, ${gridColor} 1px, transparent 1px)
                        `,
                        backgroundSize: "30px 30px",
                      }}
                    />

                    <ShimmerOverlay />

                    <div className="relative z-10 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        <div
                          className={`
                            w-12 h-12 rounded-xl
                            flex items-center justify-center
                            ${mode === "dark" ? "bg-yellow-500/20" : "bg-yellow-500/20"}
                            ${mode === "dark" ? "text-yellow-400" : "text-yellow-600"}
                            flex-shrink-0
                          `}
                        >
                          {item.animation === "rotate" ? (
                            <AutoRotate duration={20 + index * 5} delay={index * 0.5}>
                              {item.icon}
                            </AutoRotate>
                          ) : item.animation === "pulse" ? (
                            <AutoPulse duration={2 + index * 0.3} delay={index * 0.2}>
                              {item.icon}
                            </AutoPulse>
                          ) : (
                            <AutoBounce duration={1.5 + index * 0.2} delay={index * 0.3}>
                              {item.icon}
                            </AutoBounce>
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <p className={`text-xs ${textColor} opacity-60 mb-1`}>
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`
                                block text-sm font-medium ${textColor}
                                hover:opacity-80 transition-opacity
                                truncate
                              `}
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className={`text-sm font-medium ${textColor} truncate`}>
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>

                      <motion.button
                        onClick={() => handleCopy(item.value, index)}
                        className={`
                          p-2 rounded-lg
                          ${mode === "dark" ? "bg-yellow-500/20 hover:bg-yellow-500/30" : "bg-yellow-500/20 hover:bg-yellow-500/30"}
                          ${mode === "dark" ? "text-yellow-400" : "text-yellow-600"}
                          transition-all duration-300
                          flex-shrink-0
                        `}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {copiedIndex === index ? (
                          <FaCheckCircle className="text-base" />
                        ) : (
                          <FaCopy className="text-base" />
                        )}
                      </motion.button>
                    </div>

                    {/* Decorative Line */}
                    <motion.div
                      className={`
                        absolute bottom-0 left-0 right-0 h-1
                        bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600
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

