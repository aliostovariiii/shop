import './globals.css';
import type { Metadata } from 'next';
import { CartProvider } from '@/lib/cart-context';
import { AuthProvider } from '@/lib/auth-context';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'مچ‌بند هوشمند - مراقب همیشگی خانواده',
  description: 'مچ‌بند هوشمند با پایش سلامت، GPS و دکمه SOS. راهی هوشمند برای مراقبت از عزیزان',
  keywords: 'مچ‌بند هوشمند، پایش سلامت، GPS، SOS، سالمندان، کودکان',
};

/**
 * لایوت اصلی اپلیکیشن - Main Application Layout
 * شامل کانتکست سبد خرید، احراز هویت، هدر و فوتر
 * Contains cart context, authentication context, header and footer
 * 
 * ساختار فولدر کامپوننت‌های صفحه اصلی:
 * Home Page Components Folder Structure:
 * 
 * components/
 *   layout/
 *     header.tsx (هدر با منو و سبد خرید - Header with menu and cart)
 *     footer.tsx (فوتر - Footer)
 *   sections/
 *     hero.tsx (بخش معرفی - Hero section)
 *     features.tsx (ویژگی‌ها - Features)
 *     target-audience.tsx (مخاطبان هدف - Target audience)
 *     how-it-works.tsx (نحوه کار - How it works)
 *     subscription.tsx (اشتراک - Subscription)
 *     app-features.tsx (ویژگی‌های اپ - App features)
 *     faq.tsx (سوالات متداول - FAQ)
 *     final-cta.tsx (فراخوان نهایی - Final CTA)
 *   ui/
 *     button-custom.tsx (دکمه سفارشی - Custom button)
 * 
 * lib/
 *   cart-context.tsx (کانتکست سبد خرید - Cart context)
 *   design-system.ts (سیستم طراحی - Design system)
 * 
 * app/
 *   page.tsx (صفحه اصلی - Home page)
 *   shop/
 *     page.tsx (فروشگاه - Shop)
 *   cart/
 *     page.tsx (سبد خرید - Cart)
 *   checkout/
 *     page.tsx (پرداخت - Checkout)
 *   login/
 *     page.tsx (ورود - Login)
 *   register/
 *     page.tsx (ثبت نام - Register)
 *   dashboard/
 *     page.tsx (پرداخت - Checkout)
 */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <AuthProvider>
          <CartProvider>
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}