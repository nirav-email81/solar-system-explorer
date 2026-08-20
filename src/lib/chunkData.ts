import { solarSystemData, getBodyById } from '../data/solarSystemData';
import { CelestialBody } from '../types';

export interface Chunk {
  id: string;
  bodyId: string;
  bodyName: string;
  category: string;
  text: string;
}

function fmt(body: CelestialBody): string {
  const parts: string[] = [];
  const p = body.physicalCharacteristics;
  const o = body.orbitalCharacteristics;

  parts.push(`${body.name} is a ${body.type.replace('-', ' ')}${body.parentId ? ` orbiting ${getBodyById(body.parentId)?.name || body.parentId}` : ''}.`);
  parts.push(body.description);

  if (p) {
    parts.push(`Physical: diameter ${p.diameter_km.toLocaleString()} km, mass ${p.mass_kg} kg, surface gravity ${p.surfaceGravity_m_s2 ?? 'N/A'} m/s², escape velocity ${p.escapeVelocity_km_s ?? 'N/A'} km/s, mean temperature ${p.meanTemperature_C}°C, axial tilt ${p.axialTilt_degrees ?? 'N/A'}°, day length ${p.dayLength ?? 'N/A'}.`);
  }

  if (o) {
    parts.push(`Orbital: distance from Sun ${o.distanceFromSun_au} AU, period ${o.orbitalPeriod_years} years (${o.orbitalPeriod_days} days), eccentricity ${o.eccentricity}, inclination ${o.inclination_degrees}°, orbital speed ${o.orbitalSpeed_km_s ?? 'N/A'} km/s.`);
  }

  return parts.join(' ');
}

function fmtAtmo(body: CelestialBody): string | null {
  if (!body.atmosphere) return null;
  const comp = body.atmosphere.composition.map(c => `${c.element} ${c.percentage}`).join(', ');
  return `Atmosphere of ${body.name}: ${comp}. ${body.atmosphere.description}`;
}

function fmtExploration(body: CelestialBody): string {
  const missions = body.exploration.missions.map(m => `${m.name} (${m.year}, ${m.agency}): ${m.description}`).join('. ');
  const highlights = body.exploration.highlights.join('. ');
  return `Exploration of ${body.name}: ${missions}. Highlights: ${highlights}.`;
}

function fmtFacts(body: CelestialBody): string {
  return `Interesting facts about ${body.name}: ${body.interestingFacts.join('. ')}.`;
}

