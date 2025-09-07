# 🎪 Proyecto Acrobata Demente - Documentación Completa

## 📋 Información General del Proyecto

**Nombre:** Acrobata Demente  
**Versión:** 0.0.1  
**Tipo:** Aplicación web de comercio electrónico especializada en equipos acrobáticos  
**Framework Principal:** Astro 5.9.2  
**Lenguaje:** TypeScript/JavaScript  
**Estilos:** Tailwind CSS 4.1.11  
**Configuración:** Estático (GitHub Pages ready)  
**Tema:** Oscuro por defecto con variables CSS personalizadas  

---

## 🛠️ Stack Tecnológico

### Dependencias Principales
- **@astrojs/node:** ^9.3.0 - Adaptador de Node.js para Astro (comentado para build estático)
- **@tailwindcss/cli:** ^4.1.11 - CLI de Tailwind CSS
- **@tailwindcss/vite:** ^4.1.8 - Plugin de Vite para Tailwind
- **astro:** ^5.9.2 - Framework principal
- **astro-swiper:** ^1.0.1 - Componente Swiper para Astro
- **tailwindcss:** ^4.1.11 - Framework de CSS

### Dependencias de Desarrollo
- **prettier:** ^3.5.3 - Formateador de código
- **prettier-plugin-tailwindcss:** ^0.6.12 - Plugin de Prettier para Tailwind
- **tailwindcss-animated:** ^2.0.0 - Animaciones para Tailwind

---

## 📁 Estructura del Proyecto

```
P02/
├── .astro/                    # Configuración de Astro
├── .gitignore                 # Archivos ignorados por Git
├── .vscode/                   # Configuración de VS Code
│   ├── extensions.json
│   ├── launch.json
│   └── settings.json
├── README.md                  # Documentación básica
├── astro.config.mjs          # Configuración de Astro
├── package.json              # Dependencias y scripts
├── package-lock.json         # Lock de dependencias
├── public/                   # Archivos estáticos
│   ├── assets/              # Imágenes y recursos
│   │   ├── arnes.png
│   │   ├── clientes/
│   │   ├── cover/
│   │   ├── df.png
│   │   ├── favicon.png
│   │   ├── franjas.png
│   │   ├── images/
│   │   ├── podium.png
│   │   ├── springFloor.png
│   │   ├── springTrack.png
│   │   ├── trampolin.png
│   │   ├── xpe.png
│   │   └── xpepanel.png
│   ├── favicon.svg
│   ├── heroBackground/
│   │   ├── comunidad.jpg
│   │   └── primerosPasos.webp
│   ├── icons/
│   │   └── sprite.svg
│   └── noise2.jpg
├── src/                      # Código fuente
│   ├── assets/              # Recursos del proyecto
│   ├── components/          # Componentes reutilizables
│   │   ├── aside/
│   │   ├── clientes-testimonios/
│   │   ├── components-UI/
│   │   ├── comunidad/
│   │   ├── index/
│   │   ├── theme/
│   │   ├── tienda/
│   │   ├── ui/
│   │   └── variantesAcrobaticas/
│   ├── data/               # Datos del proyecto
│   │   ├── baseProduct.ts
│   │   ├── productUtils.ts
│   │   ├── productos.ts
│   │   ├── productosImgRutas.ts
│   │   ├── products.ts
│   │   └── variantesAcrobaticas.ts
│   ├── layouts/            # Layouts de páginas
│   │   └── Layout.astro
│   ├── miApp.md           # Documentación del proyecto
│   ├── pages/             # Páginas de la aplicación
│   │   ├── catalogo.astro
│   │   ├── comunidad.astro
│   │   ├── constructor.astro
│   │   ├── entrenamiento.astro
│   │   ├── favoritos.astro
│   │   ├── feedback.astro
│   │   ├── index.astro
│   │   ├── nutricion.astro
│   │   ├── primeros-pasos.astro
│   │   ├── producto/
│   │   ├── tienda.astro
│   │   ├── user.astro
│   │   └── variantes-acrobaticas.astro
│   ├── styles/            # Estilos globales
│   │   └── global.css
│   └── utils/             # Utilidades
│       └── telegram.js
├── tailwind.config.js        # Configuración de Tailwind
└── tsconfig.json            # Configuración de TypeScript
```

