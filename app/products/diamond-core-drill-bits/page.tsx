'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaFilter, FaChevronLeft, FaCheckCircle, FaSort, FaSearch, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// קטגוריות משנה לכוסות קידוח יהלום
const subcategories = [
  {
    id: 'wet-drilling',
    name: 'כוסות קידוח יהלום לקידוח רטוב',
    description: 'כוסות קידוח המיועדות לעבודה עם מים, מספקות קירור בזמן הקידוח, אריכות חיים גבוהה וביצועים מיטביים.',
    sizes: ['67', '72', '77', '82', '91', '102', '132', '162', '200'],
    image: '/placeholder.jpg',
  },
  {
    id: 'dry-vacuum-drilling',
    name: 'כוסות קידוח יהלום לקידוח יבש/באקום',
    description: 'כוסות קידוח המתוכננות לעבודה יבשה או תחת מערכת ואקום, ללא שימוש במים. מצוידות בטכנולוגיות מתקדמות למניעת התחממות.',
    sizes: ['80', '85', '90', '95', '100', '105'],
    image: '/placeholder.jpg',
  },
];

// מוצרים לכל קטגוריה
const wetDrillingProducts = [
  {
    id: 1,
    name: 'כוס קידוח יהלום לקידוח רטוב עם סגמנט Arix',
    diameter: '67 מ"מ',
    length: '450 מ"מ',
    thread: '1-1/4" UNC',
    segment_height: '8 מ"מ',
    segment_count: '5',
    price: 450,
    image: '/placeholder.jpg',
    slug: '67mm',
  },
  {
    id: 2,
    name: 'כוס קידוח יהלום לקידוח רטוב עם סגמנט Arix',
    diameter: '72 מ"מ',
    length: '450 מ"מ',
    thread: '1-1/4" UNC',
    segment_height: '8 מ"מ',
    segment_count: '5',
    price: 500,
    image: '/placeholder.jpg',
    slug: '72mm',
  },
  {
    id: 3,
    name: 'כוס קידוח יהלום לקידוח רטוב עם סגמנט Arix',
    diameter: '77 מ"מ',
    length: '450 מ"מ',
    thread: '1-1/4" UNC',
    segment_height: '8 מ"מ',
    segment_count: '6',
    price: 550,
    image: '/placeholder.jpg',
    slug: '77mm',
  },
  {
    id: 4,
    name: 'כוס קידוח יהלום לקידוח רטוב עם סגמנט Arix',
    diameter: '82 מ"מ',
    length: '450 מ"מ',
    thread: '1-1/4" UNC',
    segment_height: '8 מ"מ',
    segment_count: '6',
    price: 600,
    image: '/placeholder.jpg',
    slug: '82mm',
  },
  {
    id: 5,
    name: 'כוס קידוח יהלום לקידוח רטוב עם סגמנט Arix',
    diameter: '91 מ"מ',
    length: '450 מ"מ',
    thread: '1-1/4" UNC',
    segment_height: '8 מ"מ',
    segment_count: '7',
    price: 650,
    image: '/placeholder.jpg',
    slug: '91mm',
  },
  {
    id: 6,
    name: 'כוס קידוח יהלום לקידוח רטוב עם סגמנט Arix',
    diameter: '102 מ"מ',
    length: '450 מ"מ',
    thread: '1-1/4" UNC',
    segment_height: '8 מ"מ',
    segment_count: '7',
    price: 750,
    image: '/placeholder.jpg',
    slug: '102mm',
  },
  {
    id: 7,
    name: 'כוס קידוח יהלום לקידוח רטוב עם סגמנט Arix',
    diameter: '132 מ"מ',
    length: '450 מ"מ',
    thread: '1-1/4" UNC',
    segment_height: '8 מ"מ',
    segment_count: '8',
    price: 950,
    image: '/placeholder.jpg',
    slug: '132mm',
  },
  {
    id: 8,
    name: 'כוס קידוח יהלום לקידוח רטוב עם סגמנט Arix',
    diameter: '162 מ"מ',
    length: '450 מ"מ',
    thread: '1-1/4" UNC',
    segment_height: '8 מ"מ',
    segment_count: '9',
    price: 1200,
    image: '/placeholder.jpg',
    slug: '162mm',
  },
  {
    id: 9,
    name: 'כוס קידוח יהלום לקידוח רטוב עם סגמנט Arix',
    diameter: '200 מ"מ',
    length: '450 מ"מ',
    thread: '1-1/4" UNC',
    segment_height: '8 מ"מ',
    segment_count: '10',
    price: 1500,
    image: '/placeholder.jpg',
    slug: '200mm',
  },
];

