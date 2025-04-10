'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaSearch } from '@react-icons/all-files/fa/FaSearch';
import { FaShoppingCart } from '@react-icons/all-files/fa/FaShoppingCart';
import { FaUser } from '@react-icons/all-files/fa/FaUser';
import { FaBars } from '@react-icons/all-files/fa/FaBars';
import { FaTimes } from '@react-icons/all-files/fa/FaTimes';
import { FaPhone } from '@react-icons/all-files/fa/FaPhone';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  
  // You will implement cart functionality later

  return (
    <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-orange-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
          <div className="flex items-center text-sm">
            <FaPhone className="ml-1" />
            <span className="ml-4">התקשרו עכשיו: 03-1234567</span>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              <span className="text-orange-500">X</span>-Drill
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 mr-4 text-right">
            <Link href="/" className="px-3 py-2 text-white hover:text-orange-400 font-medium">
              דף הבית
            </Link>
            <div className="relative group">
              <button className="px-3 py-2 text-white hover:text-orange-400 font-medium flex items-center">
                מוצרים
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 hidden group-hover:block text-right">
                <Link href="/products/diamond-core-drill-bits" className="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white">
                  כוסות קידוח יהלום
                </Link>
                <Link href="/products/diamond-saw-blades" className="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white">
                  מסורי יהלום
                </Link>
                <Link href="/products/accessories" className="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white">
                  אביזרים נלווים
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

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white hover:text-orange-400 p-1">
              <FaSearch className="h-5 w-5" />
            </button>
            <Link href="/cart" className="text-white hover:text-orange-400 p-1 relative">
              <FaShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
            <Link href="/account" className="text-white hover:text-orange-400 p-1">
              <FaUser className="h-5 w-5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
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
            <Link
              href="/products/diamond-core-drill-bits"
              className="block px-3 py-2 text-white hover:text-orange-400 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              כוסות קידוח יהלום
            </Link>
            <Link
              href="/products/diamond-saw-blades"
              className="block px-3 py-2 text-white hover:text-orange-400 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              מסורי יהלום
            </Link>
            <Link
              href="/products/accessories"
              className="block px-3 py-2 text-white hover:text-orange-400 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              אביזרים נלווים
            </Link>
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
              <Link href="/cart" className="text-white hover:text-orange-400">
                <FaShoppingCart className="h-5 w-5" />
              </Link>
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