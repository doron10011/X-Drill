'use client';

import Link from 'next/link';
import { FaChevronLeft } from 'react-icons/fa';

export default function Products() {
  const categories = [
    {
      id: 1,
      name: 'כוסות קידוח יהלום',
      description: 'כוסות קידוח מקצועיות בקטרים שונים, מתאימות לקידוח רטוב ויבש ולמגוון סוגי משטחים',
      image: '/placeholder.jpg',
      slug: 'diamond-core-drill-bits',
      subcategories: [
        { 
          name: 'קידוח רטוב', 
          slug: 'wet-drilling',
          description: 'כוסות קידוח המיועדות לעבודה עם מים, מספקות קירור בזמן הקידוח, אריכות חיים גבוהה וביצועים מיטביים'
        },
        { 
          name: 'קידוח יבש/ואקום', 
          slug: 'dry-vacuum-drilling',
          description: 'כוסות קידוח המתוכננות לעבודה יבשה או תחת מערכת ואקום, ללא שימוש במים'
        },
        { 
          name: 'כוסות קידוח מיוחדות', 
          slug: 'special',
          description: 'כוסות קידוח עם טכנולוגיות ייחודיות כגון Arix, או לחומרים מיוחדים'
        },
      ]
    },
    {
      id: 2,
      name: 'מסורי יהלום',
      description: 'מסורים מקצועיים לחיתוך בטון, בטון מזוין וחומרים קשים עם דיוק וביצועים מעולים',
      image: '/placeholder.jpg',
      slug: 'diamond-saw-blades',
      subcategories: [
        { 
          name: 'לבטון ובטון מזוין', 
          slug: 'concrete-reinforced',
          description: 'להבי מסור המיועדים לחיתוך בטון, בטון מזוין ובלוקים, בקטרים מ-200 מ"מ ועד 400 מ"מ'
        },
        { 
          name: 'לאבן, גרניט וחומרי בניין קלים', 
          slug: 'stone-granite',
          description: 'להבי מסור המיועדים לחיתוך מדויק של חומרים כגון אבן, גרניט, שיש ואריחים'
        },
      ]
    },
    {
      id: 3,
      name: 'מכונות קידוח',
      description: 'מגוון מכונות קידוח מקצועיות לשימוש עם כוסות קידוח יהלום, לקידוח רטוב ויבש',
      image: '/placeholder.jpg',
      slug: 'drilling-machines',
      subcategories: [
        { 
          name: 'מכונות קידוח רטובות', 
          slug: 'wet-drilling-machines',
          description: 'מכונות המיועדות לקידוח עם מים, לדיוק מרבי וביצוע עבודות מקצועיות'
        },
        { 
          name: 'מכונות קידוח יבשות/ואקום', 
          slug: 'dry-vacuum-machines',
          description: 'מכונות המיועדות לקידוח יבש, עם או בלי מערכת שאיבת אבק משולבת'
        },
        { 
          name: 'סטנדים למכונות קידוח', 
          slug: 'drill-stands',
          description: 'סטנדים ומעמדים למכונות קידוח לעבודה מדויקת ויציבה'
        },
      ]
    },
    {
      id: 4,
      name: 'אביזרים נלווים',
      description: 'אביזרים משלימים לכלי הקידוח: מתאמים, מקדחים ואביזרי עזר שיעזרו לכם לבצע את העבודה בצורה מושלמת',
      image: '/placeholder.jpg',
      slug: 'accessories',
      subcategories: [
        { 
          name: 'מקדחי ואקום לקידוח יבש', 
          slug: 'vacuum-drills',
          description: 'מכונות קידוח המיועדות במיוחד לפעולה יבשה, המשלבות מערכות ואקום לשאיבת אבק'
        },
        { 
          name: 'מתאמי הברגות', 
          slug: 'thread-adapters',
          description: 'מתאמים לחיבור כוסות קידוח עם סוגי הברגה שונים למכונות קידוח'
        },
        { 
          name: 'מאריכי קידוח', 
          slug: 'drill-extensions',
          description: 'אביזרים להגדלת עומק הקידוח של כוסות קידוח, באורכים שונים'
        },
        { 
          name: 'מחזיקי כוסות קידוח/מקדחים', 
          slug: 'drill-holders',
          description: 'מנגנונים המחזיקים באופן יציב את כוס הקידוח במכונת הקידוח'
        },
        { 
          name: 'משאבות מים ומערכות איסוף', 
          slug: 'water-pumps',
          description: 'משאבות לאספקת מים לקידוח רטוב ומערכות לאיסוף המים והנוזלים'
        },
      ]
    },
    {
      id: 5,
      name: 'מוצרים מיוחדים',
      description: 'מוצרים ייחודיים וספציפיים בתחום קידוח היהלום, לעבודות ודרישות מיוחדות',
      image: '/placeholder.jpg',
      slug: 'special-products',
      subcategories: [
        { 
          name: 'מסורי תיל יהלום', 
          slug: 'diamond-wire-saws',
          description: 'מסורי תיל יהלום לחיתוך בטון ואבן טבעית בדייקנות גבוהה'
        },
        { 
          name: 'שרשראות יהלום', 
          slug: 'diamond-chains',
          description: 'שרשראות יהלום ליישומי חיתוך מיוחדים'
        },
        { 
          name: 'להבים מיוחדים', 
          slug: 'special-blades',
          description: 'להבים מיוחדים לדקטון ואבן מלאכותית'
        },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">מוצרים</h1>
            <p className="text-xl text-gray-300">
              כלי קידוח יהלום מקצועיים לקבלנים ואנשי מקצוע
            </p>
          </div>
        </div>
      </div>

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
            <li className="text-gray-700">מוצרים</li>
          </ol>
        </nav>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">קטגוריות מוצרים</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div key={category.id} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="h-56 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500">תמונת קטגוריה</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  <div className="mb-4">
                    <p className="font-medium mb-2">תת-קטגוריות:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {category.subcategories.map((subcat, index) => (
                        <li key={index}>
                          <Link 
                            href={`/products/${category.slug}/${subcat.slug}`}
                            className="text-orange-600 hover:text-orange-700 hover:underline"
                          >
                            {subcat.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={`/products/${category.slug}`}
                    className="text-orange-600 hover:text-orange-700 font-semibold flex items-center justify-end"
                  >
                    צפה בכל המוצרים
                    <FaChevronLeft className="mr-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">מוצרים מובילים</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <Link href="/products/diamond-core-drill-bits/wet-drilling/67mm">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">תמונת מוצר</span>
                </div>
              </Link>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  <Link href="/products/diamond-core-drill-bits/wet-drilling/67mm" className="hover:text-orange-600">
                    כוס קידוח יהלום לקידוח רטוב - 67 מ"מ
                  </Link>
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">450 ₪</span>
                  <Link
                    href="/products/diamond-core-drill-bits/wet-drilling/67mm"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md"
                  >
                    פרטים נוספים
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
              <Link href="/products/diamond-saw-blades/concrete-reinforced/350mm">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">תמונת מוצר</span>
                </div>
              </Link>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  <Link href="/products/diamond-saw-blades/concrete-reinforced/350mm" className="hover:text-orange-600">
                    מסור יהלום לבטון מזוין - 350 מ"מ
                  </Link>
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">1250 ₪</span>
                  <Link
                    href="/products/diamond-saw-blades/concrete-reinforced/350mm"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md"
                  >
                    פרטים נוספים
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
              <Link href="/products/accessories/thread-adapters/unc-bsp">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">תמונת מוצר</span>
                </div>
              </Link>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  <Link href="/products/accessories/thread-adapters/unc-bsp" className="hover:text-orange-600">
                    מתאם הברגה 1-1/4" UNC ל-1/2" BSP
                  </Link>
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">120 ₪</span>
                  <Link
                    href="/products/accessories/thread-adapters/unc-bsp"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md"
                  >
                    פרטים נוספים
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