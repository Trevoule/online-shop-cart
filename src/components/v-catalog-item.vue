<template>
  <div class="v-catalog-item">
      <img class="v-catalog-item__image" :src=" require ('../assets/images/'+ product_data.image)" alt="img">
      <p class="v-catalog-item-name">{{product_data.name}}</p>
      <p class="v-catalog-item-price">Price: {{product_data.price}} RUB</p>
      <button 
        class="v-catalog-item-add-to-cart-btn btn" 
        @click="sendData"
        >
          Add to Cart
      </button>
  </div>
</template>

<script>
export default {
    props:{
        product_data:{
            type: Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        sendData(){
            this.$emit('getArticle',[this.product_data.article, this.product_data.price] )
        }
    }

}
</script>

<style lang="scss">
.v-catalog-item{
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: $padding*2;
    margin-bottom: $margin*2;

&__image{
    width: 400px;
}
}
</style>