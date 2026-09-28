# Deploy to Cloudflare

The site is statically generated. No server adapter, database, or API key is required to build it.

## Cloudflare Pages

Connect this GitHub repository to a Pages project using these settings:

| Setting           | Value           |
| ----------------- | --------------- |
| Production branch | `main`          |
| Build command     | `npm run build` |
| Output directory  | `dist`          |
| Node.js           | `24`            |

After the first successful deployment, add `kejincai.dev` as a custom domain in Cloudflare. Keep `site` in `astro.config.mjs` aligned with the canonical production URL.

Pages reads `public/_headers` from the generated output, and uses `404.html` for unknown routes.

## Cloudflare Workers static assets

Alternatively, the included `wrangler.jsonc` defines a static-assets Worker:

```sh
npm run build
npx wrangler deploy
```

Authenticate with your own Cloudflare account when prompted. Configure the custom domain in Cloudflare after deployment. The `_headers` file is a Pages feature; a Workers deployment needs equivalent header configuration if desired.

## Verify after deployment

Check the home page, mobile menu, lab filter and detail route, `/rss.xml`, `/sitemap-index.xml`, `/og.png`, and an unknown route. Verify canonical links use your production domain.

This repository's CI builds and validates the site. It does not deploy or store Cloudflare credentials.

Reference: [Astro deployment documentation](https://docs.astro.build/en/guides/deploy/).
