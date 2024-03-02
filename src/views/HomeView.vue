<template>
  <div class="home">
    <div class="splash-container">
      <div class="splash">
        <h1>Splendid Food</h1>
      </div>
    </div>

    <main class="wrapper">
      <h2>Recommended</h2>

      <div class="recommended">

        <ProductCard v-for="(product, index) in props.inventory.slice(0, 3)" :key="product.id" class="card" :index="index"
          :product="product" :addToCart="addToCart" />
      </div>

    </main>
  </div>
</template>

<script setup>

import ProductCard from '@/components/ProductCard.vue'
import { defineProps } from 'vue'

const props = defineProps({
  inventory: {
    type: Object
  },
  addToCart: {
    type: Function
  }
})
</script>
