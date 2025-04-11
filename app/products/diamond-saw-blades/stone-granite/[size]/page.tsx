import { notFound } from 'next/navigation';
import ProductDetail from '@/app/components/ProductDetail';
import { stoneGraniteSawBlades, stoneGraniteRelatedProducts } from '@/app/lib/products/stoneGraniteSawBlades';

interface StoneGraniteSawBladePageProps {
  params: {
    size: string;
  };
}

export default function StoneGraniteSawBladePage({ params }: StoneGraniteSawBladePageProps) {
  // Extract size from params
  const size = params.size;
  
  // Check if this product exists in our database
  if (!stoneGraniteSawBlades[size]) {
    notFound();
  }
  
  // Get product data
  const product = stoneGraniteSawBlades[size];
  const relatedProducts = stoneGraniteRelatedProducts[size];
  
  return (
    <ProductDetail 
      product={product} 
      relatedProducts={relatedProducts} 
      categoryPath="/products/diamond-saw-blades/stone-granite"
      categoryName="דיסקים יהלום לאבן וגרניט"
    />
  );
} 