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
    <div className={`${bgColor} min-h-screen`}>
      <div className="p-4">
        <CustomDivider
          bColor={warningColor}
          cColor="warning"
          icon={<FaNetworkWired />}
          align="center"
          text="رزومه من"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <CustomDivider
              bColor={warningColor}
              cColor="warning"
              icon={<FaTools />}
              align="center"
              text="تجربیات"
            />
            <DevExpTimeline loading={loading} />
          </div>

          <div>
            <CustomDivider
              bColor={warningColor}
              cColor="warning"
              icon={<FaGraduationCap />}
              align="center"
              text="تحصیلات"
            />
            <DevEduTimeline loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
}

