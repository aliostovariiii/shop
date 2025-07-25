"use client";

import React from 'react';
import { useAuth } from '@/lib/auth-context';
import { useCart } from '@/lib/cart-context';
import { 
  User, 
  ShoppingBag, 
  Heart, 
  Settings, 
  Package,
  CreditCard,
  MapPin,
  Bell
} from 'lucide-react';

/**
 * صفحه داشبورد کاربر - User Dashboard Page
 * 
 * این صفحه شامل:
 * - اطلاعات کاربر
 * - خلاصه سفارشات
 * - دسترسی سریع به بخش‌های مختلف
 * - تنظیمات حساب کاربری
 * 
 * استفاده از آیکون‌ها: lucide-react
 * - User: پروفایل کاربر
 * - ShoppingBag: سفارشات
 * - Heart: علاقه‌مندی‌ها
 * - Settings: تنظیمات
 * - Package: محصولات
 * - CreditCard: پرداخت‌ها
 * - MapPin: آدرس‌ها
 * - Bell: اعلان‌ها
 * 
 * استایل: Tailwind CSS
 */
const DashboardPage = () => {
  const { user } = useAuth();
  const { state } = useCart();

  // آمار داشبورد - Dashboard Stats
  const stats = [
    {
      title: 'سفارشات',
      value: '3',
      icon: ShoppingBag,
      color: 'text-[var(--primary-color)]',
      bgColor: 'bg-[var(--primary-color)]'
    },
    {
      title: 'محصولات در سبد',
      value: state.itemCount.toString(),
      icon: Package,
      color: 'text-[var(--info)]',
      bgColor: 'bg-[var(--info)]'
    },
    {
      title: 'علاقه‌مندی‌ها',
      value: '5',
      icon: Heart,
      color: 'text-[var(--error)]',
      bgColor: 'bg-[var(--error)]'
    },
    {
      title: 'اعلان‌ها',
      value: '2',
      icon: Bell,
      color: 'text-[var(--warning)]',
      bgColor: 'bg-[var(--warning)]'
    }
  ];

  // منوی سریع - Quick Menu
  const quickActions = [
    {
      title: 'ویرایش پروفایل',
      description: 'تغییر اطلاعات شخصی',
      icon: User,
      href: '/profile',
      color: 'text-[var(--primary-color)]'
    },
    {
      title: 'سفارشات من',
      description: 'مشاهده تاریخچه سفارشات',
      icon: ShoppingBag,
      href: '/orders',
      color: 'text-[var(--info)]'
    },
    {
      title: 'آدرس‌ها',
      description: 'مدیریت آدرس‌های تحویل',
      icon: MapPin,
      href: '/addresses',
      color: 'text-[var(--success)]'
    },
    {
      title: 'روش‌های پرداخت',
      description: 'مدیریت کارت‌ها و پرداخت',
      icon: CreditCard,
      href: '/payment-methods',
      color: 'text-[var(--warning)]'
    },
    {
      title: 'تنظیمات',
      description: 'تنظیمات حساب کاربری',
      icon: Settings,
      href: '/settings',
      color: 'text-[var(--gray-600)]'
    }
  ];

  // سفارشات اخیر - Recent Orders
  const recentOrders = [
    {
      id: '1001',
      date: '۱۴۰۳/۰۸/۱۵',
      status: 'تحویل شده',
      total: '2,400,000',
      statusColor: 'text-[var(--success)]'
    },
    {
      id: '1002',
      date: '۱۴۰۳/۰۸/۱۰',
      status: 'در حال ارسال',
      total: '1,000,000',
      statusColor: 'text-[var(--info)]'
    },
    {
      id: '1003',
      date: '۱۴۰۳/۰۸/۰۵',
      status: 'تحویل شده',
      total: '2,400,000',
      statusColor: 'text-[var(--success)]'
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--gray-50)] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* هدر داشبورد - Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[var(--gray-900)] mb-2">
            داشبورد
          </h1>
          <p className="text-[var(--gray-600)]">
            خوش آمدید، {user?.name}
          </p>
        </div>

        {/* آمار کلی - General Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="product-card p-6">
              <div className="flex items-center">
                <div className={`w-12 h-12 ${stat.bgColor} bg-opacity-10 rounded-lg flex items-center justify-center ml-4`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-sm text-[var(--gray-600)]">{stat.title}</p>
                  <p className="text-2xl font-bold text-[var(--gray-900)]">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* دسترسی سریع - Quick Access */}
          <div className="lg:col-span-2">
            <div className="product-card p-6">
              <h2 className="text-xl font-bold text-[var(--gray-900)] mb-6">
                دسترسی سریع
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quickActions.map((action, index) => (
                  <a
                    key={index}
                    href={action.href}
                    className="p-4 border border-[var(--gray-200)] rounded-lg hover:border-[var(--primary-color)] transition-smooth group"
                  >
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-[var(--gray-100)] rounded-lg flex items-center justify-center ml-3 group-hover:bg-[var(--primary-color)] group-hover:bg-opacity-10 transition-smooth">
                        <action.icon className={`w-5 h-5 ${action.color}`} />
                      </div>
                      <div>
                        <h3 className="font-medium text-[var(--gray-900)] mb-1">
                          {action.title}
                        </h3>
                        <p className="text-sm text-[var(--gray-600)]">
                          {action.description}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* سفارشات اخیر - Recent Orders */}
          <div>
            <div className="product-card p-6">
              <h2 className="text-xl font-bold text-[var(--gray-900)] mb-6">
                سفارشات اخیر
              </h2>
              <div className="space-y-4">
                {recentOrders.map((order, index) => (
                  <div key={index} className="border-b border-[var(--gray-200)] pb-4 last:border-b-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-medium text-[var(--gray-900)]">
                          سفارش #{order.id}
                        </p>
                        <p className="text-sm text-[var(--gray-600)]">
                          {order.date}
                        </p>
                      </div>
                      <span className={`text-sm font-medium ${order.statusColor}`}>
                        {order.status}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--gray-900)]">
                      {order.total} تومان
                    </p>
                  </div>
                ))}
              </div>
              <a 
                href="/orders"
                className="block text-center mt-4 text-[var(--primary-color)] hover:text-[var(--primary-hover)] font-medium"
              >
                مشاهده همه سفارشات
              </a>
            </div>
          </div>
        </div>

        {/* اطلاعات حساب - Account Information */}
        <div className="mt-8">
          <div className="product-card p-6">
            <h2 className="text-xl font-bold text-[var(--gray-900)] mb-6">
              اطلاعات حساب
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[var(--gray-700)] mb-2">
                  نام و نام خانوادگی
                </label>
                <p className="text-[var(--gray-900)]">{user?.name}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--gray-700)] mb-2">
                  ایمیل
                </label>
                <p className="text-[var(--gray-900)]">{user?.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--gray-700)] mb-2">
                  شماره تلفن
                </label>
                <p className="text-[var(--gray-900)]">{user?.phone || 'وارد نشده'}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--gray-700)] mb-2">
                  تاریخ عضویت
                </label>
                <p className="text-[var(--gray-900)]">۱۴۰۳/۰۸/۰۱</p>
              </div>
            </div>
            <div className="mt-6">
              <a 
                href="/profile"
                className="btn-primary"
              >
                ویرایش اطلاعات
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;