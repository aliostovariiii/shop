"use client";

import React, { useState } from 'react';
import { useCart } from '@/lib/cart-context';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Paper,
  Divider,
  Stepper,
  Step,
  StepLabel,
  Alert,
  Chip
} from '@mui/material';
import {
  Person,
  LocationOn,
  Payment,
  CheckCircle,
  CreditCard,
  AccountBalance
} from '@mui/icons-material';

/**
 * صفحه پرداخت - Checkout Page
 * فرآیند کامل خرید شامل اطلاعات کاربر، آدرس و پرداخت
 * Complete purchase process including user info, address and payment
 * 
 * ساختار فولدر:
 * Folder Structure:
 * app/
 *   checkout/
 *     page.tsx (این فایل - This file)
 *     success/
 *       page.tsx (صفحه موفقیت - Success page)
 */

interface CustomerInfo {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
}

const CheckoutPage = () => {
  const { state, dispatch } = useCart();
  const [activeStep, setActiveStep] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('online');
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    postalCode: ''
  });

  // مراحل خرید - Checkout Steps
  const steps = [
    'اطلاعات شخصی',
    'آدرس تحویل',
    'روش پرداخت',
    'تأیید نهایی'
  ];

  // تغییر اطلاعات مشتری - Change Customer Info
  const handleCustomerInfoChange = (field: keyof CustomerInfo, value: string) => {
    setCustomerInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // مرحله بعد - Next Step
  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(prev => prev + 1);
    }
  };

  // مرحله قبل - Previous Step
  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(prev => prev - 1);
    }
  };

  // تأیید نهایی و پرداخت - Final Confirmation and Payment
  const handleFinalSubmit = () => {
    // شبیه‌سازی پرداخت - Payment Simulation
    alert('در حال انتقال به درگاه پرداخت...\nSimulating payment gateway...');
    
    // پاک کردن سبد خرید پس از پرداخت موفق
    // Clear cart after successful payment
    dispatch({ type: 'CLEAR_CART' });
    
    // انتقال به صفحه موفقیت
    // Redirect to success page
    window.location.href = '/checkout/success';
  };

  // اعتبارسنجی فرم - Form Validation
  const isStepValid = (step: number) => {
    switch (step) {
      case 0:
        return customerInfo.firstName && customerInfo.lastName && customerInfo.phone;
      case 1:
        return customerInfo.address && customerInfo.city && customerInfo.postalCode;
      case 2:
        return paymentMethod;
      default:
        return true;
    }
  };

  // اگر سبد خرید خالی است - If cart is empty
  if (state.items.length === 0) {
    return (
      <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
        <Alert severity="warning" sx={{ mb: 3 }}>
          <Typography sx={{ fontFamily: 'var(--font-primary)' }}>
            سبد خرید شما خالی است. لطفاً ابتدا محصولی را انتخاب کنید.
          </Typography>
        </Alert>
        <Button
          href="/shop"
          variant="contained"
          sx={{
            fontFamily: 'var(--font-primary)',
            backgroundColor: 'var(--primary-color)'
          }}
        >
          رفتن به فروشگاه
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      
      {/* عنوان صفحه - Page Title */}
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontFamily: 'var(--font-primary)',
          fontWeight: 'bold',
          color: 'var(--gray-900)',
          textAlign: 'center',
          mb: 4,
          fontSize: { xs: '2rem', md: '2.5rem' }
        }}
      >
        تکمیل خرید
      </Typography>

      {/* نوار پیشرفت - Progress Stepper */}
      <Paper elevation={0} sx={{ p: 3, mb: 4, backgroundColor: 'var(--gray-50)' }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel
                sx={{
                  '& .MuiStepLabel-label': {
                    fontFamily: 'var(--font-primary)',
                    fontSize: { xs: '0.75rem', md: '0.875rem' }
                  }
                }}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Paper>

      <Grid container spacing={4}>
        
        {/* فرم اطلاعات - Information Form */}
        <Grid item xs={12} md={8}>
          <Card sx={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)', borderRadius: 3 }}>
            <CardContent sx={{ p: 4 }}>
              
              {/* مرحله ۱: اطلاعات شخصی - Step 1: Personal Information */}
              {activeStep === 0 && (
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Person sx={{ color: 'var(--primary-color)', mr: 1 }} />
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: 'var(--font-primary)',
                        fontWeight: 'bold',
                        color: 'var(--gray-900)'
                      }}
                    >
                      اطلاعات شخصی
                    </Typography>
                  </Box>

                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="نام"
                        value={customerInfo.firstName}
                        onChange={(e) => handleCustomerInfoChange('firstName', e.target.value)}
                        required
                        sx={{
                          '& .MuiInputLabel-root': { fontFamily: 'var(--font-primary)' },
                          '& .MuiInputBase-input': { fontFamily: 'var(--font-primary)' }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="نام خانوادگی"
                        value={customerInfo.lastName}
                        onChange={(e) => handleCustomerInfoChange('lastName', e.target.value)}
                        required
                        sx={{
                          '& .MuiInputLabel-root': { fontFamily: 'var(--font-primary)' },
                          '& .MuiInputBase-input': { fontFamily: 'var(--font-primary)' }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="شماره تلفن"
                        value={customerInfo.phone}
                        onChange={(e) => handleCustomerInfoChange('phone', e.target.value)}
                        required
                        sx={{
                          '& .MuiInputLabel-root': { fontFamily: 'var(--font-primary)' },
                          '& .MuiInputBase-input': { fontFamily: 'var(--font-primary)' }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="ایمیل (اختیاری)"
                        type="email"
                        value={customerInfo.email}
                        onChange={(e) => handleCustomerInfoChange('email', e.target.value)}
                        sx={{
                          '& .MuiInputLabel-root': { fontFamily: 'var(--font-primary)' },
                          '& .MuiInputBase-input': { fontFamily: 'var(--font-primary)' }
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>
              )}

              {/* مرحله ۲: آدرس تحویل - Step 2: Delivery Address */}
              {activeStep === 1 && (
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <LocationOn sx={{ color: 'var(--primary-color)', mr: 1 }} />
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: 'var(--font-primary)',
                        fontWeight: 'bold',
                        color: 'var(--gray-900)'
                      }}
                    >
                      آدرس تحویل
                    </Typography>
                  </Box>

                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="آدرس کامل"
                        multiline
                        rows={3}
                        value={customerInfo.address}
                        onChange={(e) => handleCustomerInfoChange('address', e.target.value)}
                        required
                        sx={{
                          '& .MuiInputLabel-root': { fontFamily: 'var(--font-primary)' },
                          '& .MuiInputBase-input': { fontFamily: 'var(--font-primary)' }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="شهر"
                        value={customerInfo.city}
                        onChange={(e) => handleCustomerInfoChange('city', e.target.value)}
                        required
                        sx={{
                          '& .MuiInputLabel-root': { fontFamily: 'var(--font-primary)' },
                          '& .MuiInputBase-input': { fontFamily: 'var(--font-primary)' }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="کد پستی"
                        value={customerInfo.postalCode}
                        onChange={(e) => handleCustomerInfoChange('postalCode', e.target.value)}
                        required
                        sx={{
                          '& .MuiInputLabel-root': { fontFamily: 'var(--font-primary)' },
                          '& .MuiInputBase-input': { fontFamily: 'var(--font-primary)' }
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>
              )}

              {/* مرحله ۳: روش پرداخت - Step 3: Payment Method */}
              {activeStep === 2 && (
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Payment sx={{ color: 'var(--primary-color)', mr: 1 }} />
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: 'var(--font-primary)',
                        fontWeight: 'bold',
                        color: 'var(--gray-900)'
                      }}
                    >
                      روش پرداخت
                    </Typography>
                  </Box>

                  <FormControl component="fieldset">
                    <RadioGroup
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                      <FormControlLabel
                        value="online"
                        control={<Radio />}
                        label={
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <CreditCard sx={{ mr: 1, color: 'var(--primary-color)' }} />
                            <Box>
                              <Typography sx={{ fontFamily: 'var(--font-primary)', fontWeight: 'bold' }}>
                                پرداخت آنلاین
                              </Typography>
                              <Typography variant="caption" sx={{ fontFamily: 'var(--font-primary)', color: 'var(--gray-dark)' }}>
                                پرداخت امن با کارت بانکی
                              </Typography>
                            </Box>
                          </Box>
                        }
                        sx={{ mb: 2, p: 2, border: '1px solid var(--gray-200)', borderRadius: 2 }}
                      />
                      
                      <FormControlLabel
                        value="transfer"
                        control={<Radio />}
                        label={
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <AccountBalance sx={{ mr: 1, color: 'var(--primary-color)' }} />
                            <Box>
                              <Typography sx={{ fontFamily: 'var(--font-primary)', fontWeight: 'bold' }}>
                                واریز به حساب
                              </Typography>
                              <Typography variant="caption" sx={{ fontFamily: 'var(--font-primary)', color: 'var(--gray-dark)' }}>
                                واریز مستقیم به حساب بانکی
                              </Typography>
                            </Box>
                          </Box>
                        }
                        sx={{ p: 2, border: '1px solid var(--gray-200)', borderRadius: 2 }}
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
              )}

              {/* مرحله ۴: تأیید نهایی - Step 4: Final Confirmation */}
              {activeStep === 3 && (
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <CheckCircle sx={{ color: 'var(--primary-color)', mr: 1 }} />
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: 'var(--font-primary)',
                        fontWeight: 'bold',
                        color: 'var(--gray-900)'
                      }}
                    >
                      تأیید نهایی سفارش
                    </Typography>
                  </Box>

                  <Alert severity="info" sx={{ mb: 3 }}>
                    <Typography sx={{ fontFamily: 'var(--font-primary)' }}>
                      لطفاً اطلاعات خود را بررسی کنید. پس از تأیید، به درگاه پرداخت منتقل خواهید شد.
                    </Typography>
                  </Alert>

                  <Paper elevation={0} sx={{ p: 3, backgroundColor: 'var(--gray-50)', borderRadius: 2 }}>
                    <Typography variant="h6" sx={{ fontFamily: 'var(--font-primary)', fontWeight: 'bold', mb: 2 }}>
                      خلاصه اطلاعات:
                    </Typography>
                    <Typography sx={{ fontFamily: 'var(--font-primary)', mb: 1 }}>
                      <strong>نام:</strong> {customerInfo.firstName} {customerInfo.lastName}
                    </Typography>
                    <Typography sx={{ fontFamily: 'var(--font-primary)', mb: 1 }}>
                      <strong>تلفن:</strong> {customerInfo.phone}
                    </Typography>
                    <Typography sx={{ fontFamily: 'var(--font-primary)', mb: 1 }}>
                      <strong>آدرس:</strong> {customerInfo.address}, {customerInfo.city}
                    </Typography>
                    <Typography sx={{ fontFamily: 'var(--font-primary)' }}>
                      <strong>روش پرداخت:</strong> {paymentMethod === 'online' ? 'پرداخت آنلاین' : 'واریز به حساب'}
                    </Typography>
                  </Paper>
                </Box>
              )}

              {/* دکمه‌های ناوبری - Navigation Buttons */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                <Button
                  onClick={handleBack}
                  disabled={activeStep === 0}
                  sx={{ fontFamily: 'var(--font-primary)' }}
                >
                  مرحله قبل
                </Button>
                
                {activeStep === steps.length - 1 ? (
                  <Button
                    variant="contained"
                    onClick={handleFinalSubmit}
                    sx={{
                      fontFamily: 'var(--font-primary)',
                      backgroundColor: 'var(--primary-color)',
                      '&:hover': { backgroundColor: 'var(--primary-hover)' }
                    }}
                  >
                    تأیید و پرداخت
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    disabled={!isStepValid(activeStep)}
                    sx={{
                      fontFamily: 'var(--font-primary)',
                      backgroundColor: 'var(--primary-color)',
                      '&:hover': { backgroundColor: 'var(--primary-hover)' }
                    }}
                  >
                    مرحله بعد
                  </Button>
                )}
              </Box>
            </CardContent>
          </Card>
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

            {state.items.map((item) => (
              <Box key={item.id} sx={{ mb: 2, p: 2, backgroundColor: 'white', borderRadius: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontFamily: 'var(--font-primary)',
                        fontWeight: 'bold',
                        color: 'var(--gray-900)'
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        fontFamily: 'var(--font-primary)',
                        color: 'var(--gray-dark)'
                      }}
                    >
                      تعداد: {item.quantity}
                    </Typography>
                  </Box>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontFamily: 'var(--font-primary)',
                      fontWeight: 'bold',
                      color: 'var(--primary-color)'
                    }}
                  >
                    {(item.price * item.quantity).toLocaleString('fa-IR')} تومان
                  </Typography>
                </Box>
              </Box>
            ))}

            <Divider sx={{ my: 2 }} />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
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

            <Chip
              label="ارسال رایگان"
              color="success"
              sx={{
                fontFamily: 'var(--font-primary)',
                width: '100%',
                mb: 2
              }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CheckoutPage;