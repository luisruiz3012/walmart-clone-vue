<template>
  <header class='p-6 w-full border-b border-white bg-blue-dark flex items-center'>
    <router-link to="/" class="w-2/5">
      <img class="md:flex lg:flex hidden pl-4" src='//i5.walmartimages.com/dfw/63fd9f59-b3e1/7a569e53-f29a-4c3d-bfaf-6f7a158bfadd/v1/walmartLogo.svg' alt='logo' />
    </router-link>
    <nav class="flex ml-4 items-center">
      <NavItem text="Departments" :icon="$icons.names.grid_view" />
      <NavItem text="Services" :icon="$icons.names.workspaces" />
    </nav>
    <div class="w-full bg-trasparent h-11 flex items-center pr-2 rounded-full search-container">
      <input placeholder="Search Walmart" type="text" class="h-10 w-full pt-1 pl-3 pr-12 rounded-full">
      <button class="bg-yellow p-1 button flex items-center justify-center rounded-full w-9 h-9 ml-2">
        <a-icon :name="$icons.names.search" class="f-small" />
      </button>
    </div>
    <NavItem text="My Items" subtext="Recorder" :icon="$icons.names.favorite_border" />
    <NavItem text="Account" subtext="Sign In" :icon="$icons.names.person_outline" />
    <CartItem />
  </header>
</template>

<script>
import NavItem from './NavItem.vue'
import CartItem from './CartItem.vue'

export default {
  components: {
    NavItem,
    CartItem
  },
  methods: {
    test () {
      console.log('Test')
    }
  }
}
</script>

<style scoped>
header {
  position: fixed;
  z-index: 2;
}
.search-container {
  position: relative;
}
.button {
  position: absolute;
  right: 15px;
}
</style>
