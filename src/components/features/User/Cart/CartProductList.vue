<template>
  <div class="p-5 d-flex flex-column">
    <h5 class="pb-3  border-bottom">Mon Panier</h5>
    <cart-product-item v-for="item in cart" :item="item" :key="item.id"></cart-product-item>
    <template v-if="cart.length">
      <hr class="w-100">
      <span>Total: {{ total }} €</span>
    </template>
  </div>
</template>

<script>
import CartProductItem from './CartProductItem';
import { mapGetters } from 'vuex';

export default {
  components: { CartProductItem },
  props: ['cart'],
  computed: {
    ...mapGetters('cart', ['total'])
  },
};
</script>

<style>

</style>
