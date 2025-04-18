import { StaticImageData } from 'next/image';

// Define comprehensive type for product data
export interface Product {
  id: string;
  slug: string;
  name: string;
  nameEn?: string;
  description: string;
  shortDescription?: string;
  type: ProductType;
  category: ProductCategory;
  specifications: ProductSpecifications;
  price: number;
  discountPrice?: number;
  stock: number;
  deliveryTime: string;
  applications?: string[];
  features?: string[];
  images: string[];
  relatedProducts?: string[]; // IDs of related products
  isFeatured?: boolean;
  isNewArrival?: boolean;
  reviews?: ProductReview[];
}

export enum ProductType {
  DIAMOND_CORE_DRILL_BIT = 'diamond-core-drill-bit',
  SAW_BLADE = 'saw-blade',
  ACCESSORY = 'accessory',
  DRILL_MACHINE = 'drill-machine',
  SPECIAL_PRODUCT = 'special-product',
}

export enum ProductCategory {
  DIAMOND_CORE_DRILL_BITS = 'diamond-core-drill-bits',
  DIAMOND_SAW_BLADES = 'diamond-saw-blades',
  ACCESSORIES = 'accessories',
  DRILLING_MACHINES = 'drilling-machines',
  SPECIAL_PRODUCTS = 'special-products',
}

export interface ProductSpecifications {
  diameter?: string;
  length?: string;
  thread?: string;
  segments?: number;
  segmentHeight?: string;
  segmentType?: string;
  material?: string;
  usageType?: string;
  warranty?: string;
  power?: string;
  speed?: string;
  weight?: string;
  dimensions?: string;
  [key: string]: any; // Allow for additional custom specifications
}

export interface ProductReview {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
}

// Helper function to get image paths based on product type
const getProductImagePaths = (type: ProductType, count: number = 2): string[] => {
  switch (type) {
    case ProductType.DIAMOND_CORE_DRILL_BIT:
      const drillImages = [
        '/images/Diamond-Core-Drill-Bit/2.png',
        '/images/Diamond-Core-Drill-Bit/3.png',
        '/images/Diamond-Core-Drill-Bit/4.png',
        '/images/Diamond-Core-Drill-Bit/7.png'
      ];
      return drillImages.slice(0, count);
    case ProductType.SAW_BLADE:
      const sawImages = [
        '/images/saw-blade/4.png',
        '/images/saw-blade/1.png',
        '/images/saw-blade/7.png',
        '/images/saw-blade/5.png'
      ];
      return sawImages.slice(0, count);
    case ProductType.ACCESSORY:
      // Use all available vacuum driller images
      const accessoryImages = [
        '/images/vacum-drillers/6.png',
        '/images/vacum-drillers/9.png',
        '/images/vacum-drillers/3.png',
        '/images/vacum-drillers/2.png',
        '/images/vacum-drillers/1.png',
      ];
      return accessoryImages.slice(0, count);
    default:
      return Array(count).fill('/placeholder.jpg');
  }
};

// Product categories definition
export const productCategories = [
  {
    id: 'diamond-core-drill-bits',
    name: 'כוסות קידוח יהלום',
    description: 'כוסות קידוח מקצועיות בקטרים שונים, מתאימות לקידוח רטוב ויבש ולמגוון סוגי משטחים',
    image: '/images/Diamond-Core-Drill-Bit/6.png',
    slug: 'diamond-core-drill-bits',
  },
  {
    id: 'diamond-saw-blades',
    name: 'מסורי יהלום',
    description: 'מסורים מקצועיים לחיתוך בטון, בטון מזוין וחומרים קשים עם דיוק וביצועים מעולים',
    image: '/images/saw-blade/7.png',
    slug: 'diamond-saw-blades',
  },
  {
    id: 'accessories',
    name: 'אביזרים נלווים',
    description: 'אביזרים משלימים לכלי הקידוח: מתאמים, מקדחים ואביזרי עזר שיעזרו לכם לבצע את העבודה בצורה מושלמת',
    image: '/images/vacum-drillers/6.png',
    slug: 'accessories',
  },
];

