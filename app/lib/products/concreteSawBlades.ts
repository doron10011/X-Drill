import { SawBladeProduct, RelatedProduct } from './types';

// Helper function to generate related products
const getRelatedConcreteBlades = (currentSize: string): RelatedProduct[] => {
  // Get all available sizes
  const sizes = ['200mm', '250mm', '300mm', '350mm', '400mm', 'D25.4/20'];
  
  // Select 2 sizes that are different from the current one
  const relatedSizes = sizes
    .filter(s => s !== currentSize)
    .slice(0, 2);

  // Create related products
  const relatedProducts: RelatedProduct[] = relatedSizes.map(size => {
    const price = size === 'D25.4/20' ? 
      650 : 
      400 + (parseInt(size) - 200) / 50 * 100; // Price increases with size
    
    return {
      id: `concrete-${size.replace('/', '-')}`,
      name: `דיסק יהלום לבטון ובטון מזוין - ${size}`,
      price,
      discount_price: price - 50,
      image: '/placeholder.jpg',
      slug: `/products/diamond-saw-blades/concrete-reinforced/${size.replace('/', '-')}`,
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

// Function to generate a concrete saw blade product
const createConcreteSawBlade = (size: string): SawBladeProduct => {
  const isSpecial = size === 'D25.4/20';
  
  // Calculate price based on size
  const price = isSpecial ? 
    650 : 
    400 + (parseInt(size) - 200) / 50 * 100;
  
  const displaySize = isSpecial ? 'D25.4/20' : size;
  const diameter = isSpecial ? '25.4 מ"מ' : size.replace('mm', ' מ"מ');
  const thickness = isSpecial ? '2.0 מ"מ' : '3.2 מ"מ';
  
  return {
    id: `concrete-${size.replace('/', '-')}`,
    name: `דיסק יהלום לבטון ובטון מזוין - ${displaySize}`,
    nameEn: `Diamond Saw Blade for Concrete & Reinforced Concrete - ${displaySize}`,
    description: `דיסק יהלום איכותי לחיתוך בבטון ובטון מזוין בקוטר ${diameter}. מתאים לעבודות בניה, קבלנות, ושיפוצים.`,
    longDescription: `
      <p>דיסק יהלום מקצועי לחיתוך בטון ובטון מזוין. הדיסק מיוצר בטכנולוגיה מתקדמת המאפשרת חיתוך מהיר וחלק, עם אורך חיים ארוך במיוחד.</p>
      <p>הדיסק בקוטר ${diameter} מתאים לעבודה עם משחזות זווית וציוד חיתוך מקצועי. מיוצר עם סגמנטים איכותיים המאפשרים חיתוך מהיר גם בבטון מזוין קשה.</p>
      <p>מתאים במיוחד לעבודות קבלנות, שיפוצים ובניה. ניתן לעבוד בחיתוך יבש או רטוב לביצועים מיטביים.</p>
    `,
    diameter,
    bore: isSpecial ? '20 מ"מ' : '22.23 מ"מ',
    thickness,
    segments: isSpecial ? 10 : 14,
    segment_height: '10 מ"מ',
    segment_type: 'Premium',
    material: 'בטון, בטון מזוין, אספלט',
    usage_type: 'יבש/רטוב',
    warranty: '12 חודשים',
    price,
    discount_price: price - 50,
    stock: 15,
    delivery_time: '1-3 ימי עסקים',
    applications: [
      'חיתוך בבטון',
      'חיתוך בבטון מזוין',
      'עבודות בניה',
      'שיפוצים'
    ],
    compatible_machines: [
      'משחזות זווית',
      'מסורי בטון',
      'מכונות חיתוך ייעודיות'
    ],
    recommended_accessories: [
      'מערכת קירור לדיסק יהלום',
      'משקפי מגן',
      'אוזניות לסינון רעש'
    ],
    technical_note: 'בעבודה בחיתוך יבש מומלץ לעשות הפסקות בעבודה למניעת התחממות יתר. בחיתוך רטוב יש להבטיח זרימת מים מספקת.',
    features: [
      'סגמנטים בטכנולוגיה מתקדמת',
      'אורך חיים ארוך במיוחד',
      'התאמה מיטבית לחיתוך בטון מזוין',
      'מבנה מחוזק לעמידות גבוהה',
      'ביצועים גבוהים באופן משמעותי'
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
    slug: `/products/diamond-saw-blades/concrete-reinforced/${size.replace('/', '-')}`,
  };
};

// Create products for each size
export const concreteSawBlades: Record<string, SawBladeProduct> = {
  '200mm': createConcreteSawBlade('200mm'),
  '250mm': createConcreteSawBlade('250mm'),
  '300mm': createConcreteSawBlade('300mm'),
  '350mm': createConcreteSawBlade('350mm'),
  '400mm': createConcreteSawBlade('400mm'),
  'D25.4-20': createConcreteSawBlade('D25.4/20'),
};

// Create related products for each product
export const concreteRelatedProducts: Record<string, RelatedProduct[]> = {
  '200mm': getRelatedConcreteBlades('200mm'),
  '250mm': getRelatedConcreteBlades('250mm'),
  '300mm': getRelatedConcreteBlades('300mm'),
  '350mm': getRelatedConcreteBlades('350mm'),
  '400mm': getRelatedConcreteBlades('400mm'),
  'D25.4-20': getRelatedConcreteBlades('D25.4/20'),
}; 