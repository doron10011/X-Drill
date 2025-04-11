'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShoppingCart, FaCheck, FaTimes } from 'react-icons/fa';

// Define cart item type
export type CartItem = {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  attributes?: {
    diameter?: string;
    thread?: string;
    [key: string]: any;
  };
};

// Define the shape of the context
interface CartContextProps {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string | number) => void;
  updateQuantity: (id: string | number, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
  showNotification: boolean;
  lastAddedItem: CartItem | null;
  closeNotification: () => void;
}

// Create cart context
const CartContext = createContext<CartContextProps | undefined>(undefined);

// Cart provider component
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [showNotification, setShowNotification] = useState(false);
  const [lastAddedItem, setLastAddedItem] = useState<CartItem | null>(null);
  
  // Try to load cart from localStorage on component mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        setItems(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error('Failed to load cart from localStorage', error);
    }
  }, []);
  
  // Save cart to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(items));
    } catch (error) {
      console.error('Failed to save cart to localStorage', error);
    }
  }, [items]);
  
  // Calculate cart count and total
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Add item to cart
  const addItem = (item: CartItem) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      
      let newItems;
      if (existingItem) {
        // Item already exists, update quantity
        newItems = prevItems.map(i => 
          i.id === item.id 
            ? { ...i, quantity: i.quantity + item.quantity } 
            : i
        );
      } else {
        // Add new item
        newItems = [...prevItems, item];
      }
      
      setLastAddedItem(item);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5000);
      
      return newItems;
    });
  };

  // Remove item from cart
  const removeItem = (id: string | number) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Update item quantity
  const updateQuantity = (id: string | number, quantity: number) => {
    if (quantity < 1) return;
    
    setItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // Clear entire cart
  const clearCart = () => {
    setItems([]);
  };
  
  // Close notification
  const closeNotification = () => {
    setShowNotification(false);
  };

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      cartCount,
      cartTotal,
      showNotification,
      lastAddedItem,
      closeNotification
    }}>
      {children}
      
      {/* Cart notification */}
      <AnimatePresence>
        {showNotification && lastAddedItem && (
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 z-50 max-w-sm w-full"
          >
            <div className="flex items-start">
              <div className="bg-green-100 text-green-600 p-2 rounded-full ml-3">
                <FaCheck />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-gray-900">נוסף לעגלה בהצלחה!</h3>
                  <button 
                    onClick={closeNotification}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <FaTimes />
                  </button>
                </div>
                <p className="text-gray-700 mt-1 truncate">{lastAddedItem.name}</p>
                <div className="flex justify-between items-center mt-3">
                  <p className="text-orange-600 font-semibold">
                    {lastAddedItem.quantity} x {lastAddedItem.price} ₪
                  </p>
                  <button
                    onClick={() => window.location.href = '/cart'}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-3 py-1 rounded-md text-sm transition-colors"
                  >
                    צפה בעגלה
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </CartContext.Provider>
  );
}

// Custom hook to use the cart context
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
} 