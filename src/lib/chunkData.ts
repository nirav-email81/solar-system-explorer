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

  return chunks;
}

let _chunks: Chunk[] | null = null;
export function getChunks(): Chunk[] {
  if (!_chunks) _chunks = buildChunks();
  return _chunks;
}
