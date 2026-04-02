# Swisher Family Australia Itinerary Website — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a personalized, mobile-friendly travel itinerary website for the Swisher family's 17-day Australia trip (Nov 4–20, 2026), deployed on Vercel.

**Architecture:** Next.js 15 App Router with static export. 4 page types: Story Hub homepage, chapter detail pages with vertical timelines, full Leaflet map view, and table view. All content stored as static TypeScript data — no database or CMS.

**Tech Stack:** Next.js 15, Tailwind CSS 4, Leaflet + React Leaflet, Framer Motion, Google Fonts (Playfair Display + Inter), Unsplash photography, Vercel.

**Spec:** `docs/superpowers/specs/2026-04-01-swisher-au-itinerary-design.md`

---

## File Structure

```
A_Swisher-AU/
├── .gitignore
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── public/
│   ├── favicon.ico
│   └── images/
│       └── og-image.jpg
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── chapter/
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── map/
│   │   │   └── page.tsx
│   │   └── table/
│   │       └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── Footer.tsx
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   └── ChapterCard.tsx
│   │   ├── chapter/
│   │   │   ├── ChapterHero.tsx
│   │   │   ├── DayCard.tsx
│   │   │   ├── Timeline.tsx
│   │   │   ├── FunFact.tsx
│   │   │   ├── ChapterNav.tsx
│   │   │   └── ChapterMiniMap.tsx
│   │   ├── map/
│   │   │   └── TripMap.tsx
│   │   └── shared/
│   │       ├── AnimatedSection.tsx
│   │       └── PageTransition.tsx
│   ├── data/
│   │   └── itinerary.ts
│   └── lib/
│       └── types.ts
```

---

## Task 0: Project Scaffolding

**Files:** All root config files, `.gitignore`

- [ ] **Step 1:** Run `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --no-turbopack --import-alias "@/*"` from `/Users/dansia/CC_workspace/0_Personal/A_Swisher-AU/`

- [ ] **Step 2:** Edit `next.config.ts` — add `output: 'export'` and `images: { unoptimized: true }`

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

- [ ] **Step 3:** Update `postcss.config.mjs` for Tailwind v4:

```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;
```

- [ ] **Step 4:** Install additional dependencies:

```bash
npm install framer-motion react-leaflet leaflet
npm install -D @types/leaflet
```

- [ ] **Step 5:** Remove boilerplate content from `src/app/page.tsx` and `src/app/globals.css`

- [ ] **Step 6:** Verify: `npm run dev` starts without errors, `npm run build` produces `out/` directory

- [ ] **Step 7:** Commit:

```bash
git init && git add -A && git commit -m "chore: scaffold Next.js 15 project with Tailwind, Leaflet, Framer Motion"
```

---

## Task 1: Data Layer and Types

**Files:**
- Create: `src/lib/types.ts`
- Create: `src/data/itinerary.ts`

- [ ] **Step 1:** Create `src/lib/types.ts` with interfaces:

```typescript
export interface Trip {
  title: string;
  subtitle: string;
  dates: string;
  chapters: Chapter[];
}

export interface Chapter {
  slug: string;
  number: number;
  title: string;
  subtitle: string;
  dates: string;
  color: string;
  heroImage: string;
  location: { lat: number; lng: number };
  days: Day[];
}

export interface Day {
  date: string;
  dayNumber: number;
  title: string;
  subtitle: string;
  location: { lat: number; lng: number };
  heroImage: string;
  activities: {
    morning?: string;
    afternoon?: string;
    evening?: string;
  };
  funFacts?: string[];
}
```

- [ ] **Step 2:** Create `src/data/itinerary.ts` with full trip data for all 17 days across 4 chapters:

| Chapter | Days | Key Locations | Color |
|---------|------|---------------|-------|
| 1. Sydney | Nov 4–7 (4 days) | Opera House, Harbour Bridge, Bondi, Manly, The Rocks | `#1A3A5C` |
| 2. Tasmania | Nov 8–14 (7 days) | Hobart, Salamanca, MONA, Freycinet/Wineglass Bay, Cradle Mountain, Devonport | `#2D6A4F` |
| 3. Coastal Drive | Nov 15–18 (4 days) | Melbourne, Raymond Island (koalas), Pebbly Beach (kangaroos), coastal route | `#C87941` |
| 4. Wedding | Nov 19–20 (2 days) | Kangaroo Valley arrival, wedding day | `#B8860B` |

