import type { APIRoute } from 'astro';
import { products } from '../data/products';

const SITE_URL = 'https://acrobatademente.com';

// Páginas estáticas del sitio
const staticPages = [
  '',
  'blog',
  'catalogo',
  'comunidad',
  'entrenamiento',
  'favoritos',
  'nutricion',
  'primeros-pasos',
  'tienda',
  'Variantes/Blog',
  'Variantes/lista-lectura',
  'Variantes/trampolin-guia-completa'
];

// Función para formatear fecha en formato ISO
function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

// Función para generar el XML del sitemap
function generateSitemap(): string {
  const today = formatDate(new Date());
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;
  
  // Agregar páginas estáticas
  staticPages.forEach(page => {
    const url = page === '' ? SITE_URL : `${SITE_URL}/${page}`;
    const priority = page === '' ? '1.0' : '0.8';
    const changefreq = page === '' ? 'weekly' : 'monthly';
    
    xml += `  <url>
`;
    xml += `    <loc>${url}</loc>
`;
    xml += `    <lastmod>${today}</lastmod>
`;
    xml += `    <changefreq>${changefreq}</changefreq>
`;
    xml += `    <priority>${priority}</priority>
`;
    xml += `  </url>
`;
  });
  
  // Agregar páginas de productos dinámicas
  products.forEach(product => {
    xml += `  <url>
`;
    xml += `    <loc>${SITE_URL}/producto/${product.slug}</loc>
`;
    xml += `    <lastmod>${today}</lastmod>
`;
    xml += `    <changefreq>weekly</changefreq>
`;
    xml += `    <priority>0.7</priority>
`;
    xml += `  </url>
`;
  });
  
  xml += `</urlset>`;
  
  return xml;
}

export const GET: APIRoute = () => {
  const sitemap = generateSitemap();
  
  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600', // Cache por 1 hora
    },
  });
};