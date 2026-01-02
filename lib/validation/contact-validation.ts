import * as yup from "yup";

export const contactValidationSchema = yup.object().shape({
  fullname: yup
    .string()
    .required("نام و نام خانوادگی الزامی است")
    .min(3, "نام و نام خانوادگی باید حداقل 3 کاراکتر باشد"),
  email: yup
    .string()
    .required("آدرس ایمیل الزامی است")
    .email("آدرس ایمیل معتبر نیست"),
  subject: yup
    .string()
    .required("عنوان الزامی است")
    .min(3, "عنوان باید حداقل 3 کاراکتر باشد"),
  message: yup
    .string()
    .required("متن پیام الزامی است")
    .min(10, "متن پیام باید حداقل 10 کاراکتر باشد"),
});

