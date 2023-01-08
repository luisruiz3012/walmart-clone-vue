<template>
  <article class='container shadow lg:shadow-none rounded-lg '>
    <img class='rounded-lg h-full ' src='https://i5.walmartimages.com/dfw/4ff9c6c9-9f04/k2-_7d8897e5-d661-4b4a-b0fe-acdb29fa7564.v1.jpg?odnHeight=470&odnWidth=1232&odnBg=&odnDynImageQuality=70' />

    <div class='text-wrapper hidden lg:block'>
      <h3 class='text-2xl'>New year, new vibe</h3>
      <p class='text-sm mt-3'>Crush your 2023 goals in <br/>activewear for every budget</p>
      <button class='mt-6 text-sm border border-black px-4 py-2 rounded-full bg-white'>Shop now</button>
    </div>
    <div class='lg:hidden mt-4 p-4 pb-8'>
      <h3 class='text-2xl'>New year, new vibe</h3>
      <p class='text-sm mt-3'>Crush your 2023 goals in activewear for every budget</p>
      <button class='mt-6 text-sm border border-black px-4 py-2 rounded-full'>Shop now</button>
    </div>
  </article>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style scoped>
.container {
  position: relative;
  min-height: 360px;
}

img {
  height: 370px;
}

.text-wrapper {
  position: absolute;
  top: 10%;
  left: 3%
}

@media (max-width: 488px) {
  .container {
    min-height: 300px;
  }

  img {
    height: 150px;
  }
}
</style>
