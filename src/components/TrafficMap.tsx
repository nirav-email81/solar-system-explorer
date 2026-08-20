import { useState, useEffect } from 'react';

const COUNTRY_NAMES: Record<string, string> = {
  US: 'United States', GB: 'United Kingdom', IN: 'India', DE: 'Germany',
  FR: 'France', JP: 'Japan', BR: 'Brazil', CA: 'Canada', AU: 'Australia',
  KR: 'South Korea', IT: 'Italy', ES: 'Spain', MX: 'Mexico', RU: 'Russia',
  CN: 'China', NL: 'Netherlands', SE: 'Sweden', CH: 'Switzerland',
  PL: 'Poland', TR: 'Turkey', AR: 'Argentina', ZA: 'South Africa',
  NG: 'Nigeria', KE: 'Kenya', SG: 'Singapore', AE: 'UAE', SA: 'Saudi Arabia',
  PH: 'Philippines', ID: 'Indonesia', TH: 'Thailand', VN: 'Vietnam',
  MY: 'Malaysia', PK: 'Pakistan', BD: 'Bangladesh', LK: 'Sri Lanka',
  NP: 'Nepal', PT: 'Portugal', GR: 'Greece', AT: 'Austria', BE: 'Belgium',
  NO: 'Norway', DK: 'Denmark', FI: 'Finland', IE: 'Ireland', CZ: 'Czechia',
  RO: 'Romania', UA: 'Ukraine', CL: 'Chile', CO: 'Colombia', PE: 'Peru',
  EC: 'Ecuador', IL: 'Israel', EG: 'Egypt', MA: 'Morocco', ET: 'Ethiopia',
  GH: 'Ghana', TZ: 'Tanzania',
};

const COUNTRY_FLAGS: Record<string, string> = {
  US: '\u{1F1FA}\u{1F1F8}', GB: '\u{1F1EC}\u{1F1E7}', IN: '\u{1F1EE}\u{1F1F3}',
  DE: '\u{1F1E9}\u{1F1EA}', FR: '\u{1F1EB}\u{1F1F7}', JP: '\u{1F1EF}\u{1F1F5}',
  BR: '\u{1F1E7}\u{1F1F7}', CA: '\u{1F1E8}\u{1F1E6}', AU: '\u{1F1E6}\u{1F1FA}',
  KR: '\u{1F1F0}\u{1F1F7}', IT: '\u{1F1EE}\u{1F1F9}', ES: '\u{1F1EA}\u{1F1F8}',
  MX: '\u{1F1F2}\u{1F1FD}', RU: '\u{1F1F7}\u{1F1FA}', CN: '\u{1F1E8}\u{1F1F3}',
  NL: '\u{1F1F3}\u{1F1F1}', SE: '\u{1F1F8}\u{1F1EA}', CH: '\u{1F1E8}\u{1F1ED}',
  PL: '\u{1F1F5}\u{1F1F1}', TR: '\u{1F1F9}\u{1F1F7}', AR: '\u{1F1E6}\u{1F1F7}',
  ZA: '\u{1F1FF}\u{1F1E6}', NG: '\u{1F1F3}\u{1F1EC}', KE: '\u{1F1F0}\u{1F1EA}',
  SG: '\u{1F1F8}\u{1F1EC}', AE: '\u{1F1E6}\u{1F1EA}', SA: '\u{1F1F8}\u{1F1E6}',
  PH: '\u{1F1F5}\u{1F1ED}', ID: '\u{1F1EE}\u{1F1E9}', TH: '\u{1F1F9}\u{1F1ED}',
  VN: '\u{1F1FB}\u{1F1F3}', MY: '\u{1F1F2}\u{1F1FE}', PK: '\u{1F1F5}\u{1F1F0}',
  BD: '\u{1F1E7}\u{1F1E9}', LK: '\u{1F1F1}\u{1F1F0}', NP: '\u{1F1F3}\u{1F1F5}',
  PT: '\u{1F1F5}\u{1F1F9}', GR: '\u{1F1EC}\u{1F1F7}', AT: '\u{1F1E6}\u{1F1F9}',
  BE: '\u{1F1E7}\u{1F1EA}', NO: '\u{1F1F3}\u{1F1F4}', DK: '\u{1F1E9}\u{1F1F0}',
  FI: '\u{1F1EB}\u{1F1EE}', IE: '\u{1F1EE}\u{1F1EA}', CZ: '\u{1F1E8}\u{1F1FF}',
  RO: '\u{1F1F7}\u{1F1F4}', UA: '\u{1F1FA}\u{1F1E6}', CL: '\u{1F1E8}\u{1F1F1}',
  CO: '\u{1F1E8}\u{1F1F4}', PE: '\u{1F1F5}\u{1F1EA}', EC: '\u{1F1EA}\u{1F1E8}',
  IL: '\u{1F1EE}\u{1F1F1}', EG: '\u{1F1EA}\u{1F1EC}', MA: '\u{1F1F2}\u{1F1E6}',
  ET: '\u{1F1EA}\u{1F1F9}', GH: '\u{1F1EC}\u{1F1ED}', TZ: '\u{1F1F9}\u{1F1FF}',
};

interface CountryCount {
  code: string;
  name: string;
  flag: string;
  count: number;
}

export default function TrafficMap() {
  const [countries, setCountries] = useState<CountryCount[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchCounts() {
    const codes = Object.keys(COUNTRY_NAMES);
    const results: CountryCount[] = [];

    const promises = codes.map(async (code) => {
      try {
        const res = await fetch(`https://countapi.mileshilliard.com/api/v1/get/solar-visits-${code}`);
        if (res.ok) {
          const data = await res.json();
          const count = parseInt(data.value) || 0;
          if (count > 0) {
            results.push({
              code,
              name: COUNTRY_NAMES[code],
              flag: COUNTRY_FLAGS[code] || '',
              count,
            });
          }
        }
      } catch {
        // Skip failed
      }
    });

    await Promise.allSettled(promises);
    results.sort((a, b) => b.count - a.count);
    setCountries(results.slice(0, 20));
    setLoading(false);
  }

  useEffect(() => {
    fetchCounts();
    const interval = setInterval(fetchCounts, 30000);
    return () => clearInterval(interval);
  }, []);

  const maxCount = countries.length > 0 ? countries[0].count : 1;

  if (loading) {
    return (
      <div className="traffic-bars-loading">
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i} className="traffic-row-loading">
            <div className="skeleton-circle" style={{ width: 24, height: 24, borderRadius: 4 }} />
            <div style={{ flex: 1 }}>
              <div className="skeleton-bar" />
            </div>
            <div style={{ width: 40 }}>
              <div className="skeleton-line" style={{ height: 10 }} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (countries.length === 0) {
    return <div className="traffic-empty">No visitor data yet. Be the first!</div>;
  }

  return (
    <div className="traffic-map">
      <div className="traffic-bars">
        {countries.map((c) => (
          <div key={c.code} className="traffic-row">
            <span className="traffic-flag">{c.flag}</span>
            <span className="traffic-name">{c.name}</span>
            <div className="traffic-bar-track">
              <div
                className="traffic-bar-fill"
                style={{ width: `${(c.count / maxCount) * 100}%` }}
              />
            </div>
            <span className="traffic-count">{c.count.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
