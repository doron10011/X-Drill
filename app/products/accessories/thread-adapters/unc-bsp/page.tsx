'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaShoppingCart, FaTruck, FaShieldAlt, FaInfoCircle, FaExchangeAlt, FaTools } from 'react-icons/fa';
import Image from 'next/image';
import { useCart } from '../../../../../components/CartContext';

// Product data
const product = {
  id: 'adapter-unc-bsp',
  name: 'מתאם הברגה 1-1/4" UNC ל-1/2" BSP',
  nameEn: 'Thread Adapter 1-1/4" UNC to 1/2" BSP',
  description: 'מתאם הברגה מקצועי המאפשר חיבור בין כלים עם סוגי הברגות שונים. מתאם זה מתרגם מהברגת 1-1/4 אינץ\' UNC להברגת 1/2 אינץ\' BSP. מיוצר מפלדה באיכות גבוהה לאורך חיים מקסימלי.',
  from_thread: '1-1/4" UNC',
  to_thread: '1/2" BSP',
  material: 'פלדה מחוזקת',
  finish: 'גלוון',
  dimensions: '55 x 40 מ"מ',
  weight: '145 גרם',
  compatibility: 'כל מקדחי היהלום וכוסות הקידוח עם הברגות תואמות',
  warranty: '12 חודשים',
  price: 120,
  stock: 35,
  delivery_time: '1-2 ימי עסקים',
  applications: ['התאמה בין כלי קידוח עם הברגות שונות', 'הרכבת מערכות קידוח מורכבות', 'שימוש עם מכונות קידוח מתוצרנים שונים'],
  images: [
    '/placeholder.jpg',
    '/placeholder.jpg',
    '/placeholder.jpg',
  ],
  features: [
    'מיוצר מפלדה באיכות גבוהה',
    'גימור מוגן מחלודה',
    'מותאם לשימוש מקצועי יומיומי',
    'מעביר כוח מקסימלי ללא אובדן יציבות',
    'עומד בתנאי עבודה קשים ולחצים גבוהים'
  ],
  manuals: [
    { name: 'מדריך הפעלה', url: '#' },
    { name: 'הוראות בטיחות', url: '#' },
  ],
};

