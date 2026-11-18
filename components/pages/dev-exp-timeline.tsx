"use client";

import { memo } from "react";
import {
  FaBriefcase,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaLayerGroup,
} from "react-icons/fa";
import { WORK_EXPERIENCES } from "@/lib/data/portfolio";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

interface DevExpTimelineProps {
  loading?: boolean;
  compact?: boolean;
}

export const DevExpTimeline = memo(function DevExpTimeline({
  compact = false,
}: DevExpTimelineProps) {
  return (
    <div className="space-y-6" dir="rtl">
      {WORK_EXPERIENCES.map((exp, index) => (
        <ScrollReveal key={exp.id} delay={index * 0.1} direction="up">
          <article className="relative rounded-2xl p-6 sm:p-7 bg-white/90 dark:bg-[#0e1526]/90 border border-slate-200/80 dark:border-white/10 shadow-sm hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 backdrop-blur-sm">
            {/* Header row */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-5 border-b border-slate-200/70 dark:border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/15 to-sky-500/15 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 text-xl">
                  <FaBriefcase aria-hidden="true" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {exp.company}
                    </h3>
                    {exp.isCurrent && (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        مشغول به کار
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400 mt-1">
                    {exp.role}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 sm:flex-col sm:items-end">
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-white/10">
                  {exp.period}
                </span>
                {exp.website && (
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-sky-600 dark:text-sky-400 hover:underline"
                  >
                    <span>مشاهده وب‌سایت</span>
                    <FaExternalLinkAlt className="text-[10px]" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>

            {/* Summary */}
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {exp.summary}
            </p>

            {/* Structured Groups (Danajou) */}
            {exp.groups && exp.groups.length > 0 && (
              <div
                className={`mt-5 grid grid-cols-1 ${
                  compact ? "gap-4" : "md:grid-cols-3 gap-4"
                }`}
              >
                {exp.groups.map((group) => (
                  <div
                    key={group.title}
                    className="rounded-xl p-4 bg-slate-50/90 dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/10"
                  >
                    <div className="flex items-center gap-2 mb-2.5">
                      <FaLayerGroup
                        className="text-xs text-emerald-500 shrink-0"
                        aria-hidden="true"
                      />
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                        {group.titleFa}
                      </h4>
                    </div>
                    <p
                      className="text-[11px] font-medium text-slate-400 dark:text-slate-500 mb-3"
                      dir="ltr"
                    >
                      {group.title}
                    </p>
                    <ul className="space-y-2">
                      {group.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed"
                        >
                          <FaCheckCircle
                            className="text-emerald-500 mt-1 shrink-0 text-[11px]"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Flat Highlights (CastoFly) */}
            {exp.highlights && exp.highlights.length > 0 && (
              <ul className="mt-5 space-y-2.5">
                {exp.highlights.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                  >
                    <FaCheckCircle
                      className="text-emerald-500 mt-1 shrink-0 text-xs"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Tech Tags */}
            <div className="mt-5 pt-4 border-t border-slate-200/70 dark:border-white/10 flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  dir="ltr"
                  className="text-xs font-medium px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        </ScrollReveal>
      ))}
    </div>
  );
});
