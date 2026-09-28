# Release verification

Checked on **2026-09-28** against **https://kejincai.dev**.

## Production

- Cloudflare Worker: `kejincai-dev`.
- Custom domain binding is enabled; the browser opens the site over HTTPS without a certificate warning.
- Home, Projects, Lab, all three Lab details and About return HTTP 200.
- RSS, sitemap, social image and generated font return HTTP 200 with appropriate content types.
- An unknown route returns the custom page with HTTP 404.
- Response headers include `nosniff`, frame protection, referrer policy and disabled camera/microphone/geolocation permissions.

HTTP results were checked with curl. The in-app browser confirmed the actual Home → Lab → ACTIVE filter → CoBRA Detail workflow.

## Mobile Lighthouse

Redesigned local build audit using Lighthouse's default simulated mobile settings:

| Category / metric        | Result |
| ------------------------ | ------ |
| Performance              | 97     |
| Accessibility            | 100    |
| Best practices           | 100    |
| SEO                      | 100    |
| Largest Contentful Paint | 2.2 s  |
| Cumulative Layout Shift  | 0      |

This is a lab measurement, not field data or a guarantee for every device and connection.

The initial audit found large Japanese font files. Automatic build-time subsetting reduced each font from about 1 MB to about 9 KB. The full charset is regenerated from source whenever the site builds.

## Responsive and accessibility checks

- Desktop DOM checked at 1536 × 1024; retained Chrome screenshot at 1728 × 902.
- Phone: 390 × 844 and 320px width.
- Tablet: 768px and 1024px widths.
- Home, Projects, CoBRA Detail and About showed no horizontal document overflow at the three smaller widths.
- Mobile menu expands, closes on navigation, and supports Escape.
- Lab filters switch entries and show a clear empty state.
- Reduced motion disables CSS drift, hides the packet, switches scrolling to `auto`, and pauses SVG animations.
- Public identity uses Latin text only.

See the [design review](design/README.md) for reference-to-render comparisons and documented adaptations. The in-app browser was inspected first; its viewport capture was clipped, so retained screenshots were captured through Chrome using the same browser-control tool.

## Build checks

`npm run format:check`, `npm run check`, `npm run build` and GitHub CI pass. The type checker reports zero errors, warnings and hints. The public repository includes no local credentials, absolute workspace paths or generated font build artifacts.

Photography and external activity aggregation remain the next phase, as specified. No fabricated media, feed items or biography were added.
