<template>
  <div class='md:flex lg:flex flex items-center justify-center'>
    <PromoImage />
    <div class="hidden lg:flex w-1/3">
      <ProductCard :item="product" />
    </div>
  </div>
</template>

<script>
import PromoImage from '@/components/PromoImage.vue'
import ProductCard from '@/components/ProductCard.vue'

export default {
  components: {
    PromoImage,
    ProductCard
  },
  data () {
    return {
      product: {
        id: 2,
        title: 'Fantastic Wooden Keyboard',
        price: 856,
        description: 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
        images: 'https://api.lorem.space/image?w=640&amp;h=480&amp;r=4663,https://api.lorem.space/image?w=640&amp;h=480&amp;r=2960,https://api.lorem.space/image?w=640&amp;h=480&amp;r=4116'
      }
    }
  }
}
</script>

<style scoped></style>
