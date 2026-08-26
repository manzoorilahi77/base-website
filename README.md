# base-website

A neutral Next.js skeleton for **websites** - marketing pages, local-business sites,
landing pages.

It removes the boring 30% of every project - theme wiring, SEO plumbing, form UX,
config, accessibility baseline - so the actual page sections can be built on top
without re-litigating any of that.

**This is not an app template.** No auth, no database, no API routes, no ORM. For
applications, use [`base-web-react-node`](https://github.com/manzoorilahi77/base-web-react-node).

## What you get

- **50 palette + typography combos.** Change one line, the whole site re-themes -
  colours _and_ fonts. See [THEMES.md](THEMES.md).
- **Six generic sections** - hero, trust row, service grid, about, FAQ, contact CTA.
- **A contact form** with client-side validation, error, and success states, and one
  clearly-marked place to add real delivery.
- **SEO layer** - Metadata API defaults, JSON-LD, sitemap, robots, generated OG image.
- **`/style-guide`** and **`/demo-shots`** for checking your theme and screenshotting demos.

## Getting a copy

### With the GitHub CLI

```bash
gh repo create <name> --template manzoorilahi77/base-website
```

### Without the GitHub CLI

**In the browser** - open
[the generate page](https://github.com/manzoorilahi77/base-website/generate),
name the repo, and click Create. No tooling at all.

**With git** - clone, then start a fresh history:

```bash
git clone --depth 1 https://github.com/manzoorilahi77/base-website.git <name>
cd <name>
rm -rf .git
git init -b main
git add -A
git commit -m "Initial commit from base-website"
```

**Without git** - download and unpack the tarball:

```bash
mkdir <name>
curl -sL https://github.com/manzoorilahi77/base-website/archive/refs/heads/main.tar.gz \
  | tar -xz -C <name> --strip-components=1
cd <name>
```

On Windows without `tar`, download
[the zip](https://github.com/manzoorilahi77/base-website/archive/refs/heads/main.zip)
and extract it.

**With degit** - convenient, but it does not preserve symlinks, so `AGENTS.md`
arrives dangling and has to be recreated:

```bash
npx degit manzoorilahi77/base-website <name>
cd <name>
ln -sf CLAUDE.md AGENTS.md   # required: degit breaks this symlink
```

After any of these:

```bash
pnpm install
pnpm dev
```

Check the symlink survived - it should print `CLAUDE.md`:

```bash
readlink AGENTS.md
```

## Quick start

```bash
pnpm install
pnpm dev
```

Requires Node 22.x (see `.nvmrc`) and pnpm 11.20.0.

| Script           | Does                       |
| ---------------- | -------------------------- |
| `pnpm dev`       | Development server         |
| `pnpm build`     | Production build           |
| `pnpm start`     | Serve the production build |
| `pnpm typecheck` | `tsc --noEmit`             |
| `pnpm lint`      | ESLint                     |
| `pnpm format`    | Prettier write             |

## First five things to change

1. **Fill in the tokens.** Every one lives in `site.config.ts`. See the table below.
2. **Pick a theme.** Change `themeId` in `site.config.ts` to any id from
   [THEMES.md](THEMES.md), then open `/style-guide` to confirm it.
3. **Write the sections.** `src/components/sections/` - replace the placeholder
   services, proof points, FAQ questions, and about copy with real content.
4. **Replace the placeholder image.** `public/placeholder.svg` is referenced by the
   about block. Swap in a real photo and drop the `unoptimized` prop.
5. **Wire up the form.** Replace the body of `deliverContactForm` in
   `src/lib/contact-form.ts` - it is the only function that needs to change.

## Tokens

Every business-specific string is a placeholder in double curly braces, and **all of
them live in exactly one file**: `site.config.ts`.

To find any you have missed:

```bash
grep -rnoE "\{\{[A-Z_]+\}\}" site.config.ts src
```

(The bracket pattern is spelled out because a bare `grep "{{"` also matches JSX
inline-style syntax, `style={{ ... }}`, which is not a token.)

| Token                 | Meaning                              | Where it appears                                                                  |
| --------------------- | ------------------------------------ | --------------------------------------------------------------------------------- |
| `{{BUSINESS_NAME}}`   | Trading name of the business         | `site.config.ts` → header, footer, hero, about, metadata, JSON-LD, OG image, icon |
| `{{TAGLINE}}`         | Short positioning line, one sentence | `site.config.ts` → hero, footer, metadata title, OG image                         |
| `{{SEO_DESCRIPTION}}` | Meta description, ~150 chars         | `site.config.ts` → metadata, Open Graph, JSON-LD                                  |
| `{{CITY}}`            | City the business operates in        | `site.config.ts` → hero eyebrow, footer, about, JSON-LD, OG image                 |
| `{{STATE}}`           | State / region                       | `site.config.ts` → hero eyebrow, footer, contact, JSON-LD, OG image               |
| `{{POSTAL_CODE}}`     | Postal / ZIP code                    | `site.config.ts` → footer, contact, JSON-LD                                       |
| `{{STREET_ADDRESS}}`  | Street address line                  | `site.config.ts` → footer, contact, JSON-LD                                       |
| `{{PHONE}}`           | Public phone number, as displayed    | `site.config.ts` → header button, hero, footer, contact, JSON-LD, OG image        |
| `{{EMAIL}}`           | Public email address                 | `site.config.ts` → footer, contact, JSON-LD                                       |
| `{{HOURS}}`           | Opening hours, as displayed          | `site.config.ts` → hero, footer, contact, JSON-LD                                 |
| `{{DOMAIN}}`          | Bare domain, no protocol             | `site.config.ts` → canonical URLs, sitemap, robots, OG image                      |

> **Never replace a token with invented content.** If you do not know a real phone
> number, licence number, or review, leave the token and ask. A plausible-sounding
> fake silently survives into a client-facing site.

## Picking a theme

[THEMES.md](THEMES.md) lists all 50 combos with their accent colour, typography
direction, and a "best for" line. Set the id:

```ts
// site.config.ts
themeId: 'C39',   // Brick & Linen (light)
```

40 combos are light, 10 are dark (C4, C9, C11, C12, C13, C14, C17, C19, C20, C48).
The mode is applied automatically - `color-scheme` follows the combo.

Open `/style-guide` to see the active theme's seven colour roles with their hex
values, contrast ratios, the full type scale, and every UI primitive.

## Routes

| Route                         | Purpose                                              |
| ----------------------------- | ---------------------------------------------------- |
| `/`                           | Homepage - all six sections                          |
| `/contact`                    | Contact details and the form                         |
| `/style-guide`                | Active theme, type scale, primitives. `noindex`      |
| `/demo-shots`                 | Every section, unchromed, for screenshots. `noindex` |
| `/sitemap.xml`, `/robots.txt` | Generated from `site.config.ts`                      |
| `/opengraph-image`, `/icon`   | Generated from the active theme                      |

`/style-guide` and `/demo-shots` are excluded from the sitemap and blocked in robots.

## Deploying

Vercel, zero config. `engines.node` is set to `22.x` so the runtime is deterministic.
Set the real domain in `site.config.ts` before deploying - canonical URLs, the
sitemap, and Open Graph tags all derive from it.

## Conventions

See [CLAUDE.md](CLAUDE.md) (symlinked as `AGENTS.md`) for the rules any AI agent
working in a spun-off site should follow.
