<template>
  <div class="v-main-wrapper">
      <v-catalog />
      <v-cart />
  </div>
</template>

<script>
import vCatalog from './v-catalog.vue'
import vCart from './v-cart.vue'

export default {
    name: 'v-main-wrapper',
    data(){
        return{
            main: 'main Wrapper'
        }
    },
    components: {
        vCatalog, 
        vCart
    }
}
</script>

<style>
.v-main-wrapper{
    max-width: 900px;
    margin: 0 auto;
}
</style>