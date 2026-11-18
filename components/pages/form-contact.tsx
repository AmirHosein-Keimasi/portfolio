"use client";

import { useState, useCallback, memo } from "react";
import { useFormik, FormikHelpers } from "formik";
import toast from "react-hot-toast";
import {
  FaEnvelope,
  FaUser,
  FaTag,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import {
  contactValidationSchema,
  type ContactFormValues,
} from "@/lib/validation/contact-validation";

const initialValues: ContactFormValues = {
  fullname: "",
  email: "",
  subject: "",
  message: "",
  website: "",
};

export const FormContact = memo(function FormContact() {
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback(
    async (
      values: ContactFormValues,
      { resetForm }: FormikHelpers<ContactFormValues>
    ) => {
      setIsSubmitting(true);
      setSubmitStatus({ type: null, message: "" });

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        const data = await response.json();

        if (response.ok) {
          const msg =
            data.message || "پیام شما با موفقیت ارسال شد! به‌زودی پاسخ می‌دهم.";
          toast.success(msg);
          setSubmitStatus({ type: "success", message: msg });
          resetForm();
        } else {
          const errMsg = data.error || "خطایی در ارسال پیام رخ داد.";
          toast.error(errMsg);
          setSubmitStatus({ type: "error", message: errMsg });
        }
      } catch {
        const errMsg =
          "اتصال به سرور برقرار نشد. لطفاً دوباره تلاش کنید یا مستقیماً ایمیل بزنید.";
        toast.error(errMsg);
        setSubmitStatus({ type: "error", message: errMsg });
      } finally {
        setIsSubmitting(false);
      }
    },
    []
  );

  const formik = useFormik<ContactFormValues>({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: contactValidationSchema,
  });

  const inputBaseClass =
    "w-full rounded-xl border bg-slate-50/80 dark:bg-[#070b14]/80 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 disabled:opacity-50";

  return (
    <form
      autoComplete="off"
      onSubmit={formik.handleSubmit}
      className="w-full rounded-2xl p-6 sm:p-8 bg-white/90 dark:bg-[#0e1526]/90 border border-slate-200/80 dark:border-white/10 shadow-sm backdrop-blur-sm"
      dir="rtl"
      noValidate
    >
      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          ارسال پیام مستقیم
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          پروژه‌ای در ذهن دارید یا قصد همکاری دارید؟ فرم زیر را پر کنید تا پیام شما مستقیماً به ایمیل من ارسال شود.
        </p>
      </div>

      {/* Status Alert */}
      {submitStatus.type && (
        <div
          className={`mb-6 p-4 rounded-xl flex items-start gap-3 text-sm border ${
            submitStatus.type === "success"
              ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300"
              : "bg-red-500/10 border-red-500/30 text-red-700 dark:text-red-300"
          }`}
          role="alert"
          aria-live="polite"
        >
          {submitStatus.type === "success" ? (
            <FaCheckCircle className="text-lg mt-0.5 shrink-0" />
          ) : (
            <FaExclamationCircle className="text-lg mt-0.5 shrink-0" />
          )}
          <span>{submitStatus.message}</span>
        </div>
      )}

      {/* Hidden honeypot field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={formik.values.website || ""}
          onChange={formik.handleChange}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Fullname */}
        <div>
          <label
            htmlFor="fullname"
            className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
          >
            نام و نام خانوادگی
          </label>
          <div className="relative">
            <FaUser
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none"
              aria-hidden="true"
            />
            <input
              id="fullname"
              name="fullname"
              type="text"
              placeholder="مثلاً: علی محمدی"
              value={formik.values.fullname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={isSubmitting}
              className={`${inputBaseClass} pr-10 pl-3.5 h-11 ${
                formik.touched.fullname && formik.errors.fullname
                  ? "border-red-500"
                  : "border-slate-200 dark:border-white/10"
              }`}
            />
          </div>
          {formik.touched.fullname && formik.errors.fullname && (
            <p className="text-red-500 text-xs mt-1.5" role="alert">
              {formik.errors.fullname}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
          >
            آدرس ایمیل
          </label>
          <div className="relative">
            <FaEnvelope
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none"
              aria-hidden="true"
            />
            <input
              id="email"
              name="email"
              type="email"
              dir="ltr"
              placeholder="you@example.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={isSubmitting}
              className={`${inputBaseClass} pr-10 pl-3.5 h-11 text-left ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : "border-slate-200 dark:border-white/10"
              }`}
            />
          </div>
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-xs mt-1.5" role="alert">
              {formik.errors.email}
            </p>
          )}
        </div>

        {/* Subject */}
        <div className="sm:col-span-2">
          <label
            htmlFor="subject"
            className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
          >
            موضوع پیام
          </label>
          <div className="relative">
            <FaTag
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none"
              aria-hidden="true"
            />
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="مثلاً: پیشنهاد همکاری فرانت‌اند / مشاوره پروژه"
              value={formik.values.subject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={isSubmitting}
              className={`${inputBaseClass} pr-10 pl-3.5 h-11 ${
                formik.touched.subject && formik.errors.subject
                  ? "border-red-500"
                  : "border-slate-200 dark:border-white/10"
              }`}
            />
          </div>
          {formik.touched.subject && formik.errors.subject && (
            <p className="text-red-500 text-xs mt-1.5" role="alert">
              {formik.errors.subject}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
          >
            متن پیام
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="جزئیات پیام یا پروژه خود را بنویسید..."
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={isSubmitting}
            className={`${inputBaseClass} p-3.5 resize-y min-h-[130px] ${
              formik.touched.message && formik.errors.message
                ? "border-red-500"
                : "border-slate-200 dark:border-white/10"
            }`}
          />
          {formik.touched.message && formik.errors.message && (
            <p className="text-red-500 text-xs mt-1.5" role="alert">
              {formik.errors.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
        className="mt-6 w-full inline-flex items-center justify-center gap-2.5 h-12 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-md shadow-emerald-600/20 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            <span>در حال ارسال پیام...</span>
          </>
        ) : (
          <>
            <FaPaperPlane className="text-xs" aria-hidden="true" />
            <span>ارسال پیام</span>
          </>
        )}
      </button>
    </form>
  );
});