// Related products
const relatedProducts = [
  {
    id: 'arix-67mm',
    name: 'כוס קידוח יהלום לקידוח רטוב עם סגמנט Arix - 67 מ"מ',
    price: 450,
    discount_price: 399,
    image: '/placeholder.jpg',
    slug: '/products/diamond-core-drill-bits/wet-drilling/67mm',
  },
  {
    id: 'drill-extension-250',
    name: 'מאריך קידוח 250 מ"מ',
    price: 180,
    image: '/placeholder.jpg',
    slug: '/products/accessories/drill-extensions/250mm',
  },
  {
    id: 'thread-adapter-small',
    name: 'מתאם הברגה 1/2" UNC ל-1/2" BSP',
    price: 95,
    image: '/placeholder.jpg',
    slug: '/products/accessories/thread-adapter',
  }
];

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  
  // Get cart context
  const { addItem } = useCart();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    
    // Simulate API call to add to cart
    setTimeout(() => {
      // Add item to cart using cart context
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        image: product.images[0],
        attributes: {
          from_thread: product.from_thread,
          to_thread: product.to_thread
        }
      });
      
      setIsAddingToCart(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
        {/* Breadcrumb */}
        <nav className="flex mb-4 md:mb-8 rtl overflow-x-auto pb-2 hide-scrollbar" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center whitespace-nowrap">
            <li>
              <Link href="/" className="text-gray-500 hover:text-gray-700">
                דף הבית
              </Link>
            </li>
            <li className="mx-2 text-gray-500">/</li>
            <li>
              <Link href="/products" className="text-gray-500 hover:text-gray-700">
                מוצרים
              </Link>
            </li>
            <li className="mx-2 text-gray-500">/</li>
            <li>
              <Link href="/products/accessories" className="text-gray-500 hover:text-gray-700">
                אביזרים נלווים
              </Link>
            </li>
            <li className="mx-2 text-gray-500">/</li>
            <li>
              <Link href="/products/accessories/thread-adapters" className="text-gray-500 hover:text-gray-700">
                מתאמי הברגות
              </Link>
            </li>
            <li className="mx-2 text-gray-500">/</li>
            <li className="text-gray-700 truncate max-w-[150px] sm:max-w-xs">{product.name}</li>
          </ol>
        </nav>

        {/* Back button - mobile friendly */}
        <div className="mb-4 md:mb-6">
          <Link 
            href="/products/accessories" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700"
          >
            <span className="rtl-flip">
              <FaArrowLeft className="mr-2" />
            </span>
            חזרה לאביזרים נלווים
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Product Images */}
          <div className="order-1">
            <div className="bg-white rounded-lg shadow overflow-hidden mb-4">
              <div className="h-64 sm:h-80 md:h-96 bg-gray-200 flex items-center justify-center relative product-image">
                {/* Placeholder for actual image */}
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl text-gray-400 mb-4">
                    <FaTools />
                  </div>
                  <span className="text-gray-500">תמונת מתאם הברגה {product.from_thread} ל-{product.to_thread}</span>
                </div>
                
                {/* Product badges - mobile friendly */}
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex flex-col space-y-1 sm:space-y-2">
                  <span className="bg-green-500 text-white text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 rounded-md">
                    במלאי
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="order-2">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-right">
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <p className="text-gray-600 mb-2">{product.nameEn}</p>
                <p className="text-gray-600 mb-6">{product.description}</p>

                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h2 className="text-xl font-semibold mb-4">מפרט טכני</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600">
                        <span className="font-semibold">הברגת מקור:</span> {product.from_thread}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold">הברגת יעד:</span> {product.to_thread}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold">חומר:</span> {product.material}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600">
                        <span className="font-semibold">גימור:</span> {product.finish}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold">מידות:</span> {product.dimensions}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold">משקל:</span> {product.weight}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                  <div className="flex flex-col mb-4 md:mb-0">
                    <div className="text-2xl font-bold text-orange-600">{product.price} ₪</div>
                    <span className="text-gray-500 text-sm">מחיר כולל מע"מ</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => handleQuantityChange(quantity - 1)}
                      className="bg-gray-200 text-gray-700 rounded-md w-8 h-8 flex items-center justify-center"
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <input 
                      type="number" 
                      value={quantity} 
                      min="1"
                      max={product.stock}
                      onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
                      className="w-12 text-center border border-gray-200 rounded-md py-1"
                    />
                    <button 
                      onClick={() => handleQuantityChange(quantity + 1)}
                      className="bg-gray-200 text-gray-700 rounded-md w-8 h-8 flex items-center justify-center"
                      disabled={quantity >= product.stock}
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <button 
                  onClick={handleAddToCart}
                  disabled={isAddingToCart}
                  className={`w-full py-3 rounded-md font-semibold flex items-center justify-center space-x-2 ${
                    isAddingToCart 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-orange-600 hover:bg-orange-700 text-white'
                  }`}
                >
                  <FaShoppingCart />
                  <span className="mr-2">{isAddingToCart ? 'מוסיף למוצר...' : 'הוסף לסל'}</span>
                </button>
                
                <div className="flex flex-wrap justify-between mt-4 text-sm">
                  <div className="flex items-center mb-2 ml-4">
                    <FaTruck className="text-gray-500 ml-1" />
                    <span>משלוח תוך {product.delivery_time}</span>
                  </div>
                  <div className="flex items-center mb-2 ml-4">
                    <FaShieldAlt className="text-gray-500 ml-1" />
                    <span>אחריות {product.warranty}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <FaExchangeAlt className="text-gray-500 ml-1" />
                    <span>החזרה בתוך 14 יום</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs and additional content */}
        <div className="bg-white rounded-lg shadow mb-8">
          <div className="flex overflow-x-auto border-b">
            <button 
              className={`px-4 py-3 font-semibold text-sm whitespace-nowrap border-b-2 ${
                activeTab === 'description' 
                  ? 'border-orange-600 text-orange-600' 
                  : 'border-transparent hover:border-gray-300 text-gray-600'
              }`}
              onClick={() => setActiveTab('description')}
            >
              תיאור מוצר
            </button>
            <button 
              className={`px-4 py-3 font-semibold text-sm whitespace-nowrap border-b-2 ${
                activeTab === 'applications' 
                  ? 'border-orange-600 text-orange-600' 
                  : 'border-transparent hover:border-gray-300 text-gray-600'
              }`}
              onClick={() => setActiveTab('applications')}
            >
              שימושים
            </button>
            <button 
              className={`px-4 py-3 font-semibold text-sm whitespace-nowrap border-b-2 ${
                activeTab === 'features' 
                  ? 'border-orange-600 text-orange-600' 
                  : 'border-transparent hover:border-gray-300 text-gray-600'
              }`}
              onClick={() => setActiveTab('features')}
            >
              תכונות מרכזיות
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
            {activeTab === 'features' && (
              <div>
                <p className="mb-4">תכונות מרכזיות:</p>
                <ul className="list-disc pr-5 mb-4">
                  {product.features.map((feature, index) => (
                    <li key={index} className="mb-2">{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold mb-6">מוצרים דומים</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="bg-white rounded-lg shadow overflow-hidden">
                <Link href={relatedProduct.slug}>
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">תמונת מוצר</span>
                  </div>
                </Link>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    <Link href={relatedProduct.slug} className="hover:text-orange-600">
                      {relatedProduct.name}
                    </Link>
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">
                      {relatedProduct.discount_price ? (
                        <>
                          <span className="text-orange-600">{relatedProduct.discount_price} ₪</span>
                          <span className="text-gray-400 text-sm line-through mr-2">{relatedProduct.price} ₪</span>
                        </>
                      ) : (
                        <span>{relatedProduct.price} ₪</span>
                      )}
                    </span>
                    <Link
                      href={relatedProduct.slug}
                      className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md text-sm"
                    >
                      פרטים
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