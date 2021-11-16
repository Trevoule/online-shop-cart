import { createRouter, createWebHashHistory } from 'vue-router'
import vCatalog from '../components/catalog/v-catalog.vue'
import vCart from '../components/cart/v-cart.vue'


const routes = [
  {
    path: '/',
    name: 'Catalog',
    component: vCatalog
  },
  {
    path: '/cart',
    name: 'Cart',
    component: vCart,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
