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
  <SidebarComponent v-if="showSidebar" :toggle="toggleSidebar" :calculateTotal="calculateTotal" :cart="cart"
    :getPrice="getPrice" :inventory="inventory" :remove="removeItem" />
</template>

<script>
import SidebarComponent from '@/components/Sidebar.vue'
import food from './food.json'

export default {
  components: {
    SidebarComponent
  },
  data() {
    return {
      showSidebar: false,
      inventory: food,
      cart: {}
    }
  },
  computed: {
    totalQuantity() {
      return Object.values(this.cart).reduce((acc, curr) => {
        return acc + curr
      }, 0)
    }
  },
  methods: {
    addToCart(name, quantity) {
      if (!this.cart[name]) this.cart[name] = 0
      this.cart[name] += quantity
    },
    toggleSidebar() {
      this.showSidebar = !this.showSidebar
    },
    removeItem(name) {
      delete this.cart[name]
    },
    getPrice(name) {
      const product = this.inventory.find((p) => {
        return p.name === name
      })
      return product.price.USD
    },
    calculateTotal() {
      const total = Object.entries(this.cart).reduce((acc, curr, index) => {
        return acc + (curr[1] * this.getPrice(curr[0]))
      }, 0)
      return total.toFixed()
    }
  }

}

</script>
