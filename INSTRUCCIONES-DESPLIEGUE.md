# 🚀 INSTRUCCIONES RÁPIDAS - SUBIR A LA WEB

## ⚡ Script Automático (RECOMENDADO)

### Windows PowerShell
```bash
# Ejecutar script de configuración inicial
.\init-github.ps1
```

## 📋 Opción 2: Manual

### 1. Crear Repositorio en GitHub
- Ve a: https://github.com/new
- Nombre: `AdmApp`
- Descripción: `Acrobata Demente - Tienda de productos acrobáticos`
- **Público**
- **NO** marcar "Add a README file"

### 2. Subir Código
```bash
git init
git add .
git commit -m "feat: proyecto completo con mejoras de seguridad"
git branch -M main
git remote add origin https://github.com/lianacrobata/AdmApp.git
git push -u origin main
```

### 3. Configurar GitHub Pages
1. Ve a tu repositorio: `https://github.com/lianacrobata/AdmApp`
2. `Settings` → `Pages`
3. **Source**: `GitHub Actions`

### 4. Configurar Secrets (CRÍTICO)
1. `Settings` → `Secrets and variables` → `Actions`
2. Añadir secrets:
   ```
   TELEGRAM_BOT_TOKEN: [tu_nuevo_token]
   TELEGRAM_CHAT_ID: [tu_chat_id]
   ```

## 🌐 URL Final
```
https://lianacrobata.github.io/AdmApp/
```

## ⚠️ IMPORTANTE ANTES DEL DESPLIEGUE

### 🔑 Regenerar Token de Telegram
1. Ve a @BotFather en Telegram
2. `/revoke` para revocar el token actual
3. `/newtoken` para generar uno nuevo
4. Guarda el nuevo token para los secrets

### 📁 Archivos Creados para Despliegue
- ✅ `.github/workflows/deploy.yml` - Workflow automático
- ✅ `astro.config.mjs` - Configurado para GitHub Pages
- ✅ `DEPLOY.md` - Guía completa
- ✅ `init-github.bat` - Script Windows
- ✅ `init-github.ps1` - Script PowerShell

### 🔒 Seguridad Implementada
- ✅ Variables de entorno protegidas
- ✅ Headers de seguridad HTTP
- ✅ Content Security Policy (CSP)
- ✅ Sanitización de entrada
- ✅ Cifrado de datos locales
- ✅ Manejo seguro de errores

## 🚨 Checklist Final

- [ ] **Repositorio creado en GitHub**
- [ ] **Código subido con git push**
- [ ] **GitHub Pages configurado (Source: GitHub Actions)**
- [ ] **Secrets configurados (TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID)**
- [ ] **Token de Telegram regenerado**
- [ ] **Workflow ejecutándose sin errores**

## 🔧 Verificación

### Estado del Workflow
1. Ve a la pestaña `Actions` en tu repositorio
2. Verifica que el workflow "Deploy to GitHub Pages" esté en verde
3. Si hay errores, revisa los logs

### Probar el Sitio
1. Espera 5-10 minutos después del primer despliegue
2. Ve a: `https://lianacrobata.github.io/AdmApp/`
3. Verifica que todas las páginas funcionen
4. Prueba el formulario de contacto

## 📞 Soporte

Si tienes problemas:
1. Revisa `DEPLOY.md` para solución de problemas
2. Verifica los logs en GitHub Actions
3. Asegúrate de que los secrets estén configurados correctamente

---

## 🔄 Actualizaciones Futuras

**Para actualizaciones posteriores del proyecto**, consulta:
📖 **GUIA-ACTUALIZACIONES.md** - Proceso unificado para GitHub y Vercel

---

## 🎉 ¡Listo!

Una vez completados estos pasos, tu tienda **Acrobata Demente** estará disponible en la web con todas las funcionalidades y medidas de seguridad implementadas.

**URL de tu sitio**: https://lianacrobata.github.io/AdmApp/