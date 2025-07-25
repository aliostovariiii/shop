"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { Eye, EyeOff, Mail, Lock, User, Phone, ArrowRight } from 'lucide-react';

/**
 * صفحه ثبت نام - Register Page
 * 
 * این صفحه شامل:
 * - فرم ثبت نام با نام، ایمیل، تلفن و رمز عبور
 * - اعتبارسنجی کامل فرم
 * - نمایش خطاها
 * - لینک به صفحه ورود
 * 
 * استفاده از آیکون‌ها: lucide-react
 * - User: آیکون نام
 * - Mail: آیکون ایمیل
 * - Phone: آیکون تلفن
 * - Lock: آیکون رمز عبور
 * - Eye/EyeOff: نمایش/مخفی کردن رمز عبور
 * - ArrowRight: دکمه بازگشت
 * 
 * استایل: Tailwind CSS
 */
const RegisterPage = () => {
  const router = useRouter();
  const { register, error, isLoading, clearError } = useAuth();
  
  // وضعیت‌های محلی - Local States
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});

  // تغییر مقادیر فرم - Handle Form Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // پاک کردن خطای فیلد - Clear field error
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    
    // پاک کردن خطای کلی - Clear general error
    if (error) {
      clearError();
    }
  };

  // اعتبارسنجی فرم - Form Validation
  const validateForm = () => {
    const errors: {[key: string]: string} = {};

    if (!formData.name) {
      errors.name = 'نام الزامی است';
    } else if (formData.name.length < 2) {
      errors.name = 'نام باید حداقل ۲ کاراکتر باشد';
    }

    if (!formData.email) {
      errors.email = 'ایمیل الزامی است';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'فرمت ایمیل صحیح نیست';
    }

    if (formData.phone && !/^09\d{9}$/.test(formData.phone)) {
      errors.phone = 'شماره تلفن باید با ۰۹ شروع شود و ۱۱ رقم باشد';
    }

    if (!formData.password) {
      errors.password = 'رمز عبور الزامی است';
    } else if (formData.password.length < 6) {
      errors.password = 'رمز عبور باید حداقل ۶ کاراکتر باشد';
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = 'تکرار رمز عبور الزامی است';
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'رمز عبور و تکرار آن یکسان نیستند';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // ارسال فرم - Handle Form Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const success = await register(formData.name, formData.email, formData.password, formData.phone);
    if (success) {
      router.push('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-[var(--gray-50)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        
        {/* هدر صفحه - Page Header */}
        <div className="text-center">
          <Link 
            href="/"
            className="inline-flex items-center text-[var(--primary-color)] hover:text-[var(--primary-hover)] mb-6"
          >
            <ArrowRight className="w-5 h-5 ml-2" />
            بازگشت به صفحه اصلی
          </Link>
          
          <h2 className="text-3xl font-bold text-[var(--gray-900)] mb-2">
            ثبت نام
          </h2>
          <p className="text-[var(--gray-600)]">
            حساب کاربری جدید ایجاد کنید
          </p>
        </div>

        {/* فرم ثبت نام - Register Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          
          {/* نمایش خطای کلی - Display General Error */}
          {error && (
            <div className="bg-[var(--error)] bg-opacity-10 border border-[var(--error)] text-[var(--error)] px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <div className="space-y-4">
            
            {/* فیلد نام - Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[var(--gray-700)] mb-2">
                نام و نام خانوادگی
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-[var(--gray-400)]" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-input pr-10 ${formErrors.name ? 'border-[var(--error)]' : ''}`}
                  placeholder="نام و نام خانوادگی خود را وارد کنید"
                />
              </div>
              {formErrors.name && (
                <p className="mt-1 text-sm text-[var(--error)]">{formErrors.name}</p>
              )}
            </div>

            {/* فیلد ایمیل - Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--gray-700)] mb-2">
                ایمیل
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-[var(--gray-400)]" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input pr-10 ${formErrors.email ? 'border-[var(--error)]' : ''}`}
                  placeholder="example@email.com"
                />
              </div>
              {formErrors.email && (
                <p className="mt-1 text-sm text-[var(--error)]">{formErrors.email}</p>
              )}
            </div>

            {/* فیلد تلفن - Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-[var(--gray-700)] mb-2">
                شماره تلفن (اختیاری)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-[var(--gray-400)]" />
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`form-input pr-10 ${formErrors.phone ? 'border-[var(--error)]' : ''}`}
                  placeholder="09123456789"
                />
              </div>
              {formErrors.phone && (
                <p className="mt-1 text-sm text-[var(--error)]">{formErrors.phone}</p>
              )}
            </div>

            {/* فیلد رمز عبور - Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[var(--gray-700)] mb-2">
                رمز عبور
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-[var(--gray-400)]" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  className={`form-input pr-10 pl-10 ${formErrors.password ? 'border-[var(--error)]' : ''}`}
                  placeholder="حداقل ۶ کاراکتر"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 left-0 pl-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-[var(--gray-400)]" />
                  ) : (
                    <Eye className="h-5 w-5 text-[var(--gray-400)]" />
                  )}
                </button>
              </div>
              {formErrors.password && (
                <p className="mt-1 text-sm text-[var(--error)]">{formErrors.password}</p>
              )}
            </div>

            {/* فیلد تکرار رمز عبور - Confirm Password Field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-[var(--gray-700)] mb-2">
                تکرار رمز عبور
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-[var(--gray-400)]" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`form-input pr-10 pl-10 ${formErrors.confirmPassword ? 'border-[var(--error)]' : ''}`}
                  placeholder="رمز عبور را مجدداً وارد کنید"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 left-0 pl-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-[var(--gray-400)]" />
                  ) : (
                    <Eye className="h-5 w-5 text-[var(--gray-400)]" />
                  )}
                </button>
              </div>
              {formErrors.confirmPassword && (
                <p className="mt-1 text-sm text-[var(--error)]">{formErrors.confirmPassword}</p>
              )}
            </div>
          </div>

          {/* دکمه ثبت نام - Register Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`btn-primary w-full ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'در حال ثبت نام...' : 'ثبت نام'}
          </button>

          {/* لینک ورود - Login Link */}
          <div className="text-center">
            <p className="text-sm text-[var(--gray-600)]">
              قبلاً ثبت نام کرده‌اید؟{' '}
              <Link 
                href="/login"
                className="text-[var(--primary-color)] hover:text-[var(--primary-hover)] font-medium"
              >
                وارد شوید
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;