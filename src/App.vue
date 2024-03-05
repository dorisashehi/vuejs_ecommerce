<template>
  <header class="top-bar spread">
    <nav class="top-bar-nav">
      <router-link to="/" class="top-bar-link">
        <i class="icofont-spoon-and-fork"></i>
        <span>Home</span>
      </router-link>
      <router-link to="/products" class="top-bar-link">
        <span>Products</span>
      </router-link>
      <router-link to="/past-orders" class="top-bar-link">
        <span>Orders</span>
      </router-link>
    </nav>
    <div @click="allData.toggleSidebar" class="top-bar-cart-link">
      <i class="icofont-cart-alt icofont-1x"></i>
      <span>Cart ({{ allData.totalQuantity }})</span>
    </div>
  </header>
  <router-view/>
  <sidebar-component v-if="allData.showSidebar" />
</template>

<script setup>
import SidebarComponent from '@/components/SidebarComponent.vue'
// import { ref, computed } from 'vue'
import { useAllDataStore } from './stores/AllData'

const allData = useAllDataStore()

// const showSidebar = ref(false)
// const inventory = ref(food)
// const cart = ref({})

// const toggleSidebar = () => {
//   showSidebar.value = !showSidebar.value
// }

// const addToCart = (name, quantity) => {
//   if (!allData.cart.value[name]) allData.cart.value[name] = 0
//   allData.cart.value[name] += quantity
// }

// const getPrice = (name) => {
//   const product = allData.inventory.value.find((p) => {
//     return p.name === name
//   })
//   return product.price.USD
// }

// const calculateTotal = () => {
//   const total = Object.entries(allData.cart.value).reduce((acc, curr, index) => {
//     return acc + (curr[1] * getPrice(curr[0]))
//   }, 0)
//   return total.toFixed()
// }

// const totalQuantity = computed(() => {
//   return Object.values(allData.cart.value).reduce((acc, curr) => {
//     return acc + curr
//   }, 0)
// })

</script>
