'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaTrash, FaChevronLeft, FaShoppingCart, FaCreditCard, FaTruck, FaShieldAlt, FaInfoCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../components/CartContext';

export default function Cart() {
  const { items, removeItem, updateQuantity, cartTotal } = useCart();
  const [isLoading, setIsLoading] = useState(true);
  const [updateAnimation, setUpdateAnimation] = useState<number | null>(null);

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleUpdateQuantity = (id: string | number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    updateQuantity(id, newQuantity);
    
    // Trigger animation
    setUpdateAnimation(id);
    setTimeout(() => setUpdateAnimation(null), 300);
  };

  const shipping = cartTotal > 1000 ? 0 : 50; // Free shipping over 1000₪
  const total = cartTotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-2">עגלת קניות</h1>
        <p className="text-gray-600 mb-8">המוצרים שהוספת לעגלה שלך</p>

        {isLoading ? (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <div className="inline-block animate-spin border-4 border-gray-300 border-t-orange-600 rounded-full h-12 w-12 mb-4"></div>
            <p className="text-gray-600">טוען את עגלת הקניות שלך...</p>
          </div>
        ) : items.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow p-12 text-center"
          >
            <div className="text-orange-500 text-6xl mb-4">
              <FaShoppingCart />
            </div>
            <h2 className="text-2xl font-bold mb-2">העגלה שלך ריקה</h2>
            <p className="text-gray-600 mb-6">נראה שטרם הוספת מוצרים לעגלה שלך</p>
            <Link
              href="/products"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md inline-flex items-center transition-colors duration-300"
            >
              המשך לקנות
              <FaChevronLeft className="mr-2" />
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-lg shadow overflow-hidden"
              >
                <div className="divide-y divide-gray-200">
                  <AnimatePresence>
                    {items.map((item) => (
                      <motion.div 
                        key={item.id} 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6"
                      >
                        <div className="flex flex-col md:flex-row">
                          <div className="h-24 w-24 bg-gray-200 rounded-md flex-shrink-0 flex items-center justify-center">
                            <span className="text-gray-500">תמונת מוצר</span>
                          </div>
                          <div className="mr-4 flex-1 mt-4 md:mt-0">
                            <div className="flex flex-col md:flex-row md:justify-between">
                              <h3 className="text-lg font-semibold">{item.name}</h3>
                              <button
                                onClick={() => removeItem(item.id)}
                                className="text-gray-400 hover:text-red-500 transition-colors duration-300 mt-2 md:mt-0"
                              >
                                <FaTrash />
                              </button>
                            </div>
                            <p className="text-gray-600 mt-1">
                              {item.attributes?.diameter && `קוטר: ${item.attributes.diameter}, `}
                              {item.attributes?.thread && `חיבור: ${item.attributes.thread}`}
                            </p>
                            <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between">
                              <div className="flex items-center">
                                <button
                                  className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-r transition-colors duration-300"
                                  onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                                >
                                  -
                                </button>
                                <motion.span 
                                  className="px-4 py-1 bg-gray-50 min-w-[3rem] text-center"
                                  animate={updateAnimation === item.id ? { scale: [1, 1.2, 1] } : {}}
                                >
                                  {item.quantity}
                                </motion.span>
                                <button
                                  className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-l transition-colors duration-300"
                                  onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                                >
                                  +
                                </button>
                              </div>
                              <motion.span 
                                className="text-lg font-semibold mt-3 md:mt-0"
                                animate={updateAnimation === item.id ? { scale: [1, 1.2, 1] } : {}}
                              >
                                {item.price * item.quantity} ₪
                              </motion.span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>

            {/* Order Summary */}
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow p-6 sticky top-24"
              >
                <h2 className="text-xl font-semibold mb-4">סיכום הזמנה</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">סכום ביניים</span>
                    <span>{cartTotal} ₪</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">משלוח</span>
                    <span>{shipping === 0 ? 'חינם!' : `${shipping} ₪`}</span>
                  </div>
                  {shipping === 0 && (
                    <div className="bg-green-50 text-green-700 p-2 rounded text-sm text-center">
                      זכית במשלוח חינם!
                    </div>
                  )}
                  {cartTotal < 1000 && shipping > 0 && (
                    <div className="bg-orange-50 text-orange-700 p-2 rounded text-sm text-center">
                      הוסף עוד {1000 - cartTotal} ₪ למשלוח חינם!
                    </div>
                  )}
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between font-semibold">
                      <span>סה"כ לתשלום</span>
                      <span>{total} ₪</span>
                    </div>
                  </div>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.location.href = '/checkout'}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-md mt-6 font-medium flex items-center justify-center transition-colors duration-300"
                >
                  <FaCreditCard className="ml-2" />
                  המשך לתשלום
                </motion.button>
                <Link
                  href="/products"
                  className="block text-center text-orange-600 hover:text-orange-700 mt-4 flex items-center justify-center"
                >
                  המשך לקנות
                  <FaChevronLeft className="mr-2" />
                </Link>
              </motion.div>
              
              {/* Shopping Benefits */}
              <div className="bg-white rounded-lg shadow p-6 mt-6">
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
                    <FaInfoCircle className="text-orange-500 ml-3 mt-1" />
                    <div>
                      <p className="font-medium">שירות לקוחות מקצועי</p>
                      <p className="text-sm text-gray-600">צוות מקצועי זמין לכל שאלה</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 