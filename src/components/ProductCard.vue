<template>
  <article class='w-full ml-4 flex flex-col p-4 drop-shadow-md rounded-lg shadow-md'>
    <img class='w-full rounded-lg mx-auto' :src="item.images" />
    <div class="mt-4">
      <button
        @click="addToCart(item)"
        class='bg-blue-dark text-white px-4 py-2 text-sm rounded-full text-center'>Add +</button>
      <h3 class="pt-2">${{ parseFloat(item.price).toFixed(2) }}</h3>
      <p class="lg:text-sm text-grey-darkest mt-2">{{ item.title }}</p>
    </div>
  </article>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: ['item'],
  methods: {
    ...mapMutations('cart', ['addToCart'])
  }
}
</script>
