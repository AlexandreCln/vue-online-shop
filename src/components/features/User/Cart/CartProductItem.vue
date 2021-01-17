<template>
  <div class="py-2 d-flex flex-row justify-content-between text-nowrap">
    <div class="toto px-2 w-100 d-flex flex-row justify-content-between text-nowrap flex-wrap">
      <span class="title">{{ item.title }}</span>
      <span><strong>{{ item.price | price }}</strong></span>
    </div>
    <button class="btn-close" @click="removeItemFromCart(item.id)"></button>
  </div>
</template>

<script>

export default {
  props : [ 'item' ],
  methods: {
    removeItemFromCart(payload /* here payload is an id */) {
      // Call deleteOne() from store, without the mapMutations utilitary function
      this.$store.commit('cart/deleteOne', payload);
    }
  }
}
</script>

<style lang="scss" scoped>
  .title {
    color: rgb(45, 120, 182);
  }
</style>
