import type {
  AwardItem,
  ContactChannel,
  EducationItem,
  LanguageItem,
  ProjectItem,
  SkillCategory,
  SkillItem,
  WorkExperience,
} from "@/types";

export const PROFILE = {
  fullName: "امیرحسین کیماسی",
  fullNameEn: "Amirhossein Keimasi",
  initials: "AK",
  role: "توسعه‌دهنده فرانت‌اند",
  roleEn: "Frontend Developer",
  tagline: "React • Next.js • TypeScript",
  experienceYears: "۳.۵+",
  location: "ایران، اصفهان",
  locationEn: "Isfahan, Iran",
  phone: "+98 933 378 8421",
  phoneDisplayFa: "۰۹۳۳۳۷۸۸۴۲۱ (۹۸+)",
  phoneHref: "tel:+989333788421",
  email: "amirhosein.kiemasi@gmail.com",
  website: "https://www.amirhoseinkeimasi.ir",
  websiteDisplay: "www.amirhoseinkeimasi.ir",
  github: "https://github.com/AmirHosein-Keimasi",
  githubHandle: "AmirHosein-Keimasi",
  linkedin: "https://www.linkedin.com/in/amirhossein-keimasi",
  linkedinHandle: "amirhossein-keimasi",
  telegram: "https://t.me/amir1_1",
  telegramHandle: "@amir1_1",
  instagram: "https://www.instagram.com/amir_v13",
  instagramHandle: "@amir_v13",
  whatsapp: "https://wa.me/989333788421",
  resumePdfUrl: "/Amirhossein-Keimasi-Resume.pdf",
  avatarUrl: "/assets/1.png",
  availabilityText: "آماده همکاری در پروژه‌های چالش‌برانگیز",
  summaryShort:
    "توسعه‌دهنده Frontend با بیش از ۳.۵ سال تجربه در طراحی، توسعه و نگهداری اپلیکیشن‌های وب مقیاس‌پذیر با Next.js، React و TypeScript.",
  summaryParagraphs: [
    "توسعه‌دهنده Frontend با بیش از ۳.۵ سال تجربه در طراحی، توسعه و نگهداری اپلیکیشن‌های وب مقیاس‌پذیر با استفاده از Next.js، React و TypeScript. متخصص در طراحی معماری ماژولار، توسعه کامپوننت‌های Reusable، مدیریت State و یکپارچه‌سازی APIها.",
    "دارای تجربه توسعه محصولات واقعی در محیط Production، بهینه‌سازی عملکرد، پیاده‌سازی رابط‌های کاربری پیچیده و مشارکت در بهبود کیفیت کد و معماری پروژه.",
    "علاقه‌مند به حل مسائل فنی پیچیده، یادگیری مستمر و ساخت محصولات نرم‌افزاری پایدار و قابل توسعه.",
  ],
} as const;

export const HERO_STATS = [
  { value: 3.5, suffix: "+", label: "سال تجربه تخصصی Frontend", decimals: 1 },
  { value: 3, suffix: "+", label: "محصول واقعی و Full-Stack", decimals: 0 },
  { value: 15, suffix: "+", label: "پروژه و ماژول پیاده‌سازی‌شده", decimals: 0 },
  { value: 2, suffix: "nd", label: "رتبه مسابقات برنامه‌نویسی GCPC", decimals: 0 },
] as const;

