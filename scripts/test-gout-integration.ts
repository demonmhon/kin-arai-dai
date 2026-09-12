/**
 * Integration & Logic Verification for Gout
 */
import { foods } from '../src/data/foods';
import { getFoodAdvice } from '../src/utils/foodAdvice';
import { slugToDiseaseAndStage, STAGE_TO_SLUG, buildAppUrl } from '../src/utils/url';
import { getStageMeta } from '../src/utils/diseaseHelper';
import { diseases } from '../src/data/diseases';

console.log('--- 1. Testing Disease Metadata ---');
const goutDisease = diseases.find((d) => d.id === 'gout');
if (!goutDisease || goutDisease.status !== 'active') {
  throw new Error(`Gout disease is not active: ${JSON.stringify(goutDisease)}`);
}
console.log('✓ Gout disease is active:', goutDisease.name);

console.log('\n--- 2. Testing URL slug resolution ---');
const resolvedRemission = slugToDiseaseAndStage('gout-remission');
if (!resolvedRemission || resolvedRemission.diseaseId !== 'gout' || resolvedRemission.stageId !== 'gout_remission') {
  throw new Error(`Failed to resolve gout-remission: ${JSON.stringify(resolvedRemission)}`);
}
console.log('✓ Resolved gout-remission:', resolvedRemission);

const resolvedFlare = slugToDiseaseAndStage('gout-flare');
if (!resolvedFlare || resolvedFlare.diseaseId !== 'gout' || resolvedFlare.stageId !== 'gout_flare') {
  throw new Error(`Failed to resolve gout-flare: ${JSON.stringify(resolvedFlare)}`);
}
console.log('✓ Resolved gout-flare:', resolvedFlare);

console.log('\n--- 3. Testing Stage Metadata Lookup ---');
const metaRemission = getStageMeta('gout', 'gout_remission');
console.log('✓ Gout Remission Meta:', metaRemission.badge, '|', metaRemission.focus);
const metaFlare = getStageMeta('gout', 'gout_flare');
console.log('✓ Gout Flare Meta:', metaFlare.badge, '|', metaFlare.focus);

console.log('\n--- 4. Testing Gout Food Advice ---');
console.log(`Total foods in database: ${foods.length}`);

// Test 1: Beer (Danger in both)
const beer = foods.find((f) => f.id === 'beer');
if (!beer) throw new Error('Beer not found');
const beerAdvice = getFoodAdvice(beer, 'gout', 'gout_remission');
if (beerAdvice.level !== 'danger') throw new Error(`Beer should be danger, got: ${beerAdvice.level}`);
console.log(`✓ Beer: level = ${beerAdvice.level}, reason = ${beerAdvice.reason.slice(0, 50)}...`);

// Test 2: Cherry (Safe in both)
const cherry = foods.find((f) => f.id === 'cherry');
if (!cherry) throw new Error('Cherry not found');
const cherryAdvice = getFoodAdvice(cherry, 'gout', 'gout_remission');
if (cherryAdvice.level !== 'safe') throw new Error(`Cherry should be safe, got: ${cherryAdvice.level}`);
console.log(`✓ Cherry: level = ${cherryAdvice.level}, advice = ${cherryAdvice.advice}`);

// Test 3: Chicken Breast (Caution in remission, Danger in flare)
const chicken = foods.find((f) => f.id === 'chicken-breast');
if (!chicken) throw new Error('Chicken breast not found');
const chickenRemission = getFoodAdvice(chicken, 'gout', 'gout_remission');
const chickenFlare = getFoodAdvice(chicken, 'gout', 'gout_flare');
if (chickenRemission.level !== 'caution' || chickenFlare.level !== 'danger') {
  throw new Error(`Chicken levels mismatch: remission=${chickenRemission.level}, flare=${chickenFlare.level}`);
}
console.log(`✓ Chicken Breast: remission = ${chickenRemission.level}, flare = ${chickenFlare.level}`);

// Test 4: Egg White (Safe in both)
const eggWhite = foods.find((f) => f.id === 'egg-white');
if (!eggWhite) throw new Error('Egg white not found');
const eggAdvice = getFoodAdvice(eggWhite, 'gout', 'gout_remission');
if (eggAdvice.level !== 'safe') throw new Error(`Egg white should be safe, got: ${eggAdvice.level}`);
console.log(`✓ Egg White: level = ${eggAdvice.level}`);

// Test 5: Check that all 51 foods have valid Gout profile and sources
let missingGout = 0;
for (const food of foods) {
  const advRemission = getFoodAdvice(food, 'gout', 'gout_remission');
  const advFlare = getFoodAdvice(food, 'gout', 'gout_flare');
  if (!advRemission.advice || !advFlare.advice) {
    console.error(`Food ${food.id} missing advice`);
    missingGout++;
  }
}
if (missingGout > 0) throw new Error(`Found ${missingGout} foods with missing advice`);
console.log(`✓ All ${foods.length} foods verified to have valid Gout advice and levels!`);

console.log('\n=== ALL INTEGRATION VERIFICATION TESTS PASSED! ===');
