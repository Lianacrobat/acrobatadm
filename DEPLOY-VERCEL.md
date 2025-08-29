# Deploy en Vercel - AdmApp

## Configuración del Proyecto

Este proyecto está configurado para desplegarse automáticamente en Vercel con las siguientes características:

### Archivos de Configuración

- **vercel.json**: Configuración específica de Vercel
- **astro.config.mjs**: Configurado con el adaptador de Vercel
- **package.json**: Scripts de build optimizados

### Configuración Actual

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "astro"
}
```

## Pasos para Deploy

### 1. Preparación del Repositorio

```bash
# Asegúrate de que todos los cambios estén commitados
git add .
git commit -m "Preparar para deploy en Vercel"
git push origin main
```

### 2. Deploy en Vercel

#### Opción A: Desde la Web de Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Inicia sesión con tu cuenta
3. Haz clic en "New Project"
4. Importa tu repositorio de GitHub
5. Vercel detectará automáticamente que es un proyecto Astro
6. Haz clic en "Deploy"

#### Opción B: Usando Vercel CLI
```bash
# Instalar Vercel CLI globalmente
npm i -g vercel

# Login en Vercel
vercel login

# Deploy desde la raíz del proyecto
vercel

# Para deploy de producción
vercel --prod
```

### 3. Configuración de Variables de Entorno (si es necesario)

Si tu proyecto requiere variables de entorno:

1. En el dashboard de Vercel, ve a tu proyecto
2. Ve a Settings > Environment Variables
3. Agrega las variables necesarias

### 4. Configuración de Dominio Personalizado (opcional)

1. En el dashboard de Vercel, ve a tu proyecto
2. Ve a Settings > Domains
3. Agrega tu dominio personalizado

## Características del Deploy

- ✅ **Build automático**: Se ejecuta `npm run build` automáticamente
- ✅ **Optimización**: Minificación y optimización de assets
- ✅ **CDN Global**: Distribución mundial automática
- ✅ **HTTPS**: Certificado SSL automático
- ✅ **Analytics**: Vercel Web Analytics habilitado
- ✅ **Deploy Previews**: Cada push genera un preview

## URLs del Proyecto

- **Desarrollo Local**: http://localhost:4321
- **Producción**: Se asignará automáticamente al hacer deploy
- **Preview**: Se genera automáticamente para cada branch

## Troubleshooting

### Error de Build
Si el build falla:
1. Verifica que `npm run build` funcione localmente
2. Revisa los logs en el dashboard de Vercel
3. Asegúrate de que todas las dependencias estén en `package.json`

### Error de Rutas
Si las rutas no funcionan:
1. Verifica que `output: 'static'` esté configurado en `astro.config.mjs`
2. Asegúrate de que todas las rutas sean relativas

### Performance
Para optimizar el rendimiento:
1. El proyecto ya incluye minificación automática
2. Las imágenes se optimizan automáticamente
3. El CSS se extrae y minifica

## Comandos Útiles

```bash
# Build local para testing
npm run build

# Preview del build
npm run preview

# Deploy a Vercel
vercel

# Deploy de producción
vercel --prod

# Ver logs de deploy
vercel logs [deployment-url]
```

## Notas Importantes

- El proyecto está configurado como **static site**
- No requiere servidor Node.js en producción
- Todas las funcionalidades del blog funcionan del lado del cliente
- La lista de lectura se guarda en localStorage del navegador

---

**¡Tu proyecto está listo para deploy en Vercel!** 🚀