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
        <OrdersComponent v-for="(quantity, product_name ) in allData.cart"
          :product_name="product_name" :quantity="quantity" :key="product_name"
        />
        <tr>
          <th>
            Total: ${{ allData.calculateTotal() }}
          </th>
        </tr>

      </tbody>
    </table>
  </main>
</template>

<script setup>
import OrdersComponent from '@/components/OrdersComponent'
import { useAllDataStore } from '@/stores/AllData'

const allData = useAllDataStore()

</script>
