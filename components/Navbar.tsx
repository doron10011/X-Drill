'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes, FaPhone, FaChevronLeft, FaChevronDown } from 'react-icons/fa';
import { useCart } from './CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { productCategories } from '@/app/data/products';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Get cart from context
  const { items, cartCount, removeItem, updateQuantity, cartTotal } = useCart();
  
  // Check if component is mounted (client-side rendering)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle submenu clicks on mobile
  const toggleSubmenu = (submenu: string) => {
    if (activeSubmenu === submenu) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(submenu);
    }
  };
  
  // Close cart dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isCartOpen && !target.closest('.cart-dropdown') && !target.closest('.cart-trigger')) {
        setIsCartOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCartOpen]);

  // Helper function to get category by id
  const getCategoryById = (id: string) => productCategories.find(cat => cat.id === id);
  
  // Get main categories
  const drillBitsCategory = getCategoryById('diamond-core-drill-bits');
  const sawBladesCategory = getCategoryById('diamond-saw-blades');
  const accessoriesCategory = getCategoryById('accessories');
  const drillingMachinesCategory = getCategoryById('drilling-machines');
  const specialProductsCategory = getCategoryById('special-products');

  return (
    <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-orange-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
          <div className="flex items-center text-sm">
            <FaPhone className="ml-1" />
            <span>התקשרו עכשיו: 03-1234567</span>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white">
              <span className="text-orange-500">X</span>-Drill
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 space-x-reverse">
            <Link href="/" className="px-3 py-2 text-white hover:text-orange-400 font-medium">
              דף הבית
            </Link>
            <div className="relative px-3 py-2 group">
              <span className="text-white hover:text-orange-400 font-medium flex items-center cursor-pointer">
                מוצרים
                <FaChevronDown className="w-3 h-3 mr-1" />
              </span>
              <div className="absolute right-0 mt-5 w-64 bg-white rounded-md shadow-lg py-1 z-50 hidden group-hover:block text-right">
                {productCategories.map(category => (
                  <Link
                    key={category.id}
                    href={`/products/${category.slug}`}
                    className="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/about" className="px-3 py-2 text-white hover:text-orange-400 font-medium">
              אודות
            </Link>
            <Link href="/faq" className="px-3 py-2 text-white hover:text-orange-400 font-medium">
              שאלות נפוצות
            </Link>
            <Link href="/blog" className="px-3 py-2 text-white hover:text-orange-400 font-medium">
              בלוג
            </Link>
            <Link href="/contact" className="px-3 py-2 text-white hover:text-orange-400 font-medium">
              צור קשר
            </Link>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <button className="text-white hover:text-orange-400 p-1">
              <FaSearch className="h-5 w-5" />
            </button>
            <div className="relative">
              <button 
                className="text-white hover:text-orange-400 p-1 relative cart-trigger"
                onClick={() => setIsCartOpen(!isCartOpen)}
              >
                <FaShoppingCart className="h-5 w-5" />
                {mounted && cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              
              {/* Cart Dropdown */}
              <AnimatePresence>
                {isCartOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 w-72 bg-white rounded-md shadow-lg py-2 z-50 cart-dropdown text-right"
                  >
                    <div className="px-4 py-2 border-b border-gray-200">
                      <h3 className="font-semibold text-gray-800">עגלת קניות</h3>
                    </div>
                    
                    {items.length === 0 ? (
                      <div className="px-4 py-3 text-gray-600 text-center">
                        העגלה שלך ריקה
                      </div>
                    ) : (
                      <>
                        <div className="max-h-60 overflow-y-auto">
                          {items.map(item => (
                            <div key={item.id} className="px-4 py-2 border-b border-gray-100 flex items-start">
                              <div className="w-10 h-10 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center ml-2">
                                <span className="text-gray-500 text-xs">תמונה</span>
                              </div>
                              <div className="flex-1">
                                <p className="text-sm text-gray-700 truncate">{item.name}</p>
                                <div className="flex items-center justify-between mt-1">
                                  <div className="text-xs text-gray-500">
                                    {item.quantity} x {item.price} ₪
                                  </div>
                                  <button
                                    onClick={() => removeItem(item.id)}
                                    className="text-red-500 hover:text-red-700 text-xs"
                                  >
                                    הסר
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="px-4 py-2 border-t border-gray-200">
                          <div className="flex justify-between font-semibold text-gray-800 mb-2">
                            <span>סה"כ:</span>
                            <span>{cartTotal} ₪</span>
                          </div>
                          <div className="flex flex-col space-y-2">
                            <Link 
                              href="/cart"
                              className="w-full bg-orange-600 hover:bg-orange-700 text-white text-center py-2 rounded-md text-sm"
                              onClick={() => setIsCartOpen(false)}
                            >
                              לעגלת הקניות
                            </Link>
                            <Link 
                              href="/checkout"
                              className="w-full bg-gray-800 hover:bg-gray-700 text-white text-center py-2 rounded-md text-sm"
                              onClick={() => setIsCartOpen(false)}
                            >
                              לתשלום
                            </Link>
                          </div>
                        </div>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link href="/account" className="text-white hover:text-orange-400 p-1">
              <FaUser className="h-5 w-5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            {/* Mobile cart icon */}
            <Link href="/cart" className="text-white hover:text-orange-400 p-1 relative ml-4">
              <FaShoppingCart className="h-5 w-5" />
              {mounted && cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-orange-400"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-right">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-white hover:text-orange-400 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              דף הבית
            </Link>
            
            {/* Mobile Products dropdown */}
            <div className="block px-3 py-2">
              <button 
                className="flex justify-between w-full font-medium text-white hover:text-orange-400 items-center"
                onClick={() => toggleSubmenu('products')}
              >
                מוצרים
                <FaChevronDown className={`w-3 h-3 transition-transform ${activeSubmenu === 'products' ? 'transform rotate-180' : ''}`} />
              </button>
              
              {activeSubmenu === 'products' && (
                <div className="mt-2 space-y-1">
                  <Link
                    href={`/products/${drillBitsCategory?.slug}`}
                    className="block pr-4 py-1 text-gray-300 hover:text-orange-400 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {drillBitsCategory?.name}
                  </Link>
                  <Link
                    href={`/products/${sawBladesCategory?.slug}`}
                    className="block pr-4 py-1 text-gray-300 hover:text-orange-400 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {sawBladesCategory?.name}
                  </Link>
                  <Link
                    href={`/products/${drillingMachinesCategory?.slug}`}
                    className="block pr-4 py-1 text-gray-300 hover:text-orange-400 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {drillingMachinesCategory?.name || 'מכונות קידוח'}
                  </Link>
                  <Link
                    href={`/products/${accessoriesCategory?.slug}`}
                    className="block pr-4 py-1 text-gray-300 hover:text-orange-400 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {accessoriesCategory?.name}
                  </Link>
                  <Link
                    href={`/products/${specialProductsCategory?.slug}`}
                    className="block pr-4 py-1 text-gray-300 hover:text-orange-400 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {specialProductsCategory?.name || 'מוצרים מיוחדים'}
                  </Link>
                </div>
              )}
            </div>
            
            <Link
              href="/about"
              className="block px-3 py-2 text-white hover:text-orange-400 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              אודות
            </Link>
            <Link
              href="/faq"
              className="block px-3 py-2 text-white hover:text-orange-400 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              שאלות נפוצות
            </Link>
            <Link
              href="/blog"
              className="block px-3 py-2 text-white hover:text-orange-400 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              בלוג
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-white hover:text-orange-400 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              צור קשר
            </Link>
            <div className="flex justify-between px-3 py-2">
              <Link href="/account" className="text-white hover:text-orange-400">
                <FaUser className="h-5 w-5" />
              </Link>
              <button className="text-white hover:text-orange-400">
                <FaSearch className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 