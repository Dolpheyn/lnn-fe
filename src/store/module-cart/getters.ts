import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { CartStateInterface } from './state';

const getters: GetterTree<CartStateInterface, StateInterface> = {
  subTotal ({ items }): number {
    let total = 0;

    for(const item of items) {
      total += item.price * item.quantity
    }

    return total
  },
  itemCount({ items }): number {
    let count = 0;

    for(const item of items) {
      count += item.quantity
    }

    return count
  }
};

export default getters;
