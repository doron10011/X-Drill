'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaShoppingCart, FaTruck, FaShieldAlt, FaInfoCircle, FaExchangeAlt } from 'react-icons/fa';
import Image from 'next/image';

// Product data
const product = {
  id: 'thread-adapter',
  name: 'מתאם הברגה מ-1/2" UNC ל-1/2" BSP',
  nameEn: 'Thread Adapter 1/2" UNC to 1/2" BSP',
  description: 'מתאם הברגה מקצועי המאפשר חיבור בין כלים עם סוגי הברגות שונים. מתאם זה מתרגם מהברגת 1/2 אינץ\' UNC להברגת 1/2 אינץ\' BSP. מיוצר מפלדה באיכות גבוהה לאורך חיים מקסימלי.',
  from_thread: '1/2" UNC',
  to_thread: '1/2" BSP',
  material: 'פלדה מחוזקת',
  finish: 'גלוון',
  dimensions: '45 x 30 מ"מ',
  weight: '115 גרם',
  compatibility: 'כל מקדחי היהלום וכוסות הקידוח עם הברגות תואמות',
  warranty: '12 חודשים',
  price: 120,
  stock: 25,
  delivery_time: '1-2 ימי עסקים',
  applications: ['התאמה בין כלי קידוח עם הברגות שונות', 'הרכבת מערכות קידוח מורכבות', 'שימוש עם מכונות קידוח מתוצרנים שונים'],
  images: [
    '/placeholder.jpg',
    '/placeholder.jpg',
    '/placeholder.jpg',
  ],
};

