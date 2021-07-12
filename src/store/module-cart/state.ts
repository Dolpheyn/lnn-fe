import { CartItem } from 'components/models'

export interface CartStateInterface {
  items: CartItem[];
}

function state(): CartStateInterface {
  return {
   items: []
  }
};

export default state;
