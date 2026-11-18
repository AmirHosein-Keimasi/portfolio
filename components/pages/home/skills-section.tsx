"use client";

import Link from "next/link";
import { FaCode, FaArrowLeft } from "react-icons/fa";
import { SectionHeader } from "@/components/common/section-header";
import { Skills } from "@/components/pages/skills";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200/70 dark:border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="تخصص‌های فنی"
          title="مهارت‌ها و تکنولوژی‌ها"
          subtitle="مجموعه ابزارها و تکنولوژی‌هایی که روزانه برای ساخت رابط‌های کاربری مقیاس‌پذیر، سریع و Type-Safe استفاده می‌کنم."
          icon={<FaCode />}
        />

        <Skills />

        <div className="mt-10 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border border-slate-300 dark:border-white/15 bg-white/80 dark:bg-white/5 text-slate-800 dark:text-slate-200 hover:border-emerald-500/60 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all"
          >
            <span>مشاهده جزئیات بیشتر و مهارت‌های نرم</span>
            <FaArrowLeft className="text-xs" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
