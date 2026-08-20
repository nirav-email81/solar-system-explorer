import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }}>
          {'\u2606'} Solar Explorer <span className="nav-powered">(made with Opencode &mdash; big-pickle)</span>
        </Link>

        <button
          className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>

        <div className={`nav-links ${menuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={closeMenu}>
            Home
          </Link>
          <Link to="/solar-system-3d" className={`nav-link ${isActive('/solar-system-3d') ? 'active' : ''}`} onClick={closeMenu}>
            3D View
          </Link>
          <Link to="/facts" className={`nav-link ${isActive('/facts') ? 'active' : ''}`} onClick={closeMenu}>
            Facts
          </Link>
          <Link to="/chat" className={`nav-link ${isActive('/chat') ? 'active' : ''}`} onClick={closeMenu}>
            Chat
          </Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`} onClick={closeMenu}>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
