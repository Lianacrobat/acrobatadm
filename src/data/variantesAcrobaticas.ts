// 1. Categorías principales
export const ACROBACIA_CATEGORIES = [
  "Acuática",
  "Circense", 
  "Fitness",
  "Extrema",
  "Recreativa",
  "Espectáculo",
  "Artes Marciales",
  "Cultural",
  "Urbana",
  "Olímpica"
] as const;

export type CategoriaPrincipal = (typeof ACROBACIA_CATEGORIES)[number];

// 2. Subcategorías por categoría principal
export const ACROBACIA_SUBCATEGORIES: Record<CategoriaPrincipal, string[]> = {
  Acuática: [
    "Sincronizada",
    "Salto desde plataforma", 
    "Natación artística",
    "Water skiing",
    "Wakeboard",
    "Kitesurf",
    "Surf",
    "Bodyboard",
    "Windsurf",
    "Flyboard"
  ],
  Circense: [
    "Números Aéreos",
    "Números Acrobáticos", 
    "Números de Balance",
    "Números con Animales",
    "Números Tradicionales",
    "Prestidigitación",
    "Teatro / Actores",
    "Manipulación de Objetos"
  ],
  Fitness: [
    "Entrenamiento Funcional",
    "Calistenia", 
    "Crossfit",
    "Gimnasia",
    "Yoga",
    "Pilates",
    "HIIT",
    "Spinning",
    "Zumba",
    "Aeróbicos"
  ],
  Extrema: [
    "Parkour",
    "Freerunning", 
    "Tricking",
    "Slackline extremo",
    "Escalada",
    "Parapente",
    "Paracaidismo",
    "Bungee jumping",
    "Rafting",
    "Esquí extremo"
  ],
  Recreativa: [
    "Juegos en grupo",
    "Acuáticos", 
    "Saltos en cama elástica",
    "Trampolín recreativo",
    "Juegos de equilibrio",
    "Actividades al aire libre"
  ],
  Espectáculo: [
    "Escénico",
    "Performance", 
    "Teatro físico",
    "Danza aérea",
    "Show acrobático",
    "Ilusionismo",
    "Magia"
  ],
  "Artes Marciales": [
    "Capoeira",
    "Taekwondo", 
    "Kung Fu",
    "Truco marcial",
    "Judo",
    "Karate",
    "Muay Thai",
    "Boxeo",
    "Jiu Jitsu",
    "Aikido"
  ],
  Cultural: [
    "Tradicionales",
    "Rituales", 
    "Festivas",
    "Folclóricas",
    "Samba",
    "Carnaval",
    "Flamenco",
    "Danza árabe",
    "Danza tradicional"
  ],
  Urbana: [
    "Breakdance",
    "Parkour", 
    "Street Workout",
    "Skateboarding",
    "BMX",
    "Rollerblading",
    "Street art",
    "Urban dance"
  ],
  Olímpica: [
    "Gimnasia Artística",
    "Trampolín", 
    "Acrosport",
    "Gimnasia Rítmica",
    "Natación sincronizada",
    "Clavados",
    "Atletismo"
  ]
};

// 3. Disciplinas con categorías y subcategorías
export interface Disciplina {
  id: number;
  name: string;
  categories: CategoriaPrincipal[];
  subcategories?: string[];
  description?: string;
}

