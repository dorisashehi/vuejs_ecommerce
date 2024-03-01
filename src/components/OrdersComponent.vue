<template>
    <tr>
        <td><i class="icofont-carrot icofont-4x" /></td>
        <td>{{ product_name }}</td>
        <td>${{ getPrice(product_name) }}</td>
        <td>{{ quantity }}</td>
        <td>${{ quantity * getPrice(product_name) }}</td>
    </tr>
</template>

<script>
export default {
  name: 'OrdersComponent',
  props: [
    'product_name',
    'quantity',
    'cart',
    'inventory',
    'addToCart',
    'getPrice',
    'calculateTotal'
  ]
}
</script>