Each day needs: title, subtitle, lat/lng coordinates, morning/afternoon/evening activity descriptions (2-3 sentences each), 1-2 fun facts, and an Unsplash hero image URL (use `?w=1200&q=80` format).

- [ ] **Step 3:** Verify: TypeScript compiles without errors. Confirm all 17 days present across 4 chapters.

- [ ] **Step 4:** Commit:

```bash
git add src/lib/types.ts src/data/itinerary.ts
git commit -m "feat: add trip data model and complete itinerary content for 17 days"
```

---

## Task 2: Global Styles and Root Layout

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1:** Replace `src/app/globals.css` with Tailwind v4 CSS-first config:

```css
@import "tailwindcss";

@theme {
  --color-cream: #F9F6F2;
  --color-charcoal: #2C2C2C;
  --color-sydney: #1A3A5C;
  --color-tasmania: #2D6A4F;
  --color-coastal: #C87941;
  --color-wedding: #B8860B;
  --color-tan: #C8B99A;
  --color-tan-light: #F5F0E8;
  --font-heading: var(--font-playfair);
  --font-body: var(--font-inter);
}
```

Plus base body styles: cream background, charcoal text, default body font.

- [ ] **Step 2:** Update `src/app/layout.tsx`:
  - Import `Playfair_Display` and `Inter` from `next/font/google` with CSS variable configuration (`--font-playfair`, `--font-inter`, `display: 'swap'`)
  - Apply both CSS variable classes to `<html>` element with `lang="en"`
  - Export `metadata` with title "The Swishers Go Down Under", description, Open Graph tags
  - Render `<Header />` above `{children}` and `<Footer />` below

- [ ] **Step 3:** Verify: `npm run dev` — page loads with Playfair Display for headings, Inter for body, cream background, charcoal text

- [ ] **Step 4:** Commit:

```bash
git add src/app/globals.css src/app/layout.tsx
git commit -m "feat: add Tailwind v4 theme config and root layout with Google Fonts"
```

---

## Task 3: Layout Components (Header, MobileMenu, Footer)

**Files:**
- Create: `src/components/layout/Header.tsx`
- Create: `src/components/layout/MobileMenu.tsx`
- Create: `src/components/layout/Footer.tsx`

- [ ] **Step 1:** Create `Header.tsx` (`"use client"` — needs useState for mobile toggle):
  - Sticky top nav (`fixed top-0 w-full z-50`), cream background, subtle bottom border
  - Left: "The Swishers" in Playfair Display, links to `/`
  - Desktop (md+): Chapter links (Sydney, Tasmania, Coastal Drive, Wedding) → `/chapter/[slug]`, Map → `/map`, Table → `/table`
  - Chapter links show accent color on hover
  - Mobile: hamburger button (44px+ tap target) opens MobileMenu
  - Backdrop blur + shadow after scrolling 50px (scroll event listener)

- [ ] **Step 2:** Create `MobileMenu.tsx` (`"use client"`):
  - Full-screen overlay, slides in from right
  - Same links stacked vertically with 48px+ height per link
  - Close button (X, 44px)
  - Framer Motion `AnimatePresence` for enter/exit animation
  - Chapter links with colored dots

- [ ] **Step 3:** Create `Footer.tsx` (Server Component):
  - Simple centered footer: "Made with love for the Swisher family"
  - Small text, slightly darker cream shade

- [ ] **Step 4:** Verify: Navigate between pages via nav. Test hamburger menu in mobile viewport. Confirm 44px+ tap targets in DevTools.

- [ ] **Step 5:** Commit:

```bash
git add src/components/layout/
git commit -m "feat: add sticky header with mobile menu and footer"
```

---

## Task 4: Shared Animation Components