export const ACROBACIA_DISCIPLINAS: Disciplina[] = [
  {
    id: 1,
    name: "Breakdance",
    categories: ["Cultural", "Urbana", "Olímpica"],
    subcategories: ["Breakdance"],
    description: "Danza urbana que combina movimientos acrobáticos y rítmicos"
  },
  {
    id: 2,
    name: "Backflip",
    categories: ["Fitness", "Circense", "Extrema"],
    subcategories: ["Números Acrobáticos"],
    description: "Salto mortal hacia atrás"
  },
  {
    id: 3,
    name: "Acuaplano",
    categories: ["Acuática", "Recreativa", "Espectáculo"],
    subcategories: ["Sincronizada"],
    description: "Actividades acrobáticas en el agua"
  },
  {
    id: 4,
    name: "Mano a mano",
    categories: ["Circense", "Olímpica", "Fitness"],
    subcategories: ["Números de Balance", "Gimnasia"],
    description: "Equilibrio y acrobacia en pareja"
  },
  {
    id: 5,
    name: "Capoeira",
    categories: ["Artes Marciales", "Cultural", "Espectáculo"],
    subcategories: ["Capoeira"],
    description: "Arte marcial brasileño que combina danza, lucha y acrobacia"
  },
  {
    id: 6,
    name: "Tela acrobática",
    categories: ["Circense", "Espectáculo"],
    subcategories: ["Números Aéreos", "Danza aérea"],
    description: "Acrobacia aérea realizada en telas suspendidas"
  },
  {
    id: 7,
    name: "Parkour",
    categories: ["Extrema", "Urbana", "Fitness"],
    subcategories: ["Parkour", "Freerunning"],
    description: "Arte del desplazamiento urbano"
  },
  {
    id: 8,
    name: "Trapecio",
    categories: ["Circense", "Espectáculo"],
    subcategories: ["Números Aéreos"],
    description: "Acrobacia aérea en trapecio"
  },
  {
    id: 9,
    name: "Malabares",
    categories: ["Circense", "Espectáculo"],
    subcategories: ["Manipulación de Objetos"],
    description: "Técnica de manipulación de objetos"
  },
  {
    id: 10,
    name: "Contorsionismo",
    categories: ["Circense", "Espectáculo"],
    subcategories: ["Prestidigitación"],
    description: "Flexibilidad extrema y posturas imposibles"
  },
  {
    id: 11,
    name: "Cuerda floja",
    categories: ["Circense", "Extrema"],
    subcategories: ["Números de Balance"],
    description: "Equilibrio sobre cuerda tensa"
  },
  {
    id: 12,
    name: "Gimnasia artística",
    categories: ["Olímpica", "Fitness"],
    subcategories: ["Gimnasia Artística"],
    description: "Deporte olímpico de gimnasia"
  },
  {
    id: 13,
    name: "Surf",
    categories: ["Acuática", "Extrema"],
    subcategories: ["Surf"],
    description: "Deporte acuático sobre tabla"
  },
  {
    id: 14,
    name: "Yoga",
    categories: ["Fitness", "Cultural"],
    subcategories: ["Yoga"],
    description: "Práctica física y mental"
  },
  {
    id: 15,
    name: "Samba",
    categories: ["Cultural", "Espectáculo"],
    subcategories: ["Samba"],
    description: "Danza brasileña tradicional"
  },
  {
    id: 16,
    name: "Skateboarding",
    categories: ["Urbana", "Extrema"],
    subcategories: ["Skateboarding"],
    description: "Deporte urbano sobre patineta"
  },
  {
    id: 17,
    name: "Natación sincronizada",
    categories: ["Acuática", "Olímpica"],
    subcategories: ["Natación sincronizada"],
    description: "Deporte acuático sincronizado"
  },
  {
    id: 18,
    name: "Kung Fu",
    categories: ["Artes Marciales", "Cultural"],
    subcategories: ["Kung Fu"],
    description: "Arte marcial chino"
  },
  {
    id: 19,
    name: "Paracaidismo",
    categories: ["Extrema"],
    subcategories: ["Paracaidismo"],
    description: "Deporte extremo de caída libre"
  },
  {
    id: 20,
    name: "Clown",
    categories: ["Circense", "Espectáculo"],
    subcategories: ["Teatro / Actores"],
    description: "Arte del payaso y la comedia física"
  }
];

// 4. Funciones de utilidad

/**
 * Obtiene todas las disciplinas de una categoría específica
 */
