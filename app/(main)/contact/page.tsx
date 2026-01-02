import { ContactCard } from "@/components/pages/contact-card";
import type { Metadata } from "next";

// SSG - Static Site Generation
export const dynamic = "force-static";
export const revalidate = false;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://amirhoseinkeimasi.ir";

export const metadata: Metadata = {
  title: "تماس با من",
  description: "راه‌های تماس با امیرحسین کیماسی - فرانت دولوپر. ایمیل، تلگرام، لینکدین و سایر روش‌های ارتباطی.",
  keywords: [
    "تماس",
    "ارتباط",
    "ایمیل",
    "تلگرام",
    "LinkedIn",
    "GitHub",
    "فرانت دولوپر",
    "امیرحسین کیماسی",
  ],
  openGraph: {
    title: "تماس با من | امیرحسین کیماسی",
    description: "راه‌های تماس و ارتباط با امیرحسین کیماسی",
    type: "website",
    url: `${siteUrl}/contact`,
    siteName: "پورتفولیو امیرحسین کیماسی",
    locale: "fa_IR",
    images: [
      {
        url: `${siteUrl}/images/screenshot-desktop-wide.png`,
        width: 1920,
        height: 1080,
        alt: "تماس با امیرحسین کیماسی",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "تماس با من | امیرحسین کیماسی",
    description: "راه‌های تماس و ارتباط",
    images: [`${siteUrl}/images/screenshot-desktop-wide.png`],
  },
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
};

export default function Contact() {
  return <ContactCard />;
}
