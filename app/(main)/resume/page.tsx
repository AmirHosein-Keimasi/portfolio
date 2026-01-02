import { ResumePage } from "@/components/pages/resume-page";
import type { Metadata } from "next";

// SSG - Static Site Generation
export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "وب سایت شخصی | رزومه من",
  description: "رزومه و سوابق کاری و تحصیلی امیرحسین کیماسی",
  keywords: ["رزومه", "سوابق کاری", "تحصیلات", "تجربه"],
  openGraph: {
    title: "رزومه من | امیرحسین کیماسی",
    description: "رزومه و سوابق کاری و تحصیلی",
    type: "website",
  },
};

export default function Resume() {
  return <ResumePage />;
}
