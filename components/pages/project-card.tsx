"use client";

import { useState, useEffect, memo } from "react";
import Image from "next/image";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaCheck,
  FaCode,
  FaFileAlt,
  FaTimes,
  FaLayerGroup,
  FaCogs,
  FaCalculator,
  FaUtensils,
  FaDatabase,
  FaChartLine,
} from "react-icons/fa";
import type { ProjectItem } from "@/types";

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard = memo(function ProjectCard({
  project,
}: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsModalOpen(false);
      };
      window.addEventListener("keydown", onKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isModalOpen]);

  const cs = project.caseStudy;

  return (
    <>
      <article className="group h-full flex flex-col rounded-2xl overflow-hidden bg-white/90 dark:bg-[#0e1526]/90 border border-slate-200/80 dark:border-white/10 shadow-sm hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm">
        {/* Visual Preview */}
        <div className="relative w-full h-52 overflow-hidden bg-slate-950">
          {project.imgSrc ? (
            <>
              <Image
                src={project.imgSrc}
                alt={project.title}
                fill
                className={`${
                  project.imageFit === "contain"
                    ? "object-contain p-2.5"
                    : "object-cover group-hover:scale-105"
                } transition-transform duration-500`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            </>
          ) : (
            <div
              className={`relative w-full h-full bg-gradient-to-br ${project.accentGradient} p-5 flex flex-col justify-between`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5" dir="ltr">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                </div>
                <FaCode className="text-white/60 text-lg" aria-hidden="true" />
              </div>
              <div className="bg-slate-950/25 backdrop-blur-md rounded-xl p-3 border border-white/20">
                <p className="text-white font-bold text-base truncate">
                  {project.title}
                </p>
                <p className="text-white/80 text-xs mt-0.5 truncate">
                  {project.subtitle}
                </p>
              </div>
            </div>
          )}

          {/* Top badges */}
          <div className="absolute top-3 right-3 left-3 flex items-center justify-between gap-2 pointer-events-none z-10">
            {project.year && (
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-950/75 text-white backdrop-blur-md border border-white/15">
                {project.year}
              </span>
            )}
            {project.badgeText ? (
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-500/90 text-white backdrop-blur-md shadow-sm">
                {project.badgeText}
              </span>
            ) : project.category === "production" ? (
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-500/90 text-white backdrop-blur-md">
                Production
              </span>
            ) : null}
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 flex flex-col p-5 sm:p-6">
          <div className="mb-3">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-xs font-medium text-emerald-700 dark:text-emerald-400 mt-1">
              {project.subtitle}
            </p>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Key features */}
          {project.features.length > 0 && (
            <ul className="space-y-1.5 mb-5">
              {project.features.map((feat, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400"
                >
                  <FaCheck
                    className="text-emerald-500 mt-0.5 shrink-0 text-[10px]"
                    aria-hidden="true"
                  />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          )}

          {/* PRD Case Study Button for Miz */}
          {cs && (
            <div className="mb-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-amber-500/15 via-emerald-500/15 to-sky-500/15 text-slate-800 dark:text-white border border-amber-500/30 hover:border-emerald-500/60 hover:bg-emerald-500/15 transition-all shadow-sm"
              >
                <FaFileAlt className="text-amber-500 text-sm" />
                <span>مشاهده خلاصه سند جامع PRD و معماری سیستم</span>
              </button>
            </div>
          )}

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                dir="ltr"
                className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2.5 pt-4 border-t border-slate-200/70 dark:border-white/10">
            {project.websiteLink && (
              <a
                href={project.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 h-10 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm shadow-emerald-600/20 transition-colors"
              >
                <FaExternalLinkAlt className="text-xs" aria-hidden="true" />
                <span>مشاهده آنلاین</span>
              </a>
            )}
            {project.codeLink && (
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  project.websiteLink ? "flex-1" : "w-full"
                } inline-flex items-center justify-center gap-2 h-10 px-4 rounded-xl text-xs sm:text-sm font-semibold border border-slate-200 dark:border-white/15 bg-white dark:bg-white/5 text-slate-800 dark:text-slate-200 hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors`}
              >
                <FaGithub className="text-sm" aria-hidden="true" />
                <span>کد منبع</span>
              </a>
            )}
          </div>
        </div>
      </article>

      {/* PRD Case Study Modal */}
      {isModalOpen && cs && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-md overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="prd-modal-title"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl bg-white dark:bg-[#0b1120] border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
            dir="rtl"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xl shrink-0">
                  <FaFileAlt aria-hidden="true" />
                </div>
                <div>
                  <h3
                    id="prd-modal-title"
                    className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white"
                  >
                    سند جامع نیازمندی‌های محصول (PRD) — {project.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25">
                      {cs.badge}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {cs.status}
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="w-10 h-10 rounded-xl border border-slate-200 dark:border-white/10 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 flex items-center justify-center transition-colors"
                aria-label="بستن پنجره"
              >
                <FaTimes className="text-base" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {/* Overview */}
              <div className="rounded-2xl p-5 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <FaLayerGroup className="text-emerald-500" />
                  <span>چشم‌انداز و مدل کسب‌وکار (Hybrid)</span>
                </h4>
                <p>{cs.overview}</p>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10">
                    <span className="font-bold text-slate-900 dark:text-white block mb-0.5">
                      پخت در محل (In-home Cooking)
                    </span>
                    حضور سرآشپز اختصاصی در منزل یا ویلا با تجهیزات کامل و نظافت نهایی.
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10">
                    <span className="font-bold text-slate-900 dark:text-white block mb-0.5">
                      آماده‌سازی و ارسال (Prepared & Delivered)
                    </span>
                    پک‌های وکیوم و ایزوله رژیمی/هفتگی با حفظ زنجیره سرمایش استاندارد.
                  </div>
                </div>
              </div>

              {/* 4 Service Pillars */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <FaUtensils className="text-emerald-500" />
                  <span>۴ شاخه خدمات کلیدی پلتفرم</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cs.services?.map((srv, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 flex items-center gap-2.5"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                        {srv}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3 Core Engines */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <FaCogs className="text-emerald-500" />
                  <span>۳ موتور محاسباتی و هسته اصلی سیستم</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                  {cs.engines?.map((eng) => (
                    <div
                      key={eng.title}
                      className="p-4 rounded-2xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 shadow-sm flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 block mb-0.5" dir="ltr">
                          {eng.title}
                        </span>
                        <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                          {eng.subtitle}
                        </h5>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          {eng.summary}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Financial & Yield Formula */}
              <div className="rounded-2xl p-5 bg-gradient-to-br from-emerald-500/10 via-white/80 to-sky-500/10 dark:from-emerald-500/10 dark:via-white/[0.02] dark:to-sky-500/10 border border-emerald-500/20">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <FaCalculator className="text-emerald-500" />
                  <span>فرمول‌های مالی و ضریب پرتی مواد (Yield Factor)</span>
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                  قیمت‌گذاری اقلام با در نظر گرفتن ضریب پرتی محاسبه می‌شود:
                </p>
                <div className="p-3 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto space-y-1" dir="ltr">
                  <div>Price = Labor + Ingredients + Travel + Supplies + Addons + Overhead + Profit</div>
                  <div>RecipeCost = Sum( (Quantity / YieldRatio) * UnitCost )</div>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                  کلیه پیش‌فاکتورها به صورت Snapshot تغییرناپذیر ثبت شده تا تغییر نرخ‌های آتی تغییری در سفارش‌های گذشته ایجاد نکند.
                </p>
              </div>

              {/* Architecture & Database */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <FaDatabase className="text-emerald-500" />
                  <span>معماری پایگاه‌داده (۱۰ دامنه) و مشخصات فنی</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {cs.architectureHighlights?.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 text-xs flex items-start gap-2"
                    >
                      <FaCheck className="text-emerald-500 mt-1 shrink-0 text-[10px]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operations & P&L */}
              <div className="rounded-2xl p-4 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 flex items-start gap-3">
                <FaChartLine className="text-emerald-500 text-lg shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-slate-900 dark:text-white block mb-1">
                    داشبورد عملیات و سود و زیان (P&L)
                  </span>
                  پنل مدیریت شامل کارتابل رسیدگی به سفارش‌ها، تقویم عملیاتی با بافرهای ترافیکی، لیست خرید تجمیعی بازار با مقادیر وزنی دقیق و ثبت فاکتورهای واقعی جهت محاسبه سود خالص هر سفارش است.
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-white/[0.02] flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                طراحی معماری سیستم و فرانت‌اند: امیرحسین کیماسی
              </span>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="h-10 px-5 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
              >
                بستن پنجره
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
});
