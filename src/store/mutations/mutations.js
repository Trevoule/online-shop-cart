export default{
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
  }