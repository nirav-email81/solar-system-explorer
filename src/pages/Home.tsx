import { Link } from 'react-router-dom';
import { solarSystemData, categories } from '../data/solarSystemData';
import PlanetCard from '../components/PlanetCard';
import SearchBar from '../components/SearchBar';

export default function Home() {
  const planets = solarSystemData.filter(b => b.type === 'planet');

  return (
    <div className="page home-page">
      <section className="hero">
        <h1 className="hero-title">Explore the Solar System</h1>
        <p className="hero-subtitle">
          Journey through our cosmic neighborhood — from the blazing Sun to the distant Oort Cloud
        </p>
        <SearchBar />
        <Link to="/solar-system-3d" className="hero-cta">
          Launch 3D Explorer
        </Link>
      </section>

      <section className="section">
        <h2 className="section-title">The Planets</h2>
        <div className="planet-grid">
          {planets.map(body => (
            <PlanetCard key={body.id} body={body} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Browse by Category</h2>
        <div className="category-grid">
          {categories.map(cat => {
            const bodies = solarSystemData.filter(b => b.type === cat.type);
            return (
              <Link
                key={cat.type}
                to={`/body/${bodies[0]?.id || 'sun'}`}
                className="category-card"
                style={{ textDecoration: 'none' }}
              >
                <h3 className="category-label">{cat.label}</h3>
                <p className="category-count">{bodies.length} objects</p>
                <p className="category-desc">{cat.description}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
