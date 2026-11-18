"use client";

import { useState, useCallback } from "react";
import toast from "react-hot-toast";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaTelegram,
  FaWhatsapp,
  FaGlobe,
  FaMapMarkerAlt,
  FaCopy,
  FaCheckCircle,
  FaPaperPlane,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import { CONTACT_CHANNELS } from "@/lib/data/portfolio";
import type { ContactChannel } from "@/types";
import { PremiumBackground } from "@/components/animations/premium-background";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SectionHeader } from "@/components/common/section-header";
import { FormContact } from "./form-contact";

const CHANNEL_ICONS: Record<ContactChannel["iconKey"], IconType> = {
  email: FaEnvelope,
  phone: FaPhone,
  linkedin: FaLinkedin,
  github: FaGithub,
  telegram: FaTelegram,
  whatsapp: FaWhatsapp,
  website: FaGlobe,
  location: FaMapMarkerAlt,
};

export function ContactPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = useCallback(async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("در کلیپ‌بورد کپی شد!");
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      toast.error("خطا در کپی کردن");
    }
  }, []);

  return (
    <div className="min-h-screen relative py-12 sm:py-16 md:py-20">
      <PremiumBackground />
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <SectionHeader
          eyebrow="تماس با من"
          title="راه‌های ارتباطی و ارسال پیام"
          subtitle="خوشحال می‌شوم درباره فرصت‌های همکاری، پروژه‌های جدید یا مسائل فنی با هم صحبت کنیم."
          icon={<FaPaperPlane />}
        />

        {/* All Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CONTACT_CHANNELS.map((item, index) => {
            const Icon = CHANNEL_ICONS[item.iconKey];
            const isCopied = copiedId === item.id;
            return (
              <ScrollReveal key={item.id} delay={index * 0.05} direction="up">
                <div className="h-full flex flex-col justify-between p-5 rounded-2xl bg-white/90 dark:bg-[#0e1526]/90 border border-slate-200/80 dark:border-white/10 hover:border-emerald-500/40 shadow-sm hover:shadow-md transition-all duration-200">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-lg">
                      <Icon aria-hidden="true" />
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy(item.copyValue, item.id)}
                      aria-label={`کپی ${item.labelFa}`}
                      title="کپی"
                      className="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:bg-emerald-500/15 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      {isCopied ? (
                        <FaCheckCircle className="text-emerald-500 text-sm" />
                      ) : (
                        <FaCopy className="text-sm" />
                      )}
                    </button>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                      {item.labelFa}
                    </p>
                    <a
                      href={item.href}
                      target={item.isExternal ? "_blank" : undefined}
                      rel={item.isExternal ? "noopener noreferrer" : undefined}
                      className="block text-sm font-semibold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 truncate transition-colors"
                      dir={item.iconKey === "location" ? "rtl" : "ltr"}
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Direct Email Form */}
        <div id="contact-form" className="max-w-3xl mx-auto">
          <ScrollReveal direction="up">
            <FormContact />
          </ScrollReveal>
        </div>
      </main>
    </div>
  );
}
