# Cloudflare deployment

The production target is **https://kejincai.dev**, served by the `kejincai-dev` Cloudflare Worker with static assets. The canonical domain and custom-domain route are versioned in this repository.

## Deploy from this checkout

```sh
npm ci
npx wrangler whoami
npm run deploy
```

If not already authenticated, use `npx wrangler login` with your own Cloudflare account. `npm run deploy` generates compact Japanese fonts, builds the site, and uploads `dist/` with Wrangler.

The root custom domain is configured in `wrangler.jsonc`. Changing that route changes where the site is published. No account IDs, tokens or credentials are committed to this repository.

## Configuration

| Setting        | Value                       |
| -------------- | --------------------------- |
| Worker         | `kejincai-dev`              |
| Domain         | `kejincai.dev`              |
| Assets         | `dist/`                     |
| Unknown routes | Custom `404.html`, HTTP 404 |
| Node.js        | 24 recommended              |

`public/_headers` configures response headers for static assets. Hashed Astro assets use a one-year immutable cache; generated fonts use the default revalidation behavior so content changes can safely add new glyphs.

References: [Cloudflare static assets](https://developers.cloudflare.com/workers/static-assets/), [custom headers](https://developers.cloudflare.com/workers/static-assets/headers/), [custom domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/).

## GitHub checks

CI checks formatting, types and the production build. Deployment is explicit with `npm run deploy`; CI does not store credentials or automatically deploy.

## Cloudflare Pages alternative

For a separate Pages deployment, use production branch `main`, Node.js 24, build command `npm run build`, and output directory `dist`. Add its custom domain in the Pages dashboard after the first successful deployment. Avoid assigning the same domain to two deployments.

## Verify after deployment

Check Home, mobile navigation, the Lab filter and detail route, `/rss.xml`, `/sitemap-index.xml`, `/og.png`, and an unknown route. Confirm canonical links use `https://kejincai.dev` and the site has a valid TLS certificate.
