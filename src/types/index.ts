export type BodyType = 'star' | 'planet' | 'dwarf-planet' | 'moon' | 'belt' | 'other';

export interface CelestialBody {
  id: string;
  name: string;
  type: BodyType;
  parentId?: string;
  description: string;

  physicalCharacteristics: {
    diameter_km: number;
    mass_kg: string;
    surfaceGravity_m_s2?: number;
    escapeVelocity_km_s?: number;
    meanTemperature_C: string;
    axialTilt_degrees?: number;
    dayLength?: string;
  };

  orbitalCharacteristics: {
    distanceFromSun_au: number;
    orbitalPeriod_years: string;
    orbitalPeriod_days: string;
    eccentricity: number;
    inclination_degrees: number;
    orbitalSpeed_km_s?: number;
  };

  atmosphere?: {
    composition: { element: string; percentage: string }[];
    description: string;
  };

  composition?: {
    type: string;
    details: string;
  };

  moons?: string[];

  exploration: {
    missions: { name: string; year: string; agency: string; description: string }[];
    highlights: string[];
  };

  interestingFacts: string[];

  color: string;
  radius: number;
}

export interface CelestialCategory {
  type: BodyType;
  label: string;
  description: string;
}
