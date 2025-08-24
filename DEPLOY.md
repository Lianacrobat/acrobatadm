# 🚀 Guía de Despliegue - Acrobata Demente

## Despliegue Automático en GitHub Pages

### 📋 Pasos para Subir tu Proyecto a la Web

#### 1. **Preparar el Repositorio**

```bash
# Inicializar git (si no está inicializado)
git init

# Añadir todos los archivos
git add .

# Hacer commit inicial
git commit -m "feat: proyecto completo con mejoras de seguridad"

# Conectar con GitHub (reemplaza con tu usuario)
git remote add origin https://github.com/lianacrobata/AdmApp.git

# Subir al repositorio
git push -u origin main
```

#### 2. **Configurar GitHub Pages**

1. **Ve a tu repositorio en GitHub**: `https://github.com/lianacrobata/AdmApp`

2. **Configurar Pages**:
   - Ve a `Settings` > `Pages`
   - En "Source" selecciona: `GitHub Actions`
   - El workflow se ejecutará automáticamente

3. **Configurar Secrets** (IMPORTANTE):
   - Ve a `Settings` > `Secrets and variables` > `Actions`
   - Añade estos secrets:
     ```
     TELEGRAM_BOT_TOKEN: tu_nuevo_token_regenerado
     TELEGRAM_CHAT_ID: tu_chat_id
     ```

#### 3. **URL de tu Sitio Web**

Una vez desplegado, tu sitio estará disponible en:
```
https://lianacrobata.github.io/AdmApp/
```

### 🔄 Despliegue Automático

Cada vez que hagas `git push` a la rama `main`, el sitio se actualizará automáticamente:

```bash
# Hacer cambios en tu código
git add .
git commit -m "descripción de cambios"
git push
```

### 🛠️ Comandos de Build Local

```bash
# Build para GitHub Pages
npm run build:github

# Probar build localmente
npx serve dist
# o
python -m http.server 8080 --directory dist
```

### 📁 Estructura de Despliegue

```
.github/
└── workflows/
    └── deploy.yml          # Workflow de GitHub Actions

dist/                       # Archivos generados (no subir a git)
├── _astro/                # JS/CSS optimizados
├── assets/                # Imágenes y recursos
├── producto/              # Páginas de productos
└── index.html             # Página principal
```

### 🔒 Configuración de Seguridad para Producción

#### Variables de Entorno en GitHub

1. **TELEGRAM_BOT_TOKEN**: Token regenerado del bot
2. **TELEGRAM_CHAT_ID**: ID del chat de notificaciones
3. **NODE_ENV**: `production` (automático)

#### Headers de Seguridad

El sitio incluye automáticamente:
- ✅ Content Security Policy (CSP)
- ✅ X-Frame-Options: DENY
- ✅ X-Content-Type-Options: nosniff
- ✅ Strict-Transport-Security (HTTPS)

### 🚨 Checklist Pre-Despliegue

- [ ] **Token de Telegram regenerado** (crítico)
- [ ] **Secrets configurados en GitHub**
- [ ] **Repositorio público o con GitHub Pages habilitado**
- [ ] **Build local exitoso**
- [ ] **Variables de entorno configuradas**

### 🔧 Solución de Problemas

#### Error: "Page build failed"
```bash
# Verificar build local
npm run build:github

# Revisar logs en GitHub Actions
# Settings > Actions > Ver último workflow
```

#### Error: "Secrets not found"
1. Verificar que los secrets estén configurados
2. Nombres exactos: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`
3. Regenerar token si es necesario

#### Error: "404 Not Found"
1. Verificar configuración en `Settings > Pages`
2. Esperar 5-10 minutos después del primer despliegue
3. Verificar URL: `https://lianacrobata.github.io/AdmApp/`

### 📊 Monitoreo del Sitio

#### GitHub Actions
- Ve a la pestaña `Actions` para ver el estado de los despliegues
- Cada push genera un nuevo build automáticamente

#### Analytics (Opcional)
```html
<!-- Añadir a Layout.astro si deseas analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

### 🌐 Dominios Personalizados (Opcional)

Para usar un dominio propio:

1. **Configurar DNS**:
   ```
   CNAME: www.tudominio.com -> lianacrobata.github.io
   A: tudominio.com -> 185.199.108.153
   ```

2. **Configurar en GitHub**:
   - `Settings > Pages > Custom domain`
   - Añadir: `www.tudominio.com`

3. **Actualizar astro.config.mjs**:
   ```javascript
   site: 'https://www.tudominio.com',
   base: '/', // Cambiar de '/AdmApp' a '/'
   ```

### 📈 Optimizaciones Adicionales

#### Performance
- ✅ **Imágenes optimizadas** automáticamente
- ✅ **CSS/JS minificados**
- ✅ **Lazy loading** implementado
- ✅ **Chunks separados** para mejor caching

#### SEO
- ✅ **Meta tags** configurados
- ✅ **Sitemap** generado automáticamente
- ✅ **URLs amigables**

---

## 🎉 ¡Listo para Producción!

Siguiendo estos pasos, tu proyecto **Acrobata Demente** estará disponible en la web con:

- 🔒 **Seguridad robusta**
- 🚀 **Despliegue automático**
- 📱 **Responsive design**
- ⚡ **Performance optimizada**
- 🛡️ **Headers de seguridad**

**URL final**: https://lianacrobata.github.io/AdmApp/

---

**⚠️ IMPORTANTE**: Recuerda regenerar el token de Telegram antes del despliegue siguiendo las instrucciones en `SECURITY.md`.