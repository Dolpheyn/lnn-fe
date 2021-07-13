import { FoodCategory, OrderStatus } from 'components/enums'

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
  isAvailable: boolean;
}

export interface CartItem extends Food {
  quantity: number,
} 

export interface Customer {
  id: number,
  name: string,
  phoneNumber: string,
  email: string,
  address: string,
}

export interface Deliverer {
  id: number,
  name: string,
  email: string,
  phoneNumber: string,
  claimableComission: number,
}

export interface Order {
  id: number;
  status: OrderStatus,
  customer: Customer,
  deliverer: Deliverer | null,
}