// Define products array
const products: Product[] = [
  // Wet Diamond Core Drill Bits
  {
    id: 'wet-drill-67mm',
    slug: 'wet-drill-67mm',
    name: 'כוס קידוח יהלום ברטוב בקוטר 67 מ"מ',
    nameEn: 'Wet Diamond Core Drill Bit - 67mm',
    description: 'כוס קידוח יהלום מקצועית בקוטר 67 מ"מ, מיועדת לקידוח רטוב בבטון ובטון מזוין. בעלת הברגה 1-1/4" UNC, אורך אפקטיבי מותאם לעבודה מדויקת בבתים ובאתרי בניה.',
    shortDescription: 'כוס קידוח יהלום מקצועית בקוטר 67 מ"מ לקידוח רטוב בבטון ובטון מזוין',
    type: ProductType.DIAMOND_CORE_DRILL_BIT,
    category: ProductCategory.DIAMOND_CORE_DRILL_BITS,
    specifications: {
      diameter: '67 מ"מ',
      length: '450 מ"מ',
      thread: '1-1/4" UNC',
      segments: 8,
      segmentHeight: '10 מ"מ',
      segmentType: 'Premium',
      material: 'בטון, בטון מזוין',
      usageType: 'רטוב',
      warranty: '12 חודשים',
    },
    price: 450,
    discountPrice: 399,
    stock: 10,
    deliveryTime: '1-3 ימי עסקים',
    applications: ['קידוח בבטון', 'קידוח בבטון מזוין', 'ביצוע עבודות אינסטלציה'],
    features: [
      'חוזק וקשיחות גבוהים',
      'אורך חיים ארוך',
      'קצב חדירה גבוה',
    ],
    images: getProductImagePaths(ProductType.DIAMOND_CORE_DRILL_BIT, 3),
    relatedProducts: ['wet-drill-72mm', 'wet-drill-77mm', 'wet-drill-82mm'],
    isFeatured: true,
  },
  {
    id: 'wet-drill-72mm',
    slug: 'wet-drill-72mm',
    name: 'כוס קידוח יהלום ברטוב בקוטר 72 מ"מ',
    nameEn: 'Wet Diamond Core Drill Bit - 72mm',
    description: 'כוס קידוח יהלום מקצועית בקוטר 72 מ"מ, עונה על דרישות קידוח עדינות במבנים עם בטון קל, עם תכנון לאופטימיזציה של זרימת המים.',
    shortDescription: 'כוס קידוח יהלום מקצועית בקוטר 72 מ"מ לקידוח רטוב בבטון ובטון מזוין',
    type: ProductType.DIAMOND_CORE_DRILL_BIT,
    category: ProductCategory.DIAMOND_CORE_DRILL_BITS,
    specifications: {
      diameter: '72 מ"מ',
      length: '450 מ"מ',
      thread: '1-1/4" UNC',
      segments: 8,
      segmentHeight: '10 מ"מ',
      segmentType: 'Premium',
      material: 'בטון, בטון קל',
      usageType: 'רטוב',
      warranty: '12 חודשים',
    },
    price: 480,
    discountPrice: 430,
    stock: 12,
    deliveryTime: '1-3 ימי עסקים',
    applications: ['קידוח בבטון', 'קידוח בבטון קל', 'ביצוע עבודות אינסטלציה'],
    features: [
      'תכנון לאופטימיזציה של זרימת המים',
      'אורך חיים ארוך',
      'קצב חדירה גבוה',
    ],
    images: getProductImagePaths(ProductType.DIAMOND_CORE_DRILL_BIT, 2),
    relatedProducts: ['wet-drill-67mm', 'wet-drill-77mm', 'wet-drill-82mm'],
    isFeatured: false,
  },
  {
    id: 'wet-drill-77mm',
    slug: 'wet-drill-77mm',
    name: 'כוס קידוח יהלום ברטוב בקוטר 77 מ"מ',
    nameEn: 'Wet Diamond Core Drill Bit - 77mm',
    description: 'כוס קידוח יהלום מקצועית בקוטר 77 מ"מ, אידיאלית לקידוח בטון מזוין, עם עמידות גבוהה ויכולת קידוח בשטחי עבודה תובעניים.',
    shortDescription: 'כוס קידוח יהלום מקצועית בקוטר 77 מ"מ לקידוח רטוב בבטון ובטון מזוין',
    type: ProductType.DIAMOND_CORE_DRILL_BIT,
    category: ProductCategory.DIAMOND_CORE_DRILL_BITS,
    specifications: {
      diameter: '77 מ"מ',
      length: '450 מ"מ',
      thread: '1-1/4" UNC',
      segments: 8,
      segmentHeight: '10 מ"מ',
      segmentType: 'Premium',
      material: 'בטון, בטון מזוין',
      usageType: 'רטוב',
      warranty: '12 חודשים',
    },
    price: 520,
    discountPrice: 470,
    stock: 8,
    deliveryTime: '1-3 ימי עסקים',
    applications: ['קידוח בבטון', 'קידוח בבטון מזוין', 'ביצוע עבודות אינסטלציה'],
    features: [
      'עמידות גבוהה במיוחד',
      'אורך חיים ארוך',
      'מתאים לשטחי עבודה תובעניים',
    ],
    images: getProductImagePaths(ProductType.DIAMOND_CORE_DRILL_BIT, 2),
    relatedProducts: ['wet-drill-67mm', 'wet-drill-72mm', 'wet-drill-82mm'],
    isFeatured: false,
  },
  {
    id: 'wet-drill-82mm',
    slug: 'wet-drill-82mm',
    name: 'כוס קידוח יהלום ברטוב בקוטר 82 מ"מ',
    nameEn: 'Wet Diamond Core Drill Bit - 82mm',
    description: 'כוס קידוח יהלום מקצועית בקוטר 82 מ"מ, משולבת טכנולוגיה חדשנית להקטנת החימום והגברת הדיוק בעת הקידוח.',
    shortDescription: 'כוס קידוח יהלום מקצועית בקוטר 82 מ"מ לקידוח רטוב בבטון ובטון מזוין',
    type: ProductType.DIAMOND_CORE_DRILL_BIT,
    category: ProductCategory.DIAMOND_CORE_DRILL_BITS,
    specifications: {
      diameter: '82 מ"מ',
      length: '450 מ"מ',
      thread: '1-1/4" UNC',
      segments: 9,
      segmentHeight: '10 מ"מ',
      segmentType: 'Premium Plus',
      material: 'בטון, בטון מזוין',
      usageType: 'רטוב',
      warranty: '12 חודשים',
    },
    price: 550,
    discountPrice: 499,
    stock: 7,
    deliveryTime: '1-3 ימי עסקים',
    applications: ['קידוח בבטון', 'קידוח בבטון מזוין', 'ביצוע עבודות אינסטלציה'],
    features: [
      'טכנולוגיה להקטנת החימום',
      'דיוק מוגבר בעת הקידוח',
      'ביצועים משופרים',
    ],
    images: getProductImagePaths(ProductType.DIAMOND_CORE_DRILL_BIT, 2),
    relatedProducts: ['wet-drill-77mm', 'wet-drill-91mm', 'wet-drill-102mm'],
    isFeatured: false,
  },
  {
    id: 'wet-drill-91mm',
    slug: 'wet-drill-91mm',
    name: 'כוס קידוח יהלום ברטוב בקוטר 91 מ"מ',
    nameEn: 'Wet Diamond Core Drill Bit - 91mm',
    description: 'כוס קידוח יהלום מקצועית בקוטר 91 מ"מ, מיועדת לעבודות כבדות, עם דגש על חוזק וביצועים יציבים לאורך זמן.',
    shortDescription: 'כוס קידוח יהלום מקצועית בקוטר 91 מ"מ לקידוח רטוב בבטון ובטון מזוין',
    type: ProductType.DIAMOND_CORE_DRILL_BIT,
    category: ProductCategory.DIAMOND_CORE_DRILL_BITS,
    specifications: {
      diameter: '91 מ"מ',
      length: '450 מ"מ',
      thread: '1-1/4" UNC',
      segments: 9,
      segmentHeight: '10 מ"מ',
      segmentType: 'Premium Plus',
      material: 'בטון, בטון מזוין',
      usageType: 'רטוב',
      warranty: '12 חודשים',
    },
    price: 620,
    discountPrice: 570,
    stock: 6,
    deliveryTime: '1-3 ימי עסקים',
    applications: ['קידוח בבטון', 'קידוח בבטון מזוין', 'עבודות אינסטלציה כבדות'],
    features: [
      'חוזק מוגבר לעבודות כבדות',
      'ביצועים יציבים לאורך זמן',
      'עמידות גבוהה במיוחד',
    ],
    images: getProductImagePaths(ProductType.DIAMOND_CORE_DRILL_BIT, 2),
    relatedProducts: ['wet-drill-82mm', 'wet-drill-102mm', 'wet-drill-132mm'],
    isFeatured: false,
  },
  // Diamond Core Drill Bits - 102mm
  {
    id: 'arix-102mm',
    slug: 'arix-102mm',
    name: 'כוס קידוח יהלום לקידוח רטוב עם סגמנט Arix – בקוטר 102 מ"מ',
    nameEn: 'Diamond Core Drill Bit with Arix Segment - 102mm',
    description: 'כוס קידוח מקצועית עם סגמנט Arix בקוטר 102 מ"מ, מתאימה לקידוח רטוב בבטון, בטון מזוין וחומרים קשים. איכות מעולה וביצועים מיטביים עם אורך חיים ארוך במיוחד.',
    shortDescription: 'כוס קידוח יהלום מקצועית עם סגמנט Arix בקוטר 102 מ"מ לקידוח רטוב בבטון ובטון מזוין',
    type: ProductType.DIAMOND_CORE_DRILL_BIT,
    category: ProductCategory.DIAMOND_CORE_DRILL_BITS,
    specifications: {
      diameter: '102 מ"מ',
      length: '450 מ"מ',
      thread: '1-1/4" UNC',
      segments: 9,
      segmentHeight: '10 מ"מ',
      segmentType: 'Arix Premium',
      material: 'בטון, בטון מזוין',
      usageType: 'רטוב',
      warranty: '12 חודשים',
    },
    price: 750,
    discountPrice: 670,
    stock: 5,
    deliveryTime: '1-3 ימי עסקים',
    applications: ['קידוח בבטון', 'קידוח בבטון מזוין', 'קידוח בבלוקים', 'ביצוע עבודות אינסטלציה'],
    features: [
      'סגמנט Arix איכותי במיוחד',
      'חוזק וקשיחות גבוהים',
      'אורך חיים ארוך במיוחד',
      'קצב חדירה גבוה',
    ],
    images: getProductImagePaths(ProductType.DIAMOND_CORE_DRILL_BIT, 3),
    relatedProducts: ['arix-67mm', 'arix-77mm', 'adapter-unc-bsp'],
    isFeatured: true,
  },
  
  // Accessories - Adapter
  {
    id: 'adapter-unc-bsp',
    slug: 'adapter-unc-bsp',
    name: 'מתאם הברגה 1-1/4" UNC ל-1/2" BSP',
    nameEn: 'Thread Adapter 1-1/4" UNC to 1/2" BSP',
    description: 'מתאם הברגה מקצועי המאפשר חיבור בין כוסות קידוח עם הברגת 1-1/4" UNC למכונות קידוח עם הברגת 1/2" BSP. מיוצר מפלדת כרום-מוליבדן באיכות גבוהה.',
    shortDescription: 'מתאם הברגה מקצועי לחיבור בין כוסות קידוח להברגות שונות',
    type: ProductType.ACCESSORY,
    category: ProductCategory.ACCESSORIES,
    specifications: {
      material: 'פלדת כרום-מוליבדן',
      inputThread: '1-1/4" UNC',
      outputThread: '1/2" BSP',
      length: '50 מ"מ',
      warranty: '12 חודשים',
    },
    price: 120,
    discountPrice: 99,
    stock: 15,
    deliveryTime: '1-3 ימי עסקים',
    features: [
      'מיוצר מפלדה באיכות גבוהה',
      'מתאים לשימוש אינטנסיבי',
      'נוח לשימוש',
    ],
    images: getProductImagePaths(ProductType.ACCESSORY, 2),
    relatedProducts: ['adapter-bsp-unc', 'arix-67mm', 'arix-77mm'],
    isFeatured: false,
  },
  {
    id: 'wet-drill-102mm',
    slug: 'wet-drill-102mm',
    name: 'כוס קידוח יהלום ברטוב בקוטר 102 מ"מ',
    nameEn: 'Wet Diamond Core Drill Bit - 102mm',
    description: 'כוס קידוח יהלום מקצועית בקוטר 102 מ"מ, מוצר מקצועי לקידוח בבטון עוצמתי, עם מפרט טכני מלא לתמיכה בעבודות ענק.',
    shortDescription: 'כוס קידוח יהלום מקצועית בקוטר 102 מ"מ לקידוח רטוב בבטון ובטון מזוין',
    type: ProductType.DIAMOND_CORE_DRILL_BIT,
    category: ProductCategory.DIAMOND_CORE_DRILL_BITS,
    specifications: {
      diameter: '102 מ"מ',
      length: '450 מ"מ',
      thread: '1-1/4" UNC',
      segments: 10,
      segmentHeight: '10 מ"מ',
      segmentType: 'Heavy Duty',
      material: 'בטון, בטון מזוין, בטון עוצמתי',
      usageType: 'רטוב',
      warranty: '12 חודשים',
    },
    price: 700,
    discountPrice: 650,
    stock: 5,
    deliveryTime: '1-3 ימי עסקים',
    applications: ['קידוח בבטון', 'קידוח בבטון מזוין', 'קידוח בבטון עוצמתי', 'עבודות תשתית כבדות'],
    features: [
      'מפרט טכני מתקדם',
      'מתאים לעבודות ענק',
      'חוזק מוגבר',
    ],
    images: getProductImagePaths(ProductType.DIAMOND_CORE_DRILL_BIT, 2),
    relatedProducts: ['wet-drill-91mm', 'wet-drill-132mm', 'wet-drill-162mm'],
    isFeatured: true,
  },
  {
    id: 'wet-drill-132mm',
    slug: 'wet-drill-132mm',
    name: 'כוס קידוח יהלום ברטוב בקוטר 132 מ"מ',
    nameEn: 'Wet Diamond Core Drill Bit - 132mm',
    description: 'כוס קידוח יהלום מקצועית בקוטר 132 מ"מ, מיועדת לפרויקטים גדולים ותעשייתיים הדורשים חיתוך בקוטר רחב במיוחד.',
    shortDescription: 'כוס קידוח יהלום מקצועית בקוטר 132 מ"מ לקידוח רטוב בבטון ובטון מזוין',
    type: ProductType.DIAMOND_CORE_DRILL_BIT,
    category: ProductCategory.DIAMOND_CORE_DRILL_BITS,
    specifications: {
      diameter: '132 מ"מ',
      length: '450 מ"מ',
      thread: '1-1/4" UNC',
      segments: 12,
      segmentHeight: '10 מ"מ',
      segmentType: 'Industrial',
      material: 'בטון, בטון מזוין, בטון תעשייתי',
      usageType: 'רטוב',
      warranty: '12 חודשים',
    },
    price: 900,
    discountPrice: 820,
    stock: 4,
    deliveryTime: '1-3 ימי עסקים',
    applications: ['קידוח בבטון', 'קידוח בבטון מזוין', 'פרויקטים תעשייתיים', 'עבודות תשתית כבדות'],
    features: [
      'מתאים לפרויקטים גדולים',
      'קידוח בקוטר רחב במיוחד',
      'ביצועים תעשייתיים',
    ],
    images: getProductImagePaths(ProductType.DIAMOND_CORE_DRILL_BIT, 2),
    relatedProducts: ['wet-drill-102mm', 'wet-drill-162mm', 'wet-drill-200mm'],
    isFeatured: false,
  },
  {
    id: 'wet-drill-162mm',
    slug: 'wet-drill-162mm',
    name: 'כוס קידוח יהלום ברטוב בקוטר 162 מ"מ',
    nameEn: 'Wet Diamond Core Drill Bit - 162mm',
    description: 'כוס קידוח יהלום מקצועית בקוטר 162 מ"מ, מתאים לפרויקטים מורכבים, כאשר נדרשת קידוח בקוטר גדול ובתנאי עבודה קשים.',
    shortDescription: 'כוס קידוח יהלום מקצועית בקוטר 162 מ"מ לקידוח רטוב בבטון ובטון מזוין',
    type: ProductType.DIAMOND_CORE_DRILL_BIT,
    category: ProductCategory.DIAMOND_CORE_DRILL_BITS,
    specifications: {
      diameter: '162 מ"מ',
      length: '500 מ"מ',
      thread: '1-1/4" UNC',
      segments: 14,
      segmentHeight: '12 מ"מ',
      segmentType: 'Industrial Plus',
      material: 'בטון, בטון מזוין, בטון תעשייתי',
      usageType: 'רטוב',
      warranty: '12 חודשים',
    },
    price: 1200,
    discountPrice: 1050,
    stock: 3,
    deliveryTime: '2-4 ימי עסקים',
    applications: ['קידוח בבטון', 'קידוח בבטון מזוין', 'פרויקטים תעשייתיים מורכבים', 'עבודות תשתית כבדות'],
    features: [
      'מתאים לפרויקטים מורכבים',
      'ביצועים בתנאי עבודה קשים',
      'חוזק ועמידות גבוהים במיוחד',
    ],
    images: getProductImagePaths(ProductType.DIAMOND_CORE_DRILL_BIT, 2),
    relatedProducts: ['wet-drill-132mm', 'wet-drill-200mm'],
    isFeatured: false,
  },
  {
    id: 'wet-drill-200mm',
    slug: 'wet-drill-200mm',
    name: 'כוס קידוח יהלום ברטוב בקוטר 200 מ"מ',
    nameEn: 'Wet Diamond Core Drill Bit - 200mm',
    description: 'כוס קידוח יהלום מקצועית בקוטר 200 מ"מ, מוצר יוקרתי לאתגרי קידוח מיוחדים, כאשר דרושה עמידות יוצאת דופן ותוצאות מדויקות.',
    shortDescription: 'כוס קידוח יהלום מקצועית בקוטר 200 מ"מ לקידוח רטוב בבטון ובטון מזוין',
    type: ProductType.DIAMOND_CORE_DRILL_BIT,
    category: ProductCategory.DIAMOND_CORE_DRILL_BITS,
    specifications: {
      diameter: '200 מ"מ',
      length: '500 מ"מ',
      thread: '1-1/4" UNC',
      segments: 18,
      segmentHeight: '12 מ"מ',
      segmentType: 'Premium Industrial',
      material: 'בטון, בטון מזוין, בטון תעשייתי',
      usageType: 'רטוב',
      warranty: '12 חודשים',
    },
    price: 1500,
    discountPrice: 1350,
    stock: 2,
    deliveryTime: '2-4 ימי עסקים',
    applications: ['קידוח בבטון', 'קידוח בבטון מזוין', 'אתגרי קידוח מיוחדים', 'עבודות תשתית מורכבות'],
    features: [
      'מוצר יוקרתי',
      'עמידות יוצאת דופן',
      'תוצאות מדויקות',
      'מתאים לפרויקטים מיוחדים',
    ],
    images: getProductImagePaths(ProductType.DIAMOND_CORE_DRILL_BIT, 2),
    relatedProducts: ['wet-drill-162mm', 'wet-drill-132mm'],
    isFeatured: true,
  },
  
  // Diamond Saw Blades
  {
    id: 'saw-blade-200mm',
    slug: 'saw-blade-200mm',
    name: 'מסור יהלום לבטון מזוין בקוטר 200 מ"מ',
    nameEn: 'Diamond Saw Blade for Reinforced Concrete - 200mm',
    description: 'מסור יהלום לבטון מזוין בקוטר 200 מ"מ, מוצר יעיל המתוכנן לחיתוך חזק ומהיר של בטון כבד.',
    shortDescription: 'מסור יהלום מקצועי בקוטר 200 מ"מ לחיתוך בטון מזוין',
    type: ProductType.SAW_BLADE,
    category: ProductCategory.DIAMOND_SAW_BLADES,
    specifications: {
      diameter: '200 מ"מ',
      segments: 12,
      segmentHeight: '10 מ"מ',
      material: 'בטון, בטון מזוין',
      warranty: '12 חודשים',
    },
    price: 350,
    discountPrice: 320,
    stock: 8,
    deliveryTime: '1-3 ימי עסקים',
    applications: ['חיתוך בטון', 'חיתוך בטון מזוין', 'עבודות שיפוץ'],
    features: [
      'חיתוך חזק ומהיר',
      'מתאים לבטון כבד',
      'ביצועים יציבים',
    ],
    images: getProductImagePaths(ProductType.SAW_BLADE, 2),
    relatedProducts: ['saw-blade-250mm', 'saw-blade-300mm'],
    isFeatured: false,
  },
  {
    id: 'saw-blade-250mm',
    slug: 'saw-blade-250mm',
    name: 'מסור יהלום לבטון מזוין בקוטר 250 מ"מ',
    nameEn: 'Diamond Saw Blade for Reinforced Concrete - 250mm',
    description: 'מסור יהלום לבטון מזוין בקוטר 250 מ"מ, מאפשר חיתוך רחב ומדויק עבור פרויקטים תעשייתיים כבדים.',
    shortDescription: 'מסור יהלום מקצועי בקוטר 250 מ"מ לחיתוך בטון מזוין',
    type: ProductType.SAW_BLADE,
    category: ProductCategory.DIAMOND_SAW_BLADES,
    specifications: {
      diameter: '250 מ"מ',
      segments: 15,
      segmentHeight: '10 מ"מ',
      material: 'בטון, בטון מזוין',
      warranty: '12 חודשים',
    },
    price: 450,
    discountPrice: 410,
    stock: 6,
    deliveryTime: '1-3 ימי עסקים',
    applications: ['חיתוך בטון', 'חיתוך בטון מזוין', 'פרויקטים תעשייתיים'],
    features: [
      'חיתוך רחב ומדויק',
      'מתאים לפרויקטים כבדים',
      'ביצועים יציבים',
    ],
    images: getProductImagePaths(ProductType.SAW_BLADE, 2),
    relatedProducts: ['saw-blade-200mm', 'saw-blade-300mm', 'saw-blade-350mm'],
    isFeatured: false,
  },
  {
    id: 'saw-blade-300mm',
    slug: 'saw-blade-300mm',
    name: 'מסור יהלום לבטון מזוין בקוטר 300 מ"מ',
    nameEn: 'Diamond Saw Blade for Reinforced Concrete - 300mm',
    description: 'מסור יהלום לבטון מזוין בקוטר 300 מ"מ, מותאם לעבודה עם חומרים כבדים, מספק תוצאות מדויקות באתרים גדולים.',
    shortDescription: 'מסור יהלום מקצועי בקוטר 300 מ"מ לחיתוך בטון מזוין',
    type: ProductType.SAW_BLADE,
    category: ProductCategory.DIAMOND_SAW_BLADES,
    specifications: {
      diameter: '300 מ"מ',
      segments: 18,
      segmentHeight: '12 מ"מ',
      material: 'בטון, בטון מזוין',
      warranty: '12 חודשים',
    },
    price: 600,
    discountPrice: 550,
    stock: 5,
    deliveryTime: '1-3 ימי עסקים',
    applications: ['חיתוך בטון', 'חיתוך בטון מזוין', 'אתרי בנייה גדולים'],
    features: [
      'מותאם לחומרים כבדים',
      'תוצאות מדויקות',
      'ביצועים יציבים באתרים גדולים',
    ],
    images: getProductImagePaths(ProductType.SAW_BLADE, 2),
    relatedProducts: ['saw-blade-250mm', 'saw-blade-350mm', 'saw-blade-400mm'],
    isFeatured: true,
  },
  {
    id: 'saw-blade-350mm',
    slug: 'saw-blade-350mm',
    name: 'מסור יהלום לבטון מזוין בקוטר 350 מ"מ',
    nameEn: 'Diamond Saw Blade for Reinforced Concrete - 350mm',
    description: 'מסור יהלום לבטון מזוין בקוטר 350 מ"מ, פתרון מקצועי, נפוץ בפרויקטים גדולים, עם עמידות ושירותיות גבוהה לאורך זמן.',
    shortDescription: 'מסור יהלום מקצועי בקוטר 350 מ"מ לחיתוך בטון מזוין',
    type: ProductType.SAW_BLADE,
    category: ProductCategory.DIAMOND_SAW_BLADES,
    specifications: {
      diameter: '350 מ"מ',
      segments: 21,
      segmentHeight: '12 מ"מ',
      material: 'בטון, בטון מזוין',
      warranty: '12 חודשים',
    },
    price: 750,
    discountPrice: 680,
    stock: 4,
    deliveryTime: '2-4 ימי עסקים',
    applications: ['חיתוך בטון', 'חיתוך בטון מזוין', 'פרויקטים גדולים', 'עבודות תשתית'],
    features: [
      'עמידות גבוהה',
      'שירותיות גבוהה לאורך זמן',
      'פתרון מקצועי לפרויקטים גדולים',
    ],
    images: getProductImagePaths(ProductType.SAW_BLADE, 2),
    relatedProducts: ['saw-blade-300mm', 'saw-blade-400mm'],
    isFeatured: false,
  },
  {
    id: 'saw-blade-400mm',
    slug: 'saw-blade-400mm',
    name: 'מסור יהלום לבטון מזוין בקוטר 400 מ"מ',
    nameEn: 'Diamond Saw Blade for Reinforced Concrete - 400mm',
    description: 'מסור יהלום לבטון מזוין בקוטר 400 מ"מ, מיועד לפרויקטים תעשייתיים מתקדמים, עם תכנון שמבטיח יציבות וביצועים מיטביים תחת עומסים כבדים.',
    shortDescription: 'מסור יהלום מקצועי בקוטר 400 מ"מ לחיתוך בטון מזוין',
    type: ProductType.SAW_BLADE,
    category: ProductCategory.DIAMOND_SAW_BLADES,
    specifications: {
      diameter: '400 מ"מ',
      segments: 24,
      segmentHeight: '15 מ"מ',
      material: 'בטון, בטון מזוין',
      warranty: '12 חודשים',
    },
    price: 950,
    discountPrice: 850,
    stock: 3,
    deliveryTime: '2-4 ימי עסקים',
    applications: ['חיתוך בטון', 'חיתוך בטון מזוין', 'פרויקטים תעשייתיים מתקדמים', 'עבודות תשתית כבדות'],
    features: [
      'תכנון לעומסים כבדים',
      'יציבות גבוהה',
      'ביצועים מיטביים בפרויקטים תעשייתיים',
    ],
    images: getProductImagePaths(ProductType.SAW_BLADE, 2),
    relatedProducts: ['saw-blade-350mm', 'saw-blade-300mm'],
    isFeatured: true,
  },
  
  // Vacuum Drills
  {
    id: 'vacuum-drill-80mm',
    slug: 'vacuum-drill-80mm',
    name: 'מקדח ואקום בקוטר 80 מ"מ',
    nameEn: 'Vacuum Drill Bit - 80mm',
    description: 'מקדח ואקום בקוטר 80 מ"מ, מתאים לעבודות קידוח יבשות שבהן נדרשת זרימת אוויר מונעת התחממות.',
    shortDescription: 'מקדח ואקום מקצועי בקוטר 80 מ"מ לקידוח יבש',
    type: ProductType.ACCESSORY,
    category: ProductCategory.ACCESSORIES,
    specifications: {
      diameter: '80 מ"מ',
      length: '400 מ"מ',
      thread: '1-1/4" UNC',
      material: 'בטון, בטון מזוין',
      usageType: 'יבש',
      warranty: '12 חודשים',
    },
    price: 480,
    discountPrice: 430,
    stock: 5,
    deliveryTime: '1-3 ימי עסקים',
    applications: ['קידוח יבש בבטון', 'קידוח יבש בבטון מזוין', 'עבודות בסביבה רגישה למים'],
    features: [
      'זרימת אוויר מונעת התחממות',
      'מתאים לעבודות קידוח יבשות',
      'ביצועים יציבים',
    ],
    images: getProductImagePaths(ProductType.ACCESSORY, 2),
    relatedProducts: ['vacuum-drill-85mm', 'vacuum-drill-90mm'],
    isFeatured: false,
  },
  {
    id: 'vacuum-drill-85mm',
    slug: 'vacuum-drill-85mm',
    name: 'מקדח ואקום בקוטר 85 מ"מ',
    nameEn: 'Vacuum Drill Bit - 85mm',
    description: 'מקדח ואקום בקוטר 85 מ"מ, מוצר המיועד לשימור איכות הקידוח גם בתנאי עבודה מאתגרים.',
    shortDescription: 'מקדח ואקום מקצועי בקוטר 85 מ"מ לקידוח יבש',
    type: ProductType.ACCESSORY,
    category: ProductCategory.ACCESSORIES,
    specifications: {
      diameter: '85 מ"מ',
      length: '400 מ"מ',
      thread: '1-1/4" UNC',
      material: 'בטון, בטון מזוין',
      usageType: 'יבש',
      warranty: '12 חודשים',
    },
    price: 500,
    discountPrice: 450,
    stock: 4,
    deliveryTime: '1-3 ימי עסקים',
    applications: ['קידוח יבש בבטון', 'קידוח יבש בבטון מזוין', 'עבודות בתנאים מאתגרים'],
    features: [
      'שימור איכות הקידוח',
      'מתאים לתנאי עבודה מאתגרים',
      'ביצועים יציבים',
    ],
    images: getProductImagePaths(ProductType.ACCESSORY, 2),
    relatedProducts: ['vacuum-drill-80mm', 'vacuum-drill-90mm', 'vacuum-drill-95mm'],
    isFeatured: false,
  },
  {
    id: 'vacuum-drill-90mm',
    slug: 'vacuum-drill-90mm',
    name: 'מקדח ואקום בקוטר 90 מ"מ',
    nameEn: 'Vacuum Drill Bit - 90mm',
    description: 'מקדח ואקום בקוטר 90 מ"מ, פתרון יעיל לעבודה מתמשכת עם דגש על עמידות גבוהה.',
    shortDescription: 'מקדח ואקום מקצועי בקוטר 90 מ"מ לקידוח יבש',
    type: ProductType.ACCESSORY,
    category: ProductCategory.ACCESSORIES,
    specifications: {
      diameter: '90 מ"מ',
      length: '400 מ"מ',
      thread: '1-1/4" UNC',
      material: 'בטון, בטון מזוין',
      usageType: 'יבש',
      warranty: '12 חודשים',
    },
    price: 520,
    discountPrice: 470,
    stock: 6,
    deliveryTime: '1-3 ימי עסקים',
    applications: ['קידוח יבש בבטון', 'קידוח יבש בבטון מזוין', 'עבודה מתמשכת'],
    features: [
      'עמידות גבוהה',
      'פתרון יעיל לעבודה מתמשכת',
      'ביצועים יציבים',
    ],
    images: getProductImagePaths(ProductType.ACCESSORY, 2),
    relatedProducts: ['vacuum-drill-85mm', 'vacuum-drill-95mm', 'vacuum-drill-100mm'],
    isFeatured: false,
  },
  {
    id: 'vacuum-drill-95mm',
    slug: 'vacuum-drill-95mm',
    name: 'מקדח ואקום בקוטר 95 מ"מ',
    nameEn: 'Vacuum Drill Bit - 95mm',
    description: 'מקדח ואקום בקוטר 95 מ"מ, מוצר עם טכנולוגיות מתקדמות לניהול חום, אידיאלי לפרויקטים תעשייתיים.',
    shortDescription: 'מקדח ואקום מקצועי בקוטר 95 מ"מ לקידוח יבש',
    type: ProductType.ACCESSORY,
    category: ProductCategory.ACCESSORIES,
    specifications: {
      diameter: '95 מ"מ',
      length: '400 מ"מ',
      thread: '1-1/4" UNC',
      material: 'בטון, בטון מזוין',
      usageType: 'יבש',
      warranty: '12 חודשים',
    },
    price: 550,
    discountPrice: 500,
    stock: 4,
    deliveryTime: '1-3 ימי עסקים',
    applications: ['קידוח יבש בבטון', 'קידוח יבש בבטון מזוין', 'פרויקטים תעשייתיים'],
    features: [
      'טכנולוגיות מתקדמות לניהול חום',
      'אידיאלי לפרויקטים תעשייתיים',
      'ביצועים יציבים בתנאים קשים',
    ],
    images: getProductImagePaths(ProductType.ACCESSORY, 2),
    relatedProducts: ['vacuum-drill-90mm', 'vacuum-drill-100mm', 'vacuum-drill-105mm'],
    isFeatured: false,
  },
  {
    id: 'vacuum-drill-100mm',
    slug: 'vacuum-drill-100mm',
    name: 'מקדח ואקום בקוטר 100 מ"מ',
    nameEn: 'Vacuum Drill Bit - 100mm',
    description: 'מקדח ואקום בקוטר 100 מ"מ, מציע ביצועים גבוהים וקידוח מהיר ואמין בסביבות עבודה יבשות מאוד.',
    shortDescription: 'מקדח ואקום מקצועי בקוטר 100 מ"מ לקידוח יבש',
    type: ProductType.ACCESSORY,
    category: ProductCategory.ACCESSORIES,
    specifications: {
      diameter: '100 מ"מ',
      length: '400 מ"מ',
      thread: '1-1/4" UNC',
      material: 'בטון, בטון מזוין',
      usageType: 'יבש',
      warranty: '12 חודשים',
    },
    price: 580,
    discountPrice: 530,
    stock: 5,
    deliveryTime: '1-3 ימי עסקים',
    applications: ['קידוח יבש בבטון', 'קידוח יבש בבטון מזוין', 'סביבות עבודה יבשות מאוד'],
    features: [
      'ביצועים גבוהים',
      'קידוח מהיר ואמין',
      'מתאים לסביבות יבשות במיוחד',
    ],
    images: getProductImagePaths(ProductType.ACCESSORY, 2),
    relatedProducts: ['vacuum-drill-95mm', 'vacuum-drill-105mm'],
    isFeatured: true,
  },
  {
    id: 'vacuum-drill-105mm',
    slug: 'vacuum-drill-105mm',
    name: 'מקדח ואקום בקוטר 105 מ"מ',
    nameEn: 'Vacuum Drill Bit - 105mm',
    description: 'מקדח ואקום בקוטר 105 מ"מ, מוצר לוואקום המיועד לפרויקטים גדולים המחייבים כוח ומהירות ברמה מקצועית.',
    shortDescription: 'מקדח ואקום מקצועי בקוטר 105 מ"מ לקידוח יבש',
    type: ProductType.ACCESSORY,
    category: ProductCategory.ACCESSORIES,
    specifications: {
      diameter: '105 מ"מ',
      length: '400 מ"מ',
      thread: '1-1/4" UNC',
      material: 'בטון, בטון מזוין',
      usageType: 'יבש',
      warranty: '12 חודשים',
    },
    price: 600,
    discountPrice: 550,
    stock: 3,
    deliveryTime: '1-3 ימי עסקים',
    applications: ['קידוח יבש בבטון', 'קידוח יבש בבטון מזוין', 'פרויקטים גדולים מקצועיים'],
    features: [
      'כוח ומהירות ברמה מקצועית',
      'מיועד לפרויקטים גדולים',
      'ביצועים יציבים בתנאים מאתגרים',
    ],
    images: getProductImagePaths(ProductType.ACCESSORY, 2),
    relatedProducts: ['vacuum-drill-100mm', 'vacuum-drill-95mm'],
    isFeatured: false,
  },
  
  // Thread adapter (keeping from original)
  {
    id: 'adapter-unc-bsp',
    slug: 'adapter-unc-bsp',
    name: 'מתאם הברגה 1-1/4" UNC ל-1/2" BSP',
    nameEn: 'Thread Adapter 1-1/4" UNC to 1/2" BSP',
    description: 'מתאם הברגה מקצועי המאפשר חיבור בין כוסות קידוח עם הברגת 1-1/4" UNC למכונות קידוח עם הברגת 1/2" BSP. מיוצר מפלדת כרום-מוליבדן באיכות גבוהה.',
    shortDescription: 'מתאם הברגה מקצועי לחיבור בין כוסות קידוח להברגות שונות',
    type: ProductType.ACCESSORY,
    category: ProductCategory.ACCESSORIES,
    specifications: {
      material: 'פלדת כרום-מוליבדן',
      inputThread: '1-1/4" UNC',
      outputThread: '1/2" BSP',
      length: '50 מ"מ',
      warranty: '12 חודשים',
    },
    price: 120,
    discountPrice: 99,
    stock: 15,
    deliveryTime: '1-3 ימי עסקים',
    features: [
      'מיוצר מפלדה באיכות גבוהה',
      'מתאים לשימוש אינטנסיבי',
      'נוח לשימוש',
    ],
    images: getProductImagePaths(ProductType.ACCESSORY, 2),
    relatedProducts: ['wet-drill-67mm', 'wet-drill-77mm', 'vacuum-drill-90mm'],
    isFeatured: false,
  },
  // Add these products after the existing wet-drill products
  {
    id: 'wet-drill-42mm-half-inch',
    slug: 'wet-drill-42mm-half-inch',
    name: 'כוס קידוח יהלום ברטוב בקוטר 42 מ"מ עם הברגה "1/2',
    nameEn: 'Wet Diamond Core Drill Bit - 42mm with 1/2" Thread',
    description: 'כוס קידוח יהלום מקצועית בקוטר 42 מ"מ, עם הברגה "1/2, מיועדת לקידוח רטוב בבטון ובטון מזוין. מתאימה למגוון מכונות קידוח עם הברגה "1/2.',
    shortDescription: 'כוס קידוח יהלום מקצועית בקוטר 42 מ"מ עם הברגה "1/2 לקידוח רטוב בבטון',
    type: ProductType.DIAMOND_CORE_DRILL_BIT,
    category: ProductCategory.DIAMOND_CORE_DRILL_BITS,
    specifications: {
      diameter: '42 מ"מ',
      length: '400 מ"מ',
      thread: '1/2"',
      segments: 6,
      segmentHeight: '10 מ"מ',
      segmentType: 'Premium',
      material: 'בטון, בטון מזוין',
      usageType: 'רטוב',
      warranty: '12 חודשים',
    },
    price: 380,
    discountPrice: 330,
    stock: 15,
    deliveryTime: '1-3 ימי עסקים',
    applications: ['קידוח בבטון', 'קידוח בבטון מזוין', 'ביצוע עבודות אינסטלציה'],
    features: [
      'חוזק וקשיחות גבוהים',
      'אורך חיים ארוך',
      'קצב חדירה גבוה',
    ],
    images: getProductImagePaths(ProductType.DIAMOND_CORE_DRILL_BIT, 3),
    relatedProducts: ['wet-drill-52mm-half-inch', 'wet-drill-62mm-half-inch'],
    isFeatured: false,
  },
  {
    id: 'wet-drill-52mm-half-inch',
    slug: 'wet-drill-52mm-half-inch',
    name: 'כוס קידוח יהלום ברטוב בקוטר 52 מ"מ עם הברגה "1/2',
    nameEn: 'Wet Diamond Core Drill Bit - 52mm with 1/2" Thread',
    description: 'כוס קידוח יהלום מקצועית בקוטר 52 מ"מ, עם הברגה "1/2, מיועדת לקידוח רטוב בבטון ובטון מזוין. מתאימה למגוון מכונות קידוח עם הברגה "1/2.',
    shortDescription: 'כוס קידוח יהלום מקצועית בקוטר 52 מ"מ עם הברגה "1/2 לקידוח רטוב בבטון',
    type: ProductType.DIAMOND_CORE_DRILL_BIT,
    category: ProductCategory.DIAMOND_CORE_DRILL_BITS,
    specifications: {
      diameter: '52 מ"מ',
      length: '400 מ"מ',
      thread: '1/2"',
      segments: 7,
      segmentHeight: '10 מ"מ',
      segmentType: 'Premium',
      material: 'בטון, בטון מזוין',
      usageType: 'רטוב',
      warranty: '12 חודשים',
    },
    price: 410,
    discountPrice: 370,
    stock: 12,
    deliveryTime: '1-3 ימי עסקים',
    applications: ['קידוח בבטון', 'קידוח בבטון מזוין', 'ביצוע עבודות אינסטלציה'],
    features: [
      'חוזק וקשיחות גבוהים',
      'אורך חיים ארוך',
      'קצב חדירה גבוה',
    ],
    images: getProductImagePaths(ProductType.DIAMOND_CORE_DRILL_BIT, 3),
    relatedProducts: ['wet-drill-42mm-half-inch', 'wet-drill-62mm-half-inch'],
    isFeatured: false,
  },
  {
    id: 'wet-drill-62mm-half-inch',
    slug: 'wet-drill-62mm-half-inch',
    name: 'כוס קידוח יהלום ברטוב בקוטר 62 מ"מ עם הברגה "1/2',
    nameEn: 'Wet Diamond Core Drill Bit - 62mm with 1/2" Thread',
    description: 'כוס קידוח יהלום מקצועית בקוטר 62 מ"מ, עם הברגה "1/2, מיועדת לקידוח רטוב בבטון ובטון מזוין. מתאימה למגוון מכונות קידוח עם הברגה "1/2.',
    shortDescription: 'כוס קידוח יהלום מקצועית בקוטר 62 מ"מ עם הברגה "1/2 לקידוח רטוב בבטון',
    type: ProductType.DIAMOND_CORE_DRILL_BIT,
    category: ProductCategory.DIAMOND_CORE_DRILL_BITS,
    specifications: {
      diameter: '62 מ"מ',
      length: '400 מ"מ',
      thread: '1/2"',
      segments: 7,
      segmentHeight: '10 מ"מ',
      segmentType: 'Premium',
      material: 'בטון, בטון מזוין',
      usageType: 'רטוב',
      warranty: '12 חודשים',
    },
    price: 430,
    discountPrice: 390,
    stock: 10,
    deliveryTime: '1-3 ימי עסקים',
    applications: ['קידוח בבטון', 'קידוח בבטון מזוין', 'ביצוע עבודות אינסטלציה'],
    features: [
      'חוזק וקשיחות גבוהים',
      'אורך חיים ארוך',
      'קצב חדירה גבוה',
    ],
    images: getProductImagePaths(ProductType.DIAMOND_CORE_DRILL_BIT, 3),
    relatedProducts: ['wet-drill-42mm-half-inch', 'wet-drill-52mm-half-inch'],
    isFeatured: false,
  },
];

