<template>
  <article class='shadow-lg w-full rounded-lg drop-shadow-lg p-4'>
    <h3 class='m-2 mb-4'>{{ title }}</h3>
    <section class='grid rounded-lg'>
      <div class='w-24 h-24 lg:w-32 lg:h-32 flex items-center justify-center rounded-full bg-yellow'>
        <h3 class='text-center text-md'>Title</h3>
      </div>
      <div class='w-24 h-24 lg:w-32 lg:h-32 flex items-center justify-center rounded-full bg-yellow'>
        <h3 class='text-center text-md'>Title</h3>
      </div>
      <div class='w-24 h-24 lg:w-32 lg:h-32 flex items-center justify-center rounded-full bg-yellow'>
        <h3 class='text-center text-md'>Title</h3>
      </div>
      <div class='w-24 h-24 lg:w-32 lg:h-32 flex items-center justify-center rounded-full bg-yellow'>
        <h3 class='text-center text-md'>Title</h3>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style scoped>
.grid {
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  justify-items: center;
}
</style>
