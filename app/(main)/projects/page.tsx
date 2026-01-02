import { CommentPage } from "@/components/pages/comment-page";
import type { Metadata } from "next";

// ISR - Incremental Static Regeneration (هر 24 ساعت یکبار revalidate)
export const dynamic = "force-static";
export const revalidate = 86400; // 24 hours

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://amirhoseinkeimasi.ir";

export const metadata: Metadata = {
  title: "پروژه های من",
  description:
    "نمونه کارها و پروژه‌های انجام شده توسط امیرحسین کیماسی - فرانت دولوپر. مشاهده پروژه‌های React، Next.js و TypeScript با لینک دمو و کد منبع.",
  keywords: [
    "پروژه",
    "نمونه کار",
    "پورتفولیو",
    "React",
    "Next.js",
    "TypeScript",
    "Frontend Projects",
    "Web Development",
    "امیرحسین کیماسی",
  ],
  openGraph: {
    title: "پروژه های من | امیرحسین کیماسی",
    description:
      "نمونه کارها و پروژه‌های انجام شده با React، Next.js و TypeScript",
    type: "website",
    url: `${siteUrl}/projects`,
    siteName: "پورتفولیو امیرحسین کیماسی",
    locale: "fa_IR",
    images: [
      {
        url: `${siteUrl}/images/screenshot-desktop-wide.png`,
        width: 1920,
        height: 1080,
        alt: "پروژه‌های امیرحسین کیماسی",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "پروژه های من | امیرحسین کیماسی",
    description: "نمونه کارها و پروژه‌های انجام شده",
    images: [`${siteUrl}/images/screenshot-desktop-wide.png`],
  },
  alternates: {
    canonical: `${siteUrl}/projects`,
  },
};

export default function Projects() {
  return <CommentPage />;
}
