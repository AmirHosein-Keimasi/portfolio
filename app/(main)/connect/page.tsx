import type { Metadata } from "next";
import { Contact } from "@/components/pages/contact";

export const dynamic = "force-dynamic";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.amirhoseinkeimasi.ir";

export const metadata: Metadata = {
  title: "ارتباط مستقیم",
  description:
    "فرم ارسال پیام مستقیم به امیرحسین کیماسی برای پیشنهاد همکاری، مشاوره فنی یا اجرای پروژه‌های وب.",
  alternates: {
    canonical: `${siteUrl}/connect`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function Connect() {
  return <Contact />;
}
