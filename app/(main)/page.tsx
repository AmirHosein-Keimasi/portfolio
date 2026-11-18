import type { Metadata } from "next";
import { HomePage } from "@/components/pages/home-page";

export const dynamic = "force-static";
export const revalidate = false;

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.amirhoseinkeimasi.ir";

export const metadata: Metadata = {
  title: "امیرحسین کیماسی | توسعه‌دهنده فرانت‌اند (React & Next.js)",
  description:
    "پورتفولیو رسمی امیرحسین کیماسی — توسعه‌دهنده فرانت‌اند با بیش از ۳.۵ سال تجربه در Next.js، React و TypeScript. مشاهده سوابق کاری، مهارت‌ها، پروژه‌ها و دانلود رزومه.",
  alternates: {
    canonical: siteUrl,
  },
};

export default function Home() {
  return <HomePage />;
}
