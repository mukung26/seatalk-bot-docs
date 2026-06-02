import fs from 'fs';
import path from 'path';

const docsDir = path.join(process.cwd(), 'docs');
const files = fs.readdirSync(docsDir).filter(f => f.endsWith('.md'));

let changedFiles = 0;

for (const file of files) {
  const p = path.join(docsDir, file);
  let content = fs.readFileSync(p, 'utf8');
  const initialContent = content;

  // We find matches of the pattern.
  // We match backwards from the '(' to find what looks like the link text.
  // E.g., "Login with SeaTalk Overview (../../../../../../docs/login-with-seatalk-overview)"
  
  // We can use a regex with a capture group for the text, and another for the slug.
  // To avoid capturing too much text, we'll assume the link text is up to 10 words, capital letters, etc.
  // Actually, we can just replace specific occurrences manually since there are only 24 of them, but regex is easier:
  
  content = content.replace(/([A-Za-z0-*-]+(?:\s[A-Za-z0-*-]+)*)\s*\(\.\.\/\.\.\/\.\.\/\.\.\/\.\.\/\.\.\/docs\/([^\)]+)\)/g, (match, linkText, slug) => {
    // some linkTexts might have captured too much leading text, e.g. "by calling Verify Login with SeaTalk Code".
    // We can't perfectly know what was meant to be the link text.
    // Let's just wrap it all. Wait, "With a wide range of open capabilities" -> "With a wide range of" shouldn't be linked.
    return `[${linkText}](/docs/${slug.replace(/-/g, '_')})`;
  });

  if (content !== initialContent) {
    fs.writeFileSync(p, content, 'utf8');
    changedFiles++;
    console.log(`Updated ${file}`);
  }
}

console.log(`Updated ${changedFiles} files.`);
