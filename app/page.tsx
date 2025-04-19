'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaChevronLeft, FaCheck, FaTruck, FaShieldAlt, FaHeadset, FaTools, FaWrench, FaCog, FaRuler } from 'react-icons/fa';
import DiamondDrillingGuide from '../components/DiamondDrillingGuide';
import { getFeaturedProducts, productCategories } from '@/app/data/products';

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  
  // Helper function to get category by id
  const getCategoryById = (id: string) => productCategories.find(cat => cat.id === id);
  
  // Categories to display on homepage
  const drillBitsCategory = getCategoryById('diamond-core-drill-bits');
  const sawBladesCategory = getCategoryById('diamond-saw-blades');
  const accessoriesCategory = getCategoryById('accessories');
  
  return (
    <div className="min-h-screen animate-fadeIn">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '24px 24px'
          }} />
        </div>
        
        <div className="container-custom py-20 md:py-28 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-right">
              <span className="inline-block px-4 py-1 rounded-full bg-orange-600 text-white text-sm font-medium mb-4">
                המקצוענים בחרו ב-X-Drill
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                פתרונות מקצועיים<br />
                <span className="text-orange-500">לקידוח יהלום.</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                מגוון רחב של כוסות קידוח, מסורי יהלום ואביזרים נלווים לכל צורך
              </p>
              <div className="flex flex-col sm:flex-row justify-end gap-4">
                <Link
                  href="/products"
                  className="btn btn-primary text-center px-8 py-3 rounded-md font-semibold"
                >
                  צפה בקטלוג המוצרים
                </Link>
                <Link
                  href="/contact"
                  className="btn btn-outline text-center px-8 py-3 rounded-md font-semibold"
                >
                  צור קשר
                </Link>
              </div>
            </div>
            <div className="relative">
              {/* Enhanced image container with better shadows and effects */}
              <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.18)] border border-gray-100/20 transform transition-all duration-500 hover:shadow-[0_20px_50px_rgba(249,_115,_22,_0.25)] hover:-translate-y-1">
                {/* Slightly larger container with enhanced image */}
                <div className="w-full relative" style={{ paddingBottom: "70%" /* Slightly taller for better impact */ }}>
                  <Image 
                    src="/images/banner-photo/1.png" 
                    alt="X-Drill Diamond Drilling Solutions" 
                    fill
                    className="object-cover transition-all duration-700 ease-in-out hover:scale-110 filter hover:brightness-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  
                  {/* Enhanced gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/50 via-gray-800/20 to-transparent z-10 transition-opacity duration-700 ease-in-out hover:opacity-70"></div>
                
                  {/* Improved floating cards */}
                  <div className="absolute bottom-5 left-5 bg-white text-black rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.1)] p-3 max-w-[160px] hidden md:block z-20 transform transition-all duration-500 hover:translate-x-2 hover:shadow-[0_15px_30px_rgba(249,_115,_22,_0.2)]">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-gradient-to-tr from-orange-600 to-orange-400 rounded-full w-8 h-8 flex items-center justify-center text-white shadow-md">
                        <FaCheck className="text-sm" />
                      </div>
                      <span className="font-semibold text-sm">איכות מעולה</span>
                    </div>
                    <p className="text-xs text-gray-600">
                      מוצרים איכותיים מהמובילים בעולם
                    </p>
                  </div>
                  <div className="absolute top-5 right-5 bg-white text-black rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.1)] p-3 max-w-[160px] hidden md:block z-20 transform transition-all duration-500 hover:-translate-x-2 hover:shadow-[0_15px_30px_rgba(249,_115,_22,_0.2)]">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-gradient-to-tr from-orange-600 to-orange-400 rounded-full w-8 h-8 flex items-center justify-center text-white shadow-md">
                        <FaTools className="text-sm" />
                      </div>
                      <span className="font-semibold text-sm">תמיכה מקצועית</span>
                    </div>
                    <p className="text-xs text-gray-600">
                      ייעוץ וליווי אישי לפני ואחרי הרכישה
                    </p>
                  </div>

                  {/* Subtle edge glow effect */}
                  <div className="absolute inset-0 pointer-events-none rounded-xl opacity-0 hover:opacity-60 transition-opacity duration-700 z-10" 
                    style={{ 
                      boxShadow: "inset 0 0 30px rgba(249, 115, 22, 0.3)",
                    }}>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-6 border-b border-gray-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center justify-center md:justify-end gap-2 py-3">
              <span className="font-medium">משלוח חינם מעל 500 ₪</span>
              <FaTruck className="text-orange-600 text-xl" />
            </div>
            <div className="flex items-center justify-center gap-2 py-3">
              <span className="font-medium">אחריות על כל המוצרים</span>
              <FaShieldAlt className="text-orange-600 text-xl" />
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 py-3">
              <span className="font-medium">תמיכה טלפונית 24/7</span>
              <FaHeadset className="text-orange-600 text-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">קטגוריות מוצרים</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">בחרו מבין מגוון הקטגוריות המקצועיות שלנו את הציוד המתאים לצרכים שלכם</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Diamond Core Drill Bits */}
            <Link 
              href={`/products/${drillBitsCategory?.slug}`}
              className="group block bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="h-56 bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  {drillBitsCategory?.image ? (
                    <Image 
                      src={drillBitsCategory.image}
                      alt={drillBitsCategory.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="text-5xl text-gray-400">
                      <FaTools />
                    </div>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-medium transition-all duration-300 group-hover:bg-orange-200">
                    מגוון קטרים מ-67 עד 200 מ"מ
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-4 transition-colors duration-300 group-hover:text-orange-600">{drillBitsCategory?.name}</h3>
                <p className="text-gray-600 mb-4">
                  {drillBitsCategory?.description}
                </p>
                <div className="text-orange-600 font-semibold flex items-center justify-end group-hover:text-orange-700">
                  צפה במוצרים
                  <FaChevronLeft className="mr-2 transition-transform duration-300 group-hover:translate-x-[-4px]" />
                </div>
              </div>
            </Link>

            {/* Diamond Saw Blades */}
            <Link 
              href={`/products/${sawBladesCategory?.slug}`}
              className="group block bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="h-56 bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  {sawBladesCategory?.image ? (
                    <Image 
                      src={sawBladesCategory.image}
                      alt={sawBladesCategory.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="text-5xl text-gray-400">
                      <FaCog />
                    </div>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-medium transition-all duration-300 group-hover:bg-orange-200">
                    לחיתוך בטון, אבן וגרניט
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-4 transition-colors duration-300 group-hover:text-orange-600">{sawBladesCategory?.name}</h3>
                <p className="text-gray-600 mb-4">
                  {sawBladesCategory?.description}
                </p>
                <div className="text-orange-600 font-semibold flex items-center justify-end group-hover:text-orange-700">
                  צפה במוצרים
                  <FaChevronLeft className="mr-2 transition-transform duration-300 group-hover:translate-x-[-4px]" />
                </div>
              </div>
            </Link>

            {/* Accessories */}
            <Link 
              href={`/products/${accessoriesCategory?.slug}`}
              className="group block bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="h-56 bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  {accessoriesCategory?.image ? (
                    <Image 
                      src={accessoriesCategory.image}
                      alt={accessoriesCategory.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="text-5xl text-gray-400">
                      <FaWrench />
                    </div>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-medium transition-all duration-300 group-hover:bg-orange-200">
                    פתרונות מושלמים
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-4 transition-colors duration-300 group-hover:text-orange-600">{accessoriesCategory?.name}</h3>
                <p className="text-gray-600 mb-4">
                  {accessoriesCategory?.description}
                </p>
                <div className="text-orange-600 font-semibold flex items-center justify-end group-hover:text-orange-700">
                  צפה במוצרים
                  <FaChevronLeft className="mr-2 transition-transform duration-300 group-hover:translate-x-[-4px]" />
                </div>
              </div>
            </Link>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/products" className="btn btn-outline inline-flex items-center">
              צפה בכל המוצרים
              <FaChevronLeft className="mr-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Diamond Drilling Guide */}
      <DiamondDrillingGuide />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">למה לבחור ב-X-Drill?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              אנחנו מציעים את הפתרונות המקצועיים והאמינים ביותר בתחום קידוח היהלום
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-gray-50 rounded-lg p-8 hover:shadow-md transition-shadow duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-orange-600 text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">איכות מעולה</h3>
              <p className="text-gray-600">
                אנו מציעים מוצרים איכותיים מהמובילים בעולם בתחום הקידוח, עם אורך חיים מקסימלי וביצועים מעולים
              </p>
            </div>
            <div className="text-center bg-gray-50 rounded-lg p-8 hover:shadow-md transition-shadow duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-orange-600 text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">ביצועים מעולים</h3>
              <p className="text-gray-600">
                כל המוצרים שלנו עוברים בדיקות קפדניות כדי להבטיח ביצועים יוצאי דופן בכל משימת קידוח וחיתוך
              </p>
            </div>
            <div className="text-center bg-gray-50 rounded-lg p-8 hover:shadow-md transition-shadow duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-orange-600 text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">שירות מקצועי</h3>
              <p className="text-gray-600">
                צוות המומחים שלנו זמין לענות על כל השאלות ולסייע לכם בבחירת המוצרים המתאימים לצרכים שלכם
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">המוצרים הפופולריים שלנו</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              המוצרים האהובים ביותר על הלקוחות שלנו
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {featuredProducts.slice(0, 10).map(product => (
              <Link key={product.id} href={`/products/${product.slug}`} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
                <div className="relative">
                  {product.discountPrice && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full z-10">
                      מבצע!
                    </div>
                  )}
                  <div className="h-32 bg-gray-100 flex items-center justify-center overflow-hidden">
                    {product.mainImage ? (
                      <Image 
                        src={product.mainImage} 
                        alt={product.name}
                        width={150}
                        height={100}
                        className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-110"
                      />
                    ) : product.images && product.images.length > 0 ? (
                      <Image 
                        src={product.images[0]} // Fallback to first image if mainImage is missing
                        alt={product.name}
                        width={150}
                        height={100}
                        className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-110"
                      />
                    ) : (
                      <div className="text-3xl text-gray-400">
                        {product.type === 'diamond-core-drill-bit' ? (
                          <FaTools />
                        ) : product.type === 'saw-blade' ? (
                          <FaCog />
                        ) : (
                          <FaWrench />
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-medium mb-2 line-clamp-2 h-10 transition-colors duration-300 group-hover:text-orange-600">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div>
                      {product.discountPrice ? (
                        <div className="flex flex-col items-start">
                          <span className="text-xs text-gray-500 line-through">{product.price} ₪</span>
                          <span className="text-sm font-bold text-orange-600">{product.discountPrice} ₪</span>
                        </div>
                      ) : (
                        <span className="text-sm font-bold">{product.price} ₪</span>
                      )}
                    </div>
                    <div className="text-xs bg-orange-100 text-orange-600 font-medium px-2 py-1 rounded">
                      פרטים
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/products" className="btn btn-outline inline-flex items-center">
              צפה בכל המוצרים
              <FaChevronLeft className="mr-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">מחפשים פתרון מותאם אישית?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              צוות המומחים שלנו ישמח לסייע לכם בבחירת הציוד המתאים ביותר לצרכים שלכם
            </p>
          </div>
          <div className="flex justify-center">
            <Link href="/contact" className="btn btn-primary px-8 py-3 rounded-md font-semibold">
              צרו קשר עכשיו
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
