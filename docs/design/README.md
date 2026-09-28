# TOKYO AI NIGHT

The written [SPEC](../../SPEC.md), latest identity restrictions and mobile requirements govern the implementation. The image concepts are design references; all working UI is authored in Astro, CSS and TypeScript.

## Reference set

Generated with the built-in image generation tool as UI mockups:

- [Home concept](home-concept.png) — desktop first viewport, 1536 × 1024.
- [Node and lab sections](sections-concept.png) — component rhythm, 1536 × 1024.
- [About and mobile concept](about-mobile-concept.png) — coordinated two-screen reference board.

The final briefs specify near-black `#07090D`, thin rules, restrained cyan `#00E5FF`, Inter / IBM Plex Mono / Japanese sans, the exact project nodes, three experimental entries and mobile stacking. Personal identity is Latin text only. No photographs or generated city imagery are used.

## Design system

| Element      | Implementation                                                           |
| ------------ | ------------------------------------------------------------------------ |
| Canvas       | `#07090D`, a faint grid confined to the hero                             |
| Surfaces     | `#0C1017` and `#111722`                                                  |
| Rules        | `#1B2733`, 1px, sharp corners                                            |
| Primary text | `#E8EDF2`                                                                |
| Muted text   | `#9AA6B3`, raised from the spec for readability                          |
| Accent       | `#00E5FF`, links and small status dots                                   |
| Fonts        | Self-hosted Inter, IBM Plex Mono, Noto Sans JP                           |
| Content      | 1280px maximum, responsive side gutters                                  |
| Motion       | 24s node drift, 8s pulse, 200ms page fade                                |
| Mobile       | 64px header, compact hero network, single-column cards, stacked lab rows |

## Visual and interaction review

The actual render was inspected in the Codex in-app browser. The concept and render images were also opened with `view_image` in the same review pass. No Playwright browser fallback was required.

Desktop was inspected at the native home-concept size, **1536 × 1024**. Mobile was inspected at **390 × 844** and **320px** width; tablet at **768px** and **1024px**. Home, Projects, CoBRA Detail and About had document widths equal to their viewports at the three smaller widths.

| Comparison     | Concept evidence                                        | Render evidence / decision                                                                                      |
| -------------- | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Identity       | Home and About final concepts use KE JINCAI             | Chinese personal name removed from source, specification and retained references                                |
| Hierarchy      | Large Latin title, three Japanese lines, primary action | Desktop and mobile captures preserve the order; a cyan period is a deliberate identity accent                   |
| Layout         | Left hero copy / right circular graph                   | Two columns on desktop, graph below the action on mobile; maximum width follows the written spec                |
| Palette        | Near-black backdrop, quiet cyan, dark lines             | No purple, RGB, city imagery or neon glow; reference cards' lighter borders were reduced to the written palette |
| Typography     | Sans display / monospace metadata / Japanese body       | Self-hosted families with defined sizes for headings, buttons, metadata and mobile text                         |
| Node cards     | Three independent rectangular nodes                     | Titles, purpose, status and external arrows retained; complete descriptions follow the supplied spec            |
| Lab            | Horizontal ruled experiment rows                        | Same ordered entries; mobile stacks identifiers and titles; working filters have explicit empty states          |
| Motion         | Quiet network movement                                  | Slow drift, pulse and data packet; reduced motion also pauses SVG animation                                     |
| Footer / About | Concise node identity and interest list                 | No invented timeline, percentages, personal email or biography                                                  |

The above-the-fold copy was checked against the supplied content and final reference. Intentional differences: the cyan name period, small network labels, six content-derived status fields, scroll cue placed on the left for desktop. The supplemental section concept's invented HOME / NODES navigation and slogans are not implemented; the supplied PROJECTS / LAB / ABOUT labels are used consistently.

Functional review covered mobile menu expansion and close on navigation, Lab ALL / IDEA / ACTIVE / empty PROTOTYPE states, CoBRA detail, the next experiment route, and external link destinations. Publishing dates describe directory entries rather than original project releases.

The implementation preserves the requested design direction with these documented adaptations. The retained screenshots are repository preview assets, not temporary test captures. No remaining clipping or horizontal overflow was observed in the checked views.

## Performance repair

The first mobile Lighthouse run revealed full Japanese font files of about 1 MB each. Build-time subsetting now produces files of about 9 KB each from the current source corpus, preserving self-hosted typography. The accessible name override on node links was also removed so their visible content provides the accessible name.
