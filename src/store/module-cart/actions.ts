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
    console.log(state.items)
  },
  removeItem ({ commit }, id: number) {
    commit('RemoveItem', id)
  }
};

export default actions;
