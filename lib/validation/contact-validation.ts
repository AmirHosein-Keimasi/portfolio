import * as yup from "yup";

export const contactValidationSchema = yup.object().shape({
  fullname: yup
    .string()
    .trim()
    .required("نام و نام خانوادگی الزامی است")
    .min(3, "نام و نام خانوادگی باید حداقل ۳ کاراکتر باشد")
    .max(100, "نام و نام خانوادگی نباید بیشتر از ۱۰۰ کاراکتر باشد"),
  email: yup
    .string()
    .trim()
    .required("آدرس ایمیل الزامی است")
    .email("آدرس ایمیل معتبر نیست")
    .max(150, "آدرس ایمیل معتبر نیست"),
  subject: yup
    .string()
    .trim()
    .required("عنوان پیام الزامی است")
    .min(3, "عنوان پیام باید حداقل ۳ کاراکتر باشد")
    .max(150, "عنوان پیام نباید بیشتر از ۱۵۰ کاراکتر باشد"),
  message: yup
    .string()
    .trim()
    .required("متن پیام الزامی است")
    .min(10, "متن پیام باید حداقل ۱۰ کاراکتر باشد")
    .max(4000, "متن پیام نباید بیشتر از ۴۰۰۰ کاراکتر باشد"),
  website: yup.string().max(0).optional(), // Honeypot field for bots
});

export type ContactFormValues = {
  fullname: string;
  email: string;
  subject: string;
  message: string;
  website?: string;
};
