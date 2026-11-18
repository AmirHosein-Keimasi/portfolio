import {
  FaGraduationCap,
  FaTrophy,
  FaLanguage,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { EDUCATION, AWARDS, LANGUAGES } from "@/lib/data/portfolio";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

interface DevEduTimelineProps {
  loading?: boolean;
}

export function DevEduTimeline(_props: DevEduTimelineProps) {
  return (
    <div className="space-y-6" dir="rtl">
      {/* Education */}
      {EDUCATION.map((edu, index) => (
        <ScrollReveal key={edu.id} delay={index * 0.1} direction="up">
          <div className="rounded-2xl p-6 bg-white/90 dark:bg-[#0e1526]/90 border border-slate-200/80 dark:border-white/10 shadow-sm hover:border-emerald-500/40 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-500/15 border border-sky-500/25 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 text-xl">
                <FaGraduationCap aria-hidden="true" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {edu.institution}
                  </h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-white/10">
                    {edu.period}
                  </span>
                </div>
                <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                  {edu.degree} — {edu.major}
                </p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      ))}

      {/* Honors & Awards */}
      {AWARDS.map((award, index) => (
        <ScrollReveal key={award.id} delay={(index + 1) * 0.1} direction="up">
          <div className="rounded-2xl p-6 bg-gradient-to-br from-amber-500/10 via-white/90 to-white/90 dark:from-amber-500/10 dark:via-[#0e1526]/95 dark:to-[#0e1526]/95 border border-amber-500/30 shadow-sm hover:border-amber-500/60 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 text-xl">
                <FaTrophy aria-hidden="true" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {award.title}
                  </h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/25">
                    {award.year}
                  </span>
                </div>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">
                  {award.issuer}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {award.description}
                </p>
                {award.url && (
                  <a
                    href={award.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-amber-700 dark:text-amber-400 hover:underline"
                  >
                    <span>مشاهده خبر رسمی در وب‌سایت دانشگاه گناباد</span>
                    <FaExternalLinkAlt className="text-[10px]" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>
      ))}

      {/* Languages */}
      <ScrollReveal delay={0.2} direction="up">
        <div className="rounded-2xl p-6 bg-white/90 dark:bg-[#0e1526]/90 border border-slate-200/80 dark:border-white/10 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-lg">
              <FaLanguage aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                زبان‌ها
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                مهارت‌های زبانی
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {LANGUAGES.map((lang) => (
              <div
                key={lang.name}
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/10"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-slate-900 dark:text-white">
                    {lang.name}
                  </span>
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                    {lang.level}
                  </span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-l from-emerald-500 to-sky-400"
                    style={{ width: `${lang.proficiency}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
