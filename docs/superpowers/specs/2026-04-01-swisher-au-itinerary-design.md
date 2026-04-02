# Swisher Family Australia Itinerary Website — Design Spec

**Date:** 2026-04-01
**Status:** Approved

## Purpose

A personalized, mobile-friendly itinerary website for the Swisher family's November 2026 trip to Australia. The site serves as a beautiful, easy-to-navigate travel companion for a family of four (parents ~60 years old) visiting Australia for their son's wedding in Kangaroo Valley. The site is a gift from Dan — it should feel premium and thoughtful.

## Trip Overview

**Duration:** November 4–20, 2026 (17 days, Australia portion only)

| Chapter | Dates | Location | Theme |
|---------|-------|----------|-------|
| 1. Sydney | Nov 4–7 | Sydney, NSW | Harbour views, Bondi, city vibes |
| 2. Tasmania | Nov 8–14 | Hobart + Tasmania | Wilderness, wine, wild coastlines |
| 3. The Coastal Drive | Nov 15–18 | Melbourne → Kangaroo Valley | Raymond Island koalas, Pebbly Beach kangaroos |
| 4. The Wedding | Nov 19–20 | Kangaroo Valley, NSW | Pre-wedding arrival + wedding day |

**Key logistics:**
- Arrive Sydney (SYD) on Nov 4
- Fly Sydney → Hobart on Nov 7/8
- Spirit of Tasmania ferry Devonport → Melbourne on Nov 14
- Rental car Melbourne → drive coastal route → Kangaroo Valley (Nov 15–18)
- Wedding venue in Kangaroo Valley on Nov 20
- Post-wedding: Tahiti/Fiji (not included on this website)

## Architecture

### Pages

| Page | Route | Description |
|------|-------|-------------|
| Homepage | `/` | Story Hub — hero title, 4 chapter cards, map/table toggle |
| Chapter Detail | `/chapter/[slug]` | Vertical timeline with day cards, fun facts, chapter mini-map |
| Map View | `/map` | Full-screen Leaflet map with route line + chapter markers |
| Table View | `/table` | Clean table of all 17 days — date, location, highlights |

### Navigation

- **Sticky top nav:** Logo/title ("The Swishers Go Down Under" or similar), chapter dropdown, Map link, Table link
- **Chapter-to-chapter:** Bottom navigation on each chapter page ("← Previous: Sydney" / "Next: Tasmania →")
- **Mobile:** Hamburger menu with same links, large tap targets (min 44px)

### Data Model

All content stored as static TypeScript in `data/itinerary.ts`. No database or CMS.

```typescript
interface Trip {
  title: string;
  subtitle: string;
  dates: string;
  chapters: Chapter[];
}

interface Chapter {
  slug: string;           // e.g., "sydney", "tasmania"
  number: number;
  title: string;
  subtitle: string;       // e.g., "Harbour views, Bondi walks & city vibes"
  dates: string;
  color: string;          // Chapter accent color
  heroImage: string;      // Unsplash URL
  location: { lat: number; lng: number }; // Map center
  days: Day[];
}

interface Day {
  date: string;           // "2026-11-04"
  dayNumber: number;      // Trip day number (1-17)
  title: string;          // "Arrive in Sydney"
  subtitle: string;       // Short description
  location: { lat: number; lng: number };
  heroImage: string;
  activities: {
    morning?: string;
    afternoon?: string;
    evening?: string;
  };
  funFacts?: string[];    // 0-2 fun facts per day
}
```

### Map View

- **Library:** Leaflet + React Leaflet (free, no API key)
- **Tiles:** OpenStreetMap (or CartoDB Voyager for a cleaner look)
- **Features:**
  - Route line connecting all stops (polyline)
  - Color-coded markers per chapter
  - Click marker → popup with day title + link to chapter
  - Chapter boundaries shown with different line colors
  - Responsive — works on mobile with touch/pinch-zoom

### Table View

- Simple, scannable grid/table of all 17 days
- Columns: Day #, Date, Location, Highlights
- Click any row → navigates to that day's chapter (scrolled to position)
- Color-coded chapter grouping
- Mobile: cards instead of table rows

## Visual Design

### Vibe

Warm editorial — like a premium travel magazine (Condé Nast Traveler). Not flashy, not minimal. Rich, warm, and inviting.

### Color Palette

- **Backgrounds:** Warm cream (#F9F6F2), off-white
- **Text:** Deep charcoal (#2C2C2C)
- **Chapter accents:**
  - Sydney: Deep blue (#1A3A5C)
  - Tasmania: Forest green (#2D6A4F)
  - Coastal Drive: Burnt orange (#C87941)
  - Wedding: Warm gold (#B8860B)
- **Fun fact callouts:** Warm tan (#C8B99A)

### Typography

- **Headings:** Playfair Display (serif) — elegant, editorial
- **Body:** Inter (sans-serif) — clean, readable
- **Fun facts:** Italic serif accent

### Photography

- All photos from Unsplash (free, high-quality stock)
- Hero images per chapter and key days
- Focus on iconic Australian landscapes: Opera House, Harbour Bridge, Wineglass Bay, Great Ocean Road, wildlife

### Animations

- Subtle fade-in on scroll (Framer Motion `whileInView`)
- Smooth page transitions
- Timeline dot animation as you scroll
- Nothing excessive — keep it classy for older audience

## Content Requirements

### Detail Level

High-level overview per day:
- Morning / Afternoon / Evening activity descriptions
- Short, engaging prose (2-3 sentences per activity)
- No specific restaurant links, booking details, or hour-by-hour schedules
- Fun facts woven throughout (1-2 per day)

### Fun Facts

Interesting, surprising tidbits about Australia. Examples:
- "Tasmania has the cleanest air in the world — readings from Cape Grim are used as a global baseline"
- "The Sydney Opera House took 16 years to build and went 1,357% over budget"
- "Raymond Island has more koalas per square meter than anywhere else in Australia"
- "Kangaroos can't walk backwards"
- "Australia has over 10,000 beaches — you could visit a new one every day for 27 years"

### Accessibility for Older Users

- Large, readable font sizes (16px+ body, 14px minimum)
- High contrast text
- Clear navigation with no hidden menus on desktop
- Large button/link tap targets (44px+)
- No autoplay video or audio
- Simple, predictable interactions

## Tech Stack

| Layer | Technology | Reason |
|-------|-----------|--------|
| Framework | Next.js 15 (App Router) | Static export, Vercel native, great DX |
| Styling | Tailwind CSS 4 | Utility-first, responsive, fast |
| Maps | Leaflet + React Leaflet | Free, no API key, good enough for static routes |
| Animation | Framer Motion | Smooth scroll animations, page transitions |
| Fonts | Google Fonts (Playfair Display + Inter) | Free, fast CDN |
| Images | Unsplash | Free, high-quality stock photography |
| Hosting | Vercel | Free tier, zero-config for Next.js |

## Out of Scope

- Tahiti/Fiji post-wedding trip (not included)
- User authentication or personalization
- Booking integrations or reservation links
- Weather forecasts or live data
- Photo upload or user-generated content
- Multi-language support
