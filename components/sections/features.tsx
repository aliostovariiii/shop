"use client";

import { Heart, MapPin, Shield, Bell, Battery, AlertCircle } from 'lucide-react';

/**
 * کامپوننت ویژگی‌های کلیدی - Key Features Component
 * 
 * این کامپوننت شامل:
 * - نمایش 6 ویژگی اصلی محصول
 * - طراحی ریسپانسیو (3 کارت در دسکتاپ، 1 کارت در موبایل)
 * - آیکون‌های مرتبط برای هر ویژگی
 * - بدون اسکرول افقی
 * 
 * استفاده از آیکون‌ها: lucide-react
 * استایل: Tailwind CSS
 */
const Features = () => {
  // ویژگی‌های اصلی - Main Features
  const features = [
    {
      icon: Heart,
      title: 'پایش علائم حیاتی',
      description: 'ضربان قلب، دمای بدن، فشار خون با مشاهده لحظه‌ای در اپلیکیشن و هشدار در صورت عبور از محدوده نرمال'
    },
    {
      icon: MapPin,
      title: 'مکان‌یابی لحظه‌ای + ژئوفنس',
      description: 'GPS داخلی برای ردیابی دقیق با امکان تعریف محدوده امن و هشدار خروج از محدوده'
    },
    {
      icon: Shield,
      title: 'دکمه SOS اضطراری',
      description: 'امنیت در شرایط اضطراری با تماس فوری با شماره تعریف‌شده و ارسال هشدار در اپلیکیشن مراقب'
    },
    {
      icon: Bell,
      title: 'یادآورهای هوشمند',
      description: 'یادآوری‌های شخصی‌سازی شده برای دارو، جلسات پزشکی و سایر موارد مهم با تنظیم در اپلیکیشن'
    },
    {
      icon: Battery,
      title: 'باتری با دوام بالا',
      description: 'عمر شارژ طولانی مدت تا ۲ الی ۴ روز با هشدار کاهش شارژ در اپلیکیشن'
    },
    {
      icon: AlertCircle,
      title: 'هشدارهای هوشمند',
      description: 'سیستم هشدار پیشرفته برای تغییرات ناگهانی و اعلان‌های لحظه‌ای به خانواده'
    }
  ];

  return (
    <section className="py-16 bg-[var(--gray-50)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* عنوان بخش - Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[var(--gray-900)]">
            قابلیت‌های کلیدی مچ‌بند هوشمند
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-[var(--gray-600)]">
            تکنولوژی پیشرفته برای مراقبت جامع از سلامت و امنیت عزیزان شما
          </p>
        </div>

        {/* کارت‌های ویژگی - Feature Cards */}
        {/* در دسکتاپ: 3 کارت در هر ردیف، در موبایل: 1 کارت در هر ردیف */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="product-card p-6 h-full"
            >
              {/* آیکون و عنوان - Icon and Title */}
              <div className="mb-4">
                <div className="w-12 h-12 bg-[var(--primary-color)] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[var(--primary-color)]" />
                </div>
                
                <h3 className="text-lg font-bold mb-3 text-[var(--gray-900)]">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-[var(--gray-600)] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* بخش اطلاعات اضافی - Additional Information Section */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold mb-3 text-[var(--gray-900)]">
              همه ویژگی‌ها در یک دستگاه
            </h3>
            <p className="mb-4 text-[var(--gray-600)]">
              تکنولوژی پیشرفته و طراحی ساده برای استفاده آسان
            </p>
            <button className="btn-primary">
              مشاهده همه ویژگی‌ها
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;