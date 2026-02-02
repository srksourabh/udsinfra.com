# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

UDS Infrastructure Pvt. Ltd. corporate website - a Next.js 16+ application showcasing Civil Construction, Building Management Systems (BMS), MEP, and Electrical Distribution services. Backed by 16+ years of Ultimate Group stability.

## Tech Stack

- **Framework:** Next.js 16.1.6 with App Router
- **React:** 19.2.3 with TypeScript
- **Styling:** Tailwind CSS 4.x with custom design tokens in `globals.css`
- **Animations:** Framer Motion 12.x
- **Email:** Resend API via Server Actions

## Build & Run Commands

```bash
npm install          # Install dependencies
npm run dev          # Development server at http://localhost:3000
npm run build        # Production build
npm run start        # Run production build
npm run lint         # ESLint check
```

## Environment Variables

```bash
# .env.local
RESEND_API_KEY=your_key_here
```

## Architecture

### Server vs Client Components
- Root layout (`src/app/layout.tsx`) is server-rendered for metadata
- Pages use `'use client'` for Framer Motion animations and form handling
- Email sending uses Server Actions (`src/app/actions/sendEmail.ts`)

### Design System
CSS custom properties in `globals.css`:
- **Primary:** Deep Navy (#0B2341) - Ultimate Group stability
- **Secondary:** Vibrant Orange (#F97316) - UDS fresh energy
- **Font:** Plus Jakarta Sans via next/font/google

### Path Alias
`@/*` maps to `./src/*` (configured in tsconfig.json)

### Key Directories
- `src/app/` - Pages and routes (App Router)
- `src/components/layout/` - Navbar, Footer
- `src/app/actions/` - Server Actions
- `public/images/services/` - Service page images

## Adding New Content

### New Page
1. Create `src/app/[page-name]/page.tsx`
2. Add `'use client'` if using animations/interactivity
3. Update Navbar and Footer links

### New Service
1. Add to `servicesData` array in `src/app/page.tsx`
2. Create detail page at `src/app/services/[service-id]/page.tsx`
3. Add image to `public/images/services/`

## Contact Information (Consistent Across Site)
- **Address:** EC73, Rajdanga Main Road, Kolkata 700107, India
- **Phone:** 033 4000 7520
- **Email:** info@udsinfra.com
- **Parent:** Ultimate Group (ultimatesolutions.in)

## Animation Patterns
Components use Framer Motion with:
- `useScroll` and `useTransform` for parallax effects
- Staggered children animations via `staggerChildren`
- `whileInView` for scroll-triggered entrances
