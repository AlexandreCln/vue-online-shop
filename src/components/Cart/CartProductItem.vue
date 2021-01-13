<template>
  <div class="py-2 d-flex flex-row justify-content-between text-nowrap">
    <div class="px-2 w-100 d-flex flex-row justify-content-between text-nowrap flex-wrap">
      <span>{{ item.title }}</span>
      <span><strong>{{ item.price }} €</strong></span>
    </div>
    <button class="btn-close" @click="removeItemFromCart"></button>
  </div>
</template>

<script>
import { eventBus } from '../../main';

export default {
  props : [ 'item' ],
  methods: {
    removeItemFromCart(){
      eventBus.removeItemFromCart({ ...this.item });
    }
  }
}
</script>

<style>

</style>
