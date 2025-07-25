"use client";

import React from 'react';
import { Heart, Users, Award, Shield, Clock, Headphones } from 'lucide-react';

/**
 * صفحه درباره ما - About Us Page
 * 
 * این صفحه شامل:
 * - معرفی شرکت و ماموریت
 * - تیم و تجربه
 * - ارزش‌ها و اهداف
 * - آمار و دستاوردها
 * 
 * استفاده از آیکون‌ها: lucide-react
 * - Heart: ماموریت
 * - Users: تیم
 * - Award: دستاوردها
 * - Shield: امنیت
 * - Clock: تجربه
 * - Headphones: پشتیبانی
 * 
 * استایل: Tailwind CSS
 */
const AboutPage = () => {
  // ارزش‌های شرکت - Company Values
  const values = [
    {
      icon: Heart,
      title: 'مراقبت از خانواده',
      description: 'ما معتقدیم که سلامت و امنیت خانواده مهم‌ترین اولویت است'
    },
    {
      icon: Shield,
      title: 'امنیت و حریم خصوصی',
      description: 'حفاظت از اطلاعات شخصی و امنیت داده‌ها اولویت اول ماست'
    },
    {
      icon: Award,
      title: 'کیفیت بالا',
      description: 'ارائه محصولات با بالاترین کیفیت و استانداردهای جهانی'
    },
    {
      icon: Headphones,
      title: 'پشتیبانی ۲۴/۷',
      description: 'خدمات پشتیبانی مداوم و پاسخگویی سریع به نیازهای مشتریان'
    }
  ];

  // آمار شرکت - Company Stats
  const stats = [
    { number: '5000+', label: 'مشتری راضی' },
    { number: '3', label: 'سال تجربه' },
    { number: '98%', label: 'رضایت مشتری' },
    { number: '24/7', label: 'پشتیبانی' }
  ];

  // اعضای تیم - Team Members
  const teamMembers = [
    {
      name: 'علی احمدی',
      role: 'مدیر عامل',
      description: 'متخصص فناوری سلامت با ۱۰ سال تجربه'
    },
    {
      name: 'سارا محمدی',
      role: 'مدیر فنی',
      description: 'مهندس نرم‌افزار و متخصص IoT'
    },
    {
      name: 'حسین رضایی',
      role: 'مدیر فروش',
      description: 'متخصص بازاریابی و خدمات مشتری'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* بخش معرفی - Introduction Section */}
      <section className="py-16 bg-gradient-to-br from-[var(--primary-color)] to-[var(--primary-hover)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              درباره مچ‌بند هوشمند
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              ما با هدف ایجاد آرامش خاطر برای خانواده‌ها و ارائه راه‌حل‌های هوشمند 
              برای مراقبت از سلامت و امنیت عزیزان، این مسیر را آغاز کردیم
            </p>
          </div>
        </div>
      </section>

      {/* بخش ماموریت - Mission Section */}
      <section className="py-16 bg-[var(--gray-50)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--gray-900)] mb-6">
                ماموریت ما
              </h2>
              <p className="text-lg text-[var(--gray-600)] leading-relaxed mb-6">
                ما در مچ‌بند هوشمند با ترکیب فناوری پیشرفته و طراحی کاربرپسند، 
                محصولاتی ارائه می‌دهیم که به خانواده‌ها کمک می‌کند تا از سلامت و 
                امنیت عزیزانشان مطمئن باشند.
              </p>
              <p className="text-lg text-[var(--gray-600)] leading-relaxed">
                هدف ما ایجاد دنیایی است که در آن هر فرد بتواند با آرامش خاطر 
                کامل زندگی کند و بداند که عزیزانش در امان هستند.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="w-16 h-16 bg-[var(--primary-color)] bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-[var(--primary-color)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--gray-900)] mb-4">
                چشم‌انداز ما
              </h3>
              <p className="text-[var(--gray-600)]">
                پیشرو در ارائه راه‌حل‌های هوشمند مراقبت از سلامت در ایران و منطقه
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* بخش ارزش‌ها - Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--gray-900)] mb-4">
              ارزش‌های ما
            </h2>
            <p className="text-lg text-[var(--gray-600)] max-w-3xl mx-auto">
              اصول و باورهایی که ما را در مسیر خدمت‌رسانی هدایت می‌کند
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[var(--primary-color)] bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-[var(--primary-color)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--gray-900)] mb-3">
                  {value.title}
                </h3>
                <p className="text-[var(--gray-600)]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* بخش آمار - Stats Section */}
      <section className="py-16 bg-[var(--primary-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              دستاوردهای ما
            </h2>
            <p className="text-xl text-white text-opacity-90">
              اعداد و ارقامی که نشان‌دهنده تلاش‌های ما است
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white text-opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* بخش تیم - Team Section */}
      <section className="py-16 bg-[var(--gray-50)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--gray-900)] mb-4">
              تیم ما
            </h2>
            <p className="text-lg text-[var(--gray-600)] max-w-3xl mx-auto">
              افرادی متعهد و متخصص که با تلاش مشترک این محصول را به شما ارائه می‌دهند
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="w-20 h-20 bg-[var(--primary-color)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-[var(--primary-color)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--gray-900)] mb-2">
                  {member.name}
                </h3>
                <p className="text-[var(--primary-color)] font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-[var(--gray-600)]">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* بخش تماس - Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[var(--gray-900)] mb-6">
              با ما در تماس باشید
            </h2>
            <p className="text-lg text-[var(--gray-600)] mb-8 max-w-3xl mx-auto">
              برای کسب اطلاعات بیشتر، مشاوره یا پشتیبانی، با ما تماس بگیرید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="btn-primary"
              >
                تماس با ما
              </a>
              <a 
                href="/shop"
                className="px-6 py-3 border-2 border-[var(--primary-color)] text-[var(--primary-color)] rounded-lg font-medium transition-smooth hover:bg-[var(--primary-color)] hover:text-white"
              >
                مشاهده محصولات
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;