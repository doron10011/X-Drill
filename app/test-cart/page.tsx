'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '../../components/CartContext';

export default function TestCart() {
  const { items, addItem, removeItem, clearCart, cartCount, cartTotal } = useCart();
  const [localStorageCart, setLocalStorageCart] = useState<string | null>(null);

  useEffect(() => {
    // Check localStorage directly
    try {
      const savedCart = localStorage.getItem('cart');
      setLocalStorageCart(savedCart);
    } catch (error) {
      console.error('Error accessing localStorage:', error);
    }
  }, [items]);

  const handleAddTestItem = () => {
    const testItem = {
      id: `test-${Date.now()}`,
      name: `מוצר לבדיקה ${Date.now().toString().slice(-4)}`,
      price: 100,
      quantity: 1,
      attributes: {
        diameter: '100mm',
        thread: '1/2"'
      }
    };
    
    console.log('Adding test item to cart:', testItem);
    addItem(testItem);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">בדיקת פונקציונליות העגלה</h1>
      
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">פעולות</h2>
        <div className="space-y-2 flex">
          <button 
            onClick={handleAddTestItem}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded mr-2"
          >
            הוסף מוצר לבדיקה
          </button>
          
          <button 
            onClick={clearCart}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
          >
            רוקן עגלה
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">מידע על העגלה (מהקונטקסט)</h2>
          <div className="space-y-2">
            <p><strong>מספר מוצרים:</strong> {cartCount}</p>
            <p><strong>סה"כ מחיר:</strong> {cartTotal} ₪</p>
            
            <div className="mt-4">
              <h3 className="font-semibold mb-2">פריטים בעגלה:</h3>
              {items.length === 0 ? (
                <p className="text-gray-500">העגלה ריקה</p>
              ) : (
                <ul className="list-disc list-inside space-y-2">
                  {items.map(item => (
                    <li key={item.id} className="flex justify-between">
                      <span>
                        {item.name} ({item.quantity} x {item.price} ₪)
                      </span>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        הסר
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">מידע מה-LocalStorage</h2>
          {localStorageCart ? (
            <div>
              <p className="mb-2">תוכן ה-LocalStorage:</p>
              <pre className="bg-gray-100 p-3 rounded overflow-auto max-h-80 rtl text-xs">
                {localStorageCart}
              </pre>
            </div>
          ) : (
            <p className="text-gray-500">אין מידע ב-LocalStorage</p>
          )}
        </div>
      </div>
      
      <div className="mt-8 flex gap-4 justify-center">
        <Link href="/" className="text-blue-600 hover:text-blue-800">
          חזרה לדף הבית
        </Link>
        <Link href="/cart" className="text-blue-600 hover:text-blue-800">
          מעבר לעגלה
        </Link>
      </div>
    </div>
  );
} 