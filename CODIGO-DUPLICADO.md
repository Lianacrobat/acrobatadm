# 📋 LISTA DE CÓDIGO DUPLICADO

## 🔴 DUPLICACIONES CRÍTICAS

### 1. **Archivos de Datos Duplicados**
- **`src/data/productos.ts`** → Solo re-exporta `products.ts`
- **`src/data/products.ts`** → Contiene toda la lógica real
- **Impacto:** Confusión en imports, mantenimiento doble
- **Solución:** Eliminar `productos.ts` y actualizar imports

### 2. **Funciones de Filtrado Duplicadas**

#### A. Filtrado de Productos
- **Archivo 1:** `src/data/productUtils.ts` - función `filterProducts()`
- **Archivo 2:** `src/components/tienda/productos/Filter.astro` - función `applyFilters()`
- **Duplicación:** Lógica idéntica para filtrar por:
  - Categoría
  - Subcategoría
  - Estado
  - Condición
  - Calidad
  - Variante
  - Búsqueda de texto

#### B. Búsqueda de Productos
- **Archivo 1:** `src/data/productUtils.ts` - función `searchProducts()`
- **Archivo 2:** `src/components/tienda/productos/Filter.astro` - lógica inline en `applyFilters()`
- **Duplicación:** Búsqueda por nombre, descripción, tags, categoría

### 3. **Componentes Father Redundantes**

#### Estructura Similar:
- **`IndexFather.astro`** → Wrapper simple con layout
- **`ComunidadFather.astro`** → Wrapper simple con layout
- **`ProductsFather.astro`** → Wrapper simple con layout
- **`CatalogoFather.astro`** → Wrapper simple con layout
- **`FavoritosFather.astro`** → Wrapper simple con layout
- **`DetallesFather.astro`** → Wrapper simple con layout

**Patrón Duplicado:**
```astro
---
import Component from "./Component.astro";
---
<section class="...">
  <Component />
</section>
```

## 🟡 DUPLICACIONES MODERADAS

### 4. **Sistemas de Filtrado Paralelos**

#### A. Para Deportes (Blog)
- **Archivo:** `src/utils/deporteFilter.js`
- **Componentes:** `SearchBox.astro`, `GridPost.astro`, `BotonCategoria.astro`
- **Store:** `src/utils/filterStore.js`

#### B. Para Productos (Tienda)
- **Archivo:** `src/data/productUtils.ts`
- **Componentes:** `Filter.astro`, `Grid.astro`
- **Lógica:** Inline en componentes

**Duplicación:** Ambos sistemas implementan:
- Filtrado por categorías
- Búsqueda de texto
- Ordenamiento
- Cache/memoización
- Eventos personalizados

### 5. **Funciones de Obtención de Productos Específicas**

En `src/data/productUtils.ts`:
```typescript
// Funciones muy específicas que podrían generalizarse
getNewPremiumProducts()
getUsedPremiumProducts()
getNewAltaCalidadProducts()
getUsedAltaCalidadProducts()
getNewMediaCalidadProducts()
getUsedMediaCalidadProducts()
getNewBajaCalidadProducts()
getUsedBajaCalidadProducts()
```

**Patrón Duplicado:**
```typescript
return products.filter(product => 
  product.condition === "condición" && 
  product.calidad === "calidad"
);
```

### 6. **Estilos CSS Repetitivos**

#### Variables CSS Duplicadas:
- Múltiples definiciones de colores similares
- Patrones de `var(--variable)` repetidos
- Estilos de botones y formularios similares en diferentes componentes

#### Clases Tailwind Repetidas:
- Patrones de layout repetidos
- Estilos de cards similares
- Responsive breakpoints idénticos

## 🟢 DUPLICACIONES MENORES

### 7. **Funciones de Utilidad Menores**

#### A. Funciones de Sanitización
- **Archivo 1:** `Filter.astro` - función `sanitizeInput()`
- **Archivo 2:** Lógica similar en otros componentes

#### B. Funciones de Slug
- **Archivo 1:** `products.ts` - función `createSlug()`
- **Posible duplicación:** Lógica similar en otros archivos

### 8. **Event Listeners Similares**

#### Patrón Repetido:
```javascript
// En múltiples componentes
document.addEventListener('DOMContentLoaded', () => {
  // Inicialización similar
});

window.addEventListener('customEvent', (e) => {
  // Manejo similar de eventos
});
```

### 9. **Imports Redundantes**

#### Imports de Utilidades:
```javascript
// Repetido en múltiples archivos
import filterStore from '../../../utils/filterStore.js';
import deporteFilter from '../../../utils/deporteFilter.js';
```

## 📊 RESUMEN DE IMPACTO

### **Archivos Afectados:** 15+
### **Líneas de Código Duplicadas:** ~500+
### **Funciones Duplicadas:** 12+
### **Componentes Redundantes:** 6

## 🎯 PRIORIDADES DE REFACTORIZACIÓN

### **🔴 Urgente:**
1. Eliminar `productos.ts` y consolidar en `products.ts`
2. Crear sistema unificado de filtrado
3. Refactorizar componentes Father en un componente base

### **🟡 Alta:**
1. Consolidar funciones de productUtils
2. Unificar sistemas de filtrado (deportes/productos)
3. Crear utilidades compartidas

### **🟢 Media:**
1. Optimizar estilos CSS duplicados
2. Consolidar event listeners
3. Limpiar imports redundantes

---

**Fecha de análisis:** $(date)
**Archivos analizados:** Toda la aplicación
**Herramientas:** Análisis manual + búsqueda semántica