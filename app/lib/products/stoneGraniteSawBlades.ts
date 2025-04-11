import { SawBladeProduct, RelatedProduct } from './types';

// Helper function to generate related products
const getRelatedStoneBlades = (currentSize: string): RelatedProduct[] => {
  // Get all available sizes
  const sizes = ['200mm', '250mm', '300mm', '350mm', '400mm', 'D25.4/20'];
  
  // Select 2 sizes that are different from the current one
  const relatedSizes = sizes
    .filter(s => s !== currentSize)
    .slice(0, 2);

  // Create related products
  const relatedProducts: RelatedProduct[] = relatedSizes.map(size => {
    const price = size === 'D25.4/20' ? 
      580 : 
      350 + (parseInt(size) - 200) / 50 * 90; // Price increases with size
    
    return {
      id: `stone-${size.replace('/', '-')}`,
      name: `דיסק יהלום לאבן וגרניט - ${size}`,
      price,
      discount_price: price - 40,
      image: '/placeholder.jpg',
      slug: `/products/diamond-saw-blades/stone-granite/${size.replace('/', '-')}`,
    };
  });

  // Add complementary products
  relatedProducts.push(
    {
      id: 'diamond-blade-cooling',
      name: 'מערכת קירור לדיסק יהלום',
      price: 280,
      image: '/placeholder.jpg',
      slug: '/products/accessories/cooling-systems/diamond-blade',
    }
  );

  return relatedProducts;
};

// Function to generate a stone-granite saw blade product
const createStoneSawBlade = (size: string): SawBladeProduct => {
  const isSpecial = size === 'D25.4/20';
  
  // Calculate price based on size
  const price = isSpecial ? 
    580 : 
    350 + (parseInt(size) - 200) / 50 * 90;
  
  const displaySize = isSpecial ? 'D25.4/20' : size;
  const diameter = isSpecial ? '25.4 מ"מ' : size.replace('mm', ' מ"מ');
  const thickness = isSpecial ? '1.8 מ"מ' : '3.0 מ"מ';
  
  return {
    id: `stone-${size.replace('/', '-')}`,
    name: `דיסק יהלום לאבן וגרניט - ${displaySize}`,
    nameEn: `Diamond Saw Blade for Stone & Granite - ${displaySize}`,
    description: `דיסק יהלום איכותי לחיתוך אבן, שיש וגרניט בקוטר ${diameter}. מתאים לעבודות בניה, קבלנות, ושיפוצים.`,
    longDescription: `
      <p>דיסק יהלום מקצועי לחיתוך אבן, שיש וגרניט. הדיסק מיוצר בטכנולוגיה מתקדמת המאפשרת חיתוך מדויק וחלק, עם גימור מושלם ואורך חיים ארוך.</p>
      <p>הדיסק בקוטר ${diameter} מתאים לעבודה עם משחזות זווית וציוד חיתוך מקצועי. הסגמנטים המיוחדים מעוצבים לחיתוך חלק וללא שבבים בחומרים קשים כמו גרניט.</p>
      <p>מתאים במיוחד לעבודות עם אבן טבעית, שיש, קרמיקה, פורצלן וגרניט. לתוצאות מיטביות מומלץ לעבוד בחיתוך רטוב.</p>
    `,
    diameter,
    bore: isSpecial ? '20 מ"מ' : '22.23 מ"מ',
    thickness,
    segments: isSpecial ? 12 : 16,
    segment_height: '10 מ"מ',
    segment_type: 'Ultra Premium',
    material: 'אבן, שיש, גרניט, קרמיקה, פורצלן',
    usage_type: 'יבש/רטוב',
    warranty: '12 חודשים',
    price,
    discount_price: price - 40,
    stock: 18,
    delivery_time: '1-3 ימי עסקים',
    applications: [
      'חיתוך אבן',
      'חיתוך שיש',
      'חיתוך גרניט',
      'חיתוך קרמיקה ופורצלן'
    ],
    compatible_machines: [
      'משחזות זווית',
      'מסורי אבן',
      'מכונות חיתוך ייעודיות'
    ],
    recommended_accessories: [
      'מערכת קירור לדיסק יהלום',
      'משקפי מגן',
      'כפפות עבודה'
    ],
    technical_note: 'לתוצאות מיטביות מומלץ לעבוד בחיתוך רטוב. בחיתוך יבש יש להקפיד על הפסקות עבודה למניעת התחממות יתר.',
    features: [
      'סגמנטים בטכנולוגיה מתקדמת לחיתוך חלק',
      'אורך חיים ארוך במיוחד',
      'גימור מושלם ללא שבבים',
      'מבנה מחוזק לדיוק מרבי',
      'מתאים לחיתוך חומרים קשים במיוחד'
    ],
    images: [
      '/placeholder.jpg',
      '/placeholder.jpg',
      '/placeholder.jpg',
    ],
    manuals: [
      { name: 'מדריך שימוש', url: '#' },
      { name: 'הוראות בטיחות', url: '#' },
    ],
    videos: [
      { title: 'הדגמת שימוש', url: '#' },
      { title: 'טיפים לתחזוקה', url: '#' },
    ],
    brand: {
      name: 'X-Cut',
      logo: '/placeholder.jpg'
    },
    slug: `/products/diamond-saw-blades/stone-granite/${size.replace('/', '-')}`,
  };
};

// Create products for each size
export const stoneGraniteSawBlades: Record<string, SawBladeProduct> = {
  '200mm': createStoneSawBlade('200mm'),
  '250mm': createStoneSawBlade('250mm'),
  '300mm': createStoneSawBlade('300mm'),
  '350mm': createStoneSawBlade('350mm'),
  '400mm': createStoneSawBlade('400mm'),
  'D25.4-20': createStoneSawBlade('D25.4/20'),
};

// Create related products for each product
export const stoneGraniteRelatedProducts: Record<string, RelatedProduct[]> = {
  '200mm': getRelatedStoneBlades('200mm'),
  '250mm': getRelatedStoneBlades('250mm'),
  '300mm': getRelatedStoneBlades('300mm'),
  '350mm': getRelatedStoneBlades('350mm'),
  '400mm': getRelatedStoneBlades('400mm'),
  'D25.4-20': getRelatedStoneBlades('D25.4/20'),
}; 