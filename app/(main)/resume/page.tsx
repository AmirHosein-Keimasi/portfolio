import { ResumePage } from "@/components/pages/resume-page";
import type { Metadata } from "next";

// SSG - Static Site Generation
export const dynamic = "force-static";
export const revalidate = false;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://amirhoseinkeimasi.ir";

export const metadata: Metadata = {
  title: "رزومه من",
  description: "رزومه و سوابق کاری و تحصیلی امیرحسین کیماسی - فرانت دولوپر. تجربیات کاری، تحصیلات و مهارت‌های تخصصی در زمینه توسعه Frontend.",
  keywords: [
    "رزومه",
    "سوابق کاری",
    "تحصیلات",
    "تجربه",
    "Frontend Developer",
    "React Developer",
    "امیرحسین کیماسی",
  ],
  openGraph: {
    title: "رزومه من | امیرحسین کیماسی",
    description: "رزومه و سوابق کاری و تحصیلی امیرحسین کیماسی",
    type: "website",
    url: `${siteUrl}/resume`,
    siteName: "پورتفولیو امیرحسین کیماسی",
    locale: "fa_IR",
    images: [
      {
        url: `${siteUrl}/images/screenshot-desktop-wide.png`,
        width: 1920,
        height: 1080,
        alt: "رزومه امیرحسین کیماسی",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "رزومه من | امیرحسین کیماسی",
    description: "رزومه و سوابق کاری و تحصیلی",
    images: [`${siteUrl}/images/screenshot-desktop-wide.png`],
  },
  alternates: {
    canonical: `${siteUrl}/resume`,
  },
};

export default function Resume() {
  return <ResumePage />;
}