const dryVacuumProducts = [
  {
    id: 1,
    name: 'כוס קידוח יהלום ליבש/ואקום',
    diameter: '80 מ"מ',
    length: '400 מ"מ',
    thread: '1-1/4" UNC',
    segment_height: '8 מ"מ',
    segment_count: '6',
    price: 500,
    image: '/placeholder.jpg',
    slug: '80mm',
  },
  {
    id: 2,
    name: 'כוס קידוח יהלום ליבש/ואקום',
    diameter: '85 מ"מ',
    length: '400 מ"מ',
    thread: '1-1/4" UNC',
    segment_height: '8 מ"מ',
    segment_count: '6',
    price: 550,
    image: '/placeholder.jpg',
    slug: '85mm',
  },
  {
    id: 3,
    name: 'כוס קידוח יהלום ליבש/ואקום',
    diameter: '90 מ"מ',
    length: '400 מ"מ',
    thread: '1-1/4" UNC',
    segment_height: '8 מ"מ',
    segment_count: '6',
    price: 600,
    image: '/placeholder.jpg',
    slug: '90mm',
  },
  {
    id: 4,
    name: 'כוס קידוח יהלום ליבש/ואקום',
    diameter: '95 מ"מ',
    length: '400 מ"מ',
    thread: '1-1/4" UNC',
    segment_height: '8 מ"מ',
    segment_count: '6',
    price: 650,
    image: '/placeholder.jpg',
    slug: '95mm',
  },
  {
    id: 5,
    name: 'כוס קידוח יהלום ליבש/ואקום',
    diameter: '100 מ"מ',
    length: '400 מ"מ',
    thread: '1-1/4" UNC',
    segment_height: '8 מ"מ',
    segment_count: '7',
    price: 700,
    image: '/placeholder.jpg',
    slug: '100mm',
  },
  {
    id: 6,
    name: 'כוס קידוח יהלום ליבש/ואקום',
    diameter: '105 מ"מ',
    length: '400 מ"מ',
    thread: '1-1/4" UNC',
    segment_height: '8 מ"מ',
    segment_count: '7',
    price: 750,
    image: '/placeholder.jpg',
    slug: '105mm',
  },
];

