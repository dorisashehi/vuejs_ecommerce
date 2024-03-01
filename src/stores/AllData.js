import { defineStore } from 'pinia'
import food from '@/food.json'

export const useAllDataStore = defineStore('data', {
  state() {
    return {
      inventory: food,
      cart: {}
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
    }
  }
})
