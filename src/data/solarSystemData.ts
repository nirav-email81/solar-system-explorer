import { CelestialBody } from '../types';

export const solarSystemData: CelestialBody[] = [
  {
    id: 'sun',
    name: 'The Sun',
    type: 'star',
    description:
      'The Sun is the star at the center of our Solar System. It is a nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core. It provides the energy that sustains all life on Earth and drives our planet\'s climate and weather. The Sun\'s dynamic magnetic field drives powerful solar flares, coronal mass ejections (solar storms), and a constant outflow of charged particles called the solar wind, shaping the entire heliosphere.',
    physicalCharacteristics: {
      diameter_km: 1392700,
      mass_kg: '1.989 × 10³⁰',
      surfaceGravity_m_s2: 274,
      escapeVelocity_km_s: 617.6,
      meanTemperature_C: '5,500 (surface) / 15,000,000 (core)',
      axialTilt_degrees: 7.25,
      dayLength: '25.4 days (equator)',
    },
    orbitalCharacteristics: {
      distanceFromSun_au: 0,
      orbitalPeriod_years: '—',
      orbitalPeriod_days: '—',
      eccentricity: 0,
      inclination_degrees: 0,
    },
    composition: {
      type: 'Plasma (ionized gas)',
      details:
        'The Sun is composed primarily of hydrogen (about 73% by mass) and helium (about 25%), with trace amounts of heavier elements including oxygen, carbon, neon, and iron.',
    },
    exploration: {
      missions: [
        { name: 'Parker Solar Probe', year: '2018', agency: 'NASA', description: 'First spacecraft to "touch" the Sun, flying through the corona to study solar wind and solar storms up close.' },
        { name: 'Solar Orbiter', year: '2020', agency: 'ESA/NASA', description: 'Studying the Sun\'s poles, solar wind, and solar flare activity.' },
        { name: 'SOHO', year: '1995', agency: 'ESA/NASA', description: 'Solar and Heliospheric Observatory, monitoring solar activity including flares and CMEs 24/7.' },
        { name: 'Solar Dynamics Observatory', year: '2010', agency: 'NASA', description: 'Studying solar variability, magnetic fields, and flare eruptions.' },
      ],
      highlights: [
        'The Sun contains 99.86% of all mass in the Solar System.',
        'It takes about 8 minutes and 20 seconds for light to travel from the Sun to Earth.',
        'The Sun\'s magnetic field creates sunspots, solar flares, and coronal mass ejections.',
        'Solar flares can release energy equivalent to billions of hydrogen bombs in minutes.',
        'The solar wind streams outward at 300-800 km/s, creating the heliosphere that shields us from cosmic rays.',
        'Major solar storms can disrupt satellites, power grids, and communications on Earth.',
      ],
    },
    interestingFacts: [
      'The Sun is about 4.6 billion years old and is roughly halfway through its life cycle.',
      'A million Earths could fit inside the Sun.',
      'The Sun\'s core generates energy equivalent to 100 billion hydrogen bombs per second.',
      'The solar wind streams outward at speeds of 300-800 km/s, forming a "bubble" called the heliosphere.',
      'Solar flares are classified A, B, C, M, X by strength — X-class are the most powerful and can trigger radio blackouts on Earth.',
      'Coronal mass ejections (CMEs) hurl billions of tons of plasma into space at speeds up to 3,000 km/s.',
      'The Carrington Event of 1859 was the most powerful solar storm in recorded history, causing telegraph systems to fail worldwide.',
      'The solar wind creates aurorae (Northern and Southern Lights) when charged particles interact with Earth\'s magnetic field.',
    ],
    color: '#FDB813',
    radius: 20,
  },
  {
    id: 'mercury',
    name: 'Mercury',
    type: 'planet',
    description:
      'Mercury is the smallest planet in our Solar System and the closest to the Sun. It is a world of extremes, with scorching days and freezing nights. Its cratered surface resembles our Moon, bearing witness to billions of years of impacts.',
    physicalCharacteristics: {
      diameter_km: 4879,
      mass_kg: '3.301 × 10²³',
      surfaceGravity_m_s2: 3.7,
      escapeVelocity_km_s: 4.3,
      meanTemperature_C: '167 (average: -180 to 430)',
      axialTilt_degrees: 0.034,
      dayLength: '58.6 Earth days',
    },
    orbitalCharacteristics: {
      distanceFromSun_au: 0.387,
      orbitalPeriod_years: '0.241',
      orbitalPeriod_days: '87.97',
      eccentricity: 0.2056,
      inclination_degrees: 7.0,
      orbitalSpeed_km_s: 47.4,
    },
    atmosphere: {
      composition: [
        { element: 'Oxygen', percentage: '42%' },
        { element: 'Sodium', percentage: '29%' },
        { element: 'Hydrogen', percentage: '22%' },
        { element: 'Helium', percentage: '6%' },
      ],
      description:
        'Mercury has an extremely thin exosphere, not a true atmosphere. Atmospheric pressure is less than one-trillionth of Earth\'s.',
    },
    composition: {
      type: 'Terrestrial (rocky)',
      details:
        'Mercury has a large metallic core (about 75% of its diameter), making it the second-densest planet after Earth. The core is surrounded by a silicate mantle and crust.',
    },
    exploration: {
      missions: [
        { name: 'Mariner 10', year: '1974', agency: 'NASA', description: 'First spacecraft to visit Mercury, mapped 45% of surface.' },
        { name: 'MESSENGER', year: '2011', agency: 'NASA', description: 'First to orbit Mercury, mapped entire surface, found water ice in polar craters.' },
        { name: 'BepiColombo', year: '2018', agency: 'ESA/JAXA', description: 'Two orbiters studying Mercury\'s composition, magnetosphere, and geology.' },
      ],
      highlights: [
        'Despite being closest to the Sun, Mercury is not the hottest planet (Venus is).',
        'Sunlight on Mercury is up to 11 times brighter than on Earth.',
        'Mercury has no rings and only a trace atmosphere.',
      ],
    },
    interestingFacts: [
      'A year on Mercury (88 days) is shorter than a Mercury day (58.6 Earth days).',
      'Mercury orbits the Sun at up to 47.4 km/s, the fastest of any planet.',
      'The Caloris Basin is one of the largest impact craters in the Solar System (1,550 km across).',
      'Radar imaging suggests there are billions of tons of water ice in permanently shadowed polar craters.',
    ],
    color: '#B5B5B5',
    radius: 1.5,
  },
  {
    id: 'venus',
    name: 'Venus',
    type: 'planet',
    description:
      'Venus is the second planet from the Sun and the hottest in our Solar System. Often called Earth\'s "sister planet" due to similar size and mass, it has a thick toxic atmosphere that creates a runaway greenhouse effect, making its surface hot enough to melt lead. Venus\'s atmosphere exhibits a phenomenon called super-rotation, where winds whip around the planet at speeds up to 360 km/h (224 mph), completing a full rotation in just 4 Earth days — far faster than the planet itself rotates.',
    physicalCharacteristics: {
      diameter_km: 12104,
      mass_kg: '4.867 × 10²⁴',
      surfaceGravity_m_s2: 8.87,
      escapeVelocity_km_s: 10.36,
      meanTemperature_C: '464 (surface)',
      axialTilt_degrees: 2.64,
      dayLength: '243 Earth days (retrograde)',
    },
    orbitalCharacteristics: {
      distanceFromSun_au: 0.723,
      orbitalPeriod_years: '0.615',
      orbitalPeriod_days: '224.7',
      eccentricity: 0.0068,
      inclination_degrees: 3.39,
      orbitalSpeed_km_s: 35.0,
    },
    atmosphere: {
      composition: [
        { element: 'Carbon Dioxide', percentage: '96.5%' },
        { element: 'Nitrogen', percentage: '3.5%' },
        { element: 'Sulfur Dioxide', percentage: '0.015%' },
      ],
      description:
        'Venus has the thickest atmosphere of any terrestrial planet, composed mainly of CO₂ with clouds of sulfuric acid. Atmospheric pressure at the surface is 92 times that of Earth. The atmosphere super-rotates, circling the planet every 4 Earth days with wind speeds reaching 360 km/h (224 mph) at the cloud tops, despite the planet\'s slow 243-day rotation.',
    },
    composition: {
      type: 'Terrestrial (rocky)',
      details:
        'Venus has a composition similar to Earth: an iron core, rocky mantle, and crust. However, it lacks plate tectonics and has a geologically young surface dominated by volcanism.',
    },
    exploration: {
      missions: [
        { name: 'Venera 7', year: '1970', agency: 'USSR', description: 'First spacecraft to land on another planet and transmit data from the surface.' },
        { name: 'Venera 13', year: '1982', agency: 'USSR', description: 'Returned the first color images of Venus\'s surface.' },
        { name: 'Magellan', year: '1990', agency: 'NASA', description: 'Mapped 98% of Venus\'s surface using radar.' },
        { name: 'Venus Express', year: '2006', agency: 'ESA', description: 'Studied Venus\'s atmosphere and plasma environment.' },
      ],
      highlights: [
        'Venus rotates in the opposite direction to most planets (retrograde rotation).',
        'A day on Venus (243 Earth days) is longer than its year (225 Earth days).',
        'Venus has no moons and no rings.',
        'Venus\'s atmosphere super-rotates, with winds reaching 360 km/h at the cloud tops.',
      ],
    },
    interestingFacts: [
      'Venus is the brightest natural object in Earth\'s night sky after the Moon.',
      'The surface pressure is equivalent to being 900 meters under Earth\'s oceans.',
      'Venus has over 1,600 major volcanoes, more than any other planet.',
      'Cloud-top winds reach 360 km/h, circling Venus every 4 Earth days — 60x faster than the planet\'s rotation.',
      'Venus\'s super-rotation remains a mystery: the entire atmosphere moves far faster than the solid planet.',
      'The ancient Romans named Venus after their goddess of love and beauty.',
    ],
    color: '#E8B87C',
    radius: 3.5,
  },
  {
    id: 'earth',
    name: 'Earth',
    type: 'planet',
    description:
      'Earth is the third planet from the Sun and the only known world to harbor life. Its unique combination of liquid water, a protective magnetic field, and a nitrogen-oxygen atmosphere has allowed life to thrive for over 3.5 billion years.',
    physicalCharacteristics: {
      diameter_km: 12756,
      mass_kg: '5.972 × 10²⁴',
      surfaceGravity_m_s2: 9.81,
      escapeVelocity_km_s: 11.19,
      meanTemperature_C: '15 (average)',
      axialTilt_degrees: 23.44,
      dayLength: '24 hours',
    },
    orbitalCharacteristics: {
      distanceFromSun_au: 1.0,
      orbitalPeriod_years: '1.0',
      orbitalPeriod_days: '365.25',
      eccentricity: 0.0167,
      inclination_degrees: 0.0,
      orbitalSpeed_km_s: 29.8,
    },
    atmosphere: {
      composition: [
        { element: 'Nitrogen', percentage: '78%' },
        { element: 'Oxygen', percentage: '21%' },
        { element: 'Argon', percentage: '0.93%' },
        { element: 'Carbon Dioxide', percentage: '0.04%' },
      ],
      description:
        'Earth\'s atmosphere is a complex layer of gases that protects life from harmful solar radiation, moderates climate, and provides the air we breathe.',
    },
    composition: {
      type: 'Terrestrial (rocky)',
      details:
        'Earth has a layered structure: a solid inner core (mostly iron), a liquid outer core, a silicate mantle, and a thin rocky crust. It is the only terrestrial planet with active plate tectonics.',
    },
    moons: ['moon'],
    exploration: {
      missions: [
        { name: 'Apollo 11', year: '1969', agency: 'NASA', description: 'First humans to land on the Moon.' },
        { name: 'ISS', year: '1998', agency: 'Multiple', description: 'International Space Station, continuous human presence in space since 2000.' },
        { name: 'Landsat Program', year: '1972', agency: 'NASA/USGS', description: 'Longest-running Earth observation satellite program.' },
        { name: 'James Webb Space Telescope', year: '2021', agency: 'NASA/ESA/CSA', description: 'Observing the universe from beyond Earth\'s orbit.' },
      ],
      highlights: [
        'Earth is the largest and most massive of the four terrestrial planets.',
        'The Moon is Earth\'s only natural satellite, stabilising its axial tilt.',
        'About 71% of Earth\'s surface is covered in liquid water.',
      ],
    },
    interestingFacts: [
      'Earth is the only planet not named after a Greek or Roman god.',
      'The atmosphere extends to about 10,000 km above the surface.',
      'Earth\'s magnetic field protects life from solar wind and cosmic radiation.',
      'The deepest point on Earth is the Mariana Trench, 11,034 meters deep.',
    ],
    color: '#4B9CD3',
    radius: 3.8,
  },
  {
    id: 'moon',
    name: 'The Moon',
    type: 'moon',
    parentId: 'earth',
    description:
      'The Moon is Earth\'s only natural satellite and the fifth largest moon in the Solar System. Its gravitational pull causes Earth\'s tides and stabilises our planet\'s axial tilt. It is the only celestial body beyond Earth that humans have visited.',
    physicalCharacteristics: {
      diameter_km: 3475,
      mass_kg: '7.342 × 10²²',
      surfaceGravity_m_s2: 1.62,
      escapeVelocity_km_s: 2.38,
      meanTemperature_C: '-53 (average: -233 to 123)',
      axialTilt_degrees: 1.54,
      dayLength: '29.5 Earth days',
    },
    orbitalCharacteristics: {
      distanceFromSun_au: 1.0,
      orbitalPeriod_years: '0.0027',
      orbitalPeriod_days: '27.3',
      eccentricity: 0.0549,
      inclination_degrees: 5.15,
      orbitalSpeed_km_s: 1.02,
    },
    atmosphere: {
      composition: [
        { element: 'Helium', percentage: '25%' },
        { element: 'Neon', percentage: '25%' },
        { element: 'Argon', percentage: '20%' },
        { element: 'Sodium', percentage: '10%' },
      ],
      description:
        'The Moon has an extremely thin exosphere with surface pressure about 10⁻¹⁴ of Earth\'s — effectively a vacuum.',
    },
    composition: {
      type: 'Rocky (differentiated)',
      details:
        'Similar to Earth\'s composition: a crust (anorthosite), a mantle (olivine and pyroxene), and a small iron-rich core. Samples brought back by Apollo missions show it is made of similar material to Earth\'s mantle.',
    },
    exploration: {
      missions: [
        { name: 'Apollo 11', year: '1969', agency: 'NASA', description: 'First human landing. Neil Armstrong and Buzz Aldrin walked on the Moon.' },
        { name: 'Luna 2', year: '1959', agency: 'USSR', description: 'First spacecraft to reach the Moon\'s surface.' },
        { name: 'Lunar Reconnaissance Orbiter', year: '2009', agency: 'NASA', description: 'High-resolution mapping of the lunar surface.' },
        { name: 'Chang\'e 4', year: '2019', agency: 'CNSA', description: 'First landing on the far side of the Moon.' },
        { name: 'Artemis I', year: '2022', agency: 'NASA', description: 'Uncrewed test flight of new lunar exploration systems.' },
      ],
      highlights: [
        'The Moon is moving away from Earth at about 3.8 cm per year.',
        'The far side of the Moon was first photographed in 1959 by Luna 3.',
        'Moonquakes occur due to tidal stresses from Earth\'s gravity.',
      ],
    },
    interestingFacts: [
      'The Moon is in synchronous rotation, always showing the same face to Earth.',
      'There is no sound on the Moon due to the lack of atmosphere.',
      'Footprints left by Apollo astronauts will remain for millions of years.',
      'The Moon likely formed when a Mars-sized body collided with early Earth.',
    ],
    color: '#C8C8C8',
    radius: 1.8,
  },
  {
    id: 'mars',
    name: 'Mars',
    type: 'planet',
    description:
      'Mars, the Red Planet, is the fourth planet from the Sun. Its reddish color comes from iron oxide (rust) on its surface. Mars has long fascinated humanity as a potential second home for life, with its ancient river valleys, polar ice caps, and the tallest mountain in the Solar System.',
    physicalCharacteristics: {
      diameter_km: 6792,
      mass_kg: '6.417 × 10²³',
      surfaceGravity_m_s2: 3.72,
      escapeVelocity_km_s: 5.03,
      meanTemperature_C: '-65 (average: -140 to 20)',
      axialTilt_degrees: 25.19,
      dayLength: '24.6 hours',
    },
    orbitalCharacteristics: {
      distanceFromSun_au: 1.524,
      orbitalPeriod_years: '1.881',
      orbitalPeriod_days: '687.0',
      eccentricity: 0.0934,
      inclination_degrees: 1.85,
      orbitalSpeed_km_s: 24.1,
    },
    atmosphere: {
      composition: [
        { element: 'Carbon Dioxide', percentage: '95%' },
        { element: 'Nitrogen', percentage: '2.7%' },
        { element: 'Argon', percentage: '1.6%' },
        { element: 'Oxygen', percentage: '0.13%' },
      ],
      description:
        'Mars has a thin atmosphere, less than 1% of Earth\'s pressure. It is too thin for liquid water to persist on the surface, though subsurface water ice is abundant.',
    },
    composition: {
      type: 'Terrestrial (rocky)',
      details:
        'Mars has a layered structure: a dense iron-nickel core, a silicate mantle, and a crust rich in iron and basalt. The crust varies in thickness from 10 km (in the north) to 80 km (in the south).',
    },
    moons: ['phobos', 'deimos'],
    exploration: {
      missions: [
        { name: 'Mariner 4', year: '1965', agency: 'NASA', description: 'First spacecraft to fly by Mars and return images.' },
        { name: 'Viking 1', year: '1976', agency: 'NASA', description: 'First successful landing on Mars.' },
        { name: 'Mars Rover Opportunity', year: '2004', agency: 'NASA', description: 'Explored Mars for 15 years, far exceeding its planned 90-day mission.' },
        { name: 'Curiosity Rover', year: '2012', agency: 'NASA', description: 'Still active, studying Mars\'s habitability.' },
        { name: 'Perseverance Rover', year: '2021', agency: 'NASA', description: 'Searching for signs of ancient life and collecting samples.' },
        { name: 'Ingenuity', year: '2021', agency: 'NASA', description: 'First powered flight on another world.' },
      ],
      highlights: [
        'Olympus Mons is the largest volcano in the Solar System (21.9 km tall).',
        'Valles Marineris is a canyon system 4,000 km long — 10× longer than the Grand Canyon.',
        'Mars has seasons like Earth due to its similar axial tilt.',
      ],
    },
    interestingFacts: [
      'A Mars day (sol) is only 40 minutes longer than an Earth day.',
      'Mars has the largest dust storms in the Solar System, sometimes engulfing the entire planet.',
      'Evidence suggests Mars once had a thicker atmosphere and liquid water on its surface.',
      'Mars\'s two moons, Phobos and Deimos, are likely captured asteroids.',
    ],
    color: '#E27B58',
    radius: 2.8,
  },
  {
    id: 'phobos',
    name: 'Phobos',
    type: 'moon',
    parentId: 'mars',
    description:
      'Phobos is the larger of Mars\'s two moons, named after the Greek god of fear. It orbits closer to Mars than any other moon in the Solar System and is slowly spiraling inward, destined to either crash into Mars or break apart into a ring.',
    physicalCharacteristics: {
      diameter_km: 22.4,
      mass_kg: '1.06 × 10¹⁶',
      surfaceGravity_m_s2: 0.0057,
      escapeVelocity_km_s: 0.011,
      meanTemperature_C: '-40 (average)',
      dayLength: '7.7 hours',
    },
    orbitalCharacteristics: {
      distanceFromSun_au: 1.524,
      orbitalPeriod_years: '0.0002',
      orbitalPeriod_days: '0.32',
      eccentricity: 0.0151,
      inclination_degrees: 1.08,
      orbitalSpeed_km_s: 2.14,
    },
    composition: {
      type: 'C-type (carbonaceous)',
      details:
        'Phobos is likely a captured asteroid, composed of carbon-rich rock and ice. It is heavily cratered, with the largest crater (Stickney) covering a significant portion of its surface.',
    },
    exploration: {
      missions: [
        { name: 'Viking 1', year: '1977', agency: 'NASA', description: 'First detailed images of Phobos.' },
        { name: 'Phobos 2', year: '1989', agency: 'USSR', description: 'Attempted to land but lost contact.' },
        { name: 'Mars Express', year: '2004', agency: 'ESA', description: 'High-resolution imaging and gravity measurements.' },
      ],
      highlights: [
        'Phobos orbits Mars so fast that it rises and sets twice per Martian day.',
        'It is spiraling inward at 1.8 cm per year and will be destroyed in ~50 million years.',
        'Stickney crater (9 km) is so large it created surface grooves across Phobos.',
      ],
    },
    interestingFacts: [
      'Phobos is one of the darkest moons in the Solar System, reflecting only 7% of sunlight.',
      'From the surface of Mars, Phobos appears about one-third the size of Earth\'s Moon.',
      'There is speculation that Phobos could be hollow, though most evidence indicates it is solid.',
    ],
    color: '#8B8B8B',
    radius: 0.3,
  },
  {
    id: 'deimos',
    name: 'Deimos',
    type: 'moon',
    parentId: 'mars',
    description:
      'Deimos is the smaller and more distant of Mars\'s two moons, named after the Greek god of dread. It has a smooth, less cratered surface compared to Phobos, and may eventually escape Mars\'s gravity.',
    physicalCharacteristics: {
      diameter_km: 12.4,
      mass_kg: '1.48 × 10¹⁵',
      surfaceGravity_m_s2: 0.003,
      escapeVelocity_km_s: 0.0055,
      meanTemperature_C: '-40 (average)',
      dayLength: '30.3 hours',
    },
    orbitalCharacteristics: {
      distanceFromSun_au: 1.524,
      orbitalPeriod_years: '0.0004',
      orbitalPeriod_days: '1.26',
      eccentricity: 0.0002,
      inclination_degrees: 0.93,
      orbitalSpeed_km_s: 1.35,
    },
    composition: {
      type: 'C-type (carbonaceous)',
      details:
        'Like Phobos, Deimos is likely a captured asteroid composed of carbonaceous material. Its surface is smoother due to partial filling of craters by regolith.',
    },
    exploration: {
      missions: [
        { name: 'Viking 1 & 2', year: '1977', agency: 'NASA', description: 'First detailed observations.' },
        { name: 'Mars Express', year: '2004', agency: 'ESA', description: 'High-resolution imaging.' },
        { name: 'Mars Reconnaissance Orbiter', year: '2006', agency: 'NASA', description: 'Detailed spectral analysis.' },
      ],
      highlights: [
        'Deimos has only two named craters: Swift and Voltaire.',
        'From Mars\'s surface, Deimos looks like a bright star that slowly crosses the sky.',
        'Unlike Phobos, Deimos is slowly moving away from Mars.',
      ],
    },
    interestingFacts: [
      'Deimos is the smallest known moon in the Solar System that orbits a planet.',
      'It takes about 2.7 days for Deimos to transit the Martian sky from rise to set.',
      'Deimos may be a captured asteroid from the main asteroid belt.',
    ],
    color: '#A0A0A0',
    radius: 0.2,
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    type: 'planet',
    description:
      'Jupiter is the largest planet in our Solar System — a gas giant more massive than all other planets combined. Its iconic Great Red Spot is a storm larger than Earth that has raged for centuries. Jupiter\'s powerful magnetic field and dozens of moons make it a solar system in miniature.',
    physicalCharacteristics: {
      diameter_km: 142984,
      mass_kg: '1.898 × 10²⁷',
      surfaceGravity_m_s2: 24.79,
      escapeVelocity_km_s: 59.54,
      meanTemperature_C: '-110 (cloud top)',
      axialTilt_degrees: 3.13,
      dayLength: '9.93 hours',
    },
    orbitalCharacteristics: {
      distanceFromSun_au: 5.203,
      orbitalPeriod_years: '11.86',
      orbitalPeriod_days: '4331.6',
      eccentricity: 0.0484,
      inclination_degrees: 1.3,
      orbitalSpeed_km_s: 13.1,
    },
    atmosphere: {
      composition: [
        { element: 'Hydrogen', percentage: '89.8%' },
        { element: 'Helium', percentage: '10.2%' },
        { element: 'Methane', percentage: '0.3%' },
        { element: 'Ammonia', percentage: '0.026%' },
      ],
      description:
        'Jupiter\'s atmosphere is the largest planetary atmosphere in the Solar System, composed mostly of molecular hydrogen and helium. The colorful bands are caused by different chemicals in the clouds at various altitudes.',
    },
    composition: {
      type: 'Gas giant',
      details:
        'Jupiter has no solid surface. Its composition transitions from gas to liquid hydrogen under extreme pressure. Deep within, it may have a core of rock and metallic hydrogen the size of Earth but 10× more massive.',
    },
    moons: ['io', 'europa', 'ganymede', 'callisto'],
    exploration: {
      missions: [
        { name: 'Pioneer 10', year: '1973', agency: 'NASA', description: 'First spacecraft to fly by Jupiter.' },
        { name: 'Voyager 1 & 2', year: '1979', agency: 'NASA', description: 'Detailed images of Jupiter\'s moons and rings.' },
        { name: 'Galileo', year: '1995', agency: 'NASA', description: 'First to orbit Jupiter, deployed an atmospheric probe.' },
        { name: 'Juno', year: '2016', agency: 'NASA', description: 'Currently studying Jupiter\'s composition, gravity, and magnetic field.' },
        { name: 'Europa Clipper', year: '2024', agency: 'NASA', description: 'Will study Europa\'s subsurface ocean.' },
        { name: 'Lucy', year: '2021', agency: 'NASA', description: 'First mission to Jupiter\'s Trojan asteroids, flybys of 8+ asteroids across both L4 and L5 swarms.' },
      ],
      highlights: [
        'The Great Red Spot is an anticyclonic storm, currently about 1.3× the diameter of Earth.',
        'Jupiter\'s magnetic field is 20,000× stronger than Earth\'s.',
        'Jupiter has a faint ring system discovered by Voyager 1 in 1979.',
        'Jupiter has over 10,000 known Trojan asteroids at its L4 and L5 Lagrange points.',
      ],
    },
    interestingFacts: [
      'Jupiter\'s mass is 2.5× that of all other planets in the Solar System combined.',
      'Jupiter emits more heat than it receives from the Sun due to gravitational contraction.',
      'The planet has the shortest day of any planet — less than 10 hours.',
      'Jupiter has at least 95 known moons, with four large Galilean moons.',
    ],
    color: '#D4A574',
    radius: 7.5,
  },
  {
    id: 'io',
    name: 'Io',
    type: 'moon',
    parentId: 'jupiter',
    description:
      'Io is the innermost of Jupiter\'s four large Galilean moons and the most volcanically active world in the Solar System. Its surface is covered with sulfur compounds in vivid shades of yellow, red, and white, shaped by hundreds of active volcanoes.',
    physicalCharacteristics: {
      diameter_km: 3643,
      mass_kg: '8.932 × 10²²',
      surfaceGravity_m_s2: 1.79,
      escapeVelocity_km_s: 2.56,
      meanTemperature_C: '-143 (average: -183 to -130)',
      dayLength: '1.77 Earth days',
    },
    orbitalCharacteristics: {
      distanceFromSun_au: 5.203,
      orbitalPeriod_years: '0.0048',
      orbitalPeriod_days: '1.77',
      eccentricity: 0.0041,
      inclination_degrees: 0.04,
    },
    composition: {
      type: 'Rocky (sulfur-rich)',
      details:
        'Io is composed primarily of silicate rock surrounding a molten iron or iron-sulfide core. Its surface is coated in sulfur and sulfur dioxide frost from ongoing volcanic activity.',
    },
    exploration: {
      missions: [
        { name: 'Voyager 1', year: '1979', agency: 'NASA', description: 'Discovered volcanic activity on Io.' },
        { name: 'Galileo', year: '1995', agency: 'NASA', description: 'Mapped Io during multiple flybys.' },
        { name: 'New Horizons', year: '2007', agency: 'NASA', description: 'Observed a massive volcanic eruption on Io.' },
      ],
      highlights: [
        'Io\'s volcanoes eject plumes up to 500 km above the surface.',
        'The volcanic heat flow on Io is about 40× greater than on Earth per unit area.',
        'Tidal heating from Jupiter\'s gravity drives the volcanic activity.',
      ],
    },
    interestingFacts: [
      'Io has over 400 active volcanoes, more than any other world in the Solar System.',
      'The extreme volcanic activity constantly reshapes Io\'s surface.',
      'Io\'s thin atmosphere is mainly sulfur dioxide, constantly being replenished by volcanic outgassing.',
      'Io is tidally locked to Jupiter, always showing the same face.',
    ],
    color: '#E8C56A',
    radius: 1.0,
  },
  {
    id: 'europa',
    name: 'Europa',
    type: 'moon',
    parentId: 'jupiter',
    description:
      'Europa is the smallest of Jupiter\'s four Galilean moons, but it may be the most promising place to look for life beyond Earth. Beneath its icy, cracked surface lies a global ocean of liquid water, kept warm by tidal heating.',
    physicalCharacteristics: {
      diameter_km: 3122,
      mass_kg: '4.799 × 10²²',
      surfaceGravity_m_s2: 1.31,
      escapeVelocity_km_s: 2.03,
      meanTemperature_C: '-160 (surface)',
      dayLength: '3.55 Earth days',
    },
    orbitalCharacteristics: {
      distanceFromSun_au: 5.203,
      orbitalPeriod_years: '0.0097',
      orbitalPeriod_days: '3.55',
      eccentricity: 0.009,
      inclination_degrees: 0.47,
    },
    atmosphere: {
      composition: [
        { element: 'Oxygen', percentage: '100% (trace)' },
      ],
      description:
        'Europa has a tenuous oxygen atmosphere, created by solar radiation splitting water ice molecules. Atmospheric pressure is one-trillionth of Earth\'s.',
    },
    composition: {
      type: 'Icy world',
      details:
        'Beneath a 15-25 km thick ice crust lies a global liquid water ocean estimated to be 60-100 km deep, containing more water than all of Earth\'s oceans combined. Below that, a rocky mantle and metallic core.',
    },
    exploration: {
      missions: [
        { name: 'Voyager 1 & 2', year: '1979', agency: 'NASA', description: 'First detailed images of Europa\'s cracked surface.' },
        { name: 'Galileo', year: '1995', agency: 'NASA', description: 'Confirmed the likely presence of a subsurface ocean.' },
        { name: 'Europa Clipper', year: '2024', agency: 'NASA', description: 'Will conduct detailed reconnaissance of Europa, assess habitability.' },
      ],
      highlights: [
        'Europa\'s ocean may have hydrothermal vents similar to Earth\'s, potentially supporting life.',
        'The surface is crisscrossed with dark lines called "lineae" — fractures in the ice crust.',
        'Water plumes have been detected erupting from Europa\'s south pole.',
      ],
    },
    interestingFacts: [
      'Europa\'s surface is the smoothest in the Solar System.',
      'There is likely more water on Europa than on Earth.',
      'The blue-white surface suggests relatively young ice, only 20-180 million years old.',
      'Europa is one of the most likely places in the Solar System to host extraterrestrial life.',
    ],
    color: '#B8C4D0',
    radius: 0.95,
  },
  {
    id: 'ganymede',
    name: 'Ganymede',
    type: 'moon',
    parentId: 'jupiter',
    description:
      'Ganymede is the largest moon in the Solar System — larger than Mercury and Pluto. It is the only moon known to generate its own magnetic field and is thought to have a subsurface saltwater ocean sandwiched between layers of ice.',
    physicalCharacteristics: {
      diameter_km: 5268,
      mass_kg: '1.482 × 10²³',
      surfaceGravity_m_s2: 1.43,
      escapeVelocity_km_s: 2.74,
      meanTemperature_C: '-163 (surface)',
      dayLength: '7.15 Earth days',
    },
    orbitalCharacteristics: {
      distanceFromSun_au: 5.203,
      orbitalPeriod_years: '0.0196',
      orbitalPeriod_days: '7.15',
      eccentricity: 0.0013,
      inclination_degrees: 0.2,
    },
    atmosphere: {
      composition: [
        { element: 'Oxygen', percentage: 'trace' },
      ],
      description:
        'Ganymede has a tenuous oxygen atmosphere, likely produced when charged particles from Jupiter\'s magnetosphere erode the icy surface.',
    },
    composition: {
      type: 'Differentiated icy world',
      details:
        'Ganymede has a layered structure: a metallic iron-nickel core, a rocky mantle, and an outer ice shell believed to contain a subsurface ocean between two layers of ice.',
    },
    exploration: {
      missions: [
        { name: 'Voyager 1 & 2', year: '1979', agency: 'NASA', description: 'Revealed Ganymede\'s varied terrain.' },
        { name: 'Galileo', year: '1995', agency: 'NASA', description: 'Discovered Ganymede\'s magnetic field and evidence of subsurface ocean.' },
        { name: 'JUICE', year: '2023', agency: 'ESA', description: 'Will orbit Ganymede, studying its ocean, magnetic field, and surface.' },
      ],
      highlights: [
        'Ganymede\'s magnetic field creates spectacular auroras at its poles.',
        'The surface shows two types of terrain: dark cratered regions and bright grooved terrain.',
        'Ganymede\'s subsurface ocean may contain more water than all of Earth\'s oceans.',
      ],
    },
    interestingFacts: [
      'If Ganymede orbited the Sun instead of Jupiter, it would easily be classified as a planet.',
      'Ganymede is the ninth-largest object in the Solar System.',
      'The grooved terrain suggests past tectonic activity driven by tidal forces.',
      'Ganymede is the only moon with a magnetosphere.',
    ],
    color: '#A8A898',
    radius: 1.6,
  },
  {
    id: 'callisto',
    name: 'Callisto',
    type: 'moon',
    parentId: 'jupiter',
    description:
      'Callisto is the outermost of Jupiter\'s four Galilean moons. Its ancient, heavily cratered surface is the oldest in the Solar System, remaining largely unchanged for over 4 billion years. Beneath the icy crust lies a possible subsurface ocean.',
    physicalCharacteristics: {
      diameter_km: 4821,
      mass_kg: '1.076 × 10²³',
      surfaceGravity_m_s2: 1.24,
      escapeVelocity_km_s: 2.44,
      meanTemperature_C: '-139 (surface)',
      dayLength: '16.69 Earth days',
    },
    orbitalCharacteristics: {
      distanceFromSun_au: 5.203,
      orbitalPeriod_years: '0.0457',
      orbitalPeriod_days: '16.69',
      eccentricity: 0.007,
      inclination_degrees: 0.2,
    },
    atmosphere: {
      composition: [
        { element: 'Carbon Dioxide', percentage: '100% (trace)' },
      ],
      description:
        'Callisto has an extremely thin carbon dioxide atmosphere, with traces of oxygen. The pressure is less than one-trillionth of Earth\'s.',
    },
    composition: {
      type: 'Icy world',
      details:
        'Callisto\'s interior is believed to consist of a rocky core surrounded by a mantle of ice and rock, with a possible subsurface ocean at depth. Unlike Ganymede, it has not fully differentiated.',
    },
    exploration: {
      missions: [
        { name: 'Voyager 1 & 2', year: '1979', agency: 'NASA', description: 'Revealed Callisto\'s cratered surface.' },
        { name: 'Galileo', year: '1995', agency: 'NASA', description: 'Found evidence of a subsurface ocean.' },
      ],
      highlights: [
        'Callisto\'s surface is the most heavily cratered in the Solar System.',
        'The largest impact basin, Valhalla, is 3,000 km across.',
        'Callisto is one of the safest places in the outer Solar System for future human bases.',
      ],
    },
    interestingFacts: [
      'Callisto is outside Jupiter\'s main radiation belt, making it safer for study.',
      'Tidal heating is negligible for Callisto, so its interior is cold.',
      'The surface is estimated to be about 4 billion years old.',
      'Callisto\'s subsurface ocean may be kept liquid by pressure and ammonia.',
    ],
    color: '#7A7A6E',
    radius: 1.4,
  },
  {
    id: 'saturn',
    name: 'Saturn',
    type: 'planet',
    description:
      'Saturn is the sixth planet from the Sun and the second largest in our Solar System. Its magnificent ring system — composed of billions of ice and rock particles — makes it one of the most visually stunning objects in the night sky. Like Jupiter, Saturn is a gas giant with no solid surface.',
    physicalCharacteristics: {
      diameter_km: 120536,
      mass_kg: '5.683 × 10²⁶',
      surfaceGravity_m_s2: 10.44,
      escapeVelocity_km_s: 35.49,
      meanTemperature_C: '-140 (cloud top)',
      axialTilt_degrees: 26.73,
      dayLength: '10.7 hours',
    },
    orbitalCharacteristics: {
      distanceFromSun_au: 9.537,
      orbitalPeriod_years: '29.46',
      orbitalPeriod_days: '10759.2',
      eccentricity: 0.0542,
      inclination_degrees: 2.49,
      orbitalSpeed_km_s: 9.7,
    },
    atmosphere: {
      composition: [
        { element: 'Hydrogen', percentage: '96.3%' },
        { element: 'Helium', percentage: '3.25%' },
        { element: 'Methane', percentage: '0.45%' },
        { element: 'Ammonia', percentage: '0.025%' },
      ],
      description:
        'Saturn\'s atmosphere, like Jupiter\'s, is primarily hydrogen and helium. Ammonia ice crystals at high altitudes give it its pale yellow color. Wind speeds can reach 1,800 km/h — faster than Jupiter.',
    },
    composition: {
      type: 'Gas giant',
      details:
        'Saturn is the least dense planet in the Solar System — its density is less than water. It likely has a rocky core surrounded by metallic hydrogen and a molecular hydrogen envelope.',
    },
    moons: ['titan', 'enceladus', 'mimas', 'tethys', 'dione', 'rhea', 'iapetus'],
    exploration: {
      missions: [
        { name: 'Pioneer 11', year: '1979', agency: 'NASA', description: 'First to fly by Saturn.' },
        { name: 'Voyager 1 & 2', year: '1980-81', agency: 'NASA', description: 'Detailed images of Saturn\'s rings and moons.' },
        { name: 'Cassini-Huygens', year: '2004', agency: 'NASA/ESA/ASI', description: 'Orbited Saturn for 13 years, deployed probe to Titan. Revealed Enceladus\'s water plumes.' },
      ],
      highlights: [
        'Saturn\'s rings extend up to 282,000 km from the planet but are only about 10 meters thick.',
        'The rings are made of 99.9% water ice with some rocky material.',
        'Cassini\'s Grand Finale in 2017 flew between Saturn and its rings before diving into the atmosphere.',
      ],
    },
    interestingFacts: [
      'Saturn is so light it would float in a giant bathtub (if one existed).',
      'Saturn\'s rings are constantly changing, with "spokes" and other dynamic features.',
      'Saturn has at least 146 known moons, more than any other planet.',
      'The hexagonal storm at Saturn\'s north pole is a persistent geometric cloud pattern unique in the Solar System.',
    ],
    color: '#E8D5A3',
    radius: 6.5,
  },
  {
    id: 'titan',
    name: 'Titan',
    type: 'moon',
    parentId: 'saturn',
    description:
      'Titan is Saturn\'s largest moon and the second largest in the Solar System. It is unique among moons for having a thick atmosphere and stable bodies of liquid on its surface — though the liquid is methane and ethane, not water. Titan is one of the most Earth-like worlds in the Solar System.',
    physicalCharacteristics: {
      diameter_km: 5150,
      mass_kg: '1.345 × 10²³',
      surfaceGravity_m_s2: 1.35,
      escapeVelocity_km_s: 2.64,
      meanTemperature_C: '-179 (surface)',
      dayLength: '15.95 Earth days',
    },
    orbitalCharacteristics: {
      distanceFromSun_au: 9.537,
      orbitalPeriod_years: '0.044',
      orbitalPeriod_days: '15.95',
      eccentricity: 0.0288,
      inclination_degrees: 0.35,
    },
    atmosphere: {
      composition: [
        { element: 'Nitrogen', percentage: '95%' },
        { element: 'Methane', percentage: '4.9%' },
        { element: 'Argon', percentage: '0.01%' },
      ],
      description:
        'Titan has the thickest atmosphere of any moon in the Solar System, with surface pressure 1.5× that of Earth. The atmosphere contains organic compounds that form a thick orange haze.',
    },
    composition: {
      type: 'Icy world',
      details:
        'Titan\'s interior likely consists of a rocky core, a high-pressure ice mantle, and a subsurface liquid water ocean. The surface is composed of water ice and hydrocarbon deposits.',
    },
    exploration: {
      missions: [
        { name: 'Pioneer 11', year: '1979', agency: 'NASA', description: 'First distant observations.' },
        { name: 'Voyager 1 & 2', year: '1980', agency: 'NASA', description: 'Revealed Titan\'s hazy atmosphere.' },
        { name: 'Cassini-Huygens', year: '2004', agency: 'NASA/ESA/ASI', description: 'Huygens probe landed on Titan\'s surface — first landing in the outer Solar System.' },
        { name: 'Dragonfly', year: '2028 (planned)', agency: 'NASA', description: 'Dual-quadcopter rotorcraft to explore Titan\'s surface and atmosphere.' },
      ],
      highlights: [
        'Titan has methane rivers, lakes, and seas, and methane rain.',
        'Organic compounds in Titan\'s atmosphere create a thick smog, similar to early Earth.',
        'Titan\'s subsurface ocean may be a second candidate for extraterrestrial life.',
      ],
    },
    interestingFacts: [
      'Titan is larger than the planet Mercury.',
      'The Huygens probe returned data from Titan\'s surface for 90 minutes in 2005.',
      'Titan\'s dunes are made of hydrocarbon grains, not silicates.',
      'Without sunlight reaching the surface, Titan is in perpetual twilight.',
    ],
    color: '#C8A84E',
    radius: 1.5,
  },
  {
    id: 'enceladus',
    name: 'Enceladus',
    type: 'moon',
    parentId: 'saturn',
    description:
      'Enceladus is a small icy moon of Saturn that has become one of the most exciting targets in the search for life. Cryovolcanic geysers at its south pole shoot plumes of water vapor and organic molecules into space, revealing a global subsurface ocean.',
    physicalCharacteristics: {
      diameter_km: 504,
      mass_kg: '1.08 × 10²⁰',
      surfaceGravity_m_s2: 0.113,
      escapeVelocity_km_s: 0.24,
      meanTemperature_C: '-201 (surface: -241 to -128)',
      dayLength: '1.37 Earth days',
    },
    orbitalCharacteristics: {
      distanceFromSun_au: 9.537,
      orbitalPeriod_years: '0.00375',
      orbitalPeriod_days: '1.37',
      eccentricity: 0.0047,
      inclination_degrees: 0.01,
    },
    composition: {
      type: 'Icy world',
      details:
        'Enceladus is composed primarily of water ice with a small rocky core. The south polar region is actively geologically, with over 100 geysers erupting through the "Tiger Stripes" — fissures in the icy crust.',
    },
    exploration: {
      missions: [
        { name: 'Voyager 2', year: '1981', agency: 'NASA', description: 'Revealed Enceladus\'s bright, smooth surface.' },
        { name: 'Cassini', year: '2005-2017', agency: 'NASA/ESA/ASI', description: 'Discovered the water plumes, flew through them, and found organic compounds and hydrothermal activity.' },
      ],
      highlights: [
        'Enceladus\'s plumes contain water vapor, molecular hydrogen, methane, CO₂, and organic compounds.',
        'The subsurface ocean is in direct contact with the rocky core, enabling hydrothermal chemistry.',
        'Enceladus is the smallest body in the Solar System known to be geologically active.',
      ],
    },
    interestingFacts: [
      'Enceladus reflects nearly 100% of sunlight — it is the most reflective object in the Solar System.',
      'The south polar plumes erupt at supersonic speeds (up to 2,100 km/h).',
      'Saturn\'s E-ring is formed by ice particles from Enceladus\'s plumes.',
      'Enceladus meets all requirements for a habitable environment.',
    ],
    color: '#E8E8F0',
    radius: 0.4,
  },
  {
    id: 'uranus',
    name: 'Uranus',
    type: 'planet',
    description:
      'Uranus is the seventh planet from the Sun and the third largest. It has a distinctive blue-green color due to methane in its atmosphere. Uranus is unique for its extreme axial tilt of 98°, essentially rolling on its side as it orbits the Sun.',
    physicalCharacteristics: {
      diameter_km: 51118,
      mass_kg: '8.681 × 10²⁵',
      surfaceGravity_m_s2: 8.69,
      escapeVelocity_km_s: 21.38,
      meanTemperature_C: '-195 (cloud top)',
      axialTilt_degrees: 97.77,
      dayLength: '17.2 hours (retrograde)',
    },
    orbitalCharacteristics: {
      distanceFromSun_au: 19.19,
      orbitalPeriod_years: '84.01',
      orbitalPeriod_days: '30688.5',
      eccentricity: 0.0472,
      inclination_degrees: 0.77,
      orbitalSpeed_km_s: 6.8,
    },
    atmosphere: {
      composition: [
        { element: 'Hydrogen', percentage: '82.5%' },
        { element: 'Helium', percentage: '15.2%' },
        { element: 'Methane', percentage: '2.3%' },
      ],
      description:
        'Uranus has a hydrogen-helium atmosphere with a higher proportion of methane than Jupiter or Saturn. Methane absorbs red light, giving the planet its cyan color. Beneath the atmosphere, there is no solid surface.',
    },
    composition: {
      type: 'Ice giant',
      details:
        'Uranus is an ice giant with a mantle composed of water, methane, and ammonia ices above a small rocky core. It has the coldest atmosphere of any planet in the Solar System.',
    },
    moons: ['miranda', 'ariel', 'umbriel', 'titania', 'oberon'],
    exploration: {
      missions: [
        { name: 'Voyager 2', year: '1986', agency: 'NASA', description: 'The only spacecraft to visit Uranus. Discovered new moons and rings.' },
      ],
      highlights: [
        'Uranus has 13 known rings, the second ring system discovered after Saturn\'s.',
        'The extreme axial tilt means each pole gets 42 years of continuous sunlight, then 42 years of darkness.',
        'Uranus has 27 known moons, all named after characters from Shakespeare and Pope.',
      ],
    },
    interestingFacts: [
      'Uranus was the first planet discovered with a telescope (by William Herschel in 1781).',
      'Uranus\'s magnetic field is tilted 59° from its rotation axis and offset from the planet\'s center.',
      'The planet likely has a diamond rain phenomenon — carbon compressed into diamonds that fall through the mantle.',
      'Uranus is pronounced differently: "YOOR-uh-nus" or "yoo-RAY-nus".',
    ],
    color: '#7EC8E3',
    radius: 4.5,
  },
  {
    id: 'neptune',
    name: 'Neptune',
    type: 'planet',
    description:
      'Neptune is the eighth and most distant planet in our Solar System. This deep blue ice giant has the strongest winds of any planet, with gusts reaching 2,100 km/h. It was the first planet located through mathematical prediction rather than direct observation.',
    physicalCharacteristics: {
      diameter_km: 49528,
      mass_kg: '1.024 × 10²⁶',
      surfaceGravity_m_s2: 11.15,
      escapeVelocity_km_s: 23.55,
      meanTemperature_C: '-200 (cloud top)',
      axialTilt_degrees: 28.32,
      dayLength: '16.1 hours',
    },
    orbitalCharacteristics: {
      distanceFromSun_au: 30.07,
      orbitalPeriod_years: '164.8',
      orbitalPeriod_days: '60182',
      eccentricity: 0.0086,
      inclination_degrees: 1.77,
      orbitalSpeed_km_s: 5.4,
    },
    atmosphere: {
      composition: [
        { element: 'Hydrogen', percentage: '80%' },
        { element: 'Helium', percentage: '19%' },
        { element: 'Methane', percentage: '1.5%' },
      ],
      description:
        'Neptune\'s atmosphere is similar to Uranus but with more vivid blue coloration and more dynamic weather. The Great Dark Spot observed by Voyager 2 was a storm system the size of Earth.',
    },
    composition: {
      type: 'Ice giant',
      details:
        'Like Uranus, Neptune is an ice giant with a mantle of water, methane, and ammonia ices surrounding a rocky core. Its mineral content is higher relative to Uranus.',
    },
    moons: ['triton', 'nereid', 'proteus', 'larissa', 'galatea', 'despina', 'thalassa', 'naiad'],
    exploration: {
      missions: [
        { name: 'Voyager 2', year: '1989', agency: 'NASA', description: 'The only spacecraft to visit Neptune. Discovered the Great Dark Spot and six new moons.' },
      ],
      highlights: [
        'Neptune has the strongest winds in the Solar System, reaching 2,100 km/h.',
        'Neptune has a faint ring system (arcs) discovered by Voyager 2.',
        'The planet\'s vivid blue color is due to methane in the atmosphere.',
      ],
    },
    interestingFacts: [
      'Neptune takes 165 Earth years to orbit the Sun — it has only completed one orbit since its discovery in 1846.',
      'Neptune\'s moon Triton orbits in the opposite direction (retrograde), suggesting it is a captured Kuiper Belt object.',
      'Neptune emits 2.6× more heat than it receives from the Sun.',
      'Triton, Neptune\'s largest moon, has geysers of liquid nitrogen.',
    ],
    color: '#3355FF',
    radius: 4.3,
  },
  {
    id: 'triton',
    name: 'Triton',
    type: 'moon',
    parentId: 'neptune',
    description:
      'Triton is Neptune\'s largest moon and the seventh largest in the Solar System. It is unique as the only large moon in the Solar System with a retrograde orbit (orbiting opposite to its planet\'s rotation), suggesting it was once a Kuiper Belt object captured by Neptune\'s gravity.',
    physicalCharacteristics: {
      diameter_km: 2707,
      mass_kg: '2.14 × 10²²',
      surfaceGravity_m_s2: 0.78,
      escapeVelocity_km_s: 1.46,
      meanTemperature_C: '-235 (surface)',
      dayLength: '5.88 Earth days (retrograde)',
    },
    orbitalCharacteristics: {
      distanceFromSun_au: 30.07,
      orbitalPeriod_years: '0.0161',
      orbitalPeriod_days: '5.88',
      eccentricity: 0.00002,
      inclination_degrees: 157.34,
    },
    atmosphere: {
      composition: [
        { element: 'Nitrogen', percentage: '99%' },
        { element: 'Methane', percentage: '0.01%' },
      ],
      description:
        'Triton has a thin nitrogen atmosphere, with trace amounts of methane. Surface pressure is only 1.4 Pa (about 1/70,000th of Earth\'s).',
    },
    composition: {
      type: 'Icy world',
      details:
        'Triton is composed mostly of nitrogen and water ice with a rocky core. Its relatively high density suggests it has a substantial rock content (about 65% of its mass).',
    },
    exploration: {
      missions: [
        { name: 'Voyager 2', year: '1989', agency: 'NASA', description: 'The only spacecraft to visit Triton. Mapped 40% of the surface and discovered cryovolcanoes.' },
      ],
      highlights: [
        'Triton is one of the coldest known bodies in the Solar System at -235°C.',
        'Active nitrogen geysers erupt to 8 km height from Triton\'s surface.',
        'The surface is relatively young, suggesting ongoing geological activity.',
      ],
    },
    interestingFacts: [
      'Triton\'s retrograde orbit means it is slowly spiraling into Neptune, and will be torn apart in about 3.6 billion years.',
      'Triton is likely a captured dwarf planet from the Kuiper Belt, related to Pluto.',
      'The cantaloupe-like terrain on Triton is unique in the Solar System.',
    ],
    color: '#B0B0C0',
    radius: 0.9,
  },
  {
    id: 'pluto',
    name: 'Pluto',
    type: 'dwarf-planet',
    description:
      'Pluto was once the ninth planet of the Solar System but was reclassified as a dwarf planet in 2006. This distant world at the edge of the Kuiper Belt is a complex and geologically active world with mountains, glaciers, and a thin atmosphere.',
    physicalCharacteristics: {
      diameter_km: 2377,
      mass_kg: '1.303 × 10²²',
      surfaceGravity_m_s2: 0.62,
      escapeVelocity_km_s: 1.21,
      meanTemperature_C: '-230 (average)',
      axialTilt_degrees: 122.53,
      dayLength: '6.39 Earth days (retrograde)',
    },
    orbitalCharacteristics: {
      distanceFromSun_au: 39.48,
      orbitalPeriod_years: '247.9',
      orbitalPeriod_days: '90560',
      eccentricity: 0.2488,
      inclination_degrees: 17.16,
      orbitalSpeed_km_s: 4.7,
    },
    atmosphere: {
      composition: [
        { element: 'Nitrogen', percentage: '98%' },
        { element: 'Methane', percentage: '1%' },
        { element: 'Carbon Monoxide', percentage: '0.5%' },
      ],
      description:
        'Pluto has a thin nitrogen atmosphere that expands as Pluto approaches the Sun in its elliptical orbit and collapses as it moves away. Surface pressure varies dramatically over Pluto\'s year.',
    },
    composition: {
      type: 'Icy dwarf planet',
      details:
        'Pluto is composed primarily of nitrogen ice, methane ice, and water ice with a rocky core. The surface shows diverse terrains including the bright heart-shaped Tombaugh Regio and dark equatorial regions.',
    },
    moons: ['charon'],
    exploration: {
      missions: [
        { name: 'New Horizons', year: '2015', agency: 'NASA', description: 'First and only spacecraft to visit Pluto. Revealed incredibly diverse geology including 3.5 km tall water-ice mountains.' },
      ],
      highlights: [
        'Pluto\'s heart-shaped feature (Tombaugh Regio) dominates its surface.',
        'Sputnik Planitia, the left lobe of the heart, is a 1,000 km wide basin filled with nitrogen ice.',
        'Pluto has active glaciers, flowing nitrogen ice across its surface.',
      ],
    },
    interestingFacts: [
      'Pluto\'s orbit is so elliptical it sometimes crosses inside Neptune\'s orbit (last time was 1979-1999).',
      'When Pluto has a closer approach to the Sun, its atmosphere expands outward instead of forming a tail.',
      'Pluto shares its orbit with thousands of other Kuiper Belt objects.',
      'The name "Pluto" was suggested by an 11-year-old girl, Venetia Burney.',
    ],
    color: '#D4B896',
    radius: 0.7,
  },
  {
    id: 'charon',
    name: 'Charon',
    type: 'moon',
    parentId: 'pluto',
    description:
      'Charon is the largest moon of Pluto, so large relative to Pluto that the two are often considered a binary dwarf planet system. They are tidally locked to each other, always showing the same face. Charon has a dark polar region nicknamed "Mordor Macula."',
    physicalCharacteristics: {
      diameter_km: 1212,
      mass_kg: '1.586 × 10²¹',
      surfaceGravity_m_s2: 0.29,
      escapeVelocity_km_s: 0.59,
      meanTemperature_C: '-230 (average)',
      dayLength: '6.39 Earth days',
    },
    orbitalCharacteristics: {
      distanceFromSun_au: 39.48,
      orbitalPeriod_years: '0.0175',
      orbitalPeriod_days: '6.39',
      eccentricity: 0.0002,
      inclination_degrees: 0.08,
    },
    composition: {
      type: 'Icy world',
      details:
        'Charon\'s composition is dominated by water ice, with little to no atmosphere. A large canyon system, Serenity Chasma, extends for 1,800 km across the surface.',
    },
    exploration: {
      missions: [
        { name: 'New Horizons', year: '2015', agency: 'NASA', description: 'First close-up images of Charon, revealing its complex geology.' },
      ],
      highlights: [
        'Charon is half the diameter of Pluto, making the pair the largest binary system in the Solar System.',
        'The surface shows a mix of cratered highlands and smooth plains, suggesting past geological activity.',
        'Charon\'s "Mordor Macula" is a dark polar region deposited from Pluto\'s escaping atmosphere.',
      ],
    },
    interestingFacts: [
      'Charon was discovered in 1978 by astronomer James Christy.',
      'The Pluto-Charon barycenter lies outside Pluto, so they truly orbit each other.',
      'Charon may have had a subsurface ocean that froze long ago.',
    ],
    color: '#888890',
    radius: 0.5,
  },
  {
    id: 'ceres',
    name: 'Ceres',
    type: 'dwarf-planet',
    description:
      'Ceres is the largest object in the asteroid belt between Mars and Jupiter and the only dwarf planet in the inner Solar System. It is a primitive world that has remained largely unchanged since the formation of the Solar System 4.6 billion years ago.',
    physicalCharacteristics: {
      diameter_km: 939,
      mass_kg: '9.39 × 10²⁰',
      surfaceGravity_m_s2: 0.28,
      escapeVelocity_km_s: 0.51,
      meanTemperature_C: '-105 (average)',
      dayLength: '9.07 hours',
    },
    orbitalCharacteristics: {
      distanceFromSun_au: 2.77,
      orbitalPeriod_years: '4.6',
      orbitalPeriod_days: '1680',
      eccentricity: 0.079,
      inclination_degrees: 10.59,
      orbitalSpeed_km_s: 17.9,
    },
    atmosphere: {
      composition: [
        { element: 'Water Vapor', percentage: 'trace' },
      ],
      description:
        'Ceres has a very thin water vapor atmosphere (exosphere), possibly from cryovolcanic activity or sublimation of surface ice.',
    },
    composition: {
      type: 'Rocky-icy dwarf planet',
      details:
        'Ceres is composed of rock and water ice, with evidence suggesting a subsurface ocean or liquid water layer. Its surface shows salt deposits, possibly from briny water reaching the surface.',
    },
    exploration: {
      missions: [
        { name: 'Dawn', year: '2015', agency: 'NASA', description: 'First spacecraft to orbit a dwarf planet. Revealed cryovolcanoes (Ahuna Mons), bright salt deposits (Occator Crater), and evidence of subsurface water.' },
        { name: 'Hubble Space Telescope', year: '2003-2004', agency: 'NASA/ESA', description: 'Provided detailed images showing surface features before Dawn arrived.' },
      ],
      highlights: [
        'Ceres\'s bright spots in Occator Crater are sodium carbonate deposits from briny water.',
        'Ahuna Mons is a 4 km tall cryovolcano, made of ice and salt instead of lava.',
        'Ceres may still have subsurface liquid water, making it a target for astrobiology.',
      ],
    },
    interestingFacts: [
      'Ceres was the first asteroid discovered (1801) by Giuseppe Piazzi.',
      'Ceres accounts for about 30% of the mass of the asteroid belt.',
      'The name Ceres comes from the Roman goddess of agriculture and harvest.',
      'Ceres may have a subsurface ocean of liquid water.',
    ],
    color: '#8C8C84',
    radius: 0.5,
  },
  {
    id: 'asteroid-belt',
    name: 'Asteroid Belt',
    type: 'belt',
    description:
      'The asteroid belt is a region between the orbits of Mars and Jupiter containing millions of rocky bodies, from tiny dust particles to the dwarf planet Ceres. It is a remnant of the early Solar System that never coalesced into a planet due to Jupiter\'s gravitational influence.',
    physicalCharacteristics: {
      diameter_km: 0,
      mass_kg: '2.39 × 10²¹ (total)',
      meanTemperature_C: '-73 (average)',
      dayLength: '—',
    },
    orbitalCharacteristics: {
      distanceFromSun_au: 2.2,
      orbitalPeriod_years: '—',
      orbitalPeriod_days: '—',
      eccentricity: 0,
      inclination_degrees: 0,
    },
    composition: {
      type: 'Rocky and metallic bodies',
      details:
        'Asteroids are classified by composition: C-type (carbonaceous, 75%), S-type (siliceous, 17%), and M-type (metallic, 8%). The belt contains the dwarf planet Ceres and three other large asteroids: Vesta, Pallas, and Hygiea.',
    },
    exploration: {
      missions: [
        { name: 'Dawn', year: '2011-2018', agency: 'NASA', description: 'Orbited Vesta and Ceres, the two largest objects in the belt.' },
        { name: 'Hayabusa', year: '2005', agency: 'JAXA', description: 'Returned samples from asteroid Itokawa.' },
        { name: 'Hayabusa2', year: '2018', agency: 'JAXA', description: 'Returned samples from Ryugu, a carbonaceous asteroid.' },
        { name: 'OSIRIS-REx', year: '2020', agency: 'NASA', description: 'Returned samples from Bennu, a carbonaceous asteroid.' },
        { name: 'Lucy', year: '2021', agency: 'NASA', description: 'En route to Jupiter\'s Trojan asteroids (arriving 2027) — the first mission to visit these primordial bodies.' },
      ],
      highlights: [
        'The total mass of the asteroid belt is only about 4% of the Moon\'s mass.',
        'More than half of the belt\'s mass is contained in the four largest objects: Ceres, Vesta, Pallas, and Hygiea.',
        'Asteroids are time capsules from the early Solar System.',
      ],
    },
    interestingFacts: [
      'The average distance between asteroids in the belt is about 1 million km.',
      'Meteorites found on Earth come from the asteroid belt.',
      'Some asteroids have their own moons (binary asteroids).',
      'Jupiter prevents a planet from forming in the asteroid belt due to its strong gravity.',
    ],
    color: '#7A7A6A',
    radius: 4.2,
  },
  {
    id: 'trojan-asteroids',
    name: 'Trojan Asteroids',
    type: 'belt',
    description:
      'Trojan asteroids are small bodies that share an orbit with a planet, clustered around the stable Lagrange points L4 (leading) and L5 (trailing) of the Sun-planet system. Jupiter has over 10,000 known Trojans — more than the entire main asteroid belt. Trojans also exist for Mars, Neptune, Uranus, and even Earth.',
    physicalCharacteristics: {
      diameter_km: 0,
      mass_kg: '~10²⁰ (estimated total for Jupiter Trojans)',
      meanTemperature_C: '-145 (average at Jupiter distance)',
      dayLength: '—',
    },
    orbitalCharacteristics: {
      distanceFromSun_au: 5.2,
      orbitalPeriod_years: '~11.86 (same as Jupiter)',
      orbitalPeriod_days: '—',
      eccentricity: 0.05,
      inclination_degrees: 15,
    },
    composition: {
      type: 'Primitive, dark, and reddish surfaces',
      details:
        'Jupiter Trojans are D-type and P-type asteroids, among the darkest objects in the Solar System. They are rich in organic compounds and water ice, believed to be remnants from the formation of the outer planets. Their surfaces reflect only 3-6% of sunlight.',
    },
    exploration: {
      missions: [
        { name: 'Lucy', year: '2021', agency: 'NASA', description: 'First Trojan asteroid mission. Will fly by 8+ asteroids across both L4 and L5 swarms over 12 years, including 150+ km wide Eurybates, Polymele, Leucus, Orus, and binary Patroclus-Menoetius.' },
        { name: 'Ground-based surveys', year: '1906-2024', agency: 'Various', description: 'Over 10,000 Trojans discovered since the first (588 Achilles) in 1906, primarily via ground telescopes.' },
      ],
      highlights: [
        'Jupiter\'s Trojans outnumber the main asteroid belt in total count of known objects.',
        'The first Trojan, 588 Achilles, was discovered in 1906 by Max Wolf.',
        'NASA\'s Lucy mission (launched 2021) is the first mission specifically targeting Trojan asteroids.',
      ],
    },
    interestingFacts: [
      'Trojan asteroids orbit 60° ahead of (L4) and 60° behind (L5) their host planet.',
      'Mars has 9 known Trojans, Neptune has 28, Uranus has 2, and Earth has 1 (2010 TK7).',
      'Jupiter\'s Trojan swarms each extend over 1 AU in length along the orbit.',
      'The largest Jupiter Trojan, 624 Hektor, is 225 km across and has its own moon.',
    ],
    color: '#8B7D6B',
    radius: 5.0,
  },
  {
    id: 'kuiper-belt',
    name: 'Kuiper Belt',
    type: 'belt',
    description:
      'The Kuiper Belt is a vast region of icy bodies beyond Neptune\'s orbit, extending from about 30 to 50 AU from the Sun. It is similar to the asteroid belt but far larger — 20× as wide and up to 200× as massive. It contains Pluto, Eris, Makemake, Haumea, and countless other icy worlds.',
    physicalCharacteristics: {
      diameter_km: 0,
      mass_kg: '~2 × 10²² (estimated total)',
      meanTemperature_C: '-230 (average)',
      dayLength: '—',
    },
    orbitalCharacteristics: {
      distanceFromSun_au: 30,
      orbitalPeriod_years: '—',
      orbitalPeriod_days: '—',
      eccentricity: 0,
      inclination_degrees: 0,
    },
    composition: {
      type: 'Icy bodies (cometary material)',
      details:
        'Kuiper Belt objects (KBOs) are composed primarily of frozen volatiles such as methane, ammonia, and water ice. They are remnants from the formation of the outer Solar System.',
    },
    exploration: {
      missions: [
        { name: 'New Horizons', year: '2015-2019', agency: 'NASA', description: 'First to visit Pluto and Arrokoth (2014 MU69), a Kuiper Belt object.' },
      ],
      highlights: [
        'The Kuiper Belt is the source of short-period comets like Halley\'s Comet.',
        'Arrokoth, visited by New Horizons in 2019, is a contact binary KBO — two bodies gently merged.',
        'The largest known KBOs are Pluto, Eris, Makemake, Haumea, and Quaoar.',
      ],
    },
    interestingFacts: [
      'The Kuiper Belt was hypothesized by Gerard Kuiper in 1951, but the first KBO was discovered in 1992.',
      'There may be hundreds of thousands of KBOs larger than 100 km across.',
      'Eris, the most massive known dwarf planet, is located in the scattered disk beyond the Kuiper Belt.',
      'Some KBOs, like Haumea, have their own rings and moons.',
    ],
    color: '#5A6A8A',
    radius: 7.5,
  },
  {
    id: 'oort-cloud',
    name: 'Oort Cloud',
    type: 'other',
    description:
      'The Oort Cloud is a theoretical, spherical shell of icy bodies thought to surround the Solar System at distances up to 100,000 AU (1.5 light-years) from the Sun. It is the reservoir of long-period comets and marks the outermost boundary of the Solar System\'s gravitational influence.',
    physicalCharacteristics: {
      diameter_km: 0,
      mass_kg: '~1.9 × 10²² (estimated)',
      meanTemperature_C: '-268 (near absolute zero)',
      dayLength: '—',
    },
    orbitalCharacteristics: {
      distanceFromSun_au: 2000,
      orbitalPeriod_years: '—',
      orbitalPeriod_days: '—',
      eccentricity: 0,
      inclination_degrees: 0,
    },
    composition: {
      type: 'Icy planetesimals',
      details:
        'Oort Cloud objects are composed of water ice, methane, ethane, carbon monoxide, and hydrogen cyanide — the building blocks of comets.',
    },
    exploration: {
      missions: [
        { name: 'None (yet)', year: '—', agency: '—', description: 'No spacecraft have visited the Oort Cloud. It is too distant with current technology.' },
      ],
      highlights: [
        'The Oort Cloud has never been directly observed, but its existence is inferred from comet orbits.',
        'Some comets from the Oort Cloud take millions of years to complete one orbit around the Sun.',
        'The Voyager spacecraft will reach the Oort Cloud in about 300 years and take 30,000 years to pass through it.',
      ],
    },
    interestingFacts: [
      'The Oort Cloud likely contains trillions of icy bodies.',
      'Passing stars occasionally perturb Oort Cloud objects, sending comets toward the inner Solar System.',
      'The inner edge of the Oort Cloud is about 2,000 AU from the Sun — 50× farther than Neptune.',
      'The Sun\'s Hill Sphere (sphere of gravitational dominance) extends to about 230,000 AU.',
    ],
    color: '#1A1A3A',
    radius: 12,
  },
  {
    id: 'lagrange-points',
    name: 'Lagrange Points',
    type: 'other',
    description:
      'Lagrange points are five positions in a two-body gravitational system where the gravitational forces and centrifugal force balance, creating stable equilibrium points. Named after mathematician Joseph-Louis Lagrange, these points are critical for space telescopes, future space stations, and naturally occurring collections of asteroids (Trojans).',
    physicalCharacteristics: {
      diameter_km: 0,
      mass_kg: '— (points in space, not physical objects)',
      meanTemperature_C: '—',
      dayLength: '—',
    },
    orbitalCharacteristics: {
      distanceFromSun_au: 1.5,
      orbitalPeriod_years: '—',
      orbitalPeriod_days: '—',
      eccentricity: 0,
      inclination_degrees: 0,
    },
    composition: {
      type: 'Gravitational equilibrium points',
      details:
        'L1 lies between Sun and Earth (1.5 million km from Earth). L2 is beyond Earth from the Sun — home to the James Webb Space Telescope. L3 is behind the Sun from Earth. L4 and L5 are 60° ahead and behind in orbit — stable points where Trojan asteroids accumulate. The Sun-Earth L1 and L2 are ideal for observatories due to stable thermal and viewing conditions.',
    },
    exploration: {
      missions: [
        { name: 'James Webb Space Telescope', year: '2021', agency: 'NASA/ESA/CSA', description: 'Orbiting Sun-Earth L2, observing the universe in infrared.' },
        { name: 'DSCOVR', year: '2015', agency: 'NASA/NOAA', description: 'At Sun-Earth L1, monitoring solar wind and Earth\'s climate.' },
        { name: 'Gaia', year: '2013', agency: 'ESA', description: 'At Sun-Earth L2, mapping 1 billion stars in the Milky Way.' },
        { name: 'Lucy Mission', year: '2021', agency: 'NASA', description: 'Visiting Jupiter\'s L4 and L5 Trojan swarms to study primordial material.' },
        { name: 'Future: Lunar Gateway', year: 'planned', agency: 'NASA', description: 'Planned space station near Earth-Moon Lagrange points.' },
      ],
      highlights: [
        'L1 and L2 are semi-stable (require station-keeping), while L4 and L5 are truly stable.',
        'The Sun-Earth L1 point is 1.5 million km from Earth — 4× the Moon\'s distance.',
        'L4 and L5 form equilateral triangles with the two massive bodies.',
      ],
    },
    interestingFacts: [
      'There are Lagrange points for every pair of massive bodies: Sun-Earth, Earth-Moon, Sun-Jupiter, etc.',
      'L4 and L5 are often called the "Trojan points" because Trojan asteroids cluster there.',
      'The JWST at L2 uses a sunshield the size of a tennis court to block solar radiation.',
      'L1 is the best vantage point for observing the Sun because it always faces our star.',
    ],
    color: '#5A7A9A',
    radius: 5.5,
  },
];

export const categories = [
  { type: 'star' as const, label: 'Star', description: 'The Sun — our nearest star' },
  { type: 'planet' as const, label: 'Planets', description: 'Eight major worlds orbiting the Sun' },
  { type: 'dwarf-planet' as const, label: 'Dwarf Planets', description: 'Pluto, Ceres, and other small worlds' },
  { type: 'moon' as const, label: 'Moons', description: 'Natural satellites orbiting planets' },
  { type: 'belt' as const, label: 'Belts & Regions', description: 'The Asteroid Belt, Kuiper Belt, and beyond' },
  { type: 'other' as const, label: 'Other Phenomena', description: 'The Oort Cloud, Lagrange points, and more' },
];

export function getBodyById(id: string): CelestialBody | undefined {
  return solarSystemData.find(body => body.id === id);
}

export function getBodiesByType(type: string): CelestialBody[] {
  return solarSystemData.filter(body => body.type === type);
}

export function getChildren(parentId: string): CelestialBody[] {
  return solarSystemData.filter(body => body.parentId === parentId);
}
