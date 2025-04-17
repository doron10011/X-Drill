'use client';

import Link from 'next/link';
import { FaShieldAlt, FaLock, FaCookieBite, FaUserShield, FaEnvelope } from 'react-icons/fa';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 animate-fadeIn">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">מדיניות פרטיות</h1>
            <p className="text-xl text-gray-300">
              המידע שלכם חשוב לנו. למדו איך אנו אוספים ומשתמשים במידע שלכם
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
            <li className="text-gray-700 font-medium">מדיניות פרטיות</li>
          </ol>
        </nav>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <div className="prose max-w-none">
              <div className="flex items-center gap-3 mb-6">
                <FaShieldAlt className="text-orange-600 text-3xl" />
                <h2 className="text-3xl font-bold text-gray-800 m-0">מדיניות פרטיות של X-Drill</h2>
              </div>
              
              <p className="text-gray-600 mb-6">
                עדכון אחרון: 1 ביוני 2023
              </p>

              <p className="text-gray-700 mb-6">
                ב-X-Drill אנו מכבדים את פרטיותכם ומחויבים להגן על המידע האישי שלכם. מדיניות פרטיות זו מסבירה את האופן שבו אנו אוספים, משתמשים ומגנים על המידע האישי שלכם כאשר אתם משתמשים באתר שלנו ובשירותים שאנו מציעים.
              </p>

              <section className="border-b border-gray-200 pb-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaLock className="text-orange-600 text-xl" />
                  <h3 className="text-2xl font-semibold text-gray-800 m-0">איסוף מידע</h3>
                </div>
                
                <p className="text-gray-700 mb-4">
                  אנו אוספים מידע אישי כאשר אתם:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 mr-6">
                  <li className="mb-2">יוצרים חשבון באתר שלנו</li>
                  <li className="mb-2">מבצעים רכישה דרך האתר</li>
                  <li className="mb-2">ממלאים טופס יצירת קשר</li>
                  <li className="mb-2">נרשמים לניוזלטר שלנו</li>
                  <li>משתתפים בסקרים או פרומואים</li>
                </ul>

                <p className="text-gray-700 mb-4">
                  המידע האישי שאנו אוספים עשוי לכלול:
                </p>
                <ul className="list-disc list-inside text-gray-700 mr-6">
                  <li className="mb-2">שם מלא</li>
                  <li className="mb-2">כתובת אימייל</li>
                  <li className="mb-2">מספר טלפון</li>
                  <li className="mb-2">כתובת למשלוח</li>
                  <li className="mb-2">פרטי תשלום (אנו לא שומרים פרטי כרטיס אשראי במלואם)</li>
                  <li>מידע על הרכישות והפעילות באתר</li>
                </ul>
              </section>

              <section className="border-b border-gray-200 pb-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaUserShield className="text-orange-600 text-xl" />
                  <h3 className="text-2xl font-semibold text-gray-800 m-0">שימוש במידע</h3>
                </div>
                
                <p className="text-gray-700 mb-4">
                  אנו משתמשים במידע האישי שאנו אוספים כדי:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 mr-6">
                  <li className="mb-2">לעבד את ההזמנות שלכם ולספק את המוצרים והשירותים שביקשתם</li>
                  <li className="mb-2">לנהל את החשבון שלכם</li>
                  <li className="mb-2">לתקשר איתכם לגבי הזמנות, חשבוניות ועדכונים</li>
                  <li className="mb-2">לשלוח עדכונים שיווקיים (אם הסכמתם לכך)</li>
                  <li className="mb-2">לשפר את האתר והשירותים שלנו</li>
                  <li className="mb-2">לספק תמיכת לקוחות</li>
                  <li>למנוע הונאות ולאבטח את האתר שלנו</li>
                </ul>

                <div className="bg-blue-50 border-r-4 border-blue-500 p-4 mb-4">
                  <p className="text-blue-700">
                    <strong>הערה חשובה:</strong> איננו מוכרים או משכירים את המידע האישי שלכם לצדדים שלישיים למטרות שיווק. 
                  </p>
                </div>
              </section>

              <section className="border-b border-gray-200 pb-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaCookieBite className="text-orange-600 text-xl" />
                  <h3 className="text-2xl font-semibold text-gray-800 m-0">שימוש בעוגיות (Cookies)</h3>
                </div>
                
                <p className="text-gray-700 mb-4">
                  האתר שלנו משתמש בעוגיות כדי לשפר את החוויה שלכם. עוגיות הן קבצי טקסט קטנים המאוחסנים על המכשיר שלכם כאשר אתם מבקרים באתר.
                </p>
                <p className="text-gray-700 mb-4">
                  אנו משתמשים בעוגיות כדי:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 mr-6">
                  <li className="mb-2">לזכור את פרטי ההתחברות שלכם</li>
                  <li className="mb-2">לשמור פריטים בעגלת הקניות שלכם</li>
                  <li className="mb-2">להבין איך אתם משתמשים באתר שלנו</li>
                  <li>להתאים אישית את החוויה שלכם</li>
                </ul>
                <p className="text-gray-700">
                  אתם יכולים לשנות את הגדרות הדפדפן שלכם כדי למחוק או למנוע הגדרת עוגיות, אך הדבר עלול להשפיע על פונקציונליות מסוימת באתר.
                </p>
              </section>

              <section className="border-b border-gray-200 pb-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaLock className="text-orange-600 text-xl" />
                  <h3 className="text-2xl font-semibold text-gray-800 m-0">אבטחת מידע</h3>
                </div>
                
                <p className="text-gray-700 mb-4">
                  אנו נוקטים באמצעי אבטחה מתאימים כדי להגן על המידע האישי שלכם מפני גישה, שימוש או חשיפה בלתי מורשים. אנו משתמשים בטכנולוגיית הצפנה SSL כדי להגן על העברת מידע רגיש.
                </p>
                <p className="text-gray-700">
                  למרות שאנו עושים מאמצים לאבטח את המידע שלכם, אין שיטת העברה באינטרנט או שיטת אחסון אלקטרונית שהיא בטוחה ב-100%. לכן, איננו יכולים להבטיח אבטחה מוחלטת.
                </p>
              </section>

              <section className="border-b border-gray-200 pb-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaUserShield className="text-orange-600 text-xl" />
                  <h3 className="text-2xl font-semibold text-gray-800 m-0">זכויות הפרטיות שלכם</h3>
                </div>
                
                <p className="text-gray-700 mb-4">
                  יש לכם זכויות מסוימות בנוגע למידע האישי שלכם, כולל:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 mr-6">
                  <li className="mb-2">הזכות לגשת למידע האישי שלכם</li>
                  <li className="mb-2">הזכות לתקן מידע לא מדויק</li>
                  <li className="mb-2">הזכות למחוק את המידע שלכם (בכפוף לחריגים מסוימים)</li>
                  <li className="mb-2">הזכות להתנגד לעיבוד המידע שלכם</li>
                  <li>הזכות לבטל את הסכמתכם לקבלת תכנים שיווקיים</li>
                </ul>
                <p className="text-gray-700">
                  כדי לממש את הזכויות הללו, אנא צרו איתנו קשר באמצעות פרטי הקשר המופיעים בסוף מדיניות זו.
                </p>
              </section>

              <section className="border-b border-gray-200 pb-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaUserShield className="text-orange-600 text-xl" />
                  <h3 className="text-2xl font-semibold text-gray-800 m-0">שמירת מידע</h3>
                </div>
                
                <p className="text-gray-700 mb-4">
                  אנו שומרים את המידע האישי שלכם כל עוד הוא נחוץ למטרות המתוארות במדיניות זו, אלא אם נדרש לשמור אותו לתקופה ארוכה יותר על פי חוק (למשל, למטרות מס או חשבונאות).
                </p>
              </section>

              <section className="border-b border-gray-200 pb-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaUserShield className="text-orange-600 text-xl" />
                  <h3 className="text-2xl font-semibold text-gray-800 m-0">שינויים במדיניות הפרטיות</h3>
                </div>
                
                <p className="text-gray-700 mb-4">
                  אנו עשויים לעדכן את מדיניות הפרטיות שלנו מעת לעת. נפרסם כל שינוי באתר שלנו ונעדכן את תאריך העדכון האחרון.
                </p>
                <p className="text-gray-700">
                  מומלץ לבדוק את מדיניות הפרטיות שלנו באופן קבוע כדי להיות מעודכנים בשינויים.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <FaEnvelope className="text-orange-600 text-xl" />
                  <h3 className="text-2xl font-semibold text-gray-800 m-0">יצירת קשר</h3>
                </div>
                
                <p className="text-gray-700 mb-4">
                  אם יש לכם שאלות או חששות בנוגע למדיניות הפרטיות שלנו, אנא צרו איתנו קשר:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>X-Drill</strong><br />
                    רחוב התעשייה 1, תל אביב<br />
                    דוא"ל: privacy@x-drill.co.il<br />
                    טלפון: 03-1234567
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