---

## 🎯 Funcionalidades Principales

### 1. **Página Principal (index.astro)**
- Landing page del sitio
- Componente principal: `IndexFather`
- Título: "Acrobata Demente"

### 2. **Tienda (tienda.astro)**
- Catálogo de productos acrobáticos
- Hero section con gradiente colorido
- Componente principal: `ProductsFather`
- Título: "Tienda - Acrobata de Mente"

### 3. **Catálogo (catalogo.astro)**
- Catálogo 2025
- Componente principal: `CatalogoFather`

### 4. **Otras Páginas**
- **Comunidad:** Sección de comunidad
- **Constructor:** Herramienta de construcción
- **Entrenamiento:** Recursos de entrenamiento
- **Favoritos:** Lista de productos favoritos
- **Feedback:** Sistema de retroalimentación
- **Nutrición:** Información nutricional
- **Primeros Pasos:** Guía para principiantes
- **Usuario:** Perfil de usuario
- **Variantes Acrobáticas:** Diferentes tipos de acrobacias

---

## 🛍️ Sistema de Productos

### Estructura de Producto
```typescript
interface Product {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  category: string;
  subcategory: string;
  status: "stock" | "importado" | "digital";
  condition: "nuevo" | "usado";
  calidad: "premium" | "alta" | "media" | "baja" | "estandar" | "promedio";
  tags: string[];
  images: (ImageMetadata | string)[];
  relatedProducts: string[];
  specifications?: Record<string, string>;
  features?: string[];
  slug: string;
  variant: string[];
}
```

### Categorías de Productos

#### Categorías Principales
- **Equipamiento Acrobático**
- **Equipamiento Deportivo** 
- **Equipamiento de Danza**
- **Equipamiento de Artes Marciales**
- **Equipamiento de Gimnasia**

#### Subcategorías Específicas
- **XPE:** Espuma de polietileno (rollos, paneles)
- **Spring Floor:** Pisos con resortes
- **Trampolines:** Equipos de salto
- **Arneses:** Equipos de seguridad
- **Franjas:** Elementos de entrenamiento

#### Variantes Acrobáticas (388 líneas de datos)
- **10 Categorías principales:** Acuática, Circense, Fitness, Extrema, Recreativa, Espectáculo, Artes Marciales, Cultural, Urbana, Olímpica
- **Subcategorías detalladas por categoría**
- **Variantes específicas:** gimnasiaartistica, cheerleading, acrobacia, capoeira, parkour, breakdance, judo, karate, taekwondo, danza

### Ejemplo de Producto
**XPE Roll (con cortes)**
- **ID:** `xpe-roll-con-cortes`
- **Categoría:** Acrobático > XPE
- **Estado:** Stock
- **Condición:** Nuevo
- **Calidad:** Promedio
- **Descripción:** Rollos de Espuma XPE con Alfombra de 1,5mm
- **Características:**
  - Amortiguación superior
  - Sistema de enrollado flexible
  - Base de espuma de polietileno ligera
  - Ideal para entrenamiento en casa o gimnasios
- **Tags:** Piso de gimnasia, XPE, Alfombra, Amortiguación

---

## 🎨 Diseño y UI

### Layout Principal
- **Archivo:** `src/layouts/Layout.astro`
- **Idioma:** Español (lang="es")
- **Características:**
  - Meta tags responsivos
  - Favicon SVG
  - View Transitions de Astro
  - Integración con Swiper.js
  - Componente Aside global
  - Estilos globales de Tailwind

### Componentes UI

#### Navegación y Layout
- **Aside:** Navegación lateral responsive con iconos y labels
  - **IconLabel:** Componente de navegación con estados activos
  - **ThemeToogle:** Alternador de tema (componente incluido)
  - **Gradientes activos:** Sky-blue para inicio, Rose-fuchsia-indigo para catálogo

