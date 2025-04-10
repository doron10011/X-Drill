'use client';

import Link from 'next/link';
import { FaFileContract } from '@react-icons/all-files/fa/FaFileContract';
import { FaShoppingCart } from '@react-icons/all-files/fa/FaShoppingCart';
import { FaTruck } from '@react-icons/all-files/fa/FaTruck';
import { FaExchangeAlt } from '@react-icons/all-files/fa/FaExchangeAlt';
import { FaShieldAlt } from '@react-icons/all-files/fa/FaShieldAlt';
import { FaGavel } from '@react-icons/all-files/fa/FaGavel';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 animate-fadeIn">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">תנאי שימוש</h1>
            <p className="text-xl text-gray-300">
              תנאי השימוש באתר X-Drill והמדיניות המשפטית שלנו
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
            <li className="text-gray-700 font-medium">תנאי שימוש</li>
          </ol>
        </nav>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <div className="prose max-w-none">
              <div className="flex items-center gap-3 mb-6">
                <FaFileContract className="text-orange-600 text-3xl" />
                <h2 className="text-3xl font-bold text-gray-800 m-0">תנאי שימוש באתר X-Drill</h2>
              </div>
              
              <p className="text-gray-600 mb-6">
                עדכון אחרון: 1 ביוני 2023
              </p>

              <p className="text-gray-700 mb-8">
                ברוכים הבאים לאתר X-Drill. אנא קראו בעיון את תנאי השימוש הבאים לפני השימוש באתר שלנו. הגישה לאתר והשימוש בו מהווים הסכמה לתנאים אלה. אם אינכם מסכימים לתנאים אלה, אנא אל תשתמשו באתר.
              </p>

              <div className="mb-8 bg-orange-50 border-r-4 border-orange-500 p-4">
                <p className="text-orange-700 mb-0">
                  <strong>הערה חשובה:</strong> תנאי שימוש אלה מהווים הסכם משפטי בינכם לבין X-Drill. נא לקרוא אותם בעיון.
                </p>
              </div>

              <section className="border-b border-gray-200 pb-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaFileContract className="text-orange-600 text-xl" />
                  <h3 className="text-2xl font-semibold text-gray-800 m-0">הסכם כללי</h3>
                </div>
                
                <p className="text-gray-700 mb-4">
                  אתר X-Drill (להלן: "האתר") מופעל על ידי חברת X-Drill בע"מ (להלן: "החברה"). תנאי שימוש אלה חלים על השימוש באתר שלנו, כולל כל התכנים, המוצרים והשירותים המוצעים באמצעות האתר.
                </p>
                <p className="text-gray-700 mb-4">
                  אנו שומרים לעצמנו את הזכות לשנות את תנאי השימוש בכל עת, על פי שיקול דעתנו הבלעדי. שינויים כאלה ייכנסו לתוקף מיד עם פרסומם באתר. המשך השימוש שלכם באתר לאחר פרסום השינויים מהווה הסכמה לתנאים המעודכנים.
                </p>
              </section>

              <section className="border-b border-gray-200 pb-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaShoppingCart className="text-orange-600 text-xl" />
                  <h3 className="text-2xl font-semibold text-gray-800 m-0">מוצרים ומחירים</h3>
                </div>
                
                <p className="text-gray-700 mb-4">
                  אנו עושים כל מאמץ כדי להציג את המוצרים שלנו בצורה מדויקת ככל האפשר. עם זאת, איננו יכולים להבטיח שכל המפרטים, המחירים והתמונות המוצגים באתר יהיו מדויקים לחלוטין או נקיים משגיאות.
                </p>
                <p className="text-gray-700 mb-4">
                  המחירים המוצגים באתר הם בשקלים חדשים (₪) וכוללים מע"מ, אלא אם צוין אחרת. אנו שומרים לעצמנו את הזכות לשנות מחירים בכל עת ללא הודעה מוקדמת.
                </p>
                <p className="text-gray-700">
                  במקרה של טעות בתמחור, אנו שומרים לעצמנו את הזכות לבטל את ההזמנה ולהודיע לכם על הטעות לפני המשלוח של המוצרים.
                </p>
              </section>

              <section className="border-b border-gray-200 pb-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaTruck className="text-orange-600 text-xl" />
                  <h3 className="text-2xl font-semibold text-gray-800 m-0">הזמנות ומשלוחים</h3>
                </div>
                
                <p className="text-gray-700 mb-4">
                  הגשת הזמנה באתר מהווה הצעת רכישה. אנו שומרים לעצמנו את הזכות לקבל או לדחות הזמנות על פי שיקול דעתנו. הזמנה תחשב כמאושרת רק לאחר קבלת אישור הזמנה בדוא"ל.
                </p>
                <p className="text-gray-700 mb-4">
                  זמני המשלוח המוצגים באתר הם הערכה בלבד ואינם מהווים התחייבות מצדנו. אנו עושים כל מאמץ לעמוד בזמני המשלוח המשוערים, אך איננו אחראים לעיכובים שנגרמים על ידי גורמים חיצוניים.
                </p>
                <p className="text-gray-700">
                  למידע מפורט יותר על מדיניות המשלוחים שלנו, אנא ראו את <Link href="/shipping" className="text-orange-600 hover:underline">דף מדיניות המשלוחים</Link> שלנו.
                </p>
              </section>

              <section className="border-b border-gray-200 pb-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaExchangeAlt className="text-orange-600 text-xl" />
                  <h3 className="text-2xl font-semibold text-gray-800 m-0">החזרות וביטולים</h3>
                </div>
                
                <p className="text-gray-700 mb-4">
                  אתם רשאים לבטל הזמנה בתוך 14 יום מיום קבלת המוצר, בהתאם לחוק הגנת הצרכן. עם זאת, חלק מהמוצרים המוצעים באתר מיוצרים בהתאמה אישית או מיובאים במיוחד עבורכם, ולכן אינם ניתנים להחזרה או ביטול אלא במקרה של פגם.
                </p>
                <p className="text-gray-700 mb-4">
                  כדי לבטל הזמנה או להחזיר מוצר, אנא צרו איתנו קשר באמצעות פרטי הקשר המופיעים באתר. ביטול או החזרה יהיו כפופים למדיניות ההחזרות שלנו.
                </p>
                <p className="text-gray-700">
                  למידע מפורט יותר על מדיניות ההחזרות שלנו, אנא ראו את <Link href="/shipping" className="text-orange-600 hover:underline">דף מדיניות המשלוחים והחזרות</Link> שלנו.
                </p>
              </section>

              <section className="border-b border-gray-200 pb-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaShieldAlt className="text-orange-600 text-xl" />
                  <h3 className="text-2xl font-semibold text-gray-800 m-0">פרטיות ואבטחת מידע</h3>
                </div>
                
                <p className="text-gray-700 mb-4">
                  השימוש באתר כפוף למדיניות הפרטיות שלנו, המפרטת את האופן שבו אנו אוספים, משתמשים ומגנים על המידע האישי שלכם. על ידי שימוש באתר, אתם מסכימים לאיסוף ושימוש במידע בהתאם למדיניות הפרטיות שלנו.
                </p>
                <p className="text-gray-700">
                  למידע מפורט על מדיניות הפרטיות שלנו, אנא ראו את <Link href="/privacy" className="text-orange-600 hover:underline">דף מדיניות הפרטיות</Link> שלנו.
                </p>
              </section>

              <section className="border-b border-gray-200 pb-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaFileContract className="text-orange-600 text-xl" />
                  <h3 className="text-2xl font-semibold text-gray-800 m-0">קניין רוחני</h3>
                </div>
                
                <p className="text-gray-700 mb-4">
                  כל התכנים המופיעים באתר, כולל אך לא מוגבל לטקסט, גרפיקה, לוגואים, סמלים, תמונות, קטעי אודיו, וידאו ותוכנה, הם רכושה של החברה או של הספקים ובעלי הרישיון שלה ומוגנים על ידי חוקי זכויות יוצרים, סימני מסחר ושאר חוקי קניין רוחני.
                </p>
                <p className="text-gray-700 mb-4">
                  אינכם רשאים להעתיק, להפיץ, לשכפל, להציג בפומבי, לשנות או ליצור עבודות נגזרות מתכני האתר, אלא אם קיבלתם הרשאה מפורשת בכתב מאיתנו.
                </p>
              </section>

              <section className="border-b border-gray-200 pb-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaFileContract className="text-orange-600 text-xl" />
                  <h3 className="text-2xl font-semibold text-gray-800 m-0">חשבונות משתמשים</h3>
                </div>
                
                <p className="text-gray-700 mb-4">
                  בעת יצירת חשבון באתר, אתם אחראים לשמור על סודיות פרטי החשבון שלכם, כולל הסיסמה, ולהגביל את הגישה למחשב שלכם. אתם מסכימים לקבל אחריות על כל הפעילויות המתרחשות תחת החשבון או הסיסמה שלכם.
                </p>
                <p className="text-gray-700">
                  אנו שומרים לעצמנו את הזכות לסגור חשבונות, להסיר או לערוך תוכן, ולבטל הזמנות לפי שיקול דעתנו, כולל אך לא מוגבל למקרים של הפרת תנאי השימוש.
                </p>
              </section>

              <section className="border-b border-gray-200 pb-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaGavel className="text-orange-600 text-xl" />
                  <h3 className="text-2xl font-semibold text-gray-800 m-0">הגבלת אחריות</h3>
                </div>
                
                <p className="text-gray-700 mb-4">
                  החברה מספקת את האתר ואת התכנים בו "כפי שהם" (as is) ללא כל התחייבות או אחריות מכל סוג שהוא, במפורש או במשתמע. החברה אינה מתחייבת כי האתר יהיה נקי משגיאות, וירוסים או רכיבים מזיקים אחרים.
                </p>
                <p className="text-gray-700 mb-4">
                  בשום מקרה החברה לא תהיה אחראית לכל נזק ישיר, עקיף, מקרי, מיוחד או תוצאתי הנובע מהשימוש או חוסר היכולת להשתמש באתר או בתכנים המוצגים בו.
                </p>
                <p className="text-gray-700">
                  במידה המרבית המותרת על פי החוק החל, האחריות המצטברת הכוללת של החברה בגין כל התביעות הנובעות מתנאי שימוש אלה או מהשימוש באתר לא תעלה על הסכום ששילמתם, אם בכלל, עבור המוצרים או השירותים שרכשתם באתר.
                </p>
              </section>

              <section className="border-b border-gray-200 pb-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaGavel className="text-orange-600 text-xl" />
                  <h3 className="text-2xl font-semibold text-gray-800 m-0">דין חל וסמכות שיפוט</h3>
                </div>
                
                <p className="text-gray-700 mb-4">
                  תנאי שימוש אלה יהיו כפופים לחוקי מדינת ישראל ויפורשו בהתאם להם, ללא התייחסות לעקרונות ברירת הדין.
                </p>
                <p className="text-gray-700">
                  כל מחלוקת הנובעת מתנאי שימוש אלה או הקשורה אליהם תהיה כפופה לסמכות השיפוט הבלעדית של בתי המשפט המוסמכים בתל אביב-יפו, ישראל.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <FaFileContract className="text-orange-600 text-xl" />
                  <h3 className="text-2xl font-semibold text-gray-800 m-0">שונות</h3>
                </div>
                
                <p className="text-gray-700 mb-4">
                  אם חלק כלשהו מתנאי שימוש אלה יימצא בלתי חוקי, בטל או בלתי אכיף מסיבה כלשהי, אזי אותו חלק ייחשב כניתן להפרדה מתנאי שימוש אלה ולא ישפיע על התוקף והאכיפה של יתר התנאים.
                </p>
                <p className="text-gray-700 mb-4">
                  אי אכיפה של זכות או הוראה כלשהי בתנאי שימוש אלה מצד החברה לא תהווה ויתור על אותה זכות או הוראה.
                </p>
                <p className="text-gray-700">
                  תנאי שימוש אלה מהווים את ההסכם המלא בינכם לבין החברה בנוגע לשימוש באתר ומחליפים כל הסכם או הבנה קודמים, בין בעל פה ובין בכתב, בנוגע לנושא זה.
                </p>
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