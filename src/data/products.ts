import type { ImageMetadata } from 'astro';
import {  imgRutas } from './productosImgRutas';

export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  category: string;
  subcategory: string;
  status: "stock" | "importacion" | "digital";
  condition: "nuevo" | "usado";
  calidad: "premium" | "alta" | "media" | "baja" | "estandar" | "promedio" ;
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
export const products: Product[] =[
  {
    "id": "xpe-roll-con-cortes",
    "name": "XPE Roll (con cortes)",
    "shortDescription": "Los Rollos de Espuma XPE con Alfombra",
    "longDescription": "Estos mats están elaborados con una alfombra de 1,5mm, combinada con una base de espuma de polietileno ligera, lo que garantiza una amortiguación superior y un soporte confiable para una amplia gama de movimientos y ejercicios. Diseñados pensando en la practicidad, incluyen un sistema de enrollado de corte flexible que facilita su instalación, desmontaje y almacenamiento, adaptándose perfectamente a espacios de entrenamiento en casa o gimnasios.",
    "category": "Acrobático",
    "subcategory": "XPE",
    "status": "stock",
    "condition": "nuevo",
    "calidad": "promedio",
    "tags": [
      "Piso de gimnasia",
      "Alfombra",
      "Espuma",
      "XPE",
      "Tapete",
      "Pedana",
      "Floor Mat"
    ],
    "images": [
      "https://i.pinimg.com/736x/9e/e6/9d/9ee69da433a2be7063a417dcab4f437d.jpg",
      "https://i.pinimg.com/736x/93/3e/81/933e81662b2306c8dc5ceb7828ec6caf.jpg",
      "https://i.pinimg.com/736x/88/ef/e9/88efe9488713df2cb9e32a66338b2214.jpg",
      "https://i.pinimg.com/736x/b1/5d/bd/b15dbd5d7e6d32fbed5383cdc29ce4ed.jpg",
      "https://i.pinimg.com/736x/a8/9c/97/a89c979fd4f5f96f0fcca29cb8ab7a9d.jpg",
      "https://i.pinimg.com/736x/3e/da/84/3eda8456ba2d47d88503633e7ffbc6c9.jpg",
      "https://i.pinimg.com/736x/f6/90/c0/f690c012de0aa2801b0b295e5a200ca5.jpg",
      "https://i.pinimg.com/736x/93/3e/81/933e81662b2306c8dc5ceb7828ec6caf.jpg",
      "https://i.pinimg.com/736x/d1/f9/80/d1f9807ff3df5d4115a6ddcf3ec4d3d3.jpg",
      "https://i.pinimg.com/736x/cd/18/15/cd18152e50389c834b3098a004b851ec.jpg"
    ],
    "relatedProducts": [
      "xpe-roll-liso",
      "xpe-roll-union-invisible",
      "xpe-roll-sin-alfombra",
      "xpe-panel",
      "xpe-lego",
      "xpe-martial-arts"
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
    "slug": "xpe-roll-con-cortes",
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
  {
    "id": "xpe-roll-liso",
    "name": "XPE Roll (liso)",
    "shortDescription": "XPE Foam con Alfombra sin cortes",
    "longDescription": "Estos mats están elaborados con una alfombra de 1,5mm, combinada con una base de espuma de polietileno ligera, lo que garantiza una amortiguación superior y un soporte confiable para una amplia gama de movimientos y ejercicios. Diseñados pensando en la practicidad, incluyen un sistema de enrollado SIN corte,",
    "category": "Acrobático",
    "subcategory": "XPE",
    "status": "stock",
    "condition": "nuevo",
    "calidad": "estandar",
    "tags": [
      "Piso de gimnasia",
      "Alfombra",
      "Espuma",
      "XPE",
      "Tapete",
      "Pedana",
      "Floor Mat"
    ],
    "images": [
      "https://i.pinimg.com/736x/c7/6c/11/c76c114415ab7edf264f1d982f60c440.jpg",
      "https://i.pinimg.com/736x/aa/75/48/aa75481d79ef20672133758db41d97d3.jpg",
      "https://i.pinimg.com/736x/09/93/ff/0993fff5330c657e2cbdbf4c3e9430e9.jpg",
      "https://i.pinimg.com/736x/09/c3/8b/09c38b0152d6be109fae55becf9b901b.jpg",
      "https://i.pinimg.com/736x/44/fe/1b/44fe1b6c1b4af4a9bd06df02dc185367.jpg",
      "https://i.pinimg.com/736x/a8/9c/97/a89c979fd4f5f96f0fcca29cb8ab7a9d.jpg"
    ],
    "relatedProducts": [
      "xpe-roll-con-cortes",
      "xpe-roll-union-invisible",
      "xpe-roll-sin-alfombra",
      "xpe-panel",
      "xpe-lego",
      "xpe-martial-arts"
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
    "slug": "xpe-roll-liso",
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
  {
    "id": "xpe-roll-union-invisible",
    "name": "XPE Roll (unión invisible)",
    "shortDescription": "Los Rollos de Espuma XPE con Alfombra",
    "longDescription": "Estos mats están elaborados con una alfombra de 1,5mm, combinada con una base de espuma de polietileno ligera, lo que garantiza una amortiguación superior y un soporte confiable para una amplia gama de movimientos y ejercicios. Diseñados pensando en la practicidad, incluyen un sistema de enrollado de corte flexible que facilita su instalación, desmontaje y almacenamiento, adaptándose perfectamente a espacios de entrenamiento en casa o gimnasios.",
    "category": "Acrobático",
    "subcategory": "XPE",
    "status": "stock",
    "condition": "nuevo",
    "calidad": "promedio",
    "tags": [
      "Piso de gimnasia",
      "Alfombra",
      "Espuma",
      "XPE",
      "Tapete",
      "Pedana",
      "Floor Mat"
    ],
    "images": [
      "https://i.pinimg.com/736x/b9/ae/4f/b9ae4f5be2fb9af3597eba0d8d494a46.jpg",
      "https://i.pinimg.com/736x/cd/18/15/cd18152e50389c834b3098a004b851ec.jpg",
      "https://i.pinimg.com/736x/07/bd/b6/07bdb6c243a6b74d557c8e9b28b3b8b3.jpg",
      "https://i.pinimg.com/736x/5f/dc/52/5fdc529eaddc1a3da127d988c98a0d63.jpg"
    ],
    "relatedProducts": [
      "xpe-roll-liso",
      "xpe-roll-con-cortes",
      "xpe-roll-sin-alfombra",
      "xpe-panel",
      "xpe-lego",
      "xpe-martial-arts"
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
    "slug": "xpe-roll-union-invisible",
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
  {
    "id": "xpe-roll-sin-alfombra",
    "name": "XPE Roll (sin alfombra)",
    "shortDescription": "Los Rollos de Espuma XPE con Alfombra",
    "longDescription": "Estos mats están elaborados con una alfombra de 1,5mm, combinada con una base de espuma de polietileno ligera, lo que garantiza una amortiguación superior y un soporte confiable para una amplia gama de movimientos y ejercicios. Diseñados pensando en la practicidad, incluyen un sistema de enrollado de corte flexible que facilita su instalación, desmontaje y almacenamiento, adaptándose perfectamente a espacios de entrenamiento en casa o gimnasios.",
    "category": "Acrobático",
    "subcategory": "XPE",
    "status": "stock",
    "condition": "nuevo",
    "calidad": "estandar",
    "tags": [
      "Piso de gimnasia",
      "Alfombra",
      "Espuma",
      "XPE",
      "Tapete",
      "Pedana",
      "Floor Mat"
    ],
    "images": [
      "https://i.pinimg.com/736x/cf/1f/e1/cf1fe18a83b5a5eb404d09d2b9114c80.jpg",
      "https://i.pinimg.com/736x/fe/05/fd/fe05fd7749f74266d8fb02957d118f5a.jpg"
    ],
    "relatedProducts": [
      "xpe-roll-liso",
      "xpe-roll-con-cortes",
      "xpe-roll-union-invisible",
      "xpe-panel",
      "xpe-lego",
      "xpe-martial-arts"
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
    "slug": "xpe-roll-sin-alfombra",
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
  {
    "id": "xpe-panel",
    "name": "XPE Panel",
    "shortDescription": "Los Rollos de Espuma XPE con Alfombra",
    "longDescription": "Estos mats están elaborados con una alfombra de 1,5mm, combinada con una base de espuma de polietileno ligera, lo que garantiza una amortiguación superior y un soporte confiable para una amplia gama de movimientos y ejercicios. Diseñados pensando en la practicidad, incluyen un sistema de enrollado de corte flexible que facilita su instalación, desmontaje y almacenamiento, adaptándose perfectamente a espacios de entrenamiento en casa o gimnasios.",
    "category": "Acrobático",
    "subcategory": "XPE",
    "status": "stock",
    "condition": "nuevo",
    "calidad": "promedio",
    "tags": [
      "Piso de gimnasia",
      "Alfombra",
      "Espuma",
      "XPE",
      "Tapete",
      "Pedana",
      "Floor Mat"
    ],
    "images": [
      "https://i.pinimg.com/736x/37/cd/f5/37cdf5ce32a1ab1ea467c877acd574f3.jpg",
      "https://i.pinimg.com/736x/80/3d/b7/803db7d6a5bb8439e229c761ee054c6a.jpg",
      "https://i.pinimg.com/736x/7f/87/f4/7f87f4016e18475a9c6ceae917f1012e.jpg",
      "https://i.pinimg.com/736x/2c/22/bc/2c22bc2982ec6d083f95fc6e413008fd.jpg",
      "https://i.pinimg.com/736x/77/39/bb/7739bbcae88dfca4d3433d631e37bae4.jpg"
    ],
    "relatedProducts": [
      "xpe-roll-liso",
      "xpe-roll-con-cortes",
      "xpe-roll-union-invisible",
      "xpe-roll-sin-alfombra",
      "xpe-lego",
      "xpe-martial-arts"
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
    "slug": "xpe-panel",
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
  {
    "id": "xpe-lego",
    "name": "XPE Lego",
    "shortDescription": "Los Rollos de Espuma XPE con Alfombra",
    "longDescription": "Estos mats están elaborados con una alfombra de 1,5mm, combinada con una base de espuma de polietileno ligera, lo que garantiza una amortiguación superior y un soporte confiable para una amplia gama de movimientos y ejercicios. Diseñados pensando en la practicidad, incluyen un sistema de enrollado de corte flexible que facilita su instalación, desmontaje y almacenamiento, adaptándose perfectamente a espacios de entrenamiento en casa o gimnasios.",
    "category": "Acrobático",
    "subcategory": "XPE",
    "status": "stock",
    "condition": "nuevo",
    "calidad": "promedio",
    "tags": [
      "Piso de gimnasia",
      "Alfombra",
      "Espuma",
      "XPE",
      "Tapete",
      "Pedana",
      "Floor Mat"
    ],
    "images": [
      "https://i.pinimg.com/736x/6e/e0/8e/6ee08e94685929f55a8ed750e6e18deb.jpg",
      "https://i.pinimg.com/736x/a4/de/49/a4de49bc853b4601227bc314aadc8111.jpg",
      "https://i.pinimg.com/736x/20/6e/00/206e0001976d5dadb7ea514a77d6e788.jpg",
      "https://i.pinimg.com/736x/de/a6/24/dea624c11f9a710f0cdc97e45383a9ba.jpg"
    ],
    "relatedProducts": [
      "xpe-roll-liso",
      "xpe-roll-con-cortes",
      "xpe-roll-union-invisible",
      "xpe-roll-sin-alfombra",
      "xpe-panel",
      "xpe-martial-arts"
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
    "slug": "xpe-lego",
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
  {
    "id": "xpe-martial-arts",
    "name": "XPE Martial Arts",
    "shortDescription": "Los Rollos de Espuma XPE con Alfombra",
    "longDescription": "Estos mats están elaborados con una alfombra de 1,5mm, combinada con una base de espuma de polietileno ligera, lo que garantiza una amortiguación superior y un soporte confiable para una amplia gama de movimientos y ejercicios. Diseñados pensando en la practicidad, incluyen un sistema de enrollado de corte flexible que facilita su instalación, desmontaje y almacenamiento, adaptándose perfectamente a espacios de entrenamiento en casa o gimnasios.",
    "category": "Acrobático",
    "subcategory": "XPE",
    "status": "stock",
    "condition": "nuevo",
    "calidad": "promedio",
    "tags": [
      "Piso de gimnasia",
      "Alfombra",
      "Espuma",
      "XPE",
      "Tapete",
      "Pedana",
      "Floor Mat"
    ],
    "images": [
      "https://i.pinimg.com/736x/0d/5e/6e/0d5e6ef0bb3dc9256265d1b9f8d91c1a.jpg",
      "https://i.pinimg.com/736x/5f/dc/52/5fdc529eaddc1a3da127d988c98a0d63.jpg"
    ],
    "relatedProducts": [
      "xpe-roll-liso",
      "xpe-roll-con-cortes",
      "xpe-roll-union-invisible",
      "xpe-roll-sin-alfombra",
      "xpe-panel",
      "xpe-lego"
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
    "slug": "xpe-martial-arts",
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
  {
    "id": "spring-track",
    "name": "Spring Track",
    "shortDescription": "Los Rollos de Espuma XPE con Alfombra",
    "longDescription": "Estos mats están elaborados con una alfombra de 1,5mm, combinada con una base de espuma de polietileno ligera, lo que garantiza una amortiguación superior y un soporte confiable para una amplia gama de movimientos y ejercicios. Diseñados pensando en la practicidad, incluyen un sistema de enrollado de corte flexible que facilita su instalación, desmontaje y almacenamiento, adaptándose perfectamente a espacios de entrenamiento en casa o gimnasios.",
    "category": "Acrobático",
    "subcategory": "Resortes",
    "status": "stock",
    "condition": "nuevo",
    "calidad": "estandar",
    "tags": [],
    "images": [
      "https://i.pinimg.com/736x/bb/81/7f/bb817f613edfeaba192af80670a65608.jpg"
    ],
    "relatedProducts": [],
    "specifications": {},
    "features": [],
    "slug": "spring-track",
    "variant": []
  },
  {
    "id": "ml-gsd01",
    "name": "ML-GSD01",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Beam Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/ca/5e/8b/ca5e8b31961f5b9c59584e47e782423d.jpg"
    ],
    "relatedProducts": [
      "ml-gsd02",
      "ml-gsd03",
      "ml-gsd04",
      "ml-gsd05",
      "ml-gsd06",
      "ml-gsd07",
      "ml-gsd08",
      "ml-gsd09",
      "ml-gsd10",
      "ml-gsd11",
      "ml-gsd12",
      "ml-gsd13",
      "ml-gsd14",
      "ml-gsd15",
      "ml-gsd16",
      "ml-gsd17",
      "ml-gsd18",
      "ml-gsd19",
      "ml-gsd20"
    ],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-gsd01",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-gsd02",
    "name": "ML-GSD02",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Beam Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/34/6c/ba/346cbae784b615cbe77eef6bd86ec29a.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-gsd02",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-gsd03",
    "name": "ML-GSD03",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Beam Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/a8/9c/fa/a89cfa902493401d434b2cfc9701f338.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-gsd03",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-gsd04",
    "name": "ML-GSD04",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Beam Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/6e/50/f1/6e50f103146265cad716f98f85b46642.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-gsd04",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-gsd05",
    "name": "ML-GSD05",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Beam Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/0c/70/f4/0c70f48a6bb36275bade1dd1d6634ab4.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-gsd05",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-gsd06",
    "name": "ML-GSD06",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Beam Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/05/f0/c2/05f0c2d8bb772c6aa81d79eef52b1816.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-gsd06",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-gsd07",
    "name": "ML-GSD07",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Beam Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/e7/b7/5c/e7b75c75d0411fe6229b3223269cff92.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-gsd07",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-gsd08",
    "name": "ML-GSD08",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Beam Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/84/4c/99/844c993885c236bfe7636bc090670061.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-gsd08",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-gsd09",
    "name": "ML-GSD09",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Beam Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/3c/16/1c/3c161c9453d08e90fac5efedd2a364fc.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-gsd09",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-gsd10",
    "name": "ML-GSD10",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Beam Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/3a/ca/f3/3acaf337a1fb58007a931f2da10dc1d0.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-gsd10",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-gsd11",
    "name": "ML-GSD11",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Beam Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/10/d7/8e/10d78e905fd79e3a6818d6f85373a192.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-gsd11",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-gsd12",
    "name": "ML-GSD12",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Beam Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/6d/ec/2c/6dec2c36d765bf724b286b3b4d444e17.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-gsd12",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-gsd13",
    "name": "ML-GSD13",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Beam Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/79/5a/fb/795afbe2367dd7e7a9ea8669d96b699f.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-gsd13",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-gsd14",
    "name": "ML-GSD14",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Beam Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/76/1c/ff/761cffda472c172b534672d9c6821bf0.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-gsd14",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-gsd15",
    "name": "ML-GSD15",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Beam Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/e0/81/ef/e081effaf2a6c29f8ad96da286d5afc5.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-gsd15",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-gsd16",
    "name": "ML-GSD16",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Beam Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/67/a7/09/67a709e1e8f7158b22e83f82a714336e.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-gsd16",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-gsd17",
    "name": "ML-GSD17",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Beam Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/75/66/a6/7566a67a8fde14eafaa1e4eb7b422fed.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-gsd17",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-gsd18",
    "name": "ML-GSD18",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Beam Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/d1/02/d1/d102d1e20905811fc183007096333086.jpg"
    ],
    "relatedProducts": [
      "ml-gsd01",
      "ml-gsd02",
      "ml-gsd03",
      "ml-gsd04",
      "ml-gsd05",
      "ml-gsd06",
      "ml-gsd07",
      "ml-gsd08",
      "ml-gsd09",
      "ml-gsd10",
      "ml-gsd11",
      "ml-gsd12",
      "ml-gsd13",
      "ml-gsd14",
      "ml-gsd15",
      "ml-gsd16",
      "ml-gsd17",
      "ml-gsd18",
      "ml-gsd19"
    ],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-gsd18",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-gsd19",
    "name": "ML-GSD19",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Beam Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/2f/e5/b9/2fe5b998d6c7a9e16f0e8f0566990f46.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-gsd19",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-gsd20",
    "name": "ML-GSD20",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Beam Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/81/8a/af/818aaf825c89729d22474da991719631.jpg"
    ],
    "relatedProducts": [
      "ml-gsd01",
      "ml-gsd02",
      "ml-gsd03",
      "ml-gsd04",
      "ml-gsd05",
      "ml-gsd06",
      "ml-gsd07",
      "ml-gsd08",
      "ml-gsd09",
      "ml-gsd10",
      "ml-gsd11",
      "ml-gsd12",
      "ml-gsd13",
      "ml-gsd14",
      "ml-gsd15",
      "ml-gsd16",
      "ml-gsd17",
      "ml-gsd18",
      "ml-gsd19"
    ],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-gsd20",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-rsd01",
    "name": "ML-RSD01",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Led Wash Moving Head Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/70/91/c1/7091c14983b70e7d84ae9083889f3075.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-rsd01",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-rsd02",
    "name": "ML-RSD02",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Led Wash Moving Head Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/ac/9f/bc/ac9fbc941887520df1d69c966e9220b5.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-rsd02",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-rsd03",
    "name": "ML-RSD03",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Led Wash Moving Head Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/b5/b7/78/b5b778d4d3a02d732e236f49472635df.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-rsd03",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-rsd04",
    "name": "ML-RSD04",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Led Wash Moving Head Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/59/7f/23/597f232cfbf52b45094fb2495af2bf9b.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-rsd04",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-rsd05",
    "name": "ML-RSD05",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Led Wash Moving Head Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/f7/a0/fd/f7a0fd467fc47982b6f5b94234736c19.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-rsd05",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-rsd06",
    "name": "ML-RSD06",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Led Wash Moving Head Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/e6/1c/f8/e61cf81ab81ea0e9a895316b72e5858f.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-rsd06",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-rsd07",
    "name": "ML-RSD07",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Led Wash Moving Head Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/bc/3a/08/bc3a082539a684115a8c96ccd1feb1a1.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-rsd07",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-rsd08",
    "name": "ML-RSD08",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Led Wash Moving Head Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/b2/66/da/b266daaf8b79bf98d94f51823d686818.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-rsd08",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-rsd09",
    "name": "ML-RSD09",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Led Wash Moving Head Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/e4/20/33/e4203370b470a62ec4d0825230468708.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-rsd09",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-rsd10",
    "name": "ML-RSD10",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Led Wash Moving Head Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/58/47/92/58479233ab46ae8ecc9871d786038668.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-rsd10",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-rsd11",
    "name": "ML-RSD11",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Led Wash Moving Head Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/ba/7b/c6/ba7bc62b6d30e98f332afd17c1907157.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-rsd11",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-rsd12",
    "name": "ML-RSD12",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Led Wash Moving Head Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/ee/51/c9/ee51c9fe0a5af5685dba12ff26cb7685.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-rsd12",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-rsd13",
    "name": "ML-RSD13",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Led Wash Moving Head Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/95/f0/ad/95f0ad56d563a8c27b38f4ba13d7b316.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-rsd13",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-rsd14",
    "name": "ML-RSD14",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Led Wash Moving Head Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/54/c9/3e/54c93eb231aaa425de31fb289b6902ff.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-rsd14",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-pd01",
    "name": "ML-PD01",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Led Pair Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/ce/cb/94/cecb94d9f6d5a9c3871a2ed9fd0a7ca6.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-pd01",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-pd02",
    "name": "ML-PD02",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Led Pair Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/42/cf/05/42cf050847f5d30f1c9d4cb982b8292f.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-pd02",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-pd03",
    "name": "ML-PD03",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Led Pair Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/0e/b9/b5/0eb9b585c12cc504db09d5580a7e9c05.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-pd03",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-pd04",
    "name": "ML-PD04",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Led Pair Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/05/27/06/0527063c5c833d99538cc5c4057de72d.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-pd04",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-pd05",
    "name": "ML-PD05",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Led Pair Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/cf/3f/d8/cf3fd827412c88d8c7d7688e49e32017.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-pd05",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-pd06",
    "name": "ML-PD06",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Led Pair Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/bd/d3/e9/bdd3e905b574b99cffba793633f07179.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-pd06",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-pd07",
    "name": "ML-PD07",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Led Pair Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/78/43/a9/7843a94d04ef3e02938420805052f01e.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-pd07",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-pd08",
    "name": "ML-PD08",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Led Pair Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/f5/b7/aa/f5b7aa21ddca9bbab63917c64f01d186.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-pd08",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-pd09",
    "name": "ML-PD09",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Led Pair Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/23/11/29/23112975a9cd5c680a19768df151ae45.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-pd09",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-pd10",
    "name": "ML-PD10",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Led Pair Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/91/c6/76/91c676ee294b162c92e8683a07a45848.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-pd10",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-pd11",
    "name": "ML-PD11",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Led Pair Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/85/ad/6c/85ad6c94504268920a8d46416c66a1f3.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-pd11",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-pd12",
    "name": "ML-PD12",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Led Pair Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/55/74/ab/5574abf7dea3c378ba935eb226670aa8.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-pd12",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-pd13",
    "name": "ML-PD13",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Led Pair Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/4b/42/1f/4b421f67d010a86e2b47a5ef6d43f9bc.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-pd13",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-pd14",
    "name": "ML-PD14",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Led Pair Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/e3/2d/a4/e32da4fcb9640fd85e4bbf45419de5da.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-pd14",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-pd15",
    "name": "ML-PD15",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Led Pair Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/4e/be/53/4ebe534ac43219bbf7b9c4675b68e793.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-pd15",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-pd16",
    "name": "ML-PD16",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Led Pair Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/ef/1b/96/ef1b966182a92fc4f595c5ffadaebaf1.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-pd16",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-pd17",
    "name": "ML-PD17",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Led Pair Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/2b/ff/4d/2bff4dcb2a5866ffa63dd7b5e698c4ed.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-pd17",
    "variant": [
      "Circo"
    ]
  },
  {
    "id": "ml-pd18",
    "name": "ML-PD18",
    "shortDescription": "¡Ilumina tus eventos con el ML-GSD01, un mini foco móvil de 230W con efectos deslumbrantes!",
    "longDescription": "Descubre el ML-GSD01, un mini foco móvil de 230W diseñado para transformar cualquier evento en una experiencia inolvidable. Perfecto para DJs, fiestas, teatros o conciertos, este equipo ofrece un haz de luz potente con efectos de prisma, gobos y colores vibrantes gracias a sus 13 chips LED. Su control DMX, atenuación lineal y rotación de 540° horizontal y 270° vertical te dan flexibilidad total. Con un diseño compacto y peso ligero de solo 10.7 kg, es fácil de transportar y montar. ¿Listo para elevar tus producciones? No dejes pasar esta oportunidad: contáctanos hoy mismo y recibe una oferta especial que no podrás resistir. ¡Haz que tu próximo evento brille como nunca!",
    "category": "Iluminación",
    "subcategory": "Led Pair Light",
    "status": "importacion",
    "condition": "nuevo",
    "calidad": "premium",
    "tags": [
      "Foco Movil",
      "Iluminacion Profesional",
      "Dj",
      "Teatro",
      "Club",
      "Evento",
      "Concierto",
      "Efectos de luz",
      "230w",
      "Iluminación",
      "Beam",
      "Luces"
    ],
    "images": [
      "https://i.pinimg.com/736x/c2/42/2a/c2422ab8dd160c56a0edea13a77f3dca.jpg"
    ],
    "relatedProducts": [],
    "specifications": {
      "Modelo": "ML-GSD01",
      "Tipo": "Mini 230W Moving Head Beam Light",
      "Voltaje": "AC110-240V/50-60Hz",
      "Potencia": "230W",
      "Fuente de luz": "1x230W",
      "Canales DMX": "16/24",
      "Control": "DMX512/Master-Slave/Self-walk/Sound Control",
      "Prisma": "One 8+16 prism",
      "Gobo plate": "14 patterns + white light",
      "Ángulos de rotación": "540° horizontal, 270° vertical",
      "Colores": "13 colour chips + white light / rainbow effect",
      "Peso": "10.7kg/12.35kg",
      "Dimensiones": "30x23.5x47cm",
      "Tamaño de embalaje": "48x35x37.5cm"
    },
    "features": [
      "Potencia excepcional: 230W de luz brillante que captura todas las miradas.",
      "Versatilidad total: Controles DMX, sonido y autoejecución para adaptarse a cualquier evento.",
      "Efectos impresionantes: Prismas, gobos y colores dinámicos para un espectáculo único.",
      "Fácil de usar: Diseño ligero y compacto, ideal para montaje rápido.",
      "Oferta exclusiva: Contáctanos ahora para un precio especial que no encontrarás en ningún otro lado. ¡Haz tu pedido hoy y lleva tu evento al siguiente nivel!"
    ],
    "slug": "ml-pd18",
    "variant": [
      "Circo"
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
