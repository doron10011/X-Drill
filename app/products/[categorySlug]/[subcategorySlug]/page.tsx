'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FaChevronLeft, FaFilter, FaSort } from 'react-icons/fa';
import { getCategoryBySlug, getSubcategoryBySlug } from '../../../data/categories';
import { getProductsByCategory } from '../../../data/products';
import { Category, Product, Subcategory } from '../../../data/types';

export default function SubcategoryPage() {
  const params = useParams();
  const categorySlug = params.categorySlug as string;
  const subcategorySlug = params.subcategorySlug as string;

  const [category, setCategory] = useState<Category | undefined>(undefined);
  const [subcategory, setSubcategory] = useState<Subcategory | undefined>(undefined);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState('featured');

  useEffect(() => {
    if (categorySlug && subcategorySlug) {
      // Get category and subcategory data
      const categoryData = getCategoryBySlug(categorySlug);
      setCategory(categoryData);

      if (categoryData) {
        const subcategoryData = getSubcategoryBySlug(categorySlug, subcategorySlug);
        setSubcategory(subcategoryData);

        // Get products for this subcategory
        if (subcategoryData) {
          const subcategoryProducts = getProductsByCategory(categoryData.id, subcategoryData.id);
          setProducts(subcategoryProducts);
          setFilteredProducts(subcategoryProducts);
        }
      }

      setLoading(false);
    }
  }, [categorySlug, subcategorySlug]);

  // Handle sorting of products
  const handleSort = (option: string) => {
    setSortOption(option);
    let sorted = [...products];

    switch (option) {
      case 'priceAsc':
        sorted.sort((a, b) => {
          const priceA = a.discount_price || a.price;
          const priceB = b.discount_price || b.price;
          return priceA - priceB;
        });
        break;
      case 'priceDesc':
        sorted.sort((a, b) => {
          const priceA = a.discount_price || a.price;
          const priceB = b.discount_price || b.price;
          return priceB - priceA;
        });
        break;
      case 'nameAsc':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'nameDesc':
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'featured':
      default:
        // No sorting needed, products are in default order
        break;
    }

    setFilteredProducts(sorted);
  };

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

  if (!category || !subcategory) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">הקטגוריה או תת-הקטגוריה לא נמצאו</h1>
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{subcategory.name}</h1>
            <p className="text-xl text-gray-300">
              {subcategory.description}
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
            <li>
              <Link href={`/products/${category.slug}`} className="text-gray-500 hover:text-gray-700">
                {category.name}
              </Link>
            </li>
            <li>
              <span className="text-gray-500 mx-2">/</span>
            </li>
            <li className="text-gray-700">{subcategory.name}</li>
          </ol>
        </nav>

        {/* Sort and Filter */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-bold mb-4 md:mb-0">{filteredProducts.length} מוצרים</h2>
          
          <div className="flex space-x-4">
            <div className="relative">
              <select
                value={sortOption}
                onChange={(e) => handleSort(e.target.value)}
                className="bg-gray-100 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="featured">מיון לפי: מובחרים</option>
                <option value="priceAsc">מחיר: מהנמוך לגבוה</option>
                <option value="priceDesc">מחיר: מהגבוה לנמוך</option>
                <option value="nameAsc">שם: א-ת</option>
                <option value="nameDesc">שם: ת-א</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-gray-700">
                <FaSort />
              </div>
            </div>
          </div>
        </div>

        {/* Products List */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
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
        ) : (
          <div className="text-center py-10">
            <p className="text-lg text-gray-600">
              לא נמצאו מוצרים בקטגוריה זו
            </p>
            <Link href="/products" className="text-orange-600 hover:text-orange-700 mt-4 inline-block">
              חזרה לעמוד המוצרים
            </Link>
          </div>
        )}
      </div>
    </div>
  );
} 