"use client";

import { FaTools } from "react-icons/fa";
import { devEx } from "@/lib/constants/dev-skills";
import { useApp } from "@/lib/context/app-context";

interface DevExpTimelineProps {
  loading: boolean;
}

export function DevExpTimeline({ loading }: DevExpTimelineProps) {
  const { mode } = useApp();
  const textColor = mode === "dark" ? "text-dark-text-main" : "text-light-text-main";
  const borderColor = mode === "dark" ? "border-yellow-600" : "border-yellow-500";

  return (
    <div className="relative" dir="ltr">
      {devEx.map((item, index) => (
        <div
          key={index}
          className={`
            flex items-start gap-4 mb-8
            transition-all duration-300
            ${loading ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
          style={{ transitionDelay: loading ? `${index + 3}99ms` : "0ms" }}
        >
          <div className="flex flex-col items-center">
            <div className={`
              w-12 h-12 rounded-full border-2 ${borderColor}
              flex items-center justify-center
              bg-yellow-100 dark:bg-yellow-900/20
            `}>
              <FaTools className="text-yellow-600 dark:text-yellow-500 text-xl" />
            </div>
            {index !== devEx.length - 1 && (
              <div className={`w-0.5 h-16 ${borderColor} mt-2`}></div>
            )}
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-500 mb-1">{item.year}</p>
            <p className={`text-base font-medium ${textColor} mb-1`}>{item.cert}</p>
            <p className={`text-sm ${textColor}`}>{item.major}</p>
            <a
              href={item.place}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm ${textColor} hover:underline`}
            >
              {item.place}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

