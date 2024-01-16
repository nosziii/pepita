<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-4 mb-3" v-for="product in productData" :key="product.id">
        <div class="card h-100">
          <img :src="product.image" class="card-img-top" alt="Product Image">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <p class="card-text"><small class="text-muted">{{ product.category }}</small></p>
            <h6>Price: {{ product.price }}</h6>
            <div>Rating: {{ product.rating }} / 5</div>
            <div>Reviews: {{ product.reviewCount }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import products from '../services/fakeService'

const productData = ref(products)
</script>

<style scoped>

</style>
