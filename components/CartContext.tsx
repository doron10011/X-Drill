'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShoppingCart, FaCheck, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

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
  const [isInitialized, setIsInitialized] = useState(false);
  
  // Try to load cart from localStorage on component mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      console.log('Initial load from localStorage:', savedCart);
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        console.log('Parsed cart from localStorage:', parsedCart);
        setItems(parsedCart);
      }
    } catch (error) {
      console.error('Failed to load cart from localStorage', error);
    } finally {
      setIsInitialized(true);
    }
  }, []);
  
  // Save cart to localStorage when it changes
  useEffect(() => {
    // Only save to localStorage if the component has initialized
    // This prevents overwriting localStorage with an empty array on initial mount
    if (isInitialized) {
      try {
        console.log('Saving cart to localStorage from effect:', items);
        localStorage.setItem('cart', JSON.stringify(items));
      } catch (error) {
        console.error('Failed to save cart to localStorage', error);
      }
    }
  }, [items, isInitialized]);
  
  // Calculate cart count and total
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Add item to cart
  const addItem = (item: CartItem) => {
    console.log('Adding item to cart:', item);
    console.log('Current cart items before adding:', items);
    
    // Validate item object has required properties
    if (!item.id || !item.name || item.price === undefined || item.quantity === undefined) {
      console.error('Invalid item object:', item);
      return;
    }
    
    try {
      setItems(prevItems => {
        const existingItem = prevItems.find(i => i.id === item.id);
        
        let newItems;
        if (existingItem) {
          // Item already exists, update quantity
          console.log('Item already exists in cart, updating quantity');
          newItems = prevItems.map(i => 
            i.id === item.id 
              ? { ...i, quantity: i.quantity + item.quantity } 
              : i
          );
        } else {
          // Add new item
          console.log('Adding new item to cart');
          newItems = [...prevItems, item];
        }
        
        setLastAddedItem(item);
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 5000);
        
        console.log('New cart items after adding:', newItems);
        
        // Save to localStorage immediately to ensure data is persisted
        try {
          localStorage.setItem('cart', JSON.stringify(newItems));
        } catch (error) {
          console.error('Failed to immediately save cart to localStorage', error);
        }
        
        return newItems;
      });
    } catch (error) {
      console.error('Error in addItem:', error);
    }
  };

  // Remove item from cart
  const removeItem = (id: string | number) => {
    console.log('Removing item from cart with id:', id);
    
    try {
      setItems(prevItems => {
        const newItems = prevItems.filter(item => item.id !== id);
        console.log('Cart items after removal:', newItems);
        
        // Save to localStorage immediately
        try {
          localStorage.setItem('cart', JSON.stringify(newItems));
        } catch (error) {
          console.error('Failed to immediately save cart to localStorage after item removal', error);
        }
        
        return newItems;
      });
    } catch (error) {
      console.error('Error in removeItem:', error);
    }
  };

  // Update item quantity
  const updateQuantity = (id: string | number, quantity: number) => {
    if (quantity < 1) return;
    
    console.log('Updating quantity for item:', id, 'new quantity:', quantity);
    
    try {
      setItems(prevItems => {
        const newItems = prevItems.map(item => 
          item.id === id ? { ...item, quantity } : item
        );
        console.log('Cart items after quantity update:', newItems);
        
        // Save to localStorage immediately
        try {
          localStorage.setItem('cart', JSON.stringify(newItems));
        } catch (error) {
          console.error('Failed to immediately save cart to localStorage after quantity update', error);
        }
        
        return newItems;
      });
    } catch (error) {
      console.error('Error in updateQuantity:', error);
    }
  };

  // Clear entire cart
  const clearCart = () => {
    console.log('Clearing entire cart');
    
    try {
      setItems([]);
      
      // Clear localStorage cart data
      try {
        localStorage.setItem('cart', JSON.stringify([]));
      } catch (error) {
        console.error('Failed to clear cart in localStorage', error);
      }
    } catch (error) {
      console.error('Error in clearCart:', error);
    }
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
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-0 sm:bottom-6 inset-x-0 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 bg-white shadow-xl sm:rounded-lg rounded-t-lg z-50 sm:w-[340px] w-full sm:max-w-[95vw] border border-gray-100 rtl overflow-hidden"
            style={{ boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.1)' }}
          >
            <div className="bg-gradient-to-l from-orange-600 to-orange-500 h-1 sm:h-1.5 w-full"></div>
            <div className="p-3 sm:p-5">
              <div className="flex items-start">
                <div className="bg-white border border-gray-100 rounded-md shadow-sm overflow-hidden h-12 w-12 sm:h-16 sm:w-16 ml-3 flex-shrink-0 flex items-center justify-center">
                  {lastAddedItem.image ? (
                    <Image 
                      src={lastAddedItem.image} 
                      alt={lastAddedItem.name}
                      width={64}
                      height={64}
                      className="object-contain w-full h-full"
                    />
                  ) : (
                    <div className="bg-gradient-to-tr from-green-600 to-green-500 text-white p-1.5 sm:p-2.5 rounded-full shadow-sm flex items-center justify-center">
                      <FaCheck size={12} className="sm:hidden" />
                      <FaCheck size={16} className="hidden sm:block" />
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0 mr-2">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base truncate">נוסף לעגלה!</h3>
                    <button 
                      onClick={closeNotification}
                      className="text-gray-400 hover:text-gray-600 p-1 sm:p-1.5 rounded-full hover:bg-gray-100 transition-all -mr-1 flex-shrink-0"
                      aria-label="סגור התראה"
                    >
                      <FaTimes size={12} className="sm:hidden" />
                      <FaTimes size={14} className="hidden sm:block" />
                    </button>
                  </div>
                  <p className="text-gray-700 mb-2 text-xs sm:text-sm truncate break-words" title={lastAddedItem.name}>
                    {lastAddedItem.name}
                  </p>
                  
                  <div className="pt-2 border-t border-gray-100">
                    <div className="flex items-center mb-2">
                      <p className="text-gray-600 text-xs ml-1">סה"כ:</p>
                      <p className="text-orange-600 font-bold text-xs sm:text-sm">
                        <span>{lastAddedItem.quantity}</span>
                        <span className="mx-1">x</span>
                        <span>{lastAddedItem.price} ₪</span>
                      </p>
                    </div>
                    <Link
                      href="/cart"
                      className="bg-orange-600 hover:bg-orange-700 text-white px-3 py-1.5 sm:py-2 rounded text-xs font-medium transition-colors flex items-center justify-center w-full gap-1"
                    >
                      <FaShoppingCart size={10} className="sm:hidden" />
                      <FaShoppingCart size={14} className="hidden sm:block" />
                      צפה בעגלה
                    </Link>
                  </div>
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