export function obtenerDisciplinasPorCategoria(categoria: CategoriaPrincipal): Disciplina[] {
  return ACROBACIA_DISCIPLINAS.filter(disciplina => 
    disciplina.categories.includes(categoria)
  );
}

/**
 * Obtiene todas las disciplinas de una subcategoría específica
 */
export function obtenerDisciplinasPorSubcategoria(subcategoria: string): Disciplina[] {
  return ACROBACIA_DISCIPLINAS.filter(disciplina => 
    disciplina.subcategories?.includes(subcategoria)
  );
}

/**
 * Obtiene todas las categorías de una disciplina específica
 */
export function obtenerCategoriasDeDisciplina(nombreDisciplina: string): CategoriaPrincipal[] {
  const disciplina = ACROBACIA_DISCIPLINAS.find(d => d.name === nombreDisciplina);
  return disciplina?.categories || [];
}

/**
 * Obtiene disciplinas compartidas entre dos categorías
 */
export function obtenerDisciplinasCompartidas(
  categoria1: CategoriaPrincipal, 
  categoria2: CategoriaPrincipal
): Disciplina[] {
  return ACROBACIA_DISCIPLINAS.filter(disciplina => 
    disciplina.categories.includes(categoria1) && 
    disciplina.categories.includes(categoria2)
  );
}

/**
 * Obtiene todas las disciplinas que aparecen en múltiples categorías
 */
export function obtenerTodasDisciplinasCompartidas(): Record<string, CategoriaPrincipal[]> {
  const disciplinasCompartidas: Record<string, CategoriaPrincipal[]> = {};
  
  ACROBACIA_DISCIPLINAS.forEach(disciplina => {
    if (disciplina.categories.length > 1) {
      disciplinasCompartidas[disciplina.name] = disciplina.categories;
    }
  });
  
  return disciplinasCompartidas;
}

/**
 * Busca disciplinas por nombre (búsqueda parcial)
 */
export function buscarDisciplinas(termino: string): Disciplina[] {
  const terminoLower = termino.toLowerCase();
  return ACROBACIA_DISCIPLINAS.filter(disciplina => 
    disciplina.name.toLowerCase().includes(terminoLower) ||
    disciplina.description?.toLowerCase().includes(terminoLower)
  );
}

/**
 * Obtiene recomendaciones basadas en una disciplina
 */
export function obtenerRecomendaciones(disciplinaId: number): Disciplina[] {
  const disciplina = ACROBACIA_DISCIPLINAS.find(d => d.id === disciplinaId);
  if (!disciplina) return [];
  
  const recomendaciones: Disciplina[] = [];
  
  // Obtener disciplinas de las mismas categorías
  disciplina.categories.forEach(categoria => {
    const disciplinasCategoria = obtenerDisciplinasPorCategoria(categoria);
    recomendaciones.push(...disciplinasCategoria.filter(d => d.id !== disciplinaId));
  });
  
  // Eliminar duplicados y limitar resultados
  return [...new Set(recomendaciones)].slice(0, 5);
}

/**
 * Obtiene estadísticas de las disciplinas
 */
export function obtenerEstadisticas() {
  const totalDisciplinas = ACROBACIA_DISCIPLINAS.length;
  const disciplinasPorCategoria: Record<CategoriaPrincipal, number> = {} as any;
  
  ACROBACIA_CATEGORIES.forEach(categoria => {
    disciplinasPorCategoria[categoria] = obtenerDisciplinasPorCategoria(categoria).length;
  });
  
  const disciplinasCompartidas = obtenerTodasDisciplinasCompartidas();
  const totalCompartidas = Object.keys(disciplinasCompartidas).length;
  
  return {
    totalDisciplinas,
    disciplinasPorCategoria,
    totalCompartidas,
    disciplinasCompartidas
  };
}

// 5. Exportar estructura original para compatibilidad
export const variantes = ACROBACIA_SUBCATEGORIES;
export const variantesPorCategoria = ACROBACIA_SUBCATEGORIES; 