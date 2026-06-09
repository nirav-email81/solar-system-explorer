import SolarSystem3D from '../components/SolarSystem3D';

export default function SolarSystemView() {
  return (
    <div className="page solar-system-3d-page">
      <SolarSystem3D />
      <div className="solar-system-3d-overlay">
        <h1>Interactive 3D Solar System</h1>
        <p>Drag to rotate &bull; Scroll to zoom &bull; Hover for labels &bull; Click for details</p>
      </div>
    </div>
  );
}
