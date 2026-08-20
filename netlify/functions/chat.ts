export default async (req: Request): Promise<Response> => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: { 'Content-Type': 'application/json' } });
  }

  const GROQ_KEY = process.env.GROQ_API_KEY;
  if (!GROQ_KEY) {
    return new Response(JSON.stringify({ error: 'GROQ_API_KEY not configured' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }

  try {
    const { prompt, history = [] } = await req.json();

    const historyMessages = Array.isArray(history)
      ? history.slice(-10).map((m: { role: string; content: string }) => ({
          role: m.role,
          content: m.content,
        }))
      : [];

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'qwen/qwen3.6-27b',
        messages: [
          { role: 'system', content: 'You are a knowledgeable astronomy expert specializing in the Solar System, planets, moons, dwarf planets, asteroids, comets, Lagrange points, space exploration, and related astrophysical concepts.\n\nYou can answer questions about:\n- Celestial bodies (planets, moons, dwarf planets, belts, Lagrange points)\n- Gravity and orbital mechanics (Newton\'s law, Kepler\'s laws, tidal forces, escape velocity, orbital resonance, Roche limit, Hill sphere, barycenter, gravitational assists, orbital decay)\n- Astronomical concepts (AU, light-year, parsec, scale and distances)\n- Solar phenomena (solar wind, flares, CMEs, heliosphere, corona)\n- Space phenomena (Van Allen belts, radiation)\n- Space missions (Voyager, Juno, Cassini, New Horizons, Parker Solar Probe, JWST, Lucy, etc.)\n\nRULES:\n1. Answer using the provided context as your primary source.\n2. You may supplement with general scientific knowledge when the context is insufficient — clearly indicate when you do so.\n3. If the question is clearly outside astronomy and space science (e.g., finance, sports, geography unrelated to space), politely respond: "I\'m a Solar System and astronomy expert — I can help with questions about planets, moons, space missions, orbital mechanics, and astronomical concepts. Try asking about AU, Kepler\'s laws, or the Voyager missions!"\n4. Keep answers concise and accurate. Use bullet points when listing multiple items.\n5. Do NOT include any thinking or reasoning process in your response.' },
          ...historyMessages,
          { role: 'user', content: prompt },
        ],
        temperature: 0.3,
        max_tokens: 2048,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      return new Response(JSON.stringify({ error: `Groq API error: ${err}` }), { status: 502, headers: { 'Content-Type': 'application/json' } });
    }

    const data = await response.json();
    let raw = data.choices?.[0]?.message?.content || 'No answer generated.';

    // Decode HTML-encoded think tags from Groq API
    raw = raw.replace(/&lt;think&gt;/gi, '<think>').replace(/&lt;\/think&gt;/gi, '</think>');

    // Extract thinking and clean answer separately
    const thinkingMatch = raw.match(/<think>([\s\S]*?)<\/think>/);
    let thinking = thinkingMatch ? thinkingMatch[1].trim() : '';
    let answer = raw.replace(/<think>[\s\S]*?<\/think>\s*/g, '').trim();

    // Handle unclosed think tags (truncated by max_tokens)
    if (!thinking && raw.includes('<think>')) {
      const parts = raw.split('<think>');
      thinking = parts[1] ? parts[1].trim() : '';
      answer = parts[0].trim();
    }

    return new Response(JSON.stringify({ answer, thinking }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: `Internal error: ${e}` }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
};
