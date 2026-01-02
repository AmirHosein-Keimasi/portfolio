"use client";

import { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import Image from "next/image";
import { CustomDivider } from "@/components/common/custom-divider";
import { FormContact } from "./form-contact";
import { SocialMediaIcons } from "@/components/social-media-icons";
import { useApp } from "@/lib/context/app-context";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const { mode } = useApp();
  const bgColor = mode === "dark" ? "bg-dark-primary-main" : "bg-light-primary-main";
  const textColor = mode === "dark" ? "text-dark-text-main" : "text-light-text-main";
  const borderColor = mode === "dark" ? "border-dark-text-main" : "border-light-text-main";

  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <div className={`min-h-screen ${bgColor} flex flex-col`}>
      <div className="p-4">
        <CustomDivider
          bColor={borderColor}
          cColor="warning"
          icon={<FaUserCircle />}
          align="center"
          text="ارتباط با من "
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4">
          <div
            className={`
              col-span-12 md:col-span-8
              transition-all duration-300
              ${loading ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
            style={{ transitionDelay: loading ? "200ms" : "0ms" }}
          >
            <div className="flex justify-center items-center">
              <FormContact />
            </div>
          </div>
          <div
            className={`
              col-span-0 md:col-span-4
              text-center
              bg-cover bg-center bg-no-repeat
              mt-5
              transition-all duration-300
              ${loading ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
            style={{
              backgroundImage: `url(/assets/map.svg)`,
              transitionDelay: loading ? "200ms" : "0ms",
            }}
          >
            <h6 className={`${textColor} font-vazir mt-2 hidden md:block text-lg`}>
              بیا در مورد همه چیز باهم صحبت کنیم
            </h6>
            <p className={`${textColor} mt-2 hidden md:block`}>
              👋{" "}
              <a
                href="mailto:amirhosein.kiemasi@gmail.com"
                className="text-red-500 hover:underline"
              >
                ایمیل
              </a>{" "}
              بزن به من
            </p>
            <SocialMediaIcons textAlign="center" />
          </div>
        </div>
      </div>
    </div>
  );
}

