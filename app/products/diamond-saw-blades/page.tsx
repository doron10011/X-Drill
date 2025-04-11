'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaFilter, FaSearch, FaCheck, FaTruck, FaShieldAlt, FaHeadset, FaChevronLeft } from 'react-icons/fa';

// קטגוריות משנה של מסורי יהלום
const subcategories = [
  {
    id: 'concrete-reinforced',
    name: 'מסורי יהלום לעבודה עם בטון ובטון מזוין',
    description: 'מסורי יהלום מקצועיים המעוצבים לחיתוך בטון, בטון מזוין ובלוקים, תוך שמירה על קווים מדויקים וחיתוך חלק.',
    sizes: ['200', '250', '300', '350', '400'],
    image: '/placeholder.jpg',
  },
  {
    id: 'stone-granite',
    name: 'מסורי יהלום לעבודה עם אבן, גרניט וחומרי בניין קלים',
    description: 'מסורי יהלום לעבודה עם חומרים שאינם בטון מזוין, המתמקדים בחיתוך מדויק וקצוות חלקים לחומרים טבעיים.',
    sizes: ['150', '200', '250', '300'],
    image: '/placeholder.jpg',
  },
];

// מוצרי בטון ובטון מזוין
const concreteProducts = [
  {
    id: 1,
    name: 'מסור יהלום לבטון מזוין',
    diameter: '200 מ"מ',
    bore: '22.23 מ"מ',
    rpm_max: '6600',
    segment_height: '10 מ"מ',
    segment_count: '14',
    price: 800,
    image: '/placeholder.jpg',
    slug: '200mm',
  },
  {
    id: 2,
    name: 'מסור יהלום לבטון מזוין',
    diameter: '250 מ"מ',
    bore: '22.23 מ"מ',
    rpm_max: '5500',
    segment_height: '10 מ"מ',
    segment_count: '18',
    price: 950,
    image: '/placeholder.jpg',
    slug: '250mm',
  },
  {
    id: 3,
    name: 'מסור יהלום לבטון מזוין',
    diameter: '300 מ"מ',
    bore: '25.4 מ"מ',
    rpm_max: '4400',
    segment_height: '10 מ"מ',
    segment_count: '20',
    price: 1100,
    image: '/placeholder.jpg',
    slug: '300mm',
  },
  {
    id: 4,
    name: 'מסור יהלום לבטון מזוין',
    diameter: '350 מ"מ',
    bore: '25.4 מ"מ',
    rpm_max: '3700',
    segment_height: '10 מ"מ',
    segment_count: '24',
    price: 1250,
    image: '/placeholder.jpg',
    slug: '350mm',
  },
  {
    id: 5,
    name: 'מסור יהלום לבטון מזוין',
    diameter: '400 מ"מ',
    bore: '25.4 מ"מ',
    rpm_max: '3200',
    segment_height: '10 מ"מ',
    segment_count: '28',
    price: 1500,
    image: '/placeholder.jpg',
    slug: '400mm',
  },
  {
    id: 6,
    name: 'מסור יהלום לקידוח בבטון ובטון מזוין',
    diameter: 'D25.4/20 מ"מ',
    bore: '20 מ"מ',
    rpm_max: '8500',
    segment_height: '8 מ"מ',
    segment_count: '7',
    price: 450,
    image: '/placeholder.jpg',
    slug: 'd25mm',
  },
];

// מוצרי אבן וגרניט
const stoneProducts = [
  {
    id: 1,
    name: 'מסור יהלום לעבודה עם אבן',
    diameter: '150 מ"מ',
    bore: '22.23 מ"מ',
    rpm_max: '8000',
    segment_height: '7 מ"מ',
    segment_count: '12',
    price: 650,
    image: '/placeholder.jpg',
    slug: '150mm',
  },
  {
    id: 2,
    name: 'מסור יהלום לעבודה עם אבן',
    diameter: '200 מ"מ',
    bore: '22.23 מ"מ',
    rpm_max: '6600',
    segment_height: '7 מ"מ',
    segment_count: '14',
    price: 800,
    image: '/placeholder.jpg',
    slug: '200mm',
  },
  {
    id: 3,
    name: 'מסור יהלום לעבודה עם אבן',
    diameter: '250 מ"מ',
    bore: '22.23 מ"מ',
    rpm_max: '5500',
    segment_height: '7 מ"מ',
    segment_count: '18',
    price: 950,
    image: '/placeholder.jpg',
    slug: '250mm',
  },
  {
    id: 4,
    name: 'מסור יהלום לעבודה עם אבן',
    diameter: '300 מ"מ',
    bore: '25.4 מ"מ',
    rpm_max: '4400',
    segment_height: '7 מ"מ',
    segment_count: '20',
    price: 1100,
    image: '/placeholder.jpg',
    slug: '300mm',
  },
];

