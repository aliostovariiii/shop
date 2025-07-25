"use client";

import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';

/**
 * کانتکست احراز هویت - Authentication Context
 * 
 * این فایل شامل:
 * - مدیریت وضعیت کاربر (ورود/خروج)
 * - ذخیره اطلاعات کاربر در localStorage
 * - توابع ورود، خروج و ثبت نام
 * 
 * استفاده:
 * - const { user, login, logout, register } = useAuth();
 * 
 * نکته: این یک پیاده‌سازی ساده است و در پروژه واقعی باید از JWT و API استفاده کرد
 */

// تایپ کاربر - User Type
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
}

// تایپ وضعیت احراز هویت - Auth State Type
interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

// تایپ اکشن‌های احراز هویت - Auth Actions Type
type AuthAction =
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS'; payload: User }
  | { type: 'LOGIN_ERROR'; payload: string }
  | { type: 'LOGOUT' }
  | { type: 'REGISTER_START' }
  | { type: 'REGISTER_SUCCESS'; payload: User }
  | { type: 'REGISTER_ERROR'; payload: string }
  | { type: 'CLEAR_ERROR' };

// وضعیت اولیه - Initial State
const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
};

// ریدیوسر احراز هویت - Auth Reducer
function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'LOGIN_START':
    case 'REGISTER_START':
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    
    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        error: null,
      };
    
    case 'LOGIN_ERROR':
    case 'REGISTER_ERROR':
      return {
        ...state,
        user: null,
        isLoading: false,
        error: action.payload,
      };
    
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isLoading: false,
        error: null,
      };
    
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null,
      };
    
    default:
      return state;
  }
}

// کانتکست احراز هویت - Auth Context
const AuthContext = createContext<{
  state: AuthState;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string, phone?: string) => Promise<boolean>;
  logout: () => void;
  clearError: () => void;
} | undefined>(undefined);

// پروایدر احراز هویت - Auth Provider
export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // بارگذاری کاربر از localStorage هنگام شروع - Load user from localStorage on start
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser);
        dispatch({ type: 'LOGIN_SUCCESS', payload: user });
      } catch (error) {
        localStorage.removeItem('user');
      }
    }
  }, []);

  // تابع ورود - Login Function
  const login = async (email: string, password: string): Promise<boolean> => {
    dispatch({ type: 'LOGIN_START' });

    try {
      // شبیه‌سازی درخواست API - Simulate API request
      await new Promise(resolve => setTimeout(resolve, 1000));

      // بررسی اعتبار ساده - Simple validation
      if (email === 'test@example.com' && password === '123456') {
        const user: User = {
          id: '1',
          name: 'کاربر تست',
          email: email,
          phone: '09123456789',
        };

        // ذخیره در localStorage - Save to localStorage
        localStorage.setItem('user', JSON.stringify(user));
        dispatch({ type: 'LOGIN_SUCCESS', payload: user });
        return true;
      } else {
        dispatch({ type: 'LOGIN_ERROR', payload: 'ایمیل یا رمز عبور اشتباه است' });
        return false;
      }
    } catch (error) {
      dispatch({ type: 'LOGIN_ERROR', payload: 'خطا در ورود به سیستم' });
      return false;
    }
  };

  // تابع ثبت نام - Register Function
  const register = async (name: string, email: string, password: string, phone?: string): Promise<boolean> => {
    dispatch({ type: 'REGISTER_START' });

    try {
      // شبیه‌سازی درخواست API - Simulate API request
      await new Promise(resolve => setTimeout(resolve, 1000));

      // بررسی وجود کاربر - Check if user exists
      const existingUser = localStorage.getItem('user');
      if (existingUser) {
        const userData = JSON.parse(existingUser);
        if (userData.email === email) {
          dispatch({ type: 'REGISTER_ERROR', payload: 'کاربری با این ایمیل قبلاً ثبت نام کرده است' });
          return false;
        }
      }

      const user: User = {
        id: Date.now().toString(),
        name: name,
        email: email,
        phone: phone,
      };

      // ذخیره در localStorage - Save to localStorage
      localStorage.setItem('user', JSON.stringify(user));
      dispatch({ type: 'REGISTER_SUCCESS', payload: user });
      return true;
    } catch (error) {
      dispatch({ type: 'REGISTER_ERROR', payload: 'خطا در ثبت نام' });
      return false;
    }
  };

  // تابع خروج - Logout Function
  const logout = () => {
    localStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' });
  };

  // پاک کردن خطا - Clear Error
  const clearError = () => {
    dispatch({ type: 'CLEAR_ERROR' });
  };

  return (
    <AuthContext.Provider value={{ state, login, register, logout, clearError }}>
      {children}
    </AuthContext.Provider>
  );
}

// هوک استفاده از احراز هویت - Use Auth Hook
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return {
    user: context.state.user,
    isLoading: context.state.isLoading,
    error: context.state.error,
    login: context.login,
    register: context.register,
    logout: context.logout,
    clearError: context.clearError,
  };
}