// Related products
const relatedProducts = [
  {
    id: 'unc-1-1-4',
    name: 'מתאם הברגה מ-1-1/4" UNC ל-1/2" BSP',
    price: 150,
    image: '/placeholder.jpg',
    slug: '/products/accessories/thread-adapter-large',
  },
  {
    id: 'core-bit-67mm',
    name: 'כוס קידוח יהלום לקידוח רטוב - 67 מ"מ',
    price: 399,
    image: '/placeholder.jpg',
    slug: '/products/diamond-core-drill-bits/67mm',
  },
  {
    id: 'extension-rod',
    name: 'מאריך לכוס קידוח - 30 ס"מ',
    price: 180,
    image: '/placeholder.jpg',
    slug: '/products/accessories/extension-rod',
  },
];

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');

  const handleAddToCart = () => {
    // Implement add to cart functionality
    console.log('Adding to cart:', { product, quantity });
  };

  return (
    <div className="min-h-screen bg-gray-50 rtl">
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
              <Link href="/products/accessories" className="text-gray-500 hover:text-gray-700">
                אביזרים נלווים
              </Link>
            </li>
            <li>
              <span className="text-gray-500 mx-2">/</span>
            </li>
            <li className="text-gray-700">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-600 mb-2">{product.nameEn}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>

            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">מפרט טכני</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600">
                    <span className="font-semibold">הברגה מקור:</span> {product.from_thread}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">הברגה יעד:</span> {product.to_thread}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">חומר:</span> {product.material}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">גימור:</span> {product.finish}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">
                    <span className="font-semibold">מידות:</span> {product.dimensions}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">משקל:</span> {product.weight}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">תאימות:</span> {product.compatibility}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">אחריות:</span> {product.warranty}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
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
              <p className="flex items-center text-sm text-green-600 mb-4">
                <span className="font-semibold ml-1">מלאי:</span> 
                {product.stock > 10 ? 'במלאי' : product.stock > 0 ? `נותרו רק ${product.stock} יחידות` : 'אזל מהמלאי'}
              </p>
              <p className="flex items-center text-sm text-gray-600 mb-4">
                <FaTruck className="ml-1 text-orange-500" />
                <span className="font-semibold ml-1">זמן אספקה:</span> {product.delivery_time}
              </p>
              <button
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-md flex items-center justify-center mb-3"
                onClick={handleAddToCart}
                disabled={product.stock === 0}
              >
                <FaShoppingCart className="ml-2" />
                הוסף לעגלה
              </button>
              <button
                className="w-full border border-orange-600 text-orange-600 hover:bg-orange-50 py-3 rounded-md flex items-center justify-center"
              >
                <FaInfoCircle className="ml-2" />
                שאל שאלה על המוצר
              </button>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center text-sm text-gray-700 bg-gray-100 rounded-full px-4 py-1">
                <FaShieldAlt className="ml-1 text-orange-500" />
                אחריות יצרן
              </div>
              <div className="flex items-center text-sm text-gray-700 bg-gray-100 rounded-full px-4 py-1">
                <FaTruck className="ml-1 text-orange-500" />
                משלוח מהיר
              </div>
              <div className="flex items-center text-sm text-gray-700 bg-gray-100 rounded-full px-4 py-1">
                <FaExchangeAlt className="ml-1 text-orange-500" />
                30 יום להחזרה
              </div>
            </div>
          </div>
        </div>

        {/* Additional Product Information Tabs */}
        <div className="bg-white rounded-lg shadow overflow-hidden mb-12">
          <div className="flex border-b">
            <button 
              className={`px-4 py-3 font-medium text-sm ${activeTab === 'description' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab('description')}
            >
              תיאור מורחב
            </button>
            <button 
              className={`px-4 py-3 font-medium text-sm ${activeTab === 'applications' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab('applications')}
            >
              שימושים מומלצים
            </button>
            <button 
              className={`px-4 py-3 font-medium text-sm ${activeTab === 'shipping' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab('shipping')}
            >
              משלוח והחזרות
            </button>
          </div>
          <div className="p-6">
            {activeTab === 'description' && (
              <div>
                <p className="mb-4">מתאם הברגה זה מיוצר מפלדה מחוזקת עם גימור מוגן מחלודה להבטחת אורך חיים מקסימלי. הוא מאפשר חיבור בין ציוד קידוח בעל הברגות שונות, ובפרט מגשר בין הסטנדרט האמריקאי (UNC) לסטנדרט הבריטי (BSP).</p>
                <p>המתאם תוכנן בדיוק רב להעברת כוח מקסימלית ללא אובדן יציבות בזמן הקידוח. הוא מתאים לשימוש יומיומי מקצועי והותאם לעמידה בתנאי עבודה קשים ולחצים גבוהים.</p>
              </div>
            )}
            {activeTab === 'applications' && (
              <div>
                <p className="mb-4">המתאם מתאים במיוחד לשימושים הבאים:</p>
                <ul className="list-disc pr-5 mb-4">
                  {product.applications.map((app, index) => (
                    <li key={index} className="mb-2">{app}</li>
                  ))}
                </ul>
                <p>המתאם מהווה כלי חיוני לכל איש מקצוע המשתמש במגוון של כלי קידוח יהלום מיצרנים שונים.</p>
              </div>
            )}
            {activeTab === 'shipping' && (
              <div>
                <h3 className="text-lg font-semibold mb-3">מדיניות משלוחים</h3>
                <p className="mb-4">אנו מספקים את המוצרים שלנו לכל רחבי הארץ. זמן אספקה צפוי הוא 1-2 ימי עסקים.</p>
                <h3 className="text-lg font-semibold mb-3">מדיניות החזרות</h3>
                <p>ניתן להחזיר מוצרים תוך 30 יום מיום הרכישה בתנאי שהם במצב חדש ובאריזתם המקורית. יש ליצור קשר עם שירות לקוחות לפני החזרת מוצר.</p>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">מוצרים משלימים</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">תמונת מוצר</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">{product.price} ₪</span>
                    <Link 
                      href={product.slug}
                      className="text-orange-600 hover:text-orange-700 text-sm"
                    >
                      לפרטים נוספים
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