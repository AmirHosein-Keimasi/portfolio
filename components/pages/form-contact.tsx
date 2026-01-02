"use client";

import { useState, useMemo, useCallback, memo } from "react";
import { useFormik } from "formik";
import { contactValidationSchema } from "@/lib/validation/contact-validation";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaUser,
  FaFileAlt,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import { useApp } from "@/lib/context/app-context";

export const FormContact = memo(function FormContact() {
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

  const { mode } = useApp();

  const styles = useMemo(
    () => ({
      bgColor:
        mode === "dark" ? "bg-dark-primary-main" : "bg-light-primary-main",
      inputBg: mode === "dark" ? "bg-gray-700" : "bg-white",
      inputText: mode === "dark" ? "text-white" : "text-gray-900",
      borderColor: mode === "dark" ? "border-gray-600" : "border-gray-300",
      errorColor: "border-red-500",
      buttonColor:
        mode === "dark"
          ? "bg-dark-success hover:bg-dark-success/90"
          : "bg-light-success hover:bg-light-success/90",
    }),
    [mode],
  );

  const handleSubmit = useCallback(
    async (values: typeof contactInputNames, { resetForm }: any) => {
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
          toast.success(data.message || "پیام شما با موفقیت ارسال شد!");
          resetForm();
          setSubmitStatus({ type: null, message: "" });
        } else {
          toast.error(data.error || "خطایی در ارسال پیام رخ داد.");
          setSubmitStatus({
            type: "error",
            message: data.error || "خطایی در ارسال پیام رخ داد.",
          });
        }
      } catch (error) {
        toast.error("خطایی در ارسال پیام رخ داد. لطفا دوباره تلاش کنید.");
        setSubmitStatus({
          type: "error",
          message: "خطایی در ارسال پیام رخ داد. لطفا دوباره تلاش کنید.",
        });
      } finally {
        setIsSubmitting(false);
      }
    },
    [],
  );

  const formik = useFormik({
    initialValues: contactInputNames,
    onSubmit: handleSubmit,
    validationSchema: contactValidationSchema,
  });

  return (
    <motion.form
      autoComplete="off"
      onSubmit={formik.handleSubmit}
      className="w-full"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={`${styles.bgColor} p-4 rounded-2xl shadow-lg`}
        whileHover={{
          boxShadow:
            mode === "dark"
              ? "0 20px 40px rgba(16, 185, 129, 0.2)"
              : "0 20px 40px rgba(16, 185, 129, 0.15)",
        }}
        transition={{ duration: 0.3 }}
      >
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
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <label
                htmlFor="fullname"
                className="block text-sm font-medium mb-1 text-right"
              >
                نام و نام خانوادگی
              </label>
              <div className="relative">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  id="fullname"
                  type="text"
                  name="fullname"
                  value={formik.values?.fullname || ""}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={isSubmitting}
                  aria-invalid={
                    formik.touched.fullname && formik.errors.fullname
                      ? "true"
                      : "false"
                  }
                  aria-describedby={
                    formik.touched.fullname && formik.errors.fullname
                      ? "fullname-error"
                      : undefined
                  }
                  className={`
                    w-full px-3 py-2 pr-10 rounded-lg border
                    ${styles.inputBg} ${styles.inputText}
                    ${formik.touched.fullname && formik.errors.fullname ? styles.errorColor : styles.borderColor}
                    focus:outline-none focus:ring-2 focus:ring-yellow-500
                    disabled:opacity-50 disabled:cursor-not-allowed
                  `}
                  placeholder="نام و نام خانوادگی"
                />
                <FaUser
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              {formik.touched.fullname && formik.errors.fullname && (
                <motion.p
                  id="fullname-error"
                  className="text-red-500 text-xs mt-1 text-right"
                  role="alert"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {formik.errors.fullname}
                </motion.p>
              )}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-1 text-right"
              >
                آدرس ایمیل
              </label>
              <div className="relative">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  id="email"
                  type="email"
                  name="email"
                  value={formik.values?.email || ""}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={isSubmitting}
                  aria-invalid={
                    formik.touched.email && formik.errors.email
                      ? "true"
                      : "false"
                  }
                  aria-describedby={
                    formik.touched.email && formik.errors.email
                      ? "email-error"
                      : undefined
                  }
                  className={`
                    w-full px-3 py-2 pr-10 rounded-lg border
                    ${styles.inputBg} ${styles.inputText}
                    ${formik.touched.email && formik.errors.email ? styles.errorColor : styles.borderColor}
                    focus:outline-none focus:ring-2 focus:ring-yellow-500
                    disabled:opacity-50 disabled:cursor-not-allowed
                  `}
                  placeholder="آدرس ایمیل"
                />
                <FaEnvelope
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              {formik.touched.email && formik.errors.email && (
                <motion.p
                  id="email-error"
                  className="text-red-500 text-xs mt-1 text-right"
                  role="alert"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {formik.errors.email}
                </motion.p>
              )}
            </motion.div>
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-1 text-right"
              >
                عنوان
              </label>
              <div className="relative">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  id="subject"
                  type="text"
                  name="subject"
                  value={formik.values?.subject || ""}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={isSubmitting}
                  aria-invalid={
                    formik.touched.subject && formik.errors.subject
                      ? "true"
                      : "false"
                  }
                  aria-describedby={
                    formik.touched.subject && formik.errors.subject
                      ? "subject-error"
                      : undefined
                  }
                  className={`
                    w-full px-3 py-2 pr-10 rounded-lg border
                    ${styles.inputBg} ${styles.inputText}
                    ${formik.touched.subject && formik.errors.subject ? styles.errorColor : styles.borderColor}
                    focus:outline-none focus:ring-2 focus:ring-yellow-500
                    disabled:opacity-50 disabled:cursor-not-allowed
                  `}
                  placeholder="عنوان"
                />
                <FaFileAlt
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              {formik.touched.subject && formik.errors.subject && (
                <motion.p
                  id="subject-error"
                  className="text-red-500 text-xs mt-1 text-right"
                  role="alert"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {formik.errors.subject}
                </motion.p>
              )}
            </motion.div>
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1 text-right"
              >
                متن پیام
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                id="message"
                name="message"
                rows={6}
                value={formik.values?.message || ""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={isSubmitting}
                aria-invalid={
                  formik.touched.message && formik.errors.message
                    ? "true"
                    : "false"
                }
                aria-describedby={
                  formik.touched.message && formik.errors.message
                    ? "message-error"
                    : undefined
                }
                className={`
                    w-full px-3 py-2 rounded-lg border
                    ${styles.inputBg} ${styles.inputText}
                    ${formik.touched.message && formik.errors.message ? styles.errorColor : styles.borderColor}
                    focus:outline-none focus:ring-2 focus:ring-yellow-500
                    resize-none
                    disabled:opacity-50 disabled:cursor-not-allowed
                  `}
                placeholder="متن پیام"
              />
              {formik.touched.message && formik.errors.message && (
                <motion.p
                  id="message-error"
                  className="text-red-500 text-xs mt-1 text-right"
                  role="alert"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {formik.errors.message}
                </motion.p>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className={`${styles.bgColor} flex items-end flex-col p-4`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={isSubmitting}
          className={`
            ${styles.buttonColor}
            text-white font-medium py-2 px-6 rounded-lg
            transition-colors duration-200 mt-2 w-full
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? "در حال ارسال..." : "ارسال کن"}
        </motion.button>
      </motion.div>
    </motion.form>
  );
});
