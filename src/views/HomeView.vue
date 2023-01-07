<template>
  <section>
  <h1>Title</h1>
  <button class="bg-blue text-white px-4 py-2 m-3 rounded-sm" type="button" @click="addToCart(testItem)">Add to Cart</button>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'NavbarComponent',
  data () {
    return {
      testItem: {
        id: 1,
        name: 'Test Item',
        price: 100.79,
        quantity: 0
      }
    }
  },
  methods: {
    ...mapMutations('cart', ['addToCart'])
  }
}
</script>
