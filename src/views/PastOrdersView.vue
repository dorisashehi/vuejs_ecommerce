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
        <OrdersComponent v-for="(quantity, product_name ) in cart" :calculateTotal="calculateTotal" :getPrice='getPrice'
          :product_name="product_name" :quantity="quantity" :key="product_name" :inventory="inventory" :cart="cart"
          :addToCart="addToCart" />
        <tr>
          <th>
            Total: ${{ calculateTotal() }}
          </th>
        </tr>

      </tbody>
    </table>
  </main>
</template>

<script>
import OrdersComponent from '@/components/OrdersComponent'

export default {
  name: 'PastOrdersView',
  components: {
    OrdersComponent
  },
  props: ['cart', 'inventory', 'addToCart', 'getPrice', 'calculateTotal'],
  mounted() {
    console.log(this.cart)
  }

}
</script>
