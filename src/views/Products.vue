<template>
  <main class="wrapper">
    <h1>Products</h1>

    <div class="card-container">
      <ProductCard v-for="(product, index) in inventory.slice(0, 6)" :key="product.id" class="card" :index="index"
        :product="product" :addToCart="addToCart" />
    </div>

    <sidebar v-if="showSidebar" :toggle="toggleSidebar" :cart="cart" :inventory="inventory" :remove="removeItem" />

  </main>
</template>

<script>

import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'ProductsView',
  props: ['inventory', 'product', 'addToCart'],
  components: {
    ProductCard
  }
}
</script>
