<template>
  <cart-product-list :cart="cart" class="p-3"></cart-product-list>
</template>

<script>
import CartProductList from './CartProductList';

export default {
  components: { CartProductList },
  props: ['cart']
};
</script>

<style>
</style>
