import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { solarSystemData } from '../data/solarSystemData';

const PAGE_TITLES: Record<string, string> = {
  '/': 'Solar System Explorer — 3D Interactive Solar System',
  '/solar-system-3d': '3D Solar System — Real-Time Orbital Visualization',
  '/facts': 'Solar System Fact Sheet — Size, Speed, Distance, Exploration',
  '/about': 'About — Solar System Explorer',
  '/chat': 'AI Solar System Chat — Ask a Space Expert',
};

export default function SEOHead() {
  const location = useLocation();

  useEffect(() => {
    let title = PAGE_TITLES[location.pathname] || 'Solar System Explorer';

    // Dynamic title for body pages
    if (location.pathname.startsWith('/body/')) {
      const id = location.pathname.split('/body/')[1];
      const body = solarSystemData.find(b => b.id === id);
      if (body) {
        title = `${body.name} — Solar System Explorer`;
      }
    }

    document.title = title;
  }, [location.pathname]);

  return null;
}