export default function DiamondSawBlades() {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    diameter: '',
    type: '',
    application: '',
  });

  return (
    <div className="min-h-screen bg-gray-50 animate-fadeIn">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">מסורי יהלום</h1>
            <p className="text-xl text-gray-300">
              מסורים מקצועיים לחיתוך בטון, בטון מזוין, אבן וחומרים קשים
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Breadcrumb */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center">
            <li>
              <Link href="/" className="text-gray-500 hover:text-orange-600">
                דף הבית
              </Link>
            </li>
            <li>
              <span className="text-gray-500 mx-2">/</span>
            </li>
            <li>
              <Link href="/products" className="text-gray-500 hover:text-orange-600">
                מוצרים
              </Link>
            </li>
            <li>
              <span className="text-gray-500 mx-2">/</span>
            </li>
            <li className="text-gray-700 font-medium">מסורי יהלום</li>
          </ol>
        </nav>
        
        {/* Subcategories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {subcategories.map((subcategory) => (
            <div key={subcategory.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-56 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500">תמונת קטגוריה</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{subcategory.name}</h3>
                <p className="text-gray-600 mb-4">
                  {subcategory.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {subcategory.sizes.map((size) => (
                    <Link 
                      key={size} 
                      href={`/products/diamond-saw-blades/${subcategory.id}/${size}mm`}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {size} מ"מ
                    </Link>
                  ))}
                </div>
                <Link
                  href={`/products/diamond-saw-blades/${subcategory.id}`}
                  className="text-orange-600 hover:text-orange-700 font-semibold flex items-center justify-end"
                >
                  צפה בכל המוצרים
                  <FaChevronLeft className="mr-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Products */}
        <div>
          <h2 className="text-2xl font-bold mb-6">מוצרים מובילים</h2>
          
          {/* Concrete Blades */}
          <h3 className="text-xl font-semibold mb-4">מסורי יהלום לבטון ובטון מזוין</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {concreteProducts.slice(0, 3).map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden">
                <Link href={`/products/diamond-saw-blades/concrete-reinforced/${product.slug}`}>
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">תמונת מוצר</span>
                  </div>
                </Link>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    <Link href={`/products/diamond-saw-blades/concrete-reinforced/${product.slug}`} className="hover:text-orange-600">
                      {product.name} - {product.diameter}
                    </Link>
                  </h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-600">
                      <span className="font-semibold">קוטר:</span> {product.diameter}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold">קוטר פנימי:</span> {product.bore}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">{product.price} ₪</span>
                    <Link 
                      href={`/products/diamond-saw-blades/concrete-reinforced/${product.slug}`}
                      className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md"
                    >
                      פרטים נוספים
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Stone Blades */}
          <h3 className="text-xl font-semibold mb-4">מסורי יהלום לאבן וגרניט</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stoneProducts.slice(0, 3).map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden">
                <Link href={`/products/diamond-saw-blades/stone-granite/${product.slug}`}>
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">תמונת מוצר</span>
                  </div>
                </Link>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    <Link href={`/products/diamond-saw-blades/stone-granite/${product.slug}`} className="hover:text-orange-600">
                      {product.name} - {product.diameter}
                    </Link>
                  </h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-600">
                      <span className="font-semibold">קוטר:</span> {product.diameter}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold">קוטר פנימי:</span> {product.bore}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">{product.price} ₪</span>
                    <Link 
                      href={`/products/diamond-saw-blades/stone-granite/${product.slug}`}
                      className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md"
                    >
                      פרטים נוספים
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 