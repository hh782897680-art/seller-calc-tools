# Ecom Profit Tools Project Rules

## Product Positioning

- The site's primary positioning is **free e-commerce calculators and seller tools**.
- New content or feature pages must support that calculator-first positioning rather than replace it with a different product focus.
- English-facing copy should be useful to online sellers, especially merchants using Shopify, Etsy, Amazon, TikTok Shop, and related commerce platforms.

## Protected Calculator Behavior

- Do not modify existing calculator formulas, input fields, or result-display logic unless the user explicitly requests that change.
- Keep calculator data flows, fee assumptions, and calculated outputs out of scope for SEO, content, navigation, or presentation tasks.

## New Public Pages

- Every new public page must include page metadata, a canonical URL, and a clear single H1.
- Every new public page must include an FAQ section and relevant internal links to existing tools or supporting pages.
- Every new public page must be added to `app/sitemap.ts`.
- Follow the existing App Router and site styling patterns instead of introducing a new page framework without need.

## Working Style

- Prefer small, scoped edits over large refactors.
- Preserve existing layouts, calculator components, and shared behavior unless a requested feature requires a narrowly targeted change.
- After any implementation work, state which files changed and how the work was verified.
- For code or public-page changes, run the relevant project checks, including `npm run build` unless the user explicitly limits verification.
