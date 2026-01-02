# 🎨 GSAP Animations Library

این کتابخانه شامل بیش از 100 کامپوننت انیمیشن ساخته شده با GSAP است که می‌توانید در پروژه خود استفاده کنید.

## 📦 نصب

GSAP قبلاً نصب شده است. اگر نیاز به نصب مجدد دارید:

```bash
npm install gsap
```

## 📚 دسته‌بندی انیمیشن‌ها

### 1. انیمیشن‌های متنی (Text Animations)

#### Split Text
متن را به کلمات جداگانه تقسیم می‌کند و هر کلمه را با انیمیشن نمایش می‌دهد.

```tsx
import { SplitText } from "@/components/animations/text";

<SplitText delay={0.2} duration={1}>
  متن شما اینجا
</SplitText>
```

#### Blur Text
متن با افکت blur شروع می‌شود و به تدریج واضح می‌شود.

```tsx
import { BlurText } from "@/components/animations/text";

<BlurText blurAmount={10} duration={1}>
  متن شما
</BlurText>
```

#### Circular Text
متن را به صورت دایره‌ای نمایش می‌دهد.

```tsx
import { CircularText } from "@/components/animations/text";

<CircularText text="متن دایره‌ای" radius={100} />
```

#### Shuffle Text
متن با کاراکترهای تصادفی شروع می‌شود و به تدریج به متن اصلی تبدیل می‌شود.

```tsx
import { ShuffleText } from "@/components/animations/text";

<ShuffleText text="متن شما" duration={1.5} />
```

#### Shiny Text
افکت درخشش روی متن.

```tsx
import { ShinyText } from "@/components/animations/text";

<ShinyText>متن درخشان</ShinyText>
```

#### Text Pressure
متن با حرکت ماوس تغییر شکل می‌دهد (3D effect).

```tsx
import { TextPressure } from "@/components/animations/text";

<TextPressure pressure={0.3}>متن تعاملی</TextPressure>
```

#### Curved Loop Text
متن به صورت حلقه‌ای چرخان نمایش داده می‌شود.

```tsx
import { CurvedLoopText } from "@/components/animations/text";

<CurvedLoopText text="متن چرخان" radius={150} speed={1} />
```

#### Fuzzy Text
هر کاراکتر به صورت تصادفی حرکت می‌کند.

```tsx
import { FuzzyText } from "@/components/animations/text";

<FuzzyText intensity={2}>متن فازی</FuzzyText>
```

#### Falling Text
کلمات از بالا به پایین می‌افتند.

```tsx
import { FallingText } from "@/components/animations/text";

<FallingText delay={0.2}>متن در حال سقوط</FallingText>
```

#### Text Cursor
انیمیشن تایپ کردن با cursor.

```tsx
import { TextCursor } from "@/components/animations/text";

<TextCursor text="متن تایپ شده" speed={100} />
```

#### Decrypted Text
متن به صورت رمزگشایی شده نمایش داده می‌شود.

```tsx
import { DecryptedText } from "@/components/animations/text";

<DecryptedText text="متن رمزگشایی" duration={2} />
```

#### True Focus Text
فقط قسمتی که ماوس روی آن است واضح است.

```tsx
import { TrueFocusText } from "@/components/animations/text";

<TrueFocusText blurAmount={5}>متن فوکوس</TrueFocusText>
```

#### Scroll Float Text
متن با اسکرول شناور می‌شود.

```tsx
import { ScrollFloatText } from "@/components/animations/text";

<ScrollFloatText floatAmount={50}>متن شناور</ScrollFloatText>
```

#### ASCII Text
متن به صورت ASCII تبدیل می‌شود.

```tsx
import { ASCIIText } from "@/components/animations/text";

<ASCIIText text="ASCII TEXT" duration={2} />
```

#### Scrambled Text
متن به صورت درهم ریخته نمایش داده می‌شود.

```tsx
import { ScrambledText } from "@/components/animations/text";

<ScrambledText text="متن درهم" duration={1.5} />
```

#### Rotating Text
متن به صورت چرخان نمایش داده می‌شود.

```tsx
import { RotatingText } from "@/components/animations/text";

<RotatingText rotationSpeed={1}>متن چرخان</RotatingText>
```

#### Glitch Text
افکت glitch روی متن.

