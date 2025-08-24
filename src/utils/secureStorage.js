// Utilidad para manejo seguro de localStorage con cifrado básico
// y validación de datos

/**
 * Función simple de cifrado/descifrado usando XOR
 * Nota: Para producción se recomienda usar una librería de cifrado más robusta
 */
function simpleEncrypt(text, key = 'acrobata-demente-2024') {
  let result = ''
  for (let i = 0; i < text.length; i++) {
    result += String.fromCharCode(
      text.charCodeAt(i) ^ key.charCodeAt(i % key.length)
    )
  }
  return btoa(result) // Base64 encode
}

function simpleDecrypt(encryptedText, key = 'acrobata-demente-2024') {
  try {
    const text = atob(encryptedText) // Base64 decode
    let result = ''
    for (let i = 0; i < text.length; i++) {
      result += String.fromCharCode(
        text.charCodeAt(i) ^ key.charCodeAt(i % key.length)
      )
    }
    return result
  } catch (error) {
    console.warn('Error decrypting data:', error)
    return null
  }
}

/**
 * Validar que los datos sean del tipo esperado
 */
function validateData(data, expectedType) {
  switch (expectedType) {
    case 'array':
      return Array.isArray(data)
    case 'object':
      return typeof data === 'object' && data !== null && !Array.isArray(data)
    case 'string':
      return typeof data === 'string'
    case 'number':
      return typeof data === 'number' && !isNaN(data)
    case 'boolean':
      return typeof data === 'boolean'
    default:
      return true
  }
}

/**
 * Sanitizar datos antes de almacenar
 */
function sanitizeData(data) {
  if (typeof data === 'string') {
    // Remover caracteres peligrosos
    return data
      .replace(/[<>"'&]/g, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+=/gi, '')
      .trim()
      .substring(0, 1000) // Limitar tamaño
  }
  
  if (Array.isArray(data)) {
    return data.map(item => sanitizeData(item)).slice(0, 100) // Limitar array
  }
  
  if (typeof data === 'object' && data !== null) {
    const sanitized = {}
    for (const [key, value] of Object.entries(data)) {
      if (typeof key === 'string' && key.length <= 50) {
        sanitized[sanitizeData(key)] = sanitizeData(value)
      }
    }
    return sanitized
  }
  
  return data
}

/**
 * Clase para manejo seguro de localStorage
 */
export class SecureStorage {
  constructor(prefix = 'acrobata_') {
    this.prefix = prefix
    this.isAvailable = this.checkAvailability()
  }

  /**
   * Verificar si localStorage está disponible
   */
  checkAvailability() {
    try {
      const test = '__localStorage_test__'
      localStorage.setItem(test, test)
      localStorage.removeItem(test)
      return true
    } catch (error) {
      console.warn('localStorage not available:', error)
      return false
    }
  }

  /**
   * Almacenar datos de forma segura
   */
  setItem(key, value, options = {}) {
    if (!this.isAvailable) {
      console.warn('localStorage not available')
      return false
    }

    try {
      // Sanitizar datos
      const sanitizedValue = sanitizeData(value)
      
      // Validar tipo si se especifica
      if (options.expectedType && !validateData(sanitizedValue, options.expectedType)) {
        console.warn(`Data validation failed for key: ${key}`)
        return false
      }

      // Crear objeto con metadatos
      const dataObject = {
        value: sanitizedValue,
        timestamp: Date.now(),
        version: '1.0',
        checksum: this.generateChecksum(sanitizedValue)
      }

      // Cifrar y almacenar
      const encryptedData = simpleEncrypt(JSON.stringify(dataObject))
      localStorage.setItem(this.prefix + key, encryptedData)
      
      return true
    } catch (error) {
      console.error('Error storing data:', error)
      return false
    }
  }

  /**
   * Recuperar datos de forma segura
   */
  getItem(key, options = {}) {
    if (!this.isAvailable) {
      return options.defaultValue || null
    }

    try {
      const encryptedData = localStorage.getItem(this.prefix + key)
      if (!encryptedData) {
        return options.defaultValue || null
      }

      // Descifrar datos
      const decryptedData = simpleDecrypt(encryptedData)
      if (!decryptedData) {
        return options.defaultValue || null
      }

      const dataObject = JSON.parse(decryptedData)
      
      // Verificar integridad
      if (!this.verifyChecksum(dataObject.value, dataObject.checksum)) {
        console.warn(`Data integrity check failed for key: ${key}`)
        this.removeItem(key) // Remover datos corruptos
        return options.defaultValue || null
      }

      // Verificar expiración si se especifica
      if (options.maxAge && Date.now() - dataObject.timestamp > options.maxAge) {
        this.removeItem(key) // Remover datos expirados
        return options.defaultValue || null
      }

      // Validar tipo si se especifica
      if (options.expectedType && !validateData(dataObject.value, options.expectedType)) {
        console.warn(`Data type validation failed for key: ${key}`)
        return options.defaultValue || null
      }

      return dataObject.value
    } catch (error) {
      console.error('Error retrieving data:', error)
      return options.defaultValue || null
    }
  }

  /**
   * Remover item
   */
  removeItem(key) {
    if (!this.isAvailable) return false
    
    try {
      localStorage.removeItem(this.prefix + key)
      return true
    } catch (error) {
      console.error('Error removing data:', error)
      return false
    }
  }

  /**
   * Limpiar todos los datos del prefijo
   */
  clear() {
    if (!this.isAvailable) return false
    
    try {
      const keys = Object.keys(localStorage)
      keys.forEach(key => {
        if (key.startsWith(this.prefix)) {
          localStorage.removeItem(key)
        }
      })
      return true
    } catch (error) {
      console.error('Error clearing data:', error)
      return false
    }
  }

  /**
   * Generar checksum simple para verificar integridad
   */
  generateChecksum(data) {
    const str = JSON.stringify(data)
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i)
      hash = ((hash << 5) - hash) + char
      hash = hash & hash // Convert to 32-bit integer
    }
    return hash.toString()
  }

  /**
   * Verificar checksum
   */
  verifyChecksum(data, expectedChecksum) {
    return this.generateChecksum(data) === expectedChecksum
  }

  /**
   * Obtener información de almacenamiento
   */
  getStorageInfo() {
    if (!this.isAvailable) return null
    
    const keys = Object.keys(localStorage)
    const prefixedKeys = keys.filter(key => key.startsWith(this.prefix))
    
    return {
      totalKeys: prefixedKeys.length,
      keys: prefixedKeys.map(key => key.replace(this.prefix, '')),
      storageUsed: JSON.stringify(localStorage).length
    }
  }
}

// Instancia por defecto
export const secureStorage = new SecureStorage()

// Funciones de conveniencia para favoritos
export const favoritesStorage = {
  get: () => secureStorage.getItem('favorites', { 
    expectedType: 'array', 
    defaultValue: [],
    maxAge: 30 * 24 * 60 * 60 * 1000 // 30 días
  }),
  
  set: (favorites) => secureStorage.setItem('favorites', favorites, { 
    expectedType: 'array' 
  }),
  
  add: (productId) => {
    const favorites = favoritesStorage.get()
    if (!favorites.includes(productId)) {
      favorites.push(productId)
      return favoritesStorage.set(favorites)
    }
    return true
  },
  
  remove: (productId) => {
    const favorites = favoritesStorage.get()
    const filtered = favorites.filter(id => id !== productId)
    return favoritesStorage.set(filtered)
  },
  
  clear: () => secureStorage.removeItem('favorites'),
  
  has: (productId) => {
    const favorites = favoritesStorage.get()
    return favorites.includes(productId)
  }
}