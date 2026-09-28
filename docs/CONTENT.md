# Content guide

## Project nodes

Edit `src/data/site.ts`. The three project links are independent destinations. `ONLINE` is an editorial label, not a monitored uptime measurement.

## Lab entries

Create `src/content/lab/my-experiment.md`:

```yaml
---
title: My Experiment
number: EXP-004
description: A concise, factual description.
status: idea
tags: [Data, Tools]
created: 2026-09-28
updated: 2026-09-28
# url: https://example.com
# github: https://github.com/your-account/your-project
---
```

Write the page content below the frontmatter. The filename becomes `/lab/my-experiment/`. The schema in `src/content.config.ts` validates statuses, identifiers, dates and optional URLs during the build.

| Status      | Meaning                              |
| ----------- | ------------------------------------ |
| `idea`      | Proposed; no working release implied |
| `prototype` | An early implementation              |
| `active`    | An available, maintained experiment  |
| `archived`  | Kept for reference                   |

The home-page counts and update date are derived from this collection and the node data. The RSS feed is generated from the lab collection, not from external subdomains.

Use entry dates for this directory. Do not infer a project's original release date from the date you add it here.

## Later phases

Photography must use the owner's real photographs, responsive AVIF/WebP images, and deliberate metadata privacy. No stock or generated city imagery is included in the initial site.

External signals need verified RSS or JSON feeds and build-time fetching. Do not publish invented recent activity or silently treat fetch failures as an empty feed.
