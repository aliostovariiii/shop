"use client";

import Link from 'next/link';
import { Heart, Shield, MapPin, Bell } from 'lucide-react';

/**
 * کامپوننت بخش معرفی - Hero Section Component
 * 
 * این کامپوننت شامل:
 * - عنوان اصلی و توضیحات
 * - ویژگی‌های کلیدی محصول
 * - دکمه‌های فراخوان به عمل
 * - تصویر محصول
 * 
 * استفاده از آیکون‌ها: lucide-react
 * استایل: Tailwind CSS با متغیرهای CSS سفارشی
 */
const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden">
      {/* عناصر پس‌زمینه - Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[var(--primary-color)] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--primary-color)] opacity-3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* محتوای متنی - Text Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-[var(--primary-color)] bg-opacity-10 text-[var(--primary-color)] text-sm font-medium rounded-full mb-4">
                🚀 فناوری نوین مراقبت از سلامت
              </span>
              
              {/* عنوان اصلی - Main Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--gray-900)] leading-tight mb-6">
                یک مراقب هوشمند،{' '}
                <span className="text-[var(--primary-color)] relative">
                  همیشه همراه
                </span>{' '}
                خانواده‌تان
              </h1>
              
              {/* توضیحات - Description */}
              <p className="text-xl text-[var(--gray-600)] leading-relaxed mb-8 max-w-2xl">
                ترکیبی از فناوری و آسایش خاطر. مچ‌بند هوشمند ما، با پایش مداوم سلامت، 
                موقعیت‌یابی دقیق و دکمه اضطراری، راهی هوشمند برای مراقبت از عزیزانتان است.
              </p>
            </div>

            {/* پیش‌نمایش ویژگی‌ها - Features Preview */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-10 h-10 bg-[var(--primary-color)] bg-opacity-10 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-[var(--primary-color)]" />
                </div>
                <span className="text-[var(--gray-700)] font-medium">پایش علائم حیاتی</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-10 h-10 bg-[var(--primary-color)] bg-opacity-10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[var(--primary-color)]" />
                </div>
                <span className="text-[var(--gray-700)] font-medium">موقعیت‌یابی GPS</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-10 h-10 bg-[var(--primary-color)] bg-opacity-10 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[var(--primary-color)]" />
                </div>
                <span className="text-[var(--gray-700)] font-medium">دکمه SOS</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-10 h-10 bg-[var(--primary-color)] bg-opacity-10 rounded-lg flex items-center justify-center">
                  <Bell className="w-5 h-5 text-[var(--primary-color)]" />
                </div>
                <span className="text-[var(--gray-700)] font-medium">یادآوری هوشمند</span>
              </div>
            </div>

            {/* دکمه‌های فراخوان به عمل - CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/shop"
                className="btn-primary text-center"
              >
                همین حالا سفارش دهید
              </Link>
              <button className="px-6 py-3 border-2 border-[var(--primary-color)] text-[var(--primary-color)] rounded-lg font-medium transition-smooth hover:bg-[var(--primary-color)] hover:text-white">
                مشاهده نمونه کار
              </button>
            </div>
          </div>

          {/* تصویر محصول - Product Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* کارت محصول - Product Card */}
              <div className="relative z-10 bg-white rounded-3xl p-6 shadow-xl border border-[var(--gray-200)]">
                <div className="aspect-square bg-gradient-to-br from-[var(--primary-color)] to-[var(--primary-hover)] rounded-2xl flex items-center justify-center p-4">
                  <img 
                    src="https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="مچ‌بند هوشمند" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;