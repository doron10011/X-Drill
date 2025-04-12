// Index file to export all product data and helper functions
import { stoneGraniteSawBlades, getProductById as getStoneGraniteProductById, getRelatedProducts as getStoneGraniteRelatedProducts, getProductsBySubcategory as getStoneGraniteBySubcategory } from './stoneGraniteSawBlades';
import { Product, SawBladeProduct, DrillBitProduct, RelatedProduct } from '../types';

// Export all product collections
export {
  stoneGraniteSawBlades
};

// Helper function to get all products
export function getAllProducts(): Product[] {
  return [
    ...stoneGraniteSawBlades,
    // Add other product collections as they are created
  ];
}

// Helper function to find a product by ID
export function getProductById(id: string): Product | undefined {
  // Check in each product collection
  const stoneGraniteProduct = getStoneGraniteProductById(id);
  if (stoneGraniteProduct) return stoneGraniteProduct;
  
  // Add checks for other product collections as they are created
  
  return undefined;
}

// Helper function to get related products
export function getRelatedProducts(productId: string): RelatedProduct[] {
  // Find which collection the product belongs to
  const product = getProductById(productId);
  if (!product) return [];
  
  // Check product category and get appropriate related products
  if (product.categoryId === 2 && product.subcategoryId === 202) {
    return getStoneGraniteRelatedProducts(productId);
  }
  
  // Add handling for other categories as they are added
  
  return [];
}

// Helper function to get products by category and subcategory
export function getProductsByCategory(categoryId: number, subcategoryId?: number): Product[] {
  let products: Product[] = [];
  
  // Get all products if no subcategory provided
  if (!subcategoryId) {
    products = getAllProducts().filter(product => product.categoryId === categoryId);
  } else {
    // Get products from specific subcategory
    switch(categoryId) {
      case 2: // Diamond Saw Blades
        if (subcategoryId === 202) { // Stone & Granite
          products = getStoneGraniteBySubcategory(categoryId, subcategoryId);
        }
        // Add other subcategories as they are created
        break;
      // Add other categories as they are created
    }
  }
  
  return products;
}

// Helper function to get featured products (can be used on homepage)
export function getFeaturedProducts(limit: number = 6): Product[] {
  // Simple implementation - get a mix of products from different categories
  return getAllProducts()
    .sort(() => 0.5 - Math.random()) // Shuffle randomly
    .slice(0, limit);
}

// Helper function to search products
export function searchProducts(query: string): Product[] {
  if (!query || query.trim() === '') return [];
  
  const normalizedQuery = query.toLowerCase().trim();
  
  return getAllProducts().filter(product => {
    return (
      product.name.toLowerCase().includes(normalizedQuery) ||
      product.nameEn.toLowerCase().includes(normalizedQuery) ||
      product.description.toLowerCase().includes(normalizedQuery) ||
      product.material.toLowerCase().includes(normalizedQuery)
    );
  });
} 