```tsx
import { GlitchText } from "@/components/animations/text";

<GlitchText intensity={5}>متن گلیچ</GlitchText>
```

#### Scroll Velocity Text
متن با سرعت اسکرول حرکت می‌کند.

```tsx
import { ScrollVelocityText } from "@/components/animations/text";

<ScrollVelocityText speed={1}>متن سرعتی</ScrollVelocityText>
```

#### Variable Proximity Text
کاراکترها با نزدیک شدن ماوس بزرگ می‌شوند.

```tsx
import { VariableProximityText } from "@/components/animations/text";

<VariableProximityText maxScale={1.5}>متن تعاملی</VariableProximityText>
```

#### Count Up Text
عدد از صفر شروع می‌شود و به مقدار نهایی می‌رسد.

```tsx
import { CountUpText } from "@/components/animations/text";

<CountUpText value={100} duration={2} suffix="+" />
```

### 2. انیمیشن‌های محتوا (Content Animations)

#### Fade Content
محتوا به صورت fade-in نمایش داده می‌شود.

```tsx
import { FadeContent } from "@/components/animations/content";

<FadeContent delay={0.2} duration={1}>
  <div>محتوا</div>
</FadeContent>
```

#### Electric Border
حاشیه با افکت الکتریکی.

```tsx
import { ElectricBorder } from "@/components/animations/content";

<ElectricBorder color="#00ff00" intensity={2}>
  <div>محتوا</div>
</ElectricBorder>
```

#### Pixel Transition
انتقال با افکت پیکسلی.

```tsx
import { PixelTransition } from "@/components/animations/content";

<PixelTransition pixelSize={20}>
  <div>محتوا</div>
</PixelTransition>
```

#### Glare Hover
افکت درخشش هنگام hover.

```tsx
import { GlareHover } from "@/components/animations/content";

<GlareHover>
  <div>محتوا</div>
</GlareHover>
```

#### Antigravity
محتوا با حرکت ماوس جذب می‌شود.

```tsx
import { Antigravity } from "@/components/animations/content";

<Antigravity strength={0.5}>
  <div>محتوا</div>
</Antigravity>
```

#### Logo Loop
لوگو به صورت چرخان.

```tsx
import { LogoLoop } from "@/components/animations/content";

<LogoLoop speed={1}>
  <img src="/logo.png" />
</LogoLoop>
```

#### Target Cursor
Cursor به صورت target نمایش داده می‌شود.

```tsx
import { TargetCursor } from "@/components/animations/content";

<TargetCursor size={100}>
  <div>محتوا</div>
</TargetCursor>
```

#### Laser Flow
خط لیزری که از چپ به راست حرکت می‌کند.

```tsx
import { LaserFlow } from "@/components/animations/content";

<LaserFlow color="#00ff00" speed={2}>
  <div>محتوا</div>
</LaserFlow>
```

#### Magnet Lines
خطوط مغناطیسی در پس‌زمینه.

```tsx
import { MagnetLines } from "@/components/animations/content";

<MagnetLines lineCount={5} color="#00ff00">
  <div>محتوا</div>
</MagnetLines>
```

#### Ghost Cursor
Cursor شبح‌وار با تاخیر.

```tsx
import { GhostCursor } from "@/components/animations/content";

<GhostCursor delay={0.1}>
  <div>محتوا</div>
</GhostCursor>
```

#### Gradual Blur
blur تدریجی با اسکرول.

```tsx
import { GradualBlur } from "@/components/animations/content";

<GradualBlur maxBlur={10}>
  <div>محتوا</div>
</GradualBlur>
```

#### Click Spark
جرقه هنگام کلیک.

```tsx
import { ClickSpark } from "@/components/animations/content";

<ClickSpark color="#00ff00">
  <button>کلیک کنید</button>
</ClickSpark>
```

#### Magnet
جذب شدن با ماوس.

```tsx
import { Magnet } from "@/components/animations/content";

<Magnet strength={0.3}>
  <div>محتوا</div>
</Magnet>
```

#### Sticker Peel
افکت کندن استیکر.

```tsx
import { StickerPeel } from "@/components/animations/content";

<StickerPeel>
  <div>محتوا</div>
</StickerPeel>
```

#### Pixel Trail
رد پیکسلی با حرکت ماوس.

