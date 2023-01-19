<template>
  <section class="cartPage">
    <article v-if="cartItems.length > 0" class="p-12">
      <h2>Cart <b class="text-grey-darkest font-light">({{ totalItems }} items)</b></h2>

      <div class="mt-10 w-full bg-blue-lighter rounded-lg h-24 flex items-center px-6">
        <img src="//i5.walmartimages.com/dfw/63fd9f59-1b5e/5452ae02-a31f-4ef1-9a45-62ac0b06c13b/v1/mci-shipping.svg" />
        <div class="ml-6">
          <h3 class="text-sm lg:text-lg md:text-lg">Pickup, tomorrow at 10:30 AM CST</h3>
          <p class="mt-2 text-grey-darkest text-sm lg:text-lg md:text-lg">6890</p>
        </div>
      </div>

      <div v-if="cartItems.length > 0">
        <ItemOnCart
          v-for="(item, i) in cartItems"
          :item="item"
          :key="i"
        />
      </div>
    </article>
    <section v-else class="w-full h-full flex items-center flex-col mt-24">
      <h2 class="text-lg md:text-xl lg:text-xl">There are no items on your cart</h2>
      <router-link class="text-sm no-underline text-white bg-blue p-4 rounded-full mt-4" :to="'/'">Let's add some</router-link>
    </section>
  </section>
</template>

<script>
import ItemOnCart from '@/components/ItemOnCart.vue'
import { mapGetters, mapState } from 'vuex'
export default {
  computed: {
    ...mapGetters('cart', ['totalItems']),
    ...mapState('cart', ['cartItems'])
  },
  components: { ItemOnCart }
}
</script>

<style scoped>
  .cartPage {
    padding-top: 100px;
  }
</style>
