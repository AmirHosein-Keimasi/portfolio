"use client";

import { useState } from "react";
import { useFormik } from "formik";
import { contactValidationSchema } from "@/lib/validation/contact-validation";
import {
  FaEnvelope,
  FaUser,
  FaFileAlt,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import { useApp } from "@/lib/context/app-context";

export function FormContact() {
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInputNames = {
    fullname: "",
    email: "",
    subject: "",
    message: "",
  };

  const formik = useFormik({
    initialValues: contactInputNames,
    onSubmit: async (values, { resetForm }) => {
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
          setSubmitStatus({
            type: "success",
            message: data.message || "پیام شما با موفقیت ارسال شد!",
          });
          resetForm();
        } else {
          setSubmitStatus({
            type: "error",
            message: data.error || "خطایی در ارسال پیام رخ داد.",
          });
        }
      } catch (error) {
        setSubmitStatus({
          type: "error",
          message: "خطایی در ارسال پیام رخ داد. لطفا دوباره تلاش کنید.",
        });
      } finally {
        setIsSubmitting(false);
      }
    },
    validationSchema: contactValidationSchema,
  });

  const { mode } = useApp();
  const bgColor = mode === "dark" ? "bg-dark-primary-main" : "bg-light-primary-main";
  const inputBg = mode === "dark" ? "bg-gray-700" : "bg-white";
  const inputText = mode === "dark" ? "text-white" : "text-gray-900";
  const borderColor = mode === "dark" ? "border-gray-600" : "border-gray-300";
  const errorColor = "border-red-500";
  const buttonColor = mode === "dark" ? "bg-dark-success hover:bg-dark-success/90" : "bg-light-success hover:bg-light-success/90";

  return (
    <form autoComplete="off" onSubmit={formik.handleSubmit} className="w-full">
      <div className={`${bgColor} p-4`}>
        {/* Status Messages */}
        {submitStatus.type && (
          <div
            className={`
              mb-4 p-4 rounded-lg flex items-center gap-2
              ${
                submitStatus.type === "success"
                  ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
                  : "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200"
              }
            `}
            role="alert"
            aria-live="polite"
          >
            {submitStatus.type === "success" ? (
              <FaCheckCircle className="text-lg" />
            ) : (
              <FaExclamationCircle className="text-lg" />
            )}
            <span>{submitStatus.message}</span>
          </div>
        )}

        <div className="w-full" dir="ltr">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullname" className="block text-sm font-medium mb-1 text-right">
                نام و نام خانوادگی
              </label>
              <div className="relative">
                <input
                  id="fullname"
                  type="text"
                  name="fullname"
                  value={formik.values?.fullname || ""}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={isSubmitting}
                  aria-invalid={formik.touched.fullname && formik.errors.fullname ? "true" : "false"}
                  aria-describedby={formik.touched.fullname && formik.errors.fullname ? "fullname-error" : undefined}
                  className={`
                    w-full px-3 py-2 pr-10 rounded-lg border
                    ${inputBg} ${inputText}
                    ${formik.touched.fullname && formik.errors.fullname ? errorColor : borderColor}
                    focus:outline-none focus:ring-2 focus:ring-yellow-500
                    disabled:opacity-50 disabled:cursor-not-allowed
                  `}
                  placeholder="نام و نام خانوادگی"
                />
                <FaUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" aria-hidden="true" />
              </div>
              {formik.touched.fullname && formik.errors.fullname && (
                <p id="fullname-error" className="text-red-500 text-xs mt-1 text-right" role="alert">
                  {formik.errors.fullname}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1 text-right">
                آدرس ایمیل
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formik.values?.email || ""}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={isSubmitting}
                  aria-invalid={formik.touched.email && formik.errors.email ? "true" : "false"}
                  aria-describedby={formik.touched.email && formik.errors.email ? "email-error" : undefined}
                  className={`
                    w-full px-3 py-2 pr-10 rounded-lg border
                    ${inputBg} ${inputText}
                    ${formik.touched.email && formik.errors.email ? errorColor : borderColor}
                    focus:outline-none focus:ring-2 focus:ring-yellow-500
                    disabled:opacity-50 disabled:cursor-not-allowed
                  `}
                  placeholder="آدرس ایمیل"
                />
                <FaEnvelope className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" aria-hidden="true" />
              </div>
              {formik.touched.email && formik.errors.email && (
                <p id="email-error" className="text-red-500 text-xs mt-1 text-right" role="alert">
                  {formik.errors.email}
                </p>
              )}
            </div>
            <div className="md:col-span-2">
              <label htmlFor="subject" className="block text-sm font-medium mb-1 text-right">
                عنوان
              </label>
              <div className="relative">
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formik.values?.subject || ""}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={isSubmitting}
                  aria-invalid={formik.touched.subject && formik.errors.subject ? "true" : "false"}
                  aria-describedby={formik.touched.subject && formik.errors.subject ? "subject-error" : undefined}
                  className={`
                    w-full px-3 py-2 pr-10 rounded-lg border
                    ${inputBg} ${inputText}
                    ${formik.touched.subject && formik.errors.subject ? errorColor : borderColor}
                    focus:outline-none focus:ring-2 focus:ring-yellow-500
                    disabled:opacity-50 disabled:cursor-not-allowed
                  `}
                  placeholder="عنوان"
                />
                <FaFileAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" aria-hidden="true" />
              </div>
              {formik.touched.subject && formik.errors.subject && (
                <p id="subject-error" className="text-red-500 text-xs mt-1 text-right" role="alert">
                  {formik.errors.subject}
                </p>
              )}
            </div>
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium mb-1 text-right">
                متن پیام
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formik.values?.message || ""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={isSubmitting}
                aria-invalid={formik.touched.message && formik.errors.message ? "true" : "false"}
                aria-describedby={formik.touched.message && formik.errors.message ? "message-error" : undefined}
                className={`
                  w-full px-3 py-2 rounded-lg border
                  ${inputBg} ${inputText}
                  ${formik.touched.message && formik.errors.message ? errorColor : borderColor}
                  focus:outline-none focus:ring-2 focus:ring-yellow-500
                  resize-none
                  disabled:opacity-50 disabled:cursor-not-allowed
                `}
                placeholder="متن پیام"
              />
              {formik.touched.message && formik.errors.message && (
                <p id="message-error" className="text-red-500 text-xs mt-1 text-right" role="alert">
                  {formik.errors.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={`${bgColor} flex items-end flex-col p-4`}>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`
            ${buttonColor}
            text-white font-medium py-2 px-6 rounded-lg
            transition-colors duration-200 mt-2 w-full
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? "در حال ارسال..." : "ارسال کن"}
        </button>
      </div>
    </form>
  );
}
