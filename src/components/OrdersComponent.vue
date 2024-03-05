<template>
    <tr>
        <td><i class="icofont-carrot icofont-4x" /></td>
        <td>{{ props.product_name }}</td>
        <td>${{ allData.getPrice(props.product_name) }}</td>
        <td>{{ props.quantity }}</td>
        <td>${{ props.quantity * allData.getPrice(props.product_name) }}</td>
    </tr>
</template>

<script setup>
import { defineProps } from 'vue'
import { useAllDataStore } from '@/stores/AllData'

const allData = useAllDataStore()
const props = defineProps({
  product_name: {
    type: String,
    default: ''
  },
  quantity: {
    type: Number,
    default: 0
  }
})
</script>
