import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { brand, contact, seo, faq } from './src/content/site.js'

/**
 * Small build plugin so the brand name, SEO tags, JSON-LD schema,
 * sitemap.xml and robots.txt all come from src/content/site.js.
 * Change the content file -> rebuild -> everything updates.
 */
function siteMeta() {
  const url = brand.siteUrl.replace(/\/$/, '')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': `${url}/#business`,
        name: brand.name,
        description: seo.home.description,
        url,
        image: `${url}/og-image.png`,
        logo: `${url}/favicon.svg`,
        telephone: `+${contact.whatsappNumber}`,
        email: contact.email,
        founder: { '@type': 'Person', name: contact.founder },
        address: {
          '@type': 'PostalAddress',
          addressLocality: contact.city,
          addressRegion: contact.region,
          addressCountry: contact.country,
        },
        areaServed: contact.serviceAreas.map((c) => ({ '@type': 'City', name: c })),
        priceRange: '₹14,999–₹19,999',
        knowsAbout: ['Doctor website design', 'Clinic website design', 'Google Business Profile set-up'],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.items.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  }

  const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

  return {
    name: 'site-meta',
    transformIndexHtml(html) {
      return html
        .replaceAll('%BRAND%', esc(brand.name))
        .replaceAll('%TITLE%', esc(seo.home.title))
        .replaceAll('%DESCRIPTION%', esc(seo.home.description))
        .replaceAll('%URL%', url)
        .replace('%JSONLD%', JSON.stringify(jsonLd).replace(/</g, '\\u003c'))
    },
    generateBundle() {
      const today = new Date().toISOString().slice(0, 10)
      const pages = [
        { loc: `${url}/`, priority: '1.0' },
        { loc: `${url}/privacy`, priority: '0.3' },
        { loc: `${url}/terms`, priority: '0.3' },
      ]
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source:
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
          pages
            .map((p) => `  <url><loc>${p.loc}</loc><lastmod>${today}</lastmod><priority>${p.priority}</priority></url>`)
            .join('\n') +
          `\n</urlset>\n`,
      })
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${url}/sitemap.xml\n`,
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), siteMeta()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: { motion: ['framer-motion'], react: ['react', 'react-dom', 'react-router-dom'] },
      },
    },
  },
})
