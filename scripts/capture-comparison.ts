import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const WORKSPACE_DIR = '/home/thanawat/workspace/kin-arai-dai';
const OUTPUT_DIR = path.join(WORKSPACE_DIR, 'docs/images');
const SCRATCH_DIR = path.join(WORKSPACE_DIR, 'scratch');

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function capture(url: string, outputPath: string) {
  const cmd = `/usr/bin/google-chrome --headless --no-sandbox --disable-gpu --window-size=390,844 --screenshot="${outputPath}" "${url}"`;
  execSync(cmd, { stdio: 'ignore' });
}

function setFontInFiles(font: 'Prompt' | 'Noto Sans Thai') {
  const cssPath = path.join(WORKSPACE_DIR, 'src/index.css');
  const themePath = path.join(WORKSPACE_DIR, 'src/theme.ts');

  let css = fs.readFileSync(cssPath, 'utf8');
  if (font === 'Prompt') {
    css = css.replace(
      /font-family:\s*['"][^'"]+['"],\s*['"][^'"]+['"],/,
      "font-family: 'Prompt',"
    );
  } else {
    css = css.replace(
      /font-family:\s*['"]Prompt['"],/,
      "font-family: 'Noto Sans Thai', 'Prompt',"
    );
  }
  fs.writeFileSync(cssPath, css, 'utf8');

  let theme = fs.readFileSync(themePath, 'utf8');
  if (font === 'Prompt') {
    theme = theme.replaceAll(
      "fontFamily: \"'Noto Sans Thai', 'Prompt', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif\"",
      "fontFamily: \"'Prompt', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif\""
    );
  } else {
    theme = theme.replaceAll(
      "fontFamily: \"'Prompt', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif\"",
      "fontFamily: \"'Noto Sans Thai', 'Prompt', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif\""
    );
  }
  fs.writeFileSync(themePath, theme, 'utf8');
}

async function createSideBySide(
  leftImgPath: string,
  rightImgPath: string,
  leftLabel: string,
  rightLabel: string,
  outPath: string
) {
  const leftMeta = await sharp(leftImgPath).metadata();
  const rightMeta = await sharp(rightImgPath).metadata();

  const imgW = leftMeta.width || 390;
  const imgH = Math.max(leftMeta.height || 844, rightMeta.height || 844);
  const headerHeight = 56;
  const separatorW = 12;
  const totalW = imgW * 2 + separatorW;
  const totalH = imgH + headerHeight;

  const leftBuffer = await sharp(leftImgPath).toBuffer();
  const rightBuffer = await sharp(rightImgPath).toBuffer();

  const headerSvg = `
    <svg width="${totalW}" height="${headerHeight}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${totalW}" height="${headerHeight}" fill="#0f172a" />
      <rect x="0" y="0" width="${imgW}" height="${headerHeight}" fill="#1e293b" />
      <rect x="${imgW + separatorW}" y="0" width="${imgW}" height="${headerHeight}" fill="#064e3b" />
      <text x="${imgW / 2}" y="36" font-family="'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="700" fill="#f8fafc" text-anchor="middle">
        ${leftLabel}
      </text>
      <text x="${imgW + separatorW + imgW / 2}" y="36" font-family="'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="700" fill="#34d399" text-anchor="middle">
        ${rightLabel}
      </text>
      <rect x="${imgW}" y="0" width="${separatorW}" height="${totalH}" fill="#334155" />
    </svg>
  `;

  await sharp({
    create: {
      width: totalW,
      height: totalH,
      channels: 4,
      background: { r: 15, g: 23, b: 42, alpha: 1 },
    },
  })
    .composite([
      { input: Buffer.from(headerSvg), top: 0, left: 0 },
      { input: leftBuffer, top: headerHeight, left: 0 },
      { input: rightBuffer, top: headerHeight, left: imgW + separatorW },
    ])
    .png()
    .toFile(outPath);

  console.log(`Saved: ${outPath}`);
}

async function main() {
  if (!fs.existsSync(SCRATCH_DIR)) {
    fs.mkdirSync(SCRATCH_DIR, { recursive: true });
  }
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // 1. Ensure Prompt is set
  console.log('1. Setting font to Prompt...');
  setFontInFiles('Prompt');
  await sleep(1500);

  const promptCatalog = path.join(SCRATCH_DIR, 'prompt_catalog.png');
  const promptSelection = path.join(SCRATCH_DIR, 'prompt_selection.png');
  console.log('2. Capturing Prompt screenshots...');
  await capture('http://localhost:5173/ckd-stage-4-5', promptCatalog);
  await capture('http://localhost:5173/', promptSelection);

  // 2. Switch to Noto Sans Thai
  console.log('3. Setting font to Noto Sans Thai...');
  setFontInFiles('Noto Sans Thai');
  await sleep(1500);

  const notoCatalog = path.join(SCRATCH_DIR, 'noto_catalog.png');
  const notoSelection = path.join(SCRATCH_DIR, 'noto_selection.png');
  console.log('4. Capturing Noto Sans Thai screenshots...');
  await capture('http://localhost:5173/ckd-stage-4-5', notoCatalog);
  await capture('http://localhost:5173/', notoSelection);

  // 3. Create comparisons
  console.log('5. Stitching comparisons...');
  await createSideBySide(
    promptCatalog,
    notoCatalog,
    'แบบเดิม (Prompt)',
    'แบบใหม่ (Noto Sans Thai)',
    path.join(OUTPUT_DIR, 'font_comparison_catalog.png')
  );

  await createSideBySide(
    promptSelection,
    notoSelection,
    'แบบเดิม (Prompt)',
    'แบบใหม่ (Noto Sans Thai)',
    path.join(OUTPUT_DIR, 'font_comparison_selection.png')
  );

  console.log('Completed successfully! Images saved to docs/images/');
}

main().catch(console.error);
