# 🎨 فیچرهای انیمیشن و UI اضافه شده

## ✨ فیچرهای جدید

### 1. **Scroll Progress Bar** 📊

- نوار پیشرفت در بالای صفحه که نشان می‌دهد چقدر از صفحه scroll شده
- رنگ آن با تم dark/light تغییر می‌کند
- کامپوننت: `components/animations/scroll-progress.tsx`

### 2. **Scroll Reveal Animations** 🎭

- انیمیشن‌های fade-in هنگام scroll کردن
- پشتیبانی از 5 جهت: up, down, left, right, fade
- استفاده از Framer Motion برای smooth animations
- کامپوننت: `components/animations/scroll-reveal.tsx`

**استفاده:**

```tsx
<ScrollReveal direction="up" delay={0.2}>
  <YourComponent />
</ScrollReveal>
```

### 3. **Particles Background** ✨

- پس‌زمینه با ذرات متحرک و خطوط اتصال
- رنگ آن با تم dark/light تغییر می‌کند
- کامپوننت: `components/animations/particles-background.tsx`

### 4. **Custom Cursor** 🖱️

- Cursor سفارشی با glow effect
- بزرگ می‌شود هنگام hover روی المان‌های interactive
- **نکته:** به صورت پیش‌فرض غیرفعال است (می‌توانید در `custom-cursor.tsx` فعال کنید)
- کامپوننت: `components/animations/custom-cursor.tsx`

### 5. **Typing Animation** ⌨️

- انیمیشن تایپ کردن برای متن‌ها
- کامپوننت: `components/animations/typing-animation.tsx`

**استفاده:**

```tsx
<TypingAnimation text="متن شما" speed={100} />
```

### 6. **Floating Elements** 🎈

- المان‌های شناور با انیمیشن بالا و پایین
- کامپوننت: `components/animations/floating-elements.tsx`

**استفاده:**

```tsx
<FloatingElement delay={1} duration={4}>
  <YourComponent />
</FloatingElement>
```

### 7. **Toast Notifications** 🔔

- استفاده از `react-hot-toast` برای پیام‌های success/error
- استایل‌دهی شده با تم dark/light
- استفاده در فرم تماس

### 8. **Animated Progress Bars** 📈

- Progress bar های مهارت‌ها با انیمیشن smooth
- استفاده از Framer Motion

### 9. **Custom Scrollbar** 🎨

- Scrollbar سفارشی با رنگ سبز
- Hover effect

### 10. **Hover Effects** 🎯

- Scale effect روی دکمه‌ها
- Shadow effects
- Bounce animation روی آیکون‌ها

## 📦 Dependencies اضافه شده

- `framer-motion` - برای انیمیشن‌های smooth
- `react-hot-toast` - برای toast notifications

## 🎯 استفاده در صفحات

### Home Page

- Scroll reveal برای تمام بخش‌ها
- Floating animation برای تصویر پروفایل
- Glow effect برای تصویر
- Hover effects برای دکمه‌ها

### About Page

- Scroll reveal برای مهارت‌ها
- Animated progress bars

### Form Contact

- Toast notifications برای success/error

## 🚀 بهینه‌سازی‌ها

- تمام انیمیشن‌ها با `useInView` فقط یکبار اجرا می‌شوند
- Lazy loading برای کامپوننت‌های سنگین
- Performance optimized با Framer Motion

## 💡 نکات

1. **Custom Cursor:** به صورت پیش‌فرض غیرفعال است. برای فعال کردن، کامنت را در `custom-cursor.tsx` بردارید.

2. **Particles:** می‌توانید تعداد ذرات را در `particles-background.tsx` تغییر دهید.

3. **Scroll Reveal:** می‌توانید delay و direction را برای هر المان تنظیم کنید.

4. **Toast:** از `toast.success()` و `toast.error()` استفاده کنید.

## 🎨 Tailwind Animations

- `animate-float` - انیمیشن شناور
- `animate-glow` - انیمیشن درخشش
