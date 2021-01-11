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
      <span>{{ product.price }}</span>
      <button class="btn btn-primary btn-sm float-end">Commander</button>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return {
      product: {
        img: 'https://www.cdiscount.com/pdt2/2/9/1/1/550x550/app3700980717291/rw/apple-macbook-pro-13-pouces-2-7ghz-intel-core-i7-4.jpg',
        title: 'MacBook Air',
        description: 'Notre portable le plus fin et le plus léger est métamorphosé par la puce Apple M1. Avec des performances de processeur jusqu’à 3,5 fois plus élevées.',
        price: '1129 €'
      }
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
