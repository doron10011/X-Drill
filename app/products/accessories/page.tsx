'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaFilter, FaSearch, FaCheck, FaTruck, FaShieldAlt, FaHeadset, FaChevronLeft } from 'react-icons/fa';

// קטגוריות משנה של אביזרים ומקדחים נלווים
const subcategories = [
  {
    id: 'vacuum-drills',
    name: 'מקדחי ואקום לקידוח יבש',
    description: 'מקדחים המיועדים לשימוש במצבי קידוח יבשים או במערכות ואקום. כוללים טכנולוגיות מתקדמות להפחתת חום ושיפור ביצועים.',
    sizes: ['80', '85', '90', '95', '100', '105'],
    image: '/placeholder.jpg',
  },
  {
    id: 'adapters-tools',
    name: 'מתאמי הברגות וכלי עזר נלווים',
    description: 'אביזרים הנועדו להקל על חיבור ותחזוקת כוסות הקידוח והמסורים, כולל מתאמים, מאריכים ומחזיקי כוסות.',
    image: '/placeholder.jpg',
  },
];

// מוצרי מקדחי ואקום
const vacuumDrills = [
  {
    id: 1,
    name: 'מקדח ואקום לקידוח יבש',
    diameter: '80 מ"מ',
    length: '400 מ"מ',
    material: 'קרמיקה, אריחים, אבן',
    rpm_max: '13000',
    price: 320,
    image: '/placeholder.jpg',
    slug: '80mm',
  },
  {
    id: 2,
    name: 'מקדח ואקום לקידוח יבש',
    diameter: '85 מ"מ',
    length: '400 מ"מ',
    material: 'קרמיקה, אריחים, אבן',
    rpm_max: '13000',
    price: 350,
    image: '/placeholder.jpg',
    slug: '85mm',
  },
  {
    id: 3,
    name: 'מקדח ואקום לקידוח יבש',
    diameter: '90 מ"מ',
    length: '400 מ"מ',
    material: 'קרמיקה, אריחים, אבן',
    rpm_max: '13000',
    price: 380,
    image: '/placeholder.jpg',
    slug: '90mm',
  },
  {
    id: 4,
    name: 'מקדח ואקום לקידוח יבש',
    diameter: '95 מ"מ',
    length: '400 מ"מ',
    material: 'קרמיקה, אריחים, אבן',
    rpm_max: '12000',
    price: 400,
    image: '/placeholder.jpg',
    slug: '95mm',
  },
  {
    id: 5,
    name: 'מקדח ואקום לקידוח יבש',
    diameter: '100 מ"מ',
    length: '400 מ"מ',
    material: 'קרמיקה, אריחים, אבן',
    rpm_max: '12000',
    price: 430,
    image: '/placeholder.jpg',
    slug: '100mm',
  },
  {
    id: 6,
    name: 'מקדח ואקום לקידוח יבש',
    diameter: '105 מ"מ',
    length: '400 מ"מ',
    material: 'קרמיקה, אריחים, אבן',
    rpm_max: '12000',
    price: 450,
    image: '/placeholder.jpg',
    slug: '105mm',
  },
];

// מוצרי מתאמים וכלי עזר
const adaptersTools = [
  {
    id: 1,
    name: 'מתאם הברגה',
    thread: '1/2" UNC ל-1/2" BSP',
    material: 'פלדה מחוזקת',
    price: 120,
    image: '/placeholder.jpg',
    slug: 'thread-adapter-unc-bsp',
  },
  {
    id: 2,
    name: 'מאריך קידוח',
    length: '300 מ"מ',
    thread: '1-1/4" UNC',
    material: 'פלדה מחוזקת',
    price: 250,
    image: '/placeholder.jpg',
    slug: 'drill-extension-300mm',
  },
  {
    id: 3,
    name: 'מחזיק כוסות קידוח',
    compatibility: 'כוסות 60-120 מ"מ',
    material: 'פלדה מחוסמת',
    price: 280,
    image: '/placeholder.jpg',
    slug: 'core-bit-holder',
  },
];

export default function Accessories() {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    category: '',
    compatibility: '',
  });

  return (
    <div className="min-h-screen bg-gray-50 animate-fadeIn">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">אביזרים ומקדחים נלווים</h1>
            <p className="text-xl text-gray-300">
              אביזרים משלימים לכלי הקידוח: מקדחי ואקום, מתאמים ואביזרי עזר
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
            <li className="text-gray-700 font-medium">אביזרים ומקדחים נלווים</li>
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
                {subcategory.sizes && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {subcategory.sizes.map((size) => (
                      <Link 
                        key={size} 
                        href={`/products/accessories/${subcategory.id}/${size}mm`}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {size} מ"מ
                      </Link>
                    ))}
                  </div>
                )}
                <Link
                  href={`/products/accessories/${subcategory.id}`}
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
          
          {/* Vacuum Drills */}
          <h3 className="text-xl font-semibold mb-4">מקדחי ואקום לקידוח יבש</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {vacuumDrills.slice(0, 3).map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden">
                <Link href={`/products/accessories/vacuum-drills/${product.slug}`}>
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">תמונת מוצר</span>
                  </div>
                </Link>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    <Link href={`/products/accessories/vacuum-drills/${product.slug}`} className="hover:text-orange-600">
                      {product.name} - {product.diameter}
                    </Link>
                  </h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-600">
                      <span className="font-semibold">קוטר:</span> {product.diameter}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold">חומר לקידוח:</span> {product.material}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">{product.price} ₪</span>
                    <Link 
                      href={`/products/accessories/vacuum-drills/${product.slug}`}
                      className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md"
                    >
                      פרטים נוספים
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Adapters and Tools */}
          <h3 className="text-xl font-semibold mb-4">מתאמי הברגות וכלי עזר</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adaptersTools.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden">
                <Link href={`/products/accessories/adapters-tools/${product.slug}`}>
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">תמונת מוצר</span>
                  </div>
                </Link>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    <Link href={`/products/accessories/adapters-tools/${product.slug}`} className="hover:text-orange-600">
                      {product.name}
                    </Link>
                  </h3>
                  <div className="space-y-2 mb-4">
                    {product.thread && (
                      <p className="text-gray-600">
                        <span className="font-semibold">הברגה:</span> {product.thread}
                      </p>
                    )}
                    {product.length && (
                      <p className="text-gray-600">
                        <span className="font-semibold">אורך:</span> {product.length}
                      </p>
                    )}
                    {product.compatibility && (
                      <p className="text-gray-600">
                        <span className="font-semibold">תאימות:</span> {product.compatibility}
                      </p>
                    )}
                    <p className="text-gray-600">
                      <span className="font-semibold">חומר:</span> {product.material}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">{product.price} ₪</span>
                    <Link 
                      href={`/products/accessories/adapters-tools/${product.slug}`}
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