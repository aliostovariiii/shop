"use client";

import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

/**
 * کامپوننت سوالات متداول - FAQ Component
 * 
 * این کامپوننت شامل:
 * - نمایش 3-4 سوال مهم در صفحه اصلی
 * - دکمه "مشاهده بیشتر" برای رفتن به صفحه کامل سوالات
 * - طراحی آکاردئون ساده
 * 
 * استفاده از آیکون‌ها: lucide-react (ChevronDown, ChevronUp)
 * استایل: Tailwind CSS
 */
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // سوالات مهم برای صفحه اصلی - Important FAQs for home page
  const faqs = [
    {
      question: 'آیا نیاز به سیم‌کارت دارد؟',
      answer: 'بله، برای فعال‌سازی GPS باید سیم‌کارت داخل مچ‌بند قرار گیرد. سیم‌کارت باید دارای بسته اینترنت باشد تا دستگاه بتواند اطلاعات را ارسال کند.'
    },
    {
      question: 'چطور مچ‌بند را راه‌اندازی کنیم؟',
      answer: 'راه‌اندازی در 4 مرحله ساده: 1) سفارش مچ‌بند 2) نصب اپلیکیشن 3) اتصال دستگاه 4) مشاهده اطلاعات. تمام مراحل در راهنمای همراه محصول توضیح داده شده است.'
    },
    {
      question: 'آیا مچ‌بند ضدآب است؟',
      answer: 'بله، تا سطح IP67 مقاوم در برابر پاشش آب و تعریق است. این یعنی می‌توانید در حین شستشو یا بارندگی آن را استفاده کنید، اما برای شنا یا دوش مناسب نیست.'
    },
    {
      question: 'آیا اپلیکیشن رایگان است؟',
      answer: 'بله، اپلیکیشن کاملاً رایگان است و فقط برای استفاده از خدمات پیشرفته مانند ذخیره‌سازی ابری، پشتیبانی ۲۴ ساعته و امکانات پیشرفته نیاز به اشتراک ماهانه دارید.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* عنوان بخش - Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--gray-900)' }}>
            سوالاتی که شاید برای شما هم پیش آمده باشد
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--gray-600)' }}>
            پاسخ سوالات متداول درباره مچ‌بند هوشمند و خدمات ما
          </p>
        </div>

        {/* سوالات متداول - FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-right p-4 bg-white hover:bg-gray-50 flex items-center justify-between transition-colors duration-200"
              >
                <span className="text-base font-medium" style={{ color: 'var(--gray-900)' }}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--primary-color)' }} />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="p-4 pt-0 text-sm leading-relaxed" style={{ color: 'var(--gray-600)' }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* دکمه مشاهده بیشتر - View More Button */}
        <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--gray-900)' }}>
              سوال دیگری دارید؟
            </h3>
            <p className="mb-4" style={{ color: 'var(--gray-600)' }}>
              تیم پشتیبانی ما آماده پاسخ‌گویی به سوالات شما است
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                className="px-4 py-2 text-white rounded-lg font-medium transition-all duration-300 hover:transform hover:translate-y-[-1px]"
                style={{ backgroundColor: 'var(--primary-color)' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--primary-hover)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--primary-color)'}
              >
                تماس با پشتیبانی
              </button>
              <Link 
                href="/faq"
                className="px-4 py-2 border-2 rounded-lg font-medium transition-all duration-300 hover:text-white"
                style={{ 
                  borderColor: 'var(--primary-color)', 
                  color: 'var(--primary-color)' 
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'var(--primary-color)';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'var(--primary-color)';
                }}
              >
                مشاهده همه سوالات
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;