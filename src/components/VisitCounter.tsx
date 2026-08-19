import { useState, useEffect } from 'react';

interface TrackResponse {
  country: string;
  countryCode: string;
  city: string;
  flag: string;
  totalVisits: number;
}

export default function VisitCounter() {
  const [visits, setVisits] = useState<number | null>(null);
  const [location, setLocation] = useState<{ flag: string; country: string } | null>(null);

  useEffect(() => {
    async function track() {
      try {
        const res = await fetch('/.netlify/functions/track', { method: 'POST' });
        if (res.ok) {
          const data: TrackResponse = await res.json();
          setVisits(data.totalVisits);
          if (data.flag && data.country) {
            setLocation({ flag: data.flag, country: data.country });
          }
        }
      } catch {
        // Fallback: try direct countapi
        try {
          const res = await fetch('https://countapi.mileshilliard.com/api/v1/get/solar-system-visits');
          if (res.ok) {
            const data = await res.json();
            setVisits(parseInt(data.value) || 0);
          }
        } catch {
          // All failed silently
        }
      }
    }
    track();
  }, []);

  if (visits === null) return null;

  return (
    <div className="visit-counter">
      <span className="visit-counter-label">Visitors</span>
      <span className="visit-counter-number">{visits.toLocaleString()}</span>
      {location && (
        <span className="visit-counter-location">
          {location.flag} {location.country}
        </span>
      )}
    </div>
  );
}
