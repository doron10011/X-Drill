'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { FaChevronLeft, FaShoppingCart, FaTruck, FaShieldAlt, FaInfoCircle, FaExchangeAlt, FaCheck, FaPrint, FaShare, FaDownload, FaRuler, FaCog, FaTools, FaHeadset } from 'react-icons/fa';
import Image from 'next/image';
import ProductSpecifications from '../../../../../components/ProductSpecifications';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../../../../components/CartContext';

// Product data
const product = {
  id: 'arix-67mm',
  name: 'כוס קידוח יהלום לקידוח רטוב עם סגמנט Arix – בקוטר 67 מ"מ',
  nameEn: 'Diamond Core Drill Bit with Arix Segment - 67mm',
  description: 'כוס קידוח מקצועית עם סגמנט Arix בקוטר 67 מ"מ, מתאימה לקידוח רטוב בבטון, בטון מזוין וחומרים קשים. איכות מעולה וביצועים מיטביים עם אורך חיים ארוך במיוחד.',
  longDescription: `
    <p>מקדח יהלום מסדרת Premium לקידוח רטוב המיועד לקידוח מדוייק בבטון ובבטון מזוין. המקדח מצויד בסגמנטים מסוג Arix המאפשרים חדירה טובה יותר לחומר וקידוח מהיר במיוחד, תוך אורך חיים משופר.</p>
    <p>כוס הקידוח תוכננה לעבודה עם קירור מים אופטימלי, מה שמונע התחממות יתר ומאריך את חיי המוצר. המבנה המחוזק של הכוס מאפשר קידוח גם בבטון מזוין קשה תוך שמירה על דיוק וביצועים גבוהים.</p>
    <p>מתאימה לשימוש עם מקדחות קידוח רטובות בעלות חיבור 1-1/4" UNC. ניתן להשתמש במתאמים מתאימים לחיבור למכונות אחרות.</p>
  `,
  diameter: '67 מ"מ',
  length: '450 מ"מ',
  effective_length: '400 מ"מ',
  thread: '1-1/4" UNC',
  segments: 5,
  segment_height: '10 מ"מ',
  segment_type: 'Arix Premium',
  segment_technology: 'טכנולוגיית Arix המאפשרת קידוח מהיר יותר עם אורך חיים משופר',
  core_material: 'פלדה באיכות גבוהה, מחוזקת במיוחד לקידוח בבטון מזוין',
  material: 'בטון, בטון מזוין, אבן קשה',
  usage_type: 'רטוב',
  warranty: '12 חודשים',
  price: 450,
  discount_price: 399,
  stock: 10,
  delivery_time: '1-3 ימי עסקים',
  applications: [
    'קידוח בבטון',
    'קידוח בבטון מזוין',
    'קידוח בבלוקים',
    'ביצוע עבודות אינסטלציה',
    'התקנת צנרת חשמל ותקשורת',
    'התקנת מערכות מיזוג אוויר'
  ],
  compatible_machines: [
    'מכונות קידוח עם חיבור 1-1/4" UNC',
    'מכונות עם חיבורים אחרים בשילוב עם מתאם מתאים'
  ],
  recommended_accessories: [
    'מתאם הברגה 1-1/4" UNC ל-1/2" BSP',
    'מאריך קידוח 250 מ"מ',
    'משאבת מים חשמלית'
  ],
  technical_note: 'יש לוודא אספקת מים מספקת בזמן הקידוח למניעת התחממות יתר וקיצור אורך חיי המוצר. מומלץ לקדוח במהירות סיבוב של 600-900 סל"ד לתוצאות מיטביות.',
  features: [
    'סגמנטים בטכנולוגיית Arix לביצועים משופרים',
    'אורך חיים ארוך במיוחד',
    'התאמה מיטבית לקידוח בבטון מזוין',
    'מבנה מחוזק לעמידות גבוהה',
    'חיבור סטנדרטי 1-1/4" UNC',
    'עיצוב המאפשר פינוי מיטבי של נוזלי קירור ושבבים'
  ],
  images: [
    '/placeholder.jpg',
    '/placeholder.jpg',
    '/placeholder.jpg',
  ],
  manuals: [
    { name: 'מדריך הפעלה', url: '#' },
    { name: 'הוראות בטיחות', url: '#' },
  ],
  videos: [
    { title: 'הדגמת שימוש', url: '#' },
    { title: 'טיפים לתחזוקה', url: '#' },
  ],
  brand: {
    name: 'X-Drill',
    logo: '/placeholder.jpg'
  }
};

