<template>
  <header class="bg-gray-800 text-white px-6 py-4">
    <div class="container mx-auto flex justify-between items-center">
      <a href="/" class="text-2xl font-bold">Leo's Portfolio</a>
      <nav>
        <a href="#home" class="text-lg px-2">Home</a>
        <a href="#about" class="text-lg px-2">About</a>
        <a href="#portfolio" class="text-lg px-2">Portfolio</a>
        <a href="#contact" class="text-lg px-2">Contact</a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}
a:hover {
  color: #9cacbf;
}
</style>