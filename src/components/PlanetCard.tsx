import { Link } from 'react-router-dom';
import { CelestialBody } from '../types';

interface PlanetCardProps {
  body: CelestialBody;
}

export default function PlanetCard({ body }: PlanetCardProps) {
  return (
    <Link to={`/body/${body.id}`} className="planet-card" style={{ textDecoration: 'none' }}>
      <div className="planet-card-circle" style={{ background: body.color }}>
        <span className="planet-card-initial">{body.name[0]}</span>
      </div>
      <div className="planet-card-info">
        <h3 className="planet-card-name">{body.name}</h3>
        <span className="planet-card-type">{body.type.replace('-', ' ')}</span>
        <p className="planet-card-desc">
          {body.description.slice(0, 100)}...
        </p>
      </div>
    </Link>
  );
}
