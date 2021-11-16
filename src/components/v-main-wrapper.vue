<template>
  <div class="v-main-wrapper">
      <keep-alive>
          <router-view />
      </keep-alive>
  </div>
</template>

<script>

export default {
    name: 'v-main-wrapper',
    data(){
        return{
        }
    },
    computed:{
    }
}
</script>

<style lang="scss">
.v-main-wrapper {
    max-width: 900px;
    margin: 0 auto;
}
</style>