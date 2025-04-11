import { DrillBitProduct, RelatedProduct } from './types';

// Helper function to generate related products
const getRelatedDryVacuumProducts = (currentDiameter: string): RelatedProduct[] => {
  // Get all available diameters
  const diameters = ['35', '45', '65', '72', '82', '95', '105', '125', '152'];
  
  // Select 2 diameters that are different from the current one
  const relatedDiameters = diameters
    .filter(d => d !== currentDiameter)
    .slice(0, 2);

  // Create related products
  const relatedProducts: RelatedProduct[] = relatedDiameters.map(diameter => ({
    id: `dry-vacuum-${diameter}mm`,
    name: `כוס קידוח יהלום לקידוח יבש/ואקום - ${diameter} מ"מ`,
    price: 350 + (Number(diameter) - 35) * 20, // Price increases with diameter
    discount_price: 299 + (Number(diameter) - 35) * 20,
    image: '/placeholder.jpg',
    slug: `/products/diamond-core-drill-bits/dry-vacuum-drilling/${diameter}mm`,
  }));

  // Add accessory products
  relatedProducts.push(
    {
      id: 'vacuum-adapter',
      name: 'מתאם למערכת ואקום',
      price: 150,
      image: '/placeholder.jpg',
      slug: '/products/accessories/vacuum-adapters',
    },
    {
      id: 'drill-extension-200',
      name: 'מאריך קידוח 200 מ"מ',
      price: 160,
      image: '/placeholder.jpg',
      slug: '/products/accessories/drill-extensions/200mm',
    }
  );

  return relatedProducts;
};

// Function to generate a dry vacuum drill bit product
const createDryVacuumDrillBit = (diameter: string): DrillBitProduct => {
  const numDiameter = Number(diameter);
  
  // Calculate price based on diameter (larger diameter = higher price)
  const basePrice = 350;
  const priceIncrement = (numDiameter - 35) * 20;
  const price = basePrice + priceIncrement;
  
  // Calculate segments based on diameter
  const segments = numDiameter >= 100 ? 7 : 5;
  
  return {
    id: `dry-vacuum-${diameter}mm`,
    name: `כוס קידוח יהלום לקידוח יבש/ואקום – בקוטר ${diameter} מ"מ`,
    nameEn: `Diamond Core Drill Bit for Dry/Vacuum Drilling - ${diameter}mm`,
    description: `כוס קידוח מקצועית לקידוח יבש/ואקום בקוטר ${diameter} מ"מ, מתאימה לקידוח בבטון, בלוקים, אבן וחומרים קשים. איכות גבוהה וביצועים מעולים.`,
    longDescription: `
      <p>מקדח יהלום מסדרת Premium לקידוח יבש ווואקום המיועד לקידוח מדוייק בבטון, בלוקים ואבן. המקדח מצויד בסגמנטים מיוחדים המאפשרים קידוח ללא שימוש במים, בשילוב עם שואב אבק או מערכת ואקום.</p>
      <p>כוס הקידוח תוכננה עם פתחי אוורור אופטימליים למניעת התחממות יתר בזמן עבודה יבשה. המבנה המחוזק של הכוס מאפשר קידוח דיוק עם אורך חיים משופר.</p>
      <p>בקוטר ${diameter} מ"מ, הכוס מתאימה במיוחד לקידוח פתחים להתקנת צנרת, חשמל ותקשורת. מתאימה לשימוש עם מקדחות קידוח בעלות חיבור M16 סטנדרטי.</p>
    `,
    diameter: `${diameter} מ"מ`,
    length: '400 מ"מ',
    effective_length: '350 מ"מ',
    thread: 'M16',
    segments,
    segment_height: '9 מ"מ',
    segment_type: 'Dry/Vacuum Premium',
    segment_technology: 'טכנולוגיה מיוחדת לקידוח יבש עם פינוי אבק אופטימלי',
    core_material: 'פלדה באיכות גבוהה, עם פתחי אוורור למניעת התחממות',
    material: 'בטון, בלוקים, אבן, קרמיקה',
    usage_type: 'יבש/ואקום',
    warranty: '12 חודשים',
    price,
    discount_price: price - 50,
    stock: 15,
    delivery_time: '1-3 ימי עסקים',
    applications: [
      'קידוח בבטון',
      'קידוח בבלוקים',
      'קידוח באבן וקרמיקה',
      'ביצוע עבודות אינסטלציה',
      'התקנת צנרת חשמל ותקשורת',
      'התקנת מערכות מיזוג אוויר'
    ],
    compatible_machines: [
      'מכונות קידוח עם חיבור M16',
      'מכונות עם חיבורים אחרים בשילוב עם מתאם מתאים'
    ],
    recommended_accessories: [
      'מתאם למערכת ואקום',
      'מאריך קידוח 200 מ"מ',
      'שואב אבק תעשייתי'
    ],
    technical_note: 'יש להשתמש עם שואב אבק או מערכת ואקום למניעת נזק בריאותי עקב אבק. מומלץ לקדוח במהירות סיבוב של 800-1200 סל"ד לתוצאות מיטביות.',
    features: [
      'מותאם במיוחד לקידוח יבש או עם מערכת ואקום',
      'פתחי אוורור למניעת התחממות',
      'אורך חיים משופר',
      'רמת רעש נמוכה יחסית',
      'חיבור סטנדרטי M16',
      'עיצוב המאפשר פינוי אבק אופטימלי'
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
    slug: `/products/diamond-core-drill-bits/dry-vacuum-drilling/${diameter}mm`,
  };
};

// Create products for each diameter
export const dryVacuumDrillBits: Record<string, DrillBitProduct> = {
  '35mm': createDryVacuumDrillBit('35'),
  '45mm': createDryVacuumDrillBit('45'),
  '65mm': createDryVacuumDrillBit('65'),
  '72mm': createDryVacuumDrillBit('72'),
  '82mm': createDryVacuumDrillBit('82'),
  '95mm': createDryVacuumDrillBit('95'),
  '105mm': createDryVacuumDrillBit('105'),
  '125mm': createDryVacuumDrillBit('125'),
  '152mm': createDryVacuumDrillBit('152'),
};

// Create related products for each product
export const dryVacuumRelatedProducts: Record<string, RelatedProduct[]> = {
  '35mm': getRelatedDryVacuumProducts('35'),
  '45mm': getRelatedDryVacuumProducts('45'),
  '65mm': getRelatedDryVacuumProducts('65'),
  '72mm': getRelatedDryVacuumProducts('72'),
  '82mm': getRelatedDryVacuumProducts('82'),
  '95mm': getRelatedDryVacuumProducts('95'),
  '105mm': getRelatedDryVacuumProducts('105'),
  '125mm': getRelatedDryVacuumProducts('125'),
  '152mm': getRelatedDryVacuumProducts('152'),
}; 