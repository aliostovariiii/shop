"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';

/**
 * صفحه ورود - Login Page
 * 
 * این صفحه شامل:
 * - فرم ورود با ایمیل و رمز عبور
 * - اعتبارسنجی فرم
 * - نمایش خطاها
 * - لینک به ثبت نام و فراموشی رمز عبور
 * 
 * استفاده از آیکون‌ها: lucide-react
 * - Eye/EyeOff: نمایش/مخفی کردن رمز عبور
 * - Mail: آیکون ایمیل
 * - Lock: آیکون رمز عبور
 * - ArrowRight: دکمه بازگشت
 * 
 * استایل: Tailwind CSS
 */
const LoginPage = () => {
  const router = useRouter();
  const { login, error, isLoading, clearError } = useAuth();
  
  // وضعیت‌های محلی - Local States
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
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

    if (!formData.email) {
      errors.email = 'ایمیل الزامی است';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'فرمت ایمیل صحیح نیست';
    }

    if (!formData.password) {
      errors.password = 'رمز عبور الزامی است';
    } else if (formData.password.length < 6) {
      errors.password = 'رمز عبور باید حداقل ۶ کاراکتر باشد';
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

    const success = await login(formData.email, formData.password);
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
            ورود به حساب کاربری
          </h2>
          <p className="text-[var(--gray-600)]">
            برای دسترسی به حساب خود وارد شوید
          </p>
        </div>

        {/* فرم ورود - Login Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          
          {/* نمایش خطای کلی - Display General Error */}
          {error && (
            <div className="bg-[var(--error)] bg-opacity-10 border border-[var(--error)] text-[var(--error)] px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <div className="space-y-4">
            
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
                  placeholder="رمز عبور خود را وارد کنید"
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
          </div>

          {/* لینک فراموشی رمز عبور - Forgot Password Link */}
          <div className="flex items-center justify-between">
            <Link 
              href="/forgot-password"
              className="text-sm text-[var(--primary-color)] hover:text-[var(--primary-hover)]"
            >
              رمز عبور را فراموش کرده‌اید؟
            </Link>
          </div>

          {/* دکمه ورود - Login Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`btn-primary w-full ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'در حال ورود...' : 'ورود'}
          </button>

          {/* لینک ثبت نام - Register Link */}
          <div className="text-center">
            <p className="text-sm text-[var(--gray-600)]">
              حساب کاربری ندارید؟{' '}
              <Link 
                href="/register"
                className="text-[var(--primary-color)] hover:text-[var(--primary-hover)] font-medium"
              >
                ثبت نام کنید
              </Link>
            </p>
          </div>
        </form>

        {/* اطلاعات تست - Test Information */}
        <div className="mt-6 p-4 bg-[var(--info)] bg-opacity-10 border border-[var(--info)] rounded-lg">
          <p className="text-sm text-[var(--info)] text-center">
            <strong>برای تست:</strong><br />
            ایمیل: test@example.com<br />
            رمز عبور: 123456
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;