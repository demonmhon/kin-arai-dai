import { FoodItem } from '../types/food';
import foodsData from './generated/foods.json';

/**
 * foods: Auto-generated from YAML data files in /data/** via scripts/build-db.ts
 *
 * Single Source of Truth: /data/<category>/<id>.yaml
 * To add or edit foods, modify or create YAML files in /data/
 */
export const foods: FoodItem[] = foodsData as unknown as FoodItem[];