export const CORE_PILLARS = [
  {
    id: "architecture",
    title: "معماری ماژولار و مقیاس‌پذیر",
    description:
      "طراحی ساختارهای تمیز، کامپوننت‌های Reusable و کدهای Type-Safe با تمرکز بر Maintainability و نگهداری بلندمدت.",
    tags: ["Next.js", "TypeScript", "Clean Architecture"],
  },
  {
    id: "performance",
    title: "عملکرد، SSR و SEO",
    description:
      "بهینه‌سازی سرعت بارگذاری صفحات، پیاده‌سازی صحیح SSR/SSG، بهبود Core Web Vitals و تجربه کاربری روان در موبایل و دسکتاپ.",
    tags: ["SSR / SSG", "Core Web Vitals", "SEO"],
  },
  {
    id: "mentorship",
    title: "منتورینگ و کیفیت کد",
    description:
      "مشارکت فعال در Code Review، منتورینگ توسعه‌دهندگان Frontend، ارتقای استانداردهای کدنویسی و هدایت توسعه پنل‌های مدیریتی.",
    tags: ["Mentorship", "Code Review", "Teamwork"],
  },
] as const;

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "core",
    title: "زبان‌ها و هسته وب",
    subtitle: "Core Languages & Web Fundamentals",
  },
  {
    id: "frameworks",
    title: "فریم‌ورک‌ها و کتابخانه‌ها",
    subtitle: "Modern UI Frameworks",
  },
  {
    id: "state",
    title: "مدیریت State و داده",
    subtitle: "State Management & APIs",
  },
  {
    id: "styling",
    title: "استایل‌دهی و سیستم طراحی",
    subtitle: "UI & Styling Systems",
  },
  {
    id: "forms",
    title: "فرم‌ها و اعتبارسنجی",
    subtitle: "Forms & Schema Validation",
  },
  {
    id: "tooling",
    title: "ابزارها و مهندسی فرانت‌اند",
    subtitle: "Tooling & Build Pipeline",
  },
];

export const TECHNICAL_SKILLS: SkillItem[] = [
  // Core
  { id: "ts", name: "TypeScript", level: 92, category: "core", iconKey: "typescript", featured: true },
  { id: "js", name: "JavaScript (ES6+)", level: 95, category: "core", iconKey: "javascript", featured: true },
  { id: "html", name: "HTML5", level: 98, category: "core", iconKey: "html5" },
  { id: "css", name: "CSS3", level: 94, category: "core", iconKey: "css3" },

  // Frameworks
  { id: "react", name: "React.js", level: 95, category: "frameworks", iconKey: "react", featured: true },
  { id: "nextjs", name: "Next.js", level: 94, category: "frameworks", iconKey: "nextjs", featured: true },

  // State & Data
  { id: "zustand", name: "Zustand", level: 90, category: "state", iconKey: "zustand", featured: true },
  { id: "redux", name: "Redux Toolkit", level: 88, category: "state", iconKey: "redux" },
  { id: "tanstack", name: "TanStack Query", level: 90, category: "state", iconKey: "tanstack", featured: true },
  { id: "rest", name: "RESTful APIs", level: 92, category: "state", iconKey: "api" },

  // Styling
  { id: "tailwind", name: "Tailwind CSS", level: 95, category: "styling", iconKey: "tailwind", featured: true },
  { id: "mui", name: "Material UI", level: 85, category: "styling", iconKey: "mui" },
  { id: "bootstrap", name: "Bootstrap", level: 85, category: "styling", iconKey: "bootstrap" },

  // Forms
  { id: "rhf", name: "React Hook Form", level: 92, category: "forms", iconKey: "rhf" },
  { id: "formik", name: "Formik", level: 88, category: "forms", iconKey: "formik" },
  { id: "yup", name: "Yup", level: 90, category: "forms", iconKey: "yup" },

  // Tooling
  { id: "git", name: "Git", level: 90, category: "tooling", iconKey: "git" },
  { id: "webpack", name: "Webpack", level: 80, category: "tooling", iconKey: "webpack" },
  { id: "npm", name: "npm", level: 92, category: "tooling", iconKey: "npm" },
];

