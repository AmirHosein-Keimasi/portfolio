"use client";

import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane } from "react-icons/fa";
import { PROFILE } from "@/lib/data/portfolio";
import { PremiumBackground } from "@/components/animations/premium-background";
import { SectionHeader } from "@/components/common/section-header";
import { SocialMediaIcons } from "@/components/social-media-icons";
import { FormContact } from "./form-contact";

export function Contact() {
  return (
    <div className="min-h-screen relative py-12 sm:py-16 md:py-20">
      <PremiumBackground />
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="ارتباط مستقیم"
          title="ارسال پیام و شروع همکاری"
          subtitle="پیام شما مستقیماً به ایمیل شخصی من ارسال می‌شود و در کوتاه‌ترین زمان پاسخ خواهم داد."
          icon={<FaPaperPlane />}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-8">
            <FormContact />
          </div>

          <aside className="lg:col-span-4 rounded-2xl p-6 bg-white/90 dark:bg-[#0e1526]/90 border border-slate-200/80 dark:border-white/10 shadow-sm space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{PROFILE.availabilityText}</span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              بیا درباره پروژه یا همکاری بعدی صحبت کنیم
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              اگر به دنبال توسعه‌دهنده فرانت‌اند با تجربه واقعی در React، Next.js و TypeScript هستید، خوشحال می‌شوم با هم در تماس باشیم.
            </p>

            <ul className="space-y-3 pt-2 border-t border-slate-200/70 dark:border-white/10 text-sm">
              <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <FaEnvelope className="text-emerald-500 shrink-0" />
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 truncate"
                  dir="ltr"
                >
                  {PROFILE.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <FaPhone className="text-emerald-500 shrink-0" />
                <a
                  href={PROFILE.phoneHref}
                  className="hover:text-emerald-600 dark:hover:text-emerald-400"
                  dir="ltr"
                >
                  {PROFILE.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <FaMapMarkerAlt className="text-emerald-500 shrink-0" />
                <span>{PROFILE.location}</span>
              </li>
            </ul>

            <div className="pt-3 border-t border-slate-200/70 dark:border-white/10">
              <SocialMediaIcons textAlign="right" />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
