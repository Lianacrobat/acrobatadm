/**
 * Sistema de filtrado y búsqueda optimizado para deportes
 * Incluye memoización, índices de búsqueda y algoritmos eficientes
 */

import { deportes } from '../data/deportes.js';

class DeporteFilter {
  constructor() {
    this.cache = new Map();
    this.searchIndex = this.buildSearchIndex();
    this.categoryIndex = this.buildCategoryIndex();
  }

  /**
   * Construir índice de búsqueda para optimizar consultas
   */
  buildSearchIndex() {
    const index = new Map();
    
    deportes.forEach((deporte, idx) => {
      // Crear tokens de búsqueda
      const tokens = [
        ...deporte.nombre.toLowerCase().split(' '),
        ...deporte.descripcion.toLowerCase().split(' '),
        ...deporte.categorias.map(cat => cat.toLowerCase()),
        deporte.dificultad.toLowerCase()
      ].filter(token => token.length > 2); // Filtrar tokens muy cortos
      
      tokens.forEach(token => {
        if (!index.has(token)) {
          index.set(token, new Set());
        }
        index.get(token).add(idx);
      });
    });
    
    return index;
  }

  /**
   * Construir índice por categorías
   */
  buildCategoryIndex() {
    const index = new Map();
    
    deportes.forEach((deporte, idx) => {
      deporte.categorias.forEach(categoria => {
        if (!index.has(categoria)) {
          index.set(categoria, new Set());
        }
        index.get(categoria).add(idx);
      });
    });
    
    return index;
  }

  /**
   * Inicializar el filtro (para compatibilidad)
   */
  initialize() {
    // Reconstruir índices si es necesario
    this.searchIndex = this.buildSearchIndex();
    this.categoryIndex = this.buildCategoryIndex();
    this.clearCache();
  }

  /**
   * Filtrar deportes por categorías y búsqueda (alias para filter)
   */
  filterDeportes({ activeCategories = [], searchQuery = '', sortBy = 'nombre', sortOrder = 'asc' }) {
    return this.filter({ activeCategories, searchQuery, sortBy, sortOrder });
  }

  /**
   * Filtrar deportes por múltiples criterios con memoización
   */
  filter({ activeCategories = [], searchQuery = '', sortBy = 'nombre', sortOrder = 'asc' }) {
    // Crear clave de cache
    const cacheKey = JSON.stringify({ activeCategories, searchQuery, sortBy, sortOrder });
    
    // Verificar cache
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }
    
    let filteredIndices = new Set(deportes.map((_, idx) => idx));
    
    // Filtrar por categorías (filtro AND - debe tener TODAS las categorías seleccionadas)
    if (activeCategories.length > 0) {
      filteredIndices = new Set([...filteredIndices].filter(idx => {
        const deporte = deportes[idx];
        // Verificar que el deporte tenga TODAS las categorías seleccionadas
        return activeCategories.every(categoria => deporte.categorias.includes(categoria));
      }));
    }
    
    // Filtrar por búsqueda
    if (searchQuery) {
      const searchMatches = this.searchByQuery(searchQuery);
      filteredIndices = new Set([...filteredIndices].filter(idx => searchMatches.has(idx)));
    }
    
    // Convertir índices a objetos
    let results = [...filteredIndices].map(idx => ({
      ...deportes[idx],
      originalIndex: idx
    }));
    
    // Ordenar resultados
    results = this.sortResults(results, sortBy, sortOrder);
    
    // Guardar en cache (limitar tamaño del cache)
    if (this.cache.size > 100) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(cacheKey, results);
    
    return results;
  }

  /**
   * Búsqueda por query con scoring
   */
  searchByQuery(query) {
    const tokens = query.toLowerCase().split(' ').filter(token => token.length > 1);
    const matches = new Map(); // idx -> score
    
    tokens.forEach(token => {
      // Búsqueda exacta
      if (this.searchIndex.has(token)) {
        this.searchIndex.get(token).forEach(idx => {
          matches.set(idx, (matches.get(idx) || 0) + 2);
        });
      }
      
      // Búsqueda parcial (contiene)
      this.searchIndex.forEach((indices, indexToken) => {
        if (indexToken.includes(token) && indexToken !== token) {
          indices.forEach(idx => {
            matches.set(idx, (matches.get(idx) || 0) + 1);
          });
        }
      });
    });
    
    // Retornar solo los que tienen score > 0
    return new Set(matches.keys());
  }

  /**
   * Ordenar resultados
   */
  sortResults(results, sortBy, sortOrder) {
    const multiplier = sortOrder === 'desc' ? -1 : 1;
    
    return results.sort((a, b) => {
      let comparison = 0;
      
      switch (sortBy) {
        case 'nombre':
          comparison = a.nombre.localeCompare(b.nombre);
          break;
        case 'dificultad':
          const dificultadOrder = { 'Principiante': 1, 'Intermedio': 2, 'Avanzado': 3 };
          comparison = (dificultadOrder[a.dificultad] || 0) - (dificultadOrder[b.dificultad] || 0);
          break;
        case 'duracion':
          // Extraer números de la duración para comparar
          const getDurationMinutes = (dur) => {
            const match = dur.match(/(\d+)/);
            return match ? parseInt(match[1]) : 0;
          };
          comparison = getDurationMinutes(a.duracion) - getDurationMinutes(b.duracion);
          break;
        default:
          comparison = 0;
      }
      
      return comparison * multiplier;
    });
  }

  /**
   * Obtener sugerencias de autocompletado
   */
  getSuggestions(query, limit = 5) {
    if (!query || query.length < 2) return [];
    
    const queryLower = query.toLowerCase();
    const suggestions = new Set();
    
    // Buscar en nombres de deportes
    deportes.forEach(deporte => {
      if (deporte.nombre.toLowerCase().includes(queryLower)) {
        suggestions.add(deporte.nombre);
      }
    });
    
    // Buscar en categorías
    this.categoryIndex.forEach((_, categoria) => {
      if (categoria.toLowerCase().includes(queryLower)) {
        suggestions.add(categoria);
      }
    });
    
    return Array.from(suggestions).slice(0, limit);
  }

  /**
   * Limpiar cache
   */
  clearCache() {
    this.cache.clear();
  }

  /**
   * Obtener estadísticas de filtrado
   */
  getStats() {
    return {
      totalDeportes: deportes.length,
      totalCategorias: this.categoryIndex.size,
      cacheSize: this.cache.size,
      searchIndexSize: this.searchIndex.size
    };
  }
}

// Instancia singleton
const deporteFilter = new DeporteFilter();

export default deporteFilter;
export { DeporteFilter };