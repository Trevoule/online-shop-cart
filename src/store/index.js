import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    products: [],
    cart:[],
  },
  mutations: {
    SET_PRODUCTS_TO_STATE(state, products) {
    state.products = products;
    },
    SET_CART(state, product) {
      if (state.cart.length) {
        let isProductInCart = false;

        state.cart.map((item) => {
          if (item.article == product.article) {
            isProductInCart = true;
            item.quantity++;
            return
          }

          if (!isProductInCart) {
          state.cart.push(product)                  
          item.quantity = 1;
          return  
          }
        })
      } else {
        state.cart.push(product)
        // state.cart.forEach(item => item.quantity = 1)
      }
    },
    REMOVE_FROM_CART(state, index) {
      state.cart.splice(index, 1)
      console.log(state.cart);
    },
    INCREMENT(state, index) {
      state.cart[index].quantity++
    },
    DECREMENT(state, index) {
      if(state.cart[index].quantity > 1){
        state.cart[index].quantity--
      }
      return 
      }
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
    return axios("http://localhost:3000/products", {
        method: 'GET',
    })
        .then((products) => {
            commit('SET_PRODUCTS_TO_STATE', products.data)
            return products;
        })
        .catch((error) => {
            console.log(error)
            return error
        })
    },
    ADD_TO_CART({ commit }, product) {
      commit('SET_CART', product)
    },
    INCREMENT_CART_ITEM({ commit }, index) {
      commit('INCREMENT', index)
    },
    DECREMENT_CART_ITEM({ commit }, index) {
      commit('DECREMENT', index)
    },

    DELETE_FROM_CART({ commit }, index) {
      commit('REMOVE_FROM_CART', index)
    }

  },
  getters: {
    PRODUCTS(state) {
        return state.products
    },
    CART(state) {
      return state.cart
    }
  }
})

