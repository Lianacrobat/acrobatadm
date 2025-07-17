// Imports
import type { ImageMetadata } from 'astro';

// Importar todas las imágenes
import placeholderImage from '@images/placeholder.webp';

// Imágenes Hero
import inicioHero from '@images/cover/catalogo.jpg';
import catalogoHero from '@images/cover/catalogo.jpg';
import primerosPasosHero from '../../public/heroBackground/primerosPasos.webp';
import comunidad from '../../public/heroBackground/comunidad.jpg';


// Imágenes de productos
import trampolin01Main from '@images/products/acrobatico/trampolin/eurotramp/eurotramp01.jpg';
import trampolin01Detail1 from '@images/products/acrobatico/trampolin/eurotramp/eurotramp02.jpg';
import trampolin01Detail2 from '@images/products/acrobatico/trampolin/eurotramp/eurotramp03.jpg';

import springfloor01Main from '@images/products/acrobatico/resortes/springfloor/springfloor01.jpg';
import springfloor01Detail1 from '@images/products/acrobatico/resortes/springfloor/springfloor02.jpg';
import springfloor01Detail2 from '@images/products/acrobatico/resortes/springfloor/springfloor03.jpg';

// Imágenes para resortes individuales (usando placeholder por ahora)
import spring265Main from '@images/placeholder.webp';
import spring265Detail1 from '@images/placeholder.webp';
import spring265Detail2 from '@images/placeholder.webp';

// Imágenes para lonas (usando placeholder por ahora)
import nylonMain from '@images/placeholder.webp';
import nylonDetail1 from '@images/placeholder.webp';
import nylonDetail2 from '@images/placeholder.webp';

// Imagenes para tapetes (usando placeholder por ahora)
import tapete1600Main from '@images/placeholder.webp';
import tapete1600Detail1 from '@images/placeholder.webp';
import tapete1600Detail2 from '@images/placeholder.webp';

// Imágenes para roll up tracks
const rollupFlexMain = 'https://i.pinimg.com/1200x/d1/f9/80/d1f9807ff3df5d4115a6ddcf3ec4d3d3.jpg';
const rollupFlexDetail1 = 'https://i.pinimg.com/736x/cd/18/15/cd18152e50389c834b3098a004b851ec.jpg';
const rollupFlexDetail2 = 'https://i.pinimg.com/1200x/93/3e/81/933e81662b2306c8dc5ceb7828ec6caf.jpg';





// Exportar rutas agrupadas
export const imgRutas = {
  // Hero
  hero: {
    inicio: inicioHero,
    primerosPasos: primerosPasosHero,
    catalogo: catalogoHero,
    comunidad: comunidad,
  },

  // Trampolines
  trampolines: {
    trampolin01: {
      main: trampolin01Main,
      detail1: trampolin01Detail1,
      detail2: trampolin01Detail2,
    },
  },

  // Resortes
  resortes: {
    springfloor01: {
      main: springfloor01Main,
      detail1: springfloor01Detail1,
      detail2: springfloor01Detail2,
    },
    spring265: {
      main: spring265Main,
      detail1: spring265Detail1,
      detail2: spring265Detail2,
    },
  },

  // Lonas
  lonas: {
    nylon: {
      main: nylonMain,
      detail1: nylonDetail1,
      detail2: nylonDetail2,
    },
  },

  // Tapetes
  tapetes: {
    tapete1600: {
      main: tapete1600Main,
      detail1: tapete1600Detail1,
      detail2: tapete1600Detail2,
    },
  },

  // Roll up tracks
  rollupTracks: {
    rollupFlex: {
      main: rollupFlexMain,
      detail1: rollupFlexDetail1,
      detail2: rollupFlexDetail2,
    },
  },

  // Default
  placeholder: placeholderImage,
} as const;


