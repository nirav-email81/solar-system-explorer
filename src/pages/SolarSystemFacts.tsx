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
              <tr><td>Distance from Galactic Center</td><td>~26,000–27,000 light-years</td></tr>
              <tr><td>Galactic Year (Cosmic Year)</td><td>~225–250 million Earth years</td></tr>
              <tr><td>Orbits of Galaxy Completed</td><td>~18–20 (since the Solar System formed)</td></tr>
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
          <h2>What is an AU?</h2>
          <p>
            An <strong>Astronomical Unit (AU)</strong> is the average distance from
            the Earth to the Sun — approximately <strong>149.6 million km</strong>
            (93 million miles). It is the standard unit of measurement for distances
            within the Solar System.
          </p>
          <table className="fact-sheet-table">
            <tbody>
              <tr><td>1 AU</td><td>~149.6 million km (~93 million miles)</td></tr>
              <tr><td>Light travel time for 1 AU</td><td>~8.3 minutes</td></tr>
              <tr><td>Mercury distance</td><td>~0.39 AU</td></tr>
              <tr><td>Earth distance</td><td>1.00 AU (by definition)</td></tr>
              <tr><td>Jupiter distance</td><td>~5.2 AU</td></tr>
              <tr><td>Neptune distance</td><td>~30 AU</td></tr>
              <tr><td>Voyager 1 (current)</td><td>~165 AU from Earth</td></tr>
            </tbody>
          </table>
          <p className="about-creator">
            <a href="https://science.nasa.gov/astrophysics/fundamental-concepts/astronomical-unit/" target="_blank" rel="noopener noreferrer">
              Learn more about the Astronomical Unit (NASA)
            </a>
          </p>
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
          </ul>
        </section>

        <section className="about-section">
          <h2>Galactic Orbit &amp; the Galactic Year</h2>

          <p>
            The Solar System does not sit still — it orbits the center of the Milky Way galaxy at
            an extraordinary speed of about 828,000 km/h (230 km/s). One complete orbit around the
            galactic center is called a <strong>galactic year</strong> (or cosmic year), lasting
            approximately <strong>225–250 million Earth years</strong>.
          </p>

          <p>
            To put this in perspective: the Solar System was born about 4.57 billion years ago,
            meaning it has completed roughly <strong>18–20 galactic orbits</strong> in its entire
            history. The last galactic year began around the time dinosaurs roamed the Earth
            (the Triassic Period). A single galactic year ago — 250 million years — all landmasses
            were fused into the supercontinent Pangaea.
          </p>

          <table className="fact-sheet-table">
            <tbody>
              <tr><td>Orbital Speed (around the galaxy)</td><td>~828,000 km/h (~230 km/s)</td></tr>
              <tr><td>Distance Travelled Per Day</td><td>~19.9 million km</td></tr>
              <tr><td>Orbital Path</td><td>Nearly circular, slight vertical oscillation through the galactic plane</td></tr>
              <tr><td>Vertical Oscillation Period</td><td>~64 million years (bobbing above and below the galactic plane)</td></tr>
              <tr><td>Galactic Center Orbited</td><td>Supermassive black hole (Sagittarius A*)</td></tr>
              <tr><td>Age of Solar System in Galactic Years</td><td>~18–20 galactic years</td></tr>
              <tr><td>One Galactic Year in Human History</td><td>Predates dinosaurs — the Permian-Triassic extinction event (~252 Mya) occurred near the last completion</td></tr>
            </tbody>
          </table>

          <p style={{ marginTop: '1rem' }}>
            The Solar System's vertical oscillation carries it above and below the galactic midplane
            every ~64 million years. Some scientists hypothesize that this oscillation correlates
            with extinction events, as passing through denser galactic regions may disturb the
            Oort Cloud and increase comet impacts — though this remains debated.
          </p>
        </section>

        <section className="about-section">
          <h2>Orbital Direction Sync</h2>

          <p>
            All eight planets orbit the Sun in the <strong>same direction</strong> — counter-clockwise
            as viewed from above Earth's north pole. This is not a coincidence. When the Solar System
            formed ~4.57 billion years ago, a massive cloud of gas and dust collapsed under its own
            gravity. As it contracted, it spun faster (conservation of angular momentum) and flattened
            into a <strong>protoplanetary disk</strong>. All the planets condensed from this rotating
            disk, inheriting its direction of spin.
          </p>

          <p>
            The Sun itself also rotates in the same prograde direction, though at different speeds
            at different latitudes — the equator rotates once every ~25 days, while the poles take
            ~35 days. This differential rotation is a signature of the original disk's angular
            momentum being shared between the Sun and the planets.
          </p>

          <table className="fact-sheet-table">
            <tbody>
              <tr><td>Orbital Direction (all 8 planets)</td><td>Prograde (counter-clockwise from north)</td></tr>
              <tr><td>Solar System Formation</td><td>~4.57 billion years ago from collapsing molecular cloud</td></tr>
              <tr><td>Reason for Flat Plane</td><td>Conservation of angular momentum — spinning cloud flattened into a disk</td></tr>
              <tr><td>Planet Orbital Inclinations</td><td>All within ~7° of the ecliptic (Mercury highest at 7.0°)</td></tr>
            </tbody>
          </table>
        </section>

        <section className="about-section">
          <h2>Rotational Direction Sync</h2>

          <p>
            Most planets also <strong>rotate</strong> in the same prograde direction as their orbit.
            This is again inherited from the original protoplanetary disk's angular momentum. However,
            there are two notable exceptions:
          </p>

          <ul>
            <li><strong>Venus</strong> — rotates <em>retrograde</em> (backwards, clockwise from north).
            Its rotation period (243 Earth days) is longer than its orbital period (225 days). The cause
            is likely a combination of a massive ancient impact that reversed its spin, and long-term
            tidal interactions with the Sun and its thick atmosphere that gradually slowed and flipped
            its rotation.</li>
            <li><strong>Uranus</strong> — tilted <em>98° on its side</em>, so it essentially rolls
            along its orbit. Its rotational axis lies nearly in the ecliptic plane. A giant impact
            early in its history is the leading explanation for this extreme tilt.</li>
          </ul>

          <table className="fact-sheet-table">
            <tbody>
              <tr><td>Prograde Rotators</td><td>Mercury, Earth, Mars, Jupiter, Saturn, Neptune</td></tr>
              <tr><td>Retrograde Rotator</td><td>Venus (spins backwards, 243-day rotation)</td></tr>
              <tr><td>Tilted on Side</td><td>Uranus (98° axial tilt — rolls along its orbit)</td></tr>
              <tr><td>Fastest Spinner</td><td>Jupiter — one rotation every 9.9 hours</td></tr>
              <tr><td>Slowest Spinner</td><td>Venus — one rotation every 243 Earth days</td></tr>
            </tbody>
          </table>
        </section>

        <section className="about-section">
          <h2>Planetary Orbital Speeds</h2>

          <p>
            Planets closer to the Sun orbit faster — a direct consequence of Kepler's laws and
            gravitational physics. Mercury, the innermost planet, screams around the Sun at
            <strong>47.4 km/s</strong> (170,000 km/h), while distant Neptune crawls at just
            <strong>5.4 km/s</strong> (19,000 km/h) — nearly 9× slower.
          </p>

          <p>
            Even Earth's speed varies throughout its orbit. Earth travels roughly <strong>1 km/s
            faster in January</strong> (perihelion, when it's closest to the Sun at ~147.1 million km)
            than it does in <strong>July</strong> (aphelion, when it's farthest at ~152.1 million km).
            This is Kepler's second law in action — a planet sweeps out equal areas in equal times,
            so it moves faster when closer to the Sun.
          </p>

          <table className="fact-sheet-table">
            <tbody>
              <tr><th>Planet</th><th>Orbital Speed (km/s)</th><th>Orbital Speed (km/h)</th></tr>
              <tr><td>Mercury</td><td>47.4</td><td>~170,600</td></tr>
              <tr><td>Venus</td><td>35.0</td><td>~126,000</td></tr>
              <tr><td>Earth</td><td>29.8</td><td>~107,200</td></tr>
              <tr><td>Mars</td><td>24.1</td><td>~86,800</td></tr>
              <tr><td>Jupiter</td><td>13.1</td><td>~47,200</td></tr>
              <tr><td>Saturn</td><td>9.7</td><td>~34,900</td></tr>
              <tr><td>Uranus</td><td>6.8</td><td>~24,500</td></tr>
              <tr><td>Neptune</td><td>5.4</td><td>~19,400</td></tr>
            </tbody>
          </table>

          <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Earth's perihelion speed: ~30.3 km/s (January) | Aphelion speed: ~29.3 km/s (July) — a ~1 km/s variance.
          </p>
        </section>

        <section className="about-section">
          <h2>Why Is It Hard to Go "Up"?</h2>

          <p>
            The Solar System is essentially flat — all planets orbit within ~7° of the
            <strong>ecliptic plane</strong>. But what if you wanted to send a spacecraft
            <em>perpendicular</em> to this plane, straight "up" or "down"? This is
            <strong>exceptionally difficult and expensive</strong>, for several reasons:
          </p>

          <p>
            <strong>1. You must cancel Earth's orbital velocity.</strong> Earth hurtles around the
            Sun at <strong>~30 km/s</strong> in the ecliptic plane. To go perpendicular, a spacecraft
            must first burn enough fuel to <em>cancel all of this sideways momentum</em>, then add
            new velocity in the vertical direction. This is like trying to jump off a moving train
            — you can't just leap sideways; you first need to stop your forward motion.
          </p>

          <p>
            <strong>2. The fuel cost is staggering.</strong> The delta-v (change in velocity) required
            for a plane change is given by the formula: <strong>Δv = 2v × sin(Δi/2)</strong>, where
            v is orbital speed and Δi is the angle of change. At LEO speed (~7.8 km/s), a 90° plane
            change costs <strong>~10.8 km/s</strong> — more than escaping Earth's gravity entirely
            (11.2 km/s). The propellant mass needed grows exponentially with the Tsiolkovsky rocket
            equation.
          </p>

          <p>
            <strong>3. There's nothing interesting up there.</strong> All planets, moons, asteroids,
            comets, and the vast majority of solar system objects lie within the ecliptic plane.
            A probe sent straight up would find mostly empty interplanetary space.
          </p>

          <p>
            <strong>4. Only one mission has done it.</strong> The <strong>Ulysses</strong> spacecraft
            (1990) remains the only probe to achieve a near-polar solar orbit (~80° inclination).
            It required the Space Shuttle, <em>three</em> upper-stage rockets (IUS + PAM-S), and a
            Jupiter gravity assist — all just to achieve an out-of-plane trajectory. It could not
            use solar panels at Jupiter's distance, so it was powered by a nuclear RTG.
          </p>

          <p>
            Even the Voyager probes, which are leaving the solar system, only tilted partially out
            of the plane: Voyager 1 at ~35° above, Voyager 2 at ~48° below — and they achieved
            this passively through planetary gravity assists, not deliberate plane changes.
          </p>

          <table className="fact-sheet-table">
            <tbody>
              <tr><td>Earth's Orbital Velocity</td><td>~30 km/s (must be cancelled to go perpendicular)</td></tr>
              <tr><td>90° Plane Change Δv at LEO</td><td>~10.8 km/s (exceeds Earth escape velocity of 11.2 km/s)</td></tr>
              <tr><td>Delta-v Formula</td><td>Δv = 2v × sin(Δi/2)</td></tr>
              <tr><td>Only Near-Polar Solar Mission</td><td>Ulysses (1990) — 80.2° inclination via Jupiter gravity assist</td></tr>
              <tr><td>Ulysses Requirements</td><td>Space Shuttle + IUS + PAM-S upper stages + Jupiter flyby</td></tr>
              <tr><td>Voyager 1 Tilt</td><td>~35° above ecliptic (passive, via gravity assists)</td></tr>
              <tr><td>Voyager 2 Tilt</td><td>~48° below ecliptic (passive, via gravity assists)</td></tr>
              <tr><td>Scientific Motivation</td><td>Low — all major objects lie in the ecliptic plane</td></tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
