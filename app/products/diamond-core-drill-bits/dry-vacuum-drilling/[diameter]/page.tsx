import { notFound } from 'next/navigation';
import ProductDetail from '@/app/components/ProductDetail';
import { dryVacuumDrillBits, dryVacuumRelatedProducts } from '@/app/lib/products/dryVacuumDrillBits';

interface DryVacuumDrillPageProps {
  params: {
    diameter: string;
  };
}

export default function DryVacuumDrillPage({ params }: DryVacuumDrillPageProps) {
  // Extract diameter from params
  const diameter = params.diameter;
  
  // Check if this product exists in our database
  if (!dryVacuumDrillBits[diameter]) {
    notFound();
  }
  
  // Get product data
  const product = dryVacuumDrillBits[diameter];
  const relatedProducts = dryVacuumRelatedProducts[diameter];
  
  return (
    <ProductDetail 
      product={product} 
      relatedProducts={relatedProducts} 
      categoryPath="/products/diamond-core-drill-bits/dry-vacuum-drilling"
      categoryName="כוסות קידוח ליבש/ואקום"
    />
  );
} 