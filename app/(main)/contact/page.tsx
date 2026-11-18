import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/contact-page";

export const dynamic = "force-static";
export const revalidate = false;

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.amirhoseinkeimasi.ir";

export const metadata: Metadata = {
  title: "تماس با من",
  description:
    "راه‌های ارتباط با امیرحسین کیماسی — ایمیل، تلفن، لینکدین، گیت‌هاب، تلگرام و فرم ارسال پیام مستقیم برای همکاری و پروژه‌های فرانت‌اند.",
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
};

export default function Contact() {
  return <ContactPage />;
}
