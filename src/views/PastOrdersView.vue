<template>
  <main class="wrapper">
    <h1>Orders</h1>

    <table class="product-table">
      <thead>
        <tr>
          <td><span class="sr-only">Product Image</span></td>
          <td>Product</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Total</td>
          <td><span class="sr-only">Actions</span></td>
        </tr>
      </thead>
      <tbody>
        <OrdersComponent v-for="(quantity, product_name ) in props.cart" :calculateTotal="props.calculateTotal" :getPrice='props.getPrice'
          :product_name="product_name" :quantity="quantity" :key="product_name" :inventory="props.inventory" :cart='props.cart'
          :addToCart="props.addToCart" />
        <tr>
          <th>
            Total: ${{ props.calculateTotal() }}
          </th>
        </tr>

      </tbody>
    </table>
  </main>
</template>

<script setup>
import OrdersComponent from '@/components/OrdersComponent'
import { defineProps } from 'vue'

const props = defineProps({
  addToCart: {
    type: Function
  },
  inventory: {
    type: Object
  },
  calculateTotal: {
    type: Number,
    default: 0
  },
  cart: {
    type: Object
  },
  getPrice: {
    type: Function
  }

})
</script>
