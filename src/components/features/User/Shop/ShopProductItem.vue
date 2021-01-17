<template>
  <div class="w-25 p-3 product-container">
    <div class="product-image d-flex flex-row justify-content-center">
      <img :src="product.img" alt="Image Produit">
    </div>
    <div>
      <h3>{{ product.title }}</h3>
      <hr>
    </div>
    <div>
      <p>{{ product.description }}</p>
    </div>
    <div>
      <span>{{ product.price | price }}</span>
      <button @click="addOne(product)" class="btn btn-primary btn-sm float-end">Commander</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: [ 'product' ],
  methods: {
    ...mapMutations('cart', ['addOne'])
  },
};
</script>

<style>
  p {
    font-size: 12px;
  }
  .product-container {
    height: 400px;
  }
  .product-image {
    height: 150px;
  }
</style>
