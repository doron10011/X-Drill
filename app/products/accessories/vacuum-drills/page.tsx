'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaFilter, FaArrowLeft, FaSearch } from 'react-icons/fa';

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

export default function VacuumDrills() {
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
  const filteredProducts = vacuumDrills.filter(product => {
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
  const diameters = [...new Set(vacuumDrills.map(p => p.diameter.replace(' מ"מ', '')))];

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
              <Link href="/products/accessories" className="text-gray-500 hover:text-gray-700">
                אביזרים ומקדחים נלווים
              </Link>
            </li>
            <li>
              <span className="text-gray-500 mx-2">/</span>
            </li>
            <li className="text-gray-700">מקדחי ואקום לקידוח יבש</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">מקדחי ואקום לקידוח יבש</h1>
          <p className="text-gray-600">
            מקדחים המיועדים לשימוש במצבי קידוח יבשים או במערכות ואקום. מצוידים בטכנולוגיות מתקדמות להפחתת חום ושיפור ביצועים,
            מאפשרים קידוח איכותי בקרמיקה, אריחים, אבן וחומרים דומים.
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
                        value="0-350"
                        checked={filters.priceRange === '0-350'}
                        onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                        className="mr-2"
                      />
                      <span>עד 350 ₪</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="priceRange"
                        value="350-450"
                        checked={filters.priceRange === '350-450'}
                        onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                        className="mr-2"
                      />
                      <span>350 - 450 ₪</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="priceRange"
                        value="450"
                        checked={filters.priceRange === '450'}
                        onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                        className="mr-2"
                      />
                      <span>מעל 450 ₪</span>
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
                      <p className="text-gray-600">
                        <span className="font-semibold">סל"ד מקסימלי:</span> {product.rpm_max}
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
          </div>
        </div>
      </div>
    </div>
  );
} 