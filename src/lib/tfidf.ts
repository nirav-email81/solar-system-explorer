const STOP_WORDS = new Set([
  'a','an','the','is','are','was','were','be','been','being','have','has','had',
  'do','does','did','will','would','could','should','may','might','shall','can',
  'to','of','in','for','on','with','at','by','from','as','into','through','during',
  'before','after','above','below','between','out','off','over','under','again',
  'further','then','once','here','there','when','where','why','how','all','both',
  'each','few','more','most','other','some','such','no','nor','not','only','own',
  'same','so','than','too','very','just','don','now','and','but','or','if','while',
  'about','against','it','its','this','that','these','those','what','which','who',
  'whom','i','me','my','we','our','you','your','he','him','his','she','her','they',
  'them','their','up','s','t','re','ve','ll','d','m','also','like','much','well',
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(t => t.length > 1 && !STOP_WORDS.has(t));
}

export interface TFIDFIndex {
  vocabulary: string[];
  idf: Map<string, number>;
  tfidfVectors: Map<string, number[]>;
  docIds: string[];
}

export function buildIndex(documents: { id: string; text: string }[]): TFIDFIndex {
  const docCount = documents.length;
  const df = new Map<string, number>();
  const docTokens = new Map<string, string[]>();

  for (const doc of documents) {
    const tokens = tokenize(doc.text);
    docTokens.set(doc.id, tokens);
    const unique = new Set(tokens);
    for (const term of unique) {
      df.set(term, (df.get(term) || 0) + 1);
    }
  }

  const vocabulary = Array.from(df.keys()).sort();
  const vocabIndex = new Map(vocabulary.map((v, i) => [v, i]));
  const idf = new Map<string, number>();

  for (const [term, freq] of df) {
    idf.set(term, Math.log((docCount + 1) / (freq + 1)) + 1);
  }

  const tfidfVectors = new Map<string, number[]>();

  for (const doc of documents) {
    const tokens = docTokens.get(doc.id) || [];
    const tf = new Map<string, number>();
    for (const t of tokens) {
      tf.set(t, (tf.get(t) || 0) + 1);
    }
    const maxTf = Math.max(...Array.from(tf.values()), 1);
    const vector = new Array(vocabulary.length).fill(0);

    for (const [term, count] of tf) {
      const idx = vocabIndex.get(term);
      if (idx !== undefined) {
        const tfVal = 0.5 + 0.5 * (count / maxTf);
        vector[idx] = tfVal * (idf.get(term) || 1);
      }
    }
    tfidfVectors.set(doc.id, vector);
  }

  return { vocabulary, idf, tfidfVectors, docIds: documents.map(d => d.id) };
}

export function cosineSimilarity(a: number[], b: number[]): number {
  let dot = 0, normA = 0, normB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  if (normA === 0 || normB === 0) return 0;
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

export function queryVector(query: string, index: TFIDFIndex): number[] {
  const tokens = tokenize(query);
  const tf = new Map<string, number>();
  for (const t of tokens) {
    tf.set(t, (tf.get(t) || 0) + 1);
  }
  const maxTf = Math.max(...Array.from(tf.values()), 1);
  const vector = new Array(index.vocabulary.length).fill(0);

  for (const [term, count] of tf) {
    const idx = index.vocabulary.indexOf(term);
    if (idx !== -1) {
      const tfVal = 0.5 + 0.5 * (count / maxTf);
      vector[idx] = tfVal * (index.idf.get(term) || 1);
    }
  }
  return vector;
}

export function search(query: string, index: TFIDFIndex, topK: number = 3): { id: string; score: number }[] {
  const qVec = queryVector(query, index);
  const scores: { id: string; score: number }[] = [];

  for (const [docId, docVec] of index.tfidfVectors) {
    const score = cosineSimilarity(qVec, docVec);
    if (score > 0) {
      scores.push({ id: docId, score });
    }
  }

  scores.sort((a, b) => b.score - a.score);
  return scores.slice(0, topK);
}
