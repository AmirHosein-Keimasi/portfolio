"use client";

import { FaTools, FaGithub } from "react-icons/fa";
import { devEx } from "@/lib/constants/dev-skills";
import { useApp } from "@/lib/context/app-context";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SpotlightCard } from "@/components/animations/list";
import { ShimmerOverlay } from "@/components/animations/shimmer-overlay";
import { GradientText } from "@/components/animations/gradient-text";
import { motion } from "framer-motion";

interface DevExpTimelineProps {
  loading: boolean;
}

export function DevExpTimeline({ loading }: DevExpTimelineProps) {
  const { mode } = useApp();
  const textColor = mode === "dark" ? "text-dark-text-main" : "text-light-text-main";
  const cardBg = mode === "dark" ? "bg-dark-primary-dark/80" : "bg-white/80";
  const iconBg = mode === "dark" ? "bg-yellow-500/20" : "bg-yellow-400/20";
  const iconColor = mode === "dark" ? "text-yellow-400" : "text-yellow-600";
  const gridColor = mode === "dark" ? "#eab308" : "#facc15";

  return (
    <div className="space-y-6" dir="rtl">
      {devEx.map((item, index) => (
        <ScrollReveal key={index} delay={index * 0.15} direction="right">
          <SpotlightCard>
            <motion.div
              className={`
                ${cardBg}
                relative overflow-hidden
                rounded-2xl
                p-6
                shadow-lg
                group
                transition-all duration-300
                backdrop-blur-sm
              `}
              whileHover={{
                scale: 1.02,
                y: -4,
                transition: { duration: 0.3 },
              }}
              initial={{ opacity: loading ? 1 : 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Background Pattern */}
              <div 
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(${gridColor} 1px, transparent 1px),
                    linear-gradient(90deg, ${gridColor} 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px',
                }}
              />
              <ShimmerOverlay />
              
              <div className="relative z-10 flex items-start gap-4">
                {/* آیکون */}
                <motion.div
                  className={`
                    ${iconBg}
                    ${iconColor}
                    w-14 h-14
                    rounded-xl
                    flex items-center justify-center
                    flex-shrink-0
                    shadow-md
                  `}
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <FaTools className="text-2xl" />
                </motion.div>

                {/* محتوا */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                      {item.major}
                    </span>
                  </div>
                  
                  <h3 className={`text-xl font-bold ${textColor} mb-3`}>
                    <GradientText
                      gradient={
                        mode === "dark"
                          ? "from-yellow-400 via-yellow-500 to-yellow-600"
                          : "from-yellow-500 via-yellow-600 to-yellow-700"
                      }
                    >
                      {item.cert}
                    </GradientText>
                  </h3>
                  
                  <motion.a
                    href={item.place}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      inline-flex items-center gap-2
                      px-4 py-2
                      rounded-lg
                      bg-yellow-500/20 dark:bg-yellow-500/30
                      border border-yellow-500/40 dark:border-yellow-400/40
                      text-sm font-medium
                      ${mode === "dark" ? "text-yellow-400" : "text-yellow-700"}
                      hover:bg-yellow-500/30 dark:hover:bg-yellow-500/40
                      hover:border-yellow-500/60 dark:hover:border-yellow-400/60
                      transition-all duration-300
                      group/link
                      shadow-sm hover:shadow-md
                    `}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="text-base" />
                    <span className="truncate max-w-xs">مشاهده در GitHub</span>
                    <motion.span
                      className="inline-block"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                </div>
              </div>

              {/* خط تزئینی پایین */}
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
  );
}

