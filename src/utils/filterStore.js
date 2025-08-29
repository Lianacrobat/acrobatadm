/**
 * Sistema de gestión de estado centralizado para filtros del blog
 * Implementa patrón Observer para comunicación entre componentes
 */

class FilterStore {
  constructor() {
    this.state = {
      activeCategories: new Set(),
      searchQuery: '',
      sortBy: 'nombre', // nombre, dificultad, duracion
      sortOrder: 'asc' // asc, desc
    };
    
    this.observers = new Set();
    this.debounceTimers = new Map();
    
    // Inicializar desde URL si existe
    this.initFromURL();
  }

  /**
   * Suscribir un observer para recibir cambios de estado
   */
  subscribe(callback) {
    this.observers.add(callback);
    
    // Retornar función para desuscribirse
    return () => {
      this.observers.delete(callback);
    };
  }

  /**
   * Notificar a todos los observers sobre cambios
   */
  notify(changeType, data) {
    this.observers.forEach(callback => {
      try {
        callback({
          type: changeType,
          state: this.getState(),
          data
        });
      } catch (error) {
        console.error('Error en observer:', error);
      }
    });
  }

  /**
   * Obtener estado actual (copia inmutable)
   */
  getState() {
    return {
      activeCategories: Array.from(this.state.activeCategories),
      searchQuery: this.state.searchQuery,
      sortBy: this.state.sortBy,
      sortOrder: this.state.sortOrder
    };
  }

  /**
   * Toggle categoría con debouncing
   */
  toggleCategory(category) {
    if (this.state.activeCategories.has(category)) {
      this.state.activeCategories.delete(category);
    } else {
      this.state.activeCategories.add(category);
    }
    
    this.debounce('category', () => {
      this.updateURL();
      this.notify('CATEGORY_CHANGED', { category });
    }, 100);
  }

  /**
   * Actualizar query de búsqueda con debouncing
   */
  setSearchQuery(query) {
    this.state.searchQuery = query.trim();
    
    this.debounce('search', () => {
      this.updateURL();
      this.notify('SEARCH_CHANGED', { query: this.state.searchQuery });
    }, 300);
  }

  /**
   * Cambiar ordenamiento
   */
  setSorting(sortBy, sortOrder = 'asc') {
    this.state.sortBy = sortBy;
    this.state.sortOrder = sortOrder;
    
    this.updateURL();
    this.notify('SORT_CHANGED', { sortBy, sortOrder });
  }

  /**
   * Limpiar todos los filtros
   */
  clearFilters() {
    this.state.activeCategories.clear();
    this.state.searchQuery = '';
    this.state.sortBy = 'nombre';
    this.state.sortOrder = 'asc';
    
    this.updateURL();
    this.notify('FILTERS_CLEARED', {});
  }

  /**
   * Implementar debouncing para optimizar rendimiento
   */
  debounce(key, func, delay) {
    if (this.debounceTimers.has(key)) {
      clearTimeout(this.debounceTimers.get(key));
    }
    
    const timer = setTimeout(() => {
      func();
      this.debounceTimers.delete(key);
    }, delay);
    
    this.debounceTimers.set(key, timer);
  }

  /**
   * Inicializar estado desde parámetros URL
   */
  initFromURL() {
    if (typeof window === 'undefined') return;
    
    const params = new URLSearchParams(window.location.search);
    
    // Categorías
    const categories = params.get('categories');
    if (categories) {
      categories.split(',').forEach(cat => {
        this.state.activeCategories.add(cat.trim());
      });
    }
    
    // Búsqueda
    const search = params.get('search');
    if (search) {
      this.state.searchQuery = search;
    }
    
    // Ordenamiento
    const sortBy = params.get('sortBy');
    const sortOrder = params.get('sortOrder');
    if (sortBy) {
      this.state.sortBy = sortBy;
    }
    if (sortOrder) {
      this.state.sortOrder = sortOrder;
    }
  }

  /**
   * Actualizar URL con estado actual
   */
  updateURL() {
    if (typeof window === 'undefined') return;
    
    const params = new URLSearchParams();
    
    // Categorías
    if (this.state.activeCategories.size > 0) {
      params.set('categories', Array.from(this.state.activeCategories).join(','));
    }
    
    // Búsqueda
    if (this.state.searchQuery) {
      params.set('search', this.state.searchQuery);
    }
    
    // Ordenamiento (solo si no es el default)
    if (this.state.sortBy !== 'nombre') {
      params.set('sortBy', this.state.sortBy);
    }
    if (this.state.sortOrder !== 'asc') {
      params.set('sortOrder', this.state.sortOrder);
    }
    
    // Actualizar URL sin recargar página
    const newURL = params.toString() ? 
      `${window.location.pathname}?${params.toString()}` : 
      window.location.pathname;
    
    window.history.replaceState({}, '', newURL);
  }
}

// Instancia singleton
const filterStore = new FilterStore();

export default filterStore;
export { FilterStore };