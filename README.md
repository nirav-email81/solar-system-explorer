# Solar System Explorer

Created by [Nirav Chhaya](https://www.linkedin.com/in/niravchhaya/)

An interactive 3D Solar System visualization built with React, TypeScript, and Three.js — featuring an AI-powered chat assistant using RAG (Retrieval-Augmented Generation).

## Live Site

[solarsystemexplorerwith3dview.netlify.app](https://solarsystemexplorerwith3dview.netlify.app)

## Features

- 3D interactive Solar System with elliptical, inclined orbits
- 29 celestial bodies with detailed physical and orbital data
- AI-powered chat assistant (RAG + Groq API)
- Search, category browsing, and detail pages
- Speed controls, orbit ring clicking, hover tooltips
- Solar System Fact Sheet with galactic orbit data
- Global visitor tracking with country breakdown

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| 3D Engine | Three.js (React Three Fiber + Drei) |
| Build Tool | Vite 5 |
| AI Chat | Groq API (`qwen/qwen3-27b`) via Netlify Functions |
| RAG | Client-side TF-IDF retrieval (~120 knowledge chunks) |
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
- [prompt.txt](prompt.txt) — AI replication prompt

---

Built with [Opencode](https://opencode.ai).
