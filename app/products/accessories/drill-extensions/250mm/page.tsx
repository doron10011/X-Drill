'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaShoppingCart, FaTruck, FaShieldAlt, FaInfoCircle, FaExchangeAlt, FaRuler } from 'react-icons/fa';
import Image from 'next/image';
import { useCart } from '../../../../../../components/CartContext';

// Product data
const product = {
  id: 'drill-extension-250',
  name: 'מאריך קידוח 250 מ"מ',
  nameEn: 'Drill Extension 250mm',
  description: 'מאריך קידוח מקצועי באורך 250 מ"מ לכוסות קידוח יהלום. מיוצר מפלדה קשיחה במיוחד וכולל הברגה סטנדרטית 1-1/4" UNC בשני הקצוות. מאפשר הגעה למקומות קשים והגדלת עומק הקידוח האפקטיבי.',
  length: '250 מ"מ',
  thread: '1-1/4" UNC (בשני הקצוות)',
  material: 'פלדה מחוזקת מסוג 42CrMo4',
  finish: 'טיפול חום וגימור מוגן חלודה',
  diameter: '60 מ"מ',
  weight: '1.8 ק"ג',
  compatibility: 'כל כוסות הקידוח עם הברגת 1-1/4" UNC',
  warranty: '12 חודשים',
  price: 180,
  stock: 18,
  delivery_time: '1-3 ימי עסקים',
  applications: [
    'הגדלת עומק הקידוח האפקטיבי',
    'הגעה למקומות קשים לגישה',
    'ביצוע קידוחים בעומק גדול',
    'עבודה עם מכונות קידוח ללא צורך בעמדה גבוהה'
  ],
  features: [
    'אורך 250 מ"מ להגדלת טווח הקידוח',
    'מיוצר מפלדה קשיחה במיוחד',
    'הברגה סטנדרטית 1-1/4" UNC',
    'עמידות ביישורים גבוהה',
    'מתאים למגוון רחב של כוסות קידוח',
    'טיפול חום להארכת חיי המוצר'
  ],
  images: [
    '/placeholder.jpg',
    '/placeholder.jpg',
    '/placeholder.jpg',
  ],
  manuals: [
    { name: 'הוראות שימוש', url: '#' },
    { name: 'הוראות בטיחות', url: '#' },
  ],
};

// Related products
const relatedProducts = [
  {
    id: 'arix-102mm',
    name: 'כוס קידוח יהלום לקידוח רטוב עם סגמנט Arix - 102 מ"מ',
    price: 750,
    discount_price: 699,
    image: '/placeholder.jpg',
    slug: '/products/diamond-core-drill-bits/wet-drilling/102mm',
  },
  {
    id: 'drill-extension-350',
    name: 'מאריך קידוח 350 מ"מ',
    price: 250,
    image: '/placeholder.jpg',
    slug: '/products/accessories/drill-extensions/350mm',
  },
  {
    id: 'adapter-unc-bsp',
    name: 'מתאם הברגה 1-1/4" UNC ל-1/2" BSP',
    price: 120,
    image: '/placeholder.jpg',
    slug: '/products/accessories/thread-adapters/unc-bsp',
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
          length: product.length,
          thread: product.thread
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
              <Link href="/products/accessories/drill-extensions" className="text-gray-500 hover:text-gray-700">
                מאריכי קידוח
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
                    <FaRuler />
                  </div>
                  <span className="text-gray-500">תמונת מאריך קידוח {product.length}</span>
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
                        <span className="font-semibold">אורך:</span> {product.length}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold">הברגה:</span> {product.thread}
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
                        <span className="font-semibold">קוטר:</span> {product.diameter}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold">משקל:</span> {product.weight}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold">תאימות:</span> {product.compatibility}
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
                <p className="mb-4">מאריך קידוח זה מיוצר מפלדה קשיחה במיוחד מסוג 42CrMo4 עם טיפול חום מיוחד המעניק לו עמידות גבוהה בתנאי עבודה קשים. המאריך כולל הברגה סטנדרטית של 1-1/4" UNC בשני קצותיו, מה שמאפשר חיבור פשוט לכוסות קידוח ולמכונות קידוח.</p>
                <p className="mb-4">אורך המאריך - 250 מ"מ - מאפשר הגדלה משמעותית של עומק הקידוח האפקטיבי ומאפשר גישה למקומות קשים. המבנה הקשיח במיוחד מונע התפתלות וכפיפה גם בעומסים גבוהים ובקדיחה של בטון מזוין קשה במיוחד.</p>
                <p>גימור מוגן חלודה מבטיח חיי מוצר ארוכים גם בסביבת עבודה עם מים וחומרים קורוזיביים אחרים.</p>
              </div>
            )}
            {activeTab === 'applications' && (
              <div>
                <p className="mb-4">השימושים העיקריים של מאריך הקידוח:</p>
                <ul className="list-disc pr-5 mb-4">
                  {product.applications.map((app, index) => (
                    <li key={index} className="mb-2">{app}</li>
                  ))}
                </ul>
                <p>המאריך מתאים במיוחד לאנשי מקצוע המבצעים קידוחים עמוקים, עבודות אינסטלציה, הנחת צנרת חשמל בעומק וכדומה.</p>
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