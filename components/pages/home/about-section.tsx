"use client";

import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaUserCircle,
  FaLayerGroup,
  FaTachometerAlt,
  FaUsers,
  FaDownload,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBriefcase,
  FaArrowLeft,
} from "react-icons/fa";
import { CORE_PILLARS, PROFILE, EDUCATION } from "@/lib/data/portfolio";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SectionHeader } from "@/components/common/section-header";

const PILLAR_ICONS = {
  architecture: FaLayerGroup,
  performance: FaTachometerAlt,
  mentorship: FaUsers,
};

export const AboutSection = memo(function AboutSection() {
  const edu = EDUCATION[0];

  return (
    <section
      id="about"
      className="relative z-10 scroll-mt-20 md:scroll-mt-24 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200/70 dark:border-white/5"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        <SectionHeader
          eyebrow="درباره من"
          title="توسعه‌دهنده فرانت‌اند با تمرکز بر کیفیت، معماری و مقیاس‌پذیری"
          subtitle="آشنایی با پیشینه فنی، رویکرد مهندسی و ارزش‌های حرفه‌ای من در توسعه نرم‌افزار."
          icon={<FaUserCircle />}
        />

        {/* Intro Bio Card */}
        <ScrollReveal direction="up">
          <div className="rounded-3xl p-6 sm:p-8 lg:p-10 bg-white/90 dark:bg-[#0e1526]/90 border border-slate-200/80 dark:border-white/10 shadow-sm backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 flex flex-col items-center text-center">
                <div className="p-1.5 rounded-full bg-gradient-to-tr from-emerald-500 via-teal-400 to-sky-500 shadow-lg shadow-emerald-500/20">
                  <Image
                    src={PROFILE.avatarUrl}
                    alt={PROFILE.fullName}
                    width={240}
                    height={240}
                    className="w-44 h-44 sm:w-52 sm:h-52 rounded-full object-cover bg-surface-light dark:bg-surface-dark p-1"
                  />
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
                  {PROFILE.fullName}
                </h3>
                <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mt-0.5">
                  {PROFILE.role}
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10">
                    <FaMapMarkerAlt className="text-emerald-500" />
                    {PROFILE.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10">
                    <FaBriefcase className="text-emerald-500" />
                    {PROFILE.experienceYears} سال تجربه
                  </span>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-4">
                {PROFILE.summaryParagraphs.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-8"
                  >
                    {paragraph}
                  </p>
                ))}

                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-slate-200/70 dark:border-white/10">
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/10">
                    <FaGraduationCap className="text-xl text-sky-500 shrink-0" />
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        تحصیلات
                      </p>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        {edu.degree} — {edu.institution}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/10">
                    <FaBriefcase className="text-xl text-emerald-500 shrink-0" />
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        جایگاه فعلی
                      </p>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        Frontend Developer در داناجو
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href={PROFILE.resumePdfUrl}
                    download="Amirhossein-Keimasi-Resume.pdf"
                    className="inline-flex items-center gap-2 h-11 px-5 rounded-xl text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm"
                  >
                    <FaDownload className="text-xs" />
                    <span>دانلود رزومه PDF</span>
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 h-11 px-5 rounded-xl text-sm font-semibold border border-slate-300 dark:border-white/15 bg-white dark:bg-white/5 text-slate-800 dark:text-slate-200 hover:border-emerald-500/60"
                  >
                    <span>تماس و همکاری</span>
                    <FaArrowLeft className="text-xs" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Core Engineering Pillars */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 text-center sm:text-right">
            رویکرد و ارزش‌های مهندسی
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CORE_PILLARS.map((pillar, idx) => {
              const Icon = PILLAR_ICONS[pillar.id];
              return (
                <ScrollReveal key={pillar.id} delay={idx * 0.08} direction="up">
                  <div className="h-full rounded-2xl p-6 bg-white/90 dark:bg-[#0e1526]/90 border border-slate-200/80 dark:border-white/10 shadow-sm hover:border-emerald-500/40 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xl mb-4">
                      <Icon aria-hidden="true" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {pillar.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-auto" dir="ltr">
                      {pillar.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
});
