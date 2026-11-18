"use client";

import { useState, useCallback, memo } from "react";
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
import { SectionHeader } from "@/components/common/section-header";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { FormContact } from "@/components/pages/form-contact";

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

export const ContactSection = memo(function ContactSection() {
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
    <section
      id="contact"
      className="relative z-10 scroll-mt-20 md:scroll-mt-24 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200/70 dark:border-white/5 bg-slate-100/50 dark:bg-white/[0.015]"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="ارتباط و همکاری"
          title="در تماس باشیم"
          subtitle="برای فرصت‌های شغلی، پروژه‌های جدید یا مشاوره فنی می‌توانید از طریق فرم زیر پیام بفرستید یا از راه‌های ارتباطی مستقیم استفاده کنید."
          icon={<FaPaperPlane />}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Contact Channels */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
            {CONTACT_CHANNELS.slice(0, 6).map((item, index) => {
              const Icon = CHANNEL_ICONS[item.iconKey];
              const isCopied = copiedId === item.id;
              return (
                <ScrollReveal key={item.id} delay={index * 0.05} direction="up">
                  <div className="flex items-center justify-between gap-3 p-4 rounded-2xl bg-white/90 dark:bg-[#0e1526]/90 border border-slate-200/80 dark:border-white/10 hover:border-emerald-500/40 transition-all duration-200 shadow-sm">
                    <a
                      href={item.href}
                      target={item.isExternal ? "_blank" : undefined}
                      rel={item.isExternal ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3.5 flex-1 min-w-0 group"
                    >
                      <span className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-lg shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                        <Icon aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          {item.labelFa}
                        </p>
                        <p
                          className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 truncate transition-colors"
                          dir="ltr"
                        >
                          {item.value}
                        </p>
                      </div>
                    </a>

                    <button
                      type="button"
                      onClick={() => handleCopy(item.copyValue, item.id)}
                      aria-label={`کپی ${item.labelFa}`}
                      title="کپی"
                      className="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:bg-emerald-500/15 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors shrink-0"
                    >
                      {isCopied ? (
                        <FaCheckCircle className="text-emerald-500 text-sm" />
                      ) : (
                        <FaCopy className="text-sm" />
                      )}
                    </button>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Direct Email Form */}
          <div className="lg:col-span-7" id="contact-form">
            <ScrollReveal delay={0.1} direction="up">
              <FormContact />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
});
