# 📚 مستندات کامل پروژه مچ‌بند هوشمند

## 🎯 معرفی پروژه

این پروژه یک وبسایت فروشگاهی کامل برای مچ‌بند هوشمند است که با **Next.js 15** و **Tailwind CSS v4** ساخته شده است.

## 🛠 تکنولوژی‌های استفاده شده

### Frontend Framework
- **Next.js 15**: فریمورک React برای ساخت اپلیکیشن‌های وب
- **React 18**: کتابخانه UI
- **TypeScript**: برای type safety

### Styling & UI
- **Tailwind CSS v4**: فریمورک CSS utility-first
- **ShadCN UI**: کامپوننت‌های آماده و قابل تنظیم
- **Lucide React**: کتابخانه آیکون‌های مینیمال

### State Management
- **React Context**: برای مدیریت وضعیت سبد خرید و احراز هویت
- **useReducer**: برای مدیریت state پیچیده

### Fonts
- **فونت شبنم**: فونت فارسی اصلی پروژه

## 📁 ساختار پروژه

```
project/
├── app/                          # صفحات اصلی (App Router)
│   ├── page.tsx                  # صفحه اصلی
│   ├── shop/page.tsx             # فروشگاه
│   ├── cart/page.tsx             # سبد خرید
│   ├── checkout/page.tsx         # پرداخت
│   ├── login/page.tsx            # ورود
│   ├── register/page.tsx         # ثبت نام
│   ├── dashboard/page.tsx        # داشبورد کاربر
│   ├── about/page.tsx            # درباره ما
│   ├── contact/page.tsx          # تماس با ما
│   ├── faq/page.tsx             # سوالات متداول
│   ├── layout.tsx               # لایوت اصلی
│   └── globals.css              # استایل‌های کلی
│
├── components/                   # کامپوننت‌های قابل استفاده مجدد
│   ├── layout/                  # کامپوننت‌های لایوت
│   │   ├── header.tsx           # هدر سایت
│   │   └── footer.tsx           # فوتر سایت
│   ├── sections/                # بخش‌های صفحه اصلی
│   │   ├── hero.tsx             # بخش معرفی
│   │   ├── features.tsx         # ویژگی‌ها
│   │   ├── target-audience.tsx  # مخاطبان هدف
│   │   ├── subscription.tsx     # اشتراک
│   │   ├── app-features.tsx     # ویژگی‌های اپ
│   │   ├── faq.tsx             # سوالات متداول
│   │   └── final-cta.tsx       # فراخوان نهایی
│   └── ui/                      # کامپوننت‌های UI
│       └── button-custom.tsx    # دکمه سفارشی
│
├── lib/                         # کتابخانه‌ها و utilities
│   ├── cart-context.tsx         # کانتکست سبد خرید
│   ├── auth-context.tsx         # کانتکست احراز هویت
│   └── utils.ts                 # توابع کمکی
│
├── hooks/                       # هوک‌های سفارشی
│   └── use-toast.ts            # هوک Toast
│
└── package.json                 # وابستگی‌ها و scripts
```

## 🎨 سیستم طراحی

### پالت رنگی
```css
:root {
  --primary-color: #009688;      /* رنگ اصلی (سبز دریایی) */
  --primary-hover: #00695c;      /* حالت hover */
  --primary-light: #4db6ac;      /* رنگ روشن */
  
  --gray-50: #f9fafb;            /* پس‌زمینه ملایم */
  --gray-100: #f3f4f6;           /* پس‌زمینه کارت‌ها */
  --gray-900: #111827;           /* متن اصلی */
  
  --success: #10b981;            /* موفقیت */
  --warning: #f59e0b;            /* هشدار */
  --error: #ef4444;              /* خطا */
  --info: #3b82f6;               /* اطلاعات */
}
```

### فونت
```css
--font-primary: 'Shabnam', Tahoma, Arial, sans-serif;
```

## 🔧 نصب و راه‌اندازی

### پیش‌نیازها
- Node.js 18 یا بالاتر
- npm یا yarn

### مراحل نصب

1. **کلون کردن پروژه**
```bash
git clone [repository-url]
cd smartwatch-project
```

2. **نصب وابستگی‌ها**
```bash
npm install
```

3. **اجرای پروژه در حالت توسعه**
```bash
npm run dev
```

