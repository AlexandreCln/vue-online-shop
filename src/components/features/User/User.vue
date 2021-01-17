<template>
    <div class="d-flex flex-row">
      <transition name="left" appear>
        <shop class="w-75"></shop>
      </transition>
      <transition name="right" appear>
        <cart class="w-25"></cart>
      </transition>
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