import { useState, useRef, useEffect, FormEvent } from 'react';
import { chat } from '../lib/rag';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  sources?: string[];
  thinking?: string;
}

const SUGGESTIONS = [
  'Why does Venus spin backwards?',
  'What is the Kuiper Belt?',
  'How do Van Allen belts protect Earth?',
  'What missions have visited Jupiter?',
  'What are Lagrange points?',
  'How hot is the Sun\'s corona?',
];

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
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
      const { answer, sources, thinking } = await chat(query);
      setMessages(prev => [...prev, { role: 'assistant', content: answer, sources, thinking }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: `Error: ${err}. Make sure GROQ_API_KEY is configured in Netlify.` }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="chat-container">
      {messages.length === 0 && (
        <div className="chat-welcome">
          <h2>Ask the Solar System</h2>
          <p>Ask anything about the 27 celestial bodies in our knowledge base — planets, moons, dwarf planets, belts, and more.</p>
          <div className="chat-suggestions">
            {SUGGESTIONS.map(s => (
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
              <div className="chat-content">{msg.content}</div>
              {msg.thinking && (
                <details className="chat-thinking">
                  <summary>Model thinking</summary>
                  <div className="chat-thinking-content">{msg.thinking}</div>
                </details>
              )}
              {msg.sources && msg.sources.length > 0 && (
                <div className="chat-sources">
                  Sources: {msg.sources.map(s => (
                    <span key={s} className="chat-source-badge">{s}</span>
                  ))}
                </div>
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
