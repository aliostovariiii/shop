"use client";

import { Phone, MessageCircle, HelpCircle } from 'lucide-react';
import Button from '@/components/ui/button-custom';

/**
 * کامپوننت فراخوان نهایی - Final Call to Action Component
 * بخش نهایی برای تشویق کاربران به خرید و تماس
 * Final section to encourage users to purchase and contact
 */
const FinalCTA = () => {
  return (
    <section 
      className="py-20 text-white relative overflow-hidden"
      style={{ 
        background: `linear-gradient(135deg, var(--primary-color) 0%, var(--primary-hover) 100%)` 
      }}
    >
      {/* عناصر پس‌زمینه - Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white bg-opacity-5 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white bg-opacity-5 rounded-full translate-y-32 -translate-x-32"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* عنوان اصلی - Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            آرامش خاطر خانواده با یک انتخاب هوشمند
          </h2>
          <p className="text-xl md:text-2xl text-white text-opacity-90 max-w-4xl mx-auto leading-relaxed">
            همین امروز با تهیه مچ‌بند هوشمند، مراقبت واقعی را تجربه کنید
            <br />
            <span className="text-lg">
              با تخفیف ویژه، نصب آسان اپلیکیشن و خدمات ۲۴ ساعته پشتیبانی
            </span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* دکمه‌های تماس - Contact Buttons */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="w-full bg-white font-bold text-lg py-4 simple-transition"
                style={{ color: 'var(--primary-color)' }}
              >
                <Phone className="w-5 h-5 ml-2" />
                ثبت سفارش
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full border-2 border-white text-white font-bold text-lg py-4 simple-transition"
                style={{ 
                  borderColor: 'white',
                  backgroundColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.color = 'var(--primary-color)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'white';
                }}
              >
                <MessageCircle className="w-5 h-5 ml-2" />
                درخواست مشاوره
              </Button>
              
              <Button 
                variant="ghost" 
                size="lg" 
                className="w-full text-white font-medium text-lg py-4 simple-transition"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                <HelpCircle className="w-5 h-5 ml-2" />
                سوالات بیشتر
              </Button>
            </div>

            {/* اطلاعات تماس - Contact Information */}
            <div className="bg-white bg-opacity-10 rounded-2xl p-6 mt-8">
              <h3 className="text-xl font-bold mb-4">راه‌های تماس</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 ml-3 text-white text-opacity-70" />
                  <span>۰۲۱-۱۲۳۴۵۶۷۸ (تلفن مستقیم)</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="w-5 h-5 ml-3 text-white text-opacity-70" />
                  <span>پشتیبانی آنلاین ۲۴ ساعته</span>
                </div>
              </div>
            </div>
          </div>

          {/* مزایا - Benefits */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">چرا همین امروز تصمیم بگیرید؟</h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white bg-opacity-10 rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">۲۰٪</div>
                <div className="text-white text-opacity-90">تخفیف ویژه برای سفارش آنلاین</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">۲۴h</div>
                <div className="text-white text-opacity-90">تحویل سریع در تهران</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">۱۲m</div>
                <div className="text-white text-opacity-90">گارانتی کامل محصول</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">۲۴/۷</div>
                <div className="text-white text-opacity-90">پشتیبانی فنی</div>
              </div>
            </div>

            {/* موجودی محدود - Limited Stock */}
            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <h4 className="font-bold mb-3">موجود فقط برای ۵۰ نفر اول</h4>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white text-opacity-70">سفارش‌های باقی‌مانده</span>
                <span className="font-bold">۱۲ عدد</span>
              </div>
              <div className="w-full bg-white bg-opacity-20 rounded-full h-2 mt-2">
                <div className="bg-white h-2 rounded-full" style={{ width: '76%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* شاهد اجتماعی - Social Proof */}
        <div className="mt-16 text-center">
          <div className="bg-white bg-opacity-10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">اعتماد هزاران خانواده</h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold">۵۰۰۰+</div>
                <div className="text-sm text-white text-opacity-70">مشتری راضی</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">۴.۸/۵</div>
                <div className="text-sm text-white text-opacity-70">امتیاز کاربران</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">۹۸٪</div>
                <div className="text-sm text-white text-opacity-70">رضایت مشتری</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">۳ سال</div>
                <div className="text-sm text-white text-opacity-70">تجربه خدمات</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;