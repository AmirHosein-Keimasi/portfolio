"use client";

import { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCode, FaRocket } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiReact } from "react-icons/si";
import { PROFILE } from "@/lib/data/portfolio";
import { GradientText } from "@/components/animations/gradient-text";
import { TextReveal } from "@/components/animations/text-reveal";
import { StatsSection } from "./stats-section";
import { CTASection } from "./cta-section";

export const HeroSection = memo(function HeroSection() {
  return (
    <section
      id="hero"
      className="relative scroll-mt-20 md:scroll-mt-24 pt-10 pb-16 sm:pt-14 sm:pb-24 md:pt-20 md:pb-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Right Column: Intro & CTA */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            <TextReveal delay={0.05}>
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{PROFILE.availabilityText}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-white/10">
                  <FaMapMarkerAlt className="text-emerald-500 text-[11px]" />
                  <span>{PROFILE.location}</span>
                </span>
              </div>
            </TextReveal>

            <TextReveal delay={0.12}>
              <div className="space-y-3">
                <p className="text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400">
                  سلام، من
                </p>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                  <GradientText>{PROFILE.fullName}</GradientText>
                  <span className="block text-xl sm:text-2xl lg:text-3xl font-bold text-slate-700 dark:text-slate-200 mt-3">
                    {PROFILE.role}{" "}
                    <span
                      className="text-base sm:text-lg lg:text-xl font-semibold text-emerald-600 dark:text-emerald-400"
                      dir="ltr"
                    >
                      ({PROFILE.roleEn})
                    </span>
                  </span>
                </h1>
              </div>
            </TextReveal>

            <TextReveal delay={0.2}>
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                {PROFILE.summaryParagraphs[0]}
              </p>
            </TextReveal>

            {/* Quick Tech Stack Strip */}
            <TextReveal delay={0.26}>
              <div className="flex flex-wrap items-center gap-2" dir="ltr">
                {[
                  { label: "Next.js", icon: SiNextdotjs },
                  { label: "React.js", icon: SiReact },
                  { label: "TypeScript", icon: SiTypescript },
                  { label: "Tailwind CSS", icon: FaCode },
                  { label: "SSR & SEO", icon: FaRocket },
                ].map(({ label, icon: Icon }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/80 dark:bg-white/5 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-white/10"
                  >
                    <Icon className="text-emerald-500 text-xs" aria-hidden="true" />
                    <span>{label}</span>
                  </span>
                ))}
              </div>
            </TextReveal>

            <TextReveal delay={0.32}>
              <CTASection />
            </TextReveal>
          </div>

          {/* Left Column: Portrait Card */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Soft Ambient Halo */}
              <div
                className="absolute -inset-4 rounded-full bg-gradient-to-tr from-emerald-500/30 via-teal-400/20 to-sky-500/30 blur-2xl animate-pulse-subtle pointer-events-none"
                aria-hidden="true"
              />

              {/* Portrait Ring */}
              <div className="relative p-1.5 rounded-full bg-gradient-to-tr from-emerald-500 via-teal-400 to-sky-500 shadow-2xl shadow-emerald-500/20">
                <div className="rounded-full overflow-hidden bg-surface-light dark:bg-surface-dark p-1.5">
                  <Image
                    src={PROFILE.avatarUrl}
                    alt={`${PROFILE.fullName} - ${PROFILE.role}`}
                    width={420}
                    height={420}
                    priority
                    className="w-56 h-56 sm:w-72 sm:h-72 lg:w-[340px] lg:h-[340px] rounded-full object-cover"
                    sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 340px"
                  />
                </div>
              </div>

              {/* Floating Experience Badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="hidden sm:flex items-center gap-2.5 absolute -bottom-3 -right-4 px-4 py-2.5 rounded-2xl bg-white/95 dark:bg-[#0e1526]/95 border border-slate-200 dark:border-white/15 shadow-xl backdrop-blur-md"
              >
                <span className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
                  {PROFILE.experienceYears}
                </span>
                <div className="leading-tight">
                  <p className="text-xs font-bold text-slate-900 dark:text-white">
                    سال تجربه
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    محصولات Production
                  </p>
                </div>
              </motion.div>

              {/* Floating Current Role Badge */}
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="hidden sm:flex items-center gap-2 absolute top-4 -left-6 px-3.5 py-2 rounded-2xl bg-white/95 dark:bg-[#0e1526]/95 border border-slate-200 dark:border-white/15 shadow-xl backdrop-blur-md"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-100">
                  Frontend @ داناجو
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Stats Row */}
        <StatsSection />
      </div>
    </section>
  );
});
