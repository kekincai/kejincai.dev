# Release verification

Checked on **2026-09-29** against **https://kejincai.dev** after the cyberpunk.net alignment, the About and Lab redesigns and the header hardening.

## Production

- Cloudflare Worker `kejincai-dev` on the custom domain only; the `workers.dev` alias returns 404.
- `http://` requests receive a 301 to the same `https://` URL, path and query preserved (`worker/index.js`).
- TLS 1.3, certificate issued by Google Trust Services, valid to 2026-12-27.
- Home, Projects, Lab and About return 200; RSS, sitemap, `og.png` and the portrait return 200; an unknown route returns the custom 404; `/about` redirects to `/about/`.
- Responses carry `Strict-Transport-Security`, `nosniff`, `X-Frame-Options: DENY`, referrer policy and permissions policy; `/_astro/*` is cached for a year as immutable.
- Every page carries an Astro-generated Content-Security-Policy. Browsing all four pages, including client-side navigation between them, logs no CSP violations; Cloudflare Web Analytics loads.

## Lighthouse (lab data)

Lighthouse CLI against production, headless Chrome, default simulated throttling. Mobile figures for Home, Projects and About are the median of three runs (Lab is a single run); a single run right after a deploy read up to 12 points lower before the edge was warm.

| Page     | Mobile perf | Mobile LCP | Desktop perf | Accessibility | Best practices | SEO | CLS   |
| -------- | ----------- | ---------- | ------------ | ------------- | -------------- | --- | ----- |
| Home     | 97          | 2.3 s      | 100          | 100           | 100            | 100 | 0     |
| Projects | 99          | 1.7 s      | 100          | 100           | 100            | 100 | 0     |
| Lab      | 97          | 2.2 s      | 100          | 100           | 100            | 100 | 0     |
| About    | 98          | 2.1 s      | 100          | 100           | 100            | 100 | 0.022 |

Changes made from the first audit of this release: stylesheets are inlined (`build.inlineStylesheets: 'always'`), removing a render-blocking request of about 1 s on mobile; the Barlow Condensed headline weights are preloaded, which removed a 0.088 layout shift on Projects; Home preloads the portrait at high priority; the directive HUD tags use a darker red that passes contrast on yellow, lifting Home accessibility from 96 to 100. The remaining Lighthouse notes concern Cloudflare's injected analytics beacon (legacy JavaScript, short cache), which the site does not control.

An unthrottled Chrome run against production paints first content at 0.11–0.14 s. Transferred weight is about 350 KB per page, led by the 93 KB portrait and two 51 KB subset Japanese fonts; compressed HTML with inlined CSS is about 20 KB.

## Field data

Not available yet. The PageSpeed Insights API has no keyless quota, and a new personal site is unlikely to meet the Chrome UX Report traffic threshold for field Core Web Vitals. Real-user LCP, INP and CLS are collected by Cloudflare Web Analytics (its beacon is allowed by the CSP) and can be read in the Cloudflare dashboard under Web Analytics → Core Web Vitals once visits accumulate. Record those figures here when they exist.

## Responsive and accessibility checks

- Home, Projects, Lab and About at 320, 375, 390 and 430 px: no horizontal overflow.
- Real Safari (iOS Simulator, iPhone 17): the Connected Nodes highlight tile stays within the viewport and the layout returns aligned after pinch zoom. Mobile Safari needs `text-size-adjust: 100%` and no `aspect-ratio` combined with `min-height`.
- Phones show only the logo in the header; navigation goes through in-page actions and the footer link row.
- Reduced motion stops the radar drift, the Lab ticker, the directive glitch and the dossier scan line.
- Public identity uses Latin text only.

## Build checks

`npm run format:check`, `npm run check` (zero errors, warnings and hints), `npm run build` and GitHub CI pass. CI actions are pinned to release commit SHAs. `npm audit --omit=dev` reports no vulnerabilities; the three moderate advisories are in Wrangler's local emulator and are not reachable from the deployed site.

## Content

- Twelve owner-selected repositories: three selected systems with posters and dossiers, six experiments and three utilities as Lab cards.
- Dossier facts come from each repository's README and release tags; star counts are deliberately omitted.
- Three independent site nodes appear on Projects. `ONLINE` is editorial, not monitored.
- RSS has twelve project items with GitHub destinations and no invented publication dates.
