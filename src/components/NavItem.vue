<template>
  <a class="cursor-pointer md:hidden lg:flex hidden items-center text-white no-underline pr-6 pl-4 mr-2 text-center1 py-3 rounded-full hover:bg-grey-darkest">
    <a-icon class="mr-1 f-small" :name="icon" sharp />
    <div>
      <p class="font-light subtext">{{ subtext }}</p>
      <p class="text-sm text font-bold w-full">{{ text }}</p>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    text: String,
    subtext: String,
    icon: String
  }
}
</script>

<style scoped>
.a-icon.f-small {
  font-size: 19px;
  padding-top: 3px;
}
.text {
  max-width: 80px;
  min-width: 60px;
}
.subtext {
  font-size: 11px;
}
</style>
