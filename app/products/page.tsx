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
              <div key={category.id} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="h-56 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {category.image ? (
                      <Image 
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <span className="text-gray-500">תמונת קטגוריה</span>
                    )}
                  </div>
                </div>
                <div className="p-6 rtl">
                  <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  <Link
                    href={`/products/${category.slug}`}
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

        {/* Featured Products */}
        {featuredProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">מוצרים מובילים</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProducts.map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden">
                  <Link href={`/products/${product.slug}`}>
                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                      {product.images && product.images.length > 0 ? (
                        <Image 
                          src={product.images[0]} 
                          alt={product.name}
                          width={300}
                          height={200}
                          className="object-contain w-full h-full"
                        />
                      ) : (
                        <span className="text-gray-500">תמונת מוצר</span>
                      )}
                    </div>
                  </Link>
                  <div className="p-6 rtl">
                    <h3 className="text-xl font-semibold mb-2">
                      <Link href={`/products/${product.slug}`} className="hover:text-orange-600">
                        {product.name}
                      </Link>
                    </h3>
                    <div className="flex items-center justify-between">
                      {product.discountPrice ? (
                        <div>
                          <span className="text-2xl font-bold text-orange-600">{product.discountPrice} ₪</span>
                          <span className="text-lg text-gray-500 line-through mr-2">{product.price} ₪</span>
                        </div>
                      ) : (
                        <span className="text-2xl font-bold">{product.price} ₪</span>
                      )}
                      <Link
                        href={`/products/${product.slug}`}
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
        )}
      </div>
    </div>
  );
} 