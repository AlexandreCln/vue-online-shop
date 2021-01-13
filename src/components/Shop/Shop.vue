<template>
  <shop-product-list :products="products" class="p-3"></shop-product-list>
</template>

<script>
import ShopProductList from './ShopProductList';
import { eventBus } from '../../main';

export default {
  components: { ShopProductList },
  data(){
    return {
      products: []
    }
  },
  created(){
    this.products = eventBus.products;
    /* eventBus.$on('update:products', (products) => {
      this.products = eventBus.products;
    }) */
  }
}
</script>

<style>

</style>
