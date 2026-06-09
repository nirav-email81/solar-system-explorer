import { useParams, Link } from 'react-router-dom';
import { getBodyById, getChildren } from '../data/solarSystemData';
import PlanetCard from '../components/PlanetCard';

function getOrbitShape(eccentricity: number): string {
  if (eccentricity === 0) return 'Perfect circle';
  if (eccentricity < 0.01) return 'Nearly circular';
  if (eccentricity < 0.05) return 'Slightly elliptical';
  if (eccentricity < 0.1) return 'Moderately elliptical';
  if (eccentricity < 0.2) return 'Very elliptical';
  return 'Highly elliptical';
}

function getInclinationNote(degrees: number): string {
  if (degrees === 0) return '— aligned with the reference plane';
  if (degrees < 2) return '— nearly coplanar';
  if (degrees < 5) return '— slightly tilted';
  if (degrees < 10) return '— noticeably tilted';
  return '— significantly inclined';
}

export default function CelestialBodyPage() {
  const { id } = useParams<{ id: string }>();
  const body = getBodyById(id || '');

  if (!body) {
    return (
      <div className="page not-found">
        <h1>Body not found</h1>
        <Link to="/">Return home</Link>
      </div>
    );
  }

  const children = getChildren(body.id);
  const parent = body.parentId ? getBodyById(body.parentId) : null;

  return (
    <div className="page body-page">
      <div className="body-header" style={{ borderColor: body.color }}>
        <div className="body-header-left">
          <div className="body-icon" style={{ background: body.color }}>
            {body.name[0]}
          </div>
          <div>
            <h1 className="body-name">{body.name}</h1>
            <span className="body-type-badge">{body.type.replace('-', ' ')}</span>
            {parent && (
              <span className="body-parent">
                {' '}&mdash; Orbiting{' '}
                <Link to={`/body/${parent.id}`}>{parent.name}</Link>
              </span>
            )}
          </div>
        </div>
      </div>

      <p className="body-description">{body.description}</p>

      <div className="body-grid">
        <div className="body-card">
          <h3>Physical Characteristics</h3>
          <table className="body-table">
            <tbody>
              <tr><td>Diameter</td><td>{body.physicalCharacteristics.diameter_km.toLocaleString()} km</td></tr>
              <tr><td>Mass</td><td>{body.physicalCharacteristics.mass_kg}</td></tr>
              {body.physicalCharacteristics.surfaceGravity_m_s2 && (
                <tr><td>Surface Gravity</td><td>{body.physicalCharacteristics.surfaceGravity_m_s2} m/s²</td></tr>
              )}
              {body.physicalCharacteristics.escapeVelocity_km_s && (
                <tr><td>Escape Velocity</td><td>{body.physicalCharacteristics.escapeVelocity_km_s} km/s</td></tr>
              )}
              <tr><td>Mean Temperature</td><td>{body.physicalCharacteristics.meanTemperature_C}</td></tr>
              {body.physicalCharacteristics.axialTilt_degrees !== undefined && (
                <tr><td>Axial Tilt</td><td>{body.physicalCharacteristics.axialTilt_degrees}°</td></tr>
              )}
              {body.physicalCharacteristics.dayLength && (
                <tr><td>Day Length</td><td>{body.physicalCharacteristics.dayLength}</td></tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="body-card">
          <h3>Orbital Characteristics</h3>
          <table className="body-table">
            <tbody>
              {body.orbitalCharacteristics.distanceFromSun_au > 0 && (
                <tr><td>Distance from Sun</td><td>{body.orbitalCharacteristics.distanceFromSun_au} AU</td></tr>
              )}
              {body.id !== 'sun' && (
                <>
                  <tr><td>Orbital Period</td><td>{body.orbitalCharacteristics.orbitalPeriod_years} years ({body.orbitalCharacteristics.orbitalPeriod_days} days)</td></tr>
                  <tr><td>Eccentricity</td><td>{body.orbitalCharacteristics.eccentricity}</td></tr>
                  <tr><td>Orbit Shape</td><td>{getOrbitShape(body.orbitalCharacteristics.eccentricity)}</td></tr>
                  <tr><td>Inclination</td><td>{body.orbitalCharacteristics.inclination_degrees}° <span className="body-note">{getInclinationNote(body.orbitalCharacteristics.inclination_degrees)}</span></td></tr>
                  {body.orbitalCharacteristics.orbitalSpeed_km_s && (
                    <tr><td>Orbital Speed</td><td>{body.orbitalCharacteristics.orbitalSpeed_km_s} km/s</td></tr>
                  )}
                </>
              )}
            </tbody>
          </table>
        </div>

        {body.composition && (
          <div className="body-card">
            <h3>Composition</h3>
            <p className="body-composition-type">{body.composition.type}</p>
            <p>{body.composition.details}</p>
          </div>
        )}

        {body.atmosphere && (
          <div className="body-card">
            <h3>Atmosphere</h3>
            <p>{body.atmosphere.description}</p>
            {body.atmosphere.composition.length > 0 && (
              <div className="atmosphere-bars">
                {body.atmosphere.composition.map((comp, i) => (
                  <div key={i} className="atmosphere-bar-row">
                    <span className="atmosphere-bar-label">{comp.element}</span>
                    <div className="atmosphere-bar-track">
                      <div
                        className="atmosphere-bar-fill"
                        style={{ width: comp.percentage }}
                      />
                    </div>
                    <span className="atmosphere-bar-pct">{comp.percentage}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="body-card" style={{ marginTop: '1rem' }}>
        <h3>Exploration</h3>
        <div className="missions-list">
          {body.exploration.missions.map((mission, i) => (
            <div key={i} className="mission-item">
              <div className="mission-header">
                <strong>{mission.name}</strong>
                <span className="mission-year">{mission.year}</span>
                <span className="mission-agency">{mission.agency}</span>
              </div>
              <p className="mission-desc">{mission.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="body-grid" style={{ marginTop: '1rem' }}>
        <div className="body-card">
          <h3>Key Highlights</h3>
          <ul className="highlights-list">
            {body.exploration.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </div>

        <div className="body-card">
          <h3>Interesting Facts</h3>
          <ul className="highlights-list">
            {body.interestingFacts.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      </div>

      {children.length > 0 && (
        <section className="section" style={{ marginTop: '2rem' }}>
          <h2 className="section-title">
            Moons &mdash; {body.name}
          </h2>
          <div className="planet-grid">
            {children.map(child => (
              <PlanetCard key={child.id} body={child} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
