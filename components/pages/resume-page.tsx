"use client";

import {
  FaFileAlt,
  FaDownload,
  FaPrint,
  FaBriefcase,
  FaGraduationCap,
  FaTools,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { PROFILE, TECHNICAL_SKILLS } from "@/lib/data/portfolio";
import { PremiumBackground } from "@/components/animations/premium-background";
import { SectionHeader } from "@/components/common/section-header";
import { DevExpTimeline } from "@/components/pages/dev-exp-timeline";
import { DevEduTimeline } from "@/components/pages/dev-edu-timeline";

export function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen relative py-12 sm:py-16 md:py-20">
      <PremiumBackground />
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          eyebrow="رزومه حرفه‌ای"
          title="سوابق شغلی، تحصیلات و مهارت‌ها"
          subtitle="نسخه آنلاین و کامل رزومه امیرحسین کیماسی — توسعه‌دهنده فرانت‌اند با بیش از ۳.۵ سال تجربه."
          icon={<FaFileAlt />}
        />

        {/* Quick Header & Actions */}
        <div className="rounded-2xl p-6 bg-white/90 dark:bg-[#0e1526]/90 border border-slate-200/80 dark:border-white/10 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {PROFILE.fullName}{" "}
              <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                ({PROFILE.roleEn})
              </span>
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <FaMapMarkerAlt className="text-emerald-500" />
                {PROFILE.location}
              </span>
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400"
                dir="ltr"
              >
                <FaEnvelope className="text-emerald-500" />
                {PROFILE.email}
              </a>
              <a
                href={PROFILE.phoneHref}
                className="inline-flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400"
                dir="ltr"
              >
                <FaPhone className="text-emerald-500" />
                {PROFILE.phone}
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 no-print">
            <a
              href={PROFILE.resumePdfUrl}
              download="Amirhossein-Keimasi-Resume.pdf"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-xl text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm shadow-emerald-600/20 transition-colors"
            >
              <FaDownload className="text-xs" aria-hidden="true" />
              <span>دانلود PDF رزومه</span>
            </a>
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 h-11 px-4 rounded-xl text-sm font-semibold border border-slate-300 dark:border-white/15 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-200 hover:border-emerald-500/50 transition-colors"
            >
              <FaPrint className="text-xs" aria-hidden="true" />
              <span>چاپ</span>
            </button>
          </div>
        </div>

        {/* Work Experience */}
        <section className="space-y-5">
          <div className="flex items-center gap-2.5">
            <FaBriefcase className="text-emerald-500 text-lg" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              سوابق شغلی و تجربیات
            </h3>
          </div>
          <DevExpTimeline />
        </section>

        {/* Education, Awards & Languages */}
        <section className="space-y-5">
          <div className="flex items-center gap-2.5">
            <FaGraduationCap className="text-sky-500 text-lg" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              تحصیلات، افتخارات و زبان‌ها
            </h3>
          </div>
          <DevEduTimeline />
        </section>

        {/* Technical Skills Summary */}
        <section className="rounded-2xl p-6 bg-white/90 dark:bg-[#0e1526]/90 border border-slate-200/80 dark:border-white/10 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5">
            <FaTools className="text-emerald-500 text-lg" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              خلاصه مهارت‌های فنی
            </h3>
          </div>
          <div className="flex flex-wrap gap-2" dir="ltr">
            {TECHNICAL_SKILLS.map((skill) => (
              <span
                key={skill.id}
                className="text-xs sm:text-sm font-medium px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-white/10"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