export function buildChunks(): Chunk[] {
  const chunks: Chunk[] = [];

  for (const body of solarSystemData) {
    chunks.push({
      id: `${body.id}-overview`,
      bodyId: body.id,
      bodyName: body.name,
      category: 'Overview',
      text: fmt(body),
    });

    if (body.atmosphere) {
      const atmoText = fmtAtmo(body);
      if (atmoText) {
        chunks.push({
          id: `${body.id}-atmosphere`,
          bodyId: body.id,
          bodyName: body.name,
          category: 'Atmosphere',
          text: atmoText,
        });
      }
    }

    chunks.push({
      id: `${body.id}-exploration`,
      bodyId: body.id,
      bodyName: body.name,
      category: 'Exploration',
      text: fmtExploration(body),
    });

    chunks.push({
      id: `${body.id}-facts`,
      bodyId: body.id,
      bodyName: body.name,
      category: 'Facts',
      text: fmtFacts(body),
    });
  }

  // Add solar system fact sheet summary
  chunks.push({
    id: 'solarsystem-overview',
    bodyId: 'solarsystem',
    bodyName: 'Solar System',
    category: 'Overview',
    text: 'The Solar System is 4.568 billion years old, located in the Orion Arm of the Milky Way Galaxy, about 26,000-27,000 light-years from the galactic center. It contains 1 star (the Sun), 8 planets, 5+ dwarf planets, 293+ confirmed moons, 1.3+ million known asteroids, and ~4,000 known comets. The Sun contains 99.86% of all mass. Jupiter contains ~71% of all planetary mass. The Solar System orbits the Milky Way at about 828,000 km/h, completing one orbit every 225-250 million years (a galactic year). It has completed about 18-20 galactic orbits in its lifetime.',
  });

  chunks.push({
    id: 'solarsystem-scale',
    bodyId: 'solarsystem',
    bodyName: 'Solar System',
    category: 'Scale',
    text: 'The Solar System heliosphere diameter is about 120 AU (18 billion km). The Oort Cloud outer edge is about 100,000 AU (1.87 light-years). Distance from Sun to Earth is 1 AU (150 million km, light travels in 8.3 minutes). Largest planet is Jupiter (139,820 km diameter). Smallest planet is Mercury (4,879 km). Hottest planet is Venus (464°C surface). Coldest planet is Neptune (-218°C cloud tops).',
  });

  chunks.push({
    id: 'solarsystem-galactic',
    bodyId: 'solarsystem',
    bodyName: 'Solar System',
    category: 'Galactic Orbit',
    text: 'The Solar System orbits the Milky Way at about 828,000 km/h (230 km/s), traveling about 19.9 million km per day. One complete orbit (galactic year) takes approximately 225-250 million Earth years. The Solar System has completed about 18-20 galactic orbits since its formation. The orbit is nearly circular with a slight vertical oscillation through the galactic plane every ~64 million years. The galactic center orbited is the supermassive black hole Sagittarius A*. Some scientists hypothesize this vertical oscillation correlates with extinction events by disturbing the Oort Cloud.',
  });

  chunks.push({
    id: 'solarsystem-directions',
    bodyId: 'solarsystem',
    bodyName: 'Solar System',
    category: 'Orbital & Rotational Direction',
    text: 'All eight planets orbit the Sun in the same direction — counter-clockwise as viewed from above Earth\'s north pole (prograde). This is because the Solar System formed ~4.57 billion years ago from a collapsing molecular cloud that spun faster as it contracted (conservation of angular momentum) and flattened into a protoplanetary disk. All planets condensed from this rotating disk. Most planets also rotate prograde. Exceptions: Venus rotates retrograde (backwards) with a 243-day rotation period, likely caused by a massive ancient impact combined with tidal/atmospheric drag over billions of years. Uranus is tilted 98° on its side, rolling along its orbit — a giant impact is the leading explanation. The Sun rotates prograde too, with its equator completing one rotation every ~25 days and poles every ~35 days.',
  });

  chunks.push({
    id: 'solarsystem-orbital-speeds',
    bodyId: 'solarsystem',
    bodyName: 'Solar System',
    category: 'Orbital Speeds',
    text: 'Planets closer to the Sun orbit faster (Kepler\'s laws). Mercury is fastest at 47.4 km/s (170,600 km/h), followed by Venus 35.0 km/s, Earth 29.8 km/s, Mars 24.1 km/s, Jupiter 13.1 km/s, Saturn 9.7 km/s, Uranus 6.8 km/s, and Neptune slowest at 5.4 km/s (19,400 km/h). Earth\'s speed varies by about 1 km/s throughout its orbit — faster in January (perihelion, ~147.1 million km from Sun) at ~30.3 km/s, slower in July (aphelion, ~152.1 million km) at ~29.3 km/s. This is Kepler\'s second law in action: a planet sweeps equal areas in equal times, moving faster when closer to the Sun.',
  });

  chunks.push({
    id: 'solarsystem-out-of-plane',
    bodyId: 'solarsystem',
    bodyName: 'Solar System',
    category: 'Going Out of Plane',
    text: 'Going perpendicular to the ecliptic plane is exceptionally difficult and expensive. Earth moves at ~30 km/s in the ecliptic — to go up, you must first cancel all that sideways momentum. The delta-v formula for plane change is Δv = 2v × sin(Δi/2). A 90° plane change at LEO speed (~7.8 km/s) requires ~10.8 km/s — more than escaping Earth\'s gravity (11.2 km/s). Only one mission achieved near-polar solar orbit: Ulysses (1990, 80.2° inclination), which required the Space Shuttle, three upper-stage rockets (IUS + PAM-S), and a Jupiter gravity assist. Voyager 1 heads ~35° above the ecliptic and Voyager 2 ~48° below, but only passively via planetary gravity assists. There is little scientific motivation since all planets, moons, and interesting objects lie in the ecliptic plane.',
  });

  // === GRAVITY & ORBITAL MECHANICS CHUNKS ===

  chunks.push({
    id: 'gravity-newton',
    bodyId: 'solarsystem',
    bodyName: 'Solar System',
    category: 'Newton\'s Law of Gravitation',
    text: 'Newton\'s Law of Universal Gravitation states that every mass attracts every other mass with a force proportional to the product of their masses and inversely proportional to the square of the distance between them: F = G × m₁ × m₂ / r², where G = 6.674 × 10⁻¹¹ N⋅m²/kg². This inverse-square law governs all orbital motion in the Solar System. The Sun\'s enormous mass (1.989 × 10³⁰ kg) dominates, keeping all planets in orbit. Jupiter (1.898 × 10²⁷ kg) is massive enough to influence asteroid orbits and capture Trojan asteroids at its Lagrange points. The same law explains why orbital speed decreases with distance — Mercury orbits at 47.4 km/s while Neptune crawls at 5.4 km/s. Newton\'s law also predicts that orbits are conic sections: circles, ellipses, parabolas, or hyperbolas, depending on the object\'s velocity relative to escape velocity.',
  });

  chunks.push({
    id: 'gravity-tidal',
    bodyId: 'solarsystem',
    bodyName: 'Solar System',
    category: 'Tidal Forces',
    text: 'Tidal forces arise because gravity weakens with distance — the near side of an object experiences stronger gravity than the far side, creating a stretching effect. The Moon raises tides on Earth (ocean bulges ~1m high). Tidal locking is why the Moon always shows the same face to Earth — its rotation period equals its orbital period (27.3 days). Pluto and Charon are mutually tidally locked, always facing each other. Tidal heating is critical for moons: Jupiter\'s gravity flexes Io, making it the most volcanically active body in the Solar System. The same mechanism heats Europa\'s subsurface ocean and drives Enceladus\'s geysers. The Roche limit is the distance within which tidal forces tear apart a body — Saturn\'s rings exist because material inside Saturn\'s Roche limit (~2.44 planetary radii) cannot coalesce into a moon. Comets passing too close to Jupiter or Sun can be disrupted by tidal forces.',
  });

  chunks.push({
    id: 'gravity-resonance',
    bodyId: 'solarsystem',
    bodyName: 'Solar System',
    category: 'Orbital Resonance',
    text: 'Orbital resonance occurs when two orbiting bodies exert regular gravitational influence on each other because their orbital periods are related by a ratio of small integers. Jupiter\'s Kirkwood gaps in the asteroid belt are caused by 3:1, 5:2, 7:3, and 2:1 resonances with Jupiter — asteroids at these distances are destabilized and ejected. Neptune and Pluto are in a 2:3 resonance — Pluto completes 2 orbits for every 3 of Neptune\'s, preventing close encounters despite crossing orbits. The Laplace resonance connects Io, Europa, and Ganymede in a 1:2:4 orbital ratio — for every orbit Ganymede completes, Europa orbits twice and Io four times. This resonance drives tidal heating in all three moons. Mars\'s moons Phobos and Deimos are not in resonance. Many exoplanet systems show resonant chains that reveal their formation history.',
  });

  chunks.push({
    id: 'gravity-assists',
    bodyId: 'solarsystem',
    bodyName: 'Solar System',
    category: 'Gravitational Assists',
    text: 'A gravitational assist (slingshot) uses a planet\'s gravity and orbital velocity to change a spacecraft\'s speed and direction without using fuel. The spacecraft approaches the planet, gets deflected by its gravity, and gains or loses heliocentric velocity depending on the geometry. Voyager 1 used Jupiter (1979) and Saturn (1980) gravity assists to reach interstellar space. Voyager 2 used all four gas giants (Jupiter 1979, Saturn 1981, Uranus 1986, Neptune 1989) — a Grand Tour enabled by a rare planetary alignment. Cassini used Venus (twice), Earth, and Jupiter to reach Saturn. New Horizons used Jupiter for a speed boost to reach Pluto in 2015. Parker Solar Probe uses Venus gravity assists to progressively lower its perihelion closer to the Sun. Ulysses (1990) used Jupiter to achieve a polar solar orbit — the only mission to do so. Gravity assists can also be used to decelerate (as MESSENGER did at Venus and Earth to enter Mercury orbit).',
  });

  chunks.push({
    id: 'gravity-escape-velocity',
    bodyId: 'solarsystem',
    bodyName: 'Solar System',
    category: 'Escape Velocity',
    text: 'Escape velocity is the minimum speed needed to escape a body\'s gravitational pull without further propulsion: v = √(2GM/r), where G is the gravitational constant, M is the body\'s mass, and r is its radius. Earth\'s escape velocity is 11.2 km/s (40,320 km/h). The Sun\'s is 617.5 km/s. Jupiter\'s is 59.5 km/s — the highest of any planet. The Moon\'s is only 2.4 km/s, which is why lunar missions require less fuel. Mercury\'s is 4.3 km/s, Venus 10.4 km/s, Mars 5.0 km/s, Saturn 36.1 km/s, Uranus 21.4 km/s, Neptune 23.5 km/s. The Sun\'s escape velocity at Earth\'s distance (1 AU) is about 42.1 km/s — this is the solar system\'s escape velocity. An object must reach this speed to leave the Solar System entirely, which is why Voyager 1 needed multiple gravity assists to reach 17 km/s heliocentric speed (still well below 42.1 km/s, but enough to escape on a hyperbolic trajectory after gravity assists).',
  });

  chunks.push({
    id: 'gravity-hill-sphere',
    bodyId: 'solarsystem',
    bodyName: 'Solar System',
    category: 'Hill Sphere',
    text: 'The Hill sphere is the region around a celestial body where it dominates gravitational attraction over a smaller body orbiting a larger one. A moon must orbit within its planet\'s Hill sphere to remain gravitationally bound. Earth\'s Hill sphere extends about 1.5 million km (roughly 4 times the Moon\'s distance). The Moon orbits at ~384,400 km, well within this sphere. Jupiter\'s Hill sphere is enormous — about 53 million km — which is why it captures so many moons and Trojan asteroids. The Sun\'s Hill sphere extends to about 230,000 AU, defining the outer boundary of the Solar System\'s gravitational influence (beyond this, other stars dominate). Hill spheres explain why moons orbit planets rather than the Sun directly — within a planet\'s Hill sphere, the planet\'s gravity is stronger than the Sun\'s relative pull.',
  });

  chunks.push({
    id: 'gravity-barycenter',
    bodyId: 'solarsystem',
    bodyName: 'Solar System',
    category: 'Barycenter',
    text: 'The barycenter is the center of mass around which two or more bodies orbit. Despite common simplified diagrams showing planets orbiting the center of the Sun, they actually orbit the system\'s barycenter. The Sun-Jupiter barycenter lies just outside the Sun\'s surface (~1.07 solar radii from the Sun\'s center) because Jupiter contains ~71% of all planetary mass. The Sun-Earth barycenter is only about 450 km from the Sun\'s center — deep inside the Sun. Pluto and Charon orbit a barycenter that lies in empty space between them because Charon is relatively massive compared to Pluto (mass ratio ~1:8). Binary star systems clearly demonstrate barycenters — both stars orbit the common center of mass. The barycenter concept explains why the Sun "wobbles" slightly due to planetary gravitational pulls, which is one method used to detect exoplanets (radial velocity method).',
  });

  chunks.push({
    id: 'gravity-orbital-decay',
    bodyId: 'solarsystem',
    bodyName: 'Solar System',
    category: 'Orbital Decay',
    text: 'Orbital decay is the gradual decrease in orbital parameters (semi-major axis, eccentricity) due to energy loss. Tidal friction causes the Moon to recede from Earth at ~3.8 cm per year — Earth\'s rotation is slowing (days were ~6 hours long 4.5 billion years ago). Phobos, Mars\'s inner moon, is spiraling inward at ~1.8 cm per century and will either crash into Mars or be torn apart into a ring in ~50 million years. Atmospheric drag affects low-orbit satellites — the ISS requires periodic reboosts to maintain its ~420 km orbit. Without reboost, it would deorbit within months. Jupiter\'s moon Io loses orbital energy through tidal interactions, but Europa and Ganymede\'s gravitational influence (Laplace resonance) pumps energy back in, maintaining the resonance. Over billions of years, tidal forces will continue to reshape orbital configurations throughout the Solar System.',
  });

  return chunks;
}

let _chunks: Chunk[] | null = null;
export function getChunks(): Chunk[] {
  if (!_chunks) _chunks = buildChunks();
  return _chunks;
}
