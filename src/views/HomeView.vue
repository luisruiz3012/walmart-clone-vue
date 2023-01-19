<template>
  <main class='main'>
    <section class='mainContainer'>
      <HeroGrid />
      <section class='mt-4 grid w-full'>
        <CategoryCard title='Reset for the new year' />
        <CategoryCard title='Cant-miss savings' />
        <CategoryCard title='Top departments' />
      </section>
      <div class='banner text-white font-bold no-underline my-6 rounded-lg w-full h-12 lg:h-10 text-center pt-3' href="">Members get free shipping with no order minimum! Terms apply</div>
      <section class="gridItems">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :item="product"
        />
      </section>
    </section>
  </main>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import HeroGrid from '@/containers/HeroGrid.vue'
import CategoryCard from '@/components/CategoryCard.vue'
import ProductCard from '@/components/ProductCard.vue'

export default {
  components: {
    HeroGrid,
    CategoryCard,
    ProductCard
  },
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
  computed: {
    ...mapState('products', ['products'])
  },
  methods: {
    ...mapMutations('cart', ['addToCart']),
    ...mapActions('products', ['getProducts'])
  },

  async created () {
    await this.getProducts()
  }
}
</script>

<style scoped>
.main {
  padding-top: 100px;
  background-color: #e6f1fc;
  min-height: 100vh;
}

.mainContainer {
  background: white;
  width: 95%;
  margin-inline: auto;
  min-height: 80vh;
  padding: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  justify-items: center;
}

.gridItems {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  justify-items: center;
}

.banner {
  background-image: url('//i5.walmartimages.com/dfw/63fd9f59-ac39/29c6759d-7f14-49fa-bd3a-b870eb4fb8fb/v1/wplus-bg-dweb.svg');
  background-repeat: no-repeat;
  background-size: cover;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .gridItems {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
    justify-items: center;
  }
}

@media (max-width: 488px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .gridItems {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
    justify-items: center;
  }
}
</style>
