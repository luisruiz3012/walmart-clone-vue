<template>
  <div class="productPage">
    <div class="p-6 mb-8">
      <p class="text-sm text-grey-darkest">{{ product.category.name }}</p>
    </div>
    <section class="flex items-center px-4 lg:flex-nowrap">
      <aside class="hidden lg:block">
        <img
          class="w-32 flex flex-direction-col cursor-pointer mb-2"
          :key="image"
          v-for="image in product.images"
          :src="image"
          @mouseenter="selectedImage = image"
        />
      </aside>
      <section class="flex w-full">
        <img class="px-8" :src="selectedImage" alt="">
        <article class="px-4 w-4/5 py-4 border border-gray">
          <div class="flex justify-end mb-8">
            <a-icon :name="$icons.names.favorite_border" class="f-small" />
          </div>
          <p class="mb-2 text-sm text-grey-darkest">{{ product.title }}</p>
          <h3 class="text-xl">{{ product.title }}</h3>
          <p class="mt-4 text-sm text-grey-darkest">(0.0) No reviews yet</p>
          <h2 class="mt-4 text-3xl">${{ parseFloat(product.price).toFixed(2) }}</h2>
          <p class="mt-4 text-sm mb-4">Price when purchased online</p>
          <AddToCartButton :item="product" :title="'Add to cart'" />
          <hr />
          <section class="mt-4">
            <div class="flex items-center py-2 mt-4">
              <a-icon class="mr-2 icon" :name="$icons.names.directions_car" outlined />
              <p class="text-sm text-grey-darkest">Pickup, <b>tomorrow</b> at Sacramento Supercenter</p>
            </div>
            <div class="flex items-center py-2">
              <a-icon class="mr-2 icon" :name="$icons.names.location_on" outlined />
              <p class="text-sm text-grey-dark">Aisle E28</p>
            </div>
            <div class="flex items-center py-2">
              <a-icon class="mr-2 icon" :name="$icons.names.rotate_left" outlined />
              <p class="text-sm text-grey-dark">Free 30-day returns</p>
            </div>
          </section>
        </article>
      </section>
    </section>
    <section class="p-10 mt-8">
      <h3>About this item</h3>
      <hr class="border border-gray mt-6" />
      <article class="p-4">
        <p>Product details</p>
        <p>{{ product.description }}</p>
      </article>
    </section>
  </div>
</template>

<script>
import AddToCartButton from '@/components/AddToCartButton.vue'

export default {
  components: {
    AddToCartButton
  },
  data () {
    return {
      product: {},
      selectedImage: null
    }
  },
  computed: {
    productId () {
      return this.$route.params.id
    }
  },
  async beforeMount () {
    const res = await fetch('https://api.escuelajs.co/api/v1/products/' + this.productId)
    const data = await res.json()
    this.product = data
    this.selectedImage = data.images[0]
  }
}
</script>

<style scoper>
.productPage {
  padding-top: 100px;
  padding-bottom: 100px;
}

.icon {
  font-size: 20px;
}
</style>
