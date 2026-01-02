import type { Metadata } from "next";
import { Contact } from "@/components/pages/contact";

// SSR - Server Side Rendering برای فرم
export const dynamic = "force-dynamic";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://amirhoseinkeimasi.ir";

export const metadata: Metadata = {
  title: "ارتباط با من",
  description: "فرم تماس و ارتباط با امیرحسین کیماسی - فرانت دولوپر. ارسال پیام مستقیم برای همکاری، پروژه یا سوالات.",
  keywords: [
    "فرم تماس",
    "ارتباط",
    "پیام",
    "تماس",
    "همکاری",
    "فرانت دولوپر",
    "امیرحسین کیماسی",
  ],
  openGraph: {
    title: "ارتباط با من | امیرحسین کیماسی",
    description: "فرم تماس و ارتباط با امیرحسین کیماسی",
    type: "website",
    url: `${siteUrl}/connect`,
    siteName: "پورتفولیو امیرحسین کیماسی",
    locale: "fa_IR",
    images: [
      {
        url: `${siteUrl}/images/screenshot-desktop-wide.png`,
        width: 1920,
        height: 1080,
        alt: "فرم تماس امیرحسین کیماسی",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ارتباط با من | امیرحسین کیماسی",
    description: "فرم تماس و ارتباط",
    images: [`${siteUrl}/images/screenshot-desktop-wide.png`],
  },
  alternates: {
    canonical: `${siteUrl}/connect`,
  },
  robots: {
    index: false, // فرم تماس معمولاً index نمی‌شود
    follow: true,
  },
};

export default function Connect() {
  return <Contact />;
}