// Related products
const relatedProducts = [
  {
    id: 'arix-77mm',
    name: 'כוס קידוח יהלום לקידוח רטוב עם סגמנט Arix - 77 מ"מ',
    price: 550,
    discount_price: 499,
    image: '/placeholder.jpg',
    slug: '/products/diamond-core-drill-bits/wet-drilling/77mm',
  },
  {
    id: 'arix-102mm',
    name: 'כוס קידוח יהלום לקידוח רטוב עם סגמנט Arix - 102 מ"מ',
    price: 750,
    discount_price: 699,
    image: '/placeholder.jpg',
    slug: '/products/diamond-core-drill-bits/wet-drilling/102mm',
  },
  {
    id: 'adapter-unc-bsp',
    name: 'מתאם הברגה 1-1/4" UNC ל-1/2" BSP',
    price: 120,
    image: '/placeholder.jpg',
    slug: '/products/accessories/thread-adapters/unc-bsp',
  },
  {
    id: 'drill-extension-250',
    name: 'מאריך קידוח 250 מ"מ',
    price: 180,
    image: '/placeholder.jpg',
    slug: '/products/accessories/drill-extensions/250mm',
  }
];

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const cartIconRef = useRef(null);
  
  // Get cart context
  const { addItem } = useCart();

  const handleQuantityChange = (newQuantity) => {
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
        price: product.discount_price || product.price,
        quantity: quantity,
        image: product.images[0],
        attributes: {
          diameter: product.diameter,
          thread: product.thread
        }
      });
      
      setIsAddingToCart(false);
    }, 800);
  };

  const handlePrintPage = () => {
    window.print();
  };

  const handleShare = () => {
    // Implement share functionality
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      });
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('הקישור הועתק ללוח');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 rtl pb-16">
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
              <Link href="/products" className="text-gray-500 hover:text-gray-700">
                מוצרים
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
            <li>
              <Link href="/products/diamond-core-drill-bits/wet-drilling" className="text-gray-500 hover:text-gray-700">
                קידוח רטוב
              </Link>
            </li>
            <li>
              <span className="text-gray-500 mx-2">/</span>
            </li>
            <li className="text-gray-700 truncate max-w-xs">{product.name}</li>
          </ol>
        </nav>

        {/* Back button */}
        <div className="mb-6">
          <Link 
            href="/products/diamond-core-drill-bits/wet-drilling" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700"
          >
            <FaChevronLeft className="mr-2" />
            חזרה לכוסות קידוח רטובות
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-lg shadow overflow-hidden mb-4">
              <div className="h-96 bg-gray-200 flex items-center justify-center relative">
                {/* Placeholder for actual image */}
                <div className="text-center">
                  <div className="text-5xl text-gray-400 mb-4">
                    <FaTools />
                  </div>
                  <span className="text-gray-500">תמונת כוס קידוח יהלום {product.diameter}</span>
                </div>
                
                {/* Product badges */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2">
                  {product.discount_price && (
                    <span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-md">
                      מבצע!
                    </span>
                  )}
                  <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-md">
                    במלאי
                  </span>
                </div>
              </div>
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {[0, 1, 2].map((idx) => (
                <div 
                  key={idx} 
                  className={`h-24 bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer border-2 ${selectedImage === idx ? 'border-orange-500' : 'border-transparent'}`}
                  onClick={() => setSelectedImage(idx)}
                >
                  <FaTools className="text-gray-400 text-2xl" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-lg shadow p-6">
              <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
              <p className="text-gray-600 mb-4">{product.description}</p>
              
              {/* Price */}
              <div className="mb-6">
                {product.discount_price ? (
                  <div className="flex items-center">
                    <span className="text-3xl font-bold text-orange-600">{product.discount_price} ₪</span>
                    <span className="text-xl text-gray-500 line-through mr-2">{product.price} ₪</span>
                    <span className="bg-red-100 text-red-800 text-sm px-2 py-1 rounded mr-2">
                      {Math.round(((product.price - product.discount_price) / product.price) * 100)}% הנחה
                    </span>
                  </div>
                ) : (
                  <span className="text-3xl font-bold text-orange-600">{product.price} ₪</span>
                )}
                <p className="text-sm text-gray-500 mt-1">כולל מע"מ</p>
              </div>
              
              {/* Key Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">תכונות עיקריות:</h3>
                <ul className="space-y-2">
                  {product.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 ml-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Specifications */}
              <div className="mb-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex flex-col">
                    <span className="text-gray-600">קוטר:</span>
                    <span className="font-semibold">{product.diameter}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-600">אורך:</span>
                    <span className="font-semibold">{product.length}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-600">חיבור:</span>
                    <span className="font-semibold">{product.thread}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-600">סוג קידוח:</span>
                    <span className="font-semibold">{product.usage_type}</span>
                  </div>
                </div>
              </div>
              
              {/* Add to Cart */}
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button 
                      className="px-3 py-2 text-orange-600 hover:bg-gray-100 rounded-r-md"
                      onClick={() => handleQuantityChange(quantity - 1)}
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <span className="px-4 py-2">{quantity}</span>
                    <button 
                      className="px-3 py-2 text-orange-600 hover:bg-gray-100 rounded-l-md"
                      onClick={() => handleQuantityChange(quantity + 1)}
                      disabled={quantity >= product.stock}
                    >
                      +
                    </button>
                  </div>
                  <span className="text-sm text-gray-600 mr-3">
                    {product.stock} יחידות במלאי
                  </span>
                </div>
                
                <motion.button
                  onClick={handleAddToCart}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 px-4 rounded-md font-medium flex items-center justify-center relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isAddingToCart}
                >
                  {isAddingToCart ? (
                    <div className="flex items-center">
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      מוסיף לעגלה...
                    </div>
                  ) : (
                    <>
                      <FaShoppingCart className="ml-2" ref={cartIconRef} />
                      הוסף לעגלה
                    </>
                  )}
                </motion.button>
              </div>
              
              {/* Delivery Info */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-start mb-3">
                  <FaTruck className="text-gray-500 ml-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">זמן אספקה:</h4>
                    <p className="text-sm text-gray-600">{product.delivery_time}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaShieldAlt className="text-gray-500 ml-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">אחריות:</h4>
                    <p className="text-sm text-gray-600">{product.warranty}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="mb-12 bg-white rounded-lg shadow">
          <div className="flex border-b">
            <button
              className={`px-4 py-3 font-medium ${
                activeTab === 'description'
                  ? 'border-b-2 border-orange-500 text-orange-600'
                  : 'text-gray-600 hover:text-orange-500'
              }`}
              onClick={() => setActiveTab('description')}
            >
              תיאור מפורט
            </button>
            <button
              className={`px-4 py-3 font-medium ${
                activeTab === 'specifications'
                  ? 'border-b-2 border-orange-500 text-orange-600'
                  : 'text-gray-600 hover:text-orange-500'
              }`}
              onClick={() => setActiveTab('specifications')}
            >
              מפרט טכני
            </button>
            <button
              className={`px-4 py-3 font-medium ${
                activeTab === 'uses'
                  ? 'border-b-2 border-orange-500 text-orange-600'
                  : 'text-gray-600 hover:text-orange-500'
              }`}
              onClick={() => setActiveTab('uses')}
            >
              שימושים והמלצות
            </button>
            {(product.videos && product.videos.length > 0) && (
              <button
                className={`px-4 py-3 font-medium ${
                  activeTab === 'videos'
                    ? 'border-b-2 border-orange-500 text-orange-600'
                    : 'text-gray-600 hover:text-orange-500'
                }`}
                onClick={() => setActiveTab('videos')}
              >
                סרטוני הדרכה
              </button>
            )}
          </div>

          <div className="p-6">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <div dangerouslySetInnerHTML={{ __html: product.longDescription }} />
                
                <h3 className="text-xl font-semibold mt-6 mb-4">יתרונות מרכזיים</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheck className="text-green-500 ml-2 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div>
                <ProductSpecifications 
                  groups={[
                    {
                      title: "מידות ומפרט",
                      specs: [
                        { label: "קוטר", value: product.diameter },
                        { label: "אורך כללי", value: product.length },
                        { label: "אורך עבודה", value: product.effective_length },
                        { label: "סוג הברגה", value: product.thread },
                        { label: "מספר סגמנטים", value: product.segments },
                        { label: "גובה סגמנט", value: product.segment_height },
                      ]
                    },
                    {
                      title: "חומרים וטכנולוגיה",
                      specs: [
                        { label: "סוג סגמנט", value: product.segment_type },
                        { label: "טכנולוגיית סגמנט", value: product.segment_technology },
                        { label: "חומר מקדח", value: product.core_material },
                        { label: "מתאים לחומרים", value: product.material },
                        { label: "סוג קידוח", value: product.usage_type },
                      ]
                    },
                    {
                      title: "תאימות ואחריות",
                      specs: [
                        { label: "אחריות", value: product.warranty },
                        ...product.compatible_machines.map(machine => ({ 
                          label: "תאימות מכונות", value: machine
                        }))
                      ]
                    }
                  ]} 
                />

                {product.technical_note && (
                  <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-md">
                    <div className="flex items-start">
                      <FaInfoCircle className="text-blue-500 ml-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">הערה טכנית:</p>
                        <p className="text-sm text-gray-700">{product.technical_note}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'uses' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">שימושים מומלצים</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold mb-3 flex items-center">
                      <FaTools className="ml-2 text-orange-500" />
                      יישומים
                    </h4>
                    <ul className="space-y-2">
                      {product.applications.map((app, index) => (
                        <li key={index} className="flex items-start">
                          <FaCheck className="text-green-500 ml-2 mt-1 flex-shrink-0" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold mb-3 flex items-center">
                      <FaCog className="ml-2 text-orange-500" />
                      אביזרים מומלצים
                    </h4>
                    <ul className="space-y-2">
                      {product.recommended_accessories.map((acc, index) => (
                        <li key={index} className="flex items-start">
                          <FaCheck className="text-green-500 ml-2 mt-1 flex-shrink-0" />
                          <span>{acc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4">טיפים לשימוש מיטבי</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FaCheck className="text-green-500 ml-2 mt-1 flex-shrink-0" />
                      <span>וודאו אספקת מים מספקת בזמן הקידוח למניעת התחממות יתר.</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-green-500 ml-2 mt-1 flex-shrink-0" />
                      <span>מומלץ לקדוח במהירות סיבוב של 600-900 סל"ד לתוצאות מיטביות.</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-green-500 ml-2 mt-1 flex-shrink-0" />
                      <span>בעת קידוח בבטון מזוין, הפעילו לחץ מתון וקבוע ותנו למקדח לעבוד בקצב שלו.</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-green-500 ml-2 mt-1 flex-shrink-0" />
                      <span>לאחר השימוש, נקו היטב את המקדח ואחסנו אותו במקום יבש.</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'videos' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">סרטוני הדרכה</h3>
                {product.videos.map((video, index) => (
                  <div key={index} className="mb-4">
                    <h4 className="font-medium mb-2">{video.title}</h4>
                    <div className="bg-gray-200 h-64 flex items-center justify-center rounded-lg">
                      <span className="text-gray-500">סרטון הדרכה יוצג כאן</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">מוצרים קשורים</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="bg-white rounded-lg shadow overflow-hidden">
                <Link href={relatedProduct.slug}>
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">תמונת מוצר</span>
                  </div>
                </Link>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                    <Link href={relatedProduct.slug} className="hover:text-orange-600">
                      {relatedProduct.name}
                    </Link>
                  </h3>
                  <div className="flex items-center justify-between">
                    {relatedProduct.discount_price ? (
                      <div>
                        <span className="font-bold text-orange-600">{relatedProduct.discount_price} ₪</span>
                        <span className="text-sm font-medium text-gray-500 line-through mr-2">{relatedProduct.price} ₪</span>
                      </div>
                    ) : (
                      <span className="font-bold">{relatedProduct.price} ₪</span>
                    )}
                    <Link
                      href={relatedProduct.slug}
                      className="text-orange-600 hover:text-orange-700"
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