```tsx
import { PixelTrail } from "@/components/animations/content";

<PixelTrail color="#00ff00">
  <div>محتوا</div>
</PixelTrail>
```

#### Cubes
مکعب‌های شناور.

```tsx
import { Cubes } from "@/components/animations/content";

<Cubes cubeCount={20}>
  <div>محتوا</div>
</Cubes>
```

#### Metallic Paint
افکت رنگ فلزی.

```tsx
import { MetallicPaint } from "@/components/animations/content";

<MetallicPaint>متن فلزی</MetallicPaint>
```

#### Noise
افکت نویز.

```tsx
import { Noise } from "@/components/animations/content";

<Noise intensity={0.1}>
  <div>محتوا</div>
</Noise>
```

#### Shape Blur
blur بر اساس موقعیت ماوس.

```tsx
import { ShapeBlur } from "@/components/animations/content";

<ShapeBlur blurAmount={10}>
  <div>محتوا</div>
</ShapeBlur>
```

#### Crosshair
Crosshair با حرکت ماوس.

```tsx
import { Crosshair } from "@/components/animations/content";

<Crosshair size={20} color="#00ff00">
  <div>محتوا</div>
</Crosshair>
```

#### Image Trail
رد تصویر با حرکت ماوس.

```tsx
import { ImageTrail } from "@/components/animations/content";

<ImageTrail trailLength={5}>
  <div>محتوا</div>
</ImageTrail>
```

#### Ribbons
نوارهای متحرک.

```tsx
import { Ribbons } from "@/components/animations/content";

<Ribbons ribbonCount={3} color="#00ff00">
  <div>محتوا</div>
</Ribbons>
```

#### Splash Cursor
افکت splash هنگام کلیک.

```tsx
import { SplashCursor } from "@/components/animations/content";

<SplashCursor color="#00ff00">
  <div>محتوا</div>
</SplashCursor>
```

#### Meta Balls
توپ‌های متحرک.

```tsx
import { MetaBalls } from "@/components/animations/content";

<MetaBalls ballCount={5} color="#00ff00">
  <div>محتوا</div>
</MetaBalls>
```

#### Blob Cursor
Cursor به صورت blob.

```tsx
import { BlobCursor } from "@/components/animations/content";

<BlobCursor size={100} color="#00ff00">
  <div>محتوا</div>
</BlobCursor>
```

#### Star Border
ستاره‌ها در حاشیه.

```tsx
import { StarBorder } from "@/components/animations/content";

<StarBorder starCount={20} color="#00ff00">
  <div>محتوا</div>
</StarBorder>
```

### 3. انیمیشن‌های لیست (List Animations)

#### Scroll Stack
لیست با انیمیشن stack هنگام اسکرول.

```tsx
import { ScrollStack } from "@/components/animations/list";

<ScrollStack gap={20}>
  {items.map((item, i) => (
    <div key={i}>{item}</div>
  ))}
</ScrollStack>
```

#### Bubble Menu
منوی حبابی.

```tsx
import { BubbleMenu } from "@/components/animations/list";

<BubbleMenu>
  {menuItems.map((item, i) => (
    <div key={i}>{item}</div>
  ))}
</BubbleMenu>
```

#### Magic Bento
کارت‌های Bento با انیمیشن.

```tsx
import { MagicBento } from "@/components/animations/list";

<MagicBento columns={3}>
  {cards.map((card, i) => (
    <div key={i}>{card}</div>
  ))}
</MagicBento>
```

#### Circular Gallery
گالری دایره‌ای.

```tsx
import { CircularGallery } from "@/components/animations/list";

<CircularGallery radius={200} speed={1}>
  {items.map((item, i) => (
    <div key={i}>{item}</div>
  ))}
</CircularGallery>
```

#### Reflective Card
کارت با انعکاس.

```tsx
import { ReflectiveCard } from "@/components/animations/list";

<ReflectiveCard>
  <div>محتوا</div>
</ReflectiveCard>
```

#### Card Nav
ناوبری کارتی.

```tsx
import { CardNav } from "@/components/animations/list";

<CardNav>
  {navItems.map((item, i) => (
    <div key={i}>{item}</div>
  ))}
</CardNav>
```

#### Stack
انیمیشن stack.

