// Utilidad para manejo seguro de errores
// Previene la exposición de información sensible en los errores

/**
 * Tipos de errores conocidos
 */
const ERROR_TYPES = {
  VALIDATION: 'validation_error',
  NETWORK: 'network_error',
  STORAGE: 'storage_error',
  TELEGRAM: 'telegram_error',
  SECURITY: 'security_error',
  UNKNOWN: 'unknown_error'
};

/**
 * Mensajes de error seguros para mostrar al usuario
 */
const SAFE_ERROR_MESSAGES = {
  [ERROR_TYPES.VALIDATION]: 'Los datos proporcionados no son válidos.',
  [ERROR_TYPES.NETWORK]: 'Error de conexión. Por favor, inténtalo de nuevo.',
  [ERROR_TYPES.STORAGE]: 'Error al guardar los datos. Por favor, inténtalo de nuevo.',
  [ERROR_TYPES.TELEGRAM]: 'Error al enviar notificación.',
  [ERROR_TYPES.SECURITY]: 'Acceso denegado por razones de seguridad.',
  [ERROR_TYPES.UNKNOWN]: 'Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo.'
};

/**
 * Patrones de errores que contienen información sensible
 */
const SENSITIVE_PATTERNS = [
  /token/i,
  /password/i,
  /secret/i,
  /key/i,
  /api[_-]?key/i,
  /auth/i,
  /credential/i,
  /\d{10,}/,  // Números largos (posibles IDs)
  /[a-zA-Z0-9]{20,}/, // Strings largos (posibles tokens)
  /localhost:\d+/,
  /127\.0\.0\.1/,
  /file:\/\//,
  /\\[a-zA-Z]:\\/  // Rutas de Windows
];

/**
 * Clase para manejo seguro de errores
 */
export class SecureErrorHandler {
  constructor(isDevelopment = false) {
    this.isDevelopment = isDevelopment;
    this.errorLog = [];
  }

  /**
   * Sanitizar mensaje de error removiendo información sensible
   */
  sanitizeErrorMessage(message) {
    if (!message || typeof message !== 'string') {
      return SAFE_ERROR_MESSAGES[ERROR_TYPES.UNKNOWN];
    }

    let sanitized = message;

    // Remover información sensible
    SENSITIVE_PATTERNS.forEach(pattern => {
      sanitized = sanitized.replace(pattern, '[REDACTED]');
    });

    // Remover rutas de archivos
    sanitized = sanitized.replace(/\/[^\s]+\.(js|ts|jsx|tsx|vue|svelte|astro)/g, '[FILE]');
    
    // Remover stack traces en producción
    if (!this.isDevelopment) {
      sanitized = sanitized.split('\n')[0]; // Solo la primera línea
    }

    return sanitized;
  }

  /**
   * Determinar el tipo de error basado en el mensaje o contexto
   */
  determineErrorType(error, context = '') {
    const message = error?.message || error || '';
    const fullContext = `${message} ${context}`.toLowerCase();

    if (fullContext.includes('validation') || fullContext.includes('invalid')) {
      return ERROR_TYPES.VALIDATION;
    }
    if (fullContext.includes('network') || fullContext.includes('fetch') || fullContext.includes('connection')) {
      return ERROR_TYPES.NETWORK;
    }
    if (fullContext.includes('storage') || fullContext.includes('localstorage')) {
      return ERROR_TYPES.STORAGE;
    }
    if (fullContext.includes('telegram') || fullContext.includes('bot')) {
      return ERROR_TYPES.TELEGRAM;
    }
    if (fullContext.includes('security') || fullContext.includes('unauthorized') || fullContext.includes('forbidden')) {
      return ERROR_TYPES.SECURITY;
    }

    return ERROR_TYPES.UNKNOWN;
  }

  /**
   * Procesar error de forma segura
   */
  handleError(error, context = '', options = {}) {
    const timestamp = new Date().toISOString();
    const errorType = this.determineErrorType(error, context);
    const originalMessage = error?.message || error || 'Unknown error';
    const sanitizedMessage = this.sanitizeErrorMessage(originalMessage);
    const safeMessage = SAFE_ERROR_MESSAGES[errorType];

    // Crear objeto de error procesado
    const processedError = {
      id: this.generateErrorId(),
      timestamp,
      type: errorType,
      context,
      safeMessage,
      sanitizedMessage,
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
      url: typeof window !== 'undefined' ? window.location.href : 'unknown'
    };

    // En desarrollo, incluir información adicional
    if (this.isDevelopment) {
      processedError.originalMessage = originalMessage;
      processedError.stack = error?.stack;
      processedError.details = options.details;
    }

    // Registrar error
    this.logError(processedError);

    // Retornar información segura para mostrar al usuario
    return {
      id: processedError.id,
      message: options.showSanitized && this.isDevelopment ? sanitizedMessage : safeMessage,
      type: errorType,
      timestamp
    };
  }

  /**
   * Registrar error de forma segura
   */
  logError(processedError) {
    // Agregar al log interno
    this.errorLog.push(processedError);
    
    // Mantener solo los últimos 100 errores
    if (this.errorLog.length > 100) {
      this.errorLog.shift();
    }

    // En desarrollo, mostrar en consola
    if (this.isDevelopment) {
      console.group(`🚨 Error [${processedError.type}] - ${processedError.id}`);
      console.error('Context:', processedError.context);
      console.error('Original:', processedError.originalMessage);
      console.error('Sanitized:', processedError.sanitizedMessage);
      console.error('Safe:', processedError.safeMessage);
      if (processedError.stack) {
        console.error('Stack:', processedError.stack);
      }
      console.groupEnd();
    } else {
      // En producción, solo log básico
      console.error(`Error ${processedError.id}: ${processedError.safeMessage}`);
    }
  }

  /**
   * Generar ID único para el error
   */
  generateErrorId() {
    return `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Obtener estadísticas de errores
   */
  getErrorStats() {
    const stats = {
      total: this.errorLog.length,
      byType: {},
      recent: this.errorLog.slice(-10)
    };

    this.errorLog.forEach(error => {
      stats.byType[error.type] = (stats.byType[error.type] || 0) + 1;
    });

    return stats;
  }

  /**
   * Limpiar log de errores
   */
  clearErrorLog() {
    this.errorLog = [];
  }
}

// Instancia global del manejador de errores
const isDev = import.meta.env?.DEV || import.meta.env?.NODE_ENV === 'development';
export const errorHandler = new SecureErrorHandler(isDev);

/**
 * Función de conveniencia para manejar errores
 */
export function handleError(error, context = '', options = {}) {
  return errorHandler.handleError(error, context, options);
}

/**
 * Función para manejar errores de forma asíncrona
 */
export async function handleAsyncError(asyncFn, context = '', options = {}) {
  try {
    return await asyncFn();
  } catch (error) {
    const processedError = handleError(error, context, options);
    
    if (options.throwProcessed) {
      throw new Error(processedError.message);
    }
    
    return options.defaultValue || null;
  }
}

/**
 * Wrapper para funciones que pueden fallar
 */
export function safeExecute(fn, context = '', options = {}) {
  try {
    return fn();
  } catch (error) {
    const processedError = handleError(error, context, options);
    
    if (options.throwProcessed) {
      throw new Error(processedError.message);
    }
    
    return options.defaultValue || null;
  }
}

// Exportar tipos y constantes
export { ERROR_TYPES, SAFE_ERROR_MESSAGES };