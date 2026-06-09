export default function About() {
  return (
    <div className="page about-page">
      <div className="about-content">
        <h1>About Solar Explorer</h1>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            Solar Explorer is an interactive web application designed to share knowledge about
            our Solar System. From the Sun at its center to the distant Oort Cloud at its edge,
            we aim to make the wonders of space exploration accessible to everyone through an
            immersive 3D experience.
          </p>
        </section>

        <section className="about-section">
          <h2>What's Included</h2>
          <ul>
            <li><strong>The Sun</strong> &mdash; our life-giving star</li>
            <li><strong>8 Planets</strong> &mdash; from rocky Mercury to icy Neptune</li>
            <li><strong>Dwarf Planets</strong> &mdash; Pluto, Ceres, and beyond</li>
            <li><strong>Major Moons</strong> &mdash; including Titan, Europa, and our own Moon</li>
            <li><strong>The Asteroid Belt</strong> &mdash; between Mars and Jupiter</li>
            <li><strong>Trojan Asteroids</strong> &mdash; clustered at Jupiter's Lagrange points</li>
            <li><strong>The Kuiper Belt</strong> &mdash; beyond Neptune</li>
            <li><strong>The Oort Cloud</strong> &mdash; the Solar System's outer boundary</li>
            <li><strong>Lagrange Points</strong> &mdash; gravitational equilibrium points</li>
          </ul>
        </section>

        <section className="about-section">
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
            <li><a href="https://nasa.gov/lucy" target="_blank" rel="noopener noreferrer">NASA Lucy Mission</a></li>
            <li><a href="https://science.nasa.gov/mission/juno/" target="_blank" rel="noopener noreferrer">NASA Juno Mission</a></li>
            <li><a href="https://science.nasa.gov/mission/cassini/" target="_blank" rel="noopener noreferrer">NASA/ESA Cassini-Huygens Mission</a></li>
            <li><a href="https://science.nasa.gov/mission/new-horizons/" target="_blank" rel="noopener noreferrer">NASA New Horizons Mission</a></li>
            <li><a href="https://webb.nasa.gov/" target="_blank" rel="noopener noreferrer">James Webb Space Telescope</a></li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Technology</h2>
          <p>
            Built with React, TypeScript, and Three.js (via React Three Fiber).
            The 3D visualization uses WebGL for an interactive exploration experience.
            Orbital mechanics are simulated using Keplerian orbital elements.
          </p>
        </section>

        <section className="about-section tech-stack">
          {['React', 'TypeScript', 'Three.js', 'React Three Fiber', 'React Three Drei', 'Vite', 'React Router'].map(tech => (
            <span key={tech} className="tech-badge">{tech}</span>
          ))}
        </section>
      </div>
    </div>
  );
}
