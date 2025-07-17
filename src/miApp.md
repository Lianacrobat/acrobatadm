# 🎪 Acrobata Demente - Contexto del Proyecto

## 🛠️ Stack Tecnológico

**Trabajaremos únicamente con:**
- **Astro** (Framework de JavaScript)
- **Tailwind CSS** (Framework de CSS)
- **JavaScript/TypeScript** (Lenguaje de programación)

---

## 📚 Documentación de Astro

### 🚀 Conceptos Básicos

#### **Páginas (.astro)**
- Archivos en `src/pages/` se convierten automáticamente en rutas
- Sintaxis: `<script>`, `<style>`, y HTML en el mismo archivo
- Props se pasan como `Astro.props`

#### **Componentes (.astro)**
- Reutilizables en `src/components/`
- Props: `interface Props [object Object] prop: string }`
- Importación: `import Component from ./Component.astro`
#### **Layouts**
- Estructura base para páginas
- `<slot />` para contenido dinámico
- Metadatos y estilos globales

### 🖼️ Imágenes en Astro

#### **Importación Directa**
```astro
---
import miImagen from../assets/imagen.jpg';
---
<img src={miImagen} alt="Descripción" />
```

#### **Optimización Automática**
- Astro optimiza automáticamente las imágenes
- Formatos: WebP, AVIF
- Lazy loading por defecto

#### **Imágenes Remotas**
```astro
<img src="https://ejemplo.com/imagen.jpg alt="Descripción" />
```

### ⚡ Transiciones (View Transitions)

#### **Configuración**
```astro
---
import[object Object] ViewTransitions } from astro:transitions';
---
<ViewTransitions fallback="none" />
```

#### **Transiciones Personalizadas**
```astro
<a href="/pagina" transition:name=titulo">Título</a>
<h1 transition:name="titulo>Nuevo Título</h1>
```

#### **Animaciones CSS**
```css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 00.5
```

### 🔧 Integraciones

#### **Tailwind CSS**
```bash
npm install @tailwindcss/vite
```

#### **Node Adapter (SSR)**
```bash
npm install @astrojs/node
```

### 📁 Estructura de Archivos
```
src/
├── pages/          # Rutas automáticas
├── components/     # Componentes reutilizables
├── layouts/        # Layouts base
├── assets/         # Imágenes y recursos
├── data/           # Datos y utilidades
└── styles/         # Estilos globales
```

---

## 🎨 Tailwind CSS

### 🎯 Filosofía
- **Utility-first**: Clases pequeñas y específicas
- **Responsive**: Prefijos `sm:`, `md:`, `lg:`, `xl:`
- **Dark mode**: `dark:` para tema oscuro

### 🎨 Clases Principales

#### **Layout**
- `flex`, `grid`, `block`, `inline`
- `w-full`, `h-screen`, `max-w-7l`
- `p-4, `m-2, `gap-4
#### **Colores**
- `bg-sky-500, `text-zinc-90
- `border-red-50ow-lg`
- Variables CSS: `bg-[var(--accent-color)]`

#### **Tipografía**
- `text-2l`, `font-bold`, `tracking-tight`
- `text-center`, `leading-relaxed`

#### **Efectos**
- `hover:scale-105`, `transition-all`
- `opacity-50 `blur-sm`

### 🌙 Tema Oscuro/Claro
```css
:root {
  --bg-color: var(--zinc-950);
  --text-color: var(--zinc-50);
}

[data-theme="light] {
  --bg-color: var(--zinc-100);
  --text-color: var(--zinc-900)
}
```

---

## 🎪 Descripción del Proyecto

### 🎯 Objetivo Principal
**Acrobata Demente** es el primer sitio web en español dedicado a proporcionar recursos integrales para artistas, atletas y acróbatas. El proyecto busca crear una plataforma completa que conecte a la comunidad acrobática con productos, servicios, herramientas y conocimiento especializado.

### 🎪 Páginas y Componentes

#### **🏠 Página Principal (`index.astro`)**
- **Componentes**: `IndexFather`, `IndexHero`, `IndexBackground`
- **Funcionalidad**: Landing page con animaciones de productos flotantes
- **Características**: Hero section con botones de navegación, fondo animado

#### **📚 Primeros Pasos (`primeros-pasos.astro`)**
- **Componentes**: `HeroSection`
- **Funcionalidad**: Guía de navegación para nuevos usuarios
- **Características**: Grid de recursos, explicación de secciones

#### **🛍️ Catálogo (`catalogo.astro`)**
- **Componentes**: `CatalogoFather`, `ProductosDestacados`, `ResumenProductos`, `Slider`, `Carousel`
- **Funcionalidad**: Muestra productos destacados y testimonios
- **Características**: Layout de dos columnas, carrusel de clientes

#### **🏪 Tienda (`tienda.astro`)**
- **Componentes**: `ProductsFather`, `Grid`, `Filter`, `Pagination`
- **Funcionalidad**: Catálogo completo con filtros y paginación
- **Características**: Filtros por categoría, búsqueda, paginación

#### **📦 Detalles de Producto (`producto/[slug].astro`)**
- **Componentes**: `DetallesFather`, `Imagenes`, `InformacionProducto`, `Especificaciones`, `Caracteristicas`, `ProductosRelacionados`
- **Funcionalidad**: Vista detallada de productos individuales
- **Características**: Galería de imágenes, especificaciones, productos relacionados

#### **❤️ Favoritos (`favoritos.astro`)**
- **Componentes**: `FavoritosFather`, `FavoritosComponent`, `FavoriteCounter`
- **Funcionalidad**: Lista de productos favoritos del usuario
- **Características**: Contador, gestión de favoritos

