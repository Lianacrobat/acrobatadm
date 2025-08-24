# Guía de Seguridad - Acrobata Demente

## 🔒 Mejoras de Seguridad Implementadas

### ✅ Completadas

#### 1. Gestión Segura de Variables de Entorno
- **Archivo creado**: `.env.example` - Plantilla para configuración
- **Modificado**: `src/utils/telegram.js` - Eliminadas credenciales hardcodeadas
- **Configurado**: `.gitignore` ya incluía `.env` (✓)

**Acción requerida**: 
```bash
# Copiar plantilla y configurar credenciales reales
cp .env.example .env
# Editar .env con tus credenciales reales
```

#### 2. Sanitización de Entrada de Usuario
- **Modificado**: `src/components/tienda/productos/Filter.astro`
- **Implementado**: Función `sanitizeInput()` que:
  - Remueve caracteres HTML peligrosos (`<>"'&`)
  - Elimina URLs javascript: y event handlers
  - Limita longitud a 100 caracteres
  - Actualiza el input si fue sanitizado

#### 3. Almacenamiento Seguro (localStorage)
- **Archivo creado**: `src/utils/secureStorage.js`
- **Modificado**: `src/components/tienda/productos/Grid.astro`
- **Características**:
  - Cifrado básico XOR con Base64
  - Validación de tipos de datos
  - Verificación de integridad con checksums
  - Sanitización automática de datos
  - Expiración de datos
  - Manejo de errores robusto

#### 4. Headers de Seguridad HTTP
- **Archivo creado**: `src/middleware/security.ts`
- **Archivo creado**: `src/middleware/index.ts`
- **Modificado**: `astro.config.mjs`
- **Headers implementados**:
  - Content Security Policy (CSP)
  - X-Frame-Options: DENY
  - X-Content-Type-Options: nosniff
  - X-XSS-Protection: 1; mode=block
  - Strict-Transport-Security (producción)
  - Referrer-Policy
  - Permissions-Policy

#### 5. Manejo Seguro de Errores
- **Archivo creado**: `src/utils/errorHandler.js`
- **Modificado**: `src/utils/telegram.js`
- **Características**:
  - Sanitización de mensajes de error
  - Ocultación de información sensible
  - Mensajes seguros para usuarios
  - Logging estructurado
  - Diferentes niveles para desarrollo/producción

### ⏳ Pendientes

#### 6. Regeneración de Token de Telegram
**CRÍTICO - Acción manual requerida**:

1. **Revocar token actual**:
   - Ve a @BotFather en Telegram
   - Usa `/revoke` para revocar el token expuesto

2. **Generar nuevo token**:
   - Usa `/newtoken` en @BotFather
   - Copia el nuevo token

3. **Configurar nuevo token**:
   ```bash
   # En tu archivo .env
   TELEGRAM_BOT_TOKEN=tu_nuevo_token_aqui
   TELEGRAM_CHAT_ID=tu_chat_id_aqui
   ```

#### 7. Actualización de Dependencias
**Acción requerida** (cuando tengas conectividad):

```bash
# Verificar dependencias desactualizadas
npm outdated

# Actualizar dependencias de seguridad
npm audit
npm audit fix

# Actualizar dependencias principales
npm update

# Para actualizaciones mayores, usar:
npx npm-check-updates -u
npm install
```

## 🛡️ Configuración de Producción

### Variables de Entorno Requeridas
```env
# Telegram Bot (OBLIGATORIO)
TELEGRAM_BOT_TOKEN=tu_nuevo_token_bot
TELEGRAM_CHAT_ID=tu_chat_id

# Configuración de aplicación
NODE_ENV=production
SITE_URL=https://tu-dominio.com

# Seguridad
SECRET_KEY=clave_secreta_para_cifrado_fuerte
API_RATE_LIMIT=100
```

### Comandos de Build Seguro
```bash
# Build para producción
npm run build

# Build para GitHub Pages
npm run build:github
```

## 🔍 Verificación de Seguridad

### Checklist de Despliegue
- [ ] Token de Telegram regenerado
- [ ] Variables de entorno configuradas
- [ ] Dependencias actualizadas
- [ ] Build de producción exitoso
- [ ] Headers de seguridad funcionando
- [ ] CSP sin errores en consola
- [ ] localStorage cifrado funcionando
- [ ] Sanitización de entrada activa

### Herramientas de Verificación
```bash
# Verificar vulnerabilidades
npm audit

# Verificar configuración de seguridad (en navegador)
# Abrir DevTools > Security tab
# Verificar headers en Network tab
```

## 🚨 Monitoreo Continuo

### Logs de Seguridad
- Errores se registran en `errorHandler.js`
- En desarrollo: logs detallados en consola
- En producción: logs sanitizados

### Alertas Recomendadas
1. **Fallos de autenticación de Telegram**
2. **Intentos de XSS detectados**
3. **Errores de validación frecuentes**
4. **Accesos con headers sospechosos**

## 📚 Recursos Adicionales

### Documentación
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Astro Security](https://docs.astro.build/en/guides/security/)
- [CSP Generator](https://report-uri.com/home/generate)

### Herramientas Recomendadas
- [npm audit](https://docs.npmjs.com/cli/v8/commands/npm-audit)
- [Snyk](https://snyk.io/) - Escaneo de vulnerabilidades
- [Security Headers](https://securityheaders.com/) - Verificar headers

## 🔄 Próximos Pasos

1. **Inmediato**: Regenerar token de Telegram
2. **Corto plazo**: Actualizar dependencias
3. **Mediano plazo**: Implementar autenticación de usuarios
4. **Largo plazo**: Auditoría de seguridad profesional

---

**⚠️ IMPORTANTE**: Este documento contiene información sensible sobre la configuración de seguridad. No lo incluyas en repositorios públicos.

**✅ Estado actual**: La mayoría de vulnerabilidades críticas han sido mitigadas. El token de Telegram debe regenerarse inmediatamente.