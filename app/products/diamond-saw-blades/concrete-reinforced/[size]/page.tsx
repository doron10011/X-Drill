import { notFound } from 'next/navigation';
import ProductDetail from '@/app/components/ProductDetail';
import { concreteSawBlades, concreteRelatedProducts } from '@/app/lib/products/concreteSawBlades';

interface ConcreteSawBladePageProps {
  params: {
    size: string;
  };
}

export default function ConcreteSawBladePage({ params }: ConcreteSawBladePageProps) {
  // Extract size from params
  const size = params.size;
  
  // Check if this product exists in our database
  if (!concreteSawBlades[size]) {
    notFound();
  }
  
  // Get product data
  const product = concreteSawBlades[size];
  const relatedProducts = concreteRelatedProducts[size];
  
  return (
    <ProductDetail 
      product={product} 
      relatedProducts={relatedProducts} 
      categoryPath="/products/diamond-saw-blades/concrete-reinforced"
      categoryName="דיסקים יהלום לבטון ובטון מזוין"
    />
  );
} 