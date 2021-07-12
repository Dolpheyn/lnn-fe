import { FoodCategory } from 'components/enums'

export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface Food {
  id: number;
  name: string;
  category: FoodCategory;
  price: number;
  description: string;
  img: string;
  available: boolean;
}

