'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FaChevronLeft, FaChevronDown } from 'react-icons/fa';
import { getCategoryBySlug } from '../../data/categories';
import { getProductsByCategory } from '../../data/products';
import { Category, Product } from '../../data/types';

export default function CategoryPage() {
  const params = useParams();
  const categorySlug = params.categorySlug as string;

  const [category, setCategory] = useState<Category | undefined>(undefined);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (categorySlug) {
      // Get category data
      const categoryData = getCategoryBySlug(categorySlug);
      setCategory(categoryData);

      // Get products for this category
      if (categoryData) {
        const categoryProducts = getProductsByCategory(categoryData.id);
        setProducts(categoryProducts);
      }

      setLoading(false);
    }
  }, [categorySlug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="spinner w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg">טוען...</p>
        </div>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">הקטגוריה לא נמצאה</h1>
          <Link href="/products" className="text-orange-600 hover:text-orange-700">
            חזרה לעמוד המוצרים
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{category.name}</h1>
            <p className="text-xl text-gray-300">
              {category.description}
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
            <li>
              <Link href="/products" className="text-gray-500 hover:text-gray-700">
                מוצרים
              </Link>
            </li>
            <li>
              <span className="text-gray-500 mx-2">/</span>
            </li>
            <li className="text-gray-700">{category.name}</li>
          </ol>
        </nav>

        {/* Subcategories */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-6">תת-קטגוריות</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.subcategories.map((subcategory) => (
              <div key={subcategory.id} className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold mb-3">{subcategory.name}</h3>
                <p className="text-gray-600 mb-4">{subcategory.description}</p>
                <Link
                  href={`/products/${category.slug}/${subcategory.slug}`}
                  className="text-orange-600 hover:text-orange-700 font-semibold flex items-center justify-end"
                >
                  צפה במוצרים
                  <FaChevronLeft className="mr-1 text-sm" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Products List */}
        {products.length > 0 ? (
          <div>
            <h2 className="text-2xl font-bold mb-6">כל המוצרים בקטגוריה</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden">
                  <Link href={product.slug}>
                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">תמונת מוצר</span>
                    </div>
                  </Link>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      <Link href={product.slug} className="hover:text-orange-600">
                        {product.name}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm h-12 overflow-hidden">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        {product.discount_price ? (
                          <div className="flex flex-col">
                            <span className="text-sm line-through text-gray-500">₪{product.price}</span>
                            <span className="text-2xl font-bold text-orange-600">₪{product.discount_price}</span>
                          </div>
                        ) : (
                          <span className="text-2xl font-bold">₪{product.price}</span>
                        )}
                      </div>
                      <Link
                        href={product.slug}
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
        ) : (
          <div className="text-center py-10">
            <p className="text-lg text-gray-600">
              בחר תת-קטגוריה לצפייה במוצרים
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 