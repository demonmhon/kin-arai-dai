import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const IMAGES_DIR = path.join(ROOT_DIR, 'public/images/foods');

const DISH_DOWNLOADS = [
  {
    id: 'khao-man-gai',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Hainanese_chicken_rice.jpg',
    credit: 'Photo by Jpatokal on Wikimedia Commons (CC-BY-SA 3.0)',
  },
  {
    id: 'khao-kha-mu',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Khao_kha_mu_01.jpg',
    credit: 'Photo by Takeaway on Wikimedia Commons (CC-BY-SA 3.0)',
  },
  {
    id: 'som-tum',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Som_tam_thai.JPG',
    credit: 'Photo by Joy on Wikimedia Commons (CC-BY-SA 2.0)',
  },
  {
    id: 'pad-krapow-crispy-pork',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Kraphao_mu_khai_dao.jpg',
    credit: 'Photo by Takeaway on Wikimedia Commons (CC-BY-SA 3.0)',
  },
  {
    id: 'pad-see-ew',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Kuaitiao_phat_si-io_Phuket.jpg',
    credit: 'Photo by Takeaway on Wikimedia Commons (CC-BY-SA 3.0)',
  },
  {
    id: 'kuay-tiew-nam-tok',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Boat_noodles.jpg',
    credit: 'Photo by Takeaway on Wikimedia Commons (CC-BY-SA 4.0)',
  },
];

async function download(url: string, dest: string) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'KinAraiDaiApp/1.0 (contact@kinaraidai.local)',
    },
  });
  if (!res.ok) {
    throw new Error(`Failed to download ${url}: ${res.status} ${res.statusText}`);
  }
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buffer);
}

async function run() {
  for (const item of DISH_DOWNLOADS) {
    const dest = path.join(IMAGES_DIR, `${item.id}.jpg`);
    console.log(`Downloading ${item.id}...`);
    await download(item.url, dest);
    const size = (fs.statSync(dest).size / 1024).toFixed(1);
    console.log(`Saved ${item.id}.jpg (${size} KB)`);
  }
  console.log('All dish images downloaded successfully!');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
