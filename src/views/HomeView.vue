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

        <ProductCard v-for="(product, index) in allData.inventory.slice(0, 3)" :key="product.id" class="card" :index="index"
          :product="product"/>
      </div>

    </main>
  </div>
</template>

<script setup>

import ProductCard from '@/components/ProductCard.vue'
import { useAllDataStore } from '@/stores/AllData'

const allData = useAllDataStore()

</script>
