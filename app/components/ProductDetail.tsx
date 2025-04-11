'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { FaChevronLeft, FaShoppingCart, FaTruck, FaShieldAlt, FaInfoCircle, FaExchangeAlt, FaCheck, FaPrint, FaShare, FaDownload, FaRuler, FaCog, FaTools, FaHeadset } from 'react-icons/fa';
import Image from 'next/image';
import { useCart } from '../../components/CartContext';
import { DrillBitProduct, RelatedProduct } from '../../lib/products/types';

interface ProductDetailProps {
  product: DrillBitProduct;
  relatedProducts: RelatedProduct[];
  categoryPath: string;
  categoryName: string;
}

export default function ProductDetail({ product, relatedProducts, categoryPath, categoryName }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const cartIconRef = useRef(null);
  
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
            <li className="hidden sm:block">
              <Link href="/products/diamond-core-drill-bits" className="text-gray-500 hover:text-gray-700">
                כוסות קידוח יהלום
              </Link>
            </li>
            <li className="hidden sm:block mx-2 text-gray-500">/</li>
            <li>
              <Link href={categoryPath} className="text-gray-500 hover:text-gray-700">
                {categoryName}
              </Link>
            </li>
            <li className="mx-2 text-gray-500">/</li>
            <li className="text-gray-700 truncate max-w-[150px] sm:max-w-xs">{product.name}</li>
          </ol>
        </nav>

        {/* Back button - mobile friendly */}
        <div className="mb-4 md:mb-6">
          <Link 
            href={categoryPath} 
            className="inline-flex items-center text-orange-600 hover:text-orange-700"
          >
            <span className="rtl-flip">
              <FaChevronLeft className="mr-2" />
            </span>
            חזרה ל{categoryName}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Product Images - mobile optimized */}
          <div className="order-1">
            <div className="bg-white rounded-lg shadow overflow-hidden mb-4">
              <div className="h-64 sm:h-80 md:h-96 bg-gray-200 flex items-center justify-center relative product-image">
                {/* Placeholder for actual image */}
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl text-gray-400 mb-4">
                    <FaTools />
                  </div>
                  <span className="text-gray-500">תמונת כוס קידוח יהלום {product.diameter}</span>
                </div>
                
                {/* Product badges - mobile friendly */}
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex flex-col space-y-1 sm:space-y-2">
                  {product.discount_price && (
                    <span className="bg-red-500 text-white text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 rounded-md">
                      מבצע!
                    </span>
                  )}
                  <span className="bg-green-500 text-white text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 rounded-md">
                    במלאי
                  </span>
                </div>
              </div>
            </div>

            {/* Thumbnail images */}
            <div className="grid grid-cols-3 gap-2">
              {product.images.map((img, index) => (
                <button 
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`bg-white rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-orange-500' : 'border-transparent'
                  }`}
                >
                  <div className="h-24 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 text-xs">תמונה {index + 1}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Quick action buttons */}
            <div className="flex justify-around mt-4 text-gray-500">
              <button 
                onClick={handlePrintPage}
                className="flex flex-col items-center text-sm hover:text-orange-600"
              >
                <FaPrint className="text-xl mb-1" />
                <span>הדפסה</span>
              </button>
              <button 
                onClick={handleShare}
                className="flex flex-col items-center text-sm hover:text-orange-600"
              >
                <FaShare className="text-xl mb-1" />
                <span>שיתוף</span>
              </button>
              <Link 
                href="#"
                className="flex flex-col items-center text-sm hover:text-orange-600"
              >
                <FaDownload className="text-xl mb-1" />
                <span>מפרט טכני</span>
              </Link>
            </div>
          </div>

          {/* Product Info */}
          <div className="order-2">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-right">
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <p className="text-gray-600 mb-2">{product.nameEn}</p>
                <p className="text-gray-600 mb-6">{product.description}</p>

                {/* Technical specifications */}
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
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
                        <span className="font-semibold">אורך אפקטיבי:</span> {product.effective_length}
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
                        <span className="font-semibold">גובה סגמנט:</span> {product.segment_height}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold">סוג סגמנט:</span> {product.segment_type}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold">סוג שימוש:</span> {product.usage_type}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Price and add to cart */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                  <div className="flex flex-col mb-4 md:mb-0">
                    {product.discount_price ? (
                      <>
                        <div className="flex items-center">
                          <div className="text-2xl font-bold text-orange-600">{product.discount_price} ₪</div>
                          <div className="text-lg text-gray-400 line-through mr-2">{product.price} ₪</div>
                        </div>
                        <span className="text-green-600 text-sm font-medium">חסכון של {product.price - (product.discount_price || 0)} ₪</span>
                      </>
                    ) : (
                      <div className="text-2xl font-bold text-orange-600">{product.price} ₪</div>
                    )}
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
                
                {/* Additional info */}
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

                {/* Key benefits */}
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <h3 className="text-lg font-semibold mb-2">יתרונות מרכזיים</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <FaCheck className="text-green-500 ml-2 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
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
                activeTab === 'specs' 
                  ? 'border-orange-600 text-orange-600' 
                  : 'border-transparent hover:border-gray-300 text-gray-600'
              }`}
              onClick={() => setActiveTab('specs')}
            >
              מפרט מלא
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
              <div dangerouslySetInnerHTML={{ __html: product.longDescription }} />
            )}
            {activeTab === 'specs' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">נתונים פיזיים</h3>
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 font-medium">קוטר חיצוני</td>
                        <td className="py-2">{product.diameter}</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 font-medium">אורך כולל</td>
                        <td className="py-2">{product.length}</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 font-medium">אורך אפקטיבי</td>
                        <td className="py-2">{product.effective_length}</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 font-medium">סוג הברגה</td>
                        <td className="py-2">{product.thread}</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 font-medium">חומר ליבה</td>
                        <td className="py-2">{product.core_material}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">נתוני סגמנט</h3>
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 font-medium">מספר סגמנטים</td>
                        <td className="py-2">{product.segments}</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 font-medium">גובה סגמנט</td>
                        <td className="py-2">{product.segment_height}</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 font-medium">סוג סגמנט</td>
                        <td className="py-2">{product.segment_type}</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 font-medium">טכנולוגיית סגמנט</td>
                        <td className="py-2">{product.segment_technology}</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 font-medium">שימוש ייעודי</td>
                        <td className="py-2">{product.material}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            {activeTab === 'applications' && (
              <div>
                <h3 className="text-lg font-semibold mb-3">שימושים מומלצים</h3>
                <ul className="list-disc pr-5 mb-4 space-y-1">
                  {product.applications.map((app, index) => (
                    <li key={index}>{app}</li>
                  ))}
                </ul>

                <h3 className="text-lg font-semibold mb-3 mt-6">מכונות תואמות</h3>
                <ul className="list-disc pr-5 mb-4 space-y-1">
                  {product.compatible_machines.map((machine, index) => (
                    <li key={index}>{machine}</li>
                  ))}
                </ul>

                <div className="bg-blue-50 rounded-lg p-4 mt-4 border border-blue-100">
                  <div className="flex items-start">
                    <FaInfoCircle className="text-blue-500 ml-3 mt-1" />
                    <div>
                      <h4 className="font-semibold">הערה טכנית</h4>
                      <p>{product.technical_note}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'features' && (
              <div>
                <h3 className="text-lg font-semibold mb-3">תכונות מרכזיות</h3>
                <ul className="list-disc pr-5 mb-4 space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <h3 className="text-lg font-semibold mb-3 mt-6">אביזרים מומלצים</h3>
                <ul className="list-disc pr-5 mb-4 space-y-1">
                  {product.recommended_accessories.map((acc, index) => (
                    <li key={index}>{acc}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold mb-6">מוצרים דומים</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="bg-white rounded-lg shadow overflow-hidden">
                <Link href={relatedProduct.slug}>
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">תמונת מוצר</span>
                  </div>
                </Link>
                <div className="p-4">
                  <h3 className="text-md font-semibold mb-2 h-12 overflow-hidden">
                    <Link href={relatedProduct.slug} className="hover:text-orange-600">
                      {relatedProduct.name}
                    </Link>
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">
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
                      className="bg-orange-600 hover:bg-orange-700 text-white px-3 py-1 rounded-md text-sm"
                    >
                      פרטים
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer service section */}
        <div className="bg-white rounded-lg shadow p-6 mt-8">
          <h2 className="text-2xl font-bold mb-6 text-center">שירות לקוחות זמין ומקצועי</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <FaHeadset className="text-orange-600 text-2xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2">צוות מקצועי זמין</h3>
              <p className="text-gray-600">צוות המומחים שלנו זמין לענות על כל שאלה ולסייע בבחירת המוצר המתאים לצרכים שלכם</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <FaTools className="text-orange-600 text-2xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2">ייעוץ טכני</h3>
              <p className="text-gray-600">מתלבטים? מהנדסי השטח שלנו יוכלו לסייע לכם בבחירת הציוד המתאים לפרויקט שלכם</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <FaShieldAlt className="text-orange-600 text-2xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2">אחריות מלאה</h3>
              <p className="text-gray-600">כל המוצרים שלנו מגיעים עם אחריות יצרן מלאה ותמיכה טכנית לאורך כל חיי המוצר</p>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <Link href="/contact" className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-6 rounded-lg inline-flex items-center">
              יצירת קשר עם המומחים שלנו
              <FaChevronLeft className="mr-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 