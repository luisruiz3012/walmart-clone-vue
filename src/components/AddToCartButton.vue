<template>
  <button
    :disabled="disabled"
    @click="addToCart(item), disabled=true"
    :class='buttonStatus'>{{ disabled ? 'Added ' : title }}</button>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: ['item', 'title'],
  data () {
    return {
      disabled: false
    }
  },
  methods: {
    ...mapMutations('cart', ['addToCart'])
  },
  computed: {
    buttonStatus () {
      if (this.disabled === false) {
        return 'bg-blue-dark text-white font-bold px-4 py-3 text-sm rounded-full text-center'
      } else {
        return 'bg-grey text-white px-4 py-2 text-sm rounded-full text-center cursor-default'
      }
    }
  }
}
</script>
