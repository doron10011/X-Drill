'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft } from '@react-icons/all-files/fa/FaArrowLeft';
import { FaCheck } from '@react-icons/all-files/fa/FaCheck';
import { FaTruck } from '@react-icons/all-files/fa/FaTruck';
import { FaShieldAlt } from '@react-icons/all-files/fa/FaShieldAlt';
import { FaHeadset } from '@react-icons/all-files/fa/FaHeadset';

export default function Home() {
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
                קידוח מדויק.<br />
                <span className="text-orange-500">ביצועים חזקים.</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                כלי קידוח יהלום מקצועיים לקבלנים ואנשי מקצוע
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
              <div className="bg-gray-800 rounded-lg h-72 md:h-96 flex items-center justify-center p-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-bl from-orange-600/20 to-transparent"></div>
                <div className="relative z-10 text-center">
                  {/* Placeholder for hero image */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-gray-500 text-lg">תמונת כלי קידוח יהלום</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white text-black rounded-lg shadow-xl p-4 w-40 hidden md:block">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center text-white">
                    <FaCheck />
                  </div>
                  <span className="font-semibold">איכות מעולה</span>
                </div>
                <p className="text-sm text-gray-600">
                  מוצרים איכותיים מהמובילים בעולם
                </p>
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
            <div className="product-card group">
              <div className="h-56 bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500">תמונת כוסות קידוח יהלום</span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-medium">
                    מגוון גדלים
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-4">כוסות קידוח יהלום</h3>
                <p className="text-gray-600 mb-4">
                  כוסות קידוח מקצועיות בקטרים שונים, מתאימות לקידוח רטוב ויבש ולמגוון סוגי משטחים
                </p>
                <Link
                  href="/products/diamond-core-drill-bits"
                  className="text-orange-600 hover:text-orange-700 font-semibold flex items-center justify-end group-hover:font-bold"
                >
                  צפה במוצרים
                  <FaArrowLeft className="mr-2 rtl-flip" />
                </Link>
              </div>
            </div>

            {/* Diamond Saw Blades */}
            <div className="product-card group">
              <div className="h-56 bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500">תמונת מסורי יהלום</span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-medium">
                    חיתוך מדויק
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-4">מסורי יהלום</h3>
                <p className="text-gray-600 mb-4">
                  מסורים מקצועיים לחיתוך בטון, בטון מזוין וחומרים קשים עם דיוק וביצועים מעולים
                </p>
                <Link
                  href="/products/diamond-saw-blades"
                  className="text-orange-600 hover:text-orange-700 font-semibold flex items-center justify-end group-hover:font-bold"
                >
                  צפה במוצרים
                  <FaArrowLeft className="mr-2 rtl-flip" />
                </Link>
              </div>
            </div>

            {/* Accessories */}
            <div className="product-card group">
              <div className="h-56 bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500">תמונת אביזרים נלווים</span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-medium">
                    פתרונות מושלמים
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-4">אביזרים נלווים</h3>
                <p className="text-gray-600 mb-4">
                  אביזרים משלימים לכלי הקידוח: מתאמים, מקדחים ואביזרי עזר שיעזרו לכם לבצע את העבודה בצורה מושלמת
                </p>
                <Link
                  href="/products/accessories"
                  className="text-orange-600 hover:text-orange-700 font-semibold flex items-center justify-end group-hover:font-bold"
                >
                  צפה במוצרים
                  <FaArrowLeft className="mr-2 rtl-flip" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/products" className="btn btn-outline inline-block">
              צפה בכל המוצרים
            </Link>
          </div>
        </div>
      </section>

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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="product-card">
                <div className="relative">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">תמונת מוצר {item}</span>
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded">מוצר חם</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-2">כוס קידוח יהלום {item * 25} מ״מ</h3>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-orange-600 font-bold">₪{item * 100 + 99}</span>
                    <div className="text-sm text-gray-500">במלאי</div>
                  </div>
                  <Link 
                    href={`/products/${item}`} 
                    className="btn btn-primary w-full text-center mt-3"
                  >
                    לפרטים נוספים
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link href="/products" className="btn btn-outline">
              צפה בכל המוצרים
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">הלקוחות שלנו ממליצים</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              מה אומרים עלינו אנשי המקצוע שעובדים עם המוצרים שלנו
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "יוסי כהן", role: "קבלן שיפוצים", quote: "כוסות הקידוח מדויקות ועמידות. עובד איתן כבר שנתיים ועדיין כמו חדשות." },
              { name: "דני לוי", role: "אינסטלטור", quote: "השירות מעולה והמוצרים ברמה גבוהה. ממליץ בחום לכל איש מקצוע." },
              { name: "אבי גולן", role: "מנהל פרויקטים", quote: "המוצרים של X-Drill חסכו לי זמן וכסף. ההשקעה משתלמת בטווח הארוך." }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-orange-500">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 text-right">"{testimonial.quote}"</p>
                <div className="flex items-center justify-end">
                  <div className="text-right">
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                  <div className="ml-4 w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center ml-3">
                    <span className="text-xs text-gray-500">תמונה</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">צריכים עזרה עם בחירת הציוד המתאים?</h2>
            <p className="text-xl text-gray-300 mb-8">
              הצוות המקצועי שלנו כאן כדי לעזור לכם למצוא את הפתרון המושלם
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="btn bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 font-semibold"
              >
                צרו קשר עכשיו
              </Link>
              <Link 
                href="/products" 
                className="btn bg-transparent border border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 font-semibold"
              >
                לקטלוג המוצרים
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
