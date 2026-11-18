# پورتفولیو شخصی امیرحسین کیماسی (Amirhossein Keimasi Portfolio)

وب‌سایت پورتفولیو و رزومه آنلاین **امیرحسین کیماسی** — توسعه‌دهنده فرانت‌اند (`Next.js`, `React`, `TypeScript`).

🌐 **وب‌سایت:** [www.amirhoseinkeimasi.ir](https://www.amirhoseinkeimasi.ir)

## ویژگی‌ها

- **معماری مدرن:** پیاده‌سازی با Next.js 15 (App Router)، React 19، TypeScript و Tailwind CSS
- **طراحی واکنش‌گرا و دو تمه:** پشتیبانی کامل از تم تاریک و روشن بدون فلش اولیه (Anti-FOUC) و چیدمان کاملاً راست‌به‌چپ (RTL)
- **رزومه کامل و دانلود PDF:** نمایش سوابق کاری (داناجو، CastoFly)، تحصیلات، افتخارات (GCPC) و لینک دانلود مستقیم فایل PDF رزومه
- **نمونه کارهای قابل فیلتر:** دسته‌بندی پروژه‌ها (`Production`، `Next.js`، `React`) همراه با لینک دمو و کد منبع
- **فرم تماس واقعی (SMTP):** ارسال مستقیم ایمیل با Nodemailer، قالب HTML راست‌به‌چپ، اعتبارسنجی Yup، محافظت در برابر اسپم (Honeypot) و Rate Limiting
- **سئو و عملکرد بالا:** Metadata کامل، OpenGraph، JSON-LD، Sitemap و Robots داینامیک، فونت محلی Vazir و Tanha و قابلیت PWA

## راه‌اندازی محلی

1. نصب پکیج‌ها:
   ```bash
   npm install
   ```

2. ایجاد فایل `.env.local` بر اساس `.env.example`:
   ```env
   NEXT_PUBLIC_SITE_URL=https://www.amirhoseinkeimasi.ir
   CONTACT_TO_EMAIL=amirhosein.kiemasi@gmail.com
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=465
   SMTP_SECURE=true
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   ```

3. اجرای محیط توسعه:
   ```bash
   npm run dev
   ```

4. بررسی تایپ، لینت و بیلد نهایی:
   ```bash
   npm run type-check
   npm run lint
   npm run build
   ```
