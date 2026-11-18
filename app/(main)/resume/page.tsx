import type { Metadata } from "next";
import { ResumePage } from "@/components/pages/resume-page";

export const dynamic = "force-static";
export const revalidate = false;

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.amirhoseinkeimasi.ir";

export const metadata: Metadata = {
  title: "رزومه من",
  description:
    "رزومه کامل امیرحسین کیماسی: سابقه کار در شبکه اجتماعی داناجو و CastoFly، کارشناسی مهندسی کامپیوتر دانشگاه گناباد، رتبه دوم مسابقات برنامه‌نویسی GCPC و دانلود نسخه PDF.",
  alternates: {
    canonical: `${siteUrl}/resume`,
  },
};

export default function Resume() {
  return <ResumePage />;
}