```tsx
import { Stack } from "@/components/animations/list";

<Stack gap={10}>
  {items.map((item, i) => (
    <div key={i}>{item}</div>
  ))}
</Stack>
```

#### Fluid Glass
شیشه مایع.

```tsx
import { FluidGlass } from "@/components/animations/list";

<FluidGlass>
  <div>محتوا</div>
</FluidGlass>
```

#### Pill Nav
ناوبری pill.

```tsx
import { PillNav } from "@/components/animations/list";

<PillNav>
  {navItems.map((item, i) => (
    <div key={i}>{item}</div>
  ))}
</PillNav>
```

#### Tilted Card
کارت کج شده.

```tsx
import { TiltedCard } from "@/components/animations/list";

<TiltedCard maxTilt={15}>
  <div>محتوا</div>
</TiltedCard>
```

#### Masonry
چیدمان masonry.

```tsx
import { Masonry } from "@/components/animations/list";

<Masonry columns={3}>
  {items.map((item, i) => (
    <div key={i}>{item}</div>
  ))}
</Masonry>
```

#### Glass Surface
سطح شیشه‌ای.

```tsx
import { GlassSurface } from "@/components/animations/list";

<GlassSurface>
  <div>محتوا</div>
</GlassSurface>
```

#### Dome Gallery
گالری گنبدی.

```tsx
import { DomeGallery } from "@/components/animations/list";

<DomeGallery radius={300}>
  {items.map((item, i) => (
    <div key={i}>{item}</div>
  ))}
</DomeGallery>
```

#### Chroma Grid
گرید رنگی.

```tsx
import { ChromaGrid } from "@/components/animations/list";

<ChromaGrid columns={4}>
  {items.map((item, i) => (
    <div key={i}>{item}</div>
  ))}
</ChromaGrid>
```

#### Folder
افکت پوشه.

```tsx
import { Folder } from "@/components/animations/list";

<Folder>
  {items.map((item, i) => (
    <div key={i}>{item}</div>
  ))}
</Folder>
```

#### Staggered Menu
منوی staggered.

```tsx
import { StaggeredMenu } from "@/components/animations/list";

<StaggeredMenu>
  {menuItems.map((item, i) => (
    <div key={i}>{item}</div>
  ))}
</StaggeredMenu>
```

#### Profile Card
کارت پروفایل.

```tsx
import { ProfileCard } from "@/components/animations/list";

<ProfileCard>
  <div>محتوا</div>
</ProfileCard>
```

#### Dock
Dock.

```tsx
import { Dock } from "@/components/animations/list";

<Dock>
  {items.map((item, i) => (
    <div key={i}>{item}</div>
  ))}
</Dock>
```

#### Gooey Nav
ناوبری gooey.

```tsx
import { GooeyNav } from "@/components/animations/list";

<GooeyNav>
  {navItems.map((item, i) => (
    <div key={i}>{item}</div>
  ))}
</GooeyNav>
```

#### Pixel Card
کارت پیکسلی.

```tsx
import { PixelCard } from "@/components/animations/list";

<PixelCard pixelSize={10}>
  <div>محتوا</div>
</PixelCard>
```

#### Carousel
کاروسل.

```tsx
import { Carousel } from "@/components/animations/list";

<Carousel autoPlay={true} interval={3000}>
  {items.map((item, i) => (
    <div key={i}>{item}</div>
  ))}
</Carousel>
```

#### Spotlight Card
کارت spotlight.

```tsx
import { SpotlightCard } from "@/components/animations/list";

<SpotlightCard>
  <div>محتوا</div>
</SpotlightCard>
```

#### Flying Posters
پوسترهای پرنده.

```tsx
import { FlyingPosters } from "@/components/animations/list";

<FlyingPosters>
  {posters.map((poster, i) => (
    <div key={i}>{poster}</div>
  ))}
</FlyingPosters>
```

#### Card Swap
تعویض کارت.

```tsx
import { CardSwap } from "@/components/animations/list";

<CardSwap>
  {cards.map((card, i) => (
    <div key={i}>{card}</div>
  ))}
</CardSwap>
```

#### Glass Icons
آیکون‌های شیشه‌ای.

```tsx
import { GlassIcons } from "@/components/animations/list";

<GlassIcons>
  {icons.map((icon, i) => (
    <div key={i}>{icon}</div>
  ))}
</GlassIcons>
```

