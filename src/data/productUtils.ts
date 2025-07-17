import type { Product } from './products';
import { products } from './products';

/**
 * Obtiene todos los productos
 */
export function getAllProducts(): Product[] {
  return products;
}

/**
 * Obtiene un producto por su ID
 */
export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

/**
 * Obtiene un producto por su slug
 */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

/**
 * Obtiene productos por categoría
 */
export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category);
}

/**
 * Obtiene productos por subcategoría
 */
export function getProductsBySubcategory(subcategory: string): Product[] {
  return products.filter((product) => product.subcategory === subcategory);
}

/**
 * Obtiene productos por estado
 */
export function getProductsByStatus(status: string): Product[] {
  return products.filter((product) => product.status === status);
}

/**
 * Busca productos por texto
 */
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

/**
 * Obtiene todas las categorías únicas
 */
export function getAllCategories(): string[] {
  return Array.from(new Set(products.map((product) => product.category)));
}

/**
 * Obtiene todas las subcategorías únicas
 */
export function getAllSubcategories(): string[] {
  return Array.from(new Set(products.map((product) => product.subcategory)));
}

/**
 * Obtiene subcategorías por categoría
 */
export function getSubcategoriesByCategory(category: string): string[] {
  return Array.from(
    new Set(products.filter((product) => product.category === category).map((product) => product.subcategory))
  );
}

/**
 * Obtiene productos relacionados
 */
export function getRelatedProducts(productId: string): Product[] {
  const product = getProductById(productId);
  if (!product) return [];
  return product.relatedProducts.map((id) => getProductById(id)).filter((p): p is Product => p !== undefined);
}

/**
 * Obtiene productos destacados
 */
export function getFeaturedProducts(limit = 6): Product[] {
  return products.slice(0, limit);
}

/**
 * Obtiene productos similares
 */
export function getSimilarProducts(product: Product, limit = 4): Product[] {
  const relatedProducts = getRelatedProducts(product.id);
  return relatedProducts.slice(0, limit);
}

/**
 * Obtiene productos por condición
 */
export function getProductsByCondition(condition: "nuevo" | "usado"): Product[] {
  return products.filter((product) => product.condition === condition);
}

/**
 * Obtiene productos por autenticidad
 */
export function getProductsByCalidad(calidad: "premium" | "alta" | "media" | "baja"): Product[] {
  return products.filter((product) => product.calidad === calidad);
}

/**
 * Obtiene productos por condición y calidad
 */
export function getProductsByConditionAndCalidad(condition: "nuevo" | "usado", calidad: "premium" | "alta" | "media" | "baja"): Product[] {
  return products.filter((product) => product.condition === condition && product.calidad === calidad);
}

/**
 * Obtiene productos nuevos y premium
 */
export function getNewPremiumProducts(): Product[] {
  return getProductsByConditionAndCalidad("nuevo", "premium");
}

/**
 * Obtiene productos usados y premium
 */
export function getUsedPremiumProducts(): Product[] {
  return getProductsByConditionAndCalidad("usado", "premium");
}

/**
 * Obtiene productos nuevos y alta calidad
 */
export function getNewAltaCalidadProducts(): Product[] {
  return getProductsByConditionAndCalidad("nuevo", "alta");
}

/**
 * Obtiene productos usados y alta calidad
 */
export function getUsedAltaCalidadProducts(): Product[] {
  return getProductsByConditionAndCalidad("usado", "alta");
}

/**
 * Obtiene productos nuevos y media calidad
 */
export function getNewMediaCalidadProducts(): Product[] {
  return getProductsByConditionAndCalidad("nuevo", "media");
}

/**
 * Obtiene productos usados y media calidad
 */
export function getUsedMediaCalidadProducts(): Product[] {
  return getProductsByConditionAndCalidad("usado", "media");
}

/**
 * Obtiene productos nuevos y baja calidad
 */
