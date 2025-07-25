"use client";

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  IconButton,
  Paper,
  Divider,
  Chip,
  Alert
} from '@mui/material';
import {
  Add,
  Remove,
  Delete,
  ShoppingCart,
  ArrowBack,
  Payment
} from '@mui/icons-material';

/**
 * صفحه سبد خرید - Shopping Cart Page
 * نمایش محصولات انتخاب شده و مدیریت آن‌ها
 * Display selected products and manage them
 * 
 * ساختار فولدر:
 * Folder Structure:
 * app/
 *   cart/
 *     page.tsx (این فایل - This file)
 *   checkout/
 *     page.tsx (صفحه پرداخت - Checkout page)
 */

const CartPage = () => {
  const { state, dispatch } = useCart();

  // افزایش تعداد - Increase Quantity
  const handleIncreaseQuantity = (id: string, currentQuantity: number) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id, quantity: currentQuantity + 1 }
    });
  };

  // کاهش تعداد - Decrease Quantity
  const handleDecreaseQuantity = (id: string, currentQuantity: number) => {
    if (currentQuantity > 1) {
      dispatch({
        type: 'UPDATE_QUANTITY',
        payload: { id, quantity: currentQuantity - 1 }
      });
    }
  };

  // حذف از سبد خرید - Remove from Cart
  const handleRemoveFromCart = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  // پاک کردن سبد خرید - Clear Cart
  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  // اگر سبد خرید خالی است - If cart is empty
  if (state.items.length === 0) {
    return (
      <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3
          }}
        >
          <ShoppingCart sx={{ fontSize: 80, color: 'var(--gray-light)' }} />
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'var(--font-primary)',
              fontWeight: 'bold',
              color: 'var(--gray-900)'
            }}
          >
            سبد خرید شما خالی است
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'var(--font-primary)',
              color: 'var(--gray-dark)',
              mb: 2
            }}
          >
            برای شروع خرید به فروشگاه بروید
          </Typography>
          <Button
            component={Link}
            href="/shop"
            variant="contained"
            size="large"
            sx={{
              fontFamily: 'var(--font-primary)',
              backgroundColor: 'var(--primary-color)',
              '&:hover': {
                backgroundColor: 'var(--primary-hover)'
              },
              px: 4,
              py: 1.5
            }}
          >
            رفتن به فروشگاه
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      
      {/* عنوان صفحه - Page Title */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontFamily: 'var(--font-primary)',
            fontWeight: 'bold',
            color: 'var(--gray-900)',
            mb: 2,
            fontSize: { xs: '2rem', md: '2.5rem' }
          }}
        >
          سبد خرید
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: 'var(--font-primary)',
            color: 'var(--gray-dark)'
          }}
        >
          {state.itemCount} محصول در سبد خرید شما
        </Typography>
      </Box>

      <Grid container spacing={4}>
        
        {/* محصولات سبد خرید - Cart Items */}
        <Grid item xs={12} md={8}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'var(--font-primary)',
                fontWeight: 'bold',
                color: 'var(--gray-900)'
              }}
            >
              محصولات انتخابی
            </Typography>
            <Button
              onClick={handleClearCart}
              color="error"
              size="small"
              startIcon={<Delete />}
              sx={{ fontFamily: 'var(--font-primary)' }}
            >
              پاک کردن سبد
            </Button>
          </Box>

          {state.items.map((item) => (
            <Card
              key={item.id}
              sx={{
                mb: 2,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                borderRadius: 2
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Grid container spacing={3} alignItems="center">
                  
                  {/* تصویر محصول - Product Image */}
                  <Grid item xs={12} sm={3}>
                    <CardMedia
                      component="img"
                      height="120"
                      image={item.image}
                      alt={item.name}
                      sx={{
                        borderRadius: 2,
                        objectFit: 'cover'
                      }}
                    />
                  </Grid>

                  {/* اطلاعات محصول - Product Info */}
                  <Grid item xs={12} sm={5}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: 'var(--font-primary)',
                        fontWeight: 'bold',
                        color: 'var(--gray-900)',
                        mb: 1
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: 'var(--font-primary)',
                        color: 'var(--gray-dark)',
                        mb: 2
                      }}
                    >
                      {item.description}
                    </Typography>
                    
                    {item.badge && (
                      <Chip
                        label={item.badge}
                        size="small"
                        sx={{
                          backgroundColor: 'var(--primary-color)',
                          color: 'white',
                          fontFamily: 'var(--font-primary)'
                        }}
                      />
                    )}
                  </Grid>

                  {/* کنترل تعداد و قیمت - Quantity Control and Price */}
                  <Grid item xs={12} sm={4}>
                    <Box sx={{ textAlign: 'center' }}>
                      
                      {/* کنترل تعداد - Quantity Control */}
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                        <IconButton
                          onClick={() => handleDecreaseQuantity(item.id, item.quantity)}
                          disabled={item.quantity <= 1}
                          size="small"
                          sx={{
                            backgroundColor: 'var(--gray-100)',
                            '&:hover': { backgroundColor: 'var(--gray-200)' }
                          }}
                        >
                          <Remove />
                        </IconButton>
                        
                        <Typography
                          sx={{
                            fontFamily: 'var(--font-primary)',
                            fontWeight: 'bold',
                            mx: 2,
                            minWidth: 40,
                            textAlign: 'center'
                          }}
                        >
                          {item.quantity}
                        </Typography>
                        
                        <IconButton
                          onClick={() => handleIncreaseQuantity(item.id, item.quantity)}
                          size="small"
                          sx={{
                            backgroundColor: 'var(--primary-color)',
                            color: 'white',
                            '&:hover': { backgroundColor: 'var(--primary-hover)' }
                          }}
                        >
                          <Add />
                        </IconButton>
                      </Box>

                      {/* قیمت - Price */}
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: 'var(--font-primary)',
                          fontWeight: 'bold',
                          color: 'var(--primary-color)',
                          mb: 1
                        }}
                      >
                        {(item.price * item.quantity).toLocaleString('fa-IR')} تومان
                      </Typography>

                      {/* دکمه حذف - Remove Button */}
                      <IconButton
                        onClick={() => handleRemoveFromCart(item.id)}
                        color="error"
                        size="small"
                      >
                        <Delete />
                      </IconButton>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))}
        </Grid>

        {/* خلاصه سفارش - Order Summary */}
        <Grid item xs={12} md={4}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              backgroundColor: 'var(--gray-50)',
              borderRadius: 3,
              border: '2px solid var(--primary-color)',
              position: 'sticky',
              top: 100
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'var(--font-primary)',
                fontWeight: 'bold',
                color: 'var(--gray-900)',
                mb: 3,
                textAlign: 'center'
              }}
            >
              خلاصه سفارش
            </Typography>

            <Box sx={{ mb: 3 }}>
              {state.items.map((item) => (
                <Box key={item.id} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: 'var(--font-primary)',
                      color: 'var(--gray-dark)'
                    }}
                  >
                    {item.name} × {item.quantity}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: 'var(--font-primary)',
                      color: 'var(--gray-900)',
                      fontWeight: 'bold'
                    }}
                  >
                    {(item.price * item.quantity).toLocaleString('fa-IR')} تومان
                  </Typography>
                </Box>
              ))}
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* مجموع - Total */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'var(--font-primary)',
                  fontWeight: 'bold',
                  color: 'var(--gray-900)'
                }}
              >
                مجموع:
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'var(--font-primary)',
                  fontWeight: 'bold',
                  color: 'var(--primary-color)'
                }}
              >
                {state.total.toLocaleString('fa-IR')} تومان
              </Typography>
            </Box>

            {/* هشدار ارسال رایگان - Free Shipping Alert */}
            <Alert
              severity="success"
              sx={{
                mb: 3,
                '& .MuiAlert-message': {
                  fontFamily: 'var(--font-primary)',
                  fontSize: '0.875rem'
                }
              }}
            >
              ارسال رایگان برای سفارش‌های بالای ۱,۰۰۰,۰۰۰ تومان
            </Alert>

            {/* دکمه‌های عمل - Action Buttons */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Button
                component={Link}
                href="/checkout"
                variant="contained"
                size="large"
                fullWidth
                startIcon={<Payment />}
                sx={{
                  fontFamily: 'var(--font-primary)',
                  fontWeight: 'bold',
                  backgroundColor: 'var(--primary-color)',
                  '&:hover': {
                    backgroundColor: 'var(--primary-hover)'
                  },
                  py: 1.5
                }}
              >
                ادامه خرید و پرداخت
              </Button>

              <Button
                component={Link}
                href="/shop"
                variant="outlined"
                size="large"
                fullWidth
                startIcon={<ArrowBack />}
                sx={{
                  fontFamily: 'var(--font-primary)',
                  borderColor: 'var(--primary-color)',
                  color: 'var(--primary-color)',
                  '&:hover': {
                    borderColor: 'var(--primary-hover)',
                    color: 'var(--primary-hover)',
                    backgroundColor: 'transparent'
                  }
                }}
              >
                بازگشت به فروشگاه
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CartPage;