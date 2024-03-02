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
    <div @click="toggleSidebar" class="top-bar-cart-link">
      <i class="icofont-cart-alt icofont-1x"></i>
      <span>Cart ({{ totalQuantity }})</span>
    </div>
  </header>
  <router-view :inventory="inventory" :calculateTotal="calculateTotal" :addToCart="addToCart" :cart="cart"
    :getPrice="getPrice" />
  <sidebar-component v-if="showSidebar" :toggle="toggleSidebar" :calculateTotal="calculateTotal" :cart="cart" :getPrice="getPrice" :remove="removeItem" />
</template>

<script setup>
import SidebarComponent from '@/components/SidebarComponent.vue'
import food from './food.json'
import { ref, computed } from 'vue'

const showSidebar = ref(false)
const inventory = ref(food)
const cart = ref({})

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value
}

const addToCart = (name, quantity) => {
  if (!cart.value[name]) cart.value[name] = 0
  cart.value[name] += quantity
}

const getPrice = (name) => {
  const product = inventory.value.find((p) => {
    return p.name === name
  })
  return product.price.USD
}

const calculateTotal = () => {
  const total = Object.entries(cart.value).reduce((acc, curr, index) => {
    return acc + (curr[1] * getPrice(curr[0]))
  }, 0)
  return total.toFixed()
}

const totalQuantity = computed(() => {
  return Object.values(cart.value).reduce((acc, curr) => {
    return acc + curr
  }, 0)
})

const removeItem = (name) => {
  delete cart.value[name]
}

// export default {
//   components: {
//     SidebarComponent
//   },
//   data() {
//     return {
//       showSidebar: false,
//       inventory: food,
//       cart: {}
//     }
//   },
//   computed: {
//     totalQuantity() {
//       return Object.values(this.cart).reduce((acc, curr) => {
//         return acc + curr
//       }, 0)
//     }
//   },
//   methods: {
//     addToCart(name, quantity) {
//       if (!this.cart[name]) this.cart[name] = 0
//       this.cart[name] += quantity
//     },
//     toggleSidebar() {
//       this.showSidebar = !this.showSidebar
//     },
//     removeItem(name) {
//       delete this.cart[name]
//     },
//     getPrice(name) {
//       const product = this.inventory.find((p) => {
//         return p.name === name
//       })
//       return product.price.USD
//     },
//     calculateTotal() {
//       const total = Object.entries(this.cart).reduce((acc, curr, index) => {
//         return acc + (curr[1] * this.getPrice(curr[0]))
//       }, 0)
//       return total.toFixed()
//     }
//   }

// }

</script>
