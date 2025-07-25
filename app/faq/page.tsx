"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle } from 'lucide-react';

/**
 * صفحه سوالات متداول - FAQ Page
 * 
 * این صفحه شامل:
 * - تمام سوالات متداول
 * - جستجو در سوالات
 * - دسته‌بندی سوالات
 * - فرم ارسال سوال جدید
 * 
 * استفاده از آیکون‌ها: lucide-react
 * - ChevronDown/ChevronUp: باز/بسته کردن سوالات
 * - Search: جستجو
 * - HelpCircle: آیکون کمک
 * 
 * استایل: Tailwind CSS
 */
const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('همه');

  // تمام سوالات متداول - All FAQs
  const allFaqs = [
    {
      category: 'عمومی',
      question: 'آیا نیاز به سیم‌کارت دارد؟',
      answer: 'بله، برای فعال‌سازی GPS باید سیم‌کارت داخل مچ‌بند قرار گیرد. سیم‌کارت باید دارای بسته اینترنت باشد تا دستگاه بتواند اطلاعات را ارسال کند.'
    },
    {
      category: 'راه‌اندازی',
      question: 'چطور مچ‌بند را راه‌اندازی کنیم؟',
      answer: 'راه‌اندازی در 4 مرحله ساده: 1) سفارش مچ‌بند 2) نصب اپلیکیشن 3) اتصال دستگاه 4) مشاهده اطلاعات. تمام مراحل در راهنمای همراه محصول توضیح داده شده است.'
    },
    {
      category: 'فنی',
      question: 'آیا مچ‌بند ضدآب است؟',
      answer: 'بله، تا سطح IP67 مقاوم در برابر پاشش آب و تعریق است. این یعنی می‌توانید در حین شستشو یا بارندگی آن را استفاده کنید، اما برای شنا یا دوش مناسب نیست.'
    },
    {
      category: 'اپلیکیشن',
      question: 'آیا اپلیکیشن رایگان است؟',
      answer: 'بله، اپلیکیشن کاملاً رایگان است و فقط برای استفاده از خدمات پیشرفته مانند ذخیره‌سازی ابری، پشتیبانی ۲۴ ساعته و امکانات پیشرفته نیاز به اشتراک ماهانه دارید.'
    },
    {
      category: 'فنی',
      question: 'اگر باتری مچ‌بند تمام شود چه اتفاقی می‌افتد؟',
      answer: 'اپلیکیشن زودتر هشدار کاهش شارژ را نمایش می‌دهد. همچنین آخرین موقعیت شناخته شده در سیستم ذخیره می‌شود و پس از شارژ مجدد، دستگاه دوباره به سیستم متصل می‌شود.'
    },
    {
      category: 'عمومی',
      question: 'آیا کار با مچ‌بند برای سالمندان سخت نیست؟',
      answer: 'خیر، دستگاه کاملاً ساده طراحی شده است. فقط یک دکمه SOS دارد و هیچ دکمه اضافی دیگر ندارد. تمام تنظیمات از طریق اپلیکیشن توسط اعضای خانواده انجام می‌شود.'
    },
    {
      category: 'اپلیکیشن',
      question: 'آیا امکان اتصال چند نفر به یک دستگاه وجود دارد؟',
      answer: 'بله، امکان اتصال چندین کاربر به یک دستگاه وجود دارد. مثلاً دو والد می‌توانند همزمان به مچ‌بند فرزند یا والدین خود متصل باشند و هشدارها را دریافت کنند.'
    },
    {
      category: 'اپلیکیشن',
      question: 'آیا اپ فقط موبایلی است؟',
      answer: 'نه، علاوه بر اپلیکیشن موبایل، نسخه PWA داریم که روی مرورگر قابل نصب و استفاده است. این امکان را به شما می‌دهد که از کامپیوتر یا تبلت نیز دسترسی داشته باشید.'
    },
    {
      category: 'خرید',
      question: 'چه مدت زمان برای تحویل محصول نیاز است؟',
      answer: 'در تهران ظرف ۲۴ ساعت و در سایر شهرها ظرف ۲-۳ روز کاری محصول تحویل داده می‌شود. ارسال رایگان برای سفارش‌های بالای ۱ میلیون تومان.'
    },
    {
      category: 'خرید',
      question: 'آیا گارانتی دارد؟',
      answer: 'بله، محصول دارای ۱۲ ماه گارانتی شرکتی است. همچنین ۷ روز ضمانت بازگشت کالا در صورت عدم رضایت وجود دارد.'
    }
  ];

  // دسته‌بندی‌ها - Categories
  const categories = ['همه', 'عمومی', 'فنی', 'اپلیکیشن', 'راه‌اندازی', 'خرید'];

  // فیلتر کردن سوالات - Filter FAQs
  const filteredFaqs = allFaqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'همه' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* بخش هدر - Header Section */}
      <section className="py-16 bg-gradient-to-br from-[var(--primary-color)] to-[var(--primary-hover)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <HelpCircle className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              سوالات متداول
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              پاسخ تمام سوالات شما درباره مچ‌بند هوشمند
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* جستجو و فیلتر - Search and Filter */}
        <div className="mb-12">
          
          {/* جستجو - Search */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="جستجو در سوالات..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
              style={{ fontFamily: 'var(--font-primary)' }}
            />
          </div>

          {/* دسته‌بندی - Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                style={{
                  backgroundColor: selectedCategory === category ? 'var(--primary-color)' : undefined,
                  fontFamily: 'var(--font-primary)'
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* نتایج جستجو - Search Results */}
        {searchTerm && (
          <div className="mb-6">
            <p className="text-gray-600">
              {filteredFaqs.length} نتیجه برای "{searchTerm}" یافت شد
            </p>
          </div>
        )}

        {/* سوالات متداول - FAQ Items */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-right p-6 hover:bg-gray-50 flex items-center justify-between transition-colors duration-200"
                >
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span 
                        className="text-xs px-2 py-1 rounded-full text-white mr-3"
                        style={{ backgroundColor: 'var(--primary-color)' }}
                      >
                        {faq.category}
                      </span>
                    </div>
                    <span className="text-lg font-medium text-gray-900">
                      {faq.question}
                    </span>
                  </div>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--primary-color)' }} />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                سوالی یافت نشد
              </h3>
              <p className="text-gray-600">
                متأسفانه سوالی با این عبارات یافت نشد. لطفاً عبارت دیگری امتحان کنید.
              </p>
            </div>
          )}
        </div>

        {/* فرم ارسال سوال جدید - Submit New Question Form */}
        <div className="mt-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              سوال شما پاسخ داده نشد؟
            </h2>
            <p className="text-gray-600 mb-6">
              سوال خود را برای ما ارسال کنید تا در اسرع وقت پاسخ دهیم
            </p>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  سوال شما
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent resize-none"
                  placeholder="سوال خود را اینجا بنویسید..."
                  style={{ fontFamily: 'var(--font-primary)' }}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    نام
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                    placeholder="نام شما"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ایمیل
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                    placeholder="example@email.com"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 text-white rounded-lg font-medium transition-all duration-300 hover:transform hover:translate-y-[-1px]"
                style={{ backgroundColor: 'var(--primary-color)' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--primary-hover)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--primary-color)'}
              >
                ارسال سوال
              </button>
            </form>
          </div>
        </div>

        {/* اطلاعات تماس - Contact Information */}
        <div className="mt-12 text-center">
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              نیاز به کمک فوری دارید؟
            </h3>
            <p className="text-gray-600 mb-4">
              با تیم پشتیبانی ما تماس بگیرید
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                href="tel:02112345678"
                className="px-6 py-3 text-white rounded-lg font-medium transition-all duration-300 hover:transform hover:translate-y-[-1px]"
                style={{ backgroundColor: 'var(--primary-color)' }}
              >
                تماس فوری: ۰۲۱-۱۲۳۴۵۶۷۸
              </a>
              <a 
                href="/contact"
                className="px-6 py-3 border-2 rounded-lg font-medium transition-all duration-300 hover:text-white"
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
                فرم تماس
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;