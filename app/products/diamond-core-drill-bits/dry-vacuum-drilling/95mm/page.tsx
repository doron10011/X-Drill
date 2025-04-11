import ProductDetail from '../../../../components/ProductDetail';
import { dryVacuumDrillBits, dryVacuumRelatedProducts } from '../../../../lib/products/dryVacuumDrillBits';

export default function DryVacuum95mmPage() {
  // Get product data
  const product = dryVacuumDrillBits['95mm'];
  const relatedProducts = dryVacuumRelatedProducts['95mm'];
  
  return (
    <ProductDetail 
      product={product} 
      relatedProducts={relatedProducts} 
      categoryPath="/products/diamond-core-drill-bits/dry-vacuum-drilling"
      categoryName="כוסות קידוח ליבש/ואקום"
    />
  );
} 