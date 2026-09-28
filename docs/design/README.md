# CYBERPUNK / TOKYO PERSONAL NODE

The latest user direction is Cyberpunk 2077 inspired. It supersedes the restrained palette in the original [SPEC](../../SPEC.md). Latin-only personal identity and mobile adaptation remain required.

## References

Generated original UI concepts, implemented as Astro, CSS and SVG:

- [Home](home-concept.png)
- [Projects and Lab](sections-concept.png)
- [About and mobile](about-mobile-concept.png)

## Reference comparison

Concepts and actual browser captures were opened with `view_image` in the same review pass.

| Element    | Reference                                     | Implementation                                                                       |
| ---------- | --------------------------------------------- | ------------------------------------------------------------------------------------ |
| Palette    | Signal yellow / black, cyan and red markers   | `#FCEE0A` hero, `#09090B` panels, `#00F0FF` signals, `#FF003C` labels                |
| Hero       | Massive two-line black identity               | KE / JINCAI on desktop; compact single line on phones                                |
| Typography | Condensed industrial display                  | Self-hosted Barlow Condensed, Rajdhani, IBM Plex Mono and subset Japanese fonts      |
| Network    | Black angular panel and cyan graph            | SVG connections, radar rings, moving packet, cut corners and hazard stripes          |
| Projects   | Yellow angular outline, large Japanese glyphs | Three original book / terminal / radar SVG icons, red node IDs and cyan destinations |
| Lab        | Outlined horizontal experiment rows           | Compact names and summaries in two secondary groups                                  |
| About      | Large yellow identity, two framed panels      | Introduction and interest panels; red rules and cyan arrows                          |
| Mobile     | Yellow hero and black compact graph           | 64px navigation, full-width action, one-column cards and accessible tap targets      |

Intentional adaptations: no game artwork or logos; generated slogans and invented tags are omitted. Actual supplied descriptions, project destinations and statuses are preserved. Fonts use available open-source families; the display is condensed rather than an exact game wordmark. The mobile graph retains the desktop network at a smaller size. Generated phone-frame chrome is omitted.

Above-the-fold copy audit: public identity remains KE JINCAI, Japanese lines are 作る。学ぶ。記録する。, role remains Software Engineer / AI / Web / Data / Photography, and the primary action remains VIEW PROJECTS. No invented biography or release history was added.

## Review

The in-app browser was inspected first. Its screenshot and viewport override disagreed, so Chrome was used through the same browser-control tool for reliable retained captures. Desktop screenshot is 1728 × 902, phone screenshot 390 × 844. DOM measurements additionally cover 320px, 768px, 1024px and 1536px widths.

The menu and network initialize immediately and on Astro navigation with duplicate-binding guards. This resolves initial-load timing in Astro's inline module scripts. Reduced motion pauses SVG animation and removes CSS movement.

See [release verification](../VERIFICATION.md) for checks. Retained [screenshots](../images/) show actual renders.

## Owner-curated portfolio hierarchy

Only Infinity New Tab, Disk Ferry and Safe Clip receive major cards on Home and Projects. The three independent websites remain. Nine other repositories are listed compactly in Lab, as six experiments and three small tools.

| Review point | Actual render                                                                              |
| ------------ | ------------------------------------------------------------------------------------------ |
| Hierarchy    | Three selected software cards; secondary work is confined to the Lab list                  |
| Palette      | Yellow cut-corner outlines, black interiors and cyan source arrows                         |
| Icons        | Six original SVG drawings with angular paths, yellow outlines, cyan signals and red breaks |
| Typography   | Condensed white featured titles; smaller names and descriptions in Lab                     |
| Mobile       | One-column selected cards and compact list rows; long names and tags wrap                  |
| Destinations | Three major software repositories, nine secondary links and three independent sites        |

The original concept images govern visual language, not the superseded example content. Generic font symbols have been replaced with authored SVG paths. Above-fold Projects copy describes only the three selected works. See [Projects](../images/projects.png), [mobile](../images/projects-mobile.png) and [Lab](../images/lab.png) for actual renders.
