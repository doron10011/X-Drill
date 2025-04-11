import { notFound } from 'next/navigation';
import ProductDetail from '@/app/components/ProductDetail';
import { wetDrillBits, wetRelatedProducts } from '@/app/lib/products/wetDrillBits';

interface WetDrillPageProps {
  params: {
    diameter: string;
  };
}

export default function WetDrillPage({ params }: WetDrillPageProps) {
  // Extract diameter from params
  const diameter = params.diameter;
  
  // Check if this product exists in our database
  if (!wetDrillBits[diameter]) {
    notFound();
  }
  
  // Get product data
  const product = wetDrillBits[diameter];
  const relatedProducts = wetRelatedProducts[diameter];
  
  return (
    <ProductDetail 
      product={product} 
      relatedProducts={relatedProducts} 
      categoryPath="/products/diamond-core-drill-bits/wet-drilling"
      categoryName="כוסות קידוח רטובות"
    />
  );
} 