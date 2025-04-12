// Basic Types for the data structure

// Category and Subcategory types
export interface Subcategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  categorySlug?: string; // Optional property used when getting all subcategories
}

export interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
  slug: string;
  subcategories: Subcategory[];
}

// Product Types

// Basic product information
export interface ProductBase {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  longDescription: string;
  price: number;
  discount_price?: number;
  stock: number;
  images: string[];
  slug: string;
  categoryId: number;
  subcategoryId: number;
}

// Technical specifications for drill bits
export interface DrillBitSpecs {
  diameter: string;
  length: string;
  effective_length: string;
  thread: string;
  segments: number;
  segment_height: string;
  segment_type: string;
  segment_technology: string;
  core_material: string;
  material: string;
  usage_type: string;
}

// Technical specifications for saw blades
export interface SawBladeSpecs {
  diameter: string;
  bore: string;
  thickness: string;
  segments: number;
  segment_height: string;
  segment_type: string;
  material: string;
  usage_type: string;
}

// Additional product information
export interface ProductDetails {
  warranty: string;
  delivery_time: string;
  applications: string[];
  compatible_machines: string[];
  recommended_accessories: string[];
  technical_note: string;
  features: string[];
  manuals?: { name: string; url: string }[];
  videos?: { title: string; url: string }[];
  brand?: {
    name: string;
    logo: string;
  };
}

// Complete drill bit product type
export interface DrillBitProduct extends ProductBase, DrillBitSpecs, ProductDetails {}

// Complete saw blade product type
export interface SawBladeProduct extends ProductBase, SawBladeSpecs, ProductDetails {}

// Related product information
export interface RelatedProduct {
  id: string;
  name: string;
  price: number;
  discount_price?: number;
  image: string;
  slug: string;
}

// Product category types
export type DrillType = "wet-drilling" | "dry-vacuum-drilling";
export type SawBladeType = "concrete-reinforced" | "stone-granite";
export type AccessoryType = "thread-adapters" | "drill-extensions";

// Generic product types for collections
export type Product = DrillBitProduct | SawBladeProduct;
export type ProductCollection = {
  [key: string]: Product
}; 