// Product data models and types

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
export type AccessoryType = "thread-adapters" | "drill-extensions"; 