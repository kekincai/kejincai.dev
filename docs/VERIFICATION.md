# Release verification

Checked on **2026-09-28** against **https://kejincai.dev**.

## Production

- Cloudflare Worker: `kejincai-dev`.
- Custom domain binding is enabled; the browser opens the site over HTTPS without a certificate warning.
- Home, Projects, Lab and About return HTTP 200.
- RSS, sitemap, social image and generated font return HTTP 200 with appropriate content types.
- An unknown route returns the custom page with HTTP 404.
- Response headers include `nosniff`, frame protection, referrer policy and disabled camera/microphone/geolocation permissions.

HTTP results were checked with curl. The in-app browser checks navigation between the featured projects and the compact Lab list.

## Mobile Lighthouse

Hero redesign audit before the portfolio update, using Lighthouse's default simulated mobile settings:

| Category / metric        | Result |
| ------------------------ | ------ |
| Performance              | 97     |
| Accessibility            | 100    |
| Best practices           | 100    |
| SEO                      | 100    |
| Largest Contentful Paint | 2.2 s  |
| Cumulative Layout Shift  | 0      |

This is a lab measurement, not field data or a guarantee for every device and connection.

The initial audit found large Japanese font files. Automatic build-time subsetting reduced each font from about 1 MB to about 28 KB after adding the curated Chinese project descriptions. The full charset is regenerated from source whenever the site builds.

## Responsive and accessibility checks

- Desktop DOM checked at 1536 × 1024; retained Chrome screenshot at 1728 × 902.
- Phone: 390 × 844 and 320px width.
- Tablet: 768px and 1024px widths.
- Home, Projects, Lab and About showed no horizontal document overflow at the three smaller widths.
- Mobile menu expands, closes on navigation, and supports Escape.
- Lab shows 6 experiments and 3 small tools as compact list rows.
- Reduced motion disables CSS drift, hides the packet, switches scrolling to `auto`, and pauses SVG animations.
- Public identity uses Latin text only.

See the [design review](design/README.md) for reference-to-render comparisons and documented adaptations. The in-app browser was inspected first; its viewport capture was clipped, so retained screenshots were captured through Chrome using the same browser-control tool.

## Build checks

`npm run format:check`, `npm run check`, `npm run build` and GitHub CI pass. The type checker reports zero errors, warnings and hints. The public repository includes no local credentials, absolute workspace paths or generated font build artifacts.

Photography and external activity aggregation remain the next phase, as specified. No fabricated media, feed items or biography were added.

## Curated portfolio release

- Exact software membership: 12 owner-provided repositories, grouped 3 / 6 / 3. All public READMEs were checked live before writing summaries.
- Three independent site nodes remain visible on Home and Projects.
- Previous example lab detail routes are removed from the build and sitemap.
- RSS has twelve project items with GitHub destinations and no invented publication dates.
- Home, Projects and Lab DOM widths match 320px, 390px, 768px and 1024px viewports.
- Home and Projects have three major software cards; Lab has nine compact rows split into two groups.

Project-directory Lighthouse accessibility audit: **100**, with no failing accessibility audits.