export default function DiamondCoreDrillBits() {
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedThreads, setSelectedThreads] = useState([]);
  const [sortOption, setSortOption] = useState('relevance');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 2000]);

  // Get all unique thread types from both product categories
  const allThreads = [...new Set([
    ...wetDrillingProducts.map(p => p.thread),
    ...dryVacuumProducts.map(p => p.thread)
  ])];

  // Initialize and apply filters
  useEffect(() => {
    // Simulate loading
    setIsLoading(true);
    
    setTimeout(() => {
      let products = [];
      
      // If no subcategory is selected, show all products
      if (!selectedSubcategory) {
        products = [...wetDrillingProducts, ...dryVacuumProducts];
      } else {
        // Show products from the selected subcategory
        products = selectedSubcategory === 'wet-drilling' 
          ? wetDrillingProducts 
          : dryVacuumProducts;
      }
      
      // Apply search filter
      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        products = products.filter(product => 
          product.name.toLowerCase().includes(term) || 
          (typeof product.diameter === 'string' && product.diameter.toLowerCase().includes(term))
        );
      }
      
      // Apply size filter
      if (Array.isArray(selectedSizes) && selectedSizes.length > 0) {
        products = products.filter(product => {
          const diameter = typeof product.diameter === 'string' ? product.diameter.split(' ')[0] : '';
          return Array.isArray(selectedSizes) && selectedSizes.includes(diameter);
        });
      }
      
      // Apply thread filter
      if (Array.isArray(selectedThreads) && selectedThreads.length > 0) {
        products = products.filter(product => 
          typeof product.thread === 'string' && 
          Array.isArray(selectedThreads) && 
          selectedThreads.includes(product.thread)
        );
      }
      
      // Apply price range filter
      products = products.filter(product => 
        product.price >= priceRange[0] && product.price <= priceRange[1]
      );
      
      // Apply sorting
      switch (sortOption) {
        case 'price-asc':
          products.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          products.sort((a, b) => b.price - a.price);
          break;
        case 'name-asc':
          products.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'name-desc':
          products.sort((a, b) => b.name.localeCompare(a.name));
          break;
        // 'relevance' is the default, no sorting needed
      }
      
      setFilteredProducts(products);
      setIsLoading(false);
    }, 500);
  }, [selectedSubcategory, searchTerm, selectedSizes, selectedThreads, sortOption, priceRange]);

  const toggleSize = (size) => {
    setSelectedSizes(prevSizes => 
      Array.isArray(prevSizes) && prevSizes.includes(size)
        ? prevSizes.filter(s => s !== size)
        : [...(Array.isArray(prevSizes) ? prevSizes : []), size]
    );
  };

  const toggleThread = (thread) => {
    setSelectedThreads(prevThreads => 
      Array.isArray(prevThreads) && prevThreads.includes(thread)
        ? prevThreads.filter(t => t !== thread)
        : [...(Array.isArray(prevThreads) ? prevThreads : []), thread]
    );
  };

  const handlePriceRangeChange = (index, value) => {
    const newRange = [...priceRange];
    newRange[index] = parseInt(value);
    setPriceRange(newRange);
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedSizes([]);
    setSelectedThreads([]);
    setSortOption('relevance');
    setPriceRange([0, 2000]);
    setSelectedSubcategory(null);
  };

  const hasActiveFilters = () => {
    return searchTerm !== '' || 
           (Array.isArray(selectedSizes) && selectedSizes.length > 0) || 
           (Array.isArray(selectedThreads) && selectedThreads.length > 0) || 
           sortOption !== 'relevance' ||
           priceRange[0] > 0 || 
           priceRange[1] < 2000 ||
           selectedSubcategory !== null;
  };

  return (
    <div className="min-h-screen bg-gray-50 rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-4 space-x-reverse">
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
            <li className="text-gray-700">כוסות קידוח יהלום</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold mb-2">כוסות קידוח יהלום</h1>
        <p className="text-gray-600 mb-8">
          מבחר כוסות קידוח יהלום לקידוח רטוב ויבש, לכל סוגי העבודות והחומרים
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters - Mobile Toggle */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="w-full flex items-center justify-center bg-orange-600 hover:bg-orange-700 text-white px-4 py-3 rounded-md"
            >
              <FaFilter className="ml-2" />
              {isFilterOpen ? 'סגור מסננים' : 'פתח מסננים'}
            </button>
          </div>

          {/* Filters - Sidebar */}
          <AnimatePresence>
            {(isFilterOpen || !isFilterOpen ) && (
              <motion.div
                className={`lg:block w-full lg:w-64 flex-shrink-0 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <div className="bg-white rounded-lg shadow p-4 mb-4 sticky top-24">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">סינון מוצרים</h2>
                    {hasActiveFilters() && (
                      <button
                        onClick={clearAllFilters}
                        className="text-sm text-orange-600 hover:text-orange-800"
                      >
                        נקה הכל
                      </button>
                    )}
                  </div>

                  {/* Search */}
                  <div className="mb-6">
                    <div className="relative">
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="חפש מוצר..."
                        className="w-full p-2 border border-gray-300 rounded-md pl-10"
                      />
                      <FaSearch className="absolute right-3 top-3 text-gray-400" />
                      {searchTerm && (
                        <button
                          onClick={() => setSearchTerm('')}
                          className="absolute left-3 top-3 text-gray-400 hover:text-gray-600"
                        >
                          <FaTimes />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2 border-b pb-2">סוג קידוח</h3>
                    <div className="space-y-2 mt-2">
                      <div className="flex items-center">
                        <button
                          onClick={() => setSelectedSubcategory(selectedSubcategory === 'wet-drilling' ? null : 'wet-drilling')}
                          className={`flex items-center p-2 w-full rounded-md ${selectedSubcategory === 'wet-drilling' ? 'bg-orange-100 text-orange-800' : 'hover:bg-gray-100'}`}
                        >
                          {selectedSubcategory === 'wet-drilling' && <FaCheckCircle className="ml-2 text-orange-600" />}
                          <span>קידוח רטוב</span>
                        </button>
                      </div>
                      <div className="flex items-center">
                        <button
                          onClick={() => setSelectedSubcategory(selectedSubcategory === 'dry-vacuum-drilling' ? null : 'dry-vacuum-drilling')}
                          className={`flex items-center p-2 w-full rounded-md ${selectedSubcategory === 'dry-vacuum-drilling' ? 'bg-orange-100 text-orange-800' : 'hover:bg-gray-100'}`}
                        >
                          {selectedSubcategory === 'dry-vacuum-drilling' && <FaCheckCircle className="ml-2 text-orange-600" />}
                          <span>קידוח יבש/ואקום</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Size Filter */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2 border-b pb-2">קוטר</h3>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      {subcategories.flatMap(cat => cat.sizes).filter((size, index, self) => self.indexOf(size) === index).map(size => (
                        <button
                          key={size}
                          onClick={() => toggleSize(size)}
                          className={`px-2 py-1 text-sm rounded-md ${Array.isArray(selectedSizes) && selectedSizes.includes(size) ? 'bg-orange-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                        >
                          {size} מ"מ
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Thread Type */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2 border-b pb-2">סוג חיבור</h3>
                    <div className="space-y-2 mt-2">
                      {allThreads.map(thread => (
                        <div key={thread} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`thread-${thread}`}
                            checked={Array.isArray(selectedThreads) && selectedThreads.includes(thread)}
                            onChange={() => toggleThread(thread)}
                            className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                          />
                          <label htmlFor={`thread-${thread}`} className="mr-2 text-sm cursor-pointer">
                            {thread}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2 border-b pb-2">טווח מחירים</h3>
                    <div className="mt-2">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">{priceRange[0]} ₪</span>
                        <span className="text-sm">{priceRange[1]} ₪</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="min-price" className="text-sm text-gray-600">מינימום</label>
                          <input
                            type="number"
                            id="min-price"
                            min="0"
                            max={priceRange[1]}
                            value={priceRange[0]}
                            onChange={(e) => handlePriceRangeChange(0, e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md"
                          />
                        </div>
                        <div>
                          <label htmlFor="max-price" className="text-sm text-gray-600">מקסימום</label>
                          <input
                            type="number"
                            id="max-price"
                            min={priceRange[0]}
                            max="2000"
                            value={priceRange[1]}
                            onChange={(e) => handlePriceRangeChange(1, e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Apply Filters Button (Mobile) */}
                  <div className="lg:hidden">
                    <button
                      onClick={() => setIsFilterOpen(false)}
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-md"
                    >
                      החל סינון
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Products */}
          <div className="flex-1">
            {/* Sort and Results Info */}
            <div className="bg-white rounded-lg shadow p-4 mb-6 flex flex-col sm:flex-row justify-between items-center">
              <p className="text-gray-600 mb-3 sm:mb-0">
                {isLoading ? 'טוען מוצרים...' : `מציג ${filteredProducts.length} מוצרים`}
              </p>
              <div className="flex items-center">
                <label htmlFor="sort" className="text-gray-600 ml-2">מיין לפי:</label>
                <div className="relative">
                  <select
                    id="sort"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="border border-gray-300 rounded-md p-2 pr-8 appearance-none"
                  >
                    <option value="relevance">רלוונטיות</option>
                    <option value="price-asc">מחיר: מהנמוך לגבוה</option>
                    <option value="price-desc">מחיר: מהגבוה לנמוך</option>
                    <option value="name-asc">שם: א-ת</option>
                    <option value="name-desc">שם: ת-א</option>
                  </select>
                  <FaSort className="absolute left-2 top-3 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Active Filters */}
            {hasActiveFilters() && (
              <div className="bg-white rounded-lg shadow p-4 mb-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-gray-700 ml-2">מסננים פעילים:</span>
                  
                  {selectedSubcategory && (
                    <div className="bg-gray-100 px-3 py-1 rounded-full flex items-center text-sm">
                      <span>{selectedSubcategory === 'wet-drilling' ? 'קידוח רטוב' : 'קידוח יבש/ואקום'}</span>
                      <button 
                        onClick={() => setSelectedSubcategory(null)}
                        className="mr-1 text-gray-500 hover:text-red-500"
                      >
                        <FaTimes size={12} />
                      </button>
                    </div>
                  )}
                  
                  {searchTerm && (
                    <div className="bg-gray-100 px-3 py-1 rounded-full flex items-center text-sm">
                      <span>חיפוש: {searchTerm}</span>
                      <button 
                        onClick={() => setSearchTerm('')}
                        className="mr-1 text-gray-500 hover:text-red-500"
                      >
                        <FaTimes size={12} />
                      </button>
                    </div>
                  )}
                  
                  {Array.isArray(selectedSizes) && selectedSizes.map(size => (
                    <div key={size} className="bg-gray-100 px-3 py-1 rounded-full flex items-center text-sm">
                      <span>קוטר: {size} מ"מ</span>
                      <button 
                        onClick={() => toggleSize(size)}
                        className="mr-1 text-gray-500 hover:text-red-500"
                      >
                        <FaTimes size={12} />
                      </button>
                    </div>
                  ))}
                  
                  {Array.isArray(selectedThreads) && selectedThreads.map(thread => (
                    <div key={thread} className="bg-gray-100 px-3 py-1 rounded-full flex items-center text-sm">
                      <span>חיבור: {thread}</span>
                      <button 
                        onClick={() => toggleThread(thread)}
                        className="mr-1 text-gray-500 hover:text-red-500"
                      >
                        <FaTimes size={12} />
                      </button>
                    </div>
                  ))}
                  
                  {(priceRange[0] > 0 || priceRange[1] < 2000) && (
                    <div className="bg-gray-100 px-3 py-1 rounded-full flex items-center text-sm">
                      <span>מחיר: {priceRange[0]} ₪ - {priceRange[1]} ₪</span>
                      <button 
                        onClick={() => setPriceRange([0, 2000])}
                        className="mr-1 text-gray-500 hover:text-red-500"
                      >
                        <FaTimes size={12} />
                      </button>
                    </div>
                  )}
                  
                  <button
                    onClick={clearAllFilters}
                    className="text-orange-600 hover:text-orange-800 text-sm"
                  >
                    נקה הכל
                  </button>
                </div>
              </div>
            )}

            {/* Product Grid */}
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-white rounded-lg shadow overflow-hidden animate-pulse">
                    <div className="h-48 bg-gray-300"></div>
                    <div className="p-4">
                      <div className="h-4 bg-gray-300 rounded w-3/4 mb-3"></div>
                      <div className="h-4 bg-gray-300 rounded w-1/2 mb-6"></div>
                      <div className="h-6 bg-gray-300 rounded w-1/4"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="bg-white rounded-lg shadow p-8 text-center">
                <p className="text-gray-600 mb-4">לא נמצאו מוצרים התואמים את הסינון שבחרת</p>
                <button
                  onClick={clearAllFilters}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md"
                >
                  נקה את כל המסננים
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={`${product.id}-${typeof product.diameter === 'string' ? product.diameter : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <Link href={selectedSubcategory 
                      ? `/products/diamond-core-drill-bits/${selectedSubcategory}/${product.slug}`
                      : `/products/diamond-core-drill-bits/${product.id <= wetDrillingProducts.length ? 'wet-drilling' : 'dry-vacuum-drilling'}/${product.slug}`
                    }>
                      <div className="h-48 bg-gray-200 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-4xl text-gray-400">
                            <FaCheckCircle />
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-1 truncate">{product.name}</h3>
                        <p className="text-gray-600 mb-3">קוטר: {typeof product.diameter === 'string' ? product.diameter : ''}, חיבור: {typeof product.thread === 'string' ? product.thread : ''}</p>
                        <p className="text-orange-600 font-bold text-xl">{product.price} ₪</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Category Boxes at the bottom */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">קטגוריות כוסות קידוח יהלום</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {subcategories.map((category) => (
                  <div key={category.id} className="bg-white rounded-lg shadow overflow-hidden">
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3">{category.name}</h3>
                      <p className="text-gray-600 mb-4">{category.description}</p>
                      <p className="text-gray-700 mb-4">
                        <span className="font-medium">קטרים זמינים: </span>
                        {category.sizes.map((size, index) => (
                          <span key={size}>
                            {size} מ"מ{index < category.sizes.length - 1 ? ', ' : ''}
                          </span>
                        ))}
                      </p>
                      <Link
                        href={`/products/diamond-core-drill-bits/${category.id}`}
                        className="text-orange-600 hover:text-orange-700 font-semibold flex items-center justify-end"
                      >
                        צפה בכל המוצרים
                        <FaChevronLeft className="mr-2" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 