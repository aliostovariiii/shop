"use client";

import { ShoppingCart, Smartphone, Link, BarChart3 } from 'lucide-react';

/**
 * کامپوننت نحوه کار - How It Works Component
 * نمایش مراحل راه‌اندازی مچ‌بند به صورت ساده و قابل فهم
 * Simple and understandable display of smartwatch setup steps
 */
const HowItWorks = () => {
  // مراحل راه‌اندازی - Setup Steps
  const steps = [
    {
      icon: ShoppingCart,
      title: 'سفارش مچ‌بند',
      description: 'سفارش آنلاین سریع و آسان'
    },
    {
      icon: Smartphone,
      title: 'نصب اپلیکیشن',
      description: 'دانلود اپ از استور'
    },
    {
      icon: Link,
      title: 'اتصال دستگاه',
      description: 'تنظیمات ساده در اپ'
    },
    {
      icon: BarChart3,
      title: 'مشاهده اطلاعات',
      description: 'پایش و دریافت هشدارها'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* عنوان بخش - Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: 'var(--gray-900)' }}>
            چطور مچ‌بند را راه‌اندازی کنیم؟
          </h2>
          <p className="text-lg" style={{ color: 'var(--gray-dark)' }}>
            در چند مرحله ساده، مچ‌بند هوشمند شما آماده استفاده خواهد بود
          </p>
        </div>

        {/* مراحل - Steps */}
        <div className="overflow-x-auto horizontal-scroll">
          <div className="flex gap-4 pb-4 min-w-max">
            {steps.map((step, index) => (
              <div key={index} className="flex-shrink-0 w-64">
                <div 
                  className="bg-white rounded-lg p-6 text-center simple-transition card-shadow"
                  style={{ height: '200px' }}
                >
                  {/* شماره مرحله - Step Number */}
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white mb-4 mx-auto"
                    style={{ backgroundColor: 'var(--primary-color)' }}
                  >
                    {index + 1}
                  </div>

                  {/* آیکون - Icon */}
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto"
                    style={{ backgroundColor: 'var(--primary-color)', opacity: '0.1' }}
                  >
                    <step.icon 
                      className="w-6 h-6" 
                      style={{ color: 'var(--primary-color)' }}
                    />
                  </div>

                  {/* محتوا - Content */}
                  <h3 
                    className="text-lg font-bold mb-2"
                    style={{ color: 'var(--gray-900)' }}
                  >
                    {step.title}
                  </h3>
                  <p 
                    className="text-sm"
                    style={{ color: 'var(--gray-dark)' }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* بخش پشتیبانی - Support Section */}
        <div className="text-center mt-8">
          <div className="bg-white rounded-lg p-6 shadow-md inline-block">
            <h3 
              className="text-xl font-bold mb-3"
              style={{ color: 'var(--gray-900)' }}
            >
              نیاز به راهنمایی دارید؟
            </h3>
            <p 
              className="mb-4"
              style={{ color: 'var(--gray-dark)' }}
            >
              تیم پشتیبانی ما آماده کمک به شما است
            </p>
            <button 
              className="px-6 py-3 text-white rounded-lg font-medium simple-transition primary-hover"
              style={{ backgroundColor: 'var(--primary-color)' }}
            >
              درخواست پشتیبانی
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;