<div align="center">

![KEJINCAI.DEV — Personal AI Lab](docs/images/banner.webp)

# KEJINCAI.DEV

**A personal AI node, running in Tokyo.**

作る。学ぶ。記録する。  
Build. Learn. Keep a record.

[![CI](https://github.com/kekincai/kejincai.dev/actions/workflows/ci.yml/badge.svg)](https://github.com/kekincai/kejincai.dev/actions/workflows/ci.yml)
[![Astro](https://img.shields.io/badge/Astro-7-111722?style=flat-square&logo=astro&logoColor=E8EDF2)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-111722?style=flat-square&logo=typescript&logoColor=00E5FF)](https://www.typescriptlang.org)
[![MIT](https://img.shields.io/badge/License-MIT-111722?style=flat-square&labelColor=111722&color=00E5FF)](LICENSE)

[Website](https://kejincai.dev) · [Design spec](SPEC.md) · [Content guide](docs/CONTENT.md) · [Deployment](docs/DEPLOYMENT.md) · [Contributing](CONTRIBUTING.md)

</div>

---

## The idea

A home for software projects, AI experiments, language study and digital memories. Each independent project is a node; the root site connects them. Smaller tools and unfinished ideas live in the lab.

**TOKYO AI NIGHT** brings together near-black space, Japanese typography, quiet cyan signals and a slowly moving node network. Cyberpunk is atmosphere, not decoration.

这是一个个人开发、AI 实验与学习记录的统一入口。用克制的东京夜色、日英混排和工程系统语言，连接独立项目与尚在探索中的想法。

## Preview

Actual browser captures of the implementation, not design mockups.

![Desktop home page](docs/images/desktop.png)

<details>
<summary>Mobile preview · 390px</summary>
<br />
<img src="docs/images/mobile.png" width="390" alt="Mobile home page with compact navigation, Japanese typography and node visualization" />
</details>

<details>
<summary>Connected nodes & experimental lab</summary>
<br />
<img src="docs/images/sections.png" width="100%" alt="Three independent project nodes and the experimental lab list" />
</details>

## Connected worlds

| Node                           | Focus                         | Destination                                        |
| ------------------------------ | ----------------------------- | -------------------------------------------------- |
| **青空しおり / AOZORA SHIORI** | Language & literature         | [aozora.kejincai.dev](https://aozora.kejincai.dev) |
| **PAUL.LOG**                   | AI, code & notes              | [blog.kejincai.dev](https://blog.kejincai.dev)     |
| **FDE RADAR**                  | AI & engineering intelligence | [fde.kejincai.dev](https://fde.kejincai.dev)       |

The root site introduces these projects without duplicating their content.

## What's included

- **Home** — personal node, system summary, project connections and lab index.
- **Projects** — three independent destinations.
- **Lab** — typed Markdown entries, status filters, empty states and detail pages.
- **About** — interests and a concise personal introduction.
- **404** — a disconnected node, with a route back home.
- **RSS + sitemap** — generated at build time.
- **Responsive layouts** — phone navigation, single-column cards and compact lab rows.
- **Accessible motion** — reduced motion pauses the node network and removes page animations.

CoBRA links to an existing public project. Photo GPS Explorer and Subtitle AI are explicitly labeled **IDEA**. No invented releases, activity feed or photography is included.

## Run locally

Requires **Node.js 22.12+**; CI uses Node.js 24.

```sh
git clone https://github.com/kekincai/kejincai.dev.git
cd kejincai.dev
npm ci
npm run dev
```

Open **http://localhost:4321**.

| Command                | Purpose                             |
| ---------------------- | ----------------------------------- |
| `npm run dev`          | Start the development server        |
| `npm run check`        | Validate Astro and TypeScript       |
| `npm run build`        | Generate the static site in `dist/` |
| `npm run preview`      | Serve the production build locally  |
| `npm run format`       | Format source and documentation     |
| `npm run format:check` | Check formatting in CI              |

## Built with

**Astro 7 · TypeScript · Tailwind CSS 4 · Markdown content collections**

Static HTML first. A small amount of vanilla TypeScript handles navigation, filters and pointer response. Astro's client router provides quiet 200ms transitions. No React runtime, analytics or external font service is required.

Fonts are hosted with the site: Inter, IBM Plex Mono and Noto Sans JP. Japanese fonts are subset from the current source content before development and production builds.

```text
src/
├── components/       Header, hero, node network, cards and lab rows
├── content/lab/      Markdown experiments
├── content.config.ts Typed content schema
├── data/site.ts      Identity and independent nodes
├── layouts/          Shared metadata and page shell
├── pages/            Home, projects, lab, about, 404 and RSS
└── styles/           Design tokens and responsive rules
public/               Favicon, social image and Cloudflare Pages headers
docs/                 Design references, previews and publishing guides
```

## Publish

**Production: [kejincai.dev](https://kejincai.dev)** · Cloudflare Workers static assets.

Run `npm run deploy` to build and publish with the versioned custom-domain route. The canonical domain is `https://kejincai.dev`.

See [Deployment](docs/DEPLOYMENT.md) for both paths. GitHub CI checks formatting, types and the production build; it does not deploy the domain automatically.

## Roadmap

- [x] Home, Projects, Lab, About and 404
- [x] Responsive navigation and content layouts
- [x] Markdown experiments, filters, RSS and SEO
- [x] Reduced motion and self-hosted fonts
- [ ] Photography with original images and responsive AVIF/WebP
- [ ] Build-time aggregation of verified RSS / JSON feeds
- [x] Cloudflare deployment and custom domain
- [ ] Field performance verification

## License

Code is available under the [MIT License](LICENSE). The site identity and any future personal photographs are not a generic asset library; replace them when adapting the project.

---

<div align="center">

`TOKYO NODE / KEEP BUILDING`  
**EOF _**

</div>
