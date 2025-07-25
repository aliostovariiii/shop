"use client";

import React, { createContext, useContext, useReducer, ReactNode } from 'react';

/**
 * کانتکست سبد خرید - Shopping Cart Context
 * مدیریت وضعیت سبد خرید در کل اپلیکیشن
 * Managing shopping cart state across the application
 */

// تایپ‌های مربوط به محصول - Product Types
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  image: string;
  category: 'new-user' | 'existing-user';
  badge?: string;
}

// تایپ آیتم سبد خرید - Cart Item Type
export interface CartItem extends Product {
  quantity: number;
}

// تایپ وضعیت سبد خرید - Cart State Type
interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

// تایپ اکشن‌های سبد خرید - Cart Actions Type
type CartAction =
  | { type: 'ADD_TO_CART'; payload: Product }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' };

// وضعیت اولیه سبد خرید - Initial Cart State
const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
};

// ریدیوسر سبد خرید - Cart Reducer
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        // اگر محصول موجود است، تعداد را افزایش دهید
        // If product exists, increase quantity
        const updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        
        return {
          ...state,
          items: updatedItems,
          total: updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0),
          itemCount: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
        };
      } else {
        // محصول جدید را اضافه کنید
        // Add new product
        const newItems = [...state.items, { ...action.payload, quantity: 1 }];
        
        return {
          ...state,
          items: newItems,
          total: newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0),
          itemCount: newItems.reduce((sum, item) => sum + item.quantity, 0),
        };
      }
    }
    
    case 'REMOVE_FROM_CART': {
      const filteredItems = state.items.filter(item => item.id !== action.payload);
      
      return {
        ...state,
        items: filteredItems,
        total: filteredItems.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        itemCount: filteredItems.reduce((sum, item) => sum + item.quantity, 0),
      };
    }
    
    case 'UPDATE_QUANTITY': {
      const updatedItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(0, action.payload.quantity) }
          : item
      ).filter(item => item.quantity > 0);
      
      return {
        ...state,
        items: updatedItems,
        total: updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        itemCount: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
      };
    }
    
    case 'CLEAR_CART':
      return initialState;
    
    default:
      return state;
  }
}

// کانتکست سبد خرید - Cart Context
const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | undefined>(undefined);

// پروایدر سبد خرید - Cart Provider
export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

// هوک استفاده از سبد خرید - Use Cart Hook
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}