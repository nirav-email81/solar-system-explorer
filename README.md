# Solar System Explorer

Created by [Nirav Chhaya](https://www.linkedin.com/in/niravchhaya/)

An interactive 3D Solar System visualization built with React, TypeScript, and Three.js — featuring an AI-powered chat assistant using RAG (Retrieval-Augmented Generation).

## Live Site

[solarsystemexplorerwith3dview.netlify.app](https://solarsystemexplorerwith3dview.netlify.app)

## Features

- 3D interactive Solar System with elliptical, inclined orbits, planet self-rotation, and axial tilt
- Saturn rings with Cassini Division, Uranus and Jupiter rings
- Sun with animated corona glow layers and warm white color (scientifically accurate)
- Dashed orbit lines, moon orbit lines, Trojan asteroids clustered at L4/L5
- Keyboard shortcuts: Space=pause, +/-=speed, O=orbits, B=belts, L=labels, F=fullscreen
- Toggle controls for orbits, belts, labels, and Lagrange points
- 29 celestial bodies with detailed physical and orbital data
- AI-powered chat assistant (RAG + Groq API) covering planets, moons, gravity, orbital mechanics, and astronomy concepts
- Gravity & orbital mechanics topics (Newton's law, tidal forces, Roche limit, resonance, Hill sphere, barycenter)
- Search, category browsing, and detail pages with scroll-reveal animations
- Solar System Fact Sheet with AU explanation, galactic orbit data
- Global visitor tracking with country breakdown
- Mobile-responsive with hamburger navigation

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| 3D Engine | Three.js (React Three Fiber + Drei) |
| Build Tool | Vite 5 |
| AI Chat | Groq API (`qwen/qwen3-27b`) via Netlify Functions |
| RAG | Client-side TF-IDF retrieval (~130+ knowledge chunks) |
| Deployment | Netlify |
| Routing | React Router v6 |
| Markdown | React Markdown |

## Quick Start

```bash
npm install
npm run dev
```

See [SETUP.md](SETUP.md) for full installation instructions including Netlify deployment and Groq API key setup.

## Deployment

The site is deployed on Netlify. See [SETUP.md](SETUP.md) for environment variable configuration.

## Documentation

- [SETUP.md](SETUP.md) — Installation and deployment guide
- [DESIGN.md](DESIGN.md) — Architecture and component documentation
- [INTERVIEW.md](INTERVIEW.md) — Technical interview guide (project presentation, RAG deep dive, Q&A)
- [prompt.txt](prompt.txt) — AI replication prompt

---

Built with [Opencode](https://opencode.ai).
