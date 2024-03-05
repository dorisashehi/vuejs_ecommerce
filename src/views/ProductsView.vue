<template>
  <main class="wrapper">
    <h1>Products</h1>

    <div class="card-container">
      <product-card v-for="(product, index) in allData.inventory.slice(0, 6)" :key="product.id" class="card" :index="index"
        :product="product" :addToCart="allData.addToCart" />
    </div>

    <!-- <sidebar v-if="showSidebar" :toggle="toggleSidebar" :cart="cart" :inventory="inventory" :remove="removeItem" /> -->

  </main>
</template>

<script setup>

import ProductCard from '@/components/ProductCard.vue'
import { useAllDataStore } from '@/stores/AllData'

const allData = useAllDataStore()

</script>
