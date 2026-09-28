# Content guide

## Curated GitHub projects

Edit `src/data/portfolio.ts`. The owner selected twelve public repositories in this order:

- **精选项目 (3):** Infinity New Tab, Disk Ferry, Safe Clip.
- **有趣的实验 (6):** Bookmark Cover Flow, PatternMart, TaskPaper MCP, dedup, Racket TODO, NetSpeedMonitor.
- **小工具 (3):** 印象导出器, Base R Snake, Podcasts Unfollow.

Each record contains the exact repository slug, display name, platform / technology tags and a short description. Check the current public README before changing a description. Group membership is editorial; do not infer release readiness or maintenance status from it.

Home and Projects feature only Infinity New Tab, Disk Ferry and Safe Clip. Both pages show them as a yellow poster module modelled on the cyberpunk.net product row (`src/components/ProjectPosters.astro`, with `SkylineEdge.astro` section edges); each poster links to its full-width system dossier on Projects (`src/components/ProjectDossier.astro`, anchored by repository slug). Their extra fields — `system`, `metric`, `log`, `specs` and `release` — must be concrete facts from the README or release tags (versions, parameters, guarantees), never stars, download counts or invented status. Lab lists the remaining nine projects in two compact groups; they do not use large cards or status filters. Counts derive from the data. Cards and list rows link directly to the owner's public repositories. RSS uses these records without inventing original release dates.

## Independent websites

Edit `src/data/site.ts`. 青空しおり, PAUL.LOG and FDE RADAR are retained as independent site connections. `ONLINE` is an editorial label, not monitored uptime.

Home and Projects render these three sites as a cyberpunk.net-style news module (`src/components/NodeBoard.astro`): node 01 is the cyan highlight tile, the others are `NODE_` tiles. Below it, `LabChannel.astro` shows the Lab count and a ticker of the nine Lab entries; Home closes with the yellow `AboutUplink.astro` module (skyline edges, mailto uplink) before the centered footer.

The previous assistant-selected lab entries and their detail routes have been removed. Add new repositories only when the owner selects them.

## Identity and media

Use KE JINCAI / KEJINCAI.DEV for public personal identity. Do not publish the Chinese personal name. Use original photographs if photography is added; do not invent media or activity feeds.

The owner-supplied cyber portrait fills the home radar at full size (`public/images/portrait.webp`, 1000 × 914, embedded in `src/components/NodeNetwork.astro`) with the node network drawn over it. The owner chose to keep the complete image, including its Cyberpunk 2077 wordmark; the root-node reticle is positioned on the cybernetic eye (`337, 240` in the 600-unit radar).

Featured project icons are authored in `src/components/ProjectIcon.astro`; independent site icons are in `src/components/NodeIcon.astro`. All six use original angular SVG paths in yellow, cyan and red instead of font glyphs or default icon-library assets.

## Language and voice

Public UI, project descriptions, metadata and RSS use English and Japanese. Copy uses short operational labels (BOOT, PAYLOAD, UPLINK, SIGNAL) paired with concrete Japanese descriptions. Chinese is reserved for internal specifications, never the public interface.
