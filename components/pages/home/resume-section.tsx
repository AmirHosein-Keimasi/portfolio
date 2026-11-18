import Link from "next/link";
import { FaBriefcase, FaDownload, FaArrowLeft } from "react-icons/fa";
import { PROFILE } from "@/lib/data/portfolio";
import { SectionHeader } from "@/components/common/section-header";
import { DevExpTimeline } from "@/components/pages/dev-exp-timeline";

export function ResumeSection() {
  return (
    <section
      id="resume"
      className="relative z-10 scroll-mt-20 md:scroll-mt-24 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200/70 dark:border-white/5 bg-slate-100/50 dark:bg-white/[0.015]"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="سوابق حرفه‌ای"
          title="تجربیات کاری تخصصی"
          subtitle="مسیر حرفه‌ای من در توسعه محصولات واقعی در محیط Production، منتورینگ فنی تیم فرانت‌اند، معماری ماژولار و بهینه‌سازی عملکرد."
          icon={<FaBriefcase />}
        />

        <DevExpTimeline />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={PROFILE.resumePdfUrl}
            download="Amirhossein-Keimasi-Resume.pdf"
            className="inline-flex items-center gap-2 h-11 px-5 rounded-xl text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm shadow-emerald-600/20 transition-colors"
          >
            <FaDownload className="text-xs" aria-hidden="true" />
            <span>دانلود نسخه کامل رزومه (PDF)</span>
          </a>
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 h-11 px-5 rounded-xl text-sm font-semibold border border-slate-300 dark:border-white/15 bg-white/80 dark:bg-white/5 text-slate-800 dark:text-slate-200 hover:border-emerald-500/60 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            <span>مشاهده صفحه اختصاصی رزومه</span>
            <FaArrowLeft className="text-xs" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
