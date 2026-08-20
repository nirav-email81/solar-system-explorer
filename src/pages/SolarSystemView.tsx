import { useState, useEffect } from 'react';
import SolarSystem3D from '../components/SolarSystem3D';

export default function SolarSystemView() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page solar-system-3d-page">
      <SolarSystem3D />
      <div className={`solar-system-3d-overlay ${visible ? 'fade-in' : 'fade-out'}`}>
        <h1>Interactive 3D Solar System</h1>
        <p>Drag to rotate &bull; Scroll to zoom &bull; Hover for labels &bull; Click for details</p>
        <p style={{ fontSize: '0.7rem', opacity: 0.6, marginTop: '0.3rem' }}>
          Keyboard: Space=pause &bull; +/-=speed &bull; O=orbits &bull; B=belts &bull; L=labels &bull; F=fullscreen
        </p>
      </div>
    </div>
  );
}
