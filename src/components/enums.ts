export enum FoodCategory {
  Meal = 'Meal',
  AlaCarte = 'AlaCarte',
  Side = 'Side',
  Drink = 'Drink',
}

const arr: string[] = [];
export function getAllFoodCategories(): FoodCategory[] {
  if (!arr.length) {
    for (const category in FoodCategory) {
      arr.push(category)
    }
  }

  return arr as FoodCategory[]
}
