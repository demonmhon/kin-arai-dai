import fs from 'node:fs';
import { glob } from 'glob';
import { load } from 'js-yaml';

const files = glob.sync('data/**/*.yaml');
const missing: any[] = [];
const hasImage: any[] = [];

for (const f of files) {
  const c = load(fs.readFileSync(f, 'utf8')) as any;
  if (!c.imageUrl) {
    missing.push({ id: c.id, name: c.name, category: c.category, file: f });
  } else {
    hasImage.push({ id: c.id, name: c.name, category: c.category, file: f });
  }
}

console.log(`Total foods: ${files.length}`);
console.log(`Foods with images: ${hasImage.length}`);
console.log(`Foods missing images: ${missing.length}\n`);

missing.forEach((m, idx) => {
  console.log(`${idx + 1}. [${m.category}] ${m.name} (${m.id})`);
});
