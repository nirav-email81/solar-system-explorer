import { useRef, useMemo, useState, createContext, useContext, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Stars, Text, Html } from '@react-three/drei';
import * as THREE from 'three';
import { CelestialBody } from '../types';
import { solarSystemData } from '../data/solarSystemData';
import { useNavigate } from 'react-router-dom';

const DEG60 = Math.PI / 3;
const LAGRANGE_COLORS: Record<string, string> = {
  'l4-earth': '#22d3ee',
  'l5-earth': '#2dd4bf',
  'l1-earth': '#818cf8',
  'l2-earth': '#a78bfa',
  'l4-jupiter': '#34d399',
  'l5-jupiter': '#10b981',
};

interface SimState {
  speed: number;
  paused: boolean;
  positions: React.MutableRefObject<Map<string, THREE.Vector3>>;
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
  focusId: string | null;
  onBodyClick: (id: string, pos: THREE.Vector3) => void;
}

const SimContext = createContext<SimState>(null!);

function getOrbitScale(a_au: number, e: number, scale: number) {
  const a = Math.max(a_au, 0.1) * scale * 2.5 + 3;
  const b = a * Math.sqrt(1 - Math.min(e * e, 0.99));
  const c = a * e;
  return { a, b, c };
}

function getVisualRadius(body: CelestialBody) {
  return Math.max(body.radius * 0.15, 0.2);
}

const colorMap: Record<string, THREE.Color> = {
  sun: new THREE.Color('#FDB813'),
  mercury: new THREE.Color('#B5B5B5'),
  venus: new THREE.Color('#E8B87C'),
  earth: new THREE.Color('#4B9CD3'),
  mars: new THREE.Color('#E27B58'),
  jupiter: new THREE.Color('#D4A574'),
  saturn: new THREE.Color('#E8D5A3'),
  uranus: new THREE.Color('#7EC8E3'),
  neptune: new THREE.Color('#3355FF'),
};

function BodyMesh({ body, radius, onClick, onHover, onUnhover, isHovered, isFocused }: {
  body: CelestialBody;
  radius: number;
  onClick: () => void;
  onHover: () => void;
  onUnhover: () => void;
  isHovered: boolean;
  isFocused: boolean;
}) {
  const color = colorMap[body.id] || new THREE.Color(body.color);
  const scale = isHovered || isFocused ? 1.3 : 1;

  return (
    <mesh onClick={onClick} onPointerOver={onHover} onPointerOut={onUnhover}>
      <sphereGeometry args={[radius * scale, 24, 24]} />
      <meshStandardMaterial
        color={color}
        emissive={isHovered || isFocused ? color : undefined}
        emissiveIntensity={isHovered || isFocused ? 0.3 : 0}
      />
    </mesh>
  );
}

function BodyLabel({ body, yOffset, isHovered, isFocused }: {
  body: CelestialBody;
  yOffset: number;
  isHovered: boolean;
  isFocused: boolean;
}) {
  const showLabel = body.type === 'planet' || body.type === 'dwarf-planet' || body.type === 'star';

  return (
    <>
      {showLabel && (
        <Text
          position={[0, yOffset, 0]}
          fontSize={0.25}
          color={isHovered || isFocused ? '#ffffff' : '#aaaaaa'}
          anchorX="center"
          anchorY="top"
        >
          {body.name}
        </Text>
      )}
      {isHovered && (
        <Html position={[0, -yOffset, 0]} center style={{ pointerEvents: 'none' }}>
          <div className="planet-hover-label">
            {body.name}
            <span className="planet-hover-type">{body.type.replace('-', ' ')}</span>
          </div>
        </Html>
      )}
    </>
  );
}

function SaturnRings({ planetScale }: { planetScale: number }) {
  return (
    <mesh rotation={[Math.PI / 3, 0, 0]}>
      <ringGeometry args={[planetScale * 1.8, planetScale * 2.8, 64]} />
      <meshStandardMaterial color="#C8B87A" side={THREE.DoubleSide} transparent opacity={0.5} />
    </mesh>
  );
}

