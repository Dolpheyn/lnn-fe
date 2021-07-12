import { MutationTree } from 'vuex';
import { CartStateInterface } from './state';
import { CartItem } from 'components/models'

const mutation: MutationTree<CartStateInterface> = {
  AddItem (state: CartStateInterface, payload: CartItem) {
    state.items.push(payload)
  },
  RemoveItem (state: CartStateInterface, payload: number) {
    state.items = state.items.filter(item => item.id !== payload)
  },
  IncrementQuantity(state: CartStateInterface, payload: number) {
    const [toIncrement] = state.items.filter(item => item.id === payload)
    toIncrement.quantity++
  }
};

export default mutation;
