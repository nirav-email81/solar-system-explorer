import TrafficMap from '../components/TrafficMap';
import { useScrollReveal } from '../hooks/useScrollReveal';

function RevealSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useScrollReveal();
  return (
    <section ref={ref} className={`about-section reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </section>
  );
}

export default function About() {
  return (
    <div className="page about-page">
      <div className="about-content">
        <h1>About Solar Explorer</h1>

        <RevealSection>
          <h2>Our Mission</h2>
          <p>
            Solar Explorer is an interactive web application designed to share knowledge about
            our Solar System. From the Sun at its center to the distant Oort Cloud at its edge,
            we aim to make the wonders of space exploration accessible to everyone through an
            immersive 3D experience and detailed fact sheets.
          </p>
          <p className="about-creator">
            Created by <a href="https://www.linkedin.com/in/niravchhaya/" target="_blank" rel="noopener noreferrer">Nirav Chhaya</a> &mdash; conceptualized, developed, and made available for public use.
          </p>
        </RevealSection>

        <RevealSection delay={0.1}>
          <h2>What's Included</h2>
          <ul>
            <li><strong>The Sun</strong> &mdash; our life-giving star, with details on solar flares, solar wind, solar storms, and the solar atmosphere (photosphere, chromosphere, corona)</li>
            <li><strong>8 Planets</strong> &mdash; from rocky Mercury to icy Neptune, including Venus's super-rotating atmosphere and Earth's Van Allen radiation belts</li>
            <li><strong>Dwarf Planets</strong> &mdash; Pluto, Ceres, and beyond</li>
            <li><strong>Major Moons</strong> &mdash; including Titan, Europa, Enceladus, and our own Moon</li>
            <li><strong>The Asteroid Belt</strong> &mdash; between Mars and Jupiter</li>
            <li><strong>Trojan Asteroids</strong> &mdash; clustered at Jupiter's Lagrange points, explored by the Lucy mission</li>
            <li><strong>The Kuiper Belt</strong> &mdash; beyond Neptune</li>
            <li><strong>The Oort Cloud</strong> &mdash; the Solar System's outer boundary</li>
            <li><strong>Lagrange Points</strong> &mdash; gravitational equilibrium points hosting JWST, DSCOVR, and future missions</li>
            <li><strong>Solar System Fact Sheet</strong> &mdash; comprehensive overview including the galactic orbit and galactic year</li>
          </ul>
        </RevealSection>

        <RevealSection delay={0.15}>
          <h2>Key Science Topics Covered</h2>
          <ul>
            <li><strong>Solar Atmosphere</strong> &mdash; layers from the photosphere (5,500°C) to the corona (1–3 million °C) and the coronal heating problem</li>
            <li><strong>Solar Flares &amp; Storms</strong> &mdash; A–X class flares, coronal mass ejections (CMEs), the Carrington Event of 1859, and space weather effects on Earth</li>
            <li><strong>Solar Wind &amp; Heliosphere</strong> &mdash; constant outflow at 300–800 km/s, the heliosphere bubble, termination shock, and the heliopause crossed by Voyager 1</li>
            <li><strong>Van Allen Radiation Belts</strong> &mdash; Earth's inner and outer radiation belts, discovered by James Van Allen in 1958, protecting the surface from cosmic radiation</li>
            <li><strong>Venus Super-Rotation</strong> &mdash; Venus's atmosphere circles the planet every 4 Earth days at 360 km/h, 60x faster than the planet's own rotation</li>
            <li><strong>Galactic Orbit &amp; Galactic Year</strong> &mdash; the Solar System orbits the Milky Way at 828,000 km/h, taking ~230 million years per orbit (18–20 orbits completed)</li>
            <li><strong>Lagrange Points</strong> &mdash; L1–L5 gravitational equilibrium points used for observatories (JWST at L2) and future space stations (Lunar Gateway)</li>
          </ul>
        </RevealSection>

        <RevealSection delay={0.2}>
          <h2>AI-Powered Chat Assistant</h2>
          <p>
            The chat feature uses <strong>Retrieval-Augmented Generation (RAG)</strong> — a technique where
            relevant knowledge is retrieved first, then fed to the AI for answer generation.
          </p>
          <ul>
            <li><strong>Retrieval:</strong> Client-side TF-IDF (Term Frequency–Inverse Document Frequency) keyword matching runs entirely in the browser with zero external API calls. Tokenization, stop word removal, TF-IDF vectorization, and cosine similarity scoring select the top-3 most relevant knowledge chunks.</li>
            <li><strong>Knowledge Base:</strong> ~130+ curated text chunks extracted from 29 celestial bodies and solar system topics, covering physical stats, orbital data, atmosphere, exploration missions, gravity concepts, and interesting facts.</li>
            <li><strong>Generation:</strong> Groq API running <code>qwen/qwen3-27b</code> — a fast inference engine accessed via Netlify Functions (serverless).</li>
            <li><strong>Thinking Extraction:</strong> The model's reasoning process (enclosed in <code>&lt;think&gt;</code> tags) is decoded from HTML entities, extracted, and displayed in a collapsible "Model thinking" UI element.</li>
            <li><strong>Prompt Design:</strong> The system prompt instructs the model to use retrieved context as primary source, supplement with general scientific knowledge when needed, and cite which celestial body or topic the answer comes from.</li>
            <li><strong>Conversation Threading:</strong> Previous messages are passed as context so the model can handle follow-up questions naturally.</li>
          </ul>
          <p className="about-creator">
            The entire retrieval pipeline — TF-IDF engine, knowledge chunking system, RAG orchestration,
            and Netlify serverless function — was built from scratch in vanilla TypeScript with no external retrieval dependencies.
          </p>
        </RevealSection>

        <RevealSection delay={0.25}>
          <h2>Data Sources &amp; References</h2>
          <p>
            All data is sourced from NASA, ESA, and other space agencies' publicly available
            datasets. We strive for accuracy and keep our information up to date with the
            latest discoveries. Key references include:
          </p>
          <ul className="reference-list">
            <li><a href="https://science.nasa.gov/solar-system/" target="_blank" rel="noopener noreferrer">NASA Solar System Exploration</a></li>
            <li><a href="https://www.esa.int/Science_Exploration/Space_Science" target="_blank" rel="noopener noreferrer">ESA Space Science</a></li>
            <li><a href="https://nssdc.gsfc.nasa.gov/planetary/" target="_blank" rel="noopener noreferrer">NASA NSSDCA Planetary Fact Sheets</a></li>
            <li><a href="https://ssd.jpl.nasa.gov/" target="_blank" rel="noopener noreferrer">JPL Solar System Dynamics</a></li>
            <li><a href="https://science.nasa.gov/mission/parker-solar-probe/" target="_blank" rel="noopener noreferrer">NASA Parker Solar Probe</a></li>
            <li><a href="https://www.esa.int/Science_Exploration/Space_Science/Solar_Orbiter" target="_blank" rel="noopener noreferrer">ESA/NASA Solar Orbiter</a></li>
            <li><a href="https://science.nasa.gov/mission/van-allen-probes/" target="_blank" rel="noopener noreferrer">NASA Van Allen Probes</a></li>
            <li><a href="https://nasa.gov/lucy" target="_blank" rel="noopener noreferrer">NASA Lucy Mission</a></li>
            <li><a href="https://science.nasa.gov/mission/juno/" target="_blank" rel="noopener noreferrer">NASA Juno Mission</a></li>
            <li><a href="https://science.nasa.gov/mission/cassini/" target="_blank" rel="noopener noreferrer">NASA/ESA Cassini-Huygens Mission</a></li>
            <li><a href="https://science.nasa.gov/mission/new-horizons/" target="_blank" rel="noopener noreferrer">NASA New Horizons Mission</a></li>
            <li><a href="https://science.nasa.gov/mission/webb/" target="_blank" rel="noopener noreferrer">James Webb Space Telescope</a></li>
            <li><a href="https://science.nasa.gov/mission/voyager/" target="_blank" rel="noopener noreferrer">NASA Voyager Program</a></li>
          </ul>
        </RevealSection>

        <RevealSection delay={0.3}>
          <h2>Global Reach</h2>
          <p>Visitor traffic by country — updated in real time.</p>
          <TrafficMap />
        </RevealSection>

        <RevealSection delay={0.35}>
          <h2>Technology</h2>
          <p>
            Built with React, TypeScript, and Three.js (via React Three Fiber).
            The 3D visualization uses WebGL for an interactive exploration experience.
            Orbital mechanics are simulated using Keplerian orbital elements with
            elliptical paths, orbital inclination, and variable speed controls.
            The AI chat uses a custom RAG pipeline with TF-IDF retrieval and Groq API generation.
          </p>
        </RevealSection>

        <RevealSection delay={0.4}>
          <div className="about-section tech-stack">
            {['React', 'TypeScript', 'Three.js', 'React Three Fiber', 'React Three Drei', 'Vite', 'React Router', 'WebGL', 'Keplerian Orbit Simulation', 'Groq', 'Netlify Functions', 'RAG', 'TF-IDF', 'React Markdown'].map(tech => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
          </div>
        </RevealSection>
      </div>
    </div>
  );
}
