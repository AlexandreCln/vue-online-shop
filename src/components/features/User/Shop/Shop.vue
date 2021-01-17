<template>
  <shop-product-list :products="products" class="p-3"></shop-product-list>
</template>

<script>
import ShopProductList from './ShopProductList';

export default {
  props: ['products'],
  components: { ShopProductList },
}
</script>

<style>

</style>
