'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaShoppingCart, FaTruck, FaShieldAlt, FaInfoCircle, FaExchangeAlt } from 'react-icons/fa';
import Image from 'next/image';

// Product data
const product = {
  id: 'saw-d25mm',
  name: 'מסור יהלום לקידוח בבטון ובטון מזוין בקוטר D25.4/20 מ"מ',
  nameEn: 'Diamond Saw Blade for Concrete D25.4/20 mm',
  description: 'מסור יהלום מקצועי לקידוח בבטון ובטון מזוין בקוטר D25.4/20 מ"מ. מתאים לעבודה עם מגוון רחב של חומרים קשים וביצועים מעולים גם בתנאי עבודה מאתגרים.',
  diameter: 'D25.4/20 מ"מ',
  segment_height: '8 מ"מ',
  segment_width: '2.8 מ"מ',
  bore: '20 מ"מ',
  rpm_max: '8500',
  material: 'בטון, בטון מזוין',
  segment_type: 'Arix',
  segments_count: '7',
  applications: ['קידוח בבטון', 'קידוח בבטון מזוין', 'קידוח בבלוקים'],
  usage_type: 'רטוב',
  warranty: '12 חודשים',
  price: 450,
  discount_price: 399,
  stock: 15,
  delivery_time: '2-4 ימי עסקים',
  images: [
    '/placeholder.jpg',
    '/placeholder.jpg',
    '/placeholder.jpg',
  ],
};

// Related products
const relatedProducts = [
  {
    id: 'saw-d20mm',
    name: 'מסור יהלום לקידוח בבטון בקוטר D20 מ"מ',
    price: 350,
    image: '/placeholder.jpg',
  },
  {
    id: 'saw-d30mm',
    name: 'מסור יהלום לקידוח בבטון בקוטר D30 מ"מ',
    price: 550,
    image: '/placeholder.jpg',
  },
  {
    id: 'adapter-unx-bsp',
    name: 'מתאם הברגה UNC ל-BSP',
    price: 120,
    image: '/placeholder.jpg',
  }
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
          <ol className="flex items-center space-x-2 space-x-reverse">
            <li>
              <Link href="/" className="text-gray-500 hover:text-gray-700">
                דף הבית
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
          <div className="text-right">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-600 mb-2">{product.nameEn}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>

            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">מפרט טכני</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600">
                    <span className="font-semibold">קוטר:</span> {product.diameter}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">גובה סגמנט:</span> {product.segment_height}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">רוחב סגמנט:</span> {product.segment_width}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">סוג סגמנט:</span> {product.segment_type}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">מספר סגמנטים:</span> {product.segments_count}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">
                    <span className="font-semibold">קוטר פנימי:</span> {product.bore}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">סל"ד מקסימלי:</span> {product.rpm_max}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">חומר לקידוח:</span> {product.material}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">סוג קידוח:</span> {product.usage_type}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">אחריות:</span> {product.warranty}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                {product.discount_price ? (
                  <div>
                    <span className="text-3xl font-bold text-orange-600">{product.discount_price} ₪</span>
                    <span className="text-xl font-medium text-gray-500 line-through mr-2">{product.price} ₪</span>
                  </div>
                ) : (
                  <span className="text-3xl font-bold">{product.price} ₪</span>
                )}
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
              אחריות ומשלוח
            </button>
          </div>
          <div className="p-6 text-right">
            {activeTab === 'description' && (
              <div>
                <h3 className="text-lg font-semibold mb-3">מסור יהלום מקצועי לקידוח בבטון ובטון מזוין</h3>
                <p className="text-gray-600 mb-4">
                  מסור יהלום איכותי לקידוח בבטון ובטון מזוין. הסגמנטים בעלי עמידות גבוהה במיוחד לשחיקה ומספקים ביצועי קידוח מעולים גם בתנאי עבודה קשים.
                </p>
                <p className="text-gray-600 mb-4">
                  המסור מגיע עם 7 סגמנטים מסוג Arix שפותחו במיוחד עבור בטון קשה ובטון מזוין, ומאפשרים קידוח מדויק ומהיר גם בחומרים קשים במיוחד.
                </p>
                <p className="text-gray-600">
                  הקוטר הפנימי של 20 מ"מ מתאים לרוב מכונות הקידוח הנפוצות בשוק, והמסור מתאים לעבודה רטובה המבטיחה אורך חיים ארוך וביצועים מעולים.
                </p>
              </div>
            )}
            {activeTab === 'applications' && (
              <div>
                <h3 className="text-lg font-semibold mb-3">שימושים מומלצים</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 pr-4">
                  <li>קידוח חורים מדויקים בבטון ובטון מזוין</li>
                  <li>התקנת אינסטלציה, חשמל ומיזוג אוויר</li>
                  <li>קידוח בבלוקים ואבן</li>
                  <li>עבודות שיפוצים מקצועיות</li>
                  <li>התקנת מערכות אבטחה ותקשורת</li>
                </ul>
                <div className="mt-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">המלצת המומחים שלנו</h4>
                  <p className="text-gray-700">
                    לתוצאות מיטביות, מומלץ להשתמש במסור זה יחד עם מכונת קידוח בעלת הספק של לפחות 1500W ומערכת קירור מים יעילה. הדבר יבטיח את אורך חיי המסור וביצועים מעולים לאורך זמן.
                  </p>
                </div>
              </div>
            )}
            {activeTab === 'shipping' && (
              <div>
                <h3 className="text-lg font-semibold mb-3">אחריות ומשלוח</h3>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">אחריות יצרן:</span> המוצר מגיע עם אחריות יצרן לתקופה של 12 חודשים מיום הרכישה. האחריות מכסה פגמים בייצור בלבד.
                </p>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">זמני אספקה:</span> המוצר נשלח תוך 1-2 ימי עסקים מרגע ההזמנה. זמן האספקה הצפוי הינו 2-4 ימי עסקים (לא כולל שישי-שבת).
                </p>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">משלוח:</span> המשלוח מתבצע באמצעות חברת שליחויות מובילה. משלוח חינם בהזמנות מעל 500 ₪.
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">החזרות:</span> ניתן להחזיר את המוצר תוך 30 יום מקבלתו, בתנאי שהוא חדש, ללא שימוש ובאריזתו המקורית. החזר כספי יינתן בתוך 7-14 ימי עסקים מיום קבלת המוצר בחזרה.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">מוצרים דומים שעשויים לעניין אותך</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">תמונת מוצר</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-2 line-clamp-2">{item.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-xl">{item.price} ₪</span>
                    <Link 
                      href={`/products/${item.id}`}
                      className="bg-orange-600 hover:bg-orange-700 text-white px-3 py-1 rounded text-sm"
                    >
                      לפרטים
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