4. **ساخت پروژه برای production**
```bash
npm run build
npm start
```

## 📦 وابستگی‌های اصلی

```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^4.0.0",
    "lucide-react": "^0.400.0",
    "@radix-ui/react-toast": "^1.0.0",
    "@radix-ui/react-tooltip": "^1.0.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  }
}
```

## 🎯 ویژگی‌های کلیدی

### 1. سیستم احراز هویت
- ورود با ایمیل/رمز عبور
- ورود با شماره موبایل (شبیه‌سازی SMS)
- ثبت نام
- فراموشی رمز عبور
- داشبورد کاربر

### 2. سیستم فروشگاه
- نمایش محصولات
- افزودن به سبد خرید
- مدیریت سبد خرید
- فرآیند پرداخت کامل

### 3. صفحات اطلاعاتی
- صفحه اصلی با بخش‌های مختلف
- درباره ما
- تماس با ما
- سوالات متداول

## 🔄 مدیریت State

### Cart Context
```typescript
// استفاده از کانتکست سبد خرید
const { state, dispatch } = useCart();

// افزودن محصول
dispatch({ type: 'ADD_TO_CART', payload: product });

// حذف محصول
dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
```

### Auth Context
```typescript
// استفاده از کانتکست احراز هویت
const { user, login, logout } = useAuth();

// ورود کاربر
const success = await login(email, password);

// خروج کاربر
logout();
```

## 🎨 استفاده از ShadCN UI

### نصب کامپوننت جدید
```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add input
```

### استفاده از کامپوننت‌ها
```tsx
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

<Button variant="default" size="lg">
  دکمه
</Button>
```

## 🍞 سیستم Toast

### استفاده از Toast
```tsx
import { useToast } from "@/hooks/use-toast"

const { toast } = useToast()

// نمایش پیام موفقیت
toast({
  title: "موفقیت",
  description: "عملیات با موفقیت انجام شد",
  variant: "default"
})

// نمایش پیام خطا
toast({
  title: "خطا",
  description: "مشکلی پیش آمده است",
  variant: "destructive"
})
```

## 📱 طراحی ریسپانسیو

### Breakpoints
```css
/* موبایل: پیش‌فرض */
/* تبلت: md (768px+) */
/* دسکتاپ: lg (1024px+) */
/* دسکتاپ بزرگ: xl (1280px+) */
```

### مثال استفاده
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* محتوا */}
</div>
```

## 🎯 بهترین practices

### 1. ساختار کامپوننت
```tsx
/**
 * کامپوننت نمونه - Sample Component
 * 
 * توضیحات کامپوننت
 * Component description
 * 
 * Props:
 * - title: عنوان
 * - description: توضیحات
 */
const SampleComponent = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}
```

### 2. استفاده از CSS Variables
```tsx
// بجای hardcode کردن رنگ‌ها
<div style={{ color: 'var(--primary-color)' }}>
  محتوا
</div>
```

### 3. Type Safety
```typescript
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}
```

## 🚀 توسعه و سفارشی‌سازی

### اضافه کردن صفحه جدید
1. فایل جدید در پوشه `app/` بسازید
2. کامپوننت React export کنید
3. در منو اضافه کنید

### اضافه کردن کامپوننت جدید
1. فایل در `components/` بسازید
2. کامپوننت را export کنید
3. در جای مورد نظر import کنید

### تغییر رنگ‌ها
1. فایل `globals.css` را باز کنید
2. متغیرهای `:root` را تغییر دهید
3. تغییرات خودکار اعمال می‌شود

## 🐛 رفع مشکلات رایج

### مشکل فونت
```css
/* اطمینان از بارگذاری فونت */
* {
  font-family: 'Shabnam', Tahoma, Arial, sans-serif;
}
```

### مشکل RTL
```css
/* تنظیم جهت متن */
* {
  direction: rtl;
  text-align: right;
}
```

### مشکل Hydration
```tsx
// استفاده از useEffect برای client-side rendering
useEffect(() => {
  // کد client-side
}, [])
```

## 📞 پشتیبانی

برای سوالات و مشکلات:
- ایمیل: support@example.com
- تلفن: ۰۲۱-۱۲۳۴۵۶۷۸

## 📄 مجوز

این پروژه تحت مجوز MIT منتشر شده است.