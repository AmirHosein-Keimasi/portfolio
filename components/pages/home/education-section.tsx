import { FaGraduationCap, FaDownload } from "react-icons/fa";
import { PROFILE } from "@/lib/data/portfolio";
import { SectionHeader } from "@/components/common/section-header";
import { DevEduTimeline } from "@/components/pages/dev-edu-timeline";

export function EducationSection() {
  return (
    <section
      id="education"
      className="relative z-10 scroll-mt-20 md:scroll-mt-24 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200/70 dark:border-white/5 bg-slate-100/50 dark:bg-white/[0.015]"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="سوابق آکادمیک و دستاوردها"
          title="تحصیلات، افتخارات و زبان‌ها"
          subtitle="تحصیلات آکادمیک در رشته مهندسی کامپیوتر، کسب رتبه دوم مسابقات برنامه‌نویسی GCPC و میزان تسلط بر زبان‌ها."
          icon={<FaGraduationCap />}
        />

        <DevEduTimeline />

        <div className="mt-10 flex justify-center">
          <a
            href={PROFILE.resumePdfUrl}
            download="Amirhossein-Keimasi-Resume.pdf"
            className="inline-flex items-center gap-2 h-11 px-5 rounded-xl text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm shadow-emerald-600/20 transition-colors"
          >
            <FaDownload className="text-xs" aria-hidden="true" />
            <span>دانلود رزومه تاییدشده (PDF)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
