"use client";

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';

/**
 * صفحه تماس با ما - Contact Us Page
 * 
 * این صفحه شامل:
 * - فرم تماس
 * - اطلاعات تماس
 * - ساعات کاری
 * - آدرس دفتر
 * 
 * استفاده از آیکون‌ها: lucide-react
 * - Phone: تلفن
 * - Mail: ایمیل
 * - MapPin: آدرس
 * - Clock: ساعات کاری
 * - Send: ارسال پیام
 * - MessageSquare: پیام
 * 
 * استایل: Tailwind CSS
 */
const ContactPage = () => {
  // وضعیت فرم - Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // اطلاعات تماس - Contact Information
  const contactInfo = [
    {
      icon: Phone,
      title: 'تلفن تماس',
      details: ['۰۲۱-۱۲۳۴۵۶۷۸', '۰۹۱۲۳۴۵۶۷۸۹'],
      color: 'text-[var(--primary-color)]'
    },
    {
      icon: Mail,
      title: 'ایمیل',
      details: ['info@smartwatch.ir', 'support@smartwatch.ir'],
      color: 'text-[var(--info)]'
    },
    {
      icon: MapPin,
      title: 'آدرس دفتر',
      details: ['تهران، میدان ولیعصر', 'برج میلاد، طبقه ۱۰'],
      color: 'text-[var(--success)]'
    },
    {
      icon: Clock,
      title: 'ساعات کاری',
      details: ['شنبه تا پنج‌شنبه: ۹ تا ۱۸', 'جمعه: ۹ تا ۱۴'],
      color: 'text-[var(--warning)]'
    }
  ];

  // موضوعات پیش‌فرض - Default Subjects
  const subjects = [
    'سوال عمومی',
    'پشتیبانی فنی',
    'مشکل محصول',
    'درخواست مشاوره',
    'همکاری تجاری',
    'سایر موارد'
  ];

  // تغییر مقادیر فرم - Handle Form Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // ارسال فرم - Handle Form Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // شبیه‌سازی ارسال فرم - Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitMessage('پیام شما با موفقیت ارسال شد. در اسرع وقت با شما تماس خواهیم گرفت.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitMessage('خطا در ارسال پیام. لطفاً مجدداً تلاش کنید.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--gray-50)]">
      
      {/* بخش هدر - Header Section */}
      <section className="py-16 bg-gradient-to-br from-[var(--primary-color)] to-[var(--primary-hover)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              تماس با ما
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              ما آماده پاسخگویی به سوالات و درخواست‌های شما هستیم
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* اطلاعات تماس - Contact Information */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-[var(--gray-900)] mb-8">
              اطلاعات تماس
            </h2>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-start">
                    <div className={`w-12 h-12 ${info.color} bg-opacity-10 rounded-lg flex items-center justify-center ml-4`}>
                      <info.icon className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--gray-900)] mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-[var(--gray-600)] text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* پشتیبانی سریع - Quick Support */}
            <div className="mt-8 bg-[var(--primary-color)] bg-opacity-10 rounded-lg p-6">
              <h3 className="font-bold text-[var(--gray-900)] mb-3">
                پشتیبانی سریع
              </h3>
              <p className="text-[var(--gray-600)] text-sm mb-4">
                برای دریافت پشتیبانی فوری با ما تماس بگیرید
              </p>
              <div className="flex flex-col gap-2">
                <a 
                  href="tel:02112345678"
                  className="btn-primary text-center text-sm"
                >
                  تماس فوری
                </a>
                <a 
                  href="mailto:support@smartwatch.ir"
                  className="px-4 py-2 border-2 border-[var(--primary-color)] text-[var(--primary-color)] rounded-lg font-medium text-center text-sm transition-smooth hover:bg-[var(--primary-color)] hover:text-white"
                >
                  ارسال ایمیل
                </a>
              </div>
            </div>
          </div>

          {/* فرم تماس - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-[var(--gray-900)] mb-8">
                ارسال پیام
              </h2>

              {/* پیام موفقیت/خطا - Success/Error Message */}
              {submitMessage && (
                <div className={`mb-6 p-4 rounded-lg ${
                  submitMessage.includes('موفقیت') 
                    ? 'bg-[var(--success)] bg-opacity-10 border border-[var(--success)] text-[var(--success)]'
                    : 'bg-[var(--error)] bg-opacity-10 border border-[var(--error)] text-[var(--error)]'
                }`}>
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* ردیف اول - First Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--gray-700)] mb-2">
                      نام و نام خانوادگی *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="نام خود را وارد کنید"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--gray-700)] mb-2">
                      ایمیل *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                {/* ردیف دوم - Second Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[var(--gray-700)] mb-2">
                      شماره تلفن
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="09123456789"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[var(--gray-700)] mb-2">
                      موضوع *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="form-input"
                    >
                      <option value="">انتخاب کنید</option>
                      {subjects.map((subject, index) => (
                        <option key={index} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* پیام - Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--gray-700)] mb-2">
                    پیام *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="form-input resize-none"
                    placeholder="پیام خود را اینجا بنویسید..."
                  />
                </div>

                {/* دکمه ارسال - Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary w-full flex items-center justify-center ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    'در حال ارسال...'
                  ) : (
                    <>
                      <Send className="w-5 h-5 ml-2" />
                      ارسال پیام
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* بخش سوالات متداول - FAQ Section */}
        <div className="mt-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-[var(--gray-900)] mb-6">
              سوالات متداول
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-[var(--gray-900)] mb-2">
                  چقدر طول می‌کشد تا پاسخ دریافت کنم؟
                </h3>
                <p className="text-[var(--gray-600)] text-sm">
                  معمولاً ظرف ۲۴ ساعت پاسخ شما را دریافت خواهید کرد.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[var(--gray-900)] mb-2">
                  آیا پشتیبانی تلفنی دارید؟
                </h3>
                <p className="text-[var(--gray-600)] text-sm">
                  بله، پشتیبانی تلفنی در ساعات کاری فعال است.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[var(--gray-900)] mb-2">
                  آیا امکان ملاقات حضوری وجود دارد؟
                </h3>
                <p className="text-[var(--gray-600)] text-sm">
                  بله، با هماهنگی قبلی می‌توانید به دفتر ما مراجعه کنید.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[var(--gray-900)] mb-2">
                  چگونه می‌توانم شکایت ثبت کنم؟
                </h3>
                <p className="text-[var(--gray-600)] text-sm">
                  از طریق فرم بالا با انتخاب موضوع "شکایت" پیام خود را ارسال کنید.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;