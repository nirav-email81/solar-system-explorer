import { useState, useRef, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { chat, ChatMessage } from '../lib/rag';
import { solarSystemData } from '../data/solarSystemData';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  sources?: string[];
  thinking?: string;
}

const SUGGESTION_CATEGORIES: Record<string, string[]> = {
  'Planets': [
    'Why does Venus spin backwards?',
    'How hot is Mercury during the day?',
    'What makes Neptune\'s winds so fast?',
    'How does Mars\'s atmosphere compare to Earth\'s?',
  ],
  'Moons': [
    'Could Europa have life?',
    'Why is Titan\'s atmosphere so thick?',
    'How big is Ganymede compared to Mercury?',
    'What makes Enceladus\'s geysers special?',
  ],
  'Missions': [
    'What missions have visited Jupiter?',
    'When will we reach Pluto again?',
    'What has Voyager 1 found in interstellar space?',
    'What is the Lucy mission studying?',
  ],
  'Science': [
    'What are Lagrange points?',
    'How do Van Allen belts protect Earth?',
    'What is the Kuiper Belt?',
    'How hot is the Sun\'s corona?',
  ],
  'Gravity': [
    'How does gravity work in space?',
    'What is tidal heating on Europa?',
    'What is the Roche limit?',
    'How do gravity assists work?',
    'What is orbital resonance?',
    'What would I weigh on Mars?',
  ],
};

const bodyNameToId = new Map(
  solarSystemData.map(b => [b.name.toLowerCase(), b.id])
);

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('Planets');
  const messagesEnd = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  async function handleSend(e: FormEvent, text?: string) {
    e.preventDefault();
    const query = text || input.trim();
    if (!query || loading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: query }]);
    setLoading(true);

    try {
      const history: ChatMessage[] = messages.map(m => ({
        role: m.role,
        content: m.content,
      }));
      const { answer, sources, thinking } = await chat(query, history);
      setMessages(prev => [...prev, { role: 'assistant', content: answer, sources, thinking }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: `Error: ${err}. Make sure GROQ_API_KEY is configured in Netlify.` }]);
    } finally {
      setLoading(false);
    }
  }

  async function handleCopy(text: string, idx: number) {
    await navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  }

  function getSourceId(name: string): string | null {
    return bodyNameToId.get(name.toLowerCase()) || null;
  }

  return (
    <div className="chat-container">
      {messages.length === 0 && (
        <div className="chat-welcome">
          <h2>Ask the Solar System</h2>
          <p>Ask anything about the Solar System and basic astronomy — planets, moons, space missions, gravity, orbital mechanics, AU, Kepler's laws, solar wind, and more.</p>
          <div className="chat-category-tabs">
            {Object.keys(SUGGESTION_CATEGORIES).map(cat => (
              <button
                key={cat}
                className={`chat-category-tab ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="chat-suggestions">
            {SUGGESTION_CATEGORIES[activeCategory].map(s => (
              <button key={s} className="chat-suggestion" onClick={(e) => handleSend(e, s)}>
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="chat-messages">
        {messages.map((msg, i) => (
          <div key={i} className={`chat-message chat-message-${msg.role}`}>
            <div className="chat-bubble">
              <div className="chat-content">
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              </div>
              {msg.thinking && (
                <details className="chat-thinking">
                  <summary>Model thinking</summary>
                  <div className="chat-thinking-content">{msg.thinking}</div>
                </details>
              )}
              {msg.sources && msg.sources.length > 0 && (
                <div className="chat-sources">
                  Sources: {msg.sources.map(s => {
                    const id = getSourceId(s);
                    return id ? (
                      <Link key={s} to={`/body/${id}`} className="chat-source-badge">
                        {s}
                      </Link>
                    ) : (
                      <span key={s} className="chat-source-badge">{s}</span>
                    );
                  })}
                </div>
              )}
              {msg.role === 'assistant' && (
                <button
                  className="chat-copy-btn"
                  onClick={() => handleCopy(msg.content, i)}
                  title="Copy answer"
                >
                  {copiedIdx === i ? '\u2713' : '\u2398'}
                </button>
              )}
            </div>
          </div>
        ))}
        {loading && (
          <div className="chat-message chat-message-assistant">
            <div className="chat-bubble">
              <div className="chat-loading">
                <span className="chat-dot" />
                <span className="chat-dot" />
                <span className="chat-dot" />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEnd} />
      </div>

      <form className="chat-input-form" onSubmit={handleSend}>
        <input
          className="chat-input"
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask about any celestial body..."
          disabled={loading}
        />
        <button className="chat-send" type="submit" disabled={loading || !input.trim()}>
          {loading ? '...' : '\u2192'}
        </button>
      </form>
    </div>
  );
}
