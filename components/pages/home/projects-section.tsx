"use client";

import { useState, useRef, useEffect, useMemo, useCallback, memo } from "react";
import { projects } from "@/lib/constants/dev-skills";
import { useApp } from "@/lib/context/app-context";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SpotlightCard } from "@/components/animations/list";
import { ShimmerOverlay } from "@/components/animations/shimmer-overlay";
import { GradientText } from "@/components/animations/gradient-text";
import { TextReveal } from "@/components/animations/text-reveal";
import { AutoRotate, AutoPulse, AutoBounce } from "@/components/animations";
import { CustomDivider } from "@/components/common/custom-divider";
import { FaCode, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export const ProjectsSection = memo(function ProjectsSection() {
  const { mode } = useApp();
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(
    new Set(),
  );
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

  const textColor = useMemo(
    () => mode === "dark" ? "text-dark-text-main" : "text-light-text-main",
    [mode]
  );
  const cardBg = useMemo(
    () => mode === "dark" ? "bg-dark-primary-dark/80" : "bg-white/80",
    [mode]
  );
  const gridColor = useMemo(
    () => mode === "dark" ? "#eab308" : "#facc15",
    [mode]
  );
  const gradient = useMemo(
    () => mode === "dark"
      ? "from-yellow-400 via-yellow-500 to-yellow-600"
      : "from-yellow-500 via-yellow-600 to-yellow-700",
    [mode]
  );

  const toggleExpand = useCallback((index: number) => {
    setExpandedProjects((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, y }}
      className={`py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 relative ${
        mode === "dark" ? "bg-dark-primary-dark" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <TextReveal delay={0.2}>
          <div className="mb-8 sm:mb-10 md:mb-12">
            <CustomDivider
              bColor={
                mode === "dark"
                  ? "border-dark-text-main"
                  : "border-light-text-main"
              }
              cColor="warning"
              icon={<FaCode />}
              align="center"
              text="نمونه کارهای من"
            />
          </div>
        </TextReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-stretch">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.1} direction="up">
              <SpotlightCard className="h-full">
                <motion.div
                  className={`
                    ${cardBg}
                    relative overflow-hidden
                    rounded-2xl
                    h-full
                    min-h-[400px] sm:min-h-[500px] md:min-h-[600px]
                    flex flex-col
                    shadow-xl
                    group
                    transition-all duration-300
                    backdrop-blur-sm
                  `}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
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

                  {/* Image Section */}
                  {project.imgSrc && (
                    <div className="relative w-full h-40 sm:h-44 md:h-48 overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src={project.imgSrc}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      </motion.div>

                      {/* Title Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className={`text-xl font-bold ${textColor} mb-1`}>
                          <GradientText gradient={gradient}>
                            {project.title}
                          </GradientText>
                        </h3>
                      </div>
                    </div>
                  )}

                  {/* Content Section */}
                  <div className="relative z-10 flex-1 flex flex-col p-4 sm:p-5 md:p-6">
                    {!project.imgSrc && (
                      <h3 className={`text-xl font-bold ${textColor} mb-3`}>
                        <GradientText gradient={gradient}>
                          {project.title}
                        </GradientText>
                      </h3>
                    )}

                    <div className="mb-4 flex-1 relative">
                      {project.description.length > 150 ? (
                        <div className="relative">
                          {!expandedProjects.has(index) ? (
                            <div className="relative">
                              <p
                                className={`text-sm ${textColor} opacity-80 line-clamp-3 relative`}
                              >
                                {project.description}
                              </p>
                              <button
                                onClick={() => toggleExpand(index)}
                                className={`
                                  mt-1 block text-xs font-medium
                                  ${mode === "dark" ? "text-yellow-400" : "text-yellow-600"}
                                  hover:underline
                                  transition-all duration-200
                                `}
                              >
                                ... نمایش بیشتر
                              </button>
                            </div>
                          ) : (
                            <>
                              <p className={`text-sm ${textColor} opacity-80`}>
                                {project.description}
                              </p>
                              <button
                                onClick={() => toggleExpand(index)}
                                className={`
                                  mt-2 block text-xs font-medium
                                  ${mode === "dark" ? "text-yellow-400" : "text-yellow-600"}
                                  hover:underline
                                  transition-all duration-200
                                `}
                              >
                                نمایش کمتر
                              </button>
                            </>
                          )}
                        </div>
                      ) : (
                        <p className={`text-sm ${textColor} opacity-80`}>
                          {project.description}
                        </p>
                      )}
                    </div>

                    {/* Technologies Badge */}
                    <div className="mb-4">
                      <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 block">
                        تکنولوژی‌ها:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ scale: 1.1 }}
                            className="text-xs px-2.5 py-1 rounded-full bg-yellow-500/20 dark:bg-yellow-500/30 text-yellow-700 dark:text-yellow-400 border border-yellow-500/30 dark:border-yellow-400/30"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Icons */}
                    {project.icons && project.icons.length > 0 && (
                      <div className="flex gap-2 mb-4">
                        {project.icons.map((icon, idx) => {
                          const animationType = idx % 3;
                          return (
                            <motion.div
                              key={idx}
                              whileHover={{ scale: 1.2 }}
                              transition={{ duration: 0.3 }}
                              className="relative"
                            >
                              {animationType === 0 ? (
                                <AutoRotate
                                  duration={20 + idx * 5}
                                  delay={idx * 0.5}
                                >
                                  <Image
                                    src={icon}
                                    alt={`${project.title} tech ${idx + 1}`}
                                    width={32}
                                    height={32}
                                    className="w-8 h-8 rounded-lg object-cover"
                                    loading="lazy"
                                  />
                                </AutoRotate>
                              ) : animationType === 1 ? (
                                <AutoPulse
                                  duration={2 + idx * 0.3}
                                  delay={idx * 0.2}
                                >
                                  <Image
                                    src={icon}
                                    alt={`${project.title} tech ${idx + 1}`}
                                    width={32}
                                    height={32}
                                    className="w-8 h-8 rounded-lg object-cover"
                                    loading="lazy"
                                  />
                                </AutoPulse>
                              ) : (
                                <AutoBounce
                                  duration={1.5 + idx * 0.2}
                                  delay={idx * 0.3}
                                >
                                  <Image
                                    src={icon}
                                    alt={`${project.title} tech ${idx + 1}`}
                                    width={32}
                                    height={32}
                                    className="w-8 h-8 rounded-lg object-cover"
                                    loading="lazy"
                                  />
                                </AutoBounce>
                              )}
                            </motion.div>
                          );
                        })}
                      </div>
                    )}

                    {/* Buttons */}
                    <div className="flex gap-3 mt-auto pt-4">
                      {project.websiteLink && (
                        <motion.a
                          href={project.websiteLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`
                            flex-1
                            flex items-center justify-center gap-2
                            px-4 py-2.5
                            rounded-lg
                            bg-yellow-500/20 dark:bg-yellow-500/30
                            border border-yellow-500/40 dark:border-yellow-400/40
                            text-sm font-medium
                            ${mode === "dark" ? "text-yellow-400" : "text-yellow-600"}
                            hover:bg-yellow-500/30 dark:hover:bg-yellow-500/40
                            hover:border-yellow-500/60 dark:hover:border-yellow-400/60
                            transition-all duration-300
                            shadow-sm hover:shadow-md
                          `}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaExternalLinkAlt className="text-xs" />
                          <span>وبسایت</span>
                        </motion.a>
                      )}
                      <motion.a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                          flex-1
                          flex items-center justify-center gap-2
                          px-4 py-2.5
                          rounded-lg
                          bg-yellow-500/20 dark:bg-yellow-500/30
                          border border-yellow-500/40 dark:border-yellow-400/40
                          text-sm font-medium
                          ${mode === "dark" ? "text-yellow-400" : "text-yellow-600"}
                          hover:bg-yellow-500/30 dark:hover:bg-yellow-500/40
                          hover:border-yellow-500/60 dark:hover:border-yellow-400/60
                          transition-all duration-300
                          shadow-sm hover:shadow-md
                        `}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub className="text-xs" />
                        <span>کد</span>
                      </motion.a>
                    </div>
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
    </motion.section>
  );
});

