export default async (req: Request): Promise<Response> => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: { 'Content-Type': 'application/json' } });
  }

  const GROQ_KEY = process.env.GROQ_API_KEY;
  if (!GROQ_KEY) {
    return new Response(JSON.stringify({ error: 'GROQ_API_KEY not configured' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }

  try {
    const { prompt } = await req.json();

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'qwen/qwen3.6-27b',
        messages: [
          { role: 'system', content: 'You are a solar system expert. Be concise and accurate. Do NOT include any thinking or reasoning process in your response. Give only the direct answer. Use bullet points when listing multiple items.' },
          { role: 'user', content: prompt },
        ],
        temperature: 0.3,
        max_tokens: 800,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      return new Response(JSON.stringify({ error: `Groq API error: ${err}` }), { status: 502, headers: { 'Content-Type': 'application/json' } });
    }

    const data = await response.json();
    let answer = data.choices?.[0]?.message?.content || 'No answer generated.';

    // Strip Qwen thinking tags
    answer = answer.replace(/<think>[\s\S]*?<\/think>\s*/g, '').trim();

    return new Response(JSON.stringify({ answer }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: `Internal error: ${e}` }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
};
