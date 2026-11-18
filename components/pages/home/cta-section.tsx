"use client";

import Link from "next/link";
import { FaDownload, FaPaperPlane, FaCode } from "react-icons/fa";
import { PROFILE } from "@/lib/data/portfolio";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { SocialMediaIcons } from "@/components/social-media-icons";

export function CTASection() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <MagneticButton>
          <Link
            href="/contact#contact-form"
            className="inline-flex items-center justify-center gap-2.5 h-12 px-6 rounded-xl text-sm sm:text-base font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/25 transition-all duration-200"
          >
            <FaPaperPlane className="text-xs" aria-hidden="true" />
            <span>بیا با هم کار کنیم</span>
          </Link>
        </MagneticButton>

        <MagneticButton>
          <a
            href={PROFILE.resumePdfUrl}
            download="Amirhossein-Keimasi-Resume.pdf"
            className="inline-flex items-center justify-center gap-2.5 h-12 px-5 rounded-xl text-sm sm:text-base font-semibold border border-slate-300 dark:border-white/15 bg-white/90 dark:bg-white/5 text-slate-800 dark:text-slate-100 hover:border-emerald-500/60 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200"
          >
            <FaDownload className="text-xs" aria-hidden="true" />
            <span>دانلود رزومه PDF</span>
          </a>
        </MagneticButton>

        <Link
          href="/projects"
          className="inline-flex items-center justify-center gap-2 h-12 px-4 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
        >
          <FaCode className="text-sm" aria-hidden="true" />
          <span>مشاهده پروژه‌ها</span>
        </Link>
      </div>

      <SocialMediaIcons textAlign="right" />
    </div>
  );
}
