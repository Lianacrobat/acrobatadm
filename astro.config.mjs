// @ts-check
import { defineConfig } from 'astro/config';
import { resolve } from 'path';
import vercel from '@astrojs/vercel';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [],
  
  // Configuración para producción en Vercel
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    edgeMiddleware: false
  }),
  
  // Configuración para desarrollo
  base: '/',
  
  // Configuración del servidor de desarrollo
  server: {
    port: 4321,
    host: true
  },
  
  // Variables de entorno para Vercel
  env: {
    schema: {
      TELEGRAM_BOT_TOKEN: {
        context: 'server',
        access: 'secret',
        type: 'string'
      },
      TELEGRAM_CHAT_ID: {
        context: 'server', 
        access: 'secret',
        type: 'string'
      },
      NODE_ENV: {
        context: 'server',
        access: 'public',
        type: 'string',
        default: 'development'
      }
    }
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@images': resolve('./src/assets/images'),
        '@icons': resolve('./src/assets/icons'),
        '@testimonios': resolve('../public/assets/images/testimonios'),
        '@public': resolve('../public'),
        '@pages': resolve('./src/pages'),
        '@utils': resolve('./src/utils'),
        '@middleware': resolve('./src/middleware')
      },
    },
    css: {
      // Generar CSS independiente
      extract: true,
    },
    build: {
      // Optimizaciones para el build
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          // Generar archivos CSS separados
          assetFileNames: (assetInfo) => {
            if (assetInfo.name?.endsWith('.css')) {
              return 'assets/css/[name]-[hash][extname]';
            }
            return 'assets/[name]-[hash][extname]';
          },
          // Separar chunks para mejor seguridad y caching
          manualChunks: {
            'vendor': ['astro']
          }
        },
      },
      // Minificar para ofuscar código en producción
      minify: true // Usar minificación básica de Vite
    },
    // Configuración de desarrollo removida (movida al nivel raíz)
  },

  // Configuración de build
  build: {
    // Generar CSS independiente
    inlineStylesheets: 'never',
  },
});