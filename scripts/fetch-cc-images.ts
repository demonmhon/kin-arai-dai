import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { load, dump } from 'js-yaml';
import { glob } from 'glob';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT_DIR, 'data');
const IMAGES_DIR = path.join(ROOT_DIR, 'public/images/foods');

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Optimized Wikimedia search terms for food items
const COMMONS_SEARCH_TERMS: Record<string, string[]> = {
  // Dishes
  'salad-roll': ['Gỏi cuốn', 'Nem cuốn', 'Summer roll'],
  'sushi': ['Nigirizushi plate', 'Sushi platter', 'Assorted sushi'],
  'pizza': ['Pizza Margherita', 'Vegetarian Pizza', 'Pepperoni pizza'],
  'chicken-nuggets': ['Chicken Nuggets', 'Fried chicken nuggets'],
  'congee-pork-chicken': ['Chinese rice congee', 'Congee bowl', 'Rice congee'],

  // Protein & Nuts
  'salmon': ['Grilled plated salmon fillet', 'Salmon fillet', 'Salmon steak'],
  'whey-protein': ['Protein shake scoop', 'Protein powder container', 'Whey protein'],
  'peanut': ['Peanuts in a bowl', 'Roasted peanuts in bowl'],
  'almond': ['Whole almonds in bowl', 'Roasted almonds in bowl'],
  'cashew-nut': ['Roasted cashew nuts', 'Cashew nuts in a bowl'],
  'sunflower-seed': ['Sunflower seeds in a bowl', 'Roasted sunflower seeds'],

  // Fruit
  'mango': ['Mangifera indica fruit', 'Ripe mango fruit', 'Fresh mango slices'],
  'avocado': ['Avocado halved', 'Fresh avocado fruit'],
  'cherry': ['Sweet cherries', 'Ripe cherries fruit', 'Cherries bowl'],

  // Vegetable
  'carrot': ['Fresh carrots', 'Daucus carota carrots', 'Carrots bunch'],
  'cabbage': ['White cabbage head', 'Brassica oleracea capitata', 'Green cabbage'],
  'chinese-cabbage': ['Brassica rapa pekinensis', 'Chinese cabbage head', 'Napa cabbage'],
  'tomato': ['Ripe red tomatoes', 'Solanum lycopersicum fruit', 'Fresh tomatoes'],
  'cucumber': ['Cucumber slices', 'Cucumis sativus fruit', 'Fresh cucumbers'],
  'potato': ['Raw potatoes', 'Solanum tuberosum tubers', 'Russet potatoes'],
  'pumpkin': ['Kabocha squash', 'Cucurbita moschata fruit', 'Pumpkin fruit'],
  'mushroom': ['Agaricus bisporus mushrooms', 'Champignon mushrooms', 'Fresh mushrooms'],
  'spinach-tamlueng': ['Spinacia oleracea leaves', 'Fresh spinach leaves', 'Spinach bowl'],

  // Carb
  'croissant': ['Croissant on plate', 'Butter croissant pastry', 'Fresh croissant'],
  'white-rice': ['A bowl of rice', 'Cooked white rice bowl', 'Steamed rice bowl'],
  'brown-rice': ['Brown rice in bowl', 'Cooked brown rice', 'Brown basmati rice'],
  'instant-noodle': ['Instant noodles bowl', 'Ramen noodles bowl', 'Ramen bowl'],
  'glass-noodle': ['Cellophane noodles cooked', 'Glass noodles', 'Fensi noodles'],
  'sago': ['Tapioca pearls bowl', 'Sago pudding', 'Tapioca pearls'],

  // Condiment
  'kimchi': ['Korean Kimchi bowl', 'Napa cabbage kimchi', 'Baechu-kimchi'],
  'pickled-vegetable': ['Pickled mustard greens', 'Suan cai', 'Pickled cabbage'],
  'bone-broth': ['Bone broth bowl', 'Clear broth soup', 'Chicken broth'],
  'herbs': ['Thai herbs spices', 'Cymbopogon citratus lemongrass', 'Galangal lemongrass'],
  'low-sodium-salt': ['Salt shaker glass', 'Salt cellar spoon', 'Table salt'],
  'soysauce-measured': ['Soy sauce in dipping bowl', 'Soy sauce dish'],

  // Drink
  'wine': ['Glass of red wine', 'Red wine in glass', 'Wine glass'],

  // Protein & Condiment
  'cheese': ['Cheddar cheese block', 'Gouda cheese wedge', 'Cheese platter'],
  'butter': ['Butter on butter dish', 'Block of fresh butter', 'Butter dish'],
  'shabu-suki': ['Shabu-shabu hot pot', 'Sukiyaki hot pot', 'Hot pot meal'],
  'fermented-fish': ['Som tum pla ra', 'Pla ra thai'],

  // Supplements
  'chicken-essence': ['Essence of chicken', 'Chicken soup bowl', 'Clear chicken broth'],
  'birds-nest': ['Birds nest soup bowl', 'Edible bird nest', 'Birds nest dessert'],
  'lingzhi-extract': ['Ganoderma lucidum mushroom', 'Lingzhi mushroom', 'Reishi mushroom'],
  'cordyceps-extract': ['Cordyceps militaris mushroom', 'Cordyceps sinensis', 'Dried cordyceps'],
  'mushroom-beta-glucan': ['Shiitake mushrooms on table', 'Lentinula edodes mushrooms', 'Fresh shiitake mushrooms'],
  'cha-om': ['Acacia pennata leaves', 'Senegalia pennata', 'Cha-om']
};

