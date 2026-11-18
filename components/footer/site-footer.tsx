"use client";

import Link from "next/link";
import { FaDownload, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { PROFILE } from "@/lib/data/portfolio";
import { SocialMediaIcons } from "@/components/social-media-icons";

const quickLinks = [
  { label: "صفحه اصلی", href: "/" },
  { label: "درباره من", href: "/about" },
  { label: "رزومه و سوابق", href: "/resume" },
  { label: "نمونه کارها", href: "/projects" },
  { label: "تماس با من", href: "/contact" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-slate-200/80 dark:border-white/10 bg-white/75 dark:bg-[#060a12]/90 backdrop-blur-lg no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-200/70 dark:border-white/10">
          {/* Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-sky-500 text-white font-bold flex items-center justify-center shadow-md shadow-emerald-500/20">
                {PROFILE.initials}
              </span>
              <div>
                <h2 className="font-bold text-lg text-slate-900 dark:text-white">
                  {PROFILE.fullName}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400" dir="ltr">
                  {PROFILE.roleEn} • {PROFILE.tagline}
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
              {PROFILE.summaryShort}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{PROFILE.availabilityText}</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              دسترسی سریع
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={PROFILE.resumePdfUrl}
                  download="Amirhossein-Keimasi-Resume.pdf"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  <FaDownload className="text-xs" />
                  <span>دانلود نسخه PDF رزومه</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              اطلاعات تماس
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-2.5">
                <FaMapMarkerAlt className="text-emerald-500 shrink-0" />
                <span>{PROFILE.location}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FaEnvelope className="text-emerald-500 shrink-0" />
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  dir="ltr"
                >
                  {PROFILE.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <FaPhone className="text-emerald-500 shrink-0" />
                <a
                  href={PROFILE.phoneHref}
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  dir="ltr"
                >
                  {PROFILE.phone}
                </a>
              </li>
            </ul>
            <SocialMediaIcons textAlign="right" className="pt-2" />
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <p>
            © {year} {PROFILE.fullName}. تمامی حقوق محفوظ است.
          </p>
          <p dir="ltr" className="text-slate-400 dark:text-slate-500">
            Built with Next.js, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
