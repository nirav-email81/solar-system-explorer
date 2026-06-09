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
├── DESIGN.md                      # This document
├── SETUP.md                       # Setup instructions
├── prompt.txt                     # AI replication prompt
├── public/                        # Static assets
└── src/
    ├── main.tsx                   # App entry point
    ├── App.tsx                    # Root component + routing
    ├── index.css                  # Global styles
    ├── vite-env.d.ts              # Vite type declarations
    ├── types/
    │   └── index.ts               # CelestialBody type definition
    ├── data/
    │   └── solarSystemData.ts     # Complete solar system dataset (27 bodies)
    ├── pages/
    │   ├── Home.tsx               # Landing page with search + categories
    │   ├── SolarSystemView.tsx    # 3D view page wrapper
    │   ├── CelestialBodyPage.tsx  # Detail page for any body
    │   └── About.tsx              # About / credits page
    └── components/
        ├── Navigation.tsx         # Top navigation bar
        ├── SolarSystem3D.tsx      # 3D scene (main component)
        ├── PlanetCard.tsx         # Card for body listings
        └── SearchBar.tsx          # Live search component
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
    ├── /body/:id → CelestialBodyPage
    │   ├── Physical Characteristics
    │   ├── Orbital Characteristics
    │   ├── Composition
    │   ├── Atmosphere (with bar chart)
    │   ├── Exploration Missions
    │   ├── Highlights & Facts
    │   └── Moons list (if applicable)
    └── /about → About
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
├── Stars (particle system, 3000 stars)
├── SunMesh (at origin)
│   ├── SphereGeometry (glowing, emissive)
│   └── PointLight (casts light)
├── PlanetSystem[] (one per planet/dwarf planet)
│   ├── Group (inclined rotation)
│   │   └── Group (elliptical orbit position, animated)
│   │       ├── Planet Mesh (sphere)
│   │       ├── Planet Label (Text)
│   │       ├── Saturn Rings (if applicable)
│   │       └── MoonBody[] (orbit within group)
│   └── OrbitRing (elliptical line + invisible clickable tube)
└── BeltMesh[] (particle systems)
    └── Points (800 particles each)
```

### Orbital Simulation

- Each planet follows Keplerian orbital elements:
  - Semi-major axis (`a`) derived from `distanceFromSun_au`
  - Eccentricity (`e`) shapes the ellipse
  - Inclination (`i`) tilts the orbit plane
- Position at time `t`: `x = a·cos(t) - c`, `z = b·sin(t)` where `c = a·e`, `b = a·√(1-e²)`
- Orbital speed proportional to `1/√(a³)` (Kepler's Third Law)
- User-controlled speed multiplier (0.25x to 5x) and pause

### Camera Controls

- Default: overview position looking at origin
- Click-to-focus: smooth camera animation toward any body
- Reset button returns to overview
- OrbitControls for user interaction (drag, zoom, pan)
- Hover detection on bodies and orbit rings

### Interactive Features

- **Click body**: focus camera + navigate to detail page
- **Click orbit ring**: same as clicking the body (clickable TubeGeometry)
- **Hover body**: highlight + glow + tooltip label
- **Hover orbit**: brighter line + planet name label
- **Speed controls**: 0.25x, 0.5x, 1x, 2x, 5x + pause/play
- **Reset view**: return camera to overview

## Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | Home | Hero, search, planet grid, categories |
| `/solar-system-3d` | SolarSystemView | 3D interactive scene |
| `/body/:id` | CelestialBodyPage | Detailed info page |
| `/about` | About | Project info + references |

## Styling

- Dark theme (space-themed)
- CSS custom properties for theming
- Responsive (mobile-friendly via media queries)
- Consistent card-based layouts
- Accent color: blue (#6a88ff)
- Backdrop blur effects for overlays