#### Secciones Hero
- **HeroSection:** Secciones hero con gradientes personalizables
  - Gradientes configurables por props
  - Imágenes de fondo dinámicas
  - Títulos y párrafos personalizables

#### Componentes de Productos
- **ProductsFather:** Contenedor principal de productos
  - **Filter:** Sistema de filtros avanzado
    - Filtros por categoría, subcategoría y variantes
    - Búsqueda en tiempo real
    - Botón de limpiar filtros con iconografía
    - Mapeo de nombres legibles para variantes
  - **Grid:** Grilla responsive de productos
    - Layout adaptativo: 1-5 columnas según viewport
    - Contador integrado de productos mostrados
    - Estado de "sin productos" con iconografía
    - Renderizado dinámico con JavaScript
  - **Pagination:** Sistema de paginación inteligente
    - Navegación por páginas con elipsis
    - Información de productos por página
    - Botones de navegación con estados disabled
    - Generación dinámica de números de página

#### Componentes de Catálogo
- **CatalogoFather:** Contenedor principal del catálogo
  - **ProductosDestacados:** Productos destacados con enlaces
  - **ResumenProductos:** Dashboard estadístico
    - Contador de productos totales (enlace a tienda)
    - Contador de categorías disponibles
    - Contador de subcategorías únicas
    - Cards con hover effects y colores sky-600
  - **Slider:** Carrusel de clientes
    - 11+ clientes destacados con logos
    - Imágenes optimizadas desde /assets/clientes/
    - Nombres: Gimloa, Fuentes Gasca, Gimnasia Libre, etc.
  - **Testimonios (Carousel):** Sistema de testimonios avanzado
    - Altura adaptativa: 280px-380px según viewport
    - Navegación con flechas y controles de accesibilidad
    - Fotos circulares con gradientes decorativos
    - Transiciones suaves con opacity y scale
    - Estados ARIA para screen readers
  - **Layout responsive:** Dos columnas en desktop, stack en móvil

#### Componentes de Índice
- **IndexFather:** Componente principal de la página de inicio
  - **IndexHero:** Hero principal
  - **IndexBackground:** Fondo con efectos
  - **Layout absoluto:** Hero centrado sobre fondo

#### Componentes de Variantes (Refactorizado - Enero 2025)
- **Variantes.astro:** Componente principal completamente refactorizado
  - **Diseño moderno:** Layout responsive con grid adaptativo
  - **Búsqueda inteligente:** Filtrado en tiempo real por nombre y categoría
  - **Filtros avanzados:** Por categoría con contadores dinámicos
  - **Animaciones fluidas:** Transiciones CSS y efectos hover
  - **Performance optimizada:** Lazy loading y renderizado eficiente
  - **Accesibilidad:** ARIA labels y navegación por teclado
- **VariantesInteractive.js:** Lógica JavaScript avanzada
  - **Estado centralizado:** Gestión de filtros y búsqueda
  - **Debounce:** Optimización de búsqueda en tiempo real
  - **Animaciones:** Control de entrada y salida de elementos
  - **Responsive:** Adaptación automática a diferentes viewports
- **VariantesStyles.css:** Estilos CSS modernos
  - **Variables CSS:** Sistema de colores consistente
  - **Animaciones:** Keyframes personalizados
  - **Grid responsive:** Layout adaptativo 1-4 columnas
  - **Efectos visuales:** Gradientes, sombras y transiciones
- **AsideVariantes:** Navegación lateral específica para variantes

---

## ⚙️ Scripts Disponibles

### Desarrollo
- `npm run dev` - Servidor de desarrollo
- `npm run preview` - Vista previa de la build

### Build
- `npm run build` - Build de producción
- `npm run build:static` - Build estático
- `npm run build:css` - Build de CSS con Tailwind
- `npm run build:full` - Build completo (build + CSS)
- `npm run build:github` - Build para GitHub Pages
- `npm run build:styles` - Build de estilos con watch

