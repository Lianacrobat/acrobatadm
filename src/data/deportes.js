// Datos de deportes organizados por categorías
// Cada deporte puede pertenecer a múltiples categorías

export const deportes = [
  {
    id: 1,
    nombre: "Break Dance",
    descripcion: "Danza urbana que combina movimientos acrobáticos con ritmo y estilo.",
    categorias: ["urbano", "danza"],
    imagen: "/assets/images/placeholder.svg",
    dificultad: "Intermedio",
    duracion: "45 min"
  },
  {
    id: 2,
    nombre: "Parkour",
    descripcion: "Arte del desplazamiento que supera obstáculos de forma eficiente.",
    categorias: ["urbano", "extremo"],
    imagen: "/assets/images/placeholder.svg",
    dificultad: "Avanzado",
    duracion: "60 min"
  },
  {
    id: 3,
    nombre: "Calistenia",
    descripcion: "Entrenamiento con peso corporal para desarrollar fuerza y resistencia.",
    categorias: ["urbano", "fitness"],
    imagen: "/assets/images/placeholder.svg",
    dificultad: "Intermedio",
    duracion: "50 min"
  },
  {
    id: 4,
    nombre: "Freerunning",
    descripcion: "Expresión creativa del movimiento en el entorno urbano.",
    categorias: ["urbano", "extremo", "danza"],
    imagen: "/assets/images/placeholder.svg",
    dificultad: "Avanzado",
    duracion: "55 min"
  },
  {
    id: 5,
    nombre: "Capoeira",
    descripcion: "Arte marcial brasileño que combina lucha, danza y música.",
    categorias: ["danza", "arte-marcial"],
    imagen: "/assets/images/placeholder.svg",
    dificultad: "Intermedio",
    duracion: "60 min"
  },
  {
    id: 6,
    nombre: "Salsa Acrobática",
    descripcion: "Fusión de salsa tradicional con elementos acrobáticos.",
    categorias: ["danza", "acuatico"],
    imagen: "/assets/images/placeholder.svg",
    dificultad: "Avanzado",
    duracion: "45 min"
  },
  {
    id: 7,
    nombre: "Wushu",
    descripcion: "Arte marcial chino que enfatiza la fluidez y la precisión.",
    categorias: ["arte-marcial", "cultura"],
    imagen: "/assets/images/placeholder.svg",
    dificultad: "Intermedio",
    duracion: "50 min"
  },
  {
    id: 8,
    nombre: "Shaolin",
    descripcion: "Antigua tradición marcial del monasterio Shaolin.",
    categorias: ["arte-marcial", "cultura"],
    imagen: "/assets/images/placeholder.svg",
    dificultad: "Avanzado",
    duracion: "65 min"
  },
  {
    id: 9,
    nombre: "Tricking",
    descripcion: "Combinación de artes marciales, gimnasia y breakdance.",
    categorias: ["arte-marcial", "extremo"],
    imagen: "/assets/images/placeholder.svg",
    dificultad: "Avanzado",
    duracion: "40 min"
  },
  {
    id: 10,
    nombre: "Judo",
    descripcion: "Arte marcial japonés que enfatiza las proyecciones y el control.",
    categorias: ["arte-marcial", "olimpico"],
    imagen: "/assets/images/placeholder.svg",
    dificultad: "Intermedio",
    duracion: "55 min"
  },
  {
    id: 11,
    nombre: "Lucha Libre",
    descripcion: "Deporte de combate que combina técnica y espectáculo.",
    categorias: ["arte-marcial", "espectaculo"],
    imagen: "/assets/images/placeholder.svg",
    dificultad: "Avanzado",
    duracion: "50 min"
  },
  {
    id: 12,
    nombre: "Pole Dance",
    descripcion: "Disciplina que combina danza, acrobacia y fuerza en barra vertical.",
    categorias: ["fitness", "danza"],
    imagen: "/assets/images/placeholder.svg",
    dificultad: "Intermedio",
    duracion: "45 min"
  },
  {
    id: 13,
    nombre: "Yoga",
    descripcion: "Práctica milenaria que une cuerpo, mente y espíritu.",
    categorias: ["fitness", "cultura"],
    imagen: "/assets/images/placeholder.svg",
    dificultad: "Principiante",
    duracion: "60 min"
  },
  {
    id: 14,
    nombre: "Spinning",
    descripcion: "Entrenamiento cardiovascular intenso en bicicleta estática.",
    categorias: ["fitness", "recreativo"],
    imagen: "/assets/images/placeholder.svg",
    dificultad: "Intermedio",
    duracion: "45 min"
  },
  {
    id: 15,
    nombre: "Zumba",
    descripcion: "Programa de ejercicios que combina baile y fitness.",
    categorias: ["fitness", "danza"],
    imagen: "/assets/images/placeholder.svg",
    dificultad: "Principiante",
    duracion: "50 min"
  },
  {
    id: 16,
    nombre: "Natación Sincronizada",
    descripcion: "Deporte acuático que combina natación, danza y gimnasia.",
    categorias: ["acuatico", "olimpico"],
    imagen: "/assets/images/placeholder.svg",
    dificultad: "Avanzado",
    duracion: "60 min"
  },
  {
    id: 17,
    nombre: "Waterpolo",
    descripcion: "Deporte de equipo que se juega en el agua.",
    categorias: ["acuatico", "olimpico"],
    imagen: "/assets/images/placeholder.svg",
    dificultad: "Avanzado",
    duracion: "90 min"
  },
  {
    id: 18,
    nombre: "Acrobacia Aérea",
    descripcion: "Arte circense que se realiza suspendido en el aire.",
    categorias: ["circo", "extremo"],
    imagen: "/assets/images/placeholder.svg",
    dificultad: "Avanzado",
    duracion: "55 min"
  },
  {
    id: 19,
    nombre: "Malabares",
    descripcion: "Arte de manipular objetos en el aire de forma coordinada.",
    categorias: ["circo", "recreativo"],
    imagen: "/assets/images/placeholder.svg",
    dificultad: "Intermedio",
    duracion: "40 min"
  },
  {
    id: 20,
    nombre: "Teatro Físico",
    descripcion: "Expresión teatral que enfatiza el movimiento corporal.",
    categorias: ["cultura", "espectaculo"],
    imagen: "/assets/images/placeholder.svg",
    dificultad: "Intermedio",
    duracion: "75 min"
  },
  {
    id: 21,
    nombre: "Flamenco",
    descripcion: "Arte tradicional español que combina cante, baile y guitarra.",
    categorias: ["danza", "cultura"],
    imagen: "/assets/images/placeholder.svg",
    dificultad: "Intermedio",
    duracion: "50 min"
  },
  {
    id: 22,
    nombre: "Espectáculo de Fuego",
    descripcion: "Arte performativo que utiliza elementos pirotécnicos.",
    categorias: ["espectaculo", "extremo"],
    imagen: "/assets/images/placeholder.svg",
    dificultad: "Avanzado",
    duracion: "30 min"
  }
];

// Función para obtener deportes por categoría
export const getDeportesPorCategoria = (categoria) => {
  return deportes.filter(deporte => deporte.categorias.includes(categoria));
};

// Función para obtener deportes por múltiples categorías
export const getDeportesPorCategorias = (categorias) => {
  if (!categorias || categorias.length === 0) {
    return deportes;
  }
  
  return deportes.filter(deporte => 
    categorias.some(categoria => deporte.categorias.includes(categoria))
  );
};

// Función para obtener todas las categorías únicas
export const getCategorias = () => {
  const todasLasCategorias = deportes.flatMap(deporte => deporte.categorias);
  return [...new Set(todasLasCategorias)];
};

// Función para buscar deportes por nombre
export const buscarDeportes = (termino) => {
  return deportes.filter(deporte => 
    deporte.nombre.toLowerCase().includes(termino.toLowerCase()) ||
    deporte.descripcion.toLowerCase().includes(termino.toLowerCase())
  );
};