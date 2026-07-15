# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project status

The site is scaffolded and largely built out: all 5 required routes, the full data layer, the contact form (email + WhatsApp), theming, and SEO are implemented and working (`pnpm lint` and `pnpm build` both pass clean). Treat `guia-portfolio.md` as the authoritative product/design brief; consult it before making architectural or content decisions, and don't contradict it without flagging the conflict to the user.

Known open gaps (see `README.md` for details): no MDX case-study content yet (case studies live entirely in `src/data/projects.ts`), no CV PDF at `public/cv/fabian-sojo-cv.pdf`, and a "Kalo" project screenshot (`public/kalo.png`) sitting unused pending a `projects.ts` entry.

Run `pnpm lint` and `pnpm build` before considering any change done — both must pass with no TypeScript or ESLint errors.

## What this project is

A professional portfolio site for **Fabián Sojo** (brand: **SOJO DEV**), a Full Stack developer and Systems Engineering student in Costa Rica. The site must support job-seeking and client acquisition: presenting who he is, his experience, projects (with individual case-study pages), tech stack, education/certifications, and a contact flow (email + WhatsApp).

## Required stack (per spec)

- Next.js (App Router) + TypeScript (strict)
- Tailwind CSS + shadcn/ui
- Framer Motion (used sparingly — entrance animations, page transitions, subtle hover/menu motion; respect `prefers-reduced-motion`; no parallax or constant motion)
- Lucide Icons
- React Hook Form + Zod for the contact form
- next-themes for light/dark mode
- Deploy target: Vercel

Don't add dependencies beyond what's needed — the spec explicitly calls this out.

## Visual direction (non-negotiable brand constraints)

Minimalist, black/white/neutral-gray palette, formal and premium ("creative studio / tech agency" feel), generous whitespace, strong typographic hierarchy, thin borders, subtle rounded corners, minimal shadows. Both light and dark mode required. Avoid: gradients, glassmorphism, neon, stock photos, childish illustrations, heavy/flashy animation. Recommended fonts: Geist, Inter, Manrope, Instrument Sans (Space Grotesk allowed for select headings).

## Intended architecture (from spec §26)

```
src/
├── app/
│   ├── about/ contact/ projects/[slug]/ projects/page.tsx
│   ├── api/contact/
│   ├── layout.tsx, page.tsx, sitemap.ts, robots.ts
├── components/
│   ├── common/ layout/ sections/ projects/ contact/ ui/
├── content/projects/        # MDX case-study content
├── data/                    # projects.ts, experience.ts, education.ts, certifications.ts, technologies.ts
├── lib/
│   ├── validations/ constants.ts metadata.ts utils.ts
├── types/
└── styles/
```

Content model: project **metadata** lives in typed TypeScript (`src/data/projects.ts`, matching the `Project` type in spec §10), while long-form case-study content lives in MDX under `src/content/projects/`. Images go in `public/projects`. No CMS in this first version, but the data layer should stay clean enough to later migrate to Sanity/Strapi/Contentful. No admin panel is required initially.

All personal/site info (name, brand, socials, email, WhatsApp number) must live in a single central config object (`siteConfig`, spec §27) and environment variables (`.env.example`, spec §28) — never duplicated inline across components. Never commit real secrets.

Routes: `/`, `/projects`, `/projects/[slug]`, `/about`, `/contact`.

## Contact form behavior

Two contact paths, user-selectable:
- **Email**: server action / API route (`app/api/contact/`) sending via a configurable provider (Resend or Brevo), keyed off env vars — no provider keys hardcoded.
- **WhatsApp**: build a structured message client-side from the form fields and open a `wa.me` URL; the WhatsApp number comes from `NEXT_PUBLIC_WHATSAPP_NUMBER`.

All fields validated with Zod; form must show clear loading/success/error states and cannot submit without explicit privacy-policy consent.

## Cross-cutting requirements to keep in mind while implementing

- Server Components by default; Client Components only where interactivity requires it.
- Full SEO: per-page metadata, Open Graph, Twitter Cards, sitemap, robots, canonical URLs, Schema.org (Person, WebSite, CreativeWork/SoftwareApplication for projects, BreadcrumbList on internal pages).
- Accessibility: keyboard nav, visible focus states, semantic HTML, alt text, skip-to-content link, accessible form errors.
- Fully responsive (phones through wide desktop), not just scaled-down.
- Content (experience, projects, tech, education, certifications) must be editable via the `src/data/` files without touching component code.

## Language toggle (ES/EN)

Not in the original spec — added as a client-side ES/EN toggle (not route-based i18n, no `/en` URLs). Architecture: `LanguageProvider` (`src/components/common/language-provider.tsx`) holds the current `Locale` in React context, persisted to `localStorage`, default `"es"`. Static UI copy lives in `src/lib/i18n/dictionary.ts` (`useTranslation()` hook); translated overrides for `src/data/*.ts` content live in `src/lib/i18n/content.ts` (`translateProject`, `translateExperience`, etc. — keyed by slug/company/institution so the Spanish data files stay the single source of truth). Because toggling must update visible text instantly without a route change, any component rendering translatable text is a Client Component — this is an intentional exception to "Server Components by default" for this feature only. Known limitation: page `<title>`/meta description and JSON-LD stay in Spanish regardless of the toggle (they're server-rendered before the client locale is known).
