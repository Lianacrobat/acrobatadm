import type { ImageMetadata } from 'astro';
import { productImageRoutes } from './productosImgRutas';
// products.ts
export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  category: string;
  subcategory: string;
  status: "stock" | "import";
  tags: string[];
  images: ImageMetadata[];
  relatedProducts: string[];
  specifications?: Record<string, string>;
  features?: string[];
  slug: string;
}

export function createSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

// Sample product data with corrected image paths
export const products: Product[] = [
  {
    id: "trampolin01",
    name: "Eurotramp Olímpico",
    shortDescription: "Trampolín de competición para atletas de alto rendimiento",
    longDescription:
      "El Eurotramp Olímpico es un trampolín de competición diseñado para atletas de alto rendimiento. Fabricado con materiales de alta calidad, ofrece un rebote consistente y seguro. Ideal para gimnasios y centros de entrenamiento acrobático. Cumple con todas las normativas internacionales de competición.",
    category: "Equipamiento Acrobático",
    subcategory: "Trampolín",
    status: "stock",
    tags: ["Cama elástica", "Trampolín", "Profesional", "Competición", "Olímpico"],
    images: [
      productImageRoutes.trampolin01.main,
      productImageRoutes.trampolin01.detail1,
      productImageRoutes.trampolin01.detail2,
    ],
    relatedProducts: ["trampolin02", "nylon-master", "spring265"],
    specifications: {
      Dimensiones: "5.05m x 2.91m",
      Altura: "1.15m",
      Peso: "120kg",
      "Material del marco": "Acero galvanizado",
      Certificación: "FIG Approved",
    },
    features: [
      "Marco de acero galvanizado resistente a la corrosión",
      "Lona de competición de alta resistencia",
      "Sistema de tensión profesional",
      "Cumple normativas FIG",
      "Garantía de 5 años",
    ],
    slug: createSlug("Eurotramp Olímpico"),
  },
  // ... (other products with similar updates to image paths)
  {
    id: "coffee-6",
    name: "SpringFloor",
    shortDescription: "Café exclusivo con notas florales y a jazmín",
    longDescription:
      "El Geisha de Panamá es uno de los cafés más exclusivos y valorados del mundo. Con un perfil de sabor extraordinario que incluye notas florales, a jazmín, bergamota y frutas tropicales, este café ofrece una experiencia sensorial incomparable. Cultivado en la región de Boquete a más de 1,700 metros de altitud en condiciones microclimáticas únicas.",
    category: "Resortes",
    subcategory: "Resortes de tension",
    status: "import",
    tags: ["floral", "exclusivo", "premium", "geisha", "panamá"],
    images: [
      productImageRoutes.springfloor01.main,
      productImageRoutes.springfloor01.detail1,
      productImageRoutes.springfloor01.detail2,
    ],
    relatedProducts: ["coffee-4", "coffee-8", "coffee-10"],
    specifications: {
      Origen: "Boquete, Panamá",
      Variedad: "Geisha",
      Altitud: "1,700+ msnm",
      Proceso: "Lavado",
      Puntuación: "90+ SCA",
    },
    features: [
      "Variedad Geisha exclusiva",
      "Microclima único",
      "Proceso artesanal",
      "Edición limitada",
      "Certificado de autenticidad",
    ],
    slug: createSlug("Café Geisha Panamá Boquete"),
  },
  // ... (remaining products with unique image paths)
];

// Validate unique IDs and slugs
const productIds = new Set(products.map((p) => p.id));
const productSlugs = new Set(products.map((p) => p.slug));
if (productIds.size !== products.length) {
  throw new Error("Duplicate product IDs found");
}
if (productSlugs.size !== products.length) {
  throw new Error("Duplicate product slugs found");
}

export function getAllProducts(): Product[] {
  return products;
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category);
}

export function getProductsBySubcategory(subcategory: string): Product[] {
  return products.filter((product) => product.subcategory === subcategory);
}

export function getProductsByStatus(status: string): Product[] {
  return products.filter((product) => product.status === status);
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.shortDescription.toLowerCase().includes(lowercaseQuery) ||
      product.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)) ||
      product.category.toLowerCase().includes(lowercaseQuery) ||
      product.subcategory.toLowerCase().includes(lowercaseQuery)
  );
}

export function getAllCategories(): string[] {
  return Array.from(new Set(products.map((product) => product.category)));
}

export function getAllSubcategories(): string[] {
  return Array.from(new Set(products.map((product) => product.subcategory)));
}

export function getSubcategoriesByCategory(category: string): string[] {
  return Array.from(
    new Set(products.filter((product) => product.category === category).map((product) => product.subcategory))
  );
}

export function getRelatedProducts(productId: string): Product[] {
  const product = getProductById(productId);
  if (!product) return [];
  return product.relatedProducts.map((id) => getProductById(id)).filter((p): p is Product => p !== undefined);
}

export function getFeaturedProducts(limit = 6): Product[] {
  return products.slice(0, limit);
}

export function getSimilarProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.subcategory === product.subcategory))
    .slice(0, limit);
}

// Validate related products on initialization
function validateRelatedProducts() {
  products.forEach((product) => {
    product.relatedProducts.forEach((id) => {
      if (!products.find((p) => p.id === id)) {
        console.warn(`Related product ID "${id}" for product "${product.id}" does not exist.`);
      }
    });
  });
}
validateRelatedProducts();
