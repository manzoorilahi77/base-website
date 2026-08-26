# Conventions for AI agents

Rules for working in a site spun off `base-website`. Read this before editing.

## The three rules that matter most

### 1. Never invent business content

Every business-specific string ships as a placeholder in double curly braces. If you
do not have a real value, **leave the token in place and ask**.

Never write a plausible-sounding business name, address, phone number, email, review,
testimonial, licence number, certification, award, price, warranty, years-in-business,
or staff count. A fake that looks real is worse than an obvious blank, because it
silently survives into a client-facing site.

This applies to placeholder copy too. `Service one` and `Question one goes here?` are
correct as shipped - they are obviously unfilled. Replacing them with invented
specifics is the failure mode this template exists to prevent.

### 2. No raw hex in components, ever

Colours come from Tailwind `@theme` variables only:

```tsx
<p className="text-muted">...</p>          // correct
<p style={{ color: '#867C72' }}>...</p>    // bug, even if the value is right
```

`src/themes/library.ts` is the **only** file allowed to contain palette hex values.
`src/app/opengraph-image.tsx` and `src/app/icon.tsx` read colours from the theme
object because Satori cannot use CSS variables - they still never hard-code a value.

Available colour utilities:

| Utility                           | Use for                                 |
| --------------------------------- | --------------------------------------- |
| `bg-bg`                           | Page background                         |
| `bg-surface`                      | Cards, raised bands                     |
| `text-text`                       | Primary text                            |
| `text-muted`                      | Secondary text (AA-adjusted, see below) |
| `bg-accent` / `border-accent`     | Accent **fills and borders**            |
| `text-accent-text`                | Accent **type**                         |
| `text-on-accent`                  | Text sitting on an accent fill          |
| `text-positive` / `text-negative` | Success and error states                |
| `font-display` / `font-body`      | The two active families                 |

**`text-accent` does not exist by design.** Accent-as-a-fill and accent-as-type need
different values to stay legible, so they are separate tokens.

### 3. Do not touch the theme plumbing

`src/themes/` and the `@theme` block in `src/app/globals.css` are load-bearing:

- `library.ts` - all 50 combos, transcribed verbatim. Do not "normalise" a hex.
- `fonts.ts` - all twelve font families are declared on purpose. Deleting the unused
  ones breaks every theme except the current one. Every loader sets `preload: false`
  on purpose; turning it back on preloads all twelve families on every page.
- `contrast.ts` - WCAG maths.
- `active.ts` - resolves the theme id into CSS variables.

## How theming works

`site.config.ts` names a combo id. `active.ts` looks it up, computes the derived
colours, and `layout.tsx` writes them as inline custom properties on `<html>`.
`globals.css` maps those onto Tailwind's `@theme` namespace.

Changing `themeId` re-themes the entire site - colours and both fonts - with no other
edit anywhere. That property must survive every change you make.

### Derived colours

Three values are computed rather than taken straight from the palette:

- **`--color-muted`** - the library's `muted` role, deepened only as far as WCAG AA
  requires. 35 of the 50 combos have a `muted` below 4.5:1 on their own background.
  The untouched library value stays on `activeTheme.muted` and is shown on
  `/style-guide`.
- **`--color-accent-text`** - the same treatment for accent used as type (22 of 50
  fail AA as-is).
- **`--color-on-accent`** - whichever theme colour is most legible on the accent.
  Accent is a dark red in C39 and a near-white in C48; a fixed label colour would
  fail in one of them.

## Where things live

```
site.config.ts              Single source of truth. The ONLY file with tokens.
src/themes/                 Theme system. See above.
src/app/layout.tsx          Document shell + theme application only.
src/app/(site)/             Pages that get site chrome (header/footer).
src/app/style-guide/        Dev-only. Outside (site), so it renders unchromed.
src/app/demo-shots/         Dev-only. Every section back to back.
src/components/sections/    Page sections. One file each.
src/components/ui/          Primitives: Button, Card, Field, Accordion, Section.
src/components/layout/      Header, Footer, SkipLink.
src/components/seo/         JsonLd.
src/lib/                    contact-form.ts (validation + delivery), metadata.ts, cn.ts.
```

## Adding a section

1. Create `src/components/sections/<name>.tsx`. Export a named component.
2. Export it from `src/components/sections/index.ts`.
3. Add it to **both** `src/app/(site)/page.tsx` and `src/app/demo-shots/page.tsx`.
   Keeping those in step is the point of `/demo-shots`.
4. Wrap content in `<Section>` for consistent rhythm, or use `<Container>` directly
   if you need custom spacing.
5. Give the section an `id` and an `aria-labelledby` pointing at its heading.

Sections must stay **generic**. Name them by function (`ServiceGrid`, `FAQ`), never by
trade. Per-industry structure is built per project, on top of these.

## Forms

There is no backend. `deliverContactForm` in `src/lib/contact-form.ts` is the single
swap point for real delivery - replace its body with one `fetch` and nothing else
changes. Throwing from it shows the form's error state; returning shows success.

Do not add API routes, server actions, a database, or auth. Those belong in
`base-web-react-node`.

## What not to add

- Analytics, trackers, cookie banners, or any third-party script.
- Image binaries. `public/placeholder.svg` is the only asset; sites supply their own.
- Dependencies, unless genuinely necessary. The list should stay auditable at a glance.
- A generator or `init` script. Configuration is token replacement, nothing more.

## Before you call it done

```bash
pnpm typecheck && pnpm lint && pnpm build
```

Then check:

- `grep -rnoE "\{\{[A-Z_]+\}\}" site.config.ts src` - every remaining token is one
  you meant to leave. (A bare `grep "{{"` also matches JSX `style={{`.)
- `/style-guide` - swatches match their hex labels.
- No horizontal scroll at 320px.
- Keyboard: Tab reaches the skip link first; the nav and FAQ accordion operate without
  a mouse; focus rings are visible.
- No `any`. No raw hex outside `src/themes/library.ts`.