**Files:**
- Create: `src/components/shared/AnimatedSection.tsx`
- Create: `src/components/shared/PageTransition.tsx`

- [ ] **Step 1:** Create `AnimatedSection.tsx` (`"use client"`):
  - Framer Motion `motion.div` with `whileInView` fade-in-on-scroll
  - Props: `children`, optional `delay`, optional `className`
  - Default: fade up from 30px, opacity 0→1, 0.6s ease-out
  - `viewport={{ once: true, amount: 0.2 }}`

- [ ] **Step 2:** Create `PageTransition.tsx` (`"use client"`):
  - Wrapper using `motion.div` — fade in + slight upward slide on mount

- [ ] **Step 3:** Verify: Wrap some test content in `AnimatedSection`, confirm fade-in works on scroll

- [ ] **Step 4:** Commit:

```bash
git add src/components/shared/
git commit -m "feat: add scroll animation and page transition components"
```

---

## Task 5: Homepage

**Files:**
- Modify: `src/app/page.tsx`
- Create: `src/components/home/HeroSection.tsx`
- Create: `src/components/home/ChapterCard.tsx`

- [ ] **Step 1:** Create `HeroSection.tsx`:
  - Full-viewport hero with warm dark gradient or Unsplash Australia image with dark overlay
  - Large serif title: "The Swishers Go Down Under"
  - Subtitle: "An Australian Adventure — November 2026"
  - Scroll indicator at bottom (animated down arrow)

- [ ] **Step 2:** Create `ChapterCard.tsx`:
  - Props: `chapter: Chapter`
  - Card with hero image, chapter number label, title, subtitle, date range
  - Left border or top accent in chapter color
  - Hover: slight scale-up + shadow
  - Links to `/chapter/[slug]`
  - Responsive: full-width mobile, 2-column grid desktop

- [ ] **Step 3:** Update `src/app/page.tsx`:
  - Import trip data
  - Render `HeroSection`
  - Section with 4 `ChapterCard` components in `AnimatedSection` grid
  - "View Map" and "View Full Table" buttons below

- [ ] **Step 4:** Verify: Homepage renders hero + 4 cards. Cards link to chapters. Responsive on mobile.

- [ ] **Step 5:** Commit:

```bash
git add src/app/page.tsx src/components/home/
git commit -m "feat: add homepage with hero section and chapter cards"
```

---

## Task 6: Chapter Detail Page

**Files:**
- Create: `src/app/chapter/[slug]/page.tsx`
- Create: `src/components/chapter/ChapterHero.tsx`
- Create: `src/components/chapter/Timeline.tsx`
- Create: `src/components/chapter/DayCard.tsx`
- Create: `src/components/chapter/FunFact.tsx`
- Create: `src/components/chapter/ChapterNav.tsx`

- [ ] **Step 1:** Create `ChapterHero.tsx`:
  - Full-width hero image with dark overlay gradient
  - Chapter number, title, subtitle, date range
  - Chapter accent color on the chapter number label

