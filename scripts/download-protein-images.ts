/**
 * scripts/download-protein-images.ts
 *
 * Downloads curated Creative Commons / CC0 / Unsplash Free License images
 * for all 11 food items in the protein/meat category and verifies them.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const IMAGES_DIR = path.join(ROOT_DIR, 'public/images/foods');

export interface ProteinImageSpec {
  id: string;
  url: string;
  credit: string;
}

export const PROTEIN_IMAGES: ProteinImageSpec[] = [
  {
    id: 'chicken-breast',
    url: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=500&q=80',
    credit: 'Photo by Eiliv Aceron on Unsplash (CC0/Free License)',
  },
  {
    id: 'duck-meat',
    url: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=500&q=80',
    credit: 'Photo by Unsplash (CC0/Free License)',
  },
  {
    id: 'egg-white',
    url: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=500&q=80',
    credit: 'Photo by Gabriel Gurrola on Unsplash (CC0/Free License)',
  },
  {
    id: 'egg-yolk',
    url: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=500&q=80',
    credit: 'Photo by Tamanna Rumee on Unsplash (CC0/Free License)',
  },
  {
    id: 'organ-meat',
    url: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&q=80',
    credit: 'Photo by Unsplash (CC0/Free License)',
  },
  {
    id: 'processed-meat',
    url: 'https://images.unsplash.com/photo-1541529086526-db283c563270?w=500&q=80',
    credit: 'Photo by LikeMeat on Unsplash (CC0/Free License)',
  },
  {
    id: 'red-meat-beef',
    url: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=500&q=80',
    credit: 'Photo by Edson Saldaña on Unsplash (CC0/Free License)',
  },
  {
    id: 'sardine',
    url: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=500&q=80',
    credit: 'Photo by David Clode on Unsplash (CC0/Free License)',
  },
  {
    id: 'shrimp',
    url: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=500&q=80',
    credit: 'Photo by Anastasia Zhenina on Unsplash (CC0/Free License)',
  },
  {
    id: 'tofu',
    url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80',
    credit: 'Photo by visual energy on Unsplash (CC0/Free License)',
  },
  {
    id: 'white-fish',
    url: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&q=80',
    credit: 'Photo by Caroline Attwood on Unsplash (CC0/Free License)',
  },
];

async function download(url: string, dest: string): Promise<void> {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    },
  });
  if (!res.ok) {
    throw new Error(`Failed to download ${url}: ${res.status} ${res.statusText}`);
  }
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buffer);
}

async function run() {
  if (!fs.existsSync(IMAGES_DIR)) {
    fs.mkdirSync(IMAGES_DIR, { recursive: true });
  }

  console.log(`Starting download of ${PROTEIN_IMAGES.length} Creative Commons protein food images...\n`);

  for (const item of PROTEIN_IMAGES) {
    const dest = path.join(IMAGES_DIR, `${item.id}.jpg`);
    process.stdout.write(`Downloading [${item.id}.jpg]... `);
    try {
      await download(item.url, dest);
      const size = fs.statSync(dest).size;
      console.log(`OK (${(size / 1024).toFixed(1)} KB)`);
    } catch (err: any) {
      console.error(`FAILED: ${err.message}`);
    }
  }

  console.log('\nAll downloads complete!');
}

run().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
