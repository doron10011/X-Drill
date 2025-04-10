'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaTrash, FaArrowLeft } from 'react-icons/fa';

// Mock data - replace with actual data from your cart state
const cartItems = [
  {
    id: 1,
    name: 'כוס קידוח יהלום לקידוח רטוב עם סגמנט Arix',
    diameter: '67 מ"מ',
    price: 450,
    quantity: 1,
    image: '/placeholder.jpg',
  },
  {
    id: 2,
    name: 'כוס קידוח יהלום לקידוח רטוב עם סגמנט Arix',
    diameter: '77 מ"מ',
    price: 550,
    quantity: 2,
    image: '/placeholder.jpg',
  },
];

export default function Cart() {
  const [items, setItems] = useState(cartItems);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 50; // Mock shipping cost
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">עגלת קניות</h1>

        {items.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <p className="text-gray-600 mb-4">העגלה שלך ריקה</p>
            <Link
              href="/products"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md inline-flex items-center"
            >
              <FaArrowLeft className="ml-2" />
              המשך לקנות
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="divide-y divide-gray-200">
                  {items.map((item) => (
                    <div key={item.id} className="p-6">
                      <div className="flex">
                        <div className="h-24 w-24 bg-gray-200 rounded-md flex-shrink-0 flex items-center justify-center">
                          <span className="text-gray-500">תמונת מוצר</span>
                        </div>
                        <div className="ml-4 flex-1">
                          <div className="flex justify-between">
                            <h3 className="text-lg font-semibold">{item.name}</h3>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-gray-400 hover:text-red-500"
                            >
                              <FaTrash />
                            </button>
                          </div>
                          <p className="text-gray-600 mt-1">קוטר: {item.diameter}</p>
                          <div className="mt-4 flex items-center justify-between">
                            <div className="flex items-center">
                              <button
                                className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-l"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                -
                              </button>
                              <span className="px-4 py-1 bg-gray-100">{item.quantity}</span>
                              <button
                                className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-r"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                +
                              </button>
                            </div>
                            <span className="text-lg font-semibold">
                              {item.price * item.quantity} ₪
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4">סיכום הזמנה</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">סכום ביניים</span>
                    <span>{subtotal} ₪</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">משלוח</span>
                    <span>{shipping} ₪</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between font-semibold">
                      <span>סה"כ לתשלום</span>
                      <span>{total} ₪</span>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-md mt-6">
                  המשך לתשלום
                </button>
                <Link
                  href="/products"
                  className="block text-center text-orange-600 hover:text-orange-700 mt-4"
                >
                  <FaArrowLeft className="inline-block ml-2" />
                  המשך לקנות
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 