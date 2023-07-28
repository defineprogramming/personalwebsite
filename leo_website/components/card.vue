<template>
  <div class="card max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-8">
    <div class="md:flex">
      <div class="md:flex-shrink-0">
        <img class="h-48 w-full object-cover md:w-48" :src="image" alt="Card image">
      </div>
      <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{{ title }}</div>
        <p class="mt-2 text-gray-500">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.card {
  transition: transform .2s;
}
.card:hover {
  transform: scale(1.02);
}
</style>