export const SOFT_SKILLS = [
  { id: "mentorship", title: "منتورینگ و هدایت فنی", description: "راهنمایی توسعه‌دهندگان و ارتقای کیفیت کد تیم" },
  { id: "problem-solving", title: "حل مسائل فنی پیچیده", description: "تحلیل دقیق چالش‌های معماری و ارائه راه‌حل پایدار" },
  { id: "code-review", title: "Code Review و استانداردسازی", description: "بررسی دقیق کد و بهبود خوانایی و نگهداری‌پذیری" },
  { id: "teamwork", title: "کار تیمی و ارتباط مؤثر", description: "همکاری نزدیک با تیم‌های Backend، محصول و طراحی" },
  { id: "learning", title: "یادگیری مستمر", description: "به‌روز بودن با اکوسیستم React، Next.js و وب مدرن" },
  { id: "responsibility", title: "مسئولیت‌پذیری و تعهد", description: "مالکیت کامل روی کیفیت، عملکرد و تحویل به موقع" },
  { id: "time", title: "نظم و مدیریت زمان", description: "برنامه‌ریزی دقیق اسپرینت‌ها و اولویت‌بندی وظایف" },
  { id: "feedback", title: "انتقادپذیری و رشد", description: "استقبال از بازخورد سازنده برای بهبود مستمر" },
] as const;

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    id: "danajou",
    company: "شبکه اجتماعی داناجو",
    companyEn: "Danajou Social Network",
    role: "توسعه‌دهنده فرانت‌اند (Frontend Developer)",
    period: "۱۴۰۴ - تاکنون",
    isCurrent: true,
    website: "https://danajou.com",
    summary:
      "توسعه، معماری و بهینه‌سازی ماژول‌های اصلی پلتفرم شبکه اجتماعی و آموزشی داناجو به همراه منتورینگ فنی تیم فرانت‌اند.",
    groups: [
      {
        title: "Technical Mentorship & Team Contribution",
        titleFa: "منتورینگ فنی و مشارکت تیمی",
        items: [
          "منتورینگ توسعه‌دهندگان Frontend و ارائه راهنمایی‌های فنی.",
          "مشارکت در Code Review و ارتقای استانداردهای کدنویسی.",
          "واگذاری و هدایت توسعه بخش‌هایی از پنل مدیریت مبتنی بر React.",
        ],
      },
      {
        title: "Architecture & Development",
        titleFa: "معماری و توسعه",
        items: [
          "توسعه و نگهداری ماژول‌های اصلی پلتفرم با Next.js، React و TypeScript.",
          "طراحی و پیاده‌سازی ساختارهای ماژولار و reusable با قابلیت توسعه و نگهداری بلندمدت.",
          "پیاده‌سازی سیستم‌های مدیریت دوره، رویداد و استریم ویدئویی (VOD).",
          "یکپارچه‌سازی سرویس‌های Frontend با APIهای Backend و مدیریت State در بخش‌های پیچیده اپلیکیشن.",
        ],
      },
      {
        title: "Performance & Optimization",
        titleFa: "عملکرد و بهینه‌سازی",
        items: [
          "بهینه‌سازی عملکرد صفحات و بهبود تجربه کاربری.",
          "بهبود ساختار SSR و SEO.",
          "بازنگری و Refactor معماری Frontend با تمرکز بر Maintainability و توسعه‌پذیری.",
        ],
      },
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "SSR & SEO",
      "VOD Streaming",
      "TanStack Query",
      "Modular Architecture",
      "Code Review",
    ],
  },
  {
    id: "castofly",
    company: "CastoFly",
    companyEn: "CastoFly AI SaaS",
    role: "توسعه‌دهنده فرانت‌اند (Frontend Developer)",
    period: "آبان ۱۴۰۳ تا ۱۴۰۴",
    isCurrent: false,
    website: "https://www.castofly.com/",
    summary:
      "مشارکت در توسعه و نگهداری Frontend یک پلتفرم SaaS مبتنی بر هوش مصنوعی برای تبدیل فعالیت‌های مرورگر به ویدئوهای آموزشی و مستندات تعاملی.",
    highlights: [
      "مشارکت در توسعه و نگهداری Frontend پلتفرم SaaS (Software as a Service) مبتنی بر هوش مصنوعی؛ نرم‌افزار ابری جهت تبدیل فعالیت‌های مرورگر به ویدئوهای آموزشی و مستندات تعاملی.",
      "توسعه رابط‌های کاربری تعاملی با Next.js، React و TypeScript.",
      "مدیریت State و داده‌های اپلیکیشن با Zustand و یکپارچه‌سازی RESTful APIs.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Zustand",
      "RESTful APIs",
      "AI SaaS",
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: "gonabad-bsc",
    degree: "کارشناسی مهندسی کامپیوتر",
    major: "گرایش مهندسی نرم‌افزار",
    institution: "دانشگاه گناباد",
    period: "۱۳۹۹ - ۱۴۰۳",
    description:
      "مهندسی نرم‌افزار با تمرکز بر توسعه نرم‌افزار، الگوریتم‌ها و معماری سیستم‌ها.",
  },
];

