import { defineStore } from 'pinia'
import food from '@/food.json'

export const useAllDataStore = defineStore('data', {
  state() {
    return {
      inventory: food,
      cart: {},
      showSidebar: false
    }
  },

  actions: {
    getPrice(name) {
      const product = this.inventory.find((p) => {
        return p.name === name
      })
      return product.price.USD
    },
    calculateTotal() {
      const total = Object.entries(this.cart).reduce((acc, curr, index) => {
        return acc + curr[1] * this.getPrice(curr[0])
      }, 0)
      return total.toFixed()
    },
    addToCart(name, quantity) {
      if (!this.cart[name]) this.cart[name] = 0
      this.cart[name] = quantity
    },
    toggleSidebar() {
      this.showSidebar = !this.showSidebar
    },
    removeItem(name) {
      delete this.cart[name]
    }
  },
  getters: {
    totalQuantity() {
      return Object.values(this.cart).reduce((acc, curr) => {
        return acc + curr
      }, 0)
    }
  }
})