interface CommonsResult {
  url: string;
  artist: string;
  license: string;
}

function searchWikimedia(query: string): CommonsResult | null {
  const endpoint = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=${encodeURIComponent(
    query + ' filetype:bitmap'
  )}&gsrlimit=3&prop=imageinfo&iiprop=url|extmetadata&format=json`;

  try {
    const raw = execFileSync(
      'curl',
      ['-sL', '-A', 'KinAraiDaiBot/1.0 (https://github.com/demonmhon/kin-arai-dai; admin@kinaraidai.local)', '--max-time', '8', endpoint],
      { encoding: 'utf-8' }
    );

    if (raw.startsWith('You are making too many')) {
      console.warn('⚠️ Wikimedia API rate limit warning, waiting...');
      return null;
    }

    const data = JSON.parse(raw);
    const pages = data.query?.pages;
    if (!pages) return null;

    for (const page of Object.values(pages) as any[]) {
      const info = page.imageinfo?.[0];
      if (!info || !info.url) continue;

      const url = info.url as string;
      const lowerUrl = url.toLowerCase();
      if (lowerUrl.endsWith('.svg') || lowerUrl.endsWith('.tif') || lowerUrl.endsWith('.tiff')) continue;

      const meta = info.extmetadata || {};
      const license = meta.LicenseShortName?.value || meta.License?.value || 'CC BY';
      let artist =
        meta.Artist?.value?.replace(/<[^>]*>/g, '').trim() ||
        meta.Credit?.value?.replace(/<[^>]*>/g, '').trim() ||
        'Wikimedia Commons';
      if (artist.length > 45) artist = artist.slice(0, 42) + '...';

      return { url, artist, license };
    }
  } catch (err: any) {
    // ignore
  }
  return null;
}

async function downloadAndOptimize(url: string, destPath: string): Promise<boolean> {
  const tempPath = `${destPath}.temp`;
  try {
    execFileSync('curl', [
      '-sL',
      '-A',
      'KinAraiDaiBot/1.0 (https://github.com/demonmhon/kin-arai-dai; admin@kinaraidai.local)',
      '--max-time',
      '20',
      url,
      '-o',
      tempPath,
    ]);

    if (!fs.existsSync(tempPath)) return false;
    const stats = fs.statSync(tempPath);
    if (stats.size < 2000) {
      fs.rmSync(tempPath, { force: true });
      return false;
    }

    // Resize with sharp to exact 400x400 square thumbnail, JPEG quality 82
    await sharp(tempPath)
      .resize(400, 400, { fit: 'cover', position: 'center' })
      .jpeg({ quality: 82, progressive: true })
      .toFile(destPath);

    fs.rmSync(tempPath, { force: true });
    return true;
  } catch (err) {
    if (fs.existsSync(tempPath)) fs.rmSync(tempPath, { force: true });
    return false;
  }
}

async function resizeExistingLargeImages() {
  console.log('🔄 Checking existing images to ensure all are optimized 400x400...');
  const files = fs.readdirSync(IMAGES_DIR);
  for (const f of files) {
    if (!f.endsWith('.jpg') && !f.endsWith('.png')) continue;
    const p = path.join(IMAGES_DIR, f);
    const stats = fs.statSync(p);
    // If larger than 350KB, resize to 400x400 to save bandwidth
    if (stats.size > 350 * 1024) {
      try {
        const temp = `${p}.tmp`;
        await sharp(p)
          .resize(400, 400, { fit: 'cover', position: 'center' })
          .jpeg({ quality: 82, progressive: true })
          .toFile(temp);
        fs.renameSync(temp, p);
        const newSize = Math.round(fs.statSync(p).size / 1024);
        console.log(`   📉 Optimized ${f}: ${(stats.size / 1024 / 1024).toFixed(1)}MB -> ${newSize}KB`);
      } catch (err) {
        // ignore
      }
    }
  }
}

async function main() {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });

  await resizeExistingLargeImages();

  const yamlFiles = glob.sync('**/*.yaml', { cwd: DATA_DIR, absolute: true });
  console.log(`\nFound ${yamlFiles.length} yaml files in data directory.`);

  const successful: string[] = [];
  const needsAi: string[] = [];

  for (const filePath of yamlFiles) {
    const raw = fs.readFileSync(filePath, 'utf-8');
    const doc = load(raw) as any;
    if (!doc || !doc.id) continue;

    const foodId = doc.id;
    const filename = `${foodId}.jpg`;
    const destPath = path.join(IMAGES_DIR, filename);

    // Skip if already has an image on disk
    if (doc.imageUrl && fs.existsSync(path.join(ROOT_DIR, 'public', doc.imageUrl.replace(/^\//, '')))) {
      continue;
    }

    const queries = COMMONS_SEARCH_TERMS[foodId];
    if (!queries) {
      console.log(`⚡ [AI Needed] ${foodId} (${doc.name}) marked for Nanobanana AI`);
      needsAi.push(foodId);
      continue;
    }

    console.log(`\n🔍 Searching Creative Commons for: ${foodId} (${doc.name})...`);
    let found: CommonsResult | null = null;
    for (const q of queries) {
      await sleep(1500);
      found = searchWikimedia(q);
      if (found) break;
    }

    if (!found) {
      console.log(`❌ No CC image found for ${foodId} -> Mark for AI`);
      needsAi.push(foodId);
      continue;
    }

    console.log(`⬇️ Downloading & optimizing ${found.url} (${found.artist} / ${found.license})...`);
    const ok = await downloadAndOptimize(found.url, destPath);

    if (ok) {
      const fileSizeKb = Math.round(fs.statSync(destPath).size / 1024);
      console.log(`✅ Saved 400x400 thumbnail: ${filename} (${fileSizeKb} KB)`);

      doc.imageUrl = `/images/foods/${filename}`;
      doc.imageCredit = `Photo by ${found.artist} on Wikimedia Commons (${found.license})`;

      fs.writeFileSync(filePath, dump(doc, { indent: 2, lineWidth: -1 }), 'utf-8');
      successful.push(foodId);
    } else {
      console.log(`❌ Failed downloading for ${foodId} -> Mark for AI`);
      needsAi.push(foodId);
    }

    await sleep(800);
  }

  console.log('\n========================================');
  console.log(`🎉 Finished Creative Commons Process:`);
  console.log(`   - Successfully processed with CC: ${successful.length} foods`);
  console.log(`   - Require Nanobanana AI: ${needsAi.length} foods`);
  console.log(`   - AI candidate list:`, JSON.stringify(needsAi));
}

main().catch(console.error);
