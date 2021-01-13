<template>
    <div class="d-flex flex-row">
      <shop class="w-75"></shop>
      <cart class="w-25"></cart>
    </div>
</template>

<script>
import Shop from './Shop/Shop';
import Cart from './Cart/Cart';

export default {
  name: 'user',
  components: {
    Shop,
    Cart
  }  
}
</script>

<style>

</style>