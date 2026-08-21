# Solar System Explorer — Technical Interview Guide

Created by [Nirav Chhaya](https://www.linkedin.com/in/niravchhaya/)

---

## Project Overview (30-Second Pitch)

> "I built Solar System Explorer — an interactive 3D Solar System visualization with an AI-powered chat assistant. It's a full-stack React + TypeScript + Three.js application deployed on Netlify. The 3D scene simulates Keplerian orbital mechanics for 29 celestial bodies, and the chat uses a custom RAG pipeline I built from scratch — client-side TF-IDF retrieval searching ~130+ knowledge chunks, feeding context to Groq's LLM via Netlify Functions. Everything runs on free-tier services with zero paid dependencies."

---

## 5 Key Presentation Points

### 1. Full-Stack Ownership — Concept to Deployment

> "I conceptualized, designed, built, and deployed this project end-to-end. It's a React + TypeScript + Three.js application with 29 celestial bodies, real-time 3D orbital simulation using Keplerian mechanics, and an AI-powered chatbot — all deployed on Netlify with CI/CD from GitHub. The project includes SEO optimization, visitor tracking with country-level geolocation, and a comprehensive knowledge base of astronomical data."

### 2. 3D Rendering & Orbital Mechanics

> "The 3D scene uses React Three Fiber with elliptical orbits, orbital inclination, moons orbiting planets, belt particle systems, and interactive camera controls. Each body follows Keplerian orbital elements — eccentricity shapes the ellipse, inclination tilts the plane, and orbital speed follows Kepler's third law. The simulation handles 29 bodies simultaneously with smooth performance. The scene includes planet self-rotation with axial tilt, Saturn's rings with a realistic Cassini Division, animated Sun corona pulsation layers, keyboard shortcuts, fullscreen mode, and toggle controls for orbits/belts/labels/Lagrange points. The Earth Lagrange points L1-L5 are rendered with pulsating glow spheres, zone indicator rings, and click-to-focus camera support. I also built a custom RAG chatbot with a client-side TF-IDF retrieval engine — no external embedding API needed — that searches ~130+ knowledge chunks and feeds context to Groq's LLM via Netlify Functions."

### 3. AI/RAG Architecture (Deep Dive)

> "The chatbot uses Retrieval-Augmented Generation. When a user asks a question, the client-side TF-IDF engine tokenizes the query, removes stop words, computes term frequency-inverse document frequency vectors, and finds the top-3 most relevant chunks using cosine similarity. These chunks are injected into a prompt and sent to a Netlify serverless function, which calls the Groq API. The response is parsed to extract the model's thinking process into a collapsible UI element. This architecture keeps retrieval free (no embedding API) while leveraging a powerful LLM for generation."

### 4. Data Engineering & Curation

> "I curated scientific data for 29 celestial bodies — planets, moons, dwarf planets, belts, Lagrange points — covering physical characteristics, orbital mechanics, atmosphere composition, exploration missions, and interesting facts. Each entry has ~15 structured fields. The knowledge base was then chunked into ~130+ retrievable segments optimized for TF-IDF search. I also added dedicated chunks for gravity concepts: Newton's law, tidal forces, Roche limit, orbital resonance, gravitational assists, escape velocity, Hill sphere, barycenter, and orbital decay."

### 5. Production Considerations

> "The site includes SEO meta tags, Open Graph, dynamic per-page titles, a sitemap, and a visitor counter with country-level geolocation tracking. I used countapi for persistent counters and ip-api.com for free geolocation — no database required. The chat has conversation threading, markdown rendering, clickable source badges, and a system prompt that gracefully handles off-topic questions with a soft redirect. The knowledge scope is clearly displayed to users so they understand what the AI can and cannot answer. The UI features scroll-reveal animations, skeleton loaders for async data, a mobile hamburger navigation, and a hero starfield effect — all built with pure CSS, no animation libraries."

---

## Explaining RAG (Deep Dive)

### Why RAG?

> "LLMs have a knowledge cutoff and don't know about my specific data. Fine-tuning is expensive and doesn't guarantee factual accuracy. RAG solves this by retrieving relevant context first, then giving it to the model to generate an answer. The model stays grounded in real data."

### Retrieval Pipeline (TF-IDF)

> "My retrieval is client-side TF-IDF. Here's the pipeline:"

```
User Query
  → Tokenize (lowercase, remove punctuation)
  → Stop Word Removal (common English words)
  → TF-IDF Vectorization (term frequency × inverse document frequency)
  → Cosine Similarity against ~130+ chunks
  → Top-3 Retrieved Chunks
```

> "I built a custom TF-IDF engine in ~120 lines of TypeScript. It computes term frequency with sublinear scaling (0.5 + 0.5 * tf/maxTf) and IDF with smoothed document frequency. No external dependencies — no Pinecone, no Weaviate, no OpenAI embeddings."

### Generation (Groq API)

> "The retrieved chunks are injected into a prompt template:"

```
SYSTEM: You are a knowledgeable astronomy expert...
CONTEXT: [Source 1: Mars - Physical]...
         [Source 2: Mars - Orbital]...
         [Source 3: Solar System - Scale]...
QUESTION: What is the surface gravity of Mars?
```

> "This prompt is sent to a Netlify Function which calls Groq's API (model: qwen/qwen3-27b). I chose Groq for speed — responses come back in under 2 seconds. The response is parsed to extract thinking tags into a collapsible UI element."

### Why This Architecture?

> "Three reasons:
> 1. **Cost** — TF-IDF retrieval is free. No embedding API calls, no vector database.
> 2. **Privacy** — The retrieval runs in the browser. The only server call is the LLM generation.
> 3. **Simplicity** — For ~130+ chunks, TF-IDF is fast enough. I didn't need the complexity of vector embeddings.
>
> If the knowledge base grew to 10,000+ chunks, I'd switch to vector embeddings. But for this scale, TF-IDF is the right tradeoff."

---

## Interview Q&A

### RAG & AI Questions

**Q: Why not use embeddings?**
> "For ~130+ chunks, TF-IDF is faster, free, and accurate enough. Embeddings shine at scale with semantic similarity — they understand that 'Jupiter' and 'gas giant' are related even without exact keyword matches. TF-IDF requires exact or partial keyword overlap. At this scale, the difference is negligible. At 10,000+ chunks, I'd absolutely switch to embeddings + a vector database."

**Q: How do you handle context window limits?**
> "I retrieve top-3 chunks and truncate conversation history to the last 10 messages. The prompt stays well under 4K tokens. The system prompt is ~500 tokens, each chunk is ~200-400 tokens, and user queries are typically under 50 tokens. I also set max_tokens to 2048 for the response to accommodate the model's thinking process."

**Q: What about hallucination?**
> "The system prompt explicitly tells the model to cite sources and indicate when it's supplementing with general knowledge. The source badges in the UI let users verify which celestial body the answer came from. For facts not in the knowledge base, the model is instructed to clearly state it's using general knowledge."

**Q: How would you scale this?**
> "Three upgrades: (1) Switch to vector embeddings (e.g., OpenAI ada-002) for semantic search. (2) Add a vector database (Pinecone, Supabase pgvector) for persistent storage. (3) Move retrieval server-side to handle larger knowledge bases. I'd also add caching for frequent queries and rate limiting."

**Q: Why Groq over OpenAI?**
> "Speed and cost. Groq's inference is significantly faster — responses in under 2 seconds. For a demo project, the free tier is generous. OpenAI would work fine too, but Groq's speed makes the chat feel responsive. The architecture is model-agnostic — I could swap in any OpenAI-compatible API."

**Q: How does conversation threading work?**
> "Previous messages are passed to the Groq API as conversation history. I cap it at the last 10 messages to stay within context limits. This lets users ask follow-up questions like 'What about its moons?' after discussing Jupiter, and the model understands the reference."

### Technical Questions

**Q: How does the 3D simulation work?**
> "Each planet follows Keplerian orbital elements. The semi-major axis is derived from the AU distance, eccentricity shapes the ellipse, and inclination tilts the orbital plane. Position at time t uses the parametric ellipse equation: x = a*cos(t) - c, z = b*sin(t), where c = a*e and b = a*sqrt(1-e²). Orbital speed follows Kepler's third law — proportional to 1/sqrt(a³). The user can control speed from 0.25x to 5x and pause the simulation. Planets self-rotate at their real relative speeds, axial tilt is applied to the mesh, and Saturn has 4 ring bands with a visible Cassini Division. The Sun uses a warm white color (#FFF5E1) for scientific accuracy, with animated pulsating corona layers. The Earth Lagrange points L1-L5 are displayed with pulsating glow spheres, zone indicator rings, and click-to-focus camera. Keyboard shortcuts (Space, +/-, R, O, B, L, F) provide quick control, and toggle buttons show/hide orbits, belts, labels, and Lagrange points."

**Q: How did you handle the chat scrolling bug?**
> "It was a classic flexbox overflow issue. The `.chat-messages` container had `flex: 1` and `overflow-y: auto`, but CSS flex children default to `min-height: auto`, meaning they always expand to fit content and never trigger the scrollbar. The fix was adding `min-height: 0` to both `.chat-messages` and `.chat-container`, which allows them to shrink below their content size and enables the overflow scroll."

**Q: How does visitor tracking work without a database?**
> "I use two free APIs: ip-api.com for IP geolocation (country-level, no key required, 45 req/min) and countapi.mileshilliard.com for persistent counters. A Netlify Function calls ip-api.com to get the visitor's country, then increments two counters on countapi: the main visit counter and a country-specific counter (e.g., `solar-visits-USA`). The client displays the total count and country flag. No database needed — countapi IS the database."

**Q: How do you handle off-topic questions?**
> "The system prompt includes a soft redirect rule. If the question is clearly outside astronomy (finance, sports, etc.), the model responds: 'I'm a Solar System and astronomy expert — I can help with questions about planets, moons, space missions, orbital mechanics, and astronomical concepts. Try asking about AU, Kepler's laws, or the Voyager missions!' This keeps the chat focused while being helpful."

**Q: Why did you choose TF-IDF over vector embeddings?**
> "Three reasons: (1) Cost — TF-IDF is completely free, no API calls for embedding generation. (2) Simplicity — ~120 lines of TypeScript, no external dependencies. (3) Speed — runs entirely in the browser in under 50ms. For ~130+ chunks about a specific domain (solar system), keyword-based retrieval is accurate enough. The tradeoff is that TF-IDF can't handle semantic similarity — it won't match 'gas giant' with 'Jupiter' without shared keywords."

---

## Live Demo Flow

1. **Open the site** — show the homepage with planet cards, hero starfield, scroll-reveal animations, and skeleton loaders
2. **Launch 3D View** — show the interactive solar system, click on a planet to focus, use keyboard shortcuts (Space to pause, F for fullscreen), toggle orbits/labels
3. **Navigate to Chat** — show the welcome screen with suggestion categories (Planets, Moons, Missions, Science, Gravity)
4. **Ask a question** — "What is tidal heating on Europa?" → show the answer with source badges
5. **Show Model Thinking** — click "Model thinking" to reveal the LLM's reasoning process
6. **Click a Source Badge** — navigate to Europa's detail page (proves source attribution works)
7. **Ask a Follow-up** — "Could it support life?" → demonstrate conversation threading
8. **Ask an Off-topic Question** — "What is the stock market?" → show the graceful redirect
9. **Show Fact Sheet** — navigate to /facts, show the AU explanation section and galactic orbit data
10. **Show About Page** — show creator credit, AI/RAG section, Global Reach traffic map, and scroll-reveal on section cards

---

## Key Metrics to Mention

| Metric | Value |
|---|---|
| Celestial bodies | 29 (Sun, 8 planets, Moon, 8 major moons, Pluto, Ceres, 4 belts/regions, Lagrange Points) |
| Knowledge chunks | ~130+ (per-body + concept + system chunks) |
| Gravity topics | 8 dedicated chunks (Newton, tidal, resonance, assists, escape velocity, Hill sphere, barycenter, orbital decay) |
| TF-IDF retrieval time | <50ms (client-side) |
| LLM response time | <2s (Groq API) |
| Netlify Function cold start | ~0ms (V8 isolates) |
| External dependencies for RAG | 0 (TF-IDF is vanilla TypeScript) |
| Cost for RAG retrieval | $0 (no embedding API) |
| Deployment cost | $0 (Netlify free tier) |
| Total paid services | $0 |

---

## Tech Stack Summary

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| 3D Engine | Three.js (React Three Fiber + Drei) |
| Build Tool | Vite 5 |
| AI Chat | Groq API (`qwen/qwen3-27b`) via Netlify Functions |
| RAG | Client-side TF-IDF retrieval (~130+ knowledge chunks) |
| Deployment | Netlify (free tier) |
| Routing | React Router v6 |
| Markdown | React Markdown |
| Visitor Tracking | ip-api.com (geolocation) + countapi (counters) |
| SEO | Dynamic meta tags, Open Graph, sitemap.xml |

---

*Created by [Nirav Chhaya](https://www.linkedin.com/in/niravchhaya/) — Solar System Explorer*
