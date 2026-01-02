# Performance Optimization Guide

## 🚀 Rendering Strategies

### SSG (Static Site Generation) - صفحات استاتیک

- **`/`** (Home) - `force-static`
- **`/about`** - `force-static`
- **`/resume`** - `force-static`
- **`/contact`** - `force-static`

این صفحات در build time رندر می‌شوند و به صورت static HTML سرو می‌شوند.

### ISR (Incremental Static Regeneration) - صفحات با revalidation

- **`/projects`** - `revalidate: 86400` (24 ساعت)

این صفحه هر 24 ساعت یکبار revalidate می‌شود.

### SSR (Server Side Rendering) - صفحات داینامیک

- **`/connect`** - `force-dynamic`

این صفحه در هر request در server رندر می‌شود.

## 📦 Code Splitting & Dynamic Imports

### کامپوننت‌های با Dynamic Import:

1. **CommentSlider** - فقط در `/projects` لود می‌شود
2. **Skills** - فقط در `/about` لود می‌شود (client-side)
3. **SuftSkills** - فقط در `/about` لود می‌شود
4. **ContactForm** - فقط در `/connect` لود می‌شود
5. **react-slick** - lazy loaded برای slider

### Suspense Boundaries

- استفاده از `Suspense` برای loading states
- Fallback components برای بهتر UX

## 🖼️ Image Optimization

- استفاده از `next/image` برای تمام تصاویر
- `priority` برای تصاویر مهم (LCP)
- `loading="lazy"` برای تصاویر غیرضروری
- `placeholder="blur"` برای بهتر UX

## 📊 Build Results

```
Route (app)                    Size    First Load JS  Revalidate
┌ ○ /                         7.8 kB  122 kB
├ ○ /about                    1.4 kB  112 kB
├ ○ /resume                   4.51 kB 113 kB
├ ○ /projects                 1.39 kB 112 kB      1d
├ ○ /contact                  2.3 kB  111 kB
└ ƒ /connect                  33.5 kB 142 kB
```

- **○** = Static (SSG)
- **ƒ** = Dynamic (SSR)
- **Revalidate** = ISR interval

## 🎯 Performance Tips

1. **Static Pages**: استفاده از SSG برای صفحات استاتیک
2. **Dynamic Imports**: لود کردن کامپوننت‌های سنگین فقط وقتی نیاز است
3. **Image Optimization**: استفاده از next/image
4. **Code Splitting**: تقسیم کد به chunks کوچکتر
5. **Suspense**: استفاده از Suspense برای بهتر UX
