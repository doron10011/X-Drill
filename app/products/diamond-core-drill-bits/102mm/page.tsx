'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaShoppingCart } from 'react-icons/fa';

// Product data
const product = {
  id: 'arix-102mm',
  name: 'כוס קידוח יהלום לקידוח רטוב עם סגמנט Arix – בקוטר 102 מ"מ',
  description: 'כוס קידוח מקצועית עם סגמנט Arix בקוטר 102 מ"מ, מתאימה לקידוח רטוב בבטון, בטון מזוין וחומרים קשים. איכות מעולה וביצועים מיטביים עם אורך חיים ארוך במיוחד.',
  diameter: '102 מ"מ',
  length: '450 מ"מ',
  thread: '1-1/4" UNC',
  segments: 10,
  material: 'בטון, בטון מזוין',
  price: 750,
  stock: 12,
  images: [
    '/placeholder.jpg',
    '/placeholder.jpg',
    '/placeholder.jpg',
  ],
};

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const handleAddToCart = () => {
    // Implement add to cart functionality
    console.log('Adding to cart:', { product, quantity });
  };

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
              <Link href="/products/diamond-core-drill-bits" className="text-gray-500 hover:text-gray-700">
                כוסות קידוח יהלום
              </Link>
            </li>
            <li>
              <span className="text-gray-500 mx-2">/</span>
            </li>
            <li className="text-gray-700">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div>
            <div className="bg-white rounded-lg shadow overflow-hidden mb-4">
              <div className="h-96 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">תמונת מוצר</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`bg-white rounded-lg shadow overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-orange-500' : ''
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="h-24 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">תמונת מוצר</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>

            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">מפרט טכני</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600">
                    <span className="font-semibold">קוטר:</span> {product.diameter}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">אורך:</span> {product.length}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">הברגה:</span> {product.thread}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">
                    <span className="font-semibold">מספר סגמנטים:</span> {product.segments}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">חומר קידוח:</span> {product.material}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">מלאי:</span> {product.stock} יחידות
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-bold">{product.price} ₪</span>
                <div className="flex items-center">
                  <button
                    className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-l"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <span className="px-4 py-1 bg-gray-100">{quantity}</span>
                  <button
                    className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-r"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-md flex items-center justify-center"
                onClick={handleAddToCart}
              >
                <FaShoppingCart className="ml-2" />
                הוסף לעגלה
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 