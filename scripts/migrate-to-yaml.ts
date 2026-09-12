import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { dump, load } from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT_DIR, 'data');
const FOODS_TS_PATH = path.join(ROOT_DIR, 'src/data/foods.ts');
const APPLE_YAML_PATH = path.join(ROOT_DIR, 'docs/web-db/apple.yaml');

interface FoodItemRaw {
  id: string;
  name: string;
  category: string;
  categoryName: string;
  icon?: string;
  imageUrl?: string;
  imageCredit?: string;
  tags?: string[];
  keywords?: string[];
  sources?: { name: string; url: string }[];
  source?: { name: string; url: string };
  reason?: string;
  advice?: string;
  stages?: Record<string, { level: 'safe' | 'caution' | 'danger'; advice: string }>;
  diseases?: Record<
    string,
    {
      reason?: string;
      tags?: string[];
      sources?: { name: string; url: string }[];
      stages?: Record<string, { level: 'safe' | 'caution' | 'danger'; advice: string }>;
    }
  >;
}

function runMigration() {
  console.log('🚀 Starting migration from foods.ts to data/**/*.yaml ...');

  const content = fs.readFileSync(FOODS_TS_PATH, 'utf-8');
  const jsonText = content.replace(/^[\s\S]*?export const foods: FoodItem\[\] = /, '').replace(/;\s*$/, '');
  const foods: FoodItemRaw[] = JSON.parse(jsonText);

  console.log(`📦 Found ${foods.length} items in foods.ts`);

  let extraAppleData: any = null;
  if (fs.existsSync(APPLE_YAML_PATH)) {
    try {
      extraAppleData = load(fs.readFileSync(APPLE_YAML_PATH, 'utf-8'));
    } catch {
      // ignore
    }
  }

  const categoryFolders = new Set<string>();

  for (const food of foods) {
    const categoryFolder = food.category;
    categoryFolders.add(categoryFolder);
    const targetDir = path.join(DATA_DIR, categoryFolder);
    fs.mkdirSync(targetDir, { recursive: true });

    // Collect sources
    const sources: { name: string; url: string }[] = [];
    if (food.diseases?.ckd?.sources && food.diseases.ckd.sources.length > 0) {
      sources.push(...food.diseases.ckd.sources);
    } else if (food.source) {
      sources.push(food.source);
    }

    // Build diseases map
    const diseases: Record<
      string,
      {
        reason: string;
        stages: Record<string, { level: 'safe' | 'caution' | 'danger'; advice: string }>;
      }
    > = {};

    // 1. CKD profile
    const ckdReason = food.diseases?.ckd?.reason || food.reason || '';
    const ckdStages = food.diseases?.ckd?.stages || food.stages || {};

    diseases.ckd = {
      reason: ckdReason.trim(),
      stages: ckdStages,
    };

    // If apple, also preserve the diabetes example if available
    if (food.id === 'apple' && extraAppleData?.diseases?.diabetes) {
      diseases.diabetes = {
        reason: extraAppleData.diseases.diabetes.reason.trim(),
        stages: extraAppleData.diseases.diabetes.stages,
      };
    }

    // Prepare clean YAML object
    const yamlData: Record<string, any> = {
      id: food.id,
      name: food.name,
      category: food.category,
      categoryName: food.categoryName,
    };

    if (food.icon) yamlData.icon = food.icon;
    if (food.imageUrl) yamlData.imageUrl = food.imageUrl;
    if (food.imageCredit) yamlData.imageCredit = food.imageCredit;

    yamlData.tags = food.tags || [];
    yamlData.keywords = food.keywords || [];
    yamlData.sources = sources;
    yamlData.diseases = diseases;

    const yamlString = dump(yamlData, {
      indent: 2,
      lineWidth: -1,
      noRefs: true,
    });

    const targetFilePath = path.join(targetDir, `${food.id}.yaml`);
    fs.writeFileSync(targetFilePath, yamlString, 'utf-8');
  }

  console.log(`✅ Successfully created ${foods.length} YAML files across categories: ${Array.from(categoryFolders).join(', ')}`);
}

runMigration();
