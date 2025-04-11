'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaFilter, FaArrowLeft, FaSearch } from 'react-icons/fa';
import { stoneGraniteSawBlades } from '@/app/lib/products/stoneGraniteSawBlades';

// המרת נתוני המוצרים מהקובץ
const stoneProducts = Object.entries(stoneGraniteSawBlades).map(([slug, product]) => {
  return {
    id: product.id,
    name: product.name,
    diameter: product.diameter,
    bore: product.bore,
    segment_height: product.segment_height,
    segment_count: product.segments.toString(),
    rpm_max: product.diameter.includes('25.4') ? '8500' : String(9000 - parseInt(product.diameter) * 10),
    price: product.price,
    discount_price: product.discount_price,
    image: product.images[0],
    slug: slug,
  };
});

export default function StoneGranite() {
  const [filters, setFilters] = useState({
    diameter: '',
    priceRange: '',
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const handleFilterChange = (filter: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filter]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      diameter: '',
      priceRange: '',
    });
  };

  // פילטור המוצרים לפי הסינון
  const filteredProducts = stoneProducts.filter(product => {
    if (filters.diameter && !product.diameter.includes(filters.diameter)) return false;
    
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      if (max && (product.price < min || product.price > max)) return false;
      if (!max && product.price < min) return false;
    }
    
    if (searchTerm && !product.name.includes(searchTerm) && !product.diameter.includes(searchTerm)) return false;
    
    return true;
  });

  // קטרים אפשריים מתוך הרשימה
  const diameters = [...new Set(stoneProducts.map(p => p.diameter.replace(' מ"מ', '')))];

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
            <li>
              <Link href="/products" className="text-gray-500 hover:text-gray-700">
                מוצרים
              </Link>
            </li>
            <li>
              <span className="text-gray-500 mx-2">/</span>
            </li>
            <li>
              <Link href="/products/diamond-saw-blades" className="text-gray-500 hover:text-gray-700">
                מסורי יהלום
              </Link>
            </li>
            <li>
              <span className="text-gray-500 mx-2">/</span>
            </li>
            <li className="text-gray-700">מסורי יהלום לאבן, גרניט וחומרי בניין קלים</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">מסורי יהלום לאבן, גרניט וחומרי בניין קלים</h1>
          <p className="text-gray-600">
            מסורי יהלום לעבודה עם חומרים שאינם בטון מזוין, המתמקדים בחיתוך מדויק וקצוות חלקים לחומרים טבעיים כמו אבן, גרניט, קרמיקה ועוד.
            איכות גבוהה ודיוק מרבי בחיתוך.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-4 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">סינון מוצרים</h2>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden text-gray-500 hover:text-gray-700"
                >
                  <FaFilter className="h-5 w-5" />
                </button>
              </div>
              
              <div className={`${!showFilters && 'hidden lg:block'} space-y-6`}>
                <div className="mb-4">
                  <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">חיפוש</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="חפש לפי שם או מידה"
                      className="border border-gray-300 rounded-md w-full p-2 pl-10"
                    />
                    <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">קוטר</h3>
                  <div className="space-y-2">
                    {diameters.map(size => (
                      <label key={size} className="flex items-center">
                        <input
                          type="radio"
                          name="diameter"
                          value={size}
                          checked={filters.diameter === size}
                          onChange={(e) => handleFilterChange('diameter', e.target.value)}
                          className="mr-2"
                        />
                        <span>{size} מ"מ</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">טווח מחירים</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="priceRange"
                        value="0-750"
                        checked={filters.priceRange === '0-750'}
                        onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                        className="mr-2"
                      />
                      <span>עד 750 ₪</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="priceRange"
                        value="750-1000"
                        checked={filters.priceRange === '750-1000'}
                        onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                        className="mr-2"
                      />
                      <span>750 - 1000 ₪</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="priceRange"
                        value="1000"
                        checked={filters.priceRange === '1000'}
                        onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                        className="mr-2"
                      />
                      <span>מעל 1000 ₪</span>
                    </label>
                  </div>
                </div>
                
                <button
                  onClick={clearFilters}
                  className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-700"
                >
                  נקה סינון
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="mb-4">
              <p className="text-gray-600">{filteredProducts.length} מוצרים נמצאו</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
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
                      <p className="text-gray-600">
                        <span className="font-semibold">סל"ד מקסימלי:</span> {product.rpm_max}
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
    </div>
  );
} 