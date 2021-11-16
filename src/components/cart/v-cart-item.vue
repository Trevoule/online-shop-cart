<template>
<div class="v-cart-item">
  <img class="v-cart-item__image" :src=" require ('../../assets/images/'+ cart_item_data.image)" alt="img">
    <div class="v-cart-item__info">
        <p>Name: {{cart_item_data.name}}</p>
        <p>Price: {{cart_item_data.price}}</p>
        <p>Product ID: {{cart_item_data.article}}</p>
    </div>
    <div class="v-cart-item__quantity">
        <p> Qty :</p>
        <span class="quantity_btn" @click="decrement">-</span>
        <span>{{cart_item_data.quantity}}</span>
        <span class="quantity_btn" @click="increment">+</span>
    </div>
    <button @click="deleteFromCart">Delete</button>
</div>
</template>

<script>

export default {
name:'v-cart-item',
props:{
    cart_item_data: {
        type: Object,
        default(){
            return {}
        }
    }
},
data(){
    return {}
},
methods:{
  deleteFromCart(){
    this.$emit('deleteFromCart')
  },
  increment(){
    this.$emit('increment')
  },
  decrement(){
  this.$emit('decrement')
  }

},
computed:{
},
mounted(){
}
}
</script>

<style>
.v-cart-item{
display: flex;
flex-wrap: nowrap;
align-items: center;
justify-content: space-between;
box-shadow: 0 0 8px 0 #e0e0e0;
padding: 16px;
margin-bottom: 16px;

}
.v-cart-item__image{
max-width: 100px;

}
.quantity_btn{
  cursor: pointer;
}
</style>