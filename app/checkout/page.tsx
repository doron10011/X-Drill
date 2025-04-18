'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { 
  FaArrowLeft, 
  FaCheck, 
  FaLock, 
  FaShieldAlt, 
  FaCreditCard, 
  FaMobileAlt, 
  FaUniversity, 
  FaLockOpen,
  FaCheckCircle,
  FaTruck,
  FaMoneyBillWave,
  FaInfoCircle,
  FaUserAlt,
  FaMapMarkerAlt,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaShoppingCart
} from 'react-icons/fa';
import { useCart } from '@/components/CartContext';

const israeliCities = [
  "ירושלים", "תל אביב-יפו", "חיפה", "ראשון לציון", "פתח תקווה", 
  "אשדוד", "נתניה", "באר שבע", "חולון", "בני ברק", "רמת גן",
  "אשקלון", "רחובות", "בת ים", "הרצליה", "כפר סבא", "מודיעין",
  "לוד", "נצרת", "רמלה", "רעננה", "הוד השרון", "גבעתיים"
];

export default function Checkout() {
  const router = useRouter();
  const { items, cartTotal, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [couponCode, setCouponCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);
  
  const [formData, setFormData] = useState({
    // פרטים אישיים
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    // פרטי משלוח
    address: '',
    addressNumber: '',
    city: '',
    postalCode: '',
    deliveryNotes: '',
    // פרטי תשלום
    paymentMethod: 'credit',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
    cardOwner: '',
    cardId: '',
    // הגדרות נוספות
    receiveUpdates: true,
    saveInfo: true,
    deliveryMethod: 'shipping',
    invoiceType: 'private',
    companyName: '',
    companyId: '',
  });

  // מונע כניסה לדף אם אין פריטים בעגלה
  useEffect(() => {
    if (items.length === 0 && !orderComplete) {
      router.push('/cart');
    }
  }, [items, orderComplete, router]);

  // טיפול בשינוי שדות הטופס
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value 
    }));
    
    // מסיר את השגיאה כאשר המשתמש מתקן את השדה
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // חישוב עלות משלוח
  const calculateShippingCost = () => {
    if (formData.deliveryMethod === 'pickup') return 0;
    return cartTotal > 1000 ? 0 : 50; // משלוח חינם מעל 1000₪
  };
  
  const shippingCost = calculateShippingCost();
  const discount = discountApplied ? discountAmount : 0;
  const finalTotal = cartTotal + shippingCost - discount;

  const handleApplyCoupon = () => {
    if (!couponCode.trim()) return;
    
    // בדיקה אם הקוד תקף (במקרה הזה אם הקוד הוא "WELCOME10")
    if (couponCode.toUpperCase() === 'WELCOME10') {
      const discountValue = Math.round(cartTotal * 0.1); // 10% הנחה
      setDiscountAmount(discountValue);
      setDiscountApplied(true);
    } else {
      setErrors(prev => ({...prev, coupon: 'קוד קופון לא תקף'}));
    }
  };

  // מעבר בין השלבים
  const goToNextStep = () => {
    const newErrors: Record<string, string> = {};
    
    // בדיקת תקינות הטופס לפי השלב
    if (currentStep === 1) {
      if (!formData.firstName) newErrors.firstName = 'נא להזין שם פרטי';
      if (!formData.lastName) newErrors.lastName = 'נא להזין שם משפחה';
      if (!formData.email) {
        newErrors.email = 'נא להזין כתובת אימייל';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'נא להזין כתובת אימייל תקינה';
      }
      if (!formData.phone) {
        newErrors.phone = 'נא להזין מספר טלפון';
      } else if (!/^05\d{8}$/.test(formData.phone.replace(/\D/g, ''))) {
        newErrors.phone = 'נא להזין מספר טלפון תקין';
      }
    } else if (currentStep === 2 && formData.deliveryMethod === 'shipping') {
      if (!formData.address) newErrors.address = 'נא להזין כתובת';
      if (!formData.addressNumber) newErrors.addressNumber = 'נא להזין מספר בית';
      if (!formData.city) newErrors.city = 'נא לבחור עיר';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setCurrentStep(prev => prev + 1);
  };

  // חזרה לשלב הקודם
  const goToPreviousStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  // שליחת ההזמנה
  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    
    // בדיקת תקינות לפי שיטת התשלום
    if (formData.paymentMethod === 'credit') {
      if (!formData.cardNumber) newErrors.cardNumber = 'נא להזין מספר כרטיס';
      if (!formData.cardExpiry) newErrors.cardExpiry = 'נא להזין תוקף';
      if (!formData.cardCvv) newErrors.cardCvv = 'נא להזין קוד אבטחה';
      if (!formData.cardOwner) newErrors.cardOwner = 'נא להזין שם בעל הכרטיס';
      if (!formData.cardId) newErrors.cardId = 'נא להזין מספר ת.ז';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setLoading(true);
    
    try {
      // כאן יתבצע בפועל עיבוד התשלום מול שירות סליקה
      // לצורך הדוגמה, נדמה תהליך תשלום מוצלח
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // יצירת מספר הזמנה אקראי
      const randomOrderNumber = Math.floor(100000 + Math.random() * 900000).toString();
      setOrderNumber(randomOrderNumber);
      
      // ניקוי העגלה לאחר הזמנה מוצלחת
      clearCart();
      
      // מעבר למסך סיום הזמנה
      setOrderComplete(true);
    } catch (error) {
      console.error('שגיאה בעיבוד התשלום:', error);
      setErrors(prev => ({...prev, payment: 'אירעה שגיאה בעיבוד התשלום. אנא נסה שנית.'}));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {orderComplete ? (
          // תצוגת סיום הזמנה מוצלחת
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-10 mx-auto max-w-3xl">
            <div className="text-center mb-8">
              <div className="inline-block bg-green-100 p-3 rounded-full mb-4">
                <FaCheckCircle className="text-green-600 text-5xl" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">תודה על הזמנתך!</h1>
              <p className="text-gray-600 max-w-md mx-auto">
                ההזמנה שלך התקבלה בהצלחה ונמצאת בטיפול. שלחנו לך אישור למייל.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 mb-6 bg-gray-50">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">מספר הזמנה:</span>
                <span className="font-mono">{orderNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">סכום לתשלום:</span>
                <span>{finalTotal} ₪</span>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <FaTruck className="text-orange-500 ml-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">המשלוח שלך יישלח בקרוב</p>
                  <p className="text-sm text-gray-600">אנו נשלח הודעה במייל ובמסרון כאשר המשלוח ייצא מהמחסן.</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaInfoCircle className="text-orange-500 ml-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">שאלות?</p>
                  <p className="text-sm text-gray-600">צוות שירות הלקוחות שלנו זמין לעזור בכל שאלה: support@xdrill.co.il</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-medium py-3 px-6 rounded-md flex items-center justify-center"
              >
                המשך לדף הבית
              </Link>
              <Link
                href="/products"
                className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-md flex items-center justify-center"
              >
                המשך לקנות
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* תהליך צ'קאאוט בשלבים */}
            <div className="mb-8">
              <div className="flex justify-between items-center max-w-2xl mx-auto mb-8">
                <div className="flex flex-col items-center">
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                    <FaUserAlt />
                  </div>
                  <span className={`mt-2 text-sm ${currentStep >= 1 ? 'text-orange-600 font-medium' : 'text-gray-500'}`}>פרטים אישיים</span>
                </div>
                <div className={`flex-1 h-1 mx-2 ${currentStep >= 2 ? 'bg-orange-600' : 'bg-gray-200'}`} />
                <div className="flex flex-col items-center">
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center ${currentStep >= 2 ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                    <FaMapMarkerAlt />
                  </div>
                  <span className={`mt-2 text-sm ${currentStep >= 2 ? 'text-orange-600 font-medium' : 'text-gray-500'}`}>משלוח</span>
                </div>
                <div className={`flex-1 h-1 mx-2 ${currentStep >= 3 ? 'bg-orange-600' : 'bg-gray-200'}`} />
                <div className="flex flex-col items-center">
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center ${currentStep >= 3 ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                    <FaCreditCard />
                  </div>
                  <span className={`mt-2 text-sm ${currentStep >= 3 ? 'text-orange-600 font-medium' : 'text-gray-500'}`}>תשלום</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* טופס צ'קאאוט */}
              <div className="lg:col-span-2 space-y-6">
                <form onSubmit={handleSubmitOrder}>
                  
                  {/* שלב 1: פרטים אישיים */}
                  {currentStep === 1 && (
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h2 className="text-xl font-semibold mb-6 flex items-center border-b pb-4">
                        <FaUserAlt className="text-orange-600 ml-2" />
                        פרטים אישיים
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                            שם פרטי <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className={`w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none transition ${errors.firstName ? 'border-red-300 bg-red-50' : 'border-gray-300'}`}
                          />
                          {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                            שם משפחה <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className={`w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none transition ${errors.lastName ? 'border-red-300 bg-red-50' : 'border-gray-300'}`}
                          />
                          {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                        </div>
                      </div>
                      <div className="mt-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          אימייל <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none transition ${errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'}`}
                          placeholder="your@email.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                      <div className="mt-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          טלפון נייד <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none transition ${errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-300'}`}
                          placeholder="050-0000000"
                          dir="ltr"
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                      </div>
                      <div className="mt-6 flex items-center">
                        <input
                          type="checkbox"
                          id="receiveUpdates"
                          name="receiveUpdates"
                          checked={formData.receiveUpdates}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-orange-600 rounded focus:ring-orange-400"
                        />
                        <label htmlFor="receiveUpdates" className="mr-3 block text-sm text-gray-700">
                          אני מעוניין/ת לקבל עדכונים ומבצעים במייל
                        </label>
                      </div>
                      <div className="mt-8 flex justify-end">
                        <button
                          type="button"
                          onClick={goToNextStep}
                          className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-2.5 px-6 rounded-md"
                        >
                          המשך לפרטי משלוח
                        </button>
                      </div>
                    </div>
                  )}

                  {/* שלב 2: פרטי משלוח */}
                  {currentStep === 2 && (
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h2 className="text-xl font-semibold mb-6 flex items-center border-b pb-4">
                        <FaTruck className="text-orange-600 ml-2" />
                        פרטי משלוח
                      </h2>
                      
                      <div className="mb-6">
                        <h3 className="text-lg font-medium mb-3">אפשרויות משלוח</h3>
                        <div className="space-y-4">
                          <div className="flex items-center p-3 rounded-md border border-gray-300 transition-all hover:bg-gray-50 cursor-pointer">
                            <input
                              type="radio"
                              id="shipping"
                              name="deliveryMethod"
                              value="shipping"
                              checked={formData.deliveryMethod === 'shipping'}
                              onChange={handleInputChange}
                              className="h-4 w-4 text-orange-600 focus:ring-orange-400"
                            />
                            <label htmlFor="shipping" className="mr-3 flex-1 cursor-pointer">
                              <div className="flex items-center justify-between">
                                <span className="font-medium">משלוח עד הבית</span>
                                <span className="font-medium">{shippingCost === 0 ? 'חינם!' : `${shippingCost} ₪`}</span>
                              </div>
                              <p className="text-sm text-gray-600 mt-1">
                                משלוח עד הבית תוך 3-5 ימי עסקים
                              </p>
                              {cartTotal < 1000 && shippingCost > 0 && (
                                <p className="text-xs text-orange-600 mt-1">
                                  הוסף עוד {1000 - cartTotal} ₪ לקבלת משלוח חינם
                                </p>
                              )}
                            </label>
                          </div>
                          <div className="flex items-center p-3 rounded-md border border-gray-300 transition-all hover:bg-gray-50 cursor-pointer">
                            <input
                              type="radio"
                              id="pickup"
                              name="deliveryMethod"
                              value="pickup"
                              checked={formData.deliveryMethod === 'pickup'}
                              onChange={handleInputChange}
                              className="h-4 w-4 text-orange-600 focus:ring-orange-400"
                            />
                            <label htmlFor="pickup" className="mr-3 flex-1 cursor-pointer">
                              <div className="flex items-center justify-between">
                                <span className="font-medium">איסוף עצמי</span>
                                <span className="text-green-600 font-medium">חינם</span>
                              </div>
                              <p className="text-sm text-gray-600 mt-1">
                                איסוף עצמי מהמשרדים שלנו בתל אביב
                              </p>
                            </label>
                          </div>
                        </div>
                      </div>
                      
                      {formData.deliveryMethod === 'shipping' && (
                        <>
                          <hr className="my-6" />
                          <h3 className="text-lg font-medium mb-4">כתובת למשלוח</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 md:col-span-1">
                              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                                רחוב <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                className={`w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none transition ${errors.address ? 'border-red-300 bg-red-50' : 'border-gray-300'}`}
                              />
                              {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                            </div>
                            <div className="col-span-2 md:col-span-1">
                              <label htmlFor="addressNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                מספר בית <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                id="addressNumber"
                                name="addressNumber"
                                value={formData.addressNumber}
                                onChange={handleInputChange}
                                className={`w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none transition ${errors.addressNumber ? 'border-red-300 bg-red-50' : 'border-gray-300'}`}
                              />
                              {errors.addressNumber && <p className="text-red-500 text-xs mt-1">{errors.addressNumber}</p>}
                            </div>
                            <div className="col-span-2 md:col-span-1">
                              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                                עיר <span className="text-red-500">*</span>
                              </label>
                              <select
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                className={`w-full border rounded-md px-3 py-2.5 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none transition ${errors.city ? 'border-red-300 bg-red-50' : 'border-gray-300'}`}
                              >
                                <option value="">בחר עיר</option>
                                {israeliCities.map(city => (
                                  <option key={city} value={city}>{city}</option>
                                ))}
                              </select>
                              {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                            </div>
                            <div className="col-span-2 md:col-span-1">
                              <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
                                מיקוד
                              </label>
                              <input
                                type="text"
                                id="postalCode"
                                name="postalCode"
                                value={formData.postalCode}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none transition"
                              />
                            </div>
                          </div>
                          <div className="mt-4">
                            <label htmlFor="deliveryNotes" className="block text-sm font-medium text-gray-700 mb-1">
                              הערות למשלוח
                            </label>
                            <textarea
                              id="deliveryNotes"
                              name="deliveryNotes"
                              value={formData.deliveryNotes}
                              onChange={handleInputChange}
                              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none transition"
                              rows={3}
                              placeholder="הוראות מיוחדות, קוד לבניין, או כל מידע שיעזור לנו למסור את החבילה"
                            />
                          </div>
                        </>
                      )}
                      
                      <div className="mt-8 flex justify-between">
                        <button
                          type="button"
                          onClick={goToPreviousStep}
                          className="text-gray-600 hover:text-gray-900 bg-white border border-gray-300 hover:bg-gray-50 py-2.5 px-6 rounded-md transition"
                        >
                          חזרה
                        </button>
                        <button
                          type="button"
                          onClick={goToNextStep}
                          className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-2.5 px-6 rounded-md"
                        >
                          המשך לתשלום
                        </button>
                      </div>
                    </div>
                  )}

                  {/* שלב 3: תשלום */}
                  {currentStep === 3 && (
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h2 className="text-xl font-semibold mb-6 flex items-center border-b pb-4">
                        <FaCreditCard className="text-orange-600 ml-2" />
                        פרטי תשלום
                      </h2>
                      
                      <div className="mb-6">
                        <h3 className="text-lg font-medium mb-3">בחר אמצעי תשלום</h3>
                        <div className="space-y-4">
                          <div className="flex items-center p-3 rounded-md border border-gray-300 transition-all hover:bg-gray-50 cursor-pointer">
                            <input
                              type="radio"
                              id="credit"
                              name="paymentMethod"
                              value="credit"
                              checked={formData.paymentMethod === 'credit'}
                              onChange={handleInputChange}
                              className="h-4 w-4 text-orange-600 focus:ring-orange-400"
                            />
                            <label htmlFor="credit" className="mr-3 flex-1 cursor-pointer">
                              <div className="flex items-center justify-between">
                                <span className="font-medium">כרטיס אשראי</span>
                                <div className="flex items-center space-x-1 space-x-reverse">
                                  <FaCcVisa className="text-blue-700 text-2xl" />
                                  <FaCcMastercard className="text-red-500 text-2xl" />
                                  <FaCcAmex className="text-blue-500 text-2xl" />
                                </div>
                              </div>
                            </label>
                          </div>
                          <div className="flex items-center p-3 rounded-md border border-gray-300 transition-all hover:bg-gray-50 cursor-pointer">
                            <input
                              type="radio"
                              id="bit"
                              name="paymentMethod"
                              value="bit"
                              checked={formData.paymentMethod === 'bit'}
                              onChange={handleInputChange}
                              className="h-4 w-4 text-orange-600 focus:ring-orange-400"
                            />
                            <label htmlFor="bit" className="mr-3 flex-1 cursor-pointer">
                              <div className="flex items-center">
                                <span className="font-medium">תשלום באפליקציית ביט</span>
                                <FaMobileAlt className="mr-2 text-blue-500" />
                              </div>
                            </label>
                          </div>
                          <div className="flex items-center p-3 rounded-md border border-gray-300 transition-all hover:bg-gray-50 cursor-pointer">
                            <input
                              type="radio"
                              id="bank"
                              name="paymentMethod"
                              value="bank"
                              checked={formData.paymentMethod === 'bank'}
                              onChange={handleInputChange}
                              className="h-4 w-4 text-orange-600 focus:ring-orange-400"
                            />
                            <label htmlFor="bank" className="mr-3 flex-1 cursor-pointer">
                              <div className="flex items-center">
                                <span className="font-medium">העברה בנקאית</span>
                                <FaUniversity className="mr-2 text-gray-600" />
                              </div>
                            </label>
                          </div>
                        </div>
                      </div>
                      
                      {formData.paymentMethod === 'credit' && (
                        <div className="mt-6 border border-gray-300 rounded-md p-4 bg-gray-50">
                          <h4 className="font-medium mb-4 flex items-center">
                            <FaLock className="text-green-600 ml-2" />
                            פרטי כרטיס אשראי
                            <span className="text-xs text-gray-600 mr-auto">מאובטח ע״י SSL</span>
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="md:col-span-2">
                              <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                מספר כרטיס <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                id="cardNumber"
                                name="cardNumber"
                                value={formData.cardNumber}
                                onChange={handleInputChange}
                                className={`w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none transition ${errors.cardNumber ? 'border-red-300 bg-red-50' : 'border-gray-300'}`}
                                placeholder="1234 5678 9012 3456"
                                dir="ltr"
                              />
                              {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
                            </div>
                            <div>
                              <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700 mb-1">
                                תוקף <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                id="cardExpiry"
                                name="cardExpiry"
                                value={formData.cardExpiry}
                                onChange={handleInputChange}
                                className={`w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none transition ${errors.cardExpiry ? 'border-red-300 bg-red-50' : 'border-gray-300'}`}
                                placeholder="MM/YY"
                                dir="ltr"
                              />
                              {errors.cardExpiry && <p className="text-red-500 text-xs mt-1">{errors.cardExpiry}</p>}
                            </div>
                            <div>
                              <label htmlFor="cardCvv" className="block text-sm font-medium text-gray-700 mb-1">
                                CVV <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                id="cardCvv"
                                name="cardCvv"
                                value={formData.cardCvv}
                                onChange={handleInputChange}
                                className={`w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none transition ${errors.cardCvv ? 'border-red-300 bg-red-50' : 'border-gray-300'}`}
                                placeholder="123"
                                dir="ltr"
                              />
                              {errors.cardCvv && <p className="text-red-500 text-xs mt-1">{errors.cardCvv}</p>}
                            </div>
                            <div className="md:col-span-2">
                              <label htmlFor="cardOwner" className="block text-sm font-medium text-gray-700 mb-1">
                                שם בעל הכרטיס <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                id="cardOwner"
                                name="cardOwner"
                                value={formData.cardOwner}
                                onChange={handleInputChange}
                                className={`w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none transition ${errors.cardOwner ? 'border-red-300 bg-red-50' : 'border-gray-300'}`}
                              />
                              {errors.cardOwner && <p className="text-red-500 text-xs mt-1">{errors.cardOwner}</p>}
                            </div>
                            <div className="md:col-span-2">
                              <label htmlFor="cardId" className="block text-sm font-medium text-gray-700 mb-1">
                                ת.ז. בעל הכרטיס <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                id="cardId"
                                name="cardId"
                                value={formData.cardId}
                                onChange={handleInputChange}
                                className={`w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none transition ${errors.cardId ? 'border-red-300 bg-red-50' : 'border-gray-300'}`}
                                dir="ltr"
                              />
                              {errors.cardId && <p className="text-red-500 text-xs mt-1">{errors.cardId}</p>}
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {formData.paymentMethod === 'bit' && (
                        <div className="mt-6 border border-gray-300 rounded-md p-4 bg-gray-50">
                          <p className="text-gray-700">
                            לאחר השלמת ההזמנה, תקבל הודעת SMS עם קישור לביצוע התשלום באמצעות אפליקציית ביט.
                          </p>
                        </div>
                      )}
                      
                      {formData.paymentMethod === 'bank' && (
                        <div className="mt-6 border border-gray-300 rounded-md p-4 bg-gray-50">
                          <p className="text-gray-700 mb-4">
                            לאחר השלמת ההזמנה, תקבל מייל עם פרטי חשבון הבנק שלנו להעברה.
                            <br />
                            שים לב: ההזמנה תטופל רק לאחר אישור קבלת התשלום.
                          </p>
                          <div className="bg-blue-50 text-blue-700 p-3 rounded-md text-sm">
                            <p>
                              <strong>חשוב:</strong> יש לציין את מספר ההזמנה בהערות להעברה הבנקאית
                            </p>
                          </div>
                        </div>
                      )}
                      
                      {errors.payment && (
                        <div className="mt-4 bg-red-50 text-red-600 p-3 rounded-md">
                          {errors.payment}
                        </div>
                      )}
                      
                      <div className="mt-8 flex justify-between">
                        <button
                          type="button"
                          onClick={goToPreviousStep}
                          className="text-gray-600 hover:text-gray-900 bg-white border border-gray-300 hover:bg-gray-50 py-2.5 px-6 rounded-md transition"
                        >
                          חזרה
                        </button>
                        
                        <button
                          type="submit"
                          disabled={loading}
                          className={`bg-orange-600 hover:bg-orange-700 text-white font-medium py-2.5 px-6 rounded-md flex items-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                          {loading ? (
                            <>
                              <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full ml-2"></div>
                              מעבד תשלום...
                            </>
                          ) : (
                            <>
                              <FaLock className="ml-2" />
                              סיום הזמנה ותשלום
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                  
                </form>
              </div>

              {/* סיכום הזמנה */}
              <div>
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
                  <h2 className="text-xl font-semibold mb-4 flex items-center border-b pb-4">
                    <FaShoppingCart className="text-orange-600 ml-2" />
                    סיכום הזמנה
                  </h2>
                  
                  {/* פריטים בעגלה */}
                  <div className="mb-6">
                    <h3 className="text-base font-medium mb-3">פריטים בעגלה</h3>
                    <div className="max-h-60 overflow-y-auto mb-3 pr-2 space-y-3">
                      {items.map((item) => (
                        <div key={item.id} className="flex items-start border-b border-gray-100 pb-3">
                          <div className="h-12 w-12 bg-gray-100 rounded-md overflow-hidden flex-shrink-0 mr-2">
                            {item.image ? (
                              <Image 
                                src={item.image} 
                                alt={item.name}
                                width={48}
                                height={48}
                                className="object-contain w-full h-full"
                              />
                            ) : (
                              <div className="h-full w-full flex items-center justify-center">
                                <span className="text-gray-500 text-xs">אין תמונה</span>
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0 mr-4">
                            <p className="text-sm font-medium text-gray-800 truncate mb-1">{item.name}</p>
                            <div className="flex justify-between items-center text-xs text-gray-600">
                              <span>{item.quantity} x {item.price} ₪</span>
                              <span className="font-semibold">{item.price * item.quantity} ₪</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* קופון הנחה */}
                  <div className="mb-6">
                    <div className="flex items-center mb-2">
                      <h3 className="text-base font-medium">קופון הנחה</h3>
                      {discountApplied && (
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded-full mr-auto">
                          קופון פעיל
                        </span>
                      )}
                    </div>
                    <div className="flex">
                      <input
                        type="text"
                        id="couponCode"
                        value={couponCode}
                        onChange={(e) => {
                          setCouponCode(e.target.value);
                          if (errors.coupon) {
                            setErrors(prev => {
                              const newErrors = {...prev};
                              delete newErrors.coupon;
                              return newErrors;
                            });
                          }
                        }}
                        placeholder="הזן קוד קופון"
                        className={`flex-1 border rounded-r-md px-3 py-2 outline-none ${discountApplied ? 'bg-gray-100 text-gray-500' : 'border-gray-300'} ${errors.coupon ? 'border-red-300 bg-red-50' : ''}`}
                        disabled={discountApplied}
                      />
                      <button 
                        type="button"
                        className={`px-4 py-2 rounded-l-md ${discountApplied ? 
                          'bg-green-600 hover:bg-green-700 text-white' : 
                          'bg-gray-800 hover:bg-gray-900 text-white'}`}
                        onClick={discountApplied ? 
                          () => {
                            setDiscountApplied(false);
                            setDiscountAmount(0);
                            setCouponCode('');
                          } : 
                          handleApplyCoupon}
                        disabled={!couponCode && !discountApplied}
                      >
                        {discountApplied ? 'בטל' : 'החל קופון'}
                      </button>
                    </div>
                    {errors.coupon && (
                      <p className="text-red-500 text-xs mt-1">{errors.coupon}</p>
                    )}
                    {discountApplied && (
                      <p className="text-green-600 text-xs mt-1">קופון WELCOME10 הופעל - 10% הנחה!</p>
                    )}
                  </div>
                  
                  {/* חישוב הסכום */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">סכום ביניים</span>
                      <span>{cartTotal} ₪</span>
                    </div>
                    {discountApplied && discount > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-green-600">הנחה</span>
                        <span className="text-green-600">- {discount} ₪</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">משלוח</span>
                      <span>{shippingCost === 0 ? 'חינם!' : `${shippingCost} ₪`}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-3 mt-3">
                      <div className="flex justify-between font-bold text-base">
                        <span>סה"כ לתשלום</span>
                        <span>{finalTotal} ₪</span>
                      </div>
                      {(cartTotal > 1000 || shippingCost === 0) && (
                        <div className="bg-green-50 text-green-700 p-2 rounded text-xs text-center mt-3">
                          <FaCheck className="inline-block ml-1" /> כולל משלוח חינם!
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* קישור לחזרה לעגלה */}
                  <Link href="/cart" className="flex items-center justify-center text-orange-600 hover:text-orange-700 text-sm mt-4">
                    <FaArrowLeft className="ml-1" />
                    חזרה לעגלת הקניות
                  </Link>
                  
                  {/* מידע על אבטחה */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-center text-gray-500 text-sm">
                      <FaLock className="ml-2 text-green-600" />
                      תשלום מאובטח בסטנדרט SSL
                    </div>
                    <div className="flex justify-center mt-4 space-x-2 space-x-reverse">
                      <FaCcVisa className="text-blue-800 text-3xl mx-1" />
                      <FaCcMastercard className="text-red-600 text-3xl mx-1" />
                      <FaCcAmex className="text-blue-500 text-3xl mx-1" />
                    </div>
                  </div>
                </div>
                
                {/* יתרונות הקנייה */}
                <div className="bg-white rounded-lg shadow-md p-5 mt-6">
                  <h3 className="font-semibold mb-4">למה לקנות אצלנו?</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <FaTruck className="text-orange-500 ml-3 mt-1" />
                      <div>
                        <p className="font-medium">משלוח מהיר</p>
                        <p className="text-sm text-gray-600">משלוח עד 3 ימי עסקים לכל הארץ</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FaShieldAlt className="text-orange-500 ml-3 mt-1" />
                      <div>
                        <p className="font-medium">אחריות יצרן</p>
                        <p className="text-sm text-gray-600">כל המוצרים באחריות מלאה</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FaMoneyBillWave className="text-orange-500 ml-3 mt-1" />
                      <div>
                        <p className="font-medium">תשלום מאובטח</p>
                        <p className="text-sm text-gray-600">מגוון אמצעי תשלום מאובטחים</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
} 