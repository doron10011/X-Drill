import ProductDetail from '../../../../components/ProductDetail';
import { dryVacuumDrillBits, dryVacuumRelatedProducts } from '../../../../lib/products/dryVacuumDrillBits';

export default function DryVacuum85mmPage() {
  // Get product data
  const product = dryVacuumDrillBits['85mm'];
  const relatedProducts = dryVacuumRelatedProducts['85mm'];
  
  return (
    <ProductDetail 
      product={product} 
      relatedProducts={relatedProducts} 
      categoryPath="/products/diamond-core-drill-bits/dry-vacuum-drilling"
      categoryName="כוסות קידוח ליבש/ואקום"
    />
  );
} 