// Export product utils
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};

export const getProductsByCategory = (category: ProductCategory): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};

export const getRelatedProducts = (productId: string): Product[] => {
  const product = getProductById(productId);
  if (!product || !product.relatedProducts || product.relatedProducts.length === 0) {
    return [];
  }
  
  return product.relatedProducts
    .map(id => getProductById(id))
    .filter((product): product is Product => product !== undefined);
};

// Define the filter configurations for each product category
export const categoryFilterConfig = {
  [ProductCategory.DIAMOND_CORE_DRILL_BITS]: {
    primaryFilter: {
      key: 'diameter',
      label: 'קוטר',
    },
    secondaryFilter: {
      key: 'thread',
      label: 'הברגה',
    }
  },
  [ProductCategory.DIAMOND_SAW_BLADES]: {
    primaryFilter: {
      key: 'diameter',
      label: 'קוטר',
    },
    secondaryFilter: null
  },
  [ProductCategory.ACCESSORIES]: {
    primaryFilter: {
      key: 'diameter',
      label: 'קוטר',
    },
    secondaryFilter: null
  },
  [ProductCategory.DRILLING_MACHINES]: {
    primaryFilter: {
      key: 'power',
      label: 'הספק',
    },
    secondaryFilter: null
  },
  [ProductCategory.SPECIAL_PRODUCTS]: {
    primaryFilter: null,
    secondaryFilter: null
  }
};