export const AWARDS: AwardItem[] = [
  {
    id: "gcpc-1402",
    title: "رتبه دوم مسابقات برنامه‌نویسی GCPC",
    issuer: "دانشگاه گناباد",
    year: "۱۴۰۲",
    description:
      "کسب مقام دوم در اولین دوره مسابقات الگوریتمی و برنامه‌نویسی GCPC در دانشگاه گناباد.",
    url: "https://gonabad.ac.ir/%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1-%D8%AF%D8%A7%D9%86%D8%B4%D8%AC%D9%88%DB%8C%DB%8C/%D8%A7%D9%88%D9%84%DB%8C%D9%86-%D8%AF%D9%88%D8%B1%D9%87-%D9%85%D8%B3%D8%A7%D8%A8%D9%82%D9%87-%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87-%D9%86%D9%88%DB%8C%D8%B3%DB%8C-%D8%A8%D8%A7-%D8%B9%D9%86%D9%88%D8%A7%D9%86-GCPC-%D8%AF%D8%B1-%D8%AF%D8%A7%D9%86%D8%B4%DA%AF%D8%A7%D9%87-%DA%AF%D9%86%D8%A7%D8%A8%D8%A7%D8%AF-%D8%A8%D8%B1%DA%AF%D8%B2%D8%A7%D8%B1-%DA%AF%D8%B1%D8%AF%DB%8C%D8%AF",
  },
];