#### Decay Card
کارت decay.

```tsx
import { DecayCard } from "@/components/animations/list";

<DecayCard>
  <div>محتوا</div>
</DecayCard>
```

#### Flowing Menu
منوی جاری.

```tsx
import { FlowingMenu } from "@/components/animations/list";

<FlowingMenu>
  {menuItems.map((item, i) => (
    <div key={i}>{item}</div>
  ))}
</FlowingMenu>
```

#### Elastic Slider
اسلایدر الاستیک.

```tsx
import { ElasticSlider } from "@/components/animations/list";

<ElasticSlider>
  {slides.map((slide, i) => (
    <div key={i}>{slide}</div>
  ))}
</ElasticSlider>
```

#### Counter
شمارنده.

```tsx
import { Counter } from "@/components/animations/list";

<Counter value={100} duration={2} suffix="+" />
```

#### Infinite Menu
منوی بی‌نهایت.

```tsx
import { InfiniteMenu } from "@/components/animations/list";

<InfiniteMenu speed={1}>
  {items.map((item, i) => (
    <div key={i}>{item}</div>
  ))}
</InfiniteMenu>
```

#### Stepper
Stepper.

```tsx
import { Stepper } from "@/components/animations/list";

<Stepper>
  {steps.map((step, i) => (
    <div key={i}>{step}</div>
  ))}
</Stepper>
```

#### Bounce Cards
کارت‌های bounce.

```tsx
import { BounceCards } from "@/components/animations/list";

<BounceCards>
  {cards.map((card, i) => (
    <div key={i}>{card}</div>
  ))}
</BounceCards>
```

### 4. افکت‌های پس‌زمینه (Background Effects)

#### Liquid Ether
پس‌زمینه اتری مایع.

```tsx
import { LiquidEther } from "@/components/animations/background";

<LiquidEther color="#00ff00" />
```

#### Prism
پس‌زمینه منشوری.

```tsx
import { Prism } from "@/components/animations/background";

<Prism />
```

#### Dark Veil
پرده تاریک.

```tsx
import { DarkVeil } from "@/components/animations/background";

<DarkVeil intensity={0.5} />
```

#### Light Pillar
ستون نور.

```tsx
import { LightPillar } from "@/components/animations/background";

<LightPillar color="#00ff00" />
```

#### Silk
پس‌زمینه ابریشمی.

```tsx
import { Silk } from "@/components/animations/background";

<Silk color="#00ff00" />
```

#### Floating Lines
خطوط شناور.

```tsx
import { FloatingLines } from "@/components/animations/background";

<FloatingLines lineCount={10} color="#00ff00" />
```

#### Light Rays
پرتوهای نور.

```tsx
import { LightRays } from "@/components/animations/background";

<LightRays color="#00ff00" />
```

#### Pixel Blast
انفجار پیکسلی.

```tsx
import { PixelBlast } from "@/components/animations/background";

<PixelBlast color="#00ff00" />
```

#### Color Bends
خمیدگی رنگ.

```tsx
import { ColorBends } from "@/components/animations/background";

<ColorBends />
```

#### Aurora
شفق قطبی.

```tsx
import { Aurora } from "@/components/animations/background";

<Aurora />
```

#### Plasma
پلاسما.

```tsx
import { Plasma } from "@/components/animations/background";

<Plasma />
```

#### Particles Background
پس‌زمینه ذرات.

```tsx
import { ParticlesBg } from "@/components/animations/background";

<ParticlesBg particleCount={100} color="#00ff00" />
```

#### Gradient Blinds
پرده‌های گرادیان.

```tsx
import { GradientBlinds } from "@/components/animations/background";

<GradientBlinds blindCount={10} />
```

#### Grid Scan
اسکن گرید.

```tsx
import { GridScan } from "@/components/animations/background";

<GridScan color="#00ff00" />
```

#### Beams
پرتوها.

```tsx
import { Beams } from "@/components/animations/background";

<Beams beamCount={5} color="#00ff00" />
```

#### Pixel Snow
برف پیکسلی.

```tsx
import { PixelSnow } from "@/components/animations/background";

<PixelSnow snowCount={100} color="#ffffff" />
```

