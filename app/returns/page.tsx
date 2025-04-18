'use client';

import Link from 'next/link';
import { FaExchangeAlt, FaUndo, FaCreditCard, FaInfoCircle, FaBoxOpen, FaShippingFast, FaCalendarAlt } from 'react-icons/fa';

export default function ReturnsPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 animate-fadeIn">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">מדיניות החזרות והחלפות</h1>
            <p className="text-xl text-gray-300">
              מידע מפורט על החזרת מוצרים, החלפות וזיכויים
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Breadcrumb */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center">
            <li>
              <Link href="/" className="text-gray-500 hover:text-orange-600">
                דף הבית
              </Link>
            </li>
            <li>
              <span className="text-gray-500 mx-2">/</span>
            </li>
            <li className="text-gray-700 font-medium">מדיניות החזרות והחלפות</li>
          </ol>
        </nav>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <div className="prose max-w-none">
              <div className="flex items-center gap-3 mb-6">
                <FaExchangeAlt className="text-orange-600 text-3xl" />
                <h2 className="text-3xl font-bold text-gray-800 m-0">מדיניות החזרות והחלפות של X-Drill</h2>
              </div>
              
              <p className="text-gray-600 mb-6">
                עדכון אחרון: 1 ביוני 2023
              </p>

              <p className="text-gray-700 mb-8">
                אנו ב-X-Drill מחויבים לשביעות רצון מלאה של לקוחותינו. אנו מבינים שלעתים מוצר עשוי שלא להתאים לצרכיכם. מסמך זה מפרט את מדיניות ההחזרות וההחלפות שלנו כדי להבטיח לכם חוויית קנייה ללא דאגות.
              </p>

              <div className="bg-blue-50 border-r-4 border-blue-500 p-4 mb-8">
                <p className="text-blue-700 mb-0">
                  <FaInfoCircle className="inline-block mr-2" />
                  <strong>שימו לב:</strong> מדיניות זו חלה על כל המוצרים הנמכרים באתר X-Drill, אלא אם צוין אחרת בדף המוצר.
                </p>
              </div>

              <section className="border-b border-gray-200 pb-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaCalendarAlt className="text-orange-600 text-xl" />
                  <h3 className="text-2xl font-semibold text-gray-800 m-0">מסגרת זמנים להחזרות</h3>
                </div>
                
                <p className="text-gray-700 mb-4">
                  בהתאם לחוק הגנת הצרכן, אנו מאפשרים החזרת מוצרים בתוך:
                </p>

                <ul className="list-disc list-inside text-gray-700 mb-4 pr-6">
                  <li><strong>14 ימים</strong> מיום קבלת המוצר עבור רכישות רגילות</li>
                  <li><strong>14 ימים</strong> מיום קבלת המוצר עבור רכישות באתר האינטרנט (מכח חוק הגנת הצרכן)</li>
                  <li><strong>14 ימים</strong> מגילוי פגם במוצר (עבור מוצרים פגומים)</li>
                </ul>

                <p className="text-gray-700">
                  <strong>שימו לב:</strong> על המוצר להיות במצבו המקורי, ללא שימוש, עם האריזה המקורית והאביזרים הנלווים כדי להיות זכאי להחזר מלא.
                </p>
              </section>

              <section className="border-b border-gray-200 pb-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaUndo className="text-orange-600 text-xl" />
                  <h3 className="text-2xl font-semibold text-gray-800 m-0">תנאי החזרת מוצרים</h3>
                </div>
                
                <p className="text-gray-700 mb-4">
                  על מנת לקבל החזר כספי מלא, המוצר המוחזר חייב לעמוד בתנאים הבאים:
                </p>

                <ul className="list-disc list-inside text-gray-700 mb-4 pr-6">
                  <li>המוצר חייב להיות במצב חדש ולא משומש</li>
                  <li>כל התוויות והמדבקות המקוריות חייבות להישאר מחוברות</li>
                  <li>המוצר חייב להיות באריזה המקורית, כולל הוראות שימוש, אחריות ואביזרים נלווים</li>
                  <li>יש לצרף את חשבונית הרכישה או הוכחת קנייה אחרת</li>
                </ul>

                <div className="bg-orange-50 border-r-4 border-orange-500 p-4 mb-4">
                  <p className="text-orange-700 mb-0">
                    <strong>חריגים:</strong> המוצרים הבאים אינם ניתנים להחזרה אלא במקרה של פגם:
                  </p>
                  <ul className="list-disc list-inside text-orange-700 mb-0 pr-6 mt-2">
                    <li>מוצרים שיוצרו בהתאמה אישית</li>
                    <li>מוצרים שנפתחו ונעשה בהם שימוש מסיבות היגיינה ובטיחות</li>
                    <li>מוצרים בהזמנה מיוחדת שסומנו ככאלה בדף המוצר</li>
                    <li>מוצרים שסומנו כ"מכירה סופית" או "ללא החזרות"</li>
                  </ul>
                </div>
              </section>

              <section className="border-b border-gray-200 pb-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaBoxOpen className="text-orange-600 text-xl" />
                  <h3 className="text-2xl font-semibold text-gray-800 m-0">מוצרים פגומים או שגויים</h3>
                </div>
                
                <p className="text-gray-700 mb-4">
                  אם קיבלתם מוצר פגום או שונה מזה שהזמנתם, אנו מתחייבים לטפל בבעיה במהירות האפשרית:
                </p>

                <ul className="list-disc list-inside text-gray-700 mb-4 pr-6">
                  <li>יש ליצור קשר עם שירות הלקוחות שלנו תוך 48 שעות מרגע קבלת המוצר</li>
                  <li>אנו נארגן איסוף של המוצר הפגום או השגוי על חשבוננו</li>
                  <li>תוכלו לבחור בין החלפה למוצר זהה, מוצר חלופי בערך דומה, או החזר כספי מלא</li>
                </ul>

                <p className="text-gray-700">
                  אנו עשויים לבקש תמונות של המוצר הפגום כדי לסייע בתהליך ולשפר את בקרת האיכות שלנו.
                </p>
              </section>

              <section className="border-b border-gray-200 pb-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaShippingFast className="text-orange-600 text-xl" />
                  <h3 className="text-2xl font-semibold text-gray-800 m-0">תהליך החזרת מוצר</h3>
                </div>
                
                <p className="text-gray-700 mb-4">
                  להחזרת מוצר, אנא פעלו לפי השלבים הבאים:
                </p>

                <ol className="list-decimal list-inside text-gray-700 mb-6 pr-6">
                  <li>צרו קשר עם שירות הלקוחות שלנו בטלפון 02-1234567 או באימייל returns@xdrill.co.il לקבלת מספר אישור החזרה (RMA)</li>
                  <li>מלאו את טופס ההחזרה שתקבלו באימייל (או הורידו אותו מהאתר)</li>
                  <li>ארזו את המוצר באריזה המקורית או באריזה חלופית מתאימה</li>
                  <li>צרפו את טופס ההחזרה, חשבונית הרכישה ומספר ה-RMA</li>
                  <li>שלחו את החבילה לכתובת שתימסר לכם על ידי נציג שירות הלקוחות</li>
                </ol>

                <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">אפשרויות החזרה:</h4>
                  <p className="text-gray-700 mb-2"><strong>משלוח חזרה:</strong> באחריות הלקוח, אלא אם מדובר במוצר פגום</p>
                  <p className="text-gray-700 mb-0"><strong>החזרה בחנות:</strong> ניתן להחזיר את המוצר ישירות למחסן שלנו בכתובת רחוב האומן 17, אזור תעשייה תלפיות, ירושלים (בימים א'-ה', 9:00-17:00)</p>
                </div>

                <p className="text-gray-700">
                  עלות המשלוח עבור החזרות רגילות היא באחריות הלקוח, אלא אם מצוין אחרת. במקרה של מוצר פגום או שגוי, אנו נישא בעלויות המשלוח.
                </p>
              </section>

              <section className="border-b border-gray-200 pb-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaCreditCard className="text-orange-600 text-xl" />
                  <h3 className="text-2xl font-semibold text-gray-800 m-0">החזרים כספיים והחלפות</h3>
                </div>
                
                <p className="text-gray-700 mb-4">
                  לאחר אישור ההחזרה, אנו מציעים את האפשרויות הבאות:
                </p>

                <ul className="list-disc list-inside text-gray-700 mb-4 pr-6">
                  <li><strong>החזר כספי:</strong> יבוצע באמצעי התשלום המקורי בו בוצעה הרכישה בתוך 7-10 ימי עסקים מרגע קבלת המוצר המוחזר</li>
                  <li><strong>זיכוי לחנות:</strong> קבלו זיכוי לרכישה עתידית בתוספת 10% לערך ההחזר</li>
                  <li><strong>החלפה:</strong> ניתן להחליף את המוצר במוצר זהה או במוצר אחר בערך דומה (הפרשי מחיר יחויבו או יזוכו בהתאם)</li>
                </ul>

                <p className="text-gray-700">
                  <strong>שימו לב:</strong> במקרה של החזרת מוצר שנרכש במסגרת מבצע או הנחה, ערך ההחזר יהיה המחיר ששולם בפועל ולא המחיר המלא של המוצר.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <FaInfoCircle className="text-orange-600 text-xl" />
                  <h3 className="text-2xl font-semibold text-gray-800 m-0">צור קשר</h3>
                </div>
                
                <p className="text-gray-700 mb-4">
                  לכל שאלה או בירור בנוגע למדיניות ההחזרות וההחלפות שלנו, אנא צרו קשר:
                </p>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-gray-700 mb-1">
                    <strong>טלפון:</strong> 02-1234567
                  </p>
                  <p className="text-gray-700 mb-1">
                    <strong>אימייל:</strong> returns@xdrill.co.il
                  </p>
                  <p className="text-gray-700 mb-0">
                    <strong>שעות פעילות שירות לקוחות:</strong> ימים א'-ה', 9:00-18:00
                  </p>
                </div>
              </section>
              
              <div className="mt-8 text-center">
                <Link
                  href="/contact"
                  className="btn btn-primary inline-block px-8 py-3"
                >
                  צור קשר לשאלות
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 