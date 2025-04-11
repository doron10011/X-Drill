import { DrillBitProduct, RelatedProduct } from './types';

// Helper function to generate related products
const getRelatedDryVacuumProducts = (currentDiameter: string): RelatedProduct[] => {
  // Get all available diameters
  const diameters = ['80', '85', '90', '95', '100', '105'];
  
  // Select 2 diameters that are different from the current one
  const relatedDiameters = diameters
    .filter(d => d !== currentDiameter)
    .slice(0, 2);

  // Create related products
  const relatedProducts: RelatedProduct[] = relatedDiameters.map(diameter => ({
    id: `dry-vacuum-${diameter}mm`,
    name: `כוס קידוח יהלום ליבש/ואקום - ${diameter} מ"מ`,
    price: 500 + (Number(diameter) - 80) * 50, // Price increases with diameter
    discount_price: 450 + (Number(diameter) - 80) * 50,
    image: '/placeholder.jpg',
    slug: `/products/diamond-core-drill-bits/dry-vacuum-drilling/${diameter}mm`,
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

// Function to generate a dry vacuum drill bit product
const createDryVacuumDrillBit = (diameter: string): DrillBitProduct => {
  const numDiameter = Number(diameter);
  
  // Calculate price based on diameter (larger diameter = higher price)
  const basePrice = 500;
  const priceIncrement = (numDiameter - 80) * 50;
  const price = basePrice + priceIncrement;
  
  // Calculate segments based on diameter
  const segments = numDiameter >= 100 ? 7 : 6;
  
  return {
    id: `dry-vacuum-${diameter}mm`,
    name: `כוס קידוח יהלום ליבש/ואקום עם סגמנט מיוחד – בקוטר ${diameter} מ"מ`,
    nameEn: `Diamond Core Drill Bit for Dry/Vacuum Drilling - ${diameter}mm`,
    description: `כוס קידוח מקצועית לקידוח יבש/ואקום בקוטר ${diameter} מ"מ, מתאימה לקידוח בבטון, בטון מזוין וחומרים קשים. עם טכנולוגיה מיוחדת למניעת התחממות.`,
    longDescription: `
      <p>מקדח יהלום מקצועי לקידוח יבש/ואקום המיועד לקידוח בבטון ובבטון מזוין. המקדח מצויד בסגמנטים מיוחדים המתוכננים לפזר חום ביעילות גם ללא שימוש במים.</p>
      <p>כוס הקידוח מאפשרת עבודה עם שואב אבק תעשייתי לסילוק האבק בזמן הקידוח, מה שמאפשר עבודה נקיה יותר. המבנה המחוזק מאפשר קידוח איכותי תוך שמירה על דיוק וביצועים גבוהים.</p>
      <p>בקוטר ${diameter} מ"מ, הכוס מתאימה במיוחד לקידוח פתחים להתקנת צנרת, מערכות חשמל ותקשורת. מתאימה לשימוש עם מקדחות ייעודיות לקידוח יבש בעלות חיבור 1-1/4" UNC.</p>
    `,
    diameter: `${diameter} מ"מ`,
    length: '400 מ"מ',
    effective_length: '350 מ"מ',
    thread: '1-1/4" UNC',
    segments,
    segment_height: '8 מ"מ',
    segment_type: 'סגמנט מיוחד לקידוח יבש',
    segment_technology: 'טכנולוגיית פיזור חום מתקדמת למניעת התחממות בקידוח יבש',
    core_material: 'פלדה באיכות גבוהה, מחוזקת במיוחד לקידוח בבטון מזוין',
    material: 'בטון, בטון מזוין, מתאים במיוחד לבלוקים ואריחים',
    usage_type: 'יבש / ואקום',
    warranty: '12 חודשים',
    price,
    discount_price: price - 50,
    stock: 10,
    delivery_time: '1-3 ימי עסקים',
    applications: [
      'קידוח בבטון',
      'קידוח בבטון מזוין',
      'קידוח בבלוקים',
      'התקנת צינורות',
      'התקנת צנרת חשמל ותקשורת',
      'עבודה במקומות רגישים למים'
    ],
    compatible_machines: [
      'מקדחות ייעודיות לקידוח יבש עם חיבור 1-1/4" UNC',
      'מכונות עם חיבורים אחרים בשילוב עם מתאם מתאים',
      'שואבי אבק תעשייתיים'
    ],
    recommended_accessories: [
      'מתאם הברגה 1-1/4" UNC ל-1/2" BSP',
      'מאריך קידוח 250 מ"מ',
      'שואב אבק תעשייתי'
    ],
    technical_note: 'לביצועים מיטביים מומלץ להשתמש בשואב אבק חזק. יש לעבוד בלחץ מתון למניעת התחממות. מומלץ לתת למקדח להתקרר במידת הצורך בין קידוחים.',
    features: [
      'סגמנטים מיוחדים לקידוח יבש',
      'מבנה לפיזור חום יעיל',
      'עבודה נקיה יותר בעזרת שואב אבק',
      'אידיאלי למקומות ללא גישה למים',
      'חיבור סטנדרטי 1-1/4" UNC',
      'עמידות גבוהה לשחיקה'
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
  '80mm': createDryVacuumDrillBit('80'),
  '85mm': createDryVacuumDrillBit('85'),
  '90mm': createDryVacuumDrillBit('90'),
  '95mm': createDryVacuumDrillBit('95'),
  '100mm': createDryVacuumDrillBit('100'),
  '105mm': createDryVacuumDrillBit('105'),
};

// Create related products for each product
export const dryVacuumRelatedProducts: Record<string, RelatedProduct[]> = {
  '80mm': getRelatedDryVacuumProducts('80'),
  '85mm': getRelatedDryVacuumProducts('85'),
  '90mm': getRelatedDryVacuumProducts('90'),
  '95mm': getRelatedDryVacuumProducts('95'),
  '100mm': getRelatedDryVacuumProducts('100'),
  '105mm': getRelatedDryVacuumProducts('105'),
}; 