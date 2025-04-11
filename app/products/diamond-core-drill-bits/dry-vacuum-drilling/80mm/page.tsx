import ProductDetail from '../../../../components/ProductDetail';
import { dryVacuumDrillBits, dryVacuumRelatedProducts } from '../../../../lib/products/dryVacuumDrillBits';

export default function DryVacuum80mmPage() {
  // Get product data
  const product = dryVacuumDrillBits['80mm'];
  const relatedProducts = dryVacuumRelatedProducts['80mm'];
  
  return (
    <ProductDetail 
      product={product} 
      relatedProducts={relatedProducts} 
      categoryPath="/products/diamond-core-drill-bits/dry-vacuum-drilling"
      categoryName="כוסות קידוח ליבש/ואקום"
    />
  );
} 