<template>
  <div class="v-catalog-item">
    <img class="v-catalog-item__image" :src=" require ('../../assets/images/'+ product_data.image)" alt="img">
    <p class="v-catalog-item-name">{{product_data.name}}</p>
    <p class="v-catalog-item-price">Price: {{product_data.price}} RUB</p>
    <button 
    class="v-catalog-item-add-to-cart-btn btn" 
    @click="addToCart"
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
        addToCart(){
            this.$emit('addToCart', this.product_data)
        }
    }

}
</script>

 <style>
 .v-catalog-item {
     flex-basis: 25%;
     box-shadow: 0 0 8px 0 #e0e0e0;
     padding: 8px;
     margin-bottom: 16px;
}

.v-catalog-item__image{
     width: 200px;
 }

 .btn{
     padding: 8px 16px;
     background: #26ae68;
     color: #ffffff;
     border: 0;
     border-radius: 4px;
     cursor: pointer;
     font-weight: 900;
 }
 </style>