### Utilidades
- `npm run generate-products` - Generar productos
- `npm run convert-json` - Convertir JSON a TypeScript
- `npm run validate-products` - Validar productos
- `npm run sync-products` - Sincronizar productos del dashboard
- `npm run update-products` - Actualizar productos (generate + convert)

---

## 🔧 Configuración

### Astro Config (`astro.config.mjs`)
- **Output:** Static (configurado para GitHub Pages)
- **Adaptador:** Node.js (comentado para build estático)
- **Integración:** Tailwind CSS vía Vite plugin
- **Alias configurados:**
  - `@images`: `./src/assets/images`
  - `@icons`: `./src/assets/icons`
  - `@testimonios`: `../public/assets/images/testimonios`
  - `@public`: `../public`
  - `@pages`: `./src/pages`
- **Build optimizations:**
  - CSS code splitting habilitado
  - CSS extraction independiente
  - Asset file naming personalizado

### Tailwind Config (`tailwind.config.js`)
- **Content:** Archivos Astro, HTML, JS, JSX, MD, MDX, TS, TSX
- **Dark Mode:** Deshabilitado (tema oscuro por CSS variables)
- **Screens:** Breakpoints estándar (sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px)
- **Plugins:** tailwindcss-animated

### TypeScript Config
- **Archivo:** `tsconfig.json`
- **Configuración:** Estándar de Astro

---

## 📱 Características Técnicas

### Optimización de Imágenes
- Importación directa desde assets
- Optimización automática de Astro
- Formatos: WebP, AVIF
- Lazy loading por defecto
- Alias configurados para rutas de imágenes

### Transiciones
- View Transitions de Astro habilitadas
- Fallback configurado como "none"

### Librerías Externas
- **Swiper.js:** Para carruseles y sliders (CDN desde jsdelivr)
- **SVG Sprite:** Carga dinámica desde `/icons/sprite.svg`

### Sistema de Iconos
- SVG Sprite system con carga asíncrona
- Iconos organizados en `/public/icons/sprite.svg`
- Script inline para cargar sprite al inicio

### Layout y Navegación
- **Sidebar responsive:** 16px en móvil, 48px (12rem) en desktop
- **Scrollbar personalizado:** Custom scrollbar en main content
- **Flexbox layout:** Sidebar fijo + main content flexible
- **Tracking tight:** Espaciado de letras optimizado

---

## 🚀---

## 🔄 Cambios Recientes (Enero 2025)

### Mejoras de Open Graph y Redes Sociales (Enero 2025)

#### Implementación de Metaetiquetas Dinámicas
- ✅ **Open Graph optimizado:** Metaetiquetas dinámicas en páginas de productos
- ✅ **Twitter Cards:** Configuración de summary_large_image para mejor presentación
- ✅ **Datos estructurados:** Schema.org implementado para productos
- ✅ **SEO mejorado:** Títulos y descripciones específicos por producto
- ✅ **Imágenes dinámicas:** Primera imagen del producto como imagen principal

#### Funcionalidades de Redes Sociales
- 🎯 **Cards atractivas:** Enlaces de productos muestran imagen, título y descripción
- 📱 **Compatibilidad universal:** Facebook, Twitter, LinkedIn, WhatsApp
- 🏷️ **Branding consistente:** "Acrobata de Mente" en todas las cards
- ✨ **URL canónicas:** Enlaces optimizados para compartir
- 🚀 **Datos estructurados:** Información de producto, marca y disponibilidad

#### Archivos Modificados
- **`src/pages/producto/[slug].astro`:** Implementación completa de Open Graph
- **Layout.astro:** Ya tenía soporte completo para metaetiquetas
- **Despliegue:** Actualizado en Vercel con todas las mejoras

### Refactorización Completa del Componente Variantes Acrobáticas

