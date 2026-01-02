# Portfolio Website - Next.js 15 + TypeScript

پورتفولیو شخصی امیرحسین کیماسی با Next.js 15، TypeScript و Tailwind CSS

## 🚀 تکنولوژی‌ها

- **Next.js 15** - با App Router
- **TypeScript** - برای type safety
- **Tailwind CSS** - برای استایل‌دهی
- **React Icons** - برای آیکون‌ها
- **Formik & Yup** - برای فرم‌ها و validation
- **React Slick** - برای اسلایدرها

## 📁 ساختار پروژه

```
app/
  ├── (main)/              # Route group برای صفحات اصلی
  │   ├── layout.tsx       # Layout مشترک با TopHeader
  │   ├── page.tsx         # صفحه اصلی (/)
  │   ├── about/           # درباره من (/about)
  │   ├── resume/          # رزومه (/resume)
  │   ├── projects/        # پروژه‌ها (/projects)
  │   ├── contact/          # تماس (/contact)
  │   └── connect/         # ارتباط (/connect)
  ├── layout.tsx           # Root layout
  └── globals.css          # استایل‌های global

components/
  ├── common/              # کامپوننت‌های مشترک
  ├── header/              # Header و Navigation
  └── pages/               # کامپوننت‌های صفحات

lib/
  ├── context/             # Context و State Management
  ├── constants/           # Constants و Data
  └── validation/          # Validation Schemas

public/
  └── assets/              # تصاویر و فایل‌های استاتیک
```

## 🛠️ نصب و اجرا

```bash
# نصب وابستگی‌ها
npm install

# اجرای development server
npm run dev

# Build برای production
npm run build

# اجرای production server
npm start
```

## 📝 Routes

- `/` - صفحه اصلی
- `/about` - درباره من
- `/resume` - رزومه
- `/projects` - پروژه‌ها
- `/contact` - تماس با من
- `/connect` - ارتباط با من

## 🎨 Features

- ✅ Dark/Light Mode
- ✅ Responsive Design
- ✅ TypeScript Support
- ✅ SEO Optimized
- ✅ Clean Code Structure
- ✅ App Router Routing

## 📄 License

MIT
