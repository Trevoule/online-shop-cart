<template>
<div class="v-cart">    
<router-link :to="{name:'Catalog'}">
  <button class="v-cart__back_btn">Back To Catalog</button>    
</router-link>

<h1>Cart</h1>
<p v-if="!CART.length">There are no products in cart...</p>
<v-cart-item 
  v-for="(item, index) in CART"
  :key="item.article"
  :cart_item_data="item"
  @deleteFromCart = "deleteFromCart(index)"
  @increment ="increment(index)"
  @decrement ="decrement(index)"
/>
<div class="v-cart__total">
  <p v-if="CART.length">Total: {{cartTotalCost}}</p>
  <p v-else>Cart is empty.</p>
</div>
  
</div>
</template>

<script>
import vCartItem from './v-cart-item.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
name:'v-cart',
components:{vCartItem},
props:{
  cart_data: {
    type: Array,
    default(){
      return []
    }
  }
},
data(){
    return {}
},
methods:{
  ...mapActions([
    'DELETE_FROM_CART',
    'INCREMENT_CART_ITEM',
    'DECREMENT_CART_ITEM' 
  ]),
  deleteFromCart(index){
    this.DELETE_FROM_CART(index)
  },
  decrement(index){
    this.DECREMENT_CART_ITEM(index)
  },
  increment(index){
    console.log(index);
    this.INCREMENT_CART_ITEM(index)
  }
},
computed:{
  ...mapGetters([
    'CART'
  ]),
  cartTotalCost(){
    return this.CART.reduce((acc, elem) =>{
      if(typeof elem.quantity === 'number'){
        acc += elem.quantity * elem.price
        }
      return acc
    },0)
  }
},
mounted(){
  console.log(this.cart_data);
}
}
</script>

<style lang="scss">
.v-cart{
margin-bottom: 100px;

  &__total{
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding: $padding*2;
  display: flex;
  justify-content: center;
  background: $main-green;
  color: #ffffff;
  font-size: 20px;
  }

  &__total_name{
  margin-right: $margin*2;

  }

  &__back_btn{
    position: absolute;
    top: 10px;
    right: 20px;
    padding: 20px;
    border: solid 2px $main-green;
    border-radius: $radius;
    min-width: 70px;
  }
}
</style>