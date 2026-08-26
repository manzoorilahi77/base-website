# Themes

All 50 palette + typography combos available to this template, transcribed from the
reference style library. Pick one, put its id in `site.config.ts`, and the entire
site re-themes - colours and both fonts - with no other edit anywhere.

```ts
// site.config.ts
themeId: 'C39',   // <- this line, and only this line
```

The default is **C39 Brick & Linen**. 40 combos are light and 10 are dark
(C4, C9, C11, C12, C13, C14, C17, C19, C20, C48).

Hex values live in `src/themes/library.ts` and are the only raw colours in the repo.
`/style-guide` renders the active combo's seven roles with their values.

## Typography directions

| ID  | Name                 | Fonts in use                  | Character                                     |
| --- | -------------------- | ----------------------------- | --------------------------------------------- |
| T1  | Neo-Grotesque        | Inter or Neue Haas Grotesk    | neutral Swiss sans, hierarchy from size alone |
| T2  | Humanist Warm        | Nunito Sans or Figtree        | friendly humanist sans, less clinical         |
| T3  | Editorial Serif+Sans | Source Serif 4 + Inter        | serif display over quiet sans body            |
| T4  | Bookish Serif        | Bitter or Source Serif 4      | serif throughout, reading-first               |
| T5  | Geometric Display    | Jost + DM Sans                | circular caps for headlines, plain sans body  |
| T6  | Old-Style Refined    | Libre Caslon + Source Sans 3  | classical high-trust serif display            |
| T7  | Mono-Forward         | IBM Plex Sans + IBM Plex Mono | sans prose; numbers, labels, data in mono     |
| T8  | Soft Rounded         | Nunito or Quicksand           | rounded terminals, encouraging tone           |
| T9  | Didone Display       | Bodoni Moda + Inter           | high-contrast fashion serif display           |
| T10 | Typewriter Slab      | Zilla Slab + Source Sans 3    | slab display, sans body                       |

Where the reference lists two families with "or", the first is used for both display
and body. Neue Haas Grotesk (T1) is not on Google Fonts, so T1 falls back to its
listed alternative, Inter.

## Combos

### Finance & professional (C1-C10)

| ID  | Name            | Mode        | Accent    | Type                    | Best for                               |
| --- | --------------- | ----------- | --------- | ----------------------- | -------------------------------------- |
| C1  | Banker's Indigo | light       | `#3A56C8` | T1 Neo-Grotesque        | payments and billing dashboards        |
| C2  | Private Vault   | light, warm | `#8A6D24` | T6 Old-Style Refined    | wealth management, high-trust advisory |
| C3  | Mint Ledger     | light       | `#0F8A5F` | T7 Mono-Forward         | bookkeeping and expense tracking       |
| C4  | Navy & Brass    | dark        | `#D9A441` | T3 Editorial Serif+Sans | executive reporting, board decks       |
| C5  | Counting House  | light       | `#8E2F38` | T4 Bookish Serif        | accounting software, audit trails      |
| C6  | Cobalt Wire     | light       | `#1D5FBF` | T1 Neo-Grotesque        | B2B payments, treasury tools           |
| C7  | Graphite & Sky  | light       | `#2E8BC7` | T7 Mono-Forward         | financial analytics, forecasting       |
| C8  | Evergreen Trust | light       | `#1D5E45` | T6 Old-Style Refined    | insurance, savings, pensions           |
| C9  | Midnight Bond   | dark        | `#E3C88F` | T9 Didone Display       | premium cards, membership finance      |
| C10 | Steel Invoice   | light       | `#4A6FA5` | T1 Neo-Grotesque        | invoicing, quotes, contracts           |

### Tools & focus (C11-C20)

| ID  | Name            | Mode  | Accent    | Type                    | Best for                              |
| --- | --------------- | ----- | --------- | ----------------------- | ------------------------------------- |
| C11 | Terminal Green  | dark  | `#3FCF6E` | T7 Mono-Forward         | developer tools, CLIs with a GUI      |
| C12 | Carbon Indigo   | dark  | `#6E79D6` | T1 Neo-Grotesque        | issue trackers, project tools         |
| C13 | Obsidian Amber  | dark  | `#E5A83B` | T5 Geometric Display    | monitoring, alerting, on-call         |
| C14 | Deep Space Cyan | dark  | `#38BDDC` | T7 Mono-Forward         | infrastructure and network dashboards |
| C15 | Porcelain Rose  | light | `#D6577C` | T3 Editorial Serif+Sans | design and review tools               |
| C16 | Glacier         | light | `#3E88C4` | T1 Neo-Grotesque        | reading and research tools            |
| C17 | Basalt Lime     | dark  | `#A8CC3A` | T5 Geometric Display    | fitness and training trackers         |
| C18 | Lilac Stage     | light | `#9D5BD2` | T9 Didone Display       | music, video, media libraries         |
| C19 | Gunmetal Signal | dark  | `#E8703A` | T7 Mono-Forward         | logistics, fleet, warehouse ops       |
| C20 | Void Violet     | dark  | `#8F7FF7` | T1 Neo-Grotesque        | AI products, technical SaaS           |