function MoonBody({ body, planetScale, orbitIndex }: {
  body: CelestialBody;
  planetScale: number;
  orbitIndex: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { speed, paused, positions, hoveredId, setHoveredId, focusId, onBodyClick } = useContext(SimContext);
  const radius = getVisualRadius(body);
  const color = colorMap[body.id] || new THREE.Color(body.color);
  const orbitR = planetScale * 2.5 + orbitIndex * 0.5;
  const angle = useRef(Math.random() * Math.PI * 2);

  useFrame((_, delta) => {
    if (!paused) {
      angle.current += delta * 1.2 * speed;
    }
    const t = angle.current;
    meshRef.current.position.x = Math.cos(t) * orbitR;
    meshRef.current.position.z = Math.sin(t) * orbitR;

    const worldPos = new THREE.Vector3();
    meshRef.current.getWorldPosition(worldPos);
    positions.current.set(body.id, worldPos);
  });

  const isHovered = hoveredId === body.id;
  const isFocused = focusId === body.id;
  const handleClick = useCallback(() => {
    const pos = positions.current.get(body.id);
    if (pos) onBodyClick(body.id, pos);
  }, [body.id, onBodyClick, positions]);
  const scale = isHovered || isFocused ? 1.3 : 1;

  return (
    <group>
      <mesh ref={meshRef} onClick={handleClick}
        onPointerOver={() => setHoveredId(body.id)} onPointerOut={() => setHoveredId(null)}>
        <sphereGeometry args={[radius * scale, 24, 24]} />
        <meshStandardMaterial color={color}
          emissive={isHovered || isFocused ? color : undefined}
          emissiveIntensity={isHovered || isFocused ? 0.3 : 0} />
      </mesh>
      <BodyLabel body={body} yOffset={-radius - 0.3} isHovered={isHovered} isFocused={isFocused} />
    </group>
  );
}

function PlanetSystem({ planet, moons, scale }: {
  planet: CelestialBody;
  moons: CelestialBody[];
  scale: number;
}) {
  const orbitRef = useRef<THREE.Group>(null!);
  const { speed, paused, positions, hoveredId, setHoveredId, focusId, onBodyClick } = useContext(SimContext);

  const a_au = planet.orbitalCharacteristics.distanceFromSun_au || 0.1;
  const e = planet.orbitalCharacteristics.eccentricity || 0;
  const inclRad = (planet.orbitalCharacteristics.inclination_degrees || 0) * Math.PI / 180;
  const { a, b, c } = getOrbitScale(a_au, e, scale);

  const periodBase = Math.sqrt(Math.pow(a_au, 3));
  const speedFactor = 0.15 / Math.max(periodBase, 0.1);
  const angle = useRef(Math.random() * Math.PI * 2);
  const pRadius = getVisualRadius(planet);

  useFrame((_, delta) => {
    if (!paused) {
      angle.current += delta * speedFactor * 0.3 * speed;
    }
    const t = angle.current;
    orbitRef.current.position.x = a * Math.cos(t) - c;
    orbitRef.current.position.z = b * Math.sin(t);

    const worldPos = new THREE.Vector3();
    orbitRef.current.getWorldPosition(worldPos);
    positions.current.set(planet.id, worldPos);
  });

  const isHovered = hoveredId === planet.id;
  const isFocused = focusId === planet.id;
  const handleClick = useCallback(() => {
    const pos = positions.current.get(planet.id);
    if (pos) onBodyClick(planet.id, pos);
  }, [planet.id, onBodyClick, positions]);

  return (
    <group rotation={[inclRad, 0, 0]}>
      <group ref={orbitRef}>
        {planet.id === 'saturn' && <SaturnRings planetScale={pRadius} />}
        <BodyMesh body={planet} radius={pRadius} onClick={handleClick}
          onHover={() => setHoveredId(planet.id)} onUnhover={() => setHoveredId(null)}
          isHovered={isHovered} isFocused={isFocused} />
        <BodyLabel body={planet} yOffset={-pRadius - 0.4} isHovered={isHovered} isFocused={isFocused} />
        {moons.map((moon, i) => (
          <MoonBody key={moon.id} body={moon} planetScale={pRadius} orbitIndex={i} />
        ))}
      </group>
    </group>
  );
}

function LagrangePoints3D({ parentPlanet, planetPos, planetAU }: {
  parentPlanet: CelestialBody;
  planetPos: THREE.Vector3;
  planetAU: number;
}) {
  const { hoveredId, setHoveredId, focusId, onBodyClick } = useContext(SimContext);
  const navigate = useNavigate();

  const points = useMemo(() => {
    const dist = planetPos.length();
    if (dist < 0.01) return [];

    const dir = planetPos.clone().normalize();
    const points: { id: string; label: string; pos: THREE.Vector3 }[] = [];

    if (parentPlanet.id === 'earth') {
      const l1Fraction = 1 - 0.008 * (1 / planetAU);
      const l2Fraction = 1 + 0.008 * (1 / planetAU);
      points.push({ id: 'l1-earth', label: 'L1', pos: dir.clone().multiplyScalar(dist * l1Fraction) });
      points.push({ id: 'l2-earth', label: 'L2', pos: dir.clone().multiplyScalar(dist * l2Fraction) });
    }

    const l4Angle = new THREE.Euler(0, DEG60, 0);
    const l5Angle = new THREE.Euler(0, -DEG60, 0);
    const l4Pos = planetPos.clone().applyEuler(l4Angle);
    const l5Pos = planetPos.clone().applyEuler(l5Angle);

    points.push({ id: `l4-${parentPlanet.id}`, label: 'L4', pos: l4Pos });
    points.push({ id: `l5-${parentPlanet.id}`, label: 'L5', pos: l5Pos });

    return points;
  }, [planetPos, parentPlanet.id, planetAU]);

  return (
    <group>
      {points.map(pt => {
        const isHovered = hoveredId === pt.id;
        const isFocused = focusId === `lagrange-points`;
        const color = new THREE.Color(LAGRANGE_COLORS[pt.id] || '#5A7A9A');
        const scale = isHovered ? 1.5 : 1;
        return (
          <mesh
            key={pt.id}
            position={pt.pos}
            onClick={() => navigate('/body/lagrange-points')}
            onPointerOver={() => setHoveredId(pt.id)}
            onPointerOut={() => setHoveredId(null)}
          >
            <sphereGeometry args={[0.12 * scale, 16, 16]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={isHovered || isFocused ? 0.8 : 0.4}
            />
            <Text
              position={[0, 0.25, 0]}
              fontSize={0.15}
              color="#cccccc"
              anchorX="center"
              anchorY="bottom"
            >
              {pt.label}
            </Text>
            {isHovered && (
              <Html position={[0, -0.3, 0]} center style={{ pointerEvents: 'none' }}>
                <div className="orbit-label">{pt.label} · {parentPlanet.name}</div>
              </Html>
            )}
          </mesh>
        );
      })}
    </group>
  );
}

function SunMesh() {
  const ref = useRef<THREE.Mesh>(null!);
  const { speed, paused, positions, hoveredId, setHoveredId, focusId, onBodyClick } = useContext(SimContext);
  const isHovered = hoveredId === 'sun';
  const isFocused = focusId === 'sun';

  useFrame((_, delta) => {
    if (!paused) {
      ref.current.rotation.y += delta * 0.1 * speed;
    }
    const worldPos = new THREE.Vector3();
    ref.current.getWorldPosition(worldPos);
    positions.current.set('sun', worldPos);
  });

  const handleClick = useCallback(() => {
    const pos = positions.current.get('sun');
    if (pos) onBodyClick('sun', pos);
  }, [onBodyClick, positions]);

  return (
    <group>
      <mesh ref={ref} onClick={handleClick}
        onPointerOver={() => setHoveredId('sun')}
        onPointerOut={() => setHoveredId(null)}>
        <sphereGeometry args={[3 * (isHovered || isFocused ? 1.15 : 1), 32, 32]} />
        <meshStandardMaterial color="#FDB813" emissive="#FDB813"
          emissiveIntensity={isHovered || isFocused ? 2 : 1.5} />
      </mesh>
      {/* Corona glow layers */}
      <mesh>
        <sphereGeometry args={[4.2, 32, 32]} />
        <meshBasicMaterial color="#FDB813" transparent opacity={0.08} />
      </mesh>
      <mesh>
        <sphereGeometry args={[5.5, 32, 32]} />
        <meshBasicMaterial color="#FDB813" transparent opacity={0.04} />
      </mesh>
      <mesh>
        <sphereGeometry args={[7, 24, 24]} />
        <meshBasicMaterial color="#ff8c00" transparent opacity={0.02} />
      </mesh>
      <pointLight intensity={2.5} distance={60} decay={2} color="#FDB813" />
      <Text position={[0, -3.5, 0]} fontSize={0.3} color="#aaaaaa" anchorX="center" anchorY="top">
        The Sun
      </Text>
      {isHovered && (
        <Html position={[0, 3.6, 0]} center style={{ pointerEvents: 'none' }}>
          <div className="planet-hover-label">The Sun<span className="planet-hover-type">star</span></div>
        </Html>
      )}
    </group>
  );
}

function BeltMesh({ body, scale }: { body: CelestialBody; scale: number }) {
  const a_au = body.orbitalCharacteristics.distanceFromSun_au || 1;
  const e = body.orbitalCharacteristics.eccentricity || 0;
  const inclRad = (body.orbitalCharacteristics.inclination_degrees || 0) * Math.PI / 180;
  const { a, b, c } = getOrbitScale(a_au, e, scale);

  const particles = useMemo(() => {
    const count = 800;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const t = Math.random() * Math.PI * 2;
      const rFactor = 0.7 + Math.random() * 0.6;
      positions[i * 3] = (a * Math.cos(t) - c) * rFactor;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 0.5;
      positions[i * 3 + 2] = b * Math.sin(t) * rFactor;
    }
    return positions;
  }, [a, b, c]);

  return (
    <group rotation={[inclRad, 0, 0]}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={particles.length / 3}
            array={particles} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.08} color={body.color} transparent opacity={0.6} />
      </points>
    </group>
  );
}

