<template>
  <article class='no-underline w-full lg:ml-4 flex flex-col p-4 drop-shadow-md rounded-lg shadow-md'>
    <router-link :to="`/products/${item.id}`">
      <img class='w-full rounded-lg mx-auto' :src="item.images" />
    </router-link>
    <div class="mt-4">
      <AddToCartButton :item="item" :title="'Add +'" />
      <h3 class="pt-2 text-black">${{ parseFloat(item.price).toFixed(2) }}</h3>
      <p class="lg:text-sm text-grey-darkest mt-2">{{ item.title }}</p>
    </div>
  </article>
</template>

<script>
import AddToCartButton from './AddToCartButton.vue'

export default {
  props: ['item'],
  components: {
    AddToCartButton
  }
}
</script>
