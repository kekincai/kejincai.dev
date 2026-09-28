# CYBERPUNK / TOKYO PERSONAL NODE

The latest user direction is Cyberpunk 2077 inspired. It supersedes the restrained palette in the original [SPEC](../../SPEC.md). Latin-only personal identity and mobile adaptation remain required.

## References

Generated original UI concepts, implemented as Astro, CSS and SVG:

- [Home](home-concept.png)
- [Projects and Lab](sections-concept.png)
- [About and mobile](about-mobile-concept.png)

## Reference comparison

Concepts and actual browser captures were opened with `view_image` in the same review pass.

| Element    | Reference                                     | Implementation                                                                  |
| ---------- | --------------------------------------------- | ------------------------------------------------------------------------------- |
| Palette    | Signal yellow / black, cyan and red markers   | `#FCEE0A` hero, `#09090B` panels, `#00F0FF` signals, `#FF003C` labels           |
| Hero       | Massive two-line black identity               | KE / JINCAI on desktop; compact single line on phones                           |
| Typography | Condensed industrial display                  | Self-hosted Barlow Condensed, Rajdhani, IBM Plex Mono and subset Japanese fonts |
| Network    | Black angular panel and cyan graph            | SVG connections, radar rings, moving packet, cut corners and hazard stripes     |
| Projects   | Yellow angular outline, large Japanese glyphs | Three cards with 文 / 記 / 探, red node IDs and cyan destinations               |
| Lab        | Outlined horizontal experiment rows           | Yellow IDs, white titles, status filters, stacked phone rows                    |
| About      | Large yellow identity, two framed panels      | Introduction and interest panels; red rules and cyan arrows                     |
| Mobile     | Yellow hero and black compact graph           | 64px navigation, full-width action, one-column cards and 44px filter targets    |

Intentional adaptations: no game artwork or logos; generated slogans and invented tags are omitted. Actual supplied descriptions, project destinations and statuses are preserved. Fonts use available open-source families; the display is condensed rather than an exact game wordmark. The mobile graph retains the desktop network at a smaller size. Generated phone-frame chrome is omitted.

Above-the-fold copy audit: public identity remains KE JINCAI, Japanese lines are 作る。学ぶ。記録する。, role remains Software Engineer / AI / Web / Data / Photography, and the primary action remains VIEW PROJECTS. No invented biography or release history was added.

## Review

The in-app browser was inspected first. Its screenshot and viewport override disagreed, so Chrome was used through the same browser-control tool for reliable retained captures. Desktop screenshot is 1728 × 902, phone screenshot 390 × 844. DOM measurements additionally cover 320px, 768px, 1024px and 1536px widths.

The menu, category filters and network now initialize immediately and on Astro navigation with duplicate-binding guards. This resolves initial-load timing in Astro's inline module scripts. Reduced motion pauses SVG animation and removes CSS movement.

See [release verification](../VERIFICATION.md) for checks. Retained [screenshots](../images/) show actual renders.

## Owner-curated portfolio update

The owner's latest list replaces the original example lab content. Three independent websites remain. Home and Projects now show twelve repositories in groups of 3 / 6 / 3, with three selected cards receiving more visual space. Lab filters the latter two groups.

| Review point | Actual render                                                               |
| ------------ | --------------------------------------------------------------------------- |
| Hierarchy    | Three larger selected cards precede six experiments and three utilities     |
| Palette      | Yellow cut-corner outlines, black interiors, cyan source arrows             |
| Typography   | Condensed white titles and readable Chinese descriptions                    |
| Navigation   | Category anchors with explicit counts on Projects                           |
| Mobile       | One-column cards, wrapped titles and tags; no overflow at 320 / 390px       |
| Destinations | Twelve exact owner-provided GitHub URLs, plus the three retained site nodes |

Intentional adaptation from the original concept: software projects use typographic symbols and summary cards rather than invented screenshots or release labels. The reference images govern visual language; their example lab content is superseded by the owner's selection. Introductory copy explains the three actual groups. See [desktop cards](../images/sections.png), [Projects](../images/projects.png) and [mobile](../images/projects-mobile.png) for real renders.
