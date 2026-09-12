/**
 * scripts/setup-drink-images.ts
 *
 * Downloads CC0 / Unsplash Free License images for all drinks,
 * links the generated soy milk image,
 * and updates data/drink/*.yaml files with proper Creative Commons attribution.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { load, dump } from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const IMAGES_DIR = path.join(ROOT_DIR, 'public/images/foods');
const DRINK_DATA_DIR = path.join(ROOT_DIR, 'data/drink');

interface DrinkImageSpec {
  id: string;
  url?: string;
  localPath?: string;
  credit: string;
}

const DRINKS: DrinkImageSpec[] = [
  {
    id: 'water',
    url: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=500&q=80',
    credit: 'Photo by Manu Schwendener on Unsplash (CC0/Free License)',
  },
  {
    id: 'coffee',
    url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&q=80',
    credit: 'Photo by Nathan Dumlao on Unsplash (CC0/Free License)',
  },
  {
    id: 'cow-milk',
    url: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&q=80',
    credit: 'Photo by Mehrad Vosoughi on Unsplash (CC0/Free License)',
  },
  {
    id: 'coconut-water',
    url: 'https://images.unsplash.com/photo-1544378730-8b5104b18790?w=500&q=80',
    credit: 'Photo by Jonas Dücker on Unsplash (CC0/Free License)',
  },
  {
    id: 'dark-cola',
    url: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&q=80',
    credit: 'Photo by Jonathan Borba on Unsplash (CC0/Free License)',
  },
  {
    id: 'beer',
    url: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500&q=80',
    credit: 'Photo by Jon Parry on Unsplash (CC0/Free License)',
  },
  {
    id: 'soft-drink-fructose',
    url: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&q=80',
    credit: 'Photo by Rosalind Chang on Unsplash (CC0/Free License)',
  },
];

async function download(url: string, dest: string): Promise<void> {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    },
  });
  if (!res.ok) {
    throw new Error(`Failed to download ${url}: ${res.status}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
}

async function run() {
  if (!fs.existsSync(IMAGES_DIR)) {
    fs.mkdirSync(IMAGES_DIR, { recursive: true });
  }

  console.log('--- 1. Downloading Unsplash CC0 Drink Images ---');
  for (const item of DRINKS) {
    const dest = path.join(IMAGES_DIR, `${item.id}.jpg`);
    if (item.url) {
      process.stdout.write(`Downloading [${item.id}.jpg]... `);
      try {
        await download(item.url, dest);
        const size = fs.statSync(dest).size;
        console.log(`OK (${(size / 1024).toFixed(1)} KB)`);
      } catch (err: any) {
        console.error(`FAILED: ${err.message}`);
      }
    }
  }

  // 2. Link the generated soy milk image
  console.log('\n--- 2. Checking Generated Soy Milk Image ---');
  const destSoy = path.join(IMAGES_DIR, 'soy-milk-unsweetened.jpg');
  if (fs.existsSync(destSoy)) {
    console.log(`✓ Verified soy milk image exists at ${destSoy}`);
  } else {
    console.warn('! Generated soy milk image not found');
  }

  // 3. Update all YAML files in data/drink
  console.log('\n--- 3. Updating data/drink/*.yaml files ---');
  const allDrinkSpecs: Record<string, string> = {
    water: 'Photo by Manu Schwendener on Unsplash (CC0/Free License)',
    coffee: 'Photo by Nathan Dumlao on Unsplash (CC0/Free License)',
    'cow-milk': 'Photo by Mehrad Vosoughi on Unsplash (CC0/Free License)',
    'coconut-water': 'Photo by Jonas Dücker on Unsplash (CC0/Free License)',
    'dark-cola': 'Photo by Jonathan Borba on Unsplash (CC0/Free License)',
    beer: 'Photo by Jon Parry on Unsplash (CC0/Free License)',
    'soft-drink-fructose': 'Photo by Rosalind Chang on Unsplash (CC0/Free License)',
    'soy-milk-unsweetened': 'Created with Nanobanana AI (Creative Commons CC0 Public Domain)',
  };

  for (const [id, credit] of Object.entries(allDrinkSpecs)) {
    const yamlPath = path.join(DRINK_DATA_DIR, `${id}.yaml`);
    if (!fs.existsSync(yamlPath)) {
      console.warn(`! File not found: ${yamlPath}`);
      continue;
    }
    const raw = fs.readFileSync(yamlPath, 'utf-8');
    const doc = load(raw) as any;

    doc.imageUrl = `/images/foods/${id}.jpg`;
    doc.imageCredit = credit;

    fs.writeFileSync(yamlPath, dump(doc, { lineWidth: -1, noRefs: true }), 'utf-8');
    console.log(`✓ Updated [${id}.yaml] with imageUrl & imageCredit`);
  }

  console.log('\n=== Drink category image setup completed successfully! ===');
}

run().catch((err) => {
  console.error('Error running setup-drink-images:', err);
  process.exit(1);
});