### Friendly consumer & SaaS (C21-C30)

| ID  | Name            | Mode         | Accent    | Type                 | Best for                             |
| --- | --------------- | ------------ | --------- | -------------------- | ------------------------------------ |
| C21 | Cornflower Pop  | light        | `#4E7DF2` | T2 Humanist Warm     | team SaaS, onboarding-heavy products |
| C22 | Peach Sorbet    | light, warm  | `#F2764B` | T8 Soft Rounded      | habit trackers, family apps          |
| C23 | Lagoon          | light        | `#12939B` | T2 Humanist Warm     | travel and booking apps              |
| C24 | Bubblegum Slate | light        | `#E25C9C` | T8 Soft Rounded      | social and community apps            |
| C25 | Citrus Morning  | light, cream | `#E88A1F` | T5 Geometric Display | personal productivity, to-dos        |
| C26 | Sky Kite        | light        | `#2F9BE8` | T8 Soft Rounded      | kids and education apps              |
| C27 | Grape Soda      | light        | `#7B4FD8` | T2 Humanist Warm     | notes, journaling, creative SaaS     |
| C28 | Fresh Fern      | light        | `#4E9E3D` | T8 Soft Rounded      | plants, food logging, light health   |
| C29 | Coral Reef      | light        | `#E85D67` | T2 Humanist Warm     | dating, lifestyle, events            |
| C30 | Butter & Denim  | light        | `#33549E` | T5 Geometric Display | newsletters, blogging platforms      |

### Warm, earthy & lifestyle (C31-C40)

| ID  | Name            | Mode             | Accent    | Type                    | Best for                                |
| --- | --------------- | ---------------- | --------- | ----------------------- | --------------------------------------- |
| C31 | Terracotta Kiln | light, warm      | `#BC5B32` | T6 Old-Style Refined    | artisanal commerce, makers' shops       |
| C32 | Olive Grove     | light, warm      | `#68742F` | T4 Bookish Serif        | recipes, food and cooking apps          |
| C33 | Desert Clay     | light, warm      | `#B5573F` | T10 Typewriter Slab     | travel journals, guides                 |
| C34 | Cacao           | light, warm      | `#6B4A32` | T4 Bookish Serif        | coffee, chocolate, food brands          |
| C35 | Rosewood        | light, blush     | `#A5474E` | T9 Didone Display       | beauty, boutique retail                 |
| C36 | Harvest Amber   | light, warm      | `#B26E0E` | T2 Humanist Warm        | local commerce, farmers' markets        |
| C37 | Sage Spa        | light            | `#6B9080` | T8 Soft Rounded         | wellness, meditation, sleep             |
| C38 | Ochre Study     | light, parchment | `#9C7514` | T3 Editorial Serif+Sans | learning, libraries, reading apps       |
| C39 | Brick & Linen   | light            | `#9E3B2F` | T10 Typewriter Slab     | heritage and craft brands               |
| C40 | Driftwood       | light, stone     | `#7D6752` | T6 Old-Style Refined    | minimal journals, quiet lifestyle tools |

### Bold, creative & editorial (C41-C50)

| ID  | Name               | Mode         | Accent    | Type                    | Best for                          |
| --- | ------------------ | ------------ | --------- | ----------------------- | --------------------------------- |
| C41 | Gallery White      | light, stark | `#111111` | T9 Didone Display       | portfolios, galleries, studios    |
| C42 | Riso Blue          | light        | `#2A3BC8` | T5 Geometric Display    | zines, indie creative tools       |
| C43 | Chartreuse Court   | light        | `#8FA818` | T1 Neo-Grotesque        | creative suites, agency tools     |
| C44 | Vermilion Press    | light, warm  | `#D0432B` | T3 Editorial Serif+Sans | magazines, news, longform         |
| C45 | Ultramarine Poster | light        | `#2B3FD8` | T5 Geometric Display    | events, campaigns, launches       |
| C46 | Magenta Signal     | light        | `#C42B8A` | T1 Neo-Grotesque        | fashion, creator platforms        |
| C47 | Teal & Tangerine   | light        | `#0E8578` | T2 Humanist Warm        | playful brand and marketing tools |
| C48 | Noir Editorial     | dark         | `#EDEDE6` | T9 Didone Display       | photography, film portfolios      |
| C49 | Cobalt & Butter    | light        | `#2149B8` | T10 Typewriter Slab     | indie apps with personality       |
| C50 | Redline Mono       | light, mono  | `#D42F2F` | T7 Mono-Forward         | metrics, timing, sports data      |
