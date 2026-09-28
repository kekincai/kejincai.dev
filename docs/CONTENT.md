# Content guide

## Curated GitHub projects

Edit `src/data/portfolio.ts`. The owner selected twelve public repositories in this order:

- **精选项目 (3):** Infinity New Tab, Disk Ferry, Safe Clip.
- **有趣的实验 (6):** Bookmark Cover Flow, PatternMart, TaskPaper MCP, dedup, Racket TODO, NetSpeedMonitor.
- **小工具 (3):** 印象导出器, Base R Snake, Podcasts Unfollow.

Each record contains the exact repository slug, display name, platform / technology tags and a short description. Check the current public README before changing a description. Group membership is editorial; do not infer release readiness or maintenance status from it.

Home and Projects feature only Infinity New Tab, Disk Ferry and Safe Clip as major software cards. Lab lists the remaining nine projects in two compact groups; they do not use large cards or status filters. Counts derive from the data. Cards and list rows link directly to the owner's public repositories. RSS uses these records without inventing original release dates.

## Independent websites

Edit `src/data/site.ts`. 青空しおり, PAUL.LOG and FDE RADAR are retained as independent site connections. `ONLINE` is an editorial label, not monitored uptime.

The previous assistant-selected lab entries and their detail routes have been removed. Add new repositories only when the owner selects them.

## Identity and media

Use KE JINCAI / KEJINCAI.DEV for public personal identity. Do not publish the Chinese personal name. Use original photographs if photography is added; do not invent media or activity feeds.

Featured project icons are authored in `src/components/ProjectIcon.astro`; independent site icons are in `src/components/NodeIcon.astro`. All six use original angular SVG paths in yellow, cyan and red instead of font glyphs or default icon-library assets.
