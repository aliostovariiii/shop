"use client";

import { designSystem } from '@/lib/design-system';
import { Heart, Phone, Mail, MapPin, Instagram, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* برند */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-[#009688] rounded-lg flex items-center justify-center ml-3">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">مچ‌بند هوشمند</span>
            </div>
            <p className="text-gray-400 mb-4">
              مراقبت هوشمند از سلامت و امنیت خانواده با فناوری پیشرفته
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-[#009688] transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#009688] transition-colors duration-200">
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* لینک‌های مفید */}
          <div>
            <h3 className="text-lg font-semibold mb-4">لینک‌های مفید</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  درباره ما
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  محصولات
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  راهنمای کاربری
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  پشتیبانی
                </a>
              </li>
            </ul>
          </div>

          {/* خدمات */}
          <div>
            <h3 className="text-lg font-semibold mb-4">خدمات</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  نصب و راه‌اندازی
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  تعمیرات
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  مشاوره
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  گارانتی
                </a>
              </li>
            </ul>
          </div>

          {/* اطلاعات تماس */}
          <div>
            <h3 className="text-lg font-semibold mb-4">تماس با ما</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 ml-2" />
                <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 ml-2" />
                <span>info@smartwatch.ir</span>
              </div>
              <div className="flex items-start text-gray-400">
                <MapPin className="w-4 h-4 ml-2 mt-1 flex-shrink-0" />
                <span>تهران، میدان ولیعصر، برج میلاد</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © ۱۴۰۳ مچ‌بند هوشمند. تمام حقوق محفوظ است.
            </p>
            <div className="flex space-x-4 space-x-reverse mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                حریم خصوصی
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                شرایط استفاده
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;