<template>
  <router-link :to="'/cart'" class="cursor-pointer cartContainer text-white no-underline px-6 mr-2 text-center1 py-6 rounded-full hover:bg-grey-darkest">
    <div class="totalItems subtext text-black bg-yellow w-4 h-4 text-center pt-1 rounded-full">
      {{ totalItems }}
    </div>
    <div class="totalContainer">
      <a-icon class="f-small" :name="$icons.names.shopping_cart" outlined />
      <p class="font-light flex items-center justify-center subtext">
        ${{ formatPrice(totalAmount) }}
      </p>
    </div>
  </router-link>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('cart', ['totalAmount', 'totalItems'])
  },
  methods: {
    formatPrice (value) {
      const val = (value / 1).toFixed(2).replace(',', '.')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }
  }
}
</script>

<style scoped>
.subtext {
  font-size: 9px;
}
.cartContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.totalContainer {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
}
.totalItems {
  position: absolute;
  right: 9px;
  bottom: 32px;
  z-index: 1;
}
</style>