#### Problemas Resueltos
- ✅ **Error Tailwind CSS:** Corregido `@reference "tailwindcss";` a `@import "tailwindcss";`
- ✅ **Errores JavaScript:** Solucionados `TypeError: Cannot read properties of undefined`
- ✅ **Referencias incorrectas:** Corregido `this.visibleCategories` a `this.state.visibleCategories`
- ✅ **Compatibilidad Tailwind 4.x:** Actualizada sintaxis de importación

#### Nuevas Funcionalidades Implementadas
- 🎯 **Búsqueda inteligente:** Filtrado instantáneo por nombre y categoría
- 🏷️ **Filtros por categoría:** 10 categorías con contadores dinámicos
- 📱 **Diseño responsive:** Grid adaptativo de 1-4 columnas
- ✨ **Animaciones fluidas:** Transiciones CSS y efectos hover
- 🚀 **Performance optimizada:** Debounce y lazy loading
- ♿ **Accesibilidad mejorada:** ARIA labels y navegación por teclado
- 🎨 **UI moderna:** Gradientes, sombras y efectos visuales

#### Arquitectura Técnica
- **Componente principal:** `Variantes.astro` (refactorizado completamente)
- **Lógica JavaScript:** `VariantesInteractive.js` (nueva implementación)
- **Estilos CSS:** `VariantesStyles.css` (diseño moderno)
- **Datos:** `variantesAcrobaticas.ts` (388 variantes organizadas)
- **Página:** `variantes-acrobaticas.astro` (integración completa)

#### Despliegue en Vercel
- ✅ **Configuración Vercel:** Archivo `vercel.json` creado
- ✅ **Build exitoso:** 74 páginas generadas en 13.67 segundos
- ✅ **Despliegue completado:** Aplicación disponible en producción
- ✅ **URL de producción:** Disponible públicamente en Vercel
- ✅ **Optimizaciones:** Build estático optimizado para performance

### Próximas Mejoras

### Funcionalidades Pendientes
- [ ] **Sistema de carrito de compras** - Integración con localStorage
- [ ] **Autenticación de usuarios** - Login/registro
- [ ] **Sistema de pagos** - Integración con pasarelas
- [ ] **Panel de administración** - CRUD de productos
- [ ] **Sistema de reviews** - Calificaciones y comentarios
- [ ] **Búsqueda avanzada** - Filtros múltiples
- [ ] **Filtros de productos** - Por precio, calidad, disponibilidad
- [ ] **Wishlist/Favoritos** - Completar integración con Telegram
- [ ] **Sistema de notificaciones** - Push notifications
- [ ] **Comparador de productos** - Tabla comparativa
- [ ] **Calculadora de envíos** - Costos por región
- [ ] **Sistema de cupones** - Descuentos y promociones

### Optimizaciones Técnicas
- [ ] **PWA (Progressive Web App)** - Service workers y manifest
- [ ] **SEO mejorado** - Meta tags dinámicos, sitemap
- [ ] **Análisis de rendimiento** - Core Web Vitals
- [ ] **Tests automatizados** - Unit tests con Vitest
- [ ] **CI/CD pipeline** - GitHub Actions
- [ ] **Monitoreo de errores** - Sentry integration
- [ ] **CDN para imágenes** - Cloudinary o similar
- [ ] **Lazy loading avanzado** - Intersection Observer
- [ ] **Preload crítico** - Recursos prioritarios

### Mejoras de UX/UI
- [ ] **Modo claro** - Implementar theme switcher
- [ ] **Animaciones** - Micro-interacciones con Tailwind Animated
- [ ] **Skeleton loading** - Estados de carga
- [ ] **Infinite scroll** - Paginación automática
- [ ] **Zoom de imágenes** - Lightbox para productos
- [ ] **Breadcrumbs** - Navegación contextual
- [ ] **Tooltips** - Información adicional
- [ ] **Accesibilidad** - ARIA labels, keyboard navigation

---

## 📞 Contacto y Soporte

