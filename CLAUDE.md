# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project status

This repository currently contains **no source code** — only `guia-portfolio.md`, a detailed Spanish-language specification for a personal portfolio site that has not yet been scaffolded. There is no `package.json`, `src/`, build config, or tests yet. Treat `guia-portfolio.md` as the authoritative product/design brief; consult it before making architectural or content decisions, and don't contradict it without flagging the conflict to the user.

Since nothing is built yet, there are no lint/build/test commands to run. Once the project is scaffolded (see stack below), the spec requires that at minimum `pnpm lint` and `pnpm build` pass cleanly with no TypeScript or ESLint errors before any phase is considered done.

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
