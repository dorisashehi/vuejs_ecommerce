<template>
    <div class="card">
        <div class="card-title">
            {{ props.product.name }}
        </div>
        <div class="card-body">
            <i class="icofont-10x" :class="'icofont-' + props.product.icon"></i>
            <form>
                <div class="row">
                    <div class="cell">
                        <label>Type:</label>
                    </div>
                    <div class="cell">
                        <em>{{ props.product.icon }}</em>
                    </div>
                </div>
                <div class="row">
                    <div class="cell">
                        <label>Price:</label>
                    </div>
                    <div class="cell">
                        {{ props.product.price.USD }}
                    </div>
                </div>
                <div class="row">
                    <div class="cell">
                        <label>Quantity:</label>
                    </div>
                    <div class="cell">
                        <input type="number" v-model.number="quantity" />
                    </div>
                </div>
            </form>
        </div>
        <div class="card-footer">
            <button class="btn btn-light" @click="addToCart(props.product.name, quantity)">
                Add to cart
            </button>
        </div>
    </div>
</template>

<script setup>

import { defineProps, ref, watch } from 'vue'

const props = defineProps({
  product: {
    type: Object
  },
  index: {
    type: Number
  },
  addToCart: {
    type: Function
  }
})

const quantity = ref(0)

watch(quantity, (val) => {
  console.log(val)
})
</script>
