export interface Doc {
  id: string;
  title: string;
  category: string;
  content: string;
}

// Extract frontmatter and inject into DOC array
function parseFrontmatter(markdown: string) {
  const match = /^---\n([\s\S]+?)\n---/.exec(markdown);
  if (!match) return { attributes: {}, body: markdown };
  const frontmatter = match[1];
  const body = markdown.slice(match[0].length).trim();
  const attributes: Record<string, string> = {};
  frontmatter.split('\n').forEach(line => {
    const [key, ...values] = line.split(':');
    if (key && values.length > 0) {
      attributes[key.trim()] = values.join(':').trim();
    }
  });
  return { attributes, body };
}

// Read all standard .md files from the root /docs folder!
const mdFiles = import.meta.glob('/docs/*.md', { eager: true, query: '?raw', import: 'default' });

export const docs: Doc[] = Object.values(mdFiles).map((fileContent: any) => {
  const { attributes, body } = parseFrontmatter(fileContent as string);
  return {
    id: attributes.id || 'unknown',
    title: attributes.title || 'Untitled',
    category: attributes.category || 'Other Documentation',
    content: body,
  };
});

const DEFAULT_CATEGORIES = ['Getting Started', 'Core Concepts', 'API Reference', 'Events', 'Other Documentation'];

export const CATEGORIES = Array.from(new Set(docs.map(doc => doc.category))).sort((a, b) => {
   const aIdx = DEFAULT_CATEGORIES.indexOf(a);
   const bIdx = DEFAULT_CATEGORIES.indexOf(b);
   if (aIdx !== -1 && bIdx !== -1) return aIdx - bIdx;
   if (aIdx !== -1) return -1;
   if (bIdx !== -1) return 1;
   return a.localeCompare(b);
});

docs.sort((a, b) => {
  const aCatIdx = CATEGORIES.indexOf(a.category);
  const bCatIdx = CATEGORIES.indexOf(b.category);
  if (aCatIdx !== bCatIdx) return aCatIdx - bCatIdx;
  return a.title.localeCompare(b.title);
});

export function searchDocs(query: string): Doc[] {
  const lowerQuery = query.toLowerCase();
  return docs.filter(
    (doc) =>
      doc.title.toLowerCase().includes(lowerQuery) ||
      doc.content.toLowerCase().includes(lowerQuery)
  );
}

export function getDocById(id: string): Doc | undefined {
  return docs.find((doc) => doc.id === id);
}
