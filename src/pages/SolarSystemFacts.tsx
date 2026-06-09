export default function SolarSystemFacts() {
  return (
    <div className="page about-page">
      <div className="about-content">
        <h1>Solar System Fact Sheet</h1>

        <section className="about-section">
          <h2>Overview</h2>
          <table className="fact-sheet-table">
            <tbody>
              <tr><td>Age</td><td>4.568 billion years</td></tr>
              <tr><td>Location</td><td>Orion Arm, Milky Way Galaxy</td></tr>
              <tr><td>Distance from Galactic Center</td><td>~27,000 light-years</td></tr>
              <tr><td>Number of Stars</td><td>1 (the Sun)</td></tr>
              <tr><td>Number of Planets</td><td>8</td></tr>
              <tr><td>Number of Dwarf Planets</td><td>5 recognised (Pluto, Ceres, Eris, Makemake, Haumea) — 100+ candidates</td></tr>
              <tr><td>Number of Moons</td><td>293+ confirmed</td></tr>
              <tr><td>Number of Asteroids</td><td>1.3+ million known</td></tr>
              <tr><td>Number of Comets</td><td>~4,000 known</td></tr>
              <tr><td>Inclination of Major Planets</td><td>~3° from Sun's equator (within 7°)</td></tr>
              <tr><td>Galactic Orbital Period</td><td>~225–250 million years</td></tr>
            </tbody>
          </table>
        </section>

        <section className="about-section">
          <h2>Size &amp; Scale</h2>
          <table className="fact-sheet-table">
            <tbody>
              <tr><td>Solar System Diameter (heliosphere)</td><td>~120 AU (~18 billion km)</td></tr>
              <tr><td>Oort Cloud Outer Edge</td><td>~100,000 AU (~1.87 light-years)</td></tr>
              <tr><td>Mass Contained in the Sun</td><td>99.86%</td></tr>
              <tr><td>Mass of All Planets Combined</td><td>~0.14% of total system mass</td></tr>
              <tr><td>Jupiter Mass (as % of planets)</td><td>~71% of all planetary mass</td></tr>
              <tr><td>Distance from Sun to Earth</td><td>1 AU (~150 million km) — light travels in ~8.3 min</td></tr>
              <tr><td>Largest Planet by Diameter</td><td>Jupiter (139,820 km)</td></tr>
              <tr><td>Smallest Planet by Diameter</td><td>Mercury (4,879 km)</td></tr>
              <tr><td>Hottest Planet</td><td>Venus (464°C surface)</td></tr>
              <tr><td>Coldest Planet</td><td>Neptune (−218°C cloud tops)</td></tr>
            </tbody>
          </table>
        </section>

        <section className="about-section">
          <h2>Orbital &amp; Physical Extremes</h2>
          <table className="fact-sheet-table">
            <tbody>
              <tr><td>Fastest Orbital Speed</td><td>Mercury — 47.4 km/s</td></tr>
              <tr><td>Slowest Orbital Speed</td><td>Neptune — 5.4 km/s</td></tr>
              <tr><td>Most Circular Orbit</td><td>Venus (eccentricity 0.0068)</td></tr>
              <tr><td>Most Elliptical Orbit</td><td>Mercury (eccentricity 0.2056)</td></tr>
              <tr><td>Highest Inclination</td><td>Mercury (7.0°)</td></tr>
              <tr><td>Fastest Rotation</td><td>Jupiter — once every 9.9 hours</td></tr>
              <tr><td>Slowest Rotation</td><td>Venus — once every 243 Earth days (retrograde)</td></tr>
              <tr><td>Strongest Gravity (planet)</td><td>Jupiter — 24.8 m/s²</td></tr>
              <tr><td>Weakest Gravity (planet)</td><td>Mercury — 3.7 m/s²</td></tr>
              <tr><td>Most Moons</td><td>Saturn — 146+ confirmed</td></tr>
              <tr><td>Largest Moon</td><td>Ganymede (5,268 km — larger than Mercury)</td></tr>
            </tbody>
          </table>
        </section>

        <section className="about-section">
          <h2>Heliosphere &amp; Solar Activity</h2>
          <table className="fact-sheet-table">
            <tbody>
              <tr><td>Solar Wind Speed</td><td>300–800 km/s</td></tr>
              <tr><td>Heliosphere Shape</td><td>Comet-like bubble, compressed on the side facing galactic travel</td></tr>
              <tr><td>Termination Shock Distance</td><td>~80–100 AU from the Sun</td></tr>
              <tr><td>Sunspot Cycle</td><td>~11 years</td></tr>
              <tr><td>Largest Flare Class</td><td>X-class (can cause planet-wide radio blackouts)</td></tr>
              <tr><td>Aurora Mechanism</td><td>Solar wind particles guided by magnetic fields collide with atmospheric gases</td></tr>
            </tbody>
          </table>
        </section>

        <section className="about-section">
          <h2>Exploration Milestones</h2>
          <table className="fact-sheet-table">
            <tbody>
              <tr><td>First Human-Made Object in Space</td><td>Sputnik 1 (USSR, 1957)</td></tr>
              <tr><td>First Human in Space</td><td>Yuri Gagarin (USSR, 1961)</td></tr>
              <tr><td>First Moon Landing</td><td>Apollo 11 (USA, 1969)</td></tr>
              <tr><td>Farthest Human-Made Object</td><td>Voyager 1 — entered interstellar space 2012, now ~165 AU from Earth</td></tr>
              <tr><td>Farthest Flown Spacecraft</td><td>Voyager 2 — flew past Neptune (1989), now ~138 AU from Earth</td></tr>
              <tr><td>First to Orbit Another Planet</td><td>Mariner 9 — Mars (1971)</td></tr>
              <tr><td>First to Land on Another Planet</td><td>Venera 7 — Venus (1970)</td></tr>
              <tr><td>First to "Touch" the Sun</td><td>Parker Solar Probe (2021, flying through the corona)</td></tr>
              <tr><td>Most Distant Object Visited</td><td>Arrokoth (New Horizons, 2019, 44 AU)</td></tr>
            </tbody>
          </table>
        </section>

        <section className="about-section">
          <h2>Quick Facts</h2>
          <ul>
            <li>The Solar System formed from a collapsing molecular cloud about 4.57 billion years ago.</li>
            <li>All planets orbit the Sun in the same direction (counter-clockwise as viewed from above Earth's north pole).</li>
            <li>The four inner planets are rocky (terrestrial); the four outer are gas/ice giants.</li>
            <li>The Asteroid Belt between Mars and Jupiter contains millions of rocky bodies, leftovers from the early Solar System.</li>
            <li>The Kuiper Belt beyond Neptune holds dwarf planets, comets, and icy bodies — Pluto is its largest known member.</li>
            <li>The Oort Cloud is a spherical shell of icy debris stretching up to 1.87 light-years — the source of long-period comets.</li>
            <li>Trojan asteroids share orbits with planets, with Jupiter hosting over 10,000 known Trojans at its L4 and L5 Lagrange points.</li>
            <li>The heliopause marks the boundary where the solar wind meets interstellar space — Voyager 1 crossed it in 2012.</li>
            <li>Every planet except Mercury and Venus has at least one natural satellite.</li>
            <li>The Solar System orbits the Milky Way at about 828,000 km/h, completing one orbit every 230 million years.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
