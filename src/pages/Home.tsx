import { Link } from 'react-router-dom';
import { solarSystemData, categories } from '../data/solarSystemData';
import PlanetCard from '../components/PlanetCard';
import SearchBar from '../components/SearchBar';
import VisitCounter from '../components/VisitCounter';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Home() {
  const planets = solarSystemData.filter(b => b.type === 'planet');
  const { ref: planetsRef, visible: planetsVisible } = useScrollReveal();
  const { ref: categoriesRef, visible: categoriesVisible } = useScrollReveal();

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
        <VisitCounter />
      </section>

      <section className="section" ref={planetsRef}>
        <h2 className={`section-title reveal ${planetsVisible ? 'visible' : ''}`}>The Planets</h2>
        <div className="planet-grid">
          {planets.map((body, i) => (
            <div
              key={body.id}
              className={`reveal ${planetsVisible ? 'visible' : ''} reveal-delay-${Math.min(i + 1, 7)}`}
            >
              <PlanetCard body={body} />
            </div>
          ))}
        </div>
      </section>

      <section className="section" ref={categoriesRef}>
        <h2 className={`section-title reveal ${categoriesVisible ? 'visible' : ''}`}>Browse by Category</h2>
        <div className="category-grid">
          {categories.map((cat, i) => {
            const bodies = solarSystemData.filter(b => b.type === cat.type);
            return (
              <Link
                key={cat.type}
                to={`/body/${bodies[0]?.id || 'sun'}`}
                className={`category-card reveal ${categoriesVisible ? 'visible' : ''} reveal-delay-${Math.min(i + 1, 4)}`}
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
