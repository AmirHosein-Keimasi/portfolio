import type { Metadata } from "next";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Providers } from "@/components/providers";
import { tanhaFont } from "@/lib/fonts";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://amirhoseinkeimasi.ir",
  ),
  title: {
    default: "وب سایت شخصی امیرحسین کیماسی",
    template: "%s | امیرحسین کیماسی",
  },
  description: "پورتفولیو شخصی امیرحسین کیماسی - فرانت دولوپر و طراح سایت",
  keywords: [
    "پورتفولیو",
    "فرانت دولوپر",
    "طراح سایت",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "امیرحسین کیماسی" }],
  creator: "امیرحسین کیماسی",
  publisher: "امیرحسین کیماسی",
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "/",
    siteName: "پورتفولیو امیرحسین کیماسی",
    title: "وب سایت شخصی امیرحسین کیماسی",
    description: "پورتفولیو شخصی امیرحسین کیماسی - فرانت دولوپر و طراح سایت",
    images: [
      {
        url: "/images/screenshot-desktop-wide.png",
        width: 1920,
        height: 1080,
        alt: "پورتفولیو امیرحسین کیماسی",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "وب سایت شخصی امیرحسین کیماسی",
    description: "پورتفولیو شخصی امیرحسین کیماسی - فرانت دولوپر و طراح سایت",
    images: ["/images/screenshot-desktop-wide.png"],
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
    canonical: "/",
  },
  category: "portfolio",
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "امیرحسین کیماسی",
              jobTitle: "فرانت دولوپر و طراح سایت",
              url: process.env.NEXT_PUBLIC_SITE_URL || "https://amirhoseinkeimasi.ir",
              sameAs: [
                "https://github.com/amirhosein-keimasi",
                "https://www.linkedin.com/in/amirhossein-keimasi",
                "https://www.instagram.com/amir_v13",
              ],
            }),
          }}
        />
      </head>
      <body className="font-tanha antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
