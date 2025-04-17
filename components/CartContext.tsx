'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShoppingCart, FaCheck, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

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
                  <Link
                    href="/cart"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-3 py-1 rounded-md text-sm transition-colors"
                  >
                    צפה בעגלה
                  </Link>
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