#### Lightning
رعد و برق.

```tsx
import { Lightning } from "@/components/animations/background";

<Lightning color="#00ffff" />
```

#### Prismatic Burst
انفجار منشوری.

```tsx
import { PrismaticBurst } from "@/components/animations/background";

<PrismaticBurst />
```

#### Galaxy
کهکشان.

```tsx
import { Galaxy } from "@/components/animations/background";

<Galaxy />
```

#### Dither
Dither.

```tsx
import { Dither } from "@/components/animations/background";

<Dither intensity={0.1} />
```

#### Faulty Terminal
ترمینال معیوب.

```tsx
import { FaultyTerminal } from "@/components/animations/background";

<FaultyTerminal color="#00ff00" />
```

#### Ripple Grid
گرید موجی.

```tsx
import { RippleGrid } from "@/components/animations/background";

<RippleGrid color="#00ff00" />
```

#### Dot Grid
گرید نقطه‌ای.

```tsx
import { DotGrid } from "@/components/animations/background";

<DotGrid color="#00ff00" dotSize={2} spacing={30} />
```

#### Threads
نخ‌ها.

```tsx
import { Threads } from "@/components/animations/background";

<Threads color="#00ff00" />
```

#### Hyperspeed
سرعت بالا.

```tsx
import { Hyperspeed } from "@/components/animations/background";

<Hyperspeed color="#00ff00" />
```

#### Iridescence
رنگین‌کمانی.

```tsx
import { Iridescence } from "@/components/animations/background";

<Iridescence />
```

#### Waves
موج‌ها.

```tsx
import { Waves } from "@/components/animations/background";

<Waves color="#00ff00" />
```

#### Grid Distortion
تحریف گرید.

```tsx
import { GridDistortion } from "@/components/animations/background";

<GridDistortion color="#00ff00" />
```

#### Ballpit
گودال توپ.

```tsx
import { Ballpit } from "@/components/animations/background";

<Ballpit ballCount={50} />
```

#### Orb
کره.

```tsx
import { Orb } from "@/components/animations/background";

<Orb color="#00ff00" />
```

#### Letter Glitch
گلیچ حروف.

```tsx
import { LetterGlitch } from "@/components/animations/background";

<LetterGlitch text="GLITCH" color="#00ff00" />
```

#### Grid Motion
حرکت گرید.

```tsx
import { GridMotion } from "@/components/animations/background";

<GridMotion color="#00ff00" />
```

#### Squares
مربع‌ها.

```tsx
import { Squares } from "@/components/animations/background";

<Squares squareCount={20} color="#00ff00" />
```

#### Liquid Chrome
کروم مایع.

```tsx
import { LiquidChrome } from "@/components/animations/background";

<LiquidChrome />
```

#### Balatro
Balatro.

```tsx
import { Balatro } from "@/components/animations/background";

<Balatro />
```

## 🎯 نکات استفاده

1. تمام کامپوننت‌ها از GSAP استفاده می‌کنند و ScrollTrigger برای انیمیشن‌های scroll-based.
2. می‌توانید پارامترهای مختلف را برای سفارشی‌سازی تنظیم کنید.
3. برای عملکرد بهتر، از `use client` در کامپوننت‌های خود استفاده کنید.
4. تمام انیمیشن‌ها responsive هستند و با اندازه صفحه سازگارند.

## 📝 مثال کامل

```tsx
"use client";

import { SplitText, FadeContent, LiquidEther } from "@/components/animations";

export default function HomePage() {
  return (
    <div>
      <LiquidEther color="#00ff00" />
      
      <FadeContent delay={0.2}>
        <SplitText delay={0.1}>
          <h1>عنوان صفحه</h1>
        </SplitText>
      </FadeContent>
    </div>
  );
}
```

## 🚀 بهینه‌سازی

- تمام انیمیشن‌ها با `useEffect` مدیریت می‌شوند و cleanup می‌شوند.
- برای انیمیشن‌های scroll-based از ScrollTrigger استفاده شده است.
- Canvas-based animations برای عملکرد بهتر استفاده شده‌اند.

## 📚 منابع

- [GSAP Documentation](https://greensock.com/docs/)
- [ScrollTrigger Plugin](https://greensock.com/docs/v3/Plugins/ScrollTrigger)

