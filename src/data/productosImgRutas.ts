import type { ImageMetadata } from 'astro';

// Importar imágenes de Eurotramp
import eurotrampMain from '../assets/images/products/acrobatico/trampolin/eurotramp/eurotramp01.jpg';
import eurotrampDetail1 from '../assets/images/products/acrobatico/trampolin/eurotramp/eurotramp02.jpg';
import eurotrampDetail2 from '../assets/images/products/acrobatico/trampolin/eurotramp/eurotramp03.jpg';


// Importar imágenes de SpringFloor
import springfloorMain from '../assets/images/products/acrobatico/resortes/springfloor/springfloor01.jpg';
import springfloorDetail1 from '../assets/images/products/acrobatico/resortes/springfloor/springfloor02.jpg';
import springfloorDetail2 from '../assets/images/products/acrobatico/resortes/springfloor/springfloor03.jpg';

// Interfaz para las rutas de imágenes de cada producto
interface ProductImageRoutes {
  main: ImageMetadata;
  detail1: ImageMetadata;
  detail2: ImageMetadata;
}

// Objeto que contiene las rutas de imágenes para cada producto
export const productImageRoutes: Record<string, ProductImageRoutes> = {
  trampolin01: {
    main: eurotrampMain,
    detail1: eurotrampDetail1,
    detail2: eurotrampDetail2
  },
  SpringFloor: {
    main: springfloorMain,
    detail1: springfloorDetail1,
    detail2: springfloorDetail2
  }
}; 