import type { Metadata } from "next";
import { ProjectsPage } from "@/components/pages/projects-page";

export const dynamic = "force-static";
export const revalidate = 86400;

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.amirhoseinkeimasi.ir";

export const metadata: Metadata = {
  title: "پروژه‌های من",
  description:
    "نمونه کارها و محصولات توسعه‌داده‌شده توسط امیرحسین کیماسی: داناجو، CastoFly، اپلیکیشن اجاره خودرو Caremon، Gym 24 و پروژه‌های متن‌باز React و Next.js.",
  alternates: {
    canonical: `${siteUrl}/projects`,
  },
};

export default function Projects() {
  return <ProjectsPage />;
}
