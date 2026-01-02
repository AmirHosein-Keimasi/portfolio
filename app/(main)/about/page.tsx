import { AboutPage } from "@/components/pages/about-page";
import type { Metadata } from "next";

// SSG - Static Site Generation
export const dynamic = "force-static";
export const revalidate = false;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://amirhoseinkeimasi.ir";

export const metadata: Metadata = {
  title: "درباره من",
  description: "درباره امیرحسین کیماسی - فرانت دولوپر و طراح رابط کاربری. مهارت‌ها، تخصص‌ها و تجربیات کاری در زمینه توسعه Frontend با React، Next.js و TypeScript.",
  keywords: [
    "مهارت",
    "تخصص",
    "فرانت دولوپر",
    "React",
    "Next.js",
    "TypeScript",
    "Frontend Developer",
    "UI/UX Designer",
    "امیرحسین کیماسی",
  ],
  openGraph: {
    title: "درباره من | امیرحسین کیماسی",
    description: "مهارت‌ها و تخصص‌های امیرحسین کیماسی در زمینه توسعه Frontend",
    type: "website",
    url: `${siteUrl}/about`,
    siteName: "پورتفولیو امیرحسین کیماسی",
    locale: "fa_IR",
    images: [
      {
        url: `${siteUrl}/images/screenshot-desktop-wide.png`,
        width: 1920,
        height: 1080,
        alt: "درباره امیرحسین کیماسی",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "درباره من | امیرحسین کیماسی",
    description: "مهارت‌ها و تخصص‌های امیرحسین کیماسی",
    images: [`${siteUrl}/images/screenshot-desktop-wide.png`],
  },
  alternates: {
    canonical: `${siteUrl}/about`,
  },
};

export default function About() {
  return <AboutPage />;
}
