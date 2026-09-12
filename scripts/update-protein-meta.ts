import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const PROTEIN_DIR = path.join(ROOT_DIR, 'data/protein');

const PROTEIN_META: Record<string, { imageUrl: string; imageCredit: string }> = {
  'chicken-breast': {
    imageUrl: '/images/foods/chicken-breast.jpg',
    imageCredit: 'Photo by Eiliv Aceron on Unsplash (CC0/Free License)',
  },
  'duck-meat': {
    imageUrl: '/images/foods/duck-meat.jpg',
    imageCredit: 'Created with Nanobanana AI (Creative Commons CC0 Public Domain)',
  },
  'egg-white': {
    imageUrl: '/images/foods/egg-white.jpg',
    imageCredit: 'Created with Nanobanana AI (Creative Commons CC0 Public Domain)',
  },
  'egg-yolk': {
    imageUrl: '/images/foods/egg-yolk.jpg',
    imageCredit: 'Created with Nanobanana AI (Creative Commons CC0 Public Domain)',
  },
  'organ-meat': {
    imageUrl: '/images/foods/organ-meat.jpg',
    imageCredit: 'Created with Nanobanana AI (Creative Commons CC0 Public Domain)',
  },
  'processed-meat': {
    imageUrl: '/images/foods/processed-meat.jpg',
    imageCredit: 'Created with Nanobanana AI (Creative Commons CC0 Public Domain)',
  },
  'red-meat-beef': {
    imageUrl: '/images/foods/red-meat-beef.jpg',
    imageCredit: 'Created with Nanobanana AI (Creative Commons CC0 Public Domain)',
  },
  'sardine': {
    imageUrl: '/images/foods/sardine.jpg',
    imageCredit: 'Created with Nanobanana AI (Creative Commons CC0 Public Domain)',
  },
  'shrimp': {
    imageUrl: '/images/foods/shrimp.jpg',
    imageCredit: 'Photo by Anastasia Zhenina on Unsplash (CC0/Free License)',
  },
  'tofu': {
    imageUrl: '/images/foods/tofu.jpg',
    imageCredit: 'Created with Nanobanana AI (Creative Commons CC0 Public Domain)',
  },
  'white-fish': {
    imageUrl: '/images/foods/white-fish.jpg',
    imageCredit: 'Created with Nanobanana AI (Creative Commons CC0 Public Domain)',
  },
};

for (const [id, meta] of Object.entries(PROTEIN_META)) {
  const filePath = path.join(PROTEIN_DIR, `${id}.yaml`);
  if (!fs.existsSync(filePath)) {
    console.warn('Missing file:', filePath);
    continue;
  }
  let content = fs.readFileSync(filePath, 'utf-8');
  if (!content.includes('imageUrl:')) {
    content = content.trimEnd() + `\nimageUrl: ${meta.imageUrl}\nimageCredit: ${meta.imageCredit}\n`;
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Updated:', id);
  } else {
    console.log('Already has imageUrl:', id);
  }
}
