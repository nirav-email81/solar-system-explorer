---
marp: true
theme: default
paginate: true
backgroundColor: '#0a0a1a'
color: '#e0e0e0'
style: |
  section {
    font-family: 'Segoe UI', sans-serif;
    background: linear-gradient(135deg, #0a0a1a 0%, #1a1a3e 100%);
    color: #e0e0e0;
  }
  h1, h2, h3 { color: #ffffff; }
  a { color: #64b5f6; }
  code { background: #1a1a3e; color: #81d4fa; }
  strong { color: #81d4fa; }
  table { font-size: 0.85em; }
  th { color: #81d4fa; }
  em { color: #b0bec5; }
  .highlight { color: #ffd54f; }
  section.lead h1 { font-size: 2.5em; }
  section.lead h2 { font-size: 1.2em; color: #b0bec5; }
  section.end { text-align: center; }
  section.end h2 { color: #64b5f6; }
---

<!-- _class: lead -->

# Solar System Explorer

### Interactive 3D Visualization + AI-Powered Chat

<br>

Created by **Nirav Chhaya**
[niravchhaya@linkedin.com](https://www.linkedin.com/in/niravchhaya/)

---

## What Is It?

A **full-stack web application** that visualizes the Solar System in 3D with an AI chat assistant powered by a custom RAG pipeline.

### Key Numbers

| Metric | Value |
|--------|-------|
| Celestial bodies | **29** (Sun, 8 planets, Moon, 8 moons, dwarf planets, belts, Lagrange) |
| Knowledge chunks | **~130+** curated astronomical entries |
| Tech stack | React, TypeScript, Three.js, Groq API |
| Total cost | **$0** (all free-tier services) |

---

## Architecture Overview

```
┌─────────────────────────────────────────────────┐
│                   CLIENT (Browser)              │
│                                                 │
│  React Router ─→ Pages ─→ 3D Scene (Three.js)  │
│                    │                             │
│                    └─→ Chat ─→ TF-IDF Engine    │
│                              (client-side)       │
│                                  │               │
└──────────────────────────────────┼───────────────┘
                                   │
                    POST /chat     │
                                   ▼
              ┌────────────────────────────────┐
              │   Netlify Function (Node.js)   │
              │   → Groq API (qwen/qwen3-27b)  │
              └────────────────────────────────┘
```

---

## 3D Scene — Keplerian Orbital Mechanics

- Each body follows **Kepler's laws** with real orbital elements
  - Eccentricity shapes the ellipse
  - Inclination tilts the orbital plane
  - Speed ∝ 1/√a³ (Kepler's Third Law)
- **Planet self-rotation** at real relative speeds
- **Axial tilt** applied to mesh (Uranus 97.77°, Saturn 26.73°)
- **Saturn rings**: 4 bands with Cassini Division gap
- **Sun**: warm white (#FFF5E1) with animated pulsating corona
- **29 bodies** simultaneously at 60fps

---

## 3D Scene — Interactive Features

### Controls

| Key | Action | Key | Action |
|-----|--------|-----|--------|
| Space | Pause/Resume | O | Toggle orbits |
| + / - | Speed control | B | Toggle belts |
| R | Reset camera | L | Toggle labels |
| F | Fullscreen | | |

### Camera

- Click any body → smooth focus with distance scaling
- Click orbit ring → same as clicking the body
- Hover → glow highlight + tooltip
- OrbitControls for drag/zoom/pan

---

## RAG Pipeline — How It Works

### Retrieval (Client-Side, Free)

```
User Query
  → Tokenize + Stop Word Removal
  → TF-IDF Vectorization (sublinear TF, smoothed IDF)
  → Cosine Similarity against ~130+ chunks
  → Top-3 Retrieved Chunks
```

### Generation (Groq API, ~2s)

```
System: "You are a Solar System expert..."
Context: [Source 1] [Source 2] [Source 3]
Question: "What causes tidal heating on Europa?"
         ↓
    Groq API (qwen/qwen3-27b)
         ↓
    Answer + Thinking Tags
```

**No vector database, no embedding API — zero cost for retrieval.**

---

## RAG — Why TF-IDF Over Embeddings?

| Criteria | TF-IDF | Vector Embeddings |
|----------|--------|-------------------|
| Cost | **$0** | ~$0.02/1M tokens |
| Dependencies | **0** (vanilla TS) | Pinecone, OpenAI SDK |
| Speed | **<50ms** (browser) | ~200ms + API call |
| Scale | ~10K chunks | 10M+ chunks |
| Semantic matching | ❌ keyword only | ✅ conceptual |

> **Decision**: At ~130+ domain-specific chunks, TF-IDF is the right tradeoff. Switch to embeddings at 10K+.

---

## Data Engineering

### 29 Celestial Bodies

- **Per-body**: 15+ structured fields (physical, orbital, atmosphere, missions, facts)
- **Moon subsystems**: Io, Europa, Ganymede, Callisto, Titan, Enceladus, Triton, Charon

### Knowledge Chunks (~130+)

- Per-body: overview, physical, orbital, atmosphere, exploration, facts
- **8 gravity concepts**: Newton's law, tidal forces, Roche limit, orbital resonance, gravitational assists, escape velocity, Hill sphere, barycenter
- System: overview, scale, galactic orbit, orbital speeds

### Special Topics

- Lagrange points (L1-L5, JWST at L2, Trojan asteroids)
- Van Allen radiation belts (inner/outer, South Atlantic Anomaly)
- Venus super-rotation (360 km/h winds)

---

## Production Features

### SEO & Analytics

- Dynamic per-page `<title>` tags, Open Graph, Twitter cards
- `robots.txt` + `sitemap.xml`
- Visitor counter with country-level geolocation (ip-api.com + countapi)

### Chat Features

- Conversation threading (last 10 messages)
- Markdown rendering with React Markdown
- Clickable source badges → `/body/{id}` detail pages
- Collapsible "Model thinking" section
- Soft redirect for off-topic questions
- 5 suggestion categories: Planets, Moons, Missions, Science, Gravity

### UI/UX

- Scroll-reveal animations (IntersectionObserver)
- Skeleton loaders for async data
- Mobile hamburger navigation
- Hero starfield (CSS-only, no canvas)
- 4 responsive breakpoints (480, 768, 1024, 1200px)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| 3D Engine | Three.js (React Three Fiber + Drei) |
| Build | Vite 5 |
| AI Chat | Groq API (`qwen/qwen3-27b`) |
| RAG | Client-side TF-IDF (~130+ chunks) |
| Serverless | Netlify Functions |
| Routing | React Router v6 |
| Markdown | React Markdown |
| Tracking | ip-api.com + countapi |
| SEO | Dynamic meta, OG, sitemap |
| Hosting | Netlify (free tier) |

**Total paid services: $0**

---

## Interview Q&A — Common Questions

**Q: How does the 3D simulation work?**
> Keplerian orbital elements — eccentricity shapes the ellipse, inclination tilts the plane, speed ∝ 1/√a³. Planets self-rotate with axial tilt.

**Q: Why not vector embeddings?**
> At ~130+ domain-specific chunks, TF-IDF is faster, free, and accurate enough. Embeddings shine at 10K+ chunks.

**Q: How do you handle hallucination?**
> System prompt instructs model to cite sources. Source badges let users verify answers. Off-topic gets soft redirect.

**Q: How would you scale?**
> Switch to embeddings + vector DB at 10K+ chunks. Add caching, rate limiting, move retrieval server-side.

---

<!-- _class: end -->

# Thank You

**Solar System Explorer** — 29 bodies, 3D orbital mechanics, AI chat, $0 cost

<br>

[Nirav Chhaya](https://www.linkedin.com/in/niravchhaya/) • [Live Site](https://solarsystemexplorerwith3dview.netlify.app/) • [GitHub](https://github.com/nirav-email81/solar-system-explorer)

*Built with Opencode*
