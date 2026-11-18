import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/about-page";

export const dynamic = "force-static";
export const revalidate = false;

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.amirhoseinkeimasi.ir";

export const metadata: Metadata = {
  title: "درباره من",
  description:
    "درباره امیرحسین کیماسی — توسعه‌دهنده فرانت‌اند با بیش از ۳.۵ سال تجربه در Next.js، React، TypeScript، معماری ماژولار، SSR/SEO و منتورینگ فنی.",
  alternates: {
    canonical: `${siteUrl}/about`,
  },
};

export default function About() {
  return <AboutPage />;
}
