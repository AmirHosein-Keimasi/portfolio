import type { Metadata } from "next";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Providers } from "@/components/providers";
import { tanhaFont } from "@/lib/fonts";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://amirhoseinkeimasi.ir";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "وب سایت شخصی امیرحسین کیماسی | فرانت دولوپر و طراح سایت",
    template: "%s | امیرحسین کیماسی",
  },
  description: "پورتفولیو شخصی امیرحسین کیماسی - فرانت دولوپر و طراح رابط کاربری با تخصص در React، Next.js و TypeScript. مشاهده نمونه کارها و مهارت‌ها.",
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
  authors: [{ name: "امیرحسین کیماسی", url: siteUrl }],
  creator: "امیرحسین کیماسی",
  publisher: "امیرحسین کیماسی",
  applicationName: "پورتفولیو امیرحسین کیماسی",
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: siteUrl,
    siteName: "پورتفولیو امیرحسین کیماسی",
    title: "وب سایت شخصی امیرحسین کیماسی | فرانت دولوپر و طراح سایت",
    description: "پورتفولیو شخصی امیرحسین کیماسی - فرانت دولوپر و طراح رابط کاربری با تخصص در React، Next.js و TypeScript",
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
    description: "پورتفولیو شخصی امیرحسین کیماسی - فرانت دولوپر و طراح رابط کاربری",
    images: [`${siteUrl}/images/screenshot-desktop-wide.png`],
    creator: "@amir_v13",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION,
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "fa-IR": siteUrl,
    },
  },
  category: "portfolio",
  other: {
    "theme-color": "#10b981",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning className={tanhaFont.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: "امیرحسین کیماسی",
                alternateName: "Amirhossein Keimasi",
                jobTitle: "فرانت دولوپر و طراح سایت",
                description: "فرانت دولوپر و طراح رابط کاربری با تخصص در React، Next.js و TypeScript",
                url: siteUrl,
                image: `${siteUrl}/assets/1.png`,
                email: "amirhosein.kiemasi@gmail.com",
                telephone: "+989333788421",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "IR",
                },
                sameAs: [
                  "https://github.com/amirhosein-keimasi",
                  "https://www.linkedin.com/in/amirhossein-keimasi",
                  "https://www.instagram.com/amir_v13",
                  "https://www.amirhoseinkeimasi.ir",
                ],
                knowsAbout: [
                  "Frontend Development",
                  "React",
                  "Next.js",
                  "TypeScript",
                  "UI/UX Design",
                  "Web Development",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "پورتفولیو امیرحسین کیماسی",
                url: siteUrl,
                description: "پورتفولیو شخصی امیرحسین کیماسی - فرانت دولوپر و طراح رابط کاربری",
                author: {
                  "@type": "Person",
                  name: "امیرحسین کیماسی",
                },
                inLanguage: "fa-IR",
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "خانه",
                    item: siteUrl,
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "درباره من",
                    item: `${siteUrl}/about`,
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "پروژه‌ها",
                    item: `${siteUrl}/projects`,
                  },
                  {
                    "@type": "ListItem",
                    position: 4,
                    name: "رزومه",
                    item: `${siteUrl}/resume`,
                  },
                  {
                    "@type": "ListItem",
                    position: 5,
                    name: "تماس",
                    item: `${siteUrl}/contact`,
                  },
                ],
              },
            ]),
          }}
        />
      </head>
      <body className="font-tanha antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