#### **👥 Comunidad (`comunidad.astro`)**
- **Componentes**: `ComunidadFather`, `ComunidadGrid`
- **Funcionalidad**: Espacio para conectar con otros artistas
- **Características**: Grid de miembros, perfiles

#### **🎭 Variantes Acrobáticas (`variantes-acrobaticas.astro`)**
- **Componentes**: `Variantes`
- **Funcionalidad**: Catálogo de disciplinas acrobáticas
- **Características**: Categorías y subcategorías de acrobacia

#### **🏋️ Entrenamiento (`entrenamiento.astro`)**
- **Funcionalidad**: Recursos de entrenamiento
- **Características**: Programas, técnicas, consejos

#### **🥗 Nutrición (`nutricion.astro`)**
- **Funcionalidad**: Guías nutricionales para acróbatas
- **Características**: Dietas, suplementos, consejos

#### **🔧 Constructor (`constructor.astro`)**
- **Funcionalidad**: Herramientas de construcción de equipos
- **Características**: Planos, instrucciones, materiales

#### **👤 Usuario (`user.astro`)**
- **Funcionalidad**: Perfil de usuario
- **Características**: Configuración, historial, preferencias

#### **💬 Feedback (`feedback.astro`)**
- **Funcionalidad**: Sistema de comentarios y sugerencias
- **Características**: Formularios, valoraciones

---

## 🎯 Objetivos Específicos

### 🎪 Para la Comunidad Acrobática
1. **Centralizar recursos**: Un solo lugar para encontrar todo lo necesario
2. **Conectar artistas**: Crear una red de profesionales y aficionados
3**Educar**: Proporcionar conocimiento y guías especializadas
4. **Facilitar compras**: Catálogo organizado de productos especializados

### 🛍️ Para el Comercio
1. **Catálogo digital**: Productos organizados por categorías
2. **Sistema de favoritos**: Gestión personalizada de productos
3. **Información detallada**: Especificaciones completas de productos
4. **Productos relacionados**: Recomendaciones inteligentes

### 🎨 Para el Desarrollo
1. **Simplicidad**:The simpler, the better" - código limpio y mantenible
2. **Performance**: Carga rápida y optimización
3Responsive**: Funcional en todos los dispositivos
4**Accesibilidad**: Inclusivo para todos los usuarios

---

## 🚀 Comandos de Desarrollo

```bash
# Desarrollo local
npm run dev

# Construcción para producción
npm run build

# Vista previa de producción
npm run preview

# Generar productos
npm run generate-products

# Validar productos
npm run validate-products
```

---

## 📁 Estructura de Datos

### 🏷️ Productos
```typescript
interface Product[object Object]id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  category: string;
  subcategory: string;
  status: stock" | "import" | "digital;
  condition: "nuevo" | usado; calidad: premium" | alta" | media | "baja";
  tags: string[];
  images: (ImageMetadata | string)[];
  relatedProducts: string[];
  specifications?: Record<string, string>;
  features?: string;
  slug: string;
  variant: string[];
}
```

### 🎭 Variantes Acrobáticas
- **Categorías principales**: Acuática, Circense, Fitness, Extrema, Recreativa, Espectáculo, Artes Marciales, Cultural, Urbana
- **Subcategorías**: Específicas para cada categoría principal

---

## 🎨 Sistema de Diseño

### 🎨 Paleta de Colores
- **Primario**: Sky-500(azul acrobático)
- **Secundario**: Zinc-500 (grises neutros)
- **Acento**: Red-500 (favoritos)
- **Tema**: Oscuro por defecto, claro opcional

### 📱 Responsive Design
- **Mobile-first**: Diseño optimizado para móviles
- **Breakpoints**: sm (640x), md (768x), lg (124px), xl (1280)
- **Grid**: Flexbox y CSS Grid para layouts complejos

### 🎭 Tipografía
- **Sistema**: System UI fonts
- **Jerarquía**: Títulos grandes, texto legible
- **Tracking**: Tight para títulos, normal para texto

---

## 🔧 Configuración Técnica

### ⚙️ Astro Config
- **Output**: Server (SSR)
- **Adapter**: Node.js standalone
- **Integrations**: Tailwind CSS
- **Aliases**: Configurados para rutas cortas

### 🎨 Tailwind Config
- **Content**: Archivos Astro, HTML, JS, TS
- **Dark mode**: Deshabilitado (usamos CSS variables)
- **Plugins**: tailwindcss-animated

### 📦 Dependencias Principales
- **Astro**: 5.92 **Tailwind CSS**: 4.11 **Node Adapter**: 90.3- **Swiper**: Para carruseles

---

## 🎯 Filosofía de Desarrollo

### 🎪The Simpler, the Better"
- **Código limpio**: Fácil de leer y mantener
- **Componentes pequeños**: Responsabilidades únicas
- **Reutilización**: Evitar duplicación de código
- **Performance**: Optimización automática de Astro

### 🎨 UX/UI
- **Intuitivo**: Navegación clara y lógica
- **Rápido**: Carga optimizada
- **Accesible**: Para todos los usuarios
- **Responsive**: Funciona en cualquier dispositivo

---

## 🚀 Próximos Pasos
1 **Optimización**: Mejorar performance y SEO
2. **Funcionalidades**: Sistema de usuarios, carrito de compras3**Contenido**: Más productos y recursos4**Comunidad**: Foros, eventos, networking
5ternacionalización**: Soporte multiidioma

---

*Este documento se actualiza constantemente según el desarrollo del proyecto.*