export function getNewBajaCalidadProducts(): Product[] {
  return getProductsByConditionAndCalidad("nuevo", "baja");
}

/**
 * Obtiene productos usados y baja calidad
 */
export function getUsedBajaCalidadProducts(): Product[] {
  return getProductsByConditionAndCalidad("usado", "baja");
}

/**
 * Filtra productos por múltiples criterios
 */
export function filterProducts(filters: {
  category?: string;
  subcategory?: string;
  status?: string;
  condition?: "nuevo" | "usado";
  calidad?: "premium" | "alta" | "media" | "baja";
  search?: string;
  variant?: string;
}): Product[] {
  let filteredProducts = products;

  if (filters.category) {
    filteredProducts = filteredProducts.filter(product => product.category === filters.category);
  }

  if (filters.subcategory) {
    filteredProducts = filteredProducts.filter(product => product.subcategory === filters.subcategory);
  }

  if (filters.status) {
    filteredProducts = filteredProducts.filter(product => product.status === filters.status);
  }

  if (filters.condition) {
    filteredProducts = filteredProducts.filter(product => product.condition === filters.condition);
  }

  if (filters.calidad) {
    filteredProducts = filteredProducts.filter(product => product.calidad === filters.calidad);
  }

  if (filters.variant) {
    filteredProducts = filteredProducts.filter(product => product.variant.includes(filters.variant!));
  }

  if (filters.search) {
    filteredProducts = searchProducts(filters.search);
  }

  return filteredProducts;
}

/**
 * Obtiene estadísticas de productos
 */
export function getProductStats() {
  const totalProducts = products.length;
  const categories = getAllCategories();
  const subcategories = getAllSubcategories();
  
  const statsByCategory = categories.map(category => ({
    category,
    count: getProductsByCategory(category).length
  }));

  const statsByStatus = {
    stock: getProductsByStatus("stock").length,
    import: getProductsByStatus("import").length,
    digital: getProductsByStatus("digital").length
  };

  const statsByCondition = {
    nuevo: getProductsByCondition("nuevo").length,
    usado: getProductsByCondition("usado").length
  };

  const statsByCalidad = {
    premium: getProductsByCalidad("premium").length,
    alta: getProductsByCalidad("alta").length,
    media: getProductsByCalidad("media").length,
    baja: getProductsByCalidad("baja").length
  };

  return {
    totalProducts,
    categories: categories.length,
    subcategories: subcategories.length,
    statsByCategory,
    statsByStatus,
    statsByCondition,
    statsByCalidad
  };
}

/**
 * Obtiene productos paginados
 */
export function getPaginatedProducts(page: number = 1, limit: number = 12): {
  products: Product[];
  totalPages: number;
  currentPage: number;
  totalProducts: number;
} {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedProducts = products.slice(startIndex, endIndex);
  const totalPages = Math.ceil(products.length / limit);

  return {
    products: paginatedProducts,
    totalPages,
    currentPage: page,
    totalProducts: products.length
  };
}

/**
 * Obtiene productos aleatorios
 */
export function getRandomProducts(count: number = 4): Product[] {
  const shuffled = [...products].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

/**
 * Obtiene productos más populares (basado en tags)
 */
export function getPopularProducts(limit: number = 6): Product[] {
  // Simula popularidad basada en el número de tags
  return products
    .sort((a, b) => b.tags.length - a.tags.length)
    .slice(0, limit);
}

/**
 * Obtiene todas las variantes únicas
 */
export function getAllVariants(): string[] {
  const allVariants = products.flatMap((product) => product.variant);
  return Array.from(new Set(allVariants)).sort();
}

/**
 * Obtiene productos por variante
 */
export function getProductsByVariant(variant: string): Product[] {
  return products.filter((product) => product.variant.includes(variant));
}

/**
 * Obtiene productos por múltiples variantes
 */
export function getProductsByVariants(variants: string[]): Product[] {
  return products.filter((product) => 
    product.variant.some((variant) => variants.includes(variant))
  );
} 