import { FaCode, FaUsers } from "react-icons/fa";
import { SectionHeader } from "@/components/common/section-header";
import { Skills } from "@/components/pages/skills";
import { SuftSkills } from "@/components/pages/suft-skills";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative z-10 scroll-mt-20 md:scroll-mt-24 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200/70 dark:border-white/5"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        <div>
          <SectionHeader
            eyebrow="تخصص‌های فنی"
            title="مهارت‌ها و تکنولوژی‌های اصلی"
            subtitle="مجموعه ابزارها و فریمورک‌هایی که روزانه برای ساخت رابط‌های کاربری مقیاس‌پذیر، سریع، امن و Type-Safe استفاده می‌کنم."
            icon={<FaCode />}
          />
          <Skills />
        </div>

        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-lg">
              <FaUsers aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                مهارت‌های نرم و تعامل تیمی
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                رویکرد حرفه‌ای در رهبری، مشارکت تیمی، بازخوردپذیری و حل مسئله.
              </p>
            </div>
          </div>
          <SuftSkills />
        </div>
      </div>
    </section>
  );
}
