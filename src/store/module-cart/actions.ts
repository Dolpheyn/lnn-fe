import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { CartStateInterface } from './state';
import { CartItem } from 'components/models'

const actions: ActionTree<CartStateInterface, StateInterface> = {
  addItem ({ commit, state }, param: CartItem) {
    if(state.items.some(item => item.id === param.id)) {
      commit('IncrementQuantity', param.id)
    } else {
      commit('AddItem', param)
    }
  },
  incrementQuantity({ commit }, id: number) {
    commit('IncrementQuantity', id)
  },
  decrementQuantity({ commit, state }, id: number) {
    const item = state.items.find(item => item.id === id)
    if(!item) return

    if(item.quantity > 1) {
      commit('DecrementQuantity', id)
    } else {
      commit('RemoveItem', id)
    }
  },
  removeItem ({ commit }, id: number) {
    commit('RemoveItem', id)
  }
};

export default actions;
