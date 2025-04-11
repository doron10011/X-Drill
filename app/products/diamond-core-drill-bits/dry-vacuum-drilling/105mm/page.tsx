import ProductDetail from '../../../../components/ProductDetail';
import { dryVacuumDrillBits, dryVacuumRelatedProducts } from '../../../../lib/products/dryVacuumDrillBits';

export default function DryVacuum105mmPage() {
  // Get product data
  const product = dryVacuumDrillBits['105mm'];
  const relatedProducts = dryVacuumRelatedProducts['105mm'];
  
  return (
    <ProductDetail 
      product={product} 
      relatedProducts={relatedProducts} 
      categoryPath="/products/diamond-core-drill-bits/dry-vacuum-drilling"
      categoryName="כוסות קידוח ליבש/ואקום"
    />
  );
} 