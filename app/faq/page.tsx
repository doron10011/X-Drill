'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaChevronDown } from '@react-icons/all-files/fa/FaChevronDown';
import { FaChevronUp } from '@react-icons/all-files/fa/FaChevronUp';
import { FaQuestion } from '@react-icons/all-files/fa/FaQuestion';

// FAQ data
const faqData = [
  {
    category: 'כללי',
    items: [
      {
        question: 'מהו קידוח יהלום?',
        answer: 'קידוח יהלום הוא שיטת קידוח המשתמשת בכלים עם קצה יהלום תעשייתי לקידוח מדויק בחומרים קשים כמו בטון, אבן או אספלט. יתרונות השיטה כוללים דיוק גבוה, רעש מופחת, ללא ויברציות משמעותיות וללא נזק מבני לסביבת הקידוח.'
      },
      {
        question: 'האם X-Drill מציעה משלוחים לכל הארץ?',
        answer: 'כן, אנו מספקים משלוחים לכל רחבי הארץ. משלוחים בהזמנות מעל 500 ₪ ניתנים בחינם. זמני האספקה הם 2-3 ימי עסקים באזור המרכז, ו-3-5 ימי עסקים לשאר חלקי הארץ.'
      },
      {
        question: 'האם יש אחריות על המוצרים?',
        answer: 'כל המוצרים של X-Drill מגיעים עם אחריות של יצרן. משך האחריות משתנה בהתאם למוצר, כאשר רוב כוסות הקידוח מגיעות עם אחריות ל-12 חודשים. פרטי האחריות המלאים מופיעים בדף המוצר.'
      }
    ]
  },
  {
    category: 'כוסות קידוח יהלום',
    items: [
      {
        question: 'מה ההבדל בין קידוח יבש לקידוח רטוב?',
        answer: 'קידוח יבש מתבצע ללא שימוש במים ומתאים לעבודות קלות ובמקומות שבהם מים עלולים לגרום לנזק. קידוח רטוב משתמש במים לקירור הכוס בזמן הקידוח, מה שמאריך את חיי הכוס ומתאים לעבודות ארוכות ומאומצות יותר. קידוח רטוב גם מפחית את כמות האבק שנוצרת בזמן העבודה.'
      },
      {
        question: 'מהו סגמנט Arix ולמה הוא משמש?',
        answer: 'סגמנט Arix הוא טכנולוגיה מתקדמת המשמשת בייצור כוסות קידוח יהלום. הסגמנטים מכילים יהלומים תעשייתיים בצפיפות גבוהה ובסידור מיוחד שמבטיח ביצועים מעולים וחיי עבודה ארוכים. כוסות עם סגמנט Arix יעילות במיוחד בקידוח בטון מזוין וחומרים קשים אחרים.'
      },
      {
        question: 'איך בוחרים את הקוטר הנכון של כוס הקידוח?',
        answer: 'בחירת הקוטר הנכון תלויה במטרת הקידוח. לדוגמה, לצורך התקנת צנרת מים, הקוטר צריך להיות גדול ב-10-15 מ"מ מקוטר הצינור. עבור חיווט חשמלי, בדרך כלל משתמשים בקוטר של 67-77 מ"מ. מומלץ להתייעץ עם הצוות המקצועי שלנו לקבלת המלצה מדויקת בהתאם לצרכים שלכם.'
      },
      {
        question: 'מהי הברגה UNC ו-BSP ומתי משתמשים בכל אחת?',
        answer: 'UNC (Unified National Coarse) ו-BSP (British Standard Pipe) הם שני סוגי הברגות נפוצים בכוסות קידוח. הברגת 1-1/4" UNC נפוצה במכונות קידוח אמריקאיות, בעוד שהברגת 1/2" BSP נפוצה במכונות אירופאיות. חשוב להתאים את סוג ההברגה של הכוס למכונת הקידוח שלכם, או להשתמש במתאם מתאים.'
      }
    ]
  },
  {
    category: 'מסורי יהלום',
    items: [
      {
        question: 'איזה מסור יהלום מתאים לחיתוך בטון מזוין?',
        answer: 'לחיתוך בטון מזוין מומלץ להשתמש במסור יהלום עם סגמנטים בטכנולוגיית Arix שמתוכננים במיוחד להתמודד עם ברזלי זיון. המסורים בקוטר 350 מ"מ עם סגמנט Arix שלנו אידיאליים למשימה זו ומספקים חיתוך מדויק וחלק תוך התמודדות יעילה עם הברזל.'
      },
      {
        question: 'מהו עומק החיתוך המקסימלי של מסור יהלום?',
        answer: 'עומק החיתוך המקסימלי תלוי בקוטר המסור. ככלל, עומק החיתוך המקסימלי הוא כ-35% מקוטר המסור. לדוגמה, מסור בקוטר 350 מ"מ יכול לחתוך לעומק של כ-120-130 מ"מ. יש לציין שהמכונה המפעילה את המסור משפיעה גם היא על עומק החיתוך האפשרי.'
      }
    ]
  },
  {
    category: 'אביזרים ותחזוקה',
    items: [
      {
        question: 'מהם האביזרים הנלווים המומלצים לרכישה יחד עם כוסות הקידוח?',
        answer: 'מומלץ לרכוש מתאמי הברגה (אם נדרשים להתאמה למכונת הקידוח), מקדח מוביל לדיוק בתחילת הקידוח, ומערכת איסוף אבק או קירור מים בהתאם לסוג הקידוח (יבש או רטוב). עבור עבודות מקצועיות, כדאי לשקול גם רכישת מעמד קידוח לדיוק ויציבות מרביים.'
      },
      {
        question: 'כיצד לתחזק את כוסות הקידוח כדי להאריך את חיי העבודה שלהן?',
        answer: 'לתחזוקה נכונה של כוסות קידוח: 1) ניקוי יסודי לאחר כל שימוש, במיוחד הסרת שאריות בטון. 2) בקידוח רטוב, ודאו זרימת מים מתאימה למניעת התחממות. 3) התחילו קידוח במהירות נמוכה והגבירו בהדרגה. 4) הימנעו מלחץ מופרז בזמן הקידוח. 5) אחסנו במקום יבש ומוגן מפגיעות. 6) בדקו באופן קבוע את מצב הסגמנטים והחליפו כאשר נשחקים באופן משמעותי.'
      },
      {
        question: 'מה עושים כאשר נתקעים באמצע קידוח?',
        answer: 'כאשר כוס הקידוח נתקעת: 1) הפסיקו את המכונה מיד. 2) נסו לשחרר את הכוס בעדינות על ידי תנועה קלה של המכונה. 3) אל תנסו למשוך את המכונה בכוח. 4) אם הכוס עדיין תקועה, השתמשו במפתח מתאים ונסו להוציא את הכוס בסיבוב עדין נגד כיוון השעון. 5) במקרים קשים, ייתכן שתצטרכו לקדוח חור מקביל ולשבור את החומר בין החורים. 6) לעבודות עתידיות, ודאו שאתם משתמשים במהירות הסיבוב הנכונה ובלחץ מתאים.'
      }
    ]
  }
];

export default function FAQ() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('כללי');
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`;
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const isItemOpen = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`;
    return openItems[key] || false;
  };

  return (
    <div className="min-h-screen bg-gray-50 animate-fadeIn">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">שאלות נפוצות</h1>
            <p className="text-xl text-gray-300">
              מצאו תשובות לשאלות הנפוצות ביותר בנושא כלי קידוח יהלום
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
            <li className="text-gray-700 font-medium">שאלות נפוצות</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
              <div className="p-6">
                <h2 className="text-xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-4">
                  קטגוריות
                </h2>
                <ul className="space-y-3">
                  {faqData.map((category, index) => (
                    <li key={index}>
                      <button
                        onClick={() => toggleCategory(category.category)}
                        className={`w-full text-right py-2 px-3 rounded-md transition-colors duration-200 flex items-center justify-between ${
                          expandedCategory === category.category
                            ? 'bg-orange-100 text-orange-600'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        <FaQuestion className={expandedCategory === category.category ? 'text-orange-600' : 'text-gray-400'} />
                        <span className="font-medium">{category.category}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b border-gray-200 pb-4">
                  שאלות נפוצות
                </h2>
                
                <div className="space-y-8">
                  {faqData
                    .filter(category => !expandedCategory || category.category === expandedCategory)
                    .map((category, categoryIndex) => (
                      <div key={categoryIndex} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                        <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                          {category.category}
                        </h3>
                        <div className="space-y-4">
                          {category.items.map((item, itemIndex) => (
                            <div 
                              key={itemIndex} 
                              className="border border-gray-200 rounded-lg overflow-hidden"
                            >
                              <button
                                onClick={() => toggleItem(categoryIndex, itemIndex)}
                                className="w-full text-right p-4 bg-gray-50 hover:bg-gray-100 flex items-center justify-between"
                              >
                                <span className="font-medium text-lg">{item.question}</span>
                                {isItemOpen(categoryIndex, itemIndex) ? (
                                  <FaChevronUp className="text-orange-600 text-sm" />
                                ) : (
                                  <FaChevronDown className="text-gray-500 text-sm" />
                                )}
                              </button>
                              {isItemOpen(categoryIndex, itemIndex) && (
                                <div className="p-4 bg-white">
                                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            
            {/* Contact box */}
            <div className="bg-orange-600 text-white rounded-lg shadow-md mt-8 overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold mb-2">לא מצאת את התשובה שחיפשת?</h3>
                    <p>צוות המומחים שלנו ישמח לענות על כל שאלה</p>
                  </div>
                  <Link
                    href="/contact"
                    className="bg-white text-orange-600 hover:bg-gray-100 px-6 py-3 rounded-md font-semibold"
                  >
                    צור קשר
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 