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
  Button,
  Box,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper
} from '@mui/material';
import {
  Check,
  Star,
  People,
  Refresh,
  ShoppingCart
} from '@mui/icons-material';

/**
 * کامپوننت اشتراک - Subscription Component
 * نمایش پکیج‌های اشتراک برای کاربران جدید و فعلی با Material UI
 * Display subscription packages for new and existing users with Material UI
 */

const Subscription = () => {
  const { dispatch } = useCart();

  // محصولات - Products
  const products = [
    {
      id: 'new-user-package',
      name: 'پکیج کاربران جدید',
      price: 2400000,
      originalPrice: 3000000,
      description: 'مچ‌بند + اشتراک ۱۲ ماهه (۶ ماه هدیه)',
      features: [
        'مچ‌بند هوشمند کامل',
        'اشتراک ۱۲ ماهه کامل',
        '۶ ماه اشتراک رایگان',
        'پشتیبانی ۲۴ ساعته',
        'آموزش کامل نصب',
        'گارانتی ۱ ساله'
      ],
      image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'new-user' as const,
      badge: 'پکیج شروع ویژه'
    },
    {
      id: 'existing-user-package',
      name: 'تمدید اشتراک',
      price: 1000000,
      originalPrice: 1200000,
      description: 'پلن ۱۲ ماهه (۲۰٪ تخفیف)',
      features: [
        'تمام امکانات پریمیوم',
        'پشتیبانی اولویت‌دار',
        'آپدیت‌های رایگان',
        'پایش نامحدود کاربران'
      ],
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-147413.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'existing-user' as const,
      badge: 'محبوب'
    }
  ];

  // افزودن به سبد خرید - Add to Cart
  const handleAddToCart = (product: typeof products[0]) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <Box component="section" sx={{ py: 8, backgroundColor: 'var(--white)' }}>
      <Container maxWidth="lg">
        
        {/* عنوان بخش - Section Title */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontFamily: 'var(--font-primary)',
              fontWeight: 'bold',
              color: 'var(--gray-900)',
              mb: 2,
              fontSize: { xs: '1.75rem', md: '2.5rem' }
            }}
          >
            شروع استفاده یا تمدید اشتراک
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'var(--font-primary)',
              color: 'var(--gray-dark)',
              fontSize: { xs: '1rem', md: '1.25rem' }
            }}
          >
            انتخاب بهترین پکیج برای نیازهای شما
          </Typography>
        </Box>

        {/* کارت‌های محصول - Product Cards */}
        <Grid container spacing={4} justifyContent="center">
          {products.map((product) => (
            <Grid item xs={12} md={6} key={product.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  borderRadius: 3,
                  overflow: 'visible',
                  '&:hover': {
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    transform: 'translateY(-4px)',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                {/* بج محصول - Product Badge */}
                {product.badge && (
                  <Chip
                    label={product.badge}
                    icon={<Star />}
                    sx={{
                      position: 'absolute',
                      top: -10,
                      right: 16,
                      backgroundColor: 'var(--primary-color)',
                      color: 'white',
                      fontFamily: 'var(--font-primary)',
                      zIndex: 1
                    }}
                  />
                )}

                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  
                  {/* هدر کارت - Card Header */}
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        backgroundColor: product.category === 'new-user' ? 'var(--primary-color)' : 'var(--gray-200)',
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2
                      }}
                    >
                      {product.category === 'new-user' ? (
                        <People sx={{ color: 'white' }} />
                      ) : (
                        <Refresh sx={{ color: 'var(--primary-color)' }} />
                      )}
                    </Box>
                    <Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontFamily: 'var(--font-primary)',
                          fontWeight: 'bold',
                          color: 'var(--gray-900)',
                          mb: 0.5
                        }}
                      >
                        {product.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--font-primary)',
                          color: 'var(--gray-dark)'
                        }}
                      >
                        {product.description}
                      </Typography>
                    </Box>
                  </Box>

                  {/* قیمت - Price */}
                  <Paper
                    elevation={0}
                    sx={{
                      backgroundColor: product.category === 'new-user' ? 'var(--primary-color)' : 'var(--gray-50)',
                      p: 2,
                      borderRadius: 2,
                      mb: 3
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Box>
                        <Typography
                          variant="h4"
                          sx={{
                            fontFamily: 'var(--font-primary)',
                            fontWeight: 'bold',
                            color: product.category === 'new-user' ? 'white' : 'var(--gray-900)'
                          }}
                        >
                          {product.price.toLocaleString('fa-IR')} تومان
                        </Typography>
                        {product.originalPrice && (
                          <Typography
                            variant="body2"
                            sx={{
                              fontFamily: 'var(--font-primary)',
                              color: product.category === 'new-user' ? 'rgba(255,255,255,0.7)' : 'var(--gray-600)',
                              textDecoration: 'line-through'
                            }}
                          >
                            {product.originalPrice.toLocaleString('fa-IR')} تومان
                          </Typography>
                        )}
                      </Box>
                      {product.originalPrice && (
                        <Chip
                          label={`${Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% تخفیف`}
                          size="small"
                          sx={{
                            backgroundColor: '#4caf50',
                            color: 'white',
                            fontFamily: 'var(--font-primary)'
                          }}
                        />
                      )}
                    </Box>
                  </Paper>

                  {/* ویژگی‌ها - Features */}
                  <List dense sx={{ mb: 3 }}>
                    {product.features.map((feature, index) => (
                      <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <Check sx={{ color: 'var(--primary-color)', fontSize: 20 }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={feature}
                          sx={{
                            '& .MuiTypography-root': {
                              fontFamily: 'var(--font-primary)',
                              fontSize: '0.875rem',
                              color: 'var(--gray-700)'
                            }
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>

                  {/* دکمه‌های عمل - Action Buttons */}
                  <Box sx={{ mt: 'auto', display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<ShoppingCart />}
                      onClick={() => handleAddToCart(product)}
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
                      افزودن به سبد خرید
                    </Button>
                    
                    <Button
                      variant="text"
                      component={Link}
                      href="/shop"
                      sx={{
                        fontFamily: 'var(--font-primary)',
                        color: 'var(--primary-color)',
                        '&:hover': {
                          backgroundColor: 'transparent',
                          color: 'var(--primary-hover)'
                        }
                      }}
                    >
                      مشاهده بیشتر
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* اطلاعات اضافی - Additional Information */}
        <Box sx={{ mt: 8 }}>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: 'var(--gray-50)',
              p: 4,
              borderRadius: 3,
              textAlign: 'center'
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'var(--font-primary)',
                fontWeight: 'bold',
                color: 'var(--gray-900)',
                mb: 2
              }}
            >
              چرا اشتراک نیاز است؟
            </Typography>
            <Grid container spacing={3} sx={{ mt: 2 }}>
              {[
                { title: 'سرورهای ابری', desc: 'ذخیره‌سازی و پردازش اطلاعات در سرورهای امن' },
                { title: 'خدمات GPS', desc: 'استفاده از سرویس‌های موقعیت‌یابی دقیق' },
                { title: 'پشتیبانی ۲۴/۷', desc: 'پشتیبانی فنی و مشاوره تخصصی' }
              ].map((item, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontFamily: 'var(--font-primary)',
                      fontWeight: 'bold',
                      color: 'var(--gray-900)',
                      mb: 1
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: 'var(--font-primary)',
                      color: 'var(--gray-dark)'
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default Subscription;