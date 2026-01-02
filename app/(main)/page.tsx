import type { Metadata } from "next";
import { HomePage } from "@/components/pages/home-page";

// SSG - Static Site Generation
export const dynamic = "force-static";
export const revalidate = false;

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://amirhoseinkeimasi.ir";

export const metadata: Metadata = {
  title: "وب سایت شخصی امیرحسین کیماسی",
  description:
    "پورتفولیو شخصی امیرحسین کیماسی - فرانت دولوپر و طراح رابط کاربری با تخصص در React، Next.js و TypeScript. مشاهده نمونه کارها، مهارت‌ها و رزومه.",
  keywords: [
    "پورتفولیو",
    "فرانت دولوپر",
    "طراح سایت",
    "React",
    "Next.js",
    "TypeScript",
    "Frontend Developer",
    "Web Developer",
    "UI/UX Designer",
    "امیرحسین کیماسی",
  ],
  openGraph: {
    title: "وب سایت شخصی امیرحسین کیماسی | فرانت دولوپر و طراح سایت",
    description:
      "پورتفولیو شخصی امیرحسین کیماسی - فرانت دولوپر و طراح رابط کاربری با تخصص در React، Next.js و TypeScript",
    type: "website",
    url: siteUrl,
    siteName: "پورتفولیو امیرحسین کیماسی",
    locale: "fa_IR",
    images: [
      {
        url: `${siteUrl}/images/screenshot-desktop-wide.png`,
        width: 1920,
        height: 1080,
        alt: "پورتفولیو امیرحسین کیماسی",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "وب سایت شخصی امیرحسین کیماسی | فرانت دولوپر و طراح سایت",
    description:
      "پورتفولیو شخصی امیرحسین کیماسی - فرانت دولوپر و طراح رابط کاربری",
    images: [`${siteUrl}/images/screenshot-desktop-wide.png`],
    creator: "@amir_v13",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function Home() {
  return <HomePage />;
}
