import { TopHeader } from "@/components/header/top-header";
import { SiteFooter } from "@/components/footer/site-footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <TopHeader />
      <div className="pt-16 md:pt-20 flex-1">{children}</div>
      <SiteFooter />
    </div>
  );
}
