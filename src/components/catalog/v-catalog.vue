<template>
  <div class="v-catalog">
    <router-link :to="{name:'Cart', params: {cart_data: CART}}">
      <div class="v-catalog__link_to_cart">
        <span v-if="!CART.length">Empty</span>
        <span v-else>Cart: {{CART.length}}</span>
      </div>    
    </router-link>

    <h1>Catalog</h1>
    <div class="v-catalog__list">
    <v-catalog-item 
      v-for="product in PRODUCTS" 
      :key="product.article" 
      :product_data ="product"
      @addToCart = addToCart
    />          
    </div>
  </div>
</template>

<script>
import vCatalogItem from './v-catalog-item.vue'
import {mapActions, mapGetters } from 'vuex'

export default {
    name: "v-catalog",
    components: {vCatalogItem},
    methods:{
      ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'ADD_TO_CART'
      ]),
      addToCart(product){
        this.ADD_TO_CART(product)
      },
    },
    computed:{
      ...mapGetters([
        'PRODUCTS',
        'CART'
      ])
    },
    mounted(){
      this.GET_PRODUCTS_FROM_API()
    }
  }
</script>

<style lang="scss">
.v-catalog{
  &__list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  &__link_to_cart{
    position: absolute;
    top: 10px;
    right: 20px;
    padding: 10px 10px;
    border: solid 2px $main-green;
    border-radius: $radius;
    min-width: 70px;
  }
}
</style>