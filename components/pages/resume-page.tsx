"use client";

import { useState, useEffect } from "react";
import {
  FaNetworkWired,
  FaTools,
  FaGraduationCap,
} from "react-icons/fa";
import { CustomDivider } from "@/components/common/custom-divider";
import { DevEduTimeline } from "@/components/pages/dev-edu-timeline";
import { DevExpTimeline } from "@/components/pages/dev-exp-timeline";
import { useApp } from "@/lib/context/app-context";
import { PremiumBackground } from "@/components/animations/premium-background";

export function ResumePage() {
  const [loading, setLoading] = useState(false);
  const { mode } = useApp();
  const bgColor = mode === "dark" ? "bg-dark-primary-main" : "bg-light-primary-main";
  const warningColor = mode === "dark" ? "border-dark-warning" : "border-light-warning";

  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <div className={`${bgColor} min-h-screen py-12 md:py-16 relative`}>
      <PremiumBackground />
      <div className="p-4 md:p-8 max-w-7xl mx-auto relative z-10">
        <div className="mb-12">
          <CustomDivider
            bColor={warningColor}
            cColor="warning"
            icon={<FaNetworkWired />}
            align="center"
            text="رزومه من"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* بخش تجربیات */}
          <div className="space-y-6">
            <div className="mb-8">
              <CustomDivider
                bColor={warningColor}
                cColor="warning"
                icon={<FaTools />}
                align="center"
                text="تجربیات"
              />
            </div>
            <DevExpTimeline loading={loading} />
          </div>

          {/* بخش تحصیلات */}
          <div className="space-y-6">
            <div className="mb-8">
              <CustomDivider
                bColor={warningColor}
                cColor="warning"
                icon={<FaGraduationCap />}
                align="center"
                text="تحصیلات"
              />
            </div>
            <DevEduTimeline loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
}

