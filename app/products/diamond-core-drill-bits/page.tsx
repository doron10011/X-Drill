'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaFilter, FaArrowLeft } from 'react-icons/fa';

// Mock data - replace with actual data from your backend
const products = [
  {
    id: 1,
    name: 'כוס קידוח יהלום לקידוח רטוב עם סגמנט Arix',
    diameter: '67 מ"מ',
    length: '450 מ"מ',
    thread: '1-1/4" UNC',
    price: 450,
    image: '/placeholder.jpg',
  },
  {
    id: 2,
    name: 'כוס קידוח יהלום לקידוח רטוב עם סגמנט Arix',
    diameter: '77 מ"מ',
    length: '450 מ"מ',
    thread: '1-1/4" UNC',
    price: 550,
    image: '/placeholder.jpg',
  },
  {
    id: 3,
    name: 'כוס קידוח יהלום לקידוח רטוב עם סגמנט Arix',
    diameter: '102 מ"מ',
    length: '450 מ"מ',
    thread: '1-1/4" UNC',
    price: 750,
    image: '/placeholder.jpg',
  },
  // Add more products as needed
];

export default function DiamondCoreDrillBits() {
  const [filters, setFilters] = useState({
    diameter: '',
    thread: '',
    priceRange: '',
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="text-gray-500 hover:text-gray-700">
                דף הבית
              </Link>
            </li>
            <li>
              <span className="text-gray-500 mx-2">/</span>
            </li>
            <li className="text-gray-700">כוסות קידוח יהלום</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">כוסות קידוח יהלום</h1>
          <p className="text-gray-600">
            כוסות קידוח מקצועיות בקטרים שונים, מתאימות לקידוח רטוב ויבש. איכות מעולה
            וביצועים מיטביים לכל סוגי העבודות.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-4 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">סינון מוצרים</h2>
            <button className="text-gray-500 hover:text-gray-700">
              <FaFilter className="h-5 w-5" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select
              className="border rounded-md p-2"
              value={filters.diameter}
              onChange={(e) => setFilters({ ...filters, diameter: e.target.value })}
            >
              <option value="">קוטר</option>
              <option value="67">67 מ"מ</option>
              <option value="77">77 מ"מ</option>
              <option value="102">102 מ"מ</option>
            </select>
            <select
              className="border rounded-md p-2"
              value={filters.thread}
              onChange={(e) => setFilters({ ...filters, thread: e.target.value })}
            >
              <option value="">סוג הברגה</option>
              <option value="1-1/4">1-1/4" UNC</option>
              <option value="1/2">1/2" BSP</option>
            </select>
            <select
              className="border rounded-md p-2"
              value={filters.priceRange}
              onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
            >
              <option value="">טווח מחירים</option>
              <option value="0-500">עד 500 ₪</option>
              <option value="500-1000">500-1000 ₪</option>
              <option value="1000+">מעל 1000 ₪</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">תמונת מוצר</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600">
                    <span className="font-semibold">קוטר:</span> {product.diameter}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">אורך:</span> {product.length}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">הברגה:</span> {product.thread}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{product.price} ₪</span>
                  <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md">
                    הוסף לעגלה
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 