import { ContactCard } from "@/components/pages/contact-card";
import type { Metadata } from "next";

// SSG - Static Site Generation
export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "وب سایت شخصی | تماس با من",
  description: "راه‌های تماس با امیرحسین کیماسی",
  keywords: ["تماس", "ارتباط", "ایمیل", "تلگرام"],
  openGraph: {
    title: "تماس با من | امیرحسین کیماسی",
    description: "راه‌های تماس و ارتباط",
    type: "website",
  },
};

export default function Contact() {
  return <ContactCard />;
}
