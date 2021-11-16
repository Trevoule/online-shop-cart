import { createStore } from 'vuex'
import common_actions from './actions/actions'
import api_actions from './actions/apiRequest'
import mutations from './mutations/mutations'
import getters from './getters/getters'

const actions = {...common_actions, ...api_actions}

export default createStore({
  state: {
    products: [],
    cart: [],
  },
  mutations,
  actions,
  getters
})

