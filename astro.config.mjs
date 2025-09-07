// @ts-check
import { defineConfig } from 'astro/config';
import { resolve } from 'path';
import vercel from '@astrojs/vercel';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  
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
  },

  // Configuración de build
  build: {
    inlineStylesheets: 'auto',
  },
});