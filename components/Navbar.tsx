'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes, FaPhone, FaChevronLeft, FaChevronDown, FaTools } from 'react-icons/fa';
import { useCart } from './CartContext';
import { motion, AnimatePresence } from 'framer-motion';

type SubmenuType = 'products' | 'diamond-core' | 'diamond-saw' | 'accessories' | null;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<SubmenuType>(null);
  const [mounted, setMounted] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Get cart from context
  const { items, cartCount, removeItem, updateQuantity, cartTotal } = useCart();
  
  // Check if component is mounted (client-side rendering)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle submenu clicks on mobile
  const toggleSubmenu = (submenu: SubmenuType) => {
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

  return (
    <>
      {/* טלפון למעלה - רק במובייל */}
      <div className="top-phone-bar bg-orange-600 text-white py-2 block md:hidden">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center text-sm">
            <FaPhone className="ml-1" />
            <span>התקשרו עכשיו: 03-1234567</span>
          </div>
        </div>
      </div>

      {/* נאבבר למובייל - פשוט ונקי */}
      <nav className="mobile-navbar bg-gray-900 text-white py-3 sticky top-0 z-50 shadow-lg block md:hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* אייקון המבורגר גדול וברור בצד ימין */}
            <div className="hamburger-menu">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="hamburger-button p-2"
                aria-label="תפריט"
              >
                <FaBars className="text-white text-2xl" />
              </button>
            </div>
            
            {/* לוגו באמצע */}
            <div className="logo text-center">
              <Link href="/" className="text-2xl font-bold">
                <span className="text-orange-500">X</span>-Drill
              </Link>
            </div>
            
            {/* אייקונים בצד שמאל */}
            <div className="mobile-icons flex items-center space-x-3 space-x-reverse">
              <button 
                className="mobile-icon p-2"
                onClick={() => setIsCartOpen(!isCartOpen)}
                aria-label="עגלת קניות"
              >
                <div className="relative">
                  <FaShoppingCart className="text-white text-xl" />
                  {mounted && cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </div>
              </button>
              
              <button className="mobile-icon p-2">
                <FaSearch className="text-white text-xl" />
              </button>
            </div>
          </div>
        </div>

        {/* תפריט מובייל - מסך מלא וברור */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mobile-menu-overlay fixed inset-0 bg-black/50 z-40"
                onClick={() => setIsMenuOpen(false)}
              />
              
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="mobile-menu fixed top-0 right-0 bottom-0 z-50 w-4/5 max-w-xs bg-gray-900 shadow-xl overflow-y-auto"
              >
                <div className="mobile-menu-header flex items-center justify-between p-4 border-b border-gray-800">
                  <span className="text-xl font-bold">תפריט</span>
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="p-1 rounded-full hover:bg-gray-800"
                  >
                    <FaTimes className="text-white text-xl" />
                  </button>
                </div>
                
                <div className="mobile-menu-links py-2">
                  <Link 
                    href="/"
                    className="mobile-menu-item block px-4 py-3 text-white hover:bg-gray-800 border-b border-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    דף הבית
                  </Link>
                  
                  {/* קטגוריית מוצרים */}
                  <div>
                    <button 
                      onClick={() => toggleSubmenu('products')}
                      className="w-full text-right flex justify-between items-center px-4 py-3 text-white hover:bg-gray-800 border-b border-gray-800"
                    >
                      <span>מוצרים</span>
                      <FaChevronDown className={`transition-transform duration-300 ${activeSubmenu === 'products' ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {activeSubmenu === 'products' && (
                      <div className="submenu bg-gray-800">
                        {/* כוסות קידוח */}
                        <div>
                          <button
                            onClick={() => toggleSubmenu('diamond-core')}
                            className="w-full text-right flex justify-between items-center px-4 py-3 text-white hover:bg-gray-700 border-b border-gray-700"
                          >
                            <span>כוסות קידוח יהלום</span>
                            <FaChevronDown className={`transition-transform duration-300 ${activeSubmenu === 'diamond-core' ? 'rotate-180' : ''}`} />
                          </button>
                          
                          {activeSubmenu === 'diamond-core' && (
                            <div className="submenu-child bg-gray-700">
                              <Link 
                                href="/products/diamond-core-drill-bits/wet-drilling"
                                className="block px-6 py-3 text-white hover:bg-gray-600 border-b border-gray-600"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                כוסות קידוח רטובות
                              </Link>
                              <Link 
                                href="/products/diamond-core-drill-bits/dry-vacuum-drilling"
                                className="block px-6 py-3 text-white hover:bg-gray-600 border-b border-gray-600"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                כוסות קידוח יבשות/ואקום
                              </Link>
                              <Link 
                                href="/products/diamond-core-drill-bits/special"
                                className="block px-6 py-3 text-white hover:bg-gray-600 border-b border-gray-600"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                כוסות קידוח מיוחדות
                              </Link>
                            </div>
                          )}
                        </div>
                        
                        {/* מסורי יהלום */}
                        <div>
                          <button
                            onClick={() => toggleSubmenu('diamond-saw')}
                            className="w-full text-right flex justify-between items-center px-4 py-3 text-white hover:bg-gray-700 border-b border-gray-700"
                          >
                            <span>מסורי יהלום</span>
                            <FaChevronDown className={`transition-transform duration-300 ${activeSubmenu === 'diamond-saw' ? 'rotate-180' : ''}`} />
                          </button>
                          
                          {activeSubmenu === 'diamond-saw' && (
                            <div className="submenu-child bg-gray-700">
                              <Link 
                                href="/products/diamond-saw-blades/concrete-reinforced"
                                className="block px-6 py-3 text-white hover:bg-gray-600 border-b border-gray-600"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                לבטון ובטון מזוין
                              </Link>
                              <Link 
                                href="/products/diamond-saw-blades/stone-granite"
                                className="block px-6 py-3 text-white hover:bg-gray-600 border-b border-gray-600"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                לאבן, גרניט וחומרי בניין קלים
                              </Link>
                            </div>
                          )}
                        </div>
                        
                        {/* מכונות קידוח */}
                        <Link 
                          href="/products/drilling-machines"
                          className="block px-4 py-3 text-white hover:bg-gray-700 border-b border-gray-700"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          מכונות קידוח
                        </Link>
                        
                        {/* אביזרים */}
                        <div>
                          <button
                            onClick={() => toggleSubmenu('accessories')}
                            className="w-full text-right flex justify-between items-center px-4 py-3 text-white hover:bg-gray-700 border-b border-gray-700"
                          >
                            <span>אביזרים נלווים</span>
                            <FaChevronDown className={`transition-transform duration-300 ${activeSubmenu === 'accessories' ? 'rotate-180' : ''}`} />
                          </button>
                          
                          {activeSubmenu === 'accessories' && (
                            <div className="submenu-child bg-gray-700">
                              <Link 
                                href="/products/accessories/vacuum-drills"
                                className="block px-6 py-3 text-white hover:bg-gray-600 border-b border-gray-600"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                מקדחי ואקום לקידוח יבש
                              </Link>
                              <Link 
                                href="/products/accessories/thread-adapters"
                                className="block px-6 py-3 text-white hover:bg-gray-600 border-b border-gray-600"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                מתאמי הברגות
                              </Link>
                              <Link 
                                href="/products/accessories/drill-extensions"
                                className="block px-6 py-3 text-white hover:bg-gray-600 border-b border-gray-600"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                מאריכי קידוח
                              </Link>
                              <Link 
                                href="/products/accessories/drill-holders"
                                className="block px-6 py-3 text-white hover:bg-gray-600 border-b border-gray-600"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                מחזיקי כוסות קידוח/מקדחים
                              </Link>
                              <Link 
                                href="/products/accessories/water-pumps"
                                className="block px-6 py-3 text-white hover:bg-gray-600 border-b border-gray-600"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                משאבות מים ומערכות איסוף
                              </Link>
                            </div>
                          )}
                        </div>
                        
                        {/* מוצרים מיוחדים */}
                        <Link 
                          href="/products/special-products"
                          className="block px-4 py-3 text-white hover:bg-gray-700 border-b border-gray-700"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          מוצרים מיוחדים
                        </Link>
                      </div>
                    )}
                  </div>
                  
                  <Link 
                    href="/about"
                    className="mobile-menu-item block px-4 py-3 text-white hover:bg-gray-800 border-b border-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    אודות
                  </Link>
                  
                  <Link 
                    href="/faq"
                    className="mobile-menu-item block px-4 py-3 text-white hover:bg-gray-800 border-b border-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    שאלות נפוצות
                  </Link>
                  
                  <Link 
                    href="/blog"
                    className="mobile-menu-item block px-4 py-3 text-white hover:bg-gray-800 border-b border-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    בלוג
                  </Link>
                  
                  <Link 
                    href="/contact"
                    className="mobile-menu-item block px-4 py-3 text-white hover:bg-gray-800 border-b border-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    צור קשר
                  </Link>
                  
                  <Link 
                    href="/account"
                    className="mobile-menu-item block px-4 py-3 text-white hover:bg-gray-800 border-b border-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    החשבון שלי
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
        
        {/* עגלת קניות למובייל */}
        <AnimatePresence>
          {isCartOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="cart-overlay fixed inset-0 bg-black/50 z-40"
                onClick={() => setIsCartOpen(false)}
              />
              
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="cart-drawer fixed right-0 left-0 bottom-0 z-50 w-full bg-white rounded-t-xl overflow-hidden"
                style={{ maxHeight: "85vh" }}
              >
                <div className="cart-header flex items-center justify-between p-4 border-b">
                  <h3 className="font-bold text-lg">עגלת קניות</h3>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <FaTimes className="text-gray-600" />
                  </button>
                </div>
                
                <div className="cart-items overflow-y-auto" style={{ maxHeight: "60vh" }}>
                  {cartCount > 0 ? (
                    <div className="divide-y">
                      {items.map((item) => (
                        <div key={item.id} className="p-4 flex items-start gap-3">
                          <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-md overflow-hidden">
                            <img 
                              src={item.image || '/product-placeholder.jpg'} 
                              alt={item.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-grow min-w-0">
                            <h4 className="text-sm font-medium text-gray-800 truncate">{item.name}</h4>
                            <div className="flex justify-between items-center mt-2">
                              <div className="text-sm text-gray-600">₪{item.price.toFixed(2)}</div>
                              <div className="flex items-center">
                                <button 
                                  className="text-gray-500 hover:text-orange-500 p-1"
                                  onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                  aria-label="הקטן כמות"
                                >
                                  -
                                </button>
                                <span className="mx-2 text-sm text-gray-800">{item.quantity}</span>
                                <button 
                                  className="text-gray-500 hover:text-orange-500 p-1"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  aria-label="הגדל כמות"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                              <div className="text-sm font-medium text-gray-800">סה"כ: ₪{(item.price * item.quantity).toFixed(2)}</div>
                              <button 
                                className="text-red-500 hover:text-red-700 text-xs"
                                onClick={() => removeItem(item.id)}
                                aria-label="הסר מהעגלה"
                              >
                                הסר
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-8 text-center">
                      <div className="text-gray-500 mb-4">העגלה שלך ריקה</div>
                      <Link 
                        href="/products" 
                        className="inline-block bg-orange-600 text-white px-4 py-2 rounded-md text-sm hover:bg-orange-700 transition duration-300"
                        onClick={() => setIsCartOpen(false)}
                      >
                        לחזור לחנות
                      </Link>
                    </div>
                  )}
                </div>
                
                {cartCount > 0 && (
                  <div className="cart-footer p-4 bg-gray-50 border-t">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-600">סה"כ</span>
                      <span className="text-lg font-bold text-gray-800">₪{cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Link 
                        href="/cart" 
                        className="block bg-white border border-gray-300 text-gray-800 px-4 py-3 rounded-md text-center font-medium hover:bg-gray-50 transition duration-300"
                        onClick={() => setIsCartOpen(false)}
                      >
                        צפה בעגלה
                      </Link>
                      <Link 
                        href="/checkout" 
                        className="block bg-orange-600 text-white px-4 py-3 rounded-md text-center font-medium hover:bg-orange-700 transition duration-300"
                        onClick={() => setIsCartOpen(false)}
                      >
                        מעבר לתשלום
                      </Link>
                    </div>
                  </div>
                )}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      {/* נאבבר לדסקטופ */}
      <nav className="desktop-navbar bg-gray-900 text-white shadow-lg sticky top-0 z-50 hidden md:block">
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
            <div className="flex items-center space-x-6 space-x-reverse">
              <Link href="/" className="px-3 py-2 text-white hover:text-orange-400 font-medium">
                דף הבית
              </Link>
              <div className="relative px-3 py-2 group">
                <span className="text-white hover:text-orange-400 font-medium flex items-center cursor-pointer">
                  מוצרים
                  <FaChevronDown className="w-3 h-3 mr-1" />
                </span>
                <div className="absolute right-0 mt-5 w-64 bg-white rounded-md shadow-lg py-1 z-50 hidden group-hover:block text-right">
                  {/* כוסות קידוח יהלום */}
                  <div className="relative dropdown-item">
                    <Link href="/products/diamond-core-drill-bits" className="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white flex justify-between items-center">
                      כוסות קידוח יהלום
                      <FaChevronLeft className="h-3 w-3" />
                    </Link>
                    <div className="absolute right-full top-0 w-64 bg-white rounded-md shadow-lg py-1 z-50 hidden submenu text-right">
                      <Link href="/products/diamond-core-drill-bits/wet-drilling" className="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white">
                        כוסות קידוח רטובות
                      </Link>
                      <Link href="/products/diamond-core-drill-bits/dry-vacuum-drilling" className="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white">
                        כוסות קידוח יבשות/ואקום
                      </Link>
                      <Link href="/products/diamond-core-drill-bits/special" className="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white">
                        כוסות קידוח מיוחדות
                      </Link>
                    </div>
                  </div>

                  {/* מסורי יהלום */}
                  <div className="relative dropdown-item">
                    <Link href="/products/diamond-saw-blades" className="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white flex justify-between items-center">
                      מסורי יהלום
                      <FaChevronLeft className="h-3 w-3" />
                    </Link>
                    <div className="absolute right-full top-0 w-64 bg-white rounded-md shadow-lg py-1 z-50 hidden submenu text-right">
                      <Link href="/products/diamond-saw-blades/concrete-reinforced" className="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white">
                        לבטון ובטון מזוין
                      </Link>
                      <Link href="/products/diamond-saw-blades/stone-granite" className="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white">
                        לאבן, גרניט וחומרי בניין קלים
                      </Link>
                    </div>
                  </div>

                  {/* מכונות קידוח */}
                  <Link href="/products/drilling-machines" className="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white">
                    מכונות קידוח
                  </Link>

                  {/* אביזרים */}
                  <div className="relative dropdown-item">
                    <Link href="/products/accessories" className="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white flex justify-between items-center">
                      אביזרים נלווים
                      <FaChevronLeft className="h-3 w-3" />
                    </Link>
                    <div className="absolute right-full top-0 w-64 bg-white rounded-md shadow-lg py-1 z-50 hidden submenu text-right">
                      <Link href="/products/accessories/vacuum-drills" className="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white">
                        מקדחי ואקום לקידוח יבש
                      </Link>
                      <Link href="/products/accessories/thread-adapters" className="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white">
                        מתאמי הברגות
                      </Link>
                      <Link href="/products/accessories/drill-extensions" className="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white">
                        מאריכי קידוח
                      </Link>
                      <Link href="/products/accessories/drill-holders" className="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white">
                        מחזיקי כוסות קידוח/מקדחים
                      </Link>
                      <Link href="/products/accessories/water-pumps" className="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white">
                        משאבות מים ומערכות איסוף
                      </Link>
                    </div>
                  </div>

                  {/* מוצרים מיוחדים */}
                  <Link href="/products/special-products" className="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white">
                    מוצרים מיוחדים
                  </Link>
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

            {/* Desktop Icons */}
            <div className="flex items-center space-x-3 space-x-reverse">
              <button className="text-white hover:text-orange-400 p-1">
                <FaSearch className="h-5 w-5" />
              </button>
              <div className="relative">
                <button 
                  className="text-white hover:text-orange-400 p-1 relative cart-trigger"
                  onClick={() => setIsCartOpen(!isCartOpen)}
                  aria-label="עגלת קניות"
                >
                  <FaShoppingCart className="h-5 w-5" />
                  {mounted && cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </button>
                
                {/* Desktop Cart Dropdown */}
                <AnimatePresence>
                  {isCartOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 right-auto mt-2 bg-white rounded-md shadow-lg py-2 z-50 cart-dropdown text-right"
                      style={{ 
                        width: '360px',
                        maxHeight: '80vh',
                        overflowY: 'auto',
                      }}
                    >
                      <div className="px-4 py-2 border-b border-gray-200">
                        <h3 className="font-semibold text-gray-800 flex justify-between items-center">
                          עגלת קניות
                          <span className="text-orange-500 text-sm">{cartCount} פריטים</span>
                        </h3>
                      </div>
                      
                      <div className="divide-y divide-gray-200">
                        {cartCount > 0 ? (
                          <>
                            {items.map((item) => (
                              <div key={item.id} className="p-4 flex items-start gap-3">
                                <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-md overflow-hidden">
                                  <img 
                                    src={item.image || '/product-placeholder.jpg'} 
                                    alt={item.name} 
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="flex-grow min-w-0">
                                  <h4 className="text-sm font-medium text-gray-800 truncate">{item.name}</h4>
                                  <div className="flex justify-between items-center mt-2">
                                    <div className="text-sm text-gray-600">₪{item.price.toFixed(2)}</div>
                                    <div className="flex items-center">
                                      <button 
                                        className="text-gray-500 hover:text-orange-500 p-1"
                                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                        aria-label="הקטן כמות"
                                      >
                                        -
                                      </button>
                                      <span className="mx-2 text-sm text-gray-800">{item.quantity}</span>
                                      <button 
                                        className="text-gray-500 hover:text-orange-500 p-1"
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        aria-label="הגדל כמות"
                                      >
                                        +
                                      </button>
                                    </div>
                                  </div>
                                  <div className="flex justify-between items-center mt-2">
                                    <div className="text-sm font-medium text-gray-800">סה"כ: ₪{(item.price * item.quantity).toFixed(2)}</div>
                                    <button 
                                      className="text-red-500 hover:text-red-700 text-xs"
                                      onClick={() => removeItem(item.id)}
                                      aria-label="הסר מהעגלה"
                                    >
                                      הסר
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ))}

                            <div className="p-4 bg-gray-50">
                              <div className="flex justify-between items-center mb-4">
                                <span className="text-sm text-gray-600">סה"כ</span>
                                <span className="text-lg font-bold text-gray-800">₪{cartTotal.toFixed(2)}</span>
                              </div>
                              <div className="flex gap-2">
                                <Link 
                                  href="/cart" 
                                  className="block bg-white border border-gray-300 text-gray-800 px-4 py-2 rounded-md text-center text-sm hover:bg-gray-50 transition duration-300 flex-1"
                                  onClick={() => setIsCartOpen(false)}
                                >
                                  צפה בעגלה
                                </Link>
                                <Link 
                                  href="/checkout" 
                                  className="block bg-orange-600 text-white px-4 py-2 rounded-md text-center text-sm hover:bg-orange-700 transition duration-300 flex-1"
                                  onClick={() => setIsCartOpen(false)}
                                >
                                  מעבר לתשלום
                                </Link>
                              </div>
                            </div>
                          </>
                        ) : (
                          <div className="p-8 text-center">
                            <div className="text-gray-500 mb-4">העגלה שלך ריקה</div>
                            <Link 
                              href="/products" 
                              className="inline-block bg-orange-600 text-white px-4 py-2 rounded-md text-sm hover:bg-orange-700 transition duration-300"
                              onClick={() => setIsCartOpen(false)}
                            >
                              לחזור לחנות
                            </Link>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link href="/account" className="text-white hover:text-orange-400 p-1">
                <FaUser className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
} 