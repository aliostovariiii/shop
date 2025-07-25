"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import { useAuth } from '@/lib/auth-context';
import { 
  Heart, 
  ShoppingCart, 
  Menu, 
  X, 
  User, 
  LogIn,
  UserPlus,
  LogOut
} from 'lucide-react';

/**
 * کامپوننت هدر - Header Component
 * 
 * این کامپوننت شامل:
 * - لوگو و نام برند
 * - منوی ناوبری اصلی
 * - آیکون سبد خرید با تعداد محصولات
 * - آیکون ورود/ثبت نام
 * - منوی موبایل (همبرگری)
 * 
 * استفاده از آیکون‌ها: lucide-react
 * - Heart: لوگو
 * - ShoppingCart: سبد خرید
 * - User: پروفایل کاربر
 * - LogIn: ورود
 * - UserPlus: ثبت نام
 * - Menu/X: منوی موبایل
 * 
 * استایل: Tailwind CSS
 */
const Header = () => {
  const { state } = useCart();
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // آیتم‌های منو - Menu Items
  const menuItems = [
    { name: 'خانه', href: '/' },
    { name: 'فروشگاه', href: '/shop' },
    { name: 'درباره ما', href: '/about' },
    { name: 'تماس با ما', href: '/contact' },
  ];

  return (
    <>
      {/* هدر اصلی - Main Header */}
      <header className="fixed top-0 w-full bg-white shadow-md z-50 border-b border-[var(--gray-200)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* لوگو و نام برند - Logo and Brand */}
            <Link href="/" className="flex items-center space-x-3 space-x-reverse">
              <div className="w-10 h-10 bg-[var(--primary-color)] rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-[var(--gray-900)]">
                مچ‌بند هوشمند
              </span>
            </Link>

            {/* منوی دسکتاپ - Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[var(--gray-600)] hover:text-[var(--primary-color)] font-medium transition-smooth"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* آیکون‌های عمل - Action Icons */}
            <div className="flex items-center space-x-4 space-x-reverse">
              
              {/* آیکون سبد خرید - Shopping Cart Icon */}
              <Link 
                href="/cart" 
                className="relative p-2 text-[var(--gray-600)] hover:text-[var(--primary-color)] transition-smooth"
              >
                <ShoppingCart className="w-6 h-6" />
                {/* نشانگر تعداد محصولات - Item Count Badge */}
                {state.itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[var(--error)] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {state.itemCount}
                  </span>
                )}
              </Link>

              {/* آیکون ورود/پروفایل - Login/Profile Icon */}
              {user ? (
                <div className="relative group">
                  <button className="p-2 text-[var(--gray-600)] hover:text-[var(--primary-color)] transition-smooth">
                    <User className="w-6 h-6" />
                  </button>
                  
                  {/* منوی کشویی کاربر - User Dropdown Menu */}
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-[var(--gray-200)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      <Link 
                        href="/dashboard" 
                        className="block px-4 py-2 text-sm text-[var(--gray-700)] hover:bg-[var(--gray-50)]"
                      >
                        داشبورد
                      </Link>
                      <Link 
                        href="/profile" 
                        className="block px-4 py-2 text-sm text-[var(--gray-700)] hover:bg-[var(--gray-50)]"
                      >
                        پروفایل
                      </Link>
                      <button 
                        onClick={logout}
                        className="block w-full text-right px-4 py-2 text-sm text-[var(--error)] hover:bg-[var(--gray-50)]"
                      >
                        خروج
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Link 
                    href="/login" 
                    className="p-2 text-[var(--gray-600)] hover:text-[var(--primary-color)] transition-smooth"
                    title="ورود"
                  >
                    <LogIn className="w-6 h-6" />
                  </Link>
                  <Link 
                    href="/register" 
                    className="p-2 text-[var(--gray-600)] hover:text-[var(--primary-color)] transition-smooth"
                    title="ثبت نام"
                  >
                    <UserPlus className="w-6 h-6" />
                  </Link>
                </div>
              )}

              {/* دکمه منوی موبایل - Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-[var(--gray-600)] hover:text-[var(--primary-color)] transition-smooth"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* منوی موبایل - Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-[var(--gray-200)]">
            <div className="px-4 py-2 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-[var(--gray-600)] hover:text-[var(--primary-color)] hover:bg-[var(--gray-50)] rounded-md transition-smooth"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* لینک‌های کاربری در موبایل - User Links in Mobile */}
              {!user && (
                <div className="border-t border-[var(--gray-200)] pt-2 mt-2">
                  <Link
                    href="/login"
                    className="block px-3 py-2 text-[var(--gray-600)] hover:text-[var(--primary-color)] hover:bg-[var(--gray-50)] rounded-md transition-smooth"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    ورود
                  </Link>
                  <Link
                    href="/register"
                    className="block px-3 py-2 text-[var(--gray-600)] hover:text-[var(--primary-color)] hover:bg-[var(--gray-50)] rounded-md transition-smooth"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    ثبت نام
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* فاصله برای محتوای اصلی - Spacing for main content */}
      <div className="h-16"></div>
    </>
  );
};

export default Header;