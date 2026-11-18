import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";
import { vazirFont, tanhaFont } from "@/lib/fonts";
import { PROFILE } from "@/lib/data/portfolio";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.amirhoseinkeimasi.ir";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#070b14" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "امیرحسین کیماسی | توسعه‌دهنده فرانت‌اند (React & Next.js)",
    template: "%s | امیرحسین کیماسی",
  },
  description:
    "پورتفولیو و رزومه شخصی امیرحسین کیماسی — توسعه‌دهنده فرانت‌اند با بیش از ۳.۵ سال تجربه در Next.js، React و TypeScript. سابقه کار در داناجو و CastoFly.",
  keywords: [
    "امیرحسین کیماسی",
    "امیر حسین کیماسی",
    "Amirhossein Keimasi",
    "Amirhosein Keimasi",
    "توسعه‌دهنده فرانت‌اند",
    "توسعه دهنده فرانت اند",
    "مهندس نرم‌افزار",
    "برنامه‌نویس ری‌اکت",
    "برنامه‌نویس نکست",
    "Frontend Developer",
    "Senior Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Zustand",
    "TanStack Query",
    "SSR & SEO",
    "داناجو",
    "Danajou",
    "CastoFly",
    "پورتفولیو امیرحسین کیماسی",
    "رزومه امیرحسین کیماسی",
  ],
  authors: [{ name: PROFILE.fullName, url: siteUrl }],
  creator: PROFILE.fullName,
  publisher: PROFILE.fullName,
  applicationName: "پورتفولیو امیرحسین کیماسی",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/images/192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/images/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: siteUrl,
    siteName: "پورتفولیو امیرحسین کیماسی",
    title: "امیرحسین کیماسی | توسعه‌دهنده فرانت‌اند (React & Next.js)",
    description:
      "توسعه‌دهنده Frontend با بیش از ۳.۵ سال تجربه در طراحی و توسعه اپلیکیشن‌های وب مقیاس‌پذیر با Next.js، React و TypeScript.",
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
    title: "امیرحسین کیماسی | توسعه‌دهنده فرانت‌اند (React & Next.js)",
    description:
      "توسعه‌دهنده Frontend با بیش از ۳.۵ سال تجربه در Next.js، React و TypeScript.",
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
};

const themeInitScript = `
(function() {
  try {
    var raw = localStorage.getItem('theme');
    var theme = raw ? JSON.parse(raw) : 'dark';
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: PROFILE.fullName,
      alternateName: PROFILE.fullNameEn,
      jobTitle: "Frontend Developer",
      description: PROFILE.summaryShort,
      url: siteUrl,
      image: `${siteUrl}/assets/1.png`,
      email: PROFILE.email,
      telephone: "+989333788421",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Isfahan",
        addressCountry: "IR",
      },
      worksFor: {
        "@type": "Organization",
        name: "Danajou",
        url: "https://danajou.com",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University of Gonabad",
      },
      sameAs: [
        PROFILE.github,
        PROFILE.linkedin,
        PROFILE.instagram,
        PROFILE.website,
      ],
      knowsAbout: [
        "Frontend Development",
        "Next.js",
        "React.js",
        "TypeScript",
        "JavaScript",
        "Zustand",
        "Redux Toolkit",
        "TanStack Query",
        "Tailwind CSS",
        "SSR & SEO",
        "Modular Architecture",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "پورتفولیو امیرحسین کیماسی",
      url: siteUrl,
      description: PROFILE.summaryShort,
      author: {
        "@type": "Person",
        name: PROFILE.fullName,
      },
      inLanguage: "fa-IR",
    },
  ];

  return (
    <html
      lang="fa"
      dir="rtl"
      suppressHydrationWarning
      className={`${vazirFont.variable} ${tanhaFont.variable} dark`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
