# Contributing

Small, focused improvements are welcome. Open an issue for larger changes before starting a rewrite.

## Local workflow

```sh
npm ci
npm run dev
```

Before opening a pull request:

```sh
npm run format
npm run check
npm run build
```

For interface changes, check desktop and a narrow phone viewport. Test keyboard access and `prefers-reduced-motion`. Include a screenshot in the pull request.

## Design rules

- Follow [SPEC.md](SPEC.md) and [the design notes](docs/design/README.md).
- Keep the Tokyo atmosphere quiet: dark space, Japanese typography, thin rules, restrained cyan.
- Keep navigation and content useful without JavaScript.
- Add content through the lab collection; use accurate statuses and dates.
- Never invent activity, metrics, photographs, releases, or biography.
- Public identity uses **KE JINCAI** or **KEJINCAI.DEV** only.
- Keep photographs and personal data out of contributions unless you have permission to publish them.

## Scope

Photography and cross-domain RSS aggregation are planned for a later phase. Keep the initial version focused and lightweight.
