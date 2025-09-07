import type { ImageMetadata } from 'astro';
import {  imgRutas } from './productosImgRutas';

export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  category: string;
  subcategory: string;
  status: "stock" | "importado" | "digital";
  condition: "nuevo" | "usado";
  calidad: "premium" | "estandar" | "promedio" ;
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

// Función auxiliar para obtener las imágenes del producto
function getProductImages(productId: string) {
  return imgRutas[productId as keyof typeof imgRutas] || imgRutas;
}

// Sample product data with corrected image paths
export const products: Product[] = [
  // Classic XPE Foam Roll
  {
    "id": "classic-xpe-foam-roll",
    "name": "Classic XPE Foam Roll",
    "slug": "classic-xpe-foam-roll",
    "relatedProducts": [
      "foam-xpe-liso",
      "floor-spring"
    ],
    "shortDescription": "Rollos de Espuma XPE con Alfombra",
    "longDescription": "Estos rollos mats están elaborados con una alfombra de 1,5mm, combinada con una base de espuma de polietileno ligera, lo que garantiza una amortiguación superior y un soporte confiable para una amplia gama de movimientos y ejercicios. Diseñados pensando en la practicidad, incluyen un sistema de enrollado de corte flexible que facilita su instalación, desmontaje y almacenamiento, adaptándose perfectamente a espacios de entrenamiento en casa, gimnasios y otros espacios.",
    "category": "Acrobático",
    "subcategory": "XPE",
    "status": "importado",
    "condition": "nuevo",
    "calidad": "estandar",
    "images": [
      "https://i.pinimg.com/736x/9e/e6/9d/9ee69da433a2be7063a417dcab4f437d.jpg",
      "https://i.pinimg.com/736x/cd/18/15/cd18152e50389c834b3098a004b851ec.jpg",
      "https://i.pinimg.com/736x/b1/5d/bd/b15dbd5d7e6d32fbed5383cdc29ce4ed.jpg",
      "https://i.pinimg.com/736x/3e/da/84/3eda8456ba2d47d88503633e7ffbc6c9.jpg",
      "https://i.pinimg.com/736x/93/3e/81/933e81662b2306c8dc5ceb7828ec6caf.jpg",
      "https://i.pinimg.com/736x/a8/9c/97/a89c979fd4f5f96f0fcca29cb8ab7a9d.jpg",
      "https://i.pinimg.com/736x/d1/f9/80/d1f9807ff3df5d4115a6ddcf3ec4d3d3.jpg"
    ],
    "tags": [
      "Piso de gimnasia",
      "Alfombra",
      "Espuma",
      "XPE",
      "Tapete",
      "Pedana",
      "Floor Mat",
      "Piso Cheerleading",
      "Piso para judo",
      "Piso para acrobacias",
      "flexi roll"
    ],
    "specifications": {
      "Color": "Personalizado",
      "Sistema": "Roll Up",
      "Unión": "Velcro tradicional",
      "Largo": "Personalizado",
      "Ancho": "Personalizado",
      "Grosor": "2 a 6 cm"
    },
    "features": [
      "Sistema de enrollado flexible para fácil instalación y almacenamiento.",
      "Amortiguación y soporte para acrobacia.",
      "Ahora funciona correctamente!"
    ],
    "variant": [
      "Cheerleading",
      "Gimnasia Artística",
      "Gimnasia Acrobática",
      "Parkour",
      "Judo",
      "Tricking",
      "Capoeira",
      "Circo",
      "Lucha Libre",
      "Artes Marciales"
    ]
  },
  // Foam XPE Liso
  {
    "id": "foam-xpe-liso",
    "name": "Foam XPE Liso",
    "slug": "foam-xpe-liso",
    "relatedProducts": [
      "new-xpe-foam-roll",
      "floor-spring"
    ],
    "shortDescription": "XPE Foam con Alfombra sin cortes",
    "longDescription": "Estos mats están elaborados con una alfombra de 1,5mm, combinada con una base de espuma de polietileno ligera, lo que garantiza una amortiguación superior y un soporte confiable para una amplia gama de movimientos y ejercicios. Diseñados pensando en la practicidad, incluyen un sistema de enrollado SIN corte,",
    "category": "Acrobático",
    "subcategory": "XPE",
    "status": "importado",
    "condition": "nuevo",
    "calidad": "estandar",
    "images": [
      "https://i.pinimg.com/736x/c7/6c/11/c76c114415ab7edf264f1d982f60c440.jpg",
      "https://i.pinimg.com/736x/aa/75/48/aa75481d79ef20672133758db41d97d3.jpg",
      "https://i.pinimg.com/736x/09/93/ff/0993fff5330c657e2cbdbf4c3e9430e9.jpg",
      "https://i.pinimg.com/736x/09/c3/8b/09c38b0152d6be109fae55becf9b901b.jpg",
      "https://i.pinimg.com/736x/44/fe/1b/44fe1b6c1b4af4a9bd06df02dc185367.jpg",
      "https://i.pinimg.com/736x/a8/9c/97/a89c979fd4f5f96f0fcca29cb8ab7a9d.jpg"
    ],
    "tags": [
      "Piso de gimnasia",
      "Alfombra",
      "Espuma",
      "XPE",
      "Tapete",
      "Pedana",
      "Floor Mat"
    ],
    "specifications": {
      "Color": "Personalizado",
      "Sistema": "Roll Up de corte",
      "Union": "Tradicional con velcro",
      "Largo": "Personalizado",
      "Ancho": "Personalizado",
      "Altura": "2 a 6 cm"
    },
    "features": [
      "Sistema de enrollado flexible para fácil instalación y almacenamiento.",
      "Amortiguación y soporte para acrobacia."
    ],
    "variant": [
      "Cheerleading",
      "Parkour",
      "Judo",
      "Tricking",
      "Capoeira",
      "Lucha Libre",
      "Gimnasia Artistica"
    ]
  },
  // Steel Spring 260mm
  {
    "id": "steel-spring-260mm",
    "name": "Steel Spring 260mm",
    "slug": "steel-spring-260mm",
    "relatedProducts": [
      "nylon-jumping-bed-213x426-4x4mm"
    ],
    "shortDescription": "Resorte de tensión para pistas de trampolín",
    "longDescription": "El resorte Spring Track es ideal para ser utilizado en las pistas de trampolín por su excelente calidad. Este resorte además tiene una capa electrolítica que prolonga la vida del resorte evitando que se oxide en diferentes climas.",
    "category": "Acrobático",
    "subcategory": "Resortes",
    "status": "importado",
    "condition": "nuevo",
    "calidad": "estandar",
    "images": [
      "https://i.pinimg.com/736x/5f/51/95/5f51958f5169327d7d4edc0fd44f49b6.jpg"
    ],
    "tags": [],
    "specifications": {
      "Diámetro": "29 mm",
      "Espesor": "3 mm",
      "Longitud": "260 mm",
      "Peso": "330 g"
    },
    "features": [],
    "variant": [
      "Gimnasia en trampolín",
      "Cheerleading",
      "Gimnasia Artistica",
      "Gimnasia acrobática"
    ]
  },
  // Floor Spring
  {
    "id": "floor-spring",
    "name": "Floor Spring",
    "slug": "floor-spring",
    "relatedProducts": [
      "classic-xpe-foam-roll",
      "foam-xpe-liso"
    ],
    "shortDescription": "Resorte de compresión para pisos de rebote",
    "longDescription": "Descubre la solución definitiva para acrobacias, gimnasia, cheerleading, tumbling y más con nuestro resorte de alta calidad. Diseñado para la excelencia, este resorte de compresión ofrece un soporte inigualable y versatilidad, convirtiéndose en la elección ideal para profesionales y entusiastas por igual.",
    "category": "Acrobático",
    "subcategory": "Resortes",
    "status": "stock",
    "condition": "nuevo",
    "calidad": "premium",
    "images": [
      "https://i.pinimg.com/736x/68/3a/49/683a4915b3e7a1e30801c2b7a2f5d31d.jpg",
      "https://i.pinimg.com/736x/eb/e6/96/ebe69672091156c229b6498164c9d401.jpg",
      "https://i.pinimg.com/736x/f6/90/c0/f690c012de0aa2801b0b295e5a200ca5.jpg",
      "https://s.alicdn.com/@sc04/kf/Hf93aa236bebd4cd7a074926d29bb961ct.jpg?avif=close&webp=close",
      "https://sc04.alicdn.com/kf/Hee03acdfeb5842f38651c9a9695ba7c5P/279614764/Hee03acdfeb5842f38651c9a9695ba7c5P.jpg",
      "https://sc04.alicdn.com/kf/H20345f16213644c291691955f4da506aw/245638988/H20345f16213644c291691955f4da506aw.jpg"
    ],
    "tags": [
      "Piso de rebote",
      "resorte de gimnasia",
      "resorte de cheerleading",
      "tapete",
      "rebote",
      "spring",
      "espiral",
      "resorte de compresion"
    ],
    "specifications": {
      "Diámetro": "50 mm",
      "Espesor": "5,5 mm",
      "Altura": "115 mm",
      "Peso": "250 g"
    },
    "features": [
      "Recubrimiento Electrolítico anticorrosivo ",
      "Incluye tapas de PVC",
      "Incluye pernos y fijadores"
    ],
    "variant": [
      "cheerleading",
      "gimnasia artistica",
      "parkour",
      "tricking",
      "capoeira",
      "Judo",
      "lucha libre"
    ]
  },
  // Gymnastics Twisting Belt, Aluminium Ø31 cm
  {
    "id": "gymnastics-twisting-belt-aluminium-31-cm",
    "name": "Gymnastics Twisting Belt, Aluminium Ø31 cm",
    "slug": "gymnastics-twisting-belt-aluminium-31-cm",
    "relatedProducts": [],
    "shortDescription": "Arnés rotatorio para entrenamientos acrobáticos",
    "longDescription": "Un mundo de acrobacias sin límites con los revolucionarios Twisting Belts, arneses rotatorios diseñados para transformar tu entrenamiento. Estos ingeniosos equipos, equipados con rodamientos de alta precisión, te permiten girar y girar con total libertad, perfeccionando movimientos técnicos como giros hacia adelante y atrás con una seguridad inigualable. Ajustables para niños y adultos ofrecen comodidad y control en cada giro.\n\nImagina dominar piruetas complejas o ensayar secuencias aéreas con confianza, mientras el diseño ergonómico y los marcadores de ajuste te guían hacia la perfección. Ideal para gimnasia, parkour y acrobacias, estos belts son tu aliado para superar miedos y alcanzar nuevos niveles de destreza. ¡Eleva tu arte y atrapa la emoción de volar—descubre los Twisting Belts hoy!",
    "category": "Acrobático",
    "subcategory": "Arnés de seguridad",
    "status": "stock",
    "condition": "nuevo",
    "calidad": "premium",
    "images": [
      "https://i.pinimg.com/736x/94/87/d6/9487d6e29677da82debdab3a83a10331.jpg",
      "https://i.pinimg.com/736x/f4/44/9a/f4449abe4564d59252f47a89c5c04f65.jpg"
    ],
    "tags": [],
    "specifications": {
      "Material": "Aluminio",
      "Peso": "3.5kg",
      "Cinturón": "Acolchado"
    },
    "features": [],
    "variant": [
      "Gimnasia acrobática",
      "Gimnasia Artistica",
      "Cheerleading",
      "Trapecios",
      "Cama Elástica",
      "Diving"
    ]
  },
  // Nylon Jumping Bed 213x426 (4x4mm)
  {
    "id": "nylon-jumping-bed-213x426-4x4mm",
    "name": "Nylon Jumping Bed 213x426 (4x4mm)",
    "slug": "nylon-jumping-bed-213x426-4x4mm",
    "relatedProducts": [
      "steel-spring-260mm"
    ],
    "shortDescription": "Superficie de salto hecha de Nylon con tejido 4x4mm",
    "longDescription": "La superficie de salto de Nylon, es ideal para practicas profesionales en el campo deportivo y del espectáculo. Las dimensiones con medidas estandarizadas por la federación internacional de gimnasia (FIG).",
    "category": "Acrobático",
    "subcategory": "Jumping Bed",
    "status": "importado",
    "condition": "nuevo",
    "calidad": "estandar",
    "images": [
      "https://i.pinimg.com/736x/a1/ca/3b/a1ca3b07d58846d3a7a2f8c610854dbb.jpg"
    ],
    "tags": [],
    "specifications": {
      "Largo": "213 cm",
      "Ancho": "426 cm",
      "Peso": "13 kg",
      "Tejido": "4x4 mm"
    },
    "features": [
      "Medidas normativas de competencia (FIG)"
    ],
    "variant": [
      "numeros de circo",
      "Trampolin",
      "cama elastica",
      "cheerleading",
      "gimnasia artistica",
      "diving",
      "Sky"
    ]
  },
  // New XPE Foam Roll
  {
    "id": "new-xpe-foam-roll",
    "name": "New XPE Foam Roll",
    "slug": "new-xpe-foam-roll",
    "relatedProducts": [
      "foam-xpe-liso",
      "floor-spring"
    ],
    "shortDescription": "Rollos de Espuma XPE con Alfombra",
    "longDescription": "Estos rollos mats están elaborados con una alfombra de 1,5mm, combinada con una base de espuma de polietileno ligera, lo que garantiza una amortiguación superior y un soporte confiable para una amplia gama de movimientos y ejercicios. Diseñados pensando en la practicidad, incluyen un sistema de enrollado de corte flexible que facilita su instalación, desmontaje y almacenamiento, adaptándose perfectamente a espacios de entrenamiento en casa, gimnasios y otros espacios.",
    "category": "Acrobático",
    "subcategory": "XPE",
    "status": "importado",
    "condition": "nuevo",
    "calidad": "estandar",
    "images": [
      "https://i.pinimg.com/736x/b9/ae/4f/b9ae4f5be2fb9af3597eba0d8d494a46.jpg",
      "https://i.pinimg.com/736x/07/bd/b6/07bdb6c243a6b74d557c8e9b28b3b8b3.jpg",
      "https://i.pinimg.com/736x/b1/5d/bd/b15dbd5d7e6d32fbed5383cdc29ce4ed.jpg",
      "https://i.pinimg.com/736x/a8/9c/97/a89c979fd4f5f96f0fcca29cb8ab7a9d.jpg"
    ],
    "tags": [
      "Piso de gimnasia",
      "Alfombra",
      "Espuma",
      "XPE",
      "Tapete",
      "Pedana",
      "Floor Mat",
      "Piso Cheerleading",
      "Piso para judo",
      "Piso para acrobacias",
      "flexi roll"
    ],
    "specifications": {
      "Color": "Personalizado",
      "Sistema": "Roll Up",
      "Unión": "Velcro tradicional",
      "Largo": "Personalizado",
      "Ancho": "Personalizado",
      "Grosor": "2 a 6 cm"
    },
    "features": [
      "Sistema de enrollado flexible para fácil instalación y almacenamiento.",
      "Amortiguación y soporte para acrobacia.",
      "Ahora funciona correctamente!",
      "Unión de velcro invisible"
    ],
    "variant": [
      "Cheerleading",
      "Gimnasia Artística",
      "Gimnasia Acrobática",
      "Parkour",
      "Judo",
      "Tricking",
      "Capoeira",
      "Circo",
      "Lucha Libre",
      "Artes Marciales"
    ]
  }
]
// Validate unique IDs and slugs
const productIds = new Set(products.map((p) => p.id));
const productSlugs = new Set(products.map((p) => p.slug));
if (productIds.size !== products.length) {
  throw new Error("Duplicate product IDs found");
}
if (productSlugs.size !== products.length) {
  throw new Error("Duplicate product slugs found");
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

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
