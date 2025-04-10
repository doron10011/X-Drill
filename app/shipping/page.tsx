'use client';

import Link from 'next/link';
import { FaTruck } from '@react-icons/all-files/fa/FaTruck';
import { FaBox } from '@react-icons/all-files/fa/FaBox';
import { FaGlobe } from '@react-icons/all-files/fa/FaGlobe';
import { FaExchangeAlt } from '@react-icons/all-files/fa/FaExchangeAlt';
import { FaInfoCircle } from '@react-icons/all-files/fa/FaInfoCircle';
import { FaCalendarAlt } from '@react-icons/all-files/fa/FaCalendarAlt';

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 animate-fadeIn">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">מדיניות משלוחים והחזרות</h1>
            <p className="text-xl text-gray-300">
              מידע מפורט על משלוחים, זמני אספקה ומדיניות החזרות
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
            <li className="text-gray-700 font-medium">מדיניות משלוחים והחזרות</li>
          </ol>
        </nav>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <div className="prose max-w-none">
              <div className="flex items-center gap-3 mb-6">
                <FaTruck className="text-orange-600 text-3xl" />
                <h2 className="text-3xl font-bold text-gray-800 m-0">מדיניות משלוחים והחזרות של X-Drill</h2>
              </div>
              
              <p className="text-gray-600 mb-6">
                עדכון אחרון: 1 ביוני 2023
              </p>

              <p className="text-gray-700 mb-8">
                אנו ב-X-Drill מחויבים לספק לכם את המוצרים שהזמנתם בצורה יעילה, מהירה ובטוחה. מסמך זה מפרט את מדיניות המשלוחים וההחזרות שלנו כדי שתוכלו לבצע את הרכישות שלכם בביטחון מלא.
              </p>

              <div className="bg-blue-50 border-r-4 border-blue-500 p-4 mb-8">
                <p className="text-blue-700 mb-0">
                  <FaInfoCircle className="inline-block mr-2" />
                  <strong>שימו לב:</strong> מדיניות זו חלה על כל המוצרים הנמכרים באתר X-Drill, אלא אם צוין אחרת בדף המוצר.
                </p>
              </div>

              <section className="border-b border-gray-200 pb-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaTruck className="text-orange-600 text-xl" />
                  <h3 className="text-2xl font-semibold text-gray-800 m-0">אפשרויות משלוח</h3>
                </div>
                
                <p className="text-gray-700 mb-4">
                  אנו מציעים מספר אפשרויות משלוח כדי לענות על הצרכים השונים של לקוחותינו:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">משלוח סטנדרטי</h4>
                    <p className="text-gray-700 mb-2">זמן אספקה: 3-5 ימי עסקים</p>
                    <p className="text-gray-700 mb-0">עלות: 29.90 ₪</p>
                    <p className="text-gray-700 italic text-sm">*חינם בהזמנות מעל 199 ₪</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">משלוח מהיר</h4>
                    <p className="text-gray-700 mb-2">זמן אספקה: 1-2 ימי עסקים</p>
                    <p className="text-gray-700 mb-0">עלות: 49.90 ₪</p>
                    <p className="text-gray-700 italic text-sm">*חינם בהזמנות מעל 499 ₪</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  אנו מספקים מספר מעקב למשלוח שלכם כדי שתוכלו לעקוב אחר ההזמנה שלכם בכל עת. קישור למעקב ישלח לכתובת האימייל שסיפקתם בעת ביצוע ההזמנה.
                </p>

                <p className="text-gray-700">
                  <strong>שימו לב:</strong> זמני האספקה הם הערכה בלבד ועשויים להשתנות בהתאם למיקום, עומס בחברת השילוח, מזג אוויר קיצוני או אירועים בלתי צפויים אחרים.
                </p>
              </section>

              <section className="border-b border-gray-200 pb-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaGlobe className="text-orange-600 text-xl" />
                  <h3 className="text-2xl font-semibold text-gray-800 m-0">אזורי משלוח</h3>
                </div>
                
                <p className="text-gray-700 mb-4">
                  אנו מספקים משלוחים לכל רחבי ישראל, כולל יהודה ושומרון. עם זאת, ישנם אזורים מסוימים שבהם זמני האספקה עשויים להתארך או שתיתכן תוספת עלות למשלוח:
                </p>

                <ul className="list-disc list-inside text-gray-700 mb-4 pr-6">
                  <li>אילת וסביבתה (זמן אספקה: 5-7 ימי עסקים)</li>
                  <li>אזורים מרוחקים בנגב ובגליל (זמן אספקה: 4-6 ימי עסקים)</li>
                  <li>יישובים מעבר לקו הירוק (ייתכן ותידרש תוספת תשלום, בהתאם למיקום)</li>
                </ul>

                <p className="text-gray-700 mb-4">
                  למשלוחים בינלאומיים, אנא צרו איתנו קשר ישירות לקבלת הצעת מחיר ומידע על זמני אספקה.
                </p>
              </section>

              <section className="border-b border-gray-200 pb-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaBox className="text-orange-600 text-xl" />
                  <h3 className="text-2xl font-semibold text-gray-800 m-0">איסוף עצמי</h3>
                </div>
                
                <p className="text-gray-700 mb-4">
                  אנו מציעים אפשרות לאיסוף עצמי מהמחסן שלנו ללא עלות. איסוף עצמי זמין בימים א'-ה' בין השעות 9:00-17:00, בכתובת:
                </p>

                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <p className="text-gray-700 mb-0">
                    X-Drill מחסן מרכזי<br />
                    רחוב האומן 17<br />
                    אזור תעשייה תלפיות<br />
                    ירושלים<br />
                  </p>
                </div>

                <p className="text-gray-700">
                  לאחר שתבצעו את ההזמנה ותבחרו באפשרות איסוף עצמי, תקבלו הודעת אימייל כאשר ההזמנה שלכם תהיה מוכנה לאיסוף. יש להציג את אישור ההזמנה ותעודה מזהה בעת האיסוף.
                </p>
              </section>

              <section className="border-b border-gray-200 pb-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaCalendarAlt className="text-orange-600 text-xl" />
                  <h3 className="text-2xl font-semibold text-gray-800 m-0">זמני אספקה למוצרים בהזמנה מיוחדת</h3>
                </div>
                
                <p className="text-gray-700 mb-4">
                  חלק מהמוצרים שלנו אינם מוחזקים במלאי באופן קבוע ומיובאים בהזמנה מיוחדת. מוצרים אלה יסומנו בבירור בדף המוצר עם זמן האספקה המשוער.
                </p>

                <p className="text-gray-700 mb-4">
                  זמני האספקה למוצרים בהזמנה מיוחדת נעים בדרך כלל בין 14 ל-30 ימי עסקים, בהתאם לזמינות המוצר אצל הספק ומהירות השילוח הבינלאומי.
                </p>

                <p className="text-gray-700">
                  במקרה של עיכוב משמעותי, ניצור איתכם קשר ונעדכן אתכם לגבי המצב ונציע לכם אפשרויות, כולל המשך המתנה, החלפה למוצר חלופי או ביטול ההזמנה וקבלת החזר מלא.
                </p>
              </section>

              <section className="border-b border-gray-200 pb-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaExchangeAlt className="text-orange-600 text-xl" />
                  <h3 className="text-2xl font-semibold text-gray-800 m-0">מדיניות החזרות והחלפות</h3>
                </div>
                
                <p className="text-gray-700 mb-4">
                  שביעות רצון הלקוחות שלנו היא בעדיפות עליונה. אם אינכם מרוצים מהרכישה שלכם מכל סיבה שהיא, אנו מציעים מדיניות החזרות נוחה:
                </p>

                <ul className="list-disc list-inside text-gray-700 mb-4 pr-6">
                  <li>ניתן להחזיר מוצרים לא פגומים בתוך 14 יום מיום קבלת המוצר.</li>
                  <li>המוצר חייב להיות במצב חדש, ללא סימני שימוש, באריזה המקורית וכל האביזרים והמדריכים המקוריים.</li>
                  <li>ניתן לבקש החזר כספי או זיכוי לרכישה עתידית.</li>
                  <li>החזר כספי יתבצע באותו אמצעי תשלום ששימש לרכישה המקורית.</li>
                </ul>

                <div className="bg-orange-50 border-r-4 border-orange-500 p-4 mb-4">
                  <p className="text-orange-700 mb-0">
                    <strong>שימו לב:</strong> מוצרים שיוצרו בהתאמה אישית, מוצרים בהזמנה מיוחדת, או מוצרים שסומנו כ"מכירה סופית" אינם ניתנים להחזרה אלא במקרה של פגם.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-gray-800 mb-3 mt-5">מוצרים פגומים</h4>
                <p className="text-gray-700 mb-4">
                  אם קיבלתם מוצר פגום או שאינו תואם את ההזמנה, אנא צרו איתנו קשר תוך 48 שעות מקבלת המשלוח. אנו נארגן איסוף של המוצר הפגום ונספק לכם מוצר חלופי או החזר כספי מלא, לפי בחירתכם.
                </p>

                <h4 className="text-xl font-semibold text-gray-800 mb-3">תהליך החזרת מוצר</h4>
                <p className="text-gray-700 mb-4">
                  להחזרת מוצר, אנא פעלו לפי השלבים הבאים:
                </p>

                <ol className="list-decimal list-inside text-gray-700 mb-4 pr-6">
                  <li>צרו קשר עם שירות הלקוחות שלנו בטלפון 02-1234567 או באימייל returns@xdrill.co.il לקבלת מספר אישור החזרה (RMA).</li>
                  <li>ארזו את המוצר באריזה המקורית או באריזה חלופית מתאימה.</li>
                  <li>כללו בחבילה את חשבונית הרכישה ומספר ה-RMA שקיבלתם.</li>
                  <li>שלחו את החבילה לכתובת שתימסר לכם על ידי נציג שירות הלקוחות.</li>
                </ol>

                <p className="text-gray-700">
                  לאחר שנקבל את ההחזרה ונבדוק את המוצר, נעבד את ההחזר הכספי או ההחלפה בתוך 7-10 ימי עסקים.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <FaInfoCircle className="text-orange-600 text-xl" />
                  <h3 className="text-2xl font-semibold text-gray-800 m-0">צור קשר</h3>
                </div>
                
                <p className="text-gray-700 mb-4">
                  אם יש לכם שאלות נוספות לגבי מדיניות המשלוחים וההחזרות שלנו, אנא אל תהססו ליצור איתנו קשר:
                </p>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-gray-700 mb-1">
                    <strong>טלפון:</strong> 02-1234567
                  </p>
                  <p className="text-gray-700 mb-1">
                    <strong>אימייל:</strong> info@xdrill.co.il
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