'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaChevronLeft } from 'react-icons/fa';
import { categories } from '../data/categories';

export default function Products() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">מוצרים</h1>
            <p className="text-xl text-gray-300">
              כלי קידוח יהלום מקצועיים לקבלנים ואנשי מקצוע
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
            <li className="text-gray-700">מוצרים</li>
          </ol>
        </nav>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">קטגוריות מוצרים</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div key={category.id} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="h-56 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500">תמונת קטגוריה</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  <div className="mb-4">
                    <p className="font-medium mb-2">תת-קטגוריות:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {category.subcategories.map((subcat) => (
                        <li key={subcat.id}>
                          <Link 
                            href={`/products/${category.slug}/${subcat.slug}`}
                            className="text-orange-600 hover:text-orange-700 hover:underline"
                          >
                            {subcat.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={`/products/${category.slug}`}
                    className="text-orange-600 hover:text-orange-700 font-semibold flex items-center justify-end"
                  >
                    צפה בכל המוצרים
                    <FaChevronLeft className="mr-1 text-sm" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured products section can be added here */}
      </div>
    </div>
  );
} 