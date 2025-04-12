import { Category, Subcategory } from '../types';

export const categories: Category[] = [
  {
    id: 1,
    name: 'כוסות קידוח יהלום',
    description: 'כוסות קידוח מקצועיות בקטרים שונים, מתאימות לקידוח רטוב ויבש ולמגוון סוגי משטחים',
    image: '/placeholder.jpg',
    slug: 'diamond-core-drill-bits',
    subcategories: [
      { 
        id: 101,
        name: 'קידוח רטוב', 
        slug: 'wet-drilling',
        description: 'כוסות קידוח המיועדות לעבודה עם מים, מספקות קירור בזמן הקידוח, אריכות חיים גבוהה וביצועים מיטביים'
      },
      { 
        id: 102,
        name: 'קידוח יבש/ואקום', 
        slug: 'dry-vacuum-drilling',
        description: 'כוסות קידוח המתוכננות לעבודה יבשה או תחת מערכת ואקום, ללא שימוש במים'
      },
      { 
        id: 103,
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
        id: 201,
        name: 'לבטון ובטון מזוין', 
        slug: 'concrete-reinforced',
        description: 'להבי מסור המיועדים לחיתוך בטון, בטון מזוין ובלוקים, בקטרים מ-200 מ"מ ועד 400 מ"מ'
      },
      { 
        id: 202,
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
        id: 301,
        name: 'מכונות קידוח רטובות', 
        slug: 'wet-drilling-machines',
        description: 'מכונות המיועדות לקידוח עם מים, לדיוק מרבי וביצוע עבודות מקצועיות'
      },
      { 
        id: 302,
        name: 'מכונות קידוח יבשות/ואקום', 
        slug: 'dry-vacuum-machines',
        description: 'מכונות המיועדות לקידוח יבש, עם או בלי מערכת שאיבת אבק משולבת'
      },
      { 
        id: 303,
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
        id: 401,
        name: 'מקדחי ואקום לקידוח יבש', 
        slug: 'vacuum-drills',
        description: 'מכונות קידוח המיועדות במיוחד לפעולה יבשה, המשלבות מערכות ואקום לשאיבת אבק'
      },
      { 
        id: 402,
        name: 'מתאמי הברגות', 
        slug: 'thread-adapters',
        description: 'מתאמים לחיבור כוסות קידוח עם סוגי הברגה שונים למכונות קידוח'
      },
      { 
        id: 403,
        name: 'מאריכי קידוח', 
        slug: 'drill-extensions',
        description: 'אביזרים להגדלת עומק הקידוח של כוסות קידוח, באורכים שונים'
      },
      { 
        id: 404,
        name: 'מחזיקי כוסות קידוח/מקדחים', 
        slug: 'drill-holders',
        description: 'מנגנונים המחזיקים באופן יציב את כוס הקידוח במכונת הקידוח'
      },
      { 
        id: 405,
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
        id: 501,
        name: 'מסורי תיל יהלום', 
        slug: 'diamond-wire-saws',
        description: 'מסורי תיל יהלום לחיתוך בטון ואבן טבעית בדייקנות גבוהה'
      },
      { 
        id: 502,
        name: 'שרשראות יהלום', 
        slug: 'diamond-chains',
        description: 'שרשראות יהלום ליישומי חיתוך מיוחדים'
      },
      { 
        id: 503,
        name: 'להבים מיוחדים', 
        slug: 'special-blades',
        description: 'להבים מיוחדים לדקטון ואבן מלאכותית'
      },
    ]
  },
];

// Helper function to get a specific category by slug
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(category => category.slug === slug);
}

// Helper function to get a specific subcategory by slug
export function getSubcategoryBySlug(categorySlug: string, subcategorySlug: string): Subcategory | undefined {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return undefined;
  
  return category.subcategories.find(subcategory => subcategory.slug === subcategorySlug);
}

// Helper function to get all subcategories
export function getAllSubcategories(): Subcategory[] {
  return categories.flatMap(category => 
    category.subcategories.map(subcategory => ({
      ...subcategory,
      categorySlug: category.slug
    }))
  );
} 