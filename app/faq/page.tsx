'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

// FAQ Item Component
const FAQItem = ({ question, answer }: { question: string; answer: string | JSX.Element }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-right"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <span className="text-orange-600">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600 text-right">
          {answer}
        </div>
      )}
    </div>
  );
};

export default function FAQ() {
  const faqs = [
    {
      question: "מהו קידוח יהלום ומהם יתרונותיו?",
      answer: (
        <div>
          <p>קידוח יהלום הוא שיטה לקידוח חורים עגולים בחומרים קשים כגון בטון, בטון מזוין, אבן וקירות לבנים באמצעות כלי קידוח המצופים בגרגירי יהלום קשים במיוחד.</p>
          <p className="mt-2">יתרונות בולטים:</p>
          <ul className="list-disc list-inside mr-6 mt-1">
            <li>קידוח מדויק ונקי ללא סדקים בחומר</li>
            <li>יכולת לקדוח חורים בקטרים גדולים</li>
            <li>רעש רעידות ואבק מופחתים</li>
            <li>מתאים לעבודה בחללים מוגמרים</li>
            <li>יכולת לקדוח בחומרים קשים במיוחד כולל בטון מזוין</li>
          </ul>
        </div>
      )
    },
    {
      question: "מהו ההבדל בין קידוח רטוב לקידוח יבש?",
      answer: (
        <div>
          <p><strong>קידוח רטוב:</strong> מתבצע עם אספקת מים לראש הקידוח. המים מסייעים בקירור וסיכה של כוס הקידוח, מפנים את השבבים ומפחיתים אבק. מאפשר קידוח מהיר יותר וחיי כלי ארוכים יותר, אך דורש ניהול של הנוזלים.</p>
          <p className="mt-2"><strong>קידוח יבש:</strong> מתבצע ללא שימוש במים, לרוב עם מערכת שאיבת אבק. מתאים לעבודות פנים ולמקומות בהם שימוש במים אינו מעשי. טכנולוגיות מיוחדות בסגמנטים מונעות התחממות יתר.</p>
          <p className="mt-2">הבחירה בין השיטות תלויה בסוג העבודה, החומר המקודח והסביבה בה מתבצעת העבודה.</p>
        </div>
      )
    },
    {
      question: "אילו קטרים זמינים לכוסות קידוח יהלום?",
      answer: (
        <div>
          <p>כוסות קידוח יהלום זמינות במגוון רחב של קטרים המתאימים ליישומים שונים:</p>
          <p className="mt-2"><strong>כוסות קידוח רטובות:</strong></p>
          <ul className="list-disc list-inside mr-6 mt-1">
            <li>קטרים נפוצים: 67 מ"מ, 72 מ"מ, 77 מ"מ, 82 מ"מ, 91 מ"מ, 102 מ"מ, 132 מ"מ, 162 מ"מ, 200 מ"מ</li>
            <li>קטרים גדולים: עד 500 מ"מ זמינים עבור יישומים מיוחדים</li>
          </ul>
          <p className="mt-2"><strong>כוסות קידוח יבשות/ואקום:</strong></p>
          <ul className="list-disc list-inside mr-6 mt-1">
            <li>קטרים נפוצים: 80 מ"מ, 85 מ"מ, 90 מ"מ, 95 מ"מ, 100 מ"מ, 105 מ"מ</li>
            <li>קטרים קטנים יותר: 6 מ"מ עד 14 מ"מ (מיני)</li>
          </ul>
          <p className="mt-2">הקטרים הנפוצים ביותר הם 67 מ"מ, 82 מ"מ ו-102 מ"מ המתאימים לרוב לצנרת תקנית.</p>
        </div>
      )
    },
    {
      question: "מהם סוגי ההברגות השונים לכוסות קידוח יהלום?",
      answer: (
        <div>
          <p>קיימים מספר סוגי הברגות סטנדרטיים המשמשים בכוסות קידוח יהלום:</p>
          <ul className="list-disc list-inside mr-6 mt-2">
            <li><strong>1-1/4" UNC:</strong> סטנדרט נפוץ עבור כוסות גדולות ומכונות קידוח מקצועיות</li>
            <li><strong>1/2" BSP (BSPP1/2"):</strong> נפוץ באירופה ובמכונות קידוח בינוניות</li>
            <li><strong>M14:</strong> נפוץ בכוסות קידוח קטנות ומיועד בעיקר למשחזות זוויתיות</li>
            <li><strong>G1/2" ו-A-Rod:</strong> תקנים נוספים המשמשים במכונות מסוימות</li>
          </ul>
          <p className="mt-2">חשוב לוודא התאמה בין הברגת המכונה להברגת כוס הקידוח, או להשתמש במתאם הברגה מתאים.</p>
        </div>
      )
    },
    {
      question: "מהי טכנולוגיית Arix?",
      answer: (
        <div>
          <p>טכנולוגיית Arix היא טכנולוגיה מתקדמת בייצור סגמנטים של כוסות קידוח יהלום, המאופיינת בפיזור מיוחד של גרגירי היהלום בסגמנט, הגורם ל:</p>
          <ul className="list-disc list-inside mr-6 mt-2">
            <li>ביצועי קידוח משופרים וחיתוך מהיר יותר</li>
            <li>יכולת טובה יותר לחיתוך דרך ברזל זיון</li>
            <li>אורך חיים משופר של כוס הקידוח</li>
            <li>עמידות גבוהה בתנאי עבודה קשים</li>
          </ul>
          <p className="mt-2">כוסות קידוח עם סגמנט Arix מתאימות במיוחד לקידוח בבטון מזוין קשה, והן נחשבות לאיכותיות יותר מסגמנטים רגילים.</p>
        </div>
      )
    },
    {
      question: "איזה אביזרים נלווים נדרשים עבור קידוח יהלום מקצועי?",
      answer: (
        <div>
          <p>לביצוע עבודת קידוח יהלום מקצועית נדרשים מספר אביזרים חיוניים:</p>
          <ul className="list-disc list-inside mr-6 mt-2">
            <li><strong>מתאמי הברגות:</strong> לחיבור בין כוסות קידוח למכונות עם סוגי הברגה שונים</li>
            <li><strong>מאריכי קידוח:</strong> להגדלת עומק הקידוח של כוסות קידוח (זמינים באורכים כגון 250 מ"מ, 300 מ"מ ו-400 מ"מ)</li>
            <li><strong>מחזיקי כוסות קידוח:</strong> להחזקה יציבה ואבטחה של כוס הקידוח</li>
            <li><strong>משאבות מים ומיכלי לחץ:</strong> לאספקת מים בקידוח רטוב</li>
            <li><strong>מערכות איסוף מים:</strong> טבעות ומתקנים לאיסוף מים בזמן הקידוח הרטוב</li>
            <li><strong>מערכות שאיבת אבק:</strong> לקידוח יבש נקי מאבק</li>
          </ul>
          <p className="mt-2">בחירת האביזרים המתאימים משפרת את יעילות העבודה, את איכות התוצאה ואת בטיחות הקידוח.</p>
        </div>
      )
    },
    {
      question: "כיצד בוחרים את כוס הקידוח המתאימה?",
      answer: (
        <div>
          <p>בחירת כוס הקידוח המתאימה תלויה במספר גורמים:</p>
          <ol className="list-decimal list-inside mr-6 mt-2">
            <li><strong>חומר המקודח:</strong> קיימות כוסות ייעודיות לבטון, בטון מזוין, אבן, גרניט, קרמיקה וכו'</li>
            <li><strong>שיטת קידוח:</strong> קידוח רטוב או יבש בהתאם לסביבת העבודה</li>
            <li><strong>קוטר הקידוח:</strong> יש לבחור את הקוטר המתאים לצורך הספציפי</li>
            <li><strong>עומק הקידוח:</strong> לקידוח עמוק יש לבחור באורך מתאים או להשתמש במאריכים</li>
            <li><strong>סוג ההברגה:</strong> יש להתאים להברגה של המכונה או להשתמש במתאם</li>
            <li><strong>איכות הסגמנטים:</strong> לעבודות קשות (כמו בטון מזוין) מומלץ להשתמש בטכנולוגיות מתקדמות כמו Arix</li>
          </ol>
          <p className="mt-2">המלצה: התייעצו עם מומחה או ספק מקצועי לבחירת כוס הקידוח המתאימה ביותר לעבודה הספציפית.</p>
        </div>
      )
    },
    {
      question: "מהם מסורי היהלום ולאילו יישומים הם משמשים?",
      answer: (
        <div>
          <p>מסורי יהלום הם להבי מסור המצופים בגרגירי יהלום, המיועדים לחיתוך מדויק וחלק של חומרים קשים. הם משמשים למגוון יישומים:</p>
          <p className="mt-2"><strong>מסורי יהלום לבטון ובטון מזוין:</strong></p>
          <ul className="list-disc list-inside mr-6 mt-1">
            <li>חיתוך קירות בטון, רצפות ומרכיבים מבניים</li>
            <li>יצירת פתחים לדלתות וחלונות</li>
            <li>חיתוך כבישים ומדרכות</li>
            <li>קטרים נפוצים: 200 מ"מ עד 400 מ"מ</li>
          </ul>
          <p className="mt-2"><strong>מסורי יהלום לאבן, גרניט וחומרי בניין קלים:</strong></p>
          <ul className="list-disc list-inside mr-6 mt-1">
            <li>חיתוך אריחים לריצוף וחיפוי קירות</li>
            <li>עיבוד גרניט ושיש עבור משטחי עבודה</li>
            <li>חיתוך אבן לעבודות גינון ובנייה</li>
            <li>קטרים נפוצים: 150 מ"מ עד 300 מ"מ</li>
          </ul>
          <p className="mt-2">בחירת המסור המתאים תלויה בסוג החומר, עומק החיתוך הנדרש וסוג המכונה בה משתמשים.</p>
        </div>
      )
    },
    {
      question: "אילו טיפים חשובים יש לעבודה עם כלי קידוח יהלום?",
      answer: (
        <div>
          <p>עצות מקצועיות לעבודה יעילה ובטוחה עם כלי קידוח יהלום:</p>
          <ol className="list-decimal list-inside mr-6 mt-2">
            <li><strong>בקידוח רטוב:</strong> ודאו אספקת מים מספקת ורציפה למניעת התחממות יתר וקיצור חיי הכלי</li>
            <li><strong>מהירות סיבוב:</strong> עבדו במהירות המומלצת (לרוב 600-900 סל"ד לכוסות קידוח בינוניות)</li>
            <li><strong>לחץ:</strong> הפעילו לחץ מתון וקבוע, אל תלחצו חזק מדי</li>
            <li><strong>בבטון מזוין:</strong> האטו כשנתקלים בברזל זיון, הפעילו לחץ קבוע ואפשרו לכלי לעבוד את דרכו</li>
            <li><strong>תחזוקה:</strong> נקו ואחסנו את הכלים כראוי לאחר השימוש להארכת חייהם</li>
            <li><strong>בטיחות:</strong> השתמשו בציוד מגן אישי מתאים (משקפי מגן, מגני אוזניים, כפפות)</li>
            <li><strong>הדרכה:</strong> למדו את הטכניקה הנכונה או היעזרו באנשי מקצוע לעבודות מורכבות</li>
          </ol>
          <p className="mt-2">עבודה נכונה תוביל לתוצאות טובות יותר ולחיסכון בזמן ובעלויות החלפת כלים.</p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">שאלות נפוצות</h1>
            <p className="text-xl text-gray-300">
              מידע חשוב על כלי קידוח יהלום, טכנולוגיות, שימושים ועצות מקצועיות
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="text-gray-500 hover:text-gray-700">
                דף הבית
              </Link>
            </li>
            <li>
              <span className="text-gray-500 mx-2">/</span>
            </li>
            <li className="text-gray-700">שאלות נפוצות</li>
          </ol>
        </nav>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-8 text-center">כל מה שרצית לדעת על קידוח יהלום</h2>

            <div className="space-y-1">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <h3 className="text-xl font-semibold mb-4">עדיין יש לך שאלות?</h3>
            <p className="text-gray-600 mb-6">
              צוות המומחים שלנו ישמח לענות על כל שאלה ולסייע לך בבחירת המוצרים המתאימים לצרכים שלך
            </p>
            <Link
              href="/contact"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md font-medium inline-block"
            >
              צור קשר
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 