"use client";

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

/**
 * کامپوننت مخاطبان هدف - Target Audience Component
 * 
 * این کامپوننت شامل:
 * - نمایش گروه‌های مختلف کاربران
 * - بدون اسکرول (طراحی ثابت)
 * - بدون آیکون برای کارت‌ها
 * - طراحی ریسپانسیو
 * 
 * استفاده از آیکون‌ها: lucide-react
 * استایل: Tailwind CSS
 */
const TargetAudience = () => {
  // گروه‌های مخاطب - Target Groups
  const audiences = [
    {
      title: 'سالمندان',
      subtitle: 'مخصوصاً دچار آلزایمر',
      description: 'مراقبت و امنیت کامل برای سالمندان عزیز با ردیابی موقعیت، پایش علائم حیاتی و دکمه SOS آسان'
    },
    {
      title: 'نابینایان',
      subtitle: 'با استفاده آسان از SOS',
      description: 'طراحی ویژه برای کاربران نابینا با دکمه SOS بزرگ، فیدبک لمسی و کنترل صوتی'
    },
    {
      title: 'بیماران قلبی',
      subtitle: 'پایش تخصصی سلامت',
      description: 'پایش مداوم ضربان قلب و فشار خون با هشدار فشار خون و تماس اضطراری'
    },
    {
      title: 'کودکان',
      subtitle: 'امنیت در مسیر مدرسه',
      description: 'امنیت و آرامش خاطر والدین با ردیابی مسیر، محدوده امن و تماس سریع'
    },
    {
      title: 'ورزشکاران',
      subtitle: 'طبیعت‌گردان و فعالان',
      description: 'همراه ایده‌آل برای فعالیت‌های ورزشی با ردیابی GPS، پایش فعالیت و مقاومت در برابر آب'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* عنوان بخش - Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--gray-900)' }}>
            مناسب برای چه کسانی است؟
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--gray-dark)' }}>
            مچ‌بند هوشمند ما برای طیف گسترده‌ای از کاربران طراحی شده است
          </p>
        </div>

        {/* کارت‌های مخاطبان بدون اسکرول - Audience Cards without scroll */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
              
              {/* عنوان و زیرعنوان - Title and Subtitle */}
              <div className="mb-4">
                <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--gray-900)' }}>
                  {audience.title}
                </h3>
                <p className="text-sm mb-3 font-medium" style={{ color: 'var(--primary-color)' }}>
                  {audience.subtitle}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--gray-600)' }}>
                  {audience.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* بخش اطلاعات اضافی - Additional Information Section */}
        <div className="mt-12 text-center">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--gray-900)' }}>
              برای همه سنین و شرایط مناسب
            </h3>
            <p className="mb-4" style={{ color: 'var(--gray-600)' }}>
              طراحی ساده و کاربردی که هر کسی می‌تواند از آن استفاده کند
            </p>
            <button 
              className="px-6 py-3 text-white rounded-lg font-medium transition-all duration-300 hover:transform hover:translate-y-[-1px]"
              style={{ backgroundColor: 'var(--primary-color)' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--primary-hover)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--primary-color)'}
            >
              مشاوره رایگان
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;