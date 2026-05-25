# SellerCalcTools

SellerCalcTools is an English-language calculator website for ecommerce sellers,
marketers, and small business owners. The first release includes eight free
tools for Shopify, Etsy, Amazon FBA, profit margin, markup, ROI, ROAS, and
break-even planning.

The project is intentionally static-first: calculator inputs are handled in the
browser, with no accounts, database, payments, or external APIs.

## Technology Stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS
- Static SEO content and Next.js Metadata API
- Ready for Vercel deployment

## Included Pages

- `/` - landing page and calculator directory
- `/shopify-profit-calculator`
- `/etsy-fee-calculator`
- `/amazon-fba-profit-calculator`
- `/profit-margin-calculator`
- `/markup-calculator`
- `/roi-calculator`
- `/roas-calculator`
- `/break-even-calculator`
- `/blog` - article card placeholders
- `/about`
- `/privacy-policy`
- `/terms`

The calculator pages contain live results, formulas, examples, educational SEO
content, FAQs, related tools, and advertising and affiliate placeholders.

## Run Locally

Prerequisite: Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Validate a production build before deployment:

```bash
npm run lint
npm run typecheck
npm run build
```

## Project Structure

```text
app/                     Routes, metadata, sitemap, robots, and global styles
components/              Shared layout and calculator presentation components
components/calculators/  Eight independent client-side calculator forms
data/calculators.ts      Central calculator copy, SEO metadata source, and links
lib/calc.ts              Typed calculation functions
lib/format.ts            Currency, number, percentage, and ratio formatting
lib/copy.ts              Copy Results clipboard helper
public/                  Static brand assets
```

## Add a Calculator

1. Add the new calculator information to `data/calculators.ts`, including its
   slug, name, descriptions, formula, example, FAQs, related slugs, and article
   content.
2. Add typed calculation input and result logic to `lib/calc.ts`.
3. Create a client form in `components/calculators/` using `InputField`,
   `CalculatorWorkspace`, and the shared formatting helpers.
4. Create a new App Router page under `app/<slug>/page.tsx`. Use
   `calculatorMetadata()` for its metadata and `CalculatorPage` for consistent
   page sections.
5. Add the slug to the `CalculatorSlug` type and relevant related-tool arrays,
   then run lint, type checking, and a production build.

## Deploy to Vercel

1. Push the project to a Git repository.
2. Import the repository in Vercel.
3. Keep the default Next.js framework detection and build command
   (`npm run build`).
4. Deploy, then connect the intended domain.
5. Update `https://sellercalctools.com` in metadata, `app/sitemap.ts`, and
   `app/robots.ts` if the production domain differs.

No environment variables are required for this initial version.

## Future Extensions

1. Google AdSense integration in the existing advertisement slots
2. Affiliate links in the existing recommendation CTA areas
3. Published blog articles and internal linking clusters
4. CSV bulk calculator workflows
5. PDF report export
6. More calculators for fees, pricing, inventory, and advertising

## Disclaimer

SellerCalcTools supplies general calculation and educational information only.
Results are estimates and are not financial, tax, accounting, or legal advice.
Users should verify fee schedules, assumptions, and results before making
business decisions.
