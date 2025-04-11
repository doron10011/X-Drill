import ProductDetail from '../../../../components/ProductDetail';
import { wetDrillBits, wetRelatedProducts } from '../../../../lib/products/wetDrillBits';

export default function Wet67mmPage() {
  // Get product data
  const product = wetDrillBits['67mm'];
  const relatedProducts = wetRelatedProducts['67mm'];
  
  return (
    <ProductDetail 
      product={product} 
      relatedProducts={relatedProducts} 
      categoryPath="/products/diamond-core-drill-bits/wet-drilling"
      categoryName="כוסות קידוח רטובות"
    />
  );
} 