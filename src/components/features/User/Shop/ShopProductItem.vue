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
      <span>{{ product.price }} €</span>
      <button @click="addProductToCart" class="btn btn-primary btn-sm float-end">Commander</button>
    </div>
  </div>
</template>

<script>
import { eventBus } from '../../../../main';

export default {
  props: [ 'product' ],
  methods: {
    addProductToCart(){
      eventBus.addProductToCart( { ...this.product } );
    }
  }
}
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
