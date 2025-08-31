# 🚀 DESPLIEGUE EN VERCEL - SETUP INICIAL

> **📖 DOCUMENTACIÓN COMPLETA**: Para instrucciones detalladas de Vercel, consulta **DEPLOY-VERCEL.md**

## ⚡ Setup Rápido para Vercel

### 1. Crear Repositorio en GitHub (si no existe)
- Ve a: https://github.com/new
- Nombre: `AdmApp`
- Descripción: `Acrobata Demente - Tienda de productos acrobáticos`
- **Público**
- **NO** marcar "Add a README file"

### 2. Subir Código
```bash
git init
git add .
git commit -m "feat: configuración optimizada para Vercel"
git branch -M main
git remote add origin https://github.com/Lianacrobat/acrobatadm.git
git push -u origin main
```

### 3. Configurar Proyecto en Vercel
1. Ve a [Vercel Dashboard](https://vercel.com/dashboard)
2. Haz clic en "New Project"
3. Importa tu repositorio de GitHub
4. Vercel detectará automáticamente la configuración de Astro

### 4. Configurar Variables de Entorno en Vercel
1. En tu proyecto de Vercel: **Settings** → **Environment Variables**
2. Añadir variables:
   ```
   TELEGRAM_BOT_TOKEN: [tu_token_real]
   TELEGRAM_CHAT_ID: [tu_chat_id_real]
   NODE_ENV: production
   ```

### 5. Configurar GitHub Secrets (Para CI/CD Automático)
1. `Settings` → `Secrets and variables` → `Actions`
2. Añadir secrets:
   ```
   TELEGRAM_BOT_TOKEN: [tu_token]
   TELEGRAM_CHAT_ID: [tu_chat_id]
   VERCEL_TOKEN: [tu_vercel_token]
   VERCEL_ORG_ID: [tu_organization_id]
   VERCEL_PROJECT_ID: [tu_project_id]
   ```

## 🌐 URL del Proyecto
- **Vercel**: URL asignada automáticamente en tu dashboard

## ⚠️ IMPORTANTE ANTES DEL DESPLIEGUE

### 🔑 Configurar Token de Telegram
1. Ve a @BotFather en Telegram
2. Usa tu token existente o genera uno nuevo con `/newtoken`
3. Obtén tu Chat ID enviando un mensaje a tu bot
4. Configura ambos valores en Vercel y GitHub Secrets

### 📁 Archivos Configurados para Vercel
- ✅ `.github/workflows/deploy-vercel.yml` - CI/CD automático
- ✅ `astro.config.mjs` - Optimizado para Vercel con SSR
- ✅ `vercel.json` - Configuración de build
- ✅ `DEPLOY-VERCEL.md` - Guía completa de Vercel

### 🔒 Características Habilitadas
- ✅ **Server-Side Rendering (SSR)** - Para formularios dinámicos
- ✅ **Web Analytics** - Métricas integradas de Vercel
- ✅ **Variables de entorno seguras** - Para tokens de Telegram
- ✅ **Build optimizado** - Minificación y compresión
- ✅ **CI/CD automático** - Despliegue en cada push

## 🚨 Checklist Final para Vercel

- [ ] **Repositorio creado en GitHub**
- [ ] **Código subido con git push**
- [ ] **Proyecto conectado en Vercel**
- [ ] **Variables de entorno configuradas en Vercel**
- [ ] **GitHub Secrets configurados (incluyendo tokens de Vercel)**
- [ ] **Tokens de Telegram configurados**
- [ ] **Primer despliegue exitoso en Vercel**

## 🔧 Verificación

### Estado del Despliegue
1. Ve a tu [Vercel Dashboard](https://vercel.com/dashboard)
2. Verifica que el último deployment esté en estado "Ready"
3. Si hay errores, revisa los logs en Vercel

### Estado del Workflow (CI/CD)
1. Ve a la pestaña `Actions` en tu repositorio
2. Verifica que el workflow "Deploy to Vercel" esté en verde
3. Si hay errores, revisa los logs

### Probar el Sitio
1. Ve a tu URL de Vercel (disponible en el dashboard)
2. Verifica que todas las páginas funcionen
3. Prueba el formulario de contacto
4. Verifica que el sistema de favoritos funcione

## 📞 Soporte

Si tienes problemas:
1. Revisa `DEPLOY-VERCEL.md` para instrucciones detalladas
2. Verifica los logs en Vercel Dashboard
3. Revisa los logs en GitHub Actions
4. Asegúrate de que las variables de entorno estén configuradas correctamente

---

## 🔄 Configuración Avanzada

**Para instrucciones detalladas, solución de problemas y configuración avanzada**, consulta:
📖 **DEPLOY-VERCEL.md** - Guía completa de despliegue en Vercel

---

## 🎉 ¡Listo!

Una vez completados estos pasos, tu tienda **Acrobata Demente** estará disponible en Vercel con:
- ✅ **Server-Side Rendering** para formularios dinámicos
- ✅ **Sistema de favoritos** completamente funcional
- ✅ **Notificaciones de Telegram** integradas
- ✅ **Rendimiento optimizado** con Vercel
- ✅ **Despliegue automático** en cada actualización

**URL de tu sitio**: Disponible en tu Vercel Dashboard