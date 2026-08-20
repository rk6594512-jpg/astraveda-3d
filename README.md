# AstraVeda 3D

> Read Your Cosmic Blueprint.

A premium, cinematic, mobile-first AI-powered Vedic astrology and cosmic guidance platform.

## Features

- **Interactive 3D Birth Charts** — D1, D9, D10 with planetary positions
- **Palm Vision** — AI-assisted palm reading with image analysis
- **Astra AI Chat** — Chart-aware AI Jyotishi in Hindi & English
- **Kundli Matching** — Ashtakoot compatibility analysis
- **Panchang & Muhurat** — Daily cosmic calendar and auspicious timing
- **PDF Reports** — Personalized astrological reports
- **Multi-Agent AI** — Specialized agents for kundli, dasha, transit, palm
- **PWA Support** — Installable on mobile and desktop

## Tech Stack

- **Framework:** Next.js 14 App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **3D:** React Three Fiber + Three.js + Drei
- **Animation:** Framer Motion
- **Backend:** Supabase (Auth + PostgreSQL)
- **AI:** Gemini / OpenRouter (Phase 5)
- **Deployment:** Vercel / Netlify

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
app/                    # Next.js App Router
  (routes)/            # Route groups
  api/                 # API routes
  auth/                # Login / Signup
  kundli/              # Birth chart dashboard
  palm-scan/           # Palm analysis studio
  ai-jyotishi/         # AI chat interface
  matchmaking/         # Kundli matching
  panchang/            # Daily panchang
  muhurat/             # Auspicious timing finder
  reports/             # Saved reports
  profile/             # User profile
  settings/            # Privacy & preferences
  admin/               # Admin dashboard
components/
  hero/                # 3D zodiac wheel, starfield
  sections/            # Landing page sections
  layout/              # Navbar, Footer
  ui/                  # shadcn/ui components
lib/
  supabase/            # Supabase client, server, middleware
  utils.ts             # Utilities
  mock-data.ts         # Mock chart data
types/
  astrology.ts         # Complete type definitions
supabase/
  schema.sql           # Database schema
public/
  manifest.json        # PWA manifest
  sw.js               # Service worker
```

## Deployment

### Vercel (Recommended)
```bash
npx vercel --prod
```

### Netlify
```bash
npx netlify deploy --prod --build
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

## Database Setup

1. Create Supabase project
2. Run `supabase/schema.sql` in SQL Editor
3. Enable Row Level Security

## Implementation Phases

| Phase | Status | Description |
|-------|--------|-------------|
| Phase 1 | ✅ | Design system & project scaffold |
| Phase 2 | ✅ | Landing page & 3D hero |
| Phase 3 | ✅ | Onboarding & kundli dashboard |
| Phase 4 | ✅ | Palm scan & AI chat UI |
| Phase 5 | 🔄 | Backend, auth, calculations |
| Phase 6 | 🔄 | Premium features, PWA, admin |

## License

Proprietary — AstraVeda 3D
