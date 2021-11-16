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
  <p v-if="CART.length">Total : </p>
  <p v-if="CART.length">{{cartTotalCost}}</p>
  <p v-else>Корзина пуста</p>
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
    let result = 0
    
    for(let item of this.CART){
      if((typeof item.quantity === 'number')){  
        result += (item.price * item.quantity)   
      }
    }
    return result
  }
},
mounted(){
  console.log(this.cart_data);
}
}
</script>

<style>
.v-cart{
margin-bottom: 100px;
}

.v-cart__total{
position: fixed;
bottom: 0;
right: 0;
left: 0;
padding: 16px;
display: flex;
justify-content: center;
background: #26ae68;
color: #ffffff;
font-size: 20px;
}

.v-cart__total_name{
margin-right: 16px;

}

.v-cart__back_btn{
position: absolute;
top: 10px;
right: 20px;
padding: 20px;
border: solid 1px teal;
}
</style>