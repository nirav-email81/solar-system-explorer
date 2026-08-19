import { Chunk, getChunks } from './chunkData';
import { buildIndex, search, TFIDFIndex } from './tfidf';

let _index: TFIDFIndex | null = null;

function getIndex(): TFIDFIndex {
  if (!_index) {
    const chunks = getChunks();
    _index = buildIndex(chunks);
  }
  return _index;
}

export interface RetrievedChunk {
  chunk: Chunk;
  score: number;
}

export function retrieve(query: string, topK: number = 3): RetrievedChunk[] {
  const index = getIndex();
  const results = search(query, index, topK);
  const chunks = getChunks();
  const chunkMap = new Map(chunks.map(c => [c.id, c]));

  return results
    .map(r => ({ chunk: chunkMap.get(r.id)!, score: r.score }))
    .filter(r => r.chunk);
}

export function buildPrompt(query: string, context: RetrievedChunk[]): string {
  const contextStr = context
    .map((c, i) => `[Source ${i + 1}: ${c.chunk.bodyName} - ${c.chunk.category}]\n${c.chunk.text}`)
    .join('\n\n');

  return `You are a knowledgeable solar system expert. Answer the user's question using the provided context as your primary source. You may supplement with general scientific knowledge when the context is insufficient — clearly indicate when you do so. Cite which celestial body or topic your answer comes from.\n\nCONTEXT:\n${contextStr}\n\nQUESTION: ${query}\n\nAnswer concisely and accurately. Reference specific sources when possible.`;
}

export interface ChatResponse {
  answer: string;
  sources: string[];
  thinking: string;
}

export async function chat(query: string): Promise<ChatResponse> {
  const context = retrieve(query, 3);
  const prompt = buildPrompt(query, context);

  const response = await fetch('/.netlify/functions/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt }),
  });

  if (!response.ok) {
    throw new Error(`Chat API error: ${response.status}`);
  }

  const data = await response.json();
  const sources = [...new Set(context.map(c => c.chunk.bodyName))];

  return { answer: data.answer, sources, thinking: data.thinking || '' };
}
