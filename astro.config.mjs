// @ts-check
import { defineConfig } from 'astro/config';
import { resolve } from 'path';

import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [],
  
  // Para GitHub Pages: usar 'static' en lugar de 'server'
  output: 'static', // Cambiar a 'static' para GitHub Pages
  
  // Comentar el adapter para build estático
  // adapter: node({
  //   mode: 'standalone'
  // }),

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@images': resolve('./src/assets/images'),
        '@icons': resolve('./src/assets/icons'),
        '@testimonios': resolve('../public/assets/images/testimonios'),
        '@public': resolve('../public'),
        '@pages': resolve('./src/pages'),
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
        },
      },
    },
  },

  // Configuración de build
  build: {
    // Generar CSS independiente
    inlineStylesheets: 'never',
  },
});