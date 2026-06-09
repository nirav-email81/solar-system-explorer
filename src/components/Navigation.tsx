import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }}>
          {'\u2606'} Solar Explorer <span className="nav-powered">(made with Opencode &mdash; big-pickle)</span>
        </Link>
        <div className="nav-links">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
            Home
          </Link>
          <Link
            to="/solar-system-3d"
            className={`nav-link ${isActive('/solar-system-3d') ? 'active' : ''}`}
          >
            3D View
          </Link>
          <Link
            to="/about"
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
