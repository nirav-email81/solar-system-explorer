import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import SolarSystemView from './pages/SolarSystemView';
import CelestialBodyPage from './pages/CelestialBodyPage';
import About from './pages/About';

export default function App() {
  return (
    <div className="app">
      <Navigation />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solar-system-3d" element={<SolarSystemView />} />
          <Route path="/body/:id" element={<CelestialBodyPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}