function OrbitRing({ body, scale }: { body: CelestialBody; scale: number }) {
  const { hoveredId, setHoveredId, onBodyClick, positions } = useContext(SimContext);

  const a_au = body.orbitalCharacteristics.distanceFromSun_au || 0.1;
  const e = body.orbitalCharacteristics.eccentricity || 0;
  const inclRad = (body.orbitalCharacteristics.inclination_degrees || 0) * Math.PI / 180;
  const { a, b, c } = getOrbitScale(a_au, e, scale);

  const pts = useMemo(() => {
    const segments = 128;
    const points: THREE.Vector3[] = [];
    for (let i = 0; i <= segments; i++) {
      const t = (i / segments) * Math.PI * 2;
      points.push(new THREE.Vector3(a * Math.cos(t) - c, 0, b * Math.sin(t)));
    }
    return points;
  }, [a, b, c]);

  const curve = useMemo(() => new THREE.CatmullRomCurve3(pts.slice(0, -1), true), [pts]);

  const highlight = e > 0.1 || body.orbitalCharacteristics.inclination_degrees > 5;
  const orbitId = `orbit-${body.id}`;
  const isHovered = hoveredId === orbitId;

  const handleClick = useCallback(() => {
    const pos = positions.current.get(body.id);
    if (pos) onBodyClick(body.id, pos);
  }, [body.id, onBodyClick, positions]);

  const labelPt = pts[Math.floor(pts.length / 4)] || pts[0];

  return (
    <group rotation={[inclRad, 0, 0]}>
      <line>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={pts.length}
            array={new Float32Array(pts.flatMap(v => [v.x, v.y, v.z]))} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial color={isHovered ? '#99aadd' : (highlight ? '#6677aa' : '#444466')}
          transparent opacity={isHovered ? 0.9 : (highlight ? 0.5 : 0.3)} />
      </line>
      <mesh onClick={handleClick}
        onPointerOver={() => setHoveredId(orbitId)}
        onPointerOut={() => setHoveredId(null)}>
        <tubeGeometry args={[curve, 64, 0.1, 6, false]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>
      {isHovered && (
        <Html position={[labelPt.x, 0.3, labelPt.z]} center style={{ pointerEvents: 'none' }}>
          <div className="orbit-label">{body.name}</div>
        </Html>
      )}
    </group>
  );
}

function SceneLagrangePoints({ planets, scale }: { planets: CelestialBody[]; scale: number }) {
  const { positions } = useContext(SimContext);
  const targets = ['earth', 'jupiter'];

  return (
    <>
      {targets.map(targetId => {
        const planet = planets.find(p => p.id === targetId);
        if (!planet) return null;
        const pos = positions.current.get(targetId);
        if (!pos) return null;
        const au = planet.orbitalCharacteristics.distanceFromSun_au || 1;
        return (
          <LagrangePoints3D
            key={`lagrange-${targetId}`}
            parentPlanet={planet}
            planetPos={pos}
            planetAU={au}
          />
        );
      })}
    </>
  );
}

function CameraController() {
  const { camera, controls } = useThree();
  const { focusId, positions } = useContext(SimContext);
  const wasFocused = useRef(false);
  const lastPos = useRef(new THREE.Vector3());

  useFrame(() => {
    if (!controls) return;

    if (focusId) {
      const pos = positions.current.get(focusId);
      if (pos) {
        (controls as any).target.copy(pos);
        if (!wasFocused.current) {
          wasFocused.current = true;
          lastPos.current.copy(camera.position);
        }
        const dist = focusId === 'sun' ? 8 : 4;
        const idealCamPos = pos.clone().add(new THREE.Vector3(dist * 0.5, dist * 0.4, dist));
        camera.position.lerp(idealCamPos, 0.04);
      }
    } else {
      if (wasFocused.current) {
        wasFocused.current = false;
        lastPos.current.copy(camera.position);
      }
      (controls as any).target.lerp(new THREE.Vector3(0, 0, 0), 0.03);
      camera.position.lerp(new THREE.Vector3(25, 15, 25), 0.02);
    }
  });

  return null;
}

function SimProvider({ children, speed, paused, positions, hoveredId, setHoveredId, focusId, onBodyClick }: React.PropsWithChildren<SimState>) {
  return (
    <SimContext.Provider value={{ speed, paused, positions, hoveredId, setHoveredId, focusId, onBodyClick }}>
      {children}
    </SimContext.Provider>
  );
}

export default function SolarSystem3D() {
  const navigate = useNavigate();
  const scale = 1.5;

  const [speed, setSpeed] = useState(1);
  const [paused, setPaused] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [focusId, setFocusId] = useState<string | null>(null);
  const positionsRef = useRef(new Map<string, THREE.Vector3>());

  const planets = solarSystemData.filter(b => b.type === 'planet' || b.type === 'dwarf-planet');
  const belts = solarSystemData.filter(b => b.type === 'belt');

  const handleBodyClick = useCallback((id: string, _pos: THREE.Vector3) => {
    setFocusId(prev => prev === id ? null : id);
    navigate(`/body/${id}`, { replace: false });
  }, [navigate]);

  const handleUnfocus = useCallback(() => {
    setFocusId(null);
  }, []);

  return (
    <div className="solar-system-wrapper">
      <div className="sim-controls">
        <button className={`sim-btn ${paused ? 'active' : ''}`}
          onClick={() => setPaused(p => !p)} title={paused ? 'Resume' : 'Pause'}>
          {paused ? '\u25B6' : '\u23F8'}
        </button>
        <span className="sim-divider" />
        {[0.25, 0.5, 1, 2, 5].map(s => (
          <button key={s} className={`sim-btn ${speed === s ? 'active' : ''}`}
            onClick={() => setSpeed(s)}>{s}x</button>
        ))}
        <span className="sim-divider" />
        <button className="sim-btn" onClick={handleUnfocus} title="Reset view">{'\u2316'} Reset</button>
      </div>

      <Canvas camera={{ position: [25, 15, 25], fov: 50 }}>
        <SimProvider speed={speed} paused={paused} positions={positionsRef}
          hoveredId={hoveredId} setHoveredId={setHoveredId}
          focusId={focusId} onBodyClick={handleBodyClick}>
          <color attach="background" args={['#0a0a1a']} />
          <ambientLight intensity={0.3} />
          <Stars radius={100} depth={60} count={6000} factor={3} saturation={0} fade speed={0.4} />

          <SunMesh />
          {planets.map(p => (
            <OrbitRing key={`orbit-${p.id}`} body={p} scale={scale} />
          ))}
          {planets.map(p => (
            <PlanetSystem key={p.id} planet={p}
              moons={solarSystemData.filter(m => m.parentId === p.id)} scale={scale} />
          ))}
          {belts.map(b => (
            <BeltMesh key={b.id} body={b} scale={scale} />
          ))}
          <SceneLagrangePoints planets={planets} scale={scale} />

          <CameraController />
          <OrbitControls enablePan={true} enableZoom={true} minDistance={1} maxDistance={150} />
        </SimProvider>
      </Canvas>
    </div>
  );
}
