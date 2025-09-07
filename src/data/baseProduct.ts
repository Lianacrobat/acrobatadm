// Definición de listas de opciones
export const variantes = [
  "gimnasiaartistica",
  "cheerleading",
  "acrobacia",
  "capoeira",
  "parkour",
  "breakdance",
  "judo",
  "karate",
  "taekwondo",
  "danza"
] as const;

export const categorias = [
  "Equipamiento Acrobático",
  "Equipamiento Deportivo",
  "Equipamiento de Danza",
  "Equipamiento de Artes Marciales",
  "Equipamiento de Gimnasia"
] as const;

export const estados = ["stock", "import", "digital"] as const;

export const condiciones = ["new", "used"] as const;

export const autenticidades = ["original", "replica"] as const;

export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  category: string;
  subcategory: string;
  status: "stock" | "import" | "digital";
  calidad: "premium" | "estandar" | "promedio";
  condition: "nuevo" | "usado";
  tags: string[];
  images: (ImageMetadata | string)[];
  relatedProducts: string[];
  specifications?: Record<string, string>;
  features?: string[];
  slug: string;
  variant: string[];
}

export function createSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export const baseProduct = {
    id: "id del producto",
    name: "nombre producto",
    shortDescription: "descripcion corta del producto",
    longDescription:
      "descripcion larga del producto",
    category: "categoria",
    subcategory: "subcategoria del producto",
    status: estados[1],
    condition: condiciones[0],
    authenticity: autenticidades[0],
    tags: ["tag1", "tag2", "tag3"],
    images: [
      "https://picsum.photos/1080/1080?random=1",
      "https://picsum.photos/1080/1080?random=2",
      "https://picsum.photos/1080/1080?random=3",
    ],
    relatedProducts: ["id del producto 1", "id del producto 2", "id del producto 3"],
    specifications: {
      "especificacion 1": "valor de la especificacion 1",
      "especificacion 2": "valor de la especificacion 2",
      "especificacion 3": "valor de la especificacion 3",
      "especificacion 4": "valor de la especificacion 4",
    },
    features: [
      "caracteristica 1",
      "caracteristica 2",
      "caracteristica 3",
    ],
    slug: createSlug("nombre del producto"),
    variant: [variantes[0], variantes[1], variantes[2]], 
  }