'use client';

import Link from 'next/link';
import { FaArrowLeft, FaCheck, FaTrophy, FaUsers, FaTools, FaShieldAlt, FaTruck, FaStar, FaCertificate, FaGlobeAmericas } from 'react-icons/fa';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 animate-fadeIn">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">אודות X-Drill</h1>
            <p className="text-xl text-gray-300">
              המומחים בתחום כלי קידוח יהלום מקצועיים בישראל
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
            <li className="text-gray-700 font-medium">אודות</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-4">
                  הסיפור שלנו
                </h2>
                
                <div className="prose max-w-none">
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    X-Drill היא חברה מובילה בתחום כלי הקידוח המקצועיים בישראל. אנו מתמחים
                    באספקת כלי קידוח יהלום איכותיים, המיועדים לקבלנים, שיפוצניקים ובעלי מקצוע
                    המחפשים את הכלים הטובים ביותר לעבודתם.
                  </p>

                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    החברה הוקמה מתוך הבנה של הצורך בכלי עבודה איכותיים שיעמדו בדרישות המקצועיות 
                    של אנשי המקצוע בישראל. מאז הקמתה, X-Drill שמה לה למטרה לספק את הפתרונות 
                    המתקדמים ביותר בתחום קידוח היהלום.
                  </p>
                  
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    עם ניסיון של למעלה מ-15 שנה בענף, הצוות המקצועי שלנו צבר ידע עמוק ומומחיות בתחום כוסות קידוח יהלום, 
                    מסורים, מקדחים, ואביזרים נלווים. היכרות מעמיקה עם הטכנולוגיות המתקדמות בתעשייה, כמו סגמנטי Arix המהפכניים, 
                    מאפשרת לנו להציע ללקוחותינו את הפתרונות האיכותיים והיעילים ביותר לכל משימת קידוח בבטון, בטון מזוין, אספלט ואבן.
                  </p>

                  <div className="bg-orange-50 border-r-4 border-orange-500 p-6 my-8">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">החזון שלנו</h3>
                    <p className="text-gray-700 italic">
                      "לספק את כלי הקידוח האיכותיים והמקצועיים ביותר בשוק, תוך מתן שירות
                      מעולה ותמיכה מקצועית ללקוחותינו. אנו מאמינים כי איכות המוצר והשירות
                      הם המפתח להצלחה."
                    </p>
                  </div>

                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">הערכים שלנו</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-start">
                      <div className="bg-orange-100 rounded-full p-2 shrink-0 mt-1">
                        <FaCheck className="text-orange-600" />
                      </div>
                      <div className="mr-4">
                        <h4 className="font-semibold mb-1">איכות</h4>
                        <p className="text-gray-600">אנחנו מקפידים על איכות גבוהה בכל מוצר שאנו מציעים</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-orange-100 rounded-full p-2 shrink-0 mt-1">
                        <FaCheck className="text-orange-600" />
                      </div>
                      <div className="mr-4">
                        <h4 className="font-semibold mb-1">אמינות</h4>
                        <p className="text-gray-600">אנחנו עומדים מאחורי המוצרים שלנו ומבטיחים אמינות</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-orange-100 rounded-full p-2 shrink-0 mt-1">
                        <FaCheck className="text-orange-600" />
                      </div>
                      <div className="mr-4">
                        <h4 className="font-semibold mb-1">חדשנות</h4>
                        <p className="text-gray-600">אנחנו מחפשים תמיד את הטכנולוגיות והפתרונות המתקדמים ביותר</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-orange-100 rounded-full p-2 shrink-0 mt-1">
                        <FaCheck className="text-orange-600" />
                      </div>
                      <div className="mr-4">
                        <h4 className="font-semibold mb-1">שירות לקוחות</h4>
                        <p className="text-gray-600">אנחנו מחויבים לספק את השירות הטוב ביותר ללקוחותינו</p>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">המומחיות שלנו</h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    X-Drill מתמחה בשלושה תחומים עיקריים:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        <FaStar className="text-orange-600 text-xl" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">כוסות קידוח יהלום</h4>
                      <p className="text-gray-600">
                        מגוון רחב של כוסות בקטרים שונים לקידוח רטוב ויבש, עם סגמנטים מתקדמים לכל סוגי העבודות.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        <FaCertificate className="text-orange-600 text-xl" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">מסורי יהלום</h4>
                      <p className="text-gray-600">
                        מסורים מקצועיים לחיתוך בטון, בטון מזוין, אספלט ואבן, המספקים דיוק וביצועים מעולים.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        <FaGlobeAmericas className="text-orange-600 text-xl" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">אביזרים משלימים</h4>
                      <p className="text-gray-600">
                        מתאמים, מקדחי ואקום, מאריכים וציוד עזר המשלים את מערכת הקידוח המקצועית.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className="btn btn-primary px-8 py-3 inline-flex items-center"
                    >
                      צור קשר
                      <FaArrowLeft className="mr-2 rtl-flip" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b border-gray-200 pb-4 flex items-center">
                  <FaUsers className="ml-2 text-orange-600" />
                  למי אנחנו מתאימים?
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 flex items-center">
                      <div className="bg-orange-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs ml-2">
                        1
                      </div>
                      קבלנים
                    </h4>
                    <p className="text-gray-600">
                      כלי קידוח מקצועיים לעבודות בנייה ושיפוץ בקנה מידה גדול
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 flex items-center">
                      <div className="bg-orange-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs ml-2">
                        2
                      </div>
                      שיפוצניקים
                    </h4>
                    <p className="text-gray-600">
                      פתרונות קידוח מתקדמים לעבודות שיפוץ ותחזוקה
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 flex items-center">
                      <div className="bg-orange-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs ml-2">
                        3
                      </div>
                      אינסטלטורים
                    </h4>
                    <p className="text-gray-600">
                      כלי קידוח מדויקים להתקנת צנרת מים וביוב
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 flex items-center">
                      <div className="bg-orange-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs ml-2">
                        4
                      </div>
                      חשמלאים
                    </h4>
                    <p className="text-gray-600">
                      פתרונות לקידוח מדויק עבור התקנת תשתיות חשמל
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 flex items-center">
                      <div className="bg-orange-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs ml-2">
                        5
                      </div>
                      חובבי DIY
                    </h4>
                    <p className="text-gray-600">
                      פתרונות קידוח איכותיים לפרויקטים ביתיים
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b border-gray-200 pb-4 flex items-center">
                  <FaTrophy className="ml-2 text-orange-600" />
                  יתרונות X-Drill
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <FaTools className="text-orange-600 ml-2" />
                    <span>מוצרים איכותיים מהמובילים בעולם</span>
                  </li>
                  <li className="flex items-center">
                    <FaUsers className="text-orange-600 ml-2" />
                    <span>צוות מקצועי עם ניסיון של 15+ שנים</span>
                  </li>
                  <li className="flex items-center">
                    <FaTruck className="text-orange-600 ml-2" />
                    <span>משלוחים מהירים ברחבי הארץ</span>
                  </li>
                  <li className="flex items-center">
                    <FaShieldAlt className="text-orange-600 ml-2" />
                    <span>אחריות יצרן על כל המוצרים</span>
                  </li>
                  <li className="flex items-center">
                    <FaStar className="text-orange-600 ml-2" />
                    <span>ייעוץ מקצועי לפני הרכישה</span>
                  </li>
                  <li className="flex items-center">
                    <FaCertificate className="text-orange-600 ml-2" />
                    <span>עמידה בתקנים בינלאומיים מחמירים</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-orange-600 text-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">צריכים עזרה בבחירת מוצר?</h3>
                <p className="mb-4">
                  הצוות המקצועי שלנו ישמח לייעץ לכם בבחירת כלי הקידוח המתאים לצרכים שלכם
                </p>
                <Link
                  href="/contact"
                  className="block w-full bg-white text-orange-600 hover:bg-gray-100 text-center py-3 rounded-md font-semibold"
                >
                  צור קשר לייעוץ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">מעוניינים במוצרים שלנו?</h2>
            <p className="text-xl text-gray-300 mb-8">
              אנחנו מציעים מגוון רחב של כלי קידוח יהלום מקצועיים ואביזרים נלווים
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/products" 
                className="btn btn-primary px-8 py-3 font-semibold"
              >
                צפה בקטלוג המוצרים
              </Link>
              <Link 
                href="/contact" 
                className="btn btn-outline text-white border-white hover:bg-white hover:text-gray-900 px-8 py-3 font-semibold"
              >
                צור קשר
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 