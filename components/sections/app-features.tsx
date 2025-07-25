"use client";

import { 
  AlertTriangle, 
  Battery, 
  Shield, 
  Users, 
  Globe, 
  Bell 
} from 'lucide-react';

/**
 * کامپوننت ویژگی‌های اپلیکیشن - App Features Component
 * نمایش امکانات اپلیکیشن مدیریت مچ‌بند
 * Display management app features for the smartwatch
 */
const AppFeatures = () => {
  // ویژگی‌های اپلیکیشن - App Features
  const features = [
    {
      icon: AlertTriangle,
      title: 'هشدار لحظه‌ای افزایش ضربان یا دما',
      description: 'سیستم پایش هوشمند که تغییرات غیرطبیعی را فوراً تشخیص می‌دهد'
    },
    {
      icon: Battery,
      title: 'هشدار کاهش شارژ یا قطع ارتباط',
      description: 'اطلاع‌رسانی پیش از تمام شدن شارژ یا قطع ارتباط دستگاه'
    },
    {
      icon: Shield,
      title: 'تنظیم ژئوفنس و محدوده‌های مجاز',
      description: 'تعریف محدوده‌های امن و دریافت هشدار در صورت خروج از آن'
    },
    {
      icon: Users,
      title: 'مدیریت چند کاربر',
      description: 'امکان مدیریت چندین دستگاه توسط والدین، پرستار یا مراکز نگهداری'
    },
    {
      icon: Globe,
      title: 'نسخه PWA + اپلیکیشن موبایل کامل',
      description: 'دسترسی از طریق مرورگر وب و اپلیکیشن‌های موبایل'
    },
    {
      icon: Bell,
      title: 'نوتیفیکیشن آنی حتی در حالت مرورگر',
      description: 'دریافت اعلان‌های فوری حتی زمانی که اپلیکیشن بسته است'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* عنوان بخش - Section Title */}
        <div className="text-center mb-12">
          <h2 
            className="text-3xl font-bold mb-4"
            style={{ color: 'var(--gray-900)' }}
          >
            اپلیکیشن حرفه‌ای برای مدیریت سلامت و امنیت
          </h2>
          <p 
            className="text-lg max-w-3xl mx-auto"
            style={{ color: 'var(--gray-dark)' }}
          >
            کنترل کامل و هوشمند همه امکانات از طریق اپلیکیشن پیشرفته
          </p>
        </div>

        {/* کارت‌های ویژگی اپلیکیشن - App Feature Cards */}
        <div className="overflow-x-auto horizontal-scroll">
          <div className="flex gap-4 pb-4 min-w-max">
            {features.map((feature, index) => (
              <div key={index} className="flex-shrink-0 w-80">
                <div 
                  className="bg-white rounded-lg p-6 simple-transition card-shadow"
                  style={{ height: '200px' }}
                >
                  {/* آیکون و عنوان - Icon and Title */}
                  <div className="mb-4">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-3"
                      style={{ 
                        backgroundColor: 'var(--primary-color)', 
                        opacity: '0.1' 
                      }}
                    >
                      <feature.icon 
                        className="w-6 h-6" 
                        style={{ color: 'var(--primary-color)' }}
                      />
                    </div>
                    <h3 
                      className="text-lg font-bold mb-3 leading-tight"
                      style={{ color: 'var(--gray-900)' }}
                    >
                      {feature.title}
                    </h3>
                    <p 
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--gray-dark)' }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* بخش اسکرین‌شات اپلیکیشن - App Screenshot Section */}
        <div className="mt-16">
          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* توضیحات - Description */}
              <div>
                <h3 
                  className="text-2xl font-bold mb-4"
                  style={{ color: 'var(--gray-900)' }}
                >
                  رابط کاربری ساده و قدرتمند
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div 
                      className="w-1.5 h-1.5 rounded-full mt-2 mr-2 flex-shrink-0"
                      style={{ backgroundColor: 'var(--primary-color)' }}
                    ></div>
                    <div>
                      <div 
                        className="font-medium text-sm"
                        style={{ color: 'var(--gray-900)' }}
                      >
                        داشبورد جامع
                      </div>
                      <p 
                        className="text-xs"
                        style={{ color: 'var(--gray-dark)' }}
                      >
                        مشاهده تمام اطلاعات در یک نگاه
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div 
                      className="w-1.5 h-1.5 rounded-full mt-2 mr-2 flex-shrink-0"
                      style={{ backgroundColor: 'var(--primary-color)' }}
                    ></div>
                    <div>
                      <div 
                        className="font-medium text-sm"
                        style={{ color: 'var(--gray-900)' }}
                      >
                        نقشه زنده
                      </div>
                      <p 
                        className="text-xs"
                        style={{ color: 'var(--gray-dark)' }}
                      >
                        ردیابی موقعیت لحظه‌ای روی نقشه
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div 
                      className="w-1.5 h-1.5 rounded-full mt-2 mr-2 flex-shrink-0"
                      style={{ backgroundColor: 'var(--primary-color)' }}
                    ></div>
                    <div>
                      <div 
                        className="font-medium text-sm"
                        style={{ color: 'var(--gray-900)' }}
                      >
                        تاریخچه کامل
                      </div>
                      <p 
                        className="text-xs"
                        style={{ color: 'var(--gray-dark)' }}
                      >
                        مشاهده تاریخچه حرکات و علائم حیاتی
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <button 
                    className="px-4 py-2 text-white rounded-lg font-medium text-sm simple-transition primary-hover"
                    style={{ backgroundColor: 'var(--primary-color)' }}
                  >
                    مشاهده جزئیات اپلیکیشن
                  </button>
                </div>
              </div>

              {/* تصویر اپلیکیشن - App Image */}
              <div className="relative">
                <div 
                  className="rounded-lg p-4 shadow-lg"
                  style={{ 
                    background: `linear-gradient(135deg, var(--primary-color) 0%, var(--primary-hover) 100%)` 
                  }}
                >
                  <div className="aspect-[9/16] bg-white bg-opacity-10 rounded-lg flex items-center justify-center">
                    <img 
                      src="https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-147413.jpeg?auto=compress&cs=tinysrgb&w=600" 
                      alt="اسکرین‌شات اپلیکیشن" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
                
                {/* عناصر شناور - Floating Elements */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg text-xs">
                  ✓
                </div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg">
                  <Bell className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;