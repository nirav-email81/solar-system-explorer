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

  return chunks;
}

let _chunks: Chunk[] | null = null;
export function getChunks(): Chunk[] {
  if (!_chunks) _chunks = buildChunks();
  return _chunks;
}
