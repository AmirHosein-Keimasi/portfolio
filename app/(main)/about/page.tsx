import { AboutPage } from "@/components/pages/about-page";
import type { Metadata } from "next";

// SSG - Static Site Generation
export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "وب سایت شخصی | درباره من",
  description: "درباره امیرحسین کیماسی - مهارت‌ها و تخصص‌ها",
  keywords: ["مهارت", "تخصص", "فرانت دولوپر", "React", "Next.js"],
  openGraph: {
    title: "درباره من | امیرحسین کیماسی",
    description: "مهارت‌ها و تخصص‌های امیرحسین کیماسی",
    type: "website",
  },
};

export default function About() {
  return <AboutPage />;
}