### Integración con Telegram
- **Archivo:** `src/utils/telegram.js`
- **Bot Token:** Configurado via environment variables
- **Chat ID:** Sistema de notificaciones personalizado
- **Funcionalidades:**
  - Notificaciones de productos añadidos/removidos de favoritos
  - Templates de mensajes con emojis
  - Manejo de errores robusto
  - API calls con validación de respuesta
  - **Componentes UI:** `TelegramTest.astro` para pruebas
  - **Botón de favoritos:** `FavoriteButton.astro` integrado
  - **Contador:** `FavoriteCounter.astro` para mostrar total
- **Mensajes soportados:**
  - 🛍️ Producto añadido a favoritos
  - ❌ Producto removido de favoritos
  - ℹ️ Acciones generales en favoritos
- **Componentes de Favoritos:**
  - **FavoritosComponent:** Lógica principal de favoritos
  - **FavoritosFather:** Contenedor de la página de favoritos
  - **Integración:** LocalStorage + notificaciones Telegram

---

## 📝 Notas de Desarrollo

### Convenciones de Código
- **Prettier:** Formateador configurado con plugin de Tailwind
- **Tailwind:** Plugin de Prettier para ordenar clases automáticamente
- **TypeScript:** Tipado estricto habilitado
- **Naming:** Kebab-case para IDs, PascalCase para componentes
- **CSS Variables:** Sistema de colores con variables CSS personalizadas

### Estructura de Archivos
- **Componentes:** Organizados por funcionalidad en subcarpetas
- **Datos:** Separados en archivos TypeScript con interfaces tipadas
- **Utilidades:** Centralizadas en `/utils`
- **Assets:** Organizados por tipo (images, icons)
- **Alias:** Configurados para imports más limpios

### Sistema de Colores (CSS Variables)
```css
:root {
  /* Colores base */
  --bg-color: var(--zinc-950);        /* Fondo principal */
  --card: var(--zinc-900);            /* Tarjetas */
  --accent-color: var(--sky-500);     /* Acentos */
  --text-color: var(--zinc-50);       /* Texto principal */
  --text-color-soft: var(--zinc-400); /* Texto secundario */
  
  /* Navegación */
  --bg-grid: var(--zinc-900);
  --nav-box: var(--zinc-900);
  --bg-button-nav: var(--accent-color);
  
  /* Estados */
  --favorite-color: var(--red-500);
}
```

### Performance
- **Imágenes:** Optimizadas automáticamente por Astro
- **CSS:** Minificado en producción con code splitting
- **JavaScript:** Tree-shaking habilitado
- **View Transitions:** Navegación fluida entre páginas
- **SVG Sprites:** Carga asíncrona de iconos
- **Build estático:** Optimizado para GitHub Pages

---

---

## 📊 Estadísticas del Proyecto (Actualizado Enero 2025)

### Métricas de Desarrollo
- **Páginas totales:** 74 páginas generadas
- **Tiempo de build:** 13.67 segundos
- **Variantes acrobáticas:** 388 variantes en 10 categorías
- **Componentes refactorizados:** Variantes (completo)
- **Errores resueltos:** Tailwind CSS + JavaScript
- **Despliegue:** Vercel (producción)

### Estado del Proyecto
- ✅ **Desarrollo local:** Servidor funcionando en puerto 4323
- ✅ **Build de producción:** Exitoso sin errores
- ✅ **Despliegue:** Completado en Vercel
- ✅ **Funcionalidades:** Todas las características implementadas
- ✅ **Performance:** Optimizada para producción
- ✅ **Accesibilidad:** Estándares implementados

### Tecnologías Actualizadas
- **Tailwind CSS:** 4.1.11 (sintaxis actualizada)
- **Astro:** 5.9.2 (build estático optimizado)
- **Vercel CLI:** 46.0.2 (despliegue automatizado)
- **JavaScript ES6+:** Módulos y clases modernas
- **CSS3:** Variables, Grid, Flexbox, Animaciones

**Última actualización:** Enero 2025  
**Refactorización completa:** Componente Variantes Acrobáticas  
**Despliegue:** Vercel (Producción)  
**Mantenido por:** Equipo Acrobata Demente