"use client";

import React, { useState } from 'react';
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
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Tabs,
  Tab,
  Rating,
  Divider
} from '@mui/material';
import {
  Check,
  Star,
  People,
  Refresh,
  ShoppingCart,
  Favorite,
  Share,
  LocalShipping,
  Security,
  Support
} from '@mui/icons-material';

/**
 * صفحه فروشگاه - Shop Page
 * نمایش محصولات با جزئیات کامل و امکان افزودن به سبد خرید
 * Display products with full details and add to cart functionality
 * 
 * ساختار فولدر:
 * Folder Structure:
 * app/
 *   shop/
 *     page.tsx (این فایل - This file)
 *   cart/
 *     page.tsx (صفحه سبد خرید - Cart page)
 *   checkout/
 *     page.tsx (صفحه پرداخت - Checkout page)
 */

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// کامپوننت پنل تب - Tab Panel Component
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`product-tabpanel-${index}`}
      aria-labelledby={`product-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const ShopPage = () => {
  const { dispatch } = useCart();
  const [tabValue, setTabValue] = useState(0);

  // محصولات فروشگاه - Shop Products
  const products = [
    {
      id: 'new-user-package',
      name: 'پکیج کاربران جدید',
      price: 2400000,
      originalPrice: 3000000,
      description: 'مچ‌بند هوشمند کامل با اشتراک ۱۲ ماهه و ۶ ماه هدیه',
      features: [
        'مچ‌بند هوشمند کامل',
        'اشتراک ۱۲ ماهه کامل',
        '۶ ماه اشتراک رایگان',
        'پشتیبانی ۲۴ ساعته',
        'آموزش کامل نصب',
        'گارانتی ۱ ساله'
      ],
      specifications: [
        'باتری: ۳-۴ روز',
        'مقاومت: IP67',
        'اتصال: 4G/WiFi',
        'صفحه نمایش: 1.4 اینچ',
        'حافظه: 8GB',
        'سنسورها: GPS, قلب, دما'
      ],
      image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'new-user' as const,
      badge: 'پکیج شروع ویژه',
      rating: 4.8,
      reviewCount: 324,
      inStock: true,
      shipping: 'ارسال رایگان'
    },
    {
      id: 'existing-user-package',
      name: 'تمدید اشتراک ۱۲ ماهه',
      price: 1000000,
      originalPrice: 1200000,
      description: 'تمدید اشتراک برای کاربران فعلی با ۲۰٪ تخفیف',
      features: [
        'تمام امکانات پریمیوم',
        'پشتیبانی اولویت‌دار',
        'آپدیت‌های رایگان',
        'پایش نامحدود کاربران',
        'گزارش‌های تفصیلی',
        'پشتیبان‌گیری ابری'
      ],
      specifications: [
        'مدت اشتراک: ۱۲ ماه',
        'کاربران: نامحدود',
        'ذخیره‌سازی: ابری',
        'پشتیبانی: ۲۴/۷',
        'آپدیت: خودکار',
        'گزارش: تفصیلی'
      ],
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-147413.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'existing-user' as const,
      badge: 'محبوب',
      rating: 4.6,
      reviewCount: 156,
      inStock: true,
      shipping: 'فعال‌سازی فوری'
    }
  ];

  // افزودن به سبد خرید - Add to Cart
  const handleAddToCart = (product: typeof products[0]) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  // تغییر تب - Change Tab
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      
      {/* عنوان صفحه - Page Title */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontFamily: 'var(--font-primary)',
            fontWeight: 'bold',
            color: 'var(--gray-900)',
            mb: 2,
            fontSize: { xs: '2rem', md: '3rem' }
          }}
        >
          فروشگاه مچ‌بند هوشمند
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: 'var(--font-primary)',
            color: 'var(--gray-dark)',
            maxWidth: 600,
            mx: 'auto'
          }}
        >
          بهترین محصولات برای مراقبت از سلامت و امنیت خانواده
        </Typography>
      </Box>

      {/* محصولات - Products */}
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} lg={6} key={product.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                borderRadius: 3,
                overflow: 'hidden',
                position: 'relative',
                '&:hover': {
                  boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                  transform: 'translateY(-2px)',
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
                    top: 16,
                    right: 16,
                    backgroundColor: 'var(--primary-color)',
                    color: 'white',
                    fontFamily: 'var(--font-primary)',
                    zIndex: 2,
                    fontWeight: 'bold'
                  }}
                />
              )}

              {/* تصویر محصول - Product Image */}
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
                sx={{
                  objectFit: 'cover',
                  backgroundColor: 'var(--gray-100)'
                }}
              />

              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                
                {/* عنوان و امتیاز - Title and Rating */}
                <Box sx={{ mb: 2 }}>
                  <Typography
                    variant="h5"
                    component="h2"
                    sx={{
                      fontFamily: 'var(--font-primary)',
                      fontWeight: 'bold',
                      color: 'var(--gray-900)',
                      mb: 1
                    }}
                  >
                    {product.name}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Rating value={product.rating} precision={0.1} readOnly size="small" />
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: 'var(--font-primary)',
                        color: 'var(--gray-600)'
                      }}
                    >
                      ({product.reviewCount} نظر)
                    </Typography>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: 'var(--font-primary)',
                      color: 'var(--gray-dark)',
                      mb: 2
                    }}
                  >
                    {product.description}
                  </Typography>
                </Box>

                {/* قیمت - Price */}
                <Paper
                  elevation={0}
                  sx={{
                    backgroundColor: 'var(--gray-50)',
                    p: 2,
                    borderRadius: 2,
                    mb: 3,
                    border: '2px solid var(--primary-color)'
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box>
                      <Typography
                        variant="h4"
                        sx={{
                          fontFamily: 'var(--font-primary)',
                          fontWeight: 'bold',
                          color: 'var(--primary-color)',
                          fontSize: { xs: '1.5rem', md: '2rem' }
                        }}
                      >
                        {product.price.toLocaleString('fa-IR')} تومان
                      </Typography>
                      {product.originalPrice && (
                        <Typography
                          variant="body2"
                          sx={{
                            fontFamily: 'var(--font-primary)',
                            color: 'var(--gray-600)',
                            textDecoration: 'line-through'
                          }}
                        >
                          {product.originalPrice.toLocaleString('fa-IR')} تومان
                        </Typography>
                      )}
                    </Box>
                    
                    <Box sx={{ textAlign: 'center' }}>
                      {product.originalPrice && (
                        <Chip
                          label={`${Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% تخفیف`}
                          size="small"
                          sx={{
                            backgroundColor: '#4caf50',
                            color: 'white',
                            fontFamily: 'var(--font-primary)',
                            fontWeight: 'bold',
                            mb: 1
                          }}
                        />
                      )}
                      <Typography
                        variant="caption"
                        sx={{
                          fontFamily: 'var(--font-primary)',
                          color: 'var(--primary-color)',
                          display: 'block',
                          fontWeight: 'bold'
                        }}
                      >
                        {product.shipping}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>

                {/* تب‌ها - Tabs */}
                <Box sx={{ mb: 3 }}>
                  <Tabs
                    value={tabValue}
                    onChange={handleTabChange}
                    variant="fullWidth"
                    sx={{
                      '& .MuiTab-root': {
                        fontFamily: 'var(--font-primary)',
                        fontSize: '0.875rem'
                      }
                    }}
                  >
                    <Tab label="ویژگی‌ها" />
                    <Tab label="مشخصات" />
                  </Tabs>

                  <TabPanel value={tabValue} index={0}>
                    <List dense>
                      {product.features.map((feature, index) => (
                        <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 28 }}>
                            <Check sx={{ color: 'var(--primary-color)', fontSize: 18 }} />
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
                  </TabPanel>

                  <TabPanel value={tabValue} index={1}>
                    <List dense>
                      {product.specifications.map((spec, index) => (
                        <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                          <ListItemText
                            primary={spec}
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
                  </TabPanel>
                </Box>

                {/* دکمه‌های عمل - Action Buttons */}
                <Box sx={{ mt: 'auto' }}>
                  <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    startIcon={<ShoppingCart />}
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                    sx={{
                      fontFamily: 'var(--font-primary)',
                      fontWeight: 'bold',
                      backgroundColor: 'var(--primary-color)',
                      '&:hover': {
                        backgroundColor: 'var(--primary-hover)'
                      },
                      py: 1.5,
                      mb: 2
                    }}
                  >
                    {product.inStock ? 'افزودن به سبد خرید' : 'ناموجود'}
                  </Button>

                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<Favorite />}
                      sx={{
                        fontFamily: 'var(--font-primary)',
                        borderColor: 'var(--primary-color)',
                        color: 'var(--primary-color)',
                        flex: 1
                      }}
                    >
                      علاقه‌مندی
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<Share />}
                      sx={{
                        fontFamily: 'var(--font-primary)',
                        borderColor: 'var(--primary-color)',
                        color: 'var(--primary-color)',
                        flex: 1
                      }}
                    >
                      اشتراک
                    </Button>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* مزایای خرید - Purchase Benefits */}
      <Box sx={{ mt: 8 }}>
        <Paper
          elevation={0}
          sx={{
            backgroundColor: 'var(--gray-50)',
            p: 4,
            borderRadius: 3
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: 'var(--font-primary)',
              fontWeight: 'bold',
              color: 'var(--gray-900)',
              textAlign: 'center',
              mb: 4
            }}
          >
            مزایای خرید از ما
          </Typography>
          
          <Grid container spacing={3}>
            {[
              { icon: <LocalShipping />, title: 'ارسال سریع', desc: 'ارسال رایگان در تهران ظرف ۲۴ ساعت' },
              { icon: <Security />, title: 'گارانتی معتبر', desc: 'گارانتی ۱۲ ماهه شرکتی' },
              { icon: <Support />, title: 'پشتیبانی ۲۴/۷', desc: 'پشتیبانی فنی در تمام ساعات شبانه‌روز' }
            ].map((benefit, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      backgroundColor: 'var(--primary-color)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2
                    }}
                  >
                    {React.cloneElement(benefit.icon, { sx: { color: 'white', fontSize: 32 } })}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: 'var(--font-primary)',
                      fontWeight: 'bold',
                      color: 'var(--gray-900)',
                      mb: 1
                    }}
                  >
                    {benefit.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: 'var(--font-primary)',
                      color: 'var(--gray-dark)'
                    }}
                  >
                    {benefit.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};

export default ShopPage;