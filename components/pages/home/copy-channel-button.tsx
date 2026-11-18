"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { FaCopy, FaCheckCircle } from "react-icons/fa";

interface CopyChannelButtonProps {
  value: string;
}

export function CopyChannelButton({ value }: CopyChannelButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      toast.success("در کلیپ‌بورد کپی شد!");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("خطا در کپی کردن");
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-emerald-500 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors shrink-0"
      aria-label="کپی در کلیپ‌بورد"
    >
      {copied ? (
        <FaCheckCircle className="text-emerald-500 text-xs" />
      ) : (
        <FaCopy className="text-xs" />
      )}
    </button>
  );
}
