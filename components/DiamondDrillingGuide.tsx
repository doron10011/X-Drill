'use client';

import Link from 'next/link';
import { FaInfoCircle, FaTools, FaCog, FaRuler, FaWrench, FaChevronLeft } from 'react-icons/fa';
import { productCategories } from '@/app/data/products';

export default function DiamondDrillingGuide() {
  // קישור לקטגוריות על פי ה-ID שלהן
  const getDrillBitsCategory = () => 
    productCategories.find(cat => cat.id === 'diamond-core-drill-bits');
  
  const getSawBladesCategory = () => 
    productCategories.find(cat => cat.id === 'diamond-saw-blades');
    
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">המדריך השלם לכלי קידוח יהלום</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            כל מה שצריך לדעת על כלי קידוח יהלום מקצועיים - סוגים, טכנולוגיות, שימושים ועצות מקצועיות
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* כוסות קידוח רטובות */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="h-56 bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-5xl text-gray-400">
                  <FaTools />
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">כוסות קידוח יהלום לקידוח רטוב</h3>
              <p className="text-gray-600 mb-4">
                כוסות המיועדות לעבודה עם מים, המסייעות בשיפור הביצועים, הארכת חיי הכלי והפחתת אבק. אידיאליות לקידוח בבטון, בטון מזוין וחומרים קשים.
              </p>
              <div className="mb-4 space-y-2">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">קטרים נפוצים:</span> 67 מ"מ, 72 מ"מ, 77 מ"מ, 82 מ"מ, 91 מ"מ, 102 מ"מ, 132 מ"מ, 162 מ"מ, 200 מ"מ
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">אורכים נפוצים:</span> עד 400 מ"מ
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">סוגי חיבורים:</span> 1-1/4" UNC, 1/2" BSP, M14
                </p>
              </div>
              <Link
                href={`/products/${getDrillBitsCategory()?.slug}`}
                className="text-orange-600 hover:text-orange-700 font-semibold flex items-center justify-end group-hover:font-bold"
              >
                למידע נוסף
                <FaChevronLeft className="mr-2" />
              </Link>
            </div>
          </div>

          {/* כוסות קידוח יבשות */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="h-56 bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-5xl text-gray-400">
                  <FaTools />
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">כוסות קידוח יהלום לקידוח יבש/ואקום</h3>
              <p className="text-gray-600 mb-4">
                כוסות המיועדות לשימוש ללא מים, עם תכונות לניהול חום ואבק. מתאימות לעבודה עם מערכות שאיבת אבק, אידיאליות לעבודה בחללים מוגמרים.
              </p>
              <div className="mb-4 space-y-2">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">קטרים נפוצים:</span> 80 מ"מ, 85 מ"מ, 90 מ"מ, 95 מ"מ, 100 מ"מ, 105 מ"מ
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">יתרונות:</span> עבודה נקייה, ללא צורך במים, מתאים לעבודה פנים
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">סוגי חיבורים:</span> BSP 1/2", M14
                </p>
              </div>
              <Link
                href={`/products/${getDrillBitsCategory()?.slug}`}
                className="text-orange-600 hover:text-orange-700 font-semibold flex items-center justify-end group-hover:font-bold"
              >
                למידע נוסף
                <FaChevronLeft className="mr-2" />
              </Link>
            </div>
          </div>

          {/* מסורי יהלום */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="h-56 bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-5xl text-gray-400">
                  <FaCog />
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">מסורי יהלום</h3>
              <p className="text-gray-600 mb-4">
                להבי מסור המיועדים לחיתוך בטון, בטון מזוין, אבן, גרניט וחומרי בניין קלים. מאפשרים חיתוך מדויק ונקי במגוון משטחים.
              </p>
              <div className="mb-4 space-y-2">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">לבטון ובטון מזוין:</span> קטרים 200-400 מ"מ
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">לאבן וגרניט:</span> קטרים 150-300 מ"מ
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">קוטרי קדח נפוצים:</span> 22.23 מ"מ, 25.4 מ"מ
                </p>
              </div>
              <Link
                href={`/products/${getSawBladesCategory()?.slug}`}
                className="text-orange-600 hover:text-orange-700 font-semibold flex items-center justify-end group-hover:font-bold"
              >
                למידע נוסף
                <FaChevronLeft className="mr-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* מידע נוסף - אביזרים ועזרים */}
        <div className="bg-white rounded-lg shadow overflow-hidden p-6 mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">אביזרים חיוניים לעבודה מקצועית</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start">
              <div className="mr-4 bg-orange-100 rounded-full p-3 text-orange-600">
                <FaWrench className="text-xl" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">מתאמי הברגות</h4>
                <p className="text-sm text-gray-600">
                  מאפשרים חיבור בין כוסות קידוח למכונות עם סוגי הברגה שונים.
                  סוגים נפוצים: UNC ל-BSP, UNC ל-M14, מתאמים למקדחות.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 bg-orange-100 rounded-full p-3 text-orange-600">
                <FaRuler className="text-xl" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">מאריכי קידוח</h4>
                <p className="text-sm text-gray-600">
                  מגדילים את עומק הקידוח האפשרי. זמינים באורכים שונים כגון 250 מ"מ, 300 מ"מ ו-400 מ"מ.
                  חיוניים לקידוח דרך קירות עבים.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 bg-orange-100 rounded-full p-3 text-orange-600">
                <FaTools className="text-xl" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">משאבות מים ומערכות איסוף</h4>
                <p className="text-sm text-gray-600">
                  משאבות חשמליות, מיכלי לחץ ידני ומערכות לאיסוף מים בזמן קידוח רטוב.
                  מסייעים בשמירה על סביבת עבודה נקייה.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* טיפים מקצועיים */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start">
            <FaInfoCircle className="text-blue-500 ml-4 mt-1 text-2xl flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-4">טיפים מקצועיים לבחירת כלי קידוח יהלום</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-bold ml-2">1.</span>
                  <span>בחרו בכוס קידוח בקוטר המתאים בדיוק לצורך שלכם - הקטרים הנפוצים ביותר הם 67 מ"מ, 82 מ"מ ו-102 מ"מ.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold ml-2">2.</span>
                  <span>ודאו את סוג החיבור של המכונה שלכם (1-1/4" UNC, 1/2" BSP או M14) ובחרו כוס מתאימה או השתמשו במתאם.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold ml-2">3.</span>
                  <span>לקידוח בבטון מזוין, בחרו בכוסות עם סגמנטים מיוחדים לחיתוך דרך ברזל זיון כמו טכנולוגיית Arix.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold ml-2">4.</span>
                  <span>עבור עבודות פנים, שקלו להשתמש בכוסות קידוח יבשות עם מערכת שאיבת אבק למניעת לכלוך ואבק.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold ml-2">5.</span>
                  <span>לקידוח רטוב, תמיד השתמשו באספקת מים מספקת למניעת התחממות יתר והארכת חיי הכלי.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 