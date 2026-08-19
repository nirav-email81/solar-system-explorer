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

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

export default async (req: Request): Promise<Response> => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
    });
  }

  try {
    const forwarded = req.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() : '';

    let country = '';
    let countryCode = '';
    let city = '';

    if (ip && ip !== '127.0.0.1' && ip !== '::1') {
      try {
        const geoRes = await fetch(`http://ip-api.com/json/${ip}?fields=status,country,countryCode,city`);
        if (geoRes.ok) {
          const geo = await geoRes.json();
          if (geo.status === 'success') {
            country = geo.country || '';
            countryCode = geo.countryCode || '';
            city = geo.city || '';
          }
        }
      } catch {
        // Geolocation failed, continue without location
      }
    }

    // Increment main counter
    let totalVisits = 0;
    try {
      const mainRes = await fetch('https://countapi.mileshilliard.com/api/v1/hit/solar-system-visits');
      if (mainRes.ok) {
        const mainData = await mainRes.json();
        totalVisits = parseInt(mainData.value) || 0;
      }
    } catch {
      // Counter failed
    }

    // Increment country counter
    if (countryCode) {
      try {
        await fetch(`https://countapi.mileshilliard.com/api/v1/hit/solar-visits-${countryCode}`);
      } catch {
        // Country counter failed
      }
    }

    const flag = COUNTRY_FLAGS[countryCode] || '';

    return new Response(JSON.stringify({
      country,
      countryCode,
      city,
      flag,
      totalVisits,
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: `Internal error: ${e}` }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
    });
  }
};
