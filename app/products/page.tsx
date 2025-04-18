'use client';

import Link from 'next/link';
import { FaChevronLeft } from 'react-icons/fa';
import { productCategories, getFeaturedProducts } from '@/app/data/products';
import Image from 'next/image';

export default function Products() {
  const featuredProducts = getFeaturedProducts();

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
        <nav className="flex mb-8 rtl" aria-label="Breadcrumb">
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
            {productCategories.map((category) => (
              <Link 
                href={`/products/${category.slug}`}
                key={category.id}
                className="block group bg-white rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="h-56 bg-gray-200 relative overflow-hidden">
                  {category.image ? (
                    <>
                      <div className="absolute inset-0 bg-black opacity-30 z-10 transition-opacity duration-300 group-hover:opacity-0"></div>
                      <div className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-110">
                        <Image 
                          src={category.image}
                          alt={category.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute top-0 right-0 bg-orange-600 text-white px-3 py-1 font-semibold text-sm rounded-bl-lg z-20">
                        {category.name}
                      </div>
                    </>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-500">תמונת קטגוריה</span>
                    </div>
                  )}
                </div>
                <div className="p-6 rtl relative">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-600 transition-colors">{category.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-end text-orange-600 font-semibold group-hover:text-orange-700">
                    <span className="relative inline-flex items-center">
                      צפה בכל המוצרים
                      <FaChevronLeft className="mr-2 transition-transform duration-300 group-hover:translate-x-[-4px]" />
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-orange-600 transition-all duration-300 group-hover:w-full"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        {featuredProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">מוצרים מובילים</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {featuredProducts.map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
                  <Link href={`/products/${product.slug}`} className="block overflow-hidden">
                    <div className="h-36 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                      {product.images && product.images.length > 0 ? (
                        <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
                          <Image 
                            src={product.images[0]} 
                            alt={product.name}
                            width={180}
                            height={120}
                            className="object-contain w-full h-full"
                          />
                        </div>
                      ) : (
                        <span className="text-gray-500 text-sm">תמונת מוצר</span>
                      )}
                      {product.discountPrice && (
                        <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                          מבצע!
                        </div>
                      )}
                    </div>
                  </Link>
                  <div className="p-3 rtl border-t border-gray-100">
                    <h3 className="text-sm font-medium mb-2 h-10 line-clamp-2 group-hover:text-orange-600 transition-colors">
                      <Link href={`/products/${product.slug}`} className="hover:text-orange-600 transition-colors">
                        {product.name}
                      </Link>
                    </h3>
                    <div className="flex items-center justify-between">
                      {product.discountPrice ? (
                        <div className="flex flex-col items-start">
                          <span className="text-xs text-gray-500 line-through">{product.price} ₪</span>
                          <span className="text-sm font-bold text-orange-600">{product.discountPrice} ₪</span>
                        </div>
                      ) : (
                        <span className="text-sm font-bold">{product.price} ₪</span>
                      )}
                      <Link
                        href={`/products/${product.slug}`}
                        className="text-xs bg-orange-100 text-orange-600 hover:bg-orange-200 font-medium px-2 py-1 rounded transition-colors"
                      >
                        פרטים
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 