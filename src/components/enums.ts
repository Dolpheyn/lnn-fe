export enum FoodCategory {
  Meal = 'Meal',
  AlaCarte = 'AlaCarte',
  Side = 'Side',
  Drink = 'Drink',
}

export enum OrderStatus {
  Preparing = 'Preparing',
  Cooking = 'Cooking',
  ReadyForPickup = 'ReadyForPickup',
  OutForDelivery = 'OutForDelivery',
  Completed = 'Completed',
}

const foodCategories: string[] = [];
export function getAllFoodCategories(): FoodCategory[] {
  if (!foodCategories.length) {
    for (const category in FoodCategory) {
      foodCategories.push(category)
    }
  }

  return foodCategories as FoodCategory[]
}

const orderStatuses: string[] = [];
export function getAllOrderStatuses(): OrderStatus[] {
  if (!orderStatuses.length) {
    for (const status in OrderStatus) {
      orderStatuses.push(status)
    }
  }

  return orderStatuses as OrderStatus[]
}
