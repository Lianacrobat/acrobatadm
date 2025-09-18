# 🚀 DESPLIEGUE EN VERCEL - GUÍA COMPLETA

## 📋 Requisitos Previos

- Cuenta en [Vercel](https://vercel.com)
- Cuenta en GitHub con el repositorio del proyecto
- Tokens de Telegram Bot configurados

## 🔧 Configuración Inicial

### 1. Conectar Repositorio a Vercel

1. Ve a [Vercel Dashboard](https://vercel.com/dashboard)
2. Haz clic en "New Project"
3. Importa tu repositorio de GitHub: `https://github.com/Lianacrobat/acrobatadm`
4. Vercel detectará automáticamente que es un proyecto Astro

### 2. Configurar Variables de Entorno en Vercel

1. En tu proyecto de Vercel, ve a **Settings** → **Environment Variables**
2. Añade las siguientes variables:

```
TELEGRAM_BOT_TOKEN=tu_token_real_aqui
TELEGRAM_CHAT_ID=tu_chat_id_real_aqui
PUBLIC_SUPABASE_URL=tu_supabase_url
PUBLIC_SUPABASE_ANON_KEY=tu_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=tu_supabase_service_role_key
NODE_ENV=production
```

### 3. Configurar GitHub Secrets (Para CI/CD)

1. Ve a tu repositorio en GitHub
2. **Settings** → **Secrets and variables** → **Actions**
3. Añade los siguientes secrets:

```
TELEGRAM_BOT_TOKEN=tu_token_real_aqui
TELEGRAM_CHAT_ID=tu_chat_id_real_aqui
PUBLIC_SUPABASE_URL=tu_supabase_url
PUBLIC_SUPABASE_ANON_KEY=tu_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=tu_supabase_service_role_key
VERCEL_TOKEN=tu_vercel_token
VERCEL_ORG_ID=tu_organization_id
VERCEL_PROJECT_ID=tu_project_id
```

#### Obtener Tokens de Vercel:

**VERCEL_TOKEN:**
1. Ve a [Vercel Settings](https://vercel.com/account/tokens)
2. Crea un nuevo token
3. Copia el token generado

**VERCEL_ORG_ID y VERCEL_PROJECT_ID:**
1. En tu proyecto de Vercel, ve a **Settings** → **General**
2. Encontrarás ambos IDs en la sección "Project Settings"

## 🚀 Despliegue

### Opción 1: Despliegue Automático (Recomendado)

1. Haz push a la rama `main`:
```bash
git add .
git commit -m "feat: configuración para Vercel"
git push origin main
```

2. El workflow de GitHub Actions se ejecutará automáticamente
3. Tu sitio estará disponible en la URL de Vercel

### Opción 2: Despliegue Manual desde Vercel

1. En tu proyecto de Vercel, haz clic en "Deploy"
2. Selecciona la rama `main`
3. Vercel construirá y desplegará automáticamente

## 🔍 Verificación

### Comprobar el Despliegue

1. **Estado del Build:**
   - Ve a tu proyecto en Vercel Dashboard
   - Verifica que el último deployment esté en estado "Ready"

2. **Funcionalidad:**
   - Visita tu URL de Vercel
   - Prueba el formulario de contacto
   - Verifica que los favoritos funcionen
   - Comprueba que todas las páginas carguen correctamente

3. **Logs:**
   - En caso de errores, revisa los logs en Vercel Dashboard
   - También puedes revisar los logs en GitHub Actions

## 🛠️ Configuración del Proyecto

### Archivos Configurados:

- ✅ `astro.config.mjs` - Configurado con adaptador de Vercel
- ✅ `vercel.json` - Configuración de build para Vercel
- ✅ `.github/workflows/deploy-vercel.yml` - CI/CD automático
- ✅ Variables de entorno habilitadas

### Características Habilitadas:

- ✅ **Server-Side Rendering (SSR)** - Para formularios dinámicos
- ✅ **Aplicación CRUD completa** - Con Supabase para gestión de datos
- ✅ **Base de datos en tiempo real** - Supabase PostgreSQL
- ✅ **Autenticación y seguridad** - RLS y service role configurados
- ✅ **Web Analytics** - Métricas integradas de Vercel
- ✅ **Variables de entorno seguras** - Para tokens de Telegram y Supabase
- ✅ **Build optimizado** - Minificación y compresión
- ✅ **CI/CD automático** - Despliegue en cada push

## 🔧 Solución de Problemas

### Error: "Build failed"
1. Revisa los logs en Vercel Dashboard
2. Verifica que todas las dependencias estén en `package.json`
3. Comprueba que las variables de entorno estén configuradas

### Error: "Function timeout"
1. Optimiza las funciones que tardan mucho
2. Considera usar Edge Functions para mejor rendimiento

### Error: "Environment variables not found"
1. Verifica que las variables estén configuradas en Vercel
2. Asegúrate de que los nombres coincidan exactamente
3. Redespliega el proyecto después de añadir variables

## 📞 Soporte

Si tienes problemas:
1. Revisa los logs en Vercel Dashboard
2. Consulta la [documentación de Vercel](https://vercel.com/docs)
3. Verifica la configuración de variables de entorno

## 🎉 ¡Listo!

Tu aplicación **Acrobata Demente** está ahora desplegada en Vercel con:
- ✅ Formularios funcionales
- ✅ Sistema de favoritos
- ✅ **Aplicación CRUD completa con Supabase**
- ✅ **Gestión de productos en tiempo real**
- ✅ **Panel de administración (/backend/login)**
- ✅ Notificaciones de Telegram
- ✅ Página de testimonios con EmailJS
- ✅ Rendimiento optimizado
- ✅ Despliegue automático

**URL de tu sitio:** Disponible en tu Vercel Dashboard