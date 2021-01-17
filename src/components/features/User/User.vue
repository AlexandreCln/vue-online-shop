<template>
    <div class="d-flex flex-row">
      <transition name="left" appear>
        <shop class="w-75" :products="products"></shop>
      </transition>
      <transition name="right" appear>
        <cart class="w-25" :cart="cart"></cart>
      </transition>
    </div>
</template>

<script>
import Shop from './Shop/Shop';
import Cart from './Cart/Cart';
import { mapState } from 'vuex';

export default {
  name: 'user',
  components: {
    Shop,
    Cart
  },
  computed: {
    // Pass an object of alias in 2nd parameter
    ...mapState('product', {
      products: 'datas'
    }),
    ...mapState('cart', {
      cart: 'datas'
    })
  },
  created() {
    this.$store.dispatch('product/fetchData');
  }
}
</script>

<style scoped>
  @keyframes fromLeft {
    from {
      transform: translateX(-20px);
    }
    to {}
  }
  @keyframes fromRight {
    from {
      transform: translateX(20px);
    }
    to {}
  }

  .left-enter-active {
    animation : fromLeft .5s;
  }
  .right-enter-active {
    animation : fromRight .5s;
  }
</style>