<template>
  <article class="m-2 p-2 border-b border-grey flex items-center w-full">
    <img :src="item.images" class="w-32" />
    <div class="ml-6 w-full">
      <p>{{ item.title }}</p>
      <p class="text-sm text-grey-darkest">${{ item.price }} / ea</p>
      <div class="text-sm flex items-center mt-4 w-full justify-end">
        <div class="flex px-4 items-center">
          <a @click="removeFromCart(item)" class="mx-10 cursor-pointer underline">Remove</a>
          <p class="cursor-pointer underline">Save for later</p>
          <div class="mx-10 flex items-center border border-grey py-2 px-4 rounded-full">
            <p @click="reduceItem(item)" class="hover:bg-grey-dark cursor-pointer rounded-full w-4 h-4 text-center">-</p>
            <p class="px-8">{{ item.quantity }}</p>
            <p @click="addQuantity(item)" class="hover:bg-grey-dark cursor-pointer rounded-full w-4 h-4 text-center">+</p>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  props: ['item'],
  computed: {
    ...mapState('cart', ['cartItems'])
  },
  methods: {
    ...mapMutations('cart', ['removeFromCart', 'reduceQuantity', 'addQuantity']),
    reduceItem (item) {
      if (item.quantity > 1) {
        this.reduceQuantity(item)
      } else {
        this.removeFromCart(item)
      }
    }
  }
}
</script>

<style scoped></style>