- [ ] **Step 2:** Create `FunFact.tsx`:
  - Warm tan (#C8B99A) background callout box
  - Light bulb icon + italic serif text
  - Rounded corners, padding

- [ ] **Step 3:** Create `DayCard.tsx`:
  - Props: `day: Day`, `chapterColor: string`
  - `id={`day-${day.dayNumber}`}` for deep linking + `scroll-margin-top: 80px`
  - Day number + formatted date, title, subtitle
  - Morning / Afternoon / Evening activity sections
  - Renders `FunFact` components if `funFacts` exist
  - Left border in chapter accent color, white card on cream bg

- [ ] **Step 4:** Create `Timeline.tsx`:
  - Vertical timeline line in chapter accent color on the left
  - Renders `DayCard` components with timeline dots
  - Each `DayCard` wrapped in `AnimatedSection` with staggered delay

- [ ] **Step 5:** Create `ChapterNav.tsx`:
  - Bottom navigation: "← Previous: [Title]" / "Next: [Title] →"
  - 44px+ button height, chapter accent colors
  - First chapter: only Next. Last chapter: only Previous + "Back to Home"

- [ ] **Step 6:** Create `src/app/chapter/[slug]/page.tsx`:
  - `generateStaticParams` returns 4 slugs: `sydney`, `tasmania`, `coastal-drive`, `wedding`
  - `export const dynamicParams = false`
  - `generateMetadata` for per-chapter titles
  - **Critical:** `await params` before accessing `.slug` (Next.js 15 change)
  - Render: `ChapterHero` → `Timeline` (with `DayCard` children) → `ChapterNav`

- [ ] **Step 7:** Verify: Navigate to all 4 chapter URLs. Timeline renders all days with fun facts. Prev/next nav works. Mobile responsive.

- [ ] **Step 8:** Commit:

```bash
git add src/app/chapter/ src/components/chapter/
git commit -m "feat: add chapter detail pages with vertical timeline and day cards"
```

---

## Task 7: Map View Page

**Files:**
- Create: `src/app/map/page.tsx`
- Create: `src/components/map/TripMap.tsx`

- [ ] **Step 1:** Create `TripMap.tsx` (`"use client"`):
  - Full-screen Leaflet map (`height: calc(100vh - 64px)`)
  - Import `MapContainer`, `TileLayer`, `Marker`, `Popup`, `Polyline` from `react-leaflet`
  - Import `leaflet/dist/leaflet.css`
  - **Tiles:** CartoDB Voyager (`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`)
  - **Center:** `{lat: -30, lng: 140}`, zoom 4 (fits all of Australia)
  - **Markers:** Custom `L.divIcon` with inline SVG circles in chapter accent colors (avoids broken default icon issue)
  - **Popups:** Day title, date, chapter name, link to `/chapter/[slug]#day-{dayNumber}`
  - **Polylines:** 4 polylines (one per chapter) in chapter accent colors. Dashed lines between chapters for transit.
  - **Mobile:** `scrollWheelZoom={false}`, touch gestures enabled

- [ ] **Step 2:** Create `src/app/map/page.tsx`:
  - Import `TripMap` via `next/dynamic` with `{ ssr: false }` — **critical for static export**
  - Loading fallback: centered "Loading map..." on cream background
  - Pass itinerary data as props

- [ ] **Step 3:** Verify: Map renders centered on Australia. All 17 markers visible with correct colors. Click marker → popup with link. Polylines connect stops. Mobile pinch-zoom works.

- [ ] **Step 4:** Commit:

```bash
git add src/app/map/ src/components/map/
git commit -m "feat: add full-screen Leaflet map view with route and chapter markers"
```

---

## Task 8: Table View Page

**Files:**
- Create: `src/app/table/page.tsx`

- [ ] **Step 1:** Create `src/app/table/page.tsx`:
  - Page title: "Your Complete Itinerary" in Playfair Display
  - **Desktop (md+):** HTML `<table>` with columns: Day #, Date (e.g. "Wed, Nov 4"), Location, Highlights
  - Rows grouped by chapter with colored header row per chapter (chapter title + dates, full-width, white text on chapter color)
  - Alternating row shading within each group
  - Each row clickable → `/chapter/[slug]#day-{dayNumber}`
  - **Mobile:** Switch to stacked card layout (cards with chapter-color left border)
  - Wrapped in `AnimatedSection`
  - 16px+ font sizes throughout

- [ ] **Step 2:** Verify: Table shows all 17 days in 4 groups. Rows link to correct day anchors. Mobile card view works. Text readable at all sizes.

- [ ] **Step 3:** Commit:

```bash
git add src/app/table/
git commit -m "feat: add table view page with responsive day listing"
```

---

## Task 9: Chapter Mini-Map

**Files:**
- Create: `src/components/chapter/ChapterMiniMap.tsx`
- Modify: `src/app/chapter/[slug]/page.tsx`

- [ ] **Step 1:** Create `ChapterMiniMap.tsx` (`"use client"`):
  - Small Leaflet map (300px height) zoomed to chapter region
  - Per-chapter zoom: Sydney ~12, Tasmania ~7, Coastal ~7, Wedding ~11
  - Markers for days in that chapter only, polyline in chapter color
  - No popups — just visual context
  - Uses same CartoDB Voyager tiles and custom `divIcon` markers from Task 7

- [ ] **Step 2:** Update `src/app/chapter/[slug]/page.tsx`:
  - Add dynamic import of `ChapterMiniMap` with `{ ssr: false }`
  - Render between hero and timeline sections

- [ ] **Step 3:** Verify: Each chapter page shows correctly zoomed mini-map with chapter stops marked.

- [ ] **Step 4:** Commit:

```bash
git add src/components/chapter/ChapterMiniMap.tsx src/app/chapter/\[slug\]/page.tsx
git commit -m "feat: add chapter mini-maps with zoomed region view"
```

---

## Task 10: Polish, Accessibility, and Deployment

**Files:** Various existing files, plus `public/favicon.ico`

- [ ] **Step 1: Accessibility audit:**
  - Add `aria-label` to hamburger menu, map markers, nav buttons
  - Ensure all Unsplash images have descriptive `alt` text
  - Add skip-to-content link in header
  - Verify tab navigation through all interactive elements

- [ ] **Step 2: Image optimization:**
  - Unsplash URLs: `?w=1200&q=80` for heroes, `?w=600&q=75` for thumbnails
  - Add `loading="lazy"` to below-fold images
  - Add `fetchpriority="high"` on hero images
  - Set proper `width`/`height` attributes to prevent CLS

- [ ] **Step 3: Open Graph and metadata:**
  - Add OG image to `public/images/og-image.jpg`
  - Set `metadataBase` in root layout
  - Per-chapter OG metadata with chapter-specific descriptions

- [ ] **Step 4: Day anchor scroll offset:**
  - Verify each `DayCard` has `id={`day-${day.dayNumber}`}`
  - Add `scroll-margin-top: 80px` so sticky header doesn't obscure anchored content

- [ ] **Step 5: Favicon:**
  - Add a simple favicon to `public/favicon.ico`

- [ ] **Step 6: Final verification:**

```bash
npm run build
npx serve out
```

Run Lighthouse on homepage, a chapter page, map, and table. Target: 90+ Performance, 95+ Accessibility.

- [ ] **Step 7:** Commit:

```bash
git add -A
git commit -m "chore: polish accessibility, OG metadata, image optimization, and deploy config"
```

- [ ] **Step 8: Deploy to Vercel:**
  - Push to GitHub
  - Connect repo to Vercel (auto-detects Next.js)
  - Verify all pages work on production URL

---

## Task Dependency Graph

```
Task 0: Scaffold
  ├── Task 1: Data + Types
  ├── Task 2: Styles + Root Layout
  │     └── Task 3: Header/Footer/MobileMenu
  └── Task 4: Animation Components
        ├── Task 5: Homepage (needs 1, 2, 3, 4)
        ├── Task 6: Chapter Detail (needs 1, 2, 3, 4)
        │     └── Task 9: Chapter Mini-Map (needs 6, 7)
        ├── Task 7: Map View (needs 1, 2, 3)
        └── Task 8: Table View (needs 1, 2, 3, 4)
              └── Task 10: Polish + Deploy (needs all)
```

**Parallelizable:** Tasks 5, 6, 7, 8 can run in parallel once Tasks 0–4 complete.

---

## Key Risks and Mitigations

| Risk | Mitigation |
|------|------------|
| Leaflet SSR crash (`window is not defined`) | Always use `next/dynamic` with `ssr: false` for Leaflet components |
| Leaflet default marker icons broken | Use custom `L.divIcon` with inline SVG circles |
| Tailwind CSS 4 vs v3 confusion | No `tailwind.config.js`. All config in CSS `@theme`. PostCSS plugin is `@tailwindcss/postcss` |
| `next/image` with static export | `images: { unoptimized: true }` in `next.config.ts` |
| Next.js 15 async `params` | Must `await params` before accessing `.slug` in dynamic routes |
| Unsplash rate limits | Use direct image URLs with size params, not the API |
