# 📋 تکنولوژی‌های استفاده شده در پروژه

## 🚀 **فریمورک اصلی**

### **Next.js 15**
- **چیست؟** فریمورک React برای ساخت وبسایت
- **چرا؟** سریع، SEO دوست، و آماده برای production
- **کجا استفاده شده؟** کل پروژه روی Next.js ساخته شده

### **React 18**
- **چیست؟** کتابخانه JavaScript برای ساخت رابط کاربری
- **چرا؟** محبوب‌ترین کتابخانه UI
- **کجا استفاده شده؟** همه کامپوننت‌ها با React نوشته شده

### **TypeScript**
- **چیست؟** JavaScript با type safety
- **چرا؟** کمتر باگ، کد بهتر
- **کجا استفاده شده؟** همه فایل‌ها `.tsx` و `.ts` هستند

---

## 🎨 **استایل و UI**

### **Tailwind CSS v4**
- **چیست؟** فریمورک CSS utility-first
- **چرا؟** سریع، قابل تنظیم، responsive
- **کجا استفاده شده؟** همه استایل‌ها با Tailwind
- **مثال:** `className="bg-blue-500 text-white p-4"`

### **ShadCN UI**
- **چیست؟** کامپوننت‌های آماده برای React
- **چرا؟** زیبا، قابل تنظیم، با Tailwind سازگار
- **کجا استفاده شده؟** دکمه‌ها، فرم‌ها، Toast
- **فایل‌ها:** `components/ui/`

### **Lucide React**
- **چیست؟** کتابخانه آیکون
- **چرا؟** آیکون‌های زیبا و مینیمال
- **کجا استفاده شده؟** همه آیکون‌ها
- **مثال:** `<Heart className="w-6 h-6" />`

---

## 🔧 **مدیریت State**

### **React Context**
- **چیست؟** سیستم مدیریت state داخلی React
- **چرا؟** ساده، بدون کتابخانه اضافی
- **کجا استفاده شده؟**
  - `lib/cart-context.tsx` - سبد خرید
  - `lib/auth-context.tsx` - احراز هویت

### **useReducer**
- **چیست؟** هوک React برای state پیچیده
- **چرا؟** بهتر از useState برای logic پیچیده
- **کجا استفاده شده؟** Context ها

### **localStorage**
- **چیست؟** ذخیره‌سازی محلی مرورگر
- **چرا؟** حفظ اطلاعات کاربر
- **کجا استفاده شده؟** احراز هویت، سبد خرید

---

## 📁 **ساختار پروژه**

### **App Router (Next.js 13+)**
- **چیست؟** سیستم routing جدید Next.js
- **چرا؟** قدرتمندتر از Pages Router
- **کجا استفاده شده؟** پوشه `app/`

### **Server Components**
- **چیست؟** کامپوننت‌هایی که روی سرور اجرا می‌شوند
- **چرا؟** سریعتر، SEO بهتر
- **کجا استفاده شده؟** صفحات اصلی

### **Client Components**
- **چیست؟** کامپوننت‌هایی که روی مرورگر اجرا می‌شوند
- **چرا؟** برای تعامل کاربر (onClick, useState)
- **کجا استفاده شده؟** کامپوننت‌های تعاملی
- **نشانه:** `"use client"` در بالای فایل

---

## 🎯 **فایل‌های کلیدی**

```
📦 پروژه
├── 📁 app/                    # صفحات (App Router)
│   ├── page.tsx              # صفحه اصلی
│   ├── layout.tsx            # لایوت کلی
│   ├── globals.css           # استایل‌های کلی
│   └── 📁 [pages]/           # صفحات دیگر
│
├── 📁 components/            # کامپوننت‌های قابل استفاده مجدد
│   ├── 📁 ui/               # کامپوننت‌های ShadCN UI
│   ├── 📁 layout/           # هدر، فوتر
│   └── 📁 sections/         # بخش‌های صفحه اصلی
│
├── 📁 lib/                  # کتابخانه‌ها و Context ها
│   ├── cart-context.tsx     # مدیریت سبد خرید
│   ├── auth-context.tsx     # مدیریت احراز هویت
│   └── utils.ts             # توابع کمکی
│
├── 📁 hooks/                # هوک‌های سفارشی
│   └── use-toast.ts         # هوک Toast
│
├── tailwind.config.ts       # تنظیمات Tailwind
├── package.json             # وابستگی‌ها
└── tsconfig.json            # تنظیمات TypeScript
```

---

## 📦 **وابستگی‌های اصلی (package.json)**

### **Production Dependencies:**
```json
{
  "next": "15.0.0",           // فریمورک اصلی
  "react": "18.0.0",          // کتابخانه UI
  "react-dom": "18.0.0",      // React برای DOM
  "typescript": "5.0.0",      // Type Safety
  "tailwindcss": "4.0.0",     // استایل
  "lucide-react": "^0.400.0", // آیکون‌ها
  "clsx": "^2.0.0",           // ترکیب className ها
  "tailwind-merge": "^2.0.0"  // ادغام Tailwind classes
}
```

### **Development Dependencies:**
```json
{
  "@types/node": "20.0.0",     // Types برای Node.js
  "@types/react": "18.0.0",    // Types برای React
  "autoprefixer": "10.0.0",    // CSS prefixes
  "postcss": "8.0.0"           // CSS processor
}
```

---

## 🔍 **چگونه کار می‌کند؟**

### **1. مسیر درخواست:**
```
کاربر → Next.js Router → صفحه → کامپوننت → Tailwind CSS → نمایش
```

### **2. مدیریت State:**
```
کاربر کلیک → Context → useReducer → localStorage → UI آپدیت
```

### **3. استایل:**
```
کامپوننت → Tailwind Classes → CSS Variables → نمایش نهایی
```

---

## 🚀 **برای شروع پروژه جدید:**

### **1. نصب Next.js:**
```bash
npx create-next-app@latest my-project --typescript --tailwind --app
```

### **2. نصب وابستگی‌ها:**
```bash
npm install lucide-react clsx tailwind-merge
```

### **3. تنظیم ShadCN UI:**
```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button
```

### **4. کپی فایل‌ها:**
- `app/globals.css` - استایل‌های کلی
- `components/` - کامپوننت‌ها
- `lib/` - Context ها
- `tailwind.config.ts` - تنظیمات

---

## 💡 **نکات مهم:**

### **چرا این تکنولوژی‌ها؟**
- **Next.js:** محبوب‌ترین فریمورک React
- **Tailwind:** سریع‌ترین راه نوشتن CSS
- **TypeScript:** کمتر باگ، کد بهتر
- **Context:** ساده‌ترین state management

### **مزایا:**
- ✅ سریع و بهینه
- ✅ SEO دوست
- ✅ قابل توسعه
- ✅ مدرن و به‌روز

### **معایب:**
- ❌ یادگیری اولیه
- ❌ وابستگی به JavaScript
- ❌ نیاز به build process

---

## 📚 **منابع یادگیری:**

1. **Next.js:** https://nextjs.org/docs
2. **Tailwind CSS:** https://tailwindcss.com/docs
3. **React:** https://react.dev
4. **TypeScript:** https://www.typescriptlang.org/docs
5. **ShadCN UI:** https://ui.shadcn.com

---

**خلاصه:** این پروژه با مدرن‌ترین تکنولوژی‌های وب ساخته شده و برای production آماده است! 🎉