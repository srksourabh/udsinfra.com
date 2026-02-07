# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

UDS Infrastructure Pvt. Ltd. corporate website - a Next.js 16+ application showcasing Civil Construction, Building Management Systems (BMS), MEP, Electrical Distribution, Fire Protection, CCTV, and Access Control services. A unit of Ultimate Group (16+ years).

## Build & Run Commands

```bash
npm run dev          # Development server at http://localhost:3000
npm run build        # Production build (also validates TypeScript)
npm run start        # Run production build
npm run lint         # ESLint check (flat config, runs just `eslint`)
```

No test framework is configured. There are no test scripts.

## Environment Variables

```bash
# .env.local
RESEND_API_KEY=your_key_here   # Required for contact form email delivery
```

## Architecture

### Rendering Strategy
- `src/app/layout.tsx` is the **only server component** — handles metadata, font loading (Plus Jakarta Sans), and wraps all pages with Navbar + Footer
- **Every page** uses `'use client'` because they all depend on Framer Motion for animations
- The single Server Action is `src/app/actions/sendEmail.ts` (uses Resend API, sends to `info@udsinfra.com` with CC to director)

### Data Flow: Two Separate Service Data Sources
This is a key architectural quirk to understand:

1. **Homepage** (`src/app/page.tsx`) defines its own local `servicesData` array with inline SVG icons, image paths, and gradient colors. These use `id` values like `"electrical"`, `"civil-construction"`, `"bms"` for linking to `/services/{id}`.

2. **Service detail pages** (`src/app/services/[slug]/page.tsx`) pull from `src/app/lib/servicesData.ts` which uses `slug` values like `"electrical-transmission"`, `"civil-infrastructure"`, `"bms"`. This file also defines `SubService` and `ServiceItem` TypeScript interfaces.

**These two data sources are not shared.** When adding/modifying a service, both must be updated and their IDs/slugs must match for homepage links to work. The service detail page maps icon string names (e.g., `"Cpu"`, `"HardHat"`) to SVG components via a local `icons` record.

### Design System (Tailwind CSS 4.x)
Custom color tokens are defined as CSS custom properties in `globals.css` and bridged to Tailwind via `@theme inline`:
- `primary-*` (Deep Navy #0B2341 scale) — used as `text-primary-800`, `bg-primary-900`, etc.
- `secondary-*` (Vibrant Orange #F97316 scale) — used as `text-secondary-500`, etc.
- `neutral-*` (Slate-grey scale)
- Custom utility classes: `.glass`, `.glass-strong`, `.text-gradient-primary`, `.bg-gradient-hero`
- Font: `font-sans` and `font-display` both map to `--font-jakarta` (Plus Jakarta Sans)

### Path Alias
`@/*` maps to `./src/*`

### Component Organization
- `src/components/layout/` — Navbar, Footer (barrel exported via `index.ts`)
- `src/components/Hero.tsx` — Interactive hero with mouse-tracking spotlight (Framer Motion `useMotionValue`/`useSpring`/`useTransform`)
- `src/app/lib/companyData.ts` — Company profile, leadership, stats, core values, and `contactInfo` object (canonical source for address, phone, email)

## Routes

| Path | File | Description |
|---|---|---|
| `/` | `src/app/page.tsx` | Homepage with Hero, Why Us bento grid, Services grid, CTA |
| `/about` | `src/app/about/page.tsx` | About page with leadership, values |
| `/services` | `src/app/services/page.tsx` | Services listing |
| `/services/[slug]` | `src/app/services/[slug]/page.tsx` | Service detail (dynamic route) |
| `/contact` | `src/app/contact/page.tsx` | Contact forms (general inquiry + project brief) |

## Adding New Content

### New Service
1. Add entry to `src/app/lib/servicesData.ts` (with `slug`, `subServices`, etc.)
2. Add matching entry to the local `servicesData` array in `src/app/page.tsx` (with matching `id` that equals the slug)
3. Add icon SVG mapping in `src/app/services/[slug]/page.tsx` `icons` record if using a new icon name
4. Add images to `public/images/services/` and `public/images/services/subservices/`

### New Page
1. Create `src/app/[page-name]/page.tsx` with `'use client'` directive
2. Add to `navLinks` array in `src/components/layout/Navbar.tsx`
3. Add to footer links in `src/components/layout/Footer.tsx`

## Contact Information (Canonical Source: `src/app/lib/companyData.ts`)
- **Address:** EC73, Rajdanga Main Road, Kolkata 700107, India
- **Phone:** +91 33 4000 7520
- **Email:** info@udsinfra.com
- **Parent:** Ultimate Group (ultimatesolutions.in)

## Animation Patterns
All pages use Framer Motion with consistent patterns:
- `whileInView` with `viewport={{ once: true }}` for scroll-triggered entrance animations
- Staggered children via `variants` with `staggerChildren` delay
- Hero uses `useMotionValue`/`useSpring`/`useTransform` for mouse-tracking radial gradient spotlight
- Cards use `custom={index}` prop for staggered delay calculation
