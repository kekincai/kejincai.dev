import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kejincai.dev',
  output: 'static',
  // One small stylesheet; inlining it removes the render-blocking request.
  build: { inlineStylesheets: 'always' },
  integrations: [sitemap()],
  // Astro hashes every page script and style into a CSP <meta>. The only
  // third-party origin is the Cloudflare Web Analytics beacon, which
  // Cloudflare injects at the edge and which reports back to its own host.
  security: {
    csp: {
      scriptDirective: {
        resources: ["'self'", 'https://static.cloudflareinsights.com'],
      },
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self' https://cloudflareinsights.com",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
      ],
    },
  },
  vite: { plugins: [tailwindcss()] },
});
