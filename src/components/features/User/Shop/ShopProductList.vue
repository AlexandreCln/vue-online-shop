<template>
  <div class="d-flex flex-rox flex-wrap">
    <shop-product-item v-for="product in products" :product="product" :key="product.id"></shop-product-item>
  </div>
</template>

<script>
import ShopProductItem from './ShopProductItem';

export default {
  components: { ShopProductItem },
  props: [ 'products' ],
}
</script>

<style>

</style>