export const LANGUAGES: LanguageItem[] = [
  { name: "فارسی", level: "زبان مادری", proficiency: 100 },
  { name: "انگلیسی", level: "تسلط فنی و کاری", proficiency: 75 },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "miz-private-chef",
    title: "میز (MIZ) — پلتفرم سرآشپز خصوصی",
    subtitle: "پلتفرم هیبرید Private Chef & Meal Experience",
    year: "۱۴۰۴ - ۱۴۰۵",
    category: "production",
    featured: true,
    badgeText: "۹۰٪ تکمیل • Full-Stack",
    description:
      "پلتفرم جامع و شخصی‌سازی‌شده خدمات سرآشپز خصوصی و تجربه غذایی ویژه بازار ایران (پخت در محل و ارسال پک‌های رژیمی/هفتگی). طراحی‌شده با معماری Modular Monolith، آماده مقیاس‌پذیری چندآشپز (Multi-Chef Ready) و استوار بر سه موتور رزرو، قیمت‌گذاری و آشپزخانه/تغذیه.",
    features: [
      "ویزارد رزرو چندمرحله‌ای با Auto-Save، تقویم شمسی و کنترل تداخل و بافر تردد",
      "موتور قیمت‌گذاری مستقل با ضریب پرتی مواد، پیش‌فاکتور نسخه‌بندی‌شده (Snapshot) و گزارش سود و زیان",
      "موتور منو و تغذیه (کالری/ماکرو)، قفل هوشمند آلرژی، لیست خرید تجمیعی، پرتال مشتری و پنل عملیات",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Radix / shadcn",
      "Zustand",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "PostgreSQL",
      "Prisma / Drizzle",
    ],
    imgSrc: "/assets/miz.png",
    imageFit: "contain",
    accentGradient: "from-amber-500 via-yellow-500 to-emerald-600",
    websiteLink: "https://miz-five.vercel.app/",
    caseStudy: {
      badge: "PRD v1.0 • مدل کسب‌وکار هیبرید",
      status: "۹۰٪ تکمیل‌شده — فاز ۰ تا ۴ (زیرساخت، کاتالوگ، ویزارد رزرو، موتور قیمت‌گذاری، منو و تغذیه، پرتال مشتری، پنل عملیات، تدارکات و مالی)",
      overview:
        "«میز» پلتفرمی لوکس برای سفارش ساختاریافته خدمات آشپزی خصوصی در ایران است که ابهام قیمت‌گذاری، تداخل زمان‌بندی و مدیریت دستی خرید مواد اولیه را با یک سیستم تمام‌دیجیتال جایگزین می‌کند.",
      services: [
        "Weekly Meal Prep (پک‌های غذایی هفتگی و رژیمی)",
        "Daily Private Chef (حضور ساعتی/روزانه سرآشپز در محل)",
        "Private Events (ضیافت‌ها و مهمانی‌های خصوصی VIP)",
        "Custom Chef Experience (تجربه‌های کاملاً سفارشی با Quote اختصاصی)",
      ],
      engines: [
        {
          title: "Booking Engine",
          subtitle: "موتور رزرو و ظرفیت",
          summary:
            "ویزارد چندمرحله‌ای با ذخیره خودکار پیش‌نویس (Draft)، انتخاب تاریخ شمسی، کنترل بافر تردد و ممانعت کامل از رزرو همزمان.",
        },
        {
          title: "Pricing Engine",
          subtitle: "موتور قیمت‌گذاری و مالی",
          summary:
            "محاسبه تفکیکی دستمزد، مواد اولیه با ضریب بازدهی/پرتی (Yield Ratio)، سربار و حاشیه سود؛ صدور Quote با Snapshot تغییرناپذیر و تسویه شاپرکی.",
        },
        {
          title: "Kitchen & Nutrition Engine",
          subtitle: "موتور منو، رسیپی و تدارکات",
          summary:
            "محاسبه دقیق کالری و ماکروها، نسخه‌بندی دستورپخت‌ها، مسدودسازی خودکار غذاهای دارای آلرژن مشتری و تولید لیست خرید تجمیعی بازار.",
        },
      ],
      architectureHighlights: [
        "معماری Modular Monolith در ۱۰ دامنه دیتابیس (PostgreSQL + BIGINT IRR + UTC/Jalali)",
        "طراحی Multi-Chef Ready بدون وابستگی سخت به تک‌آشپز در جداول تقویم و تخصیص",
        "پنل کامل ادمین و عملیات: کارتابل سفارش‌ها، مدیریت تدارکات بازار، ثبت فاکتور واقعی و داشبورد P&L",
        "امنیت تراکنش با Idempotency، اعتبارسنجی دوطرفه Zod و نرخ‌محدودسازی OTP",
      ],
    },
  },
  {
    id: "danajou-platform",
    title: "شبکه اجتماعی و آموزشی داناجو",
    subtitle: "محصول Production • Next.js & VOD",
    year: "۱۴۰۴ - تاکنون",
    category: "production",
    featured: true,
    badgeText: "Production",
    description:
      "توسعه و معماری ماژول‌های اصلی شبکه اجتماعی داناجو شامل سیستم‌های مدیریت دوره، رویداد، استریم ویدئویی (VOD) و پنل مدیریت مبتنی بر React با تمرکز بر SSR، SEO، عملکرد بالا و منتورینگ تیم فرانت‌اند.",
    features: [
      "پیاده‌سازی سیستم‌های مدیریت دوره، رویداد و استریم ویدئویی (VOD)",
      "معماری ماژولار، کامپوننت‌های Reusable و Refactor برای نگهداری بلندمدت",
      "بهینه‌سازی پیشرفته SSR، SEO و سرعت بارگذاری صفحات",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "TanStack Query",
      "SSR & SEO",
      "VOD",
    ],
    imgSrc: "/assets/Danajou.png",
    imageFit: "contain",
    accentGradient: "from-sky-500 via-blue-600 to-indigo-600",
    websiteLink: "https://danajou.com",
  },
  {
    id: "castofly-saas",
    title: "پلتفرم هوش مصنوعی CastoFly",
    subtitle: "محصول AI SaaS • Next.js & Zustand",
    year: "۱۴۰۳ - ۱۴۰۴",
    category: "production",
    featured: true,
    badgeText: "AI SaaS",
    description:
      "مشارکت در توسعه و نگهداری Frontend پلتفرم SaaS ابری مبتنی بر هوش مصنوعی جهت تبدیل خودکار فعالیت‌های مرورگر به ویدئوهای آموزشی و مستندات تعاملی با مدیریت State پیشرفته.",
    features: [
      "توسعه رابط‌های کاربری تعاملی با Next.js، React و TypeScript",
      "مدیریت State و داده‌های اپلیکیشن با Zustand",
      "یکپارچه‌سازی کامل سرویس‌های فرانت‌اند با RESTful APIs",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Zustand",
      "RESTful APIs",
    ],
    imgSrc: "/assets/castoflyDesktop.png",
    mobileImgSrc: "/assets/castoflymobile.png",
    imageFit: "cover",
    accentGradient: "from-violet-500 via-indigo-500 to-sky-500",
    websiteLink: "https://www.castofly.com/",
  },
  {
    id: "car-rental",
    title: "اپلیکیشن اجاره خودرو کارمون (Caremon)",
    subtitle: "مارکت‌پلیس اجاره خودرو • Next.js & TypeScript",
    year: "۱۴۰۳",
    category: "nextjs",
    featured: true,
    description:
      "توسعه پلتفرم اجاره خودرو با Next.js و CSS Modules شامل لندینگ پیج، فهرست خودروها با قابلیت جستجو و فیلتر، احراز هویت، مسیریابی و مدیریت تم؛ با تمرکز بر Type Safety، کدنویسی بهینه و حداقل وابستگی به کتابخانه‌های خارجی.",
    features: [
      "جستجو و فیلتر هوشمند خودروها بر اساس شهر و تاریخ تحویل",
      "احراز هویت، مسیریابی و مدیریت تم تاریک/روشن",
      "حداقل وابستگی به کتابخانه‌های خارجی با Type Safety کامل",
    ],
    technologies: ["Next.js", "TypeScript", "CSS Modules", "Auth", "Theme"],
    imgSrc: "/assets/caremondesktop.png",
    imageFit: "cover",
    accentGradient: "from-sky-500 via-cyan-500 to-teal-500",
    websiteLink: "https://caremon-nextjs.vercel.app",
  },
  {
    id: "gym-24",
    title: "اپلیکیشن Gym 24",
    subtitle: "مدیریت کاربران باشگاه • دوزبانه FA/EN",
    year: "۱۴۰۳",
    category: "nextjs",
    featured: true,
    description:
      "توسعه اپلیکیشن مدیریت کاربران باشگاه با React، Next.js و Tailwind CSS، با قابلیت پشتیبانی از دو زبان فارسی و انگلیسی، تم روشن و تاریک و احراز هویت با NextAuth.js. استفاده از Zustand برای مدیریت State و بهبود تجربه کاربری.",
    features: [
      "پشتیبانی کامل دو زبانه (فارسی و انگلیسی)",
      "احراز هویت امن با NextAuth.js",
      "تم تاریک و روشن و مدیریت State با Zustand",
    ],
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "NextAuth.js",
      "Zustand",
    ],
    imgSrc: "/assets/design1.png",
    imageFit: "contain",
    accentGradient: "from-red-500 via-orange-500 to-amber-500",
    websiteLink: "https://gym-template-ochre.vercel.app/en-us",
    codeLink: "https://github.com/AmirHosein-Keimasi/GymTemplate",
  },
  {
    id: "portfolio",
    title: "وب‌سایت شخصی Portfolio",
    subtitle: "طراحی و پیاده‌سازی مستقل • PWA",
    year: "۱۴۰۳ - ۱۴۰۵",
    category: "nextjs",
    featured: true,
    description:
      "طراحی و توسعه وب‌سایت شخصی Portfolio به‌صورت مستقل، از طراحی رابط کاربری تا پیاده‌سازی کامل. بازنویسی و ارتقا به Next.js، TypeScript و Tailwind CSS (نسخه اولیه با React و Material UI) با انیمیشن‌های تعاملی، PWA و فرم تماس متصل به SMTP.",
    features: [
      "طراحی واکنش‌گرا، تم شب/روز و قابلیت نصب PWA",
      "فرم تماس اعتبارسنجی‌شده با Formik و Yup و ارسال ایمیل واقعی",
      "ساختار بهینه SEO، OpenGraph و JSON-LD",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Formik & Yup",
    ],
    imgSrc: "/assets/design2.png",
    imageFit: "contain",
    accentGradient: "from-emerald-500 via-green-500 to-teal-500",
    websiteLink: "https://www.amirhoseinkeimasi.ir",
    codeLink: "https://github.com/AmirHosein-Keimasi/portfolio",
  },
  {
    id: "sticker-shop",
    title: "فروشگاه آنلاین Sticker Shop",
    subtitle: "فروشگاه اینترنتی • React & Redux Toolkit",
    year: "۱۴۰۲",
    category: "react",
    featured: false,
    description:
      "طراحی و پیاده‌سازی کامل فروشگاه استیکر آنلاین با React، Redux Toolkit و Tailwind CSS؛ تمرکز بر رابط کاربری مینیمال، سرعت بالا، مدیریت سبد خرید و تجربه کاربری روان.",
    features: [
      "مدیریت سبد خرید و وضعیت با Redux Toolkit",
      "طراحی مینیمال، واکنش‌گرا و سریع با Vite",
      "ساختار کامپوننتی تمیز و مقیاس‌پذیر",
    ],
    technologies: [
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "React Router",
      "Axios",
      "Vite",
    ],
    imgSrc: "/assets/design3.png",
    imageFit: "contain",
    accentGradient: "from-purple-500 via-fuchsia-500 to-pink-500",
    codeLink: "https://github.com/AmirHosein-Keimasi/StikerShop",
  },
  {
    id: "device-management",
    title: "سیستم مدیریت دستگاه‌های سازمانی",
    subtitle: "پروژه کارشناسی • React & Formik",
    year: "۱۴۰۲",
    category: "react",
    featured: false,
    description:
      "سیستم مدیریت و نگهداری دستگاه‌ها و تجهیزات سازمانی با امکان ثبت مشخصات دقیق، برنامه‌ریزی سرویس‌های دوره‌ای، تاریخ جلالی و فرم‌های اعتبارسنجی‌شده.",
    features: [
      "ثبت و پیگیری وضعیت تجهیزات سازمانی",
      "برنامه‌ریزی سرویس‌ها و تعمیرات دوره‌ای",
      "فرم‌های پیچیده با Formik، Yup و تاریخ جلالی",
    ],
    technologies: [
      "React",
      "Formik",
      "Yup",
      "Axios",
      "Framer Motion",
      "RESTful APIs",
    ],
    accentGradient: "from-cyan-500 via-blue-500 to-indigo-500",
    codeLink:
      "https://github.com/AmirHosein-Keimasi/Device-management-University-project-",
  },
  {
    id: "weblog-redux",
    title: "وبلاگ مدیریتی Weblog-Redux",
    subtitle: "مدیریت محتوا • React & Redux Toolkit",
    year: "۱۴۰۲",
    category: "react",
    featured: false,
    description:
      "اپلیکیشن مدیریت و انتشار مقالات با معماری Redux Toolkit، پشتیبانی از تاریخ شمسی و رابط کاربری واکنش‌گرا برای مطالعه و مدیریت سریع محتوا.",
    features: [
      "مدیریت کامل CRUD مقالات با Redux Toolkit",
      "پشتیبانی از تاریخ شمسی (date-fns-jalali)",
      "ساختار شفاف و عملکرد سریع با Vite",
    ],
    technologies: ["React", "Redux Toolkit", "React Router", "Axios", "Vite"],
    accentGradient: "from-teal-500 via-emerald-500 to-lime-500",
    codeLink: "https://github.com/AmirHosein-Keimasi/weblog-Reduxe-",
  },
];

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: "email",
    label: "Email",
    labelFa: "ایمیل",
    value: PROFILE.email,
    copyValue: PROFILE.email,
    href: `mailto:${PROFILE.email}`,
    iconKey: "email",
    isExternal: false,
  },
  {
    id: "phone",
    label: "Phone",
    labelFa: "تلفن همراه",
    value: PROFILE.phone,
    copyValue: "+989333788421",
    href: PROFILE.phoneHref,
    iconKey: "phone",
    isExternal: false,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    labelFa: "لینکدین",
    value: PROFILE.linkedinHandle,
    copyValue: PROFILE.linkedin,
    href: PROFILE.linkedin,
    iconKey: "linkedin",
    isExternal: true,
  },
  {
    id: "github",
    label: "GitHub",
    labelFa: "گیت‌هاب",
    value: PROFILE.githubHandle,
    copyValue: PROFILE.github,
    href: PROFILE.github,
    iconKey: "github",
    isExternal: true,
  },
  {
    id: "telegram",
    label: "Telegram",
    labelFa: "تلگرام",
    value: PROFILE.telegramHandle,
    copyValue: PROFILE.telegramHandle,
    href: PROFILE.telegram,
    iconKey: "telegram",
    isExternal: true,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    labelFa: "واتس‌اپ",
    value: PROFILE.phone,
    copyValue: "+989333788421",
    href: PROFILE.whatsapp,
    iconKey: "whatsapp",
    isExternal: true,
  },
  {
    id: "website",
    label: "Website",
    labelFa: "وب‌سایت شخصی",
    value: PROFILE.websiteDisplay,
    copyValue: PROFILE.website,
    href: PROFILE.website,
    iconKey: "website",
    isExternal: true,
  },
  {
    id: "location",
    label: "Location",
    labelFa: "موقعیت",
    value: PROFILE.location,
    copyValue: PROFILE.location,
    href: "https://maps.google.com/?q=Isfahan,Iran",
    iconKey: "location",
    isExternal: true,
  },
];
