# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Corporate marketing site for İscotera (a software company), served at https://iscotera.com. Fully static Astro 7 + Tailwind CSS 4 build. The primary goals are SEO/brand visibility, so preserving the SEO plumbing (canonical, hreflang, sitemap, JSON-LD) on every page matters more than usual.

Repository: https://github.com/isco2225/iscotera. Site content is written in Turkish and English; **commit messages must be in English**.

## Commands

- `npm run dev` — dev server at localhost:4321. When starting it from an agent, use background mode: `astro dev --background` (manage with `astro dev stop` / `status` / `logs`).
- `npm run build` — production build to `dist/`. Use this to verify changes; there are no tests or linter.
- `npm run preview` — serve the production build locally.

Draft content (`draft: true` in frontmatter) renders in dev but is excluded from production builds — so dev and build page counts intentionally differ.

## Architecture

### Bilingual routing (TR default, EN secondary)

- Turkish pages live at the root of `src/pages/` with Turkish slugs (`/hakkimizda/`, `/hizmetler/...`); English pages live under `src/pages/en/` with English slugs (`/en/about/`, `/en/services/...`). Astro's i18n config (`astro.config.mjs`) uses `defaultLocale: 'tr'` with no prefix for Turkish.
- Every page renders through `src/layouts/BaseLayout.astro`, which owns all SEO output: title suffixing, meta description, canonical URL, hreflang link tags, Open Graph tags, and Organization JSON-LD. Pages pass `lang` and an `alternate` prop (the same page's path in the other language); `alternate` drives both the hreflang tags and the header's language switcher. **When adding a page, add both language versions and wire `alternate` in both directions.** Blog/project detail pages are the deliberate exception (posts aren't 1:1 translated), so they omit `alternate`.
- Static route pairs (TR path ↔ EN path) and all UI strings live in `src/i18n/ui.ts`. New nav items or translated labels go there, not inline in components.

### Content model — three sources, three mechanisms

1. **Services** (`src/data/services.ts`): a single typed array holding TR+EN slug/title/summary per service. The dynamic routes `src/pages/hizmetler/[slug].astro` and `src/pages/en/services/[slug].astro` both generate from it — adding an entry creates both pages and both listing cards automatically.
2. **Blog and projects** (`src/content/blog/{tr,en}/`, `src/content/projects/{tr,en}/`): Markdown content collections defined in `src/content.config.ts`. Language is encoded in the entry id prefix (`tr/...` / `en/...`); listing and detail pages filter on it and strip it to form the URL slug. Sample templates (`ornek-yazi.md`, `ornek-proje.md`, etc.) are permanent drafts kept as authoring documentation — don't publish or delete them.
3. **Static pages** (about, contact, home sections): placeholder content marked with the `PagePlaceholder` component. Real copy replaces these; the component disappears as content lands.

### Deliberate decisions (don't "fix" these)

- **Brand palette is white/black/red.** Red (`--color-brand` / `--color-brand-dark` tokens in `src/styles/global.css`, used as Tailwind `bg-brand` etc.) is an accent color only — CTAs, logo dot, hovers — never a background or text color for content. Grays are the `neutral-*` scale (not `slate-*`, which clashes with red).

- **Blog is hidden from the nav** until 3–4 real posts exist, to avoid an empty-blog look. The commented-out entry is in `src/components/Header.astro`. The pages themselves are live at `/blog/` and `/en/blog/`.
- The sitemap integration emits hreflang alternates itself (configured in `astro.config.mjs`); `public/robots.txt` points to `/sitemap-index.xml`.
- Pre-launch TODOs (logo, og:image, contact details/form, hosting + DNS, Search Console, analytics) are tracked in README.md.
