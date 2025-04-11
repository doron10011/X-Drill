import { DrillBitProduct, RelatedProduct } from './types';

// Helper function to generate related products
const getRelatedWetProducts = (currentDiameter: string): RelatedProduct[] => {
  // Get all available diameters
  const diameters = ['67', '72', '77', '82', '91', '102', '132', '162', '200'];
  
  // Select 2 diameters that are different from the current one
  const relatedDiameters = diameters
    .filter(d => d !== currentDiameter)
    .slice(0, 2);

  // Create related products
  const relatedProducts: RelatedProduct[] = relatedDiameters.map(diameter => ({
    id: `wet-${diameter}mm`,
    name: `כוס קידוח יהלום לקידוח רטוב עם סגמנט Arix - ${diameter} מ"מ`,
    price: 450 + (Number(diameter) - 67) * 25, // Price increases with diameter
    discount_price: 399 + (Number(diameter) - 67) * 25,
    image: '/placeholder.jpg',
    slug: `/products/diamond-core-drill-bits/wet-drilling/${diameter}mm`,
  }));

  // Add accessory products
  relatedProducts.push(
    {
      id: 'adapter-unc-bsp',
      name: 'מתאם הברגה 1-1/4" UNC ל-1/2" BSP',
      price: 120,
      image: '/placeholder.jpg',
      slug: '/products/accessories/thread-adapters/unc-bsp',
    },
    {
      id: 'drill-extension-250',
      name: 'מאריך קידוח 250 מ"מ',
      price: 180,
      image: '/placeholder.jpg',
      slug: '/products/accessories/drill-extensions/250mm',
    }
  );

  return relatedProducts;
};

// Function to generate a wet drill bit product
const createWetDrillBit = (diameter: string): DrillBitProduct => {
  const numDiameter = Number(diameter);
  
  // Calculate price based on diameter (larger diameter = higher price)
  const basePrice = 450;
  const priceIncrement = (numDiameter - 67) * 25;
  const price = basePrice + priceIncrement;
  
  // Calculate segments based on diameter
  const segments = numDiameter >= 100 ? 8 : 6;
  
  return {
    id: `wet-${diameter}mm`,
    name: `כוס קידוח יהלום לקידוח רטוב עם סגמנט Arix – בקוטר ${diameter} מ"מ`,
    nameEn: `Diamond Core Drill Bit with Arix Segment - ${diameter}mm`,
    description: `כוס קידוח מקצועית עם סגמנט Arix בקוטר ${diameter} מ"מ, מתאימה לקידוח רטוב בבטון, בטון מזוין וחומרים קשים. איכות מעולה וביצועים מיטביים עם אורך חיים ארוך במיוחד.`,
    longDescription: `
      <p>מקדח יהלום מסדרת Premium לקידוח רטוב המיועד לקידוח מדוייק בבטון ובבטון מזוין. המקדח מצויד בסגמנטים מסוג Arix המאפשרים חדירה טובה יותר לחומר וקידוח מהיר במיוחד, תוך אורך חיים משופר.</p>
      <p>כוס הקידוח תוכננה לעבודה עם קירור מים אופטימלי, מה שמונע התחממות יתר ומאריך את חיי המוצר. המבנה המחוזק של הכוס מאפשר קידוח גם בבטון מזוין קשה תוך שמירה על דיוק וביצועים גבוהים.</p>
      <p>בקוטר ${diameter} מ"מ, הכוס מתאימה במיוחד לקידוח פתחים להתקנת מערכות אינסטלציה, חשמל, ומיזוג אוויר. מתאימה לשימוש עם מקדחות קידוח רטובות בעלות חיבור 1-1/4" UNC.</p>
    `,
    diameter: `${diameter} מ"מ`,
    length: '450 מ"מ',
    effective_length: '400 מ"מ',
    thread: '1-1/4" UNC',
    segments,
    segment_height: '10 מ"מ',
    segment_type: 'Arix Premium',
    segment_technology: 'טכנולוגיית Arix המאפשרת קידוח מהיר יותר עם אורך חיים משופר',
    core_material: 'פלדה באיכות גבוהה, מחוזקת במיוחד לקידוח בבטון מזוין',
    material: 'בטון, בטון מזוין, אבן קשה',
    usage_type: 'רטוב',
    warranty: '12 חודשים',
    price,
    discount_price: price - 50,
    stock: 12,
    delivery_time: '1-3 ימי עסקים',
    applications: [
      'קידוח בבטון',
      'קידוח בבטון מזוין',
      'קידוח בבלוקים',
      'ביצוע עבודות אינסטלציה',
      'התקנת צנרת חשמל ותקשורת',
      'התקנת מערכות מיזוג אוויר'
    ],
    compatible_machines: [
      'מכונות קידוח עם חיבור 1-1/4" UNC',
      'מכונות עם חיבורים אחרים בשילוב עם מתאם מתאים'
    ],
    recommended_accessories: [
      'מתאם הברגה 1-1/4" UNC ל-1/2" BSP',
      'מאריך קידוח 250 מ"מ',
      'משאבת מים חשמלית'
    ],
    technical_note: 'יש לוודא אספקת מים מספקת בזמן הקידוח למניעת התחממות יתר וקיצור אורך חיי המוצר. מומלץ לקדוח במהירות סיבוב של 600-900 סל"ד לתוצאות מיטביות.',
    features: [
      'סגמנטים בטכנולוגיית Arix לביצועים משופרים',
      'אורך חיים ארוך במיוחד',
      'התאמה מיטבית לקידוח בבטון מזוין',
      'מבנה מחוזק לעמידות גבוהה',
      'חיבור סטנדרטי 1-1/4" UNC',
      'עיצוב המאפשר פינוי מיטבי של נוזלי קירור ושבבים'
    ],
    images: [
      '/placeholder.jpg',
      '/placeholder.jpg',
      '/placeholder.jpg',
    ],
    manuals: [
      { name: 'מדריך הפעלה', url: '#' },
      { name: 'הוראות בטיחות', url: '#' },
    ],
    videos: [
      { title: 'הדגמת שימוש', url: '#' },
      { title: 'טיפים לתחזוקה', url: '#' },
    ],
    brand: {
      name: 'X-Drill',
      logo: '/placeholder.jpg'
    },
    slug: `/products/diamond-core-drill-bits/wet-drilling/${diameter}mm`,
  };
};

// Create products for each diameter
export const wetDrillBits: Record<string, DrillBitProduct> = {
  '67mm': createWetDrillBit('67'),
  '72mm': createWetDrillBit('72'),
  '77mm': createWetDrillBit('77'),
  '82mm': createWetDrillBit('82'),
  '91mm': createWetDrillBit('91'),
  '102mm': createWetDrillBit('102'),
  '132mm': createWetDrillBit('132'),
  '162mm': createWetDrillBit('162'),
  '200mm': createWetDrillBit('200'),
};

// Create related products for each product
export const wetRelatedProducts: Record<string, RelatedProduct[]> = {
  '67mm': getRelatedWetProducts('67'),
  '72mm': getRelatedWetProducts('72'),
  '77mm': getRelatedWetProducts('77'),
  '82mm': getRelatedWetProducts('82'),
  '91mm': getRelatedWetProducts('91'),
  '102mm': getRelatedWetProducts('102'),
  '132mm': getRelatedWetProducts('132'),
  '162mm': getRelatedWetProducts('162'),
  '200mm': getRelatedWetProducts('200'),
}; 