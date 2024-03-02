<template>
    <tr>
        <td><i class="icofont-carrot icofont-4x" /></td>
        <td>{{ props.product_name }}</td>
        <td>${{ props.getPrice(product_name) }}</td>
        <td>{{ props.quantity }}</td>
        <td>${{ props.quantity * props.getPrice(props.product_name) }}</td>
    </tr>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  product_name: {
    type: String,
    default: ''
  },
  quantity: {
    type: Number,
    default: 0
  },
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