// Helper function to get available filter values for a specific category and filter key
export const getFilterValuesForCategory = (category: ProductCategory, filterKey: string): string[] => {
  const productsInCategory = getProductsByCategory(category);
  const valuesSet = new Set<string>();
  
  productsInCategory.forEach(product => {
    if (product.specifications[filterKey]) {
      valuesSet.add(product.specifications[filterKey]);
    }
  });
  
  return Array.from(valuesSet);
};

// Helper function to get all available filter configs for a category
export const getFiltersForCategory = (category: ProductCategory) => {
  const config = categoryFilterConfig[category];
  const filters = [];
  
  if (config.primaryFilter) {
    const values = getFilterValuesForCategory(category, config.primaryFilter.key);
    
    if (values.length > 0) {
      filters.push({
        id: config.primaryFilter.key,
        name: config.primaryFilter.label,
        options: values.map(value => ({
          id: value,
          label: value
        }))
      });
    }
  }
  
  if (config.secondaryFilter) {
    const values = getFilterValuesForCategory(category, config.secondaryFilter.key);
    
    if (values.length > 0) {
      filters.push({
        id: config.secondaryFilter.key,
        name: config.secondaryFilter.label,
        options: values.map(value => ({
          id: value,
          label: value
        }))
      });
    }
  }
  
  return filters;
};

export default products; 