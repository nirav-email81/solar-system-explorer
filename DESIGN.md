# Solar Explorer — Design Document

## Overview

Solar Explorer is an interactive single-page web application that visualizes and provides detailed information about the Solar System. Users can explore celestial bodies through a 3D interactive view and detailed information pages.

## Architecture

### Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 |
| Language | TypeScript |
| 3D Engine | Three.js (via @react-three/fiber) |
| 3D Helpers | @react-three/drei |
| Routing | React Router v6 |
| Build Tool | Vite 5 |
| Styling | Vanilla CSS (custom properties) |

### Project Structure

```
solar-system/
├── index.html                     # Entry HTML
├── package.json                   # Dependencies & scripts
├── tsconfig.json                  # TypeScript config
├── vite.config.ts                 # Vite config
├── netlify.toml                   # Netlify build config
├── DESIGN.md                      # This document
├── SETUP.md                       # Setup instructions
├── INTERVIEW.md                   # Technical interview guide
├── prompt.txt                     # AI replication prompt
├── README.md                      # Project overview
├── .gitignore                     # Git ignore rules
├── public/                        # Static assets
│   ├── _redirects                 # SPA fallback
│   ├── robots.txt                 # Crawler directives
│   └── sitemap.xml                # Route listing for SEO
├── netlify/
│   └── functions/
│       ├── chat.ts                # Groq API serverless function
│       └── track.ts               # Visit tracking + geolocation
└── src/
    ├── main.tsx                   # App entry point
    ├── App.tsx                    # Root component + routing
    ├── index.css                  # Global styles
    ├── vite-env.d.ts              # Vite type declarations
    ├── types/
    │   └── index.ts               # CelestialBody type definition
    ├── data/
    │   └── solarSystemData.ts     # Complete solar system dataset (29 entries)
    ├── lib/
    │   ├── tfidf.ts               # TF-IDF engine (tokenize, IDF, cosine similarity)
    │   ├── chunkData.ts           # Knowledge chunking (~120 chunks from 29 bodies)
    │   └── rag.ts                 # RAG orchestration (retrieve → prompt → chat)
    ├── pages/
    │   ├── Home.tsx               # Landing page with search + categories + visit counter
    │   ├── SolarSystemView.tsx    # 3D view page wrapper
    │   ├── SolarSystemFacts.tsx   # Solar System fact sheet page
    │   ├── CelestialBodyPage.tsx  # Detail page for any body
    │   ├── About.tsx              # About / credits / AI info / global reach
    │   └── Chat.tsx               # Chat page wrapper
    ├── hooks/
    │   └── useScrollReveal.ts       # Intersection Observer scroll-reveal hook
    └── components/
        ├── Navigation.tsx           # Top nav with mobile hamburger menu
        ├── SolarSystem3D.tsx        # 3D scene (main component)
        ├── PlanetCard.tsx           # Card for body listings
        ├── SearchBar.tsx            # Live search component
        ├── ChatBot.tsx              # Chat UI with markdown, copy, categories
        ├── VisitCounter.tsx         # Visitor counter + country flag
        ├── TrafficMap.tsx           # Country visit bar chart
        ├── SEOHead.tsx              # Dynamic per-page meta tags
        ├── Footer.tsx               # Site footer with creator credit
        └── Skeleton.tsx             # Skeleton loading components
```

## Component Tree

```
App
├── Navigation
└── Routes
    ├── / → Home
    │   ├── SearchBar
    │   ├── PlanetCard[] (planets)
    │   └── CategoryCard[]
    ├── /solar-system-3d → SolarSystemView
    │   └── SolarSystem3D
    │       ├── Canvas (Three.js)
    │       │   ├── SunMesh
    │       │   ├── PlanetSystem[] (planet + moons)
    │       │   │   ├── BodyMesh (planet)
    │       │   │   ├── BodyLabel
    │       │   │   ├── MoonBody[] (if applicable)
    │       │   │   └── SaturnRings (if Saturn)
    │       │   ├── OrbitRing[] (elliptical paths)
    │       │   ├── BeltMesh[]
    │       │   ├── CameraController
    │       │   └── OrbitControls
    │       └── SimControls (speed/pause/reset UI)
    ├── /facts → SolarSystemFacts
    │   ├── Overview (age, location, counts, galactic year)
    │   ├── What is an AU? (definition, distances, NASA link)
    │   ├── Size & Scale
    │   ├── Orbital & Physical Extremes
    │   ├── Heliosphere & Solar Activity
    │   ├── Exploration Milestones
    │   ├── Quick Facts
    │   └── Galactic Orbit & the Galactic Year
    ├── /body/:id → CelestialBodyPage
    │   ├── Physical Characteristics
    │   ├── Orbital Characteristics
    │   ├── Composition
    │   ├── Atmosphere (with bar chart)
    │   ├── Exploration Missions
    │   ├── Highlights & Facts
    │   └── Moons list (if applicable)
    └── /about → About
        ├── Mission & Included Bodies
        ├── Key Science Topics
        ├── AI-Powered Chat Assistant (RAG details)
        ├── Data Sources & References
        ├── Global Reach (TrafficMap)
        ├── Technology
        └── Tech Stack
```

## Data Model

### CelestialBody (TypeScript interface)

```typescript
interface CelestialBody {
  id: string;                       // Unique identifier
  name: string;                     // Display name
  type: 'star' | 'planet' | 'dwarf-planet' | 'moon' | 'belt' | 'other';
  parentId?: string;                // Orbital parent (for moons)
  description: string;              // Long-form overview

  physicalCharacteristics: {
    diameter_km: number;
    mass_kg: string;
    surfaceGravity_m_s2?: number;
    escapeVelocity_km_s?: number;
    meanTemperature_C: string;
    axialTilt_degrees?: number;
    dayLength?: string;
  };

  orbitalCharacteristics: {
    distanceFromSun_au: number;     // Semi-major axis
    orbitalPeriod_years: string;
    orbitalPeriod_days: string;
    eccentricity: number;           // 0 = circle, 0-1 = ellipse
    inclination_degrees: number;     // Orbit tilt
    orbitalSpeed_km_s?: number;
  };

  atmosphere?: { composition: {element, percentage}[]; description: string };
  composition?: { type: string; details: string };
  moons?: string[];                  // IDs of child moons
  exploration: { missions: Mission[]; highlights: string[] };
  interestingFacts: string[];
  color: string;                    // Hex color for rendering
  radius: number;                   // Visual scale (abstract)
}
```

## 3D Rendering

### Scene Hierarchy

```
Scene
├── Background: #0a0a1a
├── AmbientLight (0.3)
├── Stars (particle system, 6000 stars)
├── SunMesh (at origin)
│   ├── SphereGeometry (32x32, warm white #FFF5E1, emissive)
│   ├── 3 Corona glow layers (animated pulsation)
│   └── PointLight (intensity 2.5, distance 80, white)
├── PlanetSystem[] (one per planet/dwarf planet)
│   ├── Group (inclined by orbital inclination)
│   │   └── Group (elliptical orbit position, animated)
│   │       ├── BodyMesh (sphere, 32x32, self-rotating, axial tilt applied)
│   │       ├── BodyLabel (visible for all body types including moons)
│   │       ├── SaturnRings (4 bands: C, B, Cassini Division, A)
│   │       ├── GenericRings (Uranus, Jupiter)
│   │       └── MoonBody[] (orbit with visible orbit line)
│   └── OrbitRing (dashed line + invisible clickable tube)
├── BeltMesh[] (particle systems)
│   └── Points (800 for asteroid/kuiper, 300 for trojan at L4/L5)
└── LagrangePoints3D (Earth L1/L2/L4/L5, Jupiter L4/L5)
```

### Orbital Simulation

- Each planet follows Keplerian orbital elements:
  - Semi-major axis (`a`) derived from `distanceFromSun_au`
  - Eccentricity (`e`) shapes the ellipse
  - Inclination (`i`) tilts the orbit plane
- Position at time `t`: `x = a·cos(t) - c`, `z = b·sin(t)` where `c = a·e`, `b = a·√(1-e²)`
- Orbital speed proportional to `1/√(a³)` (Kepler's Third Law)
- User-controlled speed multiplier (0.25x to 5x) and pause

### Planet Rendering

- Self-rotation: each planet spins at its real relative speed (Earth=1.0, Jupiter=2.4, Venus=0.005)
- Axial tilt: applied to mesh rotation (Uranus 97.77°, Saturn 26.73°, etc.)
- Sun color: warm white `#FFF5E1` (scientifically accurate, not golden yellow)
- Geometry: 32x32 segments for all planets and Sun

### Ring Systems

- **Saturn**: 4 bands — Ring C (inner, `#B0A06A`), Ring B (main, `#C8B87A`), Cassini Division (gap, `#1a1a2e`), Ring A (outer, `#D4C48A`)
- **Uranus**: Light blue rings (`#7EC8E3`, opacity 0.25)
- **Jupiter**: Faint brown rings (`#A09070`, opacity 0.15)
- All rings use actual axial tilt from data

### Camera Controls

- Default: overview position (25, 15, 25) looking at origin
- Click-to-focus: smooth lerp camera animation toward any body
- Camera distance scales by body size (closer to Mercury, further from Jupiter)
- Reset button returns to overview
- OrbitControls for user interaction (drag, zoom, pan)
- Hover detection on bodies and orbit rings

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| Space | Pause / Resume |
| + / = | Increase speed |
| - | Decrease speed |
| R | Reset view |
| O | Toggle orbit lines |
| B | Toggle belt particles |
| L | Toggle labels |
| F | Toggle fullscreen |

### Toggle Controls

- **Orbits**: Show/hide dashed orbit lines
- **Belts**: Show/hide asteroid belt, Kuiper belt, Trojan asteroids
- **Labels**: Show/hide body name labels
- **L-points**: Show/hide Lagrange points

### Interactive Features

- **Click body**: focus camera + navigate to detail page
- **Click orbit ring**: same as clicking the body (clickable TubeGeometry)
- **Hover body**: highlight + glow + tooltip label
- **Hover orbit**: brighter line + planet name label
- **Speed controls**: 0.25x, 0.5x, 1x, 2x, 5x + pause/play
- **Reset view**: return camera to overview
- **Fullscreen**: toggle fullscreen mode

## Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | Home | Hero, search, planet grid, categories, visit counter |
| `/solar-system-3d` | SolarSystemView | 3D interactive scene |
| `/facts` | SolarSystemFacts | Solar System fact sheet |
| `/body/:id` | CelestialBodyPage | Detailed info page |
| `/about` | About | Project info, AI details, references, global reach |
| `/chat` | Chat | AI-powered chat assistant |

## RAG Pipeline Architecture

```
User Query
  → TF-IDF Tokenize (client-side)
  → Cosine Similarity against ~120 knowledge chunks
  → Top-3 Retrieved Chunks
  → Build Prompt (context + query + history)
  → Netlify Function (serverless)
  → Groq API (qwen/qwen3-27b)
  → Response with <think> tags
  → Thinking Extraction (decode HTML entities)
  → Display Answer + Sources + Collapsible Thinking
```

### Knowledge Base

- ~130+ curated text chunks from 29 celestial bodies + solar system topics
- Per-body chunks: overview, physical stats, orbital stats, atmosphere, exploration, facts
- Concept chunks: Newton's law, tidal forces, orbital resonance, gravity assists, escape velocity, Hill sphere, barycenter, orbital decay
- System chunks: overview, scale, galactic orbit, orbital directions, orbital speeds, out-of-plane
- Client-side TF-IDF retrieval (no external embedding API)
- Conversation threading: previous messages passed as context

### Chat UX

- Suggestion categories: Planets, Moons, Missions, Science, Gravity
- Knowledge scope display on welcome screen
- Soft redirect for off-topic questions (prompts user to ask astronomy questions)
- Clickable source badges linking to body detail pages
- Copy answer button with clipboard API
- Markdown rendering via React Markdown
- Collapsible "Model thinking" section showing LLM reasoning

### Visit Tracking

```
Visitor lands on site
  → Client calls /.netlify/functions/track
  → Function calls ip-api.com (free, no key)
  → Gets country + city
  → Increments main counter on countapi
  → Increments country-specific counter on countapi
  → Returns { country, city, totalVisits, flag }
```

## Styling

- Dark theme (space-themed)
- CSS custom properties for theming
- Responsive (mobile-friendly via media queries)
- Consistent card-based layouts
- Accent color: blue (#6a88ff)
- Backdrop blur effects for overlays
- Flexbox `min-height: 0` on chat containers to